# LogoCloud Section

> Client/partner logo display with grid, inline, or animated marquee layouts.

## Quick Start

```tsx
import { LogoCloud } from '@orion/react';

<LogoCloud
  title="Trusted by leading companies"
  logos={[
    { logo: <img src="/logos/vercel.svg" alt="" />, name: "Vercel" },
    { logo: <img src="/logos/stripe.svg" alt="" />, name: "Stripe" },
    { logo: <img src="/logos/linear.svg" alt="" />, name: "Linear" },
    { logo: <img src="/logos/notion.svg" alt="" />, name: "Notion" },
    { logo: <img src="/logos/figma.svg" alt="" />, name: "Figma" }
  ]}
/>
```

---

## Features

- **3 Layout Options** — Grid, Inline, Marquee (animated)
- **3 Size Options** — Small, Medium, Large
- **Grayscale Filter** — Logos grayscale with color on hover
- **Link Support** — Optional clickable logos
- **Responsive** — Adapts to screen size
- **Brand-Aware** — Adapts to all Orion brands

---

## Props Reference

```typescript
interface LogoCloudProps {
  // Header
  eyebrow?: ReactNode;          // Badge/label above title
  title?: ReactNode;            // Section title
  description?: ReactNode;      // Section description

  // Content
  logos: LogoItem[];            // REQUIRED - Array of logo items

  // Layout
  layout?: 'grid' | 'inline' | 'marquee';  // default: 'inline'
  columns?: 3 | 4 | 5 | 6;      // Grid columns - default: 5
  centered?: boolean;           // Center content - default: true

  // Styling
  size?: 'sm' | 'md' | 'lg';    // Logo size - default: 'md'
  grayscale?: boolean;          // Grayscale filter - default: true
  background?: 'base' | 'subtle' | 'none';  // default: 'none'

  // Animation
  marqueeSpeed?: 'slow' | 'normal' | 'fast';  // For marquee layout
}

interface LogoItem {
  logo: ReactNode;              // Logo element (img or svg)
  name: string;                 // Company name (accessibility)
  href?: string;                // Optional link URL
}
```

---

## Layout Variants

### `layout="inline"` (Default)

Flexible inline layout that wraps naturally.

```tsx
<LogoCloud
  layout="inline"
  logos={logos}
/>
```

### `layout="grid"`

Fixed grid with specified columns.

```tsx
<LogoCloud
  layout="grid"
  columns={5}
  logos={logos}
/>
```

### `layout="marquee"`

Animated scrolling marquee (great for many logos).

```tsx
<LogoCloud
  layout="marquee"
  marqueeSpeed="normal"
  logos={logos}
/>
```

---

## Size Variants

### Small

Compact logos for tight spaces.

```tsx
<LogoCloud size="sm" logos={logos} />
```

### Medium (Default)

Standard logo display.

```tsx
<LogoCloud size="md" logos={logos} />
```

### Large

Prominent logo showcase.

```tsx
<LogoCloud size="lg" logos={logos} />
```

---

## Logo Items

### Basic Logo

```tsx
{
  logo: <img src="/logos/acme.svg" alt="" />,
  name: "Acme Corp"
}
```

### With Link

```tsx
{
  logo: <img src="/logos/acme.svg" alt="" />,
  name: "Acme Corp",
  href: "https://acme.com"
}
```

### SVG Logo

```tsx
{
  logo: (
    <svg width="120" height="40" viewBox="0 0 120 40">
      {/* SVG content */}
    </svg>
  ),
  name: "Company Name"
}
```

---

## Grayscale Effect

Logos display in grayscale and colorize on hover.

```tsx
// Grayscale with color on hover (default)
<LogoCloud grayscale={true} logos={logos} />

// Always full color
<LogoCloud grayscale={false} logos={logos} />
```

---

## Grid Columns

```tsx
// 3 columns
<LogoCloud layout="grid" columns={3} logos={logos} />

// 4 columns
<LogoCloud layout="grid" columns={4} logos={logos} />

// 5 columns (default)
<LogoCloud layout="grid" columns={5} logos={logos} />

// 6 columns
<LogoCloud layout="grid" columns={6} logos={logos} />
```

---

## Marquee Animation

```tsx
// Slow scrolling
<LogoCloud layout="marquee" marqueeSpeed="slow" logos={logos} />

// Normal scrolling (default)
<LogoCloud layout="marquee" marqueeSpeed="normal" logos={logos} />

// Fast scrolling
<LogoCloud layout="marquee" marqueeSpeed="fast" logos={logos} />
```

---

## Complete Examples

### Landing Page Trust Section

```tsx
import { LogoCloud } from '@orion/react';

<LogoCloud
  title="Trusted by 1,000+ companies worldwide"
  logos={[
    { logo: <img src="/logos/google.svg" alt="" />, name: "Google" },
    { logo: <img src="/logos/microsoft.svg" alt="" />, name: "Microsoft" },
    { logo: <img src="/logos/amazon.svg" alt="" />, name: "Amazon" },
    { logo: <img src="/logos/meta.svg" alt="" />, name: "Meta" },
    { logo: <img src="/logos/apple.svg" alt="" />, name: "Apple" }
  ]}
  layout="inline"
  size="md"
  grayscale
/>
```

### Hero Social Proof

