/**
 * AgentFolder Section Types
 *
 * Type definitions for the AgentFolder section - collapsible folder for organizing AI agents.
 */

import type { HTMLAttributes } from "react";
import type { AgentCardProps } from "../../components/AgentCard";

/**
 * Sort option for agent ordering
 */
export interface SortOption {
  /**
   * Display label
   */
  label: string;

  /**
   * Internal value
   */
  value: string;
}

/**
 * AgentFolder component props
 *
 * @example
 * ```tsx
 * <AgentFolder
 *   id="folder-1"
 *   title="Agentes postgrado"
 *   agentCount={2}
 *   agents={[...]}
 *   defaultExpanded={true}
 *   sortOptions={[
 *     { label: 'Más reciente', value: 'recent' },
 *     { label: 'Alfabético', value: 'alpha' }
 *   ]}
 * />
 * ```
 */
export interface AgentFolderProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "onDrop"
> {
  /**
   * Unique folder identifier
   */
  id: string;

  /**
   * Folder title/name
   */
  title: string;

  /**
   * Number of agents in folder
   */
  agentCount: number;

  /**
   * Array of agents to display
   */
  agents: AgentCardProps[];

  /**
   * Default expanded state
   * @default true
   */
  defaultExpanded?: boolean;

  /**
   * Available sort options
   */
  sortOptions?: SortOption[];

  /**
   * Currently selected sort value
   */
  selectedSort?: string;

  /**
   * Sort option change handler
   */
  onSortChange?: (value: string) => void;

  /**
   * Drop handler for drag & drop
   */
  onDrop?: (agentId: string, folderId: string) => void;

  /**
   * Rename folder handler
   */
  onFolderEdit?: () => void;

  /**
   * Delete folder handler
   */
  onFolderDelete?: () => void;

  /**
   * Invite participants to folder handler
   */
  onFolderInvite?: () => void;

  /**
   * Is this folder currently a valid drop target
   * @internal
   */
  isDropTarget?: boolean;

  /**
   * Briefly set to true after a successful drop for micro-feedback
   * @internal
   */
  isDropCompleted?: boolean;
}
