# Update Component — Reference Guide

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
