# LandingPageTemplate

> Complete marketing landing page with navbar, hero, features, pricing, testimonials, FAQ, CTA, and footer.

## Quick Start

```tsx
import { LandingPageTemplate, Button, Badge, Navbar } from '@orion/react';
import { Zap, Shield, Rocket, Twitter, Github } from 'lucide-react';

<LandingPageTemplate
  navbar={{
    variant: 'solid',
    sticky: true,
    children: (
      <>
        <Navbar.Brand href="/">Acme</Navbar.Brand>
        <Navbar.Nav>
          <Navbar.Link href="#features">Features</Navbar.Link>
          <Navbar.Link href="#pricing">Pricing</Navbar.Link>
        </Navbar.Nav>
        <Navbar.Actions>
          <Button variant="ghost">Sign In</Button>
          <Button>Get Started</Button>
        </Navbar.Actions>
      </>
    ),
  }}
  hero={{
    badge: <Badge variant="brand">New</Badge>,
    headline: 'Build Products 10x Faster',
    description: 'The all-in-one platform for modern development teams.',
    primaryAction: <Button size="lg">Start Free Trial</Button>,
    secondaryAction: (
      <Button variant="ghost" size="lg">
        Watch Demo
      </Button>
    ),
    align: 'center',
    size: 'lg',
  }}
  features={{
    id: 'features',
    eyebrow: 'Features',
    title: 'Everything you need',
    items: [
      { icon: <Zap size={24} />, title: 'Fast', description: 'Lightning fast performance' },
      { icon: <Shield size={24} />, title: 'Secure', description: 'Enterprise-grade security' },
      { icon: <Rocket size={24} />, title: 'Scalable', description: 'Grows with your needs' },
    ],
    columns: 3,
  }}
  pricing={{
    id: 'pricing',
    eyebrow: 'Pricing',
    title: 'Simple pricing',
    plans: [
      {
        name: 'Starter',
        price: '$0',
        period: '/month',
        features: [{ text: '5 projects', included: true }],
        action: (
          <Button variant="secondary" fullWidth>
            Get Started
          </Button>
        ),
      },
      {
        name: 'Pro',
        price: '$29',
        period: '/month',
        features: [{ text: 'Unlimited projects', included: true }],
        action: <Button fullWidth>Start Trial</Button>,
        popular: true,
      },
    ],
  }}
  footer={{
    brand: { name: 'Acme', description: 'Building the future.' },
    linkGroups: [
      {
        title: 'Product',
        links: [
          { label: 'Features', href: '#features' },
          { label: 'Pricing', href: '#pricing' },
        ],
      },
    ],
    socialLinks: [
      { label: 'Twitter', href: 'https://twitter.com', icon: <Twitter size={20} /> },
      { label: 'GitHub', href: 'https://github.com', icon: <Github size={20} /> },
    ],
    copyright: '2024 Acme Inc. All rights reserved.',
  }}
/>;
```

---

## Features

- **Navbar** — Sticky navigation with brand, links, and actions
- **Hero Section** — Headline, description, CTAs, and optional media
- **Featured Carousel** — Editorial carousel for stories/content
- **Logo Cloud** — Client/partner logo display
- **Features Grid** — Feature showcase in grid layout
- **Stats Section** — Key metrics and numbers
- **Product Carousel** — Product showcase cards
- **Pricing Cards** — Plan comparison
- **Testimonials** — Customer quotes
- **FAQ Accordion** — Frequently asked questions
- **CTA Section** — Final call-to-action
- **Footer** — Links, social, and legal

---

## Sections Used

| Section                      | Required | Purpose            |
| ---------------------------- | -------- | ------------------ |
| `Navbar`                     | No       | Top navigation     |
| `Hero`                       | **Yes**  | Main hero section  |
| `CarouselSection` (featured) | No       | Editorial carousel |
| `LogoCloud`                  | No       | Trust logos        |
| `Features`                   | No       | Feature grid       |
| `Stats`                      | No       | Metrics display    |
| `CarouselSection` (product)  | No       | Product showcase   |
| `Pricing`                    | No       | Pricing plans      |
| `Testimonials`               | No       | Customer quotes    |
| `FAQ`                        | No       | FAQ accordion      |
| `CTA`                        | No       | Call-to-action     |
| `Footer`                     | No       | Page footer        |

---

## Props Reference

