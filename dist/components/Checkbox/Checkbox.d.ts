/**
 * Checkbox Component
 *
 * Multi-select checkbox input with label and validation.
 * Implements WCAG 2.1 AA accessibility guidelines.
 *
 * @example
 * ```tsx
 * <Checkbox label="Accept terms and conditions" />
 *
 * <Checkbox
 *   label="Remember me"
 *   checked={remember}
 *   onChange={(e) => setRemember(e.target.checked)}
 * />
 *
 * <Checkbox
 *   label="Subscribe to newsletter"
 *   helperText="We'll send updates weekly"
 * />
 *
 * <Checkbox
 *   label="Select all"
 *   indeterminate={someSelected}
 *   checked={allSelected}
 * />
 * ```
 */
import React from 'react';
import type { CheckboxProps } from './Checkbox.types';
export declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=Checkbox.d.ts.map