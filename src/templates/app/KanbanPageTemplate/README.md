# KanbanPageTemplate

> Complete Kanban board page layout with sidebar navigation, filter bar, and drag-drop board.

## Quick Start

```tsx
import { KanbanPageTemplate, Button } from '@orion/react';
import { Home, Folder, Settings, Plus, Filter } from 'lucide-react';

<KanbanPageTemplate
  sidebar={{
    sections: [
      {
        items: [
          { id: 'home', label: 'Home', icon: <Home size={20} />, href: '/' },
          { id: 'projects', label: 'Projects', icon: <Folder size={20} />, href: '/projects' },
          { id: 'settings', label: 'Settings', icon: <Settings size={20} />, href: '/settings' },
        ],
      },
    ],
    activeItem: 'projects',
  }}
  pageHeader={{
    title: 'Project Board',
    description: 'Manage tasks and track progress',
    actions: <Button icon={<Plus size={18} />}>Add Task</Button>,
  }}
  filterBar={{
    filters: [
      { id: 'assignee', label: 'Assignee', type: 'select', options: [...] },
      { id: 'priority', label: 'Priority', type: 'select', options: [...] },
    ],
    onFilterChange: (filters) => console.log(filters),
  }}
  kanban={{
    columns: [
      { id: 'todo', title: 'To Do', cards: [...] },
      { id: 'in-progress', title: 'In Progress', cards: [...] },
      { id: 'done', title: 'Done', cards: [...] },
    ],
    onCardMove: (cardId, sourceCol, targetCol) => console.log('Card moved'),
  }}
/>
```

---

## Features

- **Sidebar Navigation** — Collapsible sidebar with project hierarchy
- **Page Header** — Title, description, and action buttons
- **Filter Bar** — Filter cards by assignee, priority, labels, etc.
- **Kanban Board** — Drag-and-drop columns with cards
- **Responsive** — Horizontal scroll on mobile

---

## Sections Used

| Section | Required | Purpose |
|---------|----------|---------|
| `Sidebar` | No | Navigation sidebar |
| `PageHeader` | **Yes** | Page title and actions |
| `FilterBar` | No | Card filtering controls |
| `KanbanBoard` | **Yes** | Drag-drop board |

---

## Props Reference

```typescript
interface KanbanPageTemplateProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Sidebar configuration (optional)
   */
  sidebar?: SidebarProps;

  /**
   * Page header configuration (required)
   */
  pageHeader: PageHeaderProps;

  /**
   * Filter bar for filtering cards
   */
  filterBar?: FilterBarProps;

  /**
   * Kanban board configuration (required)
   */
  kanban: KanbanBoardProps;

  /**
   * Additional content rendered above the board
   */
  children?: ReactNode;
}
```

---

## Complete Examples

### Project Management Board

```tsx
import { KanbanPageTemplate, Button, Badge, Avatar } from '@orion/react';
import { Home, Folder, Users, Settings, Plus, Filter } from 'lucide-react';

function ProjectBoard() {
  const columns = [
    {
      id: 'backlog',
      title: 'Backlog',
      cards: [
        {
          id: '1',
          title: 'Research competitors',
          description: 'Analyze top 5 competitors',
          labels: [{ text: 'Research', color: 'blue' }],
          assignee: { name: 'John', avatar: '/john.jpg' },
        },
      ],
    },
    {
      id: 'todo',
      title: 'To Do',
      cards: [
        {
          id: '2',
          title: 'Design homepage',
          description: 'Create wireframes and mockups',
          labels: [{ text: 'Design', color: 'purple' }],
          priority: 'high',
          assignee: { name: 'Sarah', avatar: '/sarah.jpg' },
        },
      ],
    },
    {
      id: 'in-progress',
      title: 'In Progress',
      cards: [
        {
          id: '3',
          title: 'Build API endpoints',
          labels: [{ text: 'Backend', color: 'green' }],
          assignee: { name: 'Mike', avatar: '/mike.jpg' },
        },
      ],
    },
    {
      id: 'review',
      title: 'In Review',
      cards: [],
    },
    {
      id: 'done',
      title: 'Done',
      cards: [
        {
          id: '4',
          title: 'Setup project',
          labels: [{ text: 'Setup', color: 'gray' }],
        },
      ],
    },
  ];

  return (
    <KanbanPageTemplate
      sidebar={{
        header: <div style={{ padding: 'var(--spacing-4)', fontWeight: 700 }}>Acme</div>,
        sections: [
          {
            items: [
              { id: 'home', label: 'Home', icon: <Home size={20} />, href: '/' },
            ],
          },
          {
            title: 'Projects',
            items: [
              { id: 'website', label: 'Website Redesign', icon: <Folder size={20} />, href: '/projects/website' },
              { id: 'mobile', label: 'Mobile App', icon: <Folder size={20} />, href: '/projects/mobile' },
            ],
          },
          {
            title: 'Settings',
            items: [
              { id: 'team', label: 'Team', icon: <Users size={20} />, href: '/team' },
              { id: 'settings', label: 'Settings', icon: <Settings size={20} />, href: '/settings' },
            ],
          },
        ],
        activeItem: 'website',
      }}
      pageHeader={{
        title: 'Website Redesign',
        description: 'Q1 2024 Initiative',
        breadcrumbs: [
          { label: 'Projects', href: '/projects' },
          { label: 'Website Redesign' },
        ],
        actions: (
          <>
            <Button variant="ghost" icon={<Filter size={18} />}>Filter</Button>
            <Button variant="primary" icon={<Plus size={18} />}>Add Task</Button>
          </>
        ),
      }}
      filterBar={{
        filters: [
          {
            id: 'assignee',
            label: 'Assignee',
            type: 'select',
            options: [
              { value: 'john', label: 'John' },
              { value: 'sarah', label: 'Sarah' },
              { value: 'mike', label: 'Mike' },
            ],
          },
          {
            id: 'priority',
            label: 'Priority',
            type: 'select',
            options: [
              { value: 'high', label: 'High' },
              { value: 'medium', label: 'Medium' },
              { value: 'low', label: 'Low' },
            ],
          },
          {
            id: 'label',
            label: 'Label',
            type: 'select',
            options: [
              { value: 'design', label: 'Design' },
              { value: 'backend', label: 'Backend' },
              { value: 'frontend', label: 'Frontend' },
            ],
          },
        ],
        onFilterChange: (filters) => {
          console.log('Filters changed:', filters);
        },
      }}
      kanban={{
        columns,
        onCardMove: (cardId, sourceColumnId, targetColumnId, newIndex) => {
          console.log(`Card ${cardId} moved from ${sourceColumnId} to ${targetColumnId}`);
        },
        onCardClick: (card) => {
          console.log('Card clicked:', card);
        },
        onAddCard: (columnId) => {
          console.log('Add card to column:', columnId);
        },
      }}
    />
  );
}
```

