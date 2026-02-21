/**
 * Preview module for FilterBar section
 * Horizontal filter controls with chips for SaaS dashboards
 */

import React, { useState } from 'react';
import { FilterBar } from '@orion-ds/react';
import type { FilterDefinition, ActiveFilter } from '@orion-ds/react';
import { Tag, Calendar, User } from 'lucide-react';

const statusOptions = [
  { value: 'active', label: 'Active', count: 24 },
  { value: 'pending', label: 'Pending', count: 12 },
  { value: 'completed', label: 'Completed', count: 8 },
  { value: 'archived', label: 'Archived', count: 3 },
];

const priorityOptions = [
  { value: 'high', label: 'High', count: 5 },
  { value: 'medium', label: 'Medium', count: 18 },
  { value: 'low', label: 'Low', count: 21 },
];

const assigneeOptions = [
  { value: 'sarah', label: 'Sarah Chen' },
  { value: 'mike', label: 'Mike Johnson' },
  { value: 'alex', label: 'Alex Rivera' },
  { value: 'jordan', label: 'Jordan Lee' },
];

const categoryOptions = [
  { value: 'bug', label: 'Bug', count: 12 },
  { value: 'feature', label: 'Feature', count: 18 },
  { value: 'improvement', label: 'Improvement', count: 8 },
  { value: 'documentation', label: 'Documentation', count: 6 },
];

