# ContactPageTemplate

> Complete contact page with hero, location gallery, contact form with info, FAQ, and footer.

## Quick Start

```tsx
import { ContactPageTemplate, Button, Navbar } from '@orion/react';
import { Mail, Phone, MapPin } from 'lucide-react';

<ContactPageTemplate
  navbar={{
    variant: 'solid',
    sticky: true,
    children: (
      <>
        <Navbar.Brand href="/">Acme</Navbar.Brand>
        <Navbar.Nav>
          <Navbar.Link href="/about">About</Navbar.Link>
          <Navbar.Link href="/contact">Contact</Navbar.Link>
        </Navbar.Nav>
      </>
    ),
  }}
  hero={{
    headline: 'Get in touch',
    description: "We'd love to hear from you. Our team is here to help.",
    align: 'center',
    size: 'md',
  }}
  contact={{
    title: 'Contact Us',
    description: 'Fill out the form and we\'ll get back to you within 24 hours.',
    contactInfo: [
      { icon: <Mail size={20} />, label: 'Email', value: 'hello@acme.com', href: 'mailto:hello@acme.com' },
      { icon: <Phone size={20} />, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
      { icon: <MapPin size={20} />, label: 'Office', value: '123 Main St, San Francisco, CA' },
    ],
    formFields: [
      { name: 'name', label: 'Name', type: 'text', required: true },
      { name: 'email', label: 'Email', type: 'email', required: true },
      { name: 'message', label: 'Message', type: 'textarea', required: true },
    ],
    onSubmit: (data) => console.log('Form submitted:', data),
  }}
  footer={{ ... }}
/>
```

---

## Features

- **Navbar** — Site navigation
- **Hero Section** — Contact page headline (typically smaller)
- **Location Gallery** — Office/location photo carousel
- **Contact Section** — Form + contact info side by side
- **FAQ Section** — Common questions (optional)
- **Footer** — Standard page footer

---

## Sections Used

| Section | Required | Purpose |
|---------|----------|---------|
| `Navbar` | No | Top navigation |
| `Hero` | **Yes** | Page hero section |
| `CarouselSection` (locations) | No | Office/location photos |
| `Contact` | **Yes** | Contact form + info |
| `FAQ` | No | Common questions |
| `Footer` | No | Page footer |

---

## Props Reference

```typescript
interface ContactPageTemplateProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /**
   * Navbar configuration
   */
  navbar?: NavbarProps & { children?: ReactNode };

  /**
   * Hero section (required) - typically smaller for contact pages
   */
  hero: HeroProps;

  /**
   * Gallery carousel for office locations/photos
   */
  locationsCarousel?: Omit<CarouselSectionProps, 'variant'>;

  /**
   * Contact section with form and info (required)
   */
  contact: ContactProps;

  /**
   * FAQ section for common questions
   */
  faq?: FAQProps;

  /**
   * Footer section
   */
  footer?: FooterProps;

  /**
   * Additional children rendered before footer
   */
  children?: ReactNode;
}
```

---

## Complete Examples

### Full Contact Page

