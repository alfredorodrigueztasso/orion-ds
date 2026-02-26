import type { Meta, StoryObj } from "@storybook/react";
import { DashboardTemplate } from "./DashboardTemplate";
import { Button } from "@orion-ds/react/components/Button";
import { Badge } from "@orion-ds/react/components/Badge";
import { Avatar } from "@orion-ds/react/components/Avatar";
import {
  Home,
  Users,
  BarChart3,
  Settings,
  FileText,
  Bell,
  Plus,
  Download,
  TrendingUp,
  DollarSign,
  ShoppingCart,
} from "lucide-react";

const meta: Meta<typeof DashboardTemplate> = {
  title: "Templates/App/Dashboard",
  component: DashboardTemplate,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A complete dashboard template with sidebar, metrics, data table, and activity feed.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DashboardTemplate>;

// Sample data
const SIDEBAR_SECTIONS = [
  {
    items: [
      {
        id: "dashboard",
        label: "Dashboard",
        icon: <Home size={20} />,
        href: "/dashboard",
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
      {
        id: "orders",
        label: "Orders",
        icon: <ShoppingCart size={20} />,
        href: "/orders",
      },
      {
        id: "reports",
        label: "Reports",
        icon: <FileText size={20} />,
        href: "/reports",
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
];

const METRICS = [
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
];

const TABLE_COLUMNS = [
  { key: "id", header: "Order", width: "90px", sortable: true },
  {
    key: "customer",
    header: "Customer",
    sortable: true,
    render: (_value: unknown, row: Record<string, unknown>) => (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--spacing-3)",
        }}
      >
        <Avatar
          initials={String(row.customer)
            .split(" ")
            .map((n: string) => n[0])
            .join("")}
          size="sm"
        />
        <div>
          <div style={{ fontWeight: "var(--font-weight-medium)" }}>
            {String(row.customer)}
          </div>
          <div
            style={{
              fontSize: "var(--font-size-12)",
              color: "var(--text-tertiary)",
            }}
          >
            {String(row.email)}
          </div>
        </div>
      </div>
    ),
  },
  {
    key: "status",
    header: "Status",
    align: "center" as const,
    render: (_value: unknown, row: Record<string, unknown>) => (
      <Badge
        variant={
          row.status === "completed"
            ? "success"
            : row.status === "pending"
              ? "warning"
              : "secondary"
        }
      >
        {String(row.status).charAt(0).toUpperCase() +
          String(row.status).slice(1)}
      </Badge>
    ),
  },
  { key: "amount", header: "Amount", align: "right" as const, sortable: true },
  { key: "date", header: "Date", sortable: true, hideOnMobile: true },
];

const TABLE_DATA = [
  {
    id: "#3210",
    customer: "Olivia Martin",
    email: "olivia@email.com",
    status: "completed",
    amount: "$316.00",
    date: "Jan 15, 2024",
  },
  {
    id: "#3209",
    customer: "Jackson Lee",
    email: "jackson@email.com",
    status: "pending",
    amount: "$242.00",
    date: "Jan 15, 2024",
  },
  {
    id: "#3208",
    customer: "Isabella Nguyen",
    email: "isabella@email.com",
    status: "completed",
    amount: "$837.00",
    date: "Jan 14, 2024",
  },
  {
    id: "#3207",
    customer: "William Kim",
    email: "william@email.com",
    status: "processing",
    amount: "$129.00",
    date: "Jan 14, 2024",
  },
  {
    id: "#3206",
    customer: "Sofia Davis",
    email: "sofia@email.com",
    status: "completed",
    amount: "$459.00",
    date: "Jan 13, 2024",
  },
  {
    id: "#3205",
    customer: "Ethan Johnson",
    email: "ethan@email.com",
    status: "pending",
    amount: "$732.00",
    date: "Jan 13, 2024",
  },
  {
    id: "#3204",
    customer: "Emma Wilson",
    email: "emma@email.com",
    status: "completed",
    amount: "$284.00",
    date: "Jan 12, 2024",
  },
  {
    id: "#3203",
    customer: "Liam Brown",
    email: "liam@email.com",
    status: "completed",
    amount: "$596.00",
    date: "Jan 12, 2024",
  },
];

const ACTIVITY_ITEMS = [
  {
    id: "1",
    title: "Olivia Martin placed an order",
    timestamp: "5 minutes ago",
    actor: {
      name: "Olivia Martin",
      avatar: "https://i.pravatar.cc/40?u=olivia",
    },
  },
  {
    id: "2",
    title: "Jackson Lee updated their profile",
    timestamp: "15 minutes ago",
    actor: {
      name: "Jackson Lee",
      avatar: "https://i.pravatar.cc/40?u=jackson",
    },
  },
  {
    id: "3",
    title: "Isabella Nguyen left a review",
    timestamp: "1 hour ago",
    actor: {
      name: "Isabella Nguyen",
      avatar: "https://i.pravatar.cc/40?u=isabella",
    },
  },
  {
    id: "4",
    title: "William Kim requested a refund",
    timestamp: "2 hours ago",
    actor: {
      name: "William Kim",
      avatar: "https://i.pravatar.cc/40?u=william",
    },
  },
  {
    id: "5",
    title: "Sofia Davis signed up",
    timestamp: "3 hours ago",
    actor: { name: "Sofia Davis", avatar: "https://i.pravatar.cc/40?u=sofia" },
  },
];

/**
 * Default dashboard with sidebar and metrics
 */
export const Default: Story = {
  args: {
    sidebar: {
      sections: SIDEBAR_SECTIONS,
      activeItem: "dashboard",
      header: (
        <div
          style={{
            padding: "var(--spacing-4)",
            fontWeight: "var(--font-weight-bold)",
            fontSize: "var(--text-xl)",
          }}
        >
          Acme
        </div>
      ),
    },
    pageHeader: {
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
    },
    metrics: {
      metrics: METRICS,
      columns: 4,
    },
    dataTable: {
      columns: TABLE_COLUMNS,
      data: TABLE_DATA,
      searchable: true,
      searchPlaceholder: "Search orders...",
      toolbar: (
        <h3
          style={{
            margin: 0,
            fontSize: "var(--font-size-16)",
            fontWeight: "var(--font-weight-medium)",
            color: "var(--text-primary)",
          }}
        >
          Recent Orders
        </h3>
      ),
      pagination: {
        page: 1,
        pageSize: 10,
        total: 50,
      },
    },
  },
};

/**
 * Dashboard with split layout showing activity feed
 */
export const WithActivityFeed: Story = {
  args: {
    ...Default.args,
    layout: "split",
    activityFeed: {
      activities: ACTIVITY_ITEMS,
    },
  },
};

/**
 * Dashboard without sidebar (embedded view)
 */
export const WithoutSidebar: Story = {
  args: {
    pageHeader: {
      title: "Analytics Overview",
      description: "Track your key metrics and performance indicators.",
      breadcrumbs: [{ label: "Home", href: "/" }, { label: "Analytics" }],
      actions: (
        <Button variant="ghost" icon={<Download size={18} />}>
          Export Report
        </Button>
      ),
    },
    metrics: {
      metrics: METRICS,
      columns: 4,
    },
    dataTable: {
      columns: TABLE_COLUMNS,
      data: TABLE_DATA,
      searchable: true,
      toolbar: (
        <h3
          style={{
            margin: 0,
            fontSize: "var(--font-size-16)",
            fontWeight: "var(--font-weight-medium)",
            color: "var(--text-primary)",
          }}
        >
          Recent Orders
        </h3>
      ),
    },
  },
};

/**
 * Compact dashboard with dense spacing
 */
export const Compact: Story = {
  args: {
    sidebar: Default.args?.sidebar,
    pageHeader: Default.args?.pageHeader,
    metrics: Default.args?.metrics,
    layout: "compact",
    dataTable: {
      columns: TABLE_COLUMNS,
      data: TABLE_DATA,
      compact: true,
      toolbar: (
        <h3
          style={{
            margin: 0,
            fontSize: "var(--font-size-14)",
            fontWeight: "var(--font-weight-medium)",
            color: "var(--text-primary)",
          }}
        >
          Recent Orders
        </h3>
      ),
    },
  },
};

/**
 * Dashboard with tabs in header
 */
export const WithTabs: Story = {
  args: {
    sidebar: Default.args?.sidebar,
    pageHeader: {
      title: "Analytics",
      description: "Track performance across all channels",
      tabs: [
        { id: "overview", label: "Overview" },
        { id: "sales", label: "Sales", badge: <Badge size="sm">New</Badge> },
        { id: "customers", label: "Customers" },
        { id: "products", label: "Products" },
      ],
      activeTab: "overview",
      actions: (
        <Button variant="ghost" icon={<Download size={18} />}>
          Export
        </Button>
      ),
    },
    metrics: {
      metrics: METRICS,
      columns: 4,
    },
    dataTable: {
      columns: TABLE_COLUMNS,
      data: TABLE_DATA,
      searchable: true,
      searchPlaceholder: "Search...",
      toolbar: (
        <h3
          style={{
            margin: 0,
            fontSize: "var(--font-size-16)",
            fontWeight: "var(--font-weight-medium)",
            color: "var(--text-primary)",
          }}
        >
          Sales Data
        </h3>
      ),
    },
  },
};

/**
 * Minimal dashboard with just metrics
 */
export const MetricsOnly: Story = {
  args: {
    sidebar: Default.args?.sidebar,
    pageHeader: {
      title: "Quick Overview",
    },
    metrics: {
      metrics: METRICS,
      columns: 4,
    },
  },
};

/**
 * Dashboard with empty state
 */
export const EmptyState: Story = {
  args: {
    sidebar: Default.args?.sidebar,
    pageHeader: {
      title: "Orders",
      description: "Manage your customer orders.",
      actions: (
        <Button variant="primary" icon={<Plus size={18} />}>
          New Order
        </Button>
      ),
    },
    dataTable: {
      columns: TABLE_COLUMNS,
      data: [],
      emptyState: {
        icon: <ShoppingCart size={48} />,
        title: "No orders yet",
        description: "When customers place orders, they'll appear here.",
        action: <Button variant="primary">Create Order</Button>,
      },
    },
  },
};
