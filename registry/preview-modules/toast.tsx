/**
 * Preview module for Toast component
 * Notification messages using provider/hook pattern
 */

import React from 'react';
import { ToastProvider, useToast, Button } from '@orion-ds/react';
import { CheckCircle, AlertCircle, Info, XCircle } from 'lucide-react';

// Internal component that uses the useToast hook
function ToastDemo() {
  const { toast } = useToast();

  return (
    <div style={{ display: 'flex', gap: 'var(--spacing-3)', flexWrap: 'wrap' }}>
      <Button
        onClick={() => toast({
          message: 'Your changes have been saved successfully!',
          variant: 'success',
          duration: 3000
        })}
        variant="secondary"
      >
        Show Success
      </Button>
      <Button
        onClick={() => toast({
          message: 'An error occurred. Please try again.',
          variant: 'error',
          duration: 3000
        })}
        variant="secondary"
      >
        Show Error
      </Button>
      <Button
        onClick={() => toast({
          message: 'Please review your input before submitting.',
          variant: 'warning',
          duration: 3000
        })}
        variant="secondary"
      >
        Show Warning
      </Button>
      <Button
        onClick={() => toast({
          message: 'New updates are available for download.',
          variant: 'info',
          duration: 3000
        })}
        variant="secondary"
      >
        Show Info
      </Button>
    </div>
  );
}

export const previews = [
  {
    title: 'Toast Notifications',
    render: () => (
      <ToastProvider>
        <ToastDemo />
      </ToastProvider>
    ),
  },
  {
    title: 'Usage Example',
    render: () => (
      <div style={{
        padding: 'var(--spacing-4)',
        background: 'var(--surface-subtle)',
        borderRadius: 'var(--radius-control)',
        fontSize: '0.875rem'
      }}>
        <h4 style={{ margin: 0, marginBottom: 'var(--spacing-2)' }}>How to use:</h4>
        <pre style={{
          margin: 0,
          padding: 'var(--spacing-3)',
          background: 'var(--surface-base)',
          borderRadius: 'var(--radius-sm)',
          overflow: 'auto'
        }}>
{`// Wrap your app with ToastProvider
<ToastProvider>
  <App />
</ToastProvider>

// Use in any component
const { toast } = useToast();

toast({
  message: 'Hello!',
  variant: 'success'
});`}
        </pre>
      </div>
    ),
  },
];

export default previews;
