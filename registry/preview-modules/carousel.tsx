/**
 * Preview module for Carousel component
 * Image/content slider
 */

import React from 'react';
import { Carousel } from '@orion-ds/react';

const slides = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800',
    title: 'Modern Architecture',
    description: 'Contemporary design meets functionality',
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800',
    title: 'Creative Workspace',
    description: 'Inspiring environments for productivity',
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
    title: 'Team Collaboration',
    description: 'Building together, growing together',
  },
];

export const previews = [
  {
    title: 'Basic Carousel',
    render: () => (
      <div style={{ maxWidth: '600px' }}>
        <Carousel items={slides} showNavigation />
      </div>
    ),
  },
  {
    title: 'Auto-Play',
    render: () => (
      <div style={{ maxWidth: '600px' }}>
        <Carousel items={slides} autoPlay autoPlayInterval={3000} showNavigation showIndicators />
      </div>
    ),
  },
  {
    title: 'Multiple Items',
    render: () => {
      const manySlides = [
        { id: '1', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400', title: 'Slide 1' },
        { id: '2', image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400', title: 'Slide 2' },
        { id: '3', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400', title: 'Slide 3' },
        { id: '4', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400', title: 'Slide 4' },
        { id: '5', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400', title: 'Slide 5' },
      ];

      return (
        <div style={{ maxWidth: '800px' }}>
          <Carousel items={manySlides} itemsPerView={3} gap="md" showNavigation showIndicators />
        </div>
      );
    },
  },
];

export default previews;
