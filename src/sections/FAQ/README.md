# FAQ Section

> Frequently asked questions with expandable accordion or static grid layout.

## Quick Start

```tsx
import { FAQ, Badge } from '@orion/react';

<FAQ
  eyebrow={<Badge>FAQ</Badge>}
  title="Frequently Asked Questions"
  description="Find answers to common questions about our product."
  items={[
    {
      question: "How do I get started?",
      answer: "Sign up for a free account and follow our quick start guide. You'll be up and running in under 5 minutes."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Absolutely. You can cancel your subscription at any time with no penalties or hidden fees."
    }
  ]}
/>
```

---

## Features

- **2 Visual Variants** — Accordion (expandable) or Grid (static)
- **Flexible Columns** — 1 or 2 column layouts
- **Rich Answers** — Support for formatted content in answers
- **Multi-Open** — Allow multiple items open simultaneously
- **Default Open** — Pre-expand specific items
- **Brand-Aware** — Adapts to all Orion brands

---

## Props Reference

```typescript
interface FAQProps {
  // Header
  eyebrow?: ReactNode;          // Badge/label above title
  title?: ReactNode;            // Section title
  description?: ReactNode;      // Section description

  // Content
  items: FAQItem[];             // REQUIRED - Array of FAQ items

  // Layout
  columns?: 1 | 2;              // Grid columns - default: 1
  centered?: boolean;           // Center header - default: true

  // Behavior
  variant?: 'accordion' | 'grid';  // default: 'accordion'
  allowMultiple?: boolean;      // Multiple items open - default: true

  // Styling
  background?: 'base' | 'subtle' | 'none';  // default: 'base'
}

interface FAQItem {
  question: string;             // The question text
  answer: ReactNode;            // The answer (text or rich content)
  defaultOpen?: boolean;        // Open by default - default: false
}
```

---

## Visual Variants

### `variant="accordion"` (Default)

Expandable items that toggle open/closed.

```tsx
<FAQ
  variant="accordion"
  items={[
    { question: "How does billing work?", answer: "..." },
    { question: "Can I upgrade later?", answer: "..." },
    { question: "Do you offer refunds?", answer: "..." }
  ]}
/>
```

### `variant="grid"`

Static display of all questions and answers.

```tsx
<FAQ
  variant="grid"
  columns={2}
  items={[
    { question: "What is included?", answer: "..." },
    { question: "How long is the trial?", answer: "..." },
    { question: "Is support included?", answer: "..." },
    { question: "Can I cancel anytime?", answer: "..." }
  ]}
/>
```

---

## Column Layouts

### Single Column (Default)

Best for longer answers and detailed explanations.

```tsx
<FAQ
  columns={1}
  items={faqItems}
/>
```

### Two Columns

Good for shorter answers and more items.

```tsx
<FAQ
  columns={2}
  items={faqItems}
/>
```

---

## FAQ Items

### Basic Item

```tsx
{
  question: "How do I reset my password?",
  answer: "Click 'Forgot Password' on the login page and follow the instructions sent to your email."
}
```

### Pre-Expanded Item

```tsx
{
  question: "What's included in the free plan?",
  answer: "The free plan includes 3 projects, 1GB storage, and email support.",
  defaultOpen: true
}
```

### Rich Answer Content

```tsx
{
  question: "What payment methods do you accept?",
  answer: (
    <div>
      <p>We accept the following payment methods:</p>
      <ul>
        <li>Credit/Debit Cards (Visa, Mastercard, Amex)</li>
        <li>PayPal</li>
        <li>Bank Transfer (Enterprise plans)</li>
      </ul>
      <p>All payments are processed securely through Stripe.</p>
    </div>
  )
}
```

### Answer with Links

```tsx
{
  question: "Where can I find documentation?",
  answer: (
    <>
      Visit our <a href="/docs">documentation portal</a> for guides, API references,
      and tutorials. You can also check out our <a href="/blog">blog</a> for tips and updates.
    </>
  )
}
```

---

## Accordion Behavior

### Allow Multiple Open (Default)

Multiple items can be open simultaneously.

```tsx
<FAQ
  variant="accordion"
  allowMultiple={true}
  items={items}
/>
```

### Single Open Only

Only one item can be open at a time.

```tsx
<FAQ
  variant="accordion"
  allowMultiple={false}
  items={items}
/>
```

---

## Complete Examples

### Product FAQ

```tsx
import { FAQ, Badge } from '@orion/react';

<FAQ
  eyebrow={<Badge variant="brand">FAQ</Badge>}
  title="Frequently Asked Questions"
  description="Everything you need to know about our product."
  items={[
    {
      question: "How do I get started?",
      answer: "Sign up for a free account, complete the onboarding wizard, and you'll be ready to go in under 5 minutes. Our quick start guide will walk you through the basics.",
      defaultOpen: true
    },
    {
      question: "Is there a free trial?",
      answer: "Yes! We offer a 14-day free trial with full access to all Pro features. No credit card required to start."
    },
    {
      question: "What happens when my trial ends?",
      answer: "At the end of your trial, you can choose to upgrade to a paid plan or continue with our free tier. Your data is always preserved."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Absolutely. You can cancel at any time from your account settings. There are no cancellation fees or long-term commitments."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 30-day money-back guarantee. If you're not satisfied, contact our support team for a full refund."
    },
    {
      question: "How do I contact support?",
      answer: (
        <>
          You can reach our support team through:
          <ul style={{ marginTop: 'var(--spacing-2)', marginBottom: 0 }}>
            <li>Email: support@example.com</li>
            <li>Live chat (Pro plans)</li>
            <li>Help center: help.example.com</li>
          </ul>
        </>
      )
    }
  ]}
  background="subtle"
/>
```

