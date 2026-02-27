# Audit — Reference Guide

## 3-Layer Validation System

The audit runs 3 independent validation layers for comprehensive system health check.

### Layer 1: Chain of Truth (CSS + Tokens)
```bash
npx npm run validate
```

**Validates**:
- ✅ No hardcoded HEX colors (#XXXXXX)
- ✅ No hardcoded pixels (except 0px, 1px, 9999px)
- ✅ No hardcoded font families
- ✅ All colors use semantic tokens
- ✅ All spacing uses token variables
- ✅ CSS follows Chain of Truth

**Checks**:
- theme.css for primitive definitions
- Component.module.css for semantic usage
- Ensures compliance score ≥ 97%

**Exit code**: 0 if passing, 1 if violations

---

### Layer 2: TypeScript Compilation
```bash
npm run type-check
```

**Validates**:
- ✅ No TypeScript errors
- ✅ All types correct across packages
- ✅ Props interfaces valid
- ✅ No `any` types
- ✅ Exports properly typed

**Checks all**:
- packages/react/src/**/*.tsx
- packages/react/src/**/*.types.ts
- packages/blocks/src/**/*.tsx
- All component implementations

**Exit code**: 0 if no errors, 1 if type errors

---

### Layer 3: AI-First Compliance
```bash
node scripts/validate-components.js
```

**Validates**:
- ✅ No `brand` prop on components
- ✅ No `data-brand` attributes in JSX
- ✅ No hardcoded colors in components
- ✅ No hardcoded fonts
- ✅ Proper token usage
- ✅ Component patterns correct

**Checks**:
- All component implementations
- Type definitions
- CSS Modules
- Compliance with AI-First rules

**Exit code**: 0 if all pass, 1 if violations

---

## Pre-Existing Known Issues (Acceptable Violations)

Some violations are documented as acceptable and won't block audit:

### 1. Stepper.module.css (Hardcoded Font Size)
```css
.step-label {
  font-size: 14px;  /* Hardcoded - acceptable */
}
```
**Reason**: Component-specific requirement, documented
**Status**: Temporary
**Due**: Mar 15, 2026

### 2. Overlay Components (Z-Index Warnings)
```css
.modal-backdrop {
  z-index: 9999;    /* High z-index - acceptable */
}
```
**Reason**: Necessary for stacking context in modals
**Status**: Design requirement
**Impact**: None (expected)

---

## Common Audit Violations & Fixes

### Violation 1: Hardcoded Color
```css
.button {
  color: #1B5BFF;   /* ❌ Hardcoded color */
}
```

**Fix**:
```css
.button {
  color: var(--interactive-primary);  /* ✅ Use token */
}
```

### Violation 2: Hardcoded Pixel Value
```css
.card {
  padding: 16px;    /* ❌ Hardcoded pixel */
}
```

**Fix**:
```css
.card {
  padding: var(--spacing-4);  /* ✅ Use token (16px) */
}
```

### Violation 3: TypeScript Error
```typescript
const name: string = params?.name;  /* ❌ Could be undefined */
```

**Fix**:
```typescript
const name: string = params?.name ?? '';  /* ✅ Provide default */
```

### Violation 4: AI-First Violation
```tsx
<Button brand="red" />  /* ❌ brand prop not allowed */
```

**Fix**:
```tsx
<Button variant="primary" />  /* ✅ Use variants, brand is global */
```

---

## Audit Checklist

Run audit if any of these changed:

- [ ] CSS files (*.module.css)
- [ ] Component implementations (*.tsx)
- [ ] Type definitions (*.types.ts)
- [ ] Theme tokens (tokens/*.json)
- [ ] Component props interface

**Quick audit**:
```bash
/audit
```

**Full audit with details**:
```bash
/audit --verbose
```

---

## Understanding Audit Output

### Passing Audit
```
✅ Layer 1: Chain of Truth (CSS/Tokens)
   Compliance: 97% ✓
   Issues: 0

✅ Layer 2: TypeScript Compilation
   Errors: 0

✅ Layer 3: AI-First Compliance
   Violations: 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ AUDIT PASSED
All 3 layers validated successfully
```

### Failing Audit
```
❌ Layer 1: Chain of Truth (CSS/Tokens)
   Compliance: 93% ❌
   Issues: 5

   Button.module.css:12
   ❌ Hardcoded color: #FF0000

   Card.module.css:45
   ❌ Hardcoded pixel: 24px

✅ Layer 2: TypeScript Compilation
   Errors: 0

✅ Layer 3: AI-First Compliance
   Violations: 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
❌ AUDIT FAILED
Fix violations in Layer 1 and rerun
```

---

## Exit Codes

- **0** = All 3 layers pass ✅ System is healthy
- **1** = At least 1 layer failed ❌ Fix violations
- **2** = Configuration invalid

---

## When to Run Audit

### Run BEFORE:
- Creating a pull request (`/pr-ready` runs it)
- Preparing a release (`/pre-release` runs it)
- Merging to main
- Deploying to production

### Run AFTER:
- Significant CSS changes
- Adding new components
- Modifying component props
- Editing token JSON files
- Updating component implementations

### Run REGULARLY:
- Daily (at start of work)
- Weekly (full codebase check)
- Before each PR

---

## Automation & CI/CD

Audit runs automatically in:

1. **Pre-commit hook**: When you try to commit
2. **GitHub Actions**: On PR creation
3. **Pre-release gate**: Before publishing to npm

**To skip** (not recommended):
```bash
git commit --no-verify      # Skip pre-commit hook
```

---

## Integration with Other Skills

**Runs as part of**:
- `/pr-ready` — Step 2: System Audit
- `/pre-release` — Gate 1: System Audit
- `/audit` — Full validation (standalone)

**Used by**:
- `/quick-check` — Includes format + lint
- `/test-full` — Part of comprehensive validation
- `/perf-budget` — Performance gate check

---

## Performance

**Runtime**: ~30-60 seconds

**Breakdown**:
- Layer 1 (CSS): ~10 seconds
- Layer 2 (TypeScript): ~30 seconds
- Layer 3 (AI-First): ~20 seconds

**Optimize by**:
- Running during development (catch issues early)
- Using `/quick-check` for fast iteration
- Running audit less frequently if no CSS/component changes

---

## References

- Validation script: `scripts/validate-components.js`
- Token files: `tokens/*.json`
- Component validator: `scripts/validate-tokens.js`
- TypeScript config: `tsconfig.json`
- Style guide: `CLAUDE.md`
