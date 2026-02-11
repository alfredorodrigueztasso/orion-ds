import{j as e}from"./jsx-runtime-u17CrQMm.js";import{P as u}from"./PageHeader-CDlIDpAo.js";import{B as a}from"./Button-C5l-MScQ.js";import{B as d}from"./Badge-CTnzlsKR.js";import{S as b}from"./settings-DVkWYkkM.js";import{D as m}from"./download-B1IGscQm.js";import{P as p}from"./plus-_oTOY7dX.js";import{F as g}from"./funnel-BrGssVc5.js";import"./index-Bi6L2ga8.js";import"./chevron-left-D9uTS5hk.js";import"./createLucideIcon-DprCCbyf.js";import"./chevron-right-BuTIk0ZE.js";const A={title:"Sections/App/PageHeader",component:u,parameters:{layout:"fullscreen",docs:{description:{component:"A page header for SaaS dashboards with breadcrumbs, title, description, and actions. Optimized for Product Mode with minimal visual noise."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","compact","with-tabs"]},size:{control:"select",options:["sm","md","lg"]},bordered:{control:"boolean"},sticky:{control:"boolean"}}},r={args:{title:"Users",description:"Manage user accounts and permissions",breadcrumbs:[{label:"Dashboard",href:"#"},{label:"Settings",href:"#"},{label:"Users"}],actions:e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"secondary",icon:e.jsx(m,{size:18}),children:"Export"}),e.jsx(a,{icon:e.jsx(p,{size:18}),children:"Add User"})]})}},t={args:{title:"Projects",description:"View and manage all your projects",variant:"with-tabs",tabs:[{id:"all",label:"All Projects",badge:"24"},{id:"active",label:"Active",badge:"12"},{id:"archived",label:"Archived",badge:"8"},{id:"drafts",label:"Drafts",badge:"4"}],activeTab:"active",actions:e.jsx(a,{icon:e.jsx(p,{size:18}),children:"New Project"})}},s={args:{title:"Notifications",badge:e.jsx(d,{variant:"info",children:"3 new"}),description:"View all your notifications",actions:e.jsx(a,{variant:"ghost",size:"sm",children:"Mark all as read"})}},i={args:{backLink:{label:"Back to Dashboard",href:"#"},title:"User Details",description:"View and edit user information",actions:e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"secondary",children:"Cancel"}),e.jsx(a,{children:"Save Changes"})]})}},o={args:{title:"Quick Settings",variant:"compact",actions:e.jsx(a,{size:"sm",icon:e.jsx(b,{size:16}),iconOnly:!0,"aria-label":"Settings"})}},n={args:{title:"Dashboard Overview",size:"lg"}},c={args:{breadcrumbs:[{label:"Home",href:"#"},{label:"Analytics",href:"#"},{label:"Reports"}],title:"Monthly Reports",description:"View detailed analytics and insights for your business performance",badge:e.jsx(d,{variant:"success",children:"Updated"}),variant:"with-tabs",tabs:[{id:"overview",label:"Overview"},{id:"revenue",label:"Revenue"},{id:"users",label:"Users"},{id:"engagement",label:"Engagement"}],activeTab:"overview",actions:e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"secondary",icon:e.jsx(g,{size:18}),children:"Filters"}),e.jsx(a,{variant:"secondary",icon:e.jsx(m,{size:18}),children:"Export"})]})}},l={args:{title:"Inline Header",description:"A header without bottom border",bordered:!1}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Users',
    description: 'Manage user accounts and permissions',
    breadcrumbs: [{
      label: 'Dashboard',
      href: '#'
    }, {
      label: 'Settings',
      href: '#'
    }, {
      label: 'Users'
    }],
    actions: <>
        <Button variant="secondary" icon={<Download size={18} />}>
          Export
        </Button>
        <Button icon={<Plus size={18} />}>Add User</Button>
      </>
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Projects',
    description: 'View and manage all your projects',
    variant: 'with-tabs',
    tabs: [{
      id: 'all',
      label: 'All Projects',
      badge: '24'
    }, {
      id: 'active',
      label: 'Active',
      badge: '12'
    }, {
      id: 'archived',
      label: 'Archived',
      badge: '8'
    }, {
      id: 'drafts',
      label: 'Drafts',
      badge: '4'
    }],
    activeTab: 'active',
    actions: <Button icon={<Plus size={18} />}>New Project</Button>
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Notifications',
    badge: <Badge variant="info">3 new</Badge>,
    description: 'View all your notifications',
    actions: <Button variant="ghost" size="sm">
        Mark all as read
      </Button>
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    backLink: {
      label: 'Back to Dashboard',
      href: '#'
    },
    title: 'User Details',
    description: 'View and edit user information',
    actions: <>
        <Button variant="secondary">Cancel</Button>
        <Button>Save Changes</Button>
      </>
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Quick Settings',
    variant: 'compact',
    actions: <Button size="sm" icon={<Settings size={16} />} iconOnly aria-label="Settings" />
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Dashboard Overview',
    size: 'lg'
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    breadcrumbs: [{
      label: 'Home',
      href: '#'
    }, {
      label: 'Analytics',
      href: '#'
    }, {
      label: 'Reports'
    }],
    title: 'Monthly Reports',
    description: 'View detailed analytics and insights for your business performance',
    badge: <Badge variant="success">Updated</Badge>,
    variant: 'with-tabs',
    tabs: [{
      id: 'overview',
      label: 'Overview'
    }, {
      id: 'revenue',
      label: 'Revenue'
    }, {
      id: 'users',
      label: 'Users'
    }, {
      id: 'engagement',
      label: 'Engagement'
    }],
    activeTab: 'overview',
    actions: <>
        <Button variant="secondary" icon={<Filter size={18} />}>
          Filters
        </Button>
        <Button variant="secondary" icon={<Download size={18} />}>
          Export
        </Button>
      </>
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Inline Header',
    description: 'A header without bottom border',
    bordered: false
  }
}`,...l.parameters?.docs?.source}}};const P=["Default","WithTabs","WithBadge","WithBackLink","Compact","LargeTitleOnly","FullFeatured","NoBorder"];export{o as Compact,r as Default,c as FullFeatured,n as LargeTitleOnly,l as NoBorder,i as WithBackLink,s as WithBadge,t as WithTabs,P as __namedExportsOrder,A as default};
