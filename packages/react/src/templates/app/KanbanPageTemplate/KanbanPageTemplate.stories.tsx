import type { Meta, StoryObj } from '@storybook/react';
import { KanbanPageTemplate } from './KanbanPageTemplate';
import { Button } from '../../../components/Button';
import { Home, Kanban, Calendar, Settings, Plus, Filter } from 'lucide-react';

const meta: Meta<typeof KanbanPageTemplate> = {
  title: 'Templates/App/Kanban',
  component: KanbanPageTemplate,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A complete Kanban board page template with sidebar, filters, and drag-drop board.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof KanbanPageTemplate>;

// Sample data
const SIDEBAR_SECTIONS = [
  {
    items: [
      { id: 'dashboard', label: 'Dashboard', icon: <Home size={20} />, href: '/dashboard' },
      { id: 'board', label: 'Board', icon: <Kanban size={20} />, href: '/board' },
      { id: 'calendar', label: 'Calendar', icon: <Calendar size={20} />, href: '/calendar' },
      { id: 'settings', label: 'Settings', icon: <Settings size={20} />, href: '/settings' },
    ],
  },
];

const KANBAN_COLUMNS = [
  {
    id: 'backlog',
    title: 'Backlog',
    cards: [
      {
        id: '1',
        title: 'Research competitor analysis',
        description: 'Analyze top 5 competitors in the market',
        labels: [{ id: 'research', text: 'Research', color: 'blue' as const }],
        priority: 'medium' as const,
      },
      {
        id: '2',
        title: 'Design system documentation',
        description: 'Write comprehensive docs for all components',
        labels: [{ id: 'docs', text: 'Docs', color: 'purple' as const }],
        priority: 'low' as const,
      },
    ],
  },
  {
    id: 'todo',
    title: 'To Do',
    cards: [
      {
        id: '3',
        title: 'Implement authentication flow',
        description: 'OAuth2 + email/password auth',
        labels: [
          { id: 'feature', text: 'Feature', color: 'green' as const },
          { id: 'backend', text: 'Backend', color: 'orange' as const },
        ],
        assignees: [{ id: 'u1', name: 'Sarah', avatar: 'https://i.pravatar.cc/40?u=sarah' }],
        priority: 'high' as const,
        dueDate: 'Jan 20',
      },
      {
        id: '4',
        title: 'Mobile responsive design',
        labels: [{ id: 'design', text: 'Design', color: 'pink' as const }],
        priority: 'medium' as const,
      },
    ],
  },
  {
    id: 'in-progress',
    title: 'In Progress',
    color: 'blue' as const,
    cards: [
      {
        id: '5',
        title: 'Dashboard analytics charts',
        description: 'Implement chart components using Chart.js',
        labels: [
          { id: 'feature', text: 'Feature', color: 'green' as const },
          { id: 'frontend', text: 'Frontend', color: 'yellow' as const },
        ],
        assignees: [
          { id: 'u2', name: 'Mike', avatar: 'https://i.pravatar.cc/40?u=mike' },
          { id: 'u3', name: 'Emma', avatar: 'https://i.pravatar.cc/40?u=emma' },
        ],
        priority: 'high' as const,
        dueDate: 'Jan 18',
      },
      {
        id: '6',
        title: 'API rate limiting',
        labels: [{ id: 'backend', text: 'Backend', color: 'orange' as const }],
        assignees: [{ id: 'u1', name: 'Sarah', avatar: 'https://i.pravatar.cc/40?u=sarah' }],
        priority: 'medium' as const,
      },
    ],
    limit: 3,
  },
  {
    id: 'review',
    title: 'In Review',
    color: 'yellow' as const,
    cards: [
      {
        id: '7',
        title: 'User profile page',
        labels: [{ id: 'feature', text: 'Feature', color: 'green' as const }],
        assignees: [{ id: 'u4', name: 'Alex', avatar: 'https://i.pravatar.cc/40?u=alex' }],
        priority: 'medium' as const,
      },
    ],
  },
  {
    id: 'done',
    title: 'Done',
    color: 'green' as const,
    cards: [
      {
        id: '8',
        title: 'Setup CI/CD pipeline',
        labels: [{ id: 'infra', text: 'Infra', color: 'gray' as const }],
        priority: 'high' as const,
      },
      {
        id: '9',
        title: 'Database schema design',
        labels: [{ id: 'backend', text: 'Backend', color: 'orange' as const }],
        priority: 'high' as const,
      },
    ],
  },
];

const FILTER_DEFINITIONS = [
  {
    key: 'assignee',
    label: 'Assignee',
    type: 'select' as const,
    options: [
      { value: 'sarah', label: 'Sarah' },
      { value: 'mike', label: 'Mike' },
      { value: 'emma', label: 'Emma' },
      { value: 'alex', label: 'Alex' },
    ],
  },
  {
    key: 'priority',
    label: 'Priority',
    type: 'select' as const,
    options: [
      { value: 'high', label: 'High' },
      { value: 'medium', label: 'Medium' },
      { value: 'low', label: 'Low' },
    ],
  },
  {
    key: 'label',
    label: 'Label',
    type: 'select' as const,
    options: [
      { value: 'feature', label: 'Feature' },
      { value: 'bug', label: 'Bug' },
      { value: 'docs', label: 'Docs' },
      { value: 'research', label: 'Research' },
    ],
  },
];

/**
 * Default Kanban board page
 */
export const Default: Story = {
  args: {
    sidebar: {
      sections: SIDEBAR_SECTIONS,
      activeItem: 'board',
      header: (
        <div style={{ padding: 'var(--spacing-4)', fontWeight: 700, fontSize: 'var(--text-xl)' }}>
          Acme
        </div>
      ),
    },
    pageHeader: {
      title: 'Sprint Board',
      description: 'Sprint 12 • Jan 1 - Jan 14, 2024',
      actions: (
        <>
          <Button variant="ghost" icon={<Filter size={18} />}>
            Filter
          </Button>
          <Button variant="primary" icon={<Plus size={18} />}>
            Add Task
          </Button>
        </>
      ),
    },
    kanban: {
      columns: KANBAN_COLUMNS,
      onCardMove: (result) => console.log('Card moved:', result),
      onCardClick: (card) => console.log('Card clicked:', card),
      onAddCard: (columnId) => console.log('Add card to:', columnId),
      showCardCount: true,
    },
  },
};

/**
 * Kanban with filter bar
 */
export const WithFilters: Story = {
  args: {
    ...Default.args,
    filterBar: {
      filters: FILTER_DEFINITIONS,
      activeFilters: [],
      onFilterChange: (key, value) => console.log('Filter changed:', key, value),
      onFilterRemove: (key) => console.log('Filter removed:', key),
      onClearAll: () => console.log('Filters cleared'),
      searchable: true,
      searchPlaceholder: 'Search tasks...',
    },
  },
};

/**
 * Kanban without sidebar
 */
export const WithoutSidebar: Story = {
  args: {
    pageHeader: {
      title: 'Project Tasks',
      breadcrumbs: [{ label: 'Projects', href: '/projects' }, { label: 'Mobile App' }],
      actions: (
        <>
          <Button variant="ghost" icon={<Filter size={18} />}>
            Filter
          </Button>
          <Button variant="primary" icon={<Plus size={18} />}>
            Add Task
          </Button>
        </>
      ),
    },
    filterBar: {
      filters: FILTER_DEFINITIONS,
      activeFilters: [],
      onFilterChange: (key, value) => console.log('Filter changed:', key, value),
      onFilterRemove: (key) => console.log('Filter removed:', key),
      searchable: true,
    },
    kanban: {
      columns: KANBAN_COLUMNS,
      onCardMove: (result) => console.log('Card moved:', result),
      onCardClick: (card) => console.log('Card clicked:', card),
    },
  },
};

/**
 * Compact Kanban board
 */
export const CompactView: Story = {
  args: {
    ...Default.args,
    kanban: {
      ...Default.args?.kanban,
      columns: KANBAN_COLUMNS,
      compact: true,
      onCardMove: (result) => console.log('Card moved:', result),
    },
  },
};

/**
 * Kanban with tabs for different views
 */
export const WithTabs: Story = {
  args: {
    sidebar: Default.args?.sidebar,
    pageHeader: {
      title: 'Project Board',
      tabs: [
        { id: 'board', label: 'Board' },
        { id: 'list', label: 'List' },
        { id: 'calendar', label: 'Calendar' },
        { id: 'timeline', label: 'Timeline' },
      ],
      activeTab: 'board',
      variant: 'with-tabs',
      actions: (
        <Button variant="primary" icon={<Plus size={18} />}>
          Add Task
        </Button>
      ),
    },
    kanban: {
      columns: KANBAN_COLUMNS,
      onCardMove: (result) => console.log('Card moved:', result),
    },
  },
};

/**
 * Simple Kanban with minimal columns
 */
export const SimpleBoard: Story = {
  args: {
    pageHeader: {
      title: 'Tasks',
      actions: (
        <Button variant="primary" icon={<Plus size={18} />}>
          Add Task
        </Button>
      ),
    },
    kanban: {
      columns: [
        {
          id: 'todo',
          title: 'To Do',
          cards: [
            { id: '1', title: 'Task 1', priority: 'high' as const },
            { id: '2', title: 'Task 2', priority: 'medium' as const },
          ],
        },
        {
          id: 'doing',
          title: 'Doing',
          color: 'blue' as const,
          cards: [{ id: '3', title: 'Task 3', priority: 'high' as const }],
        },
        {
          id: 'done',
          title: 'Done',
          color: 'green' as const,
          cards: [{ id: '4', title: 'Task 4', priority: 'low' as const }],
        },
      ],
      onCardMove: (result) => console.log('Card moved:', result),
    },
  },
};

/**
 * Empty Kanban board
 */
export const EmptyBoard: Story = {
  args: {
    sidebar: Default.args?.sidebar,
    pageHeader: {
      title: 'New Project',
      description: 'Get started by adding your first task',
      actions: (
        <Button variant="primary" icon={<Plus size={18} />}>
          Add Task
        </Button>
      ),
    },
    kanban: {
      columns: [
        { id: 'backlog', title: 'Backlog', cards: [] },
        { id: 'todo', title: 'To Do', cards: [] },
        { id: 'in-progress', title: 'In Progress', color: 'blue' as const, cards: [] },
        { id: 'done', title: 'Done', color: 'green' as const, cards: [] },
      ],
      onCardMove: (result) => console.log('Card moved:', result),
      onAddCard: (columnId) => console.log('Add card to:', columnId),
      onAddColumn: () => console.log('Add column'),
    },
  },
};
