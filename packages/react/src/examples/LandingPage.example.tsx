/**
 * Landing Page Example
 *
 * A complete, copy-paste ready landing page using @orion/react sections.
 * This example demonstrates the recommended structure and composition
 * of Orion sections for building marketing pages.
 *
 * @example Usage
 * ```tsx
 * // In your app
 * import { LandingPageExample } from '@orion/react/examples';
 *
 * function App() {
 *   return <LandingPageExample />;
 * }
 * ```
 *
 * @module examples
 */

import React from 'react';

// Required CSS imports (must be at app root)
// import '@orion/core/theme.css';
// import '@orion/react/dist/react.css';

// Provider & Font Loading
import { ThemeProvider } from '../contexts';
import { FontLoader } from '../components/FontLoader';

// Components
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { Navbar } from '../components/Navbar';

// Sections
import { Hero } from '../sections/Hero';
import { Features } from '../sections/Features';
import { Stats } from '../sections/Stats';
import { Pricing } from '../sections/Pricing';
import { Testimonials } from '../sections/Testimonials';
import { FAQ } from '../sections/FAQ';
import { CTA } from '../sections/CTA';
import { Footer } from '../sections/Footer';
import { LogoCloud } from '../sections/LogoCloud';

// Icons from lucide-react
import { Zap, Shield, Rocket, BarChart3, Users, Globe } from 'lucide-react';

/**
 * Sample data for the landing page sections.
 * Replace with your actual content.
 */
const FEATURES = [
  {
    icon: <Zap size={24} />,
    title: 'Lightning Fast',
    description: 'Optimized for performance at every level. Sub-second load times guaranteed.',
  },
  {
    icon: <Shield size={24} />,
    title: 'Secure by Default',
    description: 'Enterprise-grade security with SOC2 compliance and end-to-end encryption.',
  },
  {
    icon: <Rocket size={24} />,
    title: 'Scale Infinitely',
    description: 'From startup to enterprise, our infrastructure grows with your needs.',
  },
  {
    icon: <BarChart3 size={24} />,
    title: 'Analytics Built-in',
    description: 'Real-time insights and reporting without the complexity.',
  },
  {
    icon: <Users size={24} />,
    title: 'Team Collaboration',
    description: 'Work together seamlessly with real-time collaboration features.',
  },
  {
    icon: <Globe size={24} />,
    title: 'Global CDN',
    description: 'Content delivered from edge locations worldwide for best performance.',
  },
];

const STATS = [
  { value: '10K+', label: 'Active Users' },
  { value: '99.9%', label: 'Uptime' },
  { value: '50M+', label: 'API Calls/Day' },
  { value: '150+', label: 'Countries' },
];

const PRICING_PLANS = [
  {
    name: 'Starter',
    price: '$0',
    period: '/month',
    description: 'Perfect for individuals and small projects',
    features: [
      { text: '5 projects', included: true },
      { text: '10GB storage', included: true },
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
    description: 'For growing teams and businesses',
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
        Start Free Trial
      </Button>
    ),
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations with specific needs',
    features: [
      { text: 'Everything in Pro', included: true },
      { text: 'Unlimited storage', included: true },
      { text: 'Custom integrations', included: true },
      { text: 'Dedicated support', included: true },
      { text: 'SLA guarantee', included: true },
      { text: 'On-premise option', included: true },
    ],
    action: (
      <Button variant="secondary" fullWidth>
        Contact Sales
      </Button>
    ),
  },
];

const TESTIMONIALS = [
  {
    quote:
      'This platform transformed how we build products. We shipped our MVP in half the time we expected.',
    author: {
      name: 'Sarah Chen',
      role: 'CTO',
      company: 'TechCorp',
      avatar: <img src="https://i.pravatar.cc/150?u=sarah" alt="" />,
    },
  },
  {
    quote:
      'The developer experience is unmatched. Our team productivity increased by 40% after switching.',
    author: {
      name: 'Mike Johnson',
      role: 'Lead Engineer',
      company: 'StartupXYZ',
      avatar: <img src="https://i.pravatar.cc/150?u=mike" alt="" />,
    },
  },
  {
    quote:
      'Finally, a design system that actually works. No more fighting with UI inconsistencies.',
    author: {
      name: 'Emily Rodriguez',
      role: 'Design Director',
      company: 'CreativeHub',
      avatar: <img src="https://i.pravatar.cc/150?u=emily" alt="" />,
    },
  },
];

const FAQ_ITEMS = [
  {
    question: 'How do I get started?',
    answer:
      "Sign up for a free account and follow our quick start guide. You'll be up and running in less than 5 minutes. Our onboarding wizard walks you through the essential setup steps.",
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer:
      'Yes, you can cancel your subscription at any time with no penalties. Your data will be retained for 30 days after cancellation, giving you time to export if needed.',
  },
  {
    question: 'Is there a free tier?',
    answer:
      'Yes! Our Starter plan is completely free and includes 5 projects, 10GB storage, and basic analytics. No credit card required to get started.',
  },
  {
    question: 'Do you offer discounts for startups or non-profits?',
    answer:
      'We offer 50% off for verified startups (under 2 years old, under $1M funding) and 75% off for registered non-profit organizations. Contact our sales team to apply.',
  },
  {
    question: 'What kind of support do you offer?',
    answer:
      'Starter plans get community support via our Discord and forums. Pro plans include priority email support with 24-hour response time. Enterprise plans get dedicated account managers and phone support.',
  },
];

const FOOTER_LINKS = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Changelog', href: '/changelog' },
      { label: 'Roadmap', href: '/roadmap' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Careers', href: '/careers' },
      { label: 'Press Kit', href: '/press' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '/docs' },
      { label: 'API Reference', href: '/api' },
      { label: 'Guides', href: '/guides' },
      { label: 'Community', href: '/community' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
      { label: 'GDPR', href: '/gdpr' },
    ],
  },
];

