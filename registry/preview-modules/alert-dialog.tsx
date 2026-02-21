/**
 * Preview module for AlertDialog component
 * Modal dialogs for confirmations and alerts using compound components
 */

import React, { useState } from 'react';
import { AlertDialog, Button } from '@orion-ds/react';
import { AlertTriangle, Trash2, Info } from 'lucide-react';

export const previews = [
  {
    title: 'Confirmation Dialog',
    render: () => {
      const [open, setOpen] = useState(false);

      return (
        <div>
          <Button onClick={() => setOpen(true)} variant="secondary">
            Open Dialog
          </Button>

          <AlertDialog open={open} onClose={() => setOpen(false)}>
            <AlertDialog.Icon variant="danger" />
            <AlertDialog.Title>Are you sure?</AlertDialog.Title>
            <AlertDialog.Description>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </AlertDialog.Description>
            <AlertDialog.Actions>
              <Button variant="ghost" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button
                variant="danger"
                onClick={() => {
                  alert('Account deleted');
                  setOpen(false);
                }}
              >
                Delete Account
              </Button>
            </AlertDialog.Actions>
          </AlertDialog>
        </div>
      );
    },
  },
  {
    title: 'Warning Dialog',
    render: () => {
      const [open, setOpen] = useState(false);

      return (
        <div>
          <Button onClick={() => setOpen(true)} variant="secondary" icon={<Trash2 size={20} />}>
            Delete Item
          </Button>

          <AlertDialog open={open} onClose={() => setOpen(false)}>
            <AlertDialog.Icon variant="warning">
              <AlertTriangle size={24} />
            </AlertDialog.Icon>
            <AlertDialog.Title>Delete this item?</AlertDialog.Title>
            <AlertDialog.Description>
              This item will be moved to trash. You can restore it within 30 days.
            </AlertDialog.Description>
            <AlertDialog.Actions>
              <Button variant="ghost" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button
                variant="danger"
                onClick={() => {
                  alert('Item deleted');
                  setOpen(false);
                }}
              >
                Delete
              </Button>
            </AlertDialog.Actions>
          </AlertDialog>
        </div>
      );
    },
  },
  {
    title: 'Info Dialog',
    render: () => {
      const [open, setOpen] = useState(false);

      return (
        <div>
          <Button onClick={() => setOpen(true)} variant="secondary" icon={<Info size={20} />}>
            Show Info
          </Button>

          <AlertDialog open={open} onClose={() => setOpen(false)}>
            <AlertDialog.Icon variant="info">
              <Info size={24} />
            </AlertDialog.Icon>
            <AlertDialog.Title>Important Update</AlertDialog.Title>
            <AlertDialog.Description>
              We've made some improvements to our service. Your experience should be
              faster and more reliable now.
            </AlertDialog.Description>
            <AlertDialog.Actions>
              <Button variant="primary" onClick={() => setOpen(false)}>
                Got it
              </Button>
            </AlertDialog.Actions>
          </AlertDialog>
        </div>
      );
    },
  },
];

export default previews;
