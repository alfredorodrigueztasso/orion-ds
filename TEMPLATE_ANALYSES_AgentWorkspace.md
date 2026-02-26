# Template Analysis: AgentWorkspace

**File**: `packages/react/src/templates/app/AgentWorkspace/`
**Related**: See [TEMPLATE_ANALYSIS_PROTOCOL.md](./TEMPLATE_ANALYSIS_PROTOCOL.md) for methodology.

---

## 1. Template Identity Card

```
Name:          AgentWorkspace
Purpose:       Full-page workspace for managing multiple AI agents organized in
               collapsible folders with drag-and-drop support
Context:       Main dashboard after user logs into an AI agent management platform
               (like Linear's project dashboard, but for AI agents)
Complexity:    Complex
Main Pattern:  Sidebar navigation + Main content with drag-and-drop
Audience:      Platform developers building multi-agent SaaS applications
File:          packages/react/src/templates/app/AgentWorkspace/
```

---

## 2. Visual Architecture

### Layout Overview

```
┌──────────────────────────────────────────────┐
│                 AgentWorkspace               │
├──────────────────────────────────────────────┤
│ Sidebar (260px)  │  Main Content            │
│                  │                           │
│ [NavTree]        │  [PageHeader]             │
│ ├─ WorkSpace     │   Title "AI Agents"      │
│   Switcher       │   [Buttons]               │
│ ├─ Sections      │                           │
│   • Agentes IA   │  [Content Area]           │
│   • Centro Ayuda │  • [Folders]             │
│   • Comunidad    │    ├─ [Folder 1]        │
│ └─ UserMenu      │    │  ├─ [AgentCard]    │
│                  │    │  ├─ [AgentCard]    │
│                  │    │  └─ [Insertion]    │
│                  │    ├─ [Folder 2]        │
│                  │    │  └─ [AgentCard]    │
│                  │    │                     │
│                  │    └─ [Loose Agents]    │
│                  │       ├─ [AgentCard]    │
│                  │       └─ [AgentCard]    │
└──────────────────────────────────────────────┘
```

### Dimensions & Responsive Behavior

| Dimension | Value | Notes |
|-----------|-------|-------|
| Sidebar width | 260px | Configurable via `sidebarWidth` prop |
| Sidebar position | Fixed | Never collapses on mobile |
| Main content | Flex | Takes remaining width |
| Page header height | ~60-80px | Depends on content |
| Folder cards | Auto width | Wraps to grid |
| Agent cards | 300px (approx) | Inside folder, scrollable list |
| Overall height | 100vh | Full viewport |
| Scroll behavior | Independent | Sidebar scrolls separately from main |

### Visual States

**Default State**:
- Sidebar visible with navigation sections expanded
- Page header with title + action buttons
- Folders displayed in main area
- No drag overlay

**Dragging State**:
- Mouse cursor shows "grabbing"
- Ghost card follows cursor at 2deg rotation
- Folder under cursor gets highlight background
- Blue insertion line shows exact drop position
- Other agents in folder appear semi-transparent

**Post-Drop State**:
- 600ms highlight animation on target folder
- Ghost card fades out
- Agent position updates in list
- State resets

**Empty State**:
- Large bot icon
- "No hay carpetas todavía" message
- CTA button "Crear primera carpeta"

---

## 3. Component Composition Map

### Full Component Tree

```
AgentWorkspace (Root)
│
├─ NavTree (Sidebar)
│  ├─ Header: WorkspaceSwitcher
│  │  ├─ Current workspace name + role
│  │  ├─ Member count badge
│  │  └─ Dropdown to switch workspaces
│  │
│  ├─ Sections (NavTreeSection[])
│  │  │
│  │  ├─ Section 1: "Agentes IA" (always)
│  │  │  ├─ Badge: Total agent count
│  │  │  ├─ defaultExpanded: true
│  │  │  └─ Nodes:
│  │  │     ├─ Folder nodes (folder.id)
│  │  │     │  ├─ icon: FolderOpen
│  │  │     │  ├─ label: folder.title
│  │  │     │  └─ children: Agent nodes
│  │  │     │     ├─ Agent node (agent.id)
│  │  │     │     │  ├─ icon: Avatar
│  │  │     │     │  ├─ label: agent.title
│  │  │     │     │  └─ children: 7 sub-pages
│  │  │     │     │     ├─ Editar (Edit2 icon)
│  │  │     │     │     ├─ Métricas (BarChart3)
│  │  │     │     │     ├─ Conversaciones (MessageSquare)
│  │  │     │     │     ├─ Fuentes de datos (Database)
│  │  │     │     │     ├─ Integraciones (Plug)
│  │  │     │     │     ├─ Campañas (Megaphone)
│  │  │     │     │     └─ Configuración (Settings)
│  │  │     │
│  │  │     └─ Loose agent nodes (looseAgents[])
│  │  │        └─ [Same structure as folder agents]
│  │  │
│  │  ├─ Section 2: "Centro de Ayuda" (conditional)
│  │  │  ├─ Only shows if helpCenters.length > 0
│  │  │  ├─ Badge: helpCenters.length
│  │  │  └─ Nodes: Help center pages
│  │  │     ├─ id: helpCenter.id
│  │  │     ├─ type: "page"
│  │  │     ├─ label: helpCenter.name
│  │  │     └─ icon: helpCenter.icon ?? BookOpen
│  │  │
│  │  └─ Section 3: "Comunidad" (always)
│  │     ├─ Badge: 3 (fixed)
│  │     └─ Nodes: 3 fixed pages
│  │        ├─ Contactos (Users2)
│  │        ├─ Conversaciones (MessageCircle)
│  │        └─ Segmentos (Target)
│  │
│  └─ Footer: UserMenu
│     ├─ User avatar + name
│     └─ Sections:
│        ├─ Mi Cuenta (Profile, Preferences)
│        ├─ Espacio de Trabajo (Settings, Invite)
│        ├─ Suscripción (Plan, Billing)
│        └─ Soporte (Help, Logout)
│
└─ Main Content
   │
   ├─ PageHeader
   │  ├─ Title
   │  │  ├─ Icon (Sparkles or custom)
   │  │  └─ Text: "AI Agents"
   │  └─ Actions Bar
   │     ├─ [Nueva carpeta] button (secondary, hidden on mobile)
   │     ├─ [Nuevo agente] button (primary)
   │     └─ Custom actions slot
   │
   ├─ If empty state
   │  ├─ Icon (Bot)
   │  ├─ Text: "No hay carpetas todavía"
   │  └─ CTA Button: "Crear primera carpeta"
   │
   └─ If has folders
      └─ DndContext
         │  (Drag-drop context for all folders)
         │
         ├─ Folders Container (flex grid)
         │  │
         │  ├─ AgentFolder 1
         │  │  ├─ Header: Folder.title + folder actions (edit, delete)
         │  │  ├─ Agent Count Badge
         │  │  ├─ Agent List
         │  │  │  ├─ AgentCard 1 (draggable)
         │  │  │  │  ├─ Avatar
         │  │  │  │  ├─ Title
         │  │  │  │  ├─ Description
         │  │  │  │  ├─ Avatar group (team)
         │  │  │  │  ├─ Meta (created date)
         │  │  │  │  └─ Actions menu
         │  │  │  └─ AgentCard 2 (draggable)
         │  │  │
         │  │  └─ Drop Target Area
         │  │     (Visual highlight when dragging over)
         │  │
         │  ├─ AgentFolder 2
         │  │  └─ [Same structure]
         │  │
         │  └─ Loose Agents Section (if looseAgents.length > 0)
         │     ├─ Divider "Sin carpeta"
         │     └─ Agent Grid
         │        └─ AgentCard[] (draggable to folders)
         │
         ├─ DragOverlay
         │  └─ Ghost AgentCard
         │     └─ Following cursor with 2deg rotation
         │
         └─ Insertion Indicator
            └─ Blue line showing drop position
```

