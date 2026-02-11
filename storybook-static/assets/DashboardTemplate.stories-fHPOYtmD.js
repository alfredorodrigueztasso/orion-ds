import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as B}from"./index-Bi6L2ga8.js";import{S as E}from"./Sidebar-Bm4CyupK.js";import{P as k}from"./PageHeader-CDlIDpAo.js";import{M}from"./MetricCards-DekZ0wiY.js";import{D as N}from"./DataTable-DywnkR9c.js";import{A as H}from"./ActivityFeed-BDb9XJJo.js";import{B as s}from"./Button-C5l-MScQ.js";import{B as b}from"./Badge-CTnzlsKR.js";import{A as I}from"./Avatar-CustGMqw.js";import{D as f}from"./download-B1IGscQm.js";import{P as z}from"./plus-_oTOY7dX.js";import{D as W}from"./dollar-sign-DfkM_E10.js";import{U as j}from"./users-B3aIcKNm.js";import{S as y}from"./shopping-cart-jJMduW6k.js";import{T as R}from"./trending-up--FzQNwgR.js";import{H as L}from"./house-Bwi52rpT.js";import{C as P}from"./chart-column-DwEZQFyg.js";import{F}from"./file-text-3QR_BDt1.js";import{S as J}from"./settings-DVkWYkkM.js";import{B as U}from"./bell-B0mciaZ5.js";import"./chevron-right-BuTIk0ZE.js";import"./createLucideIcon-DprCCbyf.js";import"./chevron-left-D9uTS5hk.js";import"./chevron-down-buXKF-gJ.js";import"./trending-down-DLTGsz8J.js";import"./search-BC3UyaPv.js";import"./chevron-up-l-vr_Vwi.js";import"./ellipsis-DlXNEQa3.js";import"./inbox-uqBrsvVO.js";import"./user-plus-ieu4bY2k.js";import"./upload-DDi9KpFe.js";import"./circle-check-big-CA7x2PYe.js";import"./trash-2-B67onKV4.js";import"./square-pen-Becd8mc9.js";import"./message-square-9wXJwYnY.js";import"./user-CUEj3VL3.js";const q="_dashboard_khzx3_8",$="_main_khzx3_16",K="_content_khzx3_26",V="_contentInner_khzx3_35",Q="_contentSplit_khzx3_42",Y="_compact_khzx3_51",G="_aside_khzx3_64",r={dashboard:q,main:$,content:K,contentInner:V,contentSplit:Q,compact:Y,aside:G},x=B.forwardRef(({sidebar:p,pageHeader:t,metrics:u,dataTable:S,activityFeed:T,layout:v="default",children:w,className:A,...D},_)=>{const C=[r.dashboard,v==="compact"&&r.compact,A].filter(Boolean).join(" "),O=v==="split"?r.contentSplit:r.content;return e.jsxs("div",{ref:_,className:C,...D,children:[p&&e.jsx(E,{variant:"floating",...p}),e.jsxs("main",{className:r.main,children:[e.jsx(k,{variant:"transparent",...t}),e.jsxs("div",{className:O,children:[e.jsxs("div",{className:r.contentInner,children:[u&&e.jsx(M,{...u}),S&&e.jsx(N,{...S}),w]}),v==="split"&&T&&e.jsx("aside",{className:r.aside,children:e.jsx(H,{...T})})]})]})]})});x.displayName="DashboardTemplate";x.__docgenInfo={description:`DashboardTemplate - Full dashboard page composition

Combines Sidebar, PageHeader, MetricCards, DataTable, and ActivityFeed
into a complete dashboard layout.

@example
\`\`\`tsx
<DashboardTemplate
  sidebar={{ sections: navSections }}
  pageHeader={{ title: 'Dashboard', description: 'Overview' }}
  metrics={{ metrics: dashboardMetrics }}
  dataTable={{ columns: columns, data: tableData }}
  layout="split"
  activityFeed={{ activities: recentActivity }}
/>
\`\`\``,methods:[],displayName:"DashboardTemplate",props:{sidebar:{required:!1,tsType:{name:"SidebarProps"},description:"Sidebar configuration (optional)"},pageHeader:{required:!0,tsType:{name:"PageHeaderProps"},description:"Page header configuration (required)"},metrics:{required:!1,tsType:{name:"MetricCardsProps"},description:"Metric cards section"},dataTable:{required:!1,tsType:{name:"DataTableProps",elements:[{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"}],raw:"DataTableProps<Record<string, unknown>>"},description:"Main data table"},activityFeed:{required:!1,tsType:{name:"ActivityFeedProps"},description:"Activity feed for side panel (used in split layout)"},layout:{required:!1,tsType:{name:"union",raw:"'default' | 'split' | 'compact'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'split'"},{name:"literal",value:"'compact'"}]},description:`Layout variant
- default: Full width content
- split: Content + activity feed side panel
- compact: Compact spacing for dense data
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:"Additional children rendered in the main content area"}},composes:["HTMLAttributes"]};const Ie={title:"Templates/App/Dashboard",component:x,parameters:{layout:"fullscreen",docs:{description:{component:"A complete dashboard template with sidebar, metrics, data table, and activity feed."}}},tags:["autodocs"]},X=[{items:[{id:"dashboard",label:"Dashboard",icon:e.jsx(L,{size:20}),href:"/dashboard"},{id:"analytics",label:"Analytics",icon:e.jsx(P,{size:20}),href:"/analytics"},{id:"customers",label:"Customers",icon:e.jsx(j,{size:20}),href:"/customers",badge:e.jsx(b,{size:"sm",children:"12"})},{id:"orders",label:"Orders",icon:e.jsx(y,{size:20}),href:"/orders"},{id:"reports",label:"Reports",icon:e.jsx(F,{size:20}),href:"/reports"}]},{title:"Settings",items:[{id:"settings",label:"Settings",icon:e.jsx(J,{size:20}),href:"/settings"},{id:"notifications",label:"Notifications",icon:e.jsx(U,{size:20}),href:"/notifications"}]}],h=[{label:"Total Revenue",value:"$45,231.89",trend:{value:"+20.1%",positive:!0},icon:e.jsx(W,{size:20})},{label:"Active Users",value:"2,350",trend:{value:"+180",positive:!0},icon:e.jsx(j,{size:20})},{label:"Orders",value:"1,234",trend:{value:"-5.2%",positive:!1},icon:e.jsx(y,{size:20})},{label:"Conversion Rate",value:"3.24%",trend:{value:"+0.5%",positive:!0},icon:e.jsx(R,{size:20})}],m=[{key:"id",header:"Order",width:"90px",sortable:!0},{key:"customer",header:"Customer",sortable:!0,render:(p,t)=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-3)"},children:[e.jsx(I,{initials:String(t.customer).split(" ").map(u=>u[0]).join(""),size:"sm"}),e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:"var(--font-weight-medium)"},children:String(t.customer)}),e.jsx("div",{style:{fontSize:"var(--font-size-12)",color:"var(--text-tertiary)"},children:String(t.email)})]})]})},{key:"status",header:"Status",align:"center",render:(p,t)=>e.jsx(b,{variant:t.status==="completed"?"success":t.status==="pending"?"warning":"secondary",children:String(t.status).charAt(0).toUpperCase()+String(t.status).slice(1)})},{key:"amount",header:"Amount",align:"right",sortable:!0},{key:"date",header:"Date",sortable:!0,hideOnMobile:!0}],g=[{id:"#3210",customer:"Olivia Martin",email:"olivia@email.com",status:"completed",amount:"$316.00",date:"Jan 15, 2024"},{id:"#3209",customer:"Jackson Lee",email:"jackson@email.com",status:"pending",amount:"$242.00",date:"Jan 15, 2024"},{id:"#3208",customer:"Isabella Nguyen",email:"isabella@email.com",status:"completed",amount:"$837.00",date:"Jan 14, 2024"},{id:"#3207",customer:"William Kim",email:"william@email.com",status:"processing",amount:"$129.00",date:"Jan 14, 2024"},{id:"#3206",customer:"Sofia Davis",email:"sofia@email.com",status:"completed",amount:"$459.00",date:"Jan 13, 2024"},{id:"#3205",customer:"Ethan Johnson",email:"ethan@email.com",status:"pending",amount:"$732.00",date:"Jan 13, 2024"},{id:"#3204",customer:"Emma Wilson",email:"emma@email.com",status:"completed",amount:"$284.00",date:"Jan 12, 2024"},{id:"#3203",customer:"Liam Brown",email:"liam@email.com",status:"completed",amount:"$596.00",date:"Jan 12, 2024"}],Z=[{id:"1",title:"Olivia Martin placed an order",timestamp:"5 minutes ago",actor:{name:"Olivia Martin",avatar:"https://i.pravatar.cc/40?u=olivia"}},{id:"2",title:"Jackson Lee updated their profile",timestamp:"15 minutes ago",actor:{name:"Jackson Lee",avatar:"https://i.pravatar.cc/40?u=jackson"}},{id:"3",title:"Isabella Nguyen left a review",timestamp:"1 hour ago",actor:{name:"Isabella Nguyen",avatar:"https://i.pravatar.cc/40?u=isabella"}},{id:"4",title:"William Kim requested a refund",timestamp:"2 hours ago",actor:{name:"William Kim",avatar:"https://i.pravatar.cc/40?u=william"}},{id:"5",title:"Sofia Davis signed up",timestamp:"3 hours ago",actor:{name:"Sofia Davis",avatar:"https://i.pravatar.cc/40?u=sofia"}}],a={args:{sidebar:{sections:X,activeItem:"dashboard",header:e.jsx("div",{style:{padding:"var(--spacing-4)",fontWeight:"var(--font-weight-bold)",fontSize:"var(--text-xl)"},children:"Acme"})},pageHeader:{title:"Dashboard",description:"Welcome back! Here's an overview of your business.",actions:e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"ghost",icon:e.jsx(f,{size:18}),children:"Export"}),e.jsx(s,{variant:"primary",icon:e.jsx(z,{size:18}),children:"New Order"})]})},metrics:{metrics:h,columns:4},dataTable:{columns:m,data:g,searchable:!0,searchPlaceholder:"Search orders...",toolbar:e.jsx("h3",{style:{margin:0,fontSize:"var(--font-size-16)",fontWeight:"var(--font-weight-medium)",color:"var(--text-primary)"},children:"Recent Orders"}),pagination:{page:1,pageSize:10,total:50}}}},i={args:{...a.args,layout:"split",activityFeed:{activities:Z}}},o={args:{pageHeader:{title:"Analytics Overview",description:"Track your key metrics and performance indicators.",breadcrumbs:[{label:"Home",href:"/"},{label:"Analytics"}],actions:e.jsx(s,{variant:"ghost",icon:e.jsx(f,{size:18}),children:"Export Report"})},metrics:{metrics:h,columns:4},dataTable:{columns:m,data:g,searchable:!0,toolbar:e.jsx("h3",{style:{margin:0,fontSize:"var(--font-size-16)",fontWeight:"var(--font-weight-medium)",color:"var(--text-primary)"},children:"Recent Orders"})}}},n={args:{sidebar:a.args?.sidebar,pageHeader:a.args?.pageHeader,metrics:a.args?.metrics,layout:"compact",dataTable:{columns:m,data:g,compact:!0,toolbar:e.jsx("h3",{style:{margin:0,fontSize:"var(--font-size-14)",fontWeight:"var(--font-weight-medium)",color:"var(--text-primary)"},children:"Recent Orders"})}}},c={args:{sidebar:a.args?.sidebar,pageHeader:{title:"Analytics",description:"Track performance across all channels",tabs:[{id:"overview",label:"Overview"},{id:"sales",label:"Sales",badge:e.jsx(b,{size:"sm",children:"New"})},{id:"customers",label:"Customers"},{id:"products",label:"Products"}],activeTab:"overview",actions:e.jsx(s,{variant:"ghost",icon:e.jsx(f,{size:18}),children:"Export"})},metrics:{metrics:h,columns:4},dataTable:{columns:m,data:g,searchable:!0,searchPlaceholder:"Search...",toolbar:e.jsx("h3",{style:{margin:0,fontSize:"var(--font-size-16)",fontWeight:"var(--font-weight-medium)",color:"var(--text-primary)"},children:"Sales Data"})}}},d={args:{sidebar:a.args?.sidebar,pageHeader:{title:"Quick Overview"},metrics:{metrics:h,columns:4}}},l={args:{sidebar:a.args?.sidebar,pageHeader:{title:"Orders",description:"Manage your customer orders.",actions:e.jsx(s,{variant:"primary",icon:e.jsx(z,{size:18}),children:"New Order"})},dataTable:{columns:m,data:[],emptyState:{icon:e.jsx(y,{size:48}),title:"No orders yet",description:"When customers place orders, they'll appear here.",action:e.jsx(s,{variant:"primary",children:"Create Order"})}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    sidebar: {
      sections: SIDEBAR_SECTIONS,
      activeItem: 'dashboard',
      header: <div style={{
        padding: 'var(--spacing-4)',
        fontWeight: 'var(--font-weight-bold)',
        fontSize: 'var(--text-xl)'
      }}>
          Acme
        </div>
    },
    pageHeader: {
      title: 'Dashboard',
      description: 'Welcome back! Here\\'s an overview of your business.',
      actions: <>
          <Button variant="ghost" icon={<Download size={18} />}>Export</Button>
          <Button variant="primary" icon={<Plus size={18} />}>New Order</Button>
        </>
    },
    metrics: {
      metrics: METRICS,
      columns: 4
    },
    dataTable: {
      columns: TABLE_COLUMNS,
      data: TABLE_DATA,
      searchable: true,
      searchPlaceholder: 'Search orders...',
      toolbar: <h3 style={{
        margin: 0,
        fontSize: 'var(--font-size-16)',
        fontWeight: 'var(--font-weight-medium)',
        color: 'var(--text-primary)'
      }}>
          Recent Orders
        </h3>,
      pagination: {
        page: 1,
        pageSize: 10,
        total: 50
      }
    }
  }
}`,...a.parameters?.docs?.source},description:{story:"Default dashboard with sidebar and metrics",...a.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    layout: 'split',
    activityFeed: {
      activities: ACTIVITY_ITEMS
    }
  }
}`,...i.parameters?.docs?.source},description:{story:"Dashboard with split layout showing activity feed",...i.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    pageHeader: {
      title: 'Analytics Overview',
      description: 'Track your key metrics and performance indicators.',
      breadcrumbs: [{
        label: 'Home',
        href: '/'
      }, {
        label: 'Analytics'
      }],
      actions: <Button variant="ghost" icon={<Download size={18} />}>Export Report</Button>
    },
    metrics: {
      metrics: METRICS,
      columns: 4
    },
    dataTable: {
      columns: TABLE_COLUMNS,
      data: TABLE_DATA,
      searchable: true,
      toolbar: <h3 style={{
        margin: 0,
        fontSize: 'var(--font-size-16)',
        fontWeight: 'var(--font-weight-medium)',
        color: 'var(--text-primary)'
      }}>
          Recent Orders
        </h3>
    }
  }
}`,...o.parameters?.docs?.source},description:{story:"Dashboard without sidebar (embedded view)",...o.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    sidebar: Default.args?.sidebar,
    pageHeader: Default.args?.pageHeader,
    metrics: Default.args?.metrics,
    layout: 'compact',
    dataTable: {
      columns: TABLE_COLUMNS,
      data: TABLE_DATA,
      compact: true,
      toolbar: <h3 style={{
        margin: 0,
        fontSize: 'var(--font-size-14)',
        fontWeight: 'var(--font-weight-medium)',
        color: 'var(--text-primary)'
      }}>
          Recent Orders
        </h3>
    }
  }
}`,...n.parameters?.docs?.source},description:{story:"Compact dashboard with dense spacing",...n.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    sidebar: Default.args?.sidebar,
    pageHeader: {
      title: 'Analytics',
      description: 'Track performance across all channels',
      tabs: [{
        id: 'overview',
        label: 'Overview'
      }, {
        id: 'sales',
        label: 'Sales',
        badge: <Badge size="sm">New</Badge>
      }, {
        id: 'customers',
        label: 'Customers'
      }, {
        id: 'products',
        label: 'Products'
      }],
      activeTab: 'overview',
      actions: <Button variant="ghost" icon={<Download size={18} />}>Export</Button>
    },
    metrics: {
      metrics: METRICS,
      columns: 4
    },
    dataTable: {
      columns: TABLE_COLUMNS,
      data: TABLE_DATA,
      searchable: true,
      searchPlaceholder: 'Search...',
      toolbar: <h3 style={{
        margin: 0,
        fontSize: 'var(--font-size-16)',
        fontWeight: 'var(--font-weight-medium)',
        color: 'var(--text-primary)'
      }}>
          Sales Data
        </h3>
    }
  }
}`,...c.parameters?.docs?.source},description:{story:"Dashboard with tabs in header",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    sidebar: Default.args?.sidebar,
    pageHeader: {
      title: 'Quick Overview'
    },
    metrics: {
      metrics: METRICS,
      columns: 4
    }
  }
}`,...d.parameters?.docs?.source},description:{story:"Minimal dashboard with just metrics",...d.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    sidebar: Default.args?.sidebar,
    pageHeader: {
      title: 'Orders',
      description: 'Manage your customer orders.',
      actions: <Button variant="primary" icon={<Plus size={18} />}>New Order</Button>
    },
    dataTable: {
      columns: TABLE_COLUMNS,
      data: [],
      emptyState: {
        icon: <ShoppingCart size={48} />,
        title: 'No orders yet',
        description: 'When customers place orders, they\\'ll appear here.',
        action: <Button variant="primary">Create Order</Button>
      }
    }
  }
}`,...l.parameters?.docs?.source},description:{story:"Dashboard with empty state",...l.parameters?.docs?.description}}};const We=["Default","WithActivityFeed","WithoutSidebar","Compact","WithTabs","MetricsOnly","EmptyState"];export{n as Compact,a as Default,l as EmptyState,d as MetricsOnly,i as WithActivityFeed,c as WithTabs,o as WithoutSidebar,We as __namedExportsOrder,Ie as default};
