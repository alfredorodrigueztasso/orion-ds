import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as B}from"./index-Bi6L2ga8.js";import{S as T}from"./Sidebar-Bm4CyupK.js";import{P as F}from"./PageHeader-CDlIDpAo.js";import{F as A}from"./FilterBar-B88KHOHh.js";import{K as j}from"./KanbanBoard-C6w1i8nL.js";import{B as o}from"./Button-C5l-MScQ.js";import{F as h}from"./funnel-BrGssVc5.js";import{P as p}from"./plus-_oTOY7dX.js";import{H as P}from"./house-Bwi52rpT.js";import{K as D}from"./kanban-Bs_qGzv8.js";import{C as N}from"./calendar-BjEn5mzX.js";import{S as I}from"./settings-DVkWYkkM.js";import"./chevron-right-BuTIk0ZE.js";import"./createLucideIcon-DprCCbyf.js";import"./chevron-left-D9uTS5hk.js";import"./chevron-down-buXKF-gJ.js";import"./search-BC3UyaPv.js";import"./x-Dd336Dmd.js";import"./ellipsis-DlXNEQa3.js";import"./clock-BOaF0ey4.js";import"./circle-alert-BMPEDkj1.js";const _="_kanbanPage_ni90q_8",K="_main_ni90q_16",w="_content_ni90q_26",M="_filterSection_ni90q_40",z="_boardSection_ni90q_52",i={kanbanPage:_,main:K,content:w,filterSection:M,boardSection:z},g=B.forwardRef(({sidebar:a,pageHeader:t,filterBar:b,kanban:k,children:f,className:y,...C},x)=>{const S=[i.kanbanPage,y].filter(Boolean).join(" ");return e.jsxs("div",{ref:x,className:S,...C,children:[a&&e.jsx(T,{variant:"floating",...a}),e.jsxs("main",{className:i.main,children:[e.jsx(F,{variant:"transparent",...t}),e.jsxs("div",{className:i.content,children:[b&&e.jsx("div",{className:i.filterSection,children:e.jsx(A,{...b})}),f,e.jsx("div",{className:i.boardSection,children:e.jsx(j,{...k})})]})]})]})});g.displayName="KanbanPageTemplate";g.__docgenInfo={description:`KanbanPageTemplate - Full Kanban board page composition

Combines Sidebar, PageHeader, FilterBar, and KanbanBoard.

@example
\`\`\`tsx
<KanbanPageTemplate
  sidebar={{ sections: navSections }}
  pageHeader={{ title: 'Sprint Board' }}
  filterBar={{ filters: filterOptions }}
  kanban={{ columns: boardColumns }}
/>
\`\`\``,methods:[],displayName:"KanbanPageTemplate",props:{sidebar:{required:!1,tsType:{name:"SidebarProps"},description:"Sidebar configuration (optional)"},pageHeader:{required:!0,tsType:{name:"PageHeaderProps"},description:"Page header configuration (required)"},filterBar:{required:!1,tsType:{name:"FilterBarProps"},description:"Filter bar for filtering cards"},kanban:{required:!0,tsType:{name:"KanbanBoardProps"},description:"Kanban board configuration (required)"},children:{required:!1,tsType:{name:"ReactNode"},description:"Additional content rendered above the board"}},composes:["HTMLAttributes"]};const ne={title:"Templates/App/Kanban",component:g,parameters:{layout:"fullscreen",docs:{description:{component:"A complete Kanban board page template with sidebar, filters, and drag-drop board."}}},tags:["autodocs"]},H=[{items:[{id:"dashboard",label:"Dashboard",icon:e.jsx(P,{size:20}),href:"/dashboard"},{id:"board",label:"Board",icon:e.jsx(D,{size:20}),href:"/board"},{id:"calendar",label:"Calendar",icon:e.jsx(N,{size:20}),href:"/calendar"},{id:"settings",label:"Settings",icon:e.jsx(I,{size:20}),href:"/settings"}]}],u=[{id:"backlog",title:"Backlog",cards:[{id:"1",title:"Research competitor analysis",description:"Analyze top 5 competitors in the market",labels:[{id:"research",text:"Research",color:"blue"}],priority:"medium"},{id:"2",title:"Design system documentation",description:"Write comprehensive docs for all components",labels:[{id:"docs",text:"Docs",color:"purple"}],priority:"low"}]},{id:"todo",title:"To Do",cards:[{id:"3",title:"Implement authentication flow",description:"OAuth2 + email/password auth",labels:[{id:"feature",text:"Feature",color:"green"},{id:"backend",text:"Backend",color:"orange"}],assignees:[{id:"u1",name:"Sarah",avatar:"https://i.pravatar.cc/40?u=sarah"}],priority:"high",dueDate:"Jan 20"},{id:"4",title:"Mobile responsive design",labels:[{id:"design",text:"Design",color:"pink"}],priority:"medium"}]},{id:"in-progress",title:"In Progress",color:"blue",cards:[{id:"5",title:"Dashboard analytics charts",description:"Implement chart components using Chart.js",labels:[{id:"feature",text:"Feature",color:"green"},{id:"frontend",text:"Frontend",color:"yellow"}],assignees:[{id:"u2",name:"Mike",avatar:"https://i.pravatar.cc/40?u=mike"},{id:"u3",name:"Emma",avatar:"https://i.pravatar.cc/40?u=emma"}],priority:"high",dueDate:"Jan 18"},{id:"6",title:"API rate limiting",labels:[{id:"backend",text:"Backend",color:"orange"}],assignees:[{id:"u1",name:"Sarah",avatar:"https://i.pravatar.cc/40?u=sarah"}],priority:"medium"}],limit:3},{id:"review",title:"In Review",color:"yellow",cards:[{id:"7",title:"User profile page",labels:[{id:"feature",text:"Feature",color:"green"}],assignees:[{id:"u4",name:"Alex",avatar:"https://i.pravatar.cc/40?u=alex"}],priority:"medium"}]},{id:"done",title:"Done",color:"green",cards:[{id:"8",title:"Setup CI/CD pipeline",labels:[{id:"infra",text:"Infra",color:"gray"}],priority:"high"},{id:"9",title:"Database schema design",labels:[{id:"backend",text:"Backend",color:"orange"}],priority:"high"}]}],v=[{key:"assignee",label:"Assignee",type:"select",options:[{value:"sarah",label:"Sarah"},{value:"mike",label:"Mike"},{value:"emma",label:"Emma"},{value:"alex",label:"Alex"}]},{key:"priority",label:"Priority",type:"select",options:[{value:"high",label:"High"},{value:"medium",label:"Medium"},{value:"low",label:"Low"}]},{key:"label",label:"Label",type:"select",options:[{value:"feature",label:"Feature"},{value:"bug",label:"Bug"},{value:"docs",label:"Docs"},{value:"research",label:"Research"}]}],r={args:{sidebar:{sections:H,activeItem:"board",header:e.jsx("div",{style:{padding:"var(--spacing-4)",fontWeight:700,fontSize:"var(--text-xl)"},children:"Acme"})},pageHeader:{title:"Sprint Board",description:"Sprint 12 • Jan 1 - Jan 14, 2024",actions:e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"ghost",icon:e.jsx(h,{size:18}),children:"Filter"}),e.jsx(o,{variant:"primary",icon:e.jsx(p,{size:18}),children:"Add Task"})]})},kanban:{columns:u,onCardMove:a=>console.log("Card moved:",a),onCardClick:a=>console.log("Card clicked:",a),onAddCard:a=>console.log("Add card to:",a),showCardCount:!0}}},s={args:{...r.args,filterBar:{filters:v,activeFilters:[],onFilterChange:(a,t)=>console.log("Filter changed:",a,t),onFilterRemove:a=>console.log("Filter removed:",a),onClearAll:()=>console.log("Filters cleared"),searchable:!0,searchPlaceholder:"Search tasks..."}}},n={args:{pageHeader:{title:"Project Tasks",breadcrumbs:[{label:"Projects",href:"/projects"},{label:"Mobile App"}],actions:e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"ghost",icon:e.jsx(h,{size:18}),children:"Filter"}),e.jsx(o,{variant:"primary",icon:e.jsx(p,{size:18}),children:"Add Task"})]})},filterBar:{filters:v,activeFilters:[],onFilterChange:(a,t)=>console.log("Filter changed:",a,t),onFilterRemove:a=>console.log("Filter removed:",a),searchable:!0},kanban:{columns:u,onCardMove:a=>console.log("Card moved:",a),onCardClick:a=>console.log("Card clicked:",a)}}},l={args:{...r.args,kanban:{...r.args?.kanban,columns:u,compact:!0,onCardMove:a=>console.log("Card moved:",a)}}},d={args:{sidebar:r.args?.sidebar,pageHeader:{title:"Project Board",tabs:[{id:"board",label:"Board"},{id:"list",label:"List"},{id:"calendar",label:"Calendar"},{id:"timeline",label:"Timeline"}],activeTab:"board",variant:"with-tabs",actions:e.jsx(o,{variant:"primary",icon:e.jsx(p,{size:18}),children:"Add Task"})},kanban:{columns:u,onCardMove:a=>console.log("Card moved:",a)}}},c={args:{pageHeader:{title:"Tasks",actions:e.jsx(o,{variant:"primary",icon:e.jsx(p,{size:18}),children:"Add Task"})},kanban:{columns:[{id:"todo",title:"To Do",cards:[{id:"1",title:"Task 1",priority:"high"},{id:"2",title:"Task 2",priority:"medium"}]},{id:"doing",title:"Doing",color:"blue",cards:[{id:"3",title:"Task 3",priority:"high"}]},{id:"done",title:"Done",color:"green",cards:[{id:"4",title:"Task 4",priority:"low"}]}],onCardMove:a=>console.log("Card moved:",a)}}},m={args:{sidebar:r.args?.sidebar,pageHeader:{title:"New Project",description:"Get started by adding your first task",actions:e.jsx(o,{variant:"primary",icon:e.jsx(p,{size:18}),children:"Add Task"})},kanban:{columns:[{id:"backlog",title:"Backlog",cards:[]},{id:"todo",title:"To Do",cards:[]},{id:"in-progress",title:"In Progress",color:"blue",cards:[]},{id:"done",title:"Done",color:"green",cards:[]}],onCardMove:a=>console.log("Card moved:",a),onAddCard:a=>console.log("Add card to:",a),onAddColumn:()=>console.log("Add column")}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    sidebar: {
      sections: SIDEBAR_SECTIONS,
      activeItem: 'board',
      header: <div style={{
        padding: 'var(--spacing-4)',
        fontWeight: 700,
        fontSize: 'var(--text-xl)'
      }}>
          Acme
        </div>
    },
    pageHeader: {
      title: 'Sprint Board',
      description: 'Sprint 12 • Jan 1 - Jan 14, 2024',
      actions: <>
          <Button variant="ghost" icon={<Filter size={18} />}>Filter</Button>
          <Button variant="primary" icon={<Plus size={18} />}>Add Task</Button>
        </>
    },
    kanban: {
      columns: KANBAN_COLUMNS,
      onCardMove: result => console.log('Card moved:', result),
      onCardClick: card => console.log('Card clicked:', card),
      onAddCard: columnId => console.log('Add card to:', columnId),
      showCardCount: true
    }
  }
}`,...r.parameters?.docs?.source},description:{story:"Default Kanban board page",...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    filterBar: {
      filters: FILTER_DEFINITIONS,
      activeFilters: [],
      onFilterChange: (key, value) => console.log('Filter changed:', key, value),
      onFilterRemove: key => console.log('Filter removed:', key),
      onClearAll: () => console.log('Filters cleared'),
      searchable: true,
      searchPlaceholder: 'Search tasks...'
    }
  }
}`,...s.parameters?.docs?.source},description:{story:"Kanban with filter bar",...s.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    pageHeader: {
      title: 'Project Tasks',
      breadcrumbs: [{
        label: 'Projects',
        href: '/projects'
      }, {
        label: 'Mobile App'
      }],
      actions: <>
          <Button variant="ghost" icon={<Filter size={18} />}>Filter</Button>
          <Button variant="primary" icon={<Plus size={18} />}>Add Task</Button>
        </>
    },
    filterBar: {
      filters: FILTER_DEFINITIONS,
      activeFilters: [],
      onFilterChange: (key, value) => console.log('Filter changed:', key, value),
      onFilterRemove: key => console.log('Filter removed:', key),
      searchable: true
    },
    kanban: {
      columns: KANBAN_COLUMNS,
      onCardMove: result => console.log('Card moved:', result),
      onCardClick: card => console.log('Card clicked:', card)
    }
  }
}`,...n.parameters?.docs?.source},description:{story:"Kanban without sidebar",...n.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    kanban: {
      ...Default.args?.kanban,
      columns: KANBAN_COLUMNS,
      compact: true,
      onCardMove: result => console.log('Card moved:', result)
    }
  }
}`,...l.parameters?.docs?.source},description:{story:"Compact Kanban board",...l.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    sidebar: Default.args?.sidebar,
    pageHeader: {
      title: 'Project Board',
      tabs: [{
        id: 'board',
        label: 'Board'
      }, {
        id: 'list',
        label: 'List'
      }, {
        id: 'calendar',
        label: 'Calendar'
      }, {
        id: 'timeline',
        label: 'Timeline'
      }],
      activeTab: 'board',
      variant: 'with-tabs',
      actions: <Button variant="primary" icon={<Plus size={18} />}>Add Task</Button>
    },
    kanban: {
      columns: KANBAN_COLUMNS,
      onCardMove: result => console.log('Card moved:', result)
    }
  }
}`,...d.parameters?.docs?.source},description:{story:"Kanban with tabs for different views",...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    pageHeader: {
      title: 'Tasks',
      actions: <Button variant="primary" icon={<Plus size={18} />}>Add Task</Button>
    },
    kanban: {
      columns: [{
        id: 'todo',
        title: 'To Do',
        cards: [{
          id: '1',
          title: 'Task 1',
          priority: 'high' as const
        }, {
          id: '2',
          title: 'Task 2',
          priority: 'medium' as const
        }]
      }, {
        id: 'doing',
        title: 'Doing',
        color: 'blue' as const,
        cards: [{
          id: '3',
          title: 'Task 3',
          priority: 'high' as const
        }]
      }, {
        id: 'done',
        title: 'Done',
        color: 'green' as const,
        cards: [{
          id: '4',
          title: 'Task 4',
          priority: 'low' as const
        }]
      }],
      onCardMove: result => console.log('Card moved:', result)
    }
  }
}`,...c.parameters?.docs?.source},description:{story:"Simple Kanban with minimal columns",...c.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    sidebar: Default.args?.sidebar,
    pageHeader: {
      title: 'New Project',
      description: 'Get started by adding your first task',
      actions: <Button variant="primary" icon={<Plus size={18} />}>Add Task</Button>
    },
    kanban: {
      columns: [{
        id: 'backlog',
        title: 'Backlog',
        cards: []
      }, {
        id: 'todo',
        title: 'To Do',
        cards: []
      }, {
        id: 'in-progress',
        title: 'In Progress',
        color: 'blue' as const,
        cards: []
      }, {
        id: 'done',
        title: 'Done',
        color: 'green' as const,
        cards: []
      }],
      onCardMove: result => console.log('Card moved:', result),
      onAddCard: columnId => console.log('Add card to:', columnId),
      onAddColumn: () => console.log('Add column')
    }
  }
}`,...m.parameters?.docs?.source},description:{story:"Empty Kanban board",...m.parameters?.docs?.description}}};const le=["Default","WithFilters","WithoutSidebar","CompactView","WithTabs","SimpleBoard","EmptyBoard"];export{l as CompactView,r as Default,m as EmptyBoard,c as SimpleBoard,s as WithFilters,d as WithTabs,n as WithoutSidebar,le as __namedExportsOrder,ne as default};
