import type { Meta, StoryObj } from '@storybook/react';
import { Testimonials } from './Testimonials';
import { Avatar } from '../../components/Avatar';

const meta = {
  title: 'Sections/Marketing/Testimonials',
  component: Testimonials,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: 'select',
      options: [1, 2, 3],
    },
    variant: {
      control: 'select',
      options: ['default', 'cards', 'minimal'],
    },
    background: {
      control: 'select',
      options: ['base', 'subtle', 'none'],
    },
  },
} satisfies Meta<typeof Testimonials>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultTestimonials = [
  {
    quote:
      'Orion has completely transformed how we build products. The component library is incredibly well thought out and saves us countless hours.',
    author: {
      name: 'Sarah Chen',
      role: 'VP of Engineering',
      company: 'TechCorp',
      avatar: <Avatar initials="SC" size="md" />,
    },
    rating: 5,
  },
  {
    quote:
      'The best design system I have ever used. The documentation is excellent and the components just work perfectly together.',
    author: {
      name: 'Michael Johnson',
      role: 'Lead Designer',
      company: 'DesignStudio',
      avatar: <Avatar initials="MJ" size="md" />,
    },
    rating: 5,
  },
  {
    quote:
      'We migrated our entire platform to Orion in just two weeks. The TypeScript support is fantastic.',
    author: {
      name: 'Emily Davis',
      role: 'CTO',
      company: 'StartupXYZ',
      avatar: <Avatar initials="ED" size="md" />,
    },
    rating: 5,
  },
];

export const Default: Story = {
  args: {
    title: 'What our customers say',
    testimonials: defaultTestimonials,
  },
};

export const SingleColumn: Story = {
  args: {
    title: 'Customer Stories',
    testimonials: defaultTestimonials,
    columns: 1,
  },
};

export const TwoColumns: Story = {
  args: {
    title: 'Testimonials',
    testimonials: defaultTestimonials.slice(0, 2),
    columns: 2,
  },
};

export const CardsVariant: Story = {
  args: {
    title: 'Loved by developers',
    testimonials: defaultTestimonials,
    variant: 'cards',
  },
};

export const MinimalVariant: Story = {
  args: {
    title: 'What people are saying',
    testimonials: defaultTestimonials,
    variant: 'minimal',
  },
};

export const WithEyebrow: Story = {
  args: {
    eyebrow: 'Testimonials',
    title: 'Trusted by industry leaders',
    description: 'See what our customers have to say about their experience.',
    testimonials: defaultTestimonials,
  },
};

export const SubtleBackground: Story = {
  args: {
    title: 'Customer Reviews',
    testimonials: defaultTestimonials,
    background: 'subtle',
  },
};

export const WithoutRatings: Story = {
  args: {
    title: 'What they say',
    testimonials: defaultTestimonials.map(({ rating, ...rest }) => rest),
  },
};
