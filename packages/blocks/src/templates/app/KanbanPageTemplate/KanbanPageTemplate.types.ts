/**
 * KanbanPageTemplate Types
 *
 * Type definitions for the Kanban board page template.
 */

import type { HTMLAttributes, ReactNode } from "react";
import type { SidebarProps } from "@orion-ds/react/components/Sidebar";
import type { PageHeaderProps } from "@orion-ds/react/components/PageHeader";
import type { FilterBarProps } from "@orion-ds/react/components/FilterBar";
import type { KanbanBoardProps } from "@orion-ds/react/components/KanbanBoard";

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
