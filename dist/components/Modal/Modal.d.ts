/**
 * Modal Component
 *
 * Dialog/overlay component with backdrop and animation.
 *
 * @example
 * ```tsx
 * <Modal open={isOpen} onClose={() => setIsOpen(false)}>
 *   <Modal.Header>Confirm Action</Modal.Header>
 *   <Modal.Body>
 *     Are you sure you want to proceed?
 *   </Modal.Body>
 *   <Modal.Footer>
 *     <Button variant="secondary" onClick={() => setIsOpen(false)}>
 *       Cancel
 *     </Button>
 *     <Button variant="primary" onClick={handleConfirm}>
 *       Confirm
 *     </Button>
 *   </Modal.Footer>
 * </Modal>
 * ```
 */
import React from 'react';
import type { ModalProps, ModalHeaderProps, ModalBodyProps, ModalFooterProps } from './Modal.types';
export declare const Modal: React.FC<ModalProps> & {
    Header: React.FC<ModalHeaderProps>;
    Body: React.FC<ModalBodyProps>;
    Footer: React.FC<ModalFooterProps>;
};
//# sourceMappingURL=Modal.d.ts.map