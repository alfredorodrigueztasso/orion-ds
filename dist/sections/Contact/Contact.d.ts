/**
 * Contact Component
 *
 * A contact section with form and contact information.
 * Supports multiple layouts and custom form fields.
 *
 * @example
 * ```tsx
 * <Contact
 *   eyebrow={<Badge>Contact</Badge>}
 *   title="Get in touch"
 *   description="We'd love to hear from you"
 *   contactInfo={[
 *     { icon: <Mail size={20} />, label: "Email", value: "hello@example.com", href: "mailto:hello@example.com" },
 *     { icon: <Phone size={20} />, label: "Phone", value: "+1 (555) 000-0000", href: "tel:+15550000000" },
 *     { icon: <MapPin size={20} />, label: "Address", value: "123 Main St, City, Country" }
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
import type { ContactProps } from './Contact.types';
export declare const Contact: import("react").ForwardRefExoticComponent<ContactProps & import("react").RefAttributes<HTMLElement>>;
//# sourceMappingURL=Contact.d.ts.map