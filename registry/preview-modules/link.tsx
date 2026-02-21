/**
 * Preview module for Link component
 * Styled hyperlinks
 */

import React from 'react';
import { Link } from '@orion-ds/react';
import { ExternalLink, ArrowRight } from 'lucide-react';

export const previews = [
  {
    title: 'Link Variants',
    render: () => (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
        <div>
          <Link href="#default">Default link</Link>
        </div>
        <div>
          <Link href="#primary" variant="primary">Primary link</Link>
        </div>
        <div>
          <Link href="#secondary" variant="secondary">Secondary link</Link>
        </div>
        <div>
          <Link href="#muted" variant="muted">Muted link</Link>
        </div>
      </div>
    ),
  },
  {
    title: 'External Links',
    render: () => (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
        <div>
          <Link href="https://example.com" external icon={<ExternalLink size={16} />}>
            Visit our website
          </Link>
        </div>
        <div>
          <Link href="https://docs.example.com" external icon={<ExternalLink size={16} />}>
            Read documentation
          </Link>
        </div>
      </div>
    ),
  },
  {
    title: 'With Icons',
    render: () => (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
        <div>
          <Link href="#next" iconRight={<ArrowRight size={16} />}>
            Continue reading
          </Link>
        </div>
        <div>
          <Link href="#learn" iconRight={<ArrowRight size={16} />} variant="primary">
            Learn more
          </Link>
        </div>
      </div>
    ),
  },
  {
    title: 'In Text Context',
    render: () => (
      <div style={{ maxWidth: '600px' }}>
        <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: 'var(--text-primary)' }}>
          The Orion Design System is an{' '}
          <Link href="#ai-first">AI-first design system</Link>{' '}
          built on the Chain of Truth principle. Learn more about our{' '}
          <Link href="#philosophy">design philosophy</Link>{' '}
          or explore the{' '}
          <Link href="#components">component library</Link>.
        </p>
      </div>
    ),
  },
];

export default previews;
