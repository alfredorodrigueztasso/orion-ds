/**
 * Preview module for Field component
 * Updated to use separate Textarea and Select components
 */

import React from 'react';
import { Field, Textarea, Select } from '@orion-ds/react';

export const previews = [
  {
    title: 'Input Types',
    render: () => (
      <div style={{ display: 'grid', gap: 'var(--spacing-4)', maxWidth: '400px' }}>
        <Field label="Email" type="email" placeholder="you@example.com" />
        <Field label="Password" type="password" placeholder="Enter password" />
        <Textarea
          label="Message"
          rows={4}
          placeholder="Your message..."
        />
      </div>
    ),
  },
  {
    title: 'Select and States',
    render: () => (
      <div style={{ display: 'grid', gap: 'var(--spacing-4)', maxWidth: '400px' }}>
        <Select label="Country">
          <option value="">Select country</option>
          <option value="us">United States</option>
          <option value="uk">United Kingdom</option>
          <option value="ca">Canada</option>
        </Select>
        <Field label="Disabled Field" value="Read-only value" disabled />
        <Field
          label="With Error"
          type="email"
          error="Please enter a valid email address"
          placeholder="email@example.com"
        />
      </div>
    ),
  },
];

export default previews;
