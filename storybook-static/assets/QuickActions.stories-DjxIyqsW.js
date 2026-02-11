import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as l}from"./index-Bi6L2ga8.js";import{X as F}from"./x-Dd336Dmd.js";import{P as C}from"./plus-_oTOY7dX.js";import{F as T}from"./file-text-3QR_BDt1.js";import{U as z}from"./upload-DDi9KpFe.js";import{M as q}from"./mail-B1OdJ1bA.js";import{S as I}from"./square-pen-Becd8mc9.js";import{S as Q}from"./share-2-HZXmMQlo.js";import{D as V}from"./download-B1IGscQm.js";import{T as H}from"./trash-2-B67onKV4.js";import"./createLucideIcon-DprCCbyf.js";const K="_quickActions_76k6y_8",X="_fixed_76k6y_12",G="_fabTrigger_76k6y_54",J="_fabTriggerIcon_76k6y_80",Y="_fabTriggerIconRotate_76k6y_87",Z="_fabActions_76k6y_91",ee="_open_76k6y_102",ne="_fabAction_76k6y_91",te="_fabActionIcon_76k6y_135",oe="_fabActionLabel_76k6y_143",ae="_bar_76k6y_153",ie="_barAction_76k6y_164",se="_barActionIcon_76k6y_182",re="_barActionLabel_76k6y_190",ce="_menuTrigger_76k6y_207",le="_menu_76k6y_207",de="_menuSlide_76k6y_1",me="_menuAction_76k6y_249",ue="_menuActionIcon_76k6y_268",pe="_menuActionLabel_76k6y_277",be="_actionDisabled_76k6y_300",fe="_shortcut_76k6y_310",t={quickActions:K,fixed:X,"position-bottom-right":"_position-bottom-right_76k6y_17","position-bottom-left":"_position-bottom-left_76k6y_22","position-bottom-center":"_position-bottom-center_76k6y_27","position-top-right":"_position-top-right_76k6y_33","position-top-left":"_position-top-left_76k6y_38","variant-fab":"_variant-fab_76k6y_47",fabTrigger:G,fabTriggerIcon:J,fabTriggerIconRotate:Y,fabActions:Z,open:ee,fabAction:ne,fabActionIcon:te,fabActionLabel:oe,"variant-bar":"_variant-bar_76k6y_153",bar:ae,barAction:ie,barActionIcon:se,barActionLabel:re,"variant-menu":"_variant-menu_76k6y_200",menuTrigger:ce,menu:le,menuSlide:de,menuAction:me,menuActionIcon:ue,menuActionLabel:pe,"action-primary":"_action-primary_76k6y_288","action-danger":"_action-danger_76k6y_292",actionDisabled:be,shortcut:fe},L=l.forwardRef(({actions:i,variant:s="fab",position:B="bottom-right",primaryAction:D,triggerIcon:E,showLabels:U,fixed:R=!0,offset:O=24,className:W,style:M,...w},P)=>{const[o,r]=l.useState(!1),d=l.useRef(null),$=U??s==="bar";l.useEffect(()=>{if(!o)return;const n=c=>{d.current&&!d.current.contains(c.target)&&r(!1)};return document.addEventListener("mousedown",n),()=>document.removeEventListener("mousedown",n)},[o]),l.useEffect(()=>{if(!o)return;const n=c=>{c.key==="Escape"&&r(!1)};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)},[o]);const m=n=>{n.disabled||(n.onClick(),(s==="fab"||s==="menu")&&r(!1))},N=[t.quickActions,t[`variant-${s}`],t[`position-${B}`],R&&t.fixed,o&&t.open,W].filter(Boolean).join(" "),S={...M,"--offset":`${O}px`};return s==="fab"?e.jsxs("div",{ref:d,className:N,style:S,...w,children:[e.jsx("div",{className:t.fabActions,children:i.map((n,c)=>e.jsxs("button",{type:"button",className:`${t.fabAction} ${n.variant?t[`action-${n.variant}`]:""} ${n.disabled?t.actionDisabled:""}`,onClick:()=>m(n),disabled:n.disabled,style:{transitionDelay:o?`${c*50}ms`:"0ms"},title:n.label,children:[e.jsx("span",{className:t.fabActionIcon,children:n.icon}),$&&e.jsx("span",{className:t.fabActionLabel,children:n.label})]},n.id))}),e.jsx("button",{type:"button",className:t.fabTrigger,onClick:()=>{D&&!o?m(D):r(!o)},"aria-expanded":o,"aria-label":o?"Close actions":"Open actions",children:e.jsx("span",{className:`${t.fabTriggerIcon} ${o?t.fabTriggerIconRotate:""}`,children:o?e.jsx(F,{size:24}):E||e.jsx(C,{size:24})})})]}):s==="bar"?e.jsx("div",{ref:P,className:N,style:S,...w,children:e.jsx("div",{className:t.bar,children:i.map(n=>e.jsxs("button",{type:"button",className:`${t.barAction} ${n.variant?t[`action-${n.variant}`]:""} ${n.disabled?t.actionDisabled:""}`,onClick:()=>m(n),disabled:n.disabled,title:n.label,children:[e.jsx("span",{className:t.barActionIcon,children:n.icon}),$&&e.jsx("span",{className:t.barActionLabel,children:n.label}),n.shortcut&&e.jsx("kbd",{className:t.shortcut,children:n.shortcut})]},n.id))})}):e.jsxs("div",{ref:d,className:N,style:S,...w,children:[o&&e.jsx("div",{className:t.menu,children:i.map(n=>e.jsxs("button",{type:"button",className:`${t.menuAction} ${n.variant?t[`action-${n.variant}`]:""} ${n.disabled?t.actionDisabled:""}`,onClick:()=>m(n),disabled:n.disabled,children:[e.jsx("span",{className:t.menuActionIcon,children:n.icon}),e.jsx("span",{className:t.menuActionLabel,children:n.label}),n.shortcut&&e.jsx("kbd",{className:t.shortcut,children:n.shortcut})]},n.id))}),e.jsx("button",{type:"button",className:t.menuTrigger,onClick:()=>r(!o),"aria-expanded":o,"aria-label":o?"Close menu":"Open menu",children:o?e.jsx(F,{size:20}):E||e.jsx(C,{size:20})})]})});L.displayName="QuickActions";L.__docgenInfo={description:"",methods:[],displayName:"QuickActions",props:{actions:{required:!0,tsType:{name:"Array",elements:[{name:"QuickAction"}],raw:"QuickAction[]"},description:"Array of quick actions"},variant:{required:!1,tsType:{name:"union",raw:"'fab' | 'bar' | 'menu'",elements:[{name:"literal",value:"'fab'"},{name:"literal",value:"'bar'"},{name:"literal",value:"'menu'"}]},description:`Display variant
- fab: Floating action button that expands
- bar: Horizontal action bar
- menu: Vertical menu style
@default 'fab'`,defaultValue:{value:"'fab'",computed:!1}},position:{required:!1,tsType:{name:"union",raw:`| 'bottom-right'
| 'bottom-left'
| 'bottom-center'
| 'top-right'
| 'top-left'`,elements:[{name:"literal",value:"'bottom-right'"},{name:"literal",value:"'bottom-left'"},{name:"literal",value:"'bottom-center'"},{name:"literal",value:"'top-right'"},{name:"literal",value:"'top-left'"}]},description:`Position on screen
@default 'bottom-right'`,defaultValue:{value:"'bottom-right'",computed:!1}},primaryAction:{required:!1,tsType:{name:"QuickAction"},description:"Primary action (shown when FAB is collapsed)"},triggerIcon:{required:!1,tsType:{name:"ReactNode"},description:"Custom trigger icon for FAB"},showLabels:{required:!1,tsType:{name:"boolean"},description:`Always show labels (bar variant)
@default true for bar, false for fab`},fixed:{required:!1,tsType:{name:"boolean"},description:`Fixed position
@default true`,defaultValue:{value:"true",computed:!1}},offset:{required:!1,tsType:{name:"number"},description:`Offset from edge in pixels
@default 24`,defaultValue:{value:"24",computed:!1}}},composes:["HTMLAttributes"]};const Se={title:"Sections/App/QuickActions",component:L,parameters:{layout:"fullscreen",docs:{description:{component:"A FAB or floating action bar for quick access to common actions. Optimized for Product Mode with efficient action access."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["fab","bar","menu"]},position:{control:"select",options:["bottom-right","bottom-left","bottom-center","top-right","top-left"]},fixed:{control:"boolean"},showLabels:{control:"boolean"},offset:{control:"number"}},decorators:[i=>e.jsx("div",{style:{height:"400px",position:"relative",background:"var(--surface-subtle)"},children:e.jsx(i,{})})]},a=[{id:"new",label:"New Document",icon:e.jsx(T,{size:18}),onClick:()=>console.log("New")},{id:"upload",label:"Upload File",icon:e.jsx(z,{size:18}),onClick:()=>console.log("Upload")},{id:"email",label:"Send Email",icon:e.jsx(q,{size:18}),onClick:()=>console.log("Email")}],u={args:{variant:"fab",actions:a,position:"bottom-right"}},p={args:{variant:"fab",actions:a,position:"bottom-right",showLabels:!0}},b={args:{variant:"bar",actions:a,position:"bottom-center"}},f={args:{variant:"bar",actions:[{id:"new",label:"New",icon:e.jsx(C,{size:18}),shortcut:"⌘N",onClick:()=>{}},{id:"edit",label:"Edit",icon:e.jsx(I,{size:18}),shortcut:"⌘E",onClick:()=>{}},{id:"share",label:"Share",icon:e.jsx(Q,{size:18}),shortcut:"⌘S",onClick:()=>{}}],position:"bottom-center"}},g={args:{variant:"menu",actions:a,position:"bottom-right"}},h={args:{variant:"menu",actions:[{id:"new",label:"New Document",icon:e.jsx(T,{size:18}),shortcut:"⌘N",onClick:()=>{}},{id:"upload",label:"Upload",icon:e.jsx(z,{size:18}),shortcut:"⌘U",onClick:()=>{}},{id:"download",label:"Download",icon:e.jsx(V,{size:18}),shortcut:"⌘D",onClick:()=>{}}],position:"bottom-right"}},_={args:{variant:"fab",actions:a,position:"bottom-left"}},k={args:{variant:"fab",actions:a,position:"top-right"}},y={args:{variant:"menu",actions:[{id:"edit",label:"Edit",icon:e.jsx(I,{size:18}),variant:"default",onClick:()=>{}},{id:"duplicate",label:"Duplicate",icon:e.jsx(T,{size:18}),variant:"primary",onClick:()=>{}},{id:"delete",label:"Delete",icon:e.jsx(H,{size:18}),variant:"danger",onClick:()=>{}}],position:"bottom-right"}},v={args:{variant:"fab",actions:[{id:"new",label:"New",icon:e.jsx(C,{size:18}),onClick:()=>{}},{id:"upload",label:"Upload",icon:e.jsx(z,{size:18}),onClick:()=>{},disabled:!0},{id:"email",label:"Email",icon:e.jsx(q,{size:18}),onClick:()=>{}}],position:"bottom-right",showLabels:!0}},x={args:{variant:"fab",actions:a,position:"bottom-right",offset:48}},A={args:{variant:"bar",actions:a,position:"bottom-center",fixed:!1},decorators:[i=>e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"flex-end",height:"400px",padding:"var(--spacing-6)"},children:e.jsx(i,{})})]},j={args:{variant:"fab",actions:a,triggerIcon:e.jsx(I,{size:24}),position:"bottom-right"}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'fab',
    actions: sampleActions,
    position: 'bottom-right'
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'fab',
    actions: sampleActions,
    position: 'bottom-right',
    showLabels: true
  }
}`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'bar',
    actions: sampleActions,
    position: 'bottom-center'
  }
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'bar',
    actions: [{
      id: 'new',
      label: 'New',
      icon: <Plus size={18} />,
      shortcut: '⌘N',
      onClick: () => {}
    }, {
      id: 'edit',
      label: 'Edit',
      icon: <Edit size={18} />,
      shortcut: '⌘E',
      onClick: () => {}
    }, {
      id: 'share',
      label: 'Share',
      icon: <Share2 size={18} />,
      shortcut: '⌘S',
      onClick: () => {}
    }],
    position: 'bottom-center'
  }
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'menu',
    actions: sampleActions,
    position: 'bottom-right'
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'menu',
    actions: [{
      id: 'new',
      label: 'New Document',
      icon: <FileText size={18} />,
      shortcut: '⌘N',
      onClick: () => {}
    }, {
      id: 'upload',
      label: 'Upload',
      icon: <Upload size={18} />,
      shortcut: '⌘U',
      onClick: () => {}
    }, {
      id: 'download',
      label: 'Download',
      icon: <Download size={18} />,
      shortcut: '⌘D',
      onClick: () => {}
    }],
    position: 'bottom-right'
  }
}`,...h.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'fab',
    actions: sampleActions,
    position: 'bottom-left'
  }
}`,..._.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'fab',
    actions: sampleActions,
    position: 'top-right'
  }
}`,...k.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'menu',
    actions: [{
      id: 'edit',
      label: 'Edit',
      icon: <Edit size={18} />,
      variant: 'default',
      onClick: () => {}
    }, {
      id: 'duplicate',
      label: 'Duplicate',
      icon: <FileText size={18} />,
      variant: 'primary',
      onClick: () => {}
    }, {
      id: 'delete',
      label: 'Delete',
      icon: <Trash2 size={18} />,
      variant: 'danger',
      onClick: () => {}
    }],
    position: 'bottom-right'
  }
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'fab',
    actions: [{
      id: 'new',
      label: 'New',
      icon: <Plus size={18} />,
      onClick: () => {}
    }, {
      id: 'upload',
      label: 'Upload',
      icon: <Upload size={18} />,
      onClick: () => {},
      disabled: true
    }, {
      id: 'email',
      label: 'Email',
      icon: <Mail size={18} />,
      onClick: () => {}
    }],
    position: 'bottom-right',
    showLabels: true
  }
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'fab',
    actions: sampleActions,
    position: 'bottom-right',
    offset: 48
  }
}`,...x.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'bar',
    actions: sampleActions,
    position: 'bottom-center',
    fixed: false
  },
  decorators: [Story => <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: '400px',
    padding: 'var(--spacing-6)'
  }}>
        <Story />
      </div>]
}`,...A.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'fab',
    actions: sampleActions,
    triggerIcon: <Edit size={24} />,
    position: 'bottom-right'
  }
}`,...j.parameters?.docs?.source}}};const Te=["FAB","FABWithLabels","Bar","BarWithShortcuts","Menu","MenuWithShortcuts","BottomLeft","TopRight","WithVariants","WithDisabled","CustomOffset","NotFixed","CustomTriggerIcon"];export{b as Bar,f as BarWithShortcuts,_ as BottomLeft,x as CustomOffset,j as CustomTriggerIcon,u as FAB,p as FABWithLabels,g as Menu,h as MenuWithShortcuts,A as NotFixed,k as TopRight,v as WithDisabled,y as WithVariants,Te as __namedExportsOrder,Se as default};
