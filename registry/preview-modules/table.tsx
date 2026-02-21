/**
 * Preview module for Table component
 * Migrated from ComponentPreview.tsx hardcoded examples
 */

import React from 'react';
import { Table, Badge } from '@orion-ds/react';

export const previews = [
  {
    title: 'User Table',
    render: () => (
      <Table
        columns={[
          { key: 'name', header: 'Name', sortable: true },
          { key: 'email', header: 'Email' },
          {
            key: 'status',
            header: 'Status',
            cell: (row: any) => (
              <Badge variant={row.status === 'active' ? 'success' : 'neutral'}>{row.status}</Badge>
            ),
          },
          {
            key: 'role',
            header: 'Role',
            cell: (row: any) => <Badge variant="secondary">{row.role}</Badge>,
          },
        ]}
        data={[
          { name: 'John Doe', email: 'john@example.com', status: 'active', role: 'Admin' },
          { name: 'Jane Smith', email: 'jane@example.com', status: 'active', role: 'User' },
          { name: 'Bob Johnson', email: 'bob@example.com', status: 'inactive', role: 'User' },
        ]}
        striped
        hoverable
      />
    ),
  },
];

export default previews;
