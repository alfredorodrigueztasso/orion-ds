# CTA Section

> Call-to-action block for converting users with headline, description, and action buttons.

## Quick Start

```tsx
import { CTA, Button } from '@orion/react';

<CTA
  headline="Ready to get started?"
  description="Join thousands of developers building with Orion."
  actions={
    <>
      <Button size="lg">Start Free Trial</Button>
      <Button size="lg" variant="ghost">Contact Sales</Button>
    </>
  }
/>
```

---

## Features

- **4 Visual Variants** — Default, Brand, Subtle, Outline
- **3 Size Options** — Small, Medium, Large
- **Contained or Full-Width** — Card layout or section-wide
- **Flexible Actions** — Single or multiple CTAs
- **Footnotes** — Add disclaimers or terms below actions
- **Brand-Aware** — Adapts to all Orion brands automatically

---

## Props Reference

```typescript
interface CTAProps {
  // Content
  headline: ReactNode;          // REQUIRED - Main headline
  description?: ReactNode;      // Supporting description
  actions?: ReactNode;          // Action buttons/elements
  footnote?: ReactNode;         // Text below actions (disclaimers, etc.)

  // Styling
  variant?: 'default' | 'brand' | 'subtle' | 'outline';  // default: 'brand'
  size?: 'sm' | 'md' | 'lg';    // default: 'md'

  // Layout
  align?: 'left' | 'center';    // default: 'center'
  contained?: boolean;          // Card layout vs full-width - default: true
}
```

---

## Visual Variants

### `variant="brand"` (Default)

Brand-colored background for maximum impact.

```tsx
<CTA
  variant="brand"
  headline="Start Building Today"
  description="No credit card required."
  actions={<Button size="lg">Get Started Free</Button>}
/>
```

### `variant="default"`

Standard surface background.

```tsx
<CTA
  variant="default"
  headline="Ready to upgrade?"
  description="Unlock all features with a Pro subscription."
  actions={<Button size="lg">Upgrade Now</Button>}
/>
```

### `variant="subtle"`

Subtle gray background for softer appearance.

```tsx
<CTA
  variant="subtle"
  headline="Have questions?"
  description="Our team is here to help."
  actions={<Button size="lg">Contact Support</Button>}
/>
```

### `variant="outline"`

Outlined container with transparent background.

```tsx
<CTA
  variant="outline"
  headline="Join our newsletter"
  description="Get weekly updates on new features."
  actions={<Button size="lg">Subscribe</Button>}
/>
```

---

## Size Variants

### Small (`size="sm"`)

Compact CTA for inline use or secondary prompts.

```tsx
<CTA
  size="sm"
  headline="Need help?"
  actions={<Button>Contact Support</Button>}
/>
```

### Medium (`size="md"`) — Default

Balanced size for most use cases.

```tsx
<CTA
  size="md"
  headline="Ready to start?"
  description="Join thousands of happy users."
  actions={<Button size="lg">Get Started</Button>}
/>
```

### Large (`size="lg"`)

Maximum impact for primary conversion points.

```tsx
<CTA
  size="lg"
  headline="Transform Your Workflow"
  description="Start your 14-day free trial. No credit card required."
  actions={
    <>
      <Button size="lg">Start Free Trial</Button>
      <Button size="lg" variant="ghost">Watch Demo</Button>
    </>
  }
/>
```

---

## Layout Options

### Contained (Card Layout) — Default

CTA wrapped in a card with rounded corners and padding.

```tsx
<CTA
  contained={true}
  headline="Upgrade to Pro"
  actions={<Button size="lg">Upgrade</Button>}
/>
```

### Full-Width Section

CTA spans the full section width without card styling.

```tsx
<CTA
  contained={false}
  headline="Join the Community"
  description="Connect with thousands of developers."
  actions={<Button size="lg">Join Discord</Button>}
/>
```

---

## Text Alignment

### Centered (Default)

```tsx
<CTA
  align="center"
  headline="Ready to get started?"
  description="No credit card required."
  actions={<Button size="lg">Start Free</Button>}
/>
```

### Left-Aligned

```tsx
<CTA
  align="left"
  headline="Let's talk"
  description="Schedule a demo with our team."
  actions={<Button size="lg">Book a Call</Button>}
/>
```

---

## Actions

### Single CTA

```tsx
<CTA
  headline="Start your free trial"
  actions={<Button size="lg">Get Started</Button>}
/>
```

### Primary + Secondary CTA

```tsx
<CTA
  headline="Ready to scale?"
  actions={
    <>
      <Button size="lg">Start Free Trial</Button>
      <Button size="lg" variant="ghost">Contact Sales</Button>
    </>
  }
/>
```

### With Icons

```tsx
import { ArrowRight, Play } from 'lucide-react';

<CTA
  headline="See it in action"
  actions={
    <>
      <Button size="lg" iconRight={<ArrowRight size={20} />}>
        Get Started
      </Button>
      <Button size="lg" variant="ghost" icon={<Play size={20} />}>
        Watch Demo
      </Button>
    </>
  }
/>
```

---

## Footnotes

Add disclaimers, terms, or additional context below actions.

