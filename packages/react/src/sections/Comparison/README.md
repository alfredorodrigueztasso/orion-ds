# Comparison Section

> Feature comparison table for comparing products, plans, or options side-by-side.

## Quick Start

```tsx
import { Comparison } from '@orion/react';

<Comparison
  title="Compare Plans"
  columns={[
    { title: 'Basic', subtitle: '$9/mo' },
    { title: 'Pro', subtitle: '$29/mo', highlighted: true, badge: 'Popular' },
    { title: 'Enterprise', subtitle: 'Custom' },
  ]}
  features={[
    { name: 'Users', values: ['1', '5', 'Unlimited'] },
    { name: 'Storage', values: ['10GB', '100GB', 'Unlimited'] },
    { name: 'API Access', values: [false, true, true] },
    { name: 'Support', values: ['Email', 'Priority', 'Dedicated'] },
  ]}
/>;
```

---

## Features

- **Boolean & Text Values** — Check/X marks or custom text per cell
- **Highlighted Columns** — Visual emphasis on recommended option
- **Column Badges** — Labels like "Popular" or "Best Value"
- **Category Grouping** — Organize features by category
- **Sticky Header** — Keep column headers visible while scrolling
- **CTA Buttons** — Optional action buttons per column
- **Brand-Aware** — Adapts to all Orion brands

---

## Props Reference

```typescript
interface ComparisonProps {
  // Header
  eyebrow?: ReactNode; // Badge/label above title
  title?: ReactNode; // Section title
  description?: ReactNode; // Section description

  // Content
  columns: ComparisonColumn[]; // REQUIRED - Column definitions
  features: ComparisonFeature[]; // REQUIRED - Feature rows

  // Display
  showCategories?: boolean; // Show category headers - default: true
  showDescriptions?: boolean; // Show feature descriptions - default: false
  stickyHeader?: boolean; // Sticky column headers - default: true

  // Styling
  background?: 'base' | 'subtle' | 'none'; // default: 'base'
  compact?: boolean; // Compact spacing - default: false
}

interface ComparisonColumn {
  title: string; // Column title (product/plan name)
  subtitle?: string; // Subtitle (price, etc.)
  highlighted?: boolean; // Highlight this column
  badge?: string; // Badge text ("Popular", "Best Value")
  ctaLabel?: string; // CTA button label
  ctaHref?: string; // CTA button href
}

interface ComparisonFeature {
  name: string; // Feature name
  description?: string; // Feature description
  category?: string; // Category for grouping
  values: (boolean | string | ReactNode)[]; // Values per column
}
```

---

## Column Configuration

### Basic Columns

```tsx
columns={[
  { title: "Free" },
  { title: "Pro" },
  { title: "Enterprise" }
]}
```

### With Pricing

```tsx
columns={[
  { title: "Starter", subtitle: "Free" },
  { title: "Professional", subtitle: "$49/month" },
  { title: "Enterprise", subtitle: "Contact us" }
]}
```

### Highlighted Column

```tsx
columns={[
  { title: "Basic", subtitle: "$9/mo" },
  { title: "Pro", subtitle: "$29/mo", highlighted: true, badge: "Most Popular" },
  { title: "Enterprise", subtitle: "$99/mo" }
]}
```

### With CTA Buttons

```tsx
columns={[
  { title: "Basic", subtitle: "$9/mo", ctaLabel: "Get Started", ctaHref: "/signup?plan=basic" },
  { title: "Pro", subtitle: "$29/mo", highlighted: true, ctaLabel: "Start Free Trial", ctaHref: "/signup?plan=pro" },
  { title: "Enterprise", subtitle: "Custom", ctaLabel: "Contact Sales", ctaHref: "/contact" }
]}
```

---

## Feature Values

### Boolean Values (Check/X)

```tsx
features={[
  { name: "Email Support", values: [true, true, true] },
  { name: "Phone Support", values: [false, true, true] },
  { name: "Dedicated Manager", values: [false, false, true] }
]}
```

### Text Values

