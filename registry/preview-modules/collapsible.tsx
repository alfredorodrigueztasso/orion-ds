/**
 * Preview module for Collapsible component
 * Expandable sections using compound components
 */

import React, { useState } from 'react';
import { Collapsible } from '@orion-ds/react';
import { ChevronDown, Info, Settings, HelpCircle } from 'lucide-react';

export const previews = [
  {
    title: 'Basic Collapsible',
    render: () => (
      <div style={{ maxWidth: '400px' }}>
        <Collapsible>
          <Collapsible.Trigger
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 'var(--spacing-3)',
              background: 'var(--surface-subtle)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-control)',
              cursor: 'pointer',
            }}
          >
            <span>Show more details</span>
            <ChevronDown size={16} />
          </Collapsible.Trigger>
          <Collapsible.Content
            style={{
              marginTop: 'var(--spacing-2)',
              padding: 'var(--spacing-3)',
              background: 'var(--surface-base)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-control)',
            }}
          >
            <p style={{ margin: 0 }}>
              This is the collapsible content. It can contain any elements you need,
              including text, images, forms, or other components.
            </p>
          </Collapsible.Content>
        </Collapsible>
      </div>
    ),
  },
  {
    title: 'Controlled State',
    render: () => {
      const [open, setOpen] = useState(false);

      return (
        <div style={{ display: 'grid', gap: 'var(--spacing-3)', maxWidth: '400px' }}>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            State: {open ? 'Open' : 'Closed'}
          </p>
          <Collapsible open={open} onOpenChange={setOpen}>
            <Collapsible.Trigger
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 'var(--spacing-3)',
                background: 'var(--surface-subtle)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-control)',
                cursor: 'pointer',
              }}
            >
              <span>Advanced Settings</span>
              <ChevronDown
                size={16}
                style={{
                  transform: open ? 'rotate(180deg)' : 'rotate(0)',
                  transition: 'transform 0.2s',
                }}
              />
            </Collapsible.Trigger>
            <Collapsible.Content
              style={{
                marginTop: 'var(--spacing-2)',
                padding: 'var(--spacing-3)',
                background: 'var(--surface-base)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-control)',
              }}
            >
              <div style={{ display: 'grid', gap: 'var(--spacing-2)' }}>
                <label>
                  <input type="checkbox" /> Enable notifications
                </label>
                <label>
                  <input type="checkbox" /> Auto-save changes
                </label>
                <label>
                  <input type="checkbox" /> Dark mode
                </label>
              </div>
            </Collapsible.Content>
          </Collapsible>
        </div>
      );
    },
  },
  {
    title: 'Multiple Collapsibles',
    render: () => (
      <div style={{ display: 'grid', gap: 'var(--spacing-3)', maxWidth: '400px' }}>
        <Collapsible defaultOpen>
          <Collapsible.Trigger
            style={{
              width: '100%',
              display: 'flex',
              gap: 'var(--spacing-2)',
              alignItems: 'center',
              padding: 'var(--spacing-3)',
              background: 'var(--surface-subtle)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-control)',
              cursor: 'pointer',
            }}
          >
            <Info size={16} />
            <span>Information</span>
          </Collapsible.Trigger>
          <Collapsible.Content
            style={{
              marginTop: 'var(--spacing-2)',
              padding: 'var(--spacing-3)',
              background: 'var(--surface-base)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-control)',
            }}
          >
            <p style={{ margin: 0, fontSize: '0.875rem' }}>
              General information about your account and profile settings.
            </p>
          </Collapsible.Content>
        </Collapsible>

        <Collapsible>
          <Collapsible.Trigger
            style={{
              width: '100%',
              display: 'flex',
              gap: 'var(--spacing-2)',
              alignItems: 'center',
              padding: 'var(--spacing-3)',
              background: 'var(--surface-subtle)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-control)',
              cursor: 'pointer',
            }}
          >
            <Settings size={16} />
            <span>Settings</span>
          </Collapsible.Trigger>
          <Collapsible.Content
            style={{
              marginTop: 'var(--spacing-2)',
              padding: 'var(--spacing-3)',
              background: 'var(--surface-base)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-control)',
            }}
          >
            <p style={{ margin: 0, fontSize: '0.875rem' }}>
              Configure your application preferences and settings here.
            </p>
          </Collapsible.Content>
        </Collapsible>

        <Collapsible>
          <Collapsible.Trigger
            style={{
              width: '100%',
              display: 'flex',
              gap: 'var(--spacing-2)',
              alignItems: 'center',
              padding: 'var(--spacing-3)',
              background: 'var(--surface-subtle)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-control)',
              cursor: 'pointer',
            }}
          >
            <HelpCircle size={16} />
            <span>Help & Support</span>
          </Collapsible.Trigger>
          <Collapsible.Content
            style={{
              marginTop: 'var(--spacing-2)',
              padding: 'var(--spacing-3)',
              background: 'var(--surface-base)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-control)',
            }}
          >
            <p style={{ margin: 0, fontSize: '0.875rem' }}>
              Get help with common questions and contact our support team.
            </p>
          </Collapsible.Content>
        </Collapsible>
      </div>
    ),
  },
];

export default previews;
