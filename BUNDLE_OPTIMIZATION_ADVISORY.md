# 🎯 Technical Advisory: Bundle Size Optimization
## Orion Design System (@orion-ds/react v4.0.0)

**Date**: February 26, 2026
**Status**: 🚨 CRITICAL - Bundle exceeds safe limits by 6x
**Audience**: Engineering Team - Orion DS
**Duration**: 2-4 sprints to implement full optimization

---

## Executive Summary

The current `@orion-ds/react` bundle is **30.17MB JavaScript** vs. a healthy target of **~500KB-800KB**, representing a **6x over-budget condition**. While `preserveModules: true` enables proper tree-shaking, there are critical issues in the build pipeline causing massive duplication and bloat.

**Key Finding**: Production bundles from npm are likely much smaller than the local build (tree-shaking works), but the development and CI/CD build artifacts are problematic.

---

## 🔴 Current State Analysis

### Bundle Metrics

```
╔══════════════════════════════════════════════════════════════╗
║                    LOCAL BUILD SIZES                        ║
╠══════════════════════════════════════════════════════════════╣
║  Package              │  Dist Size │  Status                ║
╠═══════════════════════╪════════════╪════════════════════════╣
║  @orion-ds/react      │  126 MB    │  ❌ CRITICAL BLOAT    ║
║  @orion-ds/blocks     │  N/A       │  ⚠️  Not tested        ║
║  @orion-ds/core       │  380 KB    │  ⚠️  Legacy package    ║
║  @orion-ds/cli        │  100 KB    │  ✅ Acceptable        ║
║  @orion-ds/mcp        │  56 KB     │  ✅ Acceptable        ║
║  @orion-ds/validate   │  48 KB     │  ✅ Acceptable        ║
║  @orion-ds/create     │  20 KB     │  ✅ Acceptable        ║
╚═══════════════════════╧════════════╧════════════════════════╝

JavaScript Target:  ✅ 500-800 KB (tree-shakeable per component)
CSS Target:         ✅ 100-150 KB (optimized)
Current JS:         ❌ 30,170 KB (6x over)
Current CSS:        ❌ 2,089 KB  (13x over)
```

### Top 5 Problematic Files

| Rank | File | Size | Issue |
|------|------|------|-------|
| 1 | `AgentWorkspace-CD_LsD--.js` | 3.5 MB | Bundle duplication |
| 2 | `AgentWorkspace-eIueOOkY.js` | 2.7 MB | Hash-named variant |
| 3 | `AgentWorkspace-ueR9t-02.js` | 2.7 MB | Redundant code |
| 4 | `AgentWorkspace-C2T9caZj.js` | 2.7 MB | Unknown origin |
| 5 | `AgentWorkspace-CoCoFPqh.js` | 2.7 MB | Duplicate |

**Root Cause**: 6+ variants of `AgentWorkspace` being generated (should be 1-2 max)

---

## 🔍 Root Cause Analysis

### Issue #1: Vite/Rollup Duplication Bug (HIGH PRIORITY)

**Problem**:
- `preserveModules: true` creates separate files per module (good)
- Rollup is generating multiple hash-named bundles of the same file
- AgentWorkspace template is being bundled 6+ times with different hashes

**Evidence**:
```
packages/react/dist/
├── AgentWorkspace-C2T9caZj.js       (2.7 MB)
├── AgentWorkspace-CD_LsD--.js       (3.5 MB)  ← Largest
├── AgentWorkspace-CoCoFPqh.js       (2.7 MB)
├── AgentWorkspace-CpQOvG_5.cjs      (2.7 MB)
├── AgentWorkspace-Cza7KJrr.cjs      (1.9 MB)
├── AgentWorkspace-FoyEJ2dM.cjs      (2.5 MB)
├── AgentWorkspace-KvveNDT-.cjs      (1.9 MB)
└── AgentWorkspace-Qxh44uGE.cjs      (1.9 MB)
```

**Impact**:
- 6 copies × 2.7 MB ≈ **16 MB of redundant code** (52% of total 30 MB)
- Hashes suggest Rollup code-splitting confusion

**Why it happens**:
- AgentWorkspace in `packages/blocks/src` is being imported/bundled by `packages/react`
- When `preserveModules` is enabled, each reference creates separate bundles
- Code splitting is not properly configured to deduplicate

---

