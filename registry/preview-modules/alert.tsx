/**
 * Preview module for Alert component
 * Migrated from ComponentPreview.tsx hardcoded examples
 */

import React from 'react';
import { Alert } from '@orion-ds/react';
import { CheckCircle } from 'lucide-react';

export const previews = [
  {
    title: 'All Variants',
    render: () => (
      <div style={{ display: 'grid', gap: 'var(--spacing-4)' }}>
        <Alert variant="info" title="Information">
          This is an informational alert message.
        </Alert>
        <Alert variant="success" title="Success" icon={<CheckCircle size={20} />}>
          Your changes have been saved successfully!
        </Alert>
        <Alert variant="warning" title="Warning">
          Please review your settings before continuing.
        </Alert>
        <Alert variant="error" title="Error">
          An error occurred while processing your request.
        </Alert>
      </div>
    ),
  },
];

export default previews;