### Component Dependencies

```
AgentWorkspace
├─ @dnd-kit/core
│  ├─ DndContext (provides drag-drop context)
│  ├─ DragOverlay (renders ghost card)
│  ├─ PointerSensor (detects drag with 8px threshold)
│  └─ useSensor, useSensors (hook to configure sensors)
│
├─ NavTree (section)
│  └─ Hierarchical navigation with collapsible sections
│
├─ PageHeader (section)
│  └─ Title + action buttons
│
├─ AgentFolder (section)
│  ├─ Displays folder title
│  ├─ Lists agents
│  ├─ Handles native onDragOver/onDrop events
│  └─ Shows insertion indicators
│
├─ AgentCard (component)
│  ├─ Shows agent info
│  ├─ Draggable element
│  └─ Right-click actions menu
│
├─ UserMenu (section)
│  └─ User account + workspace menu
│
├─ WorkspaceSwitcher (section)
│  └─ Switch between workspaces
│
├─ Button (component)
│  └─ Create folder/agent buttons
│
├─ Avatar (component)
│  └─ User avatar, agent avatar
│
└─ Divider (component)
   └─ "Sin carpeta" section separator
```

---

## 4. State Management Pattern

### Local State

| State Variable | Type | Initial | Purpose | Managed By | Scope |
|---|---|---|---|---|---|
| `activeNavNodeId` | string \| undefined | From controlled prop or undefined | Which nav node is currently highlighted/active | Component | Template-wide |
| `activeId` | string \| null | null | ID of agent currently being dragged | DndContext callback | Drag-drop only |
| `overId` | string \| null | null | ID of folder currently under cursor during drag | DndContext callback | Drag-drop only |
| `completedFolderId` | string \| null | null | Visual feedback - folder just completed drop | handleDragEnd | Transient (600ms) |

### State Transitions

```
User Interaction → State Change → UI Update → Callback to Parent

1. NAV NODE CLICK
   User clicks nav node
   → setActiveNavNodeId(nodeId)
   → NavTree highlights node
   → onNavNodeClick(nodeId) callback
   → Parent handles routing/page change

2. DRAG START
   User presses mouse on AgentCard
   → Drag detection (8px threshold)
   → setActiveId(agentId)
   → DragOverlay shows ghost card
   → DndContext is now active

3. DRAG OVER FOLDER
   User moves mouse over folder during drag
   → setOverId(folderId)
   → AgentFolder visually highlights (CSS)
   → Insertion line shows drop position
   → Parent's AgentFolder shows drop feedback

4. DRAG END
   User releases mouse over folder
   → handleDragEnd() called
   → Validates source ≠ target folder
   → Callback: folder.onDrop(agentId, targetFolderId, insertionIndex)
   → Parent handles state update (move agent)
   → setTimeout(() => setCompletedFolderId(null), 600ms)
   → Visual highlight fades after 600ms
   → setActiveId(null) + setOverId(null)

5. DRAG CANCEL
   User releases mouse outside folder or presses Escape
   → handleDragEnd() with event.over = null
   → setActiveId(null) + setOverId(null)
   → Ghost card disappears
   → No parent callback (no drop occurred)
```

### Props vs State

**Props (from parent)** - Immutable data:
```tsx
interface AgentWorkspaceProps {
  navbar: NavbarConfig           // Workspace + user info
  pageHeader: PageHeaderConfig   // Title + icon
  folders: AgentFolderData[]     // Folders with agents
  looseAgents?: AgentData[]      // Ungrouped agents
  helpCenters?: HelpCenter[]     // Help center pages
  // ... 15+ handler callbacks
}
```

**Local State** - Mutable UI state:
```tsx
const [activeNavNodeId, setActiveNavNodeId] = useState(controlledActiveNavNodeId);
const [activeId, setActiveId] = useState(null);
const [overId, setOverId] = useState(null);
const [completedFolderId, setCompletedFolderId] = useState(null);
```

**Memoized Values** - Computed/cached:
```tsx
const navTreeSections = useMemo(() => {
  // Build nav sections from folders, agents, helpCenters
}, [folders, looseAgents, helpCenters]);

const sectionsToShow = useMemo(() => {
  // Filter sections by visibleSections prop
}, [navTreeSections, visibleSections]);

const navTreeActions = useMemo(() => {
  // Build context menu actions
}, [folders, looseAgents, helpCenters, ...handlers]);

const sensors = useSensors(
  useSensor(PointerSensor, { activationConstraint: { distance: 8 } })
);
```

### Parent Responsibilities

The **parent component** must implement:

```tsx
// State management
const [folders, setFolders] = useState(initialFolders);

// Folder operations
const handleCreateFolder = () => { /* ... */ };
const handleEditFolder = (folderId) => { /* ... */ };
const handleDeleteFolder = (folderId) => { /* ... */ };

// Agent operations
const handleCreateAgent = (parentFolderId) => { /* ... */ };
const handleDeleteAgent = (agentId) => { /* ... */ };

// Drag-drop operation
const handleMoveAgent = (agentId, targetFolderId, insertionIndex) => {
  setFolders(prev => {
    // Find source folder and remove agent
    // Find target folder and insert agent at index
    // Update agentCount in both folders
    // Optionally call API to persist
  });
};

// Navigation
const handleNavNodeClick = (nodeId) => {
  // Route to page: agent edit, metrics, conversations, etc.
};
```

---

## 5. Data Flow Diagram

### Input Data

