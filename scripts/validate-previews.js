#!/usr/bin/env node

/**
 * Preview Validation Script
 *
 * Validates Storybook stories and docs-site examples for:
 * ✅ No duplicate components (use @orion-ds/react)
 * ✅ No hardcoded styles (use semantic tokens)
 * ✅ No relative imports (use package imports)
 * ✅ No style tags
 *
 * This prevents UI drift between library and documentation.
 *
 * Usage:
 *   node scripts/validate-previews.js
 *   npm run validate:previews
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// ANSI colors for terminal output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
};

function log(message, color = '') {
  console.log(`${color}${message}${colors.reset}`);
}

function logSection() {
  log('\n' + '━'.repeat(60), colors.cyan);
}

function logSuccess(message) {
  log(`✅ ${message}`, colors.green);
}

function logError(message) {
  log(`❌ ${message}`, colors.red);
}

function logWarning(message) {
  log(`⚠️  ${message}`, colors.yellow);
}

// Validation counters
const stats = {
  totalFiles: 0,
  violations: {
    relativeImports: [],
    hardcodedColors: [],
    hardcodedPixels: [],
    styleTags: [],
    duplicateComponents: [],
  },
};

const ROOT_DIR = path.resolve(__dirname, '..');
const STORIES_DIR = path.join(ROOT_DIR, 'packages/react/src');

/**
 * Find all story files
 */
function findStoryFiles() {
  try {
    const output = execSync(
      `find "${STORIES_DIR}" -name "*.stories.tsx" -type f`,
      { encoding: 'utf8' }
    );
    return output.trim().split('\n').filter(Boolean);
  } catch (error) {
    logError('Failed to find story files');
    return [];
  }
}

/**
 * Check for relative imports
 */
