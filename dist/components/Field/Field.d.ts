/**
 * Field Component
 *
 * A type-safe, accessible input field with label, error states, and icon support.
 * Implements WCAG 2.1 AA accessibility guidelines.
 *
 * @example
 * ```tsx
 * <Field
 *   label="Email"
 *   type="email"
 *   placeholder="Enter your email"
 *   error="Invalid email address"
 * />
 *
 * <Field
 *   label="Search"
 *   leftIcon={<SearchIcon />}
 *   placeholder="Search..."
 * />
 * ```
 */
import type { FieldProps } from './Field.types';
export declare const Field: import("react").ForwardRefExoticComponent<FieldProps & import("react").RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=Field.d.ts.map