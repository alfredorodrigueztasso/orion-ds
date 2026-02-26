# 🛠️ Implementation Guide: Phase 1 & 2
## Step-by-Step Bundle Optimization

**Estimated Time**: 6-10 hours total
**Difficulty**: Medium
**Risk**: Low

---

## PHASE 1: Quick Wins (2-4 hours)

### Step 1.1: Fix vite.config.ts (30 mins)

**File**: `packages/react/vite.config.ts`

**Current** (lines 1-55):
```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "OrionReact",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format === "es" ? "mjs" : "cjs"}`,
    },
    rollupOptions: {
      external: [
        "react", "react/jsx-runtime", "react/jsx-dev-runtime",
        "react-dom", "react-dom/client", "react-dom/server",
        "lucide-react",
        "react-syntax-highlighter",
        "react-syntax-highlighter/dist/esm/styles/prism",
        "react-markdown",
        "remark-gfm",
        "refractor",
        "recharts",
        "date-fns",
        "@dnd-kit/core",
        "@dnd-kit/sortable",
        "@dnd-kit/utilities",
      ],
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    sourcemap: true,  // ❌ PROBLEM: Adds overhead
    emptyOutDir: false,
  },
});
```

**Replace with**:
```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "OrionReact",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format === "es" ? "mjs" : "cjs"}`,
    },
    rollupOptions: {
      external: [
        "react", "react/jsx-runtime", "react/jsx-dev-runtime",
        "react-dom", "react-dom/client", "react-dom/server",
        "lucide-react",
        "react-syntax-highlighter",
        "react-syntax-highlighter/dist/esm/styles/prism",
        "react-markdown",
        "remark-gfm",
        "refractor",
        "recharts",
        "date-fns",
        "@dnd-kit/core",
        "@dnd-kit/sortable",
        "@dnd-kit/utilities",
      ],
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",

        // ✅ FIX: Prevent duplicate bundling
        entryFileNames: "[name].js",
        chunkFileNames: "[name]-[hash:8].js",

        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    // ✅ FIX: Disable source maps for smaller build
    sourcemap: false,

    // ✅ FIX: Enable terser minification
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: process.env.NODE_ENV === "production",
        reduce_vars: true,
        passes: 2,
      },
      format: {
        comments: false,
      },
    },

    emptyOutDir: false,
  },
});
```

**What changed**:
- Line 32-33: Added `entryFileNames` and `chunkFileNames` to prevent hash duplication
- Line 36: Changed `sourcemap: true` → `sourcemap: false`
- Lines 38-47: Added `minify: "terser"` with compression options

**Test**:
```bash
cd packages/react
npm run build
npm run measure:bundle-size
```

**Expected**: Should see significant reduction (report will fail if still over budget)

---

### Step 1.2: Create Performance Budget (30 mins)

**File**: `packages/react/performance.budgets.json` (NEW)

```json
{
  "budgets": {
    "bundle": {
      "maxJsSize": 512000,
      "maxCssSize": 102400
    },
    "components": {
      "maxSize": 102400
    }
  }
}
```

**Explanation**:
- `maxJsSize`: 512 KB (500 KB + 12 KB buffer) ← Main entry point
- `maxCssSize`: 102 KB (100 KB + 2 KB buffer) ← All component styles combined

**Add to package.json** (line ~50):
```json
{
  "files": [
    "dist",
    "README.md",
    "LICENSE"
  ]
}
```

Add after `"files"`:
```json
{
  "files": [
    "dist",
    "README.md",
    "LICENSE"
  ],
  "budgets": {
    "bundle": {
      "maxJsSize": 512000,
      "maxCssSize": 102400
    }
  }
}
```

**Add to npm scripts** (around line 49, in `"scripts"`):
```json
{
  "scripts": {
    "build": "npm run copy:assets && tsc -p tsconfig.build.json && vite build && npm run build:styles",
    "build:verify": "npm run measure:bundle-size",
    "prepublishOnly": "npm run build && npm run build:verify",

    // Add these lines ↓
    "ci:check": "npm run type-check && npm run build:verify"

    // Keep existing scripts
  }
}
```

