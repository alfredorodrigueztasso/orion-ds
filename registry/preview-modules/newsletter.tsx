/**
 * Preview module for Newsletter section
 * Newsletter signup sections with multiple layouts and states
 */

import React, { useState } from 'react';
import { Newsletter } from '@orion-ds/blocks';
import { Badge, Button } from '@orion-ds/react';
import { Mail, Gift, Zap } from 'lucide-react';

export const previews = [
  {
    title: 'Inline Layout - Default',
    render: () => (
      <Newsletter
        eyebrow={<Badge variant="brand">Newsletter</Badge>}
        title="Stay in the loop"
        description="Get the latest updates, tips, and resources delivered to your inbox every week."
        placeholder="Enter your email"
        buttonText="Subscribe"
        disclaimer="We respect your privacy. Unsubscribe at any time."
        layout="inline"
        background="subtle"
        centered
        onSubmit={(email) => console.log('Subscribed:', email)}
      />
    ),
  },
  {
    title: 'Stacked Layout',
    render: () => (
      <Newsletter
        eyebrow="Join 10,000+ subscribers"
        title="Get weekly design insights"
        description="Expert tips, case studies, and resources for design system builders. No spam, ever."
        placeholder="you@example.com"
        buttonText="Sign Up Free"
        disclaimer={
          <>
            By subscribing, you agree to our <a href="#">Privacy Policy</a>
          </>
        }
        layout="stacked"
        size="lg"
        background="base"
        centered
        onSubmit={(email) => console.log('Subscribed:', email)}
      />
    ),
  },
  {
    title: 'Card Layout - Elevated',
    render: () => (
      <div style={{ padding: 'var(--spacing-8)', background: 'var(--surface-subtle)' }}>
        <Newsletter
          eyebrow={
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
              <Gift size={16} />
              <span>Special Offer</span>
            </div>
          }
          title="Get 20% off your first order"
          description="Subscribe to our newsletter and receive an exclusive discount code instantly."
          placeholder="Enter your email"
          buttonText="Get My Discount"
          layout="card"
          background="none"
          size="md"
          centered
          onSubmit={(email) => console.log('Subscribed:', email)}
        />
      </div>
    ),
  },
  {
    title: 'With Success State',
    render: () => {
      const [submitted, setSubmitted] = useState(false);

      return (
        <Newsletter
          eyebrow={<Badge variant="outline">Updates</Badge>}
          title="Never miss an update"
          description="Be the first to know about new features, product launches, and exclusive content."
          placeholder="Your email address"
          buttonText="Subscribe"
          successMessage="Thanks for subscribing! Check your inbox for confirmation."
          layout="inline"
          background="subtle"
          centered
          onSubmit={(email) => {
            console.log('Subscribed:', email);
            setSubmitted(true);
          }}
        />
      );
    },
  },
  {
    title: 'Compact with Custom Button',
    render: () => (
      <Newsletter
        title="Join our community"
        description="Get access to exclusive resources and early previews."
        placeholder="Email address"
        submitButton={
          <Button variant="primary" icon={<Zap size={20} />}>
            Join Now
          </Button>
        }
        layout="inline"
        size="sm"
        background="none"
        centered={false}
        onSubmit={(email) => console.log('Subscribed:', email)}
      />
    ),
  },
];

export default previews;
