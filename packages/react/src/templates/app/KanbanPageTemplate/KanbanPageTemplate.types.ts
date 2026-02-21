/**
 * KanbanPageTemplate Types
 *
 * Type definitions for the Kanban board page template.
 */

import type { HTMLAttributes, ReactNode } from "react";
import type { SidebarProps } from "../../../sections/Sidebar";
import type { PageHeaderProps } from "../../../sections/PageHeader";
import type { FilterBarProps } from "../../../sections/FilterBar";
import type { KanbanBoardProps } from "../../../sections/KanbanBoard";

/**
 * KanbanPageTemplate props
 *
 * @example
 * ```tsx
 * <KanbanPageTemplate
 *   pageHeader={{ title: 'Project Board' }}
 *   kanban={{
 *     columns: [...],
 *     onCardMove: handleMove
 *   }}
 * />
 * ```
 */
export interface KanbanPageTemplateProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Sidebar configuration (optional)
   */
  sidebar?: SidebarProps;

  /**
   * Page header configuration (required)
   */
  pageHeader: PageHeaderProps;

  /**
   * Filter bar for filtering cards
   */
  filterBar?: FilterBarProps;

  /**
   * Kanban board configuration (required)
   */
  kanban: KanbanBoardProps;

  /**
   * Additional content rendered above the board
   */
  children?: ReactNode;
}
