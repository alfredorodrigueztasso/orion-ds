# AgentWorkspace

> Full-page workspace template for managing AI agents organized in collapsible folders with drag & drop support.
> Foundation template for the **ChatBuilder platform**.

---

## Quick Start

```tsx
import { AgentWorkspace } from "@orion/react";
import { Bot, Sparkles, FolderPlus, Plus } from "lucide-react";

<AgentWorkspace
  navbar={{
    logo: <Bot size={24} />,
    workspaceName: "My Workspace",
    userAvatar: "/avatar.jpg",
    userName: "John Doe",
  }}
  pageHeader={{
    title: "AI Agents",
    icon: <Sparkles size={28} />,
  }}
  folders={[
    {
      id: "folder-1",
      title: "Agents",
      agents: [
        {
          id: "agent-1",
          title: "Customer Support",
          avatar: "/agent-avatar.svg",
          status: "published",
        },
      ],
    },
  ]}
  looseAgents={[
    {
      id: "agent-loose-1",
      title: "General Purpose",
      avatar: "/avatar.svg",
      status: "published",
    },
  ]}
  onCreateFolder={() => console.log("Create folder")}
  onCreateAgent={() => console.log("Create agent")}
  enableDragDrop={true}
/>;
```

---

## Context: ChatBuilder Platform

**AgentWorkspace** is the foundation template for the ChatBuilder platform — a comprehensive system for building, managing, and deploying conversational AI agents.

### Role in ChatBuilder Ecosystem

| Template           | Purpose                          | Built On          |
| ------------------ | -------------------------------- | ----------------- |
| `AgentWorkspace`   | Agent library & organization     | ✓ Foundation      |
| `ChatPageTemplate` | Full-screen chat interface       | ✓ Agent execution |
| Future: Workflows  | Agent orchestration & automation | AgentWorkspace    |

---

## Features

- **Collapsible Folders** — Organize agents into collapsible groups with sort options
- **Loose Agents** — Agents not belonging to any folder displayed in a separate section
- **Drag & Drop** — Move agents between folders with visual feedback (toggle with `enableDragDrop`)
- **Navbar with Workspaces** — Workspace switcher, user menu, and brand logo (optional)
- **Page Header** — Title with icon and action buttons (create folder, create agent)
- **Empty State** — Customizable empty state when no agents exist
- **Responsive Design** — Adapts to mobile, tablet, and desktop
- **Full-Screen Layout** — Optimized for agent management workflows

---

## Regla de Tipografía SaaS (Global)

En todos los templates y módulos SaaS de Orion, se usa exclusivamente `--font-secondary` (DM Sans) como tipografía base de UI. `--font-primary` (Libre Baskerville) queda reservada solo para contextos display/marketing (hero, branding, etc.).

| Contexto                           | Fuente            | Token                   | Ubicación              |
| ---------------------------------- | ----------------- | ----------------------- | ---------------------- |
| Títulos, labels, navegación, cards | DM Sans           | `var(--font-secondary)` | Todo UI de SaaS        |
| Hero marketing, branding, display  | Libre Baskerville | `var(--font-primary)`   | Solo marketing/display |

Esta regla garantiza consistencia visual, legibilidad en interfaces funcionales y optimización para densidad informativa en todos los productos SaaS.

---

## Sections & Components Used

| Section/Component | Required | Purpose                            |
| ----------------- | -------- | ---------------------------------- |
| `Navbar`          | No       | Top navigation bar with workspace  |
| `PageHeader`      | **Yes**  | Page title, icon, and actions      |
| `AgentFolder`     | No       | Collapsible agent folder           |
| `AgentCard`       | No       | Individual agent card              |
| `EmptyState`      | No       | Empty state when no agents         |
| `Dropdown`        | No       | Workspace & more actions dropdowns |
| `Button`          | No       | Create folder/agent, actions       |
| `Avatar`          | No       | User avatar in navbar              |

---

## Props Reference

```typescript
interface AgentWorkspaceProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Navbar configuration (optional)
   * Includes logo, workspace name, workspace switcher, user menu
   */
  navbar?: NavbarConfig;

  /**
   * Page header configuration (optional)
   * Title, icon, and custom actions
   */
  pageHeader?: PageHeaderConfig;

  /**
   * Array of agent folders
   * Each folder contains agents and folder-level actions
   * @default []
   */
  folders?: AgentFolderProps[];

  /**
   * Agents not belonging to any folder
   * Displayed below folders in a separate section
   */
  looseAgents?: AgentCardProps[];

  /**
   * Create new folder handler
   */
  onCreateFolder?: () => void;

  /**
   * Create new agent handler
   */
  onCreateAgent?: () => void;

  /**
   * Invite participants handler
   */
  onInviteParticipants?: () => void;

  /**
   * Settings handler
   */
  onSettings?: () => void;

  /**
   * Custom empty state
   * Replaces default empty state when folders and looseAgents are empty
   */
  emptyState?: ReactNode;

  /**
   * Enable drag & drop between folders
   * @default true
   */
  enableDragDrop?: boolean;

  /**
   * HTML class name
   */
  className?: string;
}
```

