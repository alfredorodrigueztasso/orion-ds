import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as l}from"./index-Bi6L2ga8.js";import{C as o,s as r}from"./Chat-DwlHfvOq.js";import{u as R}from"./useStreamingText-DGcFrezV.js";import{M as V}from"./menu-CnVLCxPO.js";import{M as L}from"./message-square-9wXJwYnY.js";import"./ThemeContext-Dop_0lMq.js";import"./check-DDKQb6IN.js";import"./createLucideIcon-DprCCbyf.js";import"./copy-CDSbOGtH.js";import"./x-Dd336Dmd.js";import"./thumbs-up-CA1lH5H_.js";import"./file-text-3QR_BDt1.js";import"./code-BWcIXUuE.js";import"./user-CUEj3VL3.js";import"./circle-alert-BMPEDkj1.js";import"./clock-BOaF0ey4.js";import"./Button-C5l-MScQ.js";import"./file-CJqdiTYx.js";import"./upload-DDi9KpFe.js";import"./plus-_oTOY7dX.js";import"./search-BC3UyaPv.js";import"./trash-2-B67onKV4.js";function H({message:t}){const{displayText:i,isComplete:c}=R(t.content);return e.jsx(o.Message,{role:t.role,content:i,timestamp:t.timestamp,status:t.status,attachments:t.attachments,isStreaming:!c})}const a=l.forwardRef(({conversations:t=[],activeConversationId:i,messages:c=[],onSendMessage:p,onSelectConversation:x,onNewConversation:g,onDeleteConversation:M,isTyping:h=!1,isLoading:D=!1,header:n,inputConfig:d,hideSidebar:m=!1,className:I,...j},T)=>{const[A,k]=l.useState(!0),N=l.useCallback((s,q)=>{p?.(s,q)},[p]);return e.jsxs("div",{ref:T,className:[r.section,I].filter(Boolean).join(" "),...j,children:[!m&&e.jsx(o.Sidebar,{conversations:t,activeConversationId:i,onSelectConversation:x,onNewConversation:g,onDeleteConversation:M,collapsed:A,onCollapsedChange:k}),e.jsx("div",{className:r.sectionMain,children:e.jsxs(o,{children:[e.jsx(o.Header,{title:n?.title||"AI Assistant",subtitle:n?.subtitle,avatar:n?.avatar,actions:e.jsxs(e.Fragment,{children:[!m&&e.jsx("button",{className:[r.inputButton,r.sectionMobileMenuButton].join(" "),onClick:()=>k(!1),"aria-label":"Open sidebar",children:e.jsx(V,{size:20})}),n?.actions]})}),e.jsxs(o.Messages,{children:[c.length===0?e.jsxs("div",{className:r.emptyState,children:[e.jsx("div",{className:r.emptyStateIcon,children:e.jsx(L,{size:28})}),e.jsxs("div",{children:[e.jsx("h3",{className:r.emptyStateTitle,children:"How can I help you today?"}),e.jsx("p",{className:r.emptyStateText,children:"Start a conversation by typing a message below."})]})]}):c.map(s=>s.isStreaming?e.jsx(H,{message:s},s.id):e.jsx(o.Message,{role:s.role,content:s.content,timestamp:s.timestamp,status:s.status,attachments:s.attachments},s.id)),h&&e.jsx(o.TypingIndicator,{})]}),e.jsx(o.Input,{onSend:N,placeholder:d?.placeholder||"Type a message...",allowAttachments:d?.allowAttachments??!0,allowVoiceRecording:d?.allowVoiceRecording??!0,maxLength:d?.maxLength,isLoading:D})]})})]})});a.displayName="ChatSection";a.__docgenInfo={description:"",methods:[],displayName:"ChatSection",props:{conversations:{required:!1,tsType:{name:"Array",elements:[{name:"ChatConversation"}],raw:"ChatConversation[]"},description:"List of conversations for sidebar",defaultValue:{value:"[]",computed:!1}},activeConversationId:{required:!1,tsType:{name:"string"},description:"Currently active conversation ID"},messages:{required:!1,tsType:{name:"Array",elements:[{name:"ChatMessage"}],raw:"ChatMessage[]"},description:"Messages for the active conversation",defaultValue:{value:"[]",computed:!1}},onSendMessage:{required:!1,tsType:{name:"signature",type:"function",raw:"(message: string, attachments?: File[]) => void",signature:{arguments:[{type:{name:"string"},name:"message"},{type:{name:"Array",elements:[{name:"File"}],raw:"File[]"},name:"attachments"}],return:{name:"void"}}},description:"Callback when a message is sent"},onSelectConversation:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:"Callback when a conversation is selected"},onNewConversation:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when new conversation is created"},onDeleteConversation:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:"Callback when a conversation is deleted"},isTyping:{required:!1,tsType:{name:"boolean"},description:"Whether assistant is typing",defaultValue:{value:"false",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"Whether message is being sent",defaultValue:{value:"false",computed:!1}},header:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  title?: string;
  subtitle?: string;
  avatar?: ReactNode;
  actions?: ReactNode;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!1}},{key:"subtitle",value:{name:"string",required:!1}},{key:"avatar",value:{name:"ReactNode",required:!1}},{key:"actions",value:{name:"ReactNode",required:!1}}]}},description:"Chat header configuration"},inputConfig:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  placeholder?: string;
  allowAttachments?: boolean;
  allowVoiceRecording?: boolean;
  maxLength?: number;
}`,signature:{properties:[{key:"placeholder",value:{name:"string",required:!1}},{key:"allowAttachments",value:{name:"boolean",required:!1}},{key:"allowVoiceRecording",value:{name:"boolean",required:!1}},{key:"maxLength",value:{name:"number",required:!1}}]}},description:"Input configuration"},hideSidebar:{required:!1,tsType:{name:"boolean"},description:"Hide sidebar (full-width chat)",defaultValue:{value:"false",computed:!1}}},composes:["HTMLAttributes"]};const oe={title:"Sections/Chat/ChatSection",component:a,parameters:{layout:"fullscreen"},tags:["autodocs"]},b=[{id:"1",title:"React Hooks Discussion",preview:"Here's a simple example of useState...",updatedAt:new Date(Date.now()-1e3*60*2),messageCount:4},{id:"2",title:"TypeScript Generics",preview:"Generics allow you to write flexible...",updatedAt:new Date(Date.now()-1e3*60*60),messageCount:8},{id:"3",title:"CSS Grid Layout",preview:"Grid is perfect for 2D layouts...",updatedAt:new Date(Date.now()-1e3*60*60*24),messageCount:3},{id:"4",title:"Node.js Best Practices",preview:"Always use async/await for cleaner...",updatedAt:new Date(Date.now()-1e3*60*60*48),messageCount:12},{id:"5",title:"Database Design",preview:"Normalization helps reduce redundancy...",updatedAt:new Date(Date.now()-1e3*60*60*72),messageCount:6}],u=[{id:"1",role:"user",content:"Hello! Can you help me understand how React hooks work?",timestamp:new Date(Date.now()-1e3*60*5),status:"sent"},{id:"2",role:"assistant",content:`Of course! React hooks are functions that let you "hook into" React state and lifecycle features from function components. Here are the most commonly used hooks:

