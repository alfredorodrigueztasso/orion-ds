# Stats Section

> Key metrics display with values, labels, trends, and optional icons.

## Quick Start

```tsx
import { Stats, Badge } from '@orion/react';

<Stats
  eyebrow={<Badge>By the Numbers</Badge>}
  title="Trusted by thousands"
  stats={[
    { value: '10K+', label: 'Active Users' },
    { value: '99.9%', label: 'Uptime' },
    { value: '$5M+', label: 'Processed' },
    { value: '4.9', label: 'Rating' },
  ]}
/>;
```

---

## Features

- **3 Visual Variants** — Default, Cards, Inline
- **Flexible Grid** — 2, 3, or 4 columns
- **Trend Indicators** — Up/down trends with colors
- **Icons** — Optional icon per stat
- **Value Highlighting** — Brand gradient on values
- **Brand-Aware** — Adapts to all Orion brands

---

## Props Reference

```typescript
interface StatsProps {
  // Header
  eyebrow?: ReactNode; // Badge/label above title
  title?: ReactNode; // Section title
  description?: ReactNode; // Section description

  // Content
  stats: StatItem[]; // REQUIRED - Array of stat items

  // Layout
  columns?: 2 | 3 | 4; // Grid columns - default: 4
  centered?: boolean; // Center content - default: true

  // Styling
  variant?: 'default' | 'cards' | 'inline'; // default: 'default'
  background?: 'base' | 'subtle' | 'brand' | 'none'; // default: 'subtle'
  highlightValue?: boolean; // Brand gradient on values - default: false
}

interface StatItem {
  value: string | number; // Main stat value (e.g., "10K+", "99.9%")
  label: string; // Label describing the stat
  description?: string; // Optional additional context
  icon?: ReactNode; // Optional icon element
  trend?: StatTrend; // Optional trend indicator
}

interface StatTrend {
  value: string; // Trend value (e.g., "+12%", "-5%")
  positive?: boolean; // Is trend positive - default: true
}
```

---

## Stat Items

### Basic Stat

```tsx
{ value: "10K+", label: "Users" }
```

### With Description

```tsx
{
  value: "99.9%",
  label: "Uptime",
  description: "Over the last 12 months"
}
```

### With Icon

```tsx
import { Users } from 'lucide-react';

{
  value: "10K+",
  label: "Active Users",
  icon: <Users size={24} />
}
```

### With Trend

```tsx
{
  value: "$1.2M",
  label: "Revenue",
  trend: { value: "+12%", positive: true }
}
```

```tsx
{
  value: "2.3s",
  label: "Load Time",
  trend: { value: "-0.5s", positive: true }  // Decrease is positive
}
```

```tsx
{
  value: "150",
  label: "Bugs",
  trend: { value: "+23", positive: false }  // Increase is negative
}
```

---

## Visual Variants

### `variant="default"` (Default)

Simple grid with dividers between stats.

```tsx
<Stats
  variant="default"
  stats={[
    { value: '10K+', label: 'Users' },
    { value: '99.9%', label: 'Uptime' },
    { value: '$5M+', label: 'Processed' },
    { value: '4.9', label: 'Rating' },
  ]}
/>
```

### `variant="cards"`

Individual cards for each stat.

```tsx
<Stats
  variant="cards"
  stats={[
    { value: '10K+', label: 'Users', icon: <Users size={24} /> },
    { value: '99.9%', label: 'Uptime', icon: <Server size={24} /> },
    { value: '$5M+', label: 'Processed', icon: <DollarSign size={24} /> },
  ]}
  columns={3}
/>
```

### `variant="inline"`

Compact inline layout for tight spaces.

```tsx
<Stats
  variant="inline"
  stats={[
    { value: '1.2K', label: 'Stars' },
    { value: '200', label: 'Forks' },
    { value: '50', label: 'Contributors' },
  ]}
  columns={3}
/>
```

---

## Column Layouts

### 2 Columns

```tsx
<Stats
  columns={2}
  stats={[
    { value: '$100M+', label: 'Funding Raised' },
    { value: '500+', label: 'Companies' },
  ]}
/>
```

### 3 Columns

```tsx
<Stats
  columns={3}
  stats={[
    { value: '10K+', label: 'Users' },
    { value: '99.9%', label: 'Uptime' },
    { value: '24/7', label: 'Support' },
  ]}
/>
```

### 4 Columns (Default)

```tsx
<Stats
  columns={4}
  stats={[
    { value: '10K+', label: 'Users' },
    { value: '99.9%', label: 'Uptime' },
    { value: '$5M+', label: 'Processed' },
    { value: '4.9', label: 'Rating' },
  ]}
/>
```

---

## Value Highlighting

Apply brand gradient to stat values for visual impact.

```tsx
<Stats
  highlightValue
  stats={[
    { value: '10K+', label: 'Users' },
    { value: '99.9%', label: 'Uptime' },
  ]}
/>
```

---

## Background Options

```tsx
// Subtle gray (default)
<Stats background="subtle" stats={stats} />

// Base surface
<Stats background="base" stats={stats} />

// Brand color
<Stats background="brand" stats={stats} />

// No background
<Stats background="none" stats={stats} />
```

