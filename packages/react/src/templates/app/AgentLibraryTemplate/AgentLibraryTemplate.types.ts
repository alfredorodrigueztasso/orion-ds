/**
 * AgentLibraryTemplate Types
 *
 * Type definitions for the Agent Library template - full page layout for managing AI agents.
 */

import type { HTMLAttributes, ReactNode } from 'react';
import type { AgentFolderProps } from '../../../sections/AgentFolder';

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
   * Available workspaces
   */
  workspaces?: Workspace[];

  /**
   * Workspace change handler
   */
  onWorkspaceChange?: (id: string) => void;

  /**
   * User avatar URL
   */
  userAvatar?: string;

  /**
   * User name
   */
  userName?: string;

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
 * AgentLibraryTemplate component props
 *
 * @example
 * ```tsx
 * <AgentLibraryTemplate
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
 *   onCreateFolder={() => console.log('Create folder')}
 *   onCreateAgent={() => console.log('Create agent')}
 * />
 * ```
 */
export interface AgentLibraryTemplateProps extends HTMLAttributes<HTMLDivElement> {
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
   * Create new folder handler
   */
  onCreateFolder?: () => void;

  /**
   * Create new agent handler
   */
  onCreateAgent?: () => void;

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
