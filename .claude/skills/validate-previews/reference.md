# Validate Previews — Reference Guide

## Component Composition Protocol

When you need custom behavior, **compose** Orion components instead of duplicating:

### Pattern 1: Wrapper Components

```tsx
import { Button } from '@orion-ds/react';

// ✅ Wrap Orion component for specific use case
export const SubmitButton = ({ loading, ...props }) => (
  <Button
    variant="primary"
    disabled={loading}
    icon={loading ? <Spinner /> : undefined}
    {...props}
  />
);
```

### Pattern 2: Layout Compositions

```tsx
import { Card, Button } from '@orion-ds/react';

// ✅ Compose multiple Orion components
export const ProductCard = ({ product }) => (
  <Card>
    <Card.Header>
      <img src={product.image} alt={product.name} />
    </Card.Header>
    <Card.Body>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
    </Card.Body>
    <Card.Footer>
      <Button variant="primary">Buy Now</Button>
    </Card.Footer>
  </Card>
);
```

### Pattern 3: Extending with Slots

```tsx
import { Modal } from '@orion-ds/react';

// ✅ Extend Orion component with custom content
export const ConfirmDialog = ({ title, message, onConfirm, onCancel }) => (
  <Modal open={true}>
    <Modal.Header>{title}</Modal.Header>
    <Modal.Body>{message}</Modal.Body>
    <Modal.Footer>
      <Button variant="ghost" onClick={onCancel}>Cancel</Button>
      <Button variant="primary" onClick={onConfirm}>Confirm</Button>
    </Modal.Footer>
  </Modal>
);
```

---

## Detection Patterns

The skill searches for these anti-patterns:

### Pattern 1: Duplicate Component Names
```bash
# Search for component definitions with Orion names
grep -r "function.*Button\|const.*Button.*=" --include="*.stories.tsx"
grep -r "function.*Card\|const.*Card.*=" --include="*.stories.tsx"
```

### Pattern 2: Hardcoded Colors
```bash
# Search for hex colors in stories
grep -r "#[0-9A-Fa-f]{6}\|#[0-9A-Fa-f]{3}" --include="*.stories.tsx"
```

### Pattern 3: Hardcoded Pixels
```bash
# Search for hardcoded pixels (except 0px, 1px, 9999px)
grep -r "[2-9][0-9]*px\|[0-9]{3,}px" --include="*.stories.tsx"
```

### Pattern 4: Style Tags
```bash
# Search for style tags
grep -r "<style>" --include="*.stories.tsx"
```

### Pattern 5: Local Imports
```bash
# Search for relative imports of components
grep -r "import.*from ['\"]\.\./" --include="*.stories.tsx"
```

---

## Allowed Exceptions

Some inline styles are acceptable:

### Exception 1: Dynamic Values
```tsx
// ✅ OK - Dynamic value
<div style={{ width: `${progress}%` }} />
```

### Exception 2: Position/Transform
```tsx
// ✅ OK - Relative positioning
<div style={{ position: 'relative', top: 0, left: 0 }} />
```

### Exception 3: Demo/Visualization
```tsx
// ✅ OK - Data visualization in chart stories
<div style={{ height: `${dataValue}px` }} />
```

**When exceptions are needed**, add comment explaining why:
```tsx
// Demo visualization - dynamic height based on data
<div style={{ height: `${value}px` }} />
```

---

## Creating New Composite Components

If you genuinely need a new component not in Orion:

### Step 1: Check if it exists
```bash
# Search Orion components
ls packages/react/src/components/
```

### Step 2: Check if you can compose
Can you build it from existing components?

### Step 3: Propose new component
If truly needed:
1. Create RFC (Request for Comments)
2. Add to `/create-component` workflow
3. Document in CLAUDE.md

---

## Integration with Other Skills

**Runs as part of**:
- `/pr-ready` - Validates previews before PR
- `/audit` - Could be added to full system audit

**Run manually**:
- After creating new stories
- After modifying docs examples
- Before releasing

**Complements**:
- `/validate-ai-first` - Validates library components
- `/validate-previews` - Validates preview/example usage

---

## Common Story Patterns

### Basic Story with All Props

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@orion-ds/react';

const meta = {
  component: Button,
  title: 'Forms/Button',
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'ghost'],
      control: { type: 'select' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
    },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Click me',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary action',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  ),
};
```

---

## Exit Codes

- **0** = All previews valid
- **1** = Violations found (duplicates, hardcoded styles, etc.)