**Test**:
```bash
cd packages/react
npm run build:verify
# Should now respect the budget
```

---

### Step 1.3: Update CSS Build (15 mins)

**File**: `packages/react/scripts/bundle-styles.js`

**Check current content**:
```bash
cat packages/react/scripts/bundle-styles.js
```

If it doesn't have minification, update it:

```javascript
#!/usr/bin/env node
/**
 * Bundle CSS from theme and component styles
 */
import fs from 'fs';
import path from 'path';
import postcss from 'postcss';
import cssnano from 'cssnano';

const INPUT = 'assets/theme.css';
const OUTPUT = 'dist/styles.css';
const THEME_OUTPUT = 'dist/theme.css';

async function bundleCSS() {
  try {
    // Read the CSS
    const css = fs.readFileSync(INPUT, 'utf-8');

    // Minify using cssnano
    const result = await postcss([
      cssnano({
        preset: ['default', {
          discardComments: { removeAll: true },
          normalizeUnicode: false,
        }],
      }),
    ]).process(css, { from: INPUT, to: OUTPUT });

    // Write output
    fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
    fs.writeFileSync(OUTPUT, result.css);

    // Also write theme.css (separate)
    fs.writeFileSync(THEME_OUTPUT, result.css);

    console.log(`✅ CSS bundled: ${OUTPUT}`);
    console.log(`✅ Theme CSS: ${THEME_OUTPUT}`);

    // Show size
    const size = fs.statSync(OUTPUT).size;
    console.log(`📦 Size: ${(size / 1024).toFixed(2)} KB`);
  } catch (error) {
    console.error('❌ CSS bundling failed:', error);
    process.exit(1);
  }
}

bundleCSS();
```

**Install cssnano if missing**:
```bash
cd packages/react
npm install --save-dev cssnano postcss
```

---

### Step 1.4: Test and Verify (30 mins)

```bash
cd /Users/alfredo/Documents/AI\ First\ DS\ Library

# Clean build
rm -rf packages/react/dist

# Rebuild
npm run build:react

# Check sizes
npm run measure:bundle-size --workspace @orion-ds/react

# Expected output:
# ✅ JavaScript: 512KB / 512KB (or less)
# ✅ CSS:        102KB / 102KB (or less)
```

**If still over budget**:
- Check if there are still AgentWorkspace duplicates (look at `packages/react/dist/`)
- Verify `sourcemap: false` is in vite.config.ts
- Verify `minify: "terser"` is enabled

---

## PHASE 2: Architecture (4-6 hours)

### Step 2.1: Separate Examples from Main Export (3 hours)

**Goal**: Remove demo components from main library

**Step A**: Create new entry point for examples

**File**: `packages/react/src/examples.ts` (NEW)

```typescript
/**
 * @orion-ds/react/examples
 *
 * Example components and templates for documentation.
 * This is NOT part of the main @orion-ds/react library.
 *
 * Usage:
 *   import { LandingPageExample } from '@orion-ds/react/examples';
 *
 * @internal Development only - do not import in production
 */

export { ComponentShowcase } from "./ComponentShowcase";
export { LandingPageExample } from "./examples";
```

**Step B**: Update main index.ts

**File**: `packages/react/src/index.ts`

**Remove lines** (around 722-732):
```typescript
// ❌ DELETE THESE LINES:
export { ComponentShowcase } from "./ComponentShowcase";
export { LandingPageExample } from "./examples";
```

**Keep lines** (these are fine):
```typescript
// ✅ Keep in main export:
export { Button } from "./components/Button";
export { Card } from "./components/Card";
// ... (all components)
export { Chat } from "./components/Chat";
export { CodeEditor } from "./components/CodeEditor";
// ... (all widgets)
```

**Add comment** where you removed the exports:
```typescript
// ============================================================================
// EXAMPLES & STORYBOOK (Development Only)
// ============================================================================

// Note: Examples have been moved to a separate entry point.
// For Storybook and documentation examples:
// import { ComponentShowcase, LandingPageExample } from '@orion-ds/react/examples';

// This keeps the main library bundle small.
```

