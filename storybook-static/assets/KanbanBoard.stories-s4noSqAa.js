import{j as k}from"./jsx-runtime-u17CrQMm.js";import{r as b}from"./index-Bi6L2ga8.js";import{K as u}from"./KanbanBoard-C6w1i8nL.js";import"./plus-_oTOY7dX.js";import"./createLucideIcon-DprCCbyf.js";import"./ellipsis-DlXNEQa3.js";import"./clock-BOaF0ey4.js";import"./circle-alert-BMPEDkj1.js";const T={title:"Sections/App/KanbanBoard",component:u,parameters:{layout:"padded"},tags:["autodocs"]},i=[{id:"backlog",title:"Backlog",color:"default",cards:[{id:"card-1",title:"Research competitor analysis",description:"Analyze top 5 competitors and create a comparison report",labels:[{id:"research",text:"Research",color:"purple"}],priority:"low"},{id:"card-2",title:"Update documentation",description:"Add new API endpoints to the docs",labels:[{id:"docs",text:"Docs",color:"blue"}]}]},{id:"todo",title:"To Do",color:"blue",limit:5,cards:[{id:"card-3",title:"Design new dashboard layout",description:"Create wireframes for the analytics dashboard",labels:[{id:"design",text:"Design",color:"green"}],assignees:[{id:"user-1",name:"John Doe",avatar:"https://i.pravatar.cc/150?img=1"}],dueDate:"2024-02-15",priority:"high"},{id:"card-4",title:"Implement authentication flow",labels:[{id:"feature",text:"Feature",color:"yellow"},{id:"backend",text:"Backend",color:"purple"}],assignees:[{id:"user-2",name:"Jane Smith",avatar:"https://i.pravatar.cc/150?img=2"},{id:"user-3",name:"Bob Wilson",avatar:"https://i.pravatar.cc/150?img=3"}],priority:"urgent"}]},{id:"in-progress",title:"In Progress",color:"yellow",limit:3,cards:[{id:"card-5",title:"Fix navigation bug on mobile",description:"Menu not closing after selection on iOS",labels:[{id:"bug",text:"Bug",color:"red"}],assignees:[{id:"user-1",name:"John Doe",avatar:"https://i.pravatar.cc/150?img=1"}],priority:"high"}]},{id:"review",title:"Review",color:"purple",cards:[{id:"card-6",title:"Code review: Payment integration",assignees:[{id:"user-2",name:"Jane Smith",avatar:"https://i.pravatar.cc/150?img=2"}]}]},{id:"done",title:"Done",color:"green",cards:[{id:"card-7",title:"Setup CI/CD pipeline",labels:[{id:"devops",text:"DevOps",color:"blue"}]},{id:"card-8",title:"Create design system tokens",labels:[{id:"design",text:"Design",color:"green"}]}]}],e={args:{columns:i,onCardClick:(o,l)=>console.log("Card clicked:",o.id,"in",l),onAddCard:o=>console.log("Add card to:",o)}},n={render:()=>{const[o,l]=b.useState(i),C=(m,p)=>{alert(`Clicked "${m.title}" in ${p}`)},g=m=>{const p={id:`card-${Date.now()}`,title:"New Task"};l(h=>h.map(c=>c.id===m?{...c,cards:[...c.cards,p]}:c))};return k.jsx(u,{columns:o,onCardClick:C,onAddCard:g})}},r={args:{columns:i.slice(0,3),compact:!0,onCardClick:o=>console.log("Card clicked:",o.id)}},a={args:{columns:i.map(o=>({...o,limit:void 0})),showCardCount:!1,onCardClick:o=>console.log("Card clicked:",o.id)}},t={args:{columns:[{id:"todo",title:"To Do",color:"blue",cards:[]},{id:"in-progress",title:"In Progress",color:"yellow",cards:[]},{id:"done",title:"Done",color:"green",cards:[]}],onAddCard:o=>console.log("Add card to:",o)}},d={args:{columns:[{id:"todo",title:"To Do",cards:[{id:"1",title:"Task 1"},{id:"2",title:"Task 2"},{id:"3",title:"Task 3"}]},{id:"doing",title:"Doing",cards:[{id:"4",title:"Task 4"}]},{id:"done",title:"Done",cards:[{id:"5",title:"Task 5"}]}],showCardCount:!1,onCardClick:o=>console.log("Card clicked:",o.id)}},s={args:{columns:i.slice(0,3),onAddCard:o=>console.log("Add card to:",o),onAddColumn:()=>console.log("Add column"),onColumnMenu:o=>console.log("Column menu:",o)}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    columns: sampleColumns,
    onCardClick: (card: KanbanCard, columnId: string) => console.log('Card clicked:', card.id, 'in', columnId),
    onAddCard: (columnId: string) => console.log('Add card to:', columnId)
  }
}`,...e.parameters?.docs?.source},description:{story:"Default KanbanBoard with sample project data",...e.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [columns, setColumns] = useState<KanbanColumn[]>(sampleColumns);
    const handleCardClick = (card: KanbanCard, columnId: string) => {
      alert(\`Clicked "\${card.title}" in \${columnId}\`);
    };
    const handleAddCard = (columnId: string) => {
      const newCard: KanbanCard = {
        id: \`card-\${Date.now()}\`,
        title: 'New Task'
      };
      setColumns(prev => prev.map(col => col.id === columnId ? {
        ...col,
        cards: [...col.cards, newCard]
      } : col));
    };
    return <KanbanBoard columns={columns} onCardClick={handleCardClick} onAddCard={handleAddCard} />;
  }
}`,...n.parameters?.docs?.source},description:{story:"Interactive KanbanBoard with state",...n.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    columns: sampleColumns.slice(0, 3),
    compact: true,
    onCardClick: (card: KanbanCard) => console.log('Card clicked:', card.id)
  }
}`,...r.parameters?.docs?.source},description:{story:"Compact variant for dense layouts",...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    columns: sampleColumns.map(col => ({
      ...col,
      limit: undefined
    })),
    showCardCount: false,
    onCardClick: (card: KanbanCard) => console.log('Card clicked:', card.id)
  }
}`,...a.parameters?.docs?.source},description:{story:"Without card count",...a.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [{
      id: 'todo',
      title: 'To Do',
      color: 'blue',
      cards: []
    }, {
      id: 'in-progress',
      title: 'In Progress',
      color: 'yellow',
      cards: []
    }, {
      id: 'done',
      title: 'Done',
      color: 'green',
      cards: []
    }],
    onAddCard: (columnId: string) => console.log('Add card to:', columnId)
  }
}`,...t.parameters?.docs?.source},description:{story:"Empty state",...t.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [{
      id: 'todo',
      title: 'To Do',
      cards: [{
        id: '1',
        title: 'Task 1'
      }, {
        id: '2',
        title: 'Task 2'
      }, {
        id: '3',
        title: 'Task 3'
      }]
    }, {
      id: 'doing',
      title: 'Doing',
      cards: [{
        id: '4',
        title: 'Task 4'
      }]
    }, {
      id: 'done',
      title: 'Done',
      cards: [{
        id: '5',
        title: 'Task 5'
      }]
    }],
    showCardCount: false,
    onCardClick: (card: KanbanCard) => console.log('Card clicked:', card.id)
  }
}`,...d.parameters?.docs?.source},description:{story:"Simple board without extras",...d.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    columns: sampleColumns.slice(0, 3),
    onAddCard: (columnId: string) => console.log('Add card to:', columnId),
    onAddColumn: () => console.log('Add column'),
    onColumnMenu: (columnId: string) => console.log('Column menu:', columnId)
  }
}`,...s.parameters?.docs?.source},description:{story:"With add column button",...s.parameters?.docs?.description}}};const x=["Default","Interactive","Compact","WithoutCardCount","Empty","Simple","WithAddColumn"];export{r as Compact,e as Default,t as Empty,n as Interactive,d as Simple,s as WithAddColumn,a as WithoutCardCount,x as __namedExportsOrder,T as default};