```
Props Input
├─ navbar
│  ├─ logo (ReactNode)
│  ├─ workspaceName (string)
│  ├─ workspaceRole (string)
│  ├─ workspaceParticipantCount (number)
│  ├─ userAvatar (string URL)
│  ├─ userName (string)
│  ├─ userEmail (string)
│  ├─ workspaces (Workspace[])
│  │  ├─ id, name, role
│  │  └─ ... more workspaces
│  └─ onWorkspaceChange, onWorkspaceSettings, etc. (callbacks)
│
├─ pageHeader
│  ├─ title (string)
│  ├─ icon (ReactNode)
│  └─ actions (ReactNode)
│
├─ folders (FolderData[])
│  └─ Each folder:
│     ├─ id (string)
│     ├─ title (string)
│     ├─ description (string)
│     ├─ agents (AgentData[])
│     │  └─ Each agent:
│     │     ├─ id (string)
│     │     ├─ title (string)
│     │     ├─ avatar (string | ReactNode)
│     │     ├─ description (string)
│     │     └─ ... more properties
│     └─ onDrop (callback)
│
├─ looseAgents (AgentData[])
│  └─ Same structure as folder agents
│
├─ helpCenters (HelpCenterData[])
│  └─ Each help center:
│     ├─ id (string)
│     ├─ name (string)
│     ├─ icon (ReactNode)
│     └─ ... more properties
│
└─ Handler callbacks (20+ functions)
   ├─ onCreateFolder, onEditFolder, onDeleteFolder
   ├─ onCreateAgent, onDeleteAgent, onMoveAgent
   ├─ onNavNodeClick
   └─ ... workspace, user, help center handlers
```

### Internal Processing

```
AgentWorkspace Processing
│
├─ useMemo(navTreeSections)
│  ├─ Transform folders[] → NavTree.Sections
│  ├─ Add each folder as Node
│  ├─ Add agents under folder as child Nodes
│  ├─ Add 7 sub-pages for each agent
│  ├─ Add looseAgents as root-level Nodes
│  ├─ Add helpCenters section (if any)
│  ├─ Add fixed "Comunidad" section
│  └─ Memoize to prevent rebuilds
│
├─ useMemo(sectionsToShow)
│  ├─ Filter navTreeSections by visibleSections prop
│  └─ Only show relevant sections
│
├─ useMemo(navTreeActions)
│  ├─ Detect node type (folder, agent, helpCenter, page)
│  ├─ Generate context menu actions
│  │  ├─ Folder: Edit, Delete
│  │  ├─ Agent: Move, Delete
│  │  └─ HelpCenter: Edit, Delete
│  └─ Bind callbacks to actions
│
├─ Drag-Drop State Management
│  ├─ useSensors(PointerSensor) → 8px activation
│  ├─ DndContext wraps folder area
│  ├─ handleDragStart(event) → setActiveId
│  ├─ handleDragOver(event) → setOverId (visual feedback)
│  ├─ handleDragEnd(event) → Validate & trigger parent callback
│  └─ activeAgent = find agent with activeId
│
└─ Render Tree
   ├─ Sidebar with NavTree + sections
   ├─ Main content with PageHeader
   ├─ Empty state OR Folders + DragOverlay
   └─ Loose agents section (if any)
```

### Output (Callbacks to Parent)

```
User Actions → Template Callbacks

Navigation:
├─ onNavNodeClick(nodeId)
│  └─ User clicked nav node → Parent routes to page
│
Folder Operations:
├─ onCreateFolder()
│  └─ User clicked "+ Nueva carpeta" button
├─ onEditFolder(folderId)
│  └─ User clicked "Edit" in folder context menu
└─ onDeleteFolder(folderId)
   └─ User clicked "Delete" in folder context menu

Agent Operations:
├─ onCreateAgent(parentFolderId)
│  └─ User clicked "+ Nuevo agente" or "+ Create" in folder
├─ onDeleteAgent(agentId)
│  └─ User clicked "Delete" in agent context menu
├─ onMoveAgent(agentId, targetFolderId, insertionIndex)
│  └─ User dropped agent on folder (main operation)
│
Help Center Operations:
├─ onCreateHelpCenter()
├─ onEditHelpCenter(helpCenterId)
└─ onDeleteHelpCenter(helpCenterId)

Workspace Operations:
├─ onWorkspaceChange(workspaceId)
├─ onWorkspaceSettings()
├─ onWorkspaceInvite()
└─ onCreateWorkspace()

User Menu Operations:
├─ onInviteParticipants()
├─ onSettings()
└─ onUserMenuClick() (logout)
```

---

## 6. Key Behavioral Patterns

### Pattern 1: Hierarchical Sidebar Navigation

**Structure**:
- Sections (collapsed/expandable)
  - Nodes (folders, pages)
    - Children (agents, sub-pages)

**Behavior**:
- Sections build from props (folders + agents + helpCenters)
- "Agentes IA" section always visible, default expanded
- "Centro de Ayuda" only shows if helpCenters exist
- "Comunidad" section always visible with 3 fixed pages
- Active node highlighted with background color
- Click node → Callback to parent for routing
- Right-click context menu with type-specific actions

**Example**: Clicking `agent-1-edit` node:
```
NavTree node click
→ activeNavNodeId = "agent-1-edit"
→ NavTree highlights the node
→ onNavNodeClick("agent-1-edit")
→ Parent receives callback
→ Parent routes to /agents/agent-1/edit page
→ AgentEditor template loads for this agent
```

### Pattern 2: Drag-and-Drop System

**Initialization**:
```tsx
const sensors = useSensors(
  useSensor(PointerSensor, { activationConstraint: { distance: 8 } })
);
```
Requires 8px mouse movement to start drag (prevents accidental drags on click).

**Drag Sequence**:

1. **Start** - User presses mouse on AgentCard:
   ```tsx
   handleDragStart({ active: { id: "agent-1" } })
   → setActiveId("agent-1")
   → activeAgent = find agent with id "agent-1"
   → DragOverlay shows AgentCard with isDragging=true
   → Card has 2deg rotation: transform: rotate(2deg)
   ```

2. **Over** - User moves mouse over AgentFolder:
   ```tsx
   handleDragOver({ over: { id: "folder-2" } })
   → setOverId("folder-2")
   → AgentFolder receives isDropTarget=true
   → Folder background highlights
   → Insertion line shows drop position
   ```

3. **End** - User releases mouse over folder:
   ```tsx
   handleDragEnd({ active, over })
   → Validates: over exists + different folder
   → Calls: folder.onDrop(agentId, targetFolderId, insertionIndex)
   → Parent updates state: move agent, update counts
   → setCompletedFolderId(targetFolderId)
   → 600ms highlight animation on target folder
   → setTimeout(() => setCompletedFolderId(null), 600)
   → setActiveId(null) + setOverId(null)
   ```

