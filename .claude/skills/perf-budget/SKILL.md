---
name: perf-budget
description: "Monitor bundle size and performance metrics against configured budgets. Detects regressions before releases. Auto-triggers when user says \"check performance\", \"bundle budget\", \"perf budget\", \"measure performance\", or before releases."
allowed-tools: ["Bash"]
model: haiku
---

# Performance Budget — Bundle Size Monitoring

Validates that @orion-ds/react bundle size and performance metrics stay within configured budgets, preventing unexpected regressions.

## What This Does

1. **Reads budget configuration** — `packages/react/performance.budgets.json`
2. **Measures current bundle** — Analyzes dist/ and node_modules impact
3. **Compares against budget** — Identifies regressions and surpluses
4. **Reports violations** — Shows which metrics exceeded limits
5. **Suggests optimizations** — Recommends fixes for overages

**Critical for**: Preventing bundle bloat before publishing to npm

**Runtime**: ~15-30 seconds

## Usage

```bash
/perf-budget                    # Check all metrics
/perf-budget --detailed         # Show per-module breakdown
/perf-budget --compare=main     # Compare against main branch
```

## Execution Steps

### Step 1: Validate Budget Configuration

```bash
cd "/Users/alfredo/Documents/AI First DS Library/packages/react"

# Check performance.budgets.json exists
[ -f performance.budgets.json ] && echo "✅ Budget config found" || echo "❌ Budget config missing"

# Parse budget limits
cat performance.budgets.json | jq '.budgets[] | {name, maxSize}'
```

### Step 2: Build Optimized Bundle

```bash
cd "/Users/alfredo/Documents/AI First DS Library/packages/react"

# Build production bundle
npm run build

# Get build output size
du -sh dist/
ls -lh dist/*.{mjs,cjs,d.ts} 2>/dev/null | awk '{print $9, $5}'
```

### Step 3: Measure Key Metrics

```bash
# Main entry point
wc -c dist/react.mjs dist/react.cjs 2>/dev/null | tail -1

# Client entry point (if exists)
wc -c dist/client.mjs dist/client.cjs 2>/dev/null | tail -1

# Count externalized dependencies (should be: lucide-react, react-markdown, react-syntax-highlighter, remark-gfm)
grep -r "lucide-react\|react-markdown\|react-syntax-highlighter\|remark-gfm" dist/ 2>/dev/null | wc -l
```

### Step 4: Analyze Per-Module Sizes

```bash
# Show largest modules in dist/
find dist/ -type f -name "*.mjs" | xargs ls -lh | sort -k5 -hr | head -20
```

### Step 5: Compare Against Budget

For each metric in `performance.budgets.json`:
```
Metric: react.mjs (main entry)
  Budget: 100KB
  Current: 87KB
  Status: ✅ PASS (13% margin)

Metric: client.mjs (client entry)
  Budget: 50KB
  Current: 52KB
  Status: ⚠️  WARN (4% over)

Metric: Dependencies bundled
  Budget: 0 (all external)
  Current: 0
  Status: ✅ PASS (tree-shaking working)
```

### Step 6: Report Results

Show summary table with color-coded status:
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PERFORMANCE BUDGET REPORT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Metric              | Budget | Current | Status | Margin
────────────────────┼────────┼─────────┼────────┼────────
react.mjs           | 100KB  | 87KB    | ✅     | +13%
client.mjs          | 50KB   | 52KB    | ⚠️     | -4%
externalized deps   | 0      | 0       | ✅     | OK
gzip size (all)     | 180KB  | 175KB   | ✅     | +3%

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## Budget Configuration Format

`packages/react/performance.budgets.json`:

```json
{
  "version": "1.0.0",
  "budgets": [
    {
      "name": "react.mjs",
      "path": "dist/react.mjs",
      "maxSize": "100KB",
      "description": "Main entry point (tree-shakeable)"
    },
    {
      "name": "client.mjs",
      "path": "dist/client.mjs",
      "maxSize": "50KB",
      "description": "Client entry point with hydration fixes"
    },
    {
      "name": "Externalized dependencies",
      "check": "bundled_deps",
      "expectedExternals": ["lucide-react", "react-markdown", "react-syntax-highlighter", "remark-gfm"],
      "description": "These must NOT be bundled (external)"
    },
    {
      "name": "Gzip size (all)",
      "path": "dist/*",
      "maxSize": "180KB",
      "description": "Total gzip-compressed output"
    }
  ]
}
```

## Success Output Format

```
✅ Performance Budget Check

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

All metrics within budget ✓

  react.mjs:               87KB / 100KB (+13% margin)
  client.mjs:              52KB / 50KB  (⚠️  4% over)
  externalized deps:       ✅ All 4 external
  gzip size:              175KB / 180KB (+3% margin)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚠️  1 metric exceeded budget (see details below)

### client.mjs Regression

Previous: 49KB (main branch)
Current:  52KB (local)
Delta:    +3KB (+6%)

Likely causes:
- New component added without tree-shaking
- New dependency not externalized
- Unoptimized CSS

Suggestions:
1. Check dist/client.mjs for unexpected imports
2. Run: npm run build:packages -- --analyze
3. Verify: grep -r "lucide-react\|react-markdown" dist/client.mjs
```

## Failure Output Format

