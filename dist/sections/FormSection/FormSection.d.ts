/**
 * FormSection Component
 *
 * A form section for settings pages and structured form layouts.
 * Optimized for Product Mode with clear hierarchy and efficient space usage.
 *
 * @example
 * ```tsx
 * <FormSection
 *   title="Profile Information"
 *   description="Update your personal details"
 *   actions={<Button>Save</Button>}
 * >
 *   <FormSection.Group columns={2}>
 *     <Field label="First Name" type="text" />
 *     <Field label="Last Name" type="text" />
 *   </FormSection.Group>
 *   <Field label="Email" type="email" />
 * </FormSection>
 * ```
 */
import type { FormSectionProps, FormSectionGroupProps, FormSectionActionsProps } from './FormSection.types';
export declare const FormSection: import("react").ForwardRefExoticComponent<FormSectionProps & import("react").RefAttributes<HTMLDivElement>> & {
    Group: import("react").ForwardRefExoticComponent<FormSectionGroupProps & import("react").RefAttributes<HTMLDivElement>>;
    Actions: import("react").ForwardRefExoticComponent<FormSectionActionsProps & import("react").RefAttributes<HTMLDivElement>>;
};
//# sourceMappingURL=FormSection.d.ts.map