1. **useState** - Adds state to functional components
2. **useEffect** - Performs side effects (data fetching, subscriptions)
3. **useContext** - Subscribes to React context
4. **useRef** - Creates a mutable reference
5. **useMemo** - Memoizes expensive calculations

Would you like me to explain any of these in more detail?`,timestamp:new Date(Date.now()-1e3*60*4),status:"sent"},{id:"3",role:"user",content:"Yes, can you show me an example of useState?",timestamp:new Date(Date.now()-1e3*60*3),status:"sent"},{id:"4",role:"assistant",content:`Here's a simple example:

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

The \`useState(0)\` initializes state with value \`0\` and returns \`[currentValue, setterFunction]\`.`,timestamp:new Date(Date.now()-1e3*60*2),status:"sent"}],v={args:{conversations:b,activeConversationId:"1",messages:u,header:{title:"AI Assistant",subtitle:"Online"}},render:function(i){const[c,p]=l.useState(i.activeConversationId),[x,g]=l.useState(i.messages??[]),[M,h]=l.useState(!1),D=l.useCallback(n=>{const d={id:Date.now().toString(),role:"user",content:n,timestamp:new Date,status:"sent"};g(m=>[...m,d]),h(!0),setTimeout(()=>{h(!1);const m={id:(Date.now()+1).toString(),role:"assistant",content:`Thanks for your message! I'm here to help.

This is a simulated streaming response. In a real application, the message content would come from your AI backend. The **progressive text reveal** and **streaming cursor** are handled automatically by the template.`,timestamp:new Date,isStreaming:!0};g(I=>[...I,m])},1200)},[]);return e.jsx("div",{style:{height:"100vh"},children:e.jsx(a,{...i,activeConversationId:c,messages:x,onSendMessage:D,onSelectConversation:p,onNewConversation:()=>alert("New conversation"),onDeleteConversation:n=>alert(`Delete ${n}`),isTyping:M})})}},f={args:{messages:u,hideSidebar:!0,header:{title:"Quick Chat",subtitle:"No sidebar mode"}},render:t=>e.jsx("div",{style:{height:"600px",maxWidth:"800px",margin:"0 auto"},children:e.jsx(a,{...t})})},y={args:{conversations:[],messages:[],header:{title:"New Chat"}},render:t=>e.jsx("div",{style:{height:"100vh"},children:e.jsx(a,{...t,onNewConversation:()=>alert("Creating new conversation...")})})},C={args:{conversations:b.slice(0,2),activeConversationId:"1",messages:u.slice(0,2),header:{title:"Custom Input"},inputConfig:{placeholder:"Ask me anything about coding...",allowAttachments:!0,allowVoiceRecording:!0,maxLength:1e3}},render:t=>e.jsx("div",{style:{height:"100vh"},children:e.jsx(a,{...t})})},w={args:{conversations:b,activeConversationId:"1",messages:u,header:{title:"Mobile Chat"}},parameters:{viewport:{defaultViewport:"mobile1"}},render:t=>e.jsx("div",{style:{height:"100vh"},children:e.jsx(a,{...t})})},S={args:{conversations:b,activeConversationId:"1",messages:u,header:{title:"Dark Mode Chat"}},render:t=>e.jsx("div",{"data-theme":"dark",style:{height:"100vh",background:"var(--surface-base)"},children:e.jsx(a,{...t})})};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    conversations: sampleConversations,
    activeConversationId: '1',
    messages: sampleMessages,
    header: {
      title: 'AI Assistant',
      subtitle: 'Online'
    }
  },
  render: function DefaultStory(args) {
    const [activeId, setActiveId] = useState(args.activeConversationId);
    const [messages, setMessages] = useState<ChatMessage[]>(args.messages ?? []);
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

      // Phase 1: Thinking state
      setIsTyping(true);
      setTimeout(() => {
        // Phase 2: Streaming response
        setIsTyping(false);
        const assistantMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: 'Thanks for your message! I\\'m here to help.\\n\\nThis is a simulated streaming response. In a real application, the message content would come from your AI backend. The **progressive text reveal** and **streaming cursor** are handled automatically by the template.',
          timestamp: new Date(),
          isStreaming: true
        };
        setMessages(prev => [...prev, assistantMessage]);
      }, 1200);
    }, []);
    return <div style={{
      height: '100vh'
    }}>
        <ChatSection {...args} activeConversationId={activeId} messages={messages} onSendMessage={handleSend} onSelectConversation={setActiveId} onNewConversation={() => alert('New conversation')} onDeleteConversation={id => alert(\`Delete \${id}\`)} isTyping={isTyping} />
      </div>;
  }
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    messages: sampleMessages,
    hideSidebar: true,
    header: {
      title: 'Quick Chat',
      subtitle: 'No sidebar mode'
    }
  },
  render: args => <div style={{
    height: '600px',
    maxWidth: '800px',
    margin: '0 auto'
  }}>
      <ChatSection {...args} />
    </div>
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    conversations: [],
    messages: [],
    header: {
      title: 'New Chat'
    }
  },
  render: args => <div style={{
    height: '100vh'
  }}>
      <ChatSection {...args} onNewConversation={() => alert('Creating new conversation...')} />
    </div>
}`,...y.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    conversations: sampleConversations.slice(0, 2),
    activeConversationId: '1',
    messages: sampleMessages.slice(0, 2),
    header: {
      title: 'Custom Input'
    },
    inputConfig: {
      placeholder: 'Ask me anything about coding...',
      allowAttachments: true,
      allowVoiceRecording: true,
      maxLength: 1000
    }
  },
  render: args => <div style={{
    height: '100vh'
  }}>
      <ChatSection {...args} />
    </div>
}`,...C.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    conversations: sampleConversations,
    activeConversationId: '1',
    messages: sampleMessages,
    header: {
      title: 'Mobile Chat'
    }
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  },
  render: args => <div style={{
    height: '100vh'
  }}>
      <ChatSection {...args} />
    </div>
}`,...w.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    conversations: sampleConversations,
    activeConversationId: '1',
    messages: sampleMessages,
    header: {
      title: 'Dark Mode Chat'
    }
  },
  render: args => <div data-theme="dark" style={{
    height: '100vh',
    background: 'var(--surface-base)'
  }}>
      <ChatSection {...args} />
    </div>
}`,...S.parameters?.docs?.source}}};const ie=["Default","WithoutSidebar","EmptyState","WithCustomInputConfig","MobileView","DarkMode"];export{S as DarkMode,v as Default,y as EmptyState,w as MobileView,C as WithCustomInputConfig,f as WithoutSidebar,ie as __namedExportsOrder,oe as default};
