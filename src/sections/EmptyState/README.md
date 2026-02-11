# EmptyState Section

> Placeholder for empty content areas with icon, message, and optional actions.

## Quick Start

```tsx
import { EmptyState, Button } from '@orion/react';
import { Inbox } from 'lucide-react';

<EmptyState
  icon={<Inbox size={48} />}
  title="No messages yet"
  description="When you receive messages, they'll appear here."
  action={<Button>Compose Message</Button>}
/>
```

---

## Features

- **3 Visual Variants** — Default, Compact, Full-page
- **3 Size Options** — Small, Medium, Large
- **Icon or Illustration** — Support for both
- **Primary & Secondary Actions** — Clear next steps
- **Minimal Styling** — Fits Product Mode aesthetic
- **Brand-Aware** — Adapts to all Orion brands

---

## Props Reference

```typescript
interface EmptyStateProps {
  // Visual
  icon?: ReactNode;               // Icon element (48-64px)
  illustration?: ReactNode;       // Larger illustration (for full-page)

  // Content
  title: string;                  // REQUIRED - Main heading
  description?: string;           // Supporting text

  // Actions
  action?: ReactNode;             // Primary action button
  secondaryAction?: ReactNode;    // Secondary action (link/button)

  // Layout
  variant?: 'default' | 'compact' | 'full-page';  // default: 'default'
  size?: 'sm' | 'md' | 'lg';      // default: 'md'
}
```

---

## Visual Variants

### `variant="default"` (Default)

Standard centered empty state.

```tsx
<EmptyState
  icon={<FileText size={48} />}
  title="No documents"
  description="Create your first document to get started."
  action={<Button>Create Document</Button>}
/>
```

### `variant="compact"`

Smaller empty state for inline use.

```tsx
<EmptyState
  variant="compact"
  icon={<Search size={32} />}
  title="No results found"
  description="Try adjusting your search."
/>
```

### `variant="full-page"`

Takes full viewport height for main content areas.

```tsx
<EmptyState
  variant="full-page"
  illustration={<img src="/illustrations/empty-inbox.svg" alt="" />}
  title="Your inbox is empty"
  description="Messages from your team will appear here."
  action={<Button size="lg">Invite Team</Button>}
/>
```

---

## Size Variants

### Small

Compact spacing and smaller text.

```tsx
<EmptyState
  size="sm"
  icon={<Inbox size={32} />}
  title="No items"
/>
```

### Medium (Default)

Standard sizing.

```tsx
<EmptyState
  size="md"
  icon={<Inbox size={48} />}
  title="No items"
  description="Items will appear here once added."
/>
```

### Large

Extra spacing for prominent empty states.

```tsx
<EmptyState
  size="lg"
  icon={<Inbox size={64} />}
  title="No items yet"
  description="Get started by creating your first item."
  action={<Button size="lg">Get Started</Button>}
/>
```

---

## Icons vs Illustrations

### With Icon (Recommended for most cases)

```tsx
import { FileText, Inbox, Search, Users, FolderOpen } from 'lucide-react';

// Document empty state
<EmptyState icon={<FileText size={48} />} title="No documents" />

// Inbox empty state
<EmptyState icon={<Inbox size={48} />} title="No messages" />

// Search empty state
<EmptyState icon={<Search size={48} />} title="No results" />

// Team empty state
<EmptyState icon={<Users size={48} />} title="No team members" />

// Folder empty state
<EmptyState icon={<FolderOpen size={48} />} title="Folder is empty" />
```

### With Illustration (Full-page variants)

```tsx
<EmptyState
  variant="full-page"
  illustration={
    <img
      src="/illustrations/empty-projects.svg"
      alt=""
      style={{ width: 200, height: 200 }}
    />
  }
  title="No projects yet"
  description="Create your first project to start collaborating."
  action={<Button size="lg">Create Project</Button>}
/>
```

---

## Actions

### Primary Action Only

```tsx
<EmptyState
  icon={<Plus size={48} />}
  title="No items"
  action={<Button>Add Item</Button>}
/>
```

### Primary + Secondary Actions

```tsx
<EmptyState
  icon={<Upload size={48} />}
  title="No files uploaded"
  description="Upload files or import from another service."
  action={<Button>Upload Files</Button>}
  secondaryAction={<Button variant="ghost">Import from Dropbox</Button>}
/>
```

### Link as Secondary Action

```tsx
<EmptyState
  icon={<HelpCircle size={48} />}
  title="Need help?"
  description="Check out our documentation to get started."
  action={<Button>View Documentation</Button>}
  secondaryAction={<a href="/support">Contact Support</a>}
/>
```

