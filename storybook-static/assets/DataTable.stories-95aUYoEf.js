import{j as o}from"./jsx-runtime-u17CrQMm.js";import{r as d}from"./index-Bi6L2ga8.js";import{D as K}from"./DataTable-DywnkR9c.js";import{B as T}from"./Button-C5l-MScQ.js";import{B as L}from"./Badge-CTnzlsKR.js";import{P as H}from"./plus-_oTOY7dX.js";import{I as O}from"./inbox-uqBrsvVO.js";import{E as F}from"./eye-6tB6fTIZ.js";import{S as W}from"./square-pen-Becd8mc9.js";import{T as j}from"./trash-2-B67onKV4.js";import{D as $}from"./download-B1IGscQm.js";import{F as G}from"./funnel-BrGssVc5.js";import"./search-BC3UyaPv.js";import"./createLucideIcon-DprCCbyf.js";import"./chevron-up-l-vr_Vwi.js";import"./chevron-down-buXKF-gJ.js";import"./ellipsis-DlXNEQa3.js";import"./chevron-left-D9uTS5hk.js";import"./chevron-right-BuTIk0ZE.js";const le={title:"Sections/App/DataTable",component:K,parameters:{layout:"padded",docs:{description:{component:"A data table for SaaS dashboards with sorting, pagination, filtering, and selection. Optimized for Product Mode with efficient data display."}}},tags:["autodocs"],argTypes:{searchable:{control:"boolean"},selectable:{control:"boolean"},loading:{control:"boolean"},striped:{control:"boolean"},hoverable:{control:"boolean"},compact:{control:"boolean"},stickyHeader:{control:"boolean"}}},t=[{id:1,name:"John Doe",email:"john@example.com",role:"Admin",status:"active",lastActive:"2 hours ago"},{id:2,name:"Jane Smith",email:"jane@example.com",role:"Editor",status:"active",lastActive:"5 min ago"},{id:3,name:"Bob Wilson",email:"bob@example.com",role:"Viewer",status:"inactive",lastActive:"3 days ago"},{id:4,name:"Alice Brown",email:"alice@example.com",role:"Editor",status:"pending",lastActive:"1 hour ago"},{id:5,name:"Charlie Davis",email:"charlie@example.com",role:"Admin",status:"active",lastActive:"10 min ago"},{id:6,name:"Eva Martinez",email:"eva@example.com",role:"Viewer",status:"active",lastActive:"1 day ago"},{id:7,name:"Frank Lee",email:"frank@example.com",role:"Editor",status:"inactive",lastActive:"1 week ago"},{id:8,name:"Grace Kim",email:"grace@example.com",role:"Viewer",status:"active",lastActive:"3 hours ago"}],n=[{key:"name",header:"Name",sortable:!0},{key:"email",header:"Email",sortable:!0},{key:"role",header:"Role",sortable:!0},{key:"status",header:"Status",render:a=>{const e=a,c=e==="active"?"success":e==="pending"?"warning":"neutral";return o.jsx(L,{variant:c,children:e})}},{key:"lastActive",header:"Last Active",hideOnMobile:!0}],g={args:{columns:n,data:t,rowKey:"id"}},u={args:{columns:n,data:t,rowKey:"id",searchable:!0,searchPlaceholder:"Search users..."}},S={args:{columns:n,data:t,rowKey:"id",selectable:!0,bulkActions:[{key:"delete",label:"Delete",icon:o.jsx(j,{size:14}),variant:"danger",onClick:a=>console.log("Delete:",a)},{key:"export",label:"Export",icon:o.jsx($,{size:14}),onClick:a=>console.log("Export:",a)}]}},y={render:a=>{const[e,c]=d.useState({page:1,pageSize:3,total:t.length}),s=t.slice((e.page-1)*e.pageSize,e.page*e.pageSize);return o.jsx(K,{...a,data:s,pagination:e,onPaginationChange:p=>c({...e,...p})})},args:{columns:n,data:t,rowKey:"id"}},h={render:a=>{const[e,c]=d.useState(),s=[...t].sort((p,E)=>{if(!e)return 0;const A=p[e.key],i=E[e.key],m=String(A).localeCompare(String(i));return e.direction==="asc"?m:-m});return o.jsx(K,{...a,data:s,sort:e,onSortChange:c})},args:{columns:n,data:t,rowKey:"id"}},w={args:{columns:n,data:t,rowKey:"id",rowActions:[{key:"view",label:"View Details",icon:o.jsx(F,{size:14}),onClick:a=>console.log("View:",a)},{key:"edit",label:"Edit",icon:o.jsx(W,{size:14}),onClick:a=>console.log("Edit:",a)},{key:"delete",label:"Delete",icon:o.jsx(j,{size:14}),variant:"danger",onClick:a=>console.log("Delete:",a)}]}},b={args:{columns:n,data:t,rowKey:"id",striped:!0}},k={args:{columns:n,data:t,rowKey:"id",compact:!0}},D={args:{columns:n,data:[],rowKey:"id",loading:!0}},x={args:{columns:n,data:[],rowKey:"id",emptyState:{icon:o.jsx(O,{size:48}),title:"No users found",description:"Get started by adding your first user.",action:o.jsx(T,{icon:o.jsx(H,{size:18}),children:"Add User"})}}},f={args:{columns:n,data:t,rowKey:"id",searchable:!0,toolbar:o.jsx(T,{variant:"secondary",icon:o.jsx(G,{size:16}),size:"sm",children:"Filters"})}},C={render:a=>{const[e,c]=d.useState(""),[s,p]=d.useState(),[E,A]=d.useState([]),[i,m]=d.useState({page:1,pageSize:5,total:t.length});let l=t;if(e){const r=e.toLowerCase();l=l.filter(U=>Object.values(U).some(V=>String(V).toLowerCase().includes(r)))}s&&(l=[...l].sort((r,U)=>{const V=r[s.key],R=U[s.key],P=String(V).localeCompare(String(R));return s.direction==="asc"?P:-P}));const B=l.slice((i.page-1)*i.pageSize,i.page*i.pageSize);return o.jsx(K,{...a,data:B,searchable:!0,searchValue:e,onSearchChange:c,selectable:!0,selectedKeys:E,onSelectionChange:A,sort:s,onSortChange:p,pagination:{...i,total:l.length},onPaginationChange:r=>m({...i,...r}),bulkActions:[{key:"delete",label:"Delete",icon:o.jsx(j,{size:14}),variant:"danger",onClick:r=>console.log("Delete:",r)}],rowActions:[{key:"view",label:"View",icon:o.jsx(F,{size:14}),onClick:r=>console.log("View:",r)},{key:"edit",label:"Edit",icon:o.jsx(W,{size:14}),onClick:r=>console.log("Edit:",r)}]})},args:{columns:n,data:t,rowKey:"id"}},v={args:{columns:n,data:[...t,...t,...t],rowKey:(a,e)=>`${a.id}-${e}`,stickyHeader:!0,maxHeight:"400px"}},z={args:{columns:n,data:t,rowKey:"id",onRowClick:(a,e)=>console.log("Clicked row:",a,"at index:",e)}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    data: sampleUsers,
    rowKey: 'id'
  }
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    data: sampleUsers,
    rowKey: 'id',
    searchable: true,
    searchPlaceholder: 'Search users...'
  }
}`,...u.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    data: sampleUsers,
    rowKey: 'id',
    selectable: true,
    bulkActions: [{
      key: 'delete',
      label: 'Delete',
      icon: <Trash2 size={14} />,
      variant: 'danger',
      onClick: ids => console.log('Delete:', ids)
    }, {
      key: 'export',
      label: 'Export',
      icon: <Download size={14} />,
      onClick: ids => console.log('Export:', ids)
    }]
  }
}`,...S.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [pagination, setPagination] = useState<DataTablePagination>({
      page: 1,
      pageSize: 3,
      total: sampleUsers.length
    });
    const paginatedData = sampleUsers.slice((pagination.page - 1) * pagination.pageSize, pagination.page * pagination.pageSize);
    return <DataTable {...args} data={paginatedData} pagination={pagination} onPaginationChange={p => setPagination({
      ...pagination,
      ...p
    })} />;
  },
  args: {
    columns,
    data: sampleUsers,
    rowKey: 'id'
  }
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [sort, setSort] = useState<DataTableSort | undefined>();
    const sortedData = [...sampleUsers].sort((a, b) => {
      if (!sort) return 0;
      const aVal = a[sort.key as keyof UserData];
      const bVal = b[sort.key as keyof UserData];
      const comparison = String(aVal).localeCompare(String(bVal));
      return sort.direction === 'asc' ? comparison : -comparison;
    });
    return <DataTable {...args} data={sortedData} sort={sort} onSortChange={setSort} />;
  },
  args: {
    columns,
    data: sampleUsers,
    rowKey: 'id'
  }
}`,...h.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    data: sampleUsers,
    rowKey: 'id',
    rowActions: [{
      key: 'view',
      label: 'View Details',
      icon: <Eye size={14} />,
      onClick: row => console.log('View:', row)
    }, {
      key: 'edit',
      label: 'Edit',
      icon: <Edit size={14} />,
      onClick: row => console.log('Edit:', row)
    }, {
      key: 'delete',
      label: 'Delete',
      icon: <Trash2 size={14} />,
      variant: 'danger',
      onClick: row => console.log('Delete:', row)
    }]
  }
}`,...w.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    data: sampleUsers,
    rowKey: 'id',
    striped: true
  }
}`,...b.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    data: sampleUsers,
    rowKey: 'id',
    compact: true
  }
}`,...k.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    data: [],
    rowKey: 'id',
    loading: true
  }
}`,...D.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    data: [],
    rowKey: 'id',
    emptyState: {
      icon: <Inbox size={48} />,
      title: 'No users found',
      description: 'Get started by adding your first user.',
      action: <Button icon={<Plus size={18} />}>Add User</Button>
    }
  }
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    data: sampleUsers,
    rowKey: 'id',
    searchable: true,
    toolbar: <Button variant="secondary" icon={<Filter size={16} />} size="sm">
        Filters
      </Button>
  }
}`,...f.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState<DataTableSort | undefined>();
    const [selectedKeys, setSelectedKeys] = useState<React.Key[]>([]);
    const [pagination, setPagination] = useState<DataTablePagination>({
      page: 1,
      pageSize: 5,
      total: sampleUsers.length
    });

    // Filter data
    let filteredData = sampleUsers;
    if (search) {
      const lowerSearch = search.toLowerCase();
      filteredData = filteredData.filter(user => Object.values(user).some(val => String(val).toLowerCase().includes(lowerSearch)));
    }

    // Sort data
    if (sort) {
      filteredData = [...filteredData].sort((a, b) => {
        const aVal = a[sort.key as keyof UserData];
        const bVal = b[sort.key as keyof UserData];
        const comparison = String(aVal).localeCompare(String(bVal));
        return sort.direction === 'asc' ? comparison : -comparison;
      });
    }

    // Paginate data
    const paginatedData = filteredData.slice((pagination.page - 1) * pagination.pageSize, pagination.page * pagination.pageSize);
    return <DataTable {...args} data={paginatedData} searchable searchValue={search} onSearchChange={setSearch} selectable selectedKeys={selectedKeys} onSelectionChange={setSelectedKeys} sort={sort} onSortChange={setSort} pagination={{
      ...pagination,
      total: filteredData.length
    }} onPaginationChange={p => setPagination({
      ...pagination,
      ...p
    })} bulkActions={[{
      key: 'delete',
      label: 'Delete',
      icon: <Trash2 size={14} />,
      variant: 'danger',
      onClick: ids => console.log('Delete:', ids)
    }]} rowActions={[{
      key: 'view',
      label: 'View',
      icon: <Eye size={14} />,
      onClick: row => console.log('View:', row)
    }, {
      key: 'edit',
      label: 'Edit',
      icon: <Edit size={14} />,
      onClick: row => console.log('Edit:', row)
    }]} />;
  },
  args: {
    columns,
    data: sampleUsers,
    rowKey: 'id'
  }
}`,...C.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    data: [...sampleUsers, ...sampleUsers, ...sampleUsers],
    rowKey: (row: Record<string, unknown>, index: number) => \`\${row.id}-\${index}\`,
    stickyHeader: true,
    maxHeight: '400px'
  }
}`,...v.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    data: sampleUsers,
    rowKey: 'id',
    onRowClick: (row, index) => console.log('Clicked row:', row, 'at index:', index)
  }
}`,...z.parameters?.docs?.source}}};const de=["Default","WithSearch","Selectable","WithPagination","WithSorting","WithRowActions","Striped","Compact","Loading","Empty","WithToolbar","FullFeatured","StickyHeader","ClickableRows"];export{z as ClickableRows,k as Compact,g as Default,x as Empty,C as FullFeatured,D as Loading,S as Selectable,v as StickyHeader,b as Striped,y as WithPagination,w as WithRowActions,u as WithSearch,h as WithSorting,f as WithToolbar,de as __namedExportsOrder,le as default};
