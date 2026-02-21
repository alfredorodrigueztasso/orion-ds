/**
 * Preview module for List component
 * Styled lists with various layouts
 */

import React, { useState } from 'react';
import { List } from '@orion-ds/react';
import { Check, User } from 'lucide-react';

export const previews = [
  {
    title: 'Basic List',
    render: () => {
      const items = [
        { id: '1', primary: 'First item in the list' },
        { id: '2', primary: 'Second item with more content' },
        { id: '3', primary: 'Third item' },
        { id: '4', primary: 'Fourth item with even more content to demonstrate wrapping' },
      ];

      return (
        <div style={{ maxWidth: '600px' }}>
          <List items={items} />
        </div>
      );
    },
  },
  {
    title: 'With Descriptions',
    render: () => {
      const items = [
        { id: '1', primary: 'Download the package', secondary: 'Install @orion-ds/react from npm' },
        { id: '2', primary: 'Install dependencies', secondary: 'Run npm install in your project' },
        { id: '3', primary: 'Configure your project', secondary: 'Import CSS and wrap app with ThemeProvider' },
        { id: '4', primary: 'Start development server', secondary: 'Run npm run dev to start' },
      ];

      return (
        <div style={{ maxWidth: '600px' }}>
          <List items={items} />
        </div>
      );
    },
  },
  {
    title: 'With Icons',
    render: () => {
      const items = [
        { id: '1', primary: 'TypeScript support', secondary: 'Full type safety', leading: <Check size={20} /> },
        { id: '2', primary: 'Semantic tokens', secondary: 'AI-first design system', leading: <Check size={20} /> },
        { id: '3', primary: 'Multi-brand themes', secondary: 'Support for multiple brands', leading: <Check size={20} /> },
        { id: '4', primary: 'Accessibility built-in', secondary: 'WCAG compliant', leading: <Check size={20} /> },
      ];

      return (
        <div style={{ maxWidth: '600px' }}>
          <List items={items} />
        </div>
      );
    },
  },
  {
    title: 'Interactive List',
    render: () => {
      const [selectedId, setSelectedId] = useState<string | null>(null);

      const items = [
        { id: '1', primary: 'John Doe', secondary: 'john@example.com', leading: <User size={20} />, selected: selectedId === '1' },
        { id: '2', primary: 'Jane Smith', secondary: 'jane@example.com', leading: <User size={20} />, selected: selectedId === '2' },
        { id: '3', primary: 'Bob Johnson', secondary: 'bob@example.com', leading: <User size={20} />, selected: selectedId === '3' },
      ];

      return (
        <div style={{ maxWidth: '600px' }}>
          <List
            items={items}
            selectable
            onSelect={(item) => setSelectedId(item.id)}
          />
          {selectedId && (
            <p style={{ marginTop: 'var(--spacing-2)', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              Selected: {items.find((i) => i.id === selectedId)?.primary}
            </p>
          )}
        </div>
      );
    },
  },
];

export default previews;
