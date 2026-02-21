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
          <Switch />
          <span>Default Switch</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)' }}>
          <Switch defaultChecked />
          <span>Checked by Default</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)' }}>
          <Switch disabled />
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
          <Switch size="sm" />
          <span>Small Switch</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)' }}>
          <Switch size="md" />
          <span>Medium Switch</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)' }}>
          <Switch size="lg" />
          <span>Large Switch</span>
        </div>
      </div>
    ),
  },
];

export default previews;
