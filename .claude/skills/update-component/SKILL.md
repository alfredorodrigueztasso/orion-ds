---
name: update-component
description: Update an Orion component after design iterations — validates AI-First compliance, syncs README, Storybook stories, spec.yaml, and registry. Auto-triggers when user says "update component", "I changed the component", "iterating on", "sync docs", or after modifying component files.
allowed-tools: ["Bash", "Read", "Glob", "Write", "Edit"]
argument-hint: [ComponentName]
---

# Update Component — Full Sync & Validate

After any design iteration or structural change to a component, this skill ensures **every related file is up to date** and the system is fully compliant. Prevents documentation drift, broken stories, and AI hallucination from stale specs.

## What This Does

1. **Reads** current state of all component files
2. **Validates** AI-First compliance (`validate-components.js`)
3. **Type-checks** TypeScript across the monorepo
4. **Lints** CSS Modules for token violations
5. **Updates** `README.md` — props table, examples, variants
6. **Updates** `ComponentName.stories.tsx` — stories match current props/variants
7. **Updates** `ComponentName.spec.yaml` (if exists) — design spec reflects reality
8. **Rebuilds** registry entry (`npm run build:registry`)
9. **Reports** every file that was touched and why

## Usage

```bash
/update-component Button
/update-component AgentCard
/update-component Modal
/update-component          # Asks which component to update
```

## Auto-Trigger Patterns

This skill auto-triggers when user says:
- "update component [Name]"
- "I changed [ComponentName]"
- "iterating on [ComponentName]"
- "sync the docs for [ComponentName]"
- "update stories for [ComponentName]"
- "refresh [ComponentName] documentation"
- "I made visual changes to [ComponentName]"
- After modifying `*.tsx`, `*.module.css`, or `*.types.ts` inside a component folder

---

## Execution Steps

### Step 0: Resolve Component Name

If no argument is provided, ask:
```
Which component did you update?
(e.g., Button, AgentCard, Modal, Dropdown)
```

Then verify the component exists:
```bash
ls "packages/react/src/components/[ComponentName]/"
```

If not found in `components/`, check `sections/`:
```bash
ls "packages/react/src/sections/[ComponentName]/"
```

Set `COMPONENT_DIR` to the resolved path.

---

### Step 1: Read All Component Files (Parallel)

Read these files simultaneously:

```
ComponentName.tsx          — Current implementation
ComponentName.types.ts     — Current prop interface
ComponentName.module.css   — Current CSS Modules
ComponentName.stories.tsx  — Current Storybook stories
README.md                  — Current documentation
ComponentName.spec.yaml    — Design spec (if exists)
index.ts                   — Exports
```

**Goal**: Understand the CURRENT state before making any changes.

---

### Step 2: Analyze What Changed

Compare `ComponentName.types.ts` against `README.md` Props Reference section:

**Detect mismatches**:
- Props in `.types.ts` NOT documented in `README.md` → must add
- Props in `README.md` that no longer exist in `.types.ts` → must remove
- Variant values changed (e.g., renamed `ghost` to `subtle`) → must update
- Default values changed → must update

Compare `ComponentName.tsx` against `ComponentName.stories.tsx`:

**Detect missing stories**:
- New variant values → need new Story export
- New props with visual effect → need Story showing it
- Removed variants → remove dead Story exports

**Report findings**:
```
Analyzing Button...

Props diff:
+ isLoading prop added (not in README or stories)
+ iconRight prop added (not in stories)
~ variant 'ghost' → 'subtle' renamed (README still says 'ghost')

Stories diff:
- Missing: Loading story
- Missing: IconRight story
- Stale: Ghost story (variant renamed to 'subtle')

CSS diff:
✅ All classes use semantic tokens
```

---

### Step 3: Run AI-First Validation

```bash
cd "/Users/alfredo/Documents/AI First DS Library" && node scripts/validate-components.js 2>&1 | grep -A5 "[ComponentName]"
```

If violations found → **fix them first before updating docs**:
- Hardcoded colors → replace with CSS variables
- Hardcoded pixels → replace with spacing tokens
- `brand` prop → remove (brand is global)
- `data-brand` in JSX → remove

---

### Step 4: Run TypeScript Check

```bash
cd "/Users/alfredo/Documents/AI First DS Library" && npm run type-check 2>&1 | head -50
```

If TS errors in this component → **fix them before proceeding**.

---

### Step 5: Update README.md

