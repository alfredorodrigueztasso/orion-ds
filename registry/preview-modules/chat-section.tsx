/**
 * Preview module for Chat section
 * Pre-built chat interface with sidebar for conversation history
 */

import React, { useState } from 'react';
import { ChatSection } from '@orion-ds/blocks';
import type { ChatMessage, ChatConversation } from '@orion-ds/blocks';
import { Bot, Settings } from 'lucide-react';

const sampleConversations: ChatConversation[] = [
  {
    id: '1',
    title: 'Project Planning',
    preview: 'Can you help me create a timeline?',
    updatedAt: new Date(Date.now() - 1000 * 60 * 5),
    messageCount: 12,
  },
  {
    id: '2',
    title: 'Code Review',
    preview: 'Review this React component',
    updatedAt: new Date(Date.now() - 1000 * 60 * 60),
    messageCount: 8,
  },
  {
    id: '3',
    title: 'Design System Questions',
    preview: 'What tokens should I use?',
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 24),
    messageCount: 15,
  },
];

const sampleMessages: ChatMessage[] = [
  {
    id: '1',
    role: 'user',
    content: 'Can you help me build a timeline for launching our new product?',
    timestamp: new Date(Date.now() - 1000 * 60 * 10),
    status: 'sent',
  },
  {
    id: '2',
    role: 'assistant',
    content:
      "I'd be happy to help you create a product launch timeline! Let's start by breaking this down into key phases:\n\n**Pre-Launch Phase (Weeks 1-4)**\n- Market research and competitive analysis\n- Feature finalization and MVP definition\n- Design and UX testing\n\n**Development Phase (Weeks 5-12)**\n- Core feature development\n- Internal testing and QA\n- Beta testing with select users\n\n**Launch Phase (Weeks 13-14)**\n- Marketing campaign activation\n- Public release\n- Monitoring and support\n\nWhat's your target launch date?",
    timestamp: new Date(Date.now() - 1000 * 60 * 9),
    status: 'sent',
  },
  {
    id: '3',
    role: 'user',
    content: "We're targeting Q3 2025. Can you make this more specific?",
    timestamp: new Date(Date.now() - 1000 * 60 * 8),
    status: 'sent',
  },
];

export const previews = [
  {
    title: 'Basic Chat Section',
    render: () => {
      const [messages, setMessages] = useState<ChatMessage[]>(sampleMessages);
      const [isTyping, setIsTyping] = useState(false);

      const handleSend = (message: string) => {
        const newMessage: ChatMessage = {
          id: String(Date.now()),
          role: 'user',
          content: message,
          timestamp: new Date(),
          status: 'sent',
        };
        setMessages([...messages, newMessage]);

        setIsTyping(true);
        setTimeout(() => {
          const aiMessage: ChatMessage = {
            id: String(Date.now() + 1),
            role: 'assistant',
            content: 'Thanks for your message! I would respond thoughtfully here.',
            timestamp: new Date(),
            status: 'sent',
          };
          setMessages((prev) => [...prev, aiMessage]);
          setIsTyping(false);
        }, 2000);
      };

      return (
        <div style={{ height: '600px' }}>
          <ChatSection
            conversations={sampleConversations}
            activeConversationId="1"
            messages={messages}
            onSendMessage={handleSend}
            isTyping={isTyping}
          />
        </div>
      );
    },
  },
  {
    title: 'With Custom Header',
    render: () => {
      const [messages] = useState<ChatMessage[]>(sampleMessages);

      return (
        <div style={{ height: '600px' }}>
          <ChatSection
            conversations={sampleConversations}
            activeConversationId="1"
            messages={messages}
            onSendMessage={() => {}}
            header={{
              title: 'Product Launch Assistant',
              subtitle: 'AI-powered planning and strategy',
              avatar: (
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'var(--interactive-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Bot size={20} color="white" />
                </div>
              ),
              actions: (
                <button
                  style={{
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '8px',
                  }}
                >
                  <Settings size={20} />
                </button>
              ),
            }}
          />
        </div>
      );
    },
  },
  {
    title: 'Without Sidebar',
    render: () => {
      const [messages] = useState<ChatMessage[]>(sampleMessages);

      return (
        <div style={{ height: '600px' }}>
          <ChatSection
            messages={messages}
            onSendMessage={() => {}}
            hideSidebar
            header={{
              title: 'AI Assistant',
              subtitle: 'How can I help you today?',
            }}
          />
        </div>
      );
    },
  },
  {
    title: 'Empty State',
    render: () => (
      <div style={{ height: '600px' }}>
        <ChatSection
          conversations={sampleConversations}
          activeConversationId="1"
          messages={[]}
          onSendMessage={() => {}}
          inputConfig={{
            placeholder: 'Ask me anything...',
            allowAttachments: true,
            allowVoiceRecording: true,
          }}
        />
      </div>
    ),
  },
  {
    title: 'Streaming Response',
    render: () => {
      const streamingMessages: ChatMessage[] = [
        {
          id: '1',
          role: 'user',
          content: 'What are the benefits of using a design system?',
          timestamp: new Date(Date.now() - 1000 * 60 * 5),
          status: 'sent',
        },
        {
          id: '2',
          role: 'assistant',
          content:
            'Design systems offer several key benefits for modern product teams:\n\n1. **Consistency** - Ensures a unified look and feel across all products\n2. **Efficiency** - Reduces time spent on repetitive design decisions\n3. **Scalability** - Makes it easier to grow and maintain large products',
          timestamp: new Date(Date.now() - 1000 * 60 * 4),
          status: 'streaming',
          isStreaming: true,
        },
      ];

      return (
        <div style={{ height: '600px' }}>
          <ChatSection
            conversations={sampleConversations}
            activeConversationId="1"
            messages={streamingMessages}
            onSendMessage={() => {}}
            hideSidebar
          />
        </div>
      );
    },
  },
];

export default previews;