```tsx
<CTA
  headline="Start your 14-day free trial"
  description="Full access to all features."
  actions={<Button size="lg">Start Free Trial</Button>}
  footnote="No credit card required. Cancel anytime."
/>
```

```tsx
<CTA
  headline="Subscribe to Pro"
  actions={<Button size="lg">Subscribe — $29/mo</Button>}
  footnote={
    <>
      By subscribing, you agree to our{' '}
      <a href="/terms">Terms of Service</a> and{' '}
      <a href="/privacy">Privacy Policy</a>.
    </>
  }
/>
```

---

## Complete Examples

### End-of-Page CTA

Classic landing page closer with maximum conversion focus.

```tsx
<CTA
  variant="brand"
  size="lg"
  headline="Ready to transform your workflow?"
  description="Join 10,000+ teams shipping faster with Orion."
  actions={
    <>
      <Button size="lg">Start Free Trial</Button>
      <Button size="lg" variant="ghost">Schedule Demo</Button>
    </>
  }
  footnote="14-day free trial • No credit card required"
/>
```

### Newsletter CTA

Softer approach for content-focused pages.

```tsx
<CTA
  variant="subtle"
  size="md"
  headline="Stay in the loop"
  description="Get weekly updates on new features and best practices."
  actions={
    <div style={{ display: 'flex', gap: 'var(--spacing-2)' }}>
      <input
        type="email"
        placeholder="Enter your email"
        style={{ padding: 'var(--spacing-3)', borderRadius: 'var(--radius-control)' }}
      />
      <Button>Subscribe</Button>
    </div>
  }
/>
```

### Upgrade CTA

In-app upgrade prompt.

```tsx
<CTA
  variant="outline"
  size="sm"
  align="left"
  headline="Unlock more features"
  description="Upgrade to Pro for unlimited projects and priority support."
  actions={<Button>Upgrade to Pro</Button>}
/>
```

### Contact Sales CTA

Enterprise-focused conversion.

```tsx
<CTA
  variant="default"
  size="lg"
  headline="Need a custom solution?"
  description="Our enterprise team will work with you to build a tailored plan."
  actions={
    <>
      <Button size="lg">Contact Sales</Button>
      <Button size="lg" variant="ghost">View Enterprise Features</Button>
    </>
  }
  footnote="Typically responds within 24 hours"
/>
```

---

## Accessibility

- Headline renders as `<h2>` for proper document structure
- Actions maintain proper focus order
- Color contrast meets WCAG AA standards in all variants
- Footnotes are associated with the CTA content

```tsx
// Good: Clear, actionable headline
<CTA
  headline="Start your free 14-day trial"
  actions={<Button size="lg">Start Free Trial</Button>}
/>

// Avoid: Vague or unclear headlines
<CTA
  headline="Click here"  // What for?
  actions={<Button>Submit</Button>}  // Submit what?
/>
```

---

## Anti-Patterns

### Too Many CTAs

```tsx
// WRONG - Choice paralysis
<CTA
  headline="Get Started"
  actions={
    <>
      <Button>Free Trial</Button>
      <Button>Buy Now</Button>
      <Button>Contact Sales</Button>
      <Button>Learn More</Button>
    </>
  }
/>

// CORRECT - Max 2 clear choices
<CTA
  headline="Get Started"
  actions={
    <>
      <Button size="lg">Start Free Trial</Button>
      <Button size="lg" variant="ghost">Contact Sales</Button>
    </>
  }
/>
```

### Missing Headline

```tsx
// WRONG - headline is required
<CTA
  description="Join us today"
  actions={<Button>Sign Up</Button>}
/>

// CORRECT
<CTA
  headline="Join us today"
  actions={<Button size="lg">Sign Up</Button>}
/>
```

### Wrong Variant for Context

```tsx
// WRONG - Brand CTA for secondary prompt
<CTA
  variant="brand"
  headline="Need help?"
  actions={<Button>Contact Support</Button>}
/>

// CORRECT - Subtle variant for secondary prompts
<CTA
  variant="subtle"
  headline="Need help?"
  actions={<Button>Contact Support</Button>}
/>
```

---

## When to Use CTA

| Scenario | Recommendation |
|----------|----------------|
| End of landing page | `variant="brand"`, `size="lg"` |
| After pricing section | `variant="default"`, `size="md"` |
| Newsletter signup | `variant="subtle"`, `size="md"` |
| In-app upgrade prompt | `variant="outline"`, `size="sm"` |
| Enterprise contact | `variant="default"`, `size="lg"` |

## When NOT to Use CTA

| Scenario | Use Instead |
|----------|-------------|
| Hero section | `Hero` component |
| Inline button | `Button` component directly |
| Alert/announcement | `Banner` section |
| Form submission | Form with submit button |

---

## Related Components

- **[Hero](../Hero/README.md)** — Landing page header with CTA built-in
- **[Pricing](../Pricing/README.md)** — Pricing plans (often followed by CTA)
- **[Button](../../components/Button/README.md)** — Action buttons
- **[Section](../Section/README.md)** — Generic page section wrapper
- **[Newsletter](../Newsletter/README.md)** — Dedicated newsletter signup