**Visual Feedback**:
- **Hover**: Folder background color change
- **Over**: Blue insertion line showing exact position
- **Ghost**: AgentCard follows cursor with rotation
- **Complete**: Target folder highlight for 600ms

**Supports**:
- Moving agents between folders
- Moving agents from folder to "loose agents" section
- Exact insertion positioning via insertion index

### Pattern 3: Sidebar Stability

**Key Characteristics**:
- **Fixed Position**: 260px wide (configurable)
- **Always Visible**: No hamburger menu, no collapse
- **Independent Scroll**: Sidebar scrolls separately from main content
- **Persistent State**: Active nav node saved to localStorage
- **Header/Footer Fixed**: Workspace switcher at top, user menu at bottom
- **Content Scrollable**: Nav sections scroll between header and footer

**Responsive Note**:
- Mobile users still see full sidebar (might squeeze main content)
- Parent should handle responsive grid if needed
- No built-in mobile menu support

### Pattern 4: Content Area Responsiveness

**Main Content Layout**:
```
┌─────────────────────┐
│   PageHeader        │  ← Fixed height, title + buttons
├─────────────────────┤
│   Scrollable        │  ← Takes remaining space
│   • Folders         │
│   • Agents          │
│   • Loose Agents    │
└─────────────────────┘
```

**Folder Layout**:
- CSS Grid with auto-fitting columns
- Each folder card auto-sizes
- Agent list inside folder scrolls horizontally
- Responsive to viewport width

### Pattern 5: Action Routing

**NavTree Context Menu** (Right-click):
```
Folder Node
├─ Edit → onEditFolder(folderId)
└─ Delete → onDeleteFolder(folderId)

Agent Node
├─ Move to folder → onMoveAgent(agentId, targetFolderId)
└─ Delete → onDeleteAgent(agentId)

HelpCenter Node
├─ Edit → onEditHelpCenter(helpCenterId)
└─ Delete → onDeleteHelpCenter(helpCenterId)
```

**Header Action Buttons**:
```
PageHeader Actions
├─ [Nueva carpeta] → onCreateFolder()
├─ [Nuevo agente] → onCreateAgent()
└─ Custom actions slot
```

**Add Actions** (within sections):
```
Section Header
├─ + Create → Depends on section
   ├─ Agentes IA root level → onCreateFolder()
   ├─ Agentes IA in folder → onCreateAgent(parentFolderId)
   └─ Centro de Ayuda → onCreateHelpCenter()
```

### Pattern 6: Visual Feedback & Animation

**Hover States** (CSS):
- Card background color change
- Shadow increase
- Cursor pointer

**Active States** (JS):
- Nav node: Background highlight color
- Editor tab: Active indicator
- Folder: Highlight during drag-over

**Drag States**:
- Ghost card: 2deg rotation, following cursor
- Folder: Light background highlight
- Insertion line: Blue line at exact drop position
- Completed: 600ms highlight fade on target folder

**Transitions**:
- Drop animation: 150ms ease-out
- Highlight fade: Linear over 600ms
- Tab switch: Instant (no animation)

**Loading States**:
- `isLoading` prop for chat (AgentEditor only)
- `isTyping` indicator for typing animation
- No loading state for folder operations (parent handles)

### Pattern 7: Accessibility & Keyboard

**Focus Management**:
- NavTree receives focus via Tab
- Keyboard arrow keys navigate nav nodes
- Focus trap prevents tabbing out of NavTree
- Tab cycles through: Sidebar → Buttons → Sidebar

**Accessibility Features**:
- `aria-label` on icon buttons
- `role="main"` on main content area
- `role="navigation"` on sidebar
- Screen reader announces badge counts
- Divider with label "Sin carpeta"
- Proper heading hierarchy (h3 for section titles)

**Keyboard Shortcuts** (NavTree):
- **Arrow Up/Down**: Navigate between nodes
- **Arrow Left/Right**: Collapse/expand sections
- **Enter**: Select/click node
- **Escape**: Cancel drag or close context menu

**Accessibility Compliance**:
- WCAG 2.1 Level AA
- Color contrast 4.5:1 minimum
- Focus indicators visible
- Semantic HTML structure

---

## 7. Configuration & Extensibility

### Customizable Props

#### Sidebar Configuration
```tsx
interface SidebarProps {
  sidebarWidth?: number;           // Default: 260px
  visibleSections?: string[];      // Filter sections: ["agents", "help-centers", "community"]
  activeNavNodeId?: string;        // Controlled: which node is active
  onNavNodeClick?: (nodeId: string) => void;  // Callback when node clicked
}
```

**Examples**:
```tsx
// Narrow sidebar
<AgentWorkspace sidebarWidth={200} />

// Hide help centers section
<AgentWorkspace visibleSections={["agents", "community"]} />

// Controlled nav state
<AgentWorkspace
  activeNavNodeId="agent-1-edit"
  onNavNodeClick={(id) => router.push(`/agents/${id}`)}
/>
```

#### Navbar Configuration
```tsx
interface NavbarConfig {
  logo?: ReactNode;
  workspaceName?: string;
  workspaceRole?: string;
  workspaceParticipantCount?: number;
  userAvatar?: string;             // URL
  userName?: string;
  userEmail?: string;
  workspaces?: Workspace[];        // List of workspace options
  activeWorkspaceId?: string;
  onWorkspaceChange?: (workspaceId: string) => void;
  onWorkspaceSettings?: () => void;
  onWorkspaceInvite?: () => void;
  onCreateWorkspace?: () => void;
  onUserMenuClick?: () => void;    // Logout handler
}
```

**Example**:
```tsx
<AgentWorkspace
  navbar={{
    workspaceName: "Product Team",
    userName: "Alice Johnson",
    userAvatar: "/avatars/alice.jpg",
    workspaces: [
      { id: "1", name: "Product", role: "Admin" },
      { id: "2", name: "Research", role: "Member" }
    ],
    onWorkspaceChange: (id) => switchWorkspace(id),
    onUserMenuClick: () => logout()
  }}
/>
```

#### Page Header Configuration
```tsx
interface PageHeaderConfig {
  title?: string;                  // Default: "Agentes IA"
  icon?: ReactNode;                // Default: Sparkles icon
  actions?: ReactNode;             // Custom action buttons slot
}
```

