/**
 * Preview module for Select component
 * Native dropdown selection
 */

import React, { useState } from 'react';
import { Select } from '@orion-ds/react';

export const previews = [
  {
    title: 'Country Selection',
    render: () => {
      const [value, setValue] = useState('');

      const countries = [
        { value: 'us', label: 'United States' },
        { value: 'uk', label: 'United Kingdom' },
        { value: 'ca', label: 'Canada' },
        { value: 'au', label: 'Australia' },
        { value: 'de', label: 'Germany' },
        { value: 'fr', label: 'France' },
        { value: 'jp', label: 'Japan' },
        { value: 'br', label: 'Brazil' },
      ];

      return (
        <div style={{ maxWidth: '400px' }}>
          <Select
            label="Country"
            placeholder="Select a country"
            options={countries}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          {value && (
            <p style={{ marginTop: 'var(--spacing-2)', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              Selected: {countries.find((c) => c.value === value)?.label}
            </p>
          )}
        </div>
      );
    },
  },
  {
    title: 'With Grouped Options',
    render: () => {
      const [value, setValue] = useState('');

      return (
        <div style={{ maxWidth: '400px' }}>
          <Select
            label="Framework"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          >
            <optgroup label="Frontend">
              <option value="react">React</option>
              <option value="vue">Vue</option>
              <option value="angular">Angular</option>
            </optgroup>
            <optgroup label="Backend">
              <option value="node">Node.js</option>
              <option value="django">Django</option>
              <option value="rails">Ruby on Rails</option>
            </optgroup>
          </Select>
        </div>
      );
    },
  },
  {
    title: 'With Error',
    render: () => {
      const [value, setValue] = useState('');
      const hasError = value === '';

      return (
        <div style={{ maxWidth: '400px' }}>
          <Select
            label="Priority"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            error={hasError}
            helperText={hasError ? 'Please select a priority level' : ''}
            required
          >
            <option value="">Select priority...</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="urgent">Urgent</option>
          </Select>
        </div>
      );
    },
  },
];

export default previews;
