/**
 * Preview module for DatePicker component
 * Date selection with popover calendar
 */

import React, { useState } from 'react';
import { DatePicker } from '@orion-ds/react';

const SingleDatePreview = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div style={{ maxWidth: '300px' }}>
      <DatePicker
        selected={date}
        onSelect={setDate}
        placeholder="Select a date"
      />
    </div>
  );
};

const RangeSelectionPreview = () => {
  const [range, setRange] = useState<{ from?: Date; to?: Date }>({
    from: new Date(),
    to: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  });

  return (
    <div style={{ maxWidth: '300px' }}>
      <DatePicker
        mode="range"
        selected={range}
        onSelect={setRange}
        placeholder="Select date range"
      />
    </div>
  );
};

const WithPresetsPreview = () => {
  const [range, setRange] = useState<{ from?: Date; to?: Date }>({
    from: new Date(),
    to: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  });

  const presets = [
    {
      label: 'Today',
      value: { from: new Date(), to: new Date() },
    },
    {
      label: 'Last 7 days',
      value: {
        from: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
        to: new Date(),
      },
    },
    {
      label: 'Last 30 days',
      value: {
        from: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
        to: new Date(),
      },
    },
  ];

  return (
    <div style={{ maxWidth: '300px' }}>
      <DatePicker
        mode="range"
        selected={range}
        onSelect={setRange}
        presets={presets}
        placeholder="Select date range"
      />
    </div>
  );
};

export const previews = [
  {
    title: 'Single Date',
    render: SingleDatePreview,
  },
  {
    title: 'Range Selection',
    render: RangeSelectionPreview,
  },
  {
    title: 'With Presets',
    render: WithPresetsPreview,
  },
];

export default previews;