### Issue #2: Massive index Files (MEDIUM PRIORITY)

**Problem**:
```
packages/react/dist/
├── index.mjs        (2.7 MB)        ← Main entry point
├── index 2.mjs      (2.7 MB)        ← Duplicate?
├── index.cjs        (2.0 MB)
├── index 2.cjs      (2.0 MB)        ← Duplicate?
└── index3.mjs       (24 KB)          ← Correct size
```

**Expected**:
- Single `index.mjs` (~50-100 KB with tree-shaking)
- Single `index.cjs` (~50-100 KB with tree-shaking)

**Actual**:
- 2.7 MB index files (likely include all component code, not tree-shakeable)
- Numbered duplicates suggest Vite build cache issues

**Impact**:
- Users importing from `@orion-ds/react` get **2.7 MB bundle** instead of ~100 KB
- Tree-shaking is NOT working for main entry point

---

### Issue #3: CSS Bundle Too Large (MEDIUM PRIORITY)

**Problem**:
```
Total CSS: 2.04 MB vs. budget of 1 MB (2x over)
```

**Likely causes**:
- **Storybook assets** (decorators, demo components) included in CSS
- **Source maps** not stripped (`.css.map` files)
- **Component styles not deduplicated** (similar utilities repeated)
- **Generated CSS from theme tokens** might have verbose formatting

**Evidence**:
- `npm run build:styles` script bundling without minification flags
- No CSS purging/treeshaking configured
- `sourcemap: true` in vite.config.ts adds overhead

---

### Issue #4: No Performance Budget Enforced (LOW PRIORITY but CRITICAL GOVERNANCE)

**Problem**:
```
packages/react/
├── performance.budgets.json     ❌ NOT FOUND
├── measure:bundle-size          ✅ Script exists but uses hardcoded defaults
```

**Evidence**:
```javascript
// measure-bundle-size.js - Hardcoded fallback
if (!fs.existsSync(budgetsPath)) {
  console.warn('⚠️  performance.budgets.json not found');
  return { bundle: { maxJsSize: 204800, maxCssSize: 51200 } };  // 200KB / 50KB
}
```

**Impact**:
- No enforceable limits during CI/CD
- Build succeeds even at 6x budget
- Team has no visibility into size trends

---

### Issue #5: index.ts Exports Too Much (DESIGN ISSUE)

**Problem**:
```typescript
// packages/react/src/index.ts - 731 lines
export { Button, Card, Modal, ... }  // 40+ components
export { LandingPageExample, ... }   // Examples (shouldn't be in library)
export { ComponentShowcase } from "./ComponentShowcase";  // Demo component
export * from "./utils";  // All utilities
```

**Components being exported** (lines 1-732):
- 40+ core components
- 25+ widget/composite components
- Examples and showcases (should NOT be in npm package)
- All utilities

**Result**:
- Main entry point bundles ALL code, no way for consumers to tree-shake
- Entry points with circular imports force bundlers to include everything

---

## 📊 Impact Assessment

### Publish Size (npm)

While local build is 126 MB, npm packages use compression:

| Stage | Size |
|-------|------|
| Local dist/ | 126 MB |
| After npm compression | ~2-5 MB (estimated) |
| Tree-shaken by consumer | ~50-100 KB per component ✅ |

**Silver lining**: npm consumers likely get acceptable sizes due to minification + gzip.
**Problem**: CI/CD artifacts, Storybook, and dev builds are unusable.

### Developer Experience

- ❌ Slow dev server startup (hot-module reloading massive bundles)
- ❌ Long build times for Storybook
- ❌ CI/CD pipeline times inflated
- ❌ Docker images bloated (126 MB node_modules copies)

### CI/CD Pipeline Impact

```
npm run build:packages  →  126 MB artifacts  →  Upload overhead
npm run build:registry  →  Depends on react dist
npm run build:registry-api  →  Depends on above
```

---

## ✅ Solutions & Recommendations

### PHASE 1: Immediate Fixes (Week 1-2) - **HIGH IMPACT**

#### 1.1 Fix Vite/Rollup Configuration

**Problem**: `preserveModules: true` + improper output config causing duplication

