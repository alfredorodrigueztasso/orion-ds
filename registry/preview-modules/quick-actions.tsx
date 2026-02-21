/**
 * Preview module for QuickActions component
 * FAB and action bar for quick access to common actions
 */

import React from 'react';
import { QuickActions } from '@orion-ds/react';
import { Plus, Upload, Download, Edit, Share, Trash2, MessageSquare, Phone } from 'lucide-react';

export const previews = [
  {
    title: 'FAB (Floating Action Button)',
    render: () => {
      const actions = [
        {
          id: 'new',
          label: 'New Document',
          icon: <Plus size={20} />,
          onClick: () => alert('New Document'),
          variant: 'primary' as const,
        },
        {
          id: 'upload',
          label: 'Upload File',
          icon: <Upload size={20} />,
          onClick: () => alert('Upload File'),
        },
        {
          id: 'share',
          label: 'Share',
          icon: <Share size={20} />,
          onClick: () => alert('Share'),
        },
      ];

      return (
        <div style={{ position: 'relative', height: '400px', background: 'var(--surface-subtle)', borderRadius: 'var(--radius-control)' }}>
          <div style={{ padding: 'var(--spacing-8)', color: 'var(--text-secondary)' }}>
            Click the FAB button in the bottom-right corner to expand actions
          </div>
          <QuickActions
            variant="fab"
            actions={actions}
            position="bottom-right"
          />
        </div>
      );
    },
  },
  {
    title: 'FAB with Labels',
    render: () => {
      const actions = [
        {
          id: 'message',
          label: 'Send Message',
          icon: <MessageSquare size={20} />,
          onClick: () => alert('Send Message'),
        },
        {
          id: 'call',
          label: 'Start Call',
          icon: <Phone size={20} />,
          onClick: () => alert('Start Call'),
        },
        {
          id: 'edit',
          label: 'Edit Profile',
          icon: <Edit size={20} />,
          onClick: () => alert('Edit Profile'),
        },
      ];

      return (
        <div style={{ position: 'relative', height: '400px', background: 'var(--surface-subtle)', borderRadius: 'var(--radius-control)' }}>
          <div style={{ padding: 'var(--spacing-8)', color: 'var(--text-secondary)' }}>
            FAB with visible labels on hover/expand
          </div>
          <QuickActions
            variant="fab"
            actions={actions}
            position="bottom-right"
            showLabels
          />
        </div>
      );
    },
  },
  {
    title: 'Action Bar',
    render: () => {
      const actions = [
        {
          id: 'edit',
          label: 'Edit',
          icon: <Edit size={18} />,
          onClick: () => alert('Edit'),
          shortcut: '⌘E',
        },
        {
          id: 'share',
          label: 'Share',
          icon: <Share size={18} />,
          onClick: () => alert('Share'),
          shortcut: '⌘S',
        },
        {
          id: 'download',
          label: 'Download',
          icon: <Download size={18} />,
          onClick: () => alert('Download'),
          shortcut: '⌘D',
        },
        {
          id: 'delete',
          label: 'Delete',
          icon: <Trash2 size={18} />,
          onClick: () => alert('Delete'),
          variant: 'danger' as const,
        },
      ];

      return (
        <div style={{ position: 'relative', height: '300px', background: 'var(--surface-subtle)', borderRadius: 'var(--radius-control)' }}>
          <div style={{ padding: 'var(--spacing-8)', color: 'var(--text-secondary)' }}>
            Horizontal action bar at the bottom
          </div>
          <QuickActions
            variant="bar"
            actions={actions}
            position="bottom-center"
            showLabels
          />
        </div>
      );
    },
  },
  {
    title: 'Menu Variant',
    render: () => {
      const actions = [
        {
          id: 'new',
          label: 'New Item',
          icon: <Plus size={18} />,
          onClick: () => alert('New Item'),
          shortcut: '⌘N',
        },
        {
          id: 'upload',
          label: 'Upload',
          icon: <Upload size={18} />,
          onClick: () => alert('Upload'),
          shortcut: '⌘U',
        },
        {
          id: 'download',
          label: 'Download',
          icon: <Download size={18} />,
          onClick: () => alert('Download'),
        },
        {
          id: 'share',
          label: 'Share',
          icon: <Share size={18} />,
          onClick: () => alert('Share'),
          disabled: true,
        },
      ];

      return (
        <div style={{ position: 'relative', height: '400px', background: 'var(--surface-subtle)', borderRadius: 'var(--radius-control)' }}>
          <div style={{ padding: 'var(--spacing-8)', color: 'var(--text-secondary)' }}>
            Click the menu button to reveal actions
          </div>
          <QuickActions
            variant="menu"
            actions={actions}
            position="bottom-right"
          />
        </div>
      );
    },
  },
  {
    title: 'Different Positions',
    render: () => {
      const actions = [
        {
          id: 'action',
          label: 'Quick Action',
          icon: <Plus size={20} />,
          onClick: () => alert('Quick Action'),
          variant: 'primary' as const,
        },
      ];

      return (
        <div style={{ position: 'relative', height: '500px', background: 'var(--surface-subtle)', borderRadius: 'var(--radius-control)' }}>
          <div style={{ padding: 'var(--spacing-8)', color: 'var(--text-secondary)', textAlign: 'center' }}>
            FABs in different positions (top-left, top-right, bottom-left, bottom-right)
          </div>
          <QuickActions
            variant="fab"
            actions={actions}
            position="top-left"
            offset={16}
          />
          <QuickActions
            variant="fab"
            actions={actions}
            position="top-right"
            offset={16}
          />
          <QuickActions
            variant="fab"
            actions={actions}
            position="bottom-left"
            offset={16}
          />
          <QuickActions
            variant="fab"
            actions={actions}
            position="bottom-right"
            offset={16}
          />
        </div>
      );
    },
  },
];

export default previews;
