# Orion Design System - Component Props Reference

Complete reference for all component properties, variants, and usage patterns.

**Last Updated**: February 2026  
**Version**: 3.0.0  
**Total Components**: 51

---

## 📖 How to Use This Guide

Each component section includes:
- **Props**: All available properties with types and defaults
- **Variants**: Available visual variations
- **Sub-components**: Compound component patterns
- **Tokens**: CSS variables used (for customization)
- **Examples**: Code snippets
- **Accessibility**: ARIA attributes and keyboard navigation

---

## Core Components

### Button

**Category**: Actions  
**Import**: `import { Button } from '@orion-ds/react'`

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'ghost' \| 'danger'` | `'primary'` | Visual variant of the button |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size (auto-adapts to mode) |
| `isLoading` | `boolean` | `false` | Shows spinner and disables interaction |
| `fullWidth` | `boolean` | `false` | Expands to fill container |
| `icon` | `ReactNode` | - | Icon on left side |
| `iconRight` | `ReactNode` | - | Icon on right side |
| `iconOnly` | `boolean` | `false` | Icon-only button (no text) |
| `disabled` | `boolean` | `false` | Disabled state |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | HTML button type |

#### Examples

```tsx
// Primary button
<Button variant="primary">Save</Button>

// With icon
import { Download } from 'lucide-react';
<Button icon={<Download size={20} />}>Download</Button>

// Icon-only (MUST have aria-label)
import { Settings } from 'lucide-react';
<Button iconOnly icon={<Settings size={20} />} aria-label="Settings" />

// Loading state
<Button isLoading>Saving...</Button>

// Danger action
import { Trash2 } from 'lucide-react';
<Button variant="danger" icon={<Trash2 size={20} />}>Delete</Button>
```

#### Accessibility

- **Role**: `button`
- **Required**: `aria-label` for icon-only buttons
- **Keyboard**: Enter, Space to activate
- **Auto**: `aria-busy` when loading

---

### Card

**Category**: Layout  
**Import**: `import { Card } from '@orion-ds/react'`

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'base' \| 'glass' \| 'elevated' \| 'outlined' \| 'image'` | `'base'` | Visual variant |
| `interactive` | `boolean` | `false` | Adds hover effect |
| `imageUrl` | `string` | - | Background image (image variant only) |
| `imagePosition` | `'top' \| 'center' \| 'bottom'` | `'bottom'` | Content position for image variant |
| `aspectRatio` | `string` | `'16/9'` | Aspect ratio (e.g., '4/3', '1/1') |

#### Sub-components

```tsx
<Card variant="elevated">
  <Card.Header>Title</Card.Header>
  <Card.Body>Content goes here</Card.Body>
  <Card.Footer>
    <Button variant="primary">Save</Button>
  </Card.Footer>
</Card>
```

#### Examples

```tsx
// Interactive card
<Card interactive variant="elevated">
  <Card.Body>Click me</Card.Body>
</Card>

// Image card
<Card variant="image" imageUrl="/hero.jpg" aspectRatio="16/9">
  <Card.Body>Overlay content</Card.Body>
</Card>

// Glass card (Display mode only)
<Card variant="glass">
  <Card.Body>Glassmorphism effect</Card.Body>
</Card>
```

---

### Modal

**Category**: Overlays  
**Import**: `import { Modal } from '@orion-ds/react'`

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | **required** | Whether modal is open |
| `onClose` | `() => void` | **required** | Close callback |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'` | `'md'` | Modal size |
| `closeOnBackdrop` | `boolean` | `true` | Close on backdrop click |
| `closeOnEscape` | `boolean` | `true` | Close on Escape key |
| `showCloseButton` | `boolean` | `true` | Show X button |
| `className` | `string` | - | Additional class |

#### Sub-components

```tsx
<Modal open={isOpen} onClose={() => setIsOpen(false)}>
  <Modal.Header>Confirm Action</Modal.Header>
  <Modal.Body>Are you sure?</Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={() => setIsOpen(false)}>Cancel</Button>
    <Button variant="primary" onClick={handleConfirm}>Confirm</Button>
  </Modal.Footer>
</Modal>
```

#### Accessibility

- **Role**: `dialog`
- **Attributes**: `aria-modal`, `aria-labelledby`, `aria-describedby`
- **Keyboard**: Escape to close, Tab for focus trap
- **Focus**: Trapped within modal, returns to trigger on close

---

### Alert

**Category**: Feedback  
**Import**: `import { Alert } from '@orion-ds/react'`

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'success' \| 'error' \| 'warning' \| 'info'` | `'info'` | Status type |
| `title` | `string` | - | Alert title (optional) |
| `dismissible` | `boolean` | `false` | Show close button |
| `onClose` | `() => void` | - | Close callback |
| `icon` | `ReactNode` | - | Custom icon (overrides default) |

#### Examples

```tsx
// Info alert
<Alert variant="info" title="Info">
  This is an informational message.
</Alert>

// Error alert
<Alert variant="error" title="Error">
  Something went wrong.
</Alert>

// Dismissible
<Alert 
  variant="success" 
  title="Saved" 
  dismissible
  onClose={() => {}}
>
  Changes saved successfully.
