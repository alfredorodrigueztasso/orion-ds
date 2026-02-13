# SocialProof Section

> Combined trust indicators: logos, testimonials, and stats in one unified section.

## Quick Start

```tsx
import { SocialProof } from '@orion/react';

<SocialProof
  title="Trusted by Industry Leaders"
  logos={[
    { name: 'Google', logo: '/logos/google.svg' },
    { name: 'Meta', logo: '/logos/meta.svg' },
    { name: 'Amazon', logo: '/logos/amazon.svg' },
    { name: 'Microsoft', logo: '/logos/microsoft.svg' },
  ]}
  stats={[
    { value: '10K+', label: 'Customers' },
    { value: '99%', label: 'Satisfaction' },
    { value: '$2B+', label: 'Processed' },
  ]}
/>;
```

---

## Features

- **3 Trust Elements** — Logos, testimonials, and stats
- **5 Layout Options** — Stacked, side-by-side, or single-element focus
- **Logo Styles** — Grid, inline, or carousel display
- **Grayscale Option** — Uniform logo appearance
- **Star Ratings** — Optional ratings on testimonials
- **Flexible Combination** — Use any combination of elements
- **Brand-Aware** — Adapts to all Orion brands

---

## Props Reference

```typescript
interface SocialProofProps {
  // Header
  eyebrow?: ReactNode; // Badge/label above title
  title?: ReactNode; // Section title
  description?: ReactNode; // Section description

  // Content
  logos?: SocialProofLogo[]; // Company/brand logos
  testimonials?: SocialProofTestimonial[]; // Customer testimonials
  stats?: SocialProofStat[]; // Stats/metrics

  // Layout
  layout?: 'stacked' | 'side-by-side' | 'testimonials-only' | 'logos-only' | 'stats-only'; // default: 'stacked'
  logoStyle?: 'grid' | 'inline' | 'carousel'; // default: 'grid'
  grayscaleLogos?: boolean; // Grayscale logos - default: true

  // Styling
  background?: 'base' | 'subtle' | 'none'; // default: 'subtle'
  compact?: boolean; // Compact spacing - default: false
}

interface SocialProofLogo {
  name: string; // Company name
  logo: string; // Logo image URL
  href?: string; // Optional link
}

interface SocialProofTestimonial {
  id: string | number; // Unique identifier
  quote: string; // Quote text
  author: string; // Author name
  title?: string; // Author title/role
  company?: string; // Author company
  avatar?: string; // Author avatar URL
  rating?: number; // Star rating (1-5)
}

interface SocialProofStat {
  value: string; // Stat value
  label: string; // Stat label
}
```

---

## Layout Variants

### `layout="stacked"` (Default)

All elements stacked vertically.

```tsx
<SocialProof layout="stacked" logos={logos} stats={stats} testimonials={testimonials} />
```

### `layout="side-by-side"`

Stats and logos side by side.

```tsx
<SocialProof layout="side-by-side" logos={logos} stats={stats} />
```

### `layout="testimonials-only"`

Focus on testimonials only.

```tsx
<SocialProof layout="testimonials-only" testimonials={testimonials} />
```

### `layout="logos-only"`

Display only company logos.

```tsx
<SocialProof layout="logos-only" logos={logos} />
```

### `layout="stats-only"`

Display only statistics.

```tsx
<SocialProof layout="stats-only" stats={stats} />
```

---

## Logo Styles

### Grid Layout

```tsx
<SocialProof logoStyle="grid" logos={logos} />
```

### Inline Layout

```tsx
<SocialProof logoStyle="inline" logos={logos} />
```

### Carousel

```tsx
<SocialProof logoStyle="carousel" logos={manyLogos} />
```

---

## Grayscale Logos

Uniform appearance with grayscale filter.

```tsx
// Grayscale (default)
<SocialProof grayscaleLogos logos={logos} />

// Full color
<SocialProof grayscaleLogos={false} logos={logos} />
```

