# Template Analysis Protocol — AI-First Documentation

## Overview
This protocol provides a systematic way to analyze and document complex React templates for AI understanding. It breaks down design patterns, data flow, component composition, and architectural decisions in a way that makes it easy for AI agents to understand the full context.

## 1. Template Identity Card

**Start here** — Quick reference about the template.

```markdown
### Template: [Name]
**Purpose**: [One-line summary of what this template does]
**Context**: [Where/when is this used?]
**Complexity**: [Simple | Medium | Complex]
**Main Pattern**: [Primary design pattern used]
**Audience**: [Who uses this template - users, developers, use cases]
**File Location**: `packages/react/src/templates/[path]`
```

### Example: AgentWorkspace
```markdown
### Template: AgentWorkspace
**Purpose**: Full-page workspace for managing AI agents organized in folders with drag-drop support
**Context**: Main dashboard after logging into an AI agent management platform
**Complexity**: Complex
**Main Pattern**: Drag-and-drop hierarchical organization + Sidebar navigation with dynamic sections
**Audience**: Users managing multiple AI agents; product teams building multi-agent platforms
**File Location**: `packages/react/src/templates/app/AgentWorkspace/`
```

---

## 2. Visual Architecture

**What does the user see?** Break down the visual layout and major sections.

```markdown
### Layout Structure
┌─────────────────────────────────────┐
│ [SECTION]        [SECTION]          │
│ Description      Responsibility     │
├─────────────────────────────────────┤
│ [SECTION]        [CONTENT]          │
└─────────────────────────────────────┘
```

### Dimensions & Constraints
| Section | Width | Height | Behavior |
|---------|-------|--------|----------|
| Sidebar | 260px (configurable) | 100vh | Fixed, scrollable content |
| Main | Flex | Full | Scrollable |

---

## 3. Component Composition Map

**What components are used?** Document the component tree and how they interact.

```markdown
### Component Hierarchy

AgentWorkspace (Root)
├── NavTree (Sidebar)
│   ├── WorkspaceSwitcher (Header)
│   ├── NavTree.Sections[]
│   │   ├── Section: "Agentes IA" → Folders + Loose Agents
│   │   ├── Section: "Centro de Ayuda" (Optional)
│   │   └── Section: "Comunidad" (Fixed)
│   └── UserMenu (Footer)
│
├── Main Content Area
│   ├── PageHeader
│   │   ├── Title + Icon
│   │   └── Actions (Create buttons)
│   │
│   ├── If empty → EmptyState
│   │   ├── Icon
│   │   ├── Text
│   │   └── CTA Button
│   │
│   ├── If has data → DndContext (Drag-Drop)
│   │   ├── Folders[] (AgentFolder components)
│   │   │   ├── AgentCards[]
│   │   │   ├── Drop targets
│   │   │   └── Insertion indicators
│   │   │
│   │   ├── DragOverlay (Ghost card while dragging)
│   │   │
│   │   └── LooseAgents Section (if exist)
│   │       ├── Divider "Sin carpeta"
│   │       └── AgentCards[]
```

### Component Dependency Graph
```
AgentWorkspace
├── uses @dnd-kit/core (DndContext, DragOverlay, PointerSensor)
├── uses NavTree section
├── uses AgentFolder section
├── uses AgentCard component
├── uses PageHeader section
├── uses UserMenu section
├── uses WorkspaceSwitcher section
└── uses Button, Avatar, Divider, lucide icons
```

---

## 4. State Management Pattern

**What state does the template manage?** Document state, sources, and lifecycle.