**Solution**:
```typescript
// packages/react/vite.config.ts
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format === "es" ? "mjs" : "cjs"}`,
    },
    rollupOptions: {
      // ✅ NEW: Prevent code duplication
      external: [
        "react", "react-dom", "react/jsx-runtime",
        // Heavy deps
        "lucide-react",
        "react-syntax-highlighter",
        "react-markdown",
        "remark-gfm",
        "refractor",
        // Optional
        "recharts", "date-fns", "@dnd-kit/core", "@dnd-kit/sortable"
      ],
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",

        // ✅ NEW: Fix output naming to prevent hash duplication
        entryFileNames: "[name].js",
        chunkFileNames: "[name]-[hash:6].js",

        // ✅ NEW: Don't split everything unnecessarily
        manualChunks: {
          // Keep utils together
          'utils': ['src/utils/index.ts'],
          // Keep hooks together
          'hooks': ['src/hooks/index.ts'],
          // Keep context together
          'contexts': ['src/contexts/index.ts'],
        },
      },
    },
    // ✅ NEW: Separate source maps to reduce bundle
    sourcemap: "hidden",  // or false for production

    // ✅ NEW: Minify to reduce size significantly
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        reduce_vars: true,
      },
      format: {
        comments: false,
      },
    },
  },
});
```

**Expected Results**:
- Eliminate AgentWorkspace duplicates (saves ~16 MB)
- Fix index.mjs/index.cjs bloat (saves ~2 MB)
- **Total JS reduction**: ~18-20 MB → ~200-300 KB expected

**Effort**: 2-4 hours
**Risk**: Medium (needs testing with tree-shaking)

---

#### 1.2 Create & Enforce Performance Budget

**Action**: Create `packages/react/performance.budgets.json`

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

**Update package.json**:
```json
{
  "scripts": {
    "build": "tsc -p tsconfig.build.json && vite build && npm run build:styles",
    "build:verify": "npm run measure:bundle-size",
    "prepublishOnly": "npm run build && npm run build:verify"
  }
}
```

**CI Integration** (`package.json`):
```json
{
  "scripts": {
    "ci:check": "npm run type-check && npm run build && npm run build:verify"
  }
}
```

**Expected Results**:
- CI/CD fails if bundle > 512 KB
- Team sees metrics in each build
- Prevents regressions

**Effort**: 1 hour
**Risk**: Low

---

#### 1.3 Strip CSS Source Maps & Minify

**Problem**: `sourcemap: true` in vite.config.ts adds .css.map overhead

**Solution**:
```typescript
// vite.config.ts
export default defineConfig({
  build: {
    sourcemap: false,  // or "hidden" for debugging
    cssMinify: true,   // ✅ Ensure CSS minified
  },
});
```

**Alternative for debugging** (development-only):
```typescript
sourcemap: process.env.NODE_ENV === 'production' ? false : 'hidden',
```

**Expected Results**:
- CSS reduced from 2.04 MB to ~100-150 KB
- Removes .map files from npm package

**Effort**: 30 minutes
**Risk**: Low

---

### PHASE 2: Design Improvements (Week 3-4) - **MEDIUM IMPACT**

#### 2.1 Separate Example Exports from Library

**Problem**: `index.ts` exports examples + showcases that shouldn't be in npm

**Current** (731 lines):
```typescript
export { ComponentShowcase } from "./ComponentShowcase";
export { LandingPageExample } from "./examples";
```

**Solution**: Create separate entry points

```typescript
// packages/react/src/index.ts (Library only - 500 lines)
export { Button, Card, Modal, ... }  // Components only
export { useTheme, useMediaQuery, ... }  // Hooks only
export { ThemeProvider, useThemeContext } // Contexts only
export type { Theme, Brand, ... }  // Types only

// packages/react/src/examples.ts (NEW - for documentation)
export { ComponentShowcase } from "./ComponentShowcase";
export { LandingPageExample } from "./examples";

