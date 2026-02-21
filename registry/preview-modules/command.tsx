/**
 * Preview module for Command component
 * Searchable command palette with keyboard navigation
 */

import React from 'react';
import { Command } from '@orion-ds/react';
import { Calendar, Settings, User, Mail, Search, FileText, Home } from 'lucide-react';

export const previews = [
  {
    title: 'Basic Command Palette',
    render: () => (
      <div style={{ maxWidth: '500px', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-container)' }}>
        <Command>
          <Command.Input placeholder="Type a command or search..." />
          <Command.List>
            <Command.Empty>No results found.</Command.Empty>
            <Command.Group heading="Suggestions">
              <Command.Item>
                <Calendar size={16} style={{ marginRight: 'var(--spacing-2)' }} />
                Calendar
              </Command.Item>
              <Command.Item>
                <User size={16} style={{ marginRight: 'var(--spacing-2)' }} />
                Profile
              </Command.Item>
              <Command.Item>
                <Settings size={16} style={{ marginRight: 'var(--spacing-2)' }} />
                Settings
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    ),
  },
  {
    title: 'With Multiple Groups',
    render: () => (
      <div style={{ maxWidth: '500px', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-container)' }}>
        <Command>
          <Command.Input placeholder="Search commands..." />
          <Command.List>
            <Command.Empty>No results found.</Command.Empty>
            <Command.Group heading="Pages">
              <Command.Item>
                <Home size={16} style={{ marginRight: 'var(--spacing-2)' }} />
                Home
              </Command.Item>
              <Command.Item>
                <Search size={16} style={{ marginRight: 'var(--spacing-2)' }} />
                Search
              </Command.Item>
              <Command.Item>
                <FileText size={16} style={{ marginRight: 'var(--spacing-2)' }} />
                Documents
              </Command.Item>
            </Command.Group>
            <Command.Separator />
            <Command.Group heading="Account">
              <Command.Item>
                <User size={16} style={{ marginRight: 'var(--spacing-2)' }} />
                Profile
                <Command.Shortcut>⌘P</Command.Shortcut>
              </Command.Item>
              <Command.Item>
                <Mail size={16} style={{ marginRight: 'var(--spacing-2)' }} />
                Mail
                <Command.Shortcut>⌘M</Command.Shortcut>
              </Command.Item>
              <Command.Item>
                <Settings size={16} style={{ marginRight: 'var(--spacing-2)' }} />
                Settings
                <Command.Shortcut>⌘S</Command.Shortcut>
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    ),
  },
  {
    title: 'Interactive Example',
    render: () => {
      const handleSelect = (value: string) => {
        console.log('Selected:', value);
        alert(`You selected: ${value}`);
      };

      return (
        <div style={{ maxWidth: '500px', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-container)' }}>
          <Command>
            <Command.Input placeholder="Type to search..." />
            <Command.List>
              <Command.Empty>No results found.</Command.Empty>
              <Command.Group heading="Actions">
                <Command.Item onSelect={() => handleSelect('Create New')}>
                  Create New
                </Command.Item>
                <Command.Item onSelect={() => handleSelect('Import')}>
                  Import
                </Command.Item>
                <Command.Item onSelect={() => handleSelect('Export')}>
                  Export
                </Command.Item>
              </Command.Group>
            </Command.List>
          </Command>
        </div>
      );
    },
  },
];

export default previews;
