# Orion Design System

**AI-First Design System - The Chain of Truth**

---

## 🚀 [Get Started in 2 Minutes](./GETTING_STARTED.md)

---

## Features

- 📦 **102 registry items** (51 components, 41 sections, 10 templates)
- 🎨 **Multi-brand support** with zero visual drift (5 built-in brands + unlimited custom)
- 🤖 **MCP server** for AI agents (Claude, Cursor, Cline)
- ✅ **99.3% validation compliance** (auto-enforced)
- 🌓 **Dark/light themes** built-in
- 🔁 **shadcn-style CLI** - copy components to your project

## Quick Start

```bash
# Option 1: Create new project
npx @orion-ds/create my-app

# Option 2: Install as dependency
npm install @orion-ds/react
```

```tsx
import { ThemeProvider, Button } from '@orion-ds/react';
import '@orion-ds/react/styles.css';

function App() {
  return (
    <ThemeProvider>
      <Button variant="primary">Click me</Button>
    </ThemeProvider>
  );
}
```

[Full getting started guide →](./GETTING_STARTED.md)

## Quick Links

- 📚 [Getting Started](./GETTING_STARTED.md) - 2-minute setup guide
- 🎨 [Component Library](./library.html) - Browse all 102 items
- 📖 [Documentation Index](./DOCUMENTATION-INDEX.md) - All docs
- 🤖 [AI Integration (MCP)](./packages/mcp/README.md) - Connect with AI tools
- 🔧 [CLI Guide](./packages/cli/README.md) - Add components
- ✅ [Contributing](./CONTRIBUTING.md) - How to contribute

## 📦 Packages

| Package | Description |
|---------|-------------|
| **@orion-ds/react** | 51 React components + 41 sections + design tokens + TypeScript types |
| **@orion-ds/blocks** | 26 marketing sections + 6 app sections + 12 templates |
| **@orion-ds/cli** | shadcn-style CLI — copy individual components to your project |
| **@orion-ds/create** | Project scaffolding — `npx @orion-ds/create my-app` |
| **@orion-ds/validate** | Code validator — catches hardcoded values and anti-patterns |
| **@orion-ds/mcp** | MCP server for AI agent integration (9 tools) |

## 🎨 Componentes Disponibles (27)

Accordion, Alert, Avatar, Badge, Breadcrumb, Button, Card, Checkbox, Chip, Combobox, Divider, Drawer, Dropdown, EmptyState, Field, Icon, Link, List, Modal, Navbar, Pagination, Popover, ProgressBar, Radio, Select, Skeleton, Slider, Spinner, Stepper, Switch, Table, Tabs, Textarea, Toast, Tooltip

## 🎭 Secciones Pre-built (23)

Hero, Features, CTA, Pricing, Testimonials, FAQ, Team, Stats, Newsletter, Blog, Footer, Header, Contact, About, Services, Portfolio, Timeline, Clients, Partners, Integrations, Comparison, Process, Gallery

## 🛠️ Development

```bash
# Build all
npm run build

# Build tokens
npm run build:tokens

# Build React only
npm run build:react

# Type check
npm run type-check

# Validate tokens
npm run validate

# Full audit
npm run audit
```

## 📚 Documentation

- **CLAUDE.md** - AI instructions
- **TYPESCRIPT.md** - TypeScript guide
- **AGENTS.md** - Quick reference
- **VISUAL_GUIDELINES.md** - Visual system
- **PUBLISHING.md** - npm publish guide

## 🌈 Features

- ✅ TypeScript 100%
- ✅ 5000+ Lucide Icons integrated
- ✅ Multi-brand support (orion, uvm, unitec, laureate)
- ✅ Light/Dark themes
- ✅ Tri-modal system (Display, Product, App)
- ✅ Chain of Truth architecture (no hardcoded values)
- ✅ WCAG AAA accessibility
- ✅ Zero visual drift

## 📖 Version

Current: **1.0.6**

## 📄 License

See LICENSE file
