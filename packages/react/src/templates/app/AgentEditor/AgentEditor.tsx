import React, { useState } from "react";
import type { AgentEditorProps, AgentEditorTab } from "./AgentEditor.types";
import { NavTree } from "../../../sections/NavTree";
import { UserMenu } from "../../../sections/UserMenu";
import { PageHeader } from "../../../sections/PageHeader";
import { CodeEditor } from "../../../components/CodeEditor";
import { Card } from "../../../components/Card";
import { ToggleGroup } from "../../../components/ToggleGroup";
import { Chat } from "../../../components/Chat";
import { Select } from "../../../components/Select";
import { Button } from "../../../components/Button";
import { Popover } from "../../../components/Popover";
import { Avatar } from "../../../components/Avatar";
import { Divider } from "../../../components/Divider";
import {
  ChevronDown,
  Plus,
  Users,
  Settings,
  CreditCard,
  LogOut,
  HelpCircle,
  Users2,
  PenLine,
} from "lucide-react";
import styles from "./AgentEditor.module.css";

/**
 * AgentEditor
 *
 * A split-panel template for editing AI agent system prompts with live chat preview.
 * Mirrors the sidebar structure of AgentWorkspace for visual continuity.
 *
 * @example
 * ```tsx
 * <AgentEditor
 *   navbar={{
 *     workspaceName: 'My Workspace',
 *     userName: 'John Doe',
 *   }}
 *   navSections={agentSections}
 *   activeNavNodeId="agent-1-edit"
 *   messages={chatMessages}
 *   onSendMessage={(msg) => console.log(msg)}
 * />
 * ```
 */
