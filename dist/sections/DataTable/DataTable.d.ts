/**
 * DataTable Component
 *
 * A data table for SaaS dashboards with sorting, pagination, filtering, and selection.
 * Optimized for Product Mode with efficient data display and minimal visual noise.
 *
 * @example
 * ```tsx
 * <DataTable
 *   columns={[
 *     { key: 'name', header: 'Name', sortable: true },
 *     { key: 'email', header: 'Email' },
 *     { key: 'status', header: 'Status', render: (value) => <Badge>{value}</Badge> }
 *   ]}
 *   data={users}
 *   searchable
 *   selectable
 *   pagination={{ page: 1, pageSize: 10, total: 100 }}
 * />
 * ```
 */
import type { DataTableProps } from './DataTable.types';
declare function DataTableInner<T extends Record<string, unknown>>({ columns, data, rowKey, searchable, searchPlaceholder, searchValue: controlledSearchValue, onSearchChange, pagination, onPaginationChange, selectable, selectedKeys: controlledSelectedKeys, onSelectionChange, bulkActions, rowActions, sort: controlledSort, onSortChange, emptyState, loading, striped, hoverable, compact, stickyHeader, maxHeight, onRowClick, toolbar, className, ...rest }: DataTableProps<T>, ref: React.ForwardedRef<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
export declare const DataTable: <T extends Record<string, unknown>>(props: DataTableProps<T> & {
    ref?: React.ForwardedRef<HTMLDivElement>;
}) => ReturnType<typeof DataTableInner>;
export {};
//# sourceMappingURL=DataTable.d.ts.map