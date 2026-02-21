/**
 * Preview module for Modal component
 * Dialog/overlay component with compound components
 */

import React, { useState } from 'react';
import { Modal, Button } from '@orion-ds/react';
import { AlertTriangle, Info } from 'lucide-react';

export const previews = [
  {
    title: 'Basic Modal',
    render: () => {
      const [open, setOpen] = useState(false);

      return (
        <div>
          <Button onClick={() => setOpen(true)}>Open Modal</Button>

          <Modal open={open} onClose={() => setOpen(false)}>
            <Modal.Header>Confirm Action</Modal.Header>
            <Modal.Body>
              <p style={{ margin: 0 }}>
                Are you sure you want to proceed with this action? This will update your settings.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="ghost" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setOpen(false)}>
                Confirm
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    },
  },
  {
    title: 'Delete Confirmation',
    render: () => {
      const [open, setOpen] = useState(false);

      return (
        <div>
          <Button variant="danger" onClick={() => setOpen(true)}>
            Delete Item
          </Button>

          <Modal open={open} onClose={() => setOpen(false)} size="sm">
            <Modal.Header>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
                <AlertTriangle size={20} style={{ color: 'var(--status-error)' }} />
                <span>Delete Item</span>
              </div>
            </Modal.Header>
            <Modal.Body>
              <p style={{ margin: 0 }}>
                This action cannot be undone. This will permanently delete the item from your account.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="ghost" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button variant="danger" onClick={() => setOpen(false)}>
                Delete
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    },
  },
  {
    title: 'Information Modal',
    render: () => {
      const [open, setOpen] = useState(false);

      return (
        <div>
          <Button variant="secondary" icon={<Info size={20} />} onClick={() => setOpen(true)}>
            View Details
          </Button>

          <Modal open={open} onClose={() => setOpen(false)} size="md">
            <Modal.Header>Product Information</Modal.Header>
            <Modal.Body>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
                <div>
                  <h4 style={{ fontSize: '0.875rem', fontWeight: 600, margin: 0, marginBottom: 'var(--spacing-1)' }}>
                    Description
                  </h4>
                  <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                    This is a detailed description of the product with all relevant information.
                  </p>
                </div>
                <div>
                  <h4 style={{ fontSize: '0.875rem', fontWeight: 600, margin: 0, marginBottom: 'var(--spacing-1)' }}>
                    Specifications
                  </h4>
                  <ul style={{ margin: 0, paddingLeft: 'var(--spacing-5)', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                    <li>Weight: 500g</li>
                    <li>Dimensions: 10cm x 20cm x 5cm</li>
                    <li>Material: Aluminum</li>
                  </ul>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={() => setOpen(false)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    },
  },
];

export default previews;