### NavbarConfig

```typescript
interface NavbarConfig {
  /** Logo/brand element */
  logo?: ReactNode;

  /** Current workspace name */
  workspaceName?: string;

  /** Available workspaces for switching */
  workspaces?: Workspace[];

  /** Workspace change handler */
  onWorkspaceChange?: (id: string) => void;

  /** User avatar URL */
  userAvatar?: string;

  /** User name for initials fallback */
  userName?: string;

  /** User menu click handler */
  onUserMenuClick?: () => void;
}

interface Workspace {
  id: string;
  name: string;
}
```

### PageHeaderConfig

```typescript
interface PageHeaderConfig {
  /** Page title */
  title?: string;

  /** Optional icon next to title */
  icon?: ReactNode;

  /** Custom action buttons */
  actions?: ReactNode;
}
```

---

## Story Variants

The Storybook stories demonstrate different template configurations:

| Story               | Features                                | Use When                         |
| ------------------- | --------------------------------------- | -------------------------------- |
| `Default`           | Full navbar + folders + loose agents    | Showing complete workspace       |
| `EmptyState`        | Template structure without agents       | Onboarding new users             |
| `NoDragDrop`        | Folders + agents, drag disabled         | Static agent browsing            |
| `InteractiveAgents` | Folder + loose agents with edit/delete  | Demonstrating agent interactions |
| `FullFeatured`      | All features enabled + all interactions | Complete feature showcase        |
| `Mobile`            | Responsive mobile viewport (375px)      | Mobile experience testing        |

---

## Loose Agents

Agents not belonging to any folder are displayed in a separate **"Sin carpeta"** (Without folder) section below the folders.

### Usage

```tsx
<AgentWorkspace
  folders={[
    {
      id: "folder-1",
      title: "Active Agents",
      agents: [
        // Agents in folder
      ],
    },
  ]}
  looseAgents={[
    {
      id: "loose-1",
      title: "Unassigned Agent",
      avatar: "https://...",
      status: "draft",
      onClick: () => console.log("Agent clicked"),
      onEdit: () => console.log("Edit agent"),
      onDelete: () => console.log("Delete agent"),
    },
  ]}
/>
```

### Features

- **Grid layout** — 3 columns on desktop, 2 on tablet, 1 on mobile
- **Draggable** — Loose agents can be dragged into folders (when `enableDragDrop=true`)
- **Card interactions** — Edit, delete, and click handlers on each agent
- **Responsive** — Adapts to all screen sizes automatically

---

## Drag & Drop

Enable agents to be moved between folders with rich visual feedback and insertion indicators.

### How It Works

```tsx
<AgentWorkspace
  enableDragDrop={true} // Enable drag & drop (default)
  folders={[
    {
      id: "folder-1",
      title: "Agents",
      agents: [
        {
          id: "agent-1",
          title: "Customer Support",
          draggable: true, // Mark as draggable
          // ...
        },
      ],
      onDrop: (agentId, folderId, insertionIndex) => {
        // Handle drop with optional insertion position
        // insertionIndex?: number - position where agent will be inserted
        moveAgentToFolder(agentId, folderId, insertionIndex);
      },
    },
  ]}
  looseAgents={[
    {
      id: "agent-loose-1",
      title: "General Purpose",
      draggable: true, // Can also drag loose agents into folders
      // ...
    },
  ]}
/>
```

### Visual Feedback

- **Drag overlay** — Ghost card with rotation follows cursor while dragging
- **Drop target highlighting** — Folder background changes to soft brand color with dashed border
- **Insertion indicator** — Dynamic blue line shows exact position where agent will be inserted
  - Updates in real-time as cursor moves over agents
  - Shows centered for empty folders
- **Automatic cleanup** — All visual states reset after drop or when dragging leaves folder
- **Pointer sensor** — 8px movement required to start drag (prevents accidental drags on clicks)

### State Management

The parent component must implement state management to move agents:

