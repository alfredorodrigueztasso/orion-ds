/**
 * Preview module for CTA section
 * Call-to-action sections for converting users with various visual styles
 */

import React from 'react';
import { CTA } from '@orion-ds/blocks';
import { Button } from '@orion-ds/react';
import { ArrowRight, Zap, Shield } from 'lucide-react';

export const previews = [
  {
    title: 'Brand Variant (Default)',
    render: () => (
      <CTA
        title="Ready to transform your workflow?"
        description="Join thousands of developers building faster with Orion Design System. Start your free trial today."
        actions={
          <>
            <Button size="lg" icon={<ArrowRight size={20} />} iconRight>
              Start Free Trial
            </Button>
            <Button size="lg" variant="ghost">
              View Pricing
            </Button>
          </>
        }
        footnote="No credit card required. 14-day free trial."
        variant="brand"
      />
    ),
  },
  {
    title: 'Default Variant',
    render: () => (
      <CTA
        title="Get started in minutes"
        description="Install with npm and start building beautiful, accessible interfaces right away."
        actions={
          <>
            <Button size="lg">Quick Start Guide</Button>
            <Button size="lg" variant="secondary">
              Browse Components
            </Button>
          </>
        }
        variant="default"
      />
    ),
  },
  {
    title: 'Subtle Variant',
    render: () => (
      <CTA
        title="Need help getting started?"
        description="Our team is here to support you. Book a demo or reach out to learn more about Orion."
        actions={
          <>
            <Button size="lg" icon={<Zap size={20} />}>
              Schedule Demo
            </Button>
            <Button size="lg" variant="ghost">
              Contact Sales
            </Button>
          </>
        }
        variant="subtle"
        size="sm"
      />
    ),
  },
  {
    title: 'Outline Variant',
    render: () => (
      <CTA
        title="Enterprise-ready security"
        description="SOC 2 certified with advanced encryption, SSO, and compliance features built in."
        actions={
          <>
            <Button size="lg" icon={<Shield size={20} />}>
              Learn About Security
            </Button>
          </>
        }
        variant="outline"
      />
    ),
  },
  {
    title: 'Left Aligned',
    render: () => (
      <CTA
        title="Build your next project with confidence"
        description="Orion provides everything you need: components, tokens, documentation, and a thriving community."
        actions={
          <>
            <Button size="lg">Explore Components</Button>
            <Button size="lg" variant="secondary">
              Read Docs
            </Button>
          </>
        }
        align="left"
        variant="brand"
      />
    ),
  },
  {
    title: 'Full Width (Not Contained)',
    render: () => (
      <CTA
        title="Join the Orion community"
        description="Connect with designers and developers using Orion. Share your work, get feedback, and stay updated."
        actions={
          <>
            <Button size="lg">Join Discord</Button>
            <Button size="lg" variant="ghost">
              Follow on Twitter
            </Button>
          </>
        }
        variant="brand"
        contained={false}
      />
    ),
  },
  {
    title: 'Large Size',
    render: () => (
      <CTA
        title="Scale your design system"
        description="Used by startups to Fortune 500 companies. Orion grows with you."
        actions={
          <>
            <Button size="lg">Get Enterprise Pricing</Button>
            <Button size="lg" variant="ghost">
              See Case Studies
            </Button>
          </>
        }
        variant="brand"
        size="lg"
        footnote="Trusted by 10,000+ teams worldwide"
      />
    ),
  },
  {
    title: 'Small Size with Single Action',
    render: () => (
      <CTA
        title="Have questions?"
        description="We're here to help. Reach out anytime."
        actions={<Button size="lg">Contact Support</Button>}
        variant="subtle"
        size="sm"
      />
    ),
  },
];

export default previews;
