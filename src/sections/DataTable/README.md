# DataTable Section

> Full-featured data table with sorting, filtering, pagination, selection, and bulk actions.

## Quick Start

```tsx
import { DataTable, Badge, Button } from '@orion/react';
import { Edit, Trash2 } from 'lucide-react';

const columns = [
  { key: 'name', header: 'Name', sortable: true },
  { key: 'email', header: 'Email' },
  {
    key: 'status',
    header: 'Status',
    render: (value) => <Badge variant={value === 'active' ? 'success' : 'secondary'}>{value}</Badge>
  },
];

const data = [
  { id: 1, name: 'Jane Doe', email: 'jane@example.com', status: 'active' },
  { id: 2, name: 'John Smith', email: 'john@example.com', status: 'inactive' },
];

<DataTable
  columns={columns}
  data={data}
  searchable
  selectable
  pagination={{ page: 1, pageSize: 10, total: 100 }}
/>
```

---

## Features

- **Sortable Columns** — Click headers to sort ascending/descending
- **Search** — Global search across all columns
- **Filters** — Text, select, date, and date range filters
- **Pagination** — Page navigation with configurable page sizes
- **Row Selection** — Select single/multiple rows with checkboxes
- **Bulk Actions** — Actions on selected rows (delete, export, etc.)
- **Row Actions** — Per-row action menus (edit, delete, etc.)
- **Custom Renderers** — Custom cell rendering for complex data
- **Sticky Columns** — Pin columns to left or right
- **Loading States** — Skeleton loading for async data
- **Empty States** — Customizable empty state messaging
- **Responsive** — Hide columns on mobile

---

## Props Reference

```typescript
interface DataTableProps<T> {
  // Data
  columns: DataTableColumn<T>[];    // REQUIRED - Column definitions
  data: T[];                        // REQUIRED - Data rows
  rowKey?: keyof T | ((row: T, index: number) => Key);  // Row identifier - default: 'id'

  // Search
  searchable?: boolean;             // Enable search - default: false
  searchPlaceholder?: string;       // Search input placeholder
  searchValue?: string;             // Controlled search value
  onSearchChange?: (value: string) => void;

  // Filters
  filters?: DataTableFilter[];      // Filter definitions
  filterValues?: Record<string, unknown>;
  onFilterChange?: (key: string, value: unknown) => void;

  // Pagination
  pagination?: DataTablePagination;
  onPaginationChange?: (pagination: { page: number; pageSize: number }) => void;

  // Selection
  selectable?: boolean;             // Enable row selection - default: false
  selectedKeys?: Key[];             // Selected row keys
  onSelectionChange?: (keys: Key[]) => void;
  bulkActions?: DataTableBulkAction[];  // Actions for selected rows

  // Row Actions
  rowActions?: DataTableRowAction<T>[];

  // Sorting
  sort?: DataTableSort;
  onSortChange?: (sort: DataTableSort | undefined) => void;

  // State
  loading?: boolean;                // Loading state - default: false
  emptyState?: DataTableEmptyState;

  // Appearance
  striped?: boolean;                // Striped rows - default: false
  hoverable?: boolean;              // Row hover effect - default: true
  compact?: boolean;                // Compact mode - default: false
  stickyHeader?: boolean;           // Sticky header - default: false
  maxHeight?: string;               // Max height (enables scroll)

  // Events
  onRowClick?: (row: T, index: number) => void;

  // Custom Content
  toolbar?: ReactNode;              // Toolbar content above table
}
```

---

## Column Configuration

### Basic Column

```tsx
{ key: 'name', header: 'Name' }
```

### Sortable Column

```tsx
{ key: 'name', header: 'Name', sortable: true }
```

### Column with Width

```tsx
{ key: 'email', header: 'Email', width: '300px', minWidth: '200px' }
```

### Text Alignment

```tsx
{ key: 'amount', header: 'Amount', align: 'right' }
```

### Custom Cell Renderer

```tsx
{
  key: 'status',
  header: 'Status',
  render: (value, row, index) => (
    <Badge variant={value === 'active' ? 'success' : 'secondary'}>
      {value}
    </Badge>
  )
}
```

### Sticky Column

```tsx
{ key: 'actions', header: '', sticky: 'right', width: '80px' }
```

### Hide on Mobile

```tsx
{ key: 'createdAt', header: 'Created', hideOnMobile: true }
```

---

## Sorting

### Controlled Sorting

```tsx
const [sort, setSort] = useState<DataTableSort | undefined>({
  key: 'name',
  direction: 'asc'
});

<DataTable
  columns={[
    { key: 'name', header: 'Name', sortable: true },
    { key: 'email', header: 'Email', sortable: true },
    { key: 'createdAt', header: 'Created', sortable: true },
  ]}
  data={data}
  sort={sort}
  onSortChange={setSort}
/>
```

---

## Search

### Basic Search

