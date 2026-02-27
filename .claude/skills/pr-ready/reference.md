# PR Ready — Reference Guide

## Complete PR Workflow (6 Steps)

### Step 1: Auto-Fix (Format + Lint)
```bash
cd "/Users/alfredo/Documents/AI First DS Library"
npm run format                  # Auto-format all files
npm run lint:fix                # Fix ESLint violations
npm run lint:css:fix            # Fix Stylelint violations
```

**Fixes**:
- ✅ Prettier formatting issues
- ✅ ESLint violations (unused vars, etc.)
- ✅ CSS linting issues
- ✅ Consistent code style

**Result**: All style issues resolved automatically

---

### Step 2: System Audit
```bash
npm run audit
```

**Validates**:
- ✅ Chain of Truth compliance
- ✅ TypeScript types
- ✅ AI-First compliance
- ✅ Component rules

**Stops if**: Any violations found

---

### Step 3: Build All Packages
```bash
npm run build:packages
```

**Validates**:
- ✅ All packages compile
- ✅ No TypeScript errors
- ✅ Dist files generated

**Result**: Production-ready builds created

---

### Step 4: Run Test Suite
```bash
npm run test:full
```

**Runs**:
- ✅ Unit tests (Vitest)
- ✅ E2E tests (Playwright)
- ✅ Visual regression (Percy)

**Required**: All tests must pass

---

### Step 5: Validate Previews
```bash
npm run validate:previews
```

**Checks**:
- ✅ No duplicate components in Storybook
- ✅ No hardcoded styles in stories
- ✅ Proper use of Orion components
- ✅ No local relative imports

---

### Step 6: Sync Registry
```bash
npm run build:registry && npm run build:registry-api
```

**Generates**:
- ✅ registry/*/json files
- ✅ public/r/ HTTP API
- ✅ Updated component manifest

**Result**: Registry ready for distribution

---

## When to Use `/pr-ready` vs `/quick-check`

### Use `/quick-check` when:
- Just wanting to validate before commit
- Doing quick local checks (30 sec)
- Format + lint + type-check only
- Don't need full build/test

```bash
/quick-check                    # Fast validation
→ git commit
```

### Use `/pr-ready` when:
- Preparing to submit PR
- Want comprehensive validation
- Need full build + test + registry
- Before creating GitHub PR

```bash
/pr-ready                       # Full workflow (~2 min)
→ git push
→ gh pr create
```

---

## Exit Codes

- **0** = All checks passed ✅ Ready for PR
- **1** = Some checks failed ❌ Fix and retry
- **2** = User cancelled

---

## Common Failures & Fixes

### Format Check Failed
```bash
/quick-check shows: "12 files need formatting"

Fix:
npm run format
/pr-ready
```

### ESLint Failed
```bash
/quick-check shows: "3 ESLint violations"

Fix:
npm run lint:fix
/pr-ready
```

### TypeScript Failed
```bash
/quick-check shows: "Type 'string | undefined' not assignable"

Fix (manual):
1. Open file with error
2. Add type guard: if (value !== undefined)
3. Or use optional: value ?? 'default'
4. /pr-ready
```

### Build Failed
```bash
/pr-ready shows: "Build failed"

Fix:
1. npm run build:packages
2. Check error output
3. Fix issue
4. /pr-ready
```

### Tests Failed
```bash
/pr-ready shows: "5 test failures"

Fix:
1. cd packages/react && npm test
2. Review failures
3. Fix code or tests
4. /pr-ready
```

### Registry Sync Failed
```bash
/pr-ready shows: "Registry build failed"

Fix:
npm run build:registry
/pr-ready
```

---

## PR Description Template

After `/pr-ready` passes, use this template:

```markdown
## Summary
Brief description of changes (1-2 sentences)

## Changes
- Change 1
- Change 2
- Change 3

## Testing
- [ ] Unit tests passing
- [ ] E2E tests passing
- [ ] Visual tests reviewed
- [ ] Tested in Storybook

## Checklist
- [ ] Code follows style guide
- [ ] Self-review completed
- [ ] Comments added for clarity
- [ ] No breaking changes (or documented)

## Related Issues
Fixes #123
Related to #456
```

---

## Integration with Other Skills

**Before `/pr-ready`**:
- `/storybook` — Visual development
- `/validate-ai-first` — Compliance check
- `/quick-check` — Pre-commit validation

**After `/pr-ready`**:
- Create GitHub PR: `gh pr create`
- Request review from team
- Address feedback
- Push updates: `git push`

**Before releasing**:
- `/pre-release` — Gate check before npm publish

---

## Performance Notes

**Runtime breakdown**:
- Auto-fix: ~10 seconds
- Audit: ~20 seconds
- Build: ~30 seconds
- Tests: ~60 seconds
- Registry: ~10 seconds
- **Total**: ~2 minutes

**Optimize by**:
- Running early in development (less to fix)
- Using `/quick-check` between iterations
- Running tests in parallel (already done)

---

## Git Workflow After `/pr-ready`

```bash
# 1. Ensure all checks passed
/pr-ready                       # ✅ All green

# 2. Push changes
git push origin feature-branch

# 3. Create PR on GitHub
gh pr create --title "Your title" --body "Your description"

# 4. Wait for CI checks
# (GitHub Actions runs checks again)

# 5. Request review
gh pr review --request @teammate

# 6. Address feedback if needed
# (repeat steps 2-3)

# 7. Merge when approved
gh pr merge --squash
```

---

## References

- Quick-check script: `scripts/validate-quick.sh`
- Format config: `.prettierrc`
- Lint config: `.eslintrc.json`
- CSS lint config: `.stylelintrc.json`
- Test config: `packages/react/vitest.config.ts`
- Build config: `packages/react/vite.config.ts`
