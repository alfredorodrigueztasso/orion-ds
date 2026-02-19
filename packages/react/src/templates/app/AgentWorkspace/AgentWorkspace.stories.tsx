/**
 * AgentWorkspace Stories
 *
 * Storybook stories for the Agent Workspace template.
 */

import type { Meta, StoryObj } from "@storybook/react";
import { AgentWorkspace } from "./AgentWorkspace";
import { EmptyState as EmptyStateComponent } from "../../../sections/EmptyState";
import { Button } from "../../../components/Button";
import type { AgentFolderProps } from "../../../sections/AgentFolder";
import { Bot, Star, Sparkles, Zap, Building2 } from "lucide-react";

const meta: Meta<typeof AgentWorkspace> = {
  title: "Templates/ChatBuilder/AgentWorkspace",
  component: AgentWorkspace,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AgentWorkspace>;

// Sample folders data
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
        status: "published",
      },
      {
        id: "agent-2",
        avatar: (
          <Star
            size={32}
            fill="var(--status-warning)"
            color="var(--status-warning)"
          />
        ),
        title: "Premium Support",
        description: "Premium customer support agent",
        timestamp: "Hace 5 horas",
        status: "published",
      },
    ],
    defaultExpanded: true,
    sortOptions: [
      { label: "Más reciente", value: "recent" },
      { label: "Alfabético", value: "alpha" },
    ],
    selectedSort: "recent",
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
        description: "Helps students navigate online campus",
        timestamp: "Hace 1 día",
        status: "published",
      },
      {
        id: "agent-4",
        avatar: <Bot size={32} />,
        title: "Student Support",
        description: "Answers common student questions",
        timestamp: "Hace 3 días",
        status: "draft",
      },
      {
        id: "agent-5",
        avatar: <Sparkles size={32} />,
        title: "Research Helper",
        description: "Assists with academic research",
        timestamp: "Hace 1 semana",
        status: "published",
      },
      {
        id: "agent-6",
        avatar: <Zap size={32} />,
        title: "Quick FAQ Bot",
        description: "Fast answers to frequently asked questions",
        timestamp: "Hace 2 semanas",
        status: "published",
      },
    ],
    defaultExpanded: true,
    sortOptions: [
      { label: "Más reciente", value: "recent" },
      { label: "Alfabético", value: "alpha" },
    ],
    selectedSort: "recent",
  },
  {
    id: "folder-3",
    title: "Archived Agents",
    agentCount: 1,
    agents: [
      {
        id: "agent-7",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=old",
        title: "Legacy Bot",
        description: "Old version, no longer in use",
        timestamp: "Archivado hace 3 meses",
        status: "archived",
      },
    ],
    defaultExpanded: false,
  },
];

// Loose agents sample data
const sampleLooseAgents = [
  {
    id: "agent-loose-1",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=loose1",
    title: "General Purpose Bot",
    description: "Unassigned agent available for any task",
    timestamp: "Hace 6 horas",
    status: "published" as const,
  },
];

// Default template - shows complete workspace with folders and loose agents
export const Default: Story = {
  args: {
    navbar: {
      logo: <Building2 size={24} />,
      workspaceName: "Universidad Virtual de México",
      workspaces: [
        { id: "uvm", name: "Universidad Virtual de México" },
        { id: "campus", name: "Campus Online" },
        { id: "postgrado", name: "Postgrado" },
        { id: "research", name: "Research Team" },
      ],
      onWorkspaceChange: (id) => console.log("Workspace changed:", id),
      userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
      userName: "John Doe",
      onUserMenuClick: () => console.log("User menu clicked"),
    },
    pageHeader: {
      title: "Agentes IA",
      icon: <Sparkles size={28} />,
    },
    folders: sampleFolders.map((folder) => ({
      ...folder,
      agents: folder.agents.map((agent) => ({
        ...agent,
        draggable: true,
        onClick: () => console.log("Agent clicked:", agent.id),
        onEdit: () => console.log("Edit agent:", agent.id),
        onDelete: () => console.log("Delete agent:", agent.id),
      })),
      onDrop: (agentId, folderId) =>
        console.log("Agent", agentId, "dropped into folder", folderId),
      onSortChange: (value) =>
        console.log("Sort changed in folder", folder.id, ":", value),
      onFolderEdit: () => console.log("Rename folder:", folder.id),
      onFolderDelete: () => console.log("Delete folder:", folder.id),
      onFolderInvite: () => console.log("Invite to folder:", folder.id),
    })),
    looseAgents: sampleLooseAgents,
    onCreateFolder: () => console.log("Create folder"),
    onCreateAgent: () => console.log("Create agent"),
    onInviteParticipants: () => console.log("Invite participants"),
    onSettings: () => console.log("Settings"),
    enableDragDrop: true,
  },
};

