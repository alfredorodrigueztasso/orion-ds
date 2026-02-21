/**
 * AgentWorkspace
 *
 * Full page template for managing AI agents organized in collapsible folders and ungrouped agents.
 * Supports native HTML5 drag & drop between folders with rich visual feedback, sorting, and folder management.
 *
 * ## Drag & Drop System
 * Uses a hybrid approach combining:
 * - **@dnd-kit/core**: Provides DragOverlay for visual ghost card while dragging
 * - **Native HTML5 DnD**: AgentFolder implements native onDragOver/onDrop for responsive feedback
 *
 * ## Features
 * - **Drop target visual feedback**: Folders highlight when dragging agents over them
 * - **Dynamic insertion indicators**: Blue line shows exact drop position within folder
 * - **Real-time state updates**: Agents move between folders with state synchronization
 * - **Automatic cleanup**: Visual states reset after drop or when leaving folder
 * - **Workspace management**: Dropdown selector for switching between workspaces
 * - **Folder sorting**: Per-folder sort options
 * - **Loose agents**: Agents not assigned to any folder
 *
 * ## State Management
 * Parent component should implement:
 * - `onDrop` handler for each folder to move agents: `(agentId, targetFolderId, insertionIndex?) => void`
 * - State management for folders and their agents
 * - Optional: workspace switching, folder CRUD operations
 *
 * @example
 * ```tsx
 * const [folders, setFolders] = useState(initialFolders);
 *
 * const handleDrop = (agentId: string, targetFolderId: string, index?: number) => {
 *   setFolders(prev => {
 *     // Find source folder containing agent
 *     // Remove agent from source, add to target at specified index
 *     // Update agentCount in both folders
 *   });
 * };
 *
 * <AgentWorkspace
 *   navbar={{
 *     logo: <img src="/logo.svg" alt="Logo" />,
 *     workspaceName: 'My Workspace',
 *     userAvatar: '/avatar.jpg',
 *     userName: 'John Doe'
 *   }}
 *   pageHeader={{
 *     title: 'AI Agents',
 *     icon: <Bot size={24} />
 *   }}
 *   folders={folders.map(folder => ({
 *     ...folder,
 *     onDrop: (agentId, folderId, index) => handleDrop(agentId, folderId, index)
 *   }))}
 *   looseAgents={agentsWithoutFolder}
 *   enableDragDrop={true}
 * />
 * ```
 */

import React, { useState } from "react";
import type { AgentWorkspaceProps, DragEndEvent } from "./AgentWorkspace.types";
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { Navbar } from "../../../components/Navbar";
import { PageHeader } from "../../../sections/PageHeader";
import { AgentFolder } from "../../../sections/AgentFolder";
import { AgentCard } from "../../../components/AgentCard";
import { Button } from "../../../components/Button";
import { Popover } from "../../../components/Popover";
import { Avatar } from "../../../components/Avatar";
import { Divider } from "../../../components/Divider";
import {
  FolderPlus,
  Plus,
  ChevronDown,
  Sparkles,
  Settings,
  Users,
  Bot,
} from "lucide-react";
import styles from "./AgentWorkspace.module.css";