---

## Complete Examples

### Table Empty State

```tsx
<DataTable
  columns={columns}
  data={[]}
  emptyState={{
    icon: <Users size={48} />,
    title: "No users found",
    description: "Try adjusting your search or filters.",
    action: <Button onClick={clearFilters}>Clear Filters</Button>
  }}
/>
```

### Inbox Empty State

```tsx
<EmptyState
  icon={<Inbox size={48} />}
  title="All caught up!"
  description="You have no new notifications."
/>
```

### Search Results Empty State

```tsx
<EmptyState
  variant="compact"
  icon={<Search size={32} />}
  title={`No results for "${searchQuery}"`}
  description="Try different keywords or check your spelling."
  secondaryAction={<Button variant="ghost" onClick={clearSearch}>Clear Search</Button>}
/>
```

### New User Onboarding

```tsx
<EmptyState
  variant="full-page"
  illustration={<img src="/onboarding/welcome.svg" alt="" />}
  title="Welcome to Orion!"
  description="Let's get your workspace set up. It only takes a minute."
  action={<Button size="lg">Start Setup</Button>}
  secondaryAction={<Button variant="ghost">Skip for Now</Button>}
/>
```

### Error State

```tsx
<EmptyState
  icon={<AlertCircle size={48} style={{ color: 'var(--status-error)' }} />}
  title="Something went wrong"
  description="We couldn't load your data. Please try again."
  action={<Button onClick={retry}>Retry</Button>}
  secondaryAction={<a href="/support">Report Issue</a>}
/>
```

### Folder Empty State

```tsx
<EmptyState
  icon={<FolderOpen size={48} />}
  title="This folder is empty"
  description="Drag files here or click to upload."
  action={<Button icon={<Upload size={16} />}>Upload Files</Button>}
/>
```

### Permission Denied

```tsx
<EmptyState
  icon={<Lock size={48} />}
  title="Access restricted"
  description="You don't have permission to view this content."
  action={<Button onClick={requestAccess}>Request Access</Button>}
/>
```

---

## Accessibility

- Empty state is not announced as an error
- Action buttons have clear, descriptive text
- Icons are decorative (hidden from screen readers)
- Illustrations have empty alt (decorative)

```tsx
// Good: Clear action text
action={<Button>Create Your First Document</Button>}

// Avoid: Vague action text
action={<Button>Click Here</Button>}
```

---

## Anti-Patterns

### Too Much Text

```tsx
// WRONG - Wall of text
<EmptyState
  title="No projects found in your workspace"
  description="You haven't created any projects yet. Projects help you organize your work into separate workspaces where you can invite team members and collaborate on documents, tasks, and more. To get started, click the button below to create your first project."
/>

// CORRECT - Concise messaging
<EmptyState
  title="No projects yet"
  description="Create your first project to start collaborating."
  action={<Button>Create Project</Button>}
/>
```

### No Clear Action

```tsx
// WRONG - What should user do?
<EmptyState
  icon={<Inbox size={48} />}
  title="No messages"
  description="You have no messages in your inbox."
/>

// CORRECT - Clear next step
<EmptyState
  icon={<Inbox size={48} />}
  title="No messages"
  description="You have no messages in your inbox."
  action={<Button>Compose Message</Button>}
/>
```

### Misleading Icons

```tsx
// WRONG - Error icon for empty state
<EmptyState
  icon={<XCircle size={48} style={{ color: 'red' }} />}
  title="No items"  // Not an error!
/>

// CORRECT - Neutral icon
<EmptyState
  icon={<Inbox size={48} />}
  title="No items"
/>
```

---

## When to Use EmptyState

| Scenario | Recommendation |
|----------|----------------|
| Empty tables/lists | `variant="compact"` |
| Empty inbox/feed | `variant="default"` |
| New user onboarding | `variant="full-page"` |
| Search no results | `variant="compact"` |
| Error states | With error styling |

## When NOT to Use EmptyState

| Scenario | Use Instead |
|----------|-------------|
| Loading states | Skeleton loader |
| Success confirmation | Toast or alert |
| Form validation | Inline error messages |
| Minor notifications | Badge or indicator |

---

## Related Components

- **[DataTable](../DataTable/README.md)** — Table with built-in empty state
- **[ActivityFeed](../ActivityFeed/README.md)** — Feed with empty message
- **[Alert](../../components/Alert/README.md)** — For error/warning states
- **[Skeleton](../../components/Skeleton/README.md)** — Loading states