**Step C**: Update package.json exports

**File**: `packages/react/package.json`

**Current** (lines 11-38):
```json
{
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.mjs",
      "require": "./dist/index.cjs"
    },
    "./client": {
      "types": "./dist/client.d.ts",
      "import": "./dist/client.mjs",
      "require": "./dist/client.cjs"
    },
    "./styles.css": "./dist/styles.css",
    "./theme.css": "./dist/theme.css",
    "./tokens": {
      "types": "./dist/tokens/index.d.ts",
      "import": "./dist/tokens/index.mjs",
      "require": "./dist/tokens/index.cjs"
    },
    "./components/*": {
      "types": "./dist/components/*/index.d.ts",
      "import": "./dist/components/*/index.mjs",
      "require": "./dist/components/*/index.cjs"
    },
    "./sections": {
      "types": "./dist/sections/index.d.ts",
      "import": "./dist/sections/index.mjs",
      "require": "./dist/sections/index.cjs"
    }
  }
}
```

**Add after `"./sections"`**:
```json
{
  "exports": {
    ".": { ... },
    "./client": { ... },
    "./styles.css": "./dist/styles.css",
    "./theme.css": "./dist/theme.css",
    "./tokens": { ... },
    "./components/*": { ... },
    "./sections": { ... },

    // ✅ ADD THIS:
    "./examples": {
      "types": "./dist/examples.d.ts",
      "import": "./dist/examples.mjs",
      "require": "./dist/examples.cjs"
    }
  }
}
```

**Step D**: Update Storybook imports

**File**: `packages/react/src/components/**/*.stories.tsx`

**Search and replace** (if any files import from main index.ts):
```typescript
// ❌ CHANGE FROM:
import { ComponentShowcase } from "..";

// ✅ TO:
import { ComponentShowcase } from "../examples";
```

**Step E**: Test

```bash
cd packages/react

# Rebuild
npm run build

# Verify main bundle is smaller
ls -lh dist/index.mjs
# Should be ~100-200 KB instead of 2.7 MB

# Verify examples export works
grep "examples" dist/examples.d.ts
```

---

### Step 2.2: Optimize CSS (2-3 hours)

**Goal**: Allow users to import CSS selectively

**Current problem**:
```typescript
// User must import ALL CSS (100+ KB)
import '@orion-ds/react/styles.css';
```

**Target**:
```typescript
// Option 1: Import all (backward compatible)
import '@orion-ds/react/styles.css';

// Option 2: Import selectively (new - tree-shakeable)
import '@orion-ds/react/theme.css';  // Just tokens
import Button from '@orion-ds/react/components/Button';
// Button.module.css auto-loaded via CSS modules
```

**Implementation**:

**Step A**: Separate theme.css from component styles

Currently: `dist/styles.css` = theme + all components

**New structure**:
- `dist/theme.css` = tokens only (~100 KB)
- `dist/styles.css` = theme + components (~100 KB, backward compatible)
- `dist/components/Button/Button.module.css` = individual component (~2 KB)

**This is already done** in your current setup!

Verify:
```bash
ls -la packages/react/dist/
# Should show:
# - dist/theme.css
# - dist/styles.css
# - dist/components/Button/*.css (per component)
```

**Step B**: Document in README

**File**: `packages/react/README.md`

Add section (after import examples):
```markdown
## CSS Import Options

### Option 1: Everything (Recommended for simple projects)
```typescript
import '@orion-ds/react/styles.css';  // Themes + all components
import { Button, Card } from '@orion-ds/react';
```

### Option 2: Tokens Only (For design-first projects)
```typescript
import '@orion-ds/react/theme.css';  // Only design tokens
import { Button } from '@orion-ds/react';
import '@orion-ds/react/components/Button/Button.module.css';
```

### Option 3: Using CSS Modules (for scoped styles)
```typescript
import { Button } from '@orion-ds/react';
// Component styles loaded automatically via CSS Modules
```
```

