/**
 * Preview module for UserMenu section
 * Dropdown profile menus for SaaS applications
 */

import React from 'react';
import { UserMenu } from '@orion-ds/react';
import { User, Settings, CreditCard, HelpCircle, LogOut, Bell, Shield, Users } from 'lucide-react';

export const previews = [
  {
    title: 'Basic User Menu',
    render: () => (
      <div style={{ padding: 'var(--spacing-8)', display: 'flex', justifyContent: 'flex-end' }}>
        <UserMenu
          user={{
            name: 'Sarah Chen',
            email: 'sarah@acme.com',
            avatar: 'https://i.pravatar.cc/150?img=1',
          }}
          sections={[
            {
              id: 'account',
              items: [
                { id: 'profile', label: 'Profile', icon: <User size={16} />, href: '#' },
                { id: 'settings', label: 'Settings', icon: <Settings size={16} />, href: '#' },
                { id: 'billing', label: 'Billing', icon: <CreditCard size={16} />, href: '#' },
              ],
            },
            {
              id: 'actions',
              items: [
                { id: 'logout', label: 'Sign out', icon: <LogOut size={16} />, onClick: () => alert('Signed out'), danger: true },
              ],
            },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'With Status Indicator',
    render: () => (
      <div style={{ padding: 'var(--spacing-8)', display: 'flex', justifyContent: 'flex-end' }}>
        <UserMenu
          user={{
            name: 'Marcus Johnson',
            email: 'marcus@techflow.io',
            avatar: 'https://i.pravatar.cc/150?img=12',
            status: 'online',
            role: 'Pro Plan',
          }}
          sections={[
            {
              id: 'account',
              label: 'Account',
              items: [
                { id: 'profile', label: 'View Profile', icon: <User size={16} />, href: '#' },
                { id: 'settings', label: 'Account Settings', icon: <Settings size={16} />, href: '#' },
              ],
            },
            {
              id: 'workspace',
              label: 'Workspace',
              items: [
                { id: 'team', label: 'Team Members', icon: <Users size={16} />, href: '#' },
                { id: 'billing', label: 'Billing & Plans', icon: <CreditCard size={16} />, href: '#' },
              ],
            },
            {
              id: 'support',
              label: 'Support',
              items: [
                { id: 'help', label: 'Help Center', icon: <HelpCircle size={16} />, href: '#' },
              ],
            },
            {
              id: 'actions',
              items: [
                { id: 'logout', label: 'Sign out', icon: <LogOut size={16} />, danger: true },
              ],
            },
          ]}
          showHeader={true}
        />
      </div>
    ),
  },
  {
    title: 'Compact Menu - Avatar Only',
    render: () => (
      <div style={{ padding: 'var(--spacing-8)', display: 'flex', justifyContent: 'flex-end' }}>
        <UserMenu
          user={{
            name: 'Emily Rodriguez',
            email: 'emily@nexus.labs',
            avatar: 'https://i.pravatar.cc/150?img=5',
          }}
          sections={[
            {
              id: 'quick',
              items: [
                { id: 'profile', label: 'Profile', icon: <User size={16} /> },
                { id: 'settings', label: 'Settings', icon: <Settings size={16} /> },
                { id: 'logout', label: 'Logout', icon: <LogOut size={16} />, danger: true },
              ],
            },
          ]}
          compact={true}
          showHeader={false}
        />
      </div>
    ),
  },
  {
    title: 'With Initials Fallback',
    render: () => (
      <div style={{ padding: 'var(--spacing-8)', display: 'flex', justifyContent: 'flex-end' }}>
        <UserMenu
          user={{
            name: 'David Kim',
            email: 'david@datacorp.com',
            initials: 'DK',
            status: 'away',
          }}
          sections={[
            {
              id: 'account',
              items: [
                { id: 'profile', label: 'Profile', icon: <User size={16} />, href: '#' },
                { id: 'settings', label: 'Settings', icon: <Settings size={16} />, href: '#' },
              ],
            },
            {
              id: 'actions',
              items: [
                { id: 'logout', label: 'Sign out', icon: <LogOut size={16} />, danger: true },
              ],
            },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Full Menu - All Features',
    render: () => (
      <div style={{ padding: 'var(--spacing-8)', display: 'flex', justifyContent: 'flex-end' }}>
        <UserMenu
          user={{
            name: 'Lisa Thompson',
            email: 'lisa@brandhub.com',
            avatar: 'https://i.pravatar.cc/150?img=9',
            status: 'online',
            role: 'Enterprise',
          }}
          sections={[
            {
              id: 'account',
              label: 'Account',
              items: [
                { id: 'profile', label: 'Profile', icon: <User size={16} />, href: '#' },
                { id: 'settings', label: 'Settings', icon: <Settings size={16} />, href: '#' },
                { id: 'notifications', label: 'Notifications', icon: <Bell size={16} />, href: '#' },
              ],
            },
            {
              id: 'workspace',
              label: 'Workspace',
              items: [
                { id: 'team', label: 'Team Members', icon: <Users size={16} />, href: '#' },
                { id: 'billing', label: 'Billing', icon: <CreditCard size={16} />, href: '#' },
                { id: 'security', label: 'Security', icon: <Shield size={16} />, href: '#' },
              ],
            },
            {
              id: 'support',
              label: 'Support & Resources',
              items: [
                { id: 'help', label: 'Help Center', icon: <HelpCircle size={16} />, href: '#' },
                { id: 'docs', label: 'Documentation', href: '#' },
                { id: 'api', label: 'API Reference', href: '#' },
              ],
            },
            {
              id: 'actions',
              items: [
                { id: 'logout', label: 'Sign out', icon: <LogOut size={16} />, danger: true },
              ],
            },
          ]}
          align="end"
          showHeader={true}
        />
      </div>
    ),
  },
];

export default previews;