```tsx
import { ContactPageTemplate, Button, Badge, Navbar } from '@orion/react';
import { Mail, Phone, MapPin, Clock, Twitter, Linkedin } from 'lucide-react';

function ContactPage() {
  const handleSubmit = async (data) => {
    // Handle form submission
    await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  };

  return (
    <ContactPageTemplate
      navbar={{
        variant: 'solid',
        sticky: true,
        children: (
          <>
            <Navbar.Brand href="/">
              <img src="/logo.svg" alt="Acme" height={32} />
            </Navbar.Brand>
            <Navbar.Nav>
              <Navbar.Link href="/">Home</Navbar.Link>
              <Navbar.Link href="/about">About</Navbar.Link>
              <Navbar.Link href="/contact" active>Contact</Navbar.Link>
            </Navbar.Nav>
            <Navbar.Actions>
              <Button variant="ghost">Sign In</Button>
              <Button>Get Started</Button>
            </Navbar.Actions>
          </>
        ),
      }}
      hero={{
        badge: <Badge>Contact</Badge>,
        headline: 'Get in touch',
        description: "Have a question or want to work together? We'd love to hear from you.",
        align: 'center',
        size: 'md',
      }}
      locationsCarousel={{
        title: 'Our Offices',
        description: 'Visit us at one of our global locations',
        items: [
          {
            image: <img src="/offices/sf.jpg" alt="San Francisco Office" />,
            title: 'San Francisco',
            description: 'Headquarters',
          },
          {
            image: <img src="/offices/nyc.jpg" alt="New York Office" />,
            title: 'New York',
            description: 'East Coast Hub',
          },
          {
            image: <img src="/offices/london.jpg" alt="London Office" />,
            title: 'London',
            description: 'European Office',
          },
        ],
      }}
      contact={{
        title: 'Send us a message',
        description: "Fill out the form below and we'll respond within 24 hours.",
        contactInfo: [
          {
            icon: <Mail size={20} />,
            label: 'Email',
            value: 'hello@acme.com',
            href: 'mailto:hello@acme.com',
          },
          {
            icon: <Phone size={20} />,
            label: 'Phone',
            value: '+1 (555) 123-4567',
            href: 'tel:+15551234567',
          },
          {
            icon: <MapPin size={20} />,
            label: 'Address',
            value: '123 Main Street, San Francisco, CA 94105',
          },
          {
            icon: <Clock size={20} />,
            label: 'Hours',
            value: 'Mon-Fri 9am-6pm PST',
          },
        ],
        formFields: [
          {
            name: 'name',
            label: 'Full Name',
            type: 'text',
            placeholder: 'John Doe',
            required: true,
          },
          {
            name: 'email',
            label: 'Email Address',
            type: 'email',
            placeholder: 'john@example.com',
            required: true,
          },
          {
            name: 'company',
            label: 'Company',
            type: 'text',
            placeholder: 'Acme Inc',
          },
          {
            name: 'subject',
            label: 'Subject',
            type: 'select',
            options: [
              { value: 'general', label: 'General Inquiry' },
              { value: 'sales', label: 'Sales' },
              { value: 'support', label: 'Technical Support' },
              { value: 'partnership', label: 'Partnership' },
            ],
            required: true,
          },
          {
            name: 'message',
            label: 'Message',
            type: 'textarea',
            placeholder: 'How can we help you?',
            rows: 5,
            required: true,
          },
        ],
        submitLabel: 'Send Message',
        onSubmit: handleSubmit,
        successMessage: 'Thank you! We\'ll be in touch soon.',
      }}
      faq={{
        eyebrow: 'FAQ',
        title: 'Frequently asked questions',
        items: [
          {
            question: 'What is your response time?',
            answer: 'We typically respond to all inquiries within 24 business hours.',
          },
          {
            question: 'Do you offer phone support?',
            answer: 'Yes, phone support is available for Pro and Enterprise customers Monday through Friday, 9am-6pm PST.',
          },
          {
            question: 'Can I schedule a demo?',
            answer: 'Absolutely! Contact our sales team using the form above and select "Sales" as the subject.',
          },
          {
            question: 'Where are you located?',
            answer: 'Our headquarters is in San Francisco, with additional offices in New York and London.',
          },
        ],
        columns: 2,
      }}
      footer={{
        brand: {
          name: 'Acme Inc',
          description: 'Building the future of development.',
        },
        linkGroups: [
          {
            title: 'Company',
            links: [
              { label: 'About', href: '/about' },
              { label: 'Careers', href: '/careers' },
              { label: 'Contact', href: '/contact' },
            ],
          },
          {
            title: 'Product',
            links: [
              { label: 'Features', href: '/features' },
              { label: 'Pricing', href: '/pricing' },
            ],
          },
        ],
        socialLinks: [
          { label: 'Twitter', href: 'https://twitter.com', icon: <Twitter size={20} /> },
          { label: 'LinkedIn', href: 'https://linkedin.com', icon: <Linkedin size={20} /> },
        ],
        copyright: `${new Date().getFullYear()} Acme Inc. All rights reserved.`,
      }}
    />
  );
}
```

### Minimal Contact Page

```tsx
<ContactPageTemplate
  hero={{
    headline: 'Contact Us',
    description: "We'd love to hear from you.",
    align: 'center',
    size: 'md',
  }}
  contact={{
    contactInfo: [
      { icon: <Mail size={20} />, label: 'Email', value: 'hello@acme.com' },
    ],
    formFields: [
      { name: 'name', label: 'Name', type: 'text', required: true },
      { name: 'email', label: 'Email', type: 'email', required: true },
      { name: 'message', label: 'Message', type: 'textarea', required: true },
    ],
    onSubmit: handleSubmit,
  }}
  footer={{
    brand: { name: 'Acme' },
    copyright: '2024 Acme Inc.',
  }}
/>
```

### Sales Contact Page

