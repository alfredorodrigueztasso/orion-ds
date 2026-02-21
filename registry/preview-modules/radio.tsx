/**
 * Preview module for Radio component
 * Form selection controls (single choice)
 */

import React, { useState } from 'react';
import { Radio } from '@orion-ds/react';

export const previews = [
  {
    title: 'Interactive Radio Group',
    render: () => {
      const [selected, setSelected] = useState('option1');

      return (
        <div style={{ display: 'grid', gap: 'var(--spacing-3)' }}>
          <Radio
            name="demo"
            value="option1"
            checked={selected === 'option1'}
            onChange={(e) => setSelected(e.target.value)}
            label="Option 1"
          />
          <Radio
            name="demo"
            value="option2"
            checked={selected === 'option2'}
            onChange={(e) => setSelected(e.target.value)}
            label="Option 2"
          />
          <Radio
            name="demo"
            value="option3"
            checked={selected === 'option3'}
            onChange={(e) => setSelected(e.target.value)}
            label="Option 3"
          />
          <p style={{ marginTop: 'var(--spacing-2)', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            Selected: {selected}
          </p>
        </div>
      );
    },
  },
  {
    title: 'States',
    render: () => (
      <div style={{ display: 'grid', gap: 'var(--spacing-4)' }}>
        <Radio name="states" checked={true} readOnly label="Selected (read-only)" />
        <Radio name="states" checked={false} readOnly label="Unselected (read-only)" />
        <Radio name="states" disabled label="Disabled" />
        <Radio name="states" checked={true} disabled label="Selected & Disabled" />
      </div>
    ),
  },
  {
    title: 'Payment Method Example',
    render: () => {
      const [method, setMethod] = useState('card');

      return (
        <div style={{ display: 'grid', gap: 'var(--spacing-3)' }}>
          <h4 style={{ margin: 0, marginBottom: 'var(--spacing-2)' }}>Payment Method</h4>
          <Radio
            name="payment"
            value="card"
            checked={method === 'card'}
            onChange={(e) => setMethod(e.target.value)}
            label="Credit Card"
          />
          <Radio
            name="payment"
            value="paypal"
            checked={method === 'paypal'}
            onChange={(e) => setMethod(e.target.value)}
            label="PayPal"
          />
          <Radio
            name="payment"
            value="bank"
            checked={method === 'bank'}
            onChange={(e) => setMethod(e.target.value)}
            label="Bank Transfer"
          />
        </div>
      );
    },
  },
];

export default previews;
