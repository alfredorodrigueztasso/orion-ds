# Pricing Section

> Pricing tiers comparison with feature lists, highlighting, and CTAs.

## Quick Start

```tsx
import { Pricing, Button, Badge } from '@orion/react';

<Pricing
  eyebrow={<Badge>Pricing</Badge>}
  title="Simple, transparent pricing"
  description="Choose the plan that's right for you"
  plans={[
    {
      name: "Starter",
      price: "$9",
      period: "per month",
      description: "Perfect for side projects",
      features: ["5 projects", "Basic analytics", "Email support"],
      action: <Button variant="secondary" fullWidth>Get Started</Button>
    },
    {
      name: "Pro",
      price: "$29",
      period: "per month",
      description: "For growing teams",
      features: ["Unlimited projects", "Advanced analytics", "Priority support"],
      action: <Button fullWidth>Start Free Trial</Button>,
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: ["Everything in Pro", "Custom integrations", "Dedicated support"],
      action: <Button variant="secondary" fullWidth>Contact Sales</Button>
    }
  ]}
/>
```

---

## Features

- **Flexible Grid** — 2, 3, or 4 column layouts
- **Popular Highlighting** — Emphasize recommended plans
- **Feature Lists** — Included/excluded feature display
- **Custom Badges** — Add "Best Value", "Most Popular", etc.
- **Flexible Pricing** — Support for custom price formats
- **Brand-Aware** — Adapts to all Orion brands automatically

---

## Props Reference

```typescript
interface PricingProps {
  // Header
  eyebrow?: ReactNode;          // Badge/label above title
  title?: ReactNode;            // Section title
  description?: ReactNode;      // Section description

  // Content
  plans: PricingPlan[];         // REQUIRED - Array of pricing plans

  // Layout
  columns?: 2 | 3 | 4;          // Grid columns - default: 3
  centered?: boolean;           // Center header text - default: true

  // Styling
  background?: 'base' | 'subtle' | 'none';  // default: 'subtle'
}

interface PricingPlan {
  name: string;                 // Plan name (e.g., "Starter", "Pro")
  price: string | ReactNode;    // Price display (e.g., "$9", "$29/mo")
  period?: string;              // Billing period (e.g., "per month")
  description?: string;         // Plan description
  features: (string | PricingFeature)[];  // Feature list
  action?: ReactNode;           // CTA button
  popular?: boolean;            // Highlight as recommended - default: false
  badge?: ReactNode;            // Custom badge (e.g., "Best Value")
}

interface PricingFeature {
  text: string;                 // Feature text
  included?: boolean;           // Is feature included - default: true
}
```

---

## Column Layouts

### 2 Columns

Best for simple good/better tier structures.

```tsx
<Pricing
  columns={2}
  plans={[
    { name: "Free", price: "$0", features: [...] },
    { name: "Pro", price: "$29", features: [...], popular: true },
  ]}
/>
```

### 3 Columns (Default)

Classic good/better/best pricing structure.

```tsx
<Pricing
  columns={3}
  plans={[
    { name: "Starter", price: "$9", features: [...] },
    { name: "Pro", price: "$29", features: [...], popular: true },
    { name: "Enterprise", price: "Custom", features: [...] },
  ]}
/>
```

### 4 Columns

For products with many tier options.

```tsx
<Pricing
  columns={4}
  plans={[
    { name: "Free", price: "$0", features: [...] },
    { name: "Basic", price: "$9", features: [...] },
    { name: "Pro", price: "$29", features: [...], popular: true },
    { name: "Enterprise", price: "$99", features: [...] },
  ]}
/>
```

---

## Plan Configuration

### Basic Plan

```tsx
{
  name: "Starter",
  price: "$9",
  period: "per month",
  features: ["5 projects", "Basic support"],
  action: <Button fullWidth>Get Started</Button>
}
```

### Popular/Recommended Plan

```tsx
{
  name: "Pro",
  price: "$29",
  period: "per month",
  features: ["Unlimited projects", "Priority support"],
  action: <Button fullWidth>Start Free Trial</Button>,
  popular: true  // Adds visual emphasis
}
```

### With Custom Badge

