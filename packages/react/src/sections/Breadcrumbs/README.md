# Breadcrumbs Section

> Navigation breadcrumb trail showing the current page location within the app hierarchy.

## Quick Start

```tsx
import { Breadcrumbs } from '@orion/react';

<Breadcrumbs
  items={[
    { id: 'home', label: 'Home', href: '/' },
    { id: 'projects', label: 'Projects', href: '/projects' },
    { id: 'alpha', label: 'Project Alpha' },
  ]}
/>;
```

---

## Features

- **Collapsible** — Auto-collapse long breadcrumb trails
- **Custom Separators** — Customizable separator characters
- **Home Icon** — Optional home icon for first item
- **Size Variants** — Small, medium, and large sizes
- **Click Handlers** — Support for both href and onClick
- **Icon Support** — Optional icons per breadcrumb item
- **Brand-Aware** — Adapts to all Orion brands

---

## Props Reference

```typescript
interface BreadcrumbsProps {
  // Content
  items: BreadcrumbItem[]; // REQUIRED - Breadcrumb items

  // Display
  separator?: ReactNode; // Custom separator - default: "/"
  showHomeIcon?: boolean; // Show home icon - default: false
  size?: 'sm' | 'md' | 'lg'; // Size variant - default: 'md'

  // Collapsing
  maxItems?: number; // Max items before collapse
  itemsBeforeCollapse?: number; // Items at start when collapsed - default: 1
  itemsAfterCollapse?: number; // Items at end when collapsed - default: 1
}

interface BreadcrumbItem {
  id: string; // Unique identifier
  label: string; // Display label
  href?: string; // Link URL (optional for last item)
  icon?: ReactNode; // Optional icon
  onClick?: () => void; // Click handler
}
```

---

## Basic Usage

### Simple Breadcrumbs

```tsx
<Breadcrumbs
  items={[
    { id: 'home', label: 'Home', href: '/' },
    { id: 'settings', label: 'Settings', href: '/settings' },
    { id: 'profile', label: 'Profile' }, // Current page (no href)
  ]}
/>
```

### With Home Icon

```tsx
<Breadcrumbs
  showHomeIcon
  items={[
    { id: 'home', label: 'Home', href: '/' },
    { id: 'docs', label: 'Documentation', href: '/docs' },
    { id: 'api', label: 'API Reference' },
  ]}
/>
```

---

## Custom Separator

```tsx
// Chevron separator
<Breadcrumbs
  separator={<ChevronRight size={14} />}
  items={items}
/>

// Arrow separator
<Breadcrumbs
  separator="→"
  items={items}
/>

// Dot separator
<Breadcrumbs
  separator="•"
  items={items}
/>
```

---

## Collapsing Long Trails

Automatically collapse breadcrumbs when exceeding `maxItems`.

```tsx
<Breadcrumbs
  maxItems={4}
  itemsBeforeCollapse={1}
  itemsAfterCollapse={2}
  items={[
    { id: '1', label: 'Home', href: '/' },
    { id: '2', label: 'Products', href: '/products' },
    { id: '3', label: 'Electronics', href: '/products/electronics' },
    { id: '4', label: 'Computers', href: '/products/electronics/computers' },
    { id: '5', label: 'Laptops', href: '/products/electronics/computers/laptops' },
    { id: '6', label: 'MacBook Pro' },
  ]}
/>
// Renders: Home / ... / Computers / Laptops / MacBook Pro
```

---

## Size Variants

### Small

```tsx
<Breadcrumbs size="sm" items={items} />
```

### Medium (Default)

```tsx
<Breadcrumbs size="md" items={items} />
```

### Large

```tsx
<Breadcrumbs size="lg" items={items} />
```

---

## With Icons

```tsx
import { Home, Folder, File } from 'lucide-react';

<Breadcrumbs
  items={[
    { id: 'home', label: 'Home', href: '/', icon: <Home size={16} /> },
    { id: 'projects', label: 'Projects', href: '/projects', icon: <Folder size={16} /> },
    { id: 'doc', label: 'Document.pdf', icon: <File size={16} /> },
  ]}
/>;
```

---

## Complete Examples

### SaaS Dashboard Breadcrumbs

