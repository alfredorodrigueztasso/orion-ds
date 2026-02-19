import type { Meta, StoryObj } from "@storybook/react";
import { useState, useCallback } from "react";
import { ChatPageTemplate } from "./ChatPageTemplate";
import type { ChatMessage, ChatConversation } from "../../../components/Chat";

const meta = {
  title: "Templates/ChatBuilder/ChatPageTemplate",
  component: ChatPageTemplate,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ChatPageTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data
const sampleConversations: ChatConversation[] = [
  {
    id: "1",
    title: "React Hooks Discussion",
    preview: "Here's a simple example of useState...",
    updatedAt: new Date(Date.now() - 1000 * 60 * 2),
    messageCount: 4,
  },
  {
    id: "2",
    title: "TypeScript Generics",
    preview: "Generics allow you to write flexible...",
    updatedAt: new Date(Date.now() - 1000 * 60 * 60),
    messageCount: 8,
  },
  {
    id: "3",
    title: "CSS Grid Layout",
    preview: "Grid is perfect for 2D layouts...",
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 24),
    messageCount: 3,
  },
  {
    id: "4",
    title: "Node.js Best Practices",
    preview: "Always use async/await for cleaner...",
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 48),
    messageCount: 12,
  },
  {
    id: "5",
    title: "Database Design Patterns",
    preview: "Normalization helps reduce redundancy...",
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 72),
    messageCount: 6,
  },
  {
    id: "6",
    title: "API Design Best Practices",
    preview: "RESTful APIs should be stateless...",
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 96),
    messageCount: 9,
  },
];

const sampleMessages: ChatMessage[] = [
  {
    id: "1",
    role: "user",
    content: "Hello! Can you help me understand how React hooks work?",
    timestamp: new Date(Date.now() - 1000 * 60 * 5),
    status: "sent",
  },
  {
    id: "2",
    role: "assistant",
    content: `Of course! React hooks are functions that let you "hook into" React state and lifecycle features from function components. Here are the most commonly used hooks:

1. **useState** - Adds state to functional components
2. **useEffect** - Performs side effects (data fetching, subscriptions)
3. **useContext** - Subscribes to React context
4. **useRef** - Creates a mutable reference that persists across renders
5. **useMemo** - Memoizes expensive calculations
6. **useCallback** - Memoizes callback functions

Would you like me to explain any of these in more detail?`,
    timestamp: new Date(Date.now() - 1000 * 60 * 4),
    status: "sent",
  },
  {
    id: "3",
    role: "user",
    content: "Yes, can you show me an example of useState?",
    timestamp: new Date(Date.now() - 1000 * 60 * 3),
    status: "sent",
  },
  {
    id: "4",
    role: "assistant",
    content: `Here's a simple example of \`useState\`:

\`\`\`tsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
\`\`\`

Key points:
- \`useState(0)\` initializes state with value \`0\`
- Returns array: \`[currentValue, setterFunction]\`
- Calling \`setCount\` triggers a re-render with new value

The state persists between re-renders, unlike regular variables.`,
    timestamp: new Date(Date.now() - 1000 * 60 * 2),
    status: "sent",
  },
];

// ============================================================================
// STORIES
// ============================================================================

// Simulated assistant responses for the interactive demo
const demoResponses = [
  `That's a great question! Let me think about this carefully.

Here are the key points to consider:

1. **Understanding the fundamentals** is essential before diving into advanced topics
2. **Practice makes perfect** — try building small projects to reinforce concepts
3. **Read the documentation** — official docs are always the best reference

Would you like me to go deeper into any of these areas?`,
  `I'd be happy to help with that! Here's what I think:

The approach you're describing is actually quite common in modern development. The key insight is that **simplicity trumps complexity** in most cases.

\`\`\`typescript
// Here's a quick example
const result = data
  .filter(item => item.active)
  .map(item => item.value);
\`\`\`

This pattern is both readable and efficient. Let me know if you'd like to explore more!`,
  `Interesting question! Let me break it down:

**Short answer:** Yes, this is definitely possible and recommended.

**Longer explanation:**
When working with modern frameworks, the best practice is to keep your components small and focused. Each component should have a single responsibility.

Here are some guidelines:
- Keep components under 100 lines
- Extract reusable logic into custom hooks
- Use composition over inheritance

Does this help clarify things?`,
];

export const Default: Story = {
  render: function DefaultStory() {
    const [conversations, setConversations] = useState(sampleConversations);
    const [activeId, setActiveId] = useState("1");
    const [messages, setMessages] = useState(sampleMessages);
    const [isTyping, setIsTyping] = useState(false);

    const handleSend = useCallback(
      (content: string) => {
        const userMessage: ChatMessage = {
          id: Date.now().toString(),
          role: "user",
          content,
          timestamp: new Date(),
          status: "sent",
        };
        setMessages((prev) => [...prev, userMessage]);

        // Update conversation preview
        setConversations((prev) =>
          prev.map((c) =>
            c.id === activeId
              ? { ...c, preview: content.slice(0, 50), updatedAt: new Date() }
              : c,
          ),
        );

        // Phase 1: Thinking state (spinner)
        setIsTyping(true);

        setTimeout(() => {
          // Phase 2: Stop thinking, start streaming response
          setIsTyping(false);

          const responseContent = demoResponses[
            Math.floor(Math.random() * demoResponses.length)
          ] as string;

          const assistantMessage: ChatMessage = {
            id: (Date.now() + 1).toString(),
            role: "assistant",
            content: responseContent,
            timestamp: new Date(),
            isStreaming: true,
          };

          setMessages((prev) => [...prev, assistantMessage]);
        }, 1200);
      },
      [activeId],
    );

    const handleNewConversation = useCallback(() => {
      const newConv: ChatConversation = {
        id: Date.now().toString(),
        title: "New Conversation",
        preview: "",
        updatedAt: new Date(),
        messageCount: 0,
      };
      setConversations((prev) => [newConv, ...prev]);
      setActiveId(newConv.id);
      setMessages([]);
    }, []);

    const handleDeleteConversation = useCallback(
      (id: string) => {
        setConversations((prev) => prev.filter((c) => c.id !== id));
        if (activeId === id) {
          const remaining = conversations.filter((c) => c.id !== id);
          setActiveId(remaining[0]?.id || "");
          setMessages([]);
        }
      },
      [activeId, conversations],
    );

    const handleSelectConversation = useCallback((id: string) => {
      setActiveId(id);
      // In a real app, you'd load messages for this conversation
      setMessages(sampleMessages);
    }, []);

    return (
      <ChatPageTemplate
        conversations={conversations}
        activeConversationId={activeId}
        messages={messages}
        onSendMessage={handleSend}
        onSelectConversation={handleSelectConversation}
        onNewConversation={handleNewConversation}
        onDeleteConversation={handleDeleteConversation}
        isTyping={isTyping}
        user={{
          name: "John Doe",
          avatar:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
        }}
        onLogout={() => alert("Logout clicked")}
      />
    );
  },
};

