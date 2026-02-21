/**
 * Preview module for SocialProof section
 * Social proof sections combining logos, testimonials, and stats
 */

import React from 'react';
import { SocialProof, Badge } from '@orion-ds/react';

export const previews = [
  {
    title: 'Logos Only - Grid Layout',
    render: () => (
      <SocialProof
        eyebrow={<Badge variant="outline">Trusted By</Badge>}
        title="Industry leaders choose Orion"
        description="Join thousands of companies building with our design system"
        layout="logos-only"
        logoStyle="grid"
        grayscaleLogos={true}
        logos={[
          { name: 'Stripe', logo: 'https://via.placeholder.com/120x40/1B5BFF/FFFFFF?text=Stripe' },
          { name: 'Vercel', logo: 'https://via.placeholder.com/120x40/1B5BFF/FFFFFF?text=Vercel' },
          { name: 'Linear', logo: 'https://via.placeholder.com/120x40/1B5BFF/FFFFFF?text=Linear' },
          { name: 'Notion', logo: 'https://via.placeholder.com/120x40/1B5BFF/FFFFFF?text=Notion' },
          { name: 'Figma', logo: 'https://via.placeholder.com/120x40/1B5BFF/FFFFFF?text=Figma' },
          { name: 'GitHub', logo: 'https://via.placeholder.com/120x40/1B5BFF/FFFFFF?text=GitHub' },
        ]}
        background="subtle"
      />
    ),
  },
  {
    title: 'Logos + Stats - Stacked Layout',
    render: () => (
      <SocialProof
        title="Powering modern teams worldwide"
        layout="stacked"
        logoStyle="inline"
        logos={[
          { name: 'Airbnb', logo: 'https://via.placeholder.com/100x32/1B5BFF/FFFFFF?text=Airbnb', href: '#' },
          { name: 'Shopify', logo: 'https://via.placeholder.com/100x32/1B5BFF/FFFFFF?text=Shopify', href: '#' },
          { name: 'Netflix', logo: 'https://via.placeholder.com/100x32/1B5BFF/FFFFFF?text=Netflix', href: '#' },
          { name: 'Uber', logo: 'https://via.placeholder.com/100x32/1B5BFF/FFFFFF?text=Uber', href: '#' },
        ]}
        stats={[
          { value: '50K+', label: 'Active users' },
          { value: '99.9%', label: 'Uptime' },
          { value: '150+', label: 'Countries' },
          { value: '4.9/5', label: 'Rating' },
        ]}
        background="base"
      />
    ),
  },
  {
    title: 'Testimonials Only - Grid',
    render: () => (
      <SocialProof
        eyebrow="Customer Stories"
        title="What our customers say"
        description="Hear from teams that ship faster with Orion Design System"
        layout="testimonials-only"
        testimonials={[
          {
            id: 1,
            quote: "Orion cut our design-to-code time by 70%. The token-governed architecture eliminates inconsistencies completely.",
            author: "Sarah Chen",
            title: "Design Lead",
            company: "Acme Corp",
            avatar: "https://i.pravatar.cc/150?img=1",
            rating: 5,
          },
          {
            id: 2,
            quote: "Best design system I've used. The AI-first approach means our chatbot can generate perfect UI components every time.",
            author: "Marcus Johnson",
            title: "CTO",
            company: "TechFlow",
            avatar: "https://i.pravatar.cc/150?img=12",
            rating: 5,
          },
          {
            id: 3,
            quote: "Multi-brand support saved us months of development. We launched 4 white-label products in a single quarter.",
            author: "Emily Rodriguez",
            title: "Product Manager",
            company: "Nexus Labs",
            avatar: "https://i.pravatar.cc/150?img=5",
            rating: 5,
          },
        ]}
        background="subtle"
      />
    ),
  },
  {
    title: 'Complete Social Proof - Side-by-Side',
    render: () => (
      <SocialProof
        eyebrow={<Badge variant="brand">Social Proof</Badge>}
        title="Trusted by industry leaders"
        description="Join thousands of teams building with confidence"
        layout="side-by-side"
        logos={[
          { name: 'Spotify', logo: 'https://via.placeholder.com/110x36/1B5BFF/FFFFFF?text=Spotify' },
          { name: 'Slack', logo: 'https://via.placeholder.com/110x36/1B5BFF/FFFFFF?text=Slack' },
          { name: 'Zoom', logo: 'https://via.placeholder.com/110x36/1B5BFF/FFFFFF?text=Zoom' },
          { name: 'Atlassian', logo: 'https://via.placeholder.com/110x36/1B5BFF/FFFFFF?text=Atlassian' },
        ]}
        stats={[
          { value: '1M+', label: 'Components generated' },
          { value: '500+', label: 'Enterprise clients' },
          { value: '24/7', label: 'Support' },
        ]}
        testimonials={[
          {
            id: 1,
            quote: "The Chain of Truth architecture changed how we think about design systems. Zero hallucination guaranteed.",
            author: "David Kim",
            title: "Engineering Director",
            company: "DataCorp",
            avatar: "https://i.pravatar.cc/150?img=14",
            rating: 5,
          },
          {
            id: 2,
            quote: "Orion's multi-brand support is incredible. We manage 8 brands from a single codebase with perfect consistency.",
            author: "Lisa Thompson",
            title: "VP of Design",
            company: "BrandHub",
            avatar: "https://i.pravatar.cc/150?img=9",
            rating: 5,
          },
        ]}
        background="base"
      />
    ),
  },
  {
    title: 'Compact Social Proof',
    render: () => (
      <SocialProof
        title="Loved by developers worldwide"
        compact
        logos={[
          { name: 'Discord', logo: 'https://via.placeholder.com/90x30/1B5BFF/FFFFFF?text=Discord' },
          { name: 'Twitch', logo: 'https://via.placeholder.com/90x30/1B5BFF/FFFFFF?text=Twitch' },
          { name: 'Reddit', logo: 'https://via.placeholder.com/90x30/1B5BFF/FFFFFF?text=Reddit' },
        ]}
        stats={[
          { value: '10K+', label: 'GitHub stars' },
          { value: '2K+', label: 'Contributors' },
        ]}
        background="none"
      />
    ),
  },
];

export default previews;
