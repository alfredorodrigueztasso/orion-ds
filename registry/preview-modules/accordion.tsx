/**
 * Preview module for Accordion component
 * Migrated from ComponentPreview.tsx hardcoded examples
 */

import React from 'react';
import { Accordion } from '@orion-ds/react';

export const previews = [
  {
    title: 'FAQ Example',
    render: () => (
      <Accordion
        defaultExpanded={['item1']}
        items={[
          {
            id: 'item1',
            title: 'What is Orion Design System?',
            content: (
              <p>
                Orion is an AI-first design system built on the Chain of Truth principle, providing
                token-governed components with zero visual drift.
              </p>
            ),
          },
          {
            id: 'item2',
            title: 'How do I install it?',
            content: (
              <p>
                You can install Orion with npm: <code>npm install @orion-ds/react</code>
              </p>
            ),
          },
          {
            id: 'item3',
            title: 'Does it support TypeScript?',
            content: <p>Yes! Orion is built with TypeScript and includes full type definitions.</p>,
          },
        ]}
      />
    ),
  },
];

export default previews;
