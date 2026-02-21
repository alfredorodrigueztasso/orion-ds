/**
 * Preview module for Tabs component
 * Migrated from ComponentPreview.tsx hardcoded examples
 */

import React from 'react';
import { Tabs } from '@orion-ds/react';
import { User, Settings, Bell } from 'lucide-react';

export const previews = [
  {
    title: 'With Icons and Badge',
    render: () => (
      <Tabs
        defaultTab="tab1"
        tabs={[
          {
            id: 'tab1',
            label: 'Profile',
            icon: <User size={18} />,
            content: (
              <div style={{ padding: 'var(--spacing-4)' }}>
                <h3>Profile Content</h3>
                <p>This is the profile tab content.</p>
              </div>
            ),
          },
          {
            id: 'tab2',
            label: 'Settings',
            icon: <Settings size={18} />,
            content: (
              <div style={{ padding: 'var(--spacing-4)' }}>
                <h3>Settings Content</h3>
                <p>Configure your preferences here.</p>
              </div>
            ),
          },
          {
            id: 'tab3',
            label: 'Notifications',
            icon: <Bell size={18} />,
            badge: 5,
            content: (
              <div style={{ padding: 'var(--spacing-4)' }}>
                <h3>Notifications</h3>
                <p>You have 5 new notifications.</p>
              </div>
            ),
          },
        ]}
      />
    ),
  },
];

export default previews;
