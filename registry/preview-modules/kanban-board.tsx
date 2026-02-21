/**
 * Preview module for KanbanBoard section
 * Drag-and-drop task boards for project management (Trello/Linear style)
 */

import React from 'react';
import { KanbanBoard } from '@orion-ds/react';
import type { KanbanColumn } from '@orion-ds/react';

const sampleCards = {
  todo: [
    {
      id: '1',
      title: 'Implement user authentication',
      description: 'Add OAuth support for Google and GitHub',
      labels: [
        { id: 'l1', text: 'Feature', color: 'blue' as const },
        { id: 'l2', text: 'High Priority', color: 'red' as const },
      ],
      assignees: [
        { id: 'u1', name: 'Sarah Chen', avatar: 'https://i.pravatar.cc/150?img=1' },
        { id: 'u2', name: 'Mike Johnson', avatar: 'https://i.pravatar.cc/150?img=2' },
      ],
      dueDate: 'Feb 20',
      priority: 'high' as const,
    },
    {
      id: '2',
      title: 'Design settings page',
      description: 'Create mockups for user preferences',
      labels: [{ id: 'l3', text: 'Design', color: 'purple' as const }],
      assignees: [{ id: 'u3', name: 'Alex Rivera', avatar: 'https://i.pravatar.cc/150?img=3' }],
      dueDate: 'Feb 22',
      priority: 'medium' as const,
    },
    {
      id: '3',
      title: 'Update documentation',
      labels: [{ id: 'l4', text: 'Docs', color: 'green' as const }],
      assignees: [{ id: 'u4', name: 'Jordan Lee' }],
      dueDate: 'Feb 25',
    },
  ],
  inProgress: [
    {
      id: '4',
      title: 'Refactor dashboard components',
      description: 'Split monolithic components into smaller, reusable pieces',
      labels: [
        { id: 'l5', text: 'Refactor', color: 'yellow' as const },
        { id: 'l6', text: 'Technical', color: 'gray' as const },
      ],
      assignees: [
        { id: 'u1', name: 'Sarah Chen', avatar: 'https://i.pravatar.cc/150?img=1' },
        { id: 'u5', name: 'Taylor Kim', avatar: 'https://i.pravatar.cc/150?img=5' },
      ],
      dueDate: 'Feb 18',
      priority: 'high' as const,
    },
    {
      id: '5',
      title: 'Optimize API response times',
      labels: [{ id: 'l7', text: 'Performance', color: 'orange' as const }],
      assignees: [{ id: 'u2', name: 'Mike Johnson', avatar: 'https://i.pravatar.cc/150?img=2' }],
      dueDate: 'Feb 19',
      priority: 'urgent' as const,
    },
  ],
  review: [
    {
      id: '6',
      title: 'Add dark mode support',
      description: 'Implement theme switching with persistent state',
      labels: [{ id: 'l8', text: 'Feature', color: 'blue' as const }],
      assignees: [
        { id: 'u3', name: 'Alex Rivera', avatar: 'https://i.pravatar.cc/150?img=3' },
      ],
      dueDate: 'Feb 17',
    },
  ],
  done: [
    {
      id: '7',
      title: 'Setup CI/CD pipeline',
      labels: [
        { id: 'l9', text: 'DevOps', color: 'green' as const },
        { id: 'l10', text: 'Completed', color: 'gray' as const },
      ],
      assignees: [{ id: 'u4', name: 'Jordan Lee' }],
    },
    {
      id: '8',
      title: 'Create landing page',
      labels: [{ id: 'l11', text: 'Marketing', color: 'pink' as const }],
      assignees: [{ id: 'u5', name: 'Taylor Kim', avatar: 'https://i.pravatar.cc/150?img=5' }],
    },
  ],
};

const basicColumns: KanbanColumn[] = [
  { id: 'todo', title: 'To Do', color: 'default', cards: sampleCards.todo },
  { id: 'in-progress', title: 'In Progress', color: 'blue', cards: sampleCards.inProgress, limit: 3 },
  { id: 'review', title: 'Review', color: 'yellow', cards: sampleCards.review },
  { id: 'done', title: 'Done', color: 'green', cards: sampleCards.done },
];

const minimalColumns: KanbanColumn[] = [
  { id: 'backlog', title: 'Backlog', cards: sampleCards.todo.slice(0, 2) },
  { id: 'active', title: 'Active', color: 'purple', cards: sampleCards.inProgress.slice(0, 1) },
  { id: 'completed', title: 'Completed', color: 'green', cards: sampleCards.done.slice(0, 2) },
];

export const previews = [
  {
    title: 'Basic Kanban Board',
    render: () => (
      <div style={{ width: '100%', height: '600px', overflow: 'auto' }}>
        <KanbanBoard
          columns={basicColumns}
          onCardClick={(card, columnId) => console.log('Card clicked:', card.title, 'in', columnId)}
        />
      </div>
    ),
  },
  {
    title: 'With Add Card Actions',
    render: () => (
      <div style={{ width: '100%', height: '600px', overflow: 'auto' }}>
        <KanbanBoard
          columns={basicColumns}
          onCardClick={(card) => console.log('Card clicked:', card.title)}
          onAddCard={(columnId) => console.log('Add card to:', columnId)}
          onAddColumn={() => console.log('Add new column')}
          onColumnMenu={(columnId) => console.log('Column menu:', columnId)}
        />
      </div>
    ),
  },
  {
    title: 'Compact Mode',
    render: () => (
      <div style={{ width: '100%', height: '500px', overflow: 'auto' }}>
        <KanbanBoard
          columns={basicColumns}
          compact
          showCardCount
          onCardClick={(card) => console.log('Card clicked:', card.title)}
        />
      </div>
    ),
  },
  {
    title: 'Minimal 3-Column Board',
    render: () => (
      <div style={{ width: '100%', height: '500px', overflow: 'auto' }}>
        <KanbanBoard
          columns={minimalColumns}
          onCardClick={(card) => console.log('Card clicked:', card.title)}
          onAddCard={(columnId) => console.log('Add card to:', columnId)}
          showCardCount={false}
        />
      </div>
    ),
  },
  {
    title: 'With WIP Limits',
    render: () => {
      const limitedColumns: KanbanColumn[] = [
        { id: 'todo', title: 'To Do', cards: sampleCards.todo, limit: 5 },
        { id: 'in-progress', title: 'In Progress', color: 'blue', cards: sampleCards.inProgress, limit: 2 },
        { id: 'review', title: 'Review', color: 'yellow', cards: sampleCards.review, limit: 3 },
        { id: 'done', title: 'Done', color: 'green', cards: sampleCards.done },
      ];

      return (
        <div style={{ width: '100%', height: '600px', overflow: 'auto' }}>
          <KanbanBoard
            columns={limitedColumns}
            showCardCount
            onCardClick={(card) => console.log('Card clicked:', card.title)}
            onAddCard={(columnId) => console.log('Add card to:', columnId)}
          />
        </div>
      );
    },
  },
];

export default previews;
