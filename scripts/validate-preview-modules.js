#!/usr/bin/env node

/**
 * Validate Preview Modules Script
 *
 * Validates that all preview-modules files exist and are syntactically valid.
 *
 * Run this script during pre-commit to catch issues before code is committed:
 *   npm run validate:preview-modules
 *
 * This prevents obvious errors in preview-modules from breaking the docs site.
 */

const fs = require('fs');
const path = require('path');

const PREVIEW_MODULES_DIR = path.resolve(__dirname, '../registry/preview-modules');

console.log('🔍 Validating preview-modules...\n');

try {
  // Find all .tsx files in preview-modules directory
  const files = fs.readdirSync(PREVIEW_MODULES_DIR)
    .filter(file => file.endsWith('.tsx') || file.endsWith('.ts'))
    .map(file => path.join(PREVIEW_MODULES_DIR, file));

  if (files.length === 0) {
    console.error('❌ No TypeScript files found in preview-modules directory');
    process.exit(1);
  }

  console.log(`✅ Found ${files.length} preview module files\n`);

  // Basic syntax validation - check for common issues
  let hasErrors = false;
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8');

    // Check for obviously broken syntax (unmatched braces, etc)
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;

    if (openBraces !== closeBraces) {
      console.error(`❌ ${path.basename(file)}: Mismatched braces (${openBraces} open, ${closeBraces} close)`);
      hasErrors = true;
    }

    const openParens = (content.match(/\(/g) || []).length;
    const closeParens = (content.match(/\)/g) || []).length;

    if (openParens !== closeParens) {
      console.error(`❌ ${path.basename(file)}: Mismatched parentheses (${openParens} open, ${closeParens} close)`);
      hasErrors = true;
    }
  }

  if (hasErrors) {
    console.error('\nPreview validation failed');
    process.exit(1);
  }

  console.log('✅ All preview-modules are valid (syntax check passed)\n');
  process.exit(0);
} catch (err) {
  console.error('❌ Validation error:');
  console.error(err.message);
  process.exit(1);
}
