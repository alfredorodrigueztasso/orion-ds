/**
 * AlertDialog Component
 *
 * A confirmation dialog that forces a user response.
 * Unlike Modal, it does NOT close on backdrop click or Escape by default.
 *
 * @example
 * ```tsx
 * <AlertDialog open={open} onClose={handleClose}>
 *   <AlertDialog.Icon variant="danger" />
 *   <AlertDialog.Title>Delete account?</AlertDialog.Title>
 *   <AlertDialog.Description>This action cannot be undone.</AlertDialog.Description>
 *   <AlertDialog.Actions>
 *     <Button variant="ghost" onClick={handleClose}>Cancel</Button>
 *     <Button variant="primary" onClick={handleConfirm}>Delete</Button>
 *   </AlertDialog.Actions>
 * </AlertDialog>
 * ```
 */
import React from 'react';
import type { AlertDialogProps, AlertDialogIconProps, AlertDialogTitleProps, AlertDialogDescriptionProps, AlertDialogActionsProps } from './AlertDialog.types';
export declare const AlertDialog: React.FC<AlertDialogProps> & {
    Icon: React.FC<AlertDialogIconProps>;
    Title: React.FC<AlertDialogTitleProps>;
    Description: React.FC<AlertDialogDescriptionProps>;
    Actions: React.FC<AlertDialogActionsProps>;
};
//# sourceMappingURL=AlertDialog.d.ts.map