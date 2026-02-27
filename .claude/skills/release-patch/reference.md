# Release Patch — Reference Guide

## When to Use Patch Release

Use patch releases for:
- ✅ Bug fixes
- ✅ Documentation updates
- ✅ Internal refactoring
- ✅ Performance improvements (no API changes)
- ✅ Dependency updates
- ✅ Build process improvements

**Do NOT use** for:
- ❌ New features (use minor)
- ❌ Breaking changes (use major)
- ❌ New components (use minor)
- ❌ API changes (use minor or major)

---

## Semantic Versioning (semver)

**Format**: MAJOR.MINOR.PATCH (e.g., 3.2.1)

- **MAJOR**: Breaking changes (3.0.0 → 4.0.0)
- **MINOR**: New features, backward compatible (3.2.0 → 3.3.0)
- **PATCH**: Bug fixes, backward compatible (3.2.0 → 3.2.1)

**Examples**:
```
1.0.0 → 1.0.1  Patch: Fixed button hover state bug
1.0.1 → 1.1.0  Minor: Added new Card component
1.1.0 → 2.0.0  Major: Removed deprecated Button sizes
```

---

## NPM Package Links

After publishing, packages are available at:

```
https://www.npmjs.com/package/@orion-ds/react/v/3.2.1
https://www.npmjs.com/package/@orion-ds/core/v/1.3.1
https://www.npmjs.com/package/@orion-ds/cli/v/1.0.1
https://www.npmjs.com/package/@orion-ds/mcp/v/1.0.1
https://www.npmjs.com/package/@orion-ds/validate/v/1.0.1
```

**Users install with**:
```bash
npm install @orion-ds/react@3.2.1
```

---

## Git Tags

Tags are created in format `vMAJOR.MINOR.PATCH`:

```
v3.2.1
v3.2.2
v3.3.0
v4.0.0
```

**View tags**:
```bash
git tag                           # List all tags
git show v3.2.1                   # Show tag details
git log --oneline v3.2.0..v3.2.1  # Commits in this release
```

**Delete tags** (if needed):
```bash
git tag -d v3.2.1                  # Delete local
git push origin :refs/tags/v3.2.1  # Delete remote
```

---

## Release Files Involved

| File | Change | Why |
|------|--------|-----|
| `package.json` (root) | Version bump | Workspace version |
| `packages/*/package.json` | Version bump | Individual package version |
| `CHANGELOG.md` (if exists) | New entry | Document changes |
| `git tag` | Create tag | Mark release point |
| `npm registry` | New package | Publish to npm |

---

## Common Release Scenarios

### Scenario 1: Bug Fix in One Package
```bash
# Only @orion-ds/react has the fix
# But all packages usually release together for consistency
# Bump all from 3.2.0 → 3.2.1
```

### Scenario 2: Breaking Change in Core
```bash
# Core (formerly @orion-ds/core) has breaking change
# Use major version (1.3.1 → 2.0.0)
# Update React to match if affected
```

### Scenario 3: Performance Improvement
```bash
# Bundle optimization with no API changes
# Patch release (3.2.0 → 3.2.1)
# Update CHANGELOG with "perf: improve bundle size"
```

---

## Rollback Procedure

If something went wrong after publishing:

```bash
# Step 1: Identify the bad release
npm view @orion-ds/react versions | tail -5

# Step 2: Unpublish from npm (careful - can't be undone)
npm unpublish @orion-ds/react@3.2.1

# Step 3: Delete the git tag
git tag -d v3.2.1
git push origin :refs/tags/v3.2.1

# Step 4: Revert commits
git revert HEAD~1 -m 1

# Step 5: Re-release with fix
# Fix the issue, then run /release-patch again
```

---

## Release Checklist

Before running `/release-patch`, ensure:

- [ ] All tests passing (`/test-full` successful)
- [ ] No lint/format errors (`/quick-check` passing)
- [ ] CHANGELOG.md updated with changes
- [ ] Commit message describes changes clearly
- [ ] You're on main branch (`git branch`)
- [ ] Remote is up to date (`git pull`)
- [ ] Pre-release validation passed (`/pre-release`)

---

## NPM Account Requirements

Publishing requires:
- NPM account with access to `@orion-ds` scope
- 2FA enabled (recommended)
- Logged in locally: `npm login`

**Check login status**:
```bash
npm whoami
npm config get registry
```

---

## Integration with Other Skills

**Before release**:
- `/pr-ready` - Prepare code for PR
- `/pre-release` - Validate system health
- `/test-full` - Run complete test suite
- `/audit` - Full system validation

**Alternative releases**:
- `/release-minor` - Minor version (1.0.0 → 1.1.0)
- `/release-major` - Major version (1.0.0 → 2.0.0)

**After release**:
- Update CHANGELOG.md manually
- Create GitHub release with `gh release create`
- Announce in community channels

---

## Exit Codes

- **0** = Release successful, published to npm
- **1** = Release failed (validation errors, publish failed)
- **2** = User cancelled release
