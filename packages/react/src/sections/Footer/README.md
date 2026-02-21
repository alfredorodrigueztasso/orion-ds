# Footer Section

> Page footer with brand info, navigation links, social links, and legal information.

## Quick Start

```tsx
import { Footer } from "@orion/react";
import { Twitter, Github, Linkedin } from "lucide-react";

<Footer
  brand={{
    name: "Orion",
    description: "The AI-first design system",
  }}
  linkGroups={[
    {
      title: "Product",
      links: [
        { label: "Features", href: "/features" },
        { label: "Pricing", href: "/pricing" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Blog", href: "/blog" },
      ],
    },
  ]}
  socialLinks={[
    {
      label: "Twitter",
      href: "https://twitter.com/orion",
      icon: <Twitter size={20} />,
    },
    {
      label: "GitHub",
      href: "https://github.com/orion",
      icon: <Github size={20} />,
    },
  ]}
  copyright="© 2024 Orion. All rights reserved."
  legalLinks={[
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ]}
/>;
```

---

## Features

- **3 Layout Variants** — Default, Minimal, Centered
- **Brand Section** — Logo, name, and description
- **Link Groups** — Organized navigation columns
- **Social Links** — Platform icons with accessibility
- **Newsletter Slot** — Custom newsletter signup integration
- **Legal Section** — Copyright and legal links
- **Brand-Aware** — Adapts to all Orion brands automatically

---

## Props Reference

```typescript
interface FooterProps {
  // Brand
  brand?: FooterBrand; // Brand info section

  // Navigation
  linkGroups?: FooterLinkGroup[]; // Columns of navigation links
  socialLinks?: FooterSocialLink[]; // Social media links
  legalLinks?: FooterLink[]; // Legal links (privacy, terms)

  // Content
  newsletter?: ReactNode; // Newsletter signup component
  copyright?: string; // Copyright text

  // Styling
  variant?: "default" | "minimal" | "centered"; // default: 'default'
  background?: "base" | "subtle" | "sunken"; // default: 'subtle'
}

interface FooterBrand {
  name: string; // Brand name
  logo?: ReactNode; // Brand logo element
  description?: string; // Brand tagline
}

interface FooterLinkGroup {
  title: string; // Group title
  links: FooterLink[]; // Links in group
}

interface FooterLink {
  label: string; // Link text
  href: string; // Link URL
  external?: boolean; // Open in new tab - default: false
}

interface FooterSocialLink {
  label: string; // Platform name (for accessibility)
  href: string; // Profile URL
  icon: ReactNode; // Icon element
}
```

---

## Layout Variants

### `variant="default"` (Default)

Full footer with brand column, link groups, and bottom bar.

```tsx
<Footer
  variant="default"
  brand={{ name: "Orion", description: "Building the future." }}
  linkGroups={[
    { title: "Product", links: [...] },
    { title: "Company", links: [...] },
    { title: "Resources", links: [...] },
  ]}
  socialLinks={[...]}
  copyright="© 2024 Orion"
/>
```

### `variant="minimal"`

Compact footer with essential info only.

```tsx
<Footer
  variant="minimal"
  brand={{ name: "Orion" }}
  socialLinks={[
    { label: "Twitter", href: "#", icon: <Twitter size={20} /> },
    { label: "GitHub", href: "#", icon: <Github size={20} /> },
  ]}
  copyright="© 2024 Orion"
  legalLinks={[
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ]}
/>
```

### `variant="centered"`

Centered layout for simple landing pages.

```tsx
<Footer
  variant="centered"
  brand={{ name: "Orion", description: "Simple design, powerful results." }}
  socialLinks={[...]}
  copyright="© 2024 Orion. All rights reserved."
/>
```

---

## Brand Section

### Basic Brand

```tsx
<Footer
  brand={{
    name: "Acme Inc",
  }}
/>
```

### With Logo

```tsx
<Footer
  brand={{
    name: "Acme Inc",
    logo: <img src="/logo.svg" alt="" height={32} />,
  }}
/>
```

