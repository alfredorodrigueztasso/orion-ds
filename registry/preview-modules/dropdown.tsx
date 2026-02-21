/**
 * Preview module for Dropdown component
 * Menu that appears below a trigger element
 */

import React, { useState } from 'react';
import { Dropdown, Button } from '@orion-ds/react';
import { MoreVertical, Edit, Copy, Trash2, Download, Share2 } from 'lucide-react';

export const previews = [
  {
    title: 'Basic Dropdown',
    render: () => {
      const items = [
        { id: 'edit', label: 'Edit', icon: <Edit size={16} />, onClick: () => alert('Edit clicked') },
        { id: 'copy', label: 'Copy', icon: <Copy size={16} />, onClick: () => alert('Copy clicked') },
        { id: 'delete', label: 'Delete', icon: <Trash2 size={16} />, danger: true, onClick: () => alert('Delete clicked') },
      ];

      return (
        <div style={{ padding: 'var(--spacing-8)' }}>
          <Dropdown
            trigger={<Button variant="secondary" iconOnly icon={<MoreVertical size={20} />} aria-label="Options" />}
            items={items}
          />
        </div>
      );
    },
  },
  {
    title: 'With Text Button',
    render: () => {
      const items = [
        { id: 'download', label: 'Download', icon: <Download size={16} />, onClick: () => alert('Download') },
        { id: 'share', label: 'Share', icon: <Share2 size={16} />, onClick: () => alert('Share') },
        { id: 'copy', label: 'Copy link', icon: <Copy size={16} />, onClick: () => alert('Copy link') },
      ];

      return (
        <div style={{ padding: 'var(--spacing-8)' }}>
          <Dropdown
            trigger={<Button variant="secondary">Actions</Button>}
            items={items}
          />
        </div>
      );
    },
  },
  {
    title: 'With Dividers',
    render: () => {
      const items = [
        { id: 'edit', label: 'Edit', icon: <Edit size={16} />, onClick: () => alert('Edit') },
        { id: 'copy', label: 'Duplicate', icon: <Copy size={16} />, onClick: () => alert('Duplicate') },
        { id: 'divider1', type: 'divider' as const },
        { id: 'share', label: 'Share', icon: <Share2 size={16} />, onClick: () => alert('Share') },
        { id: 'download', label: 'Download', icon: <Download size={16} />, onClick: () => alert('Download') },
        { id: 'divider2', type: 'divider' as const },
        { id: 'delete', label: 'Delete', icon: <Trash2 size={16} />, danger: true, onClick: () => alert('Delete') },
      ];

      return (
        <div style={{ padding: 'var(--spacing-8)' }}>
          <Dropdown
            trigger={<Button variant="secondary" icon={<MoreVertical size={20} />}>More</Button>}
            items={items}
          />
        </div>
      );
    },
  },
];

export default previews;
