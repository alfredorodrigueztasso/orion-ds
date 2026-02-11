import type { Meta, StoryObj } from '@storybook/react';
import { ContactPageTemplate } from './ContactPageTemplate';
import { Button } from '../../../components/Button';
import { Badge } from '../../../components/Badge';
import { Navbar } from '../../../components/Navbar';
import {
  Twitter,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
} from 'lucide-react';

const meta: Meta<typeof ContactPageTemplate> = {
  title: 'Templates/Marketing/Contact',
  component: ContactPageTemplate,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A complete contact page template with contact form, office locations, and FAQ.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ContactPageTemplate>;

// Sample data
const CONTACT_INFO = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: 'hello@acme.com',
    href: 'mailto:hello@acme.com',
  },
  {
    icon: <Phone size={20} />,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: <MapPin size={20} />,
    label: 'Address',
    value: '123 Market St, San Francisco, CA 94105',
  },
  {
    icon: <Clock size={20} />,
    label: 'Hours',
    value: 'Mon-Fri 9am-6pm PST',
  },
];

const CONTACT_FORM_FIELDS: Array<{
  name: string;
  label: string;
  type?: 'text' | 'email' | 'tel' | 'textarea';
  placeholder?: string;
  required?: boolean;
  rows?: number;
}> = [
  {
    name: 'name',
    label: 'Full name',
    type: 'text',
    placeholder: 'John Doe',
    required: true,
  },
  {
    name: 'email',
    label: 'Email address',
    type: 'email',
    placeholder: 'john@example.com',
    required: true,
  },
  {
    name: 'company',
    label: 'Company',
    type: 'text',
    placeholder: 'Acme Inc',
  },
  {
    name: 'subject',
    label: 'Subject',
    type: 'text',
    placeholder: 'How can we help?',
    required: true,
  },
  {
    name: 'message',
    label: 'Message',
    type: 'textarea',
    placeholder: 'Tell us more about your project...',
    required: true,
    rows: 5,
  },
];

const CONTACT_FAQ = [
  {
    question: 'What is your response time?',
    answer: 'We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call our support line.',
  },
  {
    question: 'Do you offer phone support?',
    answer: 'Phone support is available for Pro and Enterprise customers. Starter plan customers can reach us via email or our community forum.',
  },
  {
    question: 'Where are your offices located?',
    answer: 'Our headquarters is in San Francisco, with additional offices in London, Singapore, and Sydney.',
  },
  {
    question: 'How do I report a bug?',
    answer: 'You can report bugs through our GitHub repository or by emailing support@acme.com with details and steps to reproduce.',
  },
];

