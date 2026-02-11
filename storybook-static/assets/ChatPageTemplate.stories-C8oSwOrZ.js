import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as i}from"./index-Bi6L2ga8.js";import{C as u,s}from"./Chat-DwlHfvOq.js";import{u as W}from"./useStreamingText-DGcFrezV.js";import{U as B}from"./user-CUEj3VL3.js";import{S as J}from"./settings-DVkWYkkM.js";import{L as O}from"./log-out-B9-sGcCl.js";import{M as q}from"./menu-CnVLCxPO.js";import"./ThemeContext-Dop_0lMq.js";import"./check-DDKQb6IN.js";import"./createLucideIcon-DprCCbyf.js";import"./copy-CDSbOGtH.js";import"./x-Dd336Dmd.js";import"./thumbs-up-CA1lH5H_.js";import"./file-text-3QR_BDt1.js";import"./code-BWcIXUuE.js";import"./circle-alert-BMPEDkj1.js";import"./clock-BOaF0ey4.js";import"./Button-C5l-MScQ.js";import"./file-CJqdiTYx.js";import"./upload-DDi9KpFe.js";import"./plus-_oTOY7dX.js";import"./search-BC3UyaPv.js";import"./message-square-9wXJwYnY.js";import"./trash-2-B67onKV4.js";function $({message:t}){const{displayText:r,isComplete:a}=W(t.content);return e.jsx(u.Message,{role:t.role,content:r,timestamp:t.timestamp,status:t.status,attachments:t.attachments,isStreaming:!a})}const l=i.forwardRef(({conversations:t=[],activeConversationId:r,onSelectConversation:a,onNewConversation:g,onDeleteConversation:C,messages:b=[],onSendMessage:d,isTyping:U=!1,isLoading:x=!1,user:h,onLogout:T,logo:R,inputConfig:f,className:n,...m},c)=>{const[v,y]=i.useState(!1),[S,k]=i.useState(!1),z=i.useCallback((o,E)=>{d?.(o,E)},[d]);return e.jsxs("div",{ref:c,className:[s.pageTemplate,n].filter(Boolean).join(" "),...m,children:[e.jsx(u.Sidebar,{conversations:t,activeConversationId:r,onSelectConversation:a,onNewConversation:g,onDeleteConversation:C,collapsed:v,onCollapsedChange:y,header:e.jsxs("div",{className:s.pageTemplateSidebarHeader,children:[e.jsx("div",{className:s.pageTemplateSidebarHeaderLogo,children:R||e.jsx("span",{className:s.pageTemplateSidebarHeaderLogoText,children:"AI Chat"})}),e.jsx("button",{className:[s.inputButton,s.sidebarCloseButton].join(" "),onClick:()=>y(!0),"aria-label":"Close sidebar",children:e.jsx(q,{size:20})})]}),footer:h&&e.jsxs("div",{style:{position:"relative"},children:[e.jsxs("button",{className:[s.pageTemplateUserButton,S&&s.pageTemplateUserButtonActive].filter(Boolean).join(" "),onClick:()=>k(!S),"aria-expanded":S,"aria-haspopup":"menu",children:[h.avatar?e.jsx("img",{src:h.avatar,alt:h.name,className:s.pageTemplateUserAvatar}):e.jsx("div",{className:s.pageTemplateUserAvatarFallback,children:e.jsx(B,{size:18})}),e.jsx("span",{className:s.pageTemplateUserName,children:h.name})]}),S&&e.jsxs("div",{className:s.pageTemplateUserMenu,role:"menu",children:[e.jsxs("button",{className:s.pageTemplateMenuItem,onClick:()=>{k(!1)},role:"menuitem",children:[e.jsx(J,{size:16}),"Settings"]}),T&&e.jsxs("button",{className:[s.pageTemplateMenuItem,s.pageTemplateMenuItemDanger].join(" "),onClick:()=>{k(!1),T()},role:"menuitem",children:[e.jsx(O,{size:16}),"Sign out"]})]})]})}),e.jsx("div",{className:s.sectionMain,children:e.jsxs(u,{children:[e.jsx(u.Header,{title:t.find(o=>o.id===r)?.title||"New Chat",actions:e.jsx("button",{className:[s.inputButton,s.sectionMobileMenuButton].join(" "),onClick:()=>y(!1),"aria-label":"Open sidebar",children:e.jsx(q,{size:20})})}),e.jsxs(u.Messages,{children:[b.length===0?e.jsxs("div",{className:s.emptyState,children:[e.jsx("div",{className:s.emptyStateIcon,children:e.jsx(u.Markdown,{content:"✨"})}),e.jsxs("div",{children:[e.jsx("h3",{className:s.emptyStateTitle,children:"How can I help you today?"}),e.jsx("p",{className:s.emptyStateText,children:"Start a conversation by typing a message below."})]})]}):b.map(o=>o.isStreaming?e.jsx($,{message:o},o.id):e.jsx(u.Message,{role:o.role,content:o.content,timestamp:o.timestamp,status:o.status,attachments:o.attachments},o.id)),U&&e.jsx(u.TypingIndicator,{})]}),e.jsx(u.Input,{onSend:z,placeholder:f?.placeholder||"Message AI...",allowAttachments:f?.allowAttachments??!0,allowVoiceRecording:f?.allowVoiceRecording??!0,maxLength:f?.maxLength,isLoading:x})]})}),S&&e.jsx("div",{className:s.pageTemplateMenuOverlay,onClick:()=>k(!1),"aria-hidden":"true"})]})});l.displayName="ChatPageTemplate";l.__docgenInfo={description:"",methods:[],displayName:"ChatPageTemplate",props:{conversations:{required:!1,tsType:{name:"Array",elements:[{name:"ChatConversation"}],raw:"ChatConversation[]"},description:"List of conversations",defaultValue:{value:"[]",computed:!1}},activeConversationId:{required:!1,tsType:{name:"string"},description:"Currently active conversation ID"},onSelectConversation:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:"Callback when a conversation is selected"},onNewConversation:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when new conversation is created"},onDeleteConversation:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:"Callback when a conversation is deleted"},messages:{required:!1,tsType:{name:"Array",elements:[{name:"ChatMessage"}],raw:"ChatMessage[]"},description:"Messages for the active conversation",defaultValue:{value:"[]",computed:!1}},onSendMessage:{required:!1,tsType:{name:"signature",type:"function",raw:"(message: string, attachments?: File[]) => void",signature:{arguments:[{type:{name:"string"},name:"message"},{type:{name:"Array",elements:[{name:"File"}],raw:"File[]"},name:"attachments"}],return:{name:"void"}}},description:"Callback when a message is sent"},isTyping:{required:!1,tsType:{name:"boolean"},description:"Whether assistant is typing",defaultValue:{value:"false",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"Whether message is being sent",defaultValue:{value:"false",computed:!1}},user:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  name: string;
  avatar?: string;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"avatar",value:{name:"string",required:!1}}]}},description:"User information for header"},onLogout:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when user logs out"},logo:{required:!1,tsType:{name:"ReactNode"},description:"Custom logo element"},inputConfig:{required:!1,tsType:{name:"ChatSectionProps['inputConfig']",raw:"ChatSectionProps['inputConfig']"},description:"Chat input configuration"}},composes:["HTMLAttributes"]};const fe={title:"Templates/App/ChatPageTemplate",component:l,parameters:{layout:"fullscreen"},tags:["autodocs"]},p=[{id:"1",title:"React Hooks Discussion",preview:"Here's a simple example of useState...",updatedAt:new Date(Date.now()-1e3*60*2),messageCount:4},{id:"2",title:"TypeScript Generics",preview:"Generics allow you to write flexible...",updatedAt:new Date(Date.now()-1e3*60*60),messageCount:8},{id:"3",title:"CSS Grid Layout",preview:"Grid is perfect for 2D layouts...",updatedAt:new Date(Date.now()-1e3*60*60*24),messageCount:3},{id:"4",title:"Node.js Best Practices",preview:"Always use async/await for cleaner...",updatedAt:new Date(Date.now()-1e3*60*60*48),messageCount:12},{id:"5",title:"Database Design Patterns",preview:"Normalization helps reduce redundancy...",updatedAt:new Date(Date.now()-1e3*60*60*72),messageCount:6},{id:"6",title:"API Design Best Practices",preview:"RESTful APIs should be stateless...",updatedAt:new Date(Date.now()-1e3*60*60*96),messageCount:9}],w=[{id:"1",role:"user",content:"Hello! Can you help me understand how React hooks work?",timestamp:new Date(Date.now()-1e3*60*5),status:"sent"},{id:"2",role:"assistant",content:`Of course! React hooks are functions that let you "hook into" React state and lifecycle features from function components. Here are the most commonly used hooks:

