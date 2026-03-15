#!/usr/bin/env node

/**
 * Verify that all declared subpath exports in package.json exist in dist/
 * This prevents broken imports when new entry points are added.
 *
 * Exit codes:
 *   0 - All exports are valid
 *   1 - One or more exports are missing in dist/
 */

import { existsSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { readFileSync } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = dirname(__dirname);
const pkgPath = join(rootDir, "packages/react/package.json");

if (!existsSync(pkgPath)) {
  console.error("❌ package.json not found at:", pkgPath);
  process.exit(1);
}

const pkg = JSON.parse(readFileSync(pkgPath, "utf-8"));
const exports = pkg.exports || {};
let hasErrors = false;

console.log("🔍 Verifying @orion-ds/react export paths...\n");

for (const [exportPath, config] of Object.entries(exports)) {
  // Skip CSS-only exports
  if (exportPath.endsWith(".css")) {
    const distPath = join(rootDir, "packages/react", config);
    if (!existsSync(distPath)) {
      console.error(`  ❌ ${exportPath} → ${distPath} (NOT FOUND)`);
      hasErrors = true;
    } else {
      console.log(`  ✅ ${exportPath}`);
    }
    continue;
  }

  // Handle conditional exports (types, import, require)
  if (typeof config === "object") {
    const importPath = config.import || config.require || config.types;
    if (!importPath) {
      console.error(`  ❌ ${exportPath} → no import/require/types field`);
      hasErrors = true;
      continue;
    }
    const distPath = join(rootDir, "packages/react", importPath);
    if (!existsSync(distPath)) {
      console.error(`  ❌ ${exportPath} → ${distPath} (NOT FOUND)`);
      hasErrors = true;
    } else {
      console.log(`  ✅ ${exportPath}`);
    }
    continue;
  }

  // Handle simple string exports
  const distPath = join(rootDir, "packages/react", config);
  if (!existsSync(distPath)) {
    console.error(`  ❌ ${exportPath} → ${distPath} (NOT FOUND)`);
    hasErrors = true;
  } else {
    console.log(`  ✅ ${exportPath}`);
  }
}

console.log();

if (hasErrors) {
  console.error("❌ Some exports are missing. Build the project first:\n");
  console.error("  npm run build:packages\n");
  process.exit(1);
}

console.log("✅ All exports are valid!\n");
process.exit(0);
