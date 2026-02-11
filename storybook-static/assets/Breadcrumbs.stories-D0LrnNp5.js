import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as j}from"./index-Bi6L2ga8.js";import{E as q}from"./ellipsis-DlXNEQa3.js";import{H as F}from"./house-Bwi52rpT.js";import{C as M}from"./chevron-right-BuTIk0ZE.js";import{S as G}from"./settings-DVkWYkkM.js";import{F as V}from"./folder-CYs5hHy8.js";import{F as $}from"./file-text-3QR_BDt1.js";import"./createLucideIcon-DprCCbyf.js";const O="_breadcrumbs_1236f_8",J="_list_1236f_17",K="_listItem_1236f_26",Q="_item_1236f_36",U="_itemCurrent_1236f_58",X="_itemIcon_1236f_68",Y="_homeIcon_1236f_75",Z="_separator_1236f_83",ee="_collapseButton_1236f_92",se="_sm_1236f_114",re="_md_1236f_119",te="_lg_1236f_123",s={breadcrumbs:O,list:J,listItem:K,item:Q,itemCurrent:U,itemIcon:X,homeIcon:Y,separator:Z,collapseButton:ee,sm:se,md:re,lg:te},o=j.forwardRef(({items:i,separator:_,maxItems:z,itemsBeforeCollapse:w=1,itemsAfterCollapse:C=1,showHomeIcon:B=!1,size:a="md",className:N,...A},P)=>{const[D,T]=j.useState(!1),k=z!==void 0&&i.length>z&&!D,H=j.useMemo(()=>{if(!k)return i;const r=i.slice(0,w),n=i.slice(-C);return[...r,{id:"__collapsed__",label:"..."},...n]},[i,k,w,C]),W=()=>_?e.jsx("span",{className:s.separator,children:_}):e.jsx(M,{size:a==="sm"?14:a==="lg"?18:16,className:s.separator}),E=(r,n,x)=>{if(r.id==="__collapsed__")return e.jsx("button",{type:"button",className:s.collapseButton,onClick:()=>T(!0),"aria-label":"Show all breadcrumbs",children:e.jsx(q,{size:a==="sm"?14:a==="lg"?18:16})});const R=n===0&&B,I=e.jsxs(e.Fragment,{children:[R&&e.jsx(F,{size:a==="sm"?12:a==="lg"?16:14,className:s.homeIcon}),r.icon&&e.jsx("span",{className:s.itemIcon,children:r.icon}),e.jsx("span",{children:r.label})]});return x?e.jsx("span",{className:`${s.item} ${s.itemCurrent}`,"aria-current":"page",children:I}):r.href?e.jsx("a",{href:r.href,className:s.item,children:I}):r.onClick?e.jsx("button",{type:"button",className:s.item,onClick:r.onClick,children:I}):e.jsx("span",{className:s.item,children:I})},L=[s.breadcrumbs,s[a],N].filter(Boolean).join(" ");return e.jsx("nav",{ref:P,className:L,"aria-label":"Breadcrumb",...A,children:e.jsx("ol",{className:s.list,children:H.map((r,n)=>{const x=n===H.length-1;return e.jsxs("li",{className:s.listItem,children:[E(r,n,x),!x&&W()]},r.id)})})})});o.displayName="Breadcrumbs";o.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"BreadcrumbItem"}],raw:"BreadcrumbItem[]"},description:"Breadcrumb items"},separator:{required:!1,tsType:{name:"ReactNode"},description:`Custom separator
@default "/"`},maxItems:{required:!1,tsType:{name:"number"},description:`Maximum items to show before collapsing
@default undefined (no collapse)`},itemsBeforeCollapse:{required:!1,tsType:{name:"number"},description:`Number of items to show at start when collapsed
@default 1`,defaultValue:{value:"1",computed:!1}},itemsAfterCollapse:{required:!1,tsType:{name:"number"},description:`Number of items to show at end when collapsed
@default 1`,defaultValue:{value:"1",computed:!1}},showHomeIcon:{required:!1,tsType:{name:"boolean"},description:`Show home icon for first item
@default false`,defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`Size variant
@default "md"`,defaultValue:{value:"'md'",computed:!1}}},composes:["HTMLAttributes"]};const ue={title:"Sections/App/Breadcrumbs",component:o,parameters:{layout:"padded"},tags:["autodocs"]},t=[{id:"home",label:"Home",href:"/"},{id:"projects",label:"Projects",href:"/projects"},{id:"alpha",label:"Project Alpha",href:"/projects/alpha"},{id:"settings",label:"Settings"}],c={args:{items:t}},l={args:{items:t,showHomeIcon:!0}},m={args:{items:[{id:"home",label:"Home",href:"/"},{id:"docs",label:"Documents",href:"/docs",icon:e.jsx(V,{size:14})},{id:"file",label:"Report.pdf",icon:e.jsx($,{size:14})}],showHomeIcon:!0}},d={args:{items:[{id:"home",label:"Home",href:"/"},{id:"workspace",label:"Workspace",href:"/workspace"},{id:"projects",label:"Projects",href:"/workspace/projects"},{id:"alpha",label:"Project Alpha",href:"/workspace/projects/alpha"},{id:"docs",label:"Documents",href:"/workspace/projects/alpha/docs"},{id:"settings",label:"Settings"}],maxItems:4,itemsBeforeCollapse:1,itemsAfterCollapse:2}},p={args:{items:t,separator:"/"}},u={args:{items:t,separator:"→"}},f={args:{items:t,size:"sm"}},g={args:{items:t,size:"lg"}},h={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-6)"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"var(--spacing-2)",fontSize:"var(--font-size-12)",color:"var(--text-tertiary)"},children:"Small"}),e.jsx(o,{items:t,size:"sm"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"var(--spacing-2)",fontSize:"var(--font-size-12)",color:"var(--text-tertiary)"},children:"Medium (default)"}),e.jsx(o,{items:t,size:"md"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"var(--spacing-2)",fontSize:"var(--font-size-12)",color:"var(--text-tertiary)"},children:"Large"}),e.jsx(o,{items:t,size:"lg"})]})]})},b={args:{items:[{id:"home",label:"Home",onClick:()=>alert("Go to Home")},{id:"products",label:"Products",onClick:()=>alert("Go to Products")},{id:"electronics",label:"Electronics",onClick:()=>alert("Go to Electronics")},{id:"laptop",label:"Laptop Pro 16"}]}},v={args:{items:[{id:"home",label:"Dashboard",href:"/"},{id:"settings",label:"Settings"}],showHomeIcon:!0}},y={args:{items:[{id:"home",label:"Dashboard"}],showHomeIcon:!0}},S={render:()=>e.jsxs("div",{style:{padding:"var(--spacing-4)",background:"var(--surface-subtle)",borderRadius:"var(--radius-sm)"},children:[e.jsx(o,{items:[{id:"settings",label:"Settings",href:"/settings",icon:e.jsx(G,{size:14})},{id:"account",label:"Account",href:"/settings/account"},{id:"security",label:"Security"}],showHomeIcon:!0,size:"sm"}),e.jsx("h1",{style:{margin:"var(--spacing-4) 0 var(--spacing-2)",fontSize:"var(--font-size-24)",fontWeight:"var(--font-weight-medium)"},children:"Security Settings"}),e.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"var(--font-size-14)"},children:"Manage your account security preferences"})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems
  }
}`,...c.parameters?.docs?.source},description:{story:"Default Breadcrumbs",...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    showHomeIcon: true
  }
}`,...l.parameters?.docs?.source},description:{story:"With home icon",...l.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 'home',
      label: 'Home',
      href: '/'
    }, {
      id: 'docs',
      label: 'Documents',
      href: '/docs',
      icon: <Folder size={14} />
    }, {
      id: 'file',
      label: 'Report.pdf',
      icon: <FileText size={14} />
    }],
    showHomeIcon: true
  }
}`,...m.parameters?.docs?.source},description:{story:"With custom icons",...m.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 'home',
      label: 'Home',
      href: '/'
    }, {
      id: 'workspace',
      label: 'Workspace',
      href: '/workspace'
    }, {
      id: 'projects',
      label: 'Projects',
      href: '/workspace/projects'
    }, {
      id: 'alpha',
      label: 'Project Alpha',
      href: '/workspace/projects/alpha'
    }, {
      id: 'docs',
      label: 'Documents',
      href: '/workspace/projects/alpha/docs'
    }, {
      id: 'settings',
      label: 'Settings'
    }],
    maxItems: 4,
    itemsBeforeCollapse: 1,
    itemsAfterCollapse: 2
  }
}`,...d.parameters?.docs?.source},description:{story:"Collapsible (long path)",...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    separator: '/'
  }
}`,...p.parameters?.docs?.source},description:{story:"Custom separator",...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    separator: '→'
  }
}`,...u.parameters?.docs?.source},description:{story:"Arrow separator",...u.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    size: 'sm'
  }
}`,...f.parameters?.docs?.source},description:{story:"Size: Small",...f.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    size: 'lg'
  }
}`,...g.parameters?.docs?.source},description:{story:"Size: Large",...g.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-6)'
  }}>
      <div>
        <p style={{
        marginBottom: 'var(--spacing-2)',
        fontSize: 'var(--font-size-12)',
        color: 'var(--text-tertiary)'
      }}>
          Small
        </p>
        <Breadcrumbs items={sampleItems} size="sm" />
      </div>
      <div>
        <p style={{
        marginBottom: 'var(--spacing-2)',
        fontSize: 'var(--font-size-12)',
        color: 'var(--text-tertiary)'
      }}>
          Medium (default)
        </p>
        <Breadcrumbs items={sampleItems} size="md" />
      </div>
      <div>
        <p style={{
        marginBottom: 'var(--spacing-2)',
        fontSize: 'var(--font-size-12)',
        color: 'var(--text-tertiary)'
      }}>
          Large
        </p>
        <Breadcrumbs items={sampleItems} size="lg" />
      </div>
    </div>
}`,...h.parameters?.docs?.source},description:{story:"All sizes comparison",...h.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 'home',
      label: 'Home',
      onClick: () => alert('Go to Home')
    }, {
      id: 'products',
      label: 'Products',
      onClick: () => alert('Go to Products')
    }, {
      id: 'electronics',
      label: 'Electronics',
      onClick: () => alert('Go to Electronics')
    }, {
      id: 'laptop',
      label: 'Laptop Pro 16'
    }]
  }
}`,...b.parameters?.docs?.source},description:{story:"With onClick handlers",...b.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 'home',
      label: 'Dashboard',
      href: '/'
    }, {
      id: 'settings',
      label: 'Settings'
    }],
    showHomeIcon: true
  }
}`,...v.parameters?.docs?.source},description:{story:"Two items only",...v.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 'home',
      label: 'Dashboard'
    }],
    showHomeIcon: true
  }
}`,...y.parameters?.docs?.source},description:{story:"Single item",...y.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 'var(--spacing-4)',
    background: 'var(--surface-subtle)',
    borderRadius: 'var(--radius-sm)'
  }}>
      <Breadcrumbs items={[{
      id: 'settings',
      label: 'Settings',
      href: '/settings',
      icon: <Settings size={14} />
    }, {
      id: 'account',
      label: 'Account',
      href: '/settings/account'
    }, {
      id: 'security',
      label: 'Security'
    }]} showHomeIcon size="sm" />
      <h1 style={{
      margin: 'var(--spacing-4) 0 var(--spacing-2)',
      fontSize: 'var(--font-size-24)',
      fontWeight: 'var(--font-weight-medium)'
    }}>
        Security Settings
      </h1>
      <p style={{
      color: 'var(--text-secondary)',
      fontSize: 'var(--font-size-14)'
    }}>
        Manage your account security preferences
      </p>
    </div>
}`,...S.parameters?.docs?.source},description:{story:"In a page context",...S.parameters?.docs?.description}}};const fe=["Default","WithHomeIcon","WithIcons","Collapsible","CustomSeparator","ArrowSeparator","Small","Large","AllSizes","WithClickHandlers","TwoItems","SingleItem","InPageContext"];export{h as AllSizes,u as ArrowSeparator,d as Collapsible,p as CustomSeparator,c as Default,S as InPageContext,g as Large,y as SingleItem,f as Small,v as TwoItems,b as WithClickHandlers,l as WithHomeIcon,m as WithIcons,fe as __namedExportsOrder,ue as default};
