#!/usr/bin/env node

/**
 * Batch fix for preview modules: Convert inline render functions to proper React components
 * This fixes React Hooks violations by extracting render functions into named components
 */

const fs = require('fs');
const path = require('path');

const PREVIEW_DIR = path.join(__dirname, '..', 'registry', 'preview-modules');

// Files that have already been fixed
const FIXED_FILES = new Set([
  'activity-feed.tsx',
  'alert-dialog.tsx',
  'calendar.tsx',
  'checkbox.tsx',
  'collapsible.tsx',
  'combobox.tsx',
  'chat.tsx',
  'modal.tsx',
  'chat-section.tsx',
  'chip.tsx',
  'command-bar.tsx',
  'date-picker.tsx',
  'drawer.tsx',
  'dropdown.tsx',
  'slider.tsx',
  'toggle.tsx',
  'radio.tsx',
]);

function transformPreviewModule(content, filename) {
  // Find the previews array
  const previewsMatch = content.match(/export const previews = \[([\s\S]*?)\];/);
  if (!previewsMatch) {
    console.log(`⚠️  No previews array found in ${filename}`);
    return null;
  }

  const previewsContent = previewsMatch[1];

  // Extract all render function definitions
  const renderMatches = [...previewsContent.matchAll(/render:\s*\(\)\s*=>\s*({[\s\S]*?^  },?|[^,\n}]*)/gm)];

  if (renderMatches.length === 0) {
    console.log(`✅ No inline render functions to fix in ${filename}`);
    return null;
  }

  // Count how many inline renders we have
  let componentCount = 0;
  let transformedContent = content;
  const componentDeclarations = [];

  // Find where to insert component declarations (before the previews array)
  const insertPoint = content.lastIndexOf('export const previews');

  // Process each inline render function
  previewsContent.split('\n  {\n').forEach((section, idx) => {
    if (!section.includes('render:')) return;

    // Extract render function
    const renderMatch = section.match(/render:\s*\(\)\s*=>\s*([\s\S]*?)(?=,\n    title:|,\n  \}|\];)/);
    if (!renderMatch) return;

    componentCount++;
    const functionBody = renderMatch[1].trim();

    // Determine if this is a simple arrow function returning JSX or a block
    const isBlock = functionBody.startsWith('{');
    const componentName = `Preview${componentCount}`;

    // Create component declaration
    let componentDeclaration;
    if (isBlock) {
      // Extract the body content (remove outer braces)
      const bodyContent = functionBody.slice(1, -1).trim();
      componentDeclaration = `const ${componentName} = () => {\n${bodyContent}\n};`;
    } else {
      componentDeclaration = `const ${componentName} = () => ${functionBody};`;
    }

    componentDeclarations.push({ name: componentName, declaration: componentDeclaration });
  });

  if (componentDeclarations.length === 0) {
    return null;
  }

  // Build the new file content
  let newContent = content;

  // Insert component declarations before previews array
  const allDeclarations = componentDeclarations.map(c => c.declaration).join('\n\n');
  newContent = newContent.slice(0, insertPoint) +
              allDeclarations +
              '\n\n' +
              newContent.slice(insertPoint);

  // Replace inline render functions with component references
  componentDeclarations.forEach((comp, idx) => {
    const pattern = new RegExp(`render:\\s*\\(\\)\\s*=>\\s*([\\s\\S]*?)(?=,\\n\\s*title:|,\\n\\s*\\}|\\];)`);
    const replacement = `render: ${comp.name}`;
    newContent = newContent.replace(pattern, replacement);
  });

  return newContent;
}

async function fixAllFiles() {
  const files = fs.readdirSync(PREVIEW_DIR).filter(f => f.endsWith('.tsx'));

  let fixed = 0;
  let skipped = 0;
  let errors = 0;

  for (const file of files) {
    if (FIXED_FILES.has(file)) {
      console.log(`⏭️  Skipped (already fixed): ${file}`);
      skipped++;
      continue;
    }

    const filePath = path.join(PREVIEW_DIR, file);

    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const transformed = transformPreviewModule(content, file);

      if (transformed) {
        fs.writeFileSync(filePath, transformed);
        console.log(`✅ Fixed: ${file}`);
        fixed++;
      } else {
        console.log(`⏭️  Skipped (no changes needed): ${file}`);
        skipped++;
      }
    } catch (err) {
      console.error(`❌ Error processing ${file}: ${err.message}`);
      errors++;
    }
  }

  console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  console.log(`✅ Fixed: ${fixed}`);
  console.log(`⏭️  Already fixed or no changes: ${skipped}`);
  console.log(`❌ Errors: ${errors}`);
  console.log(`Total: ${files.length}`);
}

fixAllFiles();
