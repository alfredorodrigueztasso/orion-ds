/**
 * Select Component
 *
 * A styled dropdown select with label, error states, and custom styling.
 *
 * @example
 * ```tsx
 * <Select
 *   label="Country"
 *   options={[
 *     { value: 'us', label: 'United States' },
 *     { value: 'uk', label: 'United Kingdom' },
 *     { value: 'ca', label: 'Canada' }
 *   ]}
 *   placeholder="Select a country"
 * />
 *
 * <Select label="Status" error="Please select a status">
 *   <option value="">Choose status</option>
 *   <option value="active">Active</option>
 *   <option value="inactive">Inactive</option>
 * </Select>
 * ```
 */
import type { SelectProps } from './Select.types';
export declare const Select: import("react").ForwardRefExoticComponent<SelectProps & import("react").RefAttributes<HTMLSelectElement>>;
//# sourceMappingURL=Select.d.ts.map