1. **useState** - Adds state to functional components
2. **useEffect** - Performs side effects (data fetching, subscriptions)
3. **useContext** - Subscribes to React context
4. **useRef** - Creates a mutable reference that persists across renders
5. **useMemo** - Memoizes expensive calculations
6. **useCallback** - Memoizes callback functions

Would you like me to explain any of these in more detail?`,timestamp:new Date(Date.now()-1e3*60*4),status:"sent"},{id:"3",role:"user",content:"Yes, can you show me an example of useState?",timestamp:new Date(Date.now()-1e3*60*3),status:"sent"},{id:"4",role:"assistant",content:`Here's a simple example of \`useState\`:

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

The state persists between re-renders, unlike regular variables.`,timestamp:new Date(Date.now()-1e3*60*2),status:"sent"}],H=[`That's a great question! Let me think about this carefully.

Here are the key points to consider:

1. **Understanding the fundamentals** is essential before diving into advanced topics
2. **Practice makes perfect** — try building small projects to reinforce concepts
3. **Read the documentation** — official docs are always the best reference

Would you like me to go deeper into any of these areas?`,`I'd be happy to help with that! Here's what I think:

The approach you're describing is actually quite common in modern development. The key insight is that **simplicity trumps complexity** in most cases.

\`\`\`typescript
// Here's a quick example
const result = data
  .filter(item => item.active)
  .map(item => item.value);
\`\`\`

This pattern is both readable and efficient. Let me know if you'd like to explore more!`,`Interesting question! Let me break it down:

**Short answer:** Yes, this is definitely possible and recommended.

**Longer explanation:**
When working with modern frameworks, the best practice is to keep your components small and focused. Each component should have a single responsibility.

Here are some guidelines:
- Keep components under 100 lines
- Extract reusable logic into custom hooks
- Use composition over inheritance

Does this help clarify things?`],D={render:function(){const[r,a]=i.useState(p),[g,C]=i.useState("1"),[b,d]=i.useState(w),[U,x]=i.useState(!1),h=i.useCallback(n=>{const m={id:Date.now().toString(),role:"user",content:n,timestamp:new Date,status:"sent"};d(c=>[...c,m]),a(c=>c.map(v=>v.id===g?{...v,preview:n.slice(0,50),updatedAt:new Date}:v)),x(!0),setTimeout(()=>{x(!1);const c=H[Math.floor(Math.random()*H.length)],v={id:(Date.now()+1).toString(),role:"assistant",content:c,timestamp:new Date,isStreaming:!0};d(y=>[...y,v])},1200)},[g]),T=i.useCallback(()=>{const n={id:Date.now().toString(),title:"New Conversation",preview:"",updatedAt:new Date,messageCount:0};a(m=>[n,...m]),C(n.id),d([])},[]),R=i.useCallback(n=>{if(a(m=>m.filter(c=>c.id!==n)),g===n){const m=r.filter(c=>c.id!==n);C(m[0]?.id||""),d([])}},[g,r]),f=i.useCallback(n=>{C(n),d(w)},[]);return e.jsx(l,{conversations:r,activeConversationId:g,messages:b,onSendMessage:h,onSelectConversation:f,onNewConversation:T,onDeleteConversation:R,isTyping:U,user:{name:"John Doe",avatar:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"},onLogout:()=>alert("Logout clicked")})}},M={args:{conversations:p,activeConversationId:"1",messages:w,user:{name:"Jane Smith"},logo:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[e.jsx("div",{style:{width:28,height:28,borderRadius:"var(--radius-sm)",background:"var(--interactive-primary)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--interactive-primary-text)",fontWeight:"var(--font-weight-bold)",fontSize:"var(--font-size-14)"},children:"AI"}),e.jsx("span",{style:{fontWeight:"var(--font-weight-medium)",color:"var(--text-primary)"},children:"Acme Chat"})]})},render:t=>e.jsx(l,{...t,onLogout:()=>alert("Logout")})},I={args:{conversations:[],messages:[],user:{name:"New User"}},render:t=>e.jsx(l,{...t,onNewConversation:()=>alert("Creating first conversation...")})},j={args:{conversations:p,activeConversationId:"new",messages:[],user:{name:"John Doe",avatar:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"}},render:t=>e.jsx(l,{...t,onNewConversation:()=>{}})},N={args:{conversations:p,activeConversationId:"1",messages:w,user:{name:"Mobile User"}},parameters:{viewport:{defaultViewport:"mobile1"}},render:t=>e.jsx(l,{...t})},A={args:{conversations:p,activeConversationId:"1",messages:w,user:{name:"Tablet User"}},parameters:{viewport:{defaultViewport:"tablet"}},render:t=>e.jsx(l,{...t})},V={args:{conversations:p,activeConversationId:"1",messages:w,user:{name:"Dark Mode User",avatar:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"}},render:t=>e.jsx("div",{"data-theme":"dark",style:{height:"100vh"},children:e.jsx(l,{...t})})},L={render:function(){const r=[];for(let a=0;a<20;a++)r.push({id:`user-${a}`,role:"user",content:`This is user message number ${a+1}. It contains some text to simulate a real conversation.`,timestamp:new Date(Date.now()-(20-a)*1e3*60*5),status:"sent"}),r.push({id:`assistant-${a}`,role:"assistant",content:`This is assistant response number ${a+1}. Here's a longer response to demonstrate how the chat handles more content.

Key points:
- Point one about the topic
- Point two with more details
- Point three summarizing

Would you like to know more?`,timestamp:new Date(Date.now()-(20-a)*1e3*60*5+1e3*60)});return e.jsx(l,{conversations:p,activeConversationId:"1",messages:r,user:{name:"Test User"}})}},P={render:()=>{const t=[{id:"1",role:"user",content:"Can you show me how to create a custom React hook?",timestamp:new Date(Date.now()-18e4),status:"sent"},{id:"2",role:"assistant",content:`Here's an example of a custom React hook for managing local storage:

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
3. Syncs changes back to localStorage automatically`,timestamp:new Date(Date.now()-12e4)}];return e.jsx(l,{conversations:p,activeConversationId:"1",messages:t,user:{name:"Developer"}})}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: function DefaultStory() {
    const [conversations, setConversations] = useState(sampleConversations);
    const [activeId, setActiveId] = useState('1');
    const [messages, setMessages] = useState(sampleMessages);
    const [isTyping, setIsTyping] = useState(false);
    const handleSend = useCallback((content: string) => {
      const userMessage: ChatMessage = {
        id: Date.now().toString(),
        role: 'user',
        content,
        timestamp: new Date(),
        status: 'sent'
      };
      setMessages(prev => [...prev, userMessage]);

      // Update conversation preview
      setConversations(prev => prev.map(c => c.id === activeId ? {
        ...c,
        preview: content.slice(0, 50),
        updatedAt: new Date()
      } : c));

      // Phase 1: Thinking state (spinner)
      setIsTyping(true);
      setTimeout(() => {
        // Phase 2: Stop thinking, start streaming response
        setIsTyping(false);
        const responseContent = demoResponses[Math.floor(Math.random() * demoResponses.length)] as string;
        const assistantMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: responseContent,
          timestamp: new Date(),
          isStreaming: true
        };
        setMessages(prev => [...prev, assistantMessage]);
      }, 1200);
    }, [activeId]);
    const handleNewConversation = useCallback(() => {
      const newConv: ChatConversation = {
        id: Date.now().toString(),
        title: 'New Conversation',
        preview: '',
        updatedAt: new Date(),
        messageCount: 0
      };
      setConversations(prev => [newConv, ...prev]);
      setActiveId(newConv.id);
      setMessages([]);
    }, []);
    const handleDeleteConversation = useCallback((id: string) => {
      setConversations(prev => prev.filter(c => c.id !== id));
      if (activeId === id) {
        const remaining = conversations.filter(c => c.id !== id);
        setActiveId(remaining[0]?.id || '');
        setMessages([]);
      }
    }, [activeId, conversations]);
    const handleSelectConversation = useCallback((id: string) => {
      setActiveId(id);
      // In a real app, you'd load messages for this conversation
      setMessages(sampleMessages);
    }, []);
    return <ChatPageTemplate conversations={conversations} activeConversationId={activeId} messages={messages} onSendMessage={handleSend} onSelectConversation={handleSelectConversation} onNewConversation={handleNewConversation} onDeleteConversation={handleDeleteConversation} isTyping={isTyping} user={{
      name: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100'
    }} onLogout={() => alert('Logout clicked')} />;
  }
}`,...D.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    conversations: sampleConversations,
    activeConversationId: '1',
    messages: sampleMessages,
    user: {
      name: 'Jane Smith'
    },
    logo: <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--spacing-2)'
    }}>
        <div style={{
        width: 28,
        height: 28,
        borderRadius: 'var(--radius-sm)',
        background: 'var(--interactive-primary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--interactive-primary-text)',
        fontWeight: 'var(--font-weight-bold)',
        fontSize: 'var(--font-size-14)'
      }}>
          AI
        </div>
        <span style={{
        fontWeight: 'var(--font-weight-medium)',
        color: 'var(--text-primary)'
      }}>
          Acme Chat
        </span>
      </div>
  },
  render: args => <ChatPageTemplate {...args} onLogout={() => alert('Logout')} />
}`,...M.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    conversations: [],
    messages: [],
    user: {
      name: 'New User'
    }
  },
  render: args => <ChatPageTemplate {...args} onNewConversation={() => alert('Creating first conversation...')} />
}`,...I.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    conversations: sampleConversations,
    activeConversationId: 'new',
    messages: [],
    user: {
      name: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100'
    }
  },
  render: args => <ChatPageTemplate {...args} onNewConversation={() => {}} />
}`,...j.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    conversations: sampleConversations,
    activeConversationId: '1',
    messages: sampleMessages,
    user: {
      name: 'Mobile User'
    }
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  },
  render: args => <ChatPageTemplate {...args} />
}`,...N.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    conversations: sampleConversations,
    activeConversationId: '1',
    messages: sampleMessages,
    user: {
      name: 'Tablet User'
    }
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet'
    }
  },
  render: args => <ChatPageTemplate {...args} />
}`,...A.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    conversations: sampleConversations,
    activeConversationId: '1',
    messages: sampleMessages,
    user: {
      name: 'Dark Mode User',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100'
    }
  },
  render: args => <div data-theme="dark" style={{
    height: '100vh'
  }}>
      <ChatPageTemplate {...args} />
    </div>
}`,...V.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: function LongConversationStory() {
    // Generate many messages
    const longMessages: ChatMessage[] = [];
    for (let i = 0; i < 20; i++) {
      longMessages.push({
        id: \`user-\${i}\`,
        role: 'user',
        content: \`This is user message number \${i + 1}. It contains some text to simulate a real conversation.\`,
        timestamp: new Date(Date.now() - (20 - i) * 1000 * 60 * 5),
        status: 'sent'
      });
      longMessages.push({
        id: \`assistant-\${i}\`,
        role: 'assistant',
        content: \`This is assistant response number \${i + 1}. Here's a longer response to demonstrate how the chat handles more content.

Key points:
- Point one about the topic
- Point two with more details
- Point three summarizing

Would you like to know more?\`,
        timestamp: new Date(Date.now() - (20 - i) * 1000 * 60 * 5 + 1000 * 60)
      });
    }
    return <ChatPageTemplate conversations={sampleConversations} activeConversationId="1" messages={longMessages} user={{
      name: 'Test User'
    }} />;
  }
}`,...L.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    const codeMessages: ChatMessage[] = [{
      id: '1',
      role: 'user',
      content: 'Can you show me how to create a custom React hook?',
      timestamp: new Date(Date.now() - 1000 * 60 * 3),
      status: 'sent'
    }, {
      id: '2',
      role: 'assistant',
      content: \`Here's an example of a custom React hook for managing local storage:

\\\`\\\`\\\`typescript
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
\\\`\\\`\\\`

**Usage example:**

\\\`\\\`\\\`tsx
function App() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Current theme: {theme}
    </button>
  );
}
\\\`\\\`\\\`

This hook:
1. Reads initial value from localStorage
2. Falls back to provided initialValue if not found
3. Syncs changes back to localStorage automatically\`,
      timestamp: new Date(Date.now() - 1000 * 60 * 2)
    }];
    return <ChatPageTemplate conversations={sampleConversations} activeConversationId="1" messages={codeMessages} user={{
      name: 'Developer'
    }} />;
  }
}`,...P.parameters?.docs?.source}}};const we=["Default","WithCustomLogo","EmptyState","NewConversation","MobileView","TabletView","DarkMode","LongConversation","WithCodeExample"];export{V as DarkMode,D as Default,I as EmptyState,L as LongConversation,N as MobileView,j as NewConversation,A as TabletView,P as WithCodeExample,M as WithCustomLogo,we as __namedExportsOrder,fe as default};
