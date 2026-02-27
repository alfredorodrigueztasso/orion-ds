/**
 * Preview module for Testimonials section
 * Customer testimonials with quotes, ratings, and author details
 */

import React from 'react';
import { Testimonials } from '@orion-ds/blocks';
import { Badge } from '@orion-ds/react';

export const previews = [
  {
    title: 'Default Testimonials - 3 Columns',
    render: () => (
      <Testimonials
        eyebrow={<Badge>Testimonials</Badge>}
        title="What our customers say"
        description="See why thousands of teams love building with Orion"
        testimonials={[
          {
            quote: "Orion cut our design-to-code time by 70%. The token-governed architecture eliminates inconsistencies completely. Best investment we've made.",
            author: {
              name: 'Sarah Chen',
              role: 'Design Lead',
              company: 'Acme Corp',
              avatar: <img src="https://i.pravatar.cc/150?img=1" alt="Sarah Chen" />,
            },
            rating: 5,
          },
          {
            quote: "The AI-first approach is game-changing. Our chatbot can now generate perfect UI components every time. Deployment time dropped by 60%.",
            author: {
              name: 'Marcus Johnson',
              role: 'CTO',
              company: 'TechFlow',
              avatar: <img src="https://i.pravatar.cc/150?img=12" alt="Marcus Johnson" />,
            },
            rating: 5,
          },
          {
            quote: "Multi-brand support saved us months of development. We launched 4 white-label products in a single quarter. Incredible ROI.",
            author: {
              name: 'Emily Rodriguez',
              role: 'Product Manager',
              company: 'Nexus Labs',
              avatar: <img src="https://i.pravatar.cc/150?img=5" alt="Emily Rodriguez" />,
            },
            rating: 5,
          },
        ]}
        columns={3}
        variant="default"
        background="base"
      />
    ),
  },
  {
    title: 'Card Variant - Elevated',
    render: () => (
      <Testimonials
        eyebrow="Customer Stories"
        title="Loved by design teams worldwide"
        description="Join 10,000+ teams building better products faster"
        testimonials={[
          {
            quote: "The Chain of Truth architecture changed how we think about design systems. Zero hallucination guaranteed. Our QA team loves it.",
            author: {
              name: 'David Kim',
              role: 'Engineering Director',
              company: 'DataCorp',
              avatar: <img src="https://i.pravatar.cc/150?img=14" alt="David Kim" />,
            },
            rating: 5,
          },
          {
            quote: "We manage 8 brands from a single codebase with perfect consistency. Orion's token system is the most powerful I've seen.",
            author: {
              name: 'Lisa Thompson',
              role: 'VP of Design',
              company: 'BrandHub',
              avatar: <img src="https://i.pravatar.cc/150?img=9" alt="Lisa Thompson" />,
            },
            rating: 5,
          },
        ]}
        columns={2}
        variant="cards"
        background="subtle"
      />
    ),
  },
  {
    title: 'Minimal Variant - No Cards',
    render: () => (
      <Testimonials
        title="Praise from industry leaders"
        testimonials={[
          {
            quote: "Orion is the gold standard for design systems. The TypeScript support and MCP integration make it future-proof.",
            author: {
              name: 'James Wilson',
              role: 'VP Engineering',
              company: 'CloudStack',
              avatar: <img src="https://i.pravatar.cc/150?img=13" alt="James Wilson" />,
            },
          },
          {
            quote: "Best documentation I've ever seen. The AI-first guides made onboarding our entire team effortless.",
            author: {
              name: 'Maya Patel',
              role: 'Head of Design',
              company: 'Streamline',
              avatar: <img src="https://i.pravatar.cc/150?img=20" alt="Maya Patel" />,
            },
          },
          {
            quote: "The tri-modal system (Display, Product, App) is brilliant. Perfect for our multi-context application.",
            author: {
              name: 'Alex Turner',
              role: 'Lead Designer',
              company: 'Pixel Perfect',
              avatar: <img src="https://i.pravatar.cc/150?img=15" alt="Alex Turner" />,
            },
          },
        ]}
        columns={3}
        variant="minimal"
        background="base"
      />
    ),
  },
  {
    title: 'Two Column Layout - Detailed',
    render: () => (
      <Testimonials
        eyebrow={<Badge variant="brand">Success Stories</Badge>}
        title="Real results from real teams"
        description="See the impact of adopting Orion Design System"
        testimonials={[
          {
            quote: "We migrated from Material-UI to Orion in just 2 weeks. The component API is intuitive and the migration guides are excellent. Our bundle size dropped by 40% and performance improved across the board. The investment paid off immediately.",
            author: {
              name: 'Nina Garcia',
              role: 'Senior Frontend Engineer',
              company: 'FastCommerce',
              avatar: <img src="https://i.pravatar.cc/150?img=16" alt="Nina Garcia" />,
            },
            rating: 5,
          },
          {
            quote: "As a design ops lead, Orion solved our biggest pain point: design-dev handoff. The token system is our single source of truth. Designers and engineers finally speak the same language. We've eliminated 90% of design QA issues.",
            author: {
              name: 'Ryan Cooper',
              role: 'Design Operations Lead',
              company: 'DesignFirst Inc',
              avatar: <img src="https://i.pravatar.cc/150?img=17" alt="Ryan Cooper" />,
            },
            rating: 5,
          },
        ]}
        columns={2}
        variant="cards"
        background="subtle"
        centered={true}
      />
    ),
  },
  {
    title: 'Single Column - Featured',
    render: () => (
      <Testimonials
        title="Featured testimonial"
        testimonials={[
          {
            quote: "Orion Design System fundamentally changed how we build products. The AI-first architecture means our entire team – designers, engineers, and even our AI agents – work from the same source of truth. We've eliminated UI inconsistencies, cut development time by 65%, and our customer satisfaction scores have never been higher. This is the future of design systems.",
            author: {
              name: 'Jennifer Lee',
              role: 'Chief Product Officer',
              company: 'InnovateLabs',
              avatar: <img src="https://i.pravatar.cc/150?img=10" alt="Jennifer Lee" />,
            },
            rating: 5,
          },
        ]}
        columns={1}
        variant="cards"
        background="base"
        centered={true}
      />
    ),
  },
];

export default previews;
