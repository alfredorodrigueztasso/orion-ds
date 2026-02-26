---
name: component-rename
description: "Safely rename or move a component across the monorepo. Updates index.ts exports, templates, registry, stories. Auto-triggers when user says \"rename component\", \"move component\", \"refactor component name\"."
allowed-tools: ["Bash", "Read", "Edit", "Glob"]
---

# Component Rename — Safe Refactoring

Renames or moves a component while updating all imports, exports, and dependencies across the monorepo.

## What This Does

1. **Validates component exists** - Check current location
2. **Find all references** - Grep for imports/exports
3. **Update index.ts** - Fix barrel exports
4. **Update templates** - Fix template imports
5. **Update stories** - Rename story file
6. **Update registry** - Rebuild registry entry
7. **Verify no broken imports** - Type-check after changes

**Critical for**: Safe refactoring without breaking consumers

**Runtime**: ~30-60 seconds

## Usage

```bash
/component-rename Button NewButton        # Rename Button → NewButton
/component-rename Modal ConfirmDialog     # Rename Modal → ConfirmDialog
/component-rename Card DataCard           # Rename Card → DataCard
```

## Execution Steps

1. **Validate input** - Check old/new names are valid PascalCase
2. **Find references** - Search across monorepo for imports/uses
3. **Dry run** - Show what would change
4. **Ask confirmation** - User approves changes
5. **Rename directory** - mv packages/react/src/components/OldName NewName
6. **Update exports** - Edit index.ts files
7. **Update imports** - Replace in templates
8. **Update tests** - Rename test files
9. **Update stories** - Rename story files
10. **Rebuild registry** - `npm run build:registry`
11. **Type-check** - Verify no broken imports
12. **Report changes** - Summary of all files updated

## Dry Run Output

```
Renaming: Button → NewButton

Files to be changed:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📁 Directory: packages/react/src/components/
   Button/ → NewButton/

📄 Exports (packages/react/src/index.ts):
   - export { Button } from './components/Button';
   + export { NewButton } from './components/NewButton';

📄 Exports (packages/react/src/sections/index.ts):
   (No changes needed)

📄 Templates using Button (24 files):
   - packages/blocks/src/sections/Hero.tsx
     import { Button } from '@orion-ds/react';
     <Button variant="primary">  → <NewButton variant="primary">

   - packages/blocks/src/templates/Landing.tsx
     import { Button } from '@orion-ds/react';
     <Button>Click</Button>  → <NewButton>Click</NewButton>

   (... 22 more files)

📄 Stories (packages/react/src/components/):
   Button.stories.tsx  → NewButton.stories.tsx

📄 Tests (packages/react/src/components/):
   Button.test.tsx  → NewButton.test.tsx

📄 Registry:
   registry/components/button.json  → registry/components/newbutton.json

Total changes: 28 files across 4 packages

Proceed? (yes/no)
```

## Success Output

```
✅ Component Renamed Successfully!

Button → NewButton

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Changes applied:
✅ Directory: Button/ → NewButton/
✅ Export in packages/react/src/index.ts
✅ Story file: Button.stories.tsx → NewButton.stories.tsx
✅ Test file: Button.test.tsx → NewButton.test.tsx
✅ Registry entry: button.json → newbutton.json
✅ Updated 24 template files importing Button
✅ Type-check passed

All imports updated:
- packages/blocks/src/sections/Hero.tsx
- packages/blocks/src/templates/Landing.tsx
- ... (22 more files)

Next steps:
1. Review changes: git diff
2. Test in Storybook: /storybook
3. Run tests: npm test NewButton
4. Commit: git add . && git commit -m "refactor(react): rename Button to NewButton"
```

## Failure Output

```
❌ Rename Failed

Button → NewButton

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Error: Cannot rename Button because:
- NewButton already exists
  Location: packages/react/src/components/NewButton/

Fix options:
1. Choose different name: /component-rename Button CustomButton
2. Delete old NewButton first
3. Rename NewButton to something else first
```

## Supported Component Locations

Works with components in:
- `packages/react/src/components/` ✓
- `packages/react/src/sections/` ✓
- `packages/blocks/src/` ✓ (premium sections)

## Files Updated

Per component rename, updates:

| File | Action |
|------|--------|
| Component directory | Rename: OldName/ → NewName/ |
| packages/react/src/index.ts | Export statement |
| packages/react/src/sections/index.ts | If applicable |
| Component.tsx | No change (code stays same) |
| Component.types.ts | No change |
| Component.module.css | No change |
| Component.stories.tsx | Filename + story names |
| Component.test.tsx | Filename + describe block |
| README.md | Update component name references |
| registry/ | Entry filename + metadata |
| Template files | All <Button /> → <NewButton /> |
| Tests | Update imports |

## When to Use

**Good use cases**:
- Rename for clarity: `Button` → `PrimaryButton`
- Correct naming: `ToggleSwitch` → `Switch`
- Namespace conflicts: `Card` → `DataCard`

**NOT for**:
- Moving to different package (use mv + manual updates)
- Breaking API (use `/update-component` instead)
- Creating alias/variant (use component composition)

## Limitations

Cannot:
- Rename to already-existing component name
- Move between different packages (react ↔ blocks)
- Rename in templates/sections (only main components)

For complex moves, use manual approach:
```bash
git mv packages/react/src/components/Button packages/react/src/components/NewButton
# Then manually update imports
```

## Rollback

If something goes wrong:

```bash
git diff  # Review changes
git checkout .  # Discard all changes
git reset --hard HEAD  # Or reset to before rename

# Then run again with fix
/component-rename OldName NewName
```

## Auto-Trigger Patterns

This skill auto-triggers when user says:
- "rename component Button to NewButton"
- "move component Modal to ConfirmDialog"
- "refactor component name"
- "rename modal"

## Related Skills

**Before rename**:
- `/storybook` - View current component
- `/validate-ai-first` - Check compliance

**After rename**:
- `/storybook` - View renamed component
- `/pr-ready` - Prepare PR with renames
- `/test-full` - Run full suite to verify

## Exit Codes

- **0** = Rename successful
- **1** = Rename failed (validation, duplicate name, etc.)

## References

- Component structure: `packages/react/src/components/[Name]/`
- Export pattern: `packages/react/src/index.ts`
- Registry: `registry/components/`
- Templating: `packages/blocks/src/`
