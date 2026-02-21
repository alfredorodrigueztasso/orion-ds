# DashboardTemplate

> Complete dashboard page layout with sidebar navigation, metrics, data table, and activity feed.

## Quick Start

```tsx
import { DashboardTemplate, Button } from "@orion/react";
import { Home, Users, Settings, Plus, Download } from "lucide-react";

<DashboardTemplate
  sidebar={{
    sections: [
      {
        items: [
          {
            id: "dashboard",
            label: "Dashboard",
            icon: <Home size={20} />,
            href: "/",
          },
          {
            id: "users",
            label: "Users",
            icon: <Users size={20} />,
            href: "/users",
          },
          {
            id: "settings",
            label: "Settings",
            icon: <Settings size={20} />,
            href: "/settings",
          },
        ],
      },
    ],
    activeItem: "dashboard",
  }}
  pageHeader={{
    title: "Dashboard",
    description: "Overview of your business metrics",
    actions: (
      <>
        <Button variant="ghost" icon={<Download size={18} />}>
          Export
        </Button>
        <Button variant="primary" icon={<Plus size={18} />}>
          New
        </Button>
      </>
    ),
  }}
  metrics={{
    metrics: [
      {
        label: "Revenue",
        value: "$45,231",
        trend: { value: "+20%", positive: true },
      },
      {
        label: "Users",
        value: "2,350",
        trend: { value: "+180", positive: true },
      },
    ],
    columns: 4,
  }}
  dataTable={{
    columns: [
      { key: "id", header: "ID" },
      { key: "name", header: "Name" },
      { key: "status", header: "Status" },
    ],
    data: [
      { id: "1", name: "Item 1", status: "Active" },
      { id: "2", name: "Item 2", status: "Pending" },
    ],
  }}
/>;
```

---

## Features

- **Sidebar Navigation** — Collapsible sidebar with sections, icons, and badges
- **Page Header** — Title, description, breadcrumbs, tabs, and action buttons
- **Metric Cards** — KPI cards with trends and icons
- **Data Table** — Sortable, searchable table with pagination
- **Activity Feed** — Recent activity timeline (split layout)
- **Layout Variants** — Default, split (with activity), and compact modes
- **Fully Responsive** — Adapts to all screen sizes

---

## Sections Used

| Section        | Required | Purpose                               |
| -------------- | -------- | ------------------------------------- |
| `Sidebar`      | No       | Navigation sidebar                    |
| `PageHeader`   | **Yes**  | Page title and actions                |
| `MetricCards`  | No       | KPI metric display                    |
| `DataTable`    | No       | Data table with features              |
| `ActivityFeed` | No       | Activity timeline (split layout only) |

---

## Props Reference

```typescript
interface DashboardTemplateProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Sidebar configuration (optional)
   */
  sidebar?: SidebarProps;

  /**
   * Page header configuration (required)
   */
  pageHeader: PageHeaderProps;

  /**
   * Metric cards section
   */
  metrics?: MetricCardsProps;

  /**
   * Main data table
   */
  dataTable?: DataTableProps<Record<string, unknown>>;

  /**
   * Activity feed for side panel (used in split layout)
   */
  activityFeed?: ActivityFeedProps;

  /**
   * Layout variant
   * - default: Full width content
   * - split: Content + activity feed side panel
   * - compact: Compact spacing for dense data
   * @default 'default'
   */
  layout?: "default" | "split" | "compact";

  /**
   * Additional children rendered in the main content area
   */
  children?: ReactNode;
}
```

---

## Layout Variants

### Default Layout

Full-width content area without activity feed.

```tsx
<DashboardTemplate
  layout="default"
  pageHeader={{ title: 'Dashboard' }}
  metrics={{ metrics: [...] }}
  dataTable={{ columns: [...], data: [...] }}
/>
```

### Split Layout

Content area with activity feed sidebar on the right.

```tsx
<DashboardTemplate
  layout="split"
  pageHeader={{ title: 'Dashboard' }}
  metrics={{ metrics: [...] }}
  dataTable={{ columns: [...], data: [...] }}
  activityFeed={{
    activities: [
      { id: '1', title: 'User signed up', timestamp: '5 min ago' },
      { id: '2', title: 'Order placed', timestamp: '10 min ago' },
    ],
  }}
/>
```

### Compact Layout

Dense spacing for data-heavy interfaces.

