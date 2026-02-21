# Component Composition Protocol

**Orion Design System - Component Reuse Guidelines**

This document defines the protocol for composing, extending, and creating components in Orion Design System to prevent duplication and maintain consistency.

---

## Core Principle: Compose, Don't Duplicate

**Golden Rule**: Always use existing Orion components. If you need custom behavior, **compose** Orion components instead of recreating them.

**Why?**
- ✅ Maintains consistency across all implementations
- ✅ Inherits all Orion features (themes, brands, accessibility)
- ✅ Benefits from updates and bug fixes automatically
- ✅ Prevents UI drift between library and documentation

**Where this applies**:
- Storybook stories (`.stories.tsx`)
- Documentation site examples (`docs-site/`)
- Testing projects (`testing-projects/`)
- Sections (`packages/react/src/sections/`)

---

## Decision Tree: Use Existing or Create New?

```
Need a component?
│
├─ Does it exist in Orion?
│  │
│  ├─ YES → Use it directly
│  │         import { Button } from '@orion-ds/react';
│  │
│  └─ NO → Can you compose existing components?
│     │
│     ├─ YES → Compose them (Pattern 1, 2, or 3)
│     │         const Hero = () => <Card><Button /></Card>
│     │
│     └─ NO → Is it truly unique?
│        │
│        ├─ YES → Create as Section (not Component)
│        │         packages/react/src/sections/NewSection/
│        │
│        └─ NO → Rethink your approach
│                   Maybe you're overcomplicating it
```

---

## ✅ Pattern 1: Direct Usage (Preferred)

Use Orion components directly without modification.

### Example: Button in Hero

**❌ Wrong**:
```tsx
// Don't recreate Button
const CustomButton = ({ children }) => (
  <button className="hero-button">{children}</button>
);

export const Hero = () => (
  <div>
    <h1>Welcome</h1>
    <CustomButton>Get Started</CustomButton>
  </div>
);
```

**✅ Correct**:
```tsx
import { Button } from '@orion-ds/react';

export const Hero = () => (
  <div>
    <h1>Welcome</h1>
    <Button variant="primary" size="lg">Get Started</Button>
  </div>
);
```

---

## ✅ Pattern 2: Wrapper Components

Wrap Orion components to add specific behavior while preserving all original functionality.

### Use when:
- Adding loading states
- Adding analytics tracking
- Adding default props
- Adding validation logic

### Example: Loading Button

```tsx
import { Button, type ButtonProps } from '@orion-ds/react';
import { Spinner } from 'lucide-react';

interface LoadingButtonProps extends ButtonProps {
  loading?: boolean;
}

export const LoadingButton = ({ loading, children, disabled, ...props }: LoadingButtonProps) => (
  <Button
    {...props}
    disabled={disabled || loading}
    icon={loading ? <Spinner size={20} /> : props.icon}
  >
    {loading ? 'Loading...' : children}
  </Button>
);
```

**Why this works**:
- ✅ Extends ButtonProps (type-safe)
- ✅ Passes all props to Button
- ✅ Adds specific behavior (loading state)
- ✅ Maintains Orion styling and features

---

## ✅ Pattern 3: Layout Compositions

Combine multiple Orion components to create higher-level UI patterns.

### Use when:
- Building page sections
- Creating complex layouts
- Combining multiple components

### Example: Product Card

```tsx
import { Card, Button, Badge } from '@orion-ds/react';

interface ProductCardProps {
  product: {
    name: string;
    price: string;
    image: string;
    badge?: string;
  };
  onBuy: () => void;
}

export const ProductCard = ({ product, onBuy }: ProductCardProps) => (
  <Card>
    <Card.Header>
      {product.badge && (
        <Badge variant="primary">{product.badge}</Badge>
      )}
      <img src={product.image} alt={product.name} />
    </Card.Header>
    <Card.Body>
      <h3>{product.name}</h3>
      <div className="price">{product.price}</div>
    </Card.Body>
    <Card.Footer>
      <Button variant="primary" onClick={onBuy}>
        Buy Now
      </Button>
    </Card.Footer>
  </Card>
);
```

**Why this works**:
- ✅ Composes 3 Orion components (Card, Badge, Button)
- ✅ No duplicate logic
- ✅ Inherits all Orion features
- ✅ Custom layout using composition

---

## ✅ Pattern 4: Compound Component Extension

Extend Orion compound components with custom content while using their structure.

### Example: Confirmation Modal

