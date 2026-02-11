import type { Meta, StoryObj } from '@storybook/react';
import { PricingPageTemplate } from './PricingPageTemplate';
import { Button } from '../../../components/Button';
import { Badge } from '../../../components/Badge';
import { Navbar } from '../../../components/Navbar';
import { Twitter, Github, Linkedin } from 'lucide-react';

const meta: Meta<typeof PricingPageTemplate> = {
  title: 'Templates/Marketing/Pricing',
  component: PricingPageTemplate,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A complete pricing page template with pricing cards, comparison table, and FAQ.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PricingPageTemplate>;

// Sample data
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
    action: <Button variant="secondary" fullWidth>Get Started Free</Button>,
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
    action: <Button variant="primary" fullWidth>Start Free Trial</Button>,
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
    action: <Button variant="secondary" fullWidth>Contact Sales</Button>,
  },
];

const COMPARISON_COLUMNS = [
  { title: 'Starter', subtitle: 'Free' },
  { title: 'Pro', subtitle: '$29/mo', highlighted: true, badge: 'Popular' },
  { title: 'Enterprise', subtitle: 'Custom' },
];

const COMPARISON_FEATURES = [
  { name: 'Projects', category: 'Usage', values: ['5', 'Unlimited', 'Unlimited'] },
  { name: 'Storage', category: 'Usage', values: ['10GB', '100GB', 'Unlimited'] },
  { name: 'Team members', category: 'Usage', values: ['1', '10', 'Unlimited'] },
  { name: 'Analytics', category: 'Features', values: ['Basic', 'Advanced', 'Advanced'] },
  { name: 'API access', category: 'Features', values: [false, true, true] },
  { name: 'Custom domain', category: 'Features', values: [false, true, true] },
  { name: 'White-label', category: 'Features', values: [false, false, true] },
  { name: 'SSO/SAML', category: 'Security', values: [false, false, true] },
  { name: 'Audit logs', category: 'Security', values: [false, true, true] },
  { name: 'Support', category: 'Support', values: ['Community', 'Priority email', 'Dedicated'] },
  { name: 'SLA', category: 'Support', values: [false, false, '99.99%'] },
];

const PRICING_FAQ = [
  {
    question: 'Can I switch plans later?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. When upgrading, you\'ll be charged the prorated difference. When downgrading, the credit will be applied to future invoices.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, Mastercard, American Express) and PayPal. Enterprise customers can also pay via invoice and wire transfer.',
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes! Pro plan includes a 14-day free trial with full access to all features. No credit card required to start.',
  },
  {
    question: 'What happens when I exceed my storage limit?',
    answer: 'We\'ll notify you when you\'re approaching your limit. You can either upgrade your plan or purchase additional storage. We\'ll never delete your data without notice.',
  },
  {
    question: 'Do you offer discounts for annual billing?',
    answer: 'Yes, annual billing saves you 20% compared to monthly billing. The discount is applied automatically when you select annual billing.',
  },
  {
    question: 'Can I get a refund?',
    answer: 'We offer a 30-day money-back guarantee for all paid plans. If you\'re not satisfied, contact support for a full refund.',
  },
];

const FEATURES_CAROUSEL_ITEMS = [
  {
    image: <img src="https://picsum.photos/800/600?random=10" alt="" />,
    title: 'Real-time Analytics',
    description: 'Track your metrics as they happen',
  },
  {
    image: <img src="https://picsum.photos/800/600?random=11" alt="" />,
    title: 'Team Collaboration',
    description: 'Work together seamlessly',
  },
  {
    image: <img src="https://picsum.photos/800/600?random=12" alt="" />,
    title: 'API Integration',
    description: 'Connect with your favorite tools',
  },
  {
    image: <img src="https://picsum.photos/800/600?random=13" alt="" />,
    title: 'Custom Dashboards',
    description: 'Build dashboards that fit your needs',
  },
];

const FOOTER_LINKS = [
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
      { label: 'Blog', href: '/blog' },
      { label: 'Careers', href: '/careers' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Documentation', href: '/docs' },
      { label: 'Contact', href: '/contact' },
      { label: 'Status', href: '/status' },
    ],
  },
];

/**
 * Default pricing page with all sections
 */