```tsx
<DashboardTemplate
  layout="compact"
  pageHeader={{ title: 'Dashboard' }}
  metrics={{ metrics: [...] }}
  dataTable={{ columns: [...], data: [...], compact: true }}
/>
```

---

## Complete Examples

### Analytics Dashboard

```tsx
import { DashboardTemplate, Button, Badge, Avatar } from "@orion/react";
import {
  Home,
  BarChart3,
  Users,
  ShoppingCart,
  Settings,
  Bell,
  Plus,
  Download,
  TrendingUp,
  DollarSign,
} from "lucide-react";

function AnalyticsDashboard() {
  return (
    <DashboardTemplate
      sidebar={{
        header: (
          <div style={{ padding: "var(--spacing-4)", fontWeight: 700 }}>
            Acme Inc
          </div>
        ),
        sections: [
          {
            items: [
              {
                id: "dashboard",
                label: "Dashboard",
                icon: <Home size={20} />,
                href: "/",
              },
              {
                id: "analytics",
                label: "Analytics",
                icon: <BarChart3 size={20} />,
                href: "/analytics",
              },
              {
                id: "customers",
                label: "Customers",
                icon: <Users size={20} />,
                href: "/customers",
                badge: <Badge size="sm">12</Badge>,
              },
            ],
          },
          {
            title: "Settings",
            items: [
              {
                id: "settings",
                label: "Settings",
                icon: <Settings size={20} />,
                href: "/settings",
              },
              {
                id: "notifications",
                label: "Notifications",
                icon: <Bell size={20} />,
                href: "/notifications",
              },
            ],
          },
        ],
        activeItem: "dashboard",
      }}
      pageHeader={{
        title: "Dashboard",
        description: "Welcome back! Here's an overview of your business.",
        actions: (
          <>
            <Button variant="ghost" icon={<Download size={18} />}>
              Export
            </Button>
            <Button variant="primary" icon={<Plus size={18} />}>
              New Order
            </Button>
          </>
        ),
      }}
      metrics={{
        metrics: [
          {
            label: "Total Revenue",
            value: "$45,231.89",
            trend: { value: "+20.1%", positive: true },
            icon: <DollarSign size={20} />,
          },
          {
            label: "Active Users",
            value: "2,350",
            trend: { value: "+180", positive: true },
            icon: <Users size={20} />,
          },
          {
            label: "Orders",
            value: "1,234",
            trend: { value: "-5.2%", positive: false },
            icon: <ShoppingCart size={20} />,
          },
          {
            label: "Conversion Rate",
            value: "3.24%",
            trend: { value: "+0.5%", positive: true },
            icon: <TrendingUp size={20} />,
          },
        ],
        columns: 4,
      }}
      dataTable={{
        columns: [
          { key: "id", header: "Order", sortable: true },
          {
            key: "customer",
            header: "Customer",
            render: (_, row) => (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--spacing-3)",
                }}
              >
                <Avatar
                  initials={row.customer
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                  size="sm"
                />
                <span>{row.customer}</span>
              </div>
            ),
          },
          {
            key: "status",
            header: "Status",
            render: (_, row) => (
              <Badge
                variant={row.status === "completed" ? "success" : "warning"}
              >
                {row.status}
              </Badge>
            ),
          },
          { key: "amount", header: "Amount", align: "right" },
        ],
        data: [
          {
            id: "#3210",
            customer: "Olivia Martin",
            status: "completed",
            amount: "$316.00",
          },
          {
            id: "#3209",
            customer: "Jackson Lee",
            status: "pending",
            amount: "$242.00",
          },
        ],
        searchable: true,
        searchPlaceholder: "Search orders...",
      }}
    />
  );
}
```

### Dashboard with Activity Feed

```tsx
<DashboardTemplate
  layout="split"
  sidebar={{ sections: [...], activeItem: 'dashboard' }}
  pageHeader={{ title: 'Dashboard' }}
  metrics={{ metrics: [...] }}
  dataTable={{ columns: [...], data: [...] }}
  activityFeed={{
    activities: [
      {
        id: '1',
        title: 'Olivia Martin placed an order',
        timestamp: '5 minutes ago',
        actor: { name: 'Olivia Martin', avatar: '/avatars/olivia.jpg' },
      },
      {
        id: '2',
        title: 'Jackson Lee updated their profile',
        timestamp: '15 minutes ago',
        actor: { name: 'Jackson Lee', avatar: '/avatars/jackson.jpg' },
      },
    ],
  }}
/>
```

