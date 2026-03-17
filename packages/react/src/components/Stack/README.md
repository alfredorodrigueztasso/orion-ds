# Stack

Flexible layout component for arranging children in rows or columns with consistent spacing using design system tokens.

## Props

| Prop        | Type                                                                                            | Default        | Description                            |
| ----------- | ----------------------------------------------------------------------------------------------- | -------------- | -------------------------------------- |
| `direction` | `'vertical' \| 'horizontal'`                                                                    | `'vertical'`   | Stack direction (column or row)        |
| `gap`       | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'`                                                          | `'md'`         | Space between children (design token)  |
| `align`     | `'flex-start' \| 'center' \| 'flex-end' \| 'stretch' \| 'baseline'`                             | `'stretch'`    | Align items (flex align-items)         |
| `justify`   | `'flex-start' \| 'center' \| 'flex-end' \| 'space-between' \| 'space-around' \| 'space-evenly'` | `'flex-start'` | Justify content (flex justify-content) |
| `wrap`      | `'nowrap' \| 'wrap' \| 'wrap-reverse'`                                                          | `'nowrap'`     | Flex wrap behavior                     |
| `as`        | `React.ElementType`                                                                             | `'div'`        | Custom element type to render as       |
| `children`  | `React.ReactNode`                                                                               | -              | Stack content                          |

## Usage

### Basic Vertical Stack

```tsx
import { Stack, Card } from "@orion/react";

<Stack gap="md">
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</Stack>;
```

### Horizontal Stack

```tsx
<Stack direction="horizontal" gap="sm" align="center">
  <Button variant="primary">Save</Button>
  <Button variant="secondary">Cancel</Button>
</Stack>
```

### Form Layout

```tsx
<Stack as="form" direction="vertical" gap="lg">
  <Field label="Name" />
  <Field label="Email" type="email" />
  <Stack direction="horizontal" gap="sm" justify="flex-end">
    <Button variant="secondary">Cancel</Button>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Stack>
</Stack>
```

### Alignment Control

```tsx
// Center all items vertically and horizontally
<Stack direction="horizontal" gap="md" align="center" justify="center">
  <Card>Item 1</Card>
  <Card>Item 2</Card>
</Stack>

// Space items evenly
<Stack direction="horizontal" gap="md" justify="space-between">
  <Card>Left</Card>
  <Card>Right</Card>
</Stack>
```

### Responsive Wrapping

```tsx
<Stack direction="horizontal" gap="md" wrap="wrap">
  <Card style={{ flex: "1 1 calc(50% - var(--spacing-2))" }}>Item 1</Card>
  <Card style={{ flex: "1 1 calc(50% - var(--spacing-2))" }}>Item 2</Card>
</Stack>
```

## Tokens Used

Gap mapping to design tokens:

| Gap | Token                   | Value |
| --- | ----------------------- | ----- |
| xs  | `--spacing-2`           | 8px   |
| sm  | `--spacing-3`           | 12px  |
| md  | `--spacing-4` (default) | 16px  |
| lg  | `--spacing-6`           | 24px  |
| xl  | `--spacing-8`           | 32px  |

Other tokens:

- Flexbox layout rules from CSS Flexible Box Layout spec
- No color, shadow, or border tokens applied (pure layout)

## Accessibility

- Renders as `<div>` by default (neutral semantic element)
- Use `as="form"` for form containers
- Use `as="section"` or `as="article"` for semantic sections
- Stack itself is transparent to screen readers — semantic meaning comes from children
- Spacing is visual only (no impact on keyboard navigation or screen readers)

## Common Patterns

### Button Group

```tsx
<Stack direction="horizontal" gap="sm">
  <Button>Action 1</Button>
  <Button>Action 2</Button>
</Stack>
```

### Card Grid

```tsx
<Stack direction="horizontal" gap="md" wrap="wrap">
  {items.map((item) => (
    <Card
      key={item.id}
      style={{ flex: "1 1 calc(33.333% - var(--spacing-2))" }}
    >
      {item.name}
    </Card>
  ))}
</Stack>
```

### Section with Spacing

```tsx
<Stack as="section" direction="vertical" gap="lg">
  <h2>Title</h2>
  <p>Description</p>
  <ContentComponent />
</Stack>
```