### With Description

```tsx
<Footer
  brand={{
    name: "Acme Inc",
    logo: <img src="/logo.svg" alt="" height={32} />,
    description: "Making the world a better place through innovative software.",
  }}
/>
```

---

## Link Groups

Organize navigation into logical columns.

```tsx
<Footer
  linkGroups={[
    {
      title: "Product",
      links: [
        { label: "Features", href: "/features" },
        { label: "Pricing", href: "/pricing" },
        { label: "Integrations", href: "/integrations" },
        { label: "Changelog", href: "/changelog" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Careers", href: "/careers" },
        { label: "Press", href: "/press" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "/docs" },
        { label: "API Reference", href: "/api" },
        { label: "Community", href: "/community" },
        { label: "Support", href: "/support" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
        { label: "Security", href: "/security" },
      ],
    },
  ]}
/>
```

### External Links

```tsx
{
  title: "Community",
  links: [
    { label: "Discord", href: "https://discord.gg/orion", external: true },
    { label: "GitHub", href: "https://github.com/orion", external: true },
  ]
}
```

---

## Social Links

### Common Social Platforms

```tsx
import { Twitter, Github, Linkedin, Youtube, Instagram } from "lucide-react";

<Footer
  socialLinks={[
    {
      label: "Twitter",
      href: "https://twitter.com/acme",
      icon: <Twitter size={20} />,
    },
    {
      label: "GitHub",
      href: "https://github.com/acme",
      icon: <Github size={20} />,
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/company/acme",
      icon: <Linkedin size={20} />,
    },
    {
      label: "YouTube",
      href: "https://youtube.com/@acme",
      icon: <Youtube size={20} />,
    },
    {
      label: "Instagram",
      href: "https://instagram.com/acme",
      icon: <Instagram size={20} />,
    },
  ]}
/>;
```

---

## Newsletter Integration

Add a custom newsletter signup component.

```tsx
<Footer
  brand={{ name: "Orion" }}
  newsletter={
    <div>
      <h4>Stay updated</h4>
      <p>Get the latest news and updates.</p>
      <form style={{ display: 'flex', gap: 'var(--spacing-2)' }}>
        <input type="email" placeholder="Enter your email" />
        <Button>Subscribe</Button>
      </form>
    </div>
  }
  linkGroups={[...]}
/>
```

---

## Legal Section

### Copyright Only

```tsx
<Footer copyright="© 2024 Acme Inc. All rights reserved." />
```

### With Legal Links

```tsx
<Footer
  copyright="© 2024 Acme Inc. All rights reserved."
  legalLinks={[
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ]}
/>
```

### Auto-Generated Copyright

If no `copyright` prop is provided, it auto-generates based on brand name and current year.

```tsx
<Footer
  brand={{ name: "Acme Inc" }}
  // Renders: "© 2024 Acme Inc. All rights reserved."
/>
```

---

## Background Options

```tsx
// Subtle gray (default)
<Footer background="subtle" />

// Base surface color
<Footer background="base" />

// Darker sunken background
<Footer background="sunken" />
```

---

## Complete Examples

### SaaS Product Footer

```tsx
import { Footer } from "@orion/react";
import { Twitter, Github, Linkedin, Youtube } from "lucide-react";

<Footer
  brand={{
    name: "Orion",
    logo: <img src="/logo.svg" alt="" height={32} />,
    description: "The AI-first design system for modern teams.",
  }}
  linkGroups={[
    {
      title: "Product",
      links: [
        { label: "Features", href: "/features" },
        { label: "Pricing", href: "/pricing" },
        { label: "Integrations", href: "/integrations" },
        { label: "Changelog", href: "/changelog" },
      ],
    },
    {
      title: "Developers",
      links: [
        { label: "Documentation", href: "/docs" },
        { label: "API Reference", href: "/api" },
        { label: "SDK", href: "/sdk" },
        { label: "Status", href: "https://status.orion.io", external: true },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
      ],
    },
  ]}
  socialLinks={[
    {
      label: "Twitter",
      href: "https://twitter.com/orion",
      icon: <Twitter size={20} />,
    },
    {
      label: "GitHub",
      href: "https://github.com/orion",
      icon: <Github size={20} />,
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/orion",
      icon: <Linkedin size={20} />,
    },
    {
      label: "YouTube",
      href: "https://youtube.com/@orion",
      icon: <Youtube size={20} />,
    },
  ]}
  copyright="© 2024 Orion Design System. All rights reserved."
  legalLinks={[
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Security", href: "/security" },
  ]}
/>;
```