#### Folder & Agent Configuration
```tsx
interface FolderData {
  id: string;
  title: string;
  description?: string;
  agents: AgentData[];
  onDrop?: (agentId, targetFolderId, insertionIndex) => void;
}

interface AgentData {
  id: string;
  title: string;
  avatar: string | ReactNode;      // URL or icon component
  description?: string;
  teamAvatars?: string[];          // Avatar group
  createdAt?: Date;
  status?: "active" | "inactive";
}
```

#### Drag-Drop Configuration
```tsx
interface DragDropProps {
  enableDragDrop?: boolean;        // Default: true
  // Sensors are hardcoded: PointerSensor with 8px threshold
  // Ghost card always has 2deg rotation
  // Drop animation always 150ms ease-out
}
```

#### Empty State Configuration
```tsx
interface EmptyStateProps {
  emptyState?: ReactNode;          // Custom empty state component
  // Default: Bot icon + text + button
}
```

### Extension Points

#### 1. Custom Nav Sections

Currently, nav sections are built automatically from props. To customize:

```tsx
// Option A: Use visibleSections to filter
<AgentWorkspace
  visibleSections={["agents"]}  // Hide help centers and community
/>

// Option B: Future - accept custom sections prop
// (Currently not supported, would require prop addition)
```

#### 2. Custom Empty State

```tsx
<AgentWorkspace
  emptyState={
    <div style={{ textAlign: "center" }}>
      <YourCustomIcon size={64} />
      <h3>Start by creating a folder</h3>
      <p>Organize your agents with folders</p>
      <Button onClick={onCreateFolder}>Create Folder</Button>
    </div>
  }
/>
```

#### 3. Custom Agent Card Rendering

Currently, AgentCard is hardcoded. To customize:

```tsx
// Option A: Fork AgentFolder component
// Option B: Wrap AgentWorkspace and override sections
// (AgentFolder would need customization point)
```

#### 4. Custom NavTree Rendering

Currently, NavTree is hardcoded with sections. To customize:

```tsx
// Option A: Pre-build sections and pass to AgentEditor instead
// Option B: Wrap AgentWorkspace with custom sidebar
```

### Limitations

**Cannot Customize**:
- NavTree structure (hardcoded 3-level hierarchy)
- Agent sub-pages (always 7 pages: Edit, Metrics, Conversations, etc.)
- Drag-drop sensors (always PointerSensor with 8px threshold)
- Ghost card styling (always 2deg rotation)
- Insertion indicator (always blue line)
- Sidebar width responsiveness (fixed width, no collapse)

**Possible Enhancements**:
- Add `customNavTree` prop to accept pre-built sections
- Add `agentSubPages` prop to customize the 7 pages
- Add `dragDropSensors` prop to configure PointerSensor
- Add `enableMobileMenu` prop for hamburger on mobile
- Add `sortingOptions` prop for per-folder sorting

---

## 8. Common Usage Patterns

### Pattern: Basic Integration

```tsx
// Parent component manages state and handlers
export function AgentDashboard() {
  const [folders, setFolders] = useState<FolderData[]>(initialFolders);

  const handleCreateFolder = () => {
    // Open modal or inline form
    // Create new folder with onDrop handler
  };

  const handleMoveAgent = (agentId: string, targetFolderId: string, index?: number) => {
    setFolders(prev => {
      const newFolders = [...prev];

      // Find source folder and remove agent
      const sourceFolder = newFolders.find(f =>
        f.agents.some(a => a.id === agentId)
      );
      if (!sourceFolder) return prev;

      const agentIndex = sourceFolder.agents.findIndex(a => a.id === agentId);
      const [agent] = sourceFolder.agents.splice(agentIndex, 1);

      // Find target folder and insert agent
      const targetFolder = newFolders.find(f => f.id === targetFolderId);
      if (!targetFolder) return prev;

      const insertIndex = index ?? targetFolder.agents.length;
      targetFolder.agents.splice(insertIndex, 0, agent);

      // Update agent counts
      sourceFolder.agentCount = sourceFolder.agents.length;
      targetFolder.agentCount = targetFolder.agents.length;

      // Optionally call API
      api.updateFolders(newFolders);

      return newFolders;
    });
  };

  const handleNavNodeClick = (nodeId: string) => {
    // Route to agent page
    const [agentId, page] = nodeId.split("-");
    router.push(`/agents/${agentId}/${page}`);
  };

  return (
    <AgentWorkspace
      navbar={{
        workspaceName: "My Workspace",
        userName: "John Doe",
        userAvatar: "/avatars/john.jpg",
        onUserMenuClick: () => logout()
      }}
      pageHeader={{
        title: "AI Agents",
        icon: <Bot size={28} />
      }}
      folders={folders.map(f => ({
        ...f,
        onDrop: (agentId, targetId, index) =>
          handleMoveAgent(agentId, targetId, index)
      }))}
      onCreateFolder={handleCreateFolder}
      onCreateAgent={(parentId) => createAgent(parentId)}
      onMoveAgent={handleMoveAgent}
      onDeleteAgent={(id) => deleteAgent(id)}
      onNavNodeClick={handleNavNodeClick}
    />
  );
}
```

### Pattern: With Complex State Management (Redux/Zustand)

```tsx
// Using Redux or Zustand for state
export function AgentDashboard() {
  const folders = useSelector(selectFolders);
  const dispatch = useDispatch();

  const handlers = {
    onCreateFolder: () => dispatch(createFolderAction()),
    onCreateAgent: (parentId) => dispatch(createAgentAction(parentId)),
    onMoveAgent: (agentId, targetId, index) =>
      dispatch(moveAgentAction({ agentId, targetId, index })),
    onDeleteAgent: (id) => dispatch(deleteAgentAction(id)),
    onNavNodeClick: (nodeId) => {
      const [agentId, page] = nodeId.split("-");
      dispatch(navigationSlice.actions.setPage(`/agents/${agentId}/${page}`));
    }
  };

  return <AgentWorkspace {...handlers} folders={folders} />;
}
```

### Pattern: Custom Navbar

```tsx
<AgentWorkspace
  navbar={{
    logo: <Logo />,
    workspaceName: workspace.name,
    workspaceRole: "Admin",
    workspaceParticipantCount: 12,
    userAvatar: currentUser.avatar,
    userName: currentUser.name,
    userEmail: currentUser.email,
    workspaces: allWorkspaces,
    activeWorkspaceId: currentWorkspace.id,
    onWorkspaceChange: (id) => switchWorkspace(id),
    onWorkspaceSettings: () => openWorkspaceSettings(),
    onWorkspaceInvite: () => openInviteDialog(),
    onCreateWorkspace: () => createNewWorkspace(),
    onUserMenuClick: () => logout()
  }}
  // ... rest of props
/>
```

### Pattern: Mobile-Responsive Wrapper

