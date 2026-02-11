/**
 * Table Component
 *
 * Data display table with sorting, customizable columns, and interactive rows.
 *
 * @example
 * ```tsx
 * interface User {
 *   id: number;
 *   name: string;
 *   email: string;
 *   status: 'active' | 'inactive';
 * }
 *
 * const columns: TableColumn<User>[] = [
 *   { key: 'name', header: 'Name', sortable: true },
 *   { key: 'email', header: 'Email', sortable: true },
 *   {
 *     key: 'status',
 *     header: 'Status',
 *     cell: (user) => (
 *       <Badge variant={user.status === 'active' ? 'success' : 'neutral'}>
 *         {user.status}
 *       </Badge>
 *     ),
 *     align: 'center'
 *   }
 * ];
 *
 * <Table
 *   columns={columns}
 *   data={users}
 *   striped
 *   hoverable
 *   onRowClick={(user) => navigate(`/users/${user.id}`)}
 * />
 * ```
 */
import type { TableProps } from './Table.types';
export declare const Table: {
    <T extends Record<string, any>>({ columns, data, size, striped, hoverable, bordered, borderless, caption, emptyMessage, onRowClick, onSortChange, sortState, getRowKey, className, }: TableProps<T>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=Table.d.ts.map