const LOCATIONS_CAROUSEL_ITEMS = [
  {
    image: <img src="https://picsum.photos/800/600?random=50" alt="" />,
    title: 'San Francisco',
    description: '123 Market St, CA 94105',
  },
  {
    image: <img src="https://picsum.photos/800/600?random=51" alt="" />,
    title: 'London',
    description: '10 Downing St, London SW1A',
  },
  {
    image: <img src="https://picsum.photos/800/600?random=52" alt="" />,
    title: 'Singapore',
    description: '1 Raffles Place, Singapore',
  },
  {
    image: <img src="https://picsum.photos/800/600?random=53" alt="" />,
    title: 'Sydney',
    description: '1 George St, Sydney NSW',
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
 * Default contact page with all sections
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
            <Navbar.Link href="/pricing">Pricing</Navbar.Link>
            <Navbar.Link href="/about">About</Navbar.Link>
            <Navbar.Link href="/contact" active>Contact</Navbar.Link>
          </Navbar.Nav>
          <Navbar.Actions>
            <Button variant="ghost">Sign In</Button>
            <Button variant="primary">Get Started</Button>
          </Navbar.Actions>
        </>
      ),
    },
    hero: {
      headline: 'Get in touch',
      description: "Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
      align: 'center',
      size: 'sm',
    },
    contact: {
      title: 'Contact us',
      description: 'Fill out the form below and we\'ll get back to you within 24 hours.',
      contactInfo: CONTACT_INFO,
      formFields: CONTACT_FORM_FIELDS,
      onSubmit: (data) => console.log('Form submitted:', data),
      layout: 'split',
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Frequently asked questions',
      description: 'Find answers to common questions below.',
      items: CONTACT_FAQ,
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
 * Contact page with office locations carousel
 */
export const WithLocations: Story = {
  args: {
    ...Default.args,
    hero: {
      badge: <Badge variant="brand"><MapPin size={14} style={{ marginRight: 4 }} /> Our Offices</Badge>,
      headline: 'Visit us',
      description: 'We have offices around the world. Stop by and say hello!',
      align: 'center',
      size: 'sm',
    },
    locationsCarousel: {
      eyebrow: 'Locations',
      title: 'Our offices',
      description: 'Find an office near you',
      items: LOCATIONS_CAROUSEL_ITEMS,
    },
  },
};

/**
 * Sales contact page
 */
export const SalesContact: Story = {
  args: {
    navbar: Default.args?.navbar,
    hero: {
      badge: <Badge variant="brand">Enterprise</Badge>,
      headline: 'Talk to sales',
      description: 'Ready to get started? Our sales team is here to help you find the right solution.',
      primaryAction: <Button size="lg">Schedule a Demo</Button>,
      align: 'center',
      size: 'md',
    },
    contact: {
      title: 'Request a demo',
      description: 'Fill out the form and our team will reach out within 24 hours.',
      formFields: [
        {
          name: 'name',
          label: 'Full name',
          type: 'text',
          required: true,
        },
        {
          name: 'email',
          label: 'Work email',
          type: 'email',
          required: true,
        },
        {
          name: 'company',
          label: 'Company name',
          type: 'text',
          required: true,
        },
        {
          name: 'employees',
          label: 'Company size',
          type: 'text',
          placeholder: 'e.g., 50-100',
        },
        {
          name: 'message',
          label: 'Tell us about your needs',
          type: 'textarea',
          rows: 4,
        },
      ],
      onSubmit: (data) => console.log('Demo request:', data),
      submitText: 'Request Demo',
      layout: 'form-only',
    },
    faq: {
      title: 'Enterprise FAQ',
      items: [
        {
          question: 'What is included in the Enterprise plan?',
          answer: 'Enterprise includes unlimited users, SSO/SAML, audit logs, dedicated support, custom SLA, and on-premise deployment options.',
        },
        {
          question: 'Can I get a custom contract?',
          answer: 'Yes, we offer custom contracts for Enterprise customers with specific requirements.',
        },
        {
          question: 'Do you offer POC/pilot programs?',
          answer: 'Yes, we offer pilot programs to help you evaluate the product before committing.',
        },
      ],
    },
    footer: Default.args?.footer,
  },
};

/**
 * Support contact page
 */
export const SupportContact: Story = {
  args: {
    navbar: Default.args?.navbar,
    hero: {
      badge: <Badge variant="info"><MessageSquare size={14} style={{ marginRight: 4 }} /> Support</Badge>,
      headline: 'How can we help?',
      description: 'Our support team is here to assist you with any questions or issues.',
      align: 'center',
      size: 'sm',
    },
    contact: {
      title: 'Submit a ticket',
      description: "Describe your issue and we'll get back to you ASAP.",
      contactInfo: [
        {
          icon: <Mail size={20} />,
          label: 'Email',
          value: 'support@acme.com',
          href: 'mailto:support@acme.com',
        },
        {
          icon: <Clock size={20} />,
          label: 'Response time',
          value: 'Within 24 hours',
        },
      ],
      formFields: [
        {
          name: 'email',
          label: 'Your email',
          type: 'email',
          required: true,
        },
        {
          name: 'subject',
          label: 'Subject',
          type: 'text',
          required: true,
        },
        {
          name: 'priority',
          label: 'Priority',
          type: 'text',
          placeholder: 'Low / Medium / High',
        },
        {
          name: 'message',
          label: 'Describe your issue',
          type: 'textarea',
          required: true,
          rows: 6,
        },
      ],
      onSubmit: (data) => console.log('Support ticket:', data),
      submitText: 'Submit Ticket',
      layout: 'split',
    },
    faq: {
      title: 'Common issues',
      items: CONTACT_FAQ,
    },
    footer: Default.args?.footer,
  },
};

/**
 * Minimal contact page
 */
export const Minimal: Story = {
  args: {
    hero: {
      headline: 'Contact us',
      description: "We'd love to hear from you.",
      align: 'center',
      size: 'sm',
    },
    contact: {
      contactInfo: CONTACT_INFO.slice(0, 2),
      formFields: CONTACT_FORM_FIELDS.filter(f => ['name', 'email', 'message'].includes(f.name)),
      onSubmit: (data) => console.log('Contact:', data),
      layout: 'stacked',
    },
    footer: {
      brand: { name: 'Acme' },
      copyright: `${new Date().getFullYear()} Acme Inc.`,
    },
  },
};
