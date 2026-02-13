import type { Meta, StoryObj } from '@storybook/react';
import { Blog } from './Blog';

const meta = {
  title: 'Sections/Marketing/Blog',
  component: Blog,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: 'select',
      options: [2, 3, 4],
    },
    layout: {
      control: 'select',
      options: ['grid', 'list', 'featured'],
    },
    background: {
      control: 'select',
      options: ['base', 'subtle', 'none'],
    },
  },
} satisfies Meta<typeof Blog>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArticles = [
  {
    id: '1',
    title: 'Getting Started with Orion',
    excerpt: 'Learn how to set up and use the Orion design system in your projects.',
    date: 'Jan 15, 2024',
    author: { name: 'Sarah Chen' },
    category: 'Tutorial',
    href: '#',
    readTime: 5,
  },
  {
    id: '2',
    title: 'Design Tokens Deep Dive',
    excerpt: 'Understanding the token system that powers Orion components.',
    date: 'Jan 10, 2024',
    author: { name: 'Michael Johnson' },
    category: 'Architecture',
    href: '#',
    readTime: 8,
  },
  {
    id: '3',
    title: 'Building Accessible Components',
    excerpt: 'Best practices for creating inclusive user interfaces.',
    date: 'Jan 5, 2024',
    author: { name: 'Emily Davis' },
    category: 'Accessibility',
    href: '#',
    readTime: 6,
  },
];

export const Default: Story = {
  args: {
    title: 'Latest from our blog',
    articles: defaultArticles,
  },
};

export const WithDescription: Story = {
  args: {
    title: 'Blog',
    description: 'Insights, tutorials, and updates from the Orion team.',
    articles: defaultArticles,
  },
};

export const TwoColumns: Story = {
  args: {
    title: 'Recent Posts',
    articles: defaultArticles.slice(0, 2),
    columns: 2,
  },
};

export const WithEyebrow: Story = {
  args: {
    eyebrow: 'Blog',
    title: 'Read our latest articles',
    articles: defaultArticles,
  },
};

export const SubtleBackground: Story = {
  args: {
    title: 'From the Blog',
    articles: defaultArticles,
    background: 'subtle',
  },
};

export const FeaturedLayout: Story = {
  args: {
    title: 'Featured Articles',
    articles: defaultArticles,
    layout: 'featured',
  },
};

export const ListLayout: Story = {
  args: {
    title: 'All Articles',
    articles: defaultArticles,
    layout: 'list',
  },
};

export const WithViewAll: Story = {
  args: {
    title: 'Latest Posts',
    articles: defaultArticles,
    viewAllHref: '#',
    viewAllText: 'View all posts',
  },
};