### Dashboard with Tabs

```tsx
<DashboardTemplate
  sidebar={{ sections: [...], activeItem: 'analytics' }}
  pageHeader={{
    title: 'Analytics',
    description: 'Track performance across all channels',
    tabs: [
      { id: 'overview', label: 'Overview' },
      { id: 'sales', label: 'Sales', badge: <Badge size="sm">New</Badge> },
      { id: 'customers', label: 'Customers' },
    ],
    activeTab: 'overview',
    onTabChange: (tabId) => console.log('Tab changed:', tabId),
  }}
  metrics={{ metrics: [...] }}
  dataTable={{ columns: [...], data: [...] }}
/>
```

### Without Sidebar (Embedded View)

```tsx
<DashboardTemplate
  pageHeader={{
    title: 'Analytics Overview',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Analytics' },
    ],
  }}
  metrics={{ metrics: [...] }}
  dataTable={{ columns: [...], data: [...] }}
/>
```

---

## Customization

### Custom Content

Use the `children` prop to add custom content below the data table.

```tsx
<DashboardTemplate
  pageHeader={{ title: 'Dashboard' }}
  metrics={{ metrics: [...] }}
  dataTable={{ columns: [...], data: [...] }}
>
  {/* Custom content */}
  <div className="my-custom-section">
    <h3>Custom Analytics</h3>
    <MyChart data={chartData} />
  </div>
</DashboardTemplate>
```

### Empty State

Configure empty state for the data table.

```tsx
<DashboardTemplate
  pageHeader={{ title: 'Orders' }}
  dataTable={{
    columns: [...],
    data: [],
    emptyState: {
      icon: <ShoppingCart size={48} />,
      title: 'No orders yet',
      description: "When customers place orders, they'll appear here.",
      action: <Button>Create Order</Button>,
    },
  }}
/>
```

---

## Accessibility

- Sidebar uses semantic `<nav>` element
- Page header uses proper heading hierarchy (`<h1>`)
- Data table supports keyboard navigation
- Active states use `aria-current`
- Focus management for interactive elements

---

## Anti-Patterns

### Missing Page Header

```tsx
// WRONG - pageHeader is required
<DashboardTemplate
  sidebar={{ sections: [...] }}
  metrics={{ metrics: [...] }}
/>

// CORRECT
<DashboardTemplate
  sidebar={{ sections: [...] }}
  pageHeader={{ title: 'Dashboard' }}
  metrics={{ metrics: [...] }}
/>
```

### Activity Feed Without Split Layout

```tsx
// WRONG - activityFeed only shows in split layout
<DashboardTemplate
  layout="default"
  pageHeader={{ title: 'Dashboard' }}
  activityFeed={{ activities: [...] }}  // Won't render
/>

// CORRECT
<DashboardTemplate
  layout="split"
  pageHeader={{ title: 'Dashboard' }}
  activityFeed={{ activities: [...] }}
/>
```

### Using Marketing Sections

```tsx
// WRONG - Don't use marketing sections in app templates
<DashboardTemplate
  pageHeader={{ title: 'Dashboard' }}
  hero={{ headline: 'Welcome' }}  // Hero is for marketing pages
/>

// CORRECT - Use app-specific sections
<DashboardTemplate
  pageHeader={{ title: 'Dashboard' }}
  metrics={{ metrics: [...] }}
/>
```

---

## When to Use

| Scenario            | Recommendation |
| ------------------- | -------------- |
| Admin dashboard     | Yes            |
| Analytics dashboard | Yes            |
| E-commerce admin    | Yes            |
| SaaS overview page  | Yes            |
| Data management UI  | Yes            |

## When NOT to Use

| Scenario               | Use Instead           |
| ---------------------- | --------------------- |
| Marketing landing page | `LandingPageTemplate` |
| User profile page      | `ProfilePageTemplate` |
| Settings page          | `SettingsTemplate`    |
| Project board          | `KanbanPageTemplate`  |
| Login/signup           | `LoginTemplate`       |

---

## Related

- **[Sidebar](../../../sections/Sidebar/README.md)** — Navigation sidebar section
- **[PageHeader](../../../sections/PageHeader/README.md)** — Page header section
- **[MetricCards](../../../sections/MetricCards/README.md)** — Metric cards section
- **[DataTable](../../../sections/DataTable/README.md)** — Data table section
- **[ActivityFeed](../../../sections/ActivityFeed/README.md)** — Activity feed section