```tsx
// Wrap AgentWorkspace in responsive container
export function AgentDashboardResponsive() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  if (isMobile) {
    // On mobile, show fullscreen navigation
    return <AgentDashboardMobile />;
  }

  return (
    <div style={{ display: "grid", gridTemplateColumns: "260px 1fr" }}>
      <AgentWorkspace {...props} />
    </div>
  );
}
```

### Pattern: Drag-Drop Disabled

```tsx
// Show folder/agent structure without drag-drop
<AgentWorkspace
  enableDragDrop={false}
  folders={folders}
  // Users can still move agents via context menu
  onMoveAgent={handleMoveAgent}
/>
```

---

## 9. Constraints & Limitations

### Design Constraints

**❌ Don't Do These**:

1. **Don't modify the sidebar from inside the template**
   - All sidebar content comes from props
   - Can't dynamically add/remove sections
   - Use `visibleSections` prop to filter instead

2. **Don't pass very large agent lists**
   - 100+ agents per folder may cause performance issues
   - Implement pagination in parent
   - Load agents on-demand as user scrolls

3. **Don't nest drag-drop contexts**
   - DndContext already provided
   - Don't wrap AgentWorkspace in another DndContext

4. **Don't override CSS classes directly**
   - All styling should use CSS Modules
   - Use `className` prop for wrapper customization
   - Don't use `!important` overrides

5. **Don't use AgentWorkspace for different use cases**
   - Built specifically for agent folder management
   - Not suitable for file management, project boards, etc.
   - Consider other template patterns for different domains

### Features Not Supported

**❌ Not Built In**:

- **Mobile responsive hamburger menu**
  - Sidebar always visible on all screen sizes
  - Parent must handle responsive layout if needed

- **Collapsible sidebar**
  - Fixed width, cannot collapse
  - Use parent's responsive grid to hide sidebar on mobile

- **Nested drag-drop within agents**
  - Can only drag agents between folders
  - Cannot drag agents within a single folder to reorder

- **Custom drag preview styling**
  - Always uses fixed ghost card with 2deg rotation
  - Cannot customize rotation angle or shadow

- **Multi-select for batch operations**
  - Only single drag at a time
  - Batch operations require parent implementation

- **Undo/redo for drag operations**
  - Parent must implement undo/redo logic
   - Template doesn't track operation history

- **Search/filtering agents**
   - Template doesn't include search
   - Parent handles filtering and passes filtered data

- **Agent sorting options**
   - No built-in sort controls
   - Parent can implement sort and pass sorted data

- **Analytics/insights**
   - No agent usage metrics
   - Parent integrates with analytics service

### Performance Considerations

**Memoization**:
```tsx
// These are memoized to prevent unnecessary rebuilds
const navTreeSections = useMemo(() => {...}, [folders, looseAgents, helpCenters]);
const sectionsToShow = useMemo(() => {...}, [navTreeSections, visibleSections]);
const navTreeActions = useMemo(() => {...}, [folders, looseAgents, ...handlers]);
```

**Potential Bottlenecks**:

1. **Large agent lists** (100+):
   - NavTree rebuilds entire section
   - AgentFolder renders all agents
   - **Solution**: Use virtual scrolling or pagination

2. **Frequent prop updates**:
   - If parent re-renders often, template re-renders
   - **Solution**: Memoize parent component or use React.memo on folders

3. **Heavy drag-drop operations**:
   - On low-end devices, 150ms drop animation may jank
   - **Solution**: Use `enableDragDrop={false}` on slow devices

4. **localStorage access** (NavTree persistence):
   - Reads/writes on every nav click
   - **Solution**: Batch persistence (already optimized)

### Parent Responsibilities (What You Must Implement)

```tsx
interface ParentMustImplement {
  // State management
  folders: FolderData[];
  looseAgents?: AgentData[];
  helpCenters?: HelpCenterData[];

  // Folder CRUD
  onCreateFolder(): Promise<void>;
  onEditFolder(folderId: string): Promise<void>;
  onDeleteFolder(folderId: string): Promise<void>;

  // Agent CRUD
  onCreateAgent(parentFolderId?: string): Promise<void>;
  onDeleteAgent(agentId: string): Promise<void>;
  onMoveAgent(agentId: string, targetFolderId: string, index?: number): Promise<void>;

  // Navigation
  onNavNodeClick(nodeId: string): void;

  // Help center CRUD (optional)
  onCreateHelpCenter?(): Promise<void>;
  onEditHelpCenter?(id: string): Promise<void>;
  onDeleteHelpCenter?(id: string): Promise<void>;

  // Workspace operations (optional)
  onWorkspaceChange?(id: string): void;
  onWorkspaceSettings?(): void;
  onWorkspaceInvite?(): void;
  onCreateWorkspace?(): void;

  // User operations
  onUserMenuClick?(): void;  // Logout
}
```

---

## 10. Design Decisions & Rationale

### Decision 1: Sidebar + Main Content Layout

**Why this pattern?**
- **Proven UX**: Used by Linear, Figma, Slack, GitHub
- **Persistent Context**: User always knows where they are
- **Scalability**: Handles 1000+ agents without cramped UI
- **Accessibility**: Fixed sidebar = consistent keyboard navigation
- **Mobile Friendly**: Works on all screen sizes (though sidebar takes space)

**Alternative Rejected**: Modal-based navigation
- Would interrupt workflow
- Less suitable for frequent navigation
- Harder to reference nav while editing

### Decision 2: Drag-and-Drop with Hybrid Approach

**Why @dnd-kit + Native HTML5?**
- **@dnd-kit**: Handles ghost card, accessibility, keyboard support
- **Native DnD**: Provides responsive drop target feedback (insertion line)
- **Best of both**: Smooth UX + accessible + performant

**Alternative Rejected**: Pure @dnd-kit
- Doesn't provide responsive insertion indicators
- Requires more custom code

**Alternative Rejected**: Pure HTML5 drag-drop
- No accessibility support
- No smooth ghost overlay
- Janky on mobile

### Decision 3: Hierarchical Agent Organization

**Why folders + sub-pages?**
- **Folders**: Group agents by project, team, or feature
- **Sub-pages**: Each agent has 7 editing pages
  - Editar (edit system prompt)
  - Métricas (view usage metrics)
  - Conversaciones (browse conversation history)
  - Fuentes de datos (configure data sources)
  - Integraciones (integrations)
  - Campañas (manage campaigns)
  - Configuración (settings)

**Rationale**:
- Prevents massive flat list (1000+ agents would be unusable)
- Matches common agent configuration patterns
- 7 sub-pages cover 80% of agent management tasks
- Extensible (parent can add more pages via custom routing)

**Alternative Rejected**: Tags-based organization
- More flexible but harder to implement drag-drop
- Users tend to over-tag and lose organization
- Folder metaphor is more familiar