// Empty state - shows complete template structure without folders
export const NoAgents: Story = {
  name: "EmptyState",
  args: {
    navbar: {
      logo: <Building2 size={24} />,
      workspaceName: "Universidad Virtual de México",
      workspaces: [
        { id: "uvm", name: "Universidad Virtual de México" },
        { id: "campus", name: "Campus Online" },
      ],
      onWorkspaceChange: (id) => console.log("Workspace changed:", id),
      userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=empty",
      userName: "Jane Doe",
      onUserMenuClick: () => console.log("User menu clicked"),
    },
    pageHeader: {
      title: "Agentes IA",
      icon: <Sparkles size={28} />,
    },
    folders: [],
    looseAgents: [],
    onCreateFolder: () => console.log("Create folder"),
    onCreateAgent: () => console.log("Create agent"),
    emptyState: (
      <EmptyStateComponent
        icon={<Bot size={48} />}
        title="Aún no tienes agentes"
        description="Crea tu primer agente de IA para empezar a automatizar tareas."
        action={<Button variant="primary">Nuevo agente</Button>}
      />
    ),
  },
};

// Without drag & drop
export const NoDragDrop: Story = {
  args: {
    pageHeader: {
      title: "Agentes IA",
      icon: <Sparkles size={28} />,
    },
    folders: sampleFolders.map((folder) => ({
      ...folder,
      agents: folder.agents.map((agent) => ({
        ...agent,
        onClick: () => console.log("Agent clicked:", agent.id),
        onEdit: () => console.log("Edit agent:", agent.id),
        onDelete: () => console.log("Delete agent:", agent.id),
      })),
      onFolderEdit: () => console.log("Rename folder:", folder.id),
      onFolderDelete: () => console.log("Delete folder:", folder.id),
      onFolderInvite: () => console.log("Invite to folder:", folder.id),
    })),
    looseAgents: sampleLooseAgents,
    enableDragDrop: false,
    onCreateFolder: () => console.log("Create folder"),
    onCreateAgent: () => console.log("Create agent"),
  },
};

// With interactive agents (edit/delete actions)
export const InteractiveAgents: Story = {
  args: {
    pageHeader: {
      title: "Agentes IA",
      icon: <Sparkles size={28} />,
    },
    folders: sampleFolders.map((folder) => ({
      ...folder,
      agents: folder.agents.map((agent) => ({
        ...agent,
        onClick: () => console.log("Agent clicked:", agent.id),
        onEdit: () => console.log("Edit agent:", agent.id),
        onDelete: () => console.log("Delete agent:", agent.id),
      })),
      onFolderEdit: () => console.log("Rename folder:", folder.id),
      onFolderDelete: () => console.log("Delete folder:", folder.id),
      onFolderInvite: () => console.log("Invite to folder:", folder.id),
    })),
    looseAgents: sampleLooseAgents.map((agent) => ({
      ...agent,
      onClick: () => console.log("Agent clicked:", agent.id),
      onEdit: () => console.log("Edit agent:", agent.id),
      onDelete: () => console.log("Delete agent:", agent.id),
    })),
    onCreateFolder: () => console.log("Create folder"),
    onCreateAgent: () => console.log("Create agent"),
  },
};

// Full featured (navbar + all interactions + drag & drop + loose agents)
export const FullFeatured: Story = {
  args: {
    navbar: {
      logo: <Building2 size={24} />,
      workspaceName: "Universidad Virtual de México",
      workspaces: [
        { id: "uvm", name: "Universidad Virtual de México" },
        { id: "campus", name: "Campus Online" },
        { id: "postgrado", name: "Postgrado" },
        { id: "research", name: "Research Team" },
      ],
      onWorkspaceChange: (id) => console.log("Workspace changed:", id),
      userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
      userName: "John Doe",
      onUserMenuClick: () => console.log("User menu clicked"),
    },
    pageHeader: {
      title: "Agentes IA",
      icon: <Sparkles size={28} />,
    },
    folders: sampleFolders.map((folder) => ({
      ...folder,
      agents: folder.agents.map((agent) => ({
        ...agent,
        draggable: true,
        onClick: () => console.log("Agent clicked:", agent.id),
        onEdit: () => console.log("Edit agent:", agent.id),
        onDelete: () => console.log("Delete agent:", agent.id),
      })),
      onDrop: (agentId, folderId) =>
        console.log("Agent", agentId, "dropped into folder", folderId),
      onSortChange: (value) =>
        console.log("Sort changed in folder", folder.id, ":", value),
      onFolderEdit: () => console.log("Rename folder:", folder.id),
      onFolderDelete: () => console.log("Delete folder:", folder.id),
      onFolderInvite: () => console.log("Invite to folder:", folder.id),
    })),
    looseAgents: sampleLooseAgents.map((agent) => ({
      ...agent,
      draggable: true,
      onClick: () => console.log("Agent clicked:", agent.id),
      onEdit: () => console.log("Edit agent:", agent.id),
      onDelete: () => console.log("Delete agent:", agent.id),
    })),
    onCreateFolder: () => console.log("Create folder"),
    onCreateAgent: () => console.log("Create agent"),
    onInviteParticipants: () => console.log("Invite participants"),
    onSettings: () => console.log("Settings"),
    enableDragDrop: true,
  },
};

// Mobile view (responsive testing)
export const Mobile: Story = {
  args: {
    navbar: {
      logo: <Building2 size={24} />,
      userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mobile",
    },
    pageHeader: {
      title: "Agentes IA",
      icon: <Sparkles size={28} />,
    },
    folders: sampleFolders.slice(0, 2), // Show fewer folders for mobile
    looseAgents: sampleLooseAgents,
    onCreateFolder: () => console.log("Create folder"),
    onCreateAgent: () => console.log("Create agent"),
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};
