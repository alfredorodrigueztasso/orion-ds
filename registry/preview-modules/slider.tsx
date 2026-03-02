/**
 * Preview module for Slider component
 * Range and value selection controls
 */

import React, { useState } from 'react';
import { Slider } from '@orion-ds/react';

const SingleValuePreview = () => {
  const [value, setValue] = useState(50);

  return (
    <div style={{ display: 'grid', gap: 'var(--spacing-3)', maxWidth: '400px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <label>Volume</label>
        <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
          {value}%
        </span>
      </div>
      <Slider min={0} max={100} value={value} onChange={setValue} />
    </div>
  );
};

const RangeSelectionPreview = () => {
  const [range, setRange] = useState([25, 75]);

  return (
    <div style={{ display: 'grid', gap: 'var(--spacing-3)', maxWidth: '400px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <label>Price Range</label>
        <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
          ${range[0]} - ${range[1]}
        </span>
      </div>
      <Slider min={0} max={100} value={range} onChange={setRange} range />
    </div>
  );
};

const WithStepsPreview = () => {
  const [value, setValue] = useState(5);

  return (
    <div style={{ display: 'grid', gap: 'var(--spacing-3)', maxWidth: '400px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <label>Rating</label>
        <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
          {value} stars
        </span>
      </div>
      <Slider min={0} max={10} step={1} value={value} onChange={setValue} marks showValue />
    </div>
  );
};

const DisabledStatePreview = () => (
  <div style={{ maxWidth: '400px' }}>
    <Slider min={0} max={100} value={30} disabled />
  </div>
);

export const previews = [
  {
    title: 'Single Value',
    render: SingleValuePreview,
  },
  {
    title: 'Range Selection',
    render: RangeSelectionPreview,
  },
  {
    title: 'With Steps',
    render: WithStepsPreview,
  },
  {
    title: 'Disabled State',
    render: DisabledStatePreview,
  },
];

export default previews;
