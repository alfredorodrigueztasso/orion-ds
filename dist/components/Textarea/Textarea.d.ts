/**
 * Textarea Component
 *
 * Multi-line text input with label, error states, and character counter.
 * Implements WCAG 2.1 AA accessibility guidelines.
 *
 * @example
 * ```tsx
 * <Textarea
 *   label="Description"
 *   placeholder="Enter description..."
 *   helperText="Provide detailed information"
 * />
 *
 * <Textarea
 *   label="Bio"
 *   maxLength={500}
 *   showCounter
 *   resize="vertical"
 * />
 *
 * <Textarea
 *   label="Comments"
 *   error="This field is required"
 *   size="lg"
 * />
 * ```
 */
import React from 'react';
import type { TextareaProps } from './Textarea.types';
export declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;
//# sourceMappingURL=Textarea.d.ts.map