---

## Complete Examples

### Full Social Proof Section

```tsx
import { SocialProof, Badge } from '@orion/react';

<SocialProof
  eyebrow={<Badge>Trusted Worldwide</Badge>}
  title="Join 10,000+ Companies Using Our Platform"
  description="From startups to Fortune 500, teams rely on us to power their business."
  layout="stacked"
  logos={[
    { name: 'Google', logo: '/logos/google.svg', href: 'https://google.com' },
    { name: 'Stripe', logo: '/logos/stripe.svg', href: 'https://stripe.com' },
    { name: 'Shopify', logo: '/logos/shopify.svg', href: 'https://shopify.com' },
    { name: 'Notion', logo: '/logos/notion.svg', href: 'https://notion.so' },
    { name: 'Figma', logo: '/logos/figma.svg', href: 'https://figma.com' },
    { name: 'Linear', logo: '/logos/linear.svg', href: 'https://linear.app' },
  ]}
  stats={[
    { value: '10K+', label: 'Active Companies' },
    { value: '99.9%', label: 'Uptime SLA' },
    { value: '$2B+', label: 'Transactions Processed' },
    { value: '4.9/5', label: 'Customer Rating' },
  ]}
  testimonials={[
    {
      id: 1,
      quote:
        'This platform transformed how we work. Our team productivity increased by 40% in just 3 months.',
      author: 'Sarah Chen',
      title: 'VP of Engineering',
      company: 'TechCorp',
      avatar: '/avatars/sarah.jpg',
      rating: 5,
    },
    {
      id: 2,
      quote:
        "The best investment we've made. Support is incredible and the features keep getting better.",
      author: 'Marcus Johnson',
      title: 'CEO',
      company: 'StartupXYZ',
      avatar: '/avatars/marcus.jpg',
      rating: 5,
    },
  ]}
  grayscaleLogos
  background="subtle"
/>;
```

### Logo Cloud Only

```tsx
<SocialProof
  title="Trusted by Leading Brands"
  layout="logos-only"
  logoStyle="inline"
  logos={[
    { name: 'Nike', logo: '/logos/nike.svg' },
    { name: 'Apple', logo: '/logos/apple.svg' },
    { name: 'Spotify', logo: '/logos/spotify.svg' },
    { name: 'Netflix', logo: '/logos/netflix.svg' },
    { name: 'Airbnb', logo: '/logos/airbnb.svg' },
    { name: 'Uber', logo: '/logos/uber.svg' },
  ]}
  grayscaleLogos
/>
```

### Stats Highlight

```tsx
<SocialProof
  title="Our Impact"
  layout="stats-only"
  stats={[
    { value: '500M+', label: 'Users Worldwide' },
    { value: '150+', label: 'Countries Served' },
    { value: '24/7', label: 'Support Available' },
    { value: 'ISO 27001', label: 'Certified' },
  ]}
  background="base"
/>
```

### Testimonials Focus

```tsx
<SocialProof
  title="What Our Customers Say"
  layout="testimonials-only"
  testimonials={[
    {
      id: 1,
      quote: "Absolutely game-changing for our workflow. Can't imagine going back.",
      author: 'Emily Rodriguez',
      title: 'Product Manager',
      company: 'InnovateCo',
      avatar: '/avatars/emily.jpg',
      rating: 5,
    },
    {
      id: 2,
      quote: 'The ROI was visible within the first month. Highly recommend!',
      author: 'David Kim',
      title: 'CTO',
      company: 'GrowthLabs',
      avatar: '/avatars/david.jpg',
      rating: 5,
    },
    {
      id: 3,
      quote: 'Best-in-class product with exceptional customer support.',
      author: 'Lisa Patel',
      title: 'Operations Director',
      company: 'ScaleUp Inc',
      avatar: '/avatars/lisa.jpg',
      rating: 4,
    },
  ]}
/>
```

