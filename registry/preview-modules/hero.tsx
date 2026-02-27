/**
 * Preview module for Hero section
 * Hero sections for landing pages with CTAs, media, and trust indicators
 */

import React from 'react';
import { Hero } from '@orion-ds/blocks';
import { Button, Badge } from '@orion-ds/react';
import { ArrowRight, Play, Star, CheckCircle } from 'lucide-react';

export const previews = [
  {
    title: 'Default Hero - Center Aligned',
    render: () => (
      <Hero
        badge={<Badge variant="brand">New Release</Badge>}
        title="Build faster with Orion Design System"
        description="The AI-first design system for modern applications. Token-governed, brand-flexible, and production-ready."
        primaryAction={
          <Button size="lg" icon={<ArrowRight size={20} />} iconRight>
            Get Started
          </Button>
        }
        secondaryAction={
          <Button variant="ghost" size="lg">
            View Documentation
          </Button>
        }
        align="center"
        size="lg"
      />
    ),
  },
  {
    title: 'Hero with Gradient Text',
    render: () => (
      <Hero
        badge={<Badge variant="outline">v3.0 Beta</Badge>}
        title={
          <>
            Build <Hero.Highlight>beautiful apps</Hero.Highlight> in record time
          </>
        }
        description="Ship production-ready interfaces with zero configuration. Our AI-first architecture eliminates UI hallucination and enforces design consistency."
        primaryAction={<Button size="lg">Start Building</Button>}
        secondaryAction={
          <Button variant="ghost" size="lg" icon={<Play size={20} />}>
            Watch Demo
          </Button>
        }
        trustIndicators={
          <div style={{ display: 'flex', gap: 'var(--spacing-6)', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
              <Star size={16} fill="currentColor" />
              <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>4.9/5 rating</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
              <CheckCircle size={16} />
              <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>1,000+ teams</span>
            </div>
          </div>
        }
        align="center"
        size="lg"
      />
    ),
  },
  {
    title: 'Hero with Media - Left Aligned',
    render: () => (
      <Hero
        badge={<Badge>Product Update</Badge>}
        title="Redesigned from the ground up"
        description="Experience the next generation of design systems. Built for speed, flexibility, and scale."
        primaryAction={<Button size="lg">Explore Features</Button>}
        secondaryAction={<Button variant="secondary" size="lg">Read Announcement</Button>}
        media={
          <div
            style={{
              width: '100%',
              height: '400px',
              borderRadius: 'var(--radius-container)',
              background: 'linear-gradient(135deg, var(--color-brand-400), var(--color-brand-600))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '18px',
              fontWeight: 500,
            }}
          >
            Product Screenshot
          </div>
        }
        mediaPosition="right"
        align="left"
        size="md"
      />
    ),
  },
  {
    title: 'Fullscreen Hero with Background',
    render: () => (
      <Hero
        layout="fullscreen"
        variant="background"
        backgroundImage="https://images.unsplash.com/photo-1557683316-973673baf926?w=1600&h=900&fit=crop"
        backgroundOverlay={0.7}
        badge={<Badge variant="ghost">New Platform</Badge>}
        title={
          <>
            The future of <Hero.Highlight>design systems</Hero.Highlight> is here
          </>
        }
        description="Token-governed architecture meets AI-first development. Ship faster without compromising on quality."
        primaryAction={
          <Button size="lg" variant="primary">
            Start Free Trial
          </Button>
        }
        secondaryAction={
          <Button size="lg" variant="ghost">
            Learn More
          </Button>
        }
        align="center"
        size="lg"
      />
    ),
  },
  {
    title: 'Card Layout - Elevated',
    render: () => (
      <div style={{ padding: 'var(--spacing-8)', background: 'var(--surface-subtle)' }}>
        <Hero
          layout="card"
          elevated
          badge={<Badge variant="success">Now Available</Badge>}
          title="Orion Design System is production-ready"
          description="Join thousands of developers building with our AI-first design system. Zero configuration, infinite possibilities."
          primaryAction={<Button>Get Started Free</Button>}
          secondaryAction={<Button variant="secondary">View Pricing</Button>}
          align="center"
          size="md"
        />
      </div>
    ),
  },
];

export default previews;