---

### Step 2.3: Verify Phase 2 (30 mins)

```bash
cd packages/react

# Rebuild
rm -rf dist
npm run build

# Measure again
npm run measure:bundle-size

# Expected:
# ✅ JavaScript: ~200-300 KB (was 30 MB)
# ✅ CSS: ~100 KB (was 2 MB)
# ✅ examples.mjs: ~50-100 KB (separate)
```

**Commit**:
```bash
git add packages/react/
git commit -m "feat: separate examples, optimize CSS loading

- Move ComponentShowcase and LandingPageExample to separate entry point
- Add ./examples export to package.json
- Update Storybook imports
- Document CSS import options in README
- Reduces main bundle from 2.7 MB to ~200 KB
- Maintains backward compatibility with styles.css"
```

---

## Validation Checklist

- [ ] `npm run build:react` completes without errors
- [ ] `npm run measure:bundle-size` shows < 512 KB JS, < 102 KB CSS
- [ ] Tree-shaking works (test with example app):
  ```bash
  cd /path/to/test-app
  npm install ../../orion/packages/react
  npm build
  # Check bundle size with webpack-bundle-analyzer
  ```
- [ ] Storybook still builds: `npm run storybook`
- [ ] TypeScript types generated correctly: Check `dist/**/*.d.ts`
- [ ] Examples entry point works:
  ```bash
  node -e "console.log(require('@orion-ds/react/examples').ComponentShowcase)"
  ```

---

## Monitoring & Ongoing

### Add to CI/CD

**File**: `.github/workflows/bundle-check.yml` (NEW)

```yaml
name: Bundle Size Check

on:
  pull_request:
    paths:
      - 'packages/react/**'
      - 'packages/blocks/**'

jobs:
  bundle-size:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build:react

      - name: Check bundle size
        run: npm run measure:bundle-size --workspace @orion-ds/react

      - name: Comment on PR
        if: failure()
        uses: actions/github-script@v6
        with:
          script: |
            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: '❌ Bundle size exceeds budget! Run `npm run measure:bundle-size` locally.'
            })
```

---

## Troubleshooting

### Bundle still too large?

1. **Check for duplicate files**:
   ```bash
   cd packages/react/dist
   ls -la | grep -i agent
   # Should only show: AgentWorkspace types, not .js bundles
   ```

2. **Verify minification**:
   ```bash
   # Check if uglified
   head -c 100 dist/index.mjs
   # Should be minified (hard to read)
   ```

3. **Check for source maps**:
   ```bash
   ls -la dist/*.map
   # Should be empty or minimal
   ```

4. **Review vite config**:
   ```bash
   grep -A 20 "rollupOptions" vite.config.ts
   # Should show: entryFileNames, chunkFileNames
   ```

### Tree-shaking not working?

1. Add to vite config:
   ```typescript
   build: {
     rollupOptions: {
       output: {
         exports: 'named',  // ✅ Helps tree-shaking
       }
     }
   }
   ```

2. Check package.json:
   ```json
   {
     "sideEffects": ["**/*.css"],  // ✅ Should be present
     "type": "module"  // ✅ ESM support
   }
   ```

---

## Timeline Summary

| Task | Duration | Dependency |
|:---|:---:|:---|
| Step 1.1: vite.config.ts | 30 min | None |
| Step 1.2: Budget file | 30 min | 1.1 |
| Step 1.3: CSS minify | 15 min | 1.1 |
| Step 1.4: Test Phase 1 | 30 min | 1.1-1.3 |
| **Phase 1 Total** | **2 hours** | |
| Step 2.1: Examples export | 3 hours | Phase 1 ✅ |
| Step 2.2: CSS docs | 1 hour | Phase 1 ✅ |
| Step 2.3: Verify Phase 2 | 30 min | 2.1-2.2 |
| **Phase 2 Total** | **4.5 hours** | |
| **TOTAL** | **6.5 hours** | |

---

**Next**: Share results with team, then plan Phase 3 (micro entry points + CI monitoring)
