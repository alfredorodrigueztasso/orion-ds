# Team Section

> Team member profiles with photos, roles, bios, and social links.

## Quick Start

```tsx
import { Team, Badge } from '@orion/react';
import { Twitter, Linkedin, Github } from 'lucide-react';

<Team
  eyebrow={<Badge>Our Team</Badge>}
  title="Meet the people behind Orion"
  description="A passionate team building the future of design systems"
  members={[
    {
      name: "Jane Doe",
      role: "CEO & Co-founder",
      bio: "10+ years building design systems",
      avatarSrc: "/team/jane.jpg",
      socialLinks: [
        { platform: "twitter", href: "https://twitter.com/jane", icon: <Twitter size={18} /> },
        { platform: "linkedin", href: "https://linkedin.com/in/jane", icon: <Linkedin size={18} /> }
      ]
    },
    {
      name: "John Smith",
      role: "CTO & Co-founder",
      bio: "Former engineer at Stripe",
      avatarSrc: "/team/john.jpg",
      socialLinks: [
        { platform: "github", href: "https://github.com/john", icon: <Github size={18} /> }
      ]
    }
  ]}
  columns={4}
/>
```

---

## Features

- **3 Visual Variants** — Default, Cards, Compact
- **Flexible Grid** — 2, 3, or 4 columns
- **Social Links** — Integrated social media icons
- **Avatar Fallbacks** — Initials when no photo available
- **Optional Bios** — Include or omit member descriptions
- **Brand-Aware** — Adapts to all Orion brands

---

## Props Reference

```typescript
interface TeamProps {
  // Header
  eyebrow?: ReactNode;          // Badge/label above title
  title?: ReactNode;            // Section title
  description?: ReactNode;      // Section description

  // Content
  members: TeamMember[];        // REQUIRED - Array of team members

  // Layout
  columns?: 2 | 3 | 4;          // Grid columns - default: 4
  centered?: boolean;           // Center content - default: true

  // Styling
  variant?: 'default' | 'cards' | 'compact';  // default: 'default'
  background?: 'base' | 'subtle' | 'none';    // default: 'base'
}

interface TeamMember {
  name: string;                 // Member's name
  role: string;                 // Job title
  bio?: string;                 // Optional description
  avatarSrc?: string;           // Avatar image URL
  avatarInitials?: string;      // Fallback initials
  socialLinks?: TeamSocialLink[];  // Social media links
}

interface TeamSocialLink {
  platform: string;             // Platform name
  href: string;                 // Profile URL
  icon?: ReactNode;             // Icon element
}
```

---

## Visual Variants

### `variant="default"` (Default)

Clean grid layout with avatars and text.

```tsx
<Team
  variant="default"
  members={members}
  columns={4}
/>
```

### `variant="cards"`

Card-based layout with borders and hover effects.

```tsx
<Team
  variant="cards"
  members={members}
  columns={3}
/>
```

### `variant="compact"`

Smaller avatars, minimal information, more members per row.

```tsx
<Team
  variant="compact"
  members={members}
  columns={4}
/>
```

---

## Column Layouts

### 2 Columns

For leadership/executive highlights.

```tsx
<Team
  title="Leadership"
  members={leadership}
  columns={2}
/>
```

### 3 Columns

Balanced layout for departments or small teams.

```tsx
<Team
  title="Engineering Team"
  members={engineers}
  columns={3}
/>
```

### 4 Columns (Default)

Compact layout for larger teams.

```tsx
<Team
  title="Our Team"
  members={allMembers}
  columns={4}
/>
```

---

## Team Member Configuration

### Basic Member

```tsx
{
  name: "Jane Doe",
  role: "Software Engineer"
}
```

### With Avatar

```tsx
{
  name: "Jane Doe",
  role: "Software Engineer",
  avatarSrc: "/team/jane.jpg"
}
```

### With Initials Fallback

```tsx
{
  name: "Jane Doe",
  role: "Software Engineer",
  avatarInitials: "JD"  // Shown if avatarSrc fails or is missing
}
```

### With Bio

```tsx
{
  name: "Jane Doe",
  role: "Software Engineer",
  bio: "Full-stack developer with 8 years of experience. Previously at Google and Stripe.",
  avatarSrc: "/team/jane.jpg"
}
```

### With Social Links

```tsx
import { Twitter, Linkedin, Github } from 'lucide-react';

{
  name: "Jane Doe",
  role: "Software Engineer",
  avatarSrc: "/team/jane.jpg",
  socialLinks: [
    { platform: "twitter", href: "https://twitter.com/jane", icon: <Twitter size={18} /> },
    { platform: "linkedin", href: "https://linkedin.com/in/jane", icon: <Linkedin size={18} /> },
    { platform: "github", href: "https://github.com/jane", icon: <Github size={18} /> }
  ]
}
```

---

## Complete Examples

### Company About Page