```typescript
interface LandingPageTemplateProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /**
   * Navbar configuration
   */
  navbar?: NavbarProps & { children?: ReactNode };

  /**
   * Hero section (required)
   */
  hero: HeroProps;

  /**
   * Editorial carousel for featured stories/content
   * Displays as magazine-style with large images and text overlays
   */
  featuredCarousel?: Omit<CarouselSectionProps, 'variant'>;

  /**
   * Logo cloud for social proof
   */
  logoCloud?: LogoCloudProps;

  /**
   * Features section
   */
  features?: FeaturesProps;

  /**
   * Stats/metrics section
   */
  stats?: StatsProps;

  /**
   * Product carousel for showcasing features/products
   * Displays as product showcase cards
   */
  productCarousel?: Omit<CarouselSectionProps, 'variant'>;

  /**
   * Pricing section
   */
  pricing?: PricingProps;

  /**
   * Testimonials section
   */
  testimonials?: TestimonialsProps;

  /**
   * FAQ section
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

### Full Landing Page

```tsx
import { LandingPageTemplate, Button, Badge, Navbar, Hero } from '@orion/react';
import {
  Zap,
  Shield,
  Rocket,
  BarChart3,
  Users,
  Globe,
  Twitter,
  Github,
  Linkedin,
} from 'lucide-react';

