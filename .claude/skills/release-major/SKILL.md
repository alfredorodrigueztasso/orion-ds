---
name: release-major
description: Automated major release (1.0.0 → 2.0.0). Auto-triggers when user says "release major", "publish major", "bump major version", "major release", "breaking changes", or "v5.0.0". Includes audit, build, npm publish with git tagging. REQUIRES detailed changelog.
allowed-tools: ["Bash"]
disable-model-invocation: true
argument-hint: [--dry-run]
---

# Release Major Version

Automated major release: bumps version (1.0.0 → 2.0.0), builds, and publishes to npm.

**⚠️ WARNING**: Major releases indicate breaking changes. Users MUST update their code to upgrade.

## What This Does

1. **Validates system health** - Pre-release audit
2. **Bumps major version** - Updates package.json in all workspace packages
3. **Builds all packages** - Clean build from scratch
4. **Publishes to npm** - Uploads packages to npm registry
5. **Creates git tag** - Tags commit as `v2.0.0`
6. **Commits changes** - Commits version bump

**Example**: 3.2.0 → 4.0.0

**Use for**: Breaking changes, API overhauls, deprecation cleanup

**Runtime**: ~3-5 minutes (audit + build + publish)

## Usage

```bash
/release-major
/release-major --dry-run  # Preview without publishing
```

## ⚠️ Pre-Release Checklist for Major Versions

Before releasing a major version, ensure:

- ✅ CHANGELOG.md is complete with migration guide
- ✅ MIGRATION_V*.md file created with upgrade instructions
- ✅ Deprecation warnings removed from code
- ✅ Old APIs completely removed (not just deprecated)
- ✅ All tests passing (100% suite, no skipped tests)
- ✅ Documentation updated for new APIs
- ✅ GitHub issues closed related to breaking changes
- ✅ Team/community notified about breaking changes

## Execution Steps

1. **Check CHANGELOG requirement**: Verify CHANGELOG.md describes breaking changes
2. **Check MIGRATION_V*.md**: Verify migration guide exists
3. **Confirmation**: Ask user "Ready to release major version?"
4. **Pre-release audit**: Run `/pre-release` validation
5. **Execute release**: Run `npm run release:major`
6. **Report success**: Show new version and migration notes

**Why confirmation?** Major releases are highly destructive - users must upgrade carefully.

## Commands

```bash
# Dry run (preview)
cd "/Users/alfredo/Documents/AI First DS Library" && npm run release:dry

# Actual release (use with extreme caution)
cd "/Users/alfredo/Documents/AI First DS Library" && npm run release:major
```

## Auto-Trigger Patterns

This skill auto-triggers when user says:
- "release major version"
- "publish major"
- "bump to 4.0.0" (major version)
- "major release"
- "breaking changes"
- "remove deprecated APIs"

**Manual invocation only**: User must explicitly invoke this skill (not auto-triggered by AI)

**Why?** Publishing breaking changes is destructive and requires:
- Careful planning
- User communication
- Migration documentation
- Human oversight

## Confirmation Required

Before running, ask user:

```
⚠️  MAJOR RELEASE - Breaking Changes!

Current version: 3.2.0
New version: 4.0.0

BEFORE PROCEEDING, confirm:
- [ ] CHANGELOG.md documents breaking changes
- [ ] MIGRATION_V4.md provides upgrade guide
- [ ] All deprecated code removed
- [ ] Tests passing (100% suite)
- [ ] Team notified about breaking changes

This will:
1. Bump version in all packages
2. Build and publish to npm
3. Create git tag v4.0.0
4. Commit and push changes

⚠️  Users MUST update their code to upgrade!

Continue? (yes/no)
```

**If user says no**: Cancel operation, exit skill

**If user says yes**: Proceed with release

## Success Output Format

```
🚀 Releasing Major Version...

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ Pre-Release Validation
   All checks passed

✅ Version Bump: 3.2.0 → 4.0.0

✅ Build Packages
   - @orion-ds/react@4.0.0
   - @orion-ds/blocks@2.0.0
   - @orion-ds/core@2.0.0 (deprecated)
   - @orion-ds/cli@2.0.0

✅ Publish to npm
   - @orion-ds/react@4.0.0
     https://www.npmjs.com/package/@orion-ds/react/v/4.0.0

   - @orion-ds/blocks@2.0.0
     https://www.npmjs.com/package/@orion-ds/blocks/v/2.0.0

   - @orion-ds/cli@2.0.0
     https://www.npmjs.com/package/@orion-ds/cli/v/2.0.0

✅ Git Tag Created: v4.0.0

✅ Committed: "chore: release v4.0.0"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎉 Release v4.0.0 published successfully!

⚠️  Breaking Changes - User Action Required!

Next steps:
1. Create GitHub release with migration guide
   gh release create v4.0.0 --notes "$(cat MIGRATION_V4.md)"

2. Announce breaking changes (URGENT)
   - Discord: "🔴 @everyone Orion v4.0.0 released - BREAKING CHANGES"
   - GitHub Discussions: Detailed migration post
   - Email: Notify key users

3. Update all documentation
   - docs-site: Mark v3.x as legacy
   - README: Update installation/usage examples
   - Storybook: Update component APIs

4. Monitor feedback
   - Watch Discord for migration questions
   - Be ready to hotfix issues
   - Provide support for users upgrading

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## Failure Output Format

```
🚀 Releasing Major Version...

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

❌ Pre-Release Validation FAILED

   Tests failed: 5/145 tests

   Failed:
   - Chat.test.tsx: "should handle file upload"
   - Button.test.tsx: "should toggle theme"

   Cannot release with failing tests!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

