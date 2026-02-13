/**
 * Contact Component Types
 *
 * Type definitions for the Orion Contact section component.
 */

import type { HTMLAttributes, ReactNode } from 'react';

/**
 * Contact layout variant
 */
export type ContactLayout = 'split' | 'stacked' | 'form-only';

/**
 * Contact info item (phone, email, address, etc.)
 */
export interface ContactInfo {
  /**
   * Icon element for the contact method
   */
  icon?: ReactNode;

  /**
   * Label (e.g., "Email", "Phone", "Address")
   */
  label: string;

  /**
   * Value (e.g., "hello@example.com")
   */
  value: string;

  /**
   * Optional href for clickable items (mailto:, tel:)
   */
  href?: string;
}

/**
 * Form field configuration
 */
export interface ContactFormField {
  /**
   * Field name (for form data)
   */
  name: string;

  /**
   * Field label
   */
  label: string;

  /**
   * Field type
   * @default 'text'
   */
  type?: 'text' | 'email' | 'tel' | 'textarea';

  /**
   * Placeholder text
   */
  placeholder?: string;

  /**
   * Whether the field is required
   * @default false
   */
  required?: boolean;

  /**
   * Number of rows (for textarea only)
   * @default 4
   */
  rows?: number;
}

/**
 * Contact section props
 *
 * @example
 * ```tsx
 * <Contact
 *   title="Get in touch"
 *   description="We'd love to hear from you"
 *   contactInfo={[
 *     { icon: <Mail />, label: "Email", value: "hello@example.com", href: "mailto:hello@example.com" },
 *     { icon: <Phone />, label: "Phone", value: "+1 (555) 000-0000", href: "tel:+15550000000" }
 *   ]}
 *   formFields={[
 *     { name: "name", label: "Name", required: true },
 *     { name: "email", label: "Email", type: "email", required: true },
 *     { name: "message", label: "Message", type: "textarea", required: true }
 *   ]}
 *   onSubmit={(data) => console.log(data)}
 * />
 * ```
 */
export interface ContactProps extends Omit<HTMLAttributes<HTMLElement>, 'title' | 'onSubmit'> {
  /**
   * Optional eyebrow/badge above title
   */
  eyebrow?: ReactNode;

  /**
   * Section title
   */
  title?: ReactNode;

  /**
   * Section description
   */
  description?: ReactNode;

  /**
   * Contact information items
   */
  contactInfo?: ContactInfo[];

  /**
   * Form fields configuration
   */
  formFields?: ContactFormField[];

  /**
   * Form submit handler - receives form data as an object
   */
  onSubmit?: (data: Record<string, string>) => void;

  /**
   * Custom submit button element
   */
  submitButton?: ReactNode;

  /**
   * Submit button text (if not using custom button)
   * @default "Send Message"
   */
  submitText?: string;

  /**
   * Layout variant
   * - split: Info on left, form on right
   * - stacked: Info above form
   * - form-only: Just the form, no contact info
   * @default 'split'
   */
  layout?: ContactLayout;

  /**
   * Background style
   * @default 'subtle'
   */
  background?: 'base' | 'subtle' | 'none';

  /**
   * Additional content below contact info (e.g., social links, map)
   */
  additionalContent?: ReactNode;
}