export const Default: Story = {
  args: {
    navbar: {
      variant: 'solid',
      sticky: true,
      children: (
        <>
          <Navbar.Brand href="/">
            <span style={{ fontWeight: 700, fontSize: 'var(--text-xl)' }}>Acme</span>
          </Navbar.Brand>
          <Navbar.Nav>
            <Navbar.Link href="/features">Features</Navbar.Link>
            <Navbar.Link href="/pricing" active>Pricing</Navbar.Link>
            <Navbar.Link href="/docs">Docs</Navbar.Link>
          </Navbar.Nav>
          <Navbar.Actions>
            <Button variant="ghost">Sign In</Button>
            <Button variant="primary">Get Started</Button>
          </Navbar.Actions>
        </>
      ),
    },
    hero: {
      headline: 'Simple, transparent pricing',
      description: 'Choose the plan that fits your needs. All plans include a 14-day free trial.',
      align: 'center',
      size: 'sm',
    },
    pricing: {
      plans: PRICING_PLANS,
    },
    comparison: {
      eyebrow: 'Compare Plans',
      title: 'Feature comparison',
      description: 'See what\'s included in each plan',
      columns: COMPARISON_COLUMNS,
      features: COMPARISON_FEATURES,
      showCategories: true,
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Pricing questions',
      description: 'Everything you need to know about our pricing',
      items: PRICING_FAQ,
    },
    cta: {
      headline: 'Still have questions?',
      description: 'Our team is here to help you find the right plan.',
      actions: (
        <>
          <Button size="lg">Contact Sales</Button>
          <Button variant="ghost" size="lg">Schedule Demo</Button>
        </>
      ),
    },
    footer: {
      brand: {
        name: 'Acme Inc',
        description: 'Building the future of development.',
      },
      linkGroups: FOOTER_LINKS,
      socialLinks: [
        { label: 'Twitter', href: 'https://twitter.com', icon: <Twitter size={20} /> },
        { label: 'GitHub', href: 'https://github.com', icon: <Github size={20} /> },
        { label: 'LinkedIn', href: 'https://linkedin.com', icon: <Linkedin size={20} /> },
      ],
      copyright: `${new Date().getFullYear()} Acme Inc. All rights reserved.`,
    },
  },
};

/**
 * Pricing page with features carousel
 */
export const WithFeaturesCarousel: Story = {
  args: {
    ...Default.args,
    hero: {
      badge: <Badge variant="brand">New Plans Available</Badge>,
      headline: 'Pricing that scales with you',
      description: 'From startups to enterprises, we have a plan that fits your needs.',
      align: 'center',
      size: 'md',
    },
    featuresCarousel: {
      title: 'What you get',
      description: 'All plans include these powerful features',
      items: FEATURES_CAROUSEL_ITEMS,
    },
  },
};

/**
 * Minimal pricing page
 */
export const Minimal: Story = {
  args: {
    hero: {
      headline: 'Choose your plan',
      description: 'Start free, upgrade when you need.',
      align: 'center',
      size: 'sm',
    },
    pricing: {
      plans: PRICING_PLANS,
    },
    faq: {
      title: 'Common questions',
      items: PRICING_FAQ.slice(0, 4),
    },
    footer: {
      brand: { name: 'Acme' },
      copyright: `${new Date().getFullYear()} Acme Inc.`,
    },
  },
};

/**
 * Enterprise-focused pricing page
 */
export const Enterprise: Story = {
  args: {
    navbar: Default.args?.navbar,
    hero: {
      badge: <Badge variant="brand">Enterprise</Badge>,
      headline: 'Built for scale',
      description: 'Secure, reliable, and enterprise-ready. Trusted by Fortune 500 companies.',
      primaryAction: <Button size="lg">Contact Sales</Button>,
      secondaryAction: <Button variant="ghost" size="lg">View Demo</Button>,
      align: 'center',
      size: 'md',
    },
    pricing: {
      plans: PRICING_PLANS,
      centered: true,
    },
    comparison: {
      title: 'Enterprise features',
      columns: COMPARISON_COLUMNS,
      features: COMPARISON_FEATURES.filter(f => f.category === 'Security' || f.category === 'Support'),
    },
    faq: {
      title: 'Enterprise FAQ',
      items: [
        {
          question: 'What security certifications do you have?',
          answer: 'We are SOC2 Type II certified, GDPR compliant, and ISO 27001 certified. We also support HIPAA compliance for healthcare customers.',
        },
        {
          question: 'Do you offer on-premise deployment?',
          answer: 'Yes, Enterprise plans include the option for on-premise or hybrid deployment. Our team will work with you to design the right architecture.',
        },
        {
          question: 'What SLA do you offer?',
          answer: 'Enterprise plans include a 99.99% uptime SLA with financial credits for any downtime.',
        },
      ],
    },
    cta: {
      headline: 'Ready to talk?',
      description: 'Our enterprise team is ready to help you get started.',
      actions: <Button size="lg">Schedule a Call</Button>,
      variant: 'brand',
    },
    footer: Default.args?.footer,
  },
};
