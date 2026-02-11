/**
 * DashboardTemplate
 *
 * A complete dashboard page template composing Orion sections.
 * Designed for admin panels, analytics dashboards, and data-heavy interfaces.
 */
import type { DashboardTemplateProps } from './DashboardTemplate.types';
/**
 * DashboardTemplate - Full dashboard page composition
 *
 * Combines Sidebar, PageHeader, MetricCards, DataTable, and ActivityFeed
 * into a complete dashboard layout.
 *
 * @example
 * ```tsx
 * <DashboardTemplate
 *   sidebar={{ sections: navSections }}
 *   pageHeader={{ title: 'Dashboard', description: 'Overview' }}
 *   metrics={{ metrics: dashboardMetrics }}
 *   dataTable={{ columns: columns, data: tableData }}
 *   layout="split"
 *   activityFeed={{ activities: recentActivity }}
 * />
 * ```
 */
export declare const DashboardTemplate: import("react").ForwardRefExoticComponent<DashboardTemplateProps & import("react").RefAttributes<HTMLDivElement>>;
export default DashboardTemplate;
//# sourceMappingURL=DashboardTemplate.d.ts.map