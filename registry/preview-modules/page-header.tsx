/**
 * Preview module for PageHeader component
 * SaaS dashboard page headers with breadcrumbs and actions
 */

import React, { useState } from 'react';
import { PageHeader, Button, Badge } from '@orion-ds/react';
import { Plus, Download, Settings, Filter } from 'lucide-react';

export const previews = [
  {
    title: 'Basic Page Header',
    render: () => {
      return (
        <PageHeader
          title="Users"
          description="Manage user accounts and permissions"
          actions={
            <Button variant="primary" icon={<Plus size={20} />}>
              Add User
            </Button>
          }
        />
      );
    },
  },
  {
    title: 'With Breadcrumbs',
    render: () => {
      return (
        <PageHeader
          breadcrumbs={[
            { label: 'Dashboard', href: '#dashboard' },
            { label: 'Settings', href: '#settings' },
            { label: 'Team' },
          ]}
          title="Team Settings"
          description="Manage team members and roles"
          actions={
            <>
              <Button variant="secondary" icon={<Settings size={20} />}>
                Configure
              </Button>
              <Button variant="primary" icon={<Plus size={20} />}>
                Invite Member
              </Button>
            </>
          }
        />
      );
    },
  },
  {
    title: 'With Tabs',
    render: () => {
      const [activeTab, setActiveTab] = useState('overview');

      return (
        <PageHeader
          title="Project Dashboard"
          description="Track project progress and metrics"
          badge={<Badge variant="success">Active</Badge>}
          tabs={[
            { id: 'overview', label: 'Overview' },
            { id: 'analytics', label: 'Analytics', badge: '12' },
            { id: 'settings', label: 'Settings' },
          ]}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          actions={
            <>
              <Button variant="ghost" icon={<Filter size={20} />}>
                Filter
              </Button>
              <Button variant="ghost" icon={<Download size={20} />}>
                Export
              </Button>
            </>
          }
        />
      );
    },
  },
  {
    title: 'With Back Link',
    render: () => {
      return (
        <PageHeader
          backLink={{
            label: 'Back to Projects',
            onClick: () => alert('Navigate back'),
          }}
          title="Project Details"
          description="View and edit project information"
          badge={<Badge variant="info">Draft</Badge>}
          actions={
            <>
              <Button variant="secondary">Cancel</Button>
              <Button variant="primary">Save Changes</Button>
            </>
          }
        />
      );
    },
  },
  {
    title: 'Compact Variant',
    render: () => {
      return (
        <PageHeader
          variant="compact"
          size="sm"
          breadcrumbs={[
            { label: 'Home', href: '#' },
            { label: 'Integrations' },
          ]}
          title="API Keys"
          actions={
            <Button variant="primary" size="sm" icon={<Plus size={16} />}>
              Create Key
            </Button>
          }
        />
      );
    },
  },
];

export default previews;
