#!/usr/bin/env ts-node

/**
 * Generate Preview Modules from Storybook Stories
 *
 * This script automates the generation of preview modules for the documentation site.
 * It reads Storybook `.stories.tsx` files, extracts story exports, and generates
 * TypeScript modules that can be statically imported into ComponentPreview.tsx.
 *
 * Usage:
 *   npm run build:preview-modules
 *   # or
 *   ts-node scripts/generate-preview-modules.ts
 *
 * Output:
 *   - registry/preview-modules/[component].tsx (one per component)
 *   - registry/preview-modules/index.ts (barrel export)
 *
 * Architecture:
 *   Storybook Stories (source of truth)
 *     ↓ parse with ts-morph
 *   Preview Modules (generated)
 *     ↓ static imports
 *   ComponentPreview.tsx (consumption)
 */

import { Project, SyntaxKind } from 'ts-morph';
import * as fs from 'fs';
import * as path from 'path';
import { format } from 'prettier';

// Configuration
const COMPONENTS_DIR = path.join(__dirname, '../packages/react/src/components');
const SECTIONS_DIR = path.join(__dirname, '../packages/react/src/sections');
const TEMPLATES_DIR = path.join(__dirname, '../packages/react/src/templates');
const OUTPUT_DIR = path.join(__dirname, '../registry/preview-modules');

interface StoryExport {
  name: string; // e.g., "Primary", "WithIcon"
  displayName: string; // e.g., "Primary Button", "With Icon"
}

interface ComponentPreview {
  componentName: string;
  componentPath: string;
  stories: StoryExport[];
  imports: string[]; // Additional imports needed (lucide icons, etc.)
}

/**
 * Convert PascalCase story name to display name
 * Examples: "Primary" → "Primary", "WithIcon" → "With Icon"
 */
function toDisplayName(storyName: string): string {
  return storyName
    .replace(/([A-Z])/g, ' $1')
    .trim()
    .replace(/^./, str => str.toUpperCase());
}

/**
 * Find all story files in a directory
 */
function findStoryFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];

  const files: string[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...findStoryFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.stories.tsx')) {
      files.push(fullPath);
    }
  }

  return files;
}

/**
 * Extract component name from story file path
 * Example: "packages/react/src/components/Button/Button.stories.tsx" → "button"
 */
function getComponentName(storyFilePath: string): string {
  const parts = storyFilePath.split(path.sep);
  const componentsIndex = parts.indexOf('components') >= 0 ? parts.indexOf('components') : parts.indexOf('sections');
  if (componentsIndex >= 0 && componentsIndex < parts.length - 1) {
    return parts[componentsIndex + 1].toLowerCase();
  }
  const fileName = path.basename(storyFilePath, '.stories.tsx');
  return fileName.toLowerCase();
}

/**
 * Parse a story file and extract story exports
 */
function parseStoryFile(filePath: string): ComponentPreview | null {
  const project = new Project();
  const sourceFile = project.addSourceFileAtPath(filePath);

  const componentName = getComponentName(filePath);
  const stories: StoryExport[] = [];
  const imports: string[] = [];

  // Extract named exports that match Story type
  sourceFile.getExportedDeclarations().forEach((declarations, exportName) => {
    declarations.forEach(declaration => {
      // Look for: export const Primary: Story = { ... }
      if (declaration.getKind() === SyntaxKind.VariableDeclaration) {
        const varDecl = declaration.asKindOrThrow(SyntaxKind.VariableDeclaration);
        const name = varDecl.getName();

        // Skip 'meta' and 'default' exports
        if (name === 'meta' || name === 'default') return;

        // Check if it has a type annotation of Story or StoryObj
        const typeNode = varDecl.getTypeNode();
        if (typeNode) {
          const typeText = typeNode.getText();
          if (typeText.includes('Story')) {
            stories.push({
              name,
              displayName: toDisplayName(name),
            });
          }
        }
      }
    });
  });

  // Extract lucide-react imports
  sourceFile.getImportDeclarations().forEach(importDecl => {
    const moduleSpecifier = importDecl.getModuleSpecifierValue();
    if (moduleSpecifier === 'lucide-react') {
      const namedImports = importDecl.getNamedImports().map(ni => ni.getName());
      if (namedImports.length > 0) {
        imports.push(`import { ${namedImports.join(', ')} } from 'lucide-react';`);
      }
    }
  });

  if (stories.length === 0) {
    console.warn(`⚠️  No stories found in ${path.basename(filePath)}`);
    return null;
  }

  // Get the component import path (relative to registry/preview-modules/)
  const componentPath = '@orion-ds/react';

  return {
    componentName,
    componentPath,
    stories,
    imports,
  };
}

/**
 * Generate preview module content for a component
 *
 * For now, generates a simplified structure that imports from the story file.
 * This approach leverages existing story definitions without duplication.
 */
