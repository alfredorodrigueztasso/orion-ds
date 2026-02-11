import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as m}from"./index-Bi6L2ga8.js";import{C as J}from"./chevron-down-buXKF-gJ.js";import{U}from"./user-CUEj3VL3.js";import{S as N}from"./settings-DVkWYkkM.js";import{C as D}from"./credit-card-DVOexJYu.js";import{B as V}from"./bell-B0mciaZ5.js";import{M as F}from"./moon-CnkmnmfA.js";import{S as Q}from"./shield-DhOd_9EY.js";import{C as K}from"./circle-question-mark-C_pzcBL4.js";import{L as O}from"./log-out-B9-sGcCl.js";import"./createLucideIcon-DprCCbyf.js";const X="_userMenu_1eqxf_8",Y="_trigger_1eqxf_17",Z="_triggerCompact_1eqxf_33",ee="_avatar_1eqxf_37",se="_avatarImage_1eqxf_50",ae="_avatarInitials_1eqxf_56",ne="_statusIndicator_1eqxf_64",te="_triggerInfo_1eqxf_74",re="_triggerName_1eqxf_81",ie="_triggerRole_1eqxf_89",oe="_chevron_1eqxf_96",ce="_chevronOpen_1eqxf_101",le="_dropdown_1eqxf_109",de="_dropdownOpen_1eqxf_125",me="_dropdownStart_1eqxf_131",pe="_header_1eqxf_140",ue="_headerAvatar_1eqxf_148",ge="_headerInfo_1eqxf_164",fe="_headerName_1eqxf_171",he="_headerEmail_1eqxf_179",xe="_section_1eqxf_193",ve="_sectionLabel_1eqxf_197",_e="_divider_1eqxf_207",be="_item_1eqxf_217",Se="_itemIcon_1eqxf_238",je="_itemDanger_1eqxf_246",ye="_itemDisabled_1eqxf_254",s={userMenu:X,trigger:Y,triggerCompact:Z,avatar:ee,avatarImage:se,avatarInitials:ae,statusIndicator:ne,triggerInfo:te,triggerName:re,triggerRole:ie,chevron:oe,chevronOpen:ce,dropdown:le,dropdownOpen:de,dropdownStart:me,header:pe,headerAvatar:ue,headerInfo:ge,headerName:fe,headerEmail:he,section:xe,sectionLabel:ve,divider:_e,item:be,itemIcon:Se,itemDanger:je,itemDisabled:ye},Ie={online:"var(--text-success)",away:"var(--text-warning)",busy:"var(--text-error)",offline:"var(--text-tertiary)"},l=m.forwardRef(({user:a,sections:I,open:d,onOpenChange:q,trigger:u,align:E="end",showHeader:A=!0,compact:z=!1,className:L,...R},W)=>{const[B,T]=m.useState(!1),w=m.useRef(null),C=m.useRef(null),o=d!==void 0?d:B,p=n=>{d===void 0&&T(n),q?.(n)};m.useEffect(()=>{const n=c=>{w.current&&!w.current.contains(c.target)&&C.current&&!C.current.contains(c.target)&&p(!1)};if(o)return document.addEventListener("mousedown",n),()=>document.removeEventListener("mousedown",n)},[o]),m.useEffect(()=>{const n=c=>{c.key==="Escape"&&o&&(p(!1),C.current?.focus())};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)},[o]);const H=n=>{n.disabled||(n.onClick?.(),p(!1))},k=n=>n.split(" ").map(c=>c[0]).join("").toUpperCase().slice(0,2),P=[s.userMenu,L].filter(Boolean).join(" "),G=[s.trigger,z&&s.triggerCompact].filter(Boolean).join(" "),$=[s.dropdown,o&&s.dropdownOpen,E==="start"&&s.dropdownStart].filter(Boolean).join(" ");return e.jsxs("div",{ref:W,className:P,...R,children:[u?e.jsx("div",{onClick:()=>p(!o),children:u}):e.jsxs("button",{ref:C,type:"button",className:G,onClick:()=>p(!o),"aria-expanded":o,"aria-haspopup":"true",children:[e.jsxs("div",{className:s.avatar,children:[a.avatar?e.jsx("img",{src:a.avatar,alt:a.name,className:s.avatarImage}):e.jsx("span",{className:s.avatarInitials,children:a.initials||k(a.name)}),a.status&&e.jsx("span",{className:s.statusIndicator,style:{backgroundColor:Ie[a.status]}})]}),!z&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:s.triggerInfo,children:[e.jsx("span",{className:s.triggerName,children:a.name}),a.role&&e.jsx("span",{className:s.triggerRole,children:a.role})]}),e.jsx(J,{size:16,className:`${s.chevron} ${o?s.chevronOpen:""}`})]})]}),e.jsxs("div",{ref:w,className:$,role:"menu",children:[A&&e.jsxs("div",{className:s.header,children:[e.jsx("div",{className:s.headerAvatar,children:a.avatar?e.jsx("img",{src:a.avatar,alt:a.name,className:s.avatarImage}):e.jsx("span",{className:s.avatarInitials,children:a.initials||k(a.name)})}),e.jsxs("div",{className:s.headerInfo,children:[e.jsx("span",{className:s.headerName,children:a.name}),a.email&&e.jsx("span",{className:s.headerEmail,children:a.email})]})]}),I.map((n,c)=>e.jsxs("div",{className:s.section,children:[n.label&&e.jsx("div",{className:s.sectionLabel,children:n.label}),n.items.map(t=>{const M=[s.item,t.danger&&s.itemDanger,t.disabled&&s.itemDisabled].filter(Boolean).join(" ");return t.href&&!t.disabled?e.jsxs("a",{href:t.href,className:M,role:"menuitem",onClick:()=>p(!1),children:[t.icon&&e.jsx("span",{className:s.itemIcon,children:t.icon}),e.jsx("span",{children:t.label})]},t.id):e.jsxs("button",{type:"button",className:M,role:"menuitem",disabled:t.disabled,onClick:()=>H(t),children:[t.icon&&e.jsx("span",{className:s.itemIcon,children:t.icon}),e.jsx("span",{children:t.label})]},t.id)}),c<I.length-1&&e.jsx("div",{className:s.divider})]},n.id))]})]})});l.displayName="UserMenu";l.__docgenInfo={description:"",methods:[],displayName:"UserMenu",props:{user:{required:!0,tsType:{name:"UserInfo"},description:"User information"},sections:{required:!0,tsType:{name:"Array",elements:[{name:"UserMenuSection"}],raw:"UserMenuSection[]"},description:"Menu sections"},open:{required:!1,tsType:{name:"boolean"},description:"Open state (controlled)"},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Open state change handler"},trigger:{required:!1,tsType:{name:"ReactNode"},description:"Trigger element (custom trigger button)"},align:{required:!1,tsType:{name:"union",raw:"'start' | 'end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"}]},description:`Menu alignment
@default "end"`,defaultValue:{value:"'end'",computed:!1}},showHeader:{required:!1,tsType:{name:"boolean"},description:`Show user info header in dropdown
@default true`,defaultValue:{value:"true",computed:!1}},compact:{required:!1,tsType:{name:"boolean"},description:`Compact mode (smaller trigger)
@default false`,defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const Le={title:"Sections/App/UserMenu",component:l,parameters:{layout:"centered"},tags:["autodocs"]},r={name:"John Doe",email:"john.doe@example.com",avatar:"https://i.pravatar.cc/150?img=1",status:"online",role:"Admin"},i=[{id:"account",items:[{id:"profile",label:"Profile",icon:e.jsx(U,{size:18})},{id:"settings",label:"Settings",icon:e.jsx(N,{size:18})},{id:"billing",label:"Billing",icon:e.jsx(D,{size:18}),href:"/billing"}]},{id:"preferences",label:"Preferences",items:[{id:"notifications",label:"Notifications",icon:e.jsx(V,{size:18})},{id:"appearance",label:"Dark mode",icon:e.jsx(F,{size:18})},{id:"security",label:"Security",icon:e.jsx(Q,{size:18})}]},{id:"support",items:[{id:"help",label:"Help & Support",icon:e.jsx(K,{size:18}),href:"/help"},{id:"logout",label:"Sign out",icon:e.jsx(O,{size:18}),danger:!0}]}],g={args:{user:r,sections:i}},f={render:()=>{const[a,I]=m.useState(!1),d=u=>{alert(u==="logout"?"Signing out...":`Clicked: ${u}`)},q=[{id:"account",items:[{id:"profile",label:"Profile",icon:e.jsx(U,{size:18}),onClick:()=>d("profile")},{id:"settings",label:"Settings",icon:e.jsx(N,{size:18}),onClick:()=>d("settings")}]},{id:"actions",items:[{id:"logout",label:"Sign out",icon:e.jsx(O,{size:18}),danger:!0,onClick:()=>d("logout")}]}];return e.jsx(l,{user:r,sections:q,open:a,onOpenChange:I})}},h={args:{user:r,sections:i,compact:!0}},x={args:{user:{name:"Jane Smith",email:"jane.smith@example.com",status:"away"},sections:i}},v={args:{user:{name:"Organization Account",email:"admin@org.com",initials:"ORG"},sections:i}},_={render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--spacing-6)",alignItems:"flex-start"},children:[e.jsx(l,{user:{...r,status:"online"},sections:i.slice(0,1),compact:!0}),e.jsx(l,{user:{...r,status:"away",avatar:"https://i.pravatar.cc/150?img=2"},sections:i.slice(0,1),compact:!0}),e.jsx(l,{user:{...r,status:"busy",avatar:"https://i.pravatar.cc/150?img=3"},sections:i.slice(0,1),compact:!0}),e.jsx(l,{user:{...r,status:"offline",avatar:"https://i.pravatar.cc/150?img=4"},sections:i.slice(0,1),compact:!0})]})},b={args:{user:r,sections:i,showHeader:!1}},S={args:{user:r,sections:i,align:"start"},decorators:[a=>e.jsx("div",{style:{paddingLeft:"200px"},children:e.jsx(a,{})})]},j={args:{user:r,sections:[{id:"account",items:[{id:"profile",label:"Profile",icon:e.jsx(U,{size:18})},{id:"settings",label:"Settings",icon:e.jsx(N,{size:18}),disabled:!0},{id:"billing",label:"Billing (Upgrade required)",icon:e.jsx(D,{size:18}),disabled:!0}]},{id:"actions",items:[{id:"logout",label:"Sign out",icon:e.jsx(O,{size:18}),danger:!0}]}]}},y={args:{user:{name:"Guest User",email:"guest@example.com"},sections:[{id:"actions",items:[{id:"settings",label:"Settings",icon:e.jsx(N,{size:18})},{id:"logout",label:"Sign out",danger:!0}]}],showHeader:!1,compact:!0}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    user: sampleUser,
    sections: sampleSections
  }
}`,...g.parameters?.docs?.source},description:{story:"Default UserMenu with avatar and full info",...g.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const handleItemClick = (itemId: string) => {
      if (itemId === 'logout') {
        alert('Signing out...');
      } else {
        alert(\`Clicked: \${itemId}\`);
      }
    };
    const sections: UserMenuSection[] = [{
      id: 'account',
      items: [{
        id: 'profile',
        label: 'Profile',
        icon: <User size={18} />,
        onClick: () => handleItemClick('profile')
      }, {
        id: 'settings',
        label: 'Settings',
        icon: <Settings size={18} />,
        onClick: () => handleItemClick('settings')
      }]
    }, {
      id: 'actions',
      items: [{
        id: 'logout',
        label: 'Sign out',
        icon: <LogOut size={18} />,
        danger: true,
        onClick: () => handleItemClick('logout')
      }]
    }];
    return <UserMenu user={sampleUser} sections={sections} open={open} onOpenChange={setOpen} />;
  }
}`,...f.parameters?.docs?.source},description:{story:"Interactive UserMenu",...f.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    user: sampleUser,
    sections: sampleSections,
    compact: true
  }
}`,...h.parameters?.docs?.source},description:{story:"Compact mode (avatar only)",...h.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    user: {
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      status: 'away' as const
    },
    sections: sampleSections
  }
}`,...x.parameters?.docs?.source},description:{story:"Without avatar (initials only)",...x.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    user: {
      name: 'Organization Account',
      email: 'admin@org.com',
      initials: 'ORG'
    },
    sections: sampleSections
  }
}`,...v.parameters?.docs?.source},description:{story:"With custom initials",...v.parameters?.docs?.description}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--spacing-6)',
    alignItems: 'flex-start'
  }}>
      <UserMenu user={{
      ...sampleUser,
      status: 'online'
    }} sections={sampleSections.slice(0, 1)} compact />
      <UserMenu user={{
      ...sampleUser,
      status: 'away',
      avatar: 'https://i.pravatar.cc/150?img=2'
    }} sections={sampleSections.slice(0, 1)} compact />
      <UserMenu user={{
      ...sampleUser,
      status: 'busy',
      avatar: 'https://i.pravatar.cc/150?img=3'
    }} sections={sampleSections.slice(0, 1)} compact />
      <UserMenu user={{
      ...sampleUser,
      status: 'offline',
      avatar: 'https://i.pravatar.cc/150?img=4'
    }} sections={sampleSections.slice(0, 1)} compact />
    </div>
}`,..._.parameters?.docs?.source},description:{story:"Different status indicators",..._.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    user: sampleUser,
    sections: sampleSections,
    showHeader: false
  }
}`,...b.parameters?.docs?.source},description:{story:"Without header in dropdown",...b.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    user: sampleUser,
    sections: sampleSections,
    align: 'start'
  },
  decorators: [Story => <div style={{
    paddingLeft: '200px'
  }}>
        <Story />
      </div>]
}`,...S.parameters?.docs?.source},description:{story:"Aligned to start",...S.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    user: sampleUser,
    sections: [{
      id: 'account',
      items: [{
        id: 'profile',
        label: 'Profile',
        icon: <User size={18} />
      }, {
        id: 'settings',
        label: 'Settings',
        icon: <Settings size={18} />,
        disabled: true
      }, {
        id: 'billing',
        label: 'Billing (Upgrade required)',
        icon: <CreditCard size={18} />,
        disabled: true
      }]
    }, {
      id: 'actions',
      items: [{
        id: 'logout',
        label: 'Sign out',
        icon: <LogOut size={18} />,
        danger: true
      }]
    }]
  }
}`,...j.parameters?.docs?.source},description:{story:"With disabled items",...j.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    user: {
      name: 'Guest User',
      email: 'guest@example.com'
    },
    sections: [{
      id: 'actions',
      items: [{
        id: 'settings',
        label: 'Settings',
        icon: <Settings size={18} />
      }, {
        id: 'logout',
        label: 'Sign out',
        danger: true
      }]
    }],
    showHeader: false,
    compact: true
  }
}`,...y.parameters?.docs?.source},description:{story:"Minimal sections",...y.parameters?.docs?.description}}};const Re=["Default","Interactive","Compact","WithoutAvatar","CustomInitials","StatusIndicators","WithoutHeader","AlignStart","WithDisabledItems","Minimal"];export{S as AlignStart,h as Compact,v as CustomInitials,g as Default,f as Interactive,y as Minimal,_ as StatusIndicators,j as WithDisabledItems,x as WithoutAvatar,b as WithoutHeader,Re as __namedExportsOrder,Le as default};
