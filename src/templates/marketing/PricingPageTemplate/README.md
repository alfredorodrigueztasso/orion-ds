# PricingPageTemplate

> Complete pricing page with hero, feature carousel, pricing cards, comparison table, FAQ, CTA, and footer.

## Quick Start

```tsx
import { PricingPageTemplate, Button, Badge, Navbar } from '@orion/react';
import { Check, X, Twitter, Github } from 'lucide-react';

<PricingPageTemplate
  navbar={{
    variant: 'solid',
    sticky: true,
    children: (
      <>
        <Navbar.Brand href="/">Acme</Navbar.Brand>
        <Navbar.Nav>
          <Navbar.Link href="/features">Features</Navbar.Link>
          <Navbar.Link href="/pricing">Pricing</Navbar.Link>
        </Navbar.Nav>
        <Navbar.Actions>
          <Button variant="ghost">Sign In</Button>
          <Button>Get Started</Button>
        </Navbar.Actions>
      </>
    ),
  }}
  hero={{
    badge: <Badge>Pricing</Badge>,
    headline: 'Simple, transparent pricing',
    description: 'No hidden fees. No surprises. Cancel anytime.',
    align: 'center',
    size: 'md',
  }}
  pricing={{
    plans: [
      {
        name: 'Starter',
        price: '$0',
        period: '/month',
        description: 'For individuals',
        features: [
          { text: '5 projects', included: true },
          { text: '10GB storage', included: true },
          { text: 'API access', included: false },
        ],
        action: <Button variant="secondary" fullWidth>Get Started</Button>,
      },
      {
        name: 'Pro',
        price: '$29',
        period: '/month',
        description: 'For teams',
        features: [
          { text: 'Unlimited projects', included: true },
          { text: '100GB storage', included: true },
          { text: 'API access', included: true },
        ],
        action: <Button fullWidth>Start Trial</Button>,
        popular: true,
      },
    ],
  }}
  faq={{
    title: 'Common questions',
    items: [
      { question: 'Can I cancel anytime?', answer: 'Yes, cancel with no penalties.' },
      { question: 'Is there a free trial?', answer: 'Yes, Pro has a 14-day free trial.' },
    ],
  }}
  footer={{ ... }}
/>
```

---

## Features

- **Navbar** — Site navigation
- **Hero Section** — Pricing page headline (typically smaller)
- **Feature Carousel** — Product showcase before pricing
- **Pricing Cards** — Plan comparison cards
- **Comparison Table** — Detailed feature comparison
- **FAQ Section** — Pricing-related questions
- **CTA Section** — Final conversion push
- **Footer** — Standard page footer

---

## Sections Used

| Section | Required | Purpose |
|---------|----------|---------|
| `Navbar` | No | Top navigation |
| `Hero` | **Yes** | Page hero section |
| `CarouselSection` (features) | No | Product showcase carousel |
| `Pricing` | **Yes** | Pricing plan cards |
| `Comparison` | No | Feature comparison table |
| `FAQ` | No | Pricing FAQ |
| `CTA` | No | Call-to-action |
| `Footer` | No | Page footer |

---

## Props Reference

```typescript
interface PricingPageTemplateProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /**
   * Navbar configuration
   */
  navbar?: NavbarProps & { children?: ReactNode };

  /**
   * Hero section (required) - typically smaller for pricing pages
   */
  hero: HeroProps;

  /**
   * Product carousel for showcasing key features
   */
  featuresCarousel?: Omit<CarouselSectionProps, 'variant'>;

  /**
   * Pricing cards section (required)
   */
  pricing: PricingProps;

  /**
   * Feature comparison table
   */
  comparison?: ComparisonProps;

  /**
   * FAQ section for pricing questions
   */
  faq?: FAQProps;

  /**
   * Call-to-action section
   */
  cta?: CTAProps;

  /**
   * Footer section
   */
  footer?: FooterProps;

  /**
   * Additional children rendered before footer
   */
  children?: ReactNode;
}
```

---

## Complete Examples

### Full Pricing Page

