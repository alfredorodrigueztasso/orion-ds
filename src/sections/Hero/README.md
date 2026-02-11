# Hero Section

> High-impact landing page hero with flexible layouts, media support, and brand-aware styling.

## Quick Start

```tsx
import { Hero, Button, Badge } from '@orion/react';

<Hero
  badge={<Badge variant="brand">New Release</Badge>}
  headline={<>Build <Hero.Highlight>Beautiful</Hero.Highlight> Products</>}
  description="The AI-first design system that eliminates guesswork."
  primaryAction={<Button size="lg">Get Started</Button>}
  secondaryAction={<Button variant="ghost" size="lg">Watch Demo</Button>}
/>
```

---

## Features

- **3 Layout Modes** — Contained, Fullscreen, Card
- **2 Visual Variants** — Default (with media) or Background image
- **Hero.Highlight** — Brand gradient text for emphasis
- **Media Positions** — Left, Right, or Bottom
- **Trust Indicators** — Logos, badges, social proof
- **Brand-Aware** — Adapts to all Orion brands automatically

---

## Layout Modes

### `layout="contained"` (Default)

Standard hero with container padding. Best for most landing pages.

```tsx
<Hero
  layout="contained"
  headline="Welcome to Orion"
  description="The design system for modern teams."
  primaryAction={<Button size="lg">Get Started</Button>}
/>
```

### `layout="fullscreen"`

100vh height, vertically centered content. Perfect for dramatic entrances.

```tsx
<Hero
  layout="fullscreen"
  headline="Welcome to the Future"
  description="Scroll down to explore."
  primaryAction={<Button size="lg">Learn More</Button>}
  align="center"
/>
```

### `layout="card"`

Floating card style with margins and border radius. Great for embedded heroes.

```tsx
<Hero
  layout="card"
  elevated
  headline="Premium Experience"
  description="Elevated card layout with shadow."
  primaryAction={<Button size="lg">Upgrade Now</Button>}
/>
```

---

## Visual Variants

### `variant="default"` (Default)

Standard hero with optional side media (image, video, illustration).

```tsx
<Hero
  variant="default"
  headline="Ship Features, Not Pixels"
  description="Pre-built components that scale with your brand."
  primaryAction={<Button size="lg">Get Started</Button>}
  media={<img src="/hero-image.png" alt="Product screenshot" />}
  mediaPosition="right"
  align="left"
/>
```

### `variant="background"`

Full-width background image with content overlay. Ideal for immersive heroes.

```tsx
<Hero
  variant="background"
  backgroundImage="/hero-bg.jpg"
  backgroundOverlay={0.7}
  headline={<>Build <Hero.Highlight>Faster</Hero.Highlight></>}
  description="The AI-first design system for modern apps."
  primaryAction={<Button size="lg">Start Free Trial</Button>}
  align="center"
/>
```

---

## Compound Components

### `<Hero.Highlight>`

Applies brand gradient to text for emphasis. Automatically adapts to the active brand.

```tsx
<Hero
  headline={
    <>
      Design systems that{' '}
      <Hero.Highlight>actually work</Hero.Highlight>
    </>
  }
/>
```

**Brand Examples:**
- **Orion**: Blue gradient (`--color-brand-400` → `--color-brand-600`)
- **Red**: Red gradient
- **Lemon**: Lime green gradient
- **Orange**: Orange gradient

---

## Props Reference

```typescript
interface HeroProps {
  // Content
  headline: ReactNode;              // REQUIRED - Main headline (supports Hero.Highlight)
  description?: ReactNode;          // Supporting description
  badge?: ReactNode;                // Eyebrow badge above headline

  // Actions
  primaryAction?: ReactNode;        // Primary CTA button
  secondaryAction?: ReactNode;      // Secondary CTA button

  // Media (for variant="default" only)
  media?: ReactNode;                // Image, video, or illustration
  mediaPosition?: 'left' | 'right' | 'bottom';  // default: 'right'
  showDefaultMedia?: boolean;       // Show placeholder when no media - default: false

  // Trust
  trustIndicators?: ReactNode;      // Logos, badges, social proof

  // Layout
  layout?: 'contained' | 'fullscreen' | 'card';  // default: 'contained'
  align?: 'left' | 'center';        // default: 'center'
  size?: 'sm' | 'md' | 'lg';        // default: 'lg'
  elevated?: boolean;               // Add shadow to card layout - default: false

  // Background (for variant="background" only)
  variant?: 'default' | 'background';  // default: 'default'
  backgroundImage?: string;            // URL for background image
  backgroundOverlay?: number;          // Overlay opacity 0-1 - default: 0.6

  // Deprecated
  fullHeight?: boolean;             // Use layout="fullscreen" instead
}
```