Update the `README.md` for the component. **Always preserve** existing prose, context, "When to Use", "Anti-Patterns" sections — only update the parts that changed.

#### 5a. Update Props Reference section

Re-generate the props table from `ComponentName.types.ts`:

```markdown
## Props Reference

```typescript
interface ComponentNameProps {
  // [current props from .types.ts]
}
```
```

Rules:
- Include ALL props from the interface
- Show types exactly as defined
- Include JSDoc `@default` values as comments
- Keep variant unions aligned and readable

#### 5b. Update Variants Guide table (if variants changed)

If `variant` type changed, update the variants table:

```markdown
| Variant    | Use When                    |
|------------|-----------------------------|
| `primary`  | Main CTA                    |
| ...        | ...                         |
```

#### 5c. Update Examples section (if new props added)

Add code examples for any new props that lack them.

#### 5d. Update Accessibility section (if new requirements)

If new `aria-*` props were added, document their requirements.

---

### Step 6: Update Storybook Stories

Update `ComponentName.stories.tsx` to reflect current reality.

#### 6a. Update `argTypes` in meta

Ensure every prop in `ComponentName.types.ts` has a corresponding `argTypes` entry:

```typescript
argTypes: {
  variant: {
    control: 'select',
    options: ['primary', 'secondary', ...],  // must match .types.ts
    description: 'Visual style of the component',
  },
  size: {
    control: 'select',
    options: ['sm', 'md', 'lg'],
    description: 'Component size',
  },
  isLoading: {
    control: 'boolean',
    description: 'Shows loading spinner',
  },
  // ... all props
}
```

#### 6b. Add missing Story exports

For each variant value, ensure a Story exists:

```typescript
// If variant="subtle" exists but no Subtle story → add:
export const Subtle: Story = {
  args: {
    variant: 'subtle',
    children: 'Subtle Button',
  },
};
```

For new props with visual impact, add a dedicated story:

```typescript
export const Loading: Story = {
  args: {
    isLoading: true,
    children: 'Saving...',
  },
};

export const WithIconRight: Story = {
  args: {
    iconRight: <ChevronRight size={20} />,
    children: 'Continue',
  },
};
```

#### 6c. Remove stale Story exports

If a variant was removed from `.types.ts`, remove its Story export.

#### 6d. Update AllVariants story (if exists)

If there's a `AllVariants` or `Overview` story showing all variants side-by-side, update it to include new variants and remove old ones.

---

### Step 7: Update spec.yaml (if exists)

If `ComponentName.spec.yaml` exists, update:

```yaml
name: ComponentName
description: [Keep existing description, update if component purpose changed]
variants:
  # Update to match current variant values in .types.ts
  - primary: Main call-to-action
  - secondary: Supporting action
  # Add new variants, remove deleted ones

semanticTokens:
  # Verify these still match .module.css usage
  background: --interactive-primary
  text: --interactive-primary-text
  # Add new tokens used, remove unused ones
```

---

### Step 8: Lint CSS Modules

```bash
cd "/Users/alfredo/Documents/AI First DS Library" && npm run lint:css -- --allow-empty-input 2>&1 | grep -A3 "[ComponentName]"
```

Fix any Stylelint violations found.

---

### Step 9: Smart Registry Rebuild (NEW)

**Diff-aware registry update** — Only rebuild if API changed:

```bash
# Detect if API changed (props, variants, exports)
git diff HEAD -- "packages/react/src/components/[ComponentName]/*.tsx" "packages/react/src/components/[ComponentName]/*.types.ts" > /tmp/api-changes.txt

# Check if changes affect the public API
if grep -q "export\|interface\|type " /tmp/api-changes.txt; then
  # API changed → rebuild registry
  cd "/Users/alfredo/Documents/AI First DS Library" && npm run build:registry 2>&1 | tail -5
else
  # Only docs/styles changed → skip registry rebuild (save 15-20s)
  echo "✅ No API changes detected. Skipping registry rebuild."
fi
```

**Smart behavior**:
- **API changed** (props, variants, types) → Full `npm run build:registry` (~20s)
- **Only docs changed** (README, stories, CSS) → Skip rebuild (~0s)
- **Saves**: ~15-20 seconds per iteration when only updating documentation

**Why this matters**:
- Iterating on README/stories: Skip rebuild, save time
- Change component props: Auto-detect, rebuild registry
- Zero manual decision needed

---

### Step 10: Final Validation Report

Run the full compliance check one more time to confirm everything passes:

