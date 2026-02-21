/**
 * Preview module for Blog section
 * Versatile blog/article list section for displaying posts
 */

import React from 'react';
import { Blog } from '@orion-ds/react';

const sampleArticles = [
  {
    id: 1,
    title: 'Getting Started with AI-First Design',
    excerpt: 'Learn the fundamentals of building design systems that AI agents can understand and work with effectively.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
    category: 'Design Systems',
    author: { name: 'Sarah Johnson', avatar: 'https://i.pravatar.cc/150?img=1' },
    date: 'Feb 15, 2024',
    readTime: 8,
    href: '#',
    tags: ['Design', 'AI', 'Best Practices'],
  },
  {
    id: 2,
    title: 'Building Scalable Component Libraries',
    excerpt: 'A comprehensive guide to creating modular, reusable components that scale with your product.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
    category: 'Development',
    author: { name: 'Michael Chen', avatar: 'https://i.pravatar.cc/150?img=2' },
    date: 'Feb 12, 2024',
    readTime: 12,
    href: '#',
    tags: ['React', 'TypeScript', 'Components'],
  },
  {
    id: 3,
    title: 'Token-Based Theming Best Practices',
    excerpt: 'Master the art of design tokens to create consistent, maintainable themes across your entire product.',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop',
    category: 'Theming',
    author: { name: 'Emily Rodriguez', avatar: 'https://i.pravatar.cc/150?img=3' },
    date: 'Feb 10, 2024',
    readTime: 6,
    href: '#',
    tags: ['Tokens', 'CSS', 'Theming'],
  },
  {
    id: 4,
    title: 'Accessibility in Modern Design Systems',
    excerpt: 'Ensure your components are accessible to all users with these essential accessibility patterns and techniques.',
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop',
    category: 'Accessibility',
    author: { name: 'David Kim', avatar: 'https://i.pravatar.cc/150?img=4' },
    date: 'Feb 8, 2024',
    readTime: 10,
    href: '#',
    tags: ['A11y', 'WCAG', 'Inclusive Design'],
  },
  {
    id: 5,
    title: 'Performance Optimization Strategies',
    excerpt: 'Speed up your React applications with these proven performance optimization techniques and tools.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    category: 'Performance',
    author: { name: 'Alex Thompson', avatar: 'https://i.pravatar.cc/150?img=5' },
    date: 'Feb 5, 2024',
    readTime: 15,
    href: '#',
    tags: ['React', 'Performance', 'Optimization'],
  },
  {
    id: 6,
    title: 'The Future of Design Tools',
    excerpt: 'Explore emerging trends in design tooling and how AI is transforming the design process.',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&h=400&fit=crop',
    category: 'Future',
    author: { name: 'Jessica Lee', avatar: 'https://i.pravatar.cc/150?img=6' },
    date: 'Feb 3, 2024',
    readTime: 7,
    href: '#',
    tags: ['AI', 'Tools', 'Future'],
  },
];

export const previews = [
  {
    title: 'Grid Layout (3 Columns)',
    render: () => (
      <Blog
        title="Latest Articles"
        description="Stay up to date with the latest insights and best practices from our team."
        articles={sampleArticles.slice(0, 3)}
        layout="grid"
        columns={3}
      />
    ),
  },
  {
    title: 'Grid Layout (2 Columns)',
    render: () => (
      <Blog
        eyebrow="From the Blog"
        title="Design System Insights"
        description="Learn from our team's experience building and scaling design systems."
        articles={sampleArticles.slice(0, 4)}
        layout="grid"
        columns={2}
        viewAllHref="#"
      />
    ),
  },
  {
    title: 'Featured Layout',
    render: () => (
      <Blog
        title="Featured Articles"
        description="Our most popular articles this month."
        articles={sampleArticles.slice(0, 3)}
        layout="featured"
      />
    ),
  },
  {
    title: 'List Layout',
    render: () => (
      <Blog
        eyebrow="Recent Posts"
        title="All Articles"
        articles={sampleArticles.slice(0, 4)}
        layout="list"
        viewAllHref="#"
        viewAllText="Browse all articles"
      />
    ),
  },
  {
    title: 'Minimal Metadata',
    render: () => (
      <Blog
        title="Quick Reads"
        articles={sampleArticles.slice(0, 3)}
        layout="grid"
        columns={3}
        showAuthor={false}
        showDate={false}
        showCategory={false}
        showReadTime={true}
        background="subtle"
      />
    ),
  },
  {
    title: 'Full Grid (4 Columns)',
    render: () => (
      <Blog
        eyebrow="Knowledge Base"
        title="Explore Our Library"
        description="Dive deep into topics that matter to you with our comprehensive article collection."
        articles={sampleArticles}
        layout="grid"
        columns={4}
        viewAllHref="#"
        background="base"
      />
    ),
  },
];

export default previews;
