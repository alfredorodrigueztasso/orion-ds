/**
 * DashboardTemplate
 *
 * A complete dashboard page template composing Orion sections.
 * Designed for admin panels, analytics dashboards, and data-heavy interfaces.
 */

import { forwardRef } from "react";
import type { DashboardTemplateProps } from "./DashboardTemplate.types";

// Sections
import { Sidebar } from "../../../sections/Sidebar";
import { PageHeader } from "../../../sections/PageHeader";
import { MetricCards } from "../../../sections/MetricCards";
import { DataTable } from "../../../sections/DataTable";
import { ActivityFeed } from "../../../sections/ActivityFeed";

import styles from "./DashboardTemplate.module.css";

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
export const DashboardTemplate = forwardRef<
  HTMLDivElement,
  DashboardTemplateProps
>(
  (
    {
      sidebar,
      pageHeader,
      metrics,
      dataTable,
      activityFeed,
      layout = "default",
      children,
      className,
      ...rest
    },
    ref,
  ) => {
    const dashboardClasses = [
      styles.dashboard,
      layout === "compact" && styles.compact,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const contentClasses =
      layout === "split" ? styles.contentSplit : styles.content;

    return (
      <div ref={ref} className={dashboardClasses} {...rest}>
        {/* Sidebar Navigation */}
        {sidebar && <Sidebar variant="floating" {...sidebar} />}

        {/* Main Content Area */}
        <main className={styles.main}>
          {/* Page Header */}
          <PageHeader variant="transparent" {...pageHeader} />

          {/* Content */}
          <div className={contentClasses}>
            <div className={styles.contentInner}>
              {/* Metric Cards */}
              {metrics && <MetricCards {...metrics} />}

              {/* Data Table */}
              {dataTable && <DataTable {...dataTable} />}

              {/* Custom Content */}
              {children}
            </div>

            {/* Activity Feed (Split Layout) */}
            {layout === "split" && activityFeed && (
              <aside className={styles.aside}>
                <ActivityFeed {...activityFeed} />
              </aside>
            )}
          </div>
        </main>
      </div>
    );
  },
);

DashboardTemplate.displayName = "DashboardTemplate";

export default DashboardTemplate;
