# @orion/react Templates

> Pre-built full-page templates for rapidly building complete application views and marketing pages.

## Overview

Templates are complete, ready-to-use page layouts that compose multiple sections. **Use these instead of building custom page layouts.**

```tsx
import {
  // ChatBuilder Templates
  AgentWorkspace,
  ChatPageTemplate,
  // App Templates
  DashboardTemplate,
  KanbanPageTemplate,
  LoginTemplate,
  ProfilePageTemplate,
  SettingsTemplate,
  // Marketing Templates
  LandingPageTemplate,
  AboutPageTemplate,
  ContactPageTemplate,
  PricingPageTemplate,
} from "@orion/react";
```

---

## Available Templates (11 Total)

### ChatBuilder Templates

| Template           | Purpose                       | Required Props |
| ------------------ | ----------------------------- | -------------- |
| `AgentWorkspace`   | AI agent library with folders | -              |
| `ChatPageTemplate` | Full-screen chat interface    | -              |

### App Templates

| Template              | Purpose                            | Required Props           |
| --------------------- | ---------------------------------- | ------------------------ |
| `DashboardTemplate`   | Admin panels, analytics dashboards | `pageHeader`             |
| `KanbanPageTemplate`  | Project boards, task management    | `pageHeader`, `kanban`   |
| `LoginTemplate`       | Authentication pages               | -                        |
| `ProfilePageTemplate` | User profiles, account pages       | `profile`                |
| `SettingsTemplate`    | Settings, preferences pages        | `navigation`, `sections` |

### Marketing Templates

| Template              | Purpose                  | Required Props    |
| --------------------- | ------------------------ | ----------------- |
| `LandingPageTemplate` | Product landing pages    | `hero`            |
| `AboutPageTemplate`   | Company about pages      | `hero`            |
| `ContactPageTemplate` | Contact us pages         | `hero`, `contact` |
| `PricingPageTemplate` | Pricing comparison pages | `hero`, `pricing` |

---

## Template vs Sections

| Use Templates When                    | Use Sections When                    |
| ------------------------------------- | ------------------------------------ |
| Building a complete page from scratch | Adding a section to an existing page |
| Need standard page layout structure   | Need custom section arrangement      |
| Want consistent spacing/flow          | Building highly custom layouts       |

---

## Quick Start

### App Template Example

```tsx
import { DashboardTemplate, ThemeProvider } from "@orion/react";
import "@orion/react/styles.css";

function Dashboard() {
  return (
    <ThemeProvider>
      <DashboardTemplate
        sidebar={{
          sections: [
            {
              items: [
                { id: "dashboard", label: "Dashboard", href: "/" },
                { id: "analytics", label: "Analytics", href: "/analytics" },
              ],
            },
          ],
          activeItem: "dashboard",
        }}
        pageHeader={{
          title: "Dashboard",
          description: "Overview of your business",
        }}
        metrics={{
          metrics: [
            {
              label: "Revenue",
              value: "$45,231",
              trend: { value: "+20%", positive: true },
            },
          ],
        }}
      />
    </ThemeProvider>
  );
}
```

### Marketing Template Example

```tsx
import {
  LandingPageTemplate,
  ThemeProvider,
  Button,
  Badge,
} from "@orion/react";
import "@orion/react/styles.css";

function LandingPage() {
  return (
    <ThemeProvider>
      <LandingPageTemplate
        hero={{
          badge: <Badge variant="brand">New</Badge>,
          headline: "Build Products 10x Faster",
          description: "The all-in-one platform for modern teams.",
          primaryAction: <Button size="lg">Get Started</Button>,
        }}
        features={{
          title: "Features",
          items: [{ title: "Fast", description: "Lightning fast performance" }],
        }}
        footer={{
          brand: { name: "Acme" },
          copyright: "2024 Acme Inc.",
        }}
      />
    </ThemeProvider>
  );
}
```

---

## Composition Pattern

All templates follow a consistent composition pattern:

1. **Required sections** - Core sections that define the template type
2. **Optional sections** - Additional sections that can be included
3. **Children prop** - Custom content injection point
4. **Props passthrough** - All section props are fully typed

```tsx
// Template structure example
<Template
  // Required sections
  hero={{ ... }}           // Required

  // Optional sections
  features={{ ... }}       // Optional
  pricing={{ ... }}        // Optional

  // Custom content
  children={<CustomSection />}

  // HTML attributes
  className="my-page"
  data-testid="landing"
/>
```

---

## Anti-Patterns

### Creating Custom Templates

```tsx
// WRONG - Don't create custom templates
function MyDashboard() {
  return (
    <div className="my-dashboard">
      <MySidebar />
      <MyHeader />
      <MyMetrics />
    </div>
  );
}

// CORRECT - Use pre-built templates
<DashboardTemplate
  sidebar={{ ... }}
  pageHeader={{ ... }}
  metrics={{ ... }}
/>
```

### Nesting Templates

```tsx
// WRONG - Don't nest templates
<LandingPageTemplate>
  <DashboardTemplate />  {/* Nested template */}
</LandingPageTemplate>

// CORRECT - Templates are top-level page layouts
<LandingPageTemplate hero={{ ... }} />
```

### Mixing Template Types

```tsx
// WRONG - Don't mix app and marketing patterns
<DashboardTemplate
  hero={{ ... }}  {/* Hero is for marketing templates */}
/>

// CORRECT - Use the right template for the use case
<LandingPageTemplate hero={{ ... }} />
```

---

## Documentation

Each template has its own README with detailed documentation:

### ChatBuilder Templates

- [AgentWorkspace](./app/AgentWorkspace/README.md) — Foundation template for managing AI agents
- [ChatPageTemplate](./app/ChatPageTemplate/) — Full-screen chat interface (documentation pending)

### App Templates

- [DashboardTemplate](./app/DashboardTemplate/README.md)
- [KanbanPageTemplate](./app/KanbanPageTemplate/README.md)
- [LoginTemplate](./app/LoginTemplate/README.md)
- [ProfilePageTemplate](./app/ProfilePageTemplate/README.md)
- [SettingsTemplate](./app/SettingsTemplate/README.md)

### Marketing Templates

- [LandingPageTemplate](./marketing/LandingPageTemplate/README.md)
- [AboutPageTemplate](./marketing/AboutPageTemplate/README.md)
- [ContactPageTemplate](./marketing/ContactPageTemplate/README.md)
- [PricingPageTemplate](./marketing/PricingPageTemplate/README.md)

---

## Related

- **[Sections](../sections/README.md)** — Individual page sections
- **[Components](../components/README.md)** — Atomic components
- **[ThemeProvider](../theme/README.md)** — Global theme management