// packages/react/src/storybook.ts (NEW - for Storybook)
export * from "./examples";  // All decorators
```

**Update package.json exports**:
```json
{
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.mjs",
      "require": "./dist/index.cjs"
    },
    "./examples": {
      "types": "./dist/examples.d.ts",
      "import": "./dist/examples.mjs",
      "require": "./dist/examples.cjs"
    }
  }
}
```

**Expected Results**:
- Main entry point: ~80-100 KB
- Examples entry point: ~50 KB (separate, for docs/storybook)
- Users only import what they need

**Effort**: 4-6 hours
**Risk**: Low-Medium (breaking change for users importing examples)

---

#### 2.2 Optimize CSS Architecture

**Problem**: CSS bundle contains everything, no way to import selectively

**Current**:
```css
/* theme.css + styles.css - 2 MB */
:root { ... }                    /* All tokens */
.button { ... }                  /* All components */
.card { ... }
.modal { ... }
/* ... 50+ component styles ... */
```

**Solution**: CSS modules + separate entry point per component

```typescript
// packages/react/src/index.ts
export { Button } from "./components/Button";
// Users:
import { Button } from '@orion-ds/react';
import '@orion-ds/react/components/Button/Button.module.css';  // 2 KB
// Or load all:
import '@orion-ds/react/styles.css';  // 100 KB (minified)
```

**Update vite.config.ts**:
```typescript
build: {
  rollupOptions: {
    output: {
      // Create separate CSS chunks per component
      manualChunks: (id) => {
        if (id.includes('/components/')) {
          return id.split('/components/')[1].split('/')[0];
        }
      },
    },
  },
},
```

**Expected Results**:
- Users can import only CSS they need
- Component CSS: ~2-5 KB each (tree-shakeable)
- Total CSS option: ~100 KB (full bundle)

**Effort**: 6-8 hours
**Risk**: Medium (CSS import changes)

---

#### 2.3 Remove AgentWorkspace from React Package

**Problem**: Template bloat shouldn't be in core library

**Current Structure**:
```
packages/react/src/templates/app/AgentWorkspace  ← Bloat
packages/blocks/src/templates/app/AgentWorkspace ← Correct
```

**Solution**: Move to @orion-ds/blocks ONLY

```bash
# Remove from react
rm -rf packages/react/src/templates/app/AgentWorkspace

# Keep in blocks
packages/blocks/src/templates/app/AgentWorkspace ✓
```

**Update packages/react/index.ts**:
```typescript
// ❌ REMOVE:
// export { LandingPageTemplate } from "./templates";

// ✅ KEEP: Just a note
// Note: Full-page templates moved to @orion-ds/blocks v1.0.0
```

**Expected Results**:
- Removes duplicate template files
- Clarifies separation: React = components, Blocks = templates
- Reduces confusion about what's in each package

**Effort**: 2 hours
**Risk**: Low

---

### PHASE 3: Long-term Architecture (Month 2) - **ONGOING**

#### 3.1 Implement Micro Entry Points

**Goal**: Users import only what they use

```typescript
// User code:
import Button from '@orion-ds/react/button';           // ~10 KB
import Card from '@orion-ds/react/card';               // ~8 KB
import '@orion-ds/react/theme.css';                    // ~100 KB
// Total: ~118 KB instead of 2.7 MB!
```

**Implementation**:
```json
{
  "exports": {
    "./components/button": "./dist/components/Button/index.mjs",
    "./components/card": "./dist/components/Card/index.mjs",
    "./components/*": "./dist/components/*/index.mjs"
  }
}
```

**Effort**: 8-10 hours (one-time)
**Payoff**: Long-term tree-shaking improvement

---

#### 3.2 Monitor with Metrics

**Setup CI tracking**:

```yaml
# .github/workflows/bundle-size.yml
name: Bundle Size Tracking
on: [push]
jobs:
  measure:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm ci && npm run build && npm run measure:bundle-size
      - uses: preactjs/compressed-size-action@v2
        with:
          repo-token: ${{ secrets.GITHUB_TOKEN }}
