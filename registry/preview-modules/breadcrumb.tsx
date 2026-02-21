/**
 * Preview module for Breadcrumb component
 * Migrated from ComponentPreview.tsx hardcoded examples
 */

import React from 'react';
import { Breadcrumb } from '@orion-ds/react';

export const previews = [
  {
    title: 'Navigation Example',
    render: () => (
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Components', href: '/components' },
          { label: 'Button', href: '/components/button' },
          { label: 'Documentation' },
        ]}
      />
    ),
  },
];

export default previews;