### Compact Logo Strip

```tsx
<SocialProof
  compact
  layout="logos-only"
  logoStyle="inline"
  logos={logos}
  grayscaleLogos
  background="none"
/>
```

### Side-by-Side Layout

```tsx
<SocialProof
  layout="side-by-side"
  title="The Numbers Speak"
  logos={[
    { name: 'Google', logo: '/logos/google.svg' },
    { name: 'Meta', logo: '/logos/meta.svg' },
    { name: 'AWS', logo: '/logos/aws.svg' },
  ]}
  stats={[
    { value: '99.99%', label: 'Uptime' },
    { value: '< 50ms', label: 'Latency' },
    { value: '24/7', label: 'Support' },
  ]}
/>
```

---

## Accessibility

- Logos have alt text from `name` property
- Testimonials use proper blockquote markup
- Star ratings have ARIA labels
- Links are keyboard accessible
- Avatar images have alt text

```tsx
// Good: Complete testimonial data
{
  quote: "Great product!",
  author: "Jane Doe",
  title: "CEO",
  company: "Acme Corp",
  avatar: "/avatars/jane.jpg"
}

// Avoid: Anonymous testimonials
{
  quote: "Great product!",
  author: "Anonymous"
}
```

---

## Anti-Patterns

### Fake or Unverifiable Claims

```tsx
// WRONG - Unverifiable statistics
stats={[
  { value: "1M+", label: "Happy Customers" }  // Can you prove this?
]}

// CORRECT - Verifiable metrics
stats={[
  { value: "1M+", label: "Downloads" },       // Measurable
  { value: "4.8/5", label: "App Store Rating" } // Verifiable
]}
```

### Too Many Logos

```tsx
// WRONG - 20 logos overwhelming the page
<SocialProof logos={[...twentyLogos]} logoStyle="grid" />

// CORRECT - Curate top logos, use carousel for many
<SocialProof
  logos={topSixLogos}
  logoStyle="grid"
/>
// Or
<SocialProof
  logos={allLogos}
  logoStyle="carousel"
/>
```

### Inconsistent Logo Sizes

```tsx
// WRONG - Mixing different image dimensions
logos={[
  { name: "A", logo: "/logo-100x50.png" },
  { name: "B", logo: "/logo-300x100.png" },
  { name: "C", logo: "/logo-50x50.png" }
]}

// CORRECT - Consistent SVG or normalized sizes
logos={[
  { name: "A", logo: "/logos/a.svg" },
  { name: "B", logo: "/logos/b.svg" },
  { name: "C", logo: "/logos/c.svg" }
]}
```

### No Attribution on Testimonials

```tsx
// WRONG - Quote without attribution
{
  id: 1,
  quote: "Amazing product!",
  author: "A Customer"  // Who?
}

// CORRECT - Full attribution
{
  id: 1,
  quote: "Amazing product!",
  author: "Sarah Chen",
  title: "VP Engineering",
  company: "TechCorp",
  avatar: "/avatars/sarah.jpg"
}
```

---

## When to Use SocialProof

| Scenario         | Recommendation         |
| ---------------- | ---------------------- |
| Landing page     | Full stacked layout    |
| Header trust bar | Logos only, compact    |
| Pricing page     | Stats and testimonials |
| Product page     | Testimonials focus     |

## When NOT to Use SocialProof

| Scenario              | Use Instead             |
| --------------------- | ----------------------- |
| Detailed case studies | Blog/Case Study section |
| Customer list         | Partners/Clients page   |
| Reviews feed          | Reviews component       |
| Single testimonial    | Quote component         |

---

## Related Components

- **[Testimonials](../Testimonials/README.md)** — Dedicated testimonials section
- **[LogoCloud](../LogoCloud/README.md)** — Simple logo display
- **[Stats](../Stats/README.md)** — Metrics display
- **[Hero](../Hero/README.md)** — Hero with social proof
