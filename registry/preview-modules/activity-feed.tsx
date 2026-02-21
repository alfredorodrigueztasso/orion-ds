/**
 * Preview module for ActivityFeed section
 * Timeline of events and activities for SaaS dashboards
 */

import React, { useState } from 'react';
import { ActivityFeed } from '@orion-ds/react';
import { MessageSquare, Edit, Plus, CheckCircle, Upload } from 'lucide-react';

const sampleActivities = [
  {
    id: '1',
    type: 'comment',
    actor: {
      name: 'Sarah Chen',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    title: 'commented on "Dashboard Redesign"',
    description: 'This looks great! Can we add more spacing between the cards?',
    relativeTime: '2 minutes ago',
    iconVariant: 'primary',
  },
  {
    id: '2',
    type: 'update',
    actor: {
      name: 'Mike Johnson',
      avatar: 'https://i.pravatar.cc/150?img=2',
    },
    title: 'updated the project status',
    relativeTime: '1 hour ago',
    metadata: {
      Status: 'In Progress',
      Priority: 'High',
    },
    iconVariant: 'success',
  },
  {
    id: '3',
    type: 'create',
    actor: {
      name: 'Alex Rivera',
      avatar: 'https://i.pravatar.cc/150?img=3',
    },
    title: 'created a new task "Update navigation"',
    relativeTime: '3 hours ago',
    iconVariant: 'warning',
  },
  {
    id: '4',
    type: 'complete',
    actor: {
      name: 'Jordan Lee',
      avatar: 'https://i.pravatar.cc/150?img=4',
    },
    title: 'completed "API Integration"',
    relativeTime: '5 hours ago',
    iconVariant: 'success',
  },
  {
    id: '5',
    type: 'upload',
    actor: {
      name: 'Taylor Kim',
      avatar: 'https://i.pravatar.cc/150?img=5',
    },
    title: 'uploaded 3 design files',
    relativeTime: '1 day ago',
    metadata: {
      Files: 'wireframe-v2.fig, mockup.sketch, icons.svg',
    },
  },
];

export const previews = [
  {
    title: 'Basic Activity Feed',
    render: () => (
      <div style={{ maxWidth: '600px' }}>
        <ActivityFeed activities={sampleActivities.slice(0, 4)} />
      </div>
    ),
  },
  {
    title: 'With Filters',
    render: () => {
      const [activeFilter, setActiveFilter] = useState('all');

      const filters = [
        { label: 'All Activity', value: 'all', count: 24 },
        { label: 'Comments', value: 'comment', count: 8 },
        { label: 'Updates', value: 'update', count: 12 },
        { label: 'Completed', value: 'complete', count: 4 },
      ];

      return (
        <div style={{ maxWidth: '600px' }}>
          <ActivityFeed
            activities={sampleActivities}
            showFilters
            filters={filters}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </div>
      );
    },
  },
  {
    title: 'Compact Mode',
    render: () => (
      <div style={{ maxWidth: '600px' }}>
        <ActivityFeed
          activities={sampleActivities}
          compact
        />
      </div>
    ),
  },
  {
    title: 'With Load More',
    render: () => {
      const [loadedCount, setLoadedCount] = useState(3);

      return (
        <div style={{ maxWidth: '600px' }}>
          <ActivityFeed
            activities={sampleActivities.slice(0, loadedCount)}
            hasMore={loadedCount < sampleActivities.length}
            onLoadMore={() => setLoadedCount(prev => Math.min(prev + 2, sampleActivities.length))}
          />
        </div>
      );
    },
  },
  {
    title: 'Loading State',
    render: () => (
      <div style={{ maxWidth: '600px' }}>
        <ActivityFeed
          activities={sampleActivities.slice(0, 2)}
          loading
        />
      </div>
    ),
  },
  {
    title: 'Empty State',
    render: () => (
      <div style={{ maxWidth: '600px' }}>
        <ActivityFeed
          activities={[]}
          emptyMessage="No recent activity. Start by creating a task or commenting on a project."
        />
      </div>
    ),
  },
];

export default previews;
