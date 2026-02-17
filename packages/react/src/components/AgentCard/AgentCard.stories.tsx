/**
 * AgentCard Component Stories
 *
 * Storybook stories for the AgentCard component.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { AgentCard } from './AgentCard';
import { Star, Bot, Sparkles } from 'lucide-react';

const meta: Meta<typeof AgentCard> = {
  title: 'Components/AgentCard',
  component: AgentCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['draft', 'published', 'archived'],
    },
    onClick: { action: 'clicked' },
    onEdit: { action: 'edit' },
    onDelete: { action: 'delete' },
  },
};

export default meta;
type Story = StoryObj<typeof AgentCard>;

// Basic agent card with image avatar
export const Default: Story = {
  args: {
    id: 'agent-1',
    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=agent1',
    title: 'Customer Support Agent',
    description: 'Handles customer inquiries, support tickets, and common questions with intelligent responses.',
    timestamp: 'Updated 2 hours ago',
  },
};

// With status badge
export const WithStatus: Story = {
  args: {
    id: 'agent-2',
    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=agent2',
    title: 'Sales Assistant',
    description: 'Helps customers find products and complete purchases',
    timestamp: 'Updated 5 hours ago',
    status: 'published',
  },
};

// Draft status
export const DraftStatus: Story = {
  args: {
    id: 'agent-3',
    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=agent3',
    title: 'Marketing Analyst',
    description: 'Analyzes marketing campaigns and provides insights',
    timestamp: 'Created yesterday',
    status: 'draft',
  },
};

// Archived status
export const ArchivedStatus: Story = {
  args: {
    id: 'agent-4',
    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=agent4',
    title: 'Legacy Support Bot',
    description: 'Old version of customer support agent',
    timestamp: 'Archived 2 months ago',
    status: 'archived',
  },
};

// With icon avatar instead of image
export const WithIconAvatar: Story = {
  args: {
    id: 'agent-5',
    avatar: <Bot size={32} />,
    title: 'AI Assistant',
    description: 'General purpose AI assistant for various tasks',
    timestamp: 'Updated 1 hour ago',
  },
};

// With badge
export const WithBadge: Story = {
  args: {
    id: 'agent-6',
    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=agent6',
    title: 'Premium Agent',
    description: 'Advanced AI agent with premium features',
    timestamp: 'Updated today',
    badge: <Star size={16} fill="var(--status-warning)" color="var(--status-warning)" />,
    status: 'published',
  },
};

// Interactive with actions
export const WithActions: Story = {
  args: {
    id: 'agent-7',
    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=agent7',
    title: 'Editable Agent',
    description: 'This agent card has edit and delete actions visible on hover',
    timestamp: 'Updated 3 hours ago',
    onClick: () => console.log('Card clicked'),
    onEdit: () => console.log('Edit clicked'),
    onDelete: () => console.log('Delete clicked'),
  },
};

// Draggable
export const Draggable: Story = {
  args: {
    id: 'agent-8',
    avatar: <Sparkles size={32} />,
    title: 'Draggable Agent',
    description: 'This agent card can be dragged and dropped',
    timestamp: 'Updated 1 day ago',
    draggable: true,
  },
};

// Long description (ellipsis test)
export const LongDescription: Story = {
  args: {
    id: 'agent-9',
    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=agent9',
    title: 'Research Agent',
    description:
      'This is a very long description that should be truncated after two lines. It contains lots of text to demonstrate the ellipsis behavior when content exceeds the maximum allowed lines. The text should be cut off with an ellipsis (...) after the second line.',
    timestamp: 'Updated 4 hours ago',
  },
};

// Responsive grid layout example
export const GridLayout: Story = {
  render: () => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: 'var(--spacing-4)',
      width: '100%',
      maxWidth: '1200px',
    }}>
      <AgentCard
        id="grid-1"
        avatar="https://api.dicebear.com/7.x/bottts/svg?seed=grid1"
        title="Customer Support Agent"
        description="Handles customer inquiries and support tickets with intelligent responses"
        timestamp="Updated 2 hours ago"
        status="published"
        onClick={() => console.log('Agent 1 clicked')}
        onEdit={() => console.log('Edit Agent 1')}
        onDelete={() => console.log('Delete Agent 1')}
      />
      <AgentCard
        id="grid-2"
        avatar="https://api.dicebear.com/7.x/bottts/svg?seed=grid2"
        title="Sales Assistant"
        description="Helps customers find products and complete purchases"
        timestamp="Updated 5 hours ago"
        status="draft"
        onClick={() => console.log('Agent 2 clicked')}
        onEdit={() => console.log('Edit Agent 2')}
        onDelete={() => console.log('Delete Agent 2')}
      />
      <AgentCard
        id="grid-3"
        avatar="https://api.dicebear.com/7.x/bottts/svg?seed=grid3"
        title="Marketing Analyst"
        description="Analyzes marketing campaigns and provides actionable insights"
        timestamp="Updated 1 day ago"
        onClick={() => console.log('Agent 3 clicked')}
        onEdit={() => console.log('Edit Agent 3')}
        onDelete={() => console.log('Delete Agent 3')}
      />
      <AgentCard
        id="grid-4"
        avatar={<Bot size={32} />}
        title="AI Research Agent"
        description="Conducts research and synthesizes information from multiple sources"
        timestamp="Updated 3 hours ago"
        status="published"
        badge={<Star size={16} fill="var(--status-warning)" color="var(--status-warning)" />}
        onClick={() => console.log('Agent 4 clicked')}
        onEdit={() => console.log('Edit Agent 4')}
        onDelete={() => console.log('Delete Agent 4')}
      />
    </div>
  ),
};

// Responsive layout testing
export const ResponsiveLayout: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)', width: '100%' }}>
      {/* Mobile (< 640px) */}
      <div>
        <h3 style={{ fontFamily: 'var(--font-primary)', marginBottom: 'var(--spacing-3)' }}>
          Mobile (&lt; 640px)
        </h3>
        <div style={{ maxWidth: '320px' }}>
          <AgentCard
            id="mobile-1"
            avatar="https://api.dicebear.com/7.x/bottts/svg?seed=mobile1"
            title="Customer Support"
            description="Handles customer inquiries and support tickets with intelligent responses"
            timestamp="Updated 2h ago"
            status="published"
            onClick={() => console.log('Mobile card clicked')}
            onEdit={() => console.log('Edit')}
            onDelete={() => console.log('Delete')}
          />
        </div>
      </div>

      {/* Tablet (640px - 1023px) */}
      <div>
        <h3 style={{ fontFamily: 'var(--font-primary)', marginBottom: 'var(--spacing-3)' }}>
          Tablet (640px - 1023px)
        </h3>
        <div style={{ maxWidth: '768px' }}>
          <AgentCard
            id="tablet-1"
            avatar="https://api.dicebear.com/7.x/bottts/svg?seed=tablet1"
            title="Sales Assistant"
            description="Helps customers find products and complete purchases with personalized recommendations"
            timestamp="Updated 5h ago"
            status="draft"
            badge={<Sparkles size={16} />}
            onClick={() => console.log('Tablet card clicked')}
            onEdit={() => console.log('Edit')}
            onDelete={() => console.log('Delete')}
          />
        </div>
      </div>

      {/* Desktop (>= 1024px) */}
      <div>
        <h3 style={{ fontFamily: 'var(--font-primary)', marginBottom: 'var(--spacing-3)' }}>
          Desktop (&gt;= 1024px)
        </h3>
        <div style={{ maxWidth: '1200px' }}>
          <AgentCard
            id="desktop-1"
            avatar={<Bot size={32} />}
            title="Marketing Analyst Pro"
            description="Analyzes marketing campaigns, provides actionable insights, and generates detailed reports with data visualizations"
            timestamp="Updated 1 day ago"
            status="published"
            badge={<Star size={16} fill="var(--status-warning)" color="var(--status-warning)" />}
            onClick={() => console.log('Desktop card clicked')}
            onEdit={() => console.log('Edit')}
            onDelete={() => console.log('Delete')}
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// Dragging state
export const DraggingState: Story = {
  args: {
    id: 'agent-10',
    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=agent10',
    title: 'Dragging Agent',
    description: 'This card is in the dragging state',
    timestamp: 'Just now',
    draggable: true,
    isDragging: true,
  },
};
