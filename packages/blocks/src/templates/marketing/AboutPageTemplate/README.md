# AboutPageTemplate

> Complete company about page with hero, story carousel, stats, timeline, team section, and CTA.

## Quick Start

```tsx
import { AboutPageTemplate, Button, Badge, Navbar } from '@orion/react';
import { Twitter, Linkedin } from 'lucide-react';

<AboutPageTemplate
  navbar={{
    variant: 'solid',
    sticky: true,
    children: (
      <>
        <Navbar.Brand href="/">Acme</Navbar.Brand>
        <Navbar.Nav>
          <Navbar.Link href="/about">About</Navbar.Link>
          <Navbar.Link href="/careers">Careers</Navbar.Link>
        </Navbar.Nav>
        <Navbar.Actions>
          <Button>Contact Us</Button>
        </Navbar.Actions>
      </>
    ),
  }}
  hero={{
    badge: <Badge>Our Story</Badge>,
    headline: 'Building the future of software',
    description: 'We started with a simple idea: make development accessible to everyone.',
    align: 'center',
    size: 'lg',
  }}
  stats={{
    stats: [
      { value: '2019', label: 'Founded' },
      { value: '150+', label: 'Team Members' },
      { value: '10K+', label: 'Customers' },
      { value: '50+', label: 'Countries' },
    ],
  }}
  team={{
    eyebrow: 'Our Team',
    title: 'Meet the people behind Acme',
    members: [
      {
        name: 'Sarah Chen',
        role: 'CEO & Co-founder',
        avatar: <img src="/team/sarah.jpg" alt="" />,
        socialLinks: [
          { label: 'Twitter', href: 'https://twitter.com', icon: <Twitter size={16} /> },
          { label: 'LinkedIn', href: 'https://linkedin.com', icon: <Linkedin size={16} /> },
        ],
      },
      // ... more members
    ],
  }}
  cta={{
    headline: 'Want to join our team?',
    description: "We're always looking for talented people.",
    actions: <Button size="lg">View Open Positions</Button>,
  }}
  footer={{ ... }}
/>
```

---

## Features

- **Navbar** — Site navigation
- **Hero Section** — Company headline and mission
- **Story Carousel** — Editorial carousel for company story/milestones
- **Stats Section** — Company metrics and numbers
- **Timeline** — Company history and milestones
- **Gallery Carousel** — Office/culture photos
- **Team Section** — Team member profiles
- **CTA Section** — Careers or contact call-to-action
- **Footer** — Standard page footer

---

## Sections Used

| Section                     | Required | Purpose                |
| --------------------------- | -------- | ---------------------- |
| `Navbar`                    | No       | Top navigation         |
| `Hero`                      | **Yes**  | Main hero section      |
| `CarouselSection` (story)   | No       | Company story carousel |
| `Stats`                     | No       | Company metrics        |
| `Timeline`                  | No       | Company history        |
| `CarouselSection` (gallery) | No       | Office/culture photos  |
| `Team`                      | No       | Team member grid       |
| `CTA`                       | No       | Call-to-action         |
| `Footer`                    | No       | Page footer            |

---

## Props Reference

```typescript
interface AboutPageTemplateProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "title"
> {
  /**
   * Navbar configuration
   */
  navbar?: NavbarProps & { children?: ReactNode };

  /**
   * Hero section (required)
   */
  hero: HeroProps;

  /**
   * Editorial carousel for company story/milestones
   */
  storyCarousel?: Omit<CarouselSectionProps, "variant">;

  /**
   * Company stats/metrics
   */
  stats?: StatsProps;

  /**
   * Company timeline/history
   */
  timeline?: TimelineProps;

  /**
   * Gallery carousel for office/culture photos
   */
  galleryCarousel?: Omit<CarouselSectionProps, "variant">;

  /**
   * Team members section
   */
  team?: TeamProps;

  /**
   * Call-to-action section (e.g., careers, contact)
   */
  cta?: CTAProps;

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

### Full About Page

```tsx
import { AboutPageTemplate, Button, Badge, Navbar } from "@orion/react";
import { Twitter, Linkedin, Github } from "lucide-react";