### Simple Landing Page Footer

```tsx
<Footer
  variant="centered"
  brand={{
    name: "LaunchPad",
    description: "Ship your startup faster.",
  }}
  socialLinks={[
    { label: "Twitter", href: "#", icon: <Twitter size={20} /> },
    { label: "GitHub", href: "#", icon: <Github size={20} /> },
  ]}
  copyright="© 2024 LaunchPad"
/>
```

### Minimal App Footer

```tsx
<Footer
  variant="minimal"
  brand={{ name: "AppName" }}
  legalLinks={[
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ]}
  socialLinks={[{ label: "Twitter", href: "#", icon: <Twitter size={20} /> }]}
/>
```

---

## Accessibility

- Footer renders as semantic `<footer>` element
- Link groups use proper heading hierarchy (`<h4>`)
- Social links include `aria-label` for screen readers
- External links include `rel="noopener noreferrer"` for security
- Links have visible focus states

```tsx
// Good: Descriptive labels
<Footer
  socialLinks={[
    { label: "Follow us on Twitter", href: "#", icon: <Twitter size={20} /> },
  ]}
/>

// Icons alone are not accessible - label is required
<Footer
  socialLinks={[
    { label: "Twitter", href: "#", icon: <Twitter size={20} /> },  // label is required
  ]}
/>
```

---

## Anti-Patterns

### Too Many Link Groups

```tsx
// WRONG - Overwhelming navigation
<Footer
  linkGroups={[
    { title: "Product", links: [...] },
    { title: "Features", links: [...] },
    { title: "Solutions", links: [...] },
    { title: "Developers", links: [...] },
    { title: "Resources", links: [...] },
    { title: "Company", links: [...] },
    { title: "Support", links: [...] },
  ]}
/>

// CORRECT - 3-4 focused groups
<Footer
  linkGroups={[
    { title: "Product", links: [...] },
    { title: "Developers", links: [...] },
    { title: "Company", links: [...] },
  ]}
/>
```

### Missing Social Labels

```tsx
// WRONG - No accessibility labels
<Footer
  socialLinks={[
    { href: "#", icon: <Twitter size={20} /> },  // Missing label!
  ]}
/>

// CORRECT - Always include label
<Footer
  socialLinks={[
    { label: "Twitter", href: "#", icon: <Twitter size={20} /> },
  ]}
/>
```

### Inconsistent External Link Handling

```tsx
// WRONG - Mixing external behavior
{ label: "GitHub", href: "https://github.com/acme" }  // Missing external flag

// CORRECT - Mark external links
{ label: "GitHub", href: "https://github.com/acme", external: true }
```

---

## When to Use Footer

| Scenario            | Recommendation                              |
| ------------------- | ------------------------------------------- |
| Full marketing site | `variant="default"` with all sections       |
| Simple landing page | `variant="centered"` or `variant="minimal"` |
| Web application     | `variant="minimal"` with essential links    |
| Blog/content site   | `variant="default"` with newsletter         |

---

## Related Components

- **[Navbar](../../components/Navbar/README.md)** — Top navigation (pairs with Footer)
- **[Section](../Section/README.md)** — Generic page section wrapper
- **[Newsletter](../Newsletter/README.md)** — Standalone newsletter signup
- **[CTA](../CTA/README.md)** — Call-to-action (place above Footer)
