import type { Meta, StoryObj } from '@storybook/react';
import { FAQ } from './FAQ';

const meta = {
  title: 'Sections/Marketing/FAQ',
  component: FAQ,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: 'select',
      options: [1, 2],
    },
    variant: {
      control: 'select',
      options: ['accordion', 'grid'],
    },
    background: {
      control: 'select',
      options: ['base', 'subtle', 'none'],
    },
  },
} satisfies Meta<typeof FAQ>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultItems = [
  {
    question: 'How do I get started with Orion?',
    answer:
      'Simply install the package via npm or yarn, import the components you need, and start building. Check our getting started guide for detailed instructions.',
  },
  {
    question: 'Is Orion free to use?',
    answer:
      'Yes! Orion is open source and free to use in both personal and commercial projects under the MIT license.',
  },
  {
    question: 'Does Orion support dark mode?',
    answer:
      'Absolutely. Orion has built-in dark mode support with automatic detection of system preferences and manual toggle options.',
  },
  {
    question: 'Can I customize the design tokens?',
    answer:
      'Yes, all design tokens are fully customizable. You can override colors, spacing, typography, and more to match your brand.',
  },
  {
    question: 'Is Orion accessible?',
    answer:
      'Accessibility is a core priority. All components are WCAG 2.1 AA compliant with proper ARIA attributes and keyboard navigation.',
  },
  {
    question: 'What frameworks does Orion support?',
    answer:
      'Orion currently supports React and Vue 3, with more frameworks planned for future releases.',
  },
];

export const Default: Story = {
  args: {
    title: 'Frequently Asked Questions',
    items: defaultItems,
  },
};

export const WithDescription: Story = {
  args: {
    title: 'FAQ',
    description: 'Find answers to the most common questions about Orion.',
    items: defaultItems,
  },
};

export const TwoColumns: Story = {
  args: {
    title: 'Common Questions',
    items: defaultItems,
    columns: 2,
  },
};

export const GridVariant: Story = {
  args: {
    title: 'Questions & Answers',
    items: defaultItems,
    variant: 'grid',
    columns: 2,
  },
};

export const WithEyebrow: Story = {
  args: {
    eyebrow: 'Support',
    title: 'How can we help?',
    items: defaultItems.slice(0, 4),
  },
};

export const SubtleBackground: Story = {
  args: {
    title: 'FAQ',
    items: defaultItems,
    background: 'subtle',
  },
};

export const SingleOpen: Story = {
  args: {
    title: 'Questions',
    items: defaultItems,
    allowMultiple: false,
  },
};

export const WithDefaultOpen: Story = {
  args: {
    title: 'Getting Started',
    items: [
      {
        question: 'How do I get started with Orion?',
        answer:
          'Simply install the package via npm or yarn, import the components you need, and start building.',
        defaultOpen: true,
      },
      ...defaultItems.slice(1),
    ],
  },
};