```tsx
const handleDrop = (
  agentId: string,
  targetFolderId: string,
  insertionIndex?: number,
) => {
  setFolders((prev) => {
    // 1. Find source folder containing agent
    // 2. Remove agent from source
    // 3. Insert agent in target at specified index (or end if not specified)
    // 4. Update agentCount in both folders
    return updatedFolders;
  });
};
```

### Disable Drag & Drop

```tsx
<AgentWorkspace
  enableDragDrop={false} // Disable drag & drop
  // Folders and agents become static
/>
```

### Edge Cases Handled

- **Empty folders** — Drop target shows insertion line centered
- **Collapsed folders** — Still accept drops and insert at beginning
- **Cursor exit** — All visual states immediately reset when leaving folder
- **Same folder** — Drops to same folder are ignored (no state change)

---

## Empty State

Customize the empty state when no agents or folders exist.

### Default Empty State

```tsx
<AgentWorkspace
  folders={[]}
  looseAgents={[]}
  // Uses default empty state with "No hay carpetas todavía" message
/>
```

### Custom Empty State

```tsx
import { EmptyState } from "@orion/react";
import { Bot } from "lucide-react";

<AgentWorkspace
  folders={[]}
  looseAgents={[]}
  emptyState={
    <EmptyState
      icon={<Bot size={48} />}
      title="¡Bienvenido a AgentWorkspace!"
      description="Crea tu primer agente de IA para empezar a automatizar tareas."
      action={<Button variant="primary">Crear Primer Agente</Button>}
    />
  }
/>;
```

---

## Responsive Behavior

The template adapts to all screen sizes with media query breakpoints:

| Breakpoint | Changes                                                                      |
| ---------- | ---------------------------------------------------------------------------- |
| **1440px** | Max content width (wide desktop displays)                                    |
| **1200px** | Loose agents grid: 3 columns → 2 columns                                     |
| **1024px** | Content padding: `var(--spacing-6)` → `var(--spacing-4)`                     |
| **768px**  | Mobile mode: Single column agents, hidden navbar links, mobile dropdown menu |

### Mobile Considerations

- **Hidden on mobile**: Desktop-only buttons ("Nueva carpeta" moves to dropdown)
- **Workspace selector**: Hidden on mobile (accessible via navbar menu)
- **More actions dropdown**: Two variants:
  - Desktop: Shows "Invitar participantes" + "Configuración"
  - Mobile: Adds "Nueva carpeta" to dropdown
- **Loose agents grid**: Single column layout
- **Reduced padding**: Saves screen space on small devices

---

## Accessibility

- **Navbar elements**: Use semantic `<nav>` with proper link hierarchy
- **Page header**: Uses proper heading levels (`<h1>`)
- **Folder title**: Semantic section headings
- **Buttons**: Proper `aria-label` on icon-only buttons
- **Drag & drop**: Keyboard-accessible (pointer sensor)
- **Loose agents title**: Semantic text for screen readers
- **Focus management**: Visible focus states on all interactive elements

---

## Anti-Patterns

### Missing PageHeader

```tsx
// WRONG - pageHeader should be provided
<AgentWorkspace
  folders={folders}
  looseAgents={looseAgents}
/>

// CORRECT
<AgentWorkspace
  pageHeader={{
    title: 'Agentes IA',
    icon: <Sparkles size={28} />,
  }}
  folders={folders}
  looseAgents={looseAgents}
/>
```

### Empty Folders Array Instead of Omitting

```tsx
// LESS IDEAL - Empty array triggers empty state
<AgentWorkspace
  folders={[]}
  looseAgents={[]}
/>

// BETTER - Use default parameter (same behavior)
<AgentWorkspace
  looseAgents={[]}
/>
```

### Drag & Drop Without onDrop Handler

```tsx
// WRONG - enableDragDrop=true but no onDrop handler
<AgentWorkspace
  enableDragDrop={true}
  folders={[
    {
      id: 'folder-1',
      agents: [...],
      // Missing onDrop handler!
    },
  ]}
/>

// CORRECT
<AgentWorkspace
  enableDragDrop={true}
  folders={[
    {
      id: 'folder-1',
      agents: [...],
      onDrop: (agentId, folderId) => handleDrop(agentId, folderId),
    },
  ]}
/>
```

### Not Providing User Avatar

```tsx
// WRONG - Navbar shows as broken without avatar
<AgentWorkspace
  navbar={{
    workspaceName: 'My Workspace',
    // Missing userAvatar
  }}
/>

// CORRECT
<AgentWorkspace
  navbar={{
    workspaceName: 'My Workspace',
    userAvatar: '/path/to/avatar.jpg',
    userName: 'John Doe',  // Fallback for initials
  }}
/>
```

