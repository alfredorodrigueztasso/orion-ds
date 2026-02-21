/**
 * Preview module for Banner section
 * Promotional banner section with multiple style variants
 */

import React from 'react';
import { Banner } from '@orion-ds/react';

export const previews = [
  {
    title: 'Default Banner',
    render: () => (
      <Banner
        title="New Product Launch"
        description="Discover our latest features and improvements. Available now for all users."
        ctaLabel="Learn More"
        ctaHref="#"
        variant="default"
      />
    ),
  },
  {
    title: 'Gradient Banner',
    render: () => (
      <Banner
        eyebrow="Limited Time Offer"
        title="Save 30% on Annual Plans"
        description="Upgrade now and get three months free. Offer ends this Friday!"
        ctaLabel="Upgrade Now"
        ctaHref="#"
        secondaryCtaLabel="View Plans"
        secondaryCtaHref="#"
        variant="gradient"
      />
    ),
  },
  {
    title: 'Image Background',
    render: () => (
      <Banner
        title="Summer Collection Is Here"
        description="Explore our new arrivals perfect for the season. Shop the latest trends now."
        ctaLabel="Shop Now"
        ctaHref="#"
        variant="image"
        backgroundImage="https://images.unsplash.com/photo-1557683316-973673baf926?w=1200&h=400&fit=crop"
      />
    ),
  },
  {
    title: 'Split Layout - Image Right',
    render: () => (
      <Banner
        eyebrow="Product Update"
        title="Introducing Dark Mode"
        description="Experience your favorite app in a whole new light. Toggle between light and dark themes to match your style and reduce eye strain."
        ctaLabel="Try It Now"
        ctaHref="#"
        variant="split"
        sideImage="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop"
        imagePosition="right"
      />
    ),
  },
  {
    title: 'Split Layout - Image Left',
    render: () => (
      <Banner
        eyebrow="New Feature"
        title="Collaboration Tools"
        description="Work together seamlessly with real-time collaboration, comments, and shared workspaces. Built for teams of all sizes."
        ctaLabel="Get Started"
        ctaHref="#"
        secondaryCtaLabel="Watch Demo"
        secondaryCtaHref="#"
        variant="split"
        sideImage="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
        imagePosition="left"
      />
    ),
  },
  {
    title: 'Dismissible Banner',
    render: () => (
      <Banner
        eyebrow="Announcement"
        title="Scheduled Maintenance"
        description="Our systems will be offline for maintenance on Saturday from 2-4 AM EST. We apologize for any inconvenience."
        ctaLabel="Learn More"
        ctaHref="#"
        variant="default"
        dismissible={true}
        onDismiss={() => console.log('Banner dismissed')}
      />
    ),
  },
  {
    title: 'Compact Banner',
    render: () => (
      <Banner
        title="Free Shipping on Orders Over $50"
        ctaLabel="Shop Now"
        ctaHref="#"
        variant="gradient"
        compact={true}
      />
    ),
  },
  {
    title: 'Custom Background Color',
    render: () => (
      <Banner
        eyebrow="Special Promotion"
        title="Black Friday Sale"
        description="Up to 70% off on selected items. Don't miss out on these incredible deals!"
        ctaLabel="Shop Deals"
        ctaHref="#"
        variant="default"
        backgroundColor="var(--color-brand-500)"
      />
    ),
  },
];

export default previews;
