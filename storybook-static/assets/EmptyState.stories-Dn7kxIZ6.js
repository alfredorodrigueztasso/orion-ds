import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as _}from"./index-Bi6L2ga8.js";import{B as t}from"./Button-C5l-MScQ.js";import{I as h}from"./inbox-uqBrsvVO.js";import{F as b}from"./folder-open-BIWIaO1M.js";import{S as T}from"./shopping-cart-jJMduW6k.js";import{M as w}from"./message-square-9wXJwYnY.js";import{B as M}from"./bell-B0mciaZ5.js";import{S as z}from"./search-BC3UyaPv.js";import{F as I}from"./file-text-3QR_BDt1.js";import{U as C}from"./users-B3aIcKNm.js";import"./createLucideIcon-DprCCbyf.js";const E="_emptyState_6m57l_8",D="_sm_6m57l_21",F="_icon_6m57l_24",q="_title_6m57l_28",Y="_description_6m57l_32",A="_actions_6m57l_37",L="_md_6m57l_43",R="_lg_6m57l_63",s={emptyState:E,sm:D,icon:F,title:q,description:Y,actions:A,md:L,lg:R},o=_.forwardRef(({icon:y,title:v,description:f,action:x,secondaryAction:S,size:j="md",className:N,...W},k)=>{const B=[s.emptyState,s[j],N].filter(Boolean).join(" ");return e.jsxs("div",{ref:k,className:B,...W,children:[y&&e.jsx("div",{className:s.icon,"aria-hidden":"true",children:y}),e.jsx("h3",{className:s.title,children:v}),f&&e.jsx("p",{className:s.description,children:f}),(x||S)&&e.jsxs("div",{className:s.actions,children:[x,S]})]})});o.displayName="EmptyState";o.__docgenInfo={description:"",methods:[],displayName:"EmptyState",props:{icon:{required:!1,tsType:{name:"ReactNode"},description:"Icon or illustration to display"},title:{required:!0,tsType:{name:"string"},description:"Main title text"},description:{required:!1,tsType:{name:"string"},description:"Description text"},action:{required:!1,tsType:{name:"ReactNode"},description:"Primary action button"},secondaryAction:{required:!1,tsType:{name:"ReactNode"},description:"Secondary action button"},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`Size variant
@default 'md'`,defaultValue:{value:"'md'",computed:!1}}},composes:["HTMLAttributes"]};const ee={title:"Components/Feedback/EmptyState",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"radio",options:["sm","md","lg"]}}},r={args:{title:"No items found",description:"Try adjusting your search or filter to find what you're looking for."}},i={args:{icon:e.jsx(h,{size:48,strokeWidth:1.5}),title:"Your inbox is empty",description:"When you receive messages, they'll appear here."}},a={args:{icon:e.jsx(I,{size:48,strokeWidth:1.5}),title:"No documents",description:"Get started by creating your first document.",action:e.jsx(t,{children:"Create Document"})}},n={args:{icon:e.jsx(C,{size:48,strokeWidth:1.5}),title:"No team members",description:"Invite people to collaborate on your project.",action:e.jsx(t,{children:"Invite Members"}),secondaryAction:e.jsx(t,{variant:"secondary",children:"Learn More"})}},c={args:{size:"sm",icon:e.jsx(z,{size:32,strokeWidth:1.5}),title:"No results",description:"Try a different search term."}},d={args:{size:"lg",icon:e.jsx(T,{size:64,strokeWidth:1.5}),title:"Your cart is empty",description:"Looks like you haven't added any items to your cart yet. Start shopping to fill it up!",action:e.jsx(t,{size:"lg",children:"Browse Products"})}},l={args:{icon:e.jsx(z,{size:48,strokeWidth:1.5}),title:"No results found",description:`We couldn't find anything matching "quantum computing". Try different keywords.`,action:e.jsx(t,{variant:"secondary",children:"Clear Search"})}},m={args:{icon:e.jsx(b,{size:48,strokeWidth:1.5}),title:"This folder is empty",description:"Drag and drop files here, or click to upload.",action:e.jsx(t,{children:"Upload Files"})}},p={args:{icon:e.jsx(M,{size:48,strokeWidth:1.5}),title:"You're all caught up!",description:"No new notifications at this time."}},u={args:{icon:e.jsx(w,{size:48,strokeWidth:1.5}),title:"Start a conversation",description:"Send a message to begin chatting with your contacts.",action:e.jsx(t,{children:"New Message"})}},g={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-12)"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"var(--spacing-4)"},children:"Small"}),e.jsx(o,{size:"sm",icon:e.jsx(h,{size:32,strokeWidth:1.5}),title:"No messages",description:"Your inbox is empty."})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"var(--spacing-4)"},children:"Medium (Default)"}),e.jsx(o,{size:"md",icon:e.jsx(h,{size:48,strokeWidth:1.5}),title:"No messages",description:"Your inbox is empty.",action:e.jsx(t,{children:"Compose"})})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"var(--spacing-4)"},children:"Large"}),e.jsx(o,{size:"lg",icon:e.jsx(h,{size:64,strokeWidth:1.5}),title:"No messages",description:"When you receive messages from your contacts, they'll appear here in your inbox.",action:e.jsx(t,{size:"lg",children:"Compose Message"})})]})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'No items found',
    description: 'Try adjusting your search or filter to find what you\\'re looking for.'
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <Inbox size={48} strokeWidth={1.5} />,
    title: 'Your inbox is empty',
    description: 'When you receive messages, they\\'ll appear here.'
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <FileText size={48} strokeWidth={1.5} />,
    title: 'No documents',
    description: 'Get started by creating your first document.',
    action: <Button>Create Document</Button>
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <Users size={48} strokeWidth={1.5} />,
    title: 'No team members',
    description: 'Invite people to collaborate on your project.',
    action: <Button>Invite Members</Button>,
    secondaryAction: <Button variant="secondary">Learn More</Button>
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    icon: <Search size={32} strokeWidth={1.5} />,
    title: 'No results',
    description: 'Try a different search term.'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    icon: <ShoppingCart size={64} strokeWidth={1.5} />,
    title: 'Your cart is empty',
    description: 'Looks like you haven\\'t added any items to your cart yet. Start shopping to fill it up!',
    action: <Button size="lg">Browse Products</Button>
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <Search size={48} strokeWidth={1.5} />,
    title: 'No results found',
    description: 'We couldn\\'t find anything matching "quantum computing". Try different keywords.',
    action: <Button variant="secondary">Clear Search</Button>
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <FolderOpen size={48} strokeWidth={1.5} />,
    title: 'This folder is empty',
    description: 'Drag and drop files here, or click to upload.',
    action: <Button>Upload Files</Button>
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <Bell size={48} strokeWidth={1.5} />,
    title: 'You\\'re all caught up!',
    description: 'No new notifications at this time.'
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <MessageSquare size={48} strokeWidth={1.5} />,
    title: 'Start a conversation',
    description: 'Send a message to begin chatting with your contacts.',
    action: <Button>New Message</Button>
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-12)'
  }}>
      <div>
        <h3 style={{
        marginBottom: 'var(--spacing-4)'
      }}>Small</h3>
        <EmptyState size="sm" icon={<Inbox size={32} strokeWidth={1.5} />} title="No messages" description="Your inbox is empty." />
      </div>
      <div>
        <h3 style={{
        marginBottom: 'var(--spacing-4)'
      }}>Medium (Default)</h3>
        <EmptyState size="md" icon={<Inbox size={48} strokeWidth={1.5} />} title="No messages" description="Your inbox is empty." action={<Button>Compose</Button>} />
      </div>
      <div>
        <h3 style={{
        marginBottom: 'var(--spacing-4)'
      }}>Large</h3>
        <EmptyState size="lg" icon={<Inbox size={64} strokeWidth={1.5} />} title="No messages" description="When you receive messages from your contacts, they'll appear here in your inbox." action={<Button size="lg">Compose Message</Button>} />
      </div>
    </div>
}`,...g.parameters?.docs?.source}}};const te=["Default","WithIcon","WithAction","WithTwoActions","SmallSize","LargeSize","SearchResults","EmptyFolder","NoNotifications","NoConversations","AllSizes"];export{g as AllSizes,r as Default,m as EmptyFolder,d as LargeSize,u as NoConversations,p as NoNotifications,l as SearchResults,c as SmallSize,a as WithAction,i as WithIcon,n as WithTwoActions,te as __namedExportsOrder,ee as default};