function LandingPage() {
  return (
    <LandingPageTemplate
      navbar={{
        variant: 'solid',
        sticky: true,
        children: (
          <>
            <Navbar.Brand href="/">
              <span style={{ fontWeight: 700, fontSize: 'var(--text-xl)' }}>Acme</span>
            </Navbar.Brand>
            <Navbar.Nav>
              <Navbar.Link href="#features">Features</Navbar.Link>
              <Navbar.Link href="#pricing">Pricing</Navbar.Link>
              <Navbar.Link href="#testimonials">Testimonials</Navbar.Link>
            </Navbar.Nav>
            <Navbar.Actions>
              <Button variant="ghost">Sign In</Button>
              <Button variant="primary">Get Started</Button>
            </Navbar.Actions>
          </>
        ),
      }}
      hero={{
        badge: <Badge variant="brand">Now in Public Beta</Badge>,
        headline: (
          <>
            Build Products <Hero.Highlight>10x Faster</Hero.Highlight>
          </>
        ),
        description:
          'The all-in-one platform for modern development teams. Ship features, not infrastructure.',
        primaryAction: <Button size="lg">Start Free Trial</Button>,
        secondaryAction: (
          <Button variant="ghost" size="lg">
            Watch Demo
          </Button>
        ),
        align: 'center',
        size: 'lg',
      }}
      logoCloud={{
        logos: [
          { name: 'Company 1', logo: <img src="/logos/c1.svg" alt="Company 1" /> },
          { name: 'Company 2', logo: <img src="/logos/c2.svg" alt="Company 2" /> },
          { name: 'Company 3', logo: <img src="/logos/c3.svg" alt="Company 3" /> },
        ],
        title: 'Trusted by industry leaders',
      }}
      features={{
        id: 'features',
        eyebrow: 'Features',
        title: 'Everything you need to ship faster',
        description: 'Built for modern teams who value speed, quality, and developer experience.',
        items: [
          {
            icon: <Zap size={24} />,
            title: 'Lightning Fast',
            description: 'Optimized for performance at every level.',
          },
          {
            icon: <Shield size={24} />,
            title: 'Secure by Default',
            description: 'Enterprise-grade security with SOC2 compliance.',
          },
          {
            icon: <Rocket size={24} />,
            title: 'Scale Infinitely',
            description: 'Our infrastructure grows with your needs.',
          },
          {
            icon: <BarChart3 size={24} />,
            title: 'Analytics Built-in',
            description: 'Real-time insights and reporting.',
          },
          {
            icon: <Users size={24} />,
            title: 'Team Collaboration',
            description: 'Work together seamlessly.',
          },
          {
            icon: <Globe size={24} />,
            title: 'Global CDN',
            description: 'Content delivered from edge locations worldwide.',
          },
        ],
        columns: 3,
      }}
      stats={{
        eyebrow: 'By the Numbers',
        title: 'Trusted by thousands',
        stats: [
          { value: '10K+', label: 'Active Users' },
          { value: '99.9%', label: 'Uptime' },
          { value: '50M+', label: 'API Calls/Day' },
          { value: '150+', label: 'Countries' },
        ],
      }}
      pricing={{
        id: 'pricing',
        eyebrow: 'Pricing',
        title: 'Simple, transparent pricing',
        description: 'No hidden fees. No surprises. Cancel anytime.',
        plans: [
          {
            name: 'Starter',
            price: '$0',
            period: '/month',
            description: 'Perfect for individuals',
            features: [
              { text: '5 projects', included: true },
              { text: '10GB storage', included: true },
              { text: 'API access', included: false },
            ],
            action: (
              <Button variant="secondary" fullWidth>
                Get Started
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
              { text: 'API access', included: true },
            ],
            action: (
              <Button variant="primary" fullWidth>
                Start Free Trial
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
              { text: 'Dedicated support', included: true },
            ],
            action: (
              <Button variant="secondary" fullWidth>
                Contact Sales
              </Button>
            ),
          },
        ],
      }}
      testimonials={{
        id: 'testimonials',
        eyebrow: 'Testimonials',
        title: 'Loved by teams worldwide',
        testimonials: [
          {
            quote: 'This platform transformed how we build products.',
            author: {
              name: 'Sarah Chen',
              role: 'CTO',
              company: 'TechCorp',
              avatar: <img src="/avatars/sarah.jpg" alt="" />,
            },
          },
          {
            quote: 'The developer experience is unmatched.',
            author: {
              name: 'Mike Johnson',
              role: 'Lead Engineer',
              company: 'StartupXYZ',
              avatar: <img src="/avatars/mike.jpg" alt="" />,
            },
          },
        ],
      }}
      faq={{
        eyebrow: 'FAQ',
        title: 'Frequently asked questions',
        items: [
          {
            question: 'How do I get started?',
            answer: 'Sign up for a free account and follow our quick start guide.',
          },
          {
            question: 'Can I cancel my subscription anytime?',
            answer: 'Yes, you can cancel at any time with no penalties.',
          },
          {
            question: 'Is there a free tier?',
            answer: 'Yes! Our Starter plan is completely free.',
          },
        ],
      }}
      cta={{
        headline: 'Ready to get started?',
        description: 'Join thousands of teams already building with Acme.',
        actions: (
          <>
            <Button size="lg">Start Free Trial</Button>
            <Button variant="ghost" size="lg">
              Talk to Sales
            </Button>
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
              { label: 'Features', href: '#features' },
              { label: 'Pricing', href: '#pricing' },
            ],
          },
          {
            title: 'Company',
            links: [
              { label: 'About', href: '/about' },
              { label: 'Blog', href: '/blog' },
            ],
          },
        ],
        socialLinks: [
          { label: 'Twitter', href: 'https://twitter.com', icon: <Twitter size={20} /> },
          { label: 'GitHub', href: 'https://github.com', icon: <Github size={20} /> },
          { label: 'LinkedIn', href: 'https://linkedin.com', icon: <Linkedin size={20} /> },
        ],
        copyright: `${new Date().getFullYear()} Acme Inc. All rights reserved.`,
      }}
    />
  );
}
```

### Minimal Landing Page

```tsx
<LandingPageTemplate
  hero={{
    headline: 'Build Products 10x Faster',
    description: 'The all-in-one platform for modern teams.',
    primaryAction: <Button size="lg">Get Started</Button>,
    align: 'center',
    size: 'lg',
  }}
  features={{
    items: [
      { title: 'Fast', description: 'Lightning fast performance' },
      { title: 'Secure', description: 'Enterprise-grade security' },
      { title: 'Scalable', description: 'Grows with you' },
    ],
    columns: 3,
  }}
  cta={{
    headline: 'Ready to start?',
    actions: <Button size="lg">Sign Up Free</Button>,
  }}
  footer={{
    brand: { name: 'Acme' },
    copyright: '2024 Acme Inc.',
  }}
/>
```

### With Carousels

```tsx
<LandingPageTemplate
  hero={{ headline: 'Our Platform', ... }}
  featuredCarousel={{
    eyebrow: <Badge>Featured</Badge>,
    title: 'Latest Stories',
    items: [
      {
        image: <img src="/story1.jpg" alt="" />,
        eyebrow: 'Design',
        title: 'The Future of AI-First Design',
        description: 'How ML is reshaping interfaces',
        overlay: 'gradient',
      },
      // ... more items
    ],
  }}
  productCarousel={{
    title: 'Product Features',
    items: [
      {
        image: <img src="/feature1.jpg" alt="" />,
        title: 'Analytics Dashboard',
        description: 'Real-time insights',
      },
      // ... more items
    ],
  }}
  footer={{ ... }}