```tsx
import { Modal, Button } from '@orion-ds/react';

interface ConfirmDialogProps {
  open: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmDialog = ({
  open,
  title,
  message,
  onConfirm,
  onCancel
}: ConfirmDialogProps) => (
  <Modal open={open} onOpenChange={(open) => !open && onCancel()}>
    <Modal.Header>{title}</Modal.Header>
    <Modal.Body>
      <p>{message}</p>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="ghost" onClick={onCancel}>
        Cancel
      </Button>
      <Button variant="primary" onClick={onConfirm}>
        Confirm
      </Button>
    </Modal.Footer>
  </Modal>
);
```

**Why this works**:
- ✅ Uses Modal compound component structure
- ✅ Fills in slots with custom content
- ✅ Uses Orion Buttons in footer
- ✅ Maintains Modal behavior (overlay, focus trap, ESC key)

---

## ❌ Anti-Patterns (Never Do This)

### Anti-Pattern 1: Recreating Orion Components

**❌ Never recreate components that exist in Orion**:
```tsx
// DON'T DO THIS
const MyButton = ({ children }) => (
  <button className="my-button">{children}</button>
);

const MyCard = ({ children }) => (
  <div className="my-card">{children}</div>
);
```

**Why wrong**: Creates duplicate components with:
- Different behavior
- Missing accessibility features
- Style inconsistencies
- No theme/brand support

### Anti-Pattern 2: Hardcoded Styles in Compositions

**❌ Never use hardcoded styles**:
```tsx
// DON'T DO THIS
<div style={{
  padding: '24px',           // ❌ Hardcoded pixel
  background: '#f5f5f5',     // ❌ Hardcoded color
  borderRadius: '12px'       // ❌ Hardcoded radius
}}>
  Content
</div>
```

**✅ Use semantic tokens**:
```tsx
// DO THIS
<div style={{
  padding: 'var(--spacing-6)',
  background: 'var(--surface-subtle)',
  borderRadius: 'var(--radius-container)'
}}>
  Content
</div>
```

### Anti-Pattern 3: Local Imports

**❌ Don't import from local paths**:
```tsx
// DON'T DO THIS
import { Button } from '../Button';
import { Card } from '../../components/Card';
```

**✅ Always import from package**:
```tsx
// DO THIS
import { Button, Card } from '@orion-ds/react';
```

### Anti-Pattern 4: Style Tags in Stories

