/**
 * Preview module for Chat component
 * AI chat interface with compound components
 */

import React, { useState } from 'react';
import { Chat, Button } from '@orion-ds/react';
import { Send, Paperclip, Mic } from 'lucide-react';

export const previews = [
  {
    title: 'Basic Chat Interface',
    render: () => {
      const [messages, setMessages] = useState([
        {
          id: '1',
          role: 'assistant' as const,
          content: 'Hello! How can I help you today?',
          timestamp: new Date(Date.now() - 60000),
        },
        {
          id: '2',
          role: 'user' as const,
          content: 'Can you explain what Orion Design System is?',
          timestamp: new Date(Date.now() - 30000),
        },
        {
          id: '3',
          role: 'assistant' as const,
          content: 'Orion is an AI-first design system built on the "Chain of Truth" principle. It provides token-governed components that eliminate UI hallucination.',
          timestamp: new Date(),
        },
      ]);

      const handleSend = (content: string) => {
        const newMessage = {
          id: Date.now().toString(),
          role: 'user' as const,
          content,
          timestamp: new Date(),
        };
        setMessages([...messages, newMessage]);
      };

      return (
        <div style={{ height: '500px', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-control)' }}>
          <Chat>
            <Chat.Header title="AI Assistant" subtitle="Always here to help" />
            <Chat.Messages>
              {messages.map((msg) => (
                <Chat.Message
                  key={msg.id}
                  role={msg.role}
                  content={msg.content}
                  timestamp={msg.timestamp}
                />
              ))}
            </Chat.Messages>
            <Chat.Input onSend={handleSend} placeholder="Type your message..." />
          </Chat>
        </div>
      );
    },
  },
  {
    title: 'With Typing Indicator',
    render: () => {
      const [messages] = useState([
        {
          id: '1',
          role: 'user' as const,
          content: 'What are semantic tokens?',
          timestamp: new Date(Date.now() - 10000),
        },
      ]);

      return (
        <div style={{ height: '400px', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-control)' }}>
          <Chat>
            <Chat.Header title="Support Agent" />
            <Chat.Messages>
              {messages.map((msg) => (
                <Chat.Message
                  key={msg.id}
                  role={msg.role}
                  content={msg.content}
                  timestamp={msg.timestamp}
                />
              ))}
              <Chat.TypingIndicator />
            </Chat.Messages>
            <Chat.Input onSend={() => {}} placeholder="Type your message..." />
          </Chat>
        </div>
      );
    },
  },
  {
    title: 'Code & Markdown Support',
    render: () => {
      const [messages] = useState([
        {
          id: '1',
          role: 'user' as const,
          content: 'How do I create a button?',
          timestamp: new Date(Date.now() - 60000),
        },
        {
          id: '2',
          role: 'assistant' as const,
          content: "Here's how to create a button:\n\n```tsx\nimport { Button } from '@orion-ds/react';\n\n<Button variant=\"primary\">Click me</Button>\n```\n\nYou can use variants like **primary**, **secondary**, or **ghost**.",
          timestamp: new Date(),
        },
      ]);

      return (
        <div style={{ height: '450px', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-control)' }}>
          <Chat>
            <Chat.Header title="Code Assistant" subtitle="React Expert" />
            <Chat.Messages>
              {messages.map((msg) => (
                <Chat.Message
                  key={msg.id}
                  role={msg.role}
                  content={msg.content}
                  timestamp={msg.timestamp}
                />
              ))}
            </Chat.Messages>
            <Chat.Input onSend={() => {}} placeholder="Ask about code..." />
          </Chat>
        </div>
      );
    },
  },
];

export default previews;