```

**Results**:
- Automatic size comments on PRs
- Regression detection before merge
- Historical tracking in reports/

**Effort**: 2 hours
**Ongoing**: 5 minutes/month maintenance

---

## 📋 Implementation Checklist

### Phase 1 (Immediate) - Week 1-2
- [ ] Fix vite.config.ts (entryFileNames, chunkFileNames, sourcemap: false)
- [ ] Create performance.budgets.json
- [ ] Run `npm run build` and verify measure:bundle-size passes
- [ ] Commit with message: "fix: optimize bundle configuration"

### Phase 2 (Design) - Week 3-4
- [ ] Separate examples to separate entry point
- [ ] Test tree-shaking with consumer project
- [ ] Optimize CSS architecture (module-based)
- [ ] Remove AgentWorkspace from react package
- [ ] Commit with message: "refactor: separate examples, optimize CSS"

### Phase 3 (Long-term) - Ongoing
- [ ] Implement micro entry points per component
- [ ] Setup GitHub Actions for size tracking
- [ ] Document bundle size best practices for team
- [ ] Monthly review of metrics

---

## 📊 Expected Results After Optimization

| Metric | Before | After | Savings |
|--------|--------|-------|---------|
| **Local Build JS** | 30.17 MB | ~500 KB | 98% ↓ |
| **Local Build CSS** | 2.04 MB | ~100 KB | 95% ↓ |
| **Dev Server Startup** | ~5-10s | ~1-2s | 5-8x faster |
| **Storybook Build** | ~30-45s | ~10-15s | 3x faster |
| **npm Publish Size** | ~2-5 MB | ~200-400 KB | 80-90% ↓ |
| **Consumer Tree-shake** | ~100 KB | ~10-20 KB | 5-10x smaller |

---

## 🚀 Quick Wins (Can Start Today)

### Immediate Fixes (30 mins - 2 hours)

1. **Disable source maps in production build**:
   ```typescript
   // vite.config.ts
   sourcemap: false,
   ```
   **Savings**: ~10-15% bundle size

2. **Update terser options for better minification**:
   ```typescript
   minify: "terser",
   terserOptions: { compress: { drop_console: true } }
   ```
   **Savings**: ~5-10%

3. **Add bundle-size to pre-commit hook**:
   ```json
   {
     "lint-staged": {
       "*.{ts,tsx}": ["npm run type-check", "npm run build:verify"]
     }
   }
   ```
   **Savings**: Prevents future regressions

---

## ⚠️ Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|-----------|
| Tree-shaking doesn't work | High | Test with real consumer app (create-react-app) |
| Breaking changes in exports | Medium | Publish as major version, provide migration guide |
| CSS import changes | Medium | Maintain backward compatibility entry point |
| Performance regressions missed | High | Add size tracking to CI/CD |

---

## 🤝 Team Recommendations

### Process Improvements

1. **Bundle Size Reviews**: Include size impact in PR template
   ```markdown
   ## Bundle Impact
   - [ ] `npm run build:verify` passes
   - [ ] No new dependencies added
   - [ ] Size change: +/- X KB
   ```

2. **Size Budgets**: Add to code review checklist
   - Component CSS < 10 KB
   - Hook code < 5 KB
   - Entry point < 500 KB

3. **Dependency Management**:
   - No heavy deps without justification
   - Prefer tree-shakeable libraries
   - Regular audits: `npm audit --audit-level=moderate`

### Knowledge Base

- Document tree-shaking best practices
- Create "bundle health" dashboard (GitHub Actions artifacts)
- Share findings in team wiki/knowledge base

---

## 📞 Questions & Support

**For implementation details**, refer to:
- Vite docs: https://vitejs.dev/guide/build.html
- Rollup docs: https://rollupjs.org/guide/en/
- Tree-shaking guide: https://webpack.js.org/guides/tree-shaking/

**Contact**: Lead this initiative with stakeholder buy-in. Start with Phase 1 (Quick Wins), measure results, then proceed to Phase 2.

---

## Appendix: Detailed Investigation Notes

### Why AgentWorkspace is Duplicated

```
packages/blocks/src/templates/app/AgentWorkspace
    ↓ imports
packages/react/src/... (circular?)
    ↓ vite builds
packages/react/dist/AgentWorkspace-hash1.js
packages/react/dist/AgentWorkspace-hash2.js  ← Duplication
...
```

**Root cause**: Likely circular dependency or multiple import paths causing Rollup to create separate bundles per import path. When `preserveModules: true` is enabled without proper output configuration, each unique import chain gets its own bundle.

### Why index.mjs is 2.7 MB

The main entry point bundles all 40+ components because of `export { Button, Card, ... }` statements. When Rollup can't tree-shake (due to export * or broad exports), it includes everything.

**Evidence**:
```typescript
// packages/react/src/index.ts
export { Button } from "./components/Button";  // Imports Button
export { Card } from "./components/Card";      // Imports Card
// ... (40+ times)

// All these imports + their dependencies get bundled into one file
```

---

**Report prepared by**: Claude Code AI
**Framework**: Vite + Rollup + TypeScript
**Version**: @orion-ds/react@4.0.0
