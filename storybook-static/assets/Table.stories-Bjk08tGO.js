import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as M}from"./index-Bi6L2ga8.js";import{T as o}from"./Table-B2i6IxkC.js";import{A as D}from"./Avatar-CustGMqw.js";import{B as L}from"./Badge-CTnzlsKR.js";import{B}from"./Button-C5l-MScQ.js";import{C as i}from"./Card-BimbyH8z.js";import"./user-CUEj3VL3.js";import"./createLucideIcon-DprCCbyf.js";const s=[{id:1,name:"John Doe",email:"john@example.com",role:"Admin",status:"active",lastLogin:"2024-01-20"},{id:2,name:"Jane Smith",email:"jane@example.com",role:"User",status:"active",lastLogin:"2024-01-19"},{id:3,name:"Bob Johnson",email:"bob@example.com",role:"Editor",status:"pending",lastLogin:"2024-01-18"},{id:4,name:"Alice Williams",email:"alice@example.com",role:"User",status:"inactive",lastLogin:"2024-01-15"},{id:5,name:"Charlie Brown",email:"charlie@example.com",role:"Admin",status:"active",lastLogin:"2024-01-21"}],t=[{key:"name",header:"Name"},{key:"email",header:"Email"},{key:"role",header:"Role"},{key:"status",header:"Status"}],$={title:"Components/Data Display/Table",component:o,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Table size"},striped:{control:"boolean",description:"Striped rows"},hoverable:{control:"boolean",description:"Hoverable rows"},bordered:{control:"boolean",description:"Bordered table"},borderless:{control:"boolean",description:"Remove container border (for Card integration)"}}},d={args:{columns:t,data:s}},m={args:{columns:t,data:s,striped:!0}},u={args:{columns:t,data:s,bordered:!0}},p={args:{columns:t,data:s,borderless:!0},parameters:{docs:{description:{story:"Use `borderless` prop when placing Table inside a Card to avoid double borders."}}}},g={args:{columns:t,data:s,size:"sm"}},h={args:{columns:t,data:s,size:"lg"}},y={args:{columns:t,data:s,caption:"List of system users"}},b={args:{columns:t,data:[]}},v={args:{columns:t,data:[],emptyMessage:"No users found. Try adjusting your filters."}},k={args:{columns:t,data:s},render:()=>{const a=[{key:"name",header:"Name",sortable:!0},{key:"email",header:"Email",sortable:!0},{key:"role",header:"Role",sortable:!0},{key:"status",header:"Status"}];return e.jsx("div",{style:{maxWidth:"900px"},children:e.jsx(o,{columns:a,data:s,onSortChange:(r,n)=>{console.log("Sort changed:",r,n)}})})}},S={args:{columns:t,data:s},render:()=>{const a=[{key:"name",header:"Name"},{key:"email",header:"Email"},{key:"status",header:"Status",align:"center",cell:r=>{const n={active:"success",inactive:"neutral",pending:"warning"};return e.jsx(L,{variant:n[r.status],children:r.status.charAt(0).toUpperCase()+r.status.slice(1)})}},{key:"lastLogin",header:"Last Login",cell:r=>new Date(r.lastLogin).toLocaleDateString()}];return e.jsx("div",{style:{maxWidth:"900px"},children:e.jsx(o,{columns:a,data:s,striped:!0,hoverable:!0})})}},x={args:{columns:t,data:s},render:()=>{const[a,r]=M.useState(null);return e.jsxs("div",{style:{maxWidth:"900px",display:"flex",flexDirection:"column",gap:"var(--spacing-4)"},children:[e.jsx(o,{columns:t,data:s,onRowClick:n=>r(n),hoverable:!0}),a&&e.jsx(i,{children:e.jsxs(i.Body,{children:[e.jsx("strong",{children:"Selected User:"})," ",a.name," (",a.email,")"]})})]})}},C={args:{columns:t,data:s},render:()=>{const[a,r]=M.useState(null),n=[{key:"name",header:"Name",sortable:!0},{key:"email",header:"Email",sortable:!0},{key:"role",header:"Role",sortable:!0},{key:"lastLogin",header:"Last Login",sortable:!0}],c=[...s].sort((z,l)=>{if(!a||!a.direction)return 0;const T=z[a.columnKey],w=l[a.columnKey];return T<w?a.direction==="asc"?-1:1:T>w?a.direction==="asc"?1:-1:0});return e.jsxs("div",{style:{maxWidth:"900px",display:"flex",flexDirection:"column",gap:"var(--spacing-4)"},children:[e.jsx("p",{style:{margin:0,color:"var(--text-secondary)"},children:a?e.jsxs(e.Fragment,{children:["Sorted by: ",e.jsx("strong",{children:a.columnKey})," (",a.direction==="asc"?"ascending":"descending",")"]}):"Click column headers to sort"}),e.jsx(o,{columns:n,data:c,sortState:a||void 0,onSortChange:(z,l)=>{r(l?{columnKey:z,direction:l}:null)},striped:!0})]})}},f={args:{columns:t,data:s},render:()=>{const a=[{key:"name",header:"User",sortable:!0,cell:r=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-3)"},children:[e.jsx(D,{initials:r.name.split(" ").map(n=>n[0]).join(""),size:"md"}),e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:"var(--font-weight-medium)"},children:r.name}),e.jsx("div",{style:{fontSize:"var(--font-size-12)",color:"var(--text-secondary)"},children:r.email})]})]}),width:"250px"},{key:"role",header:"Role",sortable:!0,align:"center"},{key:"status",header:"Status",sortable:!0,align:"center",cell:r=>{const n={active:"success",inactive:"neutral",pending:"warning"},c={active:"Active",inactive:"Inactive",pending:"Pending"};return e.jsx(L,{variant:n[r.status],children:c[r.status]})}},{key:"actions",header:"Actions",align:"right",cell:r=>e.jsxs("div",{style:{display:"flex",gap:"var(--spacing-2)",justifyContent:"flex-end"},children:[e.jsx(B,{variant:"secondary",size:"sm",onClick:n=>{n.stopPropagation(),console.log("Edit",r.name)},children:"Edit"}),e.jsx(B,{variant:"ghost",size:"sm",onClick:n=>{n.stopPropagation(),console.log("Delete",r.name)},children:"Delete"})]})}];return e.jsxs(i,{style:{maxWidth:"1000px"},children:[e.jsx(i.Header,{children:e.jsxs("div",{children:[e.jsx("h3",{style:{margin:0,fontSize:"var(--font-size-18)",fontWeight:"var(--font-weight-medium)"},children:"User Management"}),e.jsx("p",{style:{margin:0,marginTop:"var(--spacing-1)",fontSize:"var(--font-size-14)",color:"var(--text-secondary)"},children:"Manage system users and their permissions"})]})}),e.jsx(o,{columns:a,data:s,hoverable:!0,borderless:!0})]})}},U={args:{columns:t,data:s},render:()=>{const a=[{id:1,name:"Wireless Headphones",category:"Audio",price:99.99,stock:45,rating:4.5},{id:2,name:"Smart Watch",category:"Wearables",price:299.99,stock:23,rating:4.8},{id:3,name:"Laptop Stand",category:"Accessories",price:49.99,stock:120,rating:4.2},{id:4,name:"USB-C Cable",category:"Accessories",price:19.99,stock:200,rating:4.7},{id:5,name:"Mechanical Keyboard",category:"Peripherals",price:149.99,stock:67,rating:4.9}],r=[{key:"name",header:"Product",sortable:!0},{key:"category",header:"Category",sortable:!0,align:"center"},{key:"price",header:"Price",sortable:!0,align:"right",cell:n=>`$${n.price.toFixed(2)}`},{key:"stock",header:"Stock",sortable:!0,align:"center",cell:n=>{const c=n.stock<50;return e.jsx(L,{variant:c?"error":"success",children:n.stock})}},{key:"rating",header:"Rating",sortable:!0,align:"center",cell:n=>`⭐ ${n.rating}`}];return e.jsx("div",{style:{maxWidth:"900px"},children:e.jsx(o,{columns:r,data:a,striped:!0,bordered:!0,hoverable:!0})})}},j={args:{columns:t,data:s},render:()=>e.jsxs(i,{style:{maxWidth:"900px"},children:[e.jsx(i.Header,{children:e.jsxs("div",{children:[e.jsx("h3",{style:{margin:0,fontSize:"var(--font-size-18)",fontWeight:"var(--font-weight-medium)"},children:"Users"}),e.jsx("p",{style:{margin:0,marginTop:"var(--spacing-1)",fontSize:"var(--font-size-14)",color:"var(--text-secondary)"},children:"A table inside a Card using borderless prop"})]})}),e.jsx(o,{columns:t,data:s,hoverable:!0,borderless:!0})]}),parameters:{docs:{description:{story:"When placing a Table inside a Card, use the `borderless` prop to remove the double border effect."}}}},W={args:{columns:t,data:s,className:"custom-table"}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    data: mockUsers
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    data: mockUsers,
    striped: true
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    data: mockUsers,
    bordered: true
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    data: mockUsers,
    borderless: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Use \`borderless\` prop when placing Table inside a Card to avoid double borders.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    data: mockUsers,
    size: 'sm'
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    data: mockUsers,
    size: 'lg'
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    data: mockUsers,
    caption: 'List of system users'
  }
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    data: []
  }
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    data: [],
    emptyMessage: 'No users found. Try adjusting your filters.'
  }
}`,...v.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    data: mockUsers
  },
  render: () => {
    const sortableColumns: TableColumn<any>[] = [{
      key: 'name',
      header: 'Name',
      sortable: true
    }, {
      key: 'email',
      header: 'Email',
      sortable: true
    }, {
      key: 'role',
      header: 'Role',
      sortable: true
    }, {
      key: 'status',
      header: 'Status'
    }];
    return <div style={{
      maxWidth: '900px'
    }}>
        <Table columns={sortableColumns} data={mockUsers} onSortChange={(key, direction) => {
        console.log('Sort changed:', key, direction);
      }} />
      </div>;
  }
}`,...k.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    data: mockUsers
  },
  render: () => {
    const customColumns: TableColumn<any>[] = [{
      key: 'name',
      header: 'Name'
    }, {
      key: 'email',
      header: 'Email'
    }, {
      key: 'status',
      header: 'Status',
      align: 'center',
      cell: user => {
        const variantMap = {
          active: 'success',
          inactive: 'neutral',
          pending: 'warning'
        } as const;
        return <Badge variant={variantMap[user.status as keyof typeof variantMap]}>
              {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
            </Badge>;
      }
    }, {
      key: 'lastLogin',
      header: 'Last Login',
      cell: user => new Date(user.lastLogin).toLocaleDateString()
    }];
    return <div style={{
      maxWidth: '900px'
    }}>
        <Table columns={customColumns} data={mockUsers} striped hoverable />
      </div>;
  }
}`,...S.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    data: mockUsers
  },
  render: () => {
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    return <div style={{
      maxWidth: '900px',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-4)'
    }}>
        <Table columns={basicColumns} data={mockUsers} onRowClick={user => setSelectedUser(user)} hoverable />
        {selectedUser && <Card>
            <Card.Body>
              <strong>Selected User:</strong> {selectedUser.name} ({selectedUser.email})
            </Card.Body>
          </Card>}
      </div>;
  }
}`,...x.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    data: mockUsers
  },
  render: () => {
    const [sortState, setSortState] = useState<{
      columnKey: string;
      direction: SortDirection;
    } | null>(null);
    const sortableColumns: TableColumn<any>[] = [{
      key: 'name',
      header: 'Name',
      sortable: true
    }, {
      key: 'email',
      header: 'Email',
      sortable: true
    }, {
      key: 'role',
      header: 'Role',
      sortable: true
    }, {
      key: 'lastLogin',
      header: 'Last Login',
      sortable: true
    }];

    // Sort data based on current sort state
    const sortedData = [...mockUsers].sort((a, b) => {
      if (!sortState || !sortState.direction) return 0;
      const aValue = a[sortState.columnKey as keyof User];
      const bValue = b[sortState.columnKey as keyof User];
      if (aValue < bValue) return sortState.direction === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortState.direction === 'asc' ? 1 : -1;
      return 0;
    });
    return <div style={{
      maxWidth: '900px',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-4)'
    }}>
        <p style={{
        margin: 0,
        color: 'var(--text-secondary)'
      }}>
          {sortState ? <>
              Sorted by: <strong>{sortState.columnKey}</strong> (
              {sortState.direction === 'asc' ? 'ascending' : 'descending'})
            </> : 'Click column headers to sort'}
        </p>
        <Table columns={sortableColumns} data={sortedData} sortState={sortState || undefined} onSortChange={(key, direction) => {
        setSortState(direction ? {
          columnKey: key,
          direction
        } : null);
      }} striped />
      </div>;
  }
}`,...C.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    data: mockUsers
  },
  render: () => {
    const userColumns: TableColumn<any>[] = [{
      key: 'name',
      header: 'User',
      sortable: true,
      cell: user => <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--spacing-3)'
      }}>
            <Avatar initials={user.name.split(' ').map((n: string) => n[0]).join('')} size="md" />
            <div>
              <div style={{
            fontWeight: 'var(--font-weight-medium)'
          }}>{user.name}</div>
              <div style={{
            fontSize: 'var(--font-size-12)',
            color: 'var(--text-secondary)'
          }}>
                {user.email}
              </div>
            </div>
          </div>,
      width: '250px'
    }, {
      key: 'role',
      header: 'Role',
      sortable: true,
      align: 'center'
    }, {
      key: 'status',
      header: 'Status',
      sortable: true,
      align: 'center',
      cell: user => {
        const variantMap = {
          active: 'success',
          inactive: 'neutral',
          pending: 'warning'
        } as const;
        const labelMap = {
          active: 'Active',
          inactive: 'Inactive',
          pending: 'Pending'
        };
        return <Badge variant={variantMap[user.status as keyof typeof variantMap]}>
              {labelMap[user.status as keyof typeof labelMap]}
            </Badge>;
      }
    }, {
      key: 'actions',
      header: 'Actions',
      align: 'right',
      cell: user => <div style={{
        display: 'flex',
        gap: 'var(--spacing-2)',
        justifyContent: 'flex-end'
      }}>
            <Button variant="secondary" size="sm" onClick={e => {
          e.stopPropagation();
          console.log('Edit', user.name);
        }}>
              Edit
            </Button>
            <Button variant="ghost" size="sm" onClick={e => {
          e.stopPropagation();
          console.log('Delete', user.name);
        }}>
              Delete
            </Button>
          </div>
    }];
    return <Card style={{
      maxWidth: '1000px'
    }}>
        <Card.Header>
          <div>
            <h3 style={{
            margin: 0,
            fontSize: 'var(--font-size-18)',
            fontWeight: 'var(--font-weight-medium)'
          }}>
              User Management
            </h3>
            <p style={{
            margin: 0,
            marginTop: 'var(--spacing-1)',
            fontSize: 'var(--font-size-14)',
            color: 'var(--text-secondary)'
          }}>
              Manage system users and their permissions
            </p>
          </div>
        </Card.Header>
        <Table columns={userColumns} data={mockUsers} hoverable borderless />
      </Card>;
  }
}`,...f.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    data: mockUsers
  },
  render: () => {
    interface Product {
      id: number;
      name: string;
      category: string;
      price: number;
      stock: number;
      rating: number;
    }
    const products: Product[] = [{
      id: 1,
      name: 'Wireless Headphones',
      category: 'Audio',
      price: 99.99,
      stock: 45,
      rating: 4.5
    }, {
      id: 2,
      name: 'Smart Watch',
      category: 'Wearables',
      price: 299.99,
      stock: 23,
      rating: 4.8
    }, {
      id: 3,
      name: 'Laptop Stand',
      category: 'Accessories',
      price: 49.99,
      stock: 120,
      rating: 4.2
    }, {
      id: 4,
      name: 'USB-C Cable',
      category: 'Accessories',
      price: 19.99,
      stock: 200,
      rating: 4.7
    }, {
      id: 5,
      name: 'Mechanical Keyboard',
      category: 'Peripherals',
      price: 149.99,
      stock: 67,
      rating: 4.9
    }];
    const productColumns: TableColumn<Product>[] = [{
      key: 'name',
      header: 'Product',
      sortable: true
    }, {
      key: 'category',
      header: 'Category',
      sortable: true,
      align: 'center'
    }, {
      key: 'price',
      header: 'Price',
      sortable: true,
      align: 'right',
      cell: product => \`$\${product.price.toFixed(2)}\`
    }, {
      key: 'stock',
      header: 'Stock',
      sortable: true,
      align: 'center',
      cell: product => {
        const lowStock = product.stock < 50;
        return <Badge variant={lowStock ? 'error' : 'success'}>
              {product.stock}
            </Badge>;
      }
    }, {
      key: 'rating',
      header: 'Rating',
      sortable: true,
      align: 'center',
      cell: product => \`⭐ \${product.rating}\`
    }];
    return <div style={{
      maxWidth: '900px'
    }}>
        <Table columns={productColumns} data={products} striped bordered hoverable />
      </div>;
  }
}`,...U.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    data: mockUsers
  },
  render: () => <Card style={{
    maxWidth: '900px'
  }}>
      <Card.Header>
        <div>
          <h3 style={{
          margin: 0,
          fontSize: 'var(--font-size-18)',
          fontWeight: 'var(--font-weight-medium)'
        }}>
            Users
          </h3>
          <p style={{
          margin: 0,
          marginTop: 'var(--spacing-1)',
          fontSize: 'var(--font-size-14)',
          color: 'var(--text-secondary)'
        }}>
            A table inside a Card using borderless prop
          </p>
        </div>
      </Card.Header>
      <Table columns={basicColumns} data={mockUsers} hoverable borderless />
    </Card>,
  parameters: {
    docs: {
      description: {
        story: 'When placing a Table inside a Card, use the \`borderless\` prop to remove the double border effect.'
      }
    }
  }
}`,...j.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    data: mockUsers,
    className: 'custom-table'
  }
}`,...W.parameters?.docs?.source}}};const F=["Default","Striped","Bordered","Borderless","SmallSize","LargeSize","WithCaption","EmptyState","CustomEmptyMessage","WithSorting","WithCustomCell","ClickableRows","ControlledSorting","UserManagement","ProductCatalog","InsideCard","WithCustomStyling"];export{u as Bordered,p as Borderless,x as ClickableRows,C as ControlledSorting,v as CustomEmptyMessage,d as Default,b as EmptyState,j as InsideCard,h as LargeSize,U as ProductCatalog,g as SmallSize,m as Striped,f as UserManagement,y as WithCaption,S as WithCustomCell,W as WithCustomStyling,k as WithSorting,F as __namedExportsOrder,$ as default};
