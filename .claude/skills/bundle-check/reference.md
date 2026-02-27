# Bundle Check — Reference Guide

## v4.0.0 Bundle Architecture

Orion v4.0.0 introduced optimized bundling with preserveModules + tree-shaking:

```
BEFORE v4.0.0:
  bundle: 2.8 MB (single monolithic file)
  peerDeps: All bundled (lucide-react, react-markdown, etc.)
  tree-shaking: ❌ Not possible

AFTER v4.0.0:
  bundle: ~50-100 KB per component (granular)
  peerDeps: All externalized (4 dependencies)
  tree-shaking: ✅ Full support
  entry points: 2 (react.mjs, client.mjs)
```

---

## 3 Key Validations

### Validation 1: Tree-Shaking Works
```bash
npm run build:packages

# Verify dist files are separate modules
ls -lh packages/react/dist/*.mjs | head -10
```

**Expected**:
```
-rw-r--r--  Button.mjs       2.3K
-rw-r--r--  Card.mjs         1.8K
-rw-r--r--  Modal.mjs        3.1K
-rw-r--r--  ...
react.mjs                      45K
```

**NOT expected**: Single 2.8MB bundle file

---

### Validation 2: Entry Points Work
```bash
# Test main entry point
node -e "const m = require('./packages/react/dist/react.cjs.js'); console.log(typeof m.Button)"

# Test client entry point
node -e "const m = require('./packages/react/dist/client.cjs.js'); console.log(m)"
```

**Expected**:
- Main entry: `function` (Button, Card, etc. exported)
- Client entry: Client-only hooks exported

**NOT expected**: Module not found, export errors

---

### Validation 3: PeerDependencies Externalized
```bash
# These 4 MUST NOT be in dist/
grep -r "lucide-react\|react-markdown\|react-syntax-highlighter\|remark-gfm" \
  packages/react/dist/ --include="*.mjs"

# Should return NOTHING (empty)
# If it returns matches → bundled by mistake
```

**Expected**:
- No matches (dependencies are external)
- Users install separately: `npm install lucide-react`

**NOT expected**:
- Bundled code from lucide-react
- Bundled code from react-markdown
- Bundled code from react-syntax-highlighter
- Bundled code from remark-gfm

---

## Bundle Metrics to Check

### Metric 1: Main Entry Point Size
```bash
wc -c packages/react/dist/react.mjs
# Expected: ~45-100 KB
```

### Metric 2: Client Entry Point Size
```bash
wc -c packages/react/dist/client.mjs
# Expected: ~10-20 KB
```

### Metric 3: Largest Modules
```bash
du -sh packages/react/dist/*.mjs | sort -hr | head -10
# Expected: Each module 1-5 KB
# NOT: Single 2.8 MB file
```

### Metric 4: CSS Bundle Size
```bash
wc -c packages/react/dist/react.css
# Expected: ~50-100 KB
```

### Metric 5: Gzip Size (Production)
```bash
gzip packages/react/dist/react.mjs -c | wc -c
# Expected: ~15-30 KB (compressed)
```

---

## Common Bundling Issues & Fixes

### Issue 1: Bundled Dependency Detected
```
Error: lucide-react found in dist/react.mjs
Size increased from 50KB → 150KB
```

**Root cause**: Dependency not externalized in vite.config.ts

**Fix**:
```javascript
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      external: [
        'lucide-react',
        'react-markdown',
        'react-syntax-highlighter',
        'remark-gfm',
        'recharts',
        'dnd-kit',
        'date-fns'
      ],
      output: {
        // Preserve module structure
        entryFileNames: '[name].mjs',
        chunkFileNames: '[name].mjs',
      }
    },
  },
});
```

Then rebuild:
```bash
npm run build:packages
/bundle-check
```

---

### Issue 2: Tree-Shaking Not Working
```
Error: Unused code still in bundle
Size: 45KB (with unused code)
```

**Root cause**: Module side effects preventing tree-shaking

**Fix**:
```json
{
  "sideEffects": ["**/*.css"]
}
```

**Explanation**:
- Only CSS files have side effects (they register styles globally)
- All `.js`/`.ts` files can be tree-shaken
- Without this, bundlers assume all files have side effects

---

### Issue 3: Entry Points Not Working
```
Error: Cannot find export 'Button' in react.cjs.js
```

**Root cause**: Exports not properly configured in package.json

**Fix**:
```json
{
  "exports": {
    ".": {
      "import": "./dist/react.mjs",
      "require": "./dist/react.cjs.js",
      "types": "./dist/index.d.ts"
    },
    "./client": {
      "import": "./dist/client.mjs",
      "require": "./dist/client.cjs.js",
      "types": "./dist/client.d.ts"
    },
    "./sections": {
      "import": "./dist/sections.mjs",
      "require": "./dist/sections.cjs.js"
    }
  }
}
```

---

## Performance Budgets

Recommended budgets (in `performance.budgets.json`):

```json
{
  "budgets": [
    {
      "name": "react.mjs (main)",
      "maxSize": "100KB"
    },
    {
      "name": "client.mjs (hydration)",
      "maxSize": "50KB"
    },
    {
      "name": "CSS bundle",
      "maxSize": "100KB"
    },
    {
      "name": "Gzip total",
      "maxSize": "180KB"
    }
  ]
}
```

**Rationale**:
- Main bundle: ~100KB (after tree-shaking)
- Client: ~50KB (minimal hydration layer)
- CSS: ~100KB (all component styles)
- Gzip: ~180KB total (web delivery standard)

---

## Why Externalize Dependencies?

```
User 1 installs app + lucide-react:
  app.mjs:        50KB
  lucide-react:  520KB (once)
  Total user 1:  570KB

User 2 installs same app + lucide-react:
  app.mjs:        50KB
  lucide-react:  520KB (cached, not re-downloaded)
  Total user 2:   50KB (new download)

SAVINGS: 520KB per user (downstream)
```

Contrast with bundled:
```
User 1 installs bundled app (lucide included):
  app.mjs:  570KB

User 2 installs bundled app (lucide included):
  app.mjs:  570KB  (must re-download lucide)

COST: 520KB repeated per user
```

---

## Monitoring Bundle Growth

Track bundle size over time:

```bash
# Build and measure
npm run build:packages

# Save metrics
du -sh packages/react/dist/react.mjs > /tmp/bundle-size.txt
cat /tmp/bundle-size.txt

# Example: Track in spreadsheet
# Date | Size | Delta | Reason
# 2026-02-26 | 45KB | +2KB | Added Chat component
# 2026-02-27 | 50KB | +5KB | New CodeEditor feature
```

**Alert threshold**: +10% increase requires investigation

---

## Integration with Other Skills

**Before bundle-check**:
- Make code changes
- Run: `/bundle-check`

**After bundle-check**:
- `/perf-budget` — Check vs budget limits
- `/pre-release` — Part of release gate

**If bundle grew**:
- Analyze with `/bundle-check --detailed`
- Review component sizes
- Consider code-splitting
- Update budgets if intentional

---

## Exit Codes

- **0** = Bundle valid ✅ Tree-shaking works, externals clean
- **1** = Issues found ❌ Fix externals or side effects

---

## References

- Vite config: `packages/react/vite.config.ts`
- Package.json exports: `packages/react/package.json`
- Performance budgets: `packages/react/performance.budgets.json`
- Rollup guide: https://rollupjs.org/configuration-options/
- Tree-shaking: https://webpack.js.org/guides/tree-shaking/
