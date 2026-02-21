/**
 * Preview module for MetricCards section
 * KPI cards for dashboard overviews with trends and sparklines
 */

import React from 'react';
import { MetricCards } from '@orion-ds/react';
import { DollarSign, Users, ShoppingCart, TrendingUp, Activity } from 'lucide-react';
import type { MetricItem } from '@orion-ds/react';

const basicMetrics: MetricItem[] = [
  {
    id: 'm1',
    label: 'Total Revenue',
    value: '$45,231',
    change: { value: '+12.5%', positive: true, label: 'vs last month' },
    icon: <DollarSign size={20} />,
  },
  {
    id: 'm2',
    label: 'Active Users',
    value: '2,345',
    change: { value: '+8.2%', positive: true, label: 'vs last month' },
    icon: <Users size={20} />,
  },
  {
    id: 'm3',
    label: 'Conversion Rate',
    value: '3.24%',
    change: { value: '-0.5%', positive: false, label: 'vs last month' },
    icon: <TrendingUp size={20} />,
  },
  {
    id: 'm4',
    label: 'Total Orders',
    value: '1,234',
    change: { value: '+15.3%', positive: true, label: 'vs last month' },
    icon: <ShoppingCart size={20} />,
  },
];

const detailedMetrics: MetricItem[] = [
  {
    id: 'd1',
    label: 'Monthly Revenue',
    value: '$123,456',
    change: { value: '+23.1%', positive: true, label: 'vs last month' },
    icon: <DollarSign size={20} />,
    sparkline: [30, 40, 35, 50, 49, 60, 70, 91, 85, 95, 100, 110],
    description: 'Includes all product sales and subscriptions',
  },
  {
    id: 'd2',
    label: 'New Customers',
    value: '456',
    change: { value: '+12.5%', positive: true, label: 'vs last month' },
    icon: <Users size={20} />,
    sparkline: [20, 25, 22, 30, 28, 35, 40, 38, 45, 50, 48, 55],
    description: 'First-time purchases this period',
  },
  {
    id: 'd3',
    label: 'Average Order',
    value: '$89.50',
    change: { value: '-2.3%', positive: false, label: 'vs last month' },
    icon: <Activity size={20} />,
    sparkline: [100, 95, 90, 88, 92, 87, 85, 90, 88, 86, 89, 87],
    description: 'Mean order value across all channels',
  },
];

const compactMetrics: MetricItem[] = [
  {
    id: 'c1',
    label: 'Revenue',
    value: '$45.2K',
    change: { value: '+12%', positive: true },
  },
  {
    id: 'c2',
    label: 'Users',
    value: '2.3K',
    change: { value: '+8%', positive: true },
  },
  {
    id: 'c3',
    label: 'Conversion',
    value: '3.24%',
    change: { value: '-0.5%', positive: false },
  },
  {
    id: 'c4',
    label: 'Orders',
    value: '1.2K',
    change: { value: '+15%', positive: true },
  },
  {
    id: 'c5',
    label: 'Refunds',
    value: '23',
    change: { value: '-10%', positive: true },
  },
];

const loadingMetrics: MetricItem[] = [
  { id: 'l1', label: 'Total Revenue', value: '$0', loading: true },
  { id: 'l2', label: 'Active Users', value: '0', loading: true },
  { id: 'l3', label: 'Conversion Rate', value: '0%', loading: true },
  { id: 'l4', label: 'Total Orders', value: '0', loading: true },
];

export const previews = [
  {
    title: 'Basic Metrics - 4 Columns',
    render: () => (
      <div style={{ width: '100%', padding: 'var(--spacing-4)' }}>
        <MetricCards metrics={basicMetrics} columns={4} variant="default" />
      </div>
    ),
  },
  {
    title: 'Detailed with Sparklines - 3 Columns',
    render: () => (
      <div style={{ width: '100%', padding: 'var(--spacing-4)' }}>
        <MetricCards metrics={detailedMetrics} columns={3} variant="detailed" />
      </div>
    ),
  },
  {
    title: 'Compact 5-Column Grid',
    render: () => (
      <div style={{ width: '100%', padding: 'var(--spacing-4)' }}>
        <MetricCards metrics={compactMetrics} columns={5} variant="compact" />
      </div>
    ),
  },
  {
    title: 'Interactive with Click Handlers',
    render: () => {
      const interactiveMetrics: MetricItem[] = basicMetrics.map((metric) => ({
        ...metric,
        onClick: () => alert(`View details for: ${metric.label}`),
      }));

      return (
        <div style={{ width: '100%', padding: 'var(--spacing-4)' }}>
          <MetricCards metrics={interactiveMetrics} columns={4} variant="default" />
        </div>
      );
    },
  },
  {
    title: 'Loading State',
    render: () => (
      <div style={{ width: '100%', padding: 'var(--spacing-4)' }}>
        <MetricCards metrics={loadingMetrics} columns={4} variant="default" loading />
      </div>
    ),
  },
];

export default previews;