function AboutPage() {
  return (
    <AboutPageTemplate
      navbar={{
        variant: "solid",
        sticky: true,
        children: (
          <>
            <Navbar.Brand href="/">
              <img src="/logo.svg" alt="Acme" height={32} />
            </Navbar.Brand>
            <Navbar.Nav>
              <Navbar.Link href="/">Home</Navbar.Link>
              <Navbar.Link href="/about" active>
                About
              </Navbar.Link>
              <Navbar.Link href="/careers">Careers</Navbar.Link>
              <Navbar.Link href="/contact">Contact</Navbar.Link>
            </Navbar.Nav>
            <Navbar.Actions>
              <Button variant="ghost">Sign In</Button>
              <Button>Get Started</Button>
            </Navbar.Actions>
          </>
        ),
      }}
      hero={{
        badge: <Badge>Our Story</Badge>,
        headline: "Building the future of software development",
        description:
          "Founded in 2019, we set out to make development accessible to everyone. Today, we help thousands of teams ship better products faster.",
        align: "center",
        size: "lg",
      }}
      storyCarousel={{
        eyebrow: <Badge>Our Journey</Badge>,
        title: "How we got here",
        items: [
          {
            image: <img src="/story/founding.jpg" alt="" />,
            eyebrow: "2019",
            title: "The Beginning",
            description:
              "Started in a garage with a vision to change how teams build software.",
            overlay: "gradient",
          },
          {
            image: <img src="/story/launch.jpg" alt="" />,
            eyebrow: "2020",
            title: "Public Launch",
            description:
              "Launched our platform to the public, reaching 1,000 users in the first month.",
            overlay: "gradient",
          },
          {
            image: <img src="/story/growth.jpg" alt="" />,
            eyebrow: "2022",
            title: "Series A",
            description:
              "Raised $20M to expand our team and product capabilities.",
            overlay: "gradient",
          },
          {
            image: <img src="/story/today.jpg" alt="" />,
            eyebrow: "2024",
            title: "Today",
            description: "Serving 10,000+ customers across 50 countries.",
            overlay: "gradient",
          },
        ],
      }}
      stats={{
        eyebrow: "By the Numbers",
        title: "Our impact in numbers",
        stats: [
          { value: "2019", label: "Founded" },
          { value: "150+", label: "Team Members" },
          { value: "10K+", label: "Customers" },
          { value: "50+", label: "Countries" },
        ],
      }}
      timeline={{
        eyebrow: "Our History",
        title: "Key milestones",
        events: [
          {
            date: "January 2019",
            title: "Company Founded",
            description: "Acme was founded by Sarah Chen and Mike Johnson.",
          },
          {
            date: "March 2020",
            title: "Public Beta Launch",
            description: "Launched our platform to early adopters.",
          },
          {
            date: "September 2021",
            title: "Series A Funding",
            description: "Raised $20M led by Venture Partners.",
          },
          {
            date: "June 2022",
            title: "10,000 Customers",
            description: "Reached our first major customer milestone.",
          },
          {
            date: "January 2024",
            title: "Acme 2.0 Launch",
            description: "Released the next generation of our platform.",
          },
        ],
      }}
      galleryCarousel={{
        title: "Life at Acme",
        description: "A glimpse into our culture and workspace",
        items: [
          { image: <img src="/office/hq.jpg" alt="Headquarters" /> },
          { image: <img src="/office/team.jpg" alt="Team event" /> },
          { image: <img src="/office/workspace.jpg" alt="Workspace" /> },
          { image: <img src="/office/hackathon.jpg" alt="Hackathon" /> },
        ],
      }}
      team={{
        eyebrow: "Our Team",
        title: "Meet the people behind Acme",
        description:
          "We're a diverse team of engineers, designers, and business minds united by a shared mission.",
        members: [
          {
            name: "Sarah Chen",
            role: "CEO & Co-founder",
            avatar: <img src="/team/sarah.jpg" alt="" />,
            bio: "Former Google engineer with a passion for developer tools.",
            socialLinks: [
              {
                label: "Twitter",
                href: "https://twitter.com/sarahchen",
                icon: <Twitter size={16} />,
              },
              {
                label: "LinkedIn",
                href: "https://linkedin.com/in/sarahchen",
                icon: <Linkedin size={16} />,
              },
            ],
          },
          {
            name: "Mike Johnson",
            role: "CTO & Co-founder",
            avatar: <img src="/team/mike.jpg" alt="" />,
            bio: "Built infrastructure at Amazon before founding Acme.",
            socialLinks: [
              {
                label: "Twitter",
                href: "https://twitter.com/mikej",
                icon: <Twitter size={16} />,
              },
              {
                label: "GitHub",
                href: "https://github.com/mikej",
                icon: <Github size={16} />,
              },
            ],
          },
          {
            name: "Emily Rodriguez",
            role: "Head of Design",
            avatar: <img src="/team/emily.jpg" alt="" />,
            bio: "Design leader with 10+ years of product experience.",
            socialLinks: [
              {
                label: "LinkedIn",
                href: "https://linkedin.com/in/emilyr",
                icon: <Linkedin size={16} />,
              },
            ],
          },
          {
            name: "David Kim",
            role: "VP of Engineering",
            avatar: <img src="/team/david.jpg" alt="" />,
            bio: "Scaling engineering teams is his specialty.",
            socialLinks: [
              {
                label: "LinkedIn",
                href: "https://linkedin.com/in/davidk",
                icon: <Linkedin size={16} />,
              },
            ],
          },
        ],
      }}
      cta={{
        headline: "Want to join our team?",
        description:
          "We're always looking for talented people to help us build the future.",
        actions: (
          <>
            <Button size="lg">View Open Positions</Button>
            <Button variant="ghost" size="lg">
              Learn About Our Culture
            </Button>
          </>
        ),
      }}
      footer={{
        brand: {
          name: "Acme Inc",
          description: "Building the future of development.",
        },
        linkGroups: [
          {
            title: "Company",
            links: [
              { label: "About", href: "/about" },
              { label: "Careers", href: "/careers" },
              { label: "Blog", href: "/blog" },
            ],
          },
          {
            title: "Product",
            links: [
              { label: "Features", href: "/features" },
              { label: "Pricing", href: "/pricing" },
            ],
          },
        ],
        socialLinks: [
          {
            label: "Twitter",
            href: "https://twitter.com",
            icon: <Twitter size={20} />,
          },
          {
            label: "LinkedIn",
            href: "https://linkedin.com",
            icon: <Linkedin size={20} />,
          },
        ],
        copyright: `${new Date().getFullYear()} Acme Inc. All rights reserved.`,
      }}
    />
  );
}
```

### Minimal About Page

```tsx
<AboutPageTemplate
  hero={{
    headline: "About Acme",
    description: "Building great software since 2019.",
    align: "center",
  }}
  stats={{
    stats: [
      { value: "2019", label: "Founded" },
      { value: "50+", label: "Employees" },
    ],
  }}
  team={{
    title: "Our Team",
    members: [
      { name: "Sarah Chen", role: "CEO" },
      { name: "Mike Johnson", role: "CTO" },
    ],
  }}
  footer={{
    brand: { name: "Acme" },
    copyright: "2024 Acme Inc.",
  }}