### Pricing FAQ

```tsx
<FAQ
  title="Pricing Questions"
  items={[
    {
      question: "What's the difference between plans?",
      answer: "Our Starter plan is for individuals, Pro is for small teams, and Enterprise is for large organizations with custom needs. See our pricing page for a detailed comparison."
    },
    {
      question: "Do you offer discounts?",
      answer: "Yes! We offer 20% off for annual billing and special pricing for startups, non-profits, and educational institutions."
    },
    {
      question: "Can I change plans later?",
      answer: "You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate your billing."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, Amex), PayPal, and bank transfers for Enterprise plans."
    }
  ]}
  columns={1}
  allowMultiple={false}
/>
```

### Technical FAQ (Grid Layout)

```tsx
<FAQ
  variant="grid"
  columns={2}
  title="Technical Questions"
  items={[
    {
      question: "What browsers are supported?",
      answer: "We support the latest versions of Chrome, Firefox, Safari, and Edge."
    },
    {
      question: "Is there an API?",
      answer: "Yes, we have a comprehensive REST API with full documentation."
    },
    {
      question: "Can I self-host?",
      answer: "Enterprise customers can opt for on-premise deployment."
    },
    {
      question: "Is my data encrypted?",
      answer: "Yes, all data is encrypted at rest and in transit using AES-256."
    },
    {
      question: "Do you have an SLA?",
      answer: "Pro and Enterprise plans include 99.9% uptime SLA."
    },
    {
      question: "Where are servers located?",
      answer: "We have data centers in US, EU, and Asia-Pacific regions."
    }
  ]}
  background="base"
/>
```

---

## Accessibility

- Accordion items use proper ARIA attributes
- `aria-expanded` indicates open/closed state
- `aria-controls` links button to content
- Keyboard navigation with Enter/Space to toggle
- Focus management for keyboard users

```tsx
// Good: Clear, specific questions
{
  question: "How do I upgrade my subscription plan?",
  answer: "..."
}

// Avoid: Vague questions
{
  question: "Upgrades?",
  answer: "..."
}
```

---

## Anti-Patterns

### Too Many FAQ Items

```tsx
// WRONG - Overwhelming list
<FAQ items={[...twentyItems]} />

// CORRECT - Curated, essential questions
<FAQ items={[...sixToEightItems]} />
```

### Long Questions

```tsx
// WRONG - Questions that are paragraphs
{
  question: "I'm wondering if it's possible to upgrade my account from the free plan to the pro plan and if so what happens to my existing data and will I be charged immediately or at the end of my current billing cycle?",
  answer: "..."
}

// CORRECT - Concise questions
{
  question: "How do I upgrade from Free to Pro?",
  answer: "You can upgrade at any time from your account settings. Your data is preserved, and you'll only be charged for the remainder of your billing cycle."
}
```

### Answers That Are Too Short

```tsx
// WRONG - Not helpful
{
  question: "What's included in the free plan?",
  answer: "Basic features."
}

// CORRECT - Specific and helpful
{
  question: "What's included in the free plan?",
  answer: "The free plan includes 3 projects, 1GB storage, community support, and access to all basic features. It's perfect for individual users and small side projects."
}
```

### Missing Categories

```tsx
// WRONG - All questions in one big list
<FAQ items={[...mixedQuestions]} />

// CORRECT - Separate FAQs by topic
<FAQ title="Getting Started" items={gettingStartedItems} />
<FAQ title="Billing & Pricing" items={billingItems} />
<FAQ title="Technical Questions" items={technicalItems} />
```

---

## When to Use FAQ

| Scenario | Recommendation |
|----------|----------------|
| Landing page | Yes - address common objections |
| Pricing page | Yes - billing and plan questions |
| Product docs | Yes - quick answers section |
| Support page | Yes - reduce support tickets |

## When NOT to Use FAQ

| Scenario | Use Instead |
|----------|-------------|
| Full documentation | Dedicated docs site |
| Complex guides | Step-by-step tutorials |
| Feature explanations | `Features` section |
| Terms/policies | Dedicated legal pages |

---

## Related Components

- **[Pricing](../Pricing/README.md)** — Pricing section (FAQ often follows)
- **[CTA](../CTA/README.md)** — Call-to-action (FAQ often precedes)
- **[Accordion](../../components/Accordion/README.md)** — Standalone accordion component
- **[Contact](../Contact/README.md)** — Contact form (for questions not in FAQ)
