/**
 * Preview module for ProgressBar component
 * Migrated from ComponentPreview.tsx hardcoded examples
 */

import React from 'react';
import { ProgressBar } from '@orion-ds/react';

export const previews = [
  {
    title: 'Progress States',
    render: () => (
      <div style={{ display: 'grid', gap: 'var(--spacing-4)' }}>
        <div>
          <p style={{ marginBottom: 'var(--spacing-2)' }}>25% Complete</p>
          <ProgressBar value={25} />
        </div>
        <div>
          <p style={{ marginBottom: 'var(--spacing-2)' }}>50% Complete (Success)</p>
          <ProgressBar value={50} variant="success" />
        </div>
        <div>
          <p style={{ marginBottom: 'var(--spacing-2)' }}>75% Complete (Warning)</p>
          <ProgressBar value={75} variant="warning" />
        </div>
        <div>
          <p style={{ marginBottom: 'var(--spacing-2)' }}>100% Complete (Success)</p>
          <ProgressBar value={100} variant="success" />
        </div>
      </div>
    ),
  },
];

export default previews;
