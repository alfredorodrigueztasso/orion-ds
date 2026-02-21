/**
 * Preview module for NotificationCenter component
 * SaaS notification panel with grouping and actions
 */

import React, { useState } from 'react';
import { NotificationCenter } from '@orion-ds/react';
import { Info, CheckCircle, AlertTriangle, XCircle, Bell } from 'lucide-react';

export const previews = [
  {
    title: 'Basic Notifications',
    render: () => {
      const [notifications, setNotifications] = useState([
        {
          id: '1',
          type: 'info' as const,
          title: 'New team member',
          message: 'Sarah Johnson joined your workspace',
          relativeTime: '2 min ago',
          timestamp: new Date(Date.now() - 120000).toISOString(),
          read: false,
        },
        {
          id: '2',
          type: 'success' as const,
          title: 'Deployment successful',
          message: 'Your app was deployed to production',
          relativeTime: '15 min ago',
          timestamp: new Date(Date.now() - 900000).toISOString(),
          read: false,
        },
        {
          id: '3',
          type: 'warning' as const,
          title: 'Storage limit reached',
          message: 'You are using 90% of your storage quota',
          relativeTime: '1 hour ago',
          timestamp: new Date(Date.now() - 3600000).toISOString(),
          read: true,
        },
      ]);

      const handleMarkAsRead = (id: string) => {
        setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n));
      };

      const handleMarkAllAsRead = () => {
        setNotifications(notifications.map(n => ({ ...n, read: true })));
      };

      return (
        <div style={{ maxWidth: '400px' }}>
          <NotificationCenter
            notifications={notifications}
            onMarkAsRead={handleMarkAsRead}
            onMarkAllAsRead={handleMarkAllAsRead}
          />
        </div>
      );
    },
  },
  {
    title: 'Grouped by Category',
    render: () => {
      const [notifications, setNotifications] = useState([
        {
          id: '1',
          type: 'info' as const,
          title: 'Pull request opened',
          message: 'Alex opened PR #42',
          relativeTime: '5 min ago',
          timestamp: new Date().toISOString(),
          read: false,
          category: 'Development',
        },
        {
          id: '2',
          type: 'success' as const,
          title: 'Tests passed',
          message: 'All CI checks completed',
          relativeTime: '10 min ago',
          timestamp: new Date().toISOString(),
          read: false,
          category: 'Development',
        },
        {
          id: '3',
          type: 'info' as const,
          title: 'New comment',
          message: 'Lisa commented on your post',
          relativeTime: '1 hour ago',
          timestamp: new Date().toISOString(),
          read: true,
          category: 'Social',
        },
        {
          id: '4',
          type: 'warning' as const,
          title: 'Invoice due',
          message: 'Payment due in 3 days',
          relativeTime: '2 hours ago',
          timestamp: new Date().toISOString(),
          read: false,
          category: 'Billing',
        },
      ]);

      const handleMarkAsRead = (id: string) => {
        setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n));
      };

      return (
        <div style={{ maxWidth: '400px' }}>
          <NotificationCenter
            notifications={notifications}
            onMarkAsRead={handleMarkAsRead}
            groupByCategory
          />
        </div>
      );
    },
  },
  {
    title: 'With Avatars & Actions',
    render: () => {
      const [notifications, setNotifications] = useState([
        {
          id: '1',
          title: 'John mentioned you',
          message: 'Hey @you, can you review this?',
          relativeTime: 'Just now',
          timestamp: new Date().toISOString(),
          read: false,
          avatar: 'https://i.pravatar.cc/150?img=12',
          href: '/mentions/1',
        },
        {
          id: '2',
          title: 'Emma liked your post',
          message: 'Your post "Design Systems in 2024" got 50+ likes',
          relativeTime: '30 min ago',
          timestamp: new Date().toISOString(),
          read: false,
          avatar: 'https://i.pravatar.cc/150?img=45',
        },
        {
          id: '3',
          title: 'Michael assigned you a task',
          message: 'Complete the homepage redesign',
          relativeTime: '2 hours ago',
          timestamp: new Date().toISOString(),
          read: true,
          avatar: 'https://i.pravatar.cc/150?img=33',
          onClick: () => alert('Navigate to task'),
        },
      ]);

      const handleDismiss = (id: string) => {
        setNotifications(notifications.filter(n => n.id !== id));
      };

      return (
        <div style={{ maxWidth: '400px' }}>
          <NotificationCenter
            notifications={notifications}
            onDismiss={handleDismiss}
            onViewAll={() => alert('View all notifications')}
          />
        </div>
      );
    },
  },
  {
    title: 'Empty State',
    render: () => {
      return (
        <div style={{ maxWidth: '400px' }}>
          <NotificationCenter
            notifications={[]}
            emptyMessage="You're all caught up!"
          />
        </div>
      );
    },
  },
  {
    title: 'Loading State',
    render: () => {
      return (
        <div style={{ maxWidth: '400px' }}>
          <NotificationCenter
            notifications={[]}
            loading
          />
        </div>
      );
    },
  },
];

export default previews;
