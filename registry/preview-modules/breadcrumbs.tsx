/**
 * Preview module for Breadcrumbs section
 * Navigation breadcrumb trail for SaaS applications
 */

import React from 'react';
import { Breadcrumbs } from '@orion-ds/blocks';
import { Home, Folder, FileText, Settings, Users } from 'lucide-react';

export const previews = [
  {
    title: 'Basic Breadcrumbs',
    render: () => (
      <div style={{ maxWidth: '800px' }}>
        <Breadcrumbs
          items={[
            { id: 'home', label: 'Home', href: '/' },
            { id: 'projects', label: 'Projects', href: '/projects' },
            { id: 'current', label: 'Dashboard Redesign' },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'With Home Icon',
    render: () => (
      <div style={{ maxWidth: '800px' }}>
        <Breadcrumbs
          showHomeIcon
          items={[
            { id: 'home', label: 'Home', href: '/' },
            { id: 'settings', label: 'Settings', href: '/settings' },
            { id: 'account', label: 'Account', href: '/settings/account' },
            { id: 'profile', label: 'Profile' },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'With Custom Icons',
    render: () => (
      <div style={{ maxWidth: '800px' }}>
        <Breadcrumbs
          items={[
            { id: 'home', label: 'Home', href: '/', icon: <Home size={14} /> },
            { id: 'documents', label: 'Documents', href: '/documents', icon: <Folder size={14} /> },
            { id: 'file', label: 'Proposal.pdf', icon: <FileText size={14} /> },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Collapsed (Long Path)',
    render: () => (
      <div style={{ maxWidth: '800px' }}>
        <Breadcrumbs
          maxItems={4}
          itemsBeforeCollapse={1}
          itemsAfterCollapse={2}
          items={[
            { id: 'home', label: 'Home', href: '/' },
            { id: 'workspace', label: 'Workspace', href: '/workspace' },
            { id: 'projects', label: 'Projects', href: '/workspace/projects' },
            { id: 'design', label: 'Design System', href: '/workspace/projects/design' },
            { id: 'components', label: 'Components', href: '/workspace/projects/design/components' },
            { id: 'button', label: 'Button Component' },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Size Variants',
    render: () => (
      <div style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div>
          <p style={{ marginBottom: '8px', fontSize: '12px', color: 'var(--text-tertiary)' }}>Small</p>
          <Breadcrumbs
            size="sm"
            items={[
              { id: 'home', label: 'Home', href: '/' },
              { id: 'settings', label: 'Settings', href: '/settings' },
              { id: 'current', label: 'Notifications' },
            ]}
          />
        </div>
        <div>
          <p style={{ marginBottom: '8px', fontSize: '12px', color: 'var(--text-tertiary)' }}>Medium (Default)</p>
          <Breadcrumbs
            size="md"
            items={[
              { id: 'home', label: 'Home', href: '/' },
              { id: 'settings', label: 'Settings', href: '/settings' },
              { id: 'current', label: 'Notifications' },
            ]}
          />
        </div>
        <div>
          <p style={{ marginBottom: '8px', fontSize: '12px', color: 'var(--text-tertiary)' }}>Large</p>
          <Breadcrumbs
            size="lg"
            items={[
              { id: 'home', label: 'Home', href: '/' },
              { id: 'settings', label: 'Settings', href: '/settings' },
              { id: 'current', label: 'Notifications' },
            ]}
          />
        </div>
      </div>
    ),
  },
];

export default previews;
