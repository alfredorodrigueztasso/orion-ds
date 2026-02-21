/**
 * Preview module for EmptyState section
 * Placeholder sections for empty states in SaaS applications
 */

import React from 'react';
import { EmptyState, Button } from '@orion-ds/react';
import { Inbox, Users, FileText, Search, FolderOpen, Plus, Upload } from 'lucide-react';

export const previews = [
  {
    title: 'Default Empty State',
    render: () => (
      <EmptyState
        icon={<Inbox size={48} />}
        title="No messages yet"
        description="When you receive messages, they'll appear here."
        action={
          <Button icon={<Plus size={16} />}>
            Compose Message
          </Button>
        }
      />
    ),
  },
  {
    title: 'With Primary and Secondary Actions',
    render: () => (
      <EmptyState
        icon={<Users size={48} />}
        title="No team members yet"
        description="Start building your team by inviting members to collaborate on projects."
        action={
          <Button icon={<Plus size={16} />}>
            Invite Team Member
          </Button>
        }
        secondaryAction={
          <Button variant="ghost">
            Import from CSV
          </Button>
        }
      />
    ),
  },
  {
    title: 'Search Results Empty State',
    render: () => (
      <EmptyState
        icon={<Search size={48} />}
        title="No results found"
        description="We could not find any results for design system. Try adjusting your search terms."
        action={
          <Button variant="ghost">
            Clear Search
          </Button>
        }
        variant="compact"
      />
    ),
  },
  {
    title: 'File Upload Empty State',
    render: () => (
      <EmptyState
        icon={<Upload size={48} />}
        title="Upload your first file"
        description="Drag and drop files here, or click the button below to browse your computer."
        action={
          <Button icon={<Upload size={16} />}>
            Choose Files
          </Button>
        }
        size="lg"
      />
    ),
  },
  {
    title: 'Compact Variant',
    render: () => (
      <div style={{ padding: 'var(--spacing-8)', background: 'var(--surface-subtle)', borderRadius: 'var(--radius-control)' }}>
        <EmptyState
          icon={<FileText size={32} />}
          title="No documents"
          description="Create your first document to get started."
          action={
            <Button size="sm" icon={<Plus size={14} />}>
              New Document
            </Button>
          }
          variant="compact"
          size="sm"
        />
      </div>
    ),
  },
  {
    title: 'Full Page Variant',
    render: () => (
      <div style={{ minHeight: '400px', display: 'flex' }}>
        <EmptyState
          icon={<FolderOpen size={64} />}
          title="Welcome to your workspace"
          description="This is where all your projects will live. Get started by creating your first project."
          action={
            <Button size="lg" icon={<Plus size={20} />}>
              Create Project
            </Button>
          }
          secondaryAction={
            <Button size="lg" variant="ghost">
              Watch Tutorial
            </Button>
          }
          variant="full-page"
          size="lg"
        />
      </div>
    ),
  },
  {
    title: 'With Custom Illustration',
    render: () => (
      <EmptyState
        illustration={
          <div
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--color-brand-400), var(--color-brand-600))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Inbox size={48} style={{ color: 'white' }} />
          </div>
        }
        title="All caught up!"
        description="You've reviewed all your notifications. Check back later for updates."
        size="lg"
      />
    ),
  },
  {
    title: 'Minimal (No Action)',
    render: () => (
      <div style={{ padding: 'var(--spacing-8)', background: 'var(--surface-layer)', borderRadius: 'var(--radius-control)' }}>
        <EmptyState
          icon={<FileText size={36} />}
          title="No drafts"
          description="Your draft documents will appear here."
          variant="compact"
        />
      </div>
    ),
  },
];

export default previews;
