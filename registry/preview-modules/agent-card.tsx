/**
 * Preview module for AgentCard component
 * Specialized card for AI agents
 */

import React from 'react';
import { AgentCard } from '@orion-ds/react';
import { Bot, Sparkles, Zap } from 'lucide-react';

export const previews = [
  {
    title: 'Basic Agent Card',
    render: () => (
      <div style={{ maxWidth: '400px' }}>
        <AgentCard
          id="agent-1"
          avatar="https://i.pravatar.cc/150?img=1"
          title="Customer Support Agent"
          description="AI-powered assistant that helps customers with their questions and provides instant support 24/7."
          timestamp="Updated 2 hours ago"
          onClick={() => console.log('Agent clicked')}
        />
      </div>
    ),
  },
  {
    title: 'With Status Indicators',
    render: () => (
      <div style={{ display: 'grid', gap: 'var(--spacing-4)', maxWidth: '400px' }}>
        <AgentCard
          id="agent-2"
          avatar={<Bot size={32} />}
          title="Sales Assistant"
          description="Qualified leads and schedules demos automatically with intelligent conversation flows."
          timestamp="Updated today"
        />
        <AgentCard
          id="agent-3"
          avatar={<Sparkles size={32} />}
          title="Content Generator"
          description="Creates blog posts, social media content, and marketing copy in your brand voice."
          timestamp="Draft saved 1 hour ago"
        />
        <AgentCard
          id="agent-4"
          avatar={<Zap size={32} />}
          title="Analytics Agent"
          description="Analyzes data and generates insights from your business metrics automatically."
          timestamp="Archived 1 week ago"
        />
      </div>
    ),
  },
  {
    title: 'With Actions',
    render: () => (
      <div style={{ maxWidth: '400px' }}>
        <AgentCard
          id="agent-5"
          avatar="https://i.pravatar.cc/150?img=5"
          title="Email Marketing Agent"
          description="Automates email campaigns with personalized content and optimal send times based on user behavior."
          timestamp="Updated yesterday"
          onClick={() => alert('View agent details')}
          onEdit={() => alert('Edit agent')}
          onDelete={() => confirm('Delete this agent?')}
        />
      </div>
    ),
  },
  {
    title: 'Grid Layout',
    render: () => (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 'var(--spacing-4)' }}>
        <AgentCard
          id="agent-6"
          avatar={<Bot size={32} />}
          title="HR Assistant"
          description="Answers employee questions about policies, benefits, and time-off requests."
          timestamp="Active"
        />
        <AgentCard
          id="agent-7"
          avatar={<Sparkles size={32} />}
          title="Research Agent"
          description="Gathers information from multiple sources and compiles detailed research reports."
          timestamp="Active"
        />
        <AgentCard
          id="agent-8"
          avatar={<Zap size={32} />}
          title="Code Reviewer"
          description="Reviews pull requests and suggests improvements to code quality and style."
          timestamp="Active"
        />
      </div>
    ),
  },
];

export default previews;