```tsx
import { PricingPageTemplate, Button, Badge, Navbar } from '@orion/react';
import { Check, X, Twitter, Linkedin } from 'lucide-react';

function PricingPage() {
  return (
    <PricingPageTemplate
      navbar={{
        variant: 'solid',
        sticky: true,
        children: (
          <>
            <Navbar.Brand href="/">
              <img src="/logo.svg" alt="Acme" height={32} />
            </Navbar.Brand>
            <Navbar.Nav>
              <Navbar.Link href="/">Home</Navbar.Link>
              <Navbar.Link href="/features">Features</Navbar.Link>
              <Navbar.Link href="/pricing" active>Pricing</Navbar.Link>
              <Navbar.Link href="/contact">Contact</Navbar.Link>
            </Navbar.Nav>
            <Navbar.Actions>
              <Button variant="ghost">Sign In</Button>
              <Button>Get Started</Button>
            </Navbar.Actions>
          </>
        ),
      }}
      hero={{
        badge: <Badge>Pricing</Badge>,
        headline: 'Simple, transparent pricing',
        description: 'Choose the plan that fits your needs. No hidden fees. Cancel anytime.',
        align: 'center',
        size: 'md',
      }}
      featuresCarousel={{
        title: 'What you get',
        description: 'Powerful features included in every plan',
        items: [
          {
            image: <img src="/features/dashboard.jpg" alt="" />,
            title: 'Analytics Dashboard',
            description: 'Real-time insights and reporting',
          },
          {
            image: <img src="/features/collab.jpg" alt="" />,
            title: 'Team Collaboration',
            description: 'Work together seamlessly',
          },
          {
            image: <img src="/features/api.jpg" alt="" />,
            title: 'API Access',
            description: 'Build custom integrations',
          },
        ],
      }}
      pricing={{
        eyebrow: 'Plans',
        title: 'Choose your plan',
        description: 'Start free and scale as you grow',
        plans: [
          {
            name: 'Free',
            price: '$0',
            period: '/month',
            description: 'For individuals getting started',
            features: [
              { text: '3 projects', included: true },
              { text: '1GB storage', included: true },
              { text: 'Basic analytics', included: true },
              { text: 'Community support', included: true },
              { text: 'API access', included: false },
              { text: 'Custom domain', included: false },
            ],
            action: (
              <Button variant="secondary" fullWidth>
                Get Started Free
              </Button>
            ),
          },
          {
            name: 'Pro',
            price: '$29',
            period: '/month',
            description: 'For growing teams',
            features: [
              { text: 'Unlimited projects', included: true },
              { text: '100GB storage', included: true },
              { text: 'Advanced analytics', included: true },
              { text: 'Priority support', included: true },
              { text: 'API access', included: true },
              { text: 'Custom domain', included: true },
            ],
            action: (
              <Button variant="primary" fullWidth>
                Start 14-Day Trial
              </Button>
            ),
            popular: true,
          },
          {
            name: 'Enterprise',
            price: 'Custom',
            description: 'For large organizations',
            features: [
              { text: 'Everything in Pro', included: true },
              { text: 'Unlimited storage', included: true },
              { text: 'Custom integrations', included: true },
              { text: 'Dedicated support', included: true },
              { text: 'SLA guarantee', included: true },
              { text: 'Security review', included: true },
            ],
            action: (
              <Button variant="secondary" fullWidth>
                Contact Sales
              </Button>
            ),
          },
        ],
      }}
      comparison={{
        eyebrow: 'Compare',
        title: 'Feature comparison',
        columns: [
          { id: 'free', label: 'Free' },
          { id: 'pro', label: 'Pro', highlighted: true },
          { id: 'enterprise', label: 'Enterprise' },
        ],
        features: [
          {
            category: 'Core Features',
            items: [
              { label: 'Projects', free: '3', pro: 'Unlimited', enterprise: 'Unlimited' },
              { label: 'Storage', free: '1GB', pro: '100GB', enterprise: 'Unlimited' },
              { label: 'Team members', free: '1', pro: '10', enterprise: 'Unlimited' },
            ],
          },
          {
            category: 'Analytics',
            items: [
              { label: 'Basic analytics', free: true, pro: true, enterprise: true },
              { label: 'Advanced analytics', free: false, pro: true, enterprise: true },
              { label: 'Custom reports', free: false, pro: false, enterprise: true },
            ],
          },
          {
            category: 'Support',
            items: [
              { label: 'Community support', free: true, pro: true, enterprise: true },
              { label: 'Email support', free: false, pro: true, enterprise: true },
              { label: 'Dedicated support', free: false, pro: false, enterprise: true },
              { label: 'SLA', free: false, pro: false, enterprise: true },
            ],
          },
          {
            category: 'Advanced',
            items: [
              { label: 'API access', free: false, pro: true, enterprise: true },
              { label: 'Custom domain', free: false, pro: true, enterprise: true },
              { label: 'SSO', free: false, pro: false, enterprise: true },
              { label: 'Audit logs', free: false, pro: false, enterprise: true },
            ],
          },
        ],
      }}
      faq={{
        eyebrow: 'FAQ',
        title: 'Frequently asked questions',
        items: [
          {
            question: 'Can I change plans anytime?',
            answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any payments.',
          },
          {
            question: 'Is there a free trial?',
            answer: 'Yes, Pro plan includes a 14-day free trial. No credit card required to start.',
          },
          {
            question: 'What payment methods do you accept?',
            answer: 'We accept all major credit cards (Visa, Mastercard, American Express) as well as PayPal and bank transfers for annual plans.',
          },
          {
            question: 'Can I cancel my subscription?',
            answer: 'Yes, you can cancel anytime. If you cancel, you\'ll retain access until the end of your billing period.',
          },
          {
            question: 'Do you offer discounts for nonprofits?',
            answer: 'Yes, we offer 50% off for registered nonprofits and educational institutions. Contact us for details.',
          },
          {
            question: 'What happens when I reach my storage limit?',
            answer: 'We\'ll notify you when you\'re approaching your limit. You can upgrade your plan or delete unused files to free up space.',
          },
        ],
        columns: 2,
      }}
      cta={{
        headline: 'Ready to get started?',
        description: 'Join thousands of teams already using Acme.',
        actions: (
          <>
            <Button size="lg">Start Free Trial</Button>
            <Button variant="ghost" size="lg">Talk to Sales</Button>
          </>
        ),
      }}
      footer={{
        brand: {
          name: 'Acme Inc',
          description: 'Building the future of development.',
        },
        linkGroups: [
          {
            title: 'Product',
            links: [
              { label: 'Features', href: '/features' },
              { label: 'Pricing', href: '/pricing' },
              { label: 'Changelog', href: '/changelog' },
            ],
          },
          {
            title: 'Company',
            links: [
              { label: 'About', href: '/about' },
              { label: 'Careers', href: '/careers' },
              { label: 'Contact', href: '/contact' },
            ],
          },
        ],
        socialLinks: [
          { label: 'Twitter', href: 'https://twitter.com', icon: <Twitter size={20} /> },
          { label: 'LinkedIn', href: 'https://linkedin.com', icon: <Linkedin size={20} /> },
        ],
        copyright: `${new Date().getFullYear()} Acme Inc. All rights reserved.`,
      }}
    />
  );
}
```

