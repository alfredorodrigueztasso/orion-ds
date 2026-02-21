/**
 * Preview module for InputOTP component
 * One-time password / verification code input
 */

import React, { useState } from 'react';
import { InputOTP } from '@orion-ds/react';

export const previews = [
  {
    title: 'Basic OTP Input (6 digits)',
    render: () => {
      const [value, setValue] = useState('');

      return (
        <div style={{ maxWidth: '400px' }}>
          <label style={{ display: 'block', marginBottom: 'var(--spacing-2)', fontSize: '0.875rem', fontWeight: 500 }}>
            Enter verification code
          </label>
          <InputOTP maxLength={6} value={value} onChange={setValue}>
            <InputOTP.Group>
              <InputOTP.Slot index={0} />
              <InputOTP.Slot index={1} />
              <InputOTP.Slot index={2} />
            </InputOTP.Group>
            <InputOTP.Separator />
            <InputOTP.Group>
              <InputOTP.Slot index={3} />
              <InputOTP.Slot index={4} />
              <InputOTP.Slot index={5} />
            </InputOTP.Group>
          </InputOTP>
          {value && (
            <p style={{ marginTop: 'var(--spacing-2)', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              Entered code: {value}
            </p>
          )}
        </div>
      );
    },
  },
  {
    title: '4-Digit PIN',
    render: () => {
      const [value, setValue] = useState('');

      return (
        <div style={{ maxWidth: '300px' }}>
          <label style={{ display: 'block', marginBottom: 'var(--spacing-2)', fontSize: '0.875rem', fontWeight: 500 }}>
            Enter PIN
          </label>
          <InputOTP maxLength={4} value={value} onChange={setValue}>
            <InputOTP.Group>
              <InputOTP.Slot index={0} />
              <InputOTP.Slot index={1} />
              <InputOTP.Slot index={2} />
              <InputOTP.Slot index={3} />
            </InputOTP.Group>
          </InputOTP>
        </div>
      );
    },
  },
  {
    title: 'Alphanumeric Code',
    render: () => {
      const [value, setValue] = useState('');

      return (
        <div style={{ maxWidth: '350px' }}>
          <label style={{ display: 'block', marginBottom: 'var(--spacing-2)', fontSize: '0.875rem', fontWeight: 500 }}>
            Activation Code
          </label>
          <InputOTP maxLength={5} type="alphanumeric" value={value} onChange={setValue}>
            <InputOTP.Group>
              <InputOTP.Slot index={0} />
              <InputOTP.Slot index={1} />
              <InputOTP.Slot index={2} />
              <InputOTP.Slot index={3} />
              <InputOTP.Slot index={4} />
            </InputOTP.Group>
          </InputOTP>
          <p style={{ marginTop: 'var(--spacing-2)', fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
            Enter the 5-character code (letters and numbers)
          </p>
        </div>
      );
    },
  },
];

export default previews;
