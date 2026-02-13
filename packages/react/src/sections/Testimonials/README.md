# Testimonials Section

> Customer testimonials with quotes, author info, ratings, and multiple visual styles.

## Quick Start

```tsx
import { Testimonials, Badge } from '@orion/react';

<Testimonials
  eyebrow={<Badge>Testimonials</Badge>}
  title="What our customers say"
  description="See why thousands of teams love our product"
  testimonials={[
    {
      quote: 'This product transformed our workflow completely. We shipped 3x faster.',
      author: {
        name: 'Jane Doe',
        role: 'CTO',
        company: 'TechCorp',
        avatar: <img src="/avatars/jane.jpg" alt="" />,
      },
      rating: 5,
    },
    {
      quote: "The best investment we've made for our engineering team.",
      author: {
        name: 'John Smith',
        role: 'Engineering Lead',
        company: 'StartupXYZ',
      },
      rating: 5,
    },
    {
      quote: 'Finally, a design system that actually works with our workflow.',
      author: {
        name: 'Sarah Johnson',
        role: 'Product Designer',
        company: 'DesignCo',
        avatar: <img src="/avatars/sarah.jpg" alt="" />,
      },
    },
  ]}
/>;
```

---

## Features

- **3 Visual Variants** — Default, Cards, Minimal
- **Flexible Grid** — 1, 2, or 3 column layouts
- **Star Ratings** — Optional 1-5 star display
- **Author Info** — Name, role, company, avatar
- **Brand-Aware** — Adapts to all Orion brands automatically

---

## Props Reference

```typescript
interface TestimonialsProps {
  // Header
  eyebrow?: ReactNode; // Badge/label above title
  title?: ReactNode; // Section title
  description?: ReactNode; // Section description

  // Content
  testimonials: Testimonial[]; // REQUIRED - Array of testimonials

  // Layout
  columns?: 1 | 2 | 3; // Grid columns - default: 3
  centered?: boolean; // Center header text - default: true

  // Styling
  variant?: 'default' | 'cards' | 'minimal'; // default: 'default'
  background?: 'base' | 'subtle' | 'none'; // default: 'base'
}

interface Testimonial {
  quote: string; // The testimonial text
  author: TestimonialAuthor; // Author information
  rating?: number; // Star rating 1-5 (optional)
}

interface TestimonialAuthor {
  name: string; // Author's name
  role?: string; // Job title
  company?: string; // Company/organization
  avatar?: ReactNode; // Avatar image element
}
```

---

## Visual Variants

### `variant="default"` (Default)

Standard cards with borders and subtle styling.

```tsx
<Testimonials
  variant="default"
  testimonials={[...]}
/>
```

### `variant="cards"`

Elevated cards with shadows for more visual prominence.

```tsx
<Testimonials
  variant="cards"
  testimonials={[...]}
/>
```

### `variant="minimal"`

Simple quotes without card styling. Best for elegant, content-focused pages.

```tsx
<Testimonials
  variant="minimal"
  testimonials={[...]}
/>
```

---

## Column Layouts

### 1 Column

Best for featured/highlighted testimonials or long quotes.

```tsx
<Testimonials columns={1} testimonials={[featuredTestimonial]} />
```

### 2 Columns

Balanced layout for medium-length quotes.

```tsx
<Testimonials
  columns={2}
  testimonials={[...]}
/>
```

### 3 Columns (Default)

Compact grid for multiple testimonials.

```tsx
<Testimonials
  columns={3}
  testimonials={[...]}
/>
```

---

## Testimonial Configuration

### Basic Testimonial

```tsx
{
  quote: "Great product! Highly recommend.",
  author: {
    name: "Jane Doe"
  }
}
```

### With Role and Company

```tsx
{
  quote: "This transformed how our team works.",
  author: {
    name: "Jane Doe",
    role: "CTO",
    company: "TechCorp"
  }
}
```

### With Avatar

```tsx
{
  quote: "Best investment we've made this year.",
  author: {
    name: "Jane Doe",
    role: "CTO",
    company: "TechCorp",
    avatar: <img src="/avatars/jane.jpg" alt="" />
  }
}
```

### With Rating

```tsx
{
  quote: "Five stars isn't enough. This is incredible.",
  author: {
    name: "Jane Doe",
    role: "CEO",
    company: "StartupXYZ"
  },
  rating: 5
}
```

---

## Avatar Options

### Image Avatar

```tsx
avatar: <img
  src="/avatars/jane.jpg"
  alt=""
  style={{
    width: 48,
    height: 48,
    borderRadius: '50%',
    objectFit: 'cover',
  }}
/>;
```

### Initials Avatar

```tsx
avatar: <div
  style={{
    width: 48,
    height: 48,
    borderRadius: '50%',
    background: 'var(--interactive-primary)',
    color: 'var(--interactive-primary-text)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 600,
  }}
>
  JD
</div>;
```

### Company Logo as Avatar

```tsx
avatar: <img src="/logos/techcorp.svg" alt="" height={32} />;
```

---

## Complete Examples

### SaaS Testimonials

