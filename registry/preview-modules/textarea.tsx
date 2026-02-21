/**
 * Preview module for Textarea component
 * Multi-line text input
 */

import React, { useState } from 'react';
import { Textarea } from '@orion-ds/react';

export const previews = [
  {
    title: 'Basic Textarea',
    render: () => {
      const [value, setValue] = useState('');

      return (
        <div style={{ maxWidth: '600px' }}>
          <Textarea
            label="Description"
            placeholder="Enter your description..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
            rows={4}
          />
        </div>
      );
    },
  },
  {
    title: 'With Character Count',
    render: () => {
      const [value, setValue] = useState('');
      const maxLength = 200;

      return (
        <div style={{ maxWidth: '600px' }}>
          <Textarea
            label="Bio"
            placeholder="Tell us about yourself..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
            rows={5}
            maxLength={maxLength}
          />
          <p style={{ marginTop: 'var(--spacing-1)', fontSize: '0.75rem', color: 'var(--text-tertiary)', textAlign: 'right' }}>
            {value.length} / {maxLength}
          </p>
        </div>
      );
    },
  },
  {
    title: 'With Error',
    render: () => {
      const [value, setValue] = useState('');
      const hasError = value.length > 0 && value.length < 10;

      return (
        <div style={{ maxWidth: '600px' }}>
          <Textarea
            label="Feedback"
            placeholder="Share your feedback..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
            rows={4}
            error={hasError}
            helperText={hasError ? 'Feedback must be at least 10 characters' : 'Minimum 10 characters required'}
          />
        </div>
      );
    },
  },
  {
    title: 'Disabled State',
    render: () => {
      return (
        <div style={{ maxWidth: '600px' }}>
          <Textarea
            label="Read-only content"
            value="This content cannot be edited."
            disabled
            rows={3}
          />
        </div>
      );
    },
  },
];

export default previews;