```tsx
<DataTable
  columns={columns}
  data={data}
  searchable
  searchPlaceholder="Search users..."
/>
```

### Controlled Search

```tsx
const [search, setSearch] = useState('');

<DataTable
  columns={columns}
  data={filteredData}
  searchable
  searchValue={search}
  onSearchChange={setSearch}
/>
```

---

## Filters

### Filter Configuration

```tsx
const filters = [
  {
    key: 'status',
    label: 'Status',
    type: 'select',
    options: [
      { value: 'active', label: 'Active' },
      { value: 'inactive', label: 'Inactive' },
    ]
  },
  {
    key: 'search',
    label: 'Search',
    type: 'text',
    placeholder: 'Search by name...'
  },
  {
    key: 'createdAt',
    label: 'Created',
    type: 'date'
  },
  {
    key: 'dateRange',
    label: 'Date Range',
    type: 'dateRange'
  }
];

<DataTable
  columns={columns}
  data={data}
  filters={filters}
  filterValues={filterValues}
  onFilterChange={(key, value) => {
    setFilterValues({ ...filterValues, [key]: value });
  }}
/>
```

---

## Pagination

### Basic Pagination

```tsx
const [pagination, setPagination] = useState({
  page: 1,
  pageSize: 10,
  total: 100
});

<DataTable
  columns={columns}
  data={pageData}
  pagination={pagination}
  onPaginationChange={({ page, pageSize }) => {
    setPagination({ ...pagination, page, pageSize });
    // Fetch new page data
  }}
/>
```

### Custom Page Sizes

```tsx
<DataTable
  columns={columns}
  data={data}
  pagination={{
    page: 1,
    pageSize: 25,
    total: 500,
    pageSizeOptions: [10, 25, 50, 100]
  }}
/>
```

---

## Row Selection

### Basic Selection

```tsx
const [selectedKeys, setSelectedKeys] = useState<Key[]>([]);

<DataTable
  columns={columns}
  data={data}
  selectable
  selectedKeys={selectedKeys}
  onSelectionChange={setSelectedKeys}
/>
```

### With Bulk Actions

```tsx
<DataTable
  columns={columns}
  data={data}
  selectable
  selectedKeys={selectedKeys}
  onSelectionChange={setSelectedKeys}
  bulkActions={[
    {
      key: 'delete',
      label: 'Delete Selected',
      icon: <Trash2 size={16} />,
      variant: 'danger',
      onClick: (keys) => handleBulkDelete(keys)
    },
    {
      key: 'export',
      label: 'Export Selected',
      icon: <Download size={16} />,
      onClick: (keys) => handleExport(keys)
    }
  ]}
/>
```

---

## Row Actions

```tsx
<DataTable
  columns={columns}
  data={data}
  rowActions={[
    {
      key: 'edit',
      label: 'Edit',
      icon: <Edit size={16} />,
      onClick: (row) => handleEdit(row)
    },
    {
      key: 'delete',
      label: 'Delete',
      icon: <Trash2 size={16} />,
      variant: 'danger',
      onClick: (row) => handleDelete(row),
      show: (row) => row.status !== 'protected'  // Conditional visibility
    }
  ]}
/>
```

---

## Loading State

```tsx
<DataTable
  columns={columns}
  data={data}
  loading={isLoading}
/>
```

---

## Empty State

```tsx
<DataTable
  columns={columns}
  data={[]}
  emptyState={{
    icon: <Users size={48} />,
    title: "No users found",
    description: "Try adjusting your search or filters",
    action: <Button onClick={clearFilters}>Clear Filters</Button>
  }}
/>
```

---

## Appearance Options

### Striped Rows

```tsx
<DataTable columns={columns} data={data} striped />
```

### Compact Mode

```tsx
<DataTable columns={columns} data={data} compact />
```

### Sticky Header with Scroll

```tsx
<DataTable
  columns={columns}
  data={data}
  stickyHeader
  maxHeight="500px"
/>
```

### Disable Row Hover

```tsx
<DataTable columns={columns} data={data} hoverable={false} />
```

---

## Complete Examples

### User Management Table