```markdown
### Local State
| State | Type | Initial | Purpose | Scope |
|-------|------|---------|---------|-------|
| `activeNavNodeId` | string \| undefined | From prop | Track which nav node is selected | Template-wide |
| `activeId` | string \| null | null | Currently dragging agent ID | Drag-drop context |
| `overId` | string \| null | null | Folder being dragged over | Drag-drop context |
| `completedFolderId` | string \| null | null | Visual feedback after drop | Transient (600ms) |

### State Flow
1. User clicks nav node → Update `activeNavNodeId` → Callback to parent
2. User drags agent → `handleDragStart` → Set `activeId` → Show ghost card
3. User hovers folder → `handleDragOver` → Set `overId` → Visual highlight
4. User drops → `handleDragEnd` → Trigger parent's `onMoveAgent` → Reset state

### Parent Responsibilities
The **parent component** must handle:
- Folder CRUD (create, edit, delete)
- Agent CRUD (create, delete, move between folders)
- State synchronization (folders, agents, helpCenters)
- Navigation routing (when nav node clicked)
```

---

## 5. Data Flow Diagram

**How does data move through the template?**

```markdown
### Props → Component → State → UI
                       ↓
                    Callbacks

INCOMING DATA (Props)
├── navbar → WorkspaceSwitcher, UserMenu
├── folders → NavTree sections + AgentFolders
├── looseAgents → NavTree + Grid
├── helpCenters → NavTree section
├── activeNavNodeId → NavTree active state
├── messages, selectedModel → AgentEditor specific
└── Handler callbacks (onCreateFolder, onMoveAgent, etc.)

INTERNAL STATE
├── activeNavNodeId (local state)
├── Drag-drop state (activeId, overId, completedFolderId)
└── Memoized sections (navTreeSections, sectionsToShow)

OUTGOING CALLBACKS (User Actions → Parent)
├── onCreateFolder() → Parent creates folder
├── onCreateAgent(parentId) → Parent creates agent in folder
├── onMoveAgent(agentId, targetFolderId, index?) → Parent moves agent
├── onDeleteAgent(agentId) → Parent deletes agent
├── onNavNodeClick(nodeId) → Parent routes to page
└── [20+ other handlers for UI actions]

VISUAL OUTPUT
├── Sidebar with nav tree (sections + nodes)
├── Main content (folders with agent cards + drag-drop)
├── Page header with action buttons
└── Empty state (if no data)
```

---

## 6. Key Behavioral Patterns

**How does the template behave?** Document the "rules" and patterns.

```markdown
### Pattern 1: Hierarchical Sidebar Organization
- **Structure**: Sections → Nodes (folders/pages) → Children (agent sub-pages)
- **Dynamic**: Sections and nodes built from props (folders, agents, helpCenters)
- **NavTree Integration**: Uses NavTree.Section, NavTree.Node types
- **Default Expansion**: "Agentes IA" section always expanded by default
- **Badges**: Sections show badge counts (number of agents, help centers)
- **Persistence**: Active nav state persisted to localStorage via `persistKey`

### Pattern 2: Drag-and-Drop System (AgentWorkspace only)
- **Library**: Hybrid approach (@dnd-kit + native HTML5 DnD)
- **Sensors**: PointerSensor with 8px activation constraint
- **Visual Feedback**:
  - Ghost card during drag (DragOverlay with 2deg rotation)
  - Folder highlight when over drop target
  - Blue insertion line within folder
  - Completed animation (600ms) after successful drop
- **Drop Mechanics**:
  - AgentFolder implements native `onDragOver`/`onDrop` with insertion index
  - Supports exact drop position within folder
  - Can move agents between folders or into folders from "loose agents"
- **State Reset**: Automatic cleanup after drag end or on escape

### Pattern 3: Sidebar Stability
- **Fixed width**: 260px by default (configurable via `sidebarWidth` prop)
- **Always visible**: Never collapses (no mobile burger menu)
- **Header**: WorkspaceSwitcher (only if workspaces exist)
- **Footer**: UserMenu (always present)
- **Sections**: Filtered by `visibleSections` prop if provided
- **Nav Persistence**: Active node ID saved to localStorage

### Pattern 4: Content Area Responsiveness
- **Flexible height**: Takes remaining space after sidebar
- **Scrollable content**: Main area scrolls independently
- **Empty state**: Shows when no folders/agents (can customize)
- **Split layout** (AgentEditor): Left editor + right chat with adjustable width
- **No horizontal scroll**: Content stays within viewport

### Pattern 5: Action Routing
**NavTree Actions** (right-click context menus):
- Folder: Edit, Delete
- Agent: Move to folder, Delete
- Help Center: Edit, Delete
- Add buttons: "+ Create folder" (root level), "+ Create agent" (in folder), "+ Create help center"

**Header Actions**:
- "Nueva carpeta" button (secondary style, with icon)
- "Nuevo agente" button (primary style, with icon)
- Model selector (AgentEditor only)
- Custom actions slot

**Chat Preview Actions** (AgentEditor only):
- "Nueva conversación" button in Chat.Header
- Send message → Callback to parent

### Pattern 6: Visual Feedback & Animation
- **Hover states**: Card shadows, background colors (CSS)
- **Active states**: Nav node highlighted, editor tab selected
- **Drag feedback**: Ghost card rotation, folder highlight
- **Completion animation**: 600ms highlight on target folder after drop
- **Loading states**: isTyping, isLoading props for chat
- **Transitions**: 150ms drop animation easing

### Pattern 7: Accessibility & Keyboard
- **Focus management**: NavTree has focus trap
- **Keyboard navigation**: Arrow keys to move through nav
- **ARIA labels**: On icon buttons, chat input
- **Screen reader support**: Divider with label "Sin carpeta"
```

