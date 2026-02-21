/**
 * Preview module for Divider component
 * Visual content separators
 */

import React from 'react';
import { Divider } from '@orion-ds/react';

export const previews = [
  {
    title: 'Horizontal Dividers',
    render: () => (
      <div style={{ display: 'grid', gap: 'var(--spacing-6)' }}>
        <div>
          <p style={{ margin: 0, marginBottom: 'var(--spacing-3)' }}>Section 1</p>
          <Divider />
          <p style={{ margin: 0, marginTop: 'var(--spacing-3)' }}>Section 2</p>
        </div>
        <div>
          <p style={{ margin: 0, marginBottom: 'var(--spacing-3)' }}>Section 1</p>
          <Divider variant="dashed" />
          <p style={{ margin: 0, marginTop: 'var(--spacing-3)' }}>Section 2</p>
        </div>
      </div>
    ),
  },
  {
    title: 'With Label',
    render: () => (
      <div style={{ display: 'grid', gap: 'var(--spacing-6)' }}>
        <div>
          <p style={{ margin: 0, marginBottom: 'var(--spacing-3)' }}>Login options</p>
          <Divider>OR</Divider>
          <p style={{ margin: 0, marginTop: 'var(--spacing-3)' }}>Social login</p>
        </div>
        <div>
          <p style={{ margin: 0, marginBottom: 'var(--spacing-3)' }}>Previous items</p>
          <Divider>More</Divider>
          <p style={{ margin: 0, marginTop: 'var(--spacing-3)' }}>Additional items</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Vertical Divider',
    render: () => (
      <div style={{ display: 'flex', gap: 'var(--spacing-4)', alignItems: 'center', minHeight: '80px' }}>
        <div style={{ padding: 'var(--spacing-4)' }}>
          <p style={{ margin: 0 }}>Left content</p>
          <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Additional info</p>
        </div>
        <Divider orientation="vertical" style={{ height: '60px' }} />
        <div style={{ padding: 'var(--spacing-4)' }}>
          <p style={{ margin: 0 }}>Right content</p>
          <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Additional info</p>
        </div>
      </div>
    ),
  },
];

export default previews;
