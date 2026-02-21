/**
 * Preview module for Avatar component
 * Migrated from ComponentPreview.tsx hardcoded examples
 */

import React from 'react';
import { Avatar } from '@orion-ds/react';

export const previews = [
  {
    title: 'Sizes',
    render: () => (
      <div style={{ display: 'flex', gap: 'var(--spacing-4)', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ textAlign: 'center' }}>
          <Avatar size="sm" src="https://i.pravatar.cc/150?img=1" alt="User" />
          <p style={{ marginTop: 'var(--spacing-2)', fontSize: '0.875rem' }}>Small</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Avatar src="https://i.pravatar.cc/150?img=2" alt="User" />
          <p style={{ marginTop: 'var(--spacing-2)', fontSize: '0.875rem' }}>Medium</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Avatar size="lg" src="https://i.pravatar.cc/150?img=3" alt="User" />
          <p style={{ marginTop: 'var(--spacing-2)', fontSize: '0.875rem' }}>Large</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Initials Fallback',
    render: () => (
      <div style={{ display: 'flex', gap: 'var(--spacing-4)', alignItems: 'center', flexWrap: 'wrap' }}>
        <Avatar>AB</Avatar>
        <Avatar>CD</Avatar>
        <Avatar>EF</Avatar>
      </div>
    ),
  },
  {
    title: 'With Status',
    render: () => (
      <div style={{ display: 'flex', gap: 'var(--spacing-4)', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ position: 'relative' }}>
          <Avatar src="https://i.pravatar.cc/150?img=4" alt="Online user" />
          <div style={{
            position: 'absolute',
            bottom: '0',
            right: '0',
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            background: 'var(--status-success)',
            border: '2px solid var(--surface-base)'
          }} />
        </div>
        <div style={{ position: 'relative' }}>
          <Avatar src="https://i.pravatar.cc/150?img=5" alt="Away user" />
          <div style={{
            position: 'absolute',
            bottom: '0',
            right: '0',
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            background: 'var(--status-warning)',
            border: '2px solid var(--surface-base)'
          }} />
        </div>
        <div style={{ position: 'relative' }}>
          <Avatar src="https://i.pravatar.cc/150?img=6" alt="Offline user" />
          <div style={{
            position: 'absolute',
            bottom: '0',
            right: '0',
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            background: 'var(--border-subtle)',
            border: '2px solid var(--surface-base)'
          }} />
        </div>
      </div>
    ),
  },
];

export default previews;