---

## 7. Configuration & Extensibility

**What can be customized?** Document all configuration points.

```markdown
### Customizable Props

#### Sidebar
- `sidebarWidth` (number, default 260) — Sidebar width in pixels
- `visibleSections` (string[], optional) — Filter which sections to show
- `activeNavNodeId` (string, controlled) — Which nav node is active
- `onNavNodeClick` (callback) — Route when nav node clicked

#### Navbar
- `navbar.workspaceName` — Display in workspace switcher
- `navbar.workspaces[]` — List of workspaces for switcher
- `navbar.userName` — Display in user menu
- `navbar.userAvatar` — User avatar image
- Workspace callbacks: `onWorkspaceChange`, `onCreateWorkspace`, `onInviteParticipants`
- User menu callbacks: `onUserMenuClick`

#### Content Area
- `pageHeader.title` — Page title (default "Agentes IA")
- `pageHeader.icon` — Title icon (default Sparkles icon)
- `pageHeader.actions` — Custom action buttons slot
- `emptyState` — Custom empty state component
- `enableDragDrop` (boolean, default true) — Toggle drag-drop system

#### Folders & Agents
- `folders[]` — Folder data + agents inside
- `looseAgents[]` — Agents not in any folder
- `helpCenters[]` — Help center pages (optional, hidden if empty)
- Each folder has `onDrop` handler for drag-drop

#### Editor-Specific (AgentEditor)
- `title` — Editor page title
- `tabs[]` — Custom editor tabs (default: Comportamiento, Memoria, General)
- `leftPanelWidth` — Left panel width (default "50%")
- `modelOptions[]` — Grouped model options for selector
- `selectedModel` — Currently selected model value
- `onModelChange` — Model selector callback
- `messages[]` — Chat messages to display
- `onSendMessage` — Chat send callback
- `previewTitle` — Chat preview section title

### Extension Points

**Controlled Tabs** (AgentEditor):
```tsx
// Can provide custom editor slots instead of CodeEditor
tabs={[
  {
    id: "custom",
    label: "Custom",
    editorSlot: <CustomEditor /> // Your own editor component
  }
]}
```

**Custom Empty State**:
```tsx
emptyState={<CustomEmptyComponent />}
```

**Custom Nav Sections**:
```tsx
// AgentEditor accepts pre-built navSections
navSections={customSections}
// Or uses folders/looseAgents to build internally
```

---

## 8. Common Usage Patterns

**How do developers typically use this template?**

```markdown
### Pattern: Full Integration (AgentWorkspace)
```tsx
const [folders, setFolders] = useState(initialFolders);

const handleDrop = (agentId, targetFolderId, index) => {
  // Move agent between folders
  // Update state, call API
};

const handleCreateAgent = (parentFolderId) => {
  // Open modal or page to create agent
  // Update folders state
};

return (
  <AgentWorkspace
    navbar={workspaceConfig}
    folders={folders}
    onMoveAgent={handleDrop}
    onCreateAgent={handleCreateAgent}
    // ... other handlers
  />
);
```

