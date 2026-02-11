/**
 * Alert Component
 *
 * Notification and message alert component with status variants.
 * Uses Lucide icons for consistent iconography across the design system.
 *
 * @example
 * ```tsx
 * <Alert variant="success" title="Success!">
 *   Your changes have been saved successfully.
 * </Alert>
 *
 * <Alert variant="error" dismissible onClose={() => console.log('closed')}>
 *   An error occurred while processing your request.
 * </Alert>
 *
 * <Alert variant="warning" title="Warning">
 *   This action cannot be undone.
 * </Alert>
 *
 * <Alert variant="info" icon={<InfoIcon />}>
 *   Custom icon example
 * </Alert>
 * ```
 */
import React from 'react';
import type { AlertProps } from './Alert.types';
export declare const Alert: React.FC<AlertProps>;
//# sourceMappingURL=Alert.d.ts.map