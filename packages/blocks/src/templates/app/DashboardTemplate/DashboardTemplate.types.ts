/**
 * DashboardTemplate Types
 *
 * Type definitions for the dashboard page template.
 */

import type { HTMLAttributes, ReactNode } from "react";
import type { SidebarProps } from "@orion-ds/react/components/Sidebar";
import type { PageHeaderProps } from "@orion-ds/react/components/PageHeader";
import type { MetricCardsProps } from "@orion-ds/react/components/MetricCards";
import type { DataTableProps } from "@orion-ds/react/components/DataTable";
import type { ActivityFeedProps } from "@orion-ds/react/components/ActivityFeed";

/**
 * Dashboard layout variant
 */
export type DashboardLayout = "default" | "split" | "compact";

/**
 * DashboardTemplate props
 *
 * @example
 * ```tsx
 * <DashboardTemplate
 *   pageHeader={{ title: 'Dashboard' }}
 *   metrics={{ metrics: [...] }}
 *   dataTable={{ columns: [...], data: [...] }}
 * />
 * ```
 */
export interface DashboardTemplateProps extends HTMLAttributes<HTMLDivElement> {
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
  layout?: DashboardLayout;

  /**
   * Additional children rendered in the main content area
   */
  children?: ReactNode;
}
