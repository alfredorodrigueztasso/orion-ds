/**
 * Preview module for Sidebar component
 * Navigation sidebar for SaaS applications
 */

import React, { useState } from 'react';
import { Sidebar, Badge } from '@orion-ds/react';
import { Home, Folder, Users, Settings, HelpCircle, Search, BarChart, Calendar, Mail, FileText } from 'lucide-react';

export const previews = [
  {
    title: 'Basic Sidebar',
    render: () => {
      const [activeItem, setActiveItem] = useState('dashboard');

      const sections = [
        {
          items: [
            { id: 'dashboard', label: 'Dashboard', icon: <Home size={18} />, href: '#dashboard' },
            { id: 'projects', label: 'Projects', icon: <Folder size={18} />, href: '#projects', badge: '12' },
            { id: 'team', label: 'Team', icon: <Users size={18} />, href: '#team' },
            { id: 'settings', label: 'Settings', icon: <Settings size={18} />, href: '#settings' },
          ],
        },
      ];

      return (
        <div style={{ height: '500px', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-control)', overflow: 'hidden' }}>
          <Sidebar
            sections={sections}
            activeItem={activeItem}
            header={
              <div style={{ padding: 'var(--spacing-4)', fontWeight: 600 }}>
                My App
              </div>
            }
          />
        </div>
      );
    },
  },
  {
    title: 'With Sections & Footer',
    render: () => {
      const [activeItem, setActiveItem] = useState('home');

      const sections = [
        {
          title: 'Main',
          items: [
            { id: 'home', label: 'Home', icon: <Home size={18} />, onClick: () => {} },
            { id: 'search', label: 'Search', icon: <Search size={18} />, onClick: () => {} },
            { id: 'analytics', label: 'Analytics', icon: <BarChart size={18} />, onClick: () => {}, badge: <Badge variant="info">New</Badge> },
          ],
        },
        {
          title: 'Workspace',
          items: [
            { id: 'projects', label: 'Projects', icon: <Folder size={18} />, onClick: () => {} },
            { id: 'calendar', label: 'Calendar', icon: <Calendar size={18} />, onClick: () => {} },
            { id: 'messages', label: 'Messages', icon: <Mail size={18} />, onClick: () => {}, badge: '5' },
          ],
        },
        {
          title: 'Other',
          items: [
            { id: 'docs', label: 'Documentation', icon: <FileText size={18} />, onClick: () => {} },
            { id: 'help', label: 'Help & Support', icon: <HelpCircle size={18} />, onClick: () => {} },
          ],
        },
      ];

      return (
        <div style={{ height: '600px', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-control)', overflow: 'hidden' }}>
          <Sidebar
            sections={sections}
            activeItem={activeItem}
            header={
              <div style={{ padding: 'var(--spacing-4)' }}>
                <div style={{ fontWeight: 700, fontSize: 'var(--font-size-lg)' }}>Orion</div>
                <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-tertiary)' }}>Design System</div>
              </div>
            }
            footer={
              <div style={{ padding: 'var(--spacing-4)', borderTop: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
                  <img src="https://i.pravatar.cc/150?img=68" alt="User" style={{ width: '32px', height: '32px', borderRadius: '50%' }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      John Doe
                    </div>
                    <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-tertiary)' }}>
                      john@example.com
                    </div>
                  </div>
                </div>
              </div>
            }
          />
        </div>
      );
    },
  },
  {
    title: 'Collapsible Sidebar',
    render: () => {
      const [activeItem, setActiveItem] = useState('dashboard');
      const [collapsed, setCollapsed] = useState(false);

      const sections = [
        {
          items: [
            { id: 'dashboard', label: 'Dashboard', icon: <Home size={18} />, onClick: () => setActiveItem('dashboard') },
            { id: 'projects', label: 'Projects', icon: <Folder size={18} />, onClick: () => setActiveItem('projects'), badge: '8' },
            { id: 'team', label: 'Team', icon: <Users size={18} />, onClick: () => setActiveItem('team') },
            { id: 'analytics', label: 'Analytics', icon: <BarChart size={18} />, onClick: () => setActiveItem('analytics') },
            { id: 'settings', label: 'Settings', icon: <Settings size={18} />, onClick: () => setActiveItem('settings') },
          ],
        },
      ];

      return (
        <div style={{ height: '500px', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-control)', overflow: 'hidden' }}>
          <Sidebar
            sections={sections}
            activeItem={activeItem}
            collapsed={collapsed}
            onCollapsedChange={setCollapsed}
            header={
              <div style={{ padding: 'var(--spacing-4)', textAlign: collapsed ? 'center' : 'left' }}>
                {collapsed ? '🚀' : 'My App'}
              </div>
            }
          />
        </div>
      );
    },
  },
  {
    title: 'With Nested Items',
    render: () => {
      const [activeItem, setActiveItem] = useState('overview');

      const sections = [
        {
          items: [
            { id: 'home', label: 'Home', icon: <Home size={18} />, onClick: () => setActiveItem('home') },
            {
              id: 'projects',
              label: 'Projects',
              icon: <Folder size={18} />,
              onClick: () => {},
              children: [
                { id: 'overview', label: 'Overview', onClick: () => setActiveItem('overview') },
                { id: 'active', label: 'Active', onClick: () => setActiveItem('active'), badge: '5' },
                { id: 'archived', label: 'Archived', onClick: () => setActiveItem('archived') },
              ],
            },
            { id: 'team', label: 'Team', icon: <Users size={18} />, onClick: () => setActiveItem('team') },
          ],
        },
      ];

      return (
        <div style={{ height: '500px', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-control)', overflow: 'hidden' }}>
          <Sidebar
            sections={sections}
            activeItem={activeItem}
            header={
              <div style={{ padding: 'var(--spacing-4)', fontWeight: 600 }}>
                Navigation
              </div>
            }
          />
        </div>
      );
    },
  },
  {
    title: 'Floating Variant',
    render: () => {
      const [activeItem, setActiveItem] = useState('dashboard');

      const sections = [
        {
          items: [
            { id: 'dashboard', label: 'Dashboard', icon: <Home size={18} />, onClick: () => setActiveItem('dashboard') },
            { id: 'projects', label: 'Projects', icon: <Folder size={18} />, onClick: () => setActiveItem('projects') },
            { id: 'team', label: 'Team', icon: <Users size={18} />, onClick: () => setActiveItem('team') },
            { id: 'settings', label: 'Settings', icon: <Settings size={18} />, onClick: () => setActiveItem('settings') },
          ],
        },
      ];

      return (
        <div style={{ position: 'relative', height: '500px', background: 'var(--surface-subtle)', borderRadius: 'var(--radius-control)', overflow: 'hidden' }}>
          <Sidebar
            sections={sections}
            activeItem={activeItem}
            variant="floating"
            width={220}
          />
        </div>
      );
    },
  },
];

export default previews;