### Decision 4: No Built-in Search/Filter

**Why parent implements?**
- Search behavior varies by use case:
  - Global search across workspaces?
  - Folder-only search?
  - Agents-only search?
  - Fuzzy search or exact match?
- Template would bloat with options
- Parent has the data and knows the use case

**Approach**:
- Parent implements search/filter
- Parent passes filtered data to template
- Template renders whatever is passed

### Decision 5: Transient Drop Feedback (600ms highlight)

**Why highlight the completed folder?**
- **Visual confirmation**: User sees agent landed successfully
- **Non-intrusive**: Fades away automatically after 600ms
- **Accessible**: Doesn't require sound or modals
- **Duration**: Long enough to register visually, not too long

**Alternative Rejected**: Toast notification
- Too intrusive for frequent operations
- Blocks other interactions temporarily

**Alternative Rejected**: No feedback
- User uncertain if drop succeeded
- Especially bad on slow networks

### Decision 6: Fixed Sidebar Width (No Collapse)

**Why 260px always?**
- **Predictable layout**: Main content width is consistent
- **Mobile-friendly**: Still usable at 375px viewport
- **Simplicity**: No hamburger logic needed
- **Accessibility**: Keyboard focus doesn't get lost

**Alternative Rejected**: Responsive collapse
- Would require state for collapse/expand
- Hamburger menu adds complexity
- Breaks accessibility if not done carefully

**Real-world note**: At <375px, sidebar squeezes content.
- Parent can use `display: none` on AgentWorkspace sidebar
- Replace with mobile-specific nav component

### Decision 7: AgentFolder Handles Native onDrop

**Why not purely @dnd-kit?**
- @dnd-kit doesn't support insertion indexes natively
- Native `onDrop` events give us dropEffect + dataTransfer
- AgentFolder can calculate insertion index from mouse position
- Result: Precise placement within folder

**Implementation**:
```tsx
// AgentFolder.tsx
const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
  const dropY = e.clientY;
  const agentHeight = 80; // approximate
  const insertionIndex = Math.floor((dropY - folderTop) / agentHeight);
  onDrop?.(agentId, targetFolderId, insertionIndex);
};
```

---

## 11. Testing Strategy

### Unit Tests

```typescript
describe("AgentWorkspace", () => {
  // State management
  test("activeNavNodeId controlled by prop", () => {
    const { rerender } = render(
      <AgentWorkspace activeNavNodeId="agent-1" />
    );
    expect(getByTestId("nav-node-agent-1")).toHaveClass("active");

    rerender(<AgentWorkspace activeNavNodeId="agent-2" />);
    expect(getByTestId("nav-node-agent-2")).toHaveClass("active");
  });

  test("onNavNodeClick called when nav node clicked", () => {
    const onNavNodeClick = jest.fn();
    render(<AgentWorkspace onNavNodeClick={onNavNodeClick} />);

    fireEvent.click(getByTestId("nav-node-agent-1"));
    expect(onNavNodeClick).toHaveBeenCalledWith("agent-1");
  });

  // NavTree sections
  test("navTreeSections built from folders + agents + helpCenters", () => {
    const folders = [{ id: "f1", title: "Folder 1", agents: [...] }];
    const { getByText } = render(<AgentWorkspace folders={folders} />);

    expect(getByText("Agentes IA")).toBeInTheDocument();
    expect(getByText("Folder 1")).toBeInTheDocument();
  });

  test("helpCenters section only shows if helpCenters exist", () => {
    const { rerender } = render(<AgentWorkspace helpCenters={[]} />);
    expect(queryByText("Centro de Ayuda")).not.toBeInTheDocument();

    rerender(<AgentWorkspace helpCenters={[{ id: "hc1", name: "Help" }]} />);
    expect(getByText("Centro de Ayuda")).toBeInTheDocument();
  });

  // Drag-drop
  test("drag state management (activeId, overId)", () => {
    const onMoveAgent = jest.fn();
    render(<AgentWorkspace {...props} onMoveAgent={onMoveAgent} />);

    const dragCard = getByTestId("agent-card-1");
    fireEvent.dragStart(dragCard);
    expect(dragCard).toHaveClass("dragging");

    const dropZone = getByTestId("folder-2-drop-zone");
    fireEvent.dragOver(dropZone);
    expect(dropZone).toHaveClass("drop-target");

    fireEvent.drop(dropZone);
    expect(onMoveAgent).toHaveBeenCalled();
  });

  // Empty state
  test("empty state shows when no folders", () => {
    render(<AgentWorkspace folders={[]} looseAgents={[]} />);
    expect(getByText("No hay carpetas todavía")).toBeInTheDocument();
    expect(getByRole("button", { name: /Crear primera carpeta/i })).toBeInTheDocument();
  });

  test("custom empty state renders if provided", () => {
    render(
      <AgentWorkspace
        emptyState={<div>Custom empty</div>}
        folders={[]}
      />
    );
    expect(getByText("Custom empty")).toBeInTheDocument();
  });
});
```

### Integration Tests

```typescript
describe("AgentWorkspace integration", () => {
  test("full workflow: create folder → create agent → drag agent", async () => {
    const onCreateFolder = jest.fn();
    const onCreateAgent = jest.fn();
    const onMoveAgent = jest.fn();

    render(
      <AgentWorkspace
        onCreateFolder={onCreateFolder}
        onCreateAgent={onCreateAgent}
        onMoveAgent={onMoveAgent}
        folders={[...]}
      />
    );

    // Create folder
    fireEvent.click(getByRole("button", { name: /Nueva carpeta/i }));
    expect(onCreateFolder).toHaveBeenCalled();

    // Create agent in folder
    fireEvent.rightClick(getByTestId("folder-1"));
    fireEvent.click(getByRole("menuitem", { name: /Crear agente/i }));
    expect(onCreateAgent).toHaveBeenCalledWith("folder-1");

    // Drag agent between folders
    const agent = getByTestId("agent-card-1");
    fireEvent.dragStart(agent);
    fireEvent.dragOver(getByTestId("folder-2-drop-zone"));
    fireEvent.drop(getByTestId("folder-2-drop-zone"));
    expect(onMoveAgent).toHaveBeenCalledWith("agent-1", "folder-2", expect.any(Number));
  });

  test("sidebar nav persists active node to localStorage", () => {
    render(<AgentWorkspace persistKey="agent-workspace-nav" />);

    fireEvent.click(getByTestId("nav-node-agent-1"));
    expect(localStorage.getItem("agent-workspace-nav")).toBe("agent-1");

    // Reload component
    unmountComponentAtNode(container);
    render(<AgentWorkspace persistKey="agent-workspace-nav" />);
    expect(getByTestId("nav-node-agent-1")).toHaveClass("active");
  });
});
```