### Without Sidebar (Embedded)

```tsx
<KanbanPageTemplate
  pageHeader={{
    title: 'Sprint Board',
    breadcrumbs: [
      { label: 'Projects', href: '/projects' },
      { label: 'Sprint 23' },
    ],
  }}
  kanban={{
    columns: [
      { id: 'todo', title: 'To Do', cards: [...] },
      { id: 'doing', title: 'Doing', cards: [...] },
      { id: 'done', title: 'Done', cards: [...] },
    ],
    onCardMove: handleCardMove,
  }}
/>
```

### Without Filter Bar

```tsx
<KanbanPageTemplate
  sidebar={{ sections: [...], activeItem: 'board' }}
  pageHeader={{ title: 'Quick Board' }}
  kanban={{
    columns: [...],
    onCardMove: handleCardMove,
  }}
/>
```

---

## Customization

### Custom Content Above Board

Use the `children` prop to add custom content.

```tsx
<KanbanPageTemplate
  pageHeader={{ title: 'Project Board' }}
  kanban={{ columns: [...], onCardMove: handleMove }}
>
  <div className="board-stats">
    <span>Total: 24 tasks</span>
    <span>Completed: 8</span>
  </div>
</KanbanPageTemplate>
```

---

## Accessibility

- Kanban board supports keyboard navigation
- Cards can be moved with keyboard shortcuts
- Column headers are properly labeled
- Focus management for drag operations

---

## Anti-Patterns

### Missing Required Props

```tsx
// WRONG - Both pageHeader and kanban are required
<KanbanPageTemplate
  sidebar={{ sections: [...] }}
/>

// CORRECT
<KanbanPageTemplate
  pageHeader={{ title: 'Board' }}
  kanban={{ columns: [...], onCardMove: handleMove }}
/>
```

### Using Dashboard Sections

```tsx
// WRONG - Don't use dashboard sections in kanban template
<KanbanPageTemplate
  pageHeader={{ title: 'Board' }}
  kanban={{ columns: [...] }}
  metrics={{ metrics: [...] }}  // Metrics is for DashboardTemplate
/>

// CORRECT - Use kanban-specific sections
<KanbanPageTemplate
  pageHeader={{ title: 'Board' }}
  filterBar={{ filters: [...] }}
  kanban={{ columns: [...] }}
/>
```

---

## When to Use

| Scenario | Recommendation |
|----------|----------------|
| Project management | Yes |
| Task tracking | Yes |
| Sprint boards | Yes |
| Workflow visualization | Yes |
| Content pipelines | Yes |

## When NOT to Use

| Scenario | Use Instead |
|----------|-------------|
| Data-heavy dashboard | `DashboardTemplate` |
| Table-based data | `DashboardTemplate` with DataTable |
| Simple list view | Custom with ListView section |
| Settings page | `SettingsTemplate` |

---

## Related

- **[Sidebar](../../../sections/Sidebar/README.md)** — Navigation sidebar
- **[PageHeader](../../../sections/PageHeader/README.md)** — Page header section
- **[FilterBar](../../../sections/FilterBar/README.md)** — Filter controls
- **[KanbanBoard](../../../sections/KanbanBoard/README.md)** — Kanban board section