```tsx
import { Team, Badge } from '@orion/react';
import { Twitter, Linkedin, Github } from 'lucide-react';

<Team
  eyebrow={<Badge variant="brand">Our Team</Badge>}
  title="Meet the team behind Orion"
  description="We're a small but passionate team building the future of design systems."
  members={[
    {
      name: "Sarah Chen",
      role: "CEO & Co-founder",
      bio: "Former design lead at Figma. 15 years in product design.",
      avatarSrc: "/team/sarah.jpg",
      socialLinks: [
        { platform: "twitter", href: "#", icon: <Twitter size={18} /> },
        { platform: "linkedin", href: "#", icon: <Linkedin size={18} /> }
      ]
    },
    {
      name: "Marcus Johnson",
      role: "CTO & Co-founder",
      bio: "Ex-engineering lead at Stripe. Open source enthusiast.",
      avatarSrc: "/team/marcus.jpg",
      socialLinks: [
        { platform: "github", href: "#", icon: <Github size={18} /> },
        { platform: "twitter", href: "#", icon: <Twitter size={18} /> }
      ]
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      bio: "Design systems expert with 10+ years of experience.",
      avatarSrc: "/team/emily.jpg",
      socialLinks: [
        { platform: "twitter", href: "#", icon: <Twitter size={18} /> }
      ]
    },
    {
      name: "David Kim",
      role: "Lead Engineer",
      bio: "Full-stack developer. React and TypeScript specialist.",
      avatarSrc: "/team/david.jpg",
      socialLinks: [
        { platform: "github", href: "#", icon: <Github size={18} /> }
      ]
    }
  ]}
  variant="cards"
  columns={4}
/>
```

### Leadership Section

```tsx
<Team
  title="Leadership"
  members={[
    {
      name: "CEO Name",
      role: "Chief Executive Officer",
      bio: "Visionary leader with 20 years of industry experience.",
      avatarSrc: "/team/ceo.jpg"
    },
    {
      name: "CTO Name",
      role: "Chief Technology Officer",
      bio: "Technical architect behind our platform.",
      avatarSrc: "/team/cto.jpg"
    }
  ]}
  columns={2}
  variant="default"
  background="subtle"
/>
```

### Compact Team Grid

```tsx
<Team
  title="Our Engineers"
  members={engineeringTeam}
  variant="compact"
  columns={4}
/>
```

### Advisors Section

```tsx
<Team
  eyebrow="Advisors"
  title="Backed by industry experts"
  members={[
    { name: "Advisor 1", role: "Former CEO, TechCo", avatarSrc: "/advisors/1.jpg" },
    { name: "Advisor 2", role: "Partner, VC Firm", avatarSrc: "/advisors/2.jpg" },
    { name: "Advisor 3", role: "Product Leader, BigCo", avatarSrc: "/advisors/3.jpg" }
  ]}
  columns={3}
  variant="compact"
/>
```

---

## Accessibility

- Images have proper `alt` attributes
- Social links have `aria-label` for screen readers
- Focus states for interactive elements
- Initials fallback provides visual identification

```tsx
// Good: Avatar with descriptive alt
<Team
  members={[
    {
      name: "Jane Doe",
      role: "Engineer",
      avatarSrc: "/jane.jpg"  // Alt text auto-generated from name
    }
  ]}
/>

// Social links need platform names
socialLinks={[
  {
    platform: "LinkedIn",  // Used as aria-label
    href: "#",
    icon: <Linkedin size={18} />
  }
]}
```

---

## Anti-Patterns

### Too Many Members Without Hierarchy

```tsx
// WRONG - 20 people all at once
<Team members={[...twentyMembers]} columns={4} />

// CORRECT - Section by department or role
<Team title="Leadership" members={leadership} columns={2} />
<Team title="Engineering" members={engineering} columns={4} />
<Team title="Design" members={design} columns={3} />
```

### Inconsistent Information

```tsx
// WRONG - Some have bios, photos, links; others don't
members={[
  { name: "Jane", role: "CEO", bio: "...", avatarSrc: "...", socialLinks: [...] },
  { name: "John", role: "CTO" },  // Missing everything
]}

// CORRECT - Consistent data across all members
members={[
  { name: "Jane Doe", role: "CEO", avatarSrc: "/jane.jpg" },
  { name: "John Smith", role: "CTO", avatarSrc: "/john.jpg" },
]}
```

### Missing Role Information

```tsx
// WRONG - No context about the person
{ name: "Jane Doe" }

// CORRECT - Always include role
{ name: "Jane Doe", role: "Software Engineer" }
```

### Very Long Bios

```tsx
// WRONG - Biography as a short story
{
  name: "Jane",
  bio: "Jane started coding at age 12 when she built her first website. After graduating from MIT..."  // 500 words
}

// CORRECT - Brief, relevant info
{
  name: "Jane",
  bio: "Full-stack engineer. Previously at Google and Stripe."
}
```

---

## When to Use Team

| Scenario | Recommendation |
|----------|----------------|
| Company about page | Yes - with bios and social |
| Landing page | Yes - compact variant, key people |
| Careers page | Yes - show culture through photos |
| Product page | Maybe - only if team is a selling point |

## When NOT to Use Team

| Scenario | Use Instead |
|----------|-------------|
| Contributors list (100+) | Simple list or separate page |
| User avatars | Avatar component directly |
| Testimonials | `Testimonials` section |
| Author bio in blog | Custom inline component |

---

## Related Components

- **[Testimonials](../Testimonials/README.md)** — Customer quotes with avatars
- **[LogoCloud](../LogoCloud/README.md)** — Company logos
- **[Avatar](../../components/Avatar/README.md)** — Avatar component
- **[Card](../../components/Card/README.md)** — Card component