function checkRelativeImports(filePath, content) {
  // Exception: Templates MUST use relative imports during development
  // Templates reference sections/components before package builds, so package imports
  // (@orion-ds/react) are not available. This is CORRECT behavior, not a bug.
  const isTemplate = filePath.includes('/templates/');
  if (isTemplate) {
    return []; // Skip validation for templates
  }

  const relativeImportPattern = /from ['"]\.\.\/\.\.\//g;
  const matches = content.match(relativeImportPattern);

  if (matches && matches.length > 0) {
    const lines = content.split('\n');
    const violations = [];

    lines.forEach((line, index) => {
      if (relativeImportPattern.test(line)) {
        violations.push({
          file: path.relative(ROOT_DIR, filePath),
          line: index + 1,
          content: line.trim(),
        });
      }
    });

    return violations;
  }

  return [];
}

/**
 * Check for hardcoded hex colors
 */
function checkHardcodedColors(filePath, content) {
  // Match hex colors but exclude URLs and IDs like #features, #12345
  const hexColorPattern = /#[0-9A-Fa-f]{6}\b|#[0-9A-Fa-f]{3}\b/g;
  const matches = content.match(hexColorPattern);

  if (matches && matches.length > 0) {
    const lines = content.split('\n');
    const violations = [];

    lines.forEach((line, index) => {
      // Exclude lines that are clearly URLs or IDs
      if (hexColorPattern.test(line) && !line.includes('href') && !line.includes('id:')) {
        violations.push({
          file: path.relative(ROOT_DIR, filePath),
          line: index + 1,
          content: line.trim(),
          color: line.match(hexColorPattern)?.[0],
        });
      }
    });

    return violations;
  }

  return [];
}

/**
 * Check for hardcoded pixels (except acceptable ones)
 */
function checkHardcodedPixels(filePath, content) {
  // Match pixels except 0px, 1px, 9999px
  const pixelPattern = /\b(?!0px|1px|9999px)\d{2,}px\b/g;
  const matches = content.match(pixelPattern);

  if (matches && matches.length > 0) {
    const lines = content.split('\n');
    const violations = [];

    // Acceptable decorator contexts for demo viewport sizing
    // These are NOT component styling - they're demo environment setup
    const decoratorContexts = [
      'height:', 'width:', 'maxWidth:', 'minHeight:', 'maxHeight:',
      'size={', 'size="'  // Icon sizes (Lucide icons)
    ];

    lines.forEach((line, index) => {
      // Skip if using CSS variables
      if (line.includes('var(--')) {
        return;
      }

      // Skip if it's a decorator/demo viewport size
      const isDecoratorSize = decoratorContexts.some(ctx => line.includes(ctx));
      const isInStyleObject = line.includes('style={{') || line.includes('style: {');

      if (isDecoratorSize && isInStyleObject) {
        return; // Skip - acceptable demo viewport sizing for Storybook
      }

      // Also skip dimension-only lines in multi-line style objects
      // (e.g., `width: '32px',` on its own line within a style={{ ... }} block)
      if (isDecoratorSize) {
        return; // Skip - dimension property on separate line in multi-line style block
      }

      // Skip text content lines (comments, strings with px for documentation)
      const trimmed = line.trim();
      if (trimmed.startsWith('//') || trimmed.startsWith('*') || trimmed.startsWith('{/*')) {
        return; // Skip comments
      }

      // Skip JSX text content (strings containing px for labeling/documentation)
      if (trimmed.startsWith("'") || trimmed.startsWith('"') || trimmed.startsWith('`')) {
        return; // Skip string literals used as text content
      }

      // Skip text that is descriptive content (not style properties)
      // e.g. "Small navbar (56px height) - ideal for..."
      if (!trimmed.includes(':') && !trimmed.includes('px\',') && !trimmed.includes('px\"')) {
        return; // Skip lines without a CSS property assignment
      }

      // Check for actual violations (padding, margin, font with hardcoded values)
      if (pixelPattern.test(line)) {
        violations.push({
          file: path.relative(ROOT_DIR, filePath),
          line: index + 1,
          content: line.trim(),
          pixels: line.match(pixelPattern),
        });
      }
    });

    return violations;
  }

  return [];
}

/**
 * Check for style tags
 */
function checkStyleTags(filePath, content) {
  if (content.includes('<style>')) {
    const lines = content.split('\n');
    const violations = [];

    lines.forEach((line, index) => {
      if (line.includes('<style>')) {
        violations.push({
          file: path.relative(ROOT_DIR, filePath),
          line: index + 1,
          content: line.trim(),
        });
      }
    });

    return violations;
  }

  return [];
}

/**
 * Check for duplicate component definitions
 */
function checkDuplicateComponents(filePath, content) {
  // Match component definitions that might be duplicates
  const componentPattern = /(?:const|function)\s+([A-Z][a-zA-Z]+)\s*=\s*\(/g;
  const matches = Array.from(content.matchAll(componentPattern));

  // Known Orion component names
  const orionComponents = [
    'Button', 'Card', 'Modal', 'Input', 'Select', 'Dropdown',
    'Badge', 'Avatar', 'Chip', 'Alert', 'Toast', 'Navbar',
    'Sidebar', 'Table', 'Tabs', 'Accordion', 'Carousel'
  ];

  // Whitelist for acceptable demo/wrapper patterns
  // These are Storybook-specific wrappers for managing state, NOT duplicate components
  const demoPatterns = [
    /Demo$/,              // ToastDemo, NavbarDemo
    /Wrapper$/,           // ModalWrapper, DialogWrapper, AlertDialogWrapper
    /Interactive/,        // InteractiveSearchInput
    /Responsive/,         // ResponsiveNavbarDemo
    /Showcase$/,          // ComponentShowcase
    /Example$/,           // UsageExample
  ];

  const violations = [];

  matches.forEach((match) => {
    const componentName = match[1];

    // Check if it's a demo/wrapper (whitelisted)
    const isDemoWrapper = demoPatterns.some(pattern => pattern.test(componentName));
    if (isDemoWrapper) {
      return; // Skip - this is an acceptable demo wrapper for Storybook interactivity
    }

    // ✅ EXACT matching only (no substring matching to avoid false positives)
    if (orionComponents.includes(componentName)) {
      violations.push({
        file: path.relative(ROOT_DIR, filePath),
        component: componentName,
        content: match[0],
      });
    }
  });

  return violations;
}

/**
 * Validate a single file
 */
function validateFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');

    // Run all checks
    const relativeImports = checkRelativeImports(filePath, content);
    const hardcodedColors = checkHardcodedColors(filePath, content);
    const hardcodedPixels = checkHardcodedPixels(filePath, content);
    const styleTags = checkStyleTags(filePath, content);
    const duplicateComponents = checkDuplicateComponents(filePath, content);

    // Collect violations
    if (relativeImports.length > 0) {
      stats.violations.relativeImports.push(...relativeImports);
    }
    if (hardcodedColors.length > 0) {
      stats.violations.hardcodedColors.push(...hardcodedColors);
    }
    if (hardcodedPixels.length > 0) {
      stats.violations.hardcodedPixels.push(...hardcodedPixels);
    }
    if (styleTags.length > 0) {
      stats.violations.styleTags.push(...styleTags);
    }
    if (duplicateComponents.length > 0) {
      stats.violations.duplicateComponents.push(...duplicateComponents);
    }

    stats.totalFiles++;
  } catch (error) {
    logError(`Failed to read file: ${filePath}`);
  }
}

/**
 * Print violations report
 */