### Minimal Pricing Page

```tsx
<PricingPageTemplate
  hero={{
    headline: 'Pricing',
    description: 'Simple plans for everyone.',
    align: 'center',
    size: 'md',
  }}
  pricing={{
    plans: [
      {
        name: 'Free',
        price: '$0',
        period: '/month',
        features: [{ text: 'Basic features', included: true }],
        action: <Button variant="secondary" fullWidth>Sign Up</Button>,
      },
      {
        name: 'Pro',
        price: '$29',
        period: '/month',
        features: [{ text: 'All features', included: true }],
        action: <Button fullWidth>Start Trial</Button>,
        popular: true,
      },
    ],
  }}
  footer={{
    brand: { name: 'Acme' },
    copyright: '2024 Acme Inc.',
  }}
/>
```

### Enterprise-Focused Pricing

```tsx
<PricingPageTemplate
  hero={{
    headline: 'Enterprise Pricing',
    description: 'Custom solutions for large organizations.',
    align: 'center',
    size: 'md',
  }}
  pricing={{
    plans: [
      {
        name: 'Team',
        price: '$99',
        period: '/month',
        description: 'Per seat',
        features: [
          { text: 'Unlimited projects', included: true },
          { text: 'SSO', included: true },
          { text: 'Priority support', included: true },
        ],
        action: <Button variant="secondary" fullWidth>Contact Sales</Button>,
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        description: 'Contact for pricing',
        features: [
          { text: 'Everything in Team', included: true },
          { text: 'Dedicated infrastructure', included: true },
          { text: 'Custom SLA', included: true },
          { text: 'Security review', included: true },
        ],
        action: <Button fullWidth>Talk to Sales</Button>,
        popular: true,
      },
    ],
  }}
  comparison={{
    title: 'Compare enterprise features',
    columns: [
      { id: 'team', label: 'Team' },
      { id: 'enterprise', label: 'Enterprise', highlighted: true },
    ],
    features: [
      {
        category: 'Security',
        items: [
          { label: 'SSO', team: true, enterprise: true },
          { label: 'SCIM provisioning', team: false, enterprise: true },
          { label: 'Audit logs', team: '90 days', enterprise: 'Unlimited' },
        ],
      },
    ],
  }}
  cta={{
    headline: 'Need a custom solution?',
    description: 'Our enterprise team is ready to help.',
    actions: <Button size="lg">Schedule a Call</Button>,
  }}
  footer={{ ... }}
/>
```