const LOGO_ITEMS = [
  {
    name: 'Company 1',
    logo: <img src="https://placehold.co/120x40/1f2937/9ca3af?text=Logo+1" alt="" />,
  },
  {
    name: 'Company 2',
    logo: <img src="https://placehold.co/120x40/1f2937/9ca3af?text=Logo+2" alt="" />,
  },
  {
    name: 'Company 3',
    logo: <img src="https://placehold.co/120x40/1f2937/9ca3af?text=Logo+3" alt="" />,
  },
  {
    name: 'Company 4',
    logo: <img src="https://placehold.co/120x40/1f2937/9ca3af?text=Logo+4" alt="" />,
  },
  {
    name: 'Company 5',
    logo: <img src="https://placehold.co/120x40/1f2937/9ca3af?text=Logo+5" alt="" />,
  },
];

/**
 * Complete Landing Page Example
 *
 * This component demonstrates the recommended structure for building
 * landing pages with @orion/react sections. Copy and customize for your needs.
 *
 * @remarks
 * IMPORTANT: In your actual app, you must import the CSS files at the root:
 * ```tsx
 * import '@orion/core/theme.css';
 * import '@orion/react/dist/react.css';
 * ```
 */
export function LandingPageExample(): React.ReactElement {
  return (
    <ThemeProvider>
      {/* FontLoader ensures all brand fonts are available */}
      <FontLoader />

      {/* ============================================
          NAVIGATION
          ============================================ */}
      <Navbar variant="solid" sticky>
        <Navbar.Brand href="/">
          {/* Replace with your logo */}
          <span style={{ fontWeight: 700, fontSize: 'var(--text-xl)' }}>Acme</span>
        </Navbar.Brand>
        <Navbar.Nav>
          <Navbar.Link href="#features">Features</Navbar.Link>
          <Navbar.Link href="#pricing">Pricing</Navbar.Link>
          <Navbar.Link href="#testimonials">Testimonials</Navbar.Link>
          <Navbar.Link href="#faq">FAQ</Navbar.Link>
        </Navbar.Nav>
        <Navbar.Actions>
          <Button variant="ghost">Sign In</Button>
          <Button variant="primary">Get Started</Button>
        </Navbar.Actions>
      </Navbar>

      {/* ============================================
          HERO SECTION
          ============================================ */}
      <Hero
        badge={<Badge variant="brand">Now in Public Beta</Badge>}
        title="Build Products 10x Faster"
        description="The all-in-one platform for modern development teams. Ship features, not infrastructure. Focus on what matters."
        primaryAction={<Button size="lg">Start Free Trial</Button>}
        secondaryAction={
          <Button variant="ghost" size="lg">
            Watch Demo
          </Button>
        }
        trustIndicators={
          <p style={{ color: 'var(--text-tertiary)', marginTop: 'var(--spacing-4)' }}>
            Trusted by 10,000+ developers worldwide
          </p>
        }
        align="center"
        size="lg"
      />

      {/* ============================================
          LOGO CLOUD (Social Proof)
          ============================================ */}
      <LogoCloud logos={LOGO_ITEMS} title="Trusted by industry leaders" />

      {/* ============================================
          FEATURES SECTION
          ============================================ */}
      <Features
        id="features"
        eyebrow="Features"
        title="Everything you need to ship faster"
        description="Built for modern teams who value speed, quality, and developer experience."
        items={FEATURES}
        columns={3}
      />

      {/* ============================================
          STATS SECTION
          ============================================ */}
      <Stats eyebrow="By the Numbers" title="Trusted by thousands" stats={STATS} />

      {/* ============================================
          PRICING SECTION
          ============================================ */}
      <Pricing
        id="pricing"
        eyebrow="Pricing"
        title="Simple, transparent pricing"
        description="No hidden fees. No surprises. Cancel anytime."
        plans={PRICING_PLANS}
      />

      {/* ============================================
          TESTIMONIALS SECTION
          ============================================ */}
      <Testimonials
        id="testimonials"
        eyebrow="Testimonials"
        title="Loved by teams worldwide"
        description="See what our customers have to say about their experience."
        testimonials={TESTIMONIALS}
      />

      {/* ============================================
          FAQ SECTION
          ============================================ */}
      <FAQ
        id="faq"
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Can't find what you're looking for? Contact our support team."
        items={FAQ_ITEMS}
      />

      {/* ============================================
          CTA SECTION
          ============================================ */}
      <CTA
        title="Ready to get started?"
        description="Join thousands of teams already building with Acme. Start your free trial today."
        actions={
          <>
            <Button size="lg">Start Free Trial</Button>
            <Button variant="ghost" size="lg">
              Talk to Sales
            </Button>
          </>
        }
      />

      {/* ============================================
          FOOTER
          ============================================ */}
      <Footer
        brand={{
          name: 'Acme Inc',
          description: 'Building the future of development, one feature at a time.',
        }}
        linkGroups={FOOTER_LINKS}
        socialLinks={[
          { label: 'Twitter', href: 'https://twitter.com/acme', icon: <Globe size={20} /> },
          { label: 'GitHub', href: 'https://github.com/acme', icon: <Globe size={20} /> },
          {
            label: 'LinkedIn',
            href: 'https://linkedin.com/company/acme',
            icon: <Globe size={20} />,
          },
          { label: 'YouTube', href: 'https://youtube.com/@acme', icon: <Globe size={20} /> },
        ]}
        copyright={`${new Date().getFullYear()} Acme Inc. All rights reserved.`}
      />
    </ThemeProvider>
  );
}

export default LandingPageExample;
