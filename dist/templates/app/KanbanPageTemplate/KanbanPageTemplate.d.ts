/**
 * KanbanPageTemplate
 *
 * A complete Kanban board page template composing Orion sections.
 * Designed for project management, task boards, and workflow visualization.
 */
import type { KanbanPageTemplateProps } from './KanbanPageTemplate.types';
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
export declare const KanbanPageTemplate: import("react").ForwardRefExoticComponent<KanbanPageTemplateProps & import("react").RefAttributes<HTMLDivElement>>;
export default KanbanPageTemplate;
//# sourceMappingURL=KanbanPageTemplate.d.ts.map