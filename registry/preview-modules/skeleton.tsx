/**
 * Preview module for Skeleton component
 * Loading state placeholders
 */

import React from 'react';
import { Skeleton } from '@orion-ds/react';

export const previews = [
  {
    title: 'Text Skeleton',
    render: () => (
      <div style={{ display: 'grid', gap: 'var(--spacing-3)', maxWidth: '400px' }}>
        <Skeleton width="100%" height="20px" />
        <Skeleton width="80%" height="20px" />
        <Skeleton width="90%" height="20px" />
      </div>
    ),
  },
  {
    title: 'Card Skeleton',
    render: () => (
      <div style={{ display: 'grid', gap: 'var(--spacing-4)', maxWidth: '400px' }}>
        <div style={{ display: 'flex', gap: 'var(--spacing-3)' }}>
          <Skeleton width="48px" height="48px" style={{ borderRadius: '50%' }} />
          <div style={{ flex: 1, display: 'grid', gap: 'var(--spacing-2)' }}>
            <Skeleton width="60%" height="16px" />
            <Skeleton width="40%" height="14px" />
          </div>
        </div>
        <Skeleton width="100%" height="200px" />
        <Skeleton width="100%" height="16px" />
        <Skeleton width="90%" height="16px" />
      </div>
    ),
  },
  {
    title: 'Variants',
    render: () => (
      <div style={{ display: 'grid', gap: 'var(--spacing-4)', maxWidth: '400px' }}>
        <div>
          <p style={{ marginBottom: 'var(--spacing-2)', fontSize: '0.875rem' }}>Circle</p>
          <Skeleton width="64px" height="64px" style={{ borderRadius: '50%' }} />
        </div>
        <div>
          <p style={{ marginBottom: 'var(--spacing-2)', fontSize: '0.875rem' }}>Rectangle</p>
          <Skeleton width="100%" height="120px" />
        </div>
        <div>
          <p style={{ marginBottom: 'var(--spacing-2)', fontSize: '0.875rem' }}>Button</p>
          <Skeleton width="120px" height="40px" style={{ borderRadius: 'var(--radius-control)' }} />
        </div>
      </div>
    ),
  },
];

export default previews;
