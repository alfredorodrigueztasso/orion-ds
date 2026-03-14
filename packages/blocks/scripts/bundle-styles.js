/**
 * bundle-styles.js — Copy blocks CSS from @orion-ds/react
 *
 * Since @orion-ds/blocks is now deprecated and re-exports from @orion-ds/react,
 * this script copies the blocks CSS from @orion-ds/react/dist/blocks.css
 * to maintain backward compatibility for @orion-ds/blocks/styles.css imports.
 *
 * This runs AFTER @orion-ds/react builds (Turbo ensures build order).
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const reactBlocksCss = resolve(__dirname, '../../react/dist/blocks.css');
const output = resolve(__dirname, '../dist/styles.css');

if (!existsSync(reactBlocksCss)) {
  console.error(
    'ERROR: @orion-ds/react/dist/blocks.css not found.\n' +
    'This means @orion-ds/react must be built first.\n' +
    '\n' +
    'Run: npm run build:packages'
  );
  process.exit(1);
}

try {
  const blocksCss = readFileSync(reactBlocksCss, 'utf-8');
  
  const header = `/**
 * @deprecated This package is deprecated. Use @orion-ds/react/blocks instead.
 *
 * @orion-ds/blocks/styles.css — Blocks CSS (Deprecated)
 *
 * This CSS is re-exported from @orion-ds/react/dist/blocks.css
 * for backward compatibility only.
 *
 * NEW: import '@orion-ds/react/blocks.css'
 */

`;

  const combined = header + blocksCss;
  writeFileSync(output, combined, 'utf-8');

  const sizeKB = (combined.length / 1024).toFixed(1);
  console.log(`✓ Copied blocks CSS from @orion-ds/react (${sizeKB}KB)`);
} catch (error) {
  console.error('ERROR: Failed to copy blocks CSS:', error.message);
  process.exit(1);
}
