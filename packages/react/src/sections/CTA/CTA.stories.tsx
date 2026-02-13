import type { Meta, StoryObj } from '@storybook/react';
import { CTA } from './CTA';
import { Button } from '../../components/Button';

const meta = {
  title: 'Sections/Marketing/CTA',
  component: CTA,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'brand', 'subtle', 'outline'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    align: {
      control: 'select',
      options: ['left', 'center'],
    },
  },
} satisfies Meta<typeof CTA>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headline: 'Ready to get started?',
    description: 'Join thousands of developers building with Orion.',
    actions: (
      <div
        style={{
          display: 'flex',
          gap: 'var(--spacing-3)',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <Button size="lg">Start Free Trial</Button>
        <Button size="lg" variant="secondary">
          Contact Sales
        </Button>
      </div>
    ),
  },
};

export const BrandVariant: Story = {
  args: {
    variant: 'brand',
    headline: 'Start building today',
    description: 'Get access to all components and features.',
    actions: (
      <Button size="lg" variant="secondary">
        Get Started
      </Button>
    ),
  },
};

export const SubtleVariant: Story = {
  args: {
    variant: 'subtle',
    headline: 'Have questions?',
    description: 'Our team is here to help.',
    actions: <Button size="lg">Talk to Us</Button>,
  },
};

export const OutlineVariant: Story = {
  args: {
    variant: 'outline',
    headline: 'Join our newsletter',
    description: 'Stay updated with the latest features and releases.',
    actions: <Button>Subscribe</Button>,
  },
};

export const LeftAligned: Story = {
  args: {
    align: 'left',
    headline: 'Ready to scale?',
    description: 'Enterprise solutions for growing teams.',
    actions: (
      <div style={{ display: 'flex', gap: 'var(--spacing-3)' }}>
        <Button size="lg">Book Demo</Button>
        <Button size="lg" variant="ghost">
          Learn More
        </Button>
      </div>
    ),
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    headline: 'The future of design systems',
    description: 'Experience the power of AI-first component libraries.',
    actions: <Button size="lg">Explore Now</Button>,
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    headline: 'Quick question?',
    description: 'Check our FAQ or reach out.',
    actions: <Button size="sm">Contact Support</Button>,
  },
};

export const WithFootnote: Story = {
  args: {
    headline: 'Start your free trial',
    description: 'No credit card required.',
    actions: <Button size="lg">Get Started Free</Button>,
    footnote: '14-day free trial • Cancel anytime',
  },
};

export const NotContained: Story = {
  args: {
    contained: false,
    headline: 'Full width CTA',
    description: 'Spans the entire section without container.',
    actions: <Button size="lg">Learn More</Button>,
  },
};
