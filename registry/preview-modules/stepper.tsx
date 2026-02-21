/**
 * Preview module for Stepper component
 * Multi-step process indicator
 */

import React, { useState } from 'react';
import { Stepper, Button } from '@orion-ds/react';

export const previews = [
  {
    title: 'Basic Stepper',
    render: () => {
      const steps = [
        { id: '1', label: 'Account', status: 'completed' as const },
        { id: '2', label: 'Profile', status: 'current' as const },
        { id: '3', label: 'Review', status: 'pending' as const },
      ];

      return (
        <div style={{ maxWidth: '600px' }}>
          <Stepper steps={steps} current={1} />
        </div>
      );
    },
  },
  {
    title: 'Interactive Stepper',
    render: () => {
      const [current, setCurrent] = useState(0);

      const steps = [
        {
          id: '1',
          label: 'Personal Info',
          description: 'Enter your details',
          status: current > 0 ? 'completed' as const : current === 0 ? 'current' as const : 'pending' as const,
        },
        {
          id: '2',
          label: 'Address',
          description: 'Your location',
          status: current > 1 ? 'completed' as const : current === 1 ? 'current' as const : 'pending' as const,
        },
        {
          id: '3',
          label: 'Payment',
          description: 'Billing information',
          status: current > 2 ? 'completed' as const : current === 2 ? 'current' as const : 'pending' as const,
        },
        {
          id: '4',
          label: 'Confirmation',
          description: 'Review and submit',
          status: current > 3 ? 'completed' as const : current === 3 ? 'current' as const : 'pending' as const,
        },
      ];

      return (
        <div style={{ display: 'grid', gap: 'var(--spacing-4)', maxWidth: '600px' }}>
          <Stepper steps={steps} current={current} />
          <div style={{ display: 'flex', gap: 'var(--spacing-3)', justifyContent: 'space-between' }}>
            <Button
              variant="secondary"
              onClick={() => setCurrent(Math.max(0, current - 1))}
              disabled={current === 0}
            >
              Previous
            </Button>
            <Button
              variant="primary"
              onClick={() => setCurrent(Math.min(3, current + 1))}
              disabled={current === 3}
            >
              {current === 3 ? 'Submit' : 'Next'}
            </Button>
          </div>
        </div>
      );
    },
  },
  {
    title: 'Vertical Stepper',
    render: () => {
      const steps = [
        { id: '1', label: 'Order Placed', status: 'completed' as const },
        { id: '2', label: 'Processing', status: 'completed' as const },
        { id: '3', label: 'Shipped', status: 'current' as const },
        { id: '4', label: 'Delivered', status: 'pending' as const },
      ];

      return (
        <div style={{ maxWidth: '400px' }}>
          <Stepper steps={steps} current={2} orientation="vertical" />
        </div>
      );
    },
  },
  {
    title: 'With Error State',
    render: () => {
      const steps = [
        { id: '1', label: 'Start', status: 'completed' as const },
        { id: '2', label: 'Verification', status: 'error' as const },
        { id: '3', label: 'Complete', status: 'pending' as const },
      ];

      return (
        <div style={{ maxWidth: '600px' }}>
          <Stepper steps={steps} current={1} />
        </div>
      );
    },
  },
];

export default previews;
