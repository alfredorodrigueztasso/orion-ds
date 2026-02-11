import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as o}from"./index-Bi6L2ga8.js";import{C as t}from"./Chat-DwlHfvOq.js";import{u as V}from"./useStreamingText-DGcFrezV.js";import{B as c}from"./Button-C5l-MScQ.js";import{E as _,R as $}from"./refresh-cw-Dfacl6b8.js";import{C as Y}from"./copy-CDSbOGtH.js";import{T as J,a as Q}from"./thumbs-up-CA1lH5H_.js";import"./ThemeContext-Dop_0lMq.js";import"./check-DDKQb6IN.js";import"./createLucideIcon-DprCCbyf.js";import"./x-Dd336Dmd.js";import"./file-text-3QR_BDt1.js";import"./code-BWcIXUuE.js";import"./user-CUEj3VL3.js";import"./circle-alert-BMPEDkj1.js";import"./clock-BOaF0ey4.js";import"./file-CJqdiTYx.js";import"./upload-DDi9KpFe.js";import"./plus-_oTOY7dX.js";import"./search-BC3UyaPv.js";import"./message-square-9wXJwYnY.js";import"./trash-2-B67onKV4.js";const Ce={title:"Components/Chat/Chat",component:t,parameters:{layout:"padded"},tags:["autodocs"],decorators:[s=>e.jsx("div",{style:{height:"600px",maxWidth:"900px",margin:"0 auto"},children:e.jsx(s,{})})]},k=[{id:"1",role:"user",content:"Hello! Can you help me understand how React hooks work?",timestamp:new Date(Date.now()-1e3*60*5),status:"sent"},{id:"2",role:"assistant",content:`Of course! React hooks are functions that let you "hook into" React state and lifecycle features from function components. Here are the most commonly used hooks:

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

The state persists between re-renders, unlike regular variables.`,timestamp:new Date(Date.now()-1e3*60*2),status:"sent"}],z=[{id:"1",title:"React Hooks Discussion",preview:"Here's a simple example of useState...",updatedAt:new Date(Date.now()-1e3*60*2),messageCount:4},{id:"2",title:"TypeScript Generics",preview:"Generics allow you to write flexible...",updatedAt:new Date(Date.now()-1e3*60*60),messageCount:8},{id:"3",title:"CSS Grid Layout",preview:"Grid is perfect for 2D layouts...",updatedAt:new Date(Date.now()-1e3*60*60*24),messageCount:3},{id:"4",title:"Node.js Best Practices",preview:"Always use async/await for cleaner...",updatedAt:new Date(Date.now()-1e3*60*60*48),messageCount:12}],m={render:()=>e.jsxs(t,{children:[e.jsx(t.Header,{title:"AI Assistant",subtitle:"Online"}),e.jsx(t.Messages,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:"var(--spacing-4)",color:"var(--text-tertiary)",textAlign:"center"},children:[e.jsx("div",{style:{width:64,height:64,borderRadius:"var(--radius-full)",background:"var(--surface-subtle)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"var(--font-size-24)"},children:"✨"}),e.jsxs("div",{children:[e.jsx("h3",{style:{fontSize:"var(--font-size-20)",fontWeight:"var(--font-weight-medium)",color:"var(--text-primary)",marginBottom:"var(--spacing-2)"},children:"How can I help you today?"}),e.jsx("p",{style:{fontSize:"var(--font-size-14)"},children:"Start a conversation by typing a message below."})]})]})}),e.jsx(t.Input,{placeholder:"Type a message..."})]})},p={render:()=>e.jsxs(t,{children:[e.jsx(t.Header,{title:"AI Assistant"}),e.jsx(t.Messages,{children:k.map(s=>e.jsx(t.Message,{role:s.role,content:s.content,timestamp:s.timestamp},s.id))}),e.jsx(t.Input,{placeholder:"Type a message..."})]})},u={render:()=>e.jsxs(t,{children:[e.jsx(t.Header,{title:"AI Assistant"}),e.jsxs(t.Messages,{children:[e.jsx(t.Message,{role:"user",content:"What is the meaning of life?"}),e.jsx(t.TypingIndicator,{})]}),e.jsx(t.Input,{placeholder:"Type a message...",disabled:!0})]})},O=({text:s,onComplete:n})=>{const{displayText:i,isComplete:a}=V(s);return o.useEffect(()=>{a&&n&&n()},[a,n]),e.jsx(t.Message,{role:"assistant",content:i,isStreaming:!a})},h={render:function(){return e.jsxs(t,{children:[e.jsx(t.Header,{title:"AI Assistant"}),e.jsxs(t.Messages,{children:[e.jsx(t.Message,{role:"user",content:"Explain quantum computing in simple terms."}),e.jsx(O,{text:"Quantum computing uses quantum mechanics principles to process information. Unlike classical computers that use bits (0 or 1), quantum computers use qubits which can be in multiple states simultaneously through a property called superposition. This allows quantum computers to explore many solutions at once, making them incredibly powerful for certain types of problems like cryptography, drug discovery, and optimization."})]}),e.jsx(t.Input,{placeholder:"Type a message...",disabled:!0})]})}},g={render:()=>e.jsxs(t,{children:[e.jsx(t.Header,{title:"Message States"}),e.jsxs(t.Messages,{children:[e.jsx(t.Message,{role:"user",content:"This message was sent successfully.",status:"sent",timestamp:new Date}),e.jsx(t.Message,{role:"user",content:"This message is being sent...",status:"sending"}),e.jsx(t.Message,{role:"user",content:"This message failed to send.",status:"error"}),e.jsx(t.Message,{role:"system",content:"System notification: Connection restored."}),e.jsx(t.Message,{role:"assistant",content:"Assistant response with actions.",actions:e.jsxs(e.Fragment,{children:[e.jsx(c,{variant:"ghost",size:"sm",iconOnly:!0,icon:e.jsx(Y,{size:16}),"aria-label":"Copy"}),e.jsx(c,{variant:"ghost",size:"sm",iconOnly:!0,icon:e.jsx($,{size:16}),"aria-label":"Regenerate"}),e.jsx(c,{variant:"ghost",size:"sm",iconOnly:!0,icon:e.jsx(J,{size:16}),"aria-label":"Good response"}),e.jsx(c,{variant:"ghost",size:"sm",iconOnly:!0,icon:e.jsx(Q,{size:16}),"aria-label":"Bad response"})]})})]}),e.jsx(t.Input,{placeholder:"Type a message..."})]})},y={render:()=>e.jsxs(t,{children:[e.jsx(t.Header,{title:"Code Examples"}),e.jsxs(t.Messages,{children:[e.jsx(t.Message,{role:"user",content:"Show me a Python function to calculate factorial."}),e.jsx(t.Message,{role:"assistant",content:`Here's a Python function to calculate factorial:

\`\`\`python
def factorial(n):
    """Calculate factorial of n recursively."""
    if n <= 1:
        return 1
    return n * factorial(n - 1)

# Example usage
print(factorial(5))  # Output: 120
\`\`\`

And here's an iterative version:

\`\`\`python
def factorial_iterative(n):
    result = 1
    for i in range(2, n + 1):
        result *= i
    return result
\`\`\`

Both approaches work, but the iterative version is more memory-efficient for large numbers.`})]}),e.jsx(t.Input,{placeholder:"Type a message..."})]})},x={render:()=>e.jsxs(t,{children:[e.jsx(t.Header,{title:"Markdown Support"}),e.jsx(t.Messages,{children:e.jsx(t.Message,{role:"assistant",content:`# Markdown Formatting Demo

This message demonstrates **bold text**, *italic text*, and ~~strikethrough~~.

## Lists

Unordered list:
- Item one
- Item two
- Item three

Ordered list:
1. First item
2. Second item
3. Third item

## Links and Code

Visit [Anthropic](https://anthropic.com) for more info.

Inline \`code\` looks like this.

## Tables

| Feature | Status | Notes |
|---------|--------|-------|
| Markdown | ✅ | Full support |
| Code blocks | ✅ | Syntax highlighting |
| Tables | ✅ | GFM style |

## Blockquotes

> This is a blockquote.
> It can span multiple lines.

---

That's all the formatting!`})}),e.jsx(t.Input,{placeholder:"Type a message..."})]})},R={content:"Can you analyze this image for me?",attachments:[{id:"img1",type:"image",name:"screenshot.png",url:"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400",thumbnail:"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=200"}]},W={content:"Here are the files you requested:",attachments:[{id:"img1",type:"image",name:"chart.png",url:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400"},{id:"file1",type:"file",name:"report.pdf",size:24e5,mimeType:"application/pdf"},{id:"audio1",type:"audio",name:"recording.mp3",url:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",duration:180}]},f={render:()=>e.jsxs(t,{children:[e.jsx(t.Header,{title:"Attachments Demo"}),e.jsxs(t.Messages,{children:[e.jsx(t.Message,{role:"user",content:R.content,attachments:R.attachments}),e.jsx(t.Message,{role:"assistant",content:"I can see the image. It appears to be a code editor showing some programming work. The syntax highlighting suggests it might be JavaScript or TypeScript code."}),e.jsx(t.Message,{role:"user",content:W.content,attachments:W.attachments})]}),e.jsx(t.Input,{placeholder:"Type a message...",allowAttachments:!0})]})},v={render:()=>{const s={id:"code1",type:"code",name:"example.ts",content:`interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

async function fetchUser(id: string): Promise<User> {
  const response = await fetch(\`/api/users/\${id}\`);
  if (!response.ok) {
    throw new Error('User not found');
  }
  return response.json();
}`,language:"typescript"};return e.jsxs(t,{children:[e.jsx(t.Header,{title:"Code Attachment"}),e.jsx(t.Messages,{children:e.jsx(t.Message,{role:"assistant",content:"Here's the TypeScript code you requested:",attachments:[s]})}),e.jsx(t.Input,{placeholder:"Type a message..."})]})}},C={render:function(){const[n,i]=o.useState([{id:"1",role:"assistant",content:"Hello! I'm your AI assistant. How can I help you today?",timestamp:new Date}]),[a,A]=o.useState(!1),[l,D]=o.useState(null),[d,H]=o.useState(null),E=o.useCallback(()=>{i(r=>!l||!d?r:[...r,{id:d,role:"assistant",content:l,timestamp:new Date}]),D(null),H(null)},[l,d]),F=o.useCallback(r=>{const q={id:Date.now().toString(),role:"user",content:r,timestamp:new Date,status:"sent"};i(G=>[...G,q]),A(!0);const B=["That's an interesting question! Let me think about it. There are several perspectives to consider here, and I want to make sure I give you a thorough answer that covers the key points.","I understand what you're asking. Here's my perspective on this topic. The key insight is that complex problems often have elegant solutions when you break them down into smaller, manageable pieces.","Great point! Here are some thoughts on that. First, it's important to understand the underlying principles. Then we can explore how they apply to your specific situation.","Thanks for sharing that with me. I'd be happy to help! Let me walk you through the approach step by step so we can find the best solution together."],L=Math.floor(Math.random()*B.length),P=B[L]||"I'm here to help!",N=(Date.now()+1).toString();setTimeout(()=>{A(!1),H(N),D(P)},1200)},[]),U=a||l!==null;return e.jsxs(t,{children:[e.jsx(t.Header,{title:"Interactive Chat",subtitle:"Try sending a message!",actions:e.jsx(c,{variant:"ghost",iconOnly:!0,icon:e.jsx(_,{size:20}),"aria-label":"More options"})}),e.jsxs(t.Messages,{children:[n.map(r=>e.jsx(t.Message,{role:r.role,content:r.content,timestamp:r.timestamp,status:r.status},r.id)),a&&e.jsx(t.TypingIndicator,{}),l&&e.jsx(O,{text:l,onComplete:E},d)]}),e.jsx(t.Input,{onSend:F,placeholder:"Type your message...",disabled:U,allowAttachments:!0,allowVoiceRecording:!0})]})}},w={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-6)"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"var(--spacing-2)",color:"var(--text-secondary)"},children:"Default Input"}),e.jsx(t.Input,{placeholder:"Type a message..."})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"var(--spacing-2)",color:"var(--text-secondary)"},children:"With All Features"}),e.jsx(t.Input,{placeholder:"Type a message...",allowAttachments:!0,allowVoiceRecording:!0})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"var(--spacing-2)",color:"var(--text-secondary)"},children:"Disabled"}),e.jsx(t.Input,{placeholder:"Input is disabled...",disabled:!0})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"var(--spacing-2)",color:"var(--text-secondary)"},children:"Loading State"}),e.jsx(t.Input,{placeholder:"Sending...",isLoading:!0})]})]}),decorators:[s=>e.jsx("div",{style:{maxWidth:"600px",margin:"0 auto"},children:e.jsx(s,{})})]},S={render:function(){const[n,i]=o.useState("1");return e.jsxs("div",{style:{display:"flex",height:"600px",border:"1px solid var(--border-subtle)",borderRadius:"var(--radius-container)",overflow:"hidden"},children:[e.jsx(t.Sidebar,{conversations:z,activeConversationId:n,onSelectConversation:i,onNewConversation:()=>alert("New conversation"),onDeleteConversation:a=>alert(`Delete conversation ${a}`)}),e.jsx("div",{style:{flex:1},children:e.jsxs(t,{children:[e.jsx(t.Header,{title:z.find(a=>a.id===n)?.title||"Chat"}),e.jsx(t.Messages,{children:k.map(a=>e.jsx(t.Message,{role:a.role,content:a.content,timestamp:a.timestamp},a.id))}),e.jsx(t.Input,{placeholder:"Type a message..."})]})})]})},decorators:[s=>e.jsx("div",{style:{height:"600px"},children:e.jsx(s,{})})]},j={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-4)",padding:"var(--spacing-4)"},children:[e.jsx(t.TypingIndicator,{}),e.jsx(t.TypingIndicator,{label:"Claude is thinking..."}),e.jsx(t.TypingIndicator,{label:"Generating response..."})]}),decorators:[s=>e.jsx("div",{style:{background:"var(--surface-subtle)",padding:"var(--spacing-4)",borderRadius:"var(--radius-container)"},children:e.jsx(s,{})})]},b={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-4)"},children:[e.jsx(t.CodeBlock,{code:"function greet(name: string): string {\n  return `Hello, ${name}!`;\n}",language:"typescript"}),e.jsx(t.CodeBlock,{code:`SELECT u.name, COUNT(o.id) as order_count
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.created_at > '2024-01-01'
GROUP BY u.id
ORDER BY order_count DESC
LIMIT 10;`,language:"sql",showLineNumbers:!0}),e.jsx(t.CodeBlock,{code:`{
  "name": "@orion-ds/react",
  "version": "2.0.1",
  "dependencies": {
    "react": "^19.0.0"
  }
}`,language:"json"})]}),decorators:[s=>e.jsx("div",{style:{maxWidth:"600px",margin:"0 auto"},children:e.jsx(s,{})})]},I={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-4)",maxWidth:"400px"},children:[e.jsx(t.AudioPlayer,{src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",title:"Voice message"}),e.jsx(t.AudioPlayer,{src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",title:"Audio note",duration:240})]})},M={render:()=>e.jsx(t.FileUpload,{onFilesSelected:s=>{alert(`Selected ${s.length} file(s): ${s.map(n=>n.name).join(", ")}`)},accept:["image/*","audio/*",".pdf"],multiple:!0}),decorators:[s=>e.jsx("div",{style:{maxWidth:"400px",margin:"0 auto"},children:e.jsx(s,{})})]},T={render:()=>e.jsxs(t,{children:[e.jsx(t.Header,{title:"Dark Mode Chat",subtitle:"System theme: Dark"}),e.jsx(t.Messages,{children:k.slice(0,2).map(s=>e.jsx(t.Message,{role:s.role,content:s.content,timestamp:s.timestamp},s.id))}),e.jsx(t.Input,{placeholder:"Type a message..."})]}),parameters:{backgrounds:{default:"dark"}},decorators:[s=>e.jsx("div",{"data-theme":"dark",style:{height:"500px",background:"var(--surface-base)",borderRadius:"var(--radius-container)"},children:e.jsx(s,{})})]};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Chat>
      <Chat.Header title="AI Assistant" subtitle="Online" />
      <Chat.Messages>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        gap: 'var(--spacing-4)',
        color: 'var(--text-tertiary)',
        textAlign: 'center'
      }}>
          <div style={{
          width: 64,
          height: 64,
          borderRadius: 'var(--radius-full)',
          background: 'var(--surface-subtle)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 'var(--font-size-24)'
        }}>
            ✨
          </div>
          <div>
            <h3 style={{
            fontSize: 'var(--font-size-20)',
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--text-primary)',
            marginBottom: 'var(--spacing-2)'
          }}>
              How can I help you today?
            </h3>
            <p style={{
            fontSize: 'var(--font-size-14)'
          }}>
              Start a conversation by typing a message below.
            </p>
          </div>
        </div>
      </Chat.Messages>
      <Chat.Input placeholder="Type a message..." />
    </Chat>
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Chat>
      <Chat.Header title="AI Assistant" />
      <Chat.Messages>
        {sampleMessages.map(msg => <Chat.Message key={msg.id} role={msg.role} content={msg.content} timestamp={msg.timestamp} />)}
      </Chat.Messages>
      <Chat.Input placeholder="Type a message..." />
    </Chat>
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Chat>
      <Chat.Header title="AI Assistant" />
      <Chat.Messages>
        <Chat.Message role="user" content="What is the meaning of life?" />
        <Chat.TypingIndicator />
      </Chat.Messages>
      <Chat.Input placeholder="Type a message..." disabled />
    </Chat>
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function StreamingDemo() {
    const fullText = 'Quantum computing uses quantum mechanics principles to process information. Unlike classical computers that use bits (0 or 1), quantum computers use qubits which can be in multiple states simultaneously through a property called superposition. This allows quantum computers to explore many solutions at once, making them incredibly powerful for certain types of problems like cryptography, drug discovery, and optimization.';
    return <Chat>
        <Chat.Header title="AI Assistant" />
        <Chat.Messages>
          <Chat.Message role="user" content="Explain quantum computing in simple terms." />
          <StreamingAssistantMessage text={fullText} />
        </Chat.Messages>
        <Chat.Input placeholder="Type a message..." disabled />
      </Chat>;
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Chat>
      <Chat.Header title="Message States" />
      <Chat.Messages>
        <Chat.Message role="user" content="This message was sent successfully." status="sent" timestamp={new Date()} />
        <Chat.Message role="user" content="This message is being sent..." status="sending" />
        <Chat.Message role="user" content="This message failed to send." status="error" />
        <Chat.Message role="system" content="System notification: Connection restored." />
        <Chat.Message role="assistant" content="Assistant response with actions." actions={<>
              <Button variant="ghost" size="sm" iconOnly icon={<Copy size={16} />} aria-label="Copy" />
              <Button variant="ghost" size="sm" iconOnly icon={<RefreshCw size={16} />} aria-label="Regenerate" />
              <Button variant="ghost" size="sm" iconOnly icon={<ThumbsUp size={16} />} aria-label="Good response" />
              <Button variant="ghost" size="sm" iconOnly icon={<ThumbsDown size={16} />} aria-label="Bad response" />
            </>} />
      </Chat.Messages>
      <Chat.Input placeholder="Type a message..." />
    </Chat>
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Chat>
      <Chat.Header title="Code Examples" />
      <Chat.Messages>
        <Chat.Message role="user" content="Show me a Python function to calculate factorial." />
        <Chat.Message role="assistant" content={\`Here's a Python function to calculate factorial:

\\\`\\\`\\\`python
def factorial(n):
    """Calculate factorial of n recursively."""
    if n <= 1:
        return 1
    return n * factorial(n - 1)

# Example usage
print(factorial(5))  # Output: 120
\\\`\\\`\\\`

And here's an iterative version:

\\\`\\\`\\\`python
def factorial_iterative(n):
    result = 1
    for i in range(2, n + 1):
        result *= i
    return result
\\\`\\\`\\\`

Both approaches work, but the iterative version is more memory-efficient for large numbers.\`} />
      </Chat.Messages>
      <Chat.Input placeholder="Type a message..." />
    </Chat>
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Chat>
      <Chat.Header title="Markdown Support" />
      <Chat.Messages>
        <Chat.Message role="assistant" content={\`# Markdown Formatting Demo

This message demonstrates **bold text**, *italic text*, and ~~strikethrough~~.

## Lists

Unordered list:
- Item one
- Item two
- Item three

Ordered list:
1. First item
2. Second item
3. Third item

## Links and Code

Visit [Anthropic](https://anthropic.com) for more info.

Inline \\\`code\\\` looks like this.

## Tables

| Feature | Status | Notes |
|---------|--------|-------|
| Markdown | ✅ | Full support |
| Code blocks | ✅ | Syntax highlighting |
| Tables | ✅ | GFM style |

## Blockquotes

> This is a blockquote.
> It can span multiple lines.

---

That's all the formatting!\`} />
      </Chat.Messages>
      <Chat.Input placeholder="Type a message..." />
    </Chat>
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Chat>
      <Chat.Header title="Attachments Demo" />
      <Chat.Messages>
        <Chat.Message role="user" content={messageWithImageAttachment.content} attachments={messageWithImageAttachment.attachments} />
        <Chat.Message role="assistant" content="I can see the image. It appears to be a code editor showing some programming work. The syntax highlighting suggests it might be JavaScript or TypeScript code." />
        <Chat.Message role="user" content={messageWithMultipleAttachments.content} attachments={messageWithMultipleAttachments.attachments} />
      </Chat.Messages>
      <Chat.Input placeholder="Type a message..." allowAttachments />
    </Chat>
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const codeAttachment: ChatAttachment = {
      id: 'code1',
      type: 'code',
      name: 'example.ts',
      content: \`interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

async function fetchUser(id: string): Promise<User> {
  const response = await fetch(\\\`/api/users/\\\${id}\\\`);
  if (!response.ok) {
    throw new Error('User not found');
  }
  return response.json();
}\`,
      language: 'typescript'
    };
    return <Chat>
        <Chat.Header title="Code Attachment" />
        <Chat.Messages>
          <Chat.Message role="assistant" content="Here's the TypeScript code you requested:" attachments={[codeAttachment]} />
        </Chat.Messages>
        <Chat.Input placeholder="Type a message..." />
      </Chat>;
  }
}`,...v.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function InteractiveChat() {
    const [messages, setMessages] = useState<ChatMessage[]>([{
      id: '1',
      role: 'assistant',
      content: 'Hello! I\\'m your AI assistant. How can I help you today?',
      timestamp: new Date()
    }]);
    const [isThinking, setIsThinking] = useState(false);
    const [streamingText, setStreamingText] = useState<string | null>(null);
    const [streamingId, setStreamingId] = useState<string | null>(null);
    const handleStreamComplete = useCallback(() => {
      setMessages(prev => {
        if (!streamingText || !streamingId) return prev;
        return [...prev, {
          id: streamingId,
          role: 'assistant' as const,
          content: streamingText,
          timestamp: new Date()
        }];
      });
      setStreamingText(null);
      setStreamingId(null);
    }, [streamingText, streamingId]);
    const handleSend = useCallback((content: string) => {
      const userMessage: ChatMessage = {
        id: Date.now().toString(),
        role: 'user',
        content,
        timestamp: new Date(),
        status: 'sent'
      };
      setMessages(prev => [...prev, userMessage]);

      // Phase 1: Thinking (no content yet)
      setIsThinking(true);
      const responses: string[] = ['That\\'s an interesting question! Let me think about it. There are several perspectives to consider here, and I want to make sure I give you a thorough answer that covers the key points.', 'I understand what you\\'re asking. Here\\'s my perspective on this topic. The key insight is that complex problems often have elegant solutions when you break them down into smaller, manageable pieces.', 'Great point! Here are some thoughts on that. First, it\\'s important to understand the underlying principles. Then we can explore how they apply to your specific situation.', 'Thanks for sharing that with me. I\\'d be happy to help! Let me walk you through the approach step by step so we can find the best solution together.'];
      const randomIndex = Math.floor(Math.random() * responses.length);
      const responseText = responses[randomIndex] || 'I\\'m here to help!';
      const id = (Date.now() + 1).toString();

      // Phase 2: Streaming (after thinking delay)
      setTimeout(() => {
        setIsThinking(false);
        setStreamingId(id);
        setStreamingText(responseText);
      }, 1200);
    }, []);
    const isBusy = isThinking || streamingText !== null;
    return <Chat>
        <Chat.Header title="Interactive Chat" subtitle="Try sending a message!" actions={<Button variant="ghost" iconOnly icon={<MoreVertical size={20} />} aria-label="More options" />} />
        <Chat.Messages>
          {messages.map(msg => <Chat.Message key={msg.id} role={msg.role} content={msg.content} timestamp={msg.timestamp} status={msg.status} />)}
          {isThinking && <Chat.TypingIndicator />}
          {streamingText && <StreamingAssistantMessage key={streamingId} text={streamingText} onComplete={handleStreamComplete} />}
        </Chat.Messages>
        <Chat.Input onSend={handleSend} placeholder="Type your message..." disabled={isBusy} allowAttachments allowVoiceRecording />
      </Chat>;
  }
}`,...C.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-6)'
  }}>
      <div>
        <h4 style={{
        marginBottom: 'var(--spacing-2)',
        color: 'var(--text-secondary)'
      }}>
          Default Input
        </h4>
        <Chat.Input placeholder="Type a message..." />
      </div>

      <div>
        <h4 style={{
        marginBottom: 'var(--spacing-2)',
        color: 'var(--text-secondary)'
      }}>
          With All Features
        </h4>
        <Chat.Input placeholder="Type a message..." allowAttachments allowVoiceRecording />
      </div>

      <div>
        <h4 style={{
        marginBottom: 'var(--spacing-2)',
        color: 'var(--text-secondary)'
      }}>
          Disabled
        </h4>
        <Chat.Input placeholder="Input is disabled..." disabled />
      </div>

      <div>
        <h4 style={{
        marginBottom: 'var(--spacing-2)',
        color: 'var(--text-secondary)'
      }}>
          Loading State
        </h4>
        <Chat.Input placeholder="Sending..." isLoading />
      </div>
    </div>,
  decorators: [Story => <div style={{
    maxWidth: '600px',
    margin: '0 auto'
  }}>
        <Story />
      </div>]
}`,...w.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function ChatWithSidebar() {
    const [activeId, setActiveId] = useState('1');
    return <div style={{
      display: 'flex',
      height: '600px',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-container)',
      overflow: 'hidden'
    }}>
        <Chat.Sidebar conversations={sampleConversations} activeConversationId={activeId} onSelectConversation={setActiveId} onNewConversation={() => alert('New conversation')} onDeleteConversation={id => alert(\`Delete conversation \${id}\`)} />
        <div style={{
        flex: 1
      }}>
          <Chat>
            <Chat.Header title={sampleConversations.find(c => c.id === activeId)?.title || 'Chat'} />
            <Chat.Messages>
              {sampleMessages.map(msg => <Chat.Message key={msg.id} role={msg.role} content={msg.content} timestamp={msg.timestamp} />)}
            </Chat.Messages>
            <Chat.Input placeholder="Type a message..." />
          </Chat>
        </div>
      </div>;
  },
  decorators: [Story => <div style={{
    height: '600px'
  }}>
        <Story />
      </div>]
}`,...S.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-4)',
    padding: 'var(--spacing-4)'
  }}>
      <Chat.TypingIndicator />
      <Chat.TypingIndicator label="Claude is thinking..." />
      <Chat.TypingIndicator label="Generating response..." />
    </div>,
  decorators: [Story => <div style={{
    background: 'var(--surface-subtle)',
    padding: 'var(--spacing-4)',
    borderRadius: 'var(--radius-container)'
  }}>
        <Story />
      </div>]
}`,...j.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-4)'
  }}>
      <Chat.CodeBlock code={\`function greet(name: string): string {
  return \\\`Hello, \\\${name}!\\\`;
}\`} language="typescript" />

      <Chat.CodeBlock code={\`SELECT u.name, COUNT(o.id) as order_count
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.created_at > '2024-01-01'
GROUP BY u.id
ORDER BY order_count DESC
LIMIT 10;\`} language="sql" showLineNumbers />

      <Chat.CodeBlock code={\`{
  "name": "@orion-ds/react",
  "version": "2.0.1",
  "dependencies": {
    "react": "^19.0.0"
  }
}\`} language="json" />
    </div>,
  decorators: [Story => <div style={{
    maxWidth: '600px',
    margin: '0 auto'
  }}>
        <Story />
      </div>]
}`,...b.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-4)',
    maxWidth: '400px'
  }}>
      <Chat.AudioPlayer src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" title="Voice message" />
      <Chat.AudioPlayer src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" title="Audio note" duration={240} />
    </div>
}`,...I.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <Chat.FileUpload onFilesSelected={files => {
    alert(\`Selected \${files.length} file(s): \${files.map(f => f.name).join(', ')}\`);
  }} accept={['image/*', 'audio/*', '.pdf']} multiple />,
  decorators: [Story => <div style={{
    maxWidth: '400px',
    margin: '0 auto'
  }}>
        <Story />
      </div>]
}`,...M.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <Chat>
      <Chat.Header title="Dark Mode Chat" subtitle="System theme: Dark" />
      <Chat.Messages>
        {sampleMessages.slice(0, 2).map(msg => <Chat.Message key={msg.id} role={msg.role} content={msg.content} timestamp={msg.timestamp} />)}
      </Chat.Messages>
      <Chat.Input placeholder="Type a message..." />
    </Chat>,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  decorators: [Story => <div data-theme="dark" style={{
    height: '500px',
    background: 'var(--surface-base)',
    borderRadius: 'var(--radius-container)'
  }}>
        <Story />
      </div>]
}`,...T.parameters?.docs?.source}}};const we=["Default","WithMessages","WithTypingIndicator","StreamingMessage","MessageStates","CodeBlocks","MarkdownFormatting","WithAttachments","CodeAttachment","Interactive","InputVariations","WithSidebar","TypingIndicator","CodeBlockStandalone","AudioPlayer","FileUploadZone","DarkMode"];export{I as AudioPlayer,v as CodeAttachment,b as CodeBlockStandalone,y as CodeBlocks,T as DarkMode,m as Default,M as FileUploadZone,w as InputVariations,C as Interactive,x as MarkdownFormatting,g as MessageStates,h as StreamingMessage,j as TypingIndicator,f as WithAttachments,p as WithMessages,S as WithSidebar,u as WithTypingIndicator,we as __namedExportsOrder,Ce as default};