```tsx
import { DataTable, Badge, Button, Avatar } from '@orion/react';
import { Edit, Trash2, MoreHorizontal, Mail } from 'lucide-react';

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
  avatar?: string;
};

const columns: DataTableColumn<User>[] = [
  {
    key: 'name',
    header: 'User',
    sortable: true,
    render: (_, row) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)' }}>
        <Avatar src={row.avatar} fallback={row.name[0]} size="sm" />
        <div>
          <div style={{ fontWeight: 500 }}>{row.name}</div>
          <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
            {row.email}
          </div>
        </div>
      </div>
    )
  },
  { key: 'role', header: 'Role', sortable: true },
  {
    key: 'status',
    header: 'Status',
    render: (value) => (
      <Badge variant={
        value === 'active' ? 'success' :
        value === 'pending' ? 'warning' : 'secondary'
      }>
        {value}
      </Badge>
    )
  }
];

<DataTable<User>
  columns={columns}
  data={users}
  rowKey="id"
  searchable
  searchPlaceholder="Search users..."
  selectable
  selectedKeys={selected}
  onSelectionChange={setSelected}
  bulkActions={[
    {
      key: 'delete',
      label: 'Delete',
      icon: <Trash2 size={16} />,
      variant: 'danger',
      onClick: handleBulkDelete
    },
    {
      key: 'email',
      label: 'Send Email',
      icon: <Mail size={16} />,
      onClick: handleBulkEmail
    }
  ]}
  rowActions={[
    { key: 'edit', label: 'Edit', icon: <Edit size={16} />, onClick: handleEdit },
    { key: 'delete', label: 'Delete', icon: <Trash2 size={16} />, variant: 'danger', onClick: handleDelete }
  ]}
  pagination={{
    page: 1,
    pageSize: 10,
    total: totalUsers
  }}
  onPaginationChange={handlePageChange}
  sort={sort}
  onSortChange={setSort}
/>
```

### Inventory Table

```tsx
const columns = [
  { key: 'sku', header: 'SKU', sortable: true },
  { key: 'name', header: 'Product', sortable: true },
  {
    key: 'stock',
    header: 'Stock',
    align: 'right',
    render: (value) => (
      <span style={{
        color: value < 10 ? 'var(--status-error)' : 'inherit'
      }}>
        {value}
      </span>
    )
  },
  {
    key: 'price',
    header: 'Price',
    align: 'right',
    render: (value) => `$${value.toFixed(2)}`
  }
];

<DataTable
  columns={columns}
  data={inventory}
  searchable
  striped
  filters={[
    {
      key: 'category',
      label: 'Category',
      type: 'select',
      options: categories
    },
    {
      key: 'inStock',
      label: 'Availability',
      type: 'select',
      options: [
        { value: 'all', label: 'All' },
        { value: 'inStock', label: 'In Stock' },
        { value: 'lowStock', label: 'Low Stock' },
        { value: 'outOfStock', label: 'Out of Stock' }
      ]
    }
  ]}
  pagination={pagination}
  onPaginationChange={setPagination}
/>
```

---

## Accessibility

- Table uses semantic `<table>` HTML elements
- Sortable headers have `aria-sort` attributes
- Checkboxes have proper labels
- Pagination controls are keyboard accessible
- Loading state announced to screen readers

```tsx
// Good: Descriptive column headers
{ key: 'createdAt', header: 'Date Created' }

// Avoid: Abbreviated or unclear headers
{ key: 'createdAt', header: 'Dt' }
```

---

## Anti-Patterns

### Too Many Columns

```tsx
// WRONG - Horizontal scrolling nightmare
<DataTable columns={[...fifteenColumns]} />

// CORRECT - Focus on essential columns, hide on mobile
<DataTable
  columns={[
    { key: 'name', header: 'Name' },
    { key: 'email', header: 'Email', hideOnMobile: true },
    { key: 'status', header: 'Status' },
    { key: 'date', header: 'Date', hideOnMobile: true },
  ]}
/>
```

### Missing Row Keys

```tsx
// WRONG - No unique identifier
<DataTable columns={columns} data={data} />

// CORRECT - Specify row key
<DataTable columns={columns} data={data} rowKey="id" />
// or
<DataTable columns={columns} data={data} rowKey={(row) => row.uniqueId} />
```

### Client-Side Everything

```tsx
// WRONG - Loading 10,000 rows and paginating client-side
<DataTable data={tenThousandRows} pagination={...} />

// CORRECT - Server-side pagination for large datasets
<DataTable
  data={currentPageData}  // Only current page
  pagination={{
    page: serverPage,
    pageSize: 25,
    total: serverTotal
  }}
  onPaginationChange={fetchPage}
/>
```

---

## When to Use DataTable

| Scenario | Recommendation |
|----------|----------------|
| Admin dashboard lists | Yes - with all features |
| Simple data display | Use simpler Table component |
| Interactive data management | Yes - with selection and actions |
| Analytics/reports | Yes - with sorting and export |
| Mobile-first app | Consider cards instead |

## When NOT to Use DataTable

| Scenario | Use Instead |
|----------|-------------|
| Simple key-value display | Definition list or Card |
| Highly visual data | Custom cards or charts |
| <10 rows, no actions | Simple HTML table |
| Mobile-only app | List or Card layouts |

---

## Related Components

- **[PageHeader](../PageHeader/README.md)** — Page header with breadcrumbs
- **[EmptyState](../EmptyState/README.md)** — Empty state display
- **[FilterBar](../FilterBar/README.md)** — Standalone filter controls
- **[Sidebar](../Sidebar/README.md)** — Navigation sidebar
