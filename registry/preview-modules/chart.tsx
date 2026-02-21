/**
 * Preview module for Chart component
 * Orion-themed wrappers for Recharts
 */

import React from 'react';
import { ChartContainer, ChartTooltipContent, ChartLegendContent } from '@orion-ds/react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const revenueData = [
  { month: 'Jan', revenue: 4000, expenses: 2400 },
  { month: 'Feb', revenue: 3000, expenses: 1398 },
  { month: 'Mar', revenue: 2000, expenses: 9800 },
  { month: 'Apr', revenue: 2780, expenses: 3908 },
  { month: 'May', revenue: 1890, expenses: 4800 },
  { month: 'Jun', revenue: 2390, expenses: 3800 },
];

const usersData = [
  { month: 'Jan', users: 186 },
  { month: 'Feb', users: 305 },
  { month: 'Mar', users: 237 },
  { month: 'Apr', users: 273 },
  { month: 'May', users: 209 },
  { month: 'Jun', users: 314 },
];

export const previews = [
  {
    title: 'Bar Chart',
    render: () => {
      const config = {
        revenue: {
          label: 'Revenue',
          color: 'hsl(var(--color-brand))',
        },
        expenses: {
          label: 'Expenses',
          color: 'hsl(var(--color-neutral))',
        },
      };

      return (
        <div style={{ width: '100%', height: '300px' }}>
          <ChartContainer config={config}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip content={<ChartTooltipContent />} />
                <Legend content={<ChartLegendContent />} />
                <Bar dataKey="revenue" fill="#1B5BFF" />
                <Bar dataKey="expenses" fill="#94A3B8" />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      );
    },
  },
  {
    title: 'Line Chart',
    render: () => {
      const config = {
        users: {
          label: 'Active Users',
          color: 'hsl(var(--color-brand))',
        },
      };

      return (
        <div style={{ width: '100%', height: '300px' }}>
          <ChartContainer config={config}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={usersData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip content={<ChartTooltipContent />} />
                <Legend content={<ChartLegendContent />} />
                <Line
                  type="monotone"
                  dataKey="users"
                  stroke="#1B5BFF"
                  strokeWidth={2}
                  dot={{ fill: '#1B5BFF' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      );
    },
  },
];

export default previews;
