/**
 * Preview module for Popover component
 * Floating content displays and menus
 */

import React, { useState } from 'react';
import { Popover, Button } from '@orion-ds/react';
import { Settings, MoreVertical, User, LogOut, HelpCircle } from 'lucide-react';

export const previews = [
  {
    title: 'Basic Popover',
    render: () => {
      const [open, setOpen] = useState(false);

      return (
        <div style={{ padding: 'var(--spacing-4)' }}>
          <Popover
            open={open}
            onOpenChange={setOpen}
            trigger={
              <Button variant="secondary" icon={<Settings size={20} />}>
                Settings
              </Button>
            }
            content={
              <div style={{ padding: 'var(--spacing-4)', minWidth: '200px' }}>
                <h4 style={{ margin: 0, marginBottom: 'var(--spacing-3)' }}>Settings</h4>
                <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  Configure your application preferences.
                </p>
              </div>
            }
          />
        </div>
      );
    },
  },
  {
    title: 'Dropdown Menu',
    render: () => {
      const [open, setOpen] = useState(false);

      return (
        <div style={{ padding: 'var(--spacing-4)' }}>
          <Popover
            open={open}
            onOpenChange={setOpen}
            trigger={
              <Button variant="ghost" iconOnly icon={<MoreVertical size={20} />} aria-label="More options" />
            }
            content={
              <div style={{ minWidth: '180px' }}>
                <button
                  style={{
                    width: '100%',
                    padding: 'var(--spacing-3)',
                    border: 'none',
                    background: 'transparent',
                    textAlign: 'left',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--spacing-2)',
                  }}
                  onClick={() => {
                    alert('Profile clicked');
                    setOpen(false);
                  }}
                >
                  <User size={16} />
                  Profile
                </button>
                <button
                  style={{
                    width: '100%',
                    padding: 'var(--spacing-3)',
                    border: 'none',
                    background: 'transparent',
                    textAlign: 'left',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--spacing-2)',
                  }}
                  onClick={() => {
                    alert('Help clicked');
                    setOpen(false);
                  }}
                >
                  <HelpCircle size={16} />
                  Help
                </button>
                <hr style={{ margin: 'var(--spacing-2) 0', border: 'none', borderTop: '1px solid var(--border-subtle)' }} />
                <button
                  style={{
                    width: '100%',
                    padding: 'var(--spacing-3)',
                    border: 'none',
                    background: 'transparent',
                    textAlign: 'left',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--spacing-2)',
                    color: 'var(--status-error)',
                  }}
                  onClick={() => {
                    alert('Logout clicked');
                    setOpen(false);
                  }}
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </div>
            }
          />
        </div>
      );
    },
  },
  {
    title: 'Placements',
    render: () => (
      <div style={{ display: 'flex', gap: 'var(--spacing-4)', padding: 'var(--spacing-8)', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Popover
          trigger={<Button variant="secondary">Top</Button>}
          content={<div style={{ padding: 'var(--spacing-3)' }}>Content on top</div>}
          placement="top"
        />
        <Popover
          trigger={<Button variant="secondary">Right</Button>}
          content={<div style={{ padding: 'var(--spacing-3)' }}>Content on right</div>}
          placement="right"
        />
        <Popover
          trigger={<Button variant="secondary">Bottom</Button>}
          content={<div style={{ padding: 'var(--spacing-3)' }}>Content on bottom</div>}
          placement="bottom"
        />
        <Popover
          trigger={<Button variant="secondary">Left</Button>}
          content={<div style={{ padding: 'var(--spacing-3)' }}>Content on left</div>}
          placement="left"
        />
      </div>
    ),
  },
];

export default previews;
