/**
 * Preview module for Calendar component
 * Date selection with multiple modes
 */

import React, { useState } from 'react';
import { Calendar } from '@orion-ds/react';

export const previews = [
  {
    title: 'Single Date Selection',
    render: () => {
      const [date, setDate] = useState<Date | undefined>(new Date());

      return (
        <div style={{ display: 'grid', gap: 'var(--spacing-3)' }}>
          <Calendar selected={date} onSelect={setDate} />
          {date && (
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              Selected: {date.toLocaleDateString()}
            </p>
          )}
        </div>
      );
    },
  },
  {
    title: 'Range Selection',
    render: () => {
      const [range, setRange] = useState<{ from?: Date; to?: Date }>({
        from: new Date(),
        to: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      });

      return (
        <div style={{ display: 'grid', gap: 'var(--spacing-3)' }}>
          <Calendar mode="range" selected={range} onSelect={setRange} />
          {range?.from && (
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              From: {range.from.toLocaleDateString()}
              {range.to && ` - To: ${range.to.toLocaleDateString()}`}
            </p>
          )}
        </div>
      );
    },
  },
  {
    title: 'Multiple Dates',
    render: () => {
      const [dates, setDates] = useState<Date[]>([
        new Date(),
        new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      ]);

      return (
        <div style={{ display: 'grid', gap: 'var(--spacing-3)' }}>
          <Calendar mode="multiple" selected={dates} onSelect={setDates} />
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            Selected {dates.length} date{dates.length !== 1 ? 's' : ''}
          </p>
        </div>
      );
    },
  },
];

export default previews;
