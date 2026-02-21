/**
 * Preview module for CarouselSection section
 * Full-page carousel with title, description, and navigation
 */

import React from 'react';
import { CarouselSection } from '@orion-ds/react';

const editorialItems = [
  {
    image: <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop" alt="Modern workspace" />,
    eyebrow: 'Productivity',
    title: 'The Future of Work',
    description: 'How modern teams are collaborating in the digital age',
    overlay: 'gradient' as const,
  },
  {
    image: <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop" alt="Data visualization" />,
    eyebrow: 'Analytics',
    title: 'Data-Driven Decisions',
    description: 'Making sense of complex data in real-time',
    overlay: 'gradient' as const,
  },
  {
    image: <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" alt="Team collaboration" />,
    eyebrow: 'Culture',
    title: 'Building Better Teams',
    description: 'Creating environments where creativity thrives',
    overlay: 'gradient' as const,
  },
];

const productItems = [
  {
    image: <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=500&fit=crop" alt="Smart watch" />,
    title: 'Smart Watch Pro',
    description: 'Advanced health tracking and fitness monitoring',
    price: '$399',
  },
  {
    image: <img src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=500&fit=crop" alt="Wireless earbuds" />,
    title: 'Audio Buds X',
    description: 'Premium sound with active noise cancellation',
    price: '$199',
  },
  {
    image: <img src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=500&fit=crop" alt="Smart speaker" />,
    title: 'Home Speaker',
    description: 'Voice-controlled smart home hub',
    price: '$149',
  },
  {
    image: <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=500&fit=crop" alt="Headphones" />,
    title: 'Studio Headphones',
    description: 'Professional-grade audio for creators',
    price: '$299',
  },
];

const galleryItems = [
  {
    image: <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop" alt="Abstract art 1" />,
  },
  {
    image: <img src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&h=600&fit=crop" alt="Abstract art 2" />,
  },
  {
    image: <img src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&h=600&fit=crop" alt="Abstract art 3" />,
  },
  {
    image: <img src="https://images.unsplash.com/photo-1578301978162-7aae4d755744?w=800&h=600&fit=crop" alt="Abstract art 4" />,
  },
];

export const previews = [
  {
    title: 'Editorial Variant',
    render: () => (
      <CarouselSection
        eyebrow={<span style={{ color: 'var(--text-brand)' }}>Featured Stories</span>}
        title="Insights & Ideas"
        description="Explore our latest articles and thought leadership on the future of work."
        items={editorialItems}
        variant="editorial"
        aspectRatio="16/9"
        showNavigation
        alignToTitle
      />
    ),
  },
  {
    title: 'Product Showcase',
    render: () => (
      <CarouselSection
        title="Featured Products"
        description="Discover our latest innovations in smart technology."
        items={productItems}
        variant="product"
        aspectRatio="4/5"
        gap="md"
        showNavigation
        alignToTitle
        background="subtle"
      />
    ),
  },
  {
    title: 'Gallery with Pagination',
    render: () => (
      <CarouselSection
        title="Visual Gallery"
        items={galleryItems}
        variant="gallery"
        aspectRatio="16/9"
        showNavigation
        showPagination
        highlightActive
      />
    ),
  },
  {
    title: 'Auto-Scroll Carousel',
    render: () => (
      <CarouselSection
        items={editorialItems}
        variant="editorial"
        autoScroll
        autoScrollInterval={4000}
        loop
        showPagination
        background="none"
      />
    ),
  },
  {
    title: 'Edge-to-Edge (Apple Style)',
    render: () => (
      <CarouselSection
        title="Latest Releases"
        items={productItems}
        variant="product"
        aspectRatio="3/4"
        peek
        alignToTitle={false}
        showNavigation
        gap="lg"
      />
    ),
  },
];

export default previews;
