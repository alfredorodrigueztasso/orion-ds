/**
 * Preview module for Gallery section
 * Image gallery with optional lightbox functionality
 */

import React from 'react';
import { Gallery } from '@orion-ds/react';
import type { GalleryImage } from '@orion-ds/react';

// Sample images from Unsplash
const sampleImages: GalleryImage[] = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400',
    alt: 'Modern architecture',
    caption: 'Contemporary building design',
    category: 'Architecture',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d',
    thumbnail: 'https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=400',
    alt: 'Abstract patterns',
    caption: 'Geometric abstract art',
    category: 'Abstract',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1618172193763-c511deb635ca',
    thumbnail: 'https://images.unsplash.com/photo-1618172193763-c511deb635ca?w=400',
    alt: 'Nature landscape',
    caption: 'Mountain vista at sunset',
    category: 'Nature',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1618556450991-2f1af64e8191',
    thumbnail: 'https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=400',
    alt: 'Urban cityscape',
    caption: 'City lights at night',
    category: 'Architecture',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1618556450783-1d91c5e0ff0c',
    thumbnail: 'https://images.unsplash.com/photo-1618556450783-1d91c5e0ff0c?w=400',
    alt: 'Minimalist design',
    caption: 'Clean and simple aesthetics',
    category: 'Abstract',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1618556450832-d2a2a1d4c7d9',
    thumbnail: 'https://images.unsplash.com/photo-1618556450832-d2a2a1d4c7d9?w=400',
    alt: 'Forest pathway',
    caption: 'Path through the woods',
    category: 'Nature',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead',
    thumbnail: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=400',
    alt: 'Modern interior',
    caption: 'Contemporary living space',
    category: 'Architecture',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1618556450726-a7c8b4c8d3f9',
    thumbnail: 'https://images.unsplash.com/photo-1618556450726-a7c8b4c8d3f9?w=400',
    alt: 'Color gradient',
    caption: 'Vibrant color transitions',
    category: 'Abstract',
  },
];

export const previews = [
  {
    title: 'Basic Grid Gallery',
    render: () => (
      <Gallery
        title="Project Showcase"
        description="A collection of our best work"
        images={sampleImages.slice(0, 6)}
        columns={3}
        lightbox
      />
    ),
  },
  {
    title: '4 Column Grid',
    render: () => (
      <Gallery
        eyebrow="Portfolio"
        title="Our Work"
        description="Explore our portfolio of creative projects"
        images={sampleImages}
        columns={4}
        gap="sm"
        lightbox
        background="subtle"
      />
    ),
  },
  {
    title: 'With Captions',
    render: () => (
      <Gallery
        title="Gallery with Descriptions"
        images={sampleImages.slice(0, 6)}
        columns={3}
        lightbox
        showCaptions
        aspectRatio="landscape"
      />
    ),
  },
  {
    title: 'Filterable Gallery',
    render: () => (
      <Gallery
        eyebrow="Featured"
        title="Curated Collection"
        description="Filter by category to explore different styles"
        images={sampleImages}
        columns={4}
        filterable
        lightbox
        showCaptions
        background="subtle"
      />
    ),
  },
  {
    title: 'Portrait Grid',
    render: () => (
      <Gallery
        title="Portrait Collection"
        images={sampleImages.slice(0, 6)}
        columns={3}
        aspectRatio="portrait"
        lightbox={false}
        gap="lg"
      />
    ),
  },
];

export default previews;
