---
name: bundle-check
description: "Validate bundle optimization: tree-shaking, entry points, externalized deps, bundle size per module. Auto-triggers after changing vite.config.ts, before releases, when user says \"bundle check\", \"tree-shaking\", \"bundle size\", \"optimize bundle\"."
allowed-tools: ["Bash"]
context: fork
agent: Bash
---

# Bundle Check — Verify Tree-Shaking & Optimization

Validates the v4.0.0 bundling architecture: preserveModules, tree-shaking, externalized peerDependencies, and bundle size budgets.

## What This Does

1. **Measure bundle size** - Per-module bundle size report
2. **Verify peerDependencies** - Ensure lucide-react, react-markdown, etc. are NOT bundled
3. **Test entry points** - Verify dist/react.cjs.js, dist/react.mjs, dist/client.mjs all work
4. **Check tree-shaking** - Ensure unused exports are stripped
5. **Compare against budget** - Alert if bundle exceeds performance.budgets.json
6. **Verify module count** - Confirm preserveModules generates separate files

**Critical for v4.0.0**: This validates the complex bundling changes in PR 3 (Feb 26).

**Runtime**: ~2-3 minutes (clean build + analysis)

## Usage

```bash
/bundle-check
/bundle-check --verbose      # Show detailed module breakdown
/bundle-check --no-build     # Skip rebuild, analyze existing dist/
/bundle-check --visual       # Generate HTML report
```

## Execution Steps

1. **Clean build** - Fresh build from scratch: `npm run build`
2. **Measure size** - Per-module analysis: `npm run measure:bundle-size`
3. **Check peerDeps** - Grep dist/ for bundled peerDependencies
4. **Test entry points** - Require/import each entry point
5. **Compare budget** - Check against performance.budgets.json
6. **Report results** - Show pass/fail with details

## Commands (Sequential)

```bash
# Step 1: Clean build
cd "/Users/alfredo/Documents/AI First DS Library/packages/react" && npm run build

# Step 2: Bundle size analysis
cd "/Users/alfredo/Documents/AI First DS Library/packages/react" && npm run measure:bundle-size

# Step 3: Check for bundled peerDependencies
cd "/Users/alfredo/Documents/AI First DS Library/packages/react" && \
  grep -r "lucide-react\|react-markdown\|react-syntax-highlighter\|remark-gfm" dist/ --include="*.mjs" || echo "✅ No peerDeps found in bundle"

# Step 4: Test CommonJS entry point
cd "/Users/alfredo/Documents/AI First DS Library/packages/react" && \
  node -e "const pkg = require('./dist/react.cjs.js'); console.log('✅ CommonJS entry works'); console.log('Exports:', Object.keys(pkg).slice(0, 5).join(', '), '...'); "

# Step 5: Test ES Module entry point
cd "/Users/alfredo/Documents/AI First DS Library/packages/react" && \
  node -e "import('./dist/react.mjs').then(m => { console.log('✅ ESM entry works'); console.log('Exports:', Object.keys(m).slice(0, 5).join(', '), '...'); })"

# Step 6: Test /client entry point
cd "/Users/alfredo/Documents/AI First DS Library/packages/react" && \
  node -e "const client = require('./dist/client.cjs.js'); console.log('✅ Client entry works'); console.log('Has useThemeContext:', !!client.useThemeContext);"

# Step 7: Compare against budget
cd "/Users/alfredo/Documents/AI First DS Library/packages/react" && \
  node -e "const budgets = require('./performance.budgets.json'); console.log('📊 Bundle Budgets:', JSON.stringify(budgets, null, 2));"
```

## Success Output Format

