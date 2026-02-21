/**
 * Preview module for CommandBar section
 * Command palette (Cmd+K) for quick navigation and actions
 */

import React, { useState } from 'react';
import { CommandBar } from '@orion-ds/react';
import { Button } from '@orion-ds/react';
import {
  Home,
  FileText,
  Settings,
  Users,
  Search,
  Plus,
  Trash2,
  Copy,
  Download,
  Upload,
  Edit,
  Save,
  Mail,
  Bell,
  Calendar,
} from 'lucide-react';
import type { CommandItem } from '@orion-ds/react';

const navigationCommands: CommandItem[] = [
  {
    id: 'home',
    label: 'Home',
    description: 'Go to home page',
    icon: <Home size={18} />,
    shortcut: '⌘H',
    category: 'Navigation',
    onSelect: () => console.log('Navigate to home'),
  },
  {
    id: 'projects',
    label: 'Projects',
    description: 'View all projects',
    icon: <FileText size={18} />,
    shortcut: '⌘P',
    category: 'Navigation',
    onSelect: () => console.log('Navigate to projects'),
  },
  {
    id: 'team',
    label: 'Team',
    description: 'Manage team members',
    icon: <Users size={18} />,
    shortcut: '⌘T',
    category: 'Navigation',
    onSelect: () => console.log('Navigate to team'),
  },
  {
    id: 'settings',
    label: 'Settings',
    description: 'Configure your workspace',
    icon: <Settings size={18} />,
    shortcut: '⌘,',
    category: 'Navigation',
    onSelect: () => console.log('Open settings'),
  },
];

const actionCommands: CommandItem[] = [
  {
    id: 'new-project',
    label: 'New Project',
    description: 'Create a new project',
    icon: <Plus size={18} />,
    shortcut: '⌘N',
    category: 'Actions',
    onSelect: () => console.log('Create project'),
  },
  {
    id: 'search',
    label: 'Search',
    description: 'Search across workspace',
    icon: <Search size={18} />,
    shortcut: '⌘F',
    category: 'Actions',
    onSelect: () => console.log('Open search'),
  },
  {
    id: 'copy',
    label: 'Copy',
    description: 'Copy selected item',
    icon: <Copy size={18} />,
    shortcut: '⌘C',
    category: 'Actions',
    onSelect: () => console.log('Copy'),
  },
  {
    id: 'delete',
    label: 'Delete',
    description: 'Delete selected item',
    icon: <Trash2 size={18} />,
    shortcut: '⌘⌫',
    category: 'Actions',
    onSelect: () => console.log('Delete'),
  },
];

const fileCommands: CommandItem[] = [
  {
    id: 'save',
    label: 'Save',
    description: 'Save current changes',
    icon: <Save size={18} />,
    shortcut: '⌘S',
    category: 'File',
    onSelect: () => console.log('Save'),
  },
  {
    id: 'upload',
    label: 'Upload',
    description: 'Upload a file',
    icon: <Upload size={18} />,
    category: 'File',
    onSelect: () => console.log('Upload'),
  },
  {
    id: 'download',
    label: 'Download',
    description: 'Download current file',
    icon: <Download size={18} />,
    shortcut: '⌘D',
    category: 'File',
    onSelect: () => console.log('Download'),
  },
  {
    id: 'edit',
    label: 'Edit',
    description: 'Edit current file',
    icon: <Edit size={18} />,
    shortcut: '⌘E',
    category: 'File',
    onSelect: () => console.log('Edit'),
  },
];

const allCommands = [...navigationCommands, ...actionCommands, ...fileCommands];

const recentCommands: CommandItem[] = [
  navigationCommands[0],
  actionCommands[0],
  fileCommands[0],
];

export const previews = [
  {
    title: 'Basic Command Bar',
    render: () => {
      const [open, setOpen] = useState(false);

      return (
        <div>
          <Button onClick={() => setOpen(true)}>
            Open Command Bar (⌘K)
          </Button>
          <CommandBar
            open={open}
            onOpenChange={setOpen}
            commands={allCommands}
          />
        </div>
      );
    },
  },
  {
    title: 'With Recent Commands',
    render: () => {
      const [open, setOpen] = useState(false);

      return (
        <div>
          <Button onClick={() => setOpen(true)}>
            Open Command Bar
          </Button>
          <CommandBar
            open={open}
            onOpenChange={setOpen}
            commands={allCommands}
            recentCommands={recentCommands}
          />
        </div>
      );
    },
  },
  {
    title: 'Search Filtering',
    render: () => {
      const [open, setOpen] = useState(true);

      const searchableCommands: CommandItem[] = [
        {
          id: 'email',
          label: 'Send Email',
          description: 'Compose a new email',
          icon: <Mail size={18} />,
          category: 'Communication',
          keywords: ['mail', 'message', 'send'],
          onSelect: () => console.log('Send email'),
        },
        {
          id: 'notification',
          label: 'Notifications',
          description: 'View all notifications',
          icon: <Bell size={18} />,
          category: 'Communication',
          keywords: ['alerts', 'updates'],
          onSelect: () => console.log('View notifications'),
        },
        {
          id: 'calendar',
          label: 'Calendar',
          description: 'Open your calendar',
          icon: <Calendar size={18} />,
          category: 'Productivity',
          keywords: ['schedule', 'events', 'meetings'],
          onSelect: () => console.log('Open calendar'),
        },
        ...allCommands,
      ];

      return (
        <div>
          <p style={{ marginBottom: '16px', color: 'var(--text-secondary)' }}>
            Try searching for "mail", "project", or "save" to see filtering in action
          </p>
          <Button onClick={() => setOpen(true)}>
            Open Command Bar
          </Button>
          <CommandBar
            open={open}
            onOpenChange={setOpen}
            commands={searchableCommands}
            placeholder="Search commands..."
          />
        </div>
      );
    },
  },
  {
    title: 'With Disabled Commands',
    render: () => {
      const [open, setOpen] = useState(false);

      const commandsWithDisabled: CommandItem[] = [
        ...navigationCommands,
        {
          id: 'export',
          label: 'Export Project',
          description: 'Export is currently unavailable',
          icon: <Download size={18} />,
          category: 'Actions',
          disabled: true,
          onSelect: () => {},
        },
        {
          id: 'share',
          label: 'Share',
          description: 'Sharing requires premium plan',
          icon: <Upload size={18} />,
          category: 'Actions',
          disabled: true,
          onSelect: () => {},
        },
        ...fileCommands,
      ];

      return (
        <div>
          <Button onClick={() => setOpen(true)}>
            Open Command Bar
          </Button>
          <CommandBar
            open={open}
            onOpenChange={setOpen}
            commands={commandsWithDisabled}
          />
        </div>
      );
    },
  },
  {
    title: 'Custom Empty State',
    render: () => {
      const [open, setOpen] = useState(false);

      return (
        <div>
          <Button onClick={() => setOpen(true)}>
            Open Command Bar
          </Button>
          <CommandBar
            open={open}
            onOpenChange={setOpen}
            commands={[]}
            emptyMessage="No commands available. Try adding some actions to your workspace."
            placeholder="Type to search..."
          />
        </div>
      );
    },
  },
];

export default previews;