```tsx
import { Breadcrumbs } from '@orion/react';
import { Home, Settings, User } from 'lucide-react';

function DashboardBreadcrumbs({ currentPage }) {
  const items = [
    { id: 'home', label: 'Dashboard', href: '/dashboard', icon: <Home size={16} /> },
    { id: 'settings', label: 'Settings', href: '/settings', icon: <Settings size={16} /> },
    { id: 'profile', label: 'Profile', icon: <User size={16} /> },
  ];

  return <Breadcrumbs items={items} separator={<ChevronRight size={14} />} size="sm" />;
}
```

### E-commerce Category Navigation

```tsx
<Breadcrumbs
  showHomeIcon
  maxItems={5}
  items={[
    { id: 'home', label: 'Home', href: '/' },
    { id: 'shop', label: 'Shop', href: '/shop' },
    { id: 'clothing', label: 'Clothing', href: '/shop/clothing' },
    { id: 'women', label: 'Women', href: '/shop/clothing/women' },
    { id: 'dresses', label: 'Dresses', href: '/shop/clothing/women/dresses' },
    { id: 'product', label: 'Summer Floral Dress' },
  ]}
/>
```

### Documentation Navigation

```tsx
<Breadcrumbs
  items={[
    { id: 'docs', label: 'Docs', href: '/docs' },
    { id: 'components', label: 'Components', href: '/docs/components' },
    { id: 'button', label: 'Button' },
  ]}
  separator="/"
/>
```

### With Click Handlers (SPA Navigation)

```tsx
import { useNavigate } from 'react-router-dom';

function BreadcrumbNav() {
  const navigate = useNavigate();

  return (
    <Breadcrumbs
      items={[
        { id: 'home', label: 'Home', onClick: () => navigate('/') },
        { id: 'users', label: 'Users', onClick: () => navigate('/users') },
        { id: 'user', label: 'John Doe' },
      ]}
    />
  );
}
```

---

## Accessibility

- Uses `<nav>` with `aria-label="Breadcrumb"`
- Uses `<ol>` for semantic ordered list
- Current page marked with `aria-current="page"`
- Separators hidden from screen readers
- Links are keyboard accessible

```tsx
// Good: Descriptive labels
{
  label: 'User Settings';
}

// Avoid: Abbreviated labels without context
{
  label: 'Usr Set';
}
```

---

## Anti-Patterns

### Missing Home Link

```tsx
// WRONG - No way to get back to start
<Breadcrumbs
  items={[
    { id: 'sub', label: 'Subcategory' },
    { id: 'current', label: 'Current Page' }
  ]}
/>

// CORRECT - Include root/home
<Breadcrumbs
  items={[
    { id: 'home', label: 'Home', href: '/' },
    { id: 'sub', label: 'Subcategory', href: '/sub' },
    { id: 'current', label: 'Current Page' }
  ]}
/>
```

### Too Many Visible Items

```tsx
// WRONG - Long trail clutters UI
<Breadcrumbs
  items={[...tenItems]}
/>

// CORRECT - Use collapse for long trails
<Breadcrumbs
  maxItems={4}
  items={[...tenItems]}
/>
```

### Clickable Current Page

```tsx
// WRONG - Current page shouldn't be a link
<Breadcrumbs
  items={[
    { id: 'home', label: 'Home', href: '/' },
    { id: 'current', label: 'Current', href: '/current' }  // User is already here!
  ]}
/>

// CORRECT - No href on current page
<Breadcrumbs
  items={[
    { id: 'home', label: 'Home', href: '/' },
    { id: 'current', label: 'Current' }  // No href
  ]}
/>
```

---

## When to Use Breadcrumbs

| Scenario              | Recommendation          |
| --------------------- | ----------------------- |
| Nested pages          | Always use breadcrumbs  |
| E-commerce categories | With collapse           |
| Documentation         | Standard with separator |
| Admin dashboards      | With icons              |

## When NOT to Use Breadcrumbs

| Scenario         | Use Instead     |
| ---------------- | --------------- |
| Single-level app | Tabs or nav     |
| Linear wizard    | Stepper section |
| Search results   | Back button     |
| Flat navigation  | Standard navbar |

---

## Related Components

- **[PageHeader](../PageHeader/README.md)** — Page header with breadcrumbs
- **[Sidebar](../Sidebar/README.md)** — Sidebar navigation
- **[Stepper](../Stepper/README.md)** — Step progress indicator
- **[Navbar](../../components/Navbar/README.md)** — Top navigation
