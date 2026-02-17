# Button Component

> The primary action trigger in Orion Design System.

## When to Use

| Scenario               | Use Button                                            |
| ---------------------- | ----------------------------------------------------- |
| Submit forms           | `<Button type="submit">Save</Button>`                 |
| Trigger actions        | `<Button onClick={handleClick}>Download</Button>`     |
| Navigation with action | `<Button onClick={navigate}>Go to Dashboard</Button>` |
| Destructive actions    | `<Button variant="danger">Delete</Button>`            |

## When NOT to Use

| Scenario                  | Use Instead                    |
| ------------------------- | ------------------------------ |
| Navigate to another page  | `<Link href="/page">` or `<a>` |
| Toggle boolean state      | `<Switch>`                     |
| Select from options       | `<Select>` or `<Radio>`        |
| Text that looks like link | `<Link variant="subtle">`      |

---

## Variants Guide

| Variant     | Semantic Meaning          | Use When                                          | Example                                |
| ----------- | ------------------------- | ------------------------------------------------- | -------------------------------------- |
| `primary`   | Main action               | Primary CTA - Submit, Save, Continue, Get Started | Form submissions, main hero CTA        |
| `secondary` | Supporting action         | Secondary CTA - Cancel, Back, Learn More          | Paired with primary button             |
| `ghost`     | Subtle action             | Tertiary - Close, Dismiss, Skip                   | Modal close, subtle navigation         |
| `danger`    | Destructive action        | Irreversible - Delete, Remove, Unsubscribe        | Deleting data, canceling subscriptions |
| `inverse`   | Primary CTA on colored bg | Hero CTAs, Banners, Overlays                      | "Get Started" on blue banner           |

### Visual Hierarchy

```
Primary  > Secondary > Ghost > Danger (when not destructive context)
```

**Rule:** Only ONE primary button per logical section.

---

## Size Variants

Sizes adapt to the current mode (`display`, `product`, `app`):

| Size | Display Mode | Product Mode | App Mode    | Use When                          |
| ---- | ------------ | ------------ | ----------- | --------------------------------- |
| `sm` | 40px height  | 28px height  | 40px height | Dense UIs, tables, inline actions |
| `md` | 56px height  | 32px height  | 44px height | Default - most buttons            |
| `lg` | 64px height  | 36px height  | 48px height | Hero CTAs, prominent actions      |

---

## Props Reference

```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'; // default: 'primary'
  size?: 'sm' | 'md' | 'lg'; // default: 'md'
  isLoading?: boolean; // default: false
  fullWidth?: boolean; // default: false
  icon?: ReactNode; // Left icon
  iconRight?: ReactNode; // Right icon
  iconOnly?: boolean; // default: false
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset'; // default: 'button'
  children?: ReactNode;
}
```

---

## Examples

### Basic Usage

```tsx
import { Button } from '@orion/react';

// Primary (default)
<Button>Save Changes</Button>

// Secondary
<Button variant="secondary">Cancel</Button>

// Ghost
<Button variant="ghost">Skip</Button>

// Danger
<Button variant="danger">Delete Account</Button>

// Inverse (for colored backgrounds)
<Button variant="inverse">Get Started</Button>
```

### Inverse Variant (for Colored Backgrounds)

```tsx
import { Button } from '@orion/react';

// Use inverse on colored backgrounds
<section style={{ background: 'var(--interactive-primary)', padding: '4rem' }}>
  <h1>Welcome to Orion</h1>
  <Button variant="inverse">Get Started</Button>
  <Button variant="ghost" style={{ color: 'white', border: '2px solid white' }}>
    Learn More
  </Button>
</section>

// Use cases
<Banner variant="default">
  <Button variant="inverse">Sign Up Free</Button>
</Banner>

<Hero backgroundImage="/hero.jpg">
  <Button variant="inverse">Explore Features</Button>
</Hero>
```

**When to use `inverse`**:
- ✅ Banners with brand-colored backgrounds
- ✅ Hero sections over images with dark overlays
- ✅ CTAs on gradient backgrounds
- ✅ Any context where `primary` doesn't provide enough contrast

**When NOT to use `inverse`**:
- ❌ On white/light backgrounds (use `primary` instead)
- ❌ In forms or data tables (use `primary` or `secondary`)
- ❌ As secondary actions (use `secondary` or `ghost`)

### With Icons

