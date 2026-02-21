/**
 * Preview module for DataTable section
 * Comprehensive data table for SaaS dashboards with sorting, filtering, and actions
 */

import React, { useState } from 'react';
import { DataTable, Badge, Button } from '@orion-ds/react';
import { Edit, Trash2, Eye, Download, Plus, Inbox } from 'lucide-react';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
  lastActive: string;
}

const sampleUsers: User[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    email: 'sarah.chen@example.com',
    role: 'Admin',
    status: 'active',
    lastActive: '2 minutes ago',
  },
  {
    id: '2',
    name: 'Mike Johnson',
    email: 'mike.j@example.com',
    role: 'Developer',
    status: 'active',
    lastActive: '1 hour ago',
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    email: 'emily.r@example.com',
    role: 'Designer',
    status: 'active',
    lastActive: '3 hours ago',
  },
  {
    id: '4',
    name: 'Alex Kim',
    email: 'alex.kim@example.com',
    role: 'Developer',
    status: 'inactive',
    lastActive: '2 days ago',
  },
  {
    id: '5',
    name: 'Jordan Lee',
    email: 'jordan.lee@example.com',
    role: 'Manager',
    status: 'pending',
    lastActive: 'Never',
  },
];

export const previews = [
  {
    title: 'Basic Table',
    render: () => (
      <DataTable
        columns={[
          { key: 'name', header: 'Name', sortable: true },
          { key: 'email', header: 'Email' },
          { key: 'role', header: 'Role', sortable: true },
          {
            key: 'status',
            header: 'Status',
            render: (value) => <Badge variant={value === 'active' ? 'success' : 'default'}>{value as string}</Badge>,
          },
        ]}
        data={sampleUsers}
      />
    ),
  },
  {
    title: 'With Search and Sorting',
    render: () => (
      <DataTable
        columns={[
          { key: 'name', header: 'Name', sortable: true },
          { key: 'email', header: 'Email', sortable: true },
          { key: 'role', header: 'Role', sortable: true },
          {
            key: 'status',
            header: 'Status',
            sortable: true,
            render: (value) => <Badge variant={value === 'active' ? 'success' : 'default'}>{value as string}</Badge>,
          },
          { key: 'lastActive', header: 'Last Active', sortable: true },
        ]}
        data={sampleUsers}
        searchable
        searchPlaceholder="Search users..."
      />
    ),
  },
  {
    title: 'With Selection and Bulk Actions',
    render: () => {
      const [selectedKeys, setSelectedKeys] = useState<React.Key[]>([]);

      return (
        <DataTable
          columns={[
            { key: 'name', header: 'Name', sortable: true },
            { key: 'email', header: 'Email' },
            { key: 'role', header: 'Role' },
            {
              key: 'status',
              header: 'Status',
              render: (value) => <Badge variant={value === 'active' ? 'success' : 'default'}>{value as string}</Badge>,
            },
          ]}
          data={sampleUsers}
          selectable
          selectedKeys={selectedKeys}
          onSelectionChange={setSelectedKeys}
          bulkActions={[
            {
              key: 'export',
              label: 'Export',
              icon: <Download size={16} />,
              onClick: (keys) => console.log('Export', keys),
            },
            {
              key: 'delete',
              label: 'Delete',
              icon: <Trash2 size={16} />,
              variant: 'danger',
              onClick: (keys) => console.log('Delete', keys),
            },
          ]}
        />
      );
    },
  },
  {
    title: 'With Row Actions',
    render: () => (
      <DataTable
        columns={[
          { key: 'name', header: 'Name', sortable: true },
          { key: 'email', header: 'Email' },
          { key: 'role', header: 'Role' },
          {
            key: 'status',
            header: 'Status',
            render: (value) => <Badge variant={value === 'active' ? 'success' : 'default'}>{value as string}</Badge>,
          },
        ]}
        data={sampleUsers}
        rowActions={[
          {
            key: 'view',
            label: 'View Details',
            icon: <Eye size={16} />,
            onClick: (row) => console.log('View', row),
          },
          {
            key: 'edit',
            label: 'Edit',
            icon: <Edit size={16} />,
            onClick: (row) => console.log('Edit', row),
          },
          {
            key: 'delete',
            label: 'Delete',
            icon: <Trash2 size={16} />,
            variant: 'danger',
            onClick: (row) => console.log('Delete', row),
            show: (row) => row.status !== 'active',
          },
        ]}
      />
    ),
  },
  {
    title: 'With Pagination',
    render: () => {
      const [pagination, setPagination] = useState({
        page: 1,
        pageSize: 3,
        total: sampleUsers.length,
      });

      const paginatedData = sampleUsers.slice(
        (pagination.page - 1) * pagination.pageSize,
        pagination.page * pagination.pageSize,
      );

      return (
        <DataTable
          columns={[
            { key: 'name', header: 'Name', sortable: true },
            { key: 'email', header: 'Email' },
            { key: 'role', header: 'Role' },
            {
              key: 'status',
              header: 'Status',
              render: (value) => <Badge variant={value === 'active' ? 'success' : 'default'}>{value as string}</Badge>,
            },
          ]}
          data={paginatedData}
          pagination={pagination}
          onPaginationChange={(newPagination) =>
            setPagination({ ...pagination, ...newPagination })
          }
        />
      );
    },
  },
  {
    title: 'Compact with Striped Rows',
    render: () => (
      <DataTable
        columns={[
          { key: 'name', header: 'Name', sortable: true },
          { key: 'email', header: 'Email' },
          { key: 'role', header: 'Role' },
          {
            key: 'status',
            header: 'Status',
            render: (value) => <Badge variant={value === 'active' ? 'success' : 'default'}>{value as string}</Badge>,
          },
        ]}
        data={sampleUsers}
        compact
        striped
      />
    ),
  },
  {
    title: 'With Custom Toolbar',
    render: () => (
      <DataTable
        columns={[
          { key: 'name', header: 'Name', sortable: true },
          { key: 'email', header: 'Email' },
          { key: 'role', header: 'Role' },
          {
            key: 'status',
            header: 'Status',
            render: (value) => <Badge variant={value === 'active' ? 'success' : 'default'}>{value as string}</Badge>,
          },
        ]}
        data={sampleUsers}
        toolbar={
          <Button icon={<Plus size={16} />} size="sm">
            Add User
          </Button>
        }
        searchable
      />
    ),
  },
  {
    title: 'Loading State',
    render: () => (
      <DataTable
        columns={[
          { key: 'name', header: 'Name', sortable: true },
          { key: 'email', header: 'Email' },
          { key: 'role', header: 'Role' },
        ]}
        data={[]}
        loading
      />
    ),
  },
  {
    title: 'Empty State',
    render: () => (
      <DataTable
        columns={[
          { key: 'name', header: 'Name', sortable: true },
          { key: 'email', header: 'Email' },
          { key: 'role', header: 'Role' },
        ]}
        data={[]}
        emptyState={{
          icon: <Inbox size={48} />,
          title: 'No users found',
          description: 'Get started by creating your first user.',
          action: (
            <Button icon={<Plus size={16} />}>
              Add User
            </Button>
          ),
        }}
      />
    ),
  },
];

export default previews;