</Alert>

// Custom icon
import { Bell } from 'lucide-react';
<Alert variant="info" icon={<Bell size={20} />}>
  New notification
</Alert>
```

---

### Field

**Category**: Forms  
**Import**: `import { Field } from '@orion-ds/react'`

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Input label |
| `type` | `string` | `'text'` | HTML input type |
| `error` | `string` | - | Error message |
| `helpText` | `string` | - | Helper text below input |
| `required` | `boolean` | `false` | Required field |
| `disabled` | `boolean` | `false` | Disabled state |
| `icon` | `ReactNode` | - | Icon on left side |
| `iconRight` | `ReactNode` | - | Icon on right side |
| `fullWidth` | `boolean` | `true` | Full width input |
| `placeholder` | `string` | - | Placeholder text |

#### Examples

```tsx
// Basic field
<Field label="Email" type="email" required />

// With icon
import { Mail } from 'lucide-react';
<Field 
  label="Email" 
  type="email" 
  icon={<Mail size={18} />} 
/>

// With error
<Field 
  label="Password" 
  type="password" 
  error="Password must be at least 8 characters" 
/>

// With help text
<Field 
  label="Username" 
  helpText="Choose a unique username" 
/>
```

---

### Select

**Category**: Forms  
**Import**: `import { Select } from '@orion-ds/react'`

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Select label |
| `options` | `SelectOption[]` | **required** | Array of options |
| `value` | `string \| string[]` | - | Selected value(s) |
| `onChange` | `(value) => void` | - | Change callback |
| `placeholder` | `string` | `'Select...'` | Placeholder text |
| `error` | `string` | - | Error message |
| `disabled` | `boolean` | `false` | Disabled state |
| `multiple` | `boolean` | `false` | Multi-select |
| `searchable` | `boolean` | `false` | Enable search |

#### SelectOption Type

```typescript
interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}
```

#### Examples

```tsx
const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' }
];

// Basic select
<Select 
  label="Framework" 
  options={options} 
  value={framework}
  onChange={setFramework}
/>

// Multi-select
<Select 
  label="Skills" 
  options={options} 
  multiple
  value={skills}
  onChange={setSkills}
/>

// Searchable
<Select 
  label="Country" 
  options={countries} 
  searchable
/>
```

---

## Quick Reference Tables

### All Component Variants

| Component | Available Variants |
|-----------|-------------------|
| **Button** | primary, secondary, ghost, danger |
| **Alert** | success, error, warning, info |
| **Badge** | primary, secondary, success, error, warning, info |
| **Card** | base, glass, elevated, outlined, image |
| **Chip** | filled, outlined |
| **Toast** | success, error, warning, info |

### Size Options

| Component | Available Sizes |
|-----------|----------------|
| **Button** | sm, md, lg |
| **Modal** | sm, md, lg, xl, full |
| **Spinner** | xs, sm, md, lg, xl |
| **Avatar** | xs, sm, md, lg, xl |

### Mode-Aware Components

These components automatically adapt to Display, Product, or App mode:

- ✅ Button (size scaling)
- ✅ Card (shadows, hover effects)
- ✅ Navbar (glassmorphism in Display mode)
- ✅ Hero (typography scale)

---

## Common Patterns

### Form Layout

```tsx
<form onSubmit={handleSubmit}>
  <Field 
    label="Name" 
    value={name}
    onChange={(e) => setName(e.target.value)}
    required
  />
  
  <Field 
    label="Email" 
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
  />
  
  <Select
    label="Country"
    options={countries}
    value={country}
    onChange={setCountry}
  />
  
  <Button type="submit" variant="primary" fullWidth>
    Submit
  </Button>
</form>
```

### Confirmation Modal

```tsx
const [isOpen, setIsOpen] = useState(false);

<Modal open={isOpen} onClose={() => setIsOpen(false)}>
  <Modal.Header>Delete Item</Modal.Header>
  <Modal.Body>
    Are you sure you want to delete this item? This action cannot be undone.
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={() => setIsOpen(false)}>
      Cancel
    </Button>
    <Button variant="danger" onClick={handleDelete}>
      Delete
    </Button>
  </Modal.Footer>
</Modal>
```

### Card Grid

```tsx
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
  {items.map(item => (
    <Card key={item.id} interactive variant="elevated">
      <Card.Header>{item.title}</Card.Header>
      <Card.Body>{item.description}</Card.Body>
      <Card.Footer>
        <Button variant="primary">View</Button>
      </Card.Footer>
    </Card>
  ))}
</div>
```

---

## TypeScript Support

All components are fully typed. Import types:

```typescript
import type { 
  ButtonProps, 
  ButtonVariant,
  CardProps,
  ModalProps,
  AlertVariant
} from '@orion-ds/react';
```

---

## Need More Details?

- **Full API**: Check individual component JSON files in `registry/components/`
- **Live Examples**: Run `npm run storybook` or visit `/library.html`
- **MCP Server**: Use `npx @orion-ds/mcp` for AI-powered component queries

```bash
# Get component details via MCP
npx @orion-ds/mcp get-component --name=button

# Search components
npx @orion-ds/mcp search-components --query="form input"
```
