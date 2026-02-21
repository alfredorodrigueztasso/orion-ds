/**
 * Preview module for Spinner component
 * Migrated from ComponentPreview.tsx hardcoded examples
 */

import React from 'react';
import { Spinner } from '@orion-ds/react';

export const previews = [
  {
    title: 'Sizes',
    render: () => (
      <div style={{ display: 'flex', gap: 'var(--spacing-6)', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ textAlign: 'center' }}>
          <Spinner size="sm" />
          <p style={{ marginTop: 'var(--spacing-2)', fontSize: '0.875rem' }}>Small</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Spinner />
          <p style={{ marginTop: 'var(--spacing-2)', fontSize: '0.875rem' }}>Medium</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Spinner size="lg" />
          <p style={{ marginTop: 'var(--spacing-2)', fontSize: '0.875rem' }}>Large</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Variants',
    render: () => (
      <div style={{ display: 'flex', gap: 'var(--spacing-6)', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ textAlign: 'center' }}>
          <Spinner />
          <p style={{ marginTop: 'var(--spacing-2)', fontSize: '0.875rem' }}>Default</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Spinner variant="primary" />
          <p style={{ marginTop: 'var(--spacing-2)', fontSize: '0.875rem' }}>Primary</p>
        </div>
      </div>
    ),
  },
];

export default previews;