```
❌ Performance Budget Exceeded

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2 metrics exceeded budget

  react.mjs:               125KB / 100KB (❌ 25% over)
  client.mjs:              52KB / 50KB  (⚠️  4% over)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### react.mjs Regression (25% over)

Previous: 100KB (main branch)
Current:  125KB (local)
Delta:    +25KB (+25%)

Root cause analysis:
- New Chat component added (12KB)
- DataTable with Recharts (8KB)
- Lucide icons bundled (5KB) ← PROBLEM!

Fixes:
1. ✅ Chat component: OK, critical feature
2. ✅ DataTable: OK, needed for dashboards
3. ❌ Lucide icons: Remove from bundle, use external

Action items:
1. Verify lucide-react is in peerDependencies
2. Check vite.config.ts has lucide-react externalized
3. Run: npm run build && /perf-budget again
```

## Detailed Analysis Mode

```bash
/perf-budget --detailed
```

Shows per-module breakdown:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Largest Modules in dist/react.mjs (top 20)

1. CodeEditor.mjs        8.2KB  | syntax highlighter
2. Chat.mjs             6.1KB  | chat component
3. Modal.mjs            4.3KB  | overlay
4. DataTable.mjs        3.8KB  | table
...

Externalized Dependencies (not bundled):
✅ lucide-react          (520KB external, 0KB bundled)
✅ react-markdown       (45KB external, 0KB bundled)
✅ react-syntax-highlighter (120KB external, 0KB bundled)
✅ remark-gfm          (22KB external, 0KB bundled)
✅ recharts            (180KB external, 0KB bundled)
✅ dnd-kit             (90KB external, 0KB bundled)
✅ date-fns            (80KB external, 0KB bundled)

Tree-Shaking Verification:
✅ Unused exports removed
✅ CSS modules tree-shaken
✅ Dead code eliminated
```

## Comparison Mode

```bash
/perf-budget --compare=main
```

Shows regression since main branch:

```
Comparing main...HEAD

react.mjs:
  main:     100KB
  HEAD:     102KB
  Delta:    +2KB (+2%)
  Verdict:  ✅ ACCEPTABLE

client.mjs:
  main:      49KB
  HEAD:      52KB
  Delta:     +3KB (+6%)
  Verdict:   ⚠️  MONITOR (approaching limit)

Components added:
  + AgentFolder (7.5KB)
  + SettingsLayout (4.2KB)

Components removed:
  - CollapsibleFolder (5.8KB) [replaced by AgentFolder]
```

## Auto-Trigger Patterns

This skill auto-triggers when user says:
- "check performance"
- "bundle budget"
- "perf budget"
- "measure performance"
- "bundle size regression"
- "is our bundle bloated?"

Or before releases when running `/pre-release`

---

## Integration with Other Skills

**Run after**:
- Making significant component changes
- Adding new heavy components (Chat, DataTable, etc.)
- Updating dependencies

**Part of `/pre-release`**:
- Final gate check before npm publish
- Ensures no unexpected bundle growth

**Related skills**:
- `/bundle-check` — Validates tree-shaking and entry points
- `/audit` — Full system validation
- `/pre-release` — Release gate (includes perf-budget)

---

## Common Issues & Fixes

### Issue: "lucide-react bundled in output"

**Cause**: Dependency not externalized in vite.config.ts

**Fix**:
```javascript
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      external: ['lucide-react', 'react-markdown', 'react-syntax-highlighter'],
      // ...
    },
  },
});
```

Then:
```bash
npm run build
/perf-budget
```

### Issue: "New component added, bundle grew 15KB"

**Solution**:
1. Check if component is essential or should be lazy-loaded
2. If essential, increase budget: `"maxSize": "115KB"`
3. If optional, consider code-splitting or separate bundle entry

### Issue: "CSS Modules causing bloat"

**Cause**: Unused CSS or duplicate styles

**Fix**:
```bash
# Analyze CSS in bundle
unzip -l dist/react.mjs | grep -E '\.css|\.module' | wc -l

# Purge unused styles (if applicable)
npm run build -- --css-purge
```

---

## Performance Budgets Explained

### Why Bundle Size Matters

1. **User Experience**: Faster download, quicker app load
2. **Network Cost**: Smaller files = cheaper bandwidth
3. **Tree-Shaking**: Ensures unused code doesn't ship
4. **Dependency Management**: Externalized = user controls versions

### Recommended Budgets (v4.0.0)

| Entry Point | Budget | Reasoning |
|-----------|--------|-----------|
| react.mjs | 100KB | Main tree-shakeable bundle |
| client.mjs | 50KB | Small hydration layer |
| CSS | 30KB | All component styles |
| Total gzip | 180KB | Practical web limit |

### Why We Externalize Dependencies

```
Without externalization (bundled):
  lucide-react (bundled):        520KB → shipped with app
  react-markdown (bundled):       45KB → shipped with app
  react-syntax-highlighter (bundled): 120KB → shipped with app
  TOTAL OVERHEAD:              ~685KB

With externalization (peerDependency):
  User downloads once:          ~685KB (first app)
  App bundle:                    ~100KB (clean)
  RESULT:              85% size reduction on subsequent apps
```

That's why v4.0.0 moved 4 deps to peerDependencies.

---

## Exit Codes

- **0** = All metrics within budget
- **1** = One or more metrics exceeded
- **2** = Budget configuration invalid or not found

## References

- Budget config: `packages/react/performance.budgets.json`
- Build output: `packages/react/dist/`
- Vite config: `packages/react/vite.config.ts`
- Rollup options: https://rollupjs.org/configuration-options/
- Bundle analysis: `npm run build -- --analyze`