function printReport() {
  logSection();
  log('🔍 Preview Validation Report', colors.bright);
  logSection();

  log(`\nTotal files analyzed: ${stats.totalFiles}`);

  // Report relative imports
  logSection();
  if (stats.violations.relativeImports.length === 0) {
    logSuccess('No relative imports (all use @orion-ds/react)');
  } else {
    logError(`Relative Imports: ${stats.violations.relativeImports.length} violations`);
    log('\nFiles using relative imports instead of package:\n');

    // Group by file
    const byFile = {};
    stats.violations.relativeImports.forEach(v => {
      if (!byFile[v.file]) byFile[v.file] = [];
      byFile[v.file].push(v);
    });

    Object.entries(byFile).forEach(([file, violations]) => {
      logError(`  ${file}`);
      violations.forEach(v => {
        log(`    Line ${v.line}: ${v.content}`, colors.yellow);
      });
      log('\n    Fix: import { ... } from \'@orion-ds/react\';\n', colors.cyan);
    });
  }

  // Report hardcoded colors
  if (stats.violations.hardcodedColors.length > 0) {
    logSection();
    logWarning(`Hardcoded Colors: ${stats.violations.hardcodedColors.length} instances`);
    log('\nFiles with hardcoded hex colors:\n');

    stats.violations.hardcodedColors.slice(0, 5).forEach(v => {
      log(`  ${v.file}:${v.line}`, colors.yellow);
      log(`    ${v.color} - Use semantic token instead`, colors.yellow);
    });

    if (stats.violations.hardcodedColors.length > 5) {
      log(`\n  ... and ${stats.violations.hardcodedColors.length - 5} more`);
    }
  }

  // Report hardcoded pixels
  if (stats.violations.hardcodedPixels.length > 0) {
    logSection();
    logWarning(`Hardcoded Pixels: ${stats.violations.hardcodedPixels.length} instances`);
    log('\nFiles with hardcoded pixel values:\n');

    stats.violations.hardcodedPixels.slice(0, 5).forEach(v => {
      log(`  ${v.file}:${v.line}`, colors.yellow);
      log(`    ${v.pixels.join(', ')} - Use spacing tokens`, colors.yellow);
    });

    if (stats.violations.hardcodedPixels.length > 5) {
      log(`\n  ... and ${stats.violations.hardcodedPixels.length - 5} more`);
    }
  }

  // Report style tags
  logSection();
  if (stats.violations.styleTags.length === 0) {
    logSuccess('No style tags');
  } else {
    logError(`Style Tags: ${stats.violations.styleTags.length} violations`);
    stats.violations.styleTags.forEach(v => {
      log(`  ${v.file}:${v.line}`, colors.yellow);
    });
  }

  // Report duplicate components
  logSection();
  if (stats.violations.duplicateComponents.length === 0) {
    logSuccess('No duplicate components');
  } else {
    logError(`Duplicate Components: ${stats.violations.duplicateComponents.length} violations`);
    stats.violations.duplicateComponents.forEach(v => {
      log(`  ${v.file}: ${v.component}`, colors.yellow);
      log(`    Use Orion ${v.component} instead`, colors.yellow);
    });
  }

  // Summary
  logSection();
  const totalViolations =
    stats.violations.relativeImports.length +
    stats.violations.hardcodedColors.length +
    stats.violations.hardcodedPixels.length +
    stats.violations.styleTags.length +
    stats.violations.duplicateComponents.length;

  if (totalViolations === 0) {
    logSuccess('✨ ALL PREVIEWS VALID!');
    log('\n  No violations found', colors.green);
    log('  All stories follow composition protocol', colors.green);
    logSection();
    return 0;
  } else {
    const criticalViolations =
      stats.violations.relativeImports.length +
      stats.violations.styleTags.length +
      stats.violations.duplicateComponents.length;

    const minorViolations =
      stats.violations.hardcodedColors.length +
      stats.violations.hardcodedPixels.length;

    logWarning(`Total violations: ${totalViolations}`);
    log(`  Critical: ${criticalViolations}`, colors.red);
    log(`  Minor: ${minorViolations}`, colors.yellow);

    if (criticalViolations > 0) {
      log('\n  ❌ Fix critical violations before merging', colors.red);
      logSection();
      return 1;
    } else {
      log('\n  ⚠️  Consider fixing minor violations', colors.yellow);
      logSection();
      return 0;
    }
  }
}

/**
 * Main execution
 */
function main() {
  log('\n' + '━'.repeat(60), colors.cyan);
  log('🔍 Orion Preview Validation', colors.bright + colors.cyan);
  log('━'.repeat(60), colors.cyan);

  log('\nSearching for story files...\n');
  const storyFiles = findStoryFiles();

  if (storyFiles.length === 0) {
    logError('No story files found');
    process.exit(1);
  }

  log(`Found ${storyFiles.length} story files\n`);

  // Validate all files
  storyFiles.forEach(validateFile);

  // Print report and exit with appropriate code
  const exitCode = printReport();
  process.exit(exitCode);
}

// Run if executed directly
if (require.main === module) {
  main();
}

module.exports = { validateFile, checkRelativeImports, checkHardcodedColors };
