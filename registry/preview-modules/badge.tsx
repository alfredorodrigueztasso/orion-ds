/**
 * Preview module for Badge component
 * Manually created for Phase 1 pilot testing
 *
 * Based on: packages/react/src/components/Badge/Badge.stories.tsx
 */

import React from 'react';
import { Badge } from '@orion-ds/react';

export const previews = [
  {
    title: 'All Variants',
    render: () => (
      <div style={{ display: 'flex', gap: 'var(--spacing-3)', flexWrap: 'wrap', alignItems: 'center' }}>
        <Badge variant="primary">Primary</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="error">Error</Badge>
        <Badge variant="info">Info</Badge>
        <Badge variant="neutral">Neutral</Badge>
      </div>
    ),
  },
  {
    title: 'Sizes',
    render: () => (
      <div style={{ display: 'flex', gap: 'var(--spacing-3)', flexWrap: 'wrap', alignItems: 'center' }}>
        <Badge variant="primary" size="sm">Small</Badge>
        <Badge variant="primary" size="md">Medium</Badge>
        <Badge variant="primary" size="lg">Large</Badge>
      </div>
    ),
  },
];

export default previews;
