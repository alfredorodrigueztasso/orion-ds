import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as w}from"./index-Bi6L2ga8.js";import{B as a}from"./Button-C5l-MScQ.js";import{F as A}from"./folder-open-BIWIaO1M.js";import{I as u}from"./inbox-uqBrsvVO.js";import{F as v}from"./file-text-3QR_BDt1.js";import{U as F}from"./users-B3aIcKNm.js";import{S as _}from"./search-BC3UyaPv.js";import"./createLucideIcon-DprCCbyf.js";const I="_emptyState_nu6tm_8",C="_content_nu6tm_16",k="_icon_nu6tm_29",U="_illustration_nu6tm_40",q="_text_nu6tm_57",R="_title_nu6tm_63",D="_description_nu6tm_72",E="_actions_nu6tm_84",t={emptyState:I,content:C,icon:k,illustration:U,text:q,title:R,description:D,actions:E,"size-sm":"_size-sm_nu6tm_97","size-lg":"_size-lg_nu6tm_119","variant-compact":"_variant-compact_nu6tm_141","variant-full-page":"_variant-full-page_nu6tm_167"},g=w.forwardRef(({icon:f,illustration:p,title:z,description:y,action:h,secondaryAction:x,variant:S="default",size:N="md",className:j,...T},b)=>{const B=[t.emptyState,t[`variant-${S}`],t[`size-${N}`],j].filter(Boolean).join(" ");return e.jsx("div",{ref:b,className:B,...T,children:e.jsxs("div",{className:t.content,children:[p&&e.jsx("div",{className:t.illustration,children:p}),f&&!p&&e.jsx("div",{className:t.icon,children:f}),e.jsxs("div",{className:t.text,children:[e.jsx("h3",{className:t.title,children:z}),y&&e.jsx("p",{className:t.description,children:y})]}),(h||x)&&e.jsxs("div",{className:t.actions,children:[h,x]})]})})});g.displayName="EmptyState";g.__docgenInfo={description:"",methods:[],displayName:"EmptyState",props:{icon:{required:!1,tsType:{name:"ReactNode"},description:`Icon element to display
Typically a Lucide icon with size 48-64`},illustration:{required:!1,tsType:{name:"ReactNode"},description:`Optional illustration element (larger visual)
Use instead of icon for full-page variants`},title:{required:!0,tsType:{name:"string"},description:"Main title/heading"},description:{required:!1,tsType:{name:"string"},description:"Description text providing context"},action:{required:!1,tsType:{name:"ReactNode"},description:"Primary action button"},secondaryAction:{required:!1,tsType:{name:"ReactNode"},description:"Secondary action (link or button)"},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'compact' | 'full-page'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'compact'"},{name:"literal",value:"'full-page'"}]},description:`Visual variant
- default: Standard centered layout
- compact: Smaller padding and text
- full-page: Takes full viewport height
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`Size variant affecting padding and typography
@default 'md'`,defaultValue:{value:"'md'",computed:!1}}},composes:["HTMLAttributes"]};const H={title:"Sections/App/EmptyState",component:g,parameters:{layout:"centered",docs:{description:{component:"A placeholder section for empty states in SaaS applications. Optimized for Product Mode with minimal visual noise and clear CTAs."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","compact","full-page"]},size:{control:"select",options:["sm","md","lg"]}}},s={args:{icon:e.jsx(u,{size:48}),title:"No messages yet",description:"When you receive messages, they will appear here.",action:e.jsx(a,{children:"Compose Message"})}},o={args:{icon:e.jsx(_,{size:48}),title:"No results found",description:"Try adjusting your search or filter to find what you are looking for.",action:e.jsx(a,{children:"Clear Filters"}),secondaryAction:e.jsx(a,{variant:"ghost",children:"Learn More"})}},r={args:{icon:e.jsx(v,{size:48}),title:"No documents",description:"Upload your first document to get started.",action:e.jsx(a,{icon:e.jsx(v,{size:18}),children:"Upload Document"})}},n={args:{icon:e.jsx(F,{size:48}),title:"No team members",description:"Invite your team to start collaborating.",action:e.jsx(a,{children:"Invite Team"})}},i={args:{icon:e.jsx(A,{size:32}),title:"Folder is empty",description:"Add files to this folder.",variant:"compact"}},c={args:{icon:e.jsx(u,{size:64}),title:"Welcome to your inbox",description:"This is where you will see all your notifications and messages. Start by exploring the app!",action:e.jsx(a,{size:"lg",children:"Get Started"}),secondaryAction:e.jsx(a,{variant:"ghost",size:"lg",children:"Take a Tour"}),variant:"full-page"},parameters:{layout:"fullscreen"}},l={args:{icon:e.jsx(_,{size:32}),title:"No matches",size:"sm"}},m={args:{icon:e.jsx(u,{size:64}),title:"Your inbox is empty",description:"All caught up! Check back later for new messages.",size:"lg",action:e.jsx(a,{children:"Refresh"})}},d={args:{title:"Nothing here yet",description:"Content will appear here once available."}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <Inbox size={48} />,
    title: 'No messages yet',
    description: 'When you receive messages, they will appear here.',
    action: <Button>Compose Message</Button>
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <Search size={48} />,
    title: 'No results found',
    description: 'Try adjusting your search or filter to find what you are looking for.',
    action: <Button>Clear Filters</Button>,
    secondaryAction: <Button variant="ghost">Learn More</Button>
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <FileText size={48} />,
    title: 'No documents',
    description: 'Upload your first document to get started.',
    action: <Button icon={<FileText size={18} />}>Upload Document</Button>
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <Users size={48} />,
    title: 'No team members',
    description: 'Invite your team to start collaborating.',
    action: <Button>Invite Team</Button>
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <FolderOpen size={32} />,
    title: 'Folder is empty',
    description: 'Add files to this folder.',
    variant: 'compact'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <Inbox size={64} />,
    title: 'Welcome to your inbox',
    description: 'This is where you will see all your notifications and messages. Start by exploring the app!',
    action: <Button size="lg">Get Started</Button>,
    secondaryAction: <Button variant="ghost" size="lg">Take a Tour</Button>,
    variant: 'full-page'
  },
  parameters: {
    layout: 'fullscreen'
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <Search size={32} />,
    title: 'No matches',
    size: 'sm'
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <Inbox size={64} />,
    title: 'Your inbox is empty',
    description: 'All caught up! Check back later for new messages.',
    size: 'lg',
    action: <Button>Refresh</Button>
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Nothing here yet',
    description: 'Content will appear here once available.'
  }
}`,...d.parameters?.docs?.source}}};const J=["Default","WithSecondaryAction","NoData","NoUsers","Compact","FullPage","Small","Large","NoIcon"];export{i as Compact,s as Default,c as FullPage,m as Large,r as NoData,d as NoIcon,n as NoUsers,l as Small,o as WithSecondaryAction,J as __namedExportsOrder,H as default};