```tsx
import { Button } from '@orion/react';
import { Download, ChevronRight, Settings, Plus } from 'lucide-react';

// Icon on left
<Button icon={<Download size={20} />}>
  Download Report
</Button>

// Icon on right
<Button iconRight={<ChevronRight size={20} />}>
  Continue
</Button>

// Both icons
<Button icon={<Plus size={20} />} iconRight={<ChevronRight size={20} />}>
  Add Item
</Button>

// Icon only (MUST have aria-label)
<Button
  iconOnly
  icon={<Settings size={20} />}
  aria-label="Settings"
/>
```

### Loading State

```tsx
import { Button } from '@orion/react';

<Button isLoading>Saving...</Button>;

// With loading state management
function SaveButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async () => {
    setIsLoading(true);
    await saveData();
    setIsLoading(false);
  };

  return (
    <Button onClick={handleSave} isLoading={isLoading}>
      {isLoading ? 'Saving...' : 'Save'}
    </Button>
  );
}
```

### Full Width

```tsx
import { Button } from '@orion/react';

// Card footer with full-width button
<Card>
  <Card.Body>Content</Card.Body>
  <Card.Footer>
    <Button fullWidth>Continue</Button>
  </Card.Footer>
</Card>

// Form submission
<form>
  <Field label="Email" type="email" />
  <Button type="submit" fullWidth>
    Sign Up
  </Button>
</form>
```

### Button Groups

```tsx
import { Button } from '@orion/react';

// Primary + Secondary pair
<div style={{ display: 'flex', gap: 'var(--spacing-3)' }}>
  <Button variant="secondary">Cancel</Button>
  <Button variant="primary">Save Changes</Button>
</div>

// Multiple actions
<div style={{ display: 'flex', gap: 'var(--spacing-2)' }}>
  <Button variant="ghost">Skip</Button>
  <Button variant="secondary">Save Draft</Button>
  <Button variant="primary">Publish</Button>
</div>
```

### Size Examples

```tsx
import { Button } from '@orion/react';

// Small - for dense UIs
<Button size="sm">Edit</Button>

// Medium - default
<Button size="md">Submit</Button>

// Large - for hero sections
<Button size="lg">Get Started Free</Button>
```

---

## Accessibility Requirements

### Icon-Only Buttons MUST Have aria-label

```tsx
// CORRECT
<Button iconOnly icon={<X size={20} />} aria-label="Close dialog" />

// WRONG - Screen readers can't announce purpose
<Button iconOnly icon={<X size={20} />} />
```

### Disabled State

```tsx
// Buttons automatically handle disabled styling
<Button disabled>Cannot Submit</Button>

// Loading also disables
<Button isLoading>Processing...</Button>
```

### Focus States

All buttons have visible `:focus-visible` states. Do not override.

---

## Common Patterns

### Modal Actions

```tsx
<Modal.Footer>
  <Button variant="ghost" onClick={onClose}>
    Cancel
  </Button>
  <Button variant="primary" onClick={onConfirm}>
    Confirm
  </Button>
</Modal.Footer>
```

### Destructive Confirmation

```tsx
<Modal.Footer>
  <Button variant="secondary" onClick={onClose}>
    Keep
  </Button>
  <Button variant="danger" onClick={onDelete}>
    Delete Forever
  </Button>
</Modal.Footer>
```

### Form Submission

```tsx
<form onSubmit={handleSubmit}>
  <Field label="Email" name="email" required />
  <Button type="submit" fullWidth isLoading={isSubmitting}>
    {isSubmitting ? 'Signing up...' : 'Sign Up'}
  </Button>
</form>
```

### Hero CTA Pair

```tsx
<Hero
  headline="Welcome"
  primaryAction={<Button size="lg">Get Started</Button>}
  secondaryAction={
    <Button variant="ghost" size="lg">
      Learn More
    </Button>
  }
/>
```

---

## Anti-Patterns

### Multiple Primary Buttons

```tsx
// WRONG - Confusing hierarchy
<div>
  <Button variant="primary">Save</Button>
  <Button variant="primary">Publish</Button>
  <Button variant="primary">Share</Button>
</div>

// CORRECT - Clear hierarchy
<div>
  <Button variant="ghost">Share</Button>
  <Button variant="secondary">Save Draft</Button>
  <Button variant="primary">Publish</Button>
</div>
```

### Ghost for Primary Actions

```tsx
// WRONG - Primary actions need visual prominence
<Button variant="ghost">Submit Form</Button>

// CORRECT
<Button variant="primary">Submit Form</Button>
```

### Danger Without Confirmation

```tsx
// DANGEROUS - No confirmation for destructive action
<Button variant="danger" onClick={deleteAccount}>
  Delete Account
</Button>

// BETTER - With confirmation
<Button variant="danger" onClick={openDeleteConfirmation}>
  Delete Account
</Button>
```