---

## Size Variants

| Size | Best For | Headline Scale | Spacing |
|------|----------|----------------|---------|
| `sm` | Sub-pages, pricing headers | Small | Compact |
| `md` | Standard pages | Medium | Balanced |
| `lg` | Main landing pages (default) | Large | Generous |

```tsx
// Sub-page hero
<Hero
  size="sm"
  headline="Pricing Plans"
  description="Simple, transparent pricing for teams of all sizes."
  align="center"
/>

// Main landing page hero
<Hero
  size="lg"
  headline="Build Products 10x Faster"
  description="The AI-first design system."
  primaryAction={<Button size="lg">Get Started</Button>}
/>
```

---

## Media Positions

### `mediaPosition="right"` (Default)

Content left, media right. Best for product screenshots.

```tsx
<Hero
  headline="Your Work, Supercharged"
  media={<img src="/app-screenshot.png" alt="App screenshot" />}
  mediaPosition="right"
  align="left"
/>
```

### `mediaPosition="left"`

Media left, content right. Good for code previews, technical content.

```tsx
<Hero
  headline="Designed for Developers"
  media={<img src="/code-preview.png" alt="Code example" />}
  mediaPosition="left"
  align="left"
/>
```

### `mediaPosition="bottom"`

Full-width media below content. Perfect for videos, wide screenshots.

```tsx
<Hero
  headline="See It In Action"
  media={
    <video autoPlay loop muted playsInline>
      <source src="/demo.mp4" type="video/mp4" />
    </video>
  }
  mediaPosition="bottom"
  align="center"
/>
```

---

## Trust Indicators

Add social proof below CTAs with logos, testimonials, or stats.

```tsx
<Hero
  badge={<Badge variant="brand">Trusted by 10,000+ Teams</Badge>}
  headline="The Design System for Modern Teams"
  description="Join companies like Stripe, Notion, and Linear."
  primaryAction={<Button size="lg">Start Building</Button>}
  trustIndicators={
    <div style={{ display: 'flex', gap: 'var(--spacing-8)', opacity: 0.6 }}>
      <img src="/logos/stripe.svg" alt="Stripe" height={24} />
      <img src="/logos/notion.svg" alt="Notion" height={24} />
      <img src="/logos/linear.svg" alt="Linear" height={24} />
    </div>
  }
/>
```

---

## Complete Examples

### SaaS Landing Page

```tsx
import { Navbar, Hero, Button, Badge } from '@orion/react';
import { Play } from 'lucide-react';

<>
  <Navbar sticky>
    <Navbar.Brand href="/">Logo</Navbar.Brand>
    <Navbar.Nav>
      <Navbar.Link href="#features">Features</Navbar.Link>
      <Navbar.Link href="#pricing">Pricing</Navbar.Link>
    </Navbar.Nav>
    <Navbar.Actions>
      <Button variant="ghost">Sign In</Button>
      <Button>Get Started</Button>
    </Navbar.Actions>
  </Navbar>

  <Hero
    badge={<Badge variant="success">14-day free trial</Badge>}
    headline={
      <>
        Analytics That{' '}
        <Hero.Highlight>Actually Make Sense</Hero.Highlight>
      </>
    }
    description="Stop drowning in data. Get insights that drive decisions."
    primaryAction={<Button size="lg">Start Free Trial</Button>}
    secondaryAction={
      <Button variant="ghost" size="lg" icon={<Play size={20} />}>
        Watch Demo
      </Button>
    }
    trustIndicators={
      <p style={{ color: 'var(--text-tertiary)' }}>
        Trusted by 10,000+ developers worldwide
      </p>
    }
  />
</>
```

### App Download Page

```tsx
import { Hero, Button } from '@orion/react';
import { Download, Apple, Smartphone } from 'lucide-react';

<Hero
  layout="fullscreen"
  variant="background"
  backgroundImage="/app-hero-bg.jpg"
  backgroundOverlay={0.65}
  headline={
    <>
      Your Productivity,{' '}
      <Hero.Highlight>Supercharged</Hero.Highlight>
    </>
  }
  description="AI-powered tools that adapt to how you work."
  primaryAction={
    <Button size="lg" icon={<Apple size={20} />}>
      Download for Mac
    </Button>
  }
  secondaryAction={
    <Button variant="ghost" size="lg" icon={<Smartphone size={20} />}>
      Get Mobile App
    </Button>
  }
  align="center"
/>
```

