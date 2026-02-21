/**
 * Preview module for Drawer component
 * Side panel overlay
 */

import React, { useState } from 'react';
import { Drawer, Button } from '@orion-ds/react';
import { Menu, Settings, Bell } from 'lucide-react';

export const previews = [
  {
    title: 'Navigation Drawer (Left)',
    render: () => {
      const [open, setOpen] = useState(false);

      return (
        <div>
          <Button onClick={() => setOpen(true)} icon={<Menu size={20} />}>
            Open Navigation
          </Button>

          <Drawer open={open} onClose={() => setOpen(false)} placement="left">
            <Drawer.Header>Navigation Menu</Drawer.Header>
            <Drawer.Body>
              <nav>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
                  <li>
                    <a href="#home" style={{ display: 'block', padding: 'var(--spacing-3)', borderRadius: 'var(--radius-sm)', color: 'var(--text-primary)' }}>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#about" style={{ display: 'block', padding: 'var(--spacing-3)', borderRadius: 'var(--radius-sm)', color: 'var(--text-primary)' }}>
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#services" style={{ display: 'block', padding: 'var(--spacing-3)', borderRadius: 'var(--radius-sm)', color: 'var(--text-primary)' }}>
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#contact" style={{ display: 'block', padding: 'var(--spacing-3)', borderRadius: 'var(--radius-sm)', color: 'var(--text-primary)' }}>
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </Drawer.Body>
            <Drawer.Footer>
              <Button variant="secondary" onClick={() => setOpen(false)} style={{ width: '100%' }}>
                Close
              </Button>
            </Drawer.Footer>
          </Drawer>
        </div>
      );
    },
  },
  {
    title: 'Settings Drawer (Right)',
    render: () => {
      const [open, setOpen] = useState(false);

      return (
        <div>
          <Button onClick={() => setOpen(true)} variant="secondary" icon={<Settings size={20} />}>
            Settings
          </Button>

          <Drawer open={open} onClose={() => setOpen(false)} placement="right">
            <Drawer.Header>Settings</Drawer.Header>
            <Drawer.Body>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
                <div>
                  <h3 style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: 'var(--spacing-2)' }}>Notifications</h3>
                  <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
                    <input type="checkbox" defaultChecked />
                    <span style={{ fontSize: '0.875rem' }}>Email notifications</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)', marginTop: 'var(--spacing-2)' }}>
                    <input type="checkbox" defaultChecked />
                    <span style={{ fontSize: '0.875rem' }}>Push notifications</span>
                  </label>
                </div>
                <div>
                  <h3 style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: 'var(--spacing-2)' }}>Privacy</h3>
                  <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
                    <input type="checkbox" />
                    <span style={{ fontSize: '0.875rem' }}>Make profile public</span>
                  </label>
                </div>
              </div>
            </Drawer.Body>
            <Drawer.Footer>
              <Button variant="ghost" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setOpen(false)}>
                Save Changes
              </Button>
            </Drawer.Footer>
          </Drawer>
        </div>
      );
    },
  },
  {
    title: 'Notifications Drawer',
    render: () => {
      const [open, setOpen] = useState(false);

      const notifications = [
        { id: 1, title: 'New message', description: 'You have a new message from Sarah', time: '5 min ago' },
        { id: 2, title: 'Update available', description: 'Version 2.0 is now available', time: '1 hour ago' },
        { id: 3, title: 'Payment received', description: 'Your payment has been processed', time: '3 hours ago' },
      ];

      return (
        <div>
          <Button onClick={() => setOpen(true)} variant="ghost" icon={<Bell size={20} />}>
            Notifications
          </Button>

          <Drawer open={open} onClose={() => setOpen(false)} placement="right">
            <Drawer.Header>Notifications</Drawer.Header>
            <Drawer.Body>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    style={{
                      padding: 'var(--spacing-4)',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--surface-subtle)',
                    }}
                  >
                    <h3 style={{ fontSize: '0.875rem', fontWeight: 600, margin: 0, marginBottom: 'var(--spacing-1)' }}>
                      {notification.title}
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0, marginBottom: 'var(--spacing-1)' }}>
                      {notification.description}
                    </p>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', margin: 0 }}>
                      {notification.time}
                    </p>
                  </div>
                ))}
              </div>
            </Drawer.Body>
          </Drawer>
        </div>
      );
    },
  },
];

export default previews;