export const WithCustomLogo: Story = {
  args: {
    conversations: sampleConversations,
    activeConversationId: "1",
    messages: sampleMessages,
    user: {
      name: "Jane Smith",
    },
    logo: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--spacing-2)",
        }}
      >
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: "var(--radius-sm)",
            background: "var(--interactive-primary)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--interactive-primary-text)",
            fontWeight: "var(--font-weight-bold)",
            fontSize: "var(--font-size-14)",
          }}
        >
          AI
        </div>
        <span
          style={{
            fontWeight: "var(--font-weight-medium)",
            color: "var(--text-primary)",
          }}
        >
          Acme Chat
        </span>
      </div>
    ),
  },
  render: (args) => (
    <ChatPageTemplate {...args} onLogout={() => alert("Logout")} />
  ),
};

export const EmptyState: Story = {
  args: {
    conversations: [],
    messages: [],
    user: {
      name: "New User",
    },
  },
  render: (args) => (
    <ChatPageTemplate
      {...args}
      onNewConversation={() => alert("Creating first conversation...")}
    />
  ),
};

export const NewConversation: Story = {
  args: {
    conversations: sampleConversations,
    activeConversationId: "new",
    messages: [],
    user: {
      name: "John Doe",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
    },
  },
  render: (args) => <ChatPageTemplate {...args} onNewConversation={() => {}} />,
};

export const MobileView: Story = {
  args: {
    conversations: sampleConversations,
    activeConversationId: "1",
    messages: sampleMessages,
    user: {
      name: "Mobile User",
    },
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  render: (args) => <ChatPageTemplate {...args} />,
};

export const TabletView: Story = {
  args: {
    conversations: sampleConversations,
    activeConversationId: "1",
    messages: sampleMessages,
    user: {
      name: "Tablet User",
    },
  },
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
  render: (args) => <ChatPageTemplate {...args} />,
};

export const DarkMode: Story = {
  args: {
    conversations: sampleConversations,
    activeConversationId: "1",
    messages: sampleMessages,
    user: {
      name: "Dark Mode User",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
    },
  },
  render: (args) => (
    <div data-theme="dark" style={{ height: "100vh" }}>
      <ChatPageTemplate {...args} />
    </div>
  ),
};

export const LongConversation: Story = {
  render: function LongConversationStory() {
    // Generate many messages
    const longMessages: ChatMessage[] = [];
    for (let i = 0; i < 20; i++) {
      longMessages.push({
        id: `user-${i}`,
        role: "user",
        content: `This is user message number ${i + 1}. It contains some text to simulate a real conversation.`,
        timestamp: new Date(Date.now() - (20 - i) * 1000 * 60 * 5),
        status: "sent",
      });
      longMessages.push({
        id: `assistant-${i}`,
        role: "assistant",
        content: `This is assistant response number ${i + 1}. Here's a longer response to demonstrate how the chat handles more content.

Key points:
- Point one about the topic
- Point two with more details
- Point three summarizing

Would you like to know more?`,
        timestamp: new Date(Date.now() - (20 - i) * 1000 * 60 * 5 + 1000 * 60),
      });
    }

    return (
      <ChatPageTemplate
        conversations={sampleConversations}
        activeConversationId="1"
        messages={longMessages}
        user={{ name: "Test User" }}
      />
    );
  },
};

export const WithCodeExample: Story = {
  render: () => {
    const codeMessages: ChatMessage[] = [
      {
        id: "1",
        role: "user",
        content: "Can you show me how to create a custom React hook?",
        timestamp: new Date(Date.now() - 1000 * 60 * 3),
        status: "sent",
      },
      {
        id: "2",
        role: "assistant",
        content: `Here's an example of a custom React hook for managing local storage:

\`\`\`typescript
import { useState, useEffect } from 'react';

function useLocalStorage<T>(key: string, initialValue: T) {
  // Get stored value or use initial
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // Update localStorage when value changes
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue] as const;
}

export default useLocalStorage;
\`\`\`

**Usage example:**

\`\`\`tsx
function App() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Current theme: {theme}
    </button>
  );
}
\`\`\`

This hook:
1. Reads initial value from localStorage
2. Falls back to provided initialValue if not found
3. Syncs changes back to localStorage automatically`,
        timestamp: new Date(Date.now() - 1000 * 60 * 2),
      },
    ];

    return (
      <ChatPageTemplate
        conversations={sampleConversations}
        activeConversationId="1"
        messages={codeMessages}
        user={{ name: "Developer" }}
      />
    );
  },
};
