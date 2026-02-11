import{j as e}from"./jsx-runtime-u17CrQMm.js";import{B as a}from"./Breadcrumb-1YRPRYXK.js";import{B as w}from"./Button-C5l-MScQ.js";import{C as I}from"./chevron-right-BuTIk0ZE.js";import{H as T}from"./house-Bwi52rpT.js";import{S as D}from"./settings-DVkWYkkM.js";import{U as B}from"./user-CUEj3VL3.js";import{S as C,L as W}from"./shield-check-DBiD7RkX.js";import{U as H}from"./users-B3aIcKNm.js";import{T as R}from"./trending-up--FzQNwgR.js";import{D as P}from"./dollar-sign-DfkM_E10.js";import"./index-Bi6L2ga8.js";import"./createLucideIcon-DprCCbyf.js";const O={title:"Components/Navigation/Breadcrumb",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{separator:{control:"select",options:["chevron","slash","custom"],description:"Separator type between breadcrumb items"},size:{control:"select",options:["sm","md","lg"],description:"Breadcrumb size"},showHomeIcon:{control:"boolean",description:"Show home icon for first item"},maxItems:{control:"number",description:"Maximum items to display before collapsing"}}},r=[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Laptop",href:"/products/laptop"},{label:"MacBook Pro"}],t={args:{items:r}},n={args:{items:r,showHomeIcon:!0}},o={args:{items:r,separator:"slash"}},i={args:{items:r,separator:"custom",customSeparator:e.jsx(I,{size:14,style:{color:"var(--text-tertiary)"}})}},c={args:{items:r,size:"sm"}},l={args:{items:r,size:"lg"}},m={args:{items:[{label:"Home",href:"/",icon:e.jsx(T,{size:16})},{label:"Settings",href:"/settings",icon:e.jsx(D,{size:16})},{label:"Profile",icon:e.jsx(B,{size:16})}]}},d={args:{items:[{label:"Home",href:"/"},{label:"Electronics",href:"/electronics"},{label:"Computers",href:"/electronics/computers"},{label:"Laptops",href:"/electronics/computers/laptops"},{label:"Gaming",href:"/electronics/computers/laptops/gaming"},{label:"High Performance",href:"/electronics/computers/laptops/gaming/high-performance"},{label:"MSI GT77 Titan"}]},decorators:[s=>e.jsx("div",{style:{width:"800px"},children:e.jsx(s,{})})]},p={args:{items:[{label:"Home",href:"/"},{label:"Electronics",href:"/electronics"},{label:"Computers",href:"/electronics/computers"},{label:"Laptops",href:"/electronics/computers/laptops"},{label:"Gaming",href:"/electronics/computers/laptops/gaming"},{label:"High Performance",href:"/electronics/computers/laptops/gaming/high-performance"},{label:"MSI GT77 Titan"}],maxItems:4},decorators:[s=>e.jsxs("div",{style:{width:"600px"},children:[e.jsx("h4",{style:{marginBottom:"var(--spacing-4)",fontSize:"var(--font-size-14)",color:"var(--text-secondary)"},children:"Collapsed to 4 items (shows first, last 3, and ellipsis)"}),e.jsx(s,{})]})]},g={args:{items:[{label:"Home",href:"/"},{label:"Dashboard"}]}},h={args:{items:[{label:"Home",href:"/"},{label:"Settings",href:"/settings"},{label:"Profile"}]}},v={args:{items:[{label:"Home",href:"/"},{label:"Men",href:"/men"},{label:"Clothing",href:"/men/clothing"},{label:"T-Shirts",href:"/men/clothing/tshirts"},{label:"Vintage Band T-Shirt"}],showHomeIcon:!0},decorators:[s=>e.jsxs("div",{style:{width:"700px",padding:"var(--spacing-8)",borderRadius:"var(--radius-control)",border:"1px solid var(--border-subtle)",background:"var(--surface-base)"},children:[e.jsx(s,{}),e.jsxs("div",{style:{marginTop:"var(--spacing-8)"},children:[e.jsx("h1",{style:{margin:"0 0 var(--spacing-2) 0",fontSize:"var(--font-size-24)",fontWeight:"var(--font-weight-bold)"},children:"Vintage Band T-Shirt"}),e.jsx("p",{style:{margin:0,fontSize:"var(--font-size-18)",color:"var(--text-brand)",fontWeight:"var(--font-weight-medium)"},children:"$29.99"})]})]})]},u={args:{items:[{label:"Docs",href:"/docs"},{label:"Components",href:"/docs/components"},{label:"Navigation",href:"/docs/components/navigation"},{label:"Breadcrumb"}],separator:"slash",size:"sm"},decorators:[s=>e.jsxs("div",{style:{width:"800px",padding:"var(--spacing-8)",borderRadius:"var(--radius-control)",border:"1px solid var(--border-subtle)",background:"var(--surface-base)"},children:[e.jsx(s,{}),e.jsxs("div",{style:{marginTop:"var(--spacing-8)"},children:[e.jsx("h1",{style:{margin:"0 0 var(--spacing-4) 0",fontSize:"var(--font-size-24)",fontWeight:"var(--font-weight-bold)"},children:"Breadcrumb"}),e.jsx("p",{style:{margin:0,fontSize:"var(--font-size-16)",color:"var(--text-secondary)",lineHeight:1.6},children:"Navigation breadcrumbs showing current page location in site hierarchy."})]})]})]},f={args:{items:r},render:()=>{const s=[{label:"Dashboard",href:"/dashboard",icon:e.jsx(W,{size:16})},{label:"Analytics",href:"/dashboard/analytics",icon:e.jsx(R,{size:16})},{label:"Revenue Report",icon:e.jsx(P,{size:16})}];return e.jsxs("div",{style:{width:"900px",padding:"var(--spacing-8)",borderRadius:"var(--radius-control)",border:"1px solid var(--border-subtle)",background:"var(--surface-base)"},children:[e.jsx(a,{items:s}),e.jsxs("div",{style:{marginTop:"var(--spacing-8)"},children:[e.jsx("h2",{style:{margin:"0 0 var(--spacing-6) 0",fontSize:"var(--font-size-24)",fontWeight:"var(--font-weight-medium)"},children:"Revenue Report"}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"var(--spacing-4)"},children:["Total Revenue","Monthly Growth","Active Users"].map(j=>e.jsxs("div",{style:{padding:"var(--spacing-6)",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-subtle)",background:"var(--surface-subtle)"},children:[e.jsx("div",{style:{fontSize:"var(--font-size-24)",fontWeight:"var(--font-weight-bold)",marginBottom:"var(--spacing-2)"},children:Math.floor(Math.random()*1e4)}),e.jsx("div",{style:{fontSize:"var(--font-size-14)",color:"var(--text-secondary)"},children:j})]},j))})]})]})}},b={args:{items:r},render:()=>e.jsxs("div",{style:{width:"600px",display:"flex",flexDirection:"column",gap:"var(--spacing-8)"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"var(--spacing-2)",fontSize:"var(--font-size-14)",fontWeight:"var(--font-weight-medium)"},children:"Small"}),e.jsx(a,{items:r,size:"sm"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"var(--spacing-2)",fontSize:"var(--font-size-14)",fontWeight:"var(--font-weight-medium)"},children:"Medium (Default)"}),e.jsx(a,{items:r,size:"md"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"var(--spacing-2)",fontSize:"var(--font-size-14)",fontWeight:"var(--font-weight-medium)"},children:"Large"}),e.jsx(a,{items:r,size:"lg"})]})]})},x={args:{items:r},render:()=>e.jsxs("div",{style:{width:"600px",display:"flex",flexDirection:"column",gap:"var(--spacing-8)"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"var(--spacing-2)",fontSize:"var(--font-size-14)",fontWeight:"var(--font-weight-medium)"},children:"Chevron (Default)"}),e.jsx(a,{items:r,separator:"chevron"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"var(--spacing-2)",fontSize:"var(--font-size-14)",fontWeight:"var(--font-weight-medium)"},children:"Slash"}),e.jsx(a,{items:r,separator:"slash"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"var(--spacing-2)",fontSize:"var(--font-size-14)",fontWeight:"var(--font-weight-medium)"},children:"Custom (Arrow)"}),e.jsx(a,{items:r,separator:"custom",customSeparator:e.jsx("span",{style:{color:"var(--text-tertiary)"},children:"→"})})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"var(--spacing-2)",fontSize:"var(--font-size-14)",fontWeight:"var(--font-weight-medium)"},children:"Custom (Dot)"}),e.jsx(a,{items:r,separator:"custom",customSeparator:e.jsx("span",{style:{color:"var(--text-tertiary)"},children:"•"})})]})]})},y={args:{items:r},render:()=>{const s=[{label:"Documents",href:"/documents"},{label:"Projects",href:"/documents/projects"},{label:"Design System",href:"/documents/projects/design-system"},{label:"Components",href:"/documents/projects/design-system/components"},{label:"Breadcrumb.tsx"}];return e.jsxs("div",{style:{width:"800px",padding:"var(--spacing-6)",borderRadius:"var(--radius-control)",border:"1px solid var(--border-subtle)",background:"var(--surface-base)"},children:[e.jsx(a,{items:s,separator:"slash",size:"sm"}),e.jsxs("div",{style:{marginTop:"var(--spacing-6)",padding:"var(--spacing-4)",borderRadius:"var(--radius-sm)",background:"var(--surface-subtle)",fontFamily:"monospace",fontSize:"var(--font-size-14)"},children:[e.jsx("div",{style:{color:"var(--text-secondary)"},children:"// Breadcrumb.tsx"}),e.jsx("div",{style:{marginTop:"var(--spacing-2)"},children:"export const Breadcrumb = ..."})]})]})}},S={args:{items:r},render:()=>{const s=[{label:"Admin",href:"/admin",icon:e.jsx(C,{size:16})},{label:"Users",href:"/admin/users",icon:e.jsx(H,{size:16})},{label:"User Details",icon:e.jsx(B,{size:16})}];return e.jsxs("div",{style:{width:"700px",padding:"var(--spacing-8)",borderRadius:"var(--radius-control)",border:"1px solid var(--border-subtle)",background:"var(--surface-base)"},children:[e.jsx(a,{items:s,size:"lg"}),e.jsxs("div",{style:{marginTop:"var(--spacing-8)"},children:[e.jsx("h2",{style:{margin:"0 0 var(--spacing-4) 0",fontSize:"var(--font-size-24)",fontWeight:"var(--font-weight-medium)"},children:"John Doe (#12345)"}),e.jsxs("div",{style:{display:"flex",gap:"var(--spacing-4)"},children:[e.jsx(w,{variant:"secondary",children:"Edit User"}),e.jsx(w,{variant:"danger",children:"Delete User"})]})]})]})}},z={args:{items:r,className:"custom-breadcrumb"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items: basicItems
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    items: basicItems,
    showHomeIcon: true
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    items: basicItems,
    separator: 'slash'
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    items: basicItems,
    separator: 'custom',
    customSeparator: <ChevronRight size={14} style={{
      color: 'var(--text-tertiary)'
    }} />
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    items: basicItems,
    size: 'sm'
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    items: basicItems,
    size: 'lg'
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '/',
      icon: <Home size={16} />
    }, {
      label: 'Settings',
      href: '/settings',
      icon: <Settings size={16} />
    }, {
      label: 'Profile',
      icon: <User size={16} />
    }]
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Electronics',
      href: '/electronics'
    }, {
      label: 'Computers',
      href: '/electronics/computers'
    }, {
      label: 'Laptops',
      href: '/electronics/computers/laptops'
    }, {
      label: 'Gaming',
      href: '/electronics/computers/laptops/gaming'
    }, {
      label: 'High Performance',
      href: '/electronics/computers/laptops/gaming/high-performance'
    }, {
      label: 'MSI GT77 Titan'
    }]
  },
  decorators: [Story => <div style={{
    width: '800px'
  }}>
        <Story />
      </div>]
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Electronics',
      href: '/electronics'
    }, {
      label: 'Computers',
      href: '/electronics/computers'
    }, {
      label: 'Laptops',
      href: '/electronics/computers/laptops'
    }, {
      label: 'Gaming',
      href: '/electronics/computers/laptops/gaming'
    }, {
      label: 'High Performance',
      href: '/electronics/computers/laptops/gaming/high-performance'
    }, {
      label: 'MSI GT77 Titan'
    }],
    maxItems: 4
  },
  decorators: [Story => <div style={{
    width: '600px'
  }}>
        <h4 style={{
      marginBottom: 'var(--spacing-4)',
      fontSize: 'var(--font-size-14)',
      color: 'var(--text-secondary)'
    }}>
          Collapsed to 4 items (shows first, last 3, and ellipsis)
        </h4>
        <Story />
      </div>]
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Dashboard'
    }]
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Settings',
      href: '/settings'
    }, {
      label: 'Profile'
    }]
  }
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Men',
      href: '/men'
    }, {
      label: 'Clothing',
      href: '/men/clothing'
    }, {
      label: 'T-Shirts',
      href: '/men/clothing/tshirts'
    }, {
      label: 'Vintage Band T-Shirt'
    }],
    showHomeIcon: true
  },
  decorators: [Story => <div style={{
    width: '700px',
    padding: 'var(--spacing-8)',
    borderRadius: 'var(--radius-control)',
    border: '1px solid var(--border-subtle)',
    background: 'var(--surface-base)'
  }}>
        <Story />
        <div style={{
      marginTop: 'var(--spacing-8)'
    }}>
          <h1 style={{
        margin: '0 0 var(--spacing-2) 0',
        fontSize: 'var(--font-size-24)',
        fontWeight: 'var(--font-weight-bold)'
      }}>
            Vintage Band T-Shirt
          </h1>
          <p style={{
        margin: 0,
        fontSize: 'var(--font-size-18)',
        color: 'var(--text-brand)',
        fontWeight: 'var(--font-weight-medium)'
      }}>$29.99</p>
        </div>
      </div>]
}`,...v.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Docs',
      href: '/docs'
    }, {
      label: 'Components',
      href: '/docs/components'
    }, {
      label: 'Navigation',
      href: '/docs/components/navigation'
    }, {
      label: 'Breadcrumb'
    }],
    separator: 'slash',
    size: 'sm'
  },
  decorators: [Story => <div style={{
    width: '800px',
    padding: 'var(--spacing-8)',
    borderRadius: 'var(--radius-control)',
    border: '1px solid var(--border-subtle)',
    background: 'var(--surface-base)'
  }}>
        <Story />
        <div style={{
      marginTop: 'var(--spacing-8)'
    }}>
          <h1 style={{
        margin: '0 0 var(--spacing-4) 0',
        fontSize: 'var(--font-size-24)',
        fontWeight: 'var(--font-weight-bold)'
      }}>Breadcrumb</h1>
          <p style={{
        margin: 0,
        fontSize: 'var(--font-size-16)',
        color: 'var(--text-secondary)',
        lineHeight: 1.6
      }}>
            Navigation breadcrumbs showing current page location in site hierarchy.
          </p>
        </div>
      </div>]
}`,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    items: basicItems
  },
  render: () => {
    const dashboardItems: BreadcrumbItem[] = [{
      label: 'Dashboard',
      href: '/dashboard',
      icon: <LayoutDashboard size={16} />
    }, {
      label: 'Analytics',
      href: '/dashboard/analytics',
      icon: <TrendingUp size={16} />
    }, {
      label: 'Revenue Report',
      icon: <DollarSign size={16} />
    }];
    return <div style={{
      width: '900px',
      padding: 'var(--spacing-8)',
      borderRadius: 'var(--radius-control)',
      border: '1px solid var(--border-subtle)',
      background: 'var(--surface-base)'
    }}>
        <Breadcrumb items={dashboardItems} />
        <div style={{
        marginTop: 'var(--spacing-8)'
      }}>
          <h2 style={{
          margin: '0 0 var(--spacing-6) 0',
          fontSize: 'var(--font-size-24)',
          fontWeight: 'var(--font-weight-medium)'
        }}>
            Revenue Report
          </h2>
          <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 'var(--spacing-4)'
        }}>
            {['Total Revenue', 'Monthly Growth', 'Active Users'].map(metric => <div key={metric} style={{
            padding: 'var(--spacing-6)',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-subtle)',
            background: 'var(--surface-subtle)'
          }}>
                <div style={{
              fontSize: 'var(--font-size-24)',
              fontWeight: 'var(--font-weight-bold)',
              marginBottom: 'var(--spacing-2)'
            }}>
                  {Math.floor(Math.random() * 10000)}
                </div>
                <div style={{
              fontSize: 'var(--font-size-14)',
              color: 'var(--text-secondary)'
            }}>{metric}</div>
              </div>)}
          </div>
        </div>
      </div>;
  }
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    items: basicItems
  },
  render: () => <div style={{
    width: '600px',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-8)'
  }}>
      <div>
        <p style={{
        marginBottom: 'var(--spacing-2)',
        fontSize: 'var(--font-size-14)',
        fontWeight: 'var(--font-weight-medium)'
      }}>Small</p>
        <Breadcrumb items={basicItems} size="sm" />
      </div>
      <div>
        <p style={{
        marginBottom: 'var(--spacing-2)',
        fontSize: 'var(--font-size-14)',
        fontWeight: 'var(--font-weight-medium)'
      }}>
          Medium (Default)
        </p>
        <Breadcrumb items={basicItems} size="md" />
      </div>
      <div>
        <p style={{
        marginBottom: 'var(--spacing-2)',
        fontSize: 'var(--font-size-14)',
        fontWeight: 'var(--font-weight-medium)'
      }}>Large</p>
        <Breadcrumb items={basicItems} size="lg" />
      </div>
    </div>
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    items: basicItems
  },
  render: () => <div style={{
    width: '600px',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-8)'
  }}>
      <div>
        <p style={{
        marginBottom: 'var(--spacing-2)',
        fontSize: 'var(--font-size-14)',
        fontWeight: 'var(--font-weight-medium)'
      }}>
          Chevron (Default)
        </p>
        <Breadcrumb items={basicItems} separator="chevron" />
      </div>
      <div>
        <p style={{
        marginBottom: 'var(--spacing-2)',
        fontSize: 'var(--font-size-14)',
        fontWeight: 'var(--font-weight-medium)'
      }}>Slash</p>
        <Breadcrumb items={basicItems} separator="slash" />
      </div>
      <div>
        <p style={{
        marginBottom: 'var(--spacing-2)',
        fontSize: 'var(--font-size-14)',
        fontWeight: 'var(--font-weight-medium)'
      }}>
          Custom (Arrow)
        </p>
        <Breadcrumb items={basicItems} separator="custom" customSeparator={<span style={{
        color: 'var(--text-tertiary)'
      }}>→</span>} />
      </div>
      <div>
        <p style={{
        marginBottom: 'var(--spacing-2)',
        fontSize: 'var(--font-size-14)',
        fontWeight: 'var(--font-weight-medium)'
      }}>Custom (Dot)</p>
        <Breadcrumb items={basicItems} separator="custom" customSeparator={<span style={{
        color: 'var(--text-tertiary)'
      }}>•</span>} />
      </div>
    </div>
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    items: basicItems
  },
  render: () => {
    const fileItems: BreadcrumbItem[] = [{
      label: 'Documents',
      href: '/documents'
    }, {
      label: 'Projects',
      href: '/documents/projects'
    }, {
      label: 'Design System',
      href: '/documents/projects/design-system'
    }, {
      label: 'Components',
      href: '/documents/projects/design-system/components'
    }, {
      label: 'Breadcrumb.tsx'
    }];
    return <div style={{
      width: '800px',
      padding: 'var(--spacing-6)',
      borderRadius: 'var(--radius-control)',
      border: '1px solid var(--border-subtle)',
      background: 'var(--surface-base)'
    }}>
        <Breadcrumb items={fileItems} separator="slash" size="sm" />
        <div style={{
        marginTop: 'var(--spacing-6)',
        padding: 'var(--spacing-4)',
        borderRadius: 'var(--radius-sm)',
        background: 'var(--surface-subtle)',
        fontFamily: 'monospace',
        fontSize: 'var(--font-size-14)'
      }}>
          <div style={{
          color: 'var(--text-secondary)'
        }}>// Breadcrumb.tsx</div>
          <div style={{
          marginTop: 'var(--spacing-2)'
        }}>export const Breadcrumb = ...</div>
        </div>
      </div>;
  }
}`,...y.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    items: basicItems
  },
  render: () => {
    const adminItems: BreadcrumbItem[] = [{
      label: 'Admin',
      href: '/admin',
      icon: <ShieldCheck size={16} />
    }, {
      label: 'Users',
      href: '/admin/users',
      icon: <Users size={16} />
    }, {
      label: 'User Details',
      icon: <User size={16} />
    }];
    return <div style={{
      width: '700px',
      padding: 'var(--spacing-8)',
      borderRadius: 'var(--radius-control)',
      border: '1px solid var(--border-subtle)',
      background: 'var(--surface-base)'
    }}>
        <Breadcrumb items={adminItems} size="lg" />
        <div style={{
        marginTop: 'var(--spacing-8)'
      }}>
          <h2 style={{
          margin: '0 0 var(--spacing-4) 0',
          fontSize: 'var(--font-size-24)',
          fontWeight: 'var(--font-weight-medium)'
        }}>
            John Doe (#12345)
          </h2>
          <div style={{
          display: 'flex',
          gap: 'var(--spacing-4)'
        }}>
            <Button variant="secondary">Edit User</Button>
            <Button variant="danger">Delete User</Button>
          </div>
        </div>
      </div>;
  }
}`,...S.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    items: basicItems,
    className: 'custom-breadcrumb'
  }
}`,...z.parameters?.docs?.source}}};const q=["Default","WithHomeIcon","SlashSeparator","CustomSeparator","SmallSize","LargeSize","WithIcons","LongPath","CollapsedPath","TwoLevels","ThreeLevels","ECommerceProduct","Documentation","Dashboard","AllSizes","AllSeparators","FileExplorer","AdminPanel","WithCustomStyling"];export{S as AdminPanel,x as AllSeparators,b as AllSizes,p as CollapsedPath,i as CustomSeparator,f as Dashboard,t as Default,u as Documentation,v as ECommerceProduct,y as FileExplorer,l as LargeSize,d as LongPath,o as SlashSeparator,c as SmallSize,h as ThreeLevels,g as TwoLevels,z as WithCustomStyling,n as WithHomeIcon,m as WithIcons,q as __namedExportsOrder,O as default};