export const previews = [
  {
    title: 'Basic Filter Bar',
    render: () => {
      const [activeFilters, setActiveFilters] = useState<ActiveFilter[]>([]);

      const filters: FilterDefinition[] = [
        { key: 'status', label: 'Status', type: 'select', options: statusOptions },
        { key: 'priority', label: 'Priority', type: 'select', options: priorityOptions },
      ];

      const handleFilterChange = (key: string, value: string | string[] | null) => {
        if (value === null) return;

        const filter = filters.find((f) => f.key === key);
        if (!filter) return;

        const option = filter.options?.find((o) => o.value === value);
        if (!option) return;

        setActiveFilters([
          ...activeFilters.filter((f) => f.key !== key),
          { key, value, label: `${filter.label}: ${option.label}` },
        ]);
      };

      const handleFilterRemove = (key: string) => {
        setActiveFilters(activeFilters.filter((f) => f.key !== key));
      };

      const handleClearAll = () => {
        setActiveFilters([]);
      };

      return (
        <FilterBar
          filters={filters}
          activeFilters={activeFilters}
          onFilterChange={handleFilterChange}
          onFilterRemove={handleFilterRemove}
          onClearAll={handleClearAll}
        />
      );
    },
  },
  {
    title: 'With Search',
    render: () => {
      const [activeFilters, setActiveFilters] = useState<ActiveFilter[]>([]);
      const [searchValue, setSearchValue] = useState('');

      const filters: FilterDefinition[] = [
        { key: 'status', label: 'Status', type: 'select', options: statusOptions },
        { key: 'assignee', label: 'Assignee', type: 'select', options: assigneeOptions, icon: <User size={14} /> },
      ];

      const handleFilterChange = (key: string, value: string | string[] | null) => {
        if (value === null) return;

        const filter = filters.find((f) => f.key === key);
        if (!filter) return;

        const option = filter.options?.find((o) => o.value === value);
        if (!option) return;

        setActiveFilters([
          ...activeFilters.filter((f) => f.key !== key),
          { key, value, label: `${filter.label}: ${option.label}` },
        ]);
      };

      const handleFilterRemove = (key: string) => {
        setActiveFilters(activeFilters.filter((f) => f.key !== key));
      };

      return (
        <FilterBar
          filters={filters}
          activeFilters={activeFilters}
          onFilterChange={handleFilterChange}
          onFilterRemove={handleFilterRemove}
          searchable
          searchValue={searchValue}
          onSearchChange={setSearchValue}
          searchPlaceholder="Search tasks..."
        />
      );
    },
  },
  {
    title: 'Multi-Select Filters',
    render: () => {
      const [activeFilters, setActiveFilters] = useState<ActiveFilter[]>([]);

      const filters: FilterDefinition[] = [
        { key: 'category', label: 'Category', type: 'multi-select', options: categoryOptions, icon: <Tag size={14} /> },
        { key: 'status', label: 'Status', type: 'multi-select', options: statusOptions },
      ];

      const handleFilterChange = (key: string, value: string | string[] | null) => {
        if (value === null) return;

        const filter = filters.find((f) => f.key === key);
        if (!filter) return;

        const values = Array.isArray(value) ? value : [value];
        const labels = values
          .map((v) => filter.options?.find((o) => o.value === v)?.label)
          .filter(Boolean);

        setActiveFilters([
          ...activeFilters.filter((f) => f.key !== key),
          { key, value, label: `${filter.label}: ${labels.join(', ')}` },
        ]);
      };

      const handleFilterRemove = (key: string) => {
        setActiveFilters(activeFilters.filter((f) => f.key !== key));
      };

      const handleClearAll = () => {
        setActiveFilters([]);
      };

      return (
        <FilterBar
          filters={filters}
          activeFilters={activeFilters}
          onFilterChange={handleFilterChange}
          onFilterRemove={handleFilterRemove}
          onClearAll={handleClearAll}
        />
      );
    },
  },
  {
    title: 'Compact Mode',
    render: () => {
      const [activeFilters, setActiveFilters] = useState<ActiveFilter[]>([
        { key: 'status', value: 'active', label: 'Status: Active' },
      ]);
      const [searchValue, setSearchValue] = useState('');

      const filters: FilterDefinition[] = [
        { key: 'status', label: 'Status', type: 'select', options: statusOptions },
        { key: 'priority', label: 'Priority', type: 'select', options: priorityOptions },
        { key: 'date', label: 'Date', type: 'date-range', icon: <Calendar size={14} /> },
      ];

      const handleFilterChange = (key: string, value: string | string[] | null) => {
        if (value === null) return;

        const filter = filters.find((f) => f.key === key);
        if (!filter) return;

        const option = filter.options?.find((o) => o.value === value);
        if (!option) return;

        setActiveFilters([
          ...activeFilters.filter((f) => f.key !== key),
          { key, value, label: `${filter.label}: ${option.label}` },
        ]);
      };

      const handleFilterRemove = (key: string) => {
        setActiveFilters(activeFilters.filter((f) => f.key !== key));
      };

      const handleClearAll = () => {
        setActiveFilters([]);
      };

      return (
        <FilterBar
          filters={filters}
          activeFilters={activeFilters}
          onFilterChange={handleFilterChange}
          onFilterRemove={handleFilterRemove}
          onClearAll={handleClearAll}
          searchable
          searchValue={searchValue}
          onSearchChange={setSearchValue}
          compact
        />
      );
    },
  },
  {
    title: 'Many Active Filters',
    render: () => {
      const [activeFilters, setActiveFilters] = useState<ActiveFilter[]>([
        { key: 'status', value: 'active', label: 'Status: Active' },
        { key: 'priority', value: 'high', label: 'Priority: High' },
        { key: 'assignee', value: 'sarah', label: 'Assignee: Sarah Chen' },
        { key: 'category', value: ['bug', 'feature'], label: 'Category: Bug, Feature' },
      ]);

      const filters: FilterDefinition[] = [
        { key: 'status', label: 'Status', type: 'select', options: statusOptions },
        { key: 'priority', label: 'Priority', type: 'select', options: priorityOptions },
        { key: 'assignee', label: 'Assignee', type: 'select', options: assigneeOptions },
        { key: 'category', label: 'Category', type: 'multi-select', options: categoryOptions },
      ];

      const handleFilterChange = (key: string, value: string | string[] | null) => {
        if (value === null) return;

        const filter = filters.find((f) => f.key === key);
        if (!filter) return;

        const values = Array.isArray(value) ? value : [value];
        const labels = values
          .map((v) => filter.options?.find((o) => o.value === v)?.label)
          .filter(Boolean);

        setActiveFilters([
          ...activeFilters.filter((f) => f.key !== key),
          { key, value, label: `${filter.label}: ${labels.join(', ')}` },
        ]);
      };

      const handleFilterRemove = (key: string) => {
        setActiveFilters(activeFilters.filter((f) => f.key !== key));
      };

      const handleClearAll = () => {
        setActiveFilters([]);
      };

      return (
        <FilterBar
          filters={filters}
          activeFilters={activeFilters}
          onFilterChange={handleFilterChange}
          onFilterRemove={handleFilterRemove}
          onClearAll={handleClearAll}
        />
      );
    },
  },
];

export default previews;
