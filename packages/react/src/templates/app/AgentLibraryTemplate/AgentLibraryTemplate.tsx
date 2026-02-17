/**
 * AgentLibraryTemplate
 *
 * Full page template for managing AI agents organized in collapsible folders.
 * Supports drag & drop between folders, sorting, and folder management.
 *
 * @example
 * ```tsx
 * <AgentLibraryTemplate
 *   navbar={{
 *     logo: <img src="/logo.svg" alt="Logo" />,
 *     workspaceName: 'My Workspace',
 *     userAvatar: '/avatar.jpg',
 *     userName: 'John Doe'
 *   }}
 *   pageHeader={{
 *     title: 'AI Agents',
 *     icon: <Bot size={24} />,
 *     actions: (
 *       <>
 *         <Button onClick={onCreateFolder}>New Folder</Button>
 *         <Button variant="primary" onClick={onCreateAgent}>New Agent</Button>
 *       </>
 *     )
 *   }}
 *   folders={folders}
 * />
 * ```
 */

import React, { useState } from 'react';
import type { AgentLibraryTemplateProps, DragEndEvent } from './AgentLibraryTemplate.types';
import { DndContext, DragOverlay, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { Navbar } from '../../../components/Navbar';
import { PageHeader } from '../../../sections/PageHeader';
import { AgentFolder } from '../../../sections/AgentFolder';
import { AgentCard } from '../../../components/AgentCard';
import { Button } from '../../../components/Button';
import { Dropdown } from '../../../components/Dropdown';
import { Avatar } from '../../../components/Avatar';
import { FolderPlus, Plus, Bot, ChevronDown } from 'lucide-react';
import styles from './AgentLibraryTemplate.module.css';

export const AgentLibraryTemplate: React.FC<AgentLibraryTemplateProps> = ({
  navbar,
  pageHeader,
  folders = [],
  onCreateFolder,
  onCreateAgent,
  emptyState,
  enableDragDrop = true,
  className,
  ...rest
}) => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [overId, setOverId] = useState<string | null>(null);

  // Drag & drop sensors
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8, // 8px movement required to start drag
      },
    })
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
      folder.agents.some((agent) => agent.id === agentId)
    );

    // Find the target folder
    const targetFolder = folders?.find((folder) => folder.id === targetFolderId);

    // If dropping into a different folder, call the onDrop handler
    if (sourceFolder && targetFolder && sourceFolder.id !== targetFolder.id) {
      targetFolder.onDrop?.(agentId, targetFolderId);
    }

    setActiveId(null);
    setOverId(null);
  };

  // Build workspace dropdown items
  const workspaceItems = navbar?.workspaces?.map((workspace) => ({
    id: workspace.id,
    label: workspace.name,
    onClick: () => navbar.onWorkspaceChange?.(workspace.id),
  }));

  // Build page header actions with create buttons
  const headerActions = (
    <div className={styles.headerActions}>
      {onCreateFolder && (
        <Button
          variant="secondary"
          icon={<FolderPlus size={20} />}
          onClick={onCreateFolder}
        >
          Nueva carpeta
        </Button>
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

  const classNames = [styles.template, className].filter(Boolean).join(' ');

  return (
    <div className={classNames} {...rest}>
      {/* Navbar */}
      {navbar && (
        <Navbar sticky bordered>
          <Navbar.Brand href="#">
            {navbar.logo || <Bot size={24} />}
          </Navbar.Brand>

          {navbar.workspaces && navbar.workspaces.length > 0 && (
            <div className={styles.workspaceSelector}>
              <Dropdown
                trigger={
                  <button className={styles.workspaceButton}>
                    {navbar.workspaceName || 'Workspace'}
                    <ChevronDown size={16} />
                  </button>
                }
                items={workspaceItems}
                placement="bottom-start"
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
                  alt={navbar.userName || 'User'}
                  size="sm"
                />
              </button>
            ) : (
              <Avatar
                initials={navbar.userName?.slice(0, 2).toUpperCase() || 'U'}
                size="sm"
              />
            )}
          </Navbar.Actions>
        </Navbar>
      )}

      {/* Page Header */}
      <PageHeader
        title={
          <div className={styles.titleWithIcon}>
            {pageHeader?.icon || <Bot size={24} />}
            <span>{pageHeader?.title || 'Agentes IA'}</span>
          </div>
        }
        actions={headerActions}
        bordered={false}
      />

      {/* Main Content */}
      <main className={styles.content}>
        {folders.length === 0 ? (
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
                <div
                  key={folder.id}
                  id={folder.id}
                  data-folder-id={folder.id}
                >
                  <AgentFolder
                    {...folder}
                    isDropTarget={overId === folder.id}
                    agents={folder.agents.map((agent) => ({
                      ...agent,
                      draggable: true,
                      isDragging: agent.id === activeId,
                    }))}
                  />
                </div>
              ))}
            </div>

            {/* Drag overlay (ghost card being dragged) */}
            <DragOverlay>
              {activeId && activeAgent ? (
                <AgentCard {...activeAgent} isDragging />
              ) : null}
            </DragOverlay>
          </DndContext>
        ) : (
          // No drag & drop
          <div className={styles.folders}>
            {folders.map((folder) => (
              <AgentFolder key={folder.id} {...folder} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

AgentLibraryTemplate.displayName = 'AgentLibraryTemplate';
