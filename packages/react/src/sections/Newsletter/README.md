# Newsletter Section

> Email signup form with title, description, and customizable layouts.

## Quick Start

```tsx
import { Newsletter, Badge } from '@orion/react';

<Newsletter
  eyebrow={<Badge>Newsletter</Badge>}
  title="Stay in the loop"
  description="Get the latest updates and news delivered to your inbox."
  placeholder="Enter your email"
  buttonText="Subscribe"
  onSubmit={(email) => console.log('Subscribed:', email)}
  disclaimer="We respect your privacy. Unsubscribe at any time."
/>;
```

---

## Features

- **3 Layout Options** — Inline, Stacked, Card
- **3 Size Options** — Small, Medium, Large
- **Custom Button** — Override default subscribe button
- **Disclaimer Text** — Privacy notes below form
- **Loading State** — Visual feedback during submission
- **Success/Error Messages** — Feedback after submission
- **Brand-Aware** — Adapts to all Orion brands

---

## Props Reference

```typescript
interface NewsletterProps {
  // Header
  eyebrow?: ReactNode; // Badge/label above title
  title?: ReactNode; // Section title
  description?: ReactNode; // Section description

  // Form
  placeholder?: string; // Input placeholder - default: "Enter your email"
  buttonText?: string; // Submit text - default: "Subscribe"
  submitButton?: ReactNode; // Custom submit button
  onSubmit?: (email: string) => void;
  disclaimer?: ReactNode; // Privacy text below form

  // State
  loading?: boolean; // Loading state - default: false
  successMessage?: ReactNode; // Success feedback
  errorMessage?: ReactNode; // Error feedback

  // Layout
  layout?: 'inline' | 'stacked' | 'card'; // default: 'inline'
  size?: 'sm' | 'md' | 'lg'; // default: 'md'
  centered?: boolean; // Center content - default: true
  background?: 'base' | 'subtle' | 'brand' | 'none'; // default: 'subtle'
}
```

---

## Layout Variants

### `layout="inline"` (Default)

Input and button on the same line.

```tsx
<Newsletter layout="inline" title="Subscribe to updates" onSubmit={handleSubscribe} />
```

### `layout="stacked"`

Input above button, full width.

```tsx
<Newsletter
  layout="stacked"
  title="Join our newsletter"
  description="Weekly insights delivered to your inbox."
  onSubmit={handleSubscribe}
/>
```

### `layout="card"`

Contained in a card with padding and styling.

```tsx
<Newsletter
  layout="card"
  title="Get exclusive content"
  description="Subscribe for early access to new features."
  onSubmit={handleSubscribe}
/>
```

---

## Size Variants

### Small

Compact newsletter for tight spaces.

```tsx
<Newsletter size="sm" title="Subscribe" onSubmit={handleSubscribe} />
```

### Medium (Default)

Standard newsletter section.

```tsx
<Newsletter
  size="md"
  title="Stay Updated"
  description="Join 10,000+ subscribers."
  onSubmit={handleSubscribe}
/>
```

### Large

Prominent newsletter with extra spacing.

```tsx
<Newsletter
  size="lg"
  title="Don't Miss Out"
  description="Get weekly insights from our team of experts."
  onSubmit={handleSubscribe}
/>
```

---

## Background Options

```tsx
// Subtle gray (default)
<Newsletter background="subtle" />

// Base surface
<Newsletter background="base" />

// Brand color
<Newsletter background="brand" />

// No background
<Newsletter background="none" />
```

---

## Form Handling

### Basic Submit

```tsx
<Newsletter
  onSubmit={(email) => {
    console.log('Subscribed:', email);
  }}
/>
```

### Async Submit with State

```tsx
function NewsletterSection() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (email: string) => {
    setLoading(true);
    setError(null);

    try {
      await subscribeToNewsletter(email);
      setSuccess(true);
    } catch (err) {
      setError('Failed to subscribe. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Newsletter
      title="Subscribe to our newsletter"
      onSubmit={handleSubmit}
      loading={loading}
      successMessage={success ? 'Thanks for subscribing!' : undefined}
      errorMessage={error}
    />
  );
}
```

---

## Custom Submit Button

```tsx
import { ArrowRight } from 'lucide-react';

<Newsletter
  title="Join our community"
  onSubmit={handleSubmit}
  submitButton={
    <Button size="lg" iconRight={<ArrowRight size={20} />}>
      Get Started
    </Button>
  }
/>;
```

---

## Disclaimer Text

Add privacy notes or terms links.

```tsx
<Newsletter
  title="Subscribe"
  onSubmit={handleSubmit}
  disclaimer="We respect your privacy. Unsubscribe at any time."
/>
```

