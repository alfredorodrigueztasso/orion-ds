import type { HTMLAttributes, ReactNode } from "react";
import type { NavbarConfig } from "../AgentWorkspace";
import type { NavTreeSection } from "@orion-ds/react";
import type { ChatMessage } from "@orion-ds/react";

/**
 * Individual editor tab configuration
 */
export interface AgentEditorTab {
  /**
   * Unique tab identifier
   */
  id: string;

  /**
   * Tab label displayed in the tab bar
   */
  label: string;

  /**
   * Optional icon for the tab
   */
  icon?: ReactNode;

  /**
   * Editor content (controlled)
   */
  value?: string;

  /**
   * Callback when editor content changes
   */
  onChange?: (value: string) => void;

  /**
   * Whether this tab's editor is read-only
   * @default false
   */
  readOnly?: boolean;

  /**
   * Language type for the code editor
   */
  language?: string;

  /**
   * Placeholder text for the editor
   */
  placeholder?: string;

  /**
   * Custom editor render prop (e.g., Monaco, CodeMirror)
   * Enables full dirty tracking (Save/Cancel buttons) for custom editors
   * If not provided, uses CodeEditor component
   */
  editorSlot?: (value: string, onChange: (value: string) => void) => ReactNode;

  /**
   * Callback when user saves changes in a tab
   */
  onSave?: (value: string) => void;

  /**
   * Callback when user cancels changes in a tab
   */
  onCancel?: () => void;
}

/**
 * AgentEditor Props
 * A split-panel template for editing agent system prompts with live chat preview
 * Can use pre-built navSections OR folders/looseAgents/helpCenters (like AgentWorkspace)
 */
export interface AgentEditorProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Workspace navbar configuration (switcher + user menu)
   */
  navbar?: NavbarConfig;

  /**
   * Pre-built NavTree sections (alternative to folders/looseAgents/helpCenters)
   */
  navSections?: NavTreeSection[];

  /**
   * Folders with agents (builds navSections internally, like AgentWorkspace)
   * If provided along with navSections, navSections takes precedence
   */
  folders?: any[];

  /**
   * Loose agents not in folders (builds navSections internally)
   */
  looseAgents?: any[];

  /**
   * Help centers (builds navSections internally)
   */
  helpCenters?: any[];

  /**
   * Currently active nav node ID (e.g., "{agentId}-edit")
   */
  activeNavNodeId?: string;

  /**
   * Callback when nav node is clicked
   */
  onNavNodeClick?: (nodeId: string) => void;

  /**
   * Width of the NavTree sidebar
   * @default 260
   */
  sidebarWidth?: number;

  // In-content header

  /**
   * Title displayed in the editor header
   * @default "Editor"
   */
  title?: string;

  /**
   * Model options for the model selector
   */
  modelOptions?: Array<{ value: string; label: string }>;

  /**
   * Currently selected model
   */
  selectedModel?: string;

  /**
   * Callback when model selection changes
   */
  onModelChange?: (model: string) => void;

  /**
   * Callback for "Nueva conversación" button
   */
  onNewConversation?: () => void;

  // Editor panel

  /**
   * Editor tabs (default: Comportamiento, Memoria, General)
   */
  tabs?: AgentEditorTab[];

  /**
   * Currently active tab ID (controlled)
   */
  activeTab?: string;

  /**
   * Callback when active tab changes
   */
  onTabChange?: (tabId: string) => void;

  /**
   * Callback when user saves changes in a tab
   */
  onSave?: (tabId: string, value: string) => void;

  /**
   * Callback when user cancels changes in a tab
   */
  onCancel?: (tabId: string) => void;

  /**
   * Width of the left editor panel
   * @default "60%"
   */
  leftPanelWidth?: string;

  // Chat preview

  /**
   * Title for the preview panel
   * @default "Vista previa"
   */
  previewTitle?: string;

  /**
   * Chat messages to display
   */
  messages?: ChatMessage[];

  /**
   * Callback when user sends a message
   */
  onSendMessage?: (message: string, attachments?: File[]) => void;

  /**
   * Whether the chat is currently typing
   */
  isTyping?: boolean;

  /**
   * Whether the chat is loading
   */
  isLoading?: boolean;

  /**
   * Chat input configuration
   */
  chatInputConfig?: {
    placeholder?: string;
    allowAttachments?: boolean;
    allowVoiceRecording?: boolean;
  };

  /**
   * Custom empty preview state
   */
  emptyPreviewState?: ReactNode;
}
