/**
 * AgentFolder Section
 *
 * Collapsible folder section for organizing AI agents in a grid layout.
 * Supports drag & drop, sorting, and folder management actions.
 *
 * @example
 * ```tsx
 * <AgentFolder
 *   id="folder-1"
 *   title="Customer Support Agents"
 *   agentCount={5}
 *   agents={agentsList}
 *   defaultExpanded={true}
 *   sortOptions={[
 *     { label: 'Most Recent', value: 'recent' },
 *     { label: 'Alphabetical', value: 'alpha' }
 *   ]}
 *   selectedSort="recent"
 *   onSortChange={(value) => console.log('Sort:', value)}
 * />
 * ```
 */

import React, { useState } from "react";
import type { AgentFolderProps } from "./AgentFolder.types";
import { Collapsible } from "../../components/Collapsible";
import { Dropdown } from "../../components/Dropdown";
import { Badge } from "../../components/Badge";
import { Button } from "../../components/Button";
import { AgentCard } from "../../components/AgentCard";
import { ChevronDown, MoreHorizontal } from "lucide-react";
import styles from "./AgentFolder.module.css";

export const AgentFolder: React.FC<AgentFolderProps> = ({
  id,
  title,
  agentCount,
  agents,
  defaultExpanded = true,
  sortOptions,
  selectedSort,
  onSortChange,
  onDrop,
  onFolderEdit,
  onFolderDelete,
  onFolderInvite,
  isDropTarget = false,
  isDropCompleted = false,
  className,
  ...rest
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const agentId = e.dataTransfer.getData("agentId");
    if (agentId && onDrop) {
      onDrop(agentId, id);
    }
  };

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    agentId: string,
  ) => {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("agentId", agentId);
  };

  // Build sort dropdown items
  const sortDropdownItems = sortOptions?.map((option) => ({
    id: option.value,
    label: option.label,
    onClick: () => onSortChange?.(option.value),
  }));

  // Build folder actions dropdown
  const folderActionsItems = [
    ...(onFolderEdit
      ? [
          {
            id: "rename",
            label: "Cambiar nombre",
            onClick: onFolderEdit,
          },
        ]
      : []),
    ...(onFolderInvite
      ? [
          {
            id: "invite",
            label: "Invitar participantes",
            onClick: onFolderInvite,
          },
        ]
      : []),
    ...(onFolderDelete
      ? [
          {
            id: "delete",
            label: "Eliminar carpeta",
            danger: true,
            onClick: onFolderDelete,
          },
        ]
      : []),
  ];

  const classNames = [
    styles.folder,
    isDropTarget && styles.dropTarget,
    isDropCompleted && styles.dropCompleted,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={classNames}
      data-folder-id={id}
      data-drop-active={isDropTarget}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      {...rest}
    >
      <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
        {/* Folder Header */}
        <div className={styles.header}>
          <Collapsible.Trigger className={styles.trigger}>
            <ChevronDown
              size={20}
              className={`${styles.chevron} ${isExpanded ? styles.expanded : ""}`}
            />
            <h2 className={styles.title}>{title}</h2>
            <Badge variant="neutral" className={styles.badge}>
              {agentCount}
              <span className={styles.badgeLabel}>
                {" "}
                {agentCount === 1 ? "Agente" : "Agentes"}
              </span>
            </Badge>
          </Collapsible.Trigger>

          <div className={styles.actions}>
            {/* Sort dropdown */}
            {sortOptions && sortOptions.length > 0 && (
              <div className={styles.sortDropdown}>
                <Dropdown
                  trigger={
                    <Button
                      variant="ghost"
                      size="sm"
                      iconRight={<ChevronDown size={16} />}
                      aria-label="Sort agents"
                    >
                      {sortOptions.find((opt) => opt.value === selectedSort)
                        ?.label || "Ordenar"}
                    </Button>
                  }
                  items={sortDropdownItems}
                  placement="bottom-end"
                />
              </div>
            )}

            {/* Folder actions menu */}
            {folderActionsItems.length > 0 && (
              <Dropdown
                trigger={
                  <Button
                    variant="ghost"
                    size="sm"
                    iconOnly
                    icon={<MoreHorizontal size={20} />}
                    aria-label="Folder actions"
                  />
                }
                items={folderActionsItems}
                placement="bottom-end"
              />
            )}
          </div>
        </div>

        {/* Agent Cards Grid */}
        <Collapsible.Content>
          <div className={styles.content}>
            {agents.length === 0 ? (
              <div className={styles.emptyState}>
                <p className={styles.emptyText}>
                  No hay agentes en esta carpeta
                </p>
              </div>
            ) : (
              <div className={styles.grid}>
                {agents.map((agent) => (
                  <div
                    key={agent.id}
                    draggable={agent.draggable}
                    onDragStart={(e) => handleDragStart(e, agent.id)}
                  >
                    <AgentCard {...agent} />
                  </div>
                ))}
                {isDropTarget && (
                  <div className={styles.dropPlaceholder} aria-hidden="true" />
                )}
              </div>
            )}
          </div>
        </Collapsible.Content>
      </Collapsible>
    </div>
  );
};

AgentFolder.displayName = "AgentFolder";