export const AgentWorkspace: React.FC<AgentWorkspaceProps> = ({
  navbar,
  pageHeader,
  folders = [],
  looseAgents,
  onCreateFolder,
  onCreateAgent,
  onInviteParticipants,
  onSettings,
  emptyState,
  enableDragDrop = true,
  className,
  ...rest
}) => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [overId, setOverId] = useState<string | null>(null);
  const [completedFolderId, setCompletedFolderId] = useState<string | null>(
    null,
  );

  // Drag & drop sensors
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8, // 8px movement required to start drag
      },
    }),
  );

  // Find the active agent being dragged
  const activeAgent = folders
    ?.flatMap((folder) => folder.agents)
    .find((agent) => agent.id === activeId);

  // Handle drag start
  const handleDragStart = (event: { active: { id: string | number } }) => {
    setActiveId(String(event.active.id));
  };

  // Handle drag over (to show drop target visual)
  const handleDragOver = (event: { over: { id: string | number } | null }) => {
    setOverId(event.over ? String(event.over.id) : null);
  };

  // Handle drag end
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) {
      setActiveId(null);
      setOverId(null);
      return;
    }

    const agentId = String(active.id);
    const targetFolderId = String(over.id);

    // Find the folder that contains this agent
    const sourceFolder = folders?.find((folder) =>
      folder.agents.some((agent) => agent.id === agentId),
    );

    // Find the target folder
    const targetFolder = folders?.find(
      (folder) => folder.id === targetFolderId,
    );

    // If dropping into a different folder, set visual feedback
    // The actual drop handler is managed by AgentFolder's native onDrop with insertion index
    if (sourceFolder && targetFolder && sourceFolder.id !== targetFolder.id) {
      // Set completed feedback
      setCompletedFolderId(targetFolderId);
      setTimeout(() => setCompletedFolderId(null), 600);
    }

    setActiveId(null);
    setOverId(null);
  };

  // Build page header actions with create buttons
  const headerActions = (
    <div className={styles.headerActions}>
      {onCreateFolder && (
        <div className={styles.hideOnMobile}>
          <Button
            variant="secondary"
            icon={<FolderPlus size={20} />}
            onClick={onCreateFolder}
          >
            Nueva carpeta
          </Button>
        </div>
      )}
      {onCreateAgent && (
        <Button
          variant="primary"
          icon={<Plus size={20} />}
          onClick={onCreateAgent}
        >
          Nuevo agente
        </Button>
      )}
      {pageHeader?.actions}
    </div>
  );

  const classNames = [styles.template, className].filter(Boolean).join(" ");

  return (
    <div className={classNames} {...rest}>
      {/* Navbar */}
      {navbar && (
        <Navbar sticky bordered>
          {navbar.workspaces && navbar.workspaces.length > 0 && (
            <div className={styles.workspaceSelector}>
              <Popover
                trigger={
                  <button className={styles.workspaceButton}>
                    {(navbar.workspaceAvatar ||
                      navbar.workspaceIcon ||
                      navbar.workspaceInitials) && (
                      <Avatar
                        size="xs"
                        src={navbar.workspaceAvatar}
                        icon={navbar.workspaceIcon}
                        initials={navbar.workspaceInitials}
                      />
                    )}
                    {navbar.workspaceName || "Workspace"}
                    <ChevronDown size={16} />
                  </button>
                }
                content={
                  <div className={styles.workspacePanel}>
                    {/* Header: workspace count */}
                    {navbar.workspaces.length > 0 && (
                      <div className={styles.workspacePanelCount}>
                        {navbar.workspaces.length} Organizaciones
                      </div>
                    )}

                    {/* Active workspace section */}
                    <div className={styles.workspacePanelActive}>
                      <Avatar
                        size="lg"
                        src={navbar.workspaceAvatar}
                        icon={navbar.workspaceIcon}
                        initials={navbar.workspaceInitials}
                      />
                      <div className={styles.workspacePanelInfo}>
                        <div className={styles.workspacePanelName}>
                          {navbar.workspaceName || "Workspace"}
                        </div>
                        {navbar.workspaceRole && (
                          <div className={styles.workspacePanelMeta}>
                            {navbar.workspaceRole}
                          </div>
                        )}
                        {navbar.workspaceParticipantCount !== undefined && (
                          <div className={styles.workspacePanelMeta}>
                            {navbar.workspaceParticipantCount} participantes
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Action buttons */}
                    {(navbar.onWorkspaceSettings ||
                      navbar.onWorkspaceInvite) && (
                      <div className={styles.workspacePanelActions}>
                        {navbar.onWorkspaceSettings && (
                          <Button
                            variant="ghost"
                            size="sm"
                            icon={<Settings size={16} />}
                            onClick={navbar.onWorkspaceSettings}
                          >
                            Configuración
                          </Button>
                        )}
                        {navbar.onWorkspaceInvite && (
                          <Button
                            variant="ghost"
                            size="sm"
                            icon={<Users size={16} />}
                            onClick={navbar.onWorkspaceInvite}
                          >
                            Participantes
                          </Button>
                        )}
                      </div>
                    )}

                    {/* Divider and list of other workspaces */}
                    {navbar.workspaces.length > 1 && (
                      <>
                        <div className={styles.workspacePanelDivider}>
                          <Divider />
                        </div>

                        <div className={styles.workspacePanelList}>
                          {navbar.workspaces
                            .filter(
                              (ws) =>
                                !navbar.activeWorkspaceId ||
                                ws.id !== navbar.activeWorkspaceId,
                            )
                            .map((workspace) => (
                              <div
                                key={workspace.id}
                                className={styles.workspaceListItem}
                                onClick={() =>
                                  navbar.onWorkspaceChange?.(workspace.id)
                                }
                              >
                                <Avatar
                                  size="xs"
                                  src={workspace.avatar}
                                  icon={workspace.icon}
                                  initials={workspace.initials}
                                />
                                <div className={styles.workspaceListItemInfo}>
                                  <div className={styles.workspaceListItemName}>
                                    {workspace.name}
                                  </div>
                                  {workspace.role && (
                                    <div
                                      className={styles.workspaceListItemRole}
                                    >
                                      {workspace.role}
                                    </div>
                                  )}
                                </div>
                              </div>
                            ))}
                        </div>
                      </>
                    )}

                    {/* Footer: create workspace */}
                    <div className={styles.workspacePanelFooter}>
                      <Button
                        variant="ghost"
                        size="sm"
                        icon={<Plus size={16} />}
                        onClick={navbar.onCreateWorkspace}
                      >
                        Nueva organización
                      </Button>
                    </div>
                  </div>
                }
                placement="bottom-start"
                showArrow={false}
              />
            </div>
          )}

          <Navbar.Nav>
            <Navbar.Link href="#" active>
              Agentes IA
            </Navbar.Link>
            <Navbar.Link href="#">Centro atención</Navbar.Link>
          </Navbar.Nav>

          <Navbar.Actions>
            {navbar.userAvatar ? (
              <button
                className={styles.userButton}
                onClick={navbar.onUserMenuClick}
                aria-label="User menu"
              >
                <Avatar
                  src={navbar.userAvatar}
                  alt={navbar.userName || "User"}
                  size="sm"
                />
              </button>
            ) : (
              <Avatar
                initials={navbar.userName?.slice(0, 2).toUpperCase() || "U"}
                size="sm"
              />
            )}
          </Navbar.Actions>
        </Navbar>
      )}

      {/* Main Content */}
      <main className={styles.content}>
        {/* Page Header */}
        <PageHeader
          title={
            <div className={styles.titleWithIcon}>
              <span className={styles.titleIcon}>
                {pageHeader?.icon || <Sparkles size={28} />}
              </span>
              <span>{pageHeader?.title || "Agentes IA"}</span>
            </div>
          }
          actions={headerActions}
          bordered={false}
          variant="transparent"
          className={styles.pageHeaderInContent}
        />

        {folders.length === 0 && (!looseAgents || looseAgents.length === 0) ? (
          // Empty state
          <div className={styles.emptyState}>
            {emptyState || (
              <>
                <Bot size={64} className={styles.emptyIcon} />
                <h3 className={styles.emptyTitle}>No hay carpetas todavía</h3>
                <p className={styles.emptyDescription}>
                  Crea tu primera carpeta para organizar tus agentes de IA
                </p>
                {onCreateFolder && (
                  <Button
                    variant="primary"
                    icon={<FolderPlus size={20} />}
                    onClick={onCreateFolder}
                  >
                    Crear primera carpeta
                  </Button>
                )}
              </>
            )}
          </div>
        ) : enableDragDrop ? (
          // Drag & drop enabled
          <DndContext
            sensors={sensors}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDragEnd={handleDragEnd}
          >
            <div className={styles.folders}>
              {folders.map((folder) => (
                <AgentFolder
                  key={folder.id}
                  {...folder}
                  isDropTarget={overId === folder.id}
                  isDropCompleted={completedFolderId === folder.id}
                  onDrop={(agentId, targetFolderId, insertionIndex) => {
                    // Call the parent handler to move the agent
                    folder.onDrop?.(agentId, targetFolderId, insertionIndex);
                  }}
                  agents={folder.agents.map((agent) => ({
                    ...agent,
                    draggable: true,
                    isDragging: agent.id === activeId,
                    availableFolders: folders
                      ?.filter((f) => f.id !== folder.id)
                      .map((f) => ({ id: f.id, title: f.title })),
                    onMoveToFolder: (targetFolderId: string) => {
                      const targetFolder = folders?.find(
                        (f) => f.id === targetFolderId,
                      );
                      targetFolder?.onDrop?.(agent.id, targetFolderId);
                    },
                  }))}
                />
              ))}
            </div>

            {/* Drag overlay (ghost card being dragged) */}
            <DragOverlay dropAnimation={{ duration: 150, easing: "ease-out" }}>
              {activeId && activeAgent ? (
                <div style={{ transform: "rotate(2deg)", cursor: "grabbing" }}>
                  <AgentCard {...activeAgent} isDragging />
                </div>
              ) : null}
            </DragOverlay>
          </DndContext>
        ) : (
          // No drag & drop
          <div className={styles.folders}>
            {folders.map((folder) => (
              <AgentFolder
                key={folder.id}
                {...folder}
                agents={folder.agents.map((agent) => ({
                  ...agent,
                  availableFolders: folders
                    ?.filter((f) => f.id !== folder.id)
                    .map((f) => ({ id: f.id, title: f.title })),
                  onMoveToFolder: (targetFolderId: string) => {
                    const targetFolder = folders?.find(
                      (f) => f.id === targetFolderId,
                    );
                    targetFolder?.onDrop?.(agent.id, targetFolderId);
                  },
                }))}
              />
            ))}
          </div>
        )}

        {/* Loose agents (agents without folder) */}
        {looseAgents && looseAgents.length > 0 && (
          <div className={styles.looseAgentsSection}>
            <Divider label="Sin carpeta" spacing="lg" />
            <div className={styles.looseAgentsGrid}>
              {looseAgents.map((agent) => (
                <div
                  key={agent.id}
                  draggable={enableDragDrop && agent.draggable}
                >
                  <AgentCard
                    {...agent}
                    availableFolders={folders?.map((f) => ({
                      id: f.id,
                      title: f.title,
                    }))}
                    onMoveToFolder={(targetFolderId: string) => {
                      const targetFolder = folders?.find(
                        (f) => f.id === targetFolderId,
                      );
                      targetFolder?.onDrop?.(agent.id, targetFolderId);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

AgentWorkspace.displayName = "AgentWorkspace";
