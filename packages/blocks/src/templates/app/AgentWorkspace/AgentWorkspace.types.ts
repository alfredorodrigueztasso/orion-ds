/**
 * AgentWorkspace Types
 *
 * Type definitions for the Agent Workspace template - full page layout for managing AI agents.
 */

import type { HTMLAttributes, ReactNode } from "react";
import type { AgentFolderProps } from "../../../sections/AgentFolder";
import type { AgentCardProps } from "@orion-ds/react";

/**
 * Workspace option
 */
export interface Workspace {
  /**
   * Unique workspace ID
   */
  id: string;

  /**
   * Workspace display name
   */
  name: string;

  /**
   * Workspace avatar URL (displayed in workspace dropdown list)
   */
  avatar?: string;

  /**
   * Workspace avatar icon element (alternative to avatar URL)
   */
  icon?: ReactNode;

  /**
   * Workspace initials fallback (displayed when no avatar/icon)
   */
  initials?: string;

  /**
   * User's role in this workspace (e.g., "Propietario", "Editor")
   */
  role?: string;
}

/**
 * Navbar configuration
 */
export interface NavbarConfig {
  /**
   * Logo/brand element
   */
  logo?: ReactNode;

  /**
   * Current workspace name
   */
  workspaceName?: string;

  /**
   * Workspace avatar URL or icon (displayed left of workspace name)
   */
  workspaceAvatar?: string;

  /**
   * Workspace avatar icon element (alternative to workspaceAvatar)
   */
  workspaceIcon?: ReactNode;

  /**
   * Workspace initials fallback (e.g., "WS", "AW")
   */
  workspaceInitials?: string;

  /**
   * Available workspaces
   */
  workspaces?: Workspace[];

  /**
   * Workspace change handler
   */
  onWorkspaceChange?: (id: string) => void;

  /**
   * Active workspace ID (used to identify current workspace in the panel)
   */
  activeWorkspaceId?: string;

  /**
   * User's role in the active workspace (e.g., "Propietario")
   */
  workspaceRole?: string;

  /**
   * Number of participants in the active workspace
   */
  workspaceParticipantCount?: number;

  /**
   * Workspace settings handler
   */
  onWorkspaceSettings?: () => void;

  /**
   * Workspace invite participants handler
   */
  onWorkspaceInvite?: () => void;

  /**
   * Create new workspace handler
   */
  onCreateWorkspace?: () => void;

  /**
   * User avatar URL
   */
  userAvatar?: string;

  /**
   * User name
   */
  userName?: string;

  /**
   * User email (displayed in UserMenu header)
   */
  userEmail?: string;

  /**
   * User menu click handler
   */
  onUserMenuClick?: () => void;
}

/**
 * Page header configuration
 */
export interface PageHeaderConfig {
  /**
   * Page title
   */
  title?: string;

  /**
   * Optional icon next to title
   */
  icon?: ReactNode;

  /**
   * Action buttons (e.g., Create Folder, New Agent)
   */
  actions?: ReactNode;
}

/**
 * Help center item
 */
export interface HelpCenter {
  /**
   * Unique help center ID
   */
  id: string;

  /**
   * Help center display name
   */
  name: string;

  /**
   * Optional icon (Lucide or custom ReactNode)
   */
  icon?: ReactNode;
}

/**
 * AgentWorkspace component props
 *
 * @example
 * ```tsx
 * <AgentWorkspace
 *   pageHeader={{
 *     title: 'Agentes IA',
 *     icon: <Bot size={24} />,
 *     actions: (
 *       <>
 *         <Button variant="secondary">Nueva carpeta</Button>
 *         <Button variant="primary">Nuevo agente</Button>
 *       </>
 *     )
 *   }}
 *   folders={[...]}
 *   looseAgents={[...]}
 *   onCreateFolder={() => console.log('Create folder')}
 *   onCreateAgent={() => console.log('Create agent')}
 * />
 * ```
 */
export interface AgentWorkspaceProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Navbar configuration (optional)
   */
  navbar?: NavbarConfig;

  /**
   * Page header configuration (optional)
   */
  pageHeader?: PageHeaderConfig;

  /**
   * Array of agent folders
   */
  folders?: AgentFolderProps[];

  /**
   * Agents not belonging to any folder, displayed below folders
   */
  looseAgents?: AgentCardProps[];

  /**
   * Help centers (displayed in sidebar)
   */
  helpCenters?: HelpCenter[];

  /**
   * Create new folder handler
   */
  onCreateFolder?: () => void;

  /**
   * Create new agent handler (with optional folderId parameter)
   */
  onCreateAgent?: (folderId?: string) => void;

  /**
   * Create new help center handler
   */
  onCreateHelpCenter?: () => void;

  /**
   * Edit folder handler
   */
  onEditFolder?: (folderId: string) => void;

  /**
   * Delete folder handler
   */
  onDeleteFolder?: (folderId: string) => void;

  /**
   * Move agent handler
   */
  onMoveAgent?: (agentId: string) => void;

  /**
   * Delete agent handler
   */
  onDeleteAgent?: (agentId: string) => void;

  /**
   * Edit help center handler
   */
  onEditHelpCenter?: (helpCenterId: string) => void;

  /**
   * Delete help center handler
   */
  onDeleteHelpCenter?: (helpCenterId: string) => void;

  /**
   * Invite participants handler
   */
  onInviteParticipants?: () => void;

  /**
   * Settings handler
   */
  onSettings?: () => void;

  /**
   * Navigation node click handler (sidebar navigation)
   */
  onNavNodeClick?: (nodeId: string) => void;

  /**
   * Active navigation node ID (for highlighting in sidebar)
   */
  activeNavNodeId?: string;

  /**
   * Sidebar width in pixels
   * @default 260
   */
  sidebarWidth?: number;

  /**
   * Visible sections in sidebar (filter by section ID)
   * Possible values: 'agents', 'help-centers', 'community'
   * @default all sections visible
   */
  visibleSections?: string[];

  /**
   * Custom empty state when no folders exist
   */
  emptyState?: ReactNode;

  /**
   * Is drag and drop enabled
   * @default true
   */
  enableDragDrop?: boolean;
}

/**
 * Drag & drop event data
 * @internal
 */
export interface DragEndEvent {
  active: {
    id: string | number;
    data: {
      current?: {
        agentId?: string;
      };
    };
  };
  over: {
    id: string | number;
    data: {
      current?: {
        folderId?: string;
      };
    };
  } | null;
}