```tsx
<ContactPageTemplate
  hero={{
    badge: <Badge>Sales</Badge>,
    headline: 'Talk to Sales',
    description: 'Get a personalized demo and pricing for your team.',
    align: 'center',
    size: 'md',
  }}
  contact={{
    title: 'Request a Demo',
    description: 'Fill out the form and our sales team will contact you.',
    contactInfo: [
      { icon: <Mail size={20} />, label: 'Sales Email', value: 'sales@acme.com' },
      { icon: <Phone size={20} />, label: 'Sales Hotline', value: '+1 (555) 999-8888' },
    ],
    formFields: [
      { name: 'firstName', label: 'First Name', type: 'text', required: true },
      { name: 'lastName', label: 'Last Name', type: 'text', required: true },
      { name: 'workEmail', label: 'Work Email', type: 'email', required: true },
      { name: 'company', label: 'Company', type: 'text', required: true },
      { name: 'teamSize', label: 'Team Size', type: 'select', options: [
        { value: '1-10', label: '1-10' },
        { value: '11-50', label: '11-50' },
        { value: '51-200', label: '51-200' },
        { value: '200+', label: '200+' },
      ], required: true },
      { name: 'message', label: 'How can we help?', type: 'textarea' },
    ],
    submitLabel: 'Request Demo',
    onSubmit: handleSubmit,
  }}
  footer={{ ... }}
/>
```

### Support Contact Page

```tsx
<ContactPageTemplate
  hero={{
    headline: 'Support Center',
    description: 'Need help? Our support team is here for you.',
    align: 'center',
    size: 'md',
  }}
  contact={{
    title: 'Get Support',
    contactInfo: [
      { icon: <Mail size={20} />, label: 'Support', value: 'support@acme.com' },
      { icon: <Clock size={20} />, label: 'Hours', value: '24/7 for Enterprise' },
    ],
    formFields: [
      { name: 'email', label: 'Email', type: 'email', required: true },
      { name: 'category', label: 'Issue Category', type: 'select', options: [
        { value: 'bug', label: 'Bug Report' },
        { value: 'account', label: 'Account Issue' },
        { value: 'billing', label: 'Billing' },
        { value: 'other', label: 'Other' },
      ], required: true },
      { name: 'description', label: 'Description', type: 'textarea', required: true },
    ],
    onSubmit: handleSubmit,
  }}
  faq={{
    title: 'Common Issues',
    items: [
      { question: 'How do I reset my password?', answer: 'Click "Forgot Password" on the login page.' },
      { question: 'How do I upgrade my plan?', answer: 'Go to Settings > Billing > Change Plan.' },
    ],
  }}
  footer={{ ... }}
/>
```

---

## Customization

### Custom Sections

Use `children` to add custom content.

```tsx
<ContactPageTemplate
  hero={{ ... }}
  contact={{ ... }}
>
  {/* Custom content before footer */}
  <section className="map-section">
    <h2>Find Us</h2>
    <GoogleMap location={officeLocation} />
  </section>
</ContactPageTemplate>
```

---

## Accessibility

- Form fields have proper labels
- Required fields are indicated
- Error messages are announced to screen readers
- Contact info links have accessible text
- Form submission feedback is announced

---

## Anti-Patterns

### Missing Required Sections

```tsx
// WRONG - Both hero and contact are required
<ContactPageTemplate
  faq={{ items: [...] }}
/>

// CORRECT
<ContactPageTemplate
  hero={{ headline: 'Contact Us' }}
  contact={{ formFields: [...], onSubmit: handleSubmit }}
/>
```

### Missing Form Handler

```tsx
// WRONG - Form won't work without onSubmit
<ContactPageTemplate
  hero={{ headline: 'Contact' }}
  contact={{
    formFields: [...],
    // onSubmit is missing!
  }}
/>

// CORRECT
<ContactPageTemplate
  hero={{ headline: 'Contact' }}
  contact={{
    formFields: [...],
    onSubmit: (data) => handleFormSubmit(data),
  }}
/>
```

### Using Wrong Sections

```tsx
// WRONG - Pricing is for pricing pages
<ContactPageTemplate
  hero={{ headline: 'Contact' }}
  contact={{ ... }}
  pricing={{ plans: [...] }}  // Wrong section type
/>

// CORRECT - Use contact-specific sections
<ContactPageTemplate
  hero={{ headline: 'Contact' }}
  contact={{ ... }}
  faq={{ items: [...] }}
/>
```

---

## When to Use

| Scenario | Recommendation |
|----------|----------------|
| Contact us page | Yes |
| Sales inquiry page | Yes |
| Support request page | Yes |
| Partnership inquiry | Yes |

## When NOT to Use

| Scenario | Use Instead |
|----------|-------------|
| Product landing | `LandingPageTemplate` |
| Company about | `AboutPageTemplate` |
| Pricing page | `PricingPageTemplate` |
| User profile | `ProfilePageTemplate` |
| Settings page | `SettingsTemplate` |

---

## Related

- **[Hero](../../../sections/Hero/README.md)** — Hero section
- **[Contact](../../../sections/Contact/README.md)** — Contact form section
- **[FAQ](../../../sections/FAQ/README.md)** — FAQ accordion
- **[CarouselSection](../../../sections/CarouselSection/README.md)** — Location gallery
