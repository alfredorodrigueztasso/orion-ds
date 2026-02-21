/**
 * Preview module for AgentFolder section
 * Collapsible folder section for organizing AI agents in a grid layout
 */

import React from 'react';
import { AgentFolder } from '@orion-ds/react';
import { Bot, Sparkles, Zap, MessageSquare, TrendingUp } from 'lucide-react';

export const previews = [
  {
    title: 'Basic Folder',
    render: () => (
      <AgentFolder
        id="folder-1"
        title="Marketing Agents"
        agentCount={3}
        agents={[
          {
            id: 'agent-1',
            avatar: <Bot size={32} />,
            title: 'Content Generator',
            description: 'Creates blog posts, social media content, and marketing copy in your brand voice.',
            timestamp: 'Updated 2 hours ago',
            status: 'published' as const,
          },
          {
            id: 'agent-2',
            avatar: <Sparkles size={32} />,
            title: 'Email Marketing Agent',
            description: 'Automates email campaigns with personalized content and optimal send times.',
            timestamp: 'Updated today',
            status: 'published' as const,
          },
          {
            id: 'agent-3',
            avatar: <TrendingUp size={32} />,
            title: 'SEO Optimizer',
            description: 'Optimizes content for search engines and tracks keyword performance metrics.',
            timestamp: 'Updated yesterday',
            status: 'draft' as const,
          },
        ]}
        defaultExpanded={true}
      />
    ),
  },
  {
    title: 'With Sort Options',
    render: () => (
      <AgentFolder
        id="folder-2"
        title="Customer Support Agents"
        agentCount={4}
        agents={[
          {
            id: 'agent-4',
            avatar: 'https://i.pravatar.cc/150?img=1',
            title: 'General Support Agent',
            description: 'AI-powered assistant that helps customers with their questions and provides instant support 24/7.',
            timestamp: 'Updated 1 hour ago',
            status: 'published' as const,
          },
          {
            id: 'agent-5',
            avatar: 'https://i.pravatar.cc/150?img=2',
            title: 'Technical Support Agent',
            description: 'Handles technical issues and troubleshooting with detailed step-by-step solutions.',
            timestamp: 'Updated 3 hours ago',
            status: 'published' as const,
          },
          {
            id: 'agent-6',
            avatar: <MessageSquare size={32} />,
            title: 'Billing Support Agent',
            description: 'Assists with billing inquiries, payment issues, and subscription management.',
            timestamp: 'Updated today',
            status: 'published' as const,
          },
          {
            id: 'agent-7',
            avatar: <Zap size={32} />,
            title: 'Onboarding Agent',
            description: 'Guides new users through the product setup and initial configuration process.',
            timestamp: 'Updated yesterday',
            status: 'draft' as const,
          },
        ]}
        defaultExpanded={true}
        sortOptions={[
          { label: 'Most Recent', value: 'recent' },
          { label: 'Alphabetical', value: 'alpha' },
          { label: 'Status', value: 'status' },
        ]}
        selectedSort="recent"
        onSortChange={(value) => console.log('Sort changed:', value)}
      />
    ),
  },
  {
    title: 'With Folder Actions',
    render: () => (
      <AgentFolder
        id="folder-3"
        title="Sales Agents"
        agentCount={2}
        agents={[
          {
            id: 'agent-8',
            avatar: 'https://i.pravatar.cc/150?img=5',
            title: 'Lead Qualifier',
            description: 'Qualifies leads and schedules demos automatically with intelligent conversation flows.',
            timestamp: 'Updated 2 hours ago',
            status: 'published' as const,
          },
          {
            id: 'agent-9',
            avatar: 'https://i.pravatar.cc/150?img=6',
            title: 'Follow-up Agent',
            description: 'Sends personalized follow-up messages to prospects based on their engagement level.',
            timestamp: 'Updated today',
            status: 'published' as const,
          },
        ]}
        defaultExpanded={true}
        sortOptions={[
          { label: 'Most Recent', value: 'recent' },
          { label: 'Alphabetical', value: 'alpha' },
        ]}
        selectedSort="recent"
        onSortChange={(value) => console.log('Sort changed:', value)}
        onFolderEdit={() => console.log('Edit folder')}
        onFolderDelete={() => console.log('Delete folder')}
      />
    ),
  },
  {
    title: 'Empty Folder',
    render: () => (
      <AgentFolder
        id="folder-4"
        title="Research Agents"
        agentCount={0}
        agents={[]}
        defaultExpanded={true}
        onFolderEdit={() => console.log('Edit folder')}
        onFolderDelete={() => console.log('Delete folder')}
      />
    ),
  },
  {
    title: 'Multiple Folders',
    render: () => (
      <div style={{ display: 'grid', gap: 'var(--spacing-6)' }}>
        <AgentFolder
          id="folder-5"
          title="Product Development"
          agentCount={2}
          agents={[
            {
              id: 'agent-10',
              avatar: <Bot size={32} />,
              title: 'Code Reviewer',
              description: 'Reviews pull requests and suggests improvements to code quality and style.',
              timestamp: 'Active',
              status: 'published' as const,
            },
            {
              id: 'agent-11',
              avatar: <Sparkles size={32} />,
              title: 'Documentation Generator',
              description: 'Automatically generates API documentation from code comments and type definitions.',
              timestamp: 'Active',
              status: 'published' as const,
            },
          ]}
          defaultExpanded={false}
        />
        <AgentFolder
          id="folder-6"
          title="Data & Analytics"
          agentCount={1}
          agents={[
            {
              id: 'agent-12',
              avatar: <TrendingUp size={32} />,
              title: 'Analytics Agent',
              description: 'Analyzes data and generates insights from your business metrics automatically.',
              timestamp: 'Active',
              status: 'published' as const,
            },
          ]}
          defaultExpanded={false}
        />
      </div>
    ),
  },
];

export default previews;