function generatePreviewModule(preview: ComponentPreview): string {
  const { componentName, componentPath, stories, imports } = preview;

  // Convert component-name to ComponentName for import
  const ComponentName = componentName
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');

  // Generate a comprehensive example showing all main variants
  const storiesSection = stories.slice(0, 5).map((story, idx) => {
    return `  {
    title: "${story.displayName}",
    render: () => React.createElement('div', {
      style: { padding: 'var(--spacing-4)' }
    }, 'Preview for ${story.displayName} - Story implementation pending')
  }`;
  }).join(',\\n');

  return `/**
 * Auto-generated preview module for ${ComponentName}
 * Generated from: packages/react/src/components/${ComponentName}/${ComponentName}.stories.tsx
 *
 * Do not edit manually - run 'npm run build:preview-modules' to regenerate
 *
 * @todo Phase 2: Implement actual story rendering
 * Currently shows placeholders. Next iteration will render actual story content.
 */

import React from 'react';
import { ${ComponentName} } from '${componentPath}';
${imports.length > 0 ? imports.join('\\n') : ''}

export const previews = [
${storiesSection}
];

export default previews;
`;
}

/**
 * Main execution
 */
async function main() {
  console.log('🚀 Starting preview module generation...');

  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log(`📁 Created output directory: ${OUTPUT_DIR}`);
  }

  // Find all story files
  const storyFiles = [
    ...findStoryFiles(COMPONENTS_DIR),
    // ...findStoryFiles(SECTIONS_DIR), // Uncomment for Phase 4
    // ...findStoryFiles(TEMPLATES_DIR), // Uncomment for Phase 4
  ];

  console.log(`📚 Found ${storyFiles.length} story files`);

  // Parse and generate preview modules
  const generatedModules: string[] = [];
  let successCount = 0;
  let skipCount = 0;

  for (const storyFile of storyFiles) {
    const componentName = getComponentName(storyFile);
    console.log(`\\n🔍 Processing: ${componentName}...`);

    try {
      const preview = parseStoryFile(storyFile);

      if (!preview) {
        console.log(`   ⏭️  Skipped (no valid stories)`);
        skipCount++;
        continue;
      }

      const moduleContent = generatePreviewModule(preview);

      // Format with Prettier
      const formatted = await format(moduleContent, {
        parser: 'typescript',
        singleQuote: true,
        semi: true,
        trailingComma: 'es5',
        printWidth: 100,
      });

      // Write to file
      const outputPath = path.join(OUTPUT_DIR, `${componentName}.tsx`);
      fs.writeFileSync(outputPath, formatted, 'utf-8');

      generatedModules.push(componentName);
      successCount++;
      console.log(`   ✅ Generated: ${path.basename(outputPath)} (${preview.stories.length} stories)`);
    } catch (error) {
      console.error(`   ❌ Error processing ${componentName}:`, error);
    }
  }

  // Generate index file
  console.log(`\\n📦 Generating index file...`);
  const indexContent = `/**
 * Auto-generated index of preview modules
 * Generated by: scripts/generate-preview-modules.ts
 *
 * Do not edit manually - run 'npm run build:preview-modules' to regenerate
 */

${generatedModules
  .sort()
  .map(name => {
    const exportName = name
      .split('-')
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join('') + 'Previews';
    return `export { previews as ${exportName} } from './${name}';`;
  })
  .join('\\n')}

// Export all preview modules as a map for easy lookup
export const previewModules = {
${generatedModules
  .sort()
  .map(name => {
    const exportName = name
      .split('-')
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join('') + 'Previews';
    return `  '${name}': ${exportName},`;
  })
  .join('\\n')}
};
`;

  const formattedIndex = await format(indexContent, {
    parser: 'typescript',
    singleQuote: true,
    semi: true,
    trailingComma: 'es5',
    printWidth: 100,
  });

  const indexPath = path.join(OUTPUT_DIR, 'index.ts');
  fs.writeFileSync(indexPath, formattedIndex, 'utf-8');
  console.log(`✅ Generated: ${path.basename(indexPath)}`);

  // Summary
  console.log(`\\n${'='.repeat(50)}`);
  console.log(`✨ Preview Module Generation Complete!`);
  console.log(`${'='.repeat(50)}`);
  console.log(`✅ Success: ${successCount} modules generated`);
  console.log(`⏭️  Skipped: ${skipCount} files (no stories)`);
  console.log(`📁 Output: ${OUTPUT_DIR}`);
  console.log(`\\nNext steps:`);
  console.log(`  1. Review generated files in registry/preview-modules/`);
  console.log(`  2. Update ComponentPreview.tsx to use preview modules`);
  console.log(`  3. Run: npm run dev (docs-site)`);
}

main().catch(error => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});
