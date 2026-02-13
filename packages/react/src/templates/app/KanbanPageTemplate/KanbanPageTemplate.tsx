/**
 * KanbanPageTemplate
 *
 * A complete Kanban board page template composing Orion sections.
 * Designed for project management, task boards, and workflow visualization.
 */

import { forwardRef } from 'react';
import type { KanbanPageTemplateProps } from './KanbanPageTemplate.types';

// Sections
import { Sidebar } from '../../../sections/Sidebar';
import { PageHeader } from '../../../sections/PageHeader';
import { FilterBar } from '../../../sections/FilterBar';
import { KanbanBoard } from '../../../sections/KanbanBoard';

import styles from './KanbanPageTemplate.module.css';

/**
 * KanbanPageTemplate - Full Kanban board page composition
 *
 * Combines Sidebar, PageHeader, FilterBar, and KanbanBoard.
 *
 * @example
 * ```tsx
 * <KanbanPageTemplate
 *   sidebar={{ sections: navSections }}
 *   pageHeader={{ title: 'Sprint Board' }}
 *   filterBar={{ filters: filterOptions }}
 *   kanban={{ columns: boardColumns }}
 * />
 * ```
 */
export const KanbanPageTemplate = forwardRef<HTMLDivElement, KanbanPageTemplateProps>(
  ({ sidebar, pageHeader, filterBar, kanban, children, className, ...rest }, ref) => {
    const kanbanClasses = [styles.kanbanPage, className].filter(Boolean).join(' ');

    return (
      <div ref={ref} className={kanbanClasses} {...rest}>
        {/* Sidebar Navigation */}
        {sidebar && <Sidebar variant="floating" {...sidebar} />}

        {/* Main Content Area */}
        <main className={styles.main}>
          {/* Page Header */}
          <PageHeader variant="transparent" {...pageHeader} />

          {/* Content */}
          <div className={styles.content}>
            {/* Filter Bar */}
            {filterBar && (
              <div className={styles.filterSection}>
                <FilterBar {...filterBar} />
              </div>
            )}

            {/* Custom Content */}
            {children}

            {/* Kanban Board */}
            <div className={styles.boardSection}>
              <KanbanBoard {...kanban} />
            </div>
          </div>
        </main>
      </div>
    );
  },
);

KanbanPageTemplate.displayName = 'KanbanPageTemplate';

export default KanbanPageTemplate;
