# Pre-Release — Reference Guide

## Release Gates: 6 Validation Checkpoints

### Gate 1: System Audit (Full Validation)
```bash
cd "/Users/alfredo/Documents/AI First DS Library" && npm run audit
```

**Validates**:
- ✅ Chain of Truth compliance (tokens, CSS, components)
- ✅ TypeScript types across all packages
- ✅ AI-First compliance (no hardcoded colors, fonts, brand props)
- ✅ Component validation script passes

**Expected**:
- Exit code 0 (all checks pass)
- No violations or warnings

---

### Gate 2: Build Validation
```bash
cd "/Users/alfredo/Documents/AI First DS Library" && npm run build:packages
```

**Validates**:
- ✅ All packages compile without errors
- ✅ TypeScript compilation successful
- ✅ Dist files generated

**Expected**:
- All packages build successfully
- No TS errors

---

### Gate 3: Bundle Check
```bash
cd "/Users/alfredo/Documents/AI First DS Library" && npm run bundle-check
```

**Validates**:
- ✅ Tree-shaking working
- ✅ Entry points functional
- ✅ Peerependencies externalized (lucide-react, react-markdown, etc.)
- ✅ Bundle size within budgets

**Expected**:
- All entry points work
- No unexpected bundled dependencies

---

### Gate 4: Performance Budget
```bash
cd "/Users/alfredo/Documents/AI First DS Library/packages/react" && npm run perf-budget
```

**Validates**:
- ✅ Bundle size metrics within limits
- ✅ No significant regressions
- ✅ Module sizes acceptable

**Expected**:
- Exit code 0 (all metrics pass)
- Performance within budget

---

### Gate 5: Complete Test Suite
```bash
cd "/Users/alfredo/Documents/AI First DS Library/packages/react" && npm run test:full
```

**Validates**:
- ✅ Unit tests pass (Vitest)
- ✅ E2E tests pass (Playwright)
- ✅ Visual regression tests pass (Percy)

**Expected**:
- All test suites passing
- No visual regressions
- Coverage thresholds met

---

### Gate 6: Registry & MCP Validation
```bash
cd "/Users/alfredo/Documents/AI First DS Library" && npm run build:registry && npm run mcp-test
```

**Validates**:
- ✅ Registry synced from @orion-ds/react + @orion-ds/blocks
- ✅ HTTP API built (public/r/)
- ✅ All 9 MCP tools responding correctly
- ✅ Registry data intact

**Expected**:
- Registry rebuilt successfully
- All 9 MCP tools pass validation

---

## Pre-Release Checklist

Before running `/pre-release`, ensure:

- [ ] All features merged to main branch
- [ ] CHANGELOG.md updated with changes
- [ ] Version number decided (patch/minor/major)
- [ ] No uncommitted changes (`git status` clean)
- [ ] Remote is up to date (`git pull origin main`)
- [ ] All tests passing locally
- [ ] No linting errors

**Then**: `→ /pre-release` → `→ /release-patch|minor|major`

---

## Release Flow Decision

```
Current version: 3.2.0

Bug fix:              → PATCH release (3.2.1)
New feature:          → MINOR release (3.3.0)
Breaking change:      → MAJOR release (4.0.0)
```

**Decision guide**:
- Only bug fixes/perf improvements? → Patch
- New features added? → Minor
- Removed/changed APIs? → Major

---

## Exit Codes

- **0** = All 6 gates passed ✅ Ready to release
- **1** = Gate failed ❌ Fix issues and retry
- **2** = User cancelled

---

## When Gates Fail

### Gate 1 Failed: System Audit
```
Fix:
1. Run: /audit
2. Review violations
3. Fix each issue
4. Run: /pre-release again
```

### Gate 2 Failed: Build
```
Fix:
1. Check TypeScript errors
2. npm run type-check
3. Fix type errors
4. Run: /pre-release again
```

### Gate 3 Failed: Bundle Check
```
Fix:
1. Identify overages
2. Check if dependency bundled unexpectedly
3. Add to peerDependencies if needed
4. Update vite.config.ts
5. npm run build
6. Run: /pre-release again
```

### Gate 4 Failed: Performance Budget
```
Fix:
1. /perf-budget --detailed
2. Find which modules are large
3. Consider code-splitting or lazy-loading
4. Update budgets if intentional: performance.budgets.json
5. Run: /pre-release again
```

### Gate 5 Failed: Tests
```
Fix:
1. npm test (unit tests)
2. npm run test:e2e (E2E tests)
3. Review failures
4. Fix code or tests as needed
5. Run: /pre-release again
```

### Gate 6 Failed: Registry/MCP
```
Fix:
1. npm run build:registry
2. npm run mcp-test
3. Check for registry corruption
4. If components missing: /registry-sync
5. Run: /pre-release again
```

---

## Release Commands Reference

After pre-release passes:

```bash
# For patch (bug fixes)
npm run release:patch

# For minor (new features)
npm run release:minor

# For major (breaking changes)
npm run release:major

# For dry-run (test without publishing)
npm run release:dry
```

Or use the skills:
```bash
/release-patch
/release-minor
/release-major
```

---

## NPM Publishing Details

After release script publishes:

```
Published packages (if successful):
  ✅ @orion-ds/react@3.2.1
  ✅ @orion-ds/core@1.3.1
  ✅ @orion-ds/cli@1.0.1
  ✅ @orion-ds/mcp@1.0.1
  ✅ @orion-ds/validate@1.0.1
  ✅ @orion-ds/create@1.0.1

View on npm:
  https://www.npmjs.com/package/@orion-ds/react/v/3.2.1

Git tag created:
  v3.2.1
```

---

## Post-Release Actions

After successful release:

1. ✅ Announce in community channels
2. ✅ Create GitHub release (if public)
   ```bash
   gh release create v3.2.1 --notes "Bug fixes and improvements"
   ```
3. ✅ Update documentation site
4. ✅ Post on social media (if applicable)
5. ✅ Update internal status

---

## Rollback (Emergency Only)

If something went wrong after publishing:

```bash
# View what was published
npm view @orion-ds/react versions | tail -5

# CAREFUL: Unpublish from npm
npm unpublish @orion-ds/react@3.2.1

# Delete git tag
git tag -d v3.2.1
git push origin :refs/tags/v3.2.1

# Revert commits
git revert HEAD~1 -m 1

# Fix issue, then release again
/pre-release
/release-patch
```

**Note**: NPM has a 24-hour grace period for unpublishing. Use sparingly.

---

## References

- Release script: `scripts/release.js`
- Package versions: `packages/*/package.json`
- Git tags: `git tag`
- NPM registry: https://registry.npmjs.org/
- Semver guide: https://semver.org