```
🔍 Bundle Check - v4.0.0 Tree-Shaking Validation

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ Step 1: Clean Build
   - Built @orion-ds/react with preserveModules
   - Generated 142 separate module files

✅ Step 2: Bundle Size Analysis
   Top 10 largest modules:
   - Chat.mjs:                  89 KB (before tree-shaking)
   - Modal.mjs:                 45 KB
   - DataTable.mjs:             38 KB
   - Button.mjs:                12 KB
   - Card.mjs:                  8 KB
   - theme.css:                 64 KB (tokens + vars)
   ...

   Total bundle (with all deps): 2.8 MB
   Per-component (tree-shaken):  ~50-100 KB average

✅ Step 3: Externalized peerDependencies
   Verified NOT bundled:
   - lucide-react ✓
   - react-markdown ✓
   - react-syntax-highlighter ✓
   - remark-gfm ✓
   - recharts ✓
   - dnd-kit ✓
   - date-fns ✓

✅ Step 4: Entry Points
   - dist/react.cjs.js working ✓
     Exports: Button, Card, Modal, Chat, ... (142 total)

   - dist/react.mjs working ✓
     ESM module structure valid ✓

   - dist/client.mjs working ✓
     useThemeContext, useLocalStorage, ... available ✓

✅ Step 5: Tree-Shaking Verification
   Tested importing single component:
   - import { Button } from '@orion-ds/react/dist/react.mjs'
   - Bundle size: 28 KB (Button + CSS + deps)
   - Unused modules stripped ✓

✅ Step 6: Performance Budget
   ┌─ Component Size Budget ─────────────────┐
   │ Button:      12 KB ≤ 15 KB   ✓ OK      │
   │ Modal:       45 KB ≤ 50 KB   ✓ OK      │
   │ Chat:        89 KB ≤ 100 KB  ✓ OK      │
   │ Total:       ~2.8 MB (with deps)       │
   └─────────────────────────────────────────┘

✅ Step 7: Module Count
   - Generated 142 separate .mjs files
   - Each component has its own module ✓
   - Dynamic imports work ✓

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎉 Bundle Check Passed!

Tree-shaking is working correctly. Users can:
- Import individual components
- Get 50-100KB per component (not full 2.8MB)
- Use code splitting for lazy loading
- Benefit from dead code elimination

Performance improvement:
- Before (v3): Full bundle 2.8MB
- After (v4): Per-component ~50-100KB
- Savings: ~96-97% for single components

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## Failure Output Format

```
🔍 Bundle Check - v4.0.0 Tree-Shaking Validation

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ Step 1: Clean Build
   - Built @orion-ds/react with preserveModules
   - Generated 142 separate module files

❌ Step 3: Externalized peerDependencies FAILED

   Found bundled peerDependencies (should be external):
   - lucide-react: 245 KB embedded in dist/react.mjs ❌
   - react-markdown: 156 KB embedded in dist/react.mjs ❌

   This defeats tree-shaking! Users get full bundle even for single component.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

❌ BUNDLE CHECK FAILED

Issues to fix:
1. Verify vite.config.ts has correct externals list
2. Check rollupOptions.external includes all peerDeps
3. Run: npm run build
4. Run: /bundle-check again

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## Verbose Mode

Shows detailed breakdown:

```bash
/bundle-check --verbose
```

**Outputs**:
- Every module size (not just top 10)
- Exact file paths
- Module dependencies
- Import chains for large files
- Potential tree-shaking issues

## Visual Report

Generate HTML visualization:

```bash
/bundle-check --visual
```

**Creates**: `packages/react/bundle-report.html`
- Interactive module size tree
- Dependency graph
- Size trends over time
- Budget comparisons

## Performance Budget Reference

Check `packages/react/performance.budgets.json`:

```json
{
  "Button": { "limit": "15KB", "type": "component" },
  "Modal": { "limit": "50KB", "type": "component" },
  "Chat": { "limit": "100KB", "type": "component" },
  "DataTable": { "limit": "120KB", "type": "component" },
  "theme.css": { "limit": "64KB", "type": "asset" }
}
```

If actual bundle exceeds limit → ❌ FAIL

## v4.0.0 Architecture

Bundle optimization is the core of v4.0.0:

