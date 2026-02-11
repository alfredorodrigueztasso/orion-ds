import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as g}from"./index-Bi6L2ga8.js";import{C as F}from"./check-DDKQb6IN.js";import{B as N}from"./Badge-CTnzlsKR.js";import{A as D}from"./Avatar-CustGMqw.js";import{S as K}from"./star-BFnvMsnD.js";import{U as W}from"./user-CUEj3VL3.js";import{M as T}from"./mail-B1OdJ1bA.js";import{S as R}from"./settings-DVkWYkkM.js";import{B as L}from"./bell-B0mciaZ5.js";import{S as M}from"./shield-DhOd_9EY.js";import{C as v}from"./chevron-right-BuTIk0ZE.js";import{C as U}from"./circle-question-mark-C_pzcBL4.js";import"./createLucideIcon-DprCCbyf.js";const H="_list_7tqqq_5",$="_bordered_7tqqq_12",Q="_divided_7tqqq_18",G="_item_7tqqq_18",X="_sm_7tqqq_37",Y="_md_7tqqq_43",Z="_lg_7tqqq_47",ee="_interactive_7tqqq_54",ie="_disabled_7tqqq_58",re="_selectable_7tqqq_72",ae="_selected_7tqqq_81",se="_leading_7tqqq_96",te="_content_7tqqq_120",ne="_primary_7tqqq_128",de="_secondary_7tqqq_136",oe="_trailing_7tqqq_153",le="_checkmark_7tqqq_161",ce="_customItem_7tqqq_174",me="_empty_7tqqq_179",a={list:H,bordered:$,divided:Q,item:G,sm:X,md:Y,lg:Z,interactive:ee,disabled:ie,selectable:re,selected:ae,leading:se,content:te,primary:ne,secondary:de,trailing:oe,checkmark:le,customItem:ce,empty:me},pe=({item:i,size:s,interactive:t,selectable:r,onClick:c})=>{const o=g.useCallback(()=>{!i.disabled&&(t||r)&&i.onClick&&i.onClick(),c?.()},[i,t,r,c]),u=g.useCallback(p=>{(p.key==="Enter"||p.key===" ")&&(t||r)&&(p.preventDefault(),o())},[t,r,o]),y=[a.item,a[s],t&&a.interactive,r&&a.selectable,i.selected&&a.selected,i.disabled&&a.disabled,i.className].filter(Boolean).join(" "),m=!i.disabled&&(t||r||i.onClick);return e.jsxs("li",{className:y,role:r?"option":t?"button":void 0,tabIndex:m?0:void 0,"aria-selected":r?i.selected:void 0,"aria-disabled":i.disabled,onClick:m?o:void 0,onKeyDown:m?u:void 0,children:[i.leading&&e.jsx("span",{className:a.leading,"aria-hidden":"true",children:i.leading}),e.jsxs("div",{className:a.content,children:[e.jsx("span",{className:a.primary,children:i.primary}),i.secondary&&e.jsx("span",{className:a.secondary,children:i.secondary})]}),i.trailing&&e.jsx("span",{className:a.trailing,children:i.trailing}),r&&i.selected&&e.jsx("span",{className:a.checkmark,"aria-hidden":"true",children:e.jsx(F,{size:s==="sm"?14:s==="lg"?20:16})})]})},n=g.forwardRef(({items:i,size:s="md",variant:t="default",interactive:r=!1,selectable:c=!1,onSelect:o,renderItem:u,emptyContent:y,className:m,...p},E)=>{const O=g.useCallback(d=>{o&&!d.disabled&&o(d)},[o]),V=[a.list,a[t],m].filter(Boolean).join(" ");return i.length===0&&y?e.jsx("div",{className:a.empty,children:y}):e.jsx("ul",{ref:E,className:V,role:c?"listbox":"list",...p,children:i.map((d,J)=>u?e.jsx("li",{className:a.customItem,children:u(d,J)},d.id):e.jsx(pe,{item:d,size:s,interactive:r,selectable:c,onClick:()=>O(d)},d.id))})});n.displayName="List";n.__docgenInfo={description:"",methods:[],displayName:"List",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"ListItem"}],raw:"ListItem[]"},description:"List items"},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`Size variant
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'bordered' | 'divided'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'bordered'"},{name:"literal",value:"'divided'"}]},description:`Visual variant
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},interactive:{required:!1,tsType:{name:"boolean"},description:`Whether the list items are interactive (hoverable/clickable)
@default false`,defaultValue:{value:"false",computed:!1}},selectable:{required:!1,tsType:{name:"boolean"},description:`Whether items can be selected
@default false`,defaultValue:{value:"false",computed:!1}},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: ListItem) => void",signature:{arguments:[{type:{name:"ListItem"},name:"item"}],return:{name:"void"}}},description:"Callback when an item is selected"},renderItem:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: ListItem, index: number) => ReactNode",signature:{arguments:[{type:{name:"ListItem"},name:"item"},{type:{name:"number"},name:"index"}],return:{name:"ReactNode"}}},description:"Render custom list item content"},emptyContent:{required:!1,tsType:{name:"ReactNode"},description:"Custom empty state when no items"}},composes:["Omit"]};const Ie={title:"Components/Data Display/List",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"radio",options:["sm","md","lg"]},variant:{control:"radio",options:["default","bordered","divided"]}}},l=[{id:"1",primary:"Dashboard"},{id:"2",primary:"Settings"},{id:"3",primary:"Profile"},{id:"4",primary:"Notifications"}],P=[{id:"1",primary:"John Doe",secondary:"john.doe@example.com"},{id:"2",primary:"Jane Smith",secondary:"jane.smith@example.com"},{id:"3",primary:"Bob Johnson",secondary:"bob.johnson@example.com"}],h={args:{items:l}},f={args:{items:P}},x={args:{items:[{id:"1",primary:"Profile",secondary:"Manage your account",leading:e.jsx(W,{size:20})},{id:"2",primary:"Email",secondary:"Email preferences",leading:e.jsx(T,{size:20})},{id:"3",primary:"Settings",secondary:"App configuration",leading:e.jsx(R,{size:20})},{id:"4",primary:"Notifications",secondary:"Push & email",leading:e.jsx(L,{size:20})}],variant:"bordered"}},b={render:()=>{const i=[{id:"1",primary:"Profile",leading:e.jsx(W,{size:20}),trailing:e.jsx(v,{size:16})},{id:"2",primary:"Security",leading:e.jsx(M,{size:20}),trailing:e.jsx(v,{size:16})},{id:"3",primary:"Notifications",leading:e.jsx(L,{size:20}),trailing:e.jsx(v,{size:16})},{id:"4",primary:"Help & Support",leading:e.jsx(U,{size:20}),trailing:e.jsx(v,{size:16})}];return e.jsx("div",{style:{width:"300px"},children:e.jsx(n,{items:i.map(s=>({...s,onClick:()=>console.log(`Clicked: ${s.primary}`)})),variant:"bordered",interactive:!0})})}},j={render:()=>{const[i,s]=g.useState("1"),t=[{id:"1",primary:"Option 1",secondary:"First option"},{id:"2",primary:"Option 2",secondary:"Second option"},{id:"3",primary:"Option 3",secondary:"Third option"},{id:"4",primary:"Option 4",secondary:"Fourth option",disabled:!0}].map(r=>({...r,selected:r.id===i}));return e.jsx("div",{style:{width:"300px"},children:e.jsx(n,{items:t,variant:"bordered",selectable:!0,onSelect:r=>s(r.id)})})}},S={args:{items:[{id:"1",primary:"Alice Cooper",secondary:"Product Designer",leading:e.jsx(D,{initials:"AC",size:"sm"})},{id:"2",primary:"Bob Martin",secondary:"Software Engineer",leading:e.jsx(D,{initials:"BM",size:"sm"})},{id:"3",primary:"Carol White",secondary:"Project Manager",leading:e.jsx(D,{initials:"CW",size:"sm"})}],variant:"divided"}},q={args:{items:[{id:"1",primary:"Inbox",leading:e.jsx(T,{size:20}),trailing:e.jsx(N,{variant:"primary",children:"12"})},{id:"2",primary:"Notifications",leading:e.jsx(L,{size:20}),trailing:e.jsx(N,{variant:"warning",children:"3"})},{id:"3",primary:"Settings",leading:e.jsx(R,{size:20})},{id:"4",primary:"Security",leading:e.jsx(M,{size:20}),trailing:e.jsx(N,{variant:"success",children:"OK"})}],variant:"bordered",interactive:!0}},_={args:{items:l,size:"sm",variant:"bordered"}},z={args:{items:P,size:"lg",variant:"bordered"}},C={args:{items:l,variant:"bordered"}},I={args:{items:l,variant:"divided"}},B={args:{items:[{id:"1",primary:"Active item 1"},{id:"2",primary:"Disabled item",disabled:!0},{id:"3",primary:"Active item 2"},{id:"4",primary:"Another disabled",disabled:!0}],variant:"bordered",interactive:!0}},k={args:{items:[],emptyContent:e.jsxs("div",{style:{padding:"var(--spacing-8)",textAlign:"center"},children:[e.jsx("p",{style:{marginBottom:"var(--spacing-2)",fontWeight:"var(--font-weight-medium)"},children:"No items found"}),e.jsx("p",{style:{fontSize:"var(--font-size-14)",color:"var(--text-secondary)"},children:"Try adjusting your search or filters"})]})}},w={render:()=>{const i=[{id:"1",primary:"React",secondary:"A JavaScript library for building user interfaces"},{id:"2",primary:"Vue",secondary:"The Progressive JavaScript Framework"},{id:"3",primary:"Angular",secondary:"The modern web developer platform"}];return e.jsx("div",{style:{width:"400px"},children:e.jsx(n,{items:i,variant:"bordered",renderItem:s=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-3)",padding:"var(--spacing-3)"},children:[e.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"var(--radius-sm)",background:"var(--interactive-primary-subtle)",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(K,{size:20})}),e.jsxs("div",{style:{flex:1},children:[e.jsx("div",{style:{fontWeight:"var(--font-weight-medium)"},children:s.primary}),e.jsx("div",{style:{fontSize:"var(--font-size-14)",color:"var(--text-secondary)"},children:s.secondary})]})]})})})}},A={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-6)",width:"300px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"var(--spacing-2)"},children:"Default"}),e.jsx(n,{items:l,variant:"default"})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"var(--spacing-2)"},children:"Bordered"}),e.jsx(n,{items:l,variant:"bordered"})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"var(--spacing-2)"},children:"Divided"}),e.jsx(n,{items:l,variant:"divided"})]})]})};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    items: basicItems
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    items: detailedItems
  }
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: '1',
      primary: 'Profile',
      secondary: 'Manage your account',
      leading: <User size={20} />
    }, {
      id: '2',
      primary: 'Email',
      secondary: 'Email preferences',
      leading: <Mail size={20} />
    }, {
      id: '3',
      primary: 'Settings',
      secondary: 'App configuration',
      leading: <Settings size={20} />
    }, {
      id: '4',
      primary: 'Notifications',
      secondary: 'Push & email',
      leading: <Bell size={20} />
    }],
    variant: 'bordered'
  }
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const items = [{
      id: '1',
      primary: 'Profile',
      leading: <User size={20} />,
      trailing: <ChevronRight size={16} />
    }, {
      id: '2',
      primary: 'Security',
      leading: <Shield size={20} />,
      trailing: <ChevronRight size={16} />
    }, {
      id: '3',
      primary: 'Notifications',
      leading: <Bell size={20} />,
      trailing: <ChevronRight size={16} />
    }, {
      id: '4',
      primary: 'Help & Support',
      leading: <HelpCircle size={20} />,
      trailing: <ChevronRight size={16} />
    }];
    return <div style={{
      width: '300px'
    }}>
        <List items={items.map(item => ({
        ...item,
        onClick: () => console.log(\`Clicked: \${item.primary}\`)
      }))} variant="bordered" interactive />
      </div>;
  }
}`,...b.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selectedId, setSelectedId] = useState<string | null>('1');
    const items = [{
      id: '1',
      primary: 'Option 1',
      secondary: 'First option'
    }, {
      id: '2',
      primary: 'Option 2',
      secondary: 'Second option'
    }, {
      id: '3',
      primary: 'Option 3',
      secondary: 'Third option'
    }, {
      id: '4',
      primary: 'Option 4',
      secondary: 'Fourth option',
      disabled: true
    }].map(item => ({
      ...item,
      selected: item.id === selectedId
    }));
    return <div style={{
      width: '300px'
    }}>
        <List items={items} variant="bordered" selectable onSelect={item => setSelectedId(item.id)} />
      </div>;
  }
}`,...j.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: '1',
      primary: 'Alice Cooper',
      secondary: 'Product Designer',
      leading: <Avatar initials="AC" size="sm" />
    }, {
      id: '2',
      primary: 'Bob Martin',
      secondary: 'Software Engineer',
      leading: <Avatar initials="BM" size="sm" />
    }, {
      id: '3',
      primary: 'Carol White',
      secondary: 'Project Manager',
      leading: <Avatar initials="CW" size="sm" />
    }],
    variant: 'divided'
  }
}`,...S.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: '1',
      primary: 'Inbox',
      leading: <Mail size={20} />,
      trailing: <Badge variant="primary">12</Badge>
    }, {
      id: '2',
      primary: 'Notifications',
      leading: <Bell size={20} />,
      trailing: <Badge variant="warning">3</Badge>
    }, {
      id: '3',
      primary: 'Settings',
      leading: <Settings size={20} />
    }, {
      id: '4',
      primary: 'Security',
      leading: <Shield size={20} />,
      trailing: <Badge variant="success">OK</Badge>
    }],
    variant: 'bordered',
    interactive: true
  }
}`,...q.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    items: basicItems,
    size: 'sm',
    variant: 'bordered'
  }
}`,..._.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    items: detailedItems,
    size: 'lg',
    variant: 'bordered'
  }
}`,...z.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    items: basicItems,
    variant: 'bordered'
  }
}`,...C.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    items: basicItems,
    variant: 'divided'
  }
}`,...I.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: '1',
      primary: 'Active item 1'
    }, {
      id: '2',
      primary: 'Disabled item',
      disabled: true
    }, {
      id: '3',
      primary: 'Active item 2'
    }, {
      id: '4',
      primary: 'Another disabled',
      disabled: true
    }],
    variant: 'bordered',
    interactive: true
  }
}`,...B.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    items: [],
    emptyContent: <div style={{
      padding: 'var(--spacing-8)',
      textAlign: 'center'
    }}>
        <p style={{
        marginBottom: 'var(--spacing-2)',
        fontWeight: 'var(--font-weight-medium)'
      }}>No items found</p>
        <p style={{
        fontSize: 'var(--font-size-14)',
        color: 'var(--text-secondary)'
      }}>
          Try adjusting your search or filters
        </p>
      </div>
  }
}`,...k.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const items = [{
      id: '1',
      primary: 'React',
      secondary: 'A JavaScript library for building user interfaces'
    }, {
      id: '2',
      primary: 'Vue',
      secondary: 'The Progressive JavaScript Framework'
    }, {
      id: '3',
      primary: 'Angular',
      secondary: 'The modern web developer platform'
    }];
    return <div style={{
      width: '400px'
    }}>
        <List items={items} variant="bordered" renderItem={item => <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--spacing-3)',
        padding: 'var(--spacing-3)'
      }}>
              <div style={{
          width: '40px',
          height: '40px',
          borderRadius: 'var(--radius-sm)',
          background: 'var(--interactive-primary-subtle)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
                <Star size={20} />
              </div>
              <div style={{
          flex: 1
        }}>
                <div style={{
            fontWeight: 'var(--font-weight-medium)'
          }}>{item.primary}</div>
                <div style={{
            fontSize: 'var(--font-size-14)',
            color: 'var(--text-secondary)'
          }}>
                  {item.secondary}
                </div>
              </div>
            </div>} />
      </div>;
  }
}`,...w.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-6)',
    width: '300px'
  }}>
      <div>
        <h4 style={{
        marginBottom: 'var(--spacing-2)'
      }}>Default</h4>
        <List items={basicItems} variant="default" />
      </div>
      <div>
        <h4 style={{
        marginBottom: 'var(--spacing-2)'
      }}>Bordered</h4>
        <List items={basicItems} variant="bordered" />
      </div>
      <div>
        <h4 style={{
        marginBottom: 'var(--spacing-2)'
      }}>Divided</h4>
        <List items={basicItems} variant="divided" />
      </div>
    </div>
}`,...A.parameters?.docs?.source}}};const Be=["Default","WithSecondary","WithIcons","Interactive","Selectable","WithAvatars","WithTrailingBadges","SmallSize","LargeSize","Bordered","Divided","WithDisabledItems","EmptyState","CustomRender","AllVariants"];export{A as AllVariants,C as Bordered,w as CustomRender,h as Default,I as Divided,k as EmptyState,b as Interactive,z as LargeSize,j as Selectable,_ as SmallSize,S as WithAvatars,B as WithDisabledItems,x as WithIcons,f as WithSecondary,q as WithTrailingBadges,Be as __namedExportsOrder,Ie as default};
