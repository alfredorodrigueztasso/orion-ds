/**
 * Preview module for DetailPanel section
 * Slide-over panel for viewing and editing entity details
 */

import React, { useState } from 'react';
import { DetailPanel, Button, Field, Textarea, Badge } from '@orion-ds/react';
import { Save, User, Mail, Phone, MapPin, Calendar } from 'lucide-react';

export const previews = [
  {
    title: 'Basic Detail Panel',
    render: () => {
      const [open, setOpen] = useState(false);

      return (
        <>
          <Button onClick={() => setOpen(true)}>Open Detail Panel</Button>
          <DetailPanel
            open={open}
            onClose={() => setOpen(false)}
            title="User Details"
            description="View and edit user information"
          >
            <div style={{ padding: 'var(--spacing-4)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
              <div style={{ display: 'flex', gap: 'var(--spacing-3)', alignItems: 'center' }}>
                <User size={16} style={{ color: 'var(--text-secondary)' }} />
                <div>
                  <div style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>Name</div>
                  <div style={{ fontSize: '14px', color: 'var(--text-primary)' }}>Sarah Chen</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 'var(--spacing-3)', alignItems: 'center' }}>
                <Mail size={16} style={{ color: 'var(--text-secondary)' }} />
                <div>
                  <div style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>Email</div>
                  <div style={{ fontSize: '14px', color: 'var(--text-primary)' }}>sarah.chen@example.com</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 'var(--spacing-3)', alignItems: 'center' }}>
                <Phone size={16} style={{ color: 'var(--text-secondary)' }} />
                <div>
                  <div style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>Phone</div>
                  <div style={{ fontSize: '14px', color: 'var(--text-primary)' }}>+1 (555) 123-4567</div>
                </div>
              </div>
            </div>
          </DetailPanel>
        </>
      );
    },
  },
  {
    title: 'With Form Fields',
    render: () => {
      const [open, setOpen] = useState(false);

      return (
        <>
          <Button onClick={() => setOpen(true)}>Edit Profile</Button>
          <DetailPanel
            open={open}
            onClose={() => setOpen(false)}
            title="Edit Profile"
            description="Update your personal information"
            footer={
              <div style={{ display: 'flex', gap: 'var(--spacing-3)', justifyContent: 'flex-end' }}>
                <Button variant="ghost" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button icon={<Save size={16} />} onClick={() => setOpen(false)}>
                  Save Changes
                </Button>
              </div>
            }
          >
            <div style={{ padding: 'var(--spacing-4)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
              <Field label="Full Name" defaultValue="Sarah Chen" />
              <Field label="Email" type="email" defaultValue="sarah.chen@example.com" />
              <Field label="Phone" type="tel" defaultValue="+1 (555) 123-4567" />
              <Textarea label="Bio" rows={4} placeholder="Tell us about yourself..." />
            </div>
          </DetailPanel>
        </>
      );
    },
  },
  {
    title: 'Small Size from Left',
    render: () => {
      const [open, setOpen] = useState(false);

      return (
        <>
          <Button onClick={() => setOpen(true)}>Open Left Panel</Button>
          <DetailPanel
            open={open}
            onClose={() => setOpen(false)}
            title="Quick Actions"
            description="Frequently used shortcuts"
            size="sm"
            position="left"
          >
            <div style={{ padding: 'var(--spacing-4)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
              <Button variant="ghost" style={{ justifyContent: 'flex-start' }}>
                <User size={16} /> View Profile
              </Button>
              <Button variant="ghost" style={{ justifyContent: 'flex-start' }}>
                <Mail size={16} /> Messages
              </Button>
              <Button variant="ghost" style={{ justifyContent: 'flex-start' }}>
                <Calendar size={16} /> Calendar
              </Button>
            </div>
          </DetailPanel>
        </>
      );
    },
  },
  {
    title: 'Large Size with Header Actions',
    render: () => {
      const [open, setOpen] = useState(false);

      return (
        <>
          <Button onClick={() => setOpen(true)}>View Order Details</Button>
          <DetailPanel
            open={open}
            onClose={() => setOpen(false)}
            title="Order #12345"
            description="Placed on February 16, 2026"
            size="lg"
            headerActions={
              <Badge variant="success">Delivered</Badge>
            }
          >
            <div style={{ padding: 'var(--spacing-4)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
              <section>
                <h4 style={{ marginBottom: 'var(--spacing-3)', fontSize: '14px', fontWeight: 600 }}>
                  Order Items
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
                  {['MacBook Pro 16"', 'Magic Mouse', 'USB-C Cable'].map((item) => (
                    <div key={item} style={{ display: 'flex', justifyContent: 'space-between', padding: 'var(--spacing-3)', background: 'var(--surface-subtle)', borderRadius: 'var(--radius-control)' }}>
                      <span>{item}</span>
                      <span style={{ color: 'var(--text-secondary)' }}>x1</span>
                    </div>
                  ))}
                </div>
              </section>
              <section>
                <h4 style={{ marginBottom: 'var(--spacing-3)', fontSize: '14px', fontWeight: 600 }}>
                  Shipping Address
                </h4>
                <div style={{ display: 'flex', gap: 'var(--spacing-3)', alignItems: 'flex-start' }}>
                  <MapPin size={16} style={{ color: 'var(--text-secondary)', marginTop: '2px' }} />
                  <div>
                    <div>Sarah Chen</div>
                    <div style={{ color: 'var(--text-secondary)' }}>123 Design Street</div>
                    <div style={{ color: 'var(--text-secondary)' }}>San Francisco, CA 94102</div>
                  </div>
                </div>
              </section>
            </div>
          </DetailPanel>
        </>
      );
    },
  },
  {
    title: 'Loading State',
    render: () => {
      const [open, setOpen] = useState(false);

      return (
        <>
          <Button onClick={() => setOpen(true)}>Loading Panel</Button>
          <DetailPanel
            open={open}
            onClose={() => setOpen(false)}
            title="Loading..."
            description="Please wait"
            loading
          />
        </>
      );
    },
  },
];

export default previews;
