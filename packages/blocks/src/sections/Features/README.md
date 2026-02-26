# Features Section

> Grid-based feature showcase with icons, descriptions, and optional badges.

## Quick Start

```tsx
import { Features, Badge } from "@orion/react";
import { Zap, Shield, Code } from "lucide-react";

<Features
  eyebrow={<Badge>Features</Badge>}
  title="Everything you need"
  description="Powerful features designed for modern apps"
  items={[
    { icon: <Zap size={24} />, title: "Fast", description: "Lightning speed" },
    {
      icon: <Shield size={24} />,
      title: "Secure",
      description: "Bank-grade security",
    },
    {
      icon: <Code size={24} />,
      title: "Developer First",
      description: "Built for devs",
    },
  ]}
  columns={3}
/>;
```

---

## Features

- **Flexible Grid** — 2, 3, or 4 column layouts
- **Icon Support** — Lucide icons or custom elements
- **Badges** — Optional badge per feature item
- **Links** — Optional href for feature cards
- **Interactive** — Hover effects on cards (configurable)
- **Brand-Aware** — Adapts to all Orion brands automatically

---

## Props Reference

```typescript
interface FeaturesProps {
  // Header
  eyebrow?: ReactNode; // Badge/label above title
  title?: ReactNode; // Section title
  description?: ReactNode; // Section description

  // Content
  items: FeatureItem[]; // REQUIRED - Array of feature items

  // Layout
  columns?: 2 | 3 | 4; // Grid columns - default: 3
  centered?: boolean; // Center header text - default: true

  // Styling
  background?: "base" | "subtle" | "none"; // default: 'subtle'
  interactive?: boolean; // Enable hover effects - default: true
}

interface FeatureItem {
  icon?: ReactNode; // Icon element (lucide-react recommended)
  title: string; // Feature title
  description: string; // Feature description
  badge?: string; // Optional badge text
  href?: string; // Optional link URL
}
```

---

## Column Layouts

### 2 Columns

Best for larger feature descriptions or fewer items.

```tsx
<Features
  title="Core Features"
  items={[
    {
      icon: <Zap />,
      title: "Fast",
      description: "Detailed description here...",
    },
    {
      icon: <Shield />,
      title: "Secure",
      description: "Detailed description here...",
    },
  ]}
  columns={2}
/>
```

### 3 Columns (Default)

Balanced layout for 3-6 features.

```tsx
<Features title="Key Features" items={features} columns={3} />
```

### 4 Columns

Compact layout for many features with short descriptions.

```tsx
<Features title="All Features" items={manyFeatures} columns={4} />
```

---

## Feature Items

### Basic Feature

```tsx
{
  title: "Fast Performance",
  description: "Lightning-fast builds and hot reloading."
}
```

### With Icon

```tsx
import { Zap } from 'lucide-react';

{
  icon: <Zap size={24} />,
  title: "Fast Performance",
  description: "Lightning-fast builds and hot reloading."
}
```

### With Badge

```tsx
{
  icon: <Sparkles size={24} />,
  title: "AI-Powered",
  description: "Smart suggestions powered by machine learning.",
  badge: "New"
}
```

### With Link

```tsx
{
  icon: <Book size={24} />,
  title: "Documentation",
  description: "Comprehensive guides and API references.",
  href: "/docs"
}
```

---

## Background Options

```tsx
// Subtle gray background (default)
<Features background="subtle" items={features} />

// White/dark base background
<Features background="base" items={features} />

// No background (transparent)
<Features background="none" items={features} />
```

---

## Header Alignment

```tsx
// Centered header (default)
<Features
  centered={true}
  title="Centered Title"
  items={features}
/>

// Left-aligned header
<Features
  centered={false}
  title="Left-Aligned Title"
  items={features}
/>
```

---

## Complete Examples

### SaaS Features Grid