---

## Customization

### Custom Sections

Use `children` to add custom content.

```tsx
<PricingPageTemplate
  hero={{ ... }}
  pricing={{ ... }}
>
  {/* Custom content before footer */}
  <section className="testimonials">
    <h2>What our customers say</h2>
    <CustomerQuotes />
  </section>
</PricingPageTemplate>
```

### Billing Toggle

The Pricing section supports monthly/annual toggle. Configure via the `pricing` prop.

```tsx
<PricingPageTemplate
  pricing={{
    billingPeriods: [
      { id: 'monthly', label: 'Monthly' },
      { id: 'annual', label: 'Annual', discount: 'Save 20%' },
    ],
    defaultPeriod: 'monthly',
    plans: [...],
  }}
/>
```

---

## Accessibility

- Pricing cards use proper heading hierarchy
- Comparison table uses semantic `<table>` markup
- Boolean values in comparison have accessible text
- Popular badge is announced to screen readers
- FAQ uses accessible accordion pattern

---

## Anti-Patterns

### Missing Required Sections

```tsx
// WRONG - Both hero and pricing are required
<PricingPageTemplate
  comparison={{ columns: [...], features: [...] }}
/>

// CORRECT
<PricingPageTemplate
  hero={{ headline: 'Pricing' }}
  pricing={{ plans: [...] }}
/>
```

### Inconsistent Plan Features

```tsx
// WRONG - Plans should have comparable feature lists
<PricingPageTemplate
  pricing={{
    plans: [
      {
        name: 'Free',
        features: [{ text: 'Feature A', included: true }],
      },
      {
        name: 'Pro',
        features: [
          { text: 'Different Feature', included: true },  // Not comparable
          { text: 'Another one', included: true },
        ],
      },
    ],
  }}
/>

// CORRECT - Same features across plans for comparison
<PricingPageTemplate
  pricing={{
    plans: [
      {
        name: 'Free',
        features: [
          { text: 'Feature A', included: true },
          { text: 'Feature B', included: false },
        ],
      },
      {
        name: 'Pro',
        features: [
          { text: 'Feature A', included: true },
          { text: 'Feature B', included: true },
        ],
      },
    ],
  }}
/>
```

### Using Non-Pricing Sections

```tsx
// WRONG - Team section is for about pages
<PricingPageTemplate
  hero={{ headline: 'Pricing' }}
  pricing={{ plans: [...] }}
  team={{ members: [...] }}  // Wrong section type
/>

// CORRECT - Use pricing-specific sections
<PricingPageTemplate
  hero={{ headline: 'Pricing' }}
  pricing={{ plans: [...] }}
  comparison={{ ... }}
  faq={{ items: [...] }}
/>
```

---

## When to Use

| Scenario | Recommendation |
|----------|----------------|
| SaaS pricing page | Yes |
| Product pricing | Yes |
| Plan comparison | Yes |
| Enterprise sales page | Yes |

## When NOT to Use

| Scenario | Use Instead |
|----------|-------------|
| Product landing | `LandingPageTemplate` |
| Company about | `AboutPageTemplate` |
| Contact page | `ContactPageTemplate` |
| Dashboard | `DashboardTemplate` |

---

## Related

- **[Hero](../../../sections/Hero/README.md)** — Hero section
- **[Pricing](../../../sections/Pricing/README.md)** — Pricing cards
- **[Comparison](../../../sections/Comparison/README.md)** — Feature comparison table
- **[FAQ](../../../sections/FAQ/README.md)** — FAQ accordion
- **[CTA](../../../sections/CTA/README.md)** — Call-to-action
