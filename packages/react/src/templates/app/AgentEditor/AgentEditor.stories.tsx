import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { AgentEditor } from "./AgentEditor";
import {
  Building2,
  Edit2,
  BarChart3,
  MessageSquare,
  Database,
  Plug,
  Megaphone,
  Settings,
  Users2,
  Star,
  Sparkles,
  Zap,
  Bot,
} from "lucide-react";
import type { AgentFolderProps } from "../../../sections/AgentFolder";
import type { NavTreeSection, NavTreeNode } from "../../../sections/NavTree";

const meta: Meta<typeof AgentEditor> = {
  title: "Templates/ChatBuilder/AgentEditor",
  component: AgentEditor,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// === IDENTICAL DATA TO AgentWorkspace ===
const sampleFolders: AgentFolderProps[] = [
  {
    id: "folder-1",
    title: "Agentes postgrado",
    agentCount: 2,
    agents: [
      {
        id: "agent-1",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=uvm",
        title: "UVM Agent",
        description: "Agent for Universidad Virtual de México",
        timestamp: "Hace 2 horas",
      },
      {
        id: "agent-2",
        avatar: (
          <Star size={32} fill="var(--status-warning)" color="var(--status-warning)" />
        ),
        title: "Premium Support",
        description: "Coordinates intake, resolution and follow-up across multiple specialized support agents",
        timestamp: "Hace 5 horas",
        isMultiAgent: true,
      },
    ],
    defaultExpanded: true,
  },
  {
    id: "folder-2",
    title: "Multi agente campus Online",
    agentCount: 4,
    agents: [
      {
        id: "agent-3",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=campus1",
        title: "Campus Assistant",
        description: "Orchestrates enrollment, schedule and campus services agents to guide students end to end",
        timestamp: "Hace 1 día",
        isMultiAgent: true,
      },
      {
        id: "agent-4",
        avatar: <Bot size={32} />,
        title: "Student Support",
        description: "Answers common student questions",
        timestamp: "Hace 3 días",
      },
      {
        id: "agent-5",
        avatar: <Sparkles size={32} />,
        title: "Research Helper",
        description: "Delegates tasks to search, synthesis and citation agents for comprehensive academic research",
        timestamp: "Hace 1 semana",
        isMultiAgent: true,
      },
      {
        id: "agent-6",
        avatar: <Zap size={32} />,
        title: "Quick FAQ Bot",
        description: "Fast answers to frequently asked questions",
        timestamp: "Hace 2 semanas",
      },
    ],
    defaultExpanded: true,
  },
];

const sampleLooseAgents = [
  {
    id: "agent-loose-1",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=loose1",
    title: "Legacy Bot",
    description: "An older bot that hasn't been classified yet",
    timestamp: "Hace 3 meses",
  },
  {
    id: "agent-loose-2",
    avatar: <Bot size={32} />,
    title: "General Purpose Bot",
    description: "A general purpose bot for various tasks",
    timestamp: "Hace 1 mes",
  },
];

// Build NavTree sections from folders (IDENTICAL logic to AgentWorkspace)
function buildNavTreeSections(folders: AgentFolderProps[], looseAgents: any[], helpCenters: any[]): NavTreeSection[] {
  const agentSubPages = (agentId: string): NavTreeNode[] => [
    { id: `${agentId}-edit`, type: "page", label: "Editar", icon: <Edit2 size={14} /> },
    { id: `${agentId}-metrics`, type: "page", label: "Métricas", icon: <BarChart3 size={14} /> },
    { id: `${agentId}-conversations`, type: "page", label: "Conversaciones", icon: <MessageSquare size={14} /> },
    { id: `${agentId}-datasources`, type: "page", label: "Fuentes de datos", icon: <Database size={14} /> },
    { id: `${agentId}-integrations`, type: "page", label: "Integraciones", icon: <Plug size={14} /> },
    { id: `${agentId}-campaigns`, type: "page", label: "Campañas", icon: <Megaphone size={14} /> },
    { id: `${agentId}-settings`, type: "page", label: "Configuración", icon: <Settings size={14} /> },
  ];

  const sections: NavTreeSection[] = [];

  const agentNodes = [
    ...folders.map((folder) => ({
      id: folder.id,
      type: "folder" as const,
      label: folder.title,
      icon: null as any,
      children: folder.agents.map((agent) => ({
        id: agent.id,
        type: "folder" as const,
        label: agent.title || "Agente sin nombre",
        icon: <Bot size={16} />,
        children: agentSubPages(agent.id),
      })),
    })),
    ...(looseAgents ?? []).map((agent) => ({
      id: agent.id,
      type: "folder" as const,
      label: agent.title || "Agente sin nombre",
      icon: <Bot size={14} />,
      children: agentSubPages(agent.id),
    })),
  ];

  const agentsBadge = folders.reduce((acc, f) => acc + (f.agents?.length ?? 0), 0) + (looseAgents?.length ?? 0);

  sections.push({
    id: "agents",
    title: "Agentes IA",
    icon: <Sparkles size={16} />,
    badge: agentsBadge,
    nodes: agentNodes,
    defaultExpanded: true,
  });

  if (helpCenters && helpCenters.length > 0) {
    sections.push({
      id: "help-centers",
      title: "Centro de Ayuda",
      icon: null as any,
      badge: helpCenters.length,
      nodes: helpCenters.map((hc: any) => ({
        id: hc.id,
        type: "page" as const,
        label: hc.name,
        icon: null as any,
      })),
    });
  }

  sections.push({
    id: "community",
    title: "Comunidad",
    icon: <Users2 size={16} />,
    badge: 3,
    nodes: [
      { id: "community-contacts", type: "page" as const, label: "Contactos", icon: <Users2 size={14} /> },
      { id: "community-conversations", type: "page" as const, label: "Conversaciones", icon: <MessageSquare size={14} /> },
      { id: "community-segments", type: "page" as const, label: "Segmentos", icon: null as any },
    ],
  });

  return sections;
}

// === IDENTICAL navbar to AgentWorkspace Default story ===
function DefaultWrapper() {
  const [messages] = useState([
    {
      id: "1",
      role: "user" as const,
      content: "¿Hola, cómo estás?",
      status: "sent" as const,
    },
    {
      id: "2",
      role: "assistant" as const,
      content: "¡Hola! Estoy bien, gracias por preguntar. ¿Cómo puedo ayudarte hoy?",
      status: "sent" as const,
    },
  ]);

  const navSections = buildNavTreeSections(sampleFolders, sampleLooseAgents, [
    { id: "hc-1", name: "Centro UVM" },
    { id: "hc-2", name: "Centro Campus Online" },
  ]);

  return (
    <AgentEditor
      navbar={{
        logo: <Building2 size={24} />,
        workspaceName: "Universidad Virtual de México",
        workspaceIcon: <Building2 size={20} />,
        activeWorkspaceId: "uvm",
        workspaceRole: "Propietario",
        workspaceParticipantCount: 32,
        workspaces: [
          { id: "uvm", name: "Universidad Virtual de México", initials: "UVM", role: "Propietario" },
          { id: "campus", name: "Campus Online", initials: "CO", role: "Propietario" },
          { id: "postgrado", name: "Postgrado", initials: "PG", role: "Editor" },
        ],
        userName: "John Doe",
        userEmail: "john@example.com",
        userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
        onUserMenuClick: () => console.log("User menu"),
      }}
      navSections={navSections}
      activeNavNodeId="agent-1-edit"
      onNavNodeClick={(nodeId) => console.log("Nav click:", nodeId)}
      title="Editor"
      modelOptions={[
        { value: "gpt-4", label: "GPT-4" },
        { value: "gpt-3.5", label: "GPT-3.5 Turbo" },
        { value: "claude-3", label: "Claude 3" },
      ]}
      selectedModel="gpt-4"
      onModelChange={(model) => console.log("Model:", model)}
      onNewConversation={() => console.log("New conversation")}
      messages={messages}
      onSendMessage={(msg) => console.log("Message:", msg)}
      previewTitle="Vista previa"
    />
  );
}

/**
 * Default - Visually identical family to AgentWorkspace
 * Same navbar, same NavTree sections, same styling
 * Shows split editor (Comportamiento tab) + live chat preview
 */
export const Default: Story = {
  render: () => <DefaultWrapper />,
};

/**
 * Empty - No messages
 */
export const Empty: Story = {
  render: () => {
    const navSections = buildNavTreeSections(sampleFolders, sampleLooseAgents, []);
    return (
      <AgentEditor
        navbar={{
          logo: <Building2 size={24} />,
          workspaceName: "Universidad Virtual de México",
          workspaces: [{ id: "uvm", name: "UVM", initials: "UVM" }],
          userName: "John Doe",
          userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
        }}
        navSections={navSections}
        activeNavNodeId="agent-1-edit"
        title="Editor"
        messages={[]}
      />
    );
  },
};

/**
 * With Typing Indicator
 */
export const WithTypingIndicator: Story = {
  render: () => {
    const navSections = buildNavTreeSections(sampleFolders, sampleLooseAgents, []);
    return (
      <AgentEditor
        navbar={{
          logo: <Building2 size={24} />,
          workspaceName: "Universidad Virtual de México",
          workspaces: [{ id: "uvm", name: "UVM", initials: "UVM" }],
          userName: "John Doe",
          userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
        }}
        navSections={navSections}
        activeNavNodeId="agent-1-edit"
        title="Editor"
        messages={[{ id: "1", role: "user" as const, content: "Hola", status: "sent" as const }]}
        isTyping={true}
      />
    );
  },
};
