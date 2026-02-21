/**
 * Preview module for Checkbox component
 * Form selection controls
 */

import React, { useState } from 'react';
import { Checkbox } from '@orion-ds/react';

export const previews = [
  {
    title: 'States',
    render: () => {
      const [checked, setChecked] = useState(true);

      return (
        <div style={{ display: 'grid', gap: 'var(--spacing-4)' }}>
          <Checkbox
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            label="Interactive checkbox"
          />
          <Checkbox checked={true} readOnly label="Checked (read-only)" />
          <Checkbox checked={false} readOnly label="Unchecked (read-only)" />
          <Checkbox disabled label="Disabled" />
          <Checkbox checked={true} disabled label="Checked & Disabled" />
        </div>
      );
    },
  },
  {
    title: 'Sizes',
    render: () => (
      <div style={{ display: 'grid', gap: 'var(--spacing-4)' }}>
        <Checkbox size="sm" label="Small checkbox" />
        <Checkbox label="Medium checkbox (default)" />
        <Checkbox size="lg" label="Large checkbox" />
      </div>
    ),
  },
  {
    title: 'Form Example',
    render: () => {
      const [preferences, setPreferences] = useState({
        newsletter: true,
        updates: false,
        marketing: false,
      });

      return (
        <div style={{ display: 'grid', gap: 'var(--spacing-3)' }}>
          <h4 style={{ margin: 0, marginBottom: 'var(--spacing-2)' }}>Email Preferences</h4>
          <Checkbox
            checked={preferences.newsletter}
            onChange={(e) => setPreferences({ ...preferences, newsletter: e.target.checked })}
            label="Newsletter (weekly)"
          />
          <Checkbox
            checked={preferences.updates}
            onChange={(e) => setPreferences({ ...preferences, updates: e.target.checked })}
            label="Product updates"
          />
          <Checkbox
            checked={preferences.marketing}
            onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
            label="Marketing emails"
          />
        </div>
      );
    },
  },
];

export default previews;
