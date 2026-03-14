# Contact Section

> Contact form with optional contact information, multiple layouts, and form handling.

## Quick Start

```tsx
import { Contact, Badge } from "@orion/react";
import { Mail, Phone, MapPin } from "lucide-react";

<Contact
  eyebrow={<Badge>Contact Us</Badge>}
  title="Get in touch"
  description="We'd love to hear from you. Send us a message and we'll respond as soon as possible."
  contactInfo={[
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "hello@example.com",
      href: "mailto:hello@example.com",
    },
    {
      icon: <Phone size={20} />,
      label: "Phone",
      value: "+1 (555) 000-0000",
      href: "tel:+15550000000",
    },
    {
      icon: <MapPin size={20} />,
      label: "Address",
      value: "123 Main St, San Francisco, CA",
    },
  ]}
  formFields={[
    { name: "name", label: "Name", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "message", label: "Message", type: "textarea", required: true },
  ]}
  onSubmit={(data) => console.log(data)}
/>;
```

---

## Features

- **3 Layout Options** — Split, Stacked, Form-only
- **Contact Info Display** — Email, phone, address with icons
- **Configurable Form** — Custom fields and validation
- **Form Handling** — onSubmit callback with form data
- **Custom Submit Button** — Override default button
- **Additional Content** — Add maps, social links, etc.
- **Brand-Aware** — Adapts to all Orion brands

---

## Props Reference

```typescript
interface ContactProps {
  // Header
  eyebrow?: ReactNode; // Badge/label above title
  title?: ReactNode; // Section title
  description?: ReactNode; // Section description

  // Contact Info
  contactInfo?: ContactInfo[]; // Contact methods

  // Form
  formFields?: ContactFormField[]; // Form field configuration
  onSubmit?: (data: Record<string, string>) => void;
  submitButton?: ReactNode; // Custom submit button
  submitText?: string; // Button text - default: "Send Message"

  // Layout
  layout?: "split" | "stacked" | "form-only"; // default: 'split'
  background?: "base" | "subtle" | "none"; // default: 'subtle'

  // Additional
  additionalContent?: ReactNode; // Content below contact info
}

interface ContactInfo {
  icon?: ReactNode; // Icon element
  label: string; // Label (e.g., "Email")
  value: string; // Display value
  href?: string; // Optional link (mailto:, tel:)
}

interface ContactFormField {
  name: string; // Field name
  label: string; // Field label
  type?: "text" | "email" | "tel" | "textarea"; // default: 'text'
  placeholder?: string; // Placeholder text
  required?: boolean; // Required field - default: false
  rows?: number; // Textarea rows - default: 4
}
```

---

## Layout Variants

### `layout="split"` (Default)

Contact info on left, form on right.

```tsx
<Contact
  layout="split"
  contactInfo={contactInfo}
  formFields={formFields}
  onSubmit={handleSubmit}
/>
```

### `layout="stacked"`

Contact info above form.

```tsx
<Contact
  layout="stacked"
  contactInfo={contactInfo}
  formFields={formFields}
  onSubmit={handleSubmit}
/>
```

### `layout="form-only"`

Just the form, no contact info.

```tsx
<Contact
  layout="form-only"
  title="Send us a message"
  formFields={formFields}
  onSubmit={handleSubmit}
/>
```

---

## Contact Information

### Email

```tsx
{
  icon: <Mail size={20} />,
  label: "Email",
  value: "hello@example.com",
  href: "mailto:hello@example.com"
}
```

### Phone

```tsx
{
  icon: <Phone size={20} />,
  label: "Phone",
  value: "+1 (555) 000-0000",
  href: "tel:+15550000000"
}
```

### Address

```tsx
{
  icon: <MapPin size={20} />,
  label: "Address",
  value: "123 Main St, San Francisco, CA 94105"
}
```

### Business Hours

```tsx
{
  icon: <Clock size={20} />,
  label: "Hours",
  value: "Mon-Fri, 9am-5pm PST"
}
```

---

## Form Fields

### Text Field

```tsx
{
  name: "name",
  label: "Full Name",
  type: "text",
  placeholder: "John Doe",
  required: true
}
```

### Email Field

```tsx
{
  name: "email",
  label: "Email Address",
  type: "email",
  placeholder: "john@example.com",
  required: true
}
```

### Phone Field

```tsx
{
  name: "phone",
  label: "Phone Number",
  type: "tel",
  placeholder: "+1 (555) 000-0000"
}
```

### Textarea

```tsx
{
  name: "message",
  label: "Message",
  type: "textarea",
  placeholder: "How can we help?",
  required: true,
  rows: 6
}
```

---

## Form Handling

### Basic Submit Handler

```tsx
<Contact
  formFields={formFields}
  onSubmit={(data) => {
    console.log(data);
    // { name: "John", email: "john@example.com", message: "Hello!" }
  }}
/>
```

### Async Submit with API

```tsx
function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (data: Record<string, string>) => {
    setIsSubmitting(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });
      alert("Message sent!");
    } catch (error) {
      alert("Error sending message");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Contact
      formFields={formFields}
      onSubmit={handleSubmit}
      submitText={isSubmitting ? "Sending..." : "Send Message"}
    />
  );
}
```

---

## Custom Submit Button

```tsx
<Contact
  formFields={formFields}
  onSubmit={handleSubmit}
  submitButton={
    <Button size="lg" iconRight={<ArrowRight size={20} />}>
      Send Message
    </Button>
  }
/>
```

---

## Additional Content

Add maps, social links, or other content below contact info.

### With Social Links