/>
```

### Product Launch Page

```tsx
<LandingPageTemplate
  navbar={{ ... }}
  hero={{
    badge: <Badge variant="success">Just Launched</Badge>,
    headline: 'Introducing Acme 2.0',
    description: 'The next generation is here.',
    primaryAction: <Button size="lg">Explore Now</Button>,
    align: 'center',
    size: 'lg',
    fullHeight: true,
  }}
  features={{
    title: "What's New in 2.0",
    items: [...],
  }}
  cta={{
    headline: 'Upgrade to Acme 2.0',
    description: 'Free for existing customers.',
    actions: <Button size="lg">Upgrade Now</Button>,
  }}
  footer={{ ... }}
/>
```

---

## Customization

### Custom Sections

Use `children` to add custom sections before the footer.

```tsx
<LandingPageTemplate
  hero={{ ... }}
  features={{ ... }}
>
  {/* Custom content before footer */}
  <section className="custom-section">
    <h2>Our Partners</h2>
    <PartnerGrid partners={partners} />
  </section>
</LandingPageTemplate>
```

### Section Backgrounds

Sections automatically alternate backgrounds. Control with `background` prop on individual sections.

---

## Accessibility

- Navbar uses semantic `<nav>` element
- Hero uses proper heading hierarchy
- Skip link available for keyboard users
- All interactive elements are focusable
- Proper ARIA labels on navigation
- FAQ uses accessible accordion pattern

---

## Anti-Patterns

### Missing Hero Section

```tsx
// WRONG - hero is required
<LandingPageTemplate
  features={{ items: [...] }}
  pricing={{ plans: [...] }}
/>

// CORRECT
<LandingPageTemplate
  hero={{ headline: 'Welcome' }}
  features={{ items: [...] }}
/>
```

### Using App Template Sections

```tsx
// WRONG - Don't use app sections in marketing templates
<LandingPageTemplate
  hero={{ headline: 'Welcome' }}
  sidebar={{ sections: [...] }}  // Sidebar is for app templates
  dataTable={{ columns: [...] }}  // DataTable is for app templates
/>

// CORRECT - Use marketing sections
<LandingPageTemplate
  hero={{ headline: 'Welcome' }}
  features={{ items: [...] }}
  pricing={{ plans: [...] }}
/>
```

### Inconsistent Eyebrows

```tsx
// WRONG - Inconsistent use of eyebrows
<LandingPageTemplate
  hero={{ headline: 'Welcome' }}
  features={{ title: 'Features' }}  // No eyebrow
  pricing={{ eyebrow: 'Pricing', title: 'Plans' }}  // Has eyebrow
/>

// CORRECT - Consistent eyebrows
<LandingPageTemplate
  hero={{ headline: 'Welcome' }}
  features={{ eyebrow: 'Features', title: 'Everything you need' }}
  pricing={{ eyebrow: 'Pricing', title: 'Simple pricing' }}
/>
```

---

## When to Use

| Scenario             | Recommendation |
| -------------------- | -------------- |
| Product landing page | Yes            |
| SaaS marketing site  | Yes            |
| Product launch       | Yes            |
| Company homepage     | Yes            |
| Feature showcase     | Yes            |

## When NOT to Use

| Scenario             | Use Instead           |
| -------------------- | --------------------- |
| Company about page   | `AboutPageTemplate`   |
| Contact page         | `ContactPageTemplate` |
| Pricing-focused page | `PricingPageTemplate` |
| Admin dashboard      | `DashboardTemplate`   |
| User settings        | `SettingsTemplate`    |

---

## Related

- **[Hero](../../../sections/Hero/README.md)** — Hero section
- **[Features](../../../sections/Features/README.md)** — Features grid
- **[Pricing](../../../sections/Pricing/README.md)** — Pricing cards
- **[Testimonials](../../../sections/Testimonials/README.md)** — Customer quotes
- **[FAQ](../../../sections/FAQ/README.md)** — FAQ accordion
- **[CTA](../../../sections/CTA/README.md)** — Call-to-action
- **[Footer](../../../sections/Footer/README.md)** — Page footer