```bash
cd "/Users/alfredo/Documents/AI First DS Library" && node scripts/validate-components.js 2>&1 | tail -20
```

---

## Success Output Format

```
🔄 Updating Component: Button
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📂 Component: packages/react/src/components/Button/

📋 Analysis Complete:
   Props added:    isLoading, iconRight
   Props removed:  (none)
   Variants changed: ghost → subtle
   New CSS classes: .loading, .iconRight

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🛡️ AI-First Validation: ✅ PASSED

📘 README.md: ✅ Updated
   - Props table: added isLoading, iconRight
   - Variants table: renamed ghost → subtle
   - Added Loading State example
   - Added Icon Right example

📖 Button.stories.tsx: ✅ Updated
   - argTypes: added isLoading, iconRight controls
   - Added: Loading story
   - Added: WithIconRight story
   - Renamed: Ghost → Subtle story

📐 Button.spec.yaml: ✅ Updated
   - Variants: updated ghost → subtle
   - Tokens: added --interactive-loading-opacity

🏗️ Registry: ✅ Rebuilt
   - registry/components/button.json updated

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ TypeScript: All types valid
✅ CSS Lint: No violations
✅ AI-First: 100% compliant

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎉 Button is fully synced and validated!

Next steps:
  npm run storybook   ← Preview updated stories
  /validate-ai-first  ← Full system validation
```

---

## Failure Output Format

```
🔄 Updating Component: Button
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

❌ AI-First Violations Found — Fix before updating docs:

   Button.module.css:34
   ❌ Hardcoded color: #1B5BFF
   Fix: Replace with var(--interactive-primary)

   Button.tsx:67
   ❌ Hardcoded pixel: 24px
   Fix: Replace with var(--spacing-6)

Fix violations above, then run /update-component Button again.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## File Checklist (All Must Be In Sync)

| File | What to Check | Action |
|------|--------------|--------|
| `ComponentName.tsx` | Implementation matches intent | Read only |
| `ComponentName.types.ts` | Source of truth for props | Read only (fix TS errors if any) |
| `ComponentName.module.css` | No hardcoded values | Fix violations |
| `ComponentName.stories.tsx` | Stories cover all props + variants | Update |
| `README.md` | Props table, examples, variants accurate | Update |
| `ComponentName.spec.yaml` | Variants + tokens match implementation | Update if exists |
| `index.ts` | All exports are correct | Verify |
| `registry/components/name.json` | Registry reflects current component | Rebuild |

---

## Rules for Updating Stories

**ALWAYS add a Story for**:
- Each new variant value in the `variant` prop union
- Each boolean prop that has visual effect (`isLoading`, `fullWidth`, `iconOnly`)
- Each new combination that changes visual output significantly

**NEVER add a Story for**:
- Internal/implementation props (refs, event handlers like `onClick`)
- Props inherited from HTMLAttributes that don't change visual output
- Duplicate stories that show the same visual state

**Story naming convention**:
- `Primary`, `Secondary`, `Ghost` — for variant stories
- `Loading`, `Disabled`, `FullWidth` — for state stories
- `WithIcon`, `WithIconRight`, `IconOnly` — for icon stories
- `AllVariants`, `Overview` — for combined showcase

---

## Rules for Updating README

**ALWAYS update**:
- Props Reference code block (keep in sync with `.types.ts`)
- Variants table (keep variant names accurate)
- Examples that reference removed/renamed props

**PRESERVE (do not overwrite)**:
- "When to Use" / "When NOT to Use" tables (design intent)
- "Anti-Patterns" section (usage guidance)
- "Background Context Rule" or other decision guides
- Prose explanations of WHY (not just what)

**ADD when missing**:
- Example for each new prop
- Accessibility note for new ARIA props
- Anti-pattern example if new prop could be misused

---

## Integration with Other Skills

**Run after**: Making changes to any component file

**Automatically runs**:
- `/validate-ai-first` (Step 3)
- TypeScript check (Step 4)
- CSS lint (Step 8)
- Registry rebuild (Step 9)

**Run next**:
- `npm run storybook` — Preview the updated stories visually
- `/pr-ready` — If preparing a pull request after updates

---

## Exit Codes

- **0** = All files synced, validation passed
- **1** = AI-First violations found (not fixed) or TypeScript errors

## References

- Component directory: `packages/react/src/components/`
- Sections directory: `packages/react/src/sections/`
- AI-First validation: `scripts/validate-components.js`
- Registry builder: `npm run build:registry`
- Skill dependency: `validate-ai-first`