### Accessibility Tests

```typescript
describe("AgentWorkspace accessibility", () => {
  test("keyboard navigation in nav tree", () => {
    render(<AgentWorkspace folders={[...]} />);

    const firstNode = getByTestId("nav-node-folder-1");
    firstNode.focus();

    fireEvent.keyDown(firstNode, { key: "ArrowDown" });
    expect(getByTestId("nav-node-folder-2")).toHaveFocus();

    fireEvent.keyDown(getByTestId("nav-node-folder-2"), { key: "ArrowRight" });
    expect(getByTestId("nav-node-folder-2-child-1")).toHaveFocus();
  });

  test("focus trap in sidebar", () => {
    render(<AgentWorkspace folders={[...]} />);

    const firstButton = getByTestId("sidebar-first-button");
    const lastButton = getByTestId("sidebar-last-button");

    lastButton.focus();
    fireEvent.keyDown(lastButton, { key: "Tab" });
    expect(firstButton).toHaveFocus();
  });

  test("aria labels on icon buttons", () => {
    render(<AgentWorkspace />);

    expect(getByRole("button", { name: /Nueva carpeta/i })).toBeInTheDocument();
    expect(getByRole("button", { name: /Nuevo agente/i })).toBeInTheDocument();
  });

  test("screen reader announces agent counts", () => {
    const { container } = render(<AgentWorkspace folders={[...]} />);

    const section = container.querySelector('[role="region"]');
    expect(section.getAttribute("aria-label")).toBe("Agentes IA: 5 agents");
  });
});
```

---

## 12. Similar Templates & Comparisons

### AgentWorkspace vs AgentEditor

| Aspect | AgentWorkspace | AgentEditor |
|--------|---|---|
| **Purpose** | Agent management dashboard | AI agent prompt editor |
| **Primary UX** | Folder organization + drag-drop | Split editor + live preview |
| **Drag-Drop** | ✅ Full system (folders, agents) | ❌ None |
| **Chat Preview** | ❌ None | ✅ Live chat with agent |
| **Code Editor** | ❌ None | ✅ Syntax-highlighted editor |
| **Editor Tabs** | ❌ None | ✅ Customizable tabs (Behavior, Memory, General) |
| **Sidebar Nav** | ✅ Full NavTree | ✅ Same NavTree system |
| **Model Selector** | ❌ None | ✅ Grouped model dropdown |
| **Empty State** | ✅ Customizable | ❌ Chat empty message |
| **Responsive** | No collapse | No collapse |
| **Scroll Behavior** | Independent sidebar + main | Independent sidebar + split panels |

### Template Comparison Matrix

| Pattern | AgentWorkspace | AgentEditor | Dashboard | ProjectBoard |
|---------|---|---|---|---|
| **Sidebar + Main** | ✅ | ✅ | ❌ | ✅ |
| **Drag-Drop** | ✅ | ❌ | ❓ | ✅ |
| **Split Panels** | ❌ | ✅ | ❌ | ❌ |
| **NavTree** | ✅ | ✅ | ✅ | ✅ |
| **Collapsible Sidebar** | ❌ | ❌ | ❌ | ❌ |
| **Search** | ❌ Parent impl | ❌ Parent impl | ❌ Parent impl | ❌ Parent impl |

### When to Use AgentWorkspace

✅ **Good fit**:
- Agent management dashboards
- Folder-based organization (any type of items)
- Hierarchical item lists that need drag-drop
- Multi-tenant workspaces
- Admin panels for managing entities

❌ **Not recommended**:
- File management (use better suited template)
- Project Kanban boards (use card-based template)
- Simple CRUD applications
- Single-screen forms
- Mobile-first applications (sidebar takes screen space)

---

## Implementation Examples

### Example 1: Basic Agent Management App

```tsx
// components/AgentDashboard.tsx
import { useState, useCallback } from "react";
import { AgentWorkspace } from "@orion-ds/react";

export function AgentDashboard() {
  const [folders, setFolders] = useState([
    {
      id: "folder-1",
      title: "Customer Support",
      agents: [
        {
          id: "agent-1",
          title: "FAQ Bot",
          avatar: "/avatars/faq-bot.png",
          description: "Handles frequently asked questions"
        }
      ]
    }
  ]);

  const handleMoveAgent = useCallback(
    (agentId: string, targetFolderId: string, index?: number) => {
      setFolders(prev => {
        // Implementation as shown in section 8
      });
    },
    []
  );

  return (
    <AgentWorkspace
      navbar={{
        workspaceName: "Acme Corp",
        userName: "John Doe",
        userAvatar: "/avatars/john.jpg"
      }}
      folders={folders}
      onMoveAgent={handleMoveAgent}
      onCreateFolder={() => {/* ... */}}
      onCreateAgent={(parentId) => {/* ... */}}
      onNavNodeClick={(nodeId) => {/* ... */}}
    />
  );
}
```

### Example 2: With TypeScript Strict Types

```tsx
// types/agent.ts
export interface Agent {
  id: string;
  title: string;
  avatar: string;
  description?: string;
  status: "active" | "inactive" | "archived";
}

export interface Folder {
  id: string;
  title: string;
  agents: Agent[];
  onDrop: (agentId: string, targetFolderId: string, index?: number) => void;
}

// components/StrictAgentDashboard.tsx
import { useState, useCallback } from "react";
import { AgentWorkspace } from "@orion-ds/react";
import type { Agent, Folder } from "../types/agent";

export function StrictAgentDashboard() {
  const [folders, setFolders] = useState<Folder[]>([]);

  const handleMoveAgent = useCallback<Folder["onDrop"]>(
    (agentId, targetFolderId, index) => {
      // TypeScript ensures correct signature
    },
    []
  );

  return <AgentWorkspace folders={folders} onMoveAgent={handleMoveAgent} />;
}
```

---

## Conclusion

**AgentWorkspace** is a production-ready template for managing hierarchical collections of items with drag-and-drop support. Its design prioritizes UX consistency, accessibility, and extensibility while leaving complex business logic (state management, persistence, routing) to the parent component.

**Key Strengths**:
- ✅ Robust drag-drop system
- ✅ Accessible sidebar navigation
- ✅ Scalable to 1000+ items
- ✅ Customizable via props
- ✅ Production-tested patterns

**Key Limitations**:
- ❌ No mobile hamburger (sidebar always visible)
- ❌ No built-in search/filter
- ❌ Limited customization of sub-components
- ❌ Requires parent state management

Use this template as a foundation for agent management UIs, and extend it with application-specific features in the parent component.
