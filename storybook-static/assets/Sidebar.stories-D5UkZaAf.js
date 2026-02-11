import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as I}from"./index-Bi6L2ga8.js";import{S as y}from"./Sidebar-Bm4CyupK.js";import{B as v}from"./Button-C5l-MScQ.js";import{D as w}from"./Dropdown-DdHVo4Wo.js";import{H as f}from"./house-Bwi52rpT.js";import{F as u}from"./folder-CYs5hHy8.js";import{U as W}from"./users-B3aIcKNm.js";import{C as x,B as j}from"./chart-no-axes-column-DdY11mzY.js";import{M as C}from"./mail-B1OdJ1bA.js";import{C as A}from"./calendar-BjEn5mzX.js";import{F as D}from"./file-text-3QR_BDt1.js";import{S as b}from"./settings-DVkWYkkM.js";import{P as k}from"./plus-_oTOY7dX.js";import{S as R}from"./search-BC3UyaPv.js";import{C as B}from"./chevron-down-buXKF-gJ.js";import{L as P}from"./log-out-B9-sGcCl.js";import{C as F}from"./circle-question-mark-C_pzcBL4.js";import"./chevron-right-BuTIk0ZE.js";import"./createLucideIcon-DprCCbyf.js";import"./chevron-left-D9uTS5hk.js";import"./index-Dmh4UR0O.js";import"./index-D1UQZLgm.js";const re={title:"Sections/App/Sidebar",component:y,parameters:{layout:"fullscreen",docs:{description:{component:"A collapsible navigation sidebar for SaaS applications. Optimized for Product Mode with efficient space usage and clear hierarchy."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","floating"]},collapsed:{control:"boolean"},width:{control:"number"},collapsedWidth:{control:"number"}},decorators:[a=>e.jsxs("div",{style:{height:"600px",display:"flex"},children:[e.jsx(a,{}),e.jsx("div",{style:{flex:1,padding:"var(--spacing-6)",background:"var(--surface-subtle)"},children:e.jsx("p",{children:"Main content area"})})]})]},s=[{items:[{id:"dashboard",label:"Dashboard",icon:e.jsx(f,{size:20}),href:"#"},{id:"projects",label:"Projects",icon:e.jsx(u,{size:20}),href:"#",badge:"12"},{id:"team",label:"Team",icon:e.jsx(W,{size:20}),href:"#"},{id:"analytics",label:"Analytics",icon:e.jsx(x,{size:20}),href:"#"}]},{title:"Communication",items:[{id:"messages",label:"Messages",icon:e.jsx(C,{size:20}),href:"#",badge:"3"},{id:"calendar",label:"Calendar",icon:e.jsx(A,{size:20}),href:"#"}]},{title:"Other",items:[{id:"documents",label:"Documents",icon:e.jsx(D,{size:20}),href:"#"},{id:"settings",label:"Settings",icon:e.jsx(b,{size:20}),href:"#"}]}],i={args:{sections:s,activeItem:"dashboard",header:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[e.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"var(--radius-sm)",background:"var(--interactive-primary)"}}),e.jsx("span",{style:{fontWeight:"var(--font-weight-medium)"},children:"Acme Inc"})]})}},r={render:a=>{const[z,S]=I.useState(!1);return e.jsx(y,{...a,collapsed:z,onCollapsedChange:S})},args:{sections:s,activeItem:"projects",header:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[e.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"var(--radius-sm)",background:"var(--interactive-primary)"}}),e.jsx("span",{style:{fontWeight:"var(--font-weight-medium)"},children:"Acme Inc"})]})}},t={args:{sections:s,activeItem:"dashboard",collapsed:!0}},n={args:{sections:s,activeItem:"dashboard",header:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[e.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"var(--radius-sm)",background:"var(--interactive-primary)"}}),e.jsx("span",{style:{fontWeight:"var(--font-weight-medium)"},children:"Acme Inc"})]}),footer:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-2)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-3)",padding:"var(--spacing-2)"},children:[e.jsx("div",{style:{width:"36px",height:"36px",borderRadius:"50%",background:"var(--surface-subtle)"}}),e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:"var(--font-weight-medium)",fontSize:"var(--font-size-14)"},children:"John Doe"}),e.jsx("div",{style:{fontSize:"var(--font-size-12)",color:"var(--text-secondary)"},children:"Admin"})]})]}),e.jsxs(v,{variant:"ghost",size:"sm",style:{width:"100%",justifyContent:"flex-start"},children:[e.jsx(P,{size:16}),e.jsx("span",{children:"Sign out"})]})]})}},o={args:{sections:[{items:[{id:"dashboard",label:"Dashboard",icon:e.jsx(f,{size:20}),href:"#"},{id:"projects",label:"Projects",icon:e.jsx(u,{size:20}),children:[{id:"active",label:"Active",href:"#"},{id:"archived",label:"Archived",href:"#"},{id:"drafts",label:"Drafts",href:"#"}]},{id:"reports",label:"Reports",icon:e.jsx(x,{size:20}),children:[{id:"sales",label:"Sales",href:"#"},{id:"traffic",label:"Traffic",href:"#"},{id:"users",label:"Users",href:"#"}]}]},{title:"Settings",items:[{id:"account",label:"Account",icon:e.jsx(b,{size:20}),href:"#"},{id:"help",label:"Help",icon:e.jsx(F,{size:20}),href:"#"}]}],activeItem:"dashboard"}},d={args:{sections:[{items:[{id:"dashboard",label:"Dashboard",icon:e.jsx(f,{size:20}),href:"#"},{id:"projects",label:"Projects",icon:e.jsx(u,{size:20}),href:"#"},{id:"premium",label:"Premium Features",icon:e.jsx(x,{size:20}),href:"#",disabled:!0,badge:"Pro"}]}],activeItem:"dashboard"}},c={args:{sections:s,activeItem:"dashboard",header:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-3)",width:"100%"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[e.jsx("span",{style:{fontWeight:"var(--font-weight-medium)",fontSize:"var(--font-size-18)"},children:"Workspace"}),e.jsx(v,{variant:"ghost",size:"sm",iconOnly:!0,"aria-label":"Add",children:e.jsx(k,{size:16})})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)",padding:"var(--spacing-2) var(--spacing-3)",background:"var(--surface-subtle)",borderRadius:"var(--radius-sm)",fontSize:"var(--font-size-14)",color:"var(--text-secondary)"},children:[e.jsx(R,{size:14}),e.jsx("span",{children:"Search..."})]})]})}},l={args:{variant:"floating",sections:s,activeItem:"dashboard",header:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[e.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"var(--radius-sm)",background:"var(--interactive-primary)"}}),e.jsx("span",{style:{fontWeight:"var(--font-weight-medium)"},children:"Acme Inc"})]})},decorators:[a=>e.jsxs("div",{style:{height:"600px",display:"flex",padding:"0",background:"var(--surface-subtle)"},children:[e.jsx(a,{}),e.jsx("div",{style:{flex:1,padding:"var(--spacing-6)"},children:e.jsx("p",{children:"Main content area"})})]})]},p={args:{sections:s,activeItem:"dashboard"}},m={args:{header:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[e.jsx(j,{size:24}),e.jsx("span",{style:{fontWeight:"var(--font-weight-medium)",fontSize:"var(--font-size-16)"},children:"Acme Inc"})]}),sections:s,activeItem:"dashboard"}},h={args:{header:e.jsx(w,{trigger:e.jsx(v,{variant:"ghost",iconRight:e.jsx(B,{size:16}),children:"Workspace"}),items:[{id:"ws1",label:"Personal"},{id:"ws2",label:"Team"},{id:"ws3",label:"Enterprise"}]}),sections:s,activeItem:"dashboard"}},g={args:{header:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[e.jsx(j,{size:24}),e.jsx("span",{style:{fontWeight:"var(--font-weight-medium)"},children:"Acme"})]}),e.jsx(v,{variant:"ghost",size:"sm",iconOnly:!0,icon:e.jsx(b,{size:18}),"aria-label":"Settings"})]}),sections:s,activeItem:"dashboard"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    sections: defaultSections,
    activeItem: 'dashboard',
    header: <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--spacing-2)'
    }}>
        <div style={{
        width: '32px',
        height: '32px',
        borderRadius: 'var(--radius-sm)',
        background: 'var(--interactive-primary)'
      }} />
        <span style={{
        fontWeight: 'var(--font-weight-medium)'
      }}>Acme Inc</span>
      </div>
  }
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [collapsed, setCollapsed] = useState(false);
    return <Sidebar {...args} collapsed={collapsed} onCollapsedChange={setCollapsed} />;
  },
  args: {
    sections: defaultSections,
    activeItem: 'projects',
    header: <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--spacing-2)'
    }}>
        <div style={{
        width: '32px',
        height: '32px',
        borderRadius: 'var(--radius-sm)',
        background: 'var(--interactive-primary)'
      }} />
        <span style={{
        fontWeight: 'var(--font-weight-medium)'
      }}>Acme Inc</span>
      </div>
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    sections: defaultSections,
    activeItem: 'dashboard',
    collapsed: true
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    sections: defaultSections,
    activeItem: 'dashboard',
    header: <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--spacing-2)'
    }}>
        <div style={{
        width: '32px',
        height: '32px',
        borderRadius: 'var(--radius-sm)',
        background: 'var(--interactive-primary)'
      }} />
        <span style={{
        fontWeight: 'var(--font-weight-medium)'
      }}>Acme Inc</span>
      </div>,
    footer: <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-2)'
    }}>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--spacing-3)',
        padding: 'var(--spacing-2)'
      }}>
          <div style={{
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          background: 'var(--surface-subtle)'
        }} />
          <div>
            <div style={{
            fontWeight: 'var(--font-weight-medium)',
            fontSize: 'var(--font-size-14)'
          }}>John Doe</div>
            <div style={{
            fontSize: 'var(--font-size-12)',
            color: 'var(--text-secondary)'
          }}>Admin</div>
          </div>
        </div>
        <Button variant="ghost" size="sm" style={{
        width: '100%',
        justifyContent: 'flex-start'
      }}>
          <LogOut size={16} />
          <span>Sign out</span>
        </Button>
      </div>
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    sections: [{
      items: [{
        id: 'dashboard',
        label: 'Dashboard',
        icon: <Home size={20} />,
        href: '#'
      }, {
        id: 'projects',
        label: 'Projects',
        icon: <Folder size={20} />,
        children: [{
          id: 'active',
          label: 'Active',
          href: '#'
        }, {
          id: 'archived',
          label: 'Archived',
          href: '#'
        }, {
          id: 'drafts',
          label: 'Drafts',
          href: '#'
        }]
      }, {
        id: 'reports',
        label: 'Reports',
        icon: <BarChart2 size={20} />,
        children: [{
          id: 'sales',
          label: 'Sales',
          href: '#'
        }, {
          id: 'traffic',
          label: 'Traffic',
          href: '#'
        }, {
          id: 'users',
          label: 'Users',
          href: '#'
        }]
      }]
    }, {
      title: 'Settings',
      items: [{
        id: 'account',
        label: 'Account',
        icon: <Settings size={20} />,
        href: '#'
      }, {
        id: 'help',
        label: 'Help',
        icon: <HelpCircle size={20} />,
        href: '#'
      }]
    }],
    activeItem: 'dashboard'
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    sections: [{
      items: [{
        id: 'dashboard',
        label: 'Dashboard',
        icon: <Home size={20} />,
        href: '#'
      }, {
        id: 'projects',
        label: 'Projects',
        icon: <Folder size={20} />,
        href: '#'
      }, {
        id: 'premium',
        label: 'Premium Features',
        icon: <BarChart2 size={20} />,
        href: '#',
        disabled: true,
        badge: 'Pro'
      }]
    }],
    activeItem: 'dashboard'
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    sections: defaultSections,
    activeItem: 'dashboard',
    header: <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-3)',
      width: '100%'
    }}>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
          <span style={{
          fontWeight: 'var(--font-weight-medium)',
          fontSize: 'var(--font-size-18)'
        }}>Workspace</span>
          <Button variant="ghost" size="sm" iconOnly aria-label="Add">
            <Plus size={16} />
          </Button>
        </div>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--spacing-2)',
        padding: 'var(--spacing-2) var(--spacing-3)',
        background: 'var(--surface-subtle)',
        borderRadius: 'var(--radius-sm)',
        fontSize: 'var(--font-size-14)',
        color: 'var(--text-secondary)'
      }}>
          <Search size={14} />
          <span>Search...</span>
        </div>
      </div>
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'floating',
    sections: defaultSections,
    activeItem: 'dashboard',
    header: <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--spacing-2)'
    }}>
        <div style={{
        width: '32px',
        height: '32px',
        borderRadius: 'var(--radius-sm)',
        background: 'var(--interactive-primary)'
      }} />
        <span style={{
        fontWeight: 'var(--font-weight-medium)'
      }}>Acme Inc</span>
      </div>
  },
  decorators: [Story => <div style={{
    height: '600px',
    display: 'flex',
    padding: '0',
    background: 'var(--surface-subtle)'
  }}>
        <Story />
        <div style={{
      flex: 1,
      padding: 'var(--spacing-6)'
    }}>
          <p>Main content area</p>
        </div>
      </div>]
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    sections: defaultSections,
    activeItem: 'dashboard'
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    header: <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--spacing-2)'
    }}>
        <Box size={24} />
        <span style={{
        fontWeight: 'var(--font-weight-medium)',
        fontSize: 'var(--font-size-16)'
      }}>Acme Inc</span>
      </div>,
    sections: defaultSections,
    activeItem: 'dashboard'
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    header: <Dropdown trigger={<Button variant="ghost" iconRight={<ChevronDown size={16} />}>
            Workspace
          </Button>} items={[{
      id: 'ws1',
      label: 'Personal'
    }, {
      id: 'ws2',
      label: 'Team'
    }, {
      id: 'ws3',
      label: 'Enterprise'
    }]} />,
    sections: defaultSections,
    activeItem: 'dashboard'
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    header: <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%'
    }}>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--spacing-2)'
      }}>
          <Box size={24} />
          <span style={{
          fontWeight: 'var(--font-weight-medium)'
        }}>Acme</span>
        </div>
        <Button variant="ghost" size="sm" iconOnly icon={<Settings size={18} />} aria-label="Settings" />
      </div>,
    sections: defaultSections,
    activeItem: 'dashboard'
  }
}`,...g.parameters?.docs?.source}}};const te=["Default","WithCollapse","Collapsed","WithFooter","WithNestedItems","WithDisabledItems","CustomHeader","Floating","WithoutHeader","WithLogo","WithDropdown","WithLogoAndActions"];export{t as Collapsed,c as CustomHeader,i as Default,l as Floating,r as WithCollapse,d as WithDisabledItems,h as WithDropdown,n as WithFooter,m as WithLogo,g as WithLogoAndActions,o as WithNestedItems,p as WithoutHeader,te as __namedExportsOrder,re as default};
