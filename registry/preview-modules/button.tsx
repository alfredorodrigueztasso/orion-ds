/**
 * Preview module for Button component
 * Manually created for Phase 1 pilot testing
 *
 * Based on: packages/react/src/components/Button/Button.stories.tsx
 */

import React from 'react';
import { Button } from '@orion-ds/react';
import { Settings, Search, Download } from 'lucide-react';

export const previews = [
  {
    title: 'All Variants',
    render: () => (
      <div style={{ display: 'flex', gap: 'var(--spacing-3)', flexWrap: 'wrap' }}>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
    ),
  },
  {
    title: 'Sizes',
    render: () => (
      <div style={{ display: 'flex', gap: 'var(--spacing-3)', flexWrap: 'wrap', alignItems: 'center' }}>
        <Button variant="primary" size="sm">Small</Button>
        <Button variant="primary" size="md">Medium</Button>
        <Button variant="primary" size="lg">Large</Button>
      </div>
    ),
  },
  {
    title: 'With Icons',
    render: () => (
      <div style={{ display: 'flex', gap: 'var(--spacing-3)', flexWrap: 'wrap' }}>
        <Button variant="primary" icon={<Download size={20} />}>
          Download
        </Button>
        <Button variant="primary" icon={<Settings size={20} />}>
          Settings
        </Button>
        <Button variant="primary" iconOnly icon={<Search size={20} />} aria-label="Search" />
      </div>
    ),
  },
  {
    title: 'States',
    render: () => (
      <div style={{ display: 'flex', gap: 'var(--spacing-3)', flexWrap: 'wrap' }}>
        <Button variant="primary">Normal</Button>
        <Button variant="primary" disabled>
          Disabled
        </Button>
      </div>
    ),
  },
];

export default previews;