```tsx
<Newsletter
  title="Subscribe"
  onSubmit={handleSubmit}
  disclaimer={
    <>
      By subscribing, you agree to our <a href="/privacy">Privacy Policy</a> and{' '}
      <a href="/terms">Terms of Service</a>.
    </>
  }
/>
```

---

## Complete Examples

### Landing Page Newsletter

```tsx
import { Newsletter, Badge } from '@orion/react';

<Newsletter
  eyebrow={<Badge variant="brand">Newsletter</Badge>}
  title="Stay ahead of the curve"
  description="Join 25,000+ developers getting weekly tips, tutorials, and industry insights."
  placeholder="you@example.com"
  buttonText="Subscribe"
  onSubmit={handleSubscribe}
  disclaimer="No spam, ever. Unsubscribe anytime."
  layout="inline"
  size="lg"
  background="subtle"
/>;
```

### Footer Newsletter

```tsx
<Newsletter
  title="Get updates"
  description="Product news and company updates."
  layout="stacked"
  size="sm"
  background="none"
  onSubmit={handleSubscribe}
/>
```

### Card Newsletter (Sidebar)

```tsx
<Newsletter
  layout="card"
  title="Weekly Digest"
  description="The best stories, curated for you."
  buttonText="Join Free"
  onSubmit={handleSubscribe}
  disclaimer="Join 5,000+ readers"
/>
```

### Brand Background Newsletter

```tsx
<Newsletter
  background="brand"
  title="Ready to get started?"
  description="Subscribe to start your 14-day free trial."
  buttonText="Start Free Trial"
  onSubmit={handleSubscribe}
  size="lg"
  layout="stacked"
/>
```

### With Loading and Success States

```tsx
function NewsletterWithStates() {
  const [state, setState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (email: string) => {
    setState('loading');
    try {
      await api.subscribe(email);
      setState('success');
    } catch {
      setState('error');
    }
  };

  if (state === 'success') {
    return (
      <Section background="subtle" spacing="lg">
        <Container size="md">
          <div style={{ textAlign: 'center' }}>
            <CheckCircle size={48} style={{ color: 'var(--status-success)' }} />
            <h2>You're subscribed!</h2>
            <p>Check your inbox for a confirmation email.</p>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Newsletter
      title="Join our newsletter"
      onSubmit={handleSubmit}
      loading={state === 'loading'}
      errorMessage={state === 'error' ? 'Something went wrong. Please try again.' : undefined}
    />
  );
}
```

---

## Accessibility

- Email input has proper label
- Required attribute for validation
- Error messages associated with input
- Loading state communicated to screen readers
- Submit button has clear, descriptive text

```tsx
// Good: Clear labels and feedback
<Newsletter
  title="Subscribe to updates"
  placeholder="your@email.com"
  buttonText="Subscribe Now"
  successMessage="Thanks! Check your inbox."
  errorMessage="Invalid email. Please try again."
/>

// Avoid: Unclear button text
<Newsletter
  buttonText="Submit"  // Submit what?
/>
```

---

## Anti-Patterns

### Missing Value Proposition

```tsx
// WRONG - Why should users subscribe?
<Newsletter
  title="Newsletter"
  buttonText="Submit"
/>

// CORRECT - Clear benefit
<Newsletter
  title="Get weekly design tips"
  description="Join 10,000+ designers learning to build better products."
  buttonText="Subscribe Free"
/>
```

### No Privacy Assurance

```tsx
// WRONG - Users worry about spam
<Newsletter onSubmit={handleSubmit} />

// CORRECT - Privacy disclaimer
<Newsletter
  onSubmit={handleSubmit}
  disclaimer="No spam. Unsubscribe anytime."
/>
```

### Missing Error Handling

```tsx
// WRONG - Silent failure
onSubmit={async (email) => {
  await api.subscribe(email);
  // No feedback on error!
}}

// CORRECT - Handle errors
onSubmit={async (email) => {
  try {
    await api.subscribe(email);
    setSuccess(true);
  } catch (error) {
    setError('Failed to subscribe');
  }
}}
```

---

## When to Use Newsletter

| Scenario          | Recommendation                  |
| ----------------- | ------------------------------- |
| Landing page      | `size="lg"`, `layout="inline"`  |
| Blog sidebar      | `layout="card"`, `size="sm"`    |
| Footer            | `layout="stacked"`, `size="sm"` |
| Exit intent popup | `layout="card"` in modal        |

## When NOT to Use Newsletter

| Scenario              | Use Instead       |
| --------------------- | ----------------- |
| Contact form          | `Contact` section |
| Multi-field signup    | Custom form       |
| User registration     | Auth flow         |
| Full preferences form | Settings page     |

---

## Related Components

- **[Contact](../Contact/README.md)** — Full contact form
- **[CTA](../CTA/README.md)** — Call-to-action section
- **[Footer](../Footer/README.md)** — Footer with newsletter slot
- **[Field](../../components/Field/README.md)** — Form field component
