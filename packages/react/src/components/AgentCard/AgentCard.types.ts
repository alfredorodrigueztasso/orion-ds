/**
 * AgentCard Component Types
 *
 * Type definitions for the AgentCard component - specialized card for AI agents.
 */

import type { HTMLAttributes, ReactNode } from "react";

/**
 * Agent status types
 */
export type AgentStatus = "draft" | "published" | "archived";

/**
 * AgentCard component props
 *
 * @example
 * ```tsx
 * <AgentCard
 *   id="agent-1"
 *   avatar="/agent-avatar.png"
 *   title="UVM Agent"
 *   description="Agent for Universidad Virtual de México"
 *   timestamp="Hace 2 horas"
 * />
 * ```
 */
export interface AgentCardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Unique agent identifier
   */
  id: string;

  /**
   * Agent avatar (image URL or ReactNode icon)
   */
  avatar: string | ReactNode;

  /**
   * Agent title/name
   */
  title: string;

  /**
   * Agent description (max 2 lines with ellipsis)
   */
  description: string;

  /**
   * Timestamp text (e.g., "Hace 2 horas")
   */
  timestamp?: string;

  /**
   * Agent status indicator
   */
  status?: AgentStatus;

  /**
   * Optional badge component
   */
  badge?: ReactNode;

  /**
   * Card click handler
   */
  onClick?: () => void;

  /**
   * Edit action handler
   */
  onEdit?: () => void;

  /**
   * Delete action handler
   */
  onDelete?: () => void;

  /**
   * Enable drag & drop functionality
   * @default false
   */
  draggable?: boolean;

  /**
   * Currently being dragged
   * @internal
   */
  isDragging?: boolean;

  /**
   * Available folders the agent can be moved to
   */
  availableFolders?: Array<{ id: string; title: string }>;

  /**
   * Called when user selects a folder to move this agent
   */
  onMoveToFolder?: (folderId: string) => void;
}
