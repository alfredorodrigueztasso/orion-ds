/**
 * Preview module for EmptyState component
 * Empty state placeholders
 */

import React from 'react';
import { EmptyState, Button } from '@orion-ds/react';
import { Inbox, Search, FolderOpen, Plus } from 'lucide-react';

export const previews = [
  {
    title: 'No Messages',
    render: () => (
      <div style={{ padding: 'var(--spacing-8)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-control)' }}>
        <EmptyState
          icon={<Inbox size={48} />}
          title="No messages yet"
          description="When you receive messages, they'll appear here."
        />
      </div>
    ),
  },
  {
    title: 'No Search Results',
    render: () => (
      <div style={{ padding: 'var(--spacing-8)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-control)' }}>
        <EmptyState
          icon={<Search size={48} />}
          title="No results found"
          description="Try adjusting your search terms or filters."
          action={
            <Button variant="secondary" onClick={() => alert('Clear filters')}>
              Clear filters
            </Button>
          }
        />
      </div>
    ),
  },
  {
    title: 'Empty Folder',
    render: () => (
      <div style={{ padding: 'var(--spacing-8)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-control)' }}>
        <EmptyState
          icon={<FolderOpen size={48} />}
          title="This folder is empty"
          description="Get started by uploading your first file."
          action={
            <Button variant="primary" icon={<Plus size={20} />} onClick={() => alert('Upload file')}>
              Upload file
            </Button>
          }
        />
      </div>
    ),
  },
];

export default previews;