```tsx
<LogoCloud
  title="As seen in"
  logos={[
    { logo: <img src="/press/techcrunch.svg" alt="" />, name: "TechCrunch", href: "https://techcrunch.com/..." },
    { logo: <img src="/press/forbes.svg" alt="" />, name: "Forbes", href: "https://forbes.com/..." },
    { logo: <img src="/press/wired.svg" alt="" />, name: "Wired", href: "https://wired.com/..." }
  ]}
  size="sm"
  grayscale={false}
/>
```

### Partner Logos Grid

```tsx
<LogoCloud
  eyebrow="Partners"
  title="Our Technology Partners"
  description="We integrate with the tools you already use."
  logos={[
    { logo: <img src="/partners/aws.svg" alt="" />, name: "AWS", href: "/integrations/aws" },
    { logo: <img src="/partners/gcp.svg" alt="" />, name: "Google Cloud", href: "/integrations/gcp" },
    { logo: <img src="/partners/azure.svg" alt="" />, name: "Azure", href: "/integrations/azure" },
    { logo: <img src="/partners/github.svg" alt="" />, name: "GitHub", href: "/integrations/github" },
    { logo: <img src="/partners/slack.svg" alt="" />, name: "Slack", href: "/integrations/slack" },
    { logo: <img src="/partners/jira.svg" alt="" />, name: "Jira", href: "/integrations/jira" }
  ]}
  layout="grid"
  columns={6}
  background="subtle"
/>
```

### Animated Marquee (Many Clients)

```tsx
<LogoCloud
  title="Trusted by innovative companies"
  logos={[
    { logo: <img src="/clients/1.svg" alt="" />, name: "Client 1" },
    { logo: <img src="/clients/2.svg" alt="" />, name: "Client 2" },
    { logo: <img src="/clients/3.svg" alt="" />, name: "Client 3" },
    { logo: <img src="/clients/4.svg" alt="" />, name: "Client 4" },
    { logo: <img src="/clients/5.svg" alt="" />, name: "Client 5" },
    { logo: <img src="/clients/6.svg" alt="" />, name: "Client 6" },
    { logo: <img src="/clients/7.svg" alt="" />, name: "Client 7" },
    { logo: <img src="/clients/8.svg" alt="" />, name: "Client 8" }
  ]}
  layout="marquee"
  marqueeSpeed="slow"
  grayscale
/>
```

### Minimal Footer Logos

```tsx
<LogoCloud
  logos={[
    { logo: <img src="/logos/soc2.svg" alt="" />, name: "SOC 2 Certified" },
    { logo: <img src="/logos/gdpr.svg" alt="" />, name: "GDPR Compliant" },
    { logo: <img src="/logos/hipaa.svg" alt="" />, name: "HIPAA Compliant" }
  ]}
  layout="inline"
  size="sm"
  grayscale={false}
  centered
/>
```

---

## Accessibility

- Logo images use empty `alt=""` (decorative)
- Company names provided via `name` prop for screen readers
- Links are keyboard accessible
- Marquee respects `prefers-reduced-motion`

```tsx
// Good: Name provided for accessibility
{ logo: <img src="/logo.svg" alt="" />, name: "Acme Corporation" }

// The name is used for:
// - aria-label on the link (if href provided)
// - Screen reader announcements
```

---

## Anti-Patterns

### Missing Company Names

```tsx
// WRONG - No accessibility
{ logo: <img src="/logo.svg" alt="" /> }

// CORRECT - Always include name
{ logo: <img src="/logo.svg" alt="" />, name: "Acme Corp" }
```

### Too Many Logos

```tsx
// WRONG - Visual clutter
<LogoCloud logos={[...twentyLogos]} layout="inline" />

// CORRECT - Curated selection or use marquee
<LogoCloud logos={[...sixKeyLogos]} layout="inline" />
// or
<LogoCloud logos={[...twentyLogos]} layout="marquee" />
```

### Inconsistent Logo Sizes

```tsx
// WRONG - Logos of different dimensions look messy
logos={[
  { logo: <img src="/logo1.svg" style={{ height: 50 }} />, name: "A" },
  { logo: <img src="/logo2.svg" style={{ height: 20 }} />, name: "B" },
  { logo: <img src="/logo3.svg" style={{ height: 80 }} />, name: "C" }
]}

// CORRECT - Consistent sizing via size prop
<LogoCloud size="md" logos={logos} />
// Ensure source images have similar visual weight
```

### Low-Quality Logos

```tsx
// WRONG - Pixelated or low-res images
{ logo: <img src="/logo.png" />, name: "A" }  // Raster at small size

// CORRECT - SVG for crisp logos
{ logo: <img src="/logo.svg" />, name: "A" }
```

---

## When to Use LogoCloud

| Scenario | Recommendation |
|----------|----------------|
| Hero social proof | Below Hero, `layout="inline"` |
| Partner showcase | `layout="grid"` with links |
| Many clients | `layout="marquee"` |
| Press mentions | Small logos with links |
| Compliance badges | `layout="inline"`, `grayscale={false}` |

## When NOT to Use LogoCloud

| Scenario | Use Instead |
|----------|-------------|
| Team photos | `Team` section |
| Testimonials | `Testimonials` section |
| Icon features | `Features` section |
| Detailed partner info | Custom partner page |

---

## Related Components

- **[Hero](../Hero/README.md)** — Landing page header (LogoCloud often follows)
- **[Testimonials](../Testimonials/README.md)** — Customer quotes
- **[Stats](../Stats/README.md)** — Key metrics
- **[SocialProof](../SocialProof/README.md)** — Combined trust indicators