### Pattern: With Custom Nav (AgentEditor)
```tsx
// Option 1: Pass pre-built sections
<AgentEditor navSections={customSections} />

// Option 2: Let it build from folders
<AgentEditor folders={folders} looseAgents={loose} />
```

### Pattern: Tab Customization (AgentEditor)
```tsx
const [tabValues, setTabValues] = useState({
  comportamiento: "",
  memoria: "",
});

const tabs = [
  {
    id: "comportamiento",
    label: "Comportamiento",
    value: tabValues.comportamiento,
    onChange: (v) => setTabValues(p => ({...p, comportamiento: v}))
  },
  // ...
];

<AgentEditor tabs={tabs} />
```

---

## 9. Constraints & Limitations

**What should NOT be done with this template?**

```markdown
### Don't Modify
- ❌ Don't edit the sidebar structure from inside (it's managed by props)
- ❌ Don't pass very large folder/agent lists (use pagination in parent)
- ❌ Don't nest DndContext — it's already provided
- ❌ Don't override CSS classes directly — use className prop instead

### Not Supported
- ❌ Mobile responsive hamburger menu (sidebar always visible)
- ❌ Collapsible sidebar (use responsive grid in parent if needed)
- ❌ Nested drag-drop within agents (only folder-level drag)
- ❌ Custom drag preview (uses fixed rotation + ghost card)
- ❌ Multi-select for batch operations
- ❌ Undo/redo for drag operations

### Parent Handles (Not Template)
- All data persistence (API calls, state management)
- Routing (navigation to agent pages)
- Search/filtering agents
- Sorting options
- Folder/agent analytics
- Share/collaborate features

### Performance Notes
- Memoizes `navTreeSections` to avoid rebuilds
- Memoizes `navTreeActions` to avoid rebuilds
- Large folder lists (>100 agents) may cause performance issues
  - Consider virtual scrolling in parent
  - Use pagination to load agents on-demand
```

---

## 10. Design Decisions & Rationale

**Why was this template designed this way?**

```markdown
### Decision 1: Sidebar + Main Content Layout
**Rationale**:
- Sidebar provides persistent navigation context
- Main content focuses on primary task (agent management)
- Pattern matches popular SaaS UIs (Linear, Figma, Slack)
- Fixed sidebar removes need for mobile navigation redesign

### Decision 2: Hybrid Drag-Drop System
**Rationale**:
- @dnd-kit provides robust accessibility + ghost overlay
- Native HTML5 DnD gives responsive drop target feedback
- Insertion index allows precise placement within folder
- PointerSensor with 8px threshold prevents accidental drags

### Decision 3: Hierarchical Agent Organization
**Rationale**:
- Folders prevent massive flat lists (scales to 1000+ agents)
- Sub-pages (Edit, Metrics, Conversations, etc.) provide clear nav structure
- 7 sub-pages per agent matches common agent configuration scenarios
- Badges show agent counts at a glance

### Decision 4: Split Editor + Chat Preview (AgentEditor)
**Rationale**:
- Live preview helps writers understand how agents respond
- 50/50 split default works for most screen sizes
- Chat component is read-only during edit (no feedback loop)
- Prevents context switching between editor tabs and preview window

### Decision 5: Customizable Tab System (AgentEditor)
**Rationale**:
- Default tabs cover 80% of use cases (Behavior, Memory, General)
- `editorSlot` allows custom editors (Monaco, CodeMirror, etc.)
- Developers can add/remove tabs based on agent type
- Each tab can have different language + read-only settings

### Decision 6: No Built-in Search/Filter
**Rationale**:
- Search behavior varies by platform (global search, folder-only, agents-only)
- Filtering logic belongs in parent component
- Template provides foundation, parent provides features
- Reduces template complexity and increases flexibility
```