```tsx
{
  name: "Team",
  price: "$19",
  period: "per user/month",
  badge: <Badge variant="success">Best Value</Badge>,
  features: [...],
  action: <Button fullWidth>Get Started</Button>
}
```

### Enterprise/Custom Pricing

```tsx
{
  name: "Enterprise",
  price: "Custom",  // No period needed
  description: "For organizations with advanced needs",
  features: [
    "Everything in Pro",
    "Custom integrations",
    "Dedicated account manager",
    "SLA guarantee"
  ],
  action: <Button variant="secondary" fullWidth>Contact Sales</Button>
}
```

---

## Feature Lists

### Simple String Features

```tsx
features: [
  "5 projects",
  "10GB storage",
  "Email support"
]
```

### Included/Excluded Features

```tsx
features: [
  { text: "5 projects", included: true },
  { text: "10GB storage", included: true },
  { text: "API access", included: false },
  { text: "Custom domain", included: false },
]
```

### Mixed Features

```tsx
features: [
  "Unlimited projects",  // Simple string = included
  { text: "100GB storage", included: true },
  { text: "Priority support", included: true },
  { text: "Custom integrations", included: false },
]
```

---

## Price Formats

### Monthly

```tsx
{ price: "$29", period: "per month" }
// Displays: $29 per month
```

### Annual

```tsx
{ price: "$290", period: "per year" }
// Displays: $290 per year
```

### Per User

```tsx
{ price: "$15", period: "per user/month" }
// Displays: $15 per user/month
```

### Custom Format

```tsx
{ price: <><span style={{ fontSize: '0.5em' }}>Starting at</span> $99</> }
// Custom ReactNode for complex pricing
```

### Free Tier

```tsx
{ price: "$0", period: "forever" }
// or
{ price: "Free" }
```

---

## Complete Examples

### SaaS Pricing

```tsx
import { Pricing, Button, Badge } from '@orion/react';

<Pricing
  eyebrow={<Badge variant="brand">Pricing</Badge>}
  title="Plans for every team size"
  description="Start free, upgrade when you're ready."
  plans={[
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "For individuals and small projects",
      features: [
        "3 projects",
        "1GB storage",
        "Community support",
        { text: "API access", included: false },
        { text: "Custom domain", included: false },
      ],
      action: <Button variant="secondary" fullWidth>Get Started</Button>
    },
    {
      name: "Pro",
      price: "$29",
      period: "per month",
      description: "For professional developers",
      features: [
        "Unlimited projects",
        "100GB storage",
        "Priority support",
        "API access",
        { text: "Custom domain", included: false },
      ],
      action: <Button fullWidth>Start Free Trial</Button>,
      popular: true,
      badge: <Badge variant="brand">Most Popular</Badge>
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: [
        "Everything in Pro",
        "Unlimited storage",
        "Dedicated support",
        "API access",
        "Custom domain",
        "SSO & SAML",
        "SLA guarantee",
      ],
      action: <Button variant="secondary" fullWidth>Contact Sales</Button>
    }
  ]}
/>
```

### Simple Two-Tier Pricing

```tsx
<Pricing
  title="Simple pricing"
  description="No hidden fees. Cancel anytime."
  columns={2}
  plans={[
    {
      name: "Monthly",
      price: "$29",
      period: "per month",
      features: [
        "All features included",
        "Unlimited projects",
        "Priority support",
      ],
      action: <Button variant="secondary" fullWidth>Subscribe Monthly</Button>
    },
    {
      name: "Annual",
      price: "$290",
      period: "per year",
      description: "Save $58 (2 months free)",
      features: [
        "All features included",
        "Unlimited projects",
        "Priority support",
      ],
      action: <Button fullWidth>Subscribe Annually</Button>,
      popular: true,
      badge: <Badge variant="success">Save 17%</Badge>
    }
  ]}
/>
```

### Per-Seat Pricing

