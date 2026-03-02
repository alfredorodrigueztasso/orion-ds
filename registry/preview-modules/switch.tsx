/**
 * Preview module for Switch component
 * Migrated from ComponentPreview.tsx hardcoded examples
 */

import React from 'react';
import { Switch } from '@orion-ds/react';

export const previews = [
  {
    title: 'States',
    render: () => (
      <div style={{ display: 'grid', gap: 'var(--spacing-4)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)' }}>
          <Switch aria-label="Default Switch" />
          <span>Default Switch</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)' }}>
          <Switch defaultChecked aria-label="Checked by Default" />
          <span>Checked by Default</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)' }}>
          <Switch disabled aria-label="Disabled Switch" />
          <span>Disabled Switch</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Sizes',
    render: () => (
      <div style={{ display: 'grid', gap: 'var(--spacing-4)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)' }}>
          <Switch size="sm" aria-label="Small Switch" />
          <span>Small Switch</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)' }}>
          <Switch size="md" aria-label="Medium Switch" />
          <span>Medium Switch</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)' }}>
          <Switch size="lg" aria-label="Large Switch" />
          <span>Large Switch</span>
        </div>
      </div>
    ),
  },
];

export default previews;
