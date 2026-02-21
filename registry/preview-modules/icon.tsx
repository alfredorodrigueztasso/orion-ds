/**
 * Preview module for Icon component
 * Normalized wrapper for Lucide icons with semantic colors and sizing
 */

import React from 'react';
import { Icon } from '@orion-ds/react';
import { Search, AlertCircle, Check, Download, Heart, Star, Settings, Trash2 } from 'lucide-react';

export const previews = [
  {
    title: 'Icon Sizes',
    render: () => (
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-6)', padding: 'var(--spacing-4)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-2)' }}>
          <Icon icon={Search} size="xs" decorative />
          <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>xs (12px)</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-2)' }}>
          <Icon icon={Search} size="sm" decorative />
          <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>sm (16px)</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-2)' }}>
          <Icon icon={Search} size="md" decorative />
          <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>md (20px)</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-2)' }}>
          <Icon icon={Search} size="lg" decorative />
          <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>lg (24px)</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-2)' }}>
          <Icon icon={Search} size="xl" decorative />
          <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>xl (32px)</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Color Variants',
    render: () => (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-6)', padding: 'var(--spacing-4)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-2)' }}>
          <Icon icon={Star} size="lg" color="current" decorative />
          <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>current</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-2)' }}>
          <Icon icon={Star} size="lg" color="primary" decorative />
          <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>primary</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-2)' }}>
          <Icon icon={Star} size="lg" color="secondary" decorative />
          <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>secondary</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-2)' }}>
          <Icon icon={Star} size="lg" color="brand" decorative />
          <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>brand</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-2)' }}>
          <Icon icon={Check} size="lg" color="success" decorative />
          <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>success</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-2)' }}>
          <Icon icon={AlertCircle} size="lg" color="warning" decorative />
          <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>warning</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-2)' }}>
          <Icon icon={AlertCircle} size="lg" color="error" decorative />
          <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>error</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-2)' }}>
          <Icon icon={AlertCircle} size="lg" color="info" decorative />
          <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>info</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Semantic vs Decorative',
    render: () => (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)', padding: 'var(--spacing-4)' }}>
        <div>
          <h4 style={{ fontSize: '0.875rem', fontWeight: 600, margin: 0, marginBottom: 'var(--spacing-2)' }}>
            Decorative Icons (Hidden from screen readers)
          </h4>
          <div style={{ display: 'flex', gap: 'var(--spacing-4)', alignItems: 'center' }}>
            <Icon icon={Search} size="md" decorative />
            <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              Search results (icon is decorative, text provides meaning)
            </span>
          </div>
        </div>
        <div>
          <h4 style={{ fontSize: '0.875rem', fontWeight: 600, margin: 0, marginBottom: 'var(--spacing-2)' }}>
            Semantic Icons (Announced to screen readers)
          </h4>
          <div style={{ display: 'flex', gap: 'var(--spacing-4)', alignItems: 'center' }}>
            <Icon icon={AlertCircle} size="md" color="error" label="Error occurred" />
            <Icon icon={Check} size="md" color="success" label="Success" />
            <Icon icon={Settings} size="md" label="Settings" />
            <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              Icons with accessible labels for screen readers
            </span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Common Icons',
    render: () => (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-4)', padding: 'var(--spacing-4)' }}>
        <Icon icon={Search} size="lg" decorative />
        <Icon icon={Download} size="lg" decorative />
        <Icon icon={Heart} size="lg" decorative />
        <Icon icon={Star} size="lg" decorative />
        <Icon icon={Settings} size="lg" decorative />
        <Icon icon={Trash2} size="lg" decorative />
        <Icon icon={Check} size="lg" decorative />
        <Icon icon={AlertCircle} size="lg" decorative />
      </div>
    ),
  },
];

export default previews;