```tsx
features={[
  { name: "Users", values: ["1", "5", "Unlimited"] },
  { name: "Storage", values: ["5GB", "50GB", "500GB"] },
  { name: "Projects", values: ["3", "Unlimited", "Unlimited"] }
]}
```

### Mixed Values

```tsx
features={[
  { name: "SSO", values: [false, true, true] },
  { name: "API Calls", values: ["1K/mo", "10K/mo", "Unlimited"] },
  { name: "Support", values: ["Community", "Email", "Priority"] }
]}
```

### Custom ReactNode Values

```tsx
features={[
  {
    name: "SLA",
    values: [
      "—",
      "99.9%",
      <span style={{ color: 'var(--text-brand)' }}>99.99%</span>
    ]
  }
]}
```

---

## Feature Categories

Group features by category for better organization.

```tsx
<Comparison
  showCategories
  features={[
    // Core Features
    { name: 'Users', category: 'Core Features', values: ['1', '5', 'Unlimited'] },
    { name: 'Projects', category: 'Core Features', values: ['3', '20', 'Unlimited'] },
    { name: 'Storage', category: 'Core Features', values: ['5GB', '50GB', '500GB'] },

    // Security
    { name: 'SSL Encryption', category: 'Security', values: [true, true, true] },
    { name: 'Two-Factor Auth', category: 'Security', values: [false, true, true] },
    { name: 'SSO', category: 'Security', values: [false, false, true] },

    // Support
    { name: 'Documentation', category: 'Support', values: [true, true, true] },
    { name: 'Email Support', category: 'Support', values: [true, true, true] },
    { name: 'Phone Support', category: 'Support', values: [false, true, true] },
  ]}
/>
```

---

## Complete Examples

### SaaS Pricing Comparison

```tsx
import { Comparison, Badge } from '@orion/react';

<Comparison
  eyebrow={<Badge variant="brand">Pricing</Badge>}
  title="Choose Your Plan"
  description="All plans include a 14-day free trial. No credit card required."
  columns={[
    {
      title: 'Starter',
      subtitle: 'Free',
      ctaLabel: 'Get Started',
      ctaHref: '/signup?plan=starter',
    },
    {
      title: 'Professional',
      subtitle: '$49/month',
      highlighted: true,
      badge: 'Most Popular',
      ctaLabel: 'Start Free Trial',
      ctaHref: '/signup?plan=pro',
    },
    {
      title: 'Enterprise',
      subtitle: 'Custom pricing',
      ctaLabel: 'Contact Sales',
      ctaHref: '/contact',
    },
  ]}
  features={[
    // Usage
    { name: 'Team members', category: 'Usage', values: ['1', 'Up to 10', 'Unlimited'] },
    { name: 'Projects', category: 'Usage', values: ['3', 'Unlimited', 'Unlimited'] },
    { name: 'Storage', category: 'Usage', values: ['1GB', '100GB', 'Unlimited'] },
    { name: 'API requests', category: 'Usage', values: ['1,000/mo', '100,000/mo', 'Unlimited'] },

    // Features
    { name: 'Custom domains', category: 'Features', values: [false, true, true] },
    { name: 'Analytics', category: 'Features', values: ['Basic', 'Advanced', 'Custom'] },
    { name: 'Integrations', category: 'Features', values: ['5', '20', 'Unlimited'] },
    { name: 'White labeling', category: 'Features', values: [false, false, true] },

    // Security
    { name: 'SSL encryption', category: 'Security', values: [true, true, true] },
    { name: 'Two-factor auth', category: 'Security', values: [false, true, true] },
    { name: 'SSO/SAML', category: 'Security', values: [false, false, true] },
    { name: 'Audit logs', category: 'Security', values: [false, false, true] },

    // Support
    { name: 'Documentation', category: 'Support', values: [true, true, true] },
    { name: 'Email support', category: 'Support', values: ['—', 'Priority', 'Priority'] },
    { name: 'Phone support', category: 'Support', values: [false, false, true] },
    { name: 'Dedicated manager', category: 'Support', values: [false, false, true] },
  ]}
  stickyHeader
  background="subtle"
/>;
```