---

## Complete Examples

### SaaS Metrics

```tsx
import { Stats, Badge } from '@orion/react';
import { Users, Server, CreditCard, Star } from 'lucide-react';

<Stats
  eyebrow={<Badge variant="brand">By the Numbers</Badge>}
  title="Trusted by thousands worldwide"
  stats={[
    {
      value: '10,000+',
      label: 'Active Users',
      icon: <Users size={24} />,
      trend: { value: '+15%', positive: true },
    },
    {
      value: '99.99%',
      label: 'Uptime SLA',
      icon: <Server size={24} />,
      description: 'Enterprise-grade reliability',
    },
    {
      value: '$50M+',
      label: 'Processed',
      icon: <CreditCard size={24} />,
      trend: { value: '+23%', positive: true },
    },
    {
      value: '4.9/5',
      label: 'User Rating',
      icon: <Star size={24} />,
      description: 'Based on 1,000+ reviews',
    },
  ]}
  variant="cards"
  columns={4}
/>;
```

### Company Growth Stats

```tsx
<Stats
  title="Growing Fast"
  stats={[
    { value: 'Series B', label: 'Funding Round' },
    { value: '$50M', label: 'Total Raised' },
    { value: '150+', label: 'Team Members' },
    { value: '12', label: 'Countries' },
  ]}
  background="brand"
/>
```

### Open Source Project Stats

```tsx
<Stats
  variant="inline"
  centered={false}
  stats={[
    { value: '12.5K', label: 'GitHub Stars', trend: { value: '+500', positive: true } },
    { value: '1.2K', label: 'Forks' },
    { value: '150', label: 'Contributors' },
    { value: '98%', label: 'Issues Closed' },
  ]}
  columns={4}
  background="subtle"
/>
```

### Dashboard KPIs

```tsx
<Stats
  variant="cards"
  columns={3}
  stats={[
    {
      value: '$12,345',
      label: 'Monthly Revenue',
      trend: { value: '+8.2%', positive: true },
    },
    {
      value: '1,234',
      label: 'Active Subscriptions',
      trend: { value: '+12%', positive: true },
    },
    {
      value: '2.3%',
      label: 'Churn Rate',
      trend: { value: '-0.5%', positive: true }, // Decrease is good
    },
  ]}
  background="base"
/>
```

---

## Accessibility

- Stats use semantic HTML with proper headings
- Trend colors have sufficient contrast
- Trend direction indicated by more than just color
- Screen readers announce stat labels with values

```tsx
// Good: Clear, descriptive labels
{ value: "99.9%", label: "Uptime over last 12 months" }

// Avoid: Abbreviated or unclear labels
{ value: "99.9%", label: "Up" }
```

---

## Anti-Patterns

### Too Many Stats

```tsx
// WRONG - Information overload
<Stats
  columns={4}
  stats={[...eightStats]}  // Too many to scan quickly
/>

// CORRECT - Focus on key metrics
<Stats
  columns={4}
  stats={[...fourStats]}  // 3-4 is optimal
/>
```

### Inconsistent Number Formats

```tsx
// WRONG - Mixed formats
stats={[
  { value: "10000", label: "Users" },      // No formatting
  { value: "$50,000.00", label: "Revenue" }, // Too precise
  { value: "99.999%", label: "Uptime" }     // Too many decimals
]}

// CORRECT - Consistent, scannable formats
stats={[
  { value: "10K+", label: "Users" },
  { value: "$50K", label: "Revenue" },
  { value: "99.9%", label: "Uptime" }
]}
```

### Missing Context

```tsx
// WRONG - Numbers without meaning
stats={[
  { value: "47", label: "Number" },
  { value: "3.2", label: "Score" }
]}

// CORRECT - Clear context
stats={[
  { value: "47", label: "Countries Served" },
  { value: "3.2s", label: "Average Response Time" }
]}
```

### Confusing Trend Colors

```tsx
// WRONG - Positive increase for negative metric
{
  value: "150",
  label: "Bugs",
  trend: { value: "+23", positive: true }  // More bugs isn't positive!
}

// CORRECT - Logical trend coloring
{
  value: "150",
  label: "Bugs",
  trend: { value: "+23", positive: false }  // Red for bad increase
}
```

---

## When to Use Stats

| Scenario                  | Recommendation             |
| ------------------------- | -------------------------- |
| Landing page social proof | Yes - with 3-4 key numbers |
| Dashboard KPIs            | Yes - with trends          |
| Company about page        | Yes - growth/team metrics  |
| Product overview          | Yes - performance metrics  |

## When NOT to Use Stats

| Scenario                  | Use Instead            |
| ------------------------- | ---------------------- |
| Detailed data comparison  | `DataTable` or chart   |
| Testimonials with numbers | `Testimonials` section |
| Feature list              | `Features` section     |
| Pricing comparison        | `Pricing` section      |

---

## Related Components

- **[Hero](../Hero/README.md)** — Landing page header (place Stats after)
- **[Features](../Features/README.md)** — Feature showcase
- **[LogoCloud](../LogoCloud/README.md)** — Client logos (another form of social proof)
- **[Testimonials](../Testimonials/README.md)** — Customer quotes
