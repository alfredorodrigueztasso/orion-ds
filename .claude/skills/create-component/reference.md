# Create Component — AI-Native Documentation Guide

## Why README.md is Critical

**Problem**: AI agents need complete context to use components correctly

**Solution**: Every component has AI-friendly documentation with:
- Props API (auto-generated from TypeScript)
- Usage examples for all variants
- Semantic token references
- Accessibility requirements
- Design intent

**Benefit**: AI can read README and generate correct code on first try (95%+ accuracy)

---

## Why ComponentName.spec.yaml?

**Problem**: Design intent is often implicit or lost in implementation

**Solution**: Machine-readable design specification that captures:
- Variant purposes
- Token mappings
- Accessibility requirements
- Use cases
- Design references

**Benefit**: AI understands visual intent and generates compliant, accessible code

---

## Props API Auto-Generation

The skill reads `ComponentName.types.ts` and extracts:
- Prop names
- Prop types
- Default values (from JSDoc comments)
- Descriptions (from JSDoc comments)

**Example TypeScript**:
```typescript
export interface ButtonProps {
  /**
   * Visual variant of the button
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'ghost';

  /**
   * Button size
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
}
```

**Generated Markdown**:
```markdown
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | 'primary' \| 'secondary' \| 'ghost' | 'primary' | Visual variant of the button |
| size | 'sm' \| 'md' \| 'lg' | 'md' | Button size |
```

---

## Post-Creation Checklist

After creating component, guide user through:

1. ✅ Review generated files
2. ✅ Customize implementation
3. ✅ Validate AI-First compliance (`/validate-ai-first`)
4. ✅ Preview in Storybook (`npm run storybook`)
5. ✅ Run unit tests (`npm test ComponentName`)
6. ✅ Test vibecoding (ask AI to use component)
7. ✅ Update registry (`npm run build:registry` - done automatically)
8. ✅ Update CLAUDE.md if major component

---

## AI-First Template Enforcement

Generated templates MUST follow AI-First rules:

**ComponentName.tsx**:
- ✅ forwardRef pattern
- ✅ displayName for debugging
- ✅ NO brand prop
- ✅ NO data-brand attribute
- ✅ Proper TypeScript types

**ComponentName.module.css**:
- ✅ Use semantic tokens only (var(--surface-base))
- ✅ NO hardcoded colors (#1B5BFF)
- ✅ NO hardcoded pixels (24px, except 1px/0px/9999px)
- ✅ NO hardcoded fonts (Inter, DM Sans)

**ComponentName.types.ts**:
- ✅ Extend HTMLAttributes or specific element attributes
- ✅ NO brand prop
- ✅ NO any types
- ✅ JSDoc comments for all props

---

## Integration with Other Skills

**Run after**: User says "create component" or "new component"

**Automatically runs**:
- `/validate-ai-first` (Step 5)
- TypeScript check (Step 5)
- Registry rebuild (Step 6)

**Run next**:
- `npm run storybook` — Preview stories
- `npm test ComponentName` — Run tests
- `/update-component ComponentName` — Add more stories/docs after customizing
- `/pr-ready` — Prepare PR for new component

---

## Common Component Patterns

### Button Components
```typescript
export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
  iconRight?: ReactNode;
}
```

### Card Components
```typescript
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined';
  isPadded?: boolean;
  isClickable?: boolean;
}
```

### Form Field Components
```typescript
export interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  icon?: ReactNode;
  isRequired?: boolean;
}
```

---

## Exit Codes

- **0** = Component created successfully
- **1** = Invalid input or component already exists

## References

- Component generator: `scripts/create-component.js`
- Registry builder: `npm run build:registry`
- AI-First validation: `scripts/validate-components.js`
- Storybook: `npm run storybook`
- Unit tests: `npm test ComponentName`