**❌ Never use style tags**:
```tsx
// DON'T DO THIS
export const Example = () => (
  <>
    <style>{`
      .custom-button { background: #1B5BFF; }
    `}</style>
    <button className="custom-button">Click</button>
  </>
);
```

**✅ Use Orion components**:
```tsx
// DO THIS
import { Button } from '@orion-ds/react';

export const Example = () => (
  <Button variant="primary">Click</Button>
);
```

---

## Exception Patterns (Acceptable in Specific Contexts)

### Exception 1: Template Development Patterns

**Templates MUST use relative imports during development** because package imports only work after build.

✅ **Correct for templates** (`src/templates/`):
```tsx
// DashboardTemplate.stories.tsx
import { Sidebar } from '../../../sections/Sidebar';
import { PageHeader } from '../../../sections/PageHeader';
import { Button } from '../../../components/Button';
```

**Why this is necessary**:
- Templates live in `packages/react/src/templates/` during development
- Package imports (`@orion-ds/react`) require the package to be built first
- Storybook runs before package build, so must use relative paths
- After publishing, end users import templates via package: `import { DashboardTemplate } from '@orion-ds/react'`

**Rule**: Only templates (in `src/templates/`) may use relative imports. Components and sections must use package imports.

---

### Exception 2: Storybook Demo Wrappers (Interactive State Management)

**Interactive demos need state management wrappers**. These are NOT duplicate components - they're Storybook utilities.

✅ **Acceptable patterns**:
```tsx
// Toast.stories.tsx
const ToastDemo = () => {  // ✅ Acceptable - manages toast state for demo
  const { toast } = useToast();
  return (
    <div>
      <button onClick={() => toast('Success!')}>Show Toast</button>
      <button onClick={() => toast.error('Error!')}>Show Error</button>
    </div>
  );
};

// Modal.stories.tsx
const ModalWrapper = ({ children }) => {  // ✅ Acceptable - manages modal state
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <Modal open={open} onOpenChange={setOpen}>
        {children}
      </Modal>
    </>
  );
};
```

**Why these are acceptable**:
- Enable interactive Storybook controls (users can click to open/close)
- Manage component state for demos (controlled components need state)
- Not shipped to production (dev-only, in `.stories.tsx` files)
- Named with clear suffixes: `Demo`, `Wrapper`, `Interactive`, `Responsive`

**Common examples**:
- `ModalWrapper` - Manages Modal open/close state
- `ToastDemo` - Controls Toast visibility and variants
- `InteractiveSearchInput` - Handles search input state
- `ResponsiveNavbarDemo` - Demonstrates responsive mobile menu
- `AlertDialogWrapper` - Controls dialog lifecycle

**Rule**: Demo wrappers are acceptable when they:
1. Live in `.stories.tsx` files (not component source)
2. Use clear naming suffixes (`Demo`, `Wrapper`, `Interactive`)
3. Manage state for Storybook interactivity (not duplicating component logic)

---

### Exception 3: Storybook Decorator Styling (Demo Viewport Sizing)

**Demo frames and decorators can use hardcoded pixels** for viewport simulation and placeholder elements.

✅ **Acceptable decorator styles**:
```tsx
export const Example: Story = {
  decorators: [
    (Story) => (
      <div style={{
        height: '600px',        // ✅ Demo viewport height
        width: '900px',         // ✅ Demo viewport width
        maxWidth: '1200px',     // ✅ Responsive testing breakpoint
        display: 'flex',
        gap: 'var(--spacing-4)' // ✅ Use tokens where appropriate
      }}>
        <Story />
      </div>
    )
  ]
};

// Avatar/logo placeholders in header demos
const header = (
  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
    <div style={{
      width: '32px',          // ✅ Logo placeholder size
      height: '32px',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--interactive-primary)'
    }} />
    <span>Acme Inc</span>
  </div>
);
```

**Why these are acceptable**:
- Simulate specific viewport sizes for testing (600px, 900px, 1200px)
- Create consistent demo environments across stories
- Represent placeholder dimensions (logos, avatars, icons)
- Not part of component implementation (decorator layer only)

❌ **Still needs fixing** (spacing should use tokens):
```tsx
// Wrong - padding/margin should use spacing tokens
<div style={{ padding: '20px', margin: '16px' }}>
  <Button />
</div>

// Correct - use semantic tokens
<div style={{ padding: 'var(--spacing-5)', margin: 'var(--spacing-4)' }}>
  <Button />
</div>
```

**Pixel value guidelines**:
- ✅ `height`, `width`, `maxWidth`, `minHeight` for viewport/container sizing
- ✅ `32px`, `36px`, `44px` for avatar/logo placeholder dimensions
- ✅ Icon `size={20}` prop (Lucide icons)
- ❌ `padding`, `margin` should use `var(--spacing-*)` tokens
- ❌ Component styling (use CSS Modules with tokens instead)

---

## When to Create a New Section vs Component

### Create as Section (packages/react/src/sections/)

**When**:
- Complex layout combining multiple components
- Page-specific composition
- Marketing/landing page blocks
- Not reusable across different contexts

**Examples**:
- Hero section
- Pricing table
- FAQ section
- Testimonials grid
- Feature showcase

**Structure**:
```
packages/react/src/sections/PricingTable/
├── PricingTable.tsx           # Uses Card, Button, Badge
├── PricingTable.types.ts      # TypeScript types
├── PricingTable.module.css    # Minimal layout CSS
├── PricingTable.stories.tsx   # Storybook story
└── index.ts                   # Export
```

### Create as Component (packages/react/src/components/)

**When**:
- Truly new atomic UI element
- Reusable across many contexts
- Fundamental building block
- Has multiple variants

**Examples**:
- Rating (star rating component)
- Timeline (progress timeline)
- Stepper (multi-step form indicator)
- Toast (notification)

**Criteria**:
1. Does NOT exist in Orion
2. CANNOT be composed from existing components
3. IS reusable across multiple contexts
4. HAS clear variants and states

**If you can answer NO to any of above, it should be a Section, not Component.**

---

## Creating New Sections (Step-by-Step)

### Step 1: Verify it doesn't exist

```bash
# Search existing components
ls packages/react/src/components/

# Search existing sections
ls packages/react/src/sections/

# Search for similar functionality
grep -r "PricingTable" packages/react/src
```

### Step 2: Create section structure

```bash
# Use create-component skill (generates correct structure)
/create-component PricingTable
```

**Or manually**:
```
packages/react/src/sections/PricingTable/
├── PricingTable.tsx
├── PricingTable.types.ts
├── PricingTable.module.css
├── PricingTable.stories.tsx
├── README.md              # AI-Native docs
├── PricingTable.spec.yaml # Design spec
└── index.ts
```

### Step 3: Import Orion components

```tsx
// PricingTable.tsx
import { Card, Button, Badge, Chip } from '@orion-ds/react';

export const PricingTable = ({ plans }: PricingTableProps) => {
  return (
    <div className={styles.pricingTable}>
      {plans.map(plan => (
        <Card key={plan.id}>
          <Card.Header>
            <h3>{plan.name}</h3>
            {plan.popular && <Badge>Popular</Badge>}
          </Card.Header>
          <Card.Body>
            <div className={styles.price}>{plan.price}</div>
            <ul className={styles.features}>
              {plan.features.map(feature => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" fullWidth>
              Choose Plan
            </Button>
          </Card.Footer>
        </Card>
      ))}
    </div>
  );
};
```

### Step 4: Use semantic tokens in CSS

```css
/* PricingTable.module.css */
.pricingTable {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-6);        /* ✅ Semantic token */
  padding: var(--spacing-8);    /* ✅ Semantic token */
}

.price {
  font-size: var(--font-size-3xl);  /* ✅ Semantic token */
  font-weight: var(--font-weight-bold);
  color: var(--text-brand);          /* ✅ Semantic token */
  margin-bottom: var(--spacing-4);   /* ✅ Semantic token */
}

.features {
  list-style: none;
  padding: 0;
  margin: 0;
}

.features li {
  padding: var(--spacing-2) 0;     /* ✅ Semantic token */
  border-bottom: 1px solid var(--border-subtle);  /* ✅ Semantic token */
}
```

### Step 5: Validate composition

```bash
/validate-previews          # Check for duplicates/styles
/validate-ai-first          # Check AI-First compliance
```

---

## Storybook Story Best Practices

### ✅ Good Story Example

```tsx
// PricingTable.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { PricingTable } from './PricingTable';

const meta: Meta<typeof PricingTable> = {
  title: 'Sections/PricingTable',
  component: PricingTable,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PricingTable>;

const samplePlans = [
  {
    id: '1',
    name: 'Starter',
    price: '$9/mo',
    features: ['Feature 1', 'Feature 2'],
    popular: false,
  },
  {
    id: '2',
    name: 'Pro',
    price: '$29/mo',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    popular: true,
  },
];

export const Default: Story = {
  args: {
    plans: samplePlans,
  },
};

export const SinglePlan: Story = {
  args: {
    plans: [samplePlans[0]],
  },
};
```

**Why this works**:
- ✅ Uses PricingTable component (composes Orion components internally)
- ✅ No inline components
- ✅ No hardcoded styles
- ✅ Clean data separation

### ❌ Bad Story Example

```tsx
// DON'T DO THIS
export const BadExample: Story = {
  render: () => (
    <>
      <style>{`
        .custom-card {
          padding: 24px;
          background: #f5f5f5;
          border-radius: 12px;
        }
      `}</style>
      <div className="custom-card">
        <h3>Starter</h3>
        <button style={{ background: '#1B5BFF' }}>
          Choose Plan
        </button>
      </div>
    </>
  ),
};
```

**Why wrong**:
- ❌ Style tag with hardcoded values
- ❌ Recreating Card (use Orion Card)
- ❌ Inline button (use Orion Button)
- ❌ Hardcoded colors and pixels

---

## Validation Workflow

Run these before committing:

```bash
# 1. Validate previews (no duplicates, no hardcoded styles)
/validate-previews

# 2. Validate AI-First compliance
/validate-ai-first

# 3. Quick pre-commit checks
/quick-check

# 4. Full PR preparation (includes all above)
/pr-ready
```

---

## Summary: Quick Reference

| Scenario | Solution | Pattern |
|----------|----------|---------|
| Button with loading | Wrapper Component | Pattern 2 |
| Product card | Layout Composition | Pattern 3 |
| Confirmation dialog | Compound Extension | Pattern 4 |
| Hero section | Create Section | Sections/ |
| Rating widget | Create Component | Components/ |

**Always ask**: Can I build this from existing Orion components?
- If YES → Compose them (Patterns 1-4)
- If NO → Create Section (not Component)

---

## Enforcement

These rules are enforced by:
- **`/validate-previews`** skill - Detects violations
- **`/pr-ready`** workflow - Includes preview validation
- **Pre-commit hooks** - Linting and formatting
- **Code review** - Human verification

**Breaking these rules will fail PR validation.**

---

## Questions?

If you're unsure whether to create a new component or compose existing ones:

1. Check this document
2. Run `/validate-previews` to see if similar exists
3. Ask in team chat: "Can I build X from existing components?"
4. When in doubt, compose rather than create

**Remember**: Every new component increases maintenance burden. Composition keeps the system lean and consistent.
