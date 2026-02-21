/**
 * Preview module for Tooltip component
 * Hover information displays
 */

import React from 'react';
import { Tooltip, Button } from '@orion-ds/react';
import { Info, HelpCircle, Settings } from 'lucide-react';

export const previews = [
  {
    title: 'Placements',
    render: () => (
      <div style={{ display: 'flex', gap: 'var(--spacing-4)', flexWrap: 'wrap', justifyContent: 'center', padding: 'var(--spacing-8)' }}>
        <Tooltip content="Top tooltip" placement="top">
          <Button variant="secondary">Top</Button>
        </Tooltip>
        <Tooltip content="Right tooltip" placement="right">
          <Button variant="secondary">Right</Button>
        </Tooltip>
        <Tooltip content="Bottom tooltip" placement="bottom">
          <Button variant="secondary">Bottom</Button>
        </Tooltip>
        <Tooltip content="Left tooltip" placement="left">
          <Button variant="secondary">Left</Button>
        </Tooltip>
      </div>
    ),
  },
  {
    title: 'With Icons',
    render: () => (
      <div style={{ display: 'flex', gap: 'var(--spacing-4)', flexWrap: 'wrap', alignItems: 'center', padding: 'var(--spacing-4)' }}>
        <Tooltip content="More information about this feature">
          <Info size={20} style={{ cursor: 'pointer', color: 'var(--text-secondary)' }} />
        </Tooltip>
        <Tooltip content="Need help? Click for documentation">
          <HelpCircle size={20} style={{ cursor: 'pointer', color: 'var(--text-secondary)' }} />
        </Tooltip>
        <Tooltip content="Open settings panel">
          <Settings size={20} style={{ cursor: 'pointer', color: 'var(--text-secondary)' }} />
        </Tooltip>
      </div>
    ),
  },
  {
    title: 'Interactive Elements',
    render: () => (
      <div style={{ display: 'flex', gap: 'var(--spacing-4)', padding: 'var(--spacing-8)', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Tooltip content="Primary action button">
          <Button variant="primary">Save Changes</Button>
        </Tooltip>
        <Tooltip content="This action cannot be undone">
          <Button variant="secondary">Delete Account</Button>
        </Tooltip>
        <Tooltip content="Copy to clipboard">
          <Button variant="ghost" icon={<Info size={16} />}>Copy</Button>
        </Tooltip>
      </div>
    ),
  },
];

export default previews;