```tsx
<Pricing
  title="Team pricing"
  description="Pay only for what you use."
  columns={3}
  plans={[
    {
      name: "Starter",
      price: "$0",
      period: "per user/month",
      description: "Up to 3 users",
      features: [
        "Basic features",
        "5 projects",
        "Community support",
      ],
      action: <Button variant="secondary" fullWidth>Start Free</Button>
    },
    {
      name: "Team",
      price: "$12",
      period: "per user/month",
      description: "Unlimited users",
      features: [
        "All features",
        "Unlimited projects",
        "Email support",
        "Admin controls",
      ],
      action: <Button fullWidth>Start Trial</Button>,
      popular: true
    },
    {
      name: "Enterprise",
      price: "$25",
      period: "per user/month",
      description: "Advanced security & support",
      features: [
        "Everything in Team",
        "SSO/SAML",
        "Audit logs",
        "Dedicated support",
        "Custom contracts",
      ],
      action: <Button variant="secondary" fullWidth>Contact Sales</Button>
    }
  ]}
/>
```

---

## Accessibility

- Pricing cards use semantic HTML structure
- Feature checkmarks/crosses have appropriate aria labels
- Popular badge is announced to screen readers
- Action buttons have clear, descriptive text

```tsx
// Good: Clear action text
<Button fullWidth>Start 14-Day Free Trial</Button>

// Avoid: Vague action text
<Button fullWidth>Click Here</Button>
```

---

## Anti-Patterns

### Too Many Plans

```tsx
// WRONG - Too many options cause decision paralysis
<Pricing
  columns={4}
  plans={[...sixPlans]}  // 6+ plans is overwhelming
/>

// CORRECT - 2-4 clear tiers
<Pricing
  columns={3}
  plans={[starter, pro, enterprise]}
/>
```

### No Popular/Recommended Plan

```tsx
// WRONG - No guidance for users
<Pricing
  plans={[
    { name: "Basic", ... },
    { name: "Pro", ... },
    { name: "Enterprise", ... },
  ]}
/>

// CORRECT - Highlight recommended option
<Pricing
  plans={[
    { name: "Basic", ... },
    { name: "Pro", ..., popular: true },  // Guide users
    { name: "Enterprise", ... },
  ]}
/>
```

### Inconsistent Feature Lists

```tsx
// WRONG - Different number of features per plan
<Pricing
  plans={[
    { name: "Basic", features: ["Feature 1"] },                    // 1 feature
    { name: "Pro", features: ["F1", "F2", "F3", "F4", "F5"] },     // 5 features
    { name: "Enterprise", features: ["F1", "F2", "F3"] },          // 3 features
  ]}
/>

// CORRECT - Consistent feature comparison
<Pricing
  plans={[
    { name: "Basic", features: [
      { text: "5 projects", included: true },
      { text: "API access", included: false },
      { text: "Support", included: true },
    ]},
    { name: "Pro", features: [
      { text: "Unlimited projects", included: true },
      { text: "API access", included: true },
      { text: "Priority support", included: true },
    ]},
  ]}
/>
```

### Missing Action Buttons

```tsx
// WRONG - No clear next step
<Pricing
  plans={[
    { name: "Pro", price: "$29", features: [...] }  // No action!
  ]}
/>

// CORRECT - Always include action
<Pricing
  plans={[
    {
      name: "Pro",
      price: "$29",
      features: [...],
      action: <Button fullWidth>Get Started</Button>
    }
  ]}
/>
```

---

## When to Use Pricing

| Scenario | Recommendation |
|----------|----------------|
| SaaS product pricing | 3 columns with popular highlight |
| Simple subscription | 2 columns (monthly/annual) |
| Enterprise sales | Include "Contact Sales" tier |
| Freemium model | Lead with free tier |

## When NOT to Use Pricing

| Scenario | Use Instead |
|----------|-------------|
| Feature comparison only | `Comparison` section |
| Single product price | Inline pricing in Hero or CTA |
| Complex quote builder | Custom form/calculator |

---

## Related Components

- **[Features](../Features/README.md)** — Feature showcase (place before Pricing)
- **[CTA](../CTA/README.md)** — Call-to-action (place after Pricing)
- **[FAQ](../FAQ/README.md)** — Answer pricing questions
- **[Comparison](../Comparison/README.md)** — Detailed feature comparison
- **[Button](../../components/Button/README.md)** — Action buttons