```tsx
import { Features, Badge } from "@orion/react";
import { Zap, Shield, Cloud, Users, BarChart, Lock } from "lucide-react";

<Features
  eyebrow={<Badge variant="brand">Features</Badge>}
  title="Everything you need to scale"
  description="Built for teams that move fast and ship often."
  items={[
    {
      icon: <Zap size={24} />,
      title: "Lightning Fast",
      description: "Sub-second response times with global CDN.",
    },
    {
      icon: <Shield size={24} />,
      title: "Enterprise Security",
      description: "SOC 2 Type II certified with end-to-end encryption.",
    },
    {
      icon: <Cloud size={24} />,
      title: "Auto-Scaling",
      description: "Handles traffic spikes automatically.",
    },
    {
      icon: <Users size={24} />,
      title: "Team Collaboration",
      description: "Real-time editing with role-based access.",
    },
    {
      icon: <BarChart size={24} />,
      title: "Advanced Analytics",
      description: "Insights that drive better decisions.",
    },
    {
      icon: <Lock size={24} />,
      title: "SSO Ready",
      description: "SAML and OAuth support out of the box.",
    },
  ]}
  columns={3}
/>;
```

### Features with Badges

```tsx
<Features
  title="What's New"
  items={[
    {
      icon: <Sparkles size={24} />,
      title: "AI Assistant",
      description: "Get smart suggestions as you type.",
      badge: "New",
    },
    {
      icon: <Rocket size={24} />,
      title: "Instant Deploy",
      description: "One-click deployments to production.",
      badge: "Popular",
    },
    {
      icon: <Globe size={24} />,
      title: "Edge Functions",
      description: "Run code at the edge, globally.",
      badge: "Beta",
    },
  ]}
  columns={3}
/>
```

### Minimal Features (No Icons)

```tsx
<Features
  title="Simple Pricing Includes"
  items={[
    {
      title: "Unlimited Projects",
      description: "No limits on what you build.",
    },
    { title: "Priority Support", description: "Get help when you need it." },
    { title: "99.9% Uptime SLA", description: "Reliable infrastructure." },
    { title: "Custom Domains", description: "Your brand, your domain." },
  ]}
  columns={4}
  interactive={false}
/>
```

---

## Accessibility

- Feature cards use semantic HTML with proper heading hierarchy
- Icons are decorative and hidden from screen readers
- Links are keyboard accessible with visible focus states
- Badges use appropriate ARIA attributes

```tsx
// Good: Descriptive titles and descriptions
<Features
  items={[
    {
      icon: <Shield size={24} />,
      title: "End-to-End Encryption",
      description: "Your data is encrypted at rest and in transit using AES-256."
    }
  ]}
/>

// Avoid: Vague or marketing-only copy
<Features
  items={[
    {
      title: "Security",
      description: "We keep your stuff safe!"  // Too vague
    }
  ]}
/>
```

---

## Anti-Patterns

### Too Many Features

```tsx
// WRONG - Overwhelming users with 12+ features
<Features items={twelveFeatures} columns={4} />

// CORRECT - Focus on 3-6 key features
<Features items={topSixFeatures} columns={3} />
```

### Inconsistent Icons

```tsx
// WRONG - Mixed icon styles and sizes
<Features
  items={[
    { icon: <img src="/icon1.png" />, title: "..." },  // Image
    { icon: <Zap size={32} />, title: "..." },         // Large icon
    { icon: <div>🚀</div>, title: "..." },             // Emoji
  ]}
/>

// CORRECT - Consistent Lucide icons at same size
<Features
  items={[
    { icon: <Zap size={24} />, title: "..." },
    { icon: <Shield size={24} />, title: "..." },
    { icon: <Rocket size={24} />, title: "..." },
  ]}
/>
```

### Missing Descriptions

```tsx
// WRONG - Title-only features
<Features
  items={[
    { title: "Fast" },
    { title: "Secure" },
  ]}
/>

// CORRECT - Always include descriptions
<Features
  items={[
    { title: "Fast", description: "Sub-second response times globally." },
    { title: "Secure", description: "Enterprise-grade security built-in." },
  ]}
/>
```

---

## When to Use Features

| Scenario                          | Recommendation             |
| --------------------------------- | -------------------------- |
| Showcasing product capabilities   | Yes                        |
| Highlighting benefits/value props | Yes                        |
| Comparing plan features           | Use `Pricing` instead      |
| Showing testimonials              | Use `Testimonials` instead |
| Displaying metrics/stats          | Use `Stats` instead        |

---

## Related Components

- **[Hero](../Hero/README.md)** — Landing page header (place before Features)
- **[Stats](../Stats/README.md)** — Key metrics display
- **[Pricing](../Pricing/README.md)** — Pricing plans with feature lists
- **[Section](../Section/README.md)** — Generic page section wrapper
- **[Container](../Container/README.md)** — Content width container
