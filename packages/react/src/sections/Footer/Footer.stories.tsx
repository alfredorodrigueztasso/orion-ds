import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';
import { Twitter, Github, MessageCircle } from 'lucide-react';

const meta = {
  title: 'Sections/Marketing/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'minimal', 'centered'],
    },
    background: {
      control: 'select',
      options: ['base', 'subtle', 'none'],
    },
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultLinks = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#' },
      { label: 'Pricing', href: '#' },
      { label: 'Changelog', href: '#' },
      { label: 'Roadmap', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '#' },
      { label: 'API Reference', href: '#' },
      { label: 'Guides', href: '#' },
      { label: 'Examples', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
      { label: 'License', href: '#' },
    ],
  },
];

const socialLinks = [
  { label: 'Twitter', href: '#', icon: <Twitter size={20} /> },
  { label: 'GitHub', href: '#', icon: <Github size={20} /> },
  { label: 'Discord', href: '#', icon: <MessageCircle size={20} /> },
];

export const Default: Story = {
  args: {
    brand: {
      name: 'Orion',
      logo: (
        <span style={{ fontSize: 'var(--font-size-24)', fontWeight: 'var(--font-weight-bold)' }}>
          ✦
        </span>
      ),
      description: 'The AI-first design system for modern web applications.',
    },
    linkGroups: defaultLinks,
    copyright: '© 2024 Orion. All rights reserved.',
  },
};

export const WithSocial: Story = {
  args: {
    brand: {
      name: 'Orion',
      logo: (
        <span style={{ fontSize: 'var(--font-size-24)', fontWeight: 'var(--font-weight-bold)' }}>
          ✦
        </span>
      ),
      description: 'Building the future of design systems.',
    },
    linkGroups: defaultLinks.slice(0, 3),
    socialLinks,
    copyright: '© 2024 Orion. All rights reserved.',
  },
};

export const Simple: Story = {
  args: {
    brand: {
      name: 'Orion',
      logo: (
        <span style={{ fontSize: 'var(--font-size-24)', fontWeight: 'var(--font-weight-bold)' }}>
          ✦
        </span>
      ),
    },
    copyright: '© 2024 Orion. All rights reserved.',
    legalLinks: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
};

export const WithLegalLinks: Story = {
  args: {
    brand: {
      name: 'Orion',
      description: 'Stay updated with our newsletter.',
    },
    linkGroups: defaultLinks.slice(0, 2),
    legalLinks: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
    copyright: '© 2024 Orion. All rights reserved.',
  },
};

export const Minimal: Story = {
  args: {
    brand: {
      name: 'Orion',
    },
    copyright: '© 2024 Orion',
    variant: 'minimal',
  },
};
