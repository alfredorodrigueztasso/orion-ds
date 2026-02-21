/**
 * Preview module for Stats section
 * Stats and metrics sections for displaying key numbers and KPIs
 */

import React from 'react';
import { Stats, Badge } from '@orion-ds/react';
import { Users, TrendingUp, DollarSign, Globe } from 'lucide-react';

export const previews = [
  {
    title: 'Default Stats - 4 Columns',
    render: () => (
      <Stats
        eyebrow={<Badge>Metrics</Badge>}
        title="By the numbers"
        description="Our platform's impact in real numbers"
        stats={[
          { value: '10K+', label: 'Active users', icon: <Users size={24} /> },
          { value: '99.9%', label: 'Uptime', trend: { value: '+0.1%', positive: true } },
          { value: '$1.2M', label: 'Revenue', icon: <DollarSign size={24} />, trend: { value: '+12%', positive: true } },
          { value: '150+', label: 'Countries', icon: <Globe size={24} /> },
        ]}
        columns={4}
        variant="default"
        background="subtle"
      />
    ),
  },
  {
    title: 'Card Variant - 3 Columns',
    render: () => (
      <Stats
        eyebrow="Platform Performance"
        title="Built for scale"
        description="Trusted by teams worldwide to power their mission-critical applications"
        stats={[
          {
            value: '50M+',
            label: 'API Requests',
            description: 'Processed daily across all regions',
            icon: <TrendingUp size={24} />,
            trend: { value: '+23%', positive: true },
          },
          {
            value: '99.99%',
            label: 'Availability',
            description: 'Enterprise-grade reliability',
            trend: { value: '+0.02%', positive: true },
          },
          {
            value: '<100ms',
            label: 'Response Time',
            description: 'Global average latency',
            trend: { value: '-15ms', positive: true },
          },
        ]}
        columns={3}
        variant="cards"
        background="base"
      />
    ),
  },
  {
    title: 'Inline Variant - Compact',
    render: () => (
      <Stats
        title="Global reach"
        stats={[
          { value: '5M+', label: 'Downloads' },
          { value: '120+', label: 'Countries' },
          { value: '15K', label: 'GitHub Stars' },
          { value: '500+', label: 'Contributors' },
        ]}
        columns={4}
        variant="inline"
        background="none"
        centered={true}
      />
    ),
  },
  {
    title: 'Highlighted Values - Brand Gradient',
    render: () => (
      <Stats
        eyebrow={<Badge variant="brand">Growth</Badge>}
        title="Accelerating adoption"
        description="See how teams are embracing our platform"
        stats={[
          {
            value: '250%',
            label: 'YoY Growth',
            description: 'User base expansion',
            trend: { value: '+180%', positive: true },
          },
          {
            value: '2.5M',
            label: 'Components',
            description: 'Built with our system',
            trend: { value: '+340K', positive: true },
          },
          {
            value: '45%',
            label: 'Faster Shipping',
            description: 'Average time to production',
            trend: { value: '+12%', positive: true },
          },
        ]}
        columns={3}
        variant="cards"
        highlightValue={true}
        background="subtle"
      />
    ),
  },
  {
    title: 'Two Column Layout - Large Stats',
    render: () => (
      <Stats
        title="Enterprise trust"
        description="Powering critical infrastructure for global companies"
        stats={[
          {
            value: '500+',
            label: 'Enterprise Clients',
            description: 'Fortune 500 companies rely on our platform',
            icon: <Users size={28} />,
          },
          {
            value: '$50M+',
            label: 'Protected Revenue',
            description: 'Transaction value processed securely',
            icon: <DollarSign size={28} />,
          },
        ]}
        columns={2}
        variant="cards"
        background="base"
        centered={true}
      />
    ),
  },
];

export default previews;
