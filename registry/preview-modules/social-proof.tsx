/**
 * Preview module for SocialProof section
 * Social proof sections combining logos, testimonials, and stats
 */

import React from 'react';
import { SocialProof } from '@orion-ds/blocks';
import { Badge } from '@orion-ds/react';
import { logoPlaceholder } from './utils';

export const previews = [
  {
    title: 'Logos Only - Grid Layout',
    render: () => (
      <SocialProof
        eyebrow={<Badge variant="secondary">Trusted By</Badge>}
        title="Industry leaders choose Orion"
        description="Join thousands of companies building with our design system"
        layout="logos-only"
        logoStyle="grid"
        grayscaleLogos={true}
        logos={[
          { name: 'Stripe', logo: logoPlaceholder('Stripe') },
          { name: 'Vercel', logo: logoPlaceholder('Vercel') },
          { name: 'Linear', logo: logoPlaceholder('Linear') },
          { name: 'Notion', logo: logoPlaceholder('Notion') },
          { name: 'Figma', logo: logoPlaceholder('Figma') },
          { name: 'GitHub', logo: logoPlaceholder('GitHub') },
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
          { name: 'Airbnb', logo: logoPlaceholder('Airbnb', 100, 32), href: '#' },
          { name: 'Shopify', logo: logoPlaceholder('Shopify', 100, 32), href: '#' },
          { name: 'Netflix', logo: logoPlaceholder('Netflix', 100, 32), href: '#' },
          { name: 'Uber', logo: logoPlaceholder('Uber', 100, 32), href: '#' },
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
          { name: 'Spotify', logo: logoPlaceholder('Spotify', 110, 36) },
          { name: 'Slack', logo: logoPlaceholder('Slack', 110, 36) },
          { name: 'Zoom', logo: logoPlaceholder('Zoom', 110, 36) },
          { name: 'Atlassian', logo: logoPlaceholder('Atlassian', 110, 36) },
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
          { name: 'Discord', logo: logoPlaceholder('Discord', 90, 30) },
          { name: 'Twitch', logo: logoPlaceholder('Twitch', 90, 30) },
          { name: 'Reddit', logo: logoPlaceholder('Reddit', 90, 30) },
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