❌ RELEASE ABORTED

   System is not ready for major release

   For major versions:
   1. Run /test-full - must pass 100%
   2. Fix ALL failing tests
   3. Ensure CHANGELOG.md is complete
   4. Ensure MIGRATION_V*.md is written
   5. Run /pre-release to verify
   6. Run /release-major again

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## Dry Run Mode

Preview release without publishing:

```bash
/release-major --dry-run
```

**What it does**:
- Runs pre-release validation
- Shows what version would be bumped to
- Shows which packages would be published
- Does NOT publish to npm
- Does NOT create git tag
- Does NOT commit changes

**Use for**:
- Testing release process
- Verifying package contents
- Checking for issues before real release

**Output example**:
```
🔍 DRY RUN - No changes will be made

Version bump: 3.2.0 → 4.0.0

Packages to publish:
- @orion-ds/react@4.0.0
- @orion-ds/blocks@2.0.0
- @orion-ds/core@2.0.0
- @orion-ds/cli@2.0.0

✅ Dry run complete - everything looks good!

To publish for real, run:
/release-major

⚠️  Ensure migration guide is complete before publishing!
```

## Breaking Changes Documentation

For major releases, create these files:

### 1. Update CHANGELOG.md

```markdown
## [4.0.0] - 2026-03-15

### 🔴 BREAKING CHANGES

- Removed deprecated `brand` prop from all components
- `useTheme()` no longer accepts `brand` parameter
- Changed `data-theme` values from `light/dark` to `theme-light/theme-dark`
- `@orion-ds/core` deprecated - use `@orion-ds/react` only

### Migration

See MIGRATION_V4.md for upgrade guide.

### ✨ Features

- Added `useThemeContext()` hook (replaces `useTheme()`)
- Added `/client` entry point for Next.js App Router
- Tree-shaking enabled (50% smaller bundle)

### 🐛 Fixes

- Fixed SSR hydration issues in Next.js

### 📦 Dependencies

- Moved to peerDependencies: lucide-react, react-markdown
```

### 2. Create MIGRATION_V4.md

```markdown
# Migration Guide: Orion v3 → v4

## Overview

Orion v4 is a breaking change release that removes deprecated APIs and enables tree-shaking.

## Key Changes

### 1. Remove `brand` prop from components

**Before (v3)**:
```jsx
<Button brand="red">Click</Button>
```

**After (v4)**:
```jsx
<ThemeProvider brand="red">
  <Button>Click</Button>
</ThemeProvider>
```

### 2. Update theme hook

**Before (v3)**:
```jsx
const { setTheme, setBrand } = useTheme();
```

**After (v4)**:
```jsx
const { setTheme, setBrand } = useThemeContext();
```

### 3. Update imports

**Before (v3)**:
```jsx
import { Button } from '@orion-ds/core';
```

**After (v4)**:
```jsx
import { Button } from '@orion-ds/react';
```

## Troubleshooting

- Error: "brand prop not supported" → Use ThemeProvider instead
- Error: "useTheme not found" → Use useThemeContext instead
- Missing styles → Import `@orion-ds/react/styles.css`
```

## When to Use Major Release

Use major releases for:
- ✅ Breaking API changes
- ✅ Removing deprecated features
- ✅ Major architecture overhauls
- ✅ Dependency upgrades with breaking changes

**Do NOT use** for:
- ❌ New features (use minor)
- ❌ Bug fixes only (use patch)
- ❌ Internal refactoring with same API (use patch)

## Semantic Versioning (semver)

**Format**: MAJOR.MINOR.PATCH (e.g., 4.0.0)

- **MAJOR**: Breaking changes (3.0.0 → 4.0.0)
- **MINOR**: New features, backward compatible (3.2.0 → 3.3.0)
- **PATCH**: Bug fixes, backward compatible (3.2.0 → 3.2.1)

**Examples**:
```
1.0.0 → 1.0.1  Patch: Fixed button hover state bug
1.0.1 → 1.1.0  Minor: Added new Card component
1.1.0 → 2.0.0  Major: Removed deprecated Button sizes
```

## Communication Checklist

After major release:
- [ ] GitHub release with migration guide
- [ ] Discord/Slack announcement
- [ ] Email to maintainers/key users
- [ ] Twitter/social media
- [ ] Update docs website
- [ ] Add legacy version note to v3 docs
- [ ] Monitor support channels for questions

## Related Skills

**Before release**:
- `/pr-ready` - Prepare code for PR
- `/pre-release` - Validate system health
- `/test-full` - Run complete test suite (must be 100%)

**Alternative releases**:
- `/release-patch` - Patch version (1.0.0 → 1.0.1)
- `/release-minor` - Minor version (1.0.0 → 1.1.0)

**After release**:
- Create GitHub release with full migration guide
- Announce in all community channels
- Monitor support for migration questions
- Be ready to hotfix critical issues

## Exit Codes

- **Exit code 0** = Release successful
- **Exit code 1** = Release failed (validation, build, or publish error)

## Invocation Control

**User-only invocation**: `disable-model-invocation: true`

**Why?** Major releases have wide impact and require:
- Breaking change communication
- Migration documentation
- User notification
- Careful human oversight

**AI cannot invoke** this skill automatically.

## References

- Release script: `scripts/release.js`
- Pre-publish checks: `scripts/pre-publish-check.js`
- Semantic versioning: https://semver.org
- npm publish docs: https://docs.npmjs.com/cli/publish
- Git tagging: https://git-scm.com/book/en/v2/Git-Basics-Tagging