export const AgentEditor: React.FC<AgentEditorProps> = ({
  // Sidebar
  navbar,
  navSections,
  activeNavNodeId: controlledActiveNavNodeId,
  onNavNodeClick,
  sidebarWidth = 260,

  // In-content header
  title = "Editor",
  modelOptions = [],
  selectedModel,
  onModelChange,
  onNewConversation,

  // Editor panel
  tabs: customTabs,
  activeTab: controlledActiveTab,
  onTabChange,
  leftPanelWidth = "50%",

  // Chat preview
  previewTitle = "Vista previa",
  messages = [],
  onSendMessage,
  isTyping = false,
  isLoading = false,
  chatInputConfig,
  emptyPreviewState,

  className,
  ...rest
}) => {
  // Sidebar state
  const [activeNavNodeId, setActiveNavNodeId] = useState<string | undefined>(
    controlledActiveNavNodeId,
  );

  // Default tabs
  const defaultTabs: AgentEditorTab[] = [
    {
      id: "comportamiento",
      label: "Comportamiento",
      language: "markdown",
      placeholder:
        "# Introduction & Scope\nYou are a virtual assistant designed to support users in this project.",
      value: "",
    },
    {
      id: "memoria",
      label: "Memoria",
      language: "markdown",
      placeholder: "# Memory\nStore and reference important user information...",
      value: "",
    },
    {
      id: "general",
      label: "General",
      language: "markdown",
      placeholder: "# General Settings\nConfigure general behavior...",
      value: "",
    },
  ];

  const tabs = customTabs || defaultTabs;

  // Determine active tab
  const [localActiveTab, setLocalActiveTab] = useState<string>(
    controlledActiveTab || tabs[0]?.id || "comportamiento",
  );

  const activeTab = controlledActiveTab || localActiveTab;

  const handleTabChange = (newTabId: string) => {
    setLocalActiveTab(newTabId);
    onTabChange?.(newTabId);
  };

  // Find the active tab definition
  const activeTabDef = tabs.find((t) => t.id === activeTab);

  // Handle nav node click
  const handleNavNodeClick = (nodeId: string) => {
    setActiveNavNodeId(nodeId);
    onNavNodeClick?.(nodeId);
  };

  // Build workspace switcher header (same pattern as AgentWorkspace)
  const sidebarHeader = (
    navbar?.workspaces && navbar.workspaces.length > 0 ? (
      <div className={styles.sidebarHeader}>
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
              <span className={styles.workspaceName}>
                {navbar.workspaceName || "Workspace"}
              </span>
              <ChevronDown size={16} />
            </button>
          }
          content={
            <div className={styles.workspacePanel}>
              {navbar.workspaces.length > 0 && (
                <div className={styles.workspacePanelCount}>
                  {navbar.workspaces.length} Organizaciones
                </div>
              )}

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

              {(navbar.onWorkspaceSettings || navbar.onWorkspaceInvite) && (
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
                              <div className={styles.workspaceListItemRole}>
                                {workspace.role}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                  </div>
                </>
              )}

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
          fullWidth
        />
      </div>
    ) : null
  );

  // Build sidebar footer (UserMenu)
  const sidebarFooter = (
    <div className={styles.sidebarFooter}>
      <UserMenu
        user={{
          name: navbar?.userName ?? "Usuario",
          email: navbar?.userEmail,
          avatar: navbar?.userAvatar,
          role: navbar?.workspaceRole,
          status: "online",
        }}
        sections={[
          {
            id: "account",
            label: "Mi Cuenta",
            items: [
              { id: "profile", label: "Mi Perfil", icon: <Users2 size={16} /> },
              {
                id: "preferences",
                label: "Preferencias",
                icon: <Settings size={16} />,
              },
            ],
          },
          {
            id: "workspace",
            label: "Espacio de Trabajo",
            items: [
              {
                id: "workspace-settings",
                label: "Configuración",
                icon: <Settings size={16} />,
              },
              {
                id: "invite",
                label: "Invitar miembros",
                icon: <Users2 size={16} />,
              },
            ],
          },
          {
            id: "billing",
            label: "Suscripción",
            items: [
              {
                id: "subscription",
                label: "Plan actual",
                icon: <CreditCard size={16} />,
              },
              {
                id: "billing-history",
                label: "Historial de pagos",
                icon: <CreditCard size={16} />,
              },
            ],
          },
          {
            id: "support",
            items: [
              {
                id: "help",
                label: "Ayuda y soporte",
                icon: <HelpCircle size={16} />,
              },
              {
                id: "logout",
                label: "Cerrar sesión",
                icon: <LogOut size={16} />,
                danger: true,
                onClick: navbar?.onUserMenuClick,
              },
            ],
          },
        ]}
        align="start"
        placement="top"
        showHeader={true}
        fullWidth
      />
    </div>
  );

  const templateClasses = [styles.template, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={templateClasses} {...rest}>
      {/* Sidebar with NavTree */}
      <NavTree
        width={sidebarWidth}
        sections={navSections || []}
        activeNodeId={activeNavNodeId}
        persistKey="agent-editor-nav"
        onNodeClick={(node) => handleNavNodeClick(node.id)}
        header={sidebarHeader}
        footer={sidebarFooter}
      />

      {/* Main content */}
      <main className={styles.content}>
        {/* Page Header - matches AgentWorkspace style */}
        <PageHeader
          title={
            <div className={styles.titleWithIcon}>
              <span className={styles.titleIcon}>
                <PenLine size={28} />
              </span>
              <span>{title}</span>
            </div>
          }
          actions={
            <div className={styles.headerActions}>
              {modelOptions.length > 0 && (
                <Select
                  options={modelOptions}
                  value={selectedModel}
                  onChange={(e) => onModelChange?.(e.target.value)}
                  size="sm"
                  placeholder="Select model..."
                />
              )}
              {onNewConversation && (
                <Button
                  variant="primary"
                  size="md"
                  icon={<Plus size={20} />}
                  onClick={onNewConversation}
                >
                  Nueva conversación
                </Button>
              )}
            </div>
          }
          bordered={false}
          variant="transparent"
          className={styles.pageHeaderInContent}
        />

        {/* Split area: left editor + right chat */}
        <div className={styles.splitArea}>
          {/* Left panel: editor */}
          <div
            className={styles.editorPanel}
            style={{ flex: `0 0 ${leftPanelWidth}` }}
          >
            <Card variant="base" className={styles.panelCard}>
              {/* Editor tab selector */}
              <div className={styles.tabsBar}>
                <ToggleGroup
                  type="single"
                  variant="outline"
                  size="md"
                  value={activeTab}
                  onValueChange={(val) => handleTabChange(val as string)}
                >
                  {tabs.map((tab) => (
                    <ToggleGroup.Item key={tab.id} value={tab.id}>
                      {tab.label}
                    </ToggleGroup.Item>
                  ))}
                </ToggleGroup>
              </div>

              {/* Editor content */}
              <div className={styles.editorContent}>
                {activeTabDef?.editorSlot ? (
                  activeTabDef.editorSlot
                ) : (
                  <CodeEditor
                    className={styles.codeEditorFull}
                    value={activeTabDef?.value || ""}
                    onChange={
                      activeTabDef?.onChange
                        ? (val) => activeTabDef.onChange?.(val)
                        : undefined
                    }
                    language={activeTabDef?.language}
                    placeholder={activeTabDef?.placeholder}
                    readOnly={activeTabDef?.readOnly}
                    showLineNumbers
                    aria-label={`${activeTabDef?.label} editor`}
                  />
                )}
              </div>
            </Card>
          </div>

          {/* Right panel: chat preview */}
          <div className={styles.previewPanel}>
            <Card variant="base" className={styles.panelCard}>
              <Chat className={styles.chat}>
                <Chat.Header
                  title={previewTitle}
                  actions={
                    onNewConversation ? (
                      <Button
                        variant="ghost"
                        size="sm"
                        icon={<Plus size={16} />}
                        onClick={onNewConversation}
                      >
                        Nueva
                      </Button>
                    ) : undefined
                  }
                />

                <Chat.Messages autoScroll>
                  {messages.length === 0 && !isTyping ? (
                    emptyPreviewState || (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          height: "100%",
                          color: "var(--text-tertiary)",
                        }}
                      >
                        No messages yet
                      </div>
                    )
                  ) : (
                    messages.map((message) => (
                      <Chat.Message
                        key={message.id}
                        role={message.role}
                        content={message.content}
                        status={message.status}
                        attachments={message.attachments}
                        isStreaming={message.isStreaming}
                      />
                    ))
                  )}
                  {isTyping && <Chat.TypingIndicator />}
                </Chat.Messages>

                <Chat.Input
                  onSend={onSendMessage}
                  isLoading={isLoading}
                  placeholder={
                    chatInputConfig?.placeholder ||
                    "Type your message here..."
                  }
                  allowAttachments={chatInputConfig?.allowAttachments ?? true}
                  allowVoiceRecording={
                    chatInputConfig?.allowVoiceRecording ?? false
                  }
                />
              </Chat>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

AgentEditor.displayName = "AgentEditor";