```tsx
import { Testimonials, Badge } from '@orion/react';

<Testimonials
  eyebrow={<Badge variant="brand">Customer Stories</Badge>}
  title="Trusted by innovative teams"
  description="Join thousands of companies shipping faster"
  testimonials={[
    {
      quote: 'We reduced our deployment time from hours to minutes. The ROI was immediate.',
      author: {
        name: 'Sarah Chen',
        role: 'VP of Engineering',
        company: 'ScaleUp Inc',
        avatar: <img src="/avatars/sarah.jpg" alt="" />,
      },
      rating: 5,
    },
    {
      quote: 'The developer experience is unmatched. Our team actually enjoys using it.',
      author: {
        name: 'Marcus Johnson',
        role: 'Staff Engineer',
        company: 'DevTools Co',
        avatar: <img src="/avatars/marcus.jpg" alt="" />,
      },
      rating: 5,
    },
    {
      quote: 'Best-in-class documentation and support. They really care about their customers.',
      author: {
        name: 'Emily Rodriguez',
        role: 'Product Lead',
        company: 'BuildFast',
        avatar: <img src="/avatars/emily.jpg" alt="" />,
      },
      rating: 5,
    },
  ]}
  variant="cards"
  columns={3}
/>;
```

### Featured Single Testimonial

```tsx
<Testimonials
  title="What leaders are saying"
  testimonials={[
    {
      quote:
        "In my 20 years of building products, I've never seen a tool that combines such powerful features with such an intuitive interface. This is the future of development.",
      author: {
        name: 'Alex Rivera',
        role: 'Founder & CEO',
        company: 'TechGiant',
        avatar: <img src="/avatars/alex.jpg" alt="" />,
      },
    },
  ]}
  variant="minimal"
  columns={1}
  centered
/>
```

### Minimal Style Testimonials

```tsx
<Testimonials
  variant="minimal"
  columns={2}
  testimonials={[
    {
      quote: 'Simple, elegant, powerful.',
      author: { name: 'Designer', company: 'Studio' },
    },
    {
      quote: 'Exactly what we needed.',
      author: { name: 'Developer', company: 'Agency' },
    },
  ]}
/>
```

### With All Ratings

```tsx
<Testimonials
  eyebrow="Reviews"
  title="5-star rated by our users"
  testimonials={[
    {
      quote: 'Changed how we work.',
      author: { name: 'User 1', role: 'Developer' },
      rating: 5,
    },
    {
      quote: 'Incredible experience.',
      author: { name: 'User 2', role: 'Designer' },
      rating: 5,
    },
    {
      quote: 'Best tool out there.',
      author: { name: 'User 3', role: 'Manager' },
      rating: 5,
    },
  ]}
  variant="cards"
/>
```

---

## Accessibility

- Testimonials use semantic HTML with `<blockquote>` for quotes
- Star ratings have appropriate ARIA labels
- Avatars use empty `alt` when decorative
- Author information is properly structured

```tsx
// Good: Decorative avatar with empty alt
avatar: <img src="/avatar.jpg" alt="" />;

// Good: Descriptive alt for important context
avatar: <img src="/ceo-photo.jpg" alt="Photo of Jane Doe" />;
```

---

## Anti-Patterns

### Fake or Generic Testimonials

```tsx
// WRONG - Obviously fake
{
  quote: "This is the best product ever!",
  author: { name: "Happy Customer" }  // No real identity
}

// CORRECT - Specific and credible
{
  quote: "Reduced our deployment time by 73% in the first month.",
  author: {
    name: "Sarah Chen",
    role: "VP Engineering",
    company: "TechCorp"
  }
}
```

### Too Many Testimonials

```tsx
// WRONG - Overwhelming
<Testimonials testimonials={[...tenTestimonials]} />

// CORRECT - Curated selection
<Testimonials testimonials={[...threeTestimonials]} />
```

### Inconsistent Information

```tsx
// WRONG - Some have avatars, roles, ratings; others don't
testimonials={[
  { quote: "...", author: { name: "A", role: "CEO", company: "X", avatar: ... }, rating: 5 },
  { quote: "...", author: { name: "B" } },  // Missing everything
]}

// CORRECT - Consistent level of detail
testimonials={[
  { quote: "...", author: { name: "A", role: "CEO", company: "X" }, rating: 5 },
  { quote: "...", author: { name: "B", role: "CTO", company: "Y" }, rating: 5 },
]}
```

### Very Long Quotes

```tsx
// WRONG - Wall of text
{
  quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit...';
}

// CORRECT - Concise and impactful
{
  quote: 'Reduced deployment time by 73%. The ROI was immediate.';
}
```

---

## When to Use Testimonials

| Scenario                  | Recommendation                   |
| ------------------------- | -------------------------------- |
| Landing page social proof | `variant="cards"`, 3 columns     |
| Case study page           | `variant="minimal"`, 1 column    |
| Product page              | `variant="default"`, 2-3 columns |
| Pricing page              | Near CTA, 1-2 testimonials       |

## When NOT to Use Testimonials

| Scenario                 | Use Instead              |
| ------------------------ | ------------------------ |
| Logo showcase only       | `LogoCloud` section      |
| Numeric metrics          | `Stats` section          |
| Detailed case studies    | Custom case study layout |
| User reviews with search | Custom review component  |

---

## Related Components

- **[LogoCloud](../LogoCloud/README.md)** — Client/partner logos
- **[Stats](../Stats/README.md)** — Key metrics display
- **[SocialProof](../SocialProof/README.md)** — Combined trust indicators
- **[CTA](../CTA/README.md)** — Call-to-action (place after Testimonials)
- **[Section](../Section/README.md)** — Generic page section wrapper