/>
```

### Team-Focused About Page

```tsx
<AboutPageTemplate
  hero={{
    headline: 'Meet Our Team',
    description: 'The people making it all happen.',
    align: 'center',
    size: 'lg',
  }}
  team={{
    eyebrow: 'Leadership',
    title: 'Executive Team',
    members: executiveTeam,
  }}
  cta={{
    headline: "We're hiring!",
    actions: <Button size="lg">See Open Roles</Button>,
  }}
  footer={{ ... }}
>
  {/* Additional team sections */}
  <Team
    eyebrow="Engineering"
    title="Engineering Team"
    members={engineeringTeam}
  />
  <Team
    eyebrow="Design"
    title="Design Team"
    members={designTeam}
  />
</AboutPageTemplate>
```

---

## Customization

### Custom Sections

Use `children` to add custom sections.

```tsx
<AboutPageTemplate
  hero={{ ... }}
  team={{ ... }}
>
  {/* Custom content before footer */}
  <section className="values-section">
    <h2>Our Values</h2>
    <ValueGrid values={companyValues} />
  </section>
</AboutPageTemplate>
```

---

## Accessibility

- Timeline uses proper list semantics
- Team member cards have proper alt text
- Social links have accessible labels
- Proper heading hierarchy throughout

---

## Anti-Patterns

### Missing Hero

```tsx
// WRONG - hero is required
<AboutPageTemplate
  stats={{ stats: [...] }}
  team={{ members: [...] }}
/>

// CORRECT
<AboutPageTemplate
  hero={{ headline: 'About Us' }}
  stats={{ stats: [...] }}
  team={{ members: [...] }}
/>
```

### Using Product Sections

```tsx
// WRONG - Pricing is for landing/pricing pages
<AboutPageTemplate
  hero={{ headline: 'About Us' }}
  pricing={{ plans: [...] }}  // Wrong section type
/>

// CORRECT - Use about-specific sections
<AboutPageTemplate
  hero={{ headline: 'About Us' }}
  team={{ members: [...] }}
  timeline={{ events: [...] }}
/>
```

---

## When to Use

| Scenario           | Recommendation |
| ------------------ | -------------- |
| Company about page | Yes            |
| Team page          | Yes            |
| Company history    | Yes            |
| Culture showcase   | Yes            |

## When NOT to Use

| Scenario        | Use Instead           |
| --------------- | --------------------- |
| Product landing | `LandingPageTemplate` |
| Contact page    | `ContactPageTemplate` |
| Pricing page    | `PricingPageTemplate` |
| User profile    | `ProfilePageTemplate` |

---

## Related

- **[Hero](../../../sections/Hero/README.md)** — Hero section
- **[Stats](../../../sections/Stats/README.md)** — Company metrics
- **[Timeline](../../../sections/Timeline/README.md)** — Company history
- **[Team](../../../sections/Team/README.md)** — Team member grid
- **[CarouselSection](../../../sections/CarouselSection/README.md)** — Story/gallery carousel