```tsx
import { Twitter, Linkedin, Github } from "lucide-react";

<Contact
  contactInfo={contactInfo}
  formFields={formFields}
  additionalContent={
    <div>
      <h4>Follow Us</h4>
      <div style={{ display: "flex", gap: "var(--spacing-3)" }}>
        <a href="#">
          <Twitter size={24} />
        </a>
        <a href="#">
          <Linkedin size={24} />
        </a>
        <a href="#">
          <Github size={24} />
        </a>
      </div>
    </div>
  }
/>;
```

### With Map

```tsx
<Contact
  contactInfo={contactInfo}
  formFields={formFields}
  additionalContent={
    <iframe
      src="https://maps.google.com/..."
      width="100%"
      height="200"
      style={{ borderRadius: "var(--radius-container)" }}
    />
  }
/>
```

---

## Complete Examples

### Full Contact Section

```tsx
import { Contact, Badge, Button } from "@orion/react";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";

<Contact
  eyebrow={<Badge variant="brand">Contact Us</Badge>}
  title="Let's work together"
  description="Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you within 24 hours."
  contactInfo={[
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "hello@orion.io",
      href: "mailto:hello@orion.io",
    },
    {
      icon: <Phone size={20} />,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: <MapPin size={20} />,
      label: "Office",
      value: "123 Design St, San Francisco, CA 94105",
    },
    {
      icon: <Clock size={20} />,
      label: "Hours",
      value: "Mon-Fri, 9am-6pm PST",
    },
  ]}
  formFields={[
    { name: "name", label: "Name", required: true, placeholder: "Your name" },
    {
      name: "email",
      label: "Email",
      type: "email",
      required: true,
      placeholder: "you@example.com",
    },
    {
      name: "company",
      label: "Company",
      placeholder: "Your company (optional)",
    },
    {
      name: "message",
      label: "Message",
      type: "textarea",
      required: true,
      placeholder: "Tell us about your project...",
      rows: 6,
    },
  ]}
  onSubmit={handleSubmit}
  submitButton={
    <Button size="lg" fullWidth iconRight={<ArrowRight size={20} />}>
      Send Message
    </Button>
  }
  layout="split"
  background="subtle"
/>;
```

### Simple Contact Form

```tsx
<Contact
  layout="form-only"
  title="Send us a message"
  formFields={[
    { name: "email", label: "Email", type: "email", required: true },
    { name: "message", label: "Message", type: "textarea", required: true },
  ]}
  onSubmit={handleSubmit}
  submitText="Submit"
/>
```

### Stacked Layout

```tsx
<Contact
  layout="stacked"
  title="Contact Us"
  contactInfo={[
    { icon: <Mail size={20} />, label: "Email", value: "support@example.com" },
  ]}
  formFields={[
    { name: "name", label: "Name", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    {
      name: "message",
      label: "How can we help?",
      type: "textarea",
      required: true,
    },
  ]}
  onSubmit={handleSubmit}
/>
```

---

## Accessibility

- Form fields have proper labels
- Required fields indicated visually and programmatically
- Error messages associated with fields
- Focus management for form validation
- Clickable contact info items are links

```tsx
// Good: Clear labels and placeholders
{
  name: "email",
  label: "Email Address",
  type: "email",
  placeholder: "you@example.com",
  required: true
}

// Avoid: Unclear field purpose
{
  name: "field1",
  label: "Input",
  placeholder: "Enter text"
}
```

---

## Anti-Patterns

### Too Many Form Fields

```tsx
// WRONG - Overwhelming users
formFields={[
  { name: "firstName", ... },
  { name: "lastName", ... },
  { name: "email", ... },
  { name: "phone", ... },
  { name: "company", ... },
  { name: "jobTitle", ... },
  { name: "website", ... },
  { name: "budget", ... },
  { name: "timeline", ... },
  { name: "message", ... }
]}

// CORRECT - Essential fields only
formFields={[
  { name: "name", label: "Name", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "message", label: "Message", type: "textarea", required: true }
]}
```

### Missing Required Validation

```tsx
// WRONG - No required fields, users can submit empty
formFields={[
  { name: "email", label: "Email" },
  { name: "message", label: "Message" }
]}

// CORRECT - Mark essential fields as required
formFields={[
  { name: "email", label: "Email", type: "email", required: true },
  { name: "message", label: "Message", type: "textarea", required: true }
]}
```

### No Submit Feedback

```tsx
// WRONG - User doesn't know if message was sent
onSubmit={(data) => {
  fetch('/api/contact', { body: JSON.stringify(data) });
  // No feedback!
}}

// CORRECT - Provide clear feedback
onSubmit={async (data) => {
  try {
    await fetch('/api/contact', { body: JSON.stringify(data) });
    showSuccessMessage("Message sent!");
  } catch (error) {
    showErrorMessage("Failed to send. Please try again.");
  }
}}
```

---

## When to Use Contact

| Scenario         | Recommendation                       |
| ---------------- | ------------------------------------ |
| Contact page     | Yes - split or stacked layout        |
| Support page     | Yes - form-only with specific fields |
| Footer contact   | Use `Newsletter` or simple form      |
| Landing page CTA | Consider `CTA` section instead       |

## When NOT to Use Contact

| Scenario            | Use Instead               |
| ------------------- | ------------------------- |
| Simple email signup | `Newsletter` section      |
| Support tickets     | Dedicated support form    |
| User registration   | Auth/signup flow          |
| Feedback widget     | Modal or toast-based form |

---

## Related Components

- **[Newsletter](../Newsletter/README.md)** — Email signup form
- **[CTA](../CTA/README.md)** — Call-to-action section
- **[Footer](../Footer/README.md)** — Footer with contact info
- **[Field](../../components/Field/README.md)** — Form field component