---

## 11. Testing Strategy

**How to test this template?**

```markdown
### Unit Tests
- [ ] NavTree sections build correctly from folders/agents/helpCenters
- [ ] Nav actions trigger correct callbacks
- [ ] Drag state management (activeId, overId, completedFolderId)
- [ ] Drop handler calls parent's onMoveAgent with correct args
- [ ] Empty state shows when no folders/agents
- [ ] Tab switching updates activeTab state
- [ ] Model selector filters by group, shows checkmark on active

### Integration Tests
- [ ] Sidebar visible at all times
- [ ] Clicking nav node highlights it + calls onNavNodeClick
- [ ] Creating agent with onCreateAgent callback
- [ ] Dragging agent over folder shows highlight
- [ ] Dropping agent calls onMoveAgent with insertion index
- [ ] Chat input sends message + calls onSendMessage
- [ ] Switching models updates button label

### Accessibility Tests
- [ ] Focus trap in nav
- [ ] Keyboard navigation through nav nodes
- [ ] ARIA labels on icon buttons
- [ ] Screen reader announces folder + agent counts
- [ ] Reduced motion respected in drag animations

### Performance Tests
- [ ] Memoization prevents unnecessary re-renders
- [ ] 100+ agent lists load without lag
- [ ] Drag overlay doesn't jank
- [ ] Tab switching is instant
```

---

## 12. Similar Templates & Comparisons

**How does this compare to other templates?**

```markdown
### AgentWorkspace vs AgentEditor

| Feature | AgentWorkspace | AgentEditor |
|---------|---|---|
| **Purpose** | Agent management dashboard | Agent prompt editor |
| **Drag-Drop** | ✅ Full system | ❌ No drag-drop |
| **Chat Preview** | ❌ None | ✅ Live preview |
| **Editor** | ❌ None | ✅ Split panel |
| **Sidebar Nav** | ✅ Full NavTree | ✅ Same NavTree |
| **Model Selector** | ❌ None | ✅ Grouped dropdown |
| **Empty State** | ✅ Custom | ❌ Message only |
| **Folder Actions** | ✅ Drag, create, edit, delete | ❌ Nav only |
| **Responsiveness** | ❌ Fixed sidebar | ❌ Fixed sidebar |

### Pattern: Sidebar + Content
Other templates that follow this pattern:
- AgentWorkspace, AgentEditor (same pattern)
- Potential: DocumentEditor, ProjectDashboard, AnalyticsDashboard

---

## How to Use This Protocol

### For Template Creators
1. Fill out sections 1-5 first (identity, layout, components)
2. Add sections 6-7 (state, data flow)
3. Document sections 8-12 (patterns, constraints, decisions)
4. This becomes the template's "constitution"

### For AI Agents Using This Template
1. Read section 1 (identity) — understand purpose
2. Read section 2 (visual) — understand layout
3. Read section 3 (components) — understand what's built with
4. Read section 6 (patterns) — understand how it behaves
5. Read section 8 (usage) — see example code
6. Refer back as needed for specific questions

### For Template Maintainers
1. Update this doc when adding new features
2. Link to this doc from stories and component comments
3. Use this as the source of truth for template documentation
4. Keep this in sync with actual implementation

---

## Next Steps

**Create analyses for**:
- [ ] AgentWorkspace (detailed in this doc)
- [ ] AgentEditor (detailed in this doc)
- [ ] [Other complex templates as needed]

**Store these in**:
- `/packages/react/TEMPLATE_ANALYSES/` directory
- Link from component stories and README
- Include in AI agent context when building related features
