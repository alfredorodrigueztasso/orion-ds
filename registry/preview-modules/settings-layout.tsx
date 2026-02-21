/**
 * Preview module for SettingsLayout component
 * Settings page layout with navigation sidebar
 */

import React, { useState } from 'react';
import { SettingsLayout, Field, Button, Badge } from '@orion-ds/react';
import { User, Lock, Bell, CreditCard, Users, Settings as SettingsIcon } from 'lucide-react';

export const previews = [
  {
    title: 'Basic Settings Layout',
    render: () => {
      const [activeSection, setActiveSection] = useState('profile');

      const navigation = [
        {
          items: [
            { id: 'profile', label: 'Profile', icon: <User size={18} /> },
            { id: 'security', label: 'Security', icon: <Lock size={18} /> },
            { id: 'notifications', label: 'Notifications', icon: <Bell size={18} />, badge: '3' },
          ],
        },
      ];

      return (
        <div style={{ height: '500px', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-control)', overflow: 'hidden' }}>
          <SettingsLayout
            navigation={navigation}
            activeSection={activeSection}
            onNavigate={setActiveSection}
          >
            <div style={{ padding: 'var(--spacing-6)' }}>
              <h2 style={{ marginBottom: 'var(--spacing-6)' }}>
                {activeSection === 'profile' && 'Profile Settings'}
                {activeSection === 'security' && 'Security Settings'}
                {activeSection === 'notifications' && 'Notification Settings'}
              </h2>
              {activeSection === 'profile' && (
                <div style={{ maxWidth: '500px' }}>
                  <Field label="Full Name" type="text" defaultValue="John Doe" />
                  <Field label="Email" type="email" defaultValue="john@example.com" />
                  <Field label="Bio" type="textarea" rows={3} defaultValue="Designer & Developer" />
                  <div style={{ marginTop: 'var(--spacing-6)' }}>
                    <Button variant="primary">Save Changes</Button>
                  </div>
                </div>
              )}
              {activeSection === 'security' && (
                <div style={{ maxWidth: '500px' }}>
                  <Field label="Current Password" type="password" />
                  <Field label="New Password" type="password" />
                  <Field label="Confirm Password" type="password" />
                  <div style={{ marginTop: 'var(--spacing-6)' }}>
                    <Button variant="primary">Update Password</Button>
                  </div>
                </div>
              )}
              {activeSection === 'notifications' && (
                <div style={{ maxWidth: '500px' }}>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-6)' }}>
                    Configure how you receive notifications
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
                      <input type="checkbox" defaultChecked />
                      Email notifications
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
                      <input type="checkbox" defaultChecked />
                      Push notifications
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
                      <input type="checkbox" />
                      SMS notifications
                    </label>
                  </div>
                </div>
              )}
            </div>
          </SettingsLayout>
        </div>
      );
    },
  },
  {
    title: 'With Grouped Navigation',
    render: () => {
      const [activeSection, setActiveSection] = useState('profile');

      const navigation = [
        {
          title: 'Personal',
          items: [
            { id: 'profile', label: 'Profile', icon: <User size={18} />, description: 'Manage your profile' },
            { id: 'security', label: 'Security', icon: <Lock size={18} />, description: 'Password & 2FA' },
          ],
        },
        {
          title: 'Organization',
          items: [
            { id: 'team', label: 'Team', icon: <Users size={18} />, description: 'Manage team members' },
            { id: 'billing', label: 'Billing', icon: <CreditCard size={18} />, description: 'Plans & payment', badge: <Badge variant="warning">Due</Badge> },
          ],
        },
        {
          title: 'Preferences',
          items: [
            { id: 'notifications', label: 'Notifications', icon: <Bell size={18} /> },
            { id: 'advanced', label: 'Advanced', icon: <SettingsIcon size={18} /> },
          ],
        },
      ];

      return (
        <div style={{ height: '600px', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-control)', overflow: 'hidden' }}>
          <SettingsLayout
            navigation={navigation}
            activeSection={activeSection}
            onNavigate={setActiveSection}
          >
            <div style={{ padding: 'var(--spacing-6)' }}>
              <h2 style={{ marginBottom: 'var(--spacing-2)' }}>
                {activeSection === 'profile' && 'Profile'}
                {activeSection === 'security' && 'Security'}
                {activeSection === 'team' && 'Team'}
                {activeSection === 'billing' && 'Billing'}
                {activeSection === 'notifications' && 'Notifications'}
                {activeSection === 'advanced' && 'Advanced Settings'}
              </h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-6)' }}>
                Configure your {activeSection} settings
              </p>
            </div>
          </SettingsLayout>
        </div>
      );
    },
  },
  {
    title: 'With Header',
    render: () => {
      const [activeSection, setActiveSection] = useState('general');

      const navigation = [
        {
          items: [
            { id: 'general', label: 'General', icon: <SettingsIcon size={18} /> },
            { id: 'security', label: 'Security', icon: <Lock size={18} /> },
            { id: 'billing', label: 'Billing', icon: <CreditCard size={18} /> },
          ],
        },
      ];

      return (
        <div style={{ height: '500px', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-control)', overflow: 'hidden' }}>
          <SettingsLayout
            navigation={navigation}
            activeSection={activeSection}
            onNavigate={setActiveSection}
            title="Account Settings"
            description="Manage your account preferences and settings"
            headerActions={
              <Button variant="ghost" size="sm">
                Export Data
              </Button>
            }
          >
            <div style={{ padding: 'var(--spacing-6)' }}>
              <h3 style={{ marginBottom: 'var(--spacing-4)' }}>
                {activeSection === 'general' && 'General Settings'}
                {activeSection === 'security' && 'Security Settings'}
                {activeSection === 'billing' && 'Billing Settings'}
              </h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Content for {activeSection} section
              </p>
            </div>
          </SettingsLayout>
        </div>
      );
    },
  },
  {
    title: 'Custom Width',
    render: () => {
      const [activeSection, setActiveSection] = useState('dashboard');

      const navigation = [
        {
          items: [
            { id: 'dashboard', label: 'Dashboard', icon: <SettingsIcon size={18} /> },
            { id: 'analytics', label: 'Analytics', icon: <User size={18} /> },
            { id: 'reports', label: 'Reports', icon: <Bell size={18} /> },
          ],
        },
      ];

      return (
        <div style={{ height: '400px', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-control)', overflow: 'hidden' }}>
          <SettingsLayout
            navigation={navigation}
            activeSection={activeSection}
            onNavigate={setActiveSection}
            navWidth={200}
          >
            <div style={{ padding: 'var(--spacing-6)' }}>
              <h2 style={{ marginBottom: 'var(--spacing-4)' }}>
                {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
              </h2>
              <p style={{ color: 'var(--text-secondary)' }}>
                Narrower navigation sidebar (200px)
              </p>
            </div>
          </SettingsLayout>
        </div>
      );
    },
  },
];

export default previews;