### Product Comparison

```tsx
<Comparison
  title="Compare Models"
  columns={[
    { title: 'Model A', subtitle: '$299' },
    { title: 'Model B', subtitle: '$499', highlighted: true, badge: 'Best Value' },
    { title: 'Model C', subtitle: '$799' },
  ]}
  features={[
    { name: 'Display', values: ['6.1"', '6.7"', '6.7" ProMotion'] },
    { name: 'Chip', values: ['A15', 'A16', 'A17 Pro'] },
    { name: 'Camera', values: ['12MP', '48MP', '48MP Pro'] },
    { name: 'Battery', values: ['All-day', 'All-day+', 'All-day++'] },
    { name: '5G', values: [true, true, true] },
    { name: 'ProRes Video', values: [false, false, true] },
  ]}
  showCategories={false}
/>
```

### Compact Feature Matrix

```tsx
<Comparison
  compact
  columns={[{ title: 'Basic' }, { title: 'Standard' }, { title: 'Premium' }]}
  features={[
    { name: 'Feature A', values: [true, true, true] },
    { name: 'Feature B', values: [false, true, true] },
    { name: 'Feature C', values: [false, false, true] },
  ]}
  showCategories={false}
  stickyHeader={false}
/>
```

---

## Accessibility

- Table uses proper `<table>` semantic markup
- Column headers use `<th>` elements
- Boolean values have ARIA labels ("Included" / "Not included")
- Highlighted column is announced to screen readers
- Sticky header maintains keyboard accessibility

```tsx
// Good: Descriptive feature names
{
  name: 'Two-factor authentication (2FA)';
}

// Avoid: Abbreviations without context
{
  name: '2FA';
}
```

---

## Anti-Patterns

### Too Many Columns

```tsx
// WRONG - 6 columns hard to compare
columns={[...sixColumns]}

// CORRECT - Max 3-4 columns for clarity
columns={[
  { title: "Basic" },
  { title: "Pro", highlighted: true },
  { title: "Enterprise" }
]}
```

### Mismatched Values Array

```tsx
// WRONG - Values don't match column count
columns={[col1, col2, col3]}  // 3 columns
features={[
  { name: "Feature", values: [true, true] }  // Only 2 values!
]}

// CORRECT - Match values to columns
features={[
  { name: "Feature", values: [true, true, true] }  // 3 values for 3 columns
]}
```

### Inconsistent Value Types

```tsx
// WRONG - Hard to scan
features={[
  { name: "Storage", values: ["5 gigabytes", "50GB", "Five hundred gigs"] }
]}

// CORRECT - Consistent formatting
features={[
  { name: "Storage", values: ["5GB", "50GB", "500GB"] }
]}
```

### No Highlighted Option

```tsx
// WRONG - No recommendation for users
columns={[
  { title: "Plan A", subtitle: "$19" },
  { title: "Plan B", subtitle: "$39" },
  { title: "Plan C", subtitle: "$79" }
]}

// CORRECT - Help users decide
columns={[
  { title: "Plan A", subtitle: "$19" },
  { title: "Plan B", subtitle: "$39", highlighted: true, badge: "Recommended" },
  { title: "Plan C", subtitle: "$79" }
]}
```

---

## When to Use Comparison

| Scenario         | Recommendation       |
| ---------------- | -------------------- |
| Pricing tiers    | With CTAs and badges |
| Product variants | With specifications  |
| Service packages | With categories      |
| Feature matrix   | Compact mode         |

## When NOT to Use Comparison

| Scenario        | Use Instead         |
| --------------- | ------------------- |
| Simple pricing  | Pricing section     |
| Single product  | Product detail page |
| Data grid       | DataTable section   |
| Few differences | Feature list        |

---

## Related Components

- **[Pricing](../Pricing/README.md)** — Pricing cards
- **[Features](../Features/README.md)** — Feature showcase
- **[DataTable](../DataTable/README.md)** — Data grids
- **[FAQ](../FAQ/README.md)** — Common questions
