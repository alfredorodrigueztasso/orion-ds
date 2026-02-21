/**
 * Preview module for IconGallery component
 * Comprehensive browser for all Lucide icons with search and filtering
 */

import React from 'react';
import { IconGallery } from '@orion-ds/react';

export const previews = [
  {
    title: 'Icon Browser',
    render: () => (
      <div style={{ height: '600px', overflow: 'auto', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-control)' }}>
        <IconGallery />
      </div>
    ),
  },
];

export default previews;
