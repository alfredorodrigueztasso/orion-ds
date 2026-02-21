/**
 * Preview module for Card component
 * Manually created for Phase 1 pilot testing
 *
 * Based on: packages/react/src/components/Card/Card.stories.tsx
 */

import React from 'react';
import { Card, Button } from '@orion-ds/react';

export const previews = [
  {
    title: 'All Variants',
    render: () => (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-4)' }}>
        <Card variant="base">
          <Card.Header>Base Card</Card.Header>
          <Card.Body>This is a base card with default styling.</Card.Body>
          <Card.Footer>
            <Button size="sm">Action</Button>
          </Card.Footer>
        </Card>

        <Card variant="outlined">
          <Card.Header>Outlined Card</Card.Header>
          <Card.Body>This card has a border outline.</Card.Body>
        </Card>

        <Card variant="elevated">
          <Card.Header>Elevated Card</Card.Header>
          <Card.Body>This card has elevation shadow.</Card.Body>
        </Card>
      </div>
    ),
  },
  {
    title: 'Interactive Card',
    render: () => (
      <Card variant="outlined" interactive style={{ maxWidth: '300px' }}>
        <Card.Header>Clickable Card</Card.Header>
        <Card.Body>
          This card has an interactive hover state. Try hovering over it.
        </Card.Body>
      </Card>
    ),
  },
];

export default previews;