### Product Page with Screenshot

```tsx
import { Hero, Button } from '@orion/react';
import { ArrowRight } from 'lucide-react';

<Hero
  headline="Collaboration Without Chaos"
  description="Real-time editing, async comments, and smart notifications."
  primaryAction={
    <Button size="lg" iconRight={<ArrowRight size={20} />}>
      Try It Free
    </Button>
  }
  media={
    <img
      src="/product-screenshot.png"
      alt="Dashboard showing real-time collaboration features"
      style={{
        borderRadius: 'var(--radius-container)',
        boxShadow: 'var(--shadow-lg)'
      }}
    />
  }
  mediaPosition="right"
  align="left"
/>
```

### Card Layout (Embedded Hero)

```tsx
import { Hero, Button, Badge } from '@orion/react';

<Hero
  layout="card"
  elevated
  badge={<Badge variant="warning">Limited Time</Badge>}
  headline="Upgrade to Pro"
  description="Get unlimited access to all features."
  primaryAction={<Button size="lg">Upgrade Now</Button>}
  secondaryAction={<Button variant="ghost" size="lg">Compare Plans</Button>}
  align="center"
  size="md"
/>
```

---

## Alignment Guide

| Alignment | Best For |
|-----------|----------|
| `center` | Minimal heroes, announcements, fullscreen layouts |
| `left` | Heroes with side media, product pages, technical content |

---

## Accessibility

- **Headline**: Renders as `<h1>` — ensure only one per page
- **Media alt text**: Always provide descriptive `alt` attributes
- **Background images**: Decorative, automatically hidden from screen readers
- **Focus order**: Actions receive proper focus in tab order
- **Color contrast**: Hero.Highlight maintains WCAG AA contrast in all brands

```tsx
// Good: Descriptive alt text
<Hero
  headline="Dashboard Analytics"
  media={<img src="/dashboard.png" alt="Analytics dashboard showing monthly revenue growth chart" />}
/>

// Bad: Missing or generic alt text
<Hero
  headline="Dashboard Analytics"
  media={<img src="/dashboard.png" />}  // Missing alt!
/>
```

---

## Anti-Patterns

### Too Many CTAs

```tsx
// WRONG - More than 2 CTAs creates choice paralysis
<Hero
  headline="Title"
  primaryAction={<Button>CTA 1</Button>}
  secondaryAction={<Button>CTA 2</Button>}
  // Don't manually add more buttons
/>

// CORRECT - Max 2 CTAs with clear hierarchy
<Hero
  headline="Title"
  primaryAction={<Button>Primary CTA</Button>}
  secondaryAction={<Button variant="ghost">Secondary CTA</Button>}
/>
```

### Wrong Size for Context

```tsx
// WRONG - Large hero for a sub-page
<Hero headline="Pricing" size="lg" />

// CORRECT - Small hero for sub-pages
<Hero headline="Pricing" description="Choose the plan that works for you." size="sm" />
```

### Background Variant Without Image

```tsx
// WRONG - Background variant needs an image
<Hero variant="background" headline="Title" />

// CORRECT - Always provide backgroundImage with background variant
<Hero variant="background" backgroundImage="/hero.jpg" headline="Title" />
```

### Media in Background Variant

```tsx
// WRONG - Media prop is ignored in background variant
<Hero
  variant="background"
  backgroundImage="/bg.jpg"
  media={<img src="/screenshot.png" />}  // This will be ignored!
/>

// CORRECT - Use default variant for side media
<Hero
  variant="default"
  media={<img src="/screenshot.png" alt="Screenshot" />}
  mediaPosition="right"
/>
```

---

## When to Use Hero

| Scenario | Recommendation |
|----------|----------------|
| Landing page header | Hero with `size="lg"` |
| Product announcement | Hero with media and badge |
| Campaign page | Hero with background variant |
| App landing | Hero with fullscreen layout |
| Sub-page header (Pricing, About) | Hero with `size="sm"` |

## When NOT to Use Hero

| Scenario | Use Instead |
|----------|-------------|
| Dashboard header | `<Navbar>` only |
| Article/blog header | Custom heading + metadata |
| Simple page title | `<Section>` with `<h1>` |
| Marketing section mid-page | `<Section>` component |

---

## Related Components

- **[Section](../Section/README.md)** — Generic page section wrapper
- **[Container](../Container/README.md)** — Content width container
- **[Navbar](../../components/Navbar/README.md)** — Navigation bar (pairs with Hero)
- **[Button](../../components/Button/README.md)** — CTAs
- **[Badge](../../components/Badge/README.md)** — Eyebrow badges
