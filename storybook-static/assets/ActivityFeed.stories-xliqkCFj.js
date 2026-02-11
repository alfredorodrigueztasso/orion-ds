import{j as e}from"./jsx-runtime-u17CrQMm.js";import{A as u}from"./ActivityFeed-BDb9XJJo.js";import{B as p}from"./Button-C5l-MScQ.js";import{C as g}from"./circle-check-big-CA7x2PYe.js";import{U as v}from"./user-plus-ieu4bY2k.js";import"./index-Bi6L2ga8.js";import"./upload-DDi9KpFe.js";import"./createLucideIcon-DprCCbyf.js";import"./trash-2-B67onKV4.js";import"./plus-_oTOY7dX.js";import"./square-pen-Becd8mc9.js";import"./message-square-9wXJwYnY.js";const z={title:"Sections/App/ActivityFeed",component:u,parameters:{layout:"padded",docs:{description:{component:"A timeline of events and activities for SaaS dashboards. Optimized for Product Mode with efficient information scanning."}}},tags:["autodocs"],argTypes:{showFilters:{control:"boolean"},showConnectors:{control:"boolean"},compact:{control:"boolean"},loading:{control:"boolean"}}},t=[{id:"1",type:"comment",actor:{name:"John Doe",avatar:"https://i.pravatar.cc/40?u=john"},title:"commented on",description:"Great progress on the design! The new layout looks much cleaner.",timestamp:"2024-01-15T10:30:00Z",relativeTime:"2 hours ago"},{id:"2",type:"complete",iconVariant:"success",actor:{name:"Jane Smith",avatar:"https://i.pravatar.cc/40?u=jane"},title:'completed task "Update documentation"',timestamp:"2024-01-15T09:15:00Z",relativeTime:"3 hours ago"},{id:"3",type:"assign",iconVariant:"info",actor:{name:"Bob Wilson"},title:'assigned you to "Fix login bug"',timestamp:"2024-01-15T08:00:00Z",relativeTime:"4 hours ago"},{id:"4",type:"update",actor:{name:"Alice Brown",avatar:"https://i.pravatar.cc/40?u=alice"},title:"updated the project settings",metadata:{Changed:"Theme color",From:"Blue",To:"Purple"},timestamp:"2024-01-15T07:30:00Z",relativeTime:"5 hours ago"},{id:"5",type:"upload",actor:{name:"Charlie Davis"},title:'uploaded 3 files to "Assets"',timestamp:"2024-01-14T16:00:00Z",relativeTime:"Yesterday"}],a={args:{activities:t}},s={args:{activities:t,showFilters:!0,filters:[{value:"all",label:"All",count:24},{value:"comments",label:"Comments",count:8},{value:"updates",label:"Updates",count:12},{value:"tasks",label:"Tasks",count:4}],activeFilter:"all",onFilterChange:d=>console.log("Filter:",d)}},o={args:{activities:t.slice(0,3),hasMore:!0,onLoadMore:()=>console.log("Load more")}},i={args:{activities:t,compact:!0}},r={args:{activities:t,showConnectors:!1}},n={args:{activities:[],loading:!0}},c={args:{activities:[],emptyMessage:"No activity to show yet. Start by creating a project!"}},m={args:{activities:[{id:"1",type:"comment",actor:{name:"John Doe"},title:"commented on your post",description:"This looks amazing! Can we schedule a call to discuss?",timestamp:"2024-01-15T10:30:00Z",relativeTime:"2 hours ago",actions:e.jsxs(e.Fragment,{children:[e.jsx(p,{size:"sm",variant:"secondary",children:"Reply"}),e.jsx(p,{size:"sm",variant:"ghost",children:"Dismiss"})]})},...t.slice(1)]}},l={args:{activities:[{id:"1",icon:e.jsx(g,{size:16}),iconVariant:"success",actor:{name:"System"},title:"Deployment completed successfully",timestamp:"2024-01-15T10:30:00Z",relativeTime:"5 min ago"},{id:"2",icon:e.jsx(v,{size:16}),iconVariant:"brand",actor:{name:"Admin"},title:"New team member invited",description:"sarah@example.com will receive an invitation email shortly.",timestamp:"2024-01-15T09:30:00Z",relativeTime:"1 hour ago"}]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    activities: sampleActivities
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    activities: sampleActivities,
    showFilters: true,
    filters: [{
      value: 'all',
      label: 'All',
      count: 24
    }, {
      value: 'comments',
      label: 'Comments',
      count: 8
    }, {
      value: 'updates',
      label: 'Updates',
      count: 12
    }, {
      value: 'tasks',
      label: 'Tasks',
      count: 4
    }],
    activeFilter: 'all',
    onFilterChange: filter => console.log('Filter:', filter)
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    activities: sampleActivities.slice(0, 3),
    hasMore: true,
    onLoadMore: () => console.log('Load more')
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    activities: sampleActivities,
    compact: true
  }
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    activities: sampleActivities,
    showConnectors: false
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    activities: [],
    loading: true
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    activities: [],
    emptyMessage: 'No activity to show yet. Start by creating a project!'
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    activities: [{
      id: '1',
      type: 'comment' as const,
      actor: {
        name: 'John Doe'
      },
      title: 'commented on your post',
      description: 'This looks amazing! Can we schedule a call to discuss?',
      timestamp: '2024-01-15T10:30:00Z',
      relativeTime: '2 hours ago',
      actions: <>
            <Button size="sm" variant="secondary">Reply</Button>
            <Button size="sm" variant="ghost">Dismiss</Button>
          </>
    }, ...sampleActivities.slice(1)]
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    activities: [{
      id: '1',
      icon: <CheckCircle size={16} />,
      iconVariant: 'success' as const,
      actor: {
        name: 'System'
      },
      title: 'Deployment completed successfully',
      timestamp: '2024-01-15T10:30:00Z',
      relativeTime: '5 min ago'
    }, {
      id: '2',
      icon: <UserPlus size={16} />,
      iconVariant: 'brand' as const,
      actor: {
        name: 'Admin'
      },
      title: 'New team member invited',
      description: 'sarah@example.com will receive an invitation email shortly.',
      timestamp: '2024-01-15T09:30:00Z',
      relativeTime: '1 hour ago'
    }]
  }
}`,...l.parameters?.docs?.source}}};const Z=["Default","WithFilters","WithLoadMore","Compact","NoConnectors","Loading","Empty","WithActions","CustomIcons"];export{i as Compact,l as CustomIcons,a as Default,c as Empty,n as Loading,r as NoConnectors,m as WithActions,s as WithFilters,o as WithLoadMore,Z as __namedExportsOrder,z as default};