**Before (v3)**:
```
import { Button } from '@orion-ds/react'
→ loads full 2.8MB bundle
→ 2.8MB sent to client
```

**After (v4)**:
```
import { Button } from '@orion-ds/react'
→ loads Button.mjs + theme.css + peerDeps
→ ~25-50KB sent to client (tree-shaking)
→ 96-97% size reduction!
```

**How it works**:
1. **preserveModules: true** - Each component is separate .mjs file
2. **Externalize peerDeps** - lucide-react, react-markdown not bundled
3. **Tree-shake unused** - Build tools remove dead code
4. **CSS separate** - theme.css loaded once, shared by all components
5. **Dual output** - CommonJS (.cjs.js) + ESM (.mjs) for compatibility

## Auto-Trigger Patterns

This skill auto-triggers when user says:
- "bundle check"
- "check bundle size"
- "tree-shaking"
- "bundle optimization"
- "verify bundle"
- "bundle report"

Or after modifying:
- `packages/react/vite.config.ts` (bundle config)
- `packages/react/package.json` (peerDependencies)
- `packages/react/performance.budgets.json` (budgets)

## When to Run

**Always before**:
- `/pre-release` - Gate check before publishing
- `/release-patch`, `/release-minor`, `/release-major` - After building

**After changing**:
- vite.config.ts
- package.json (peerDependencies/dependencies)
- Large component that might exceed budget
- Build configuration

**During development**:
- If users report "bundle too large"
- If bundle size unexpectedly increases
- To monitor trend over time

## Common Issues & Fixes

### Issue: peerDependencies bundled

**Symptom**: lucide-react shows in dist/react.mjs

**Fix**:
```typescript
// vite.config.ts
export default {
  build: {
    rollupOptions: {
      external: ['lucide-react', 'react-markdown', ...],
    }
  }
}
```

### Issue: Module count too high

**Symptom**: 500+ .mjs files generated

**Fix**:
```typescript
// vite.config.ts
preserveModules: true,  // Keep as single file per input
```

### Issue: Tree-shaking not working

**Symptom**: Single component import still 2.8MB

**Fix**:
1. Check `module` field in package.json points to dist/react.mjs
2. Ensure `sideEffects: false` or properly scoped sideEffects array
3. Test: `npm run measure:bundle-size`

### Issue: Budget exceeded

**Symptom**: Button is 25KB but budget is 15KB

**Options**:
1. Reduce component complexity
2. Extract heavy sub-components
3. Move dependencies to peerDependencies
4. Update budget in performance.budgets.json with justification

## Related Skills

**Before bundle check**:
- `/audit` - Full system validation
- Build manually: `npm run build`

**After bundle check**:
- `/pr-ready` - Prepare PR with optimized bundle
- `/pre-release` - Gate check includes bundle validation
- `/release-patch`, `/release-minor`, `/release-major` - Publish optimized build

## Exit Codes

- **0** = Bundle check passed, optimization verified
- **1** = Bundle check failed, issues need fixing

## Performance Targets

**Ideal sizes per component**:
- **Button-like**: 10-15 KB (no dependencies)
- **Card-like**: 15-25 KB (minimal dependencies)
- **Modal/Popover**: 30-50 KB (with positioning)
- **Chat/DataTable**: 80-120 KB (complex, many dependencies)
- **Full bundle**: 2.5-3.5 MB (all components + deps)

**Tree-shaking gains**:
- Single component: ~50-100 KB (vs 2.8 MB = 96% reduction)
- 3-5 components: ~150-300 KB (vs 2.8 MB = 89% reduction)
- Lazy loaded routes: Each route only loads needed components

## References

- vite.config.ts: `packages/react/vite.config.ts`
- Performance budgets: `packages/react/performance.budgets.json`
- PR 3 changes: Commit f98aae1
- Vite docs: https://vitejs.dev/guide/build.html#library-mode
- Tree-shaking: https://webpack.js.org/guides/tree-shaking/