---

## When to Use

| Scenario                  | Recommendation |
| ------------------------- | -------------- |
| AI agent library          | ✅ Yes         |
| Agent management UI       | ✅ Yes         |
| Workspace organization    | ✅ Yes         |
| Multi-workspace platforms | ✅ Yes         |
| ChatBuilder applications  | ✅ Yes         |

## When NOT to Use

| Scenario          | Use Instead           |
| ----------------- | --------------------- |
| Single agent chat | `ChatPageTemplate`    |
| Admin dashboard   | `DashboardTemplate`   |
| User profile page | `ProfilePageTemplate` |
| Settings page     | `SettingsTemplate`    |
| Marketing landing | `LandingPageTemplate` |
| Data management   | `DashboardTemplate`   |

---

## Complete Example

### Full-Featured Workspace with Folders and Loose Agents

```tsx
import { AgentWorkspace, EmptyState, Button } from "@orion/react";
import {
  Bot,
  Sparkles,
  FolderPlus,
  Plus,
  Building2,
  Star,
  Zap,
} from "lucide-react";
import { useState } from "react";

function MyAgentWorkspace() {
  const [folders, setFolders] = useState([
    {
      id: "folder-1",
      title: "Production Agents",
      agents: [
        {
          id: "agent-1",
          title: "Customer Support Bot",
          description: "Handles customer inquiries 24/7",
          avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=support",
          status: "published",
          draggable: true,
          onClick: (id) => console.log("Agent clicked:", id),
          onEdit: (id) => console.log("Edit agent:", id),
          onDelete: (id) => console.log("Delete agent:", id),
        },
        {
          id: "agent-2",
          title: "Sales Assistant",
          description: "Helps qualify leads",
          avatar: <Star size={32} fill="var(--status-warning)" />,
          status: "published",
          draggable: true,
          onClick: (id) => console.log("Agent clicked:", id),
          onEdit: (id) => console.log("Edit agent:", id),
          onDelete: (id) => console.log("Delete agent:", id),
        },
      ],
      defaultExpanded: true,
      sortOptions: [
        { label: "Most Recent", value: "recent" },
        { label: "Alphabetical", value: "alpha" },
      ],
      selectedSort: "recent",
      onDrop: (agentId, folderId, insertionIndex) =>
        console.log(
          "Agent dropped:",
          agentId,
          "into folder:",
          folderId,
          "at index:",
          insertionIndex,
        ),
      onSortChange: (value) => console.log("Sort changed:", value),
      onFolderEdit: () => console.log("Edit folder"),
      onFolderDelete: () => console.log("Delete folder"),
      onFolderInvite: () => console.log("Invite to folder"),
    },
  ]);

  const [looseAgents] = useState([
    {
      id: "agent-loose-1",
      title: "Experimental Agent",
      description: "Testing new features",
      avatar: <Zap size={32} />,
      status: "draft",
      draggable: true,
      onClick: () => console.log("Loose agent clicked"),
      onEdit: () => console.log("Edit loose agent"),
      onDelete: () => console.log("Delete loose agent"),
    },
  ]);

  return (
    <AgentWorkspace
      navbar={{
        logo: <Building2 size={24} />,
        workspaceName: "Acme Corp",
        workspaces: [
          { id: "acme", name: "Acme Corp" },
          { id: "beta", name: "Beta Team" },
        ],
        onWorkspaceChange: (id) => console.log("Workspace changed:", id),
        userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
        userName: "John Doe",
        onUserMenuClick: () => console.log("User menu"),
      }}
      pageHeader={{
        title: "AI Agents",
        icon: <Sparkles size={28} />,
      }}
      folders={folders}
      looseAgents={looseAgents}
      onCreateFolder={() => console.log("Create folder")}
      onCreateAgent={() => console.log("Create agent")}
      onInviteParticipants={() => console.log("Invite")}
      onSettings={() => console.log("Settings")}
      enableDragDrop={true}
    />
  );
}

export default MyAgentWorkspace;
```

---

## Related

- **[AgentFolder](../../../sections/AgentFolder/README.md)** — Collapsible agent folder section
- **[AgentCard](../../../components/AgentCard/README.md)** — Individual agent card component
- **[ChatPageTemplate](../ChatPageTemplate/)** — Full-screen chat interface
- **[EmptyState](../../../sections/EmptyState/README.md)** — Empty state section
- **[Navbar](../../../components/Navbar/README.md)** — Navigation bar component
- **[PageHeader](../../../sections/PageHeader/README.md)** — Page header section
