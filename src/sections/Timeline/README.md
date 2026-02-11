# Timeline Section

> Chronological display of events, milestones, or history with visual connectors.

## Quick Start

```tsx
import { Timeline } from '@orion/react';

<Timeline
  title="Our Journey"
  events={[
    { id: 1, date: "2020", title: "Founded", description: "Started our journey", status: "completed" },
    { id: 2, date: "2022", title: "Series A", description: "$10M funding round", status: "completed" },
    { id: 3, date: "2024", title: "Global Launch", description: "Expanded to 50 countries", status: "current" },
    { id: 4, date: "2025", title: "IPO", description: "Going public", status: "upcoming" }
  ]}
/>
```

---

## Features

- **Vertical & Horizontal** — Two orientation options
- **Alternating Layout** — Left/right positioning for vertical timelines
- **Status Indicators** — Completed, current, upcoming states
- **Custom Icons** — Optional icons per event
- **Connector Lines** — Visual timeline thread
- **Compact Mode** — Dense layout for smaller spaces
- **Brand-Aware** — Adapts to all Orion brands

---

## Props Reference

```typescript
interface TimelineProps {
  // Header
  eyebrow?: ReactNode;            // Badge/label above title
  title?: ReactNode;              // Section title
  description?: ReactNode;        // Section description

  // Content
  events: TimelineEvent[];        // REQUIRED - Array of events

  // Layout
  orientation?: 'vertical' | 'horizontal';  // default: 'vertical'
  alternating?: boolean;          // Alternate left/right - default: false
  showConnector?: boolean;        // Show timeline line - default: true

  // Styling
  background?: 'base' | 'subtle' | 'none';  // default: 'base'
  compact?: boolean;              // Compact spacing - default: false
}

interface TimelineEvent {
  id: string | number;            // Unique identifier
  date: string;                   // Date or period
  title: string;                  // Event title
  description?: string;           // Event description
  icon?: ReactNode;               // Custom icon
  status?: 'completed' | 'current' | 'upcoming' | 'default';
  content?: ReactNode;            // Additional content
  href?: string;                  // Link URL
}
```

---

## Timeline Orientations

### `orientation="vertical"` (Default)

Standard vertical timeline.

```tsx
<Timeline
  orientation="vertical"
  events={events}
/>
```

### `orientation="horizontal"`

Horizontal scrolling timeline.

```tsx
<Timeline
  orientation="horizontal"
  events={events}
/>
```

---

## Alternating Layout

For vertical timelines, alternate events left and right.

```tsx
<Timeline
  alternating
  events={[
    { id: 1, date: "2020", title: "Q1 - Founded", status: "completed" },
    { id: 2, date: "2020", title: "Q3 - First Product", status: "completed" },
    { id: 3, date: "2021", title: "Q2 - 1000 Users", status: "completed" },
    { id: 4, date: "2022", title: "Q1 - Series A", status: "current" }
  ]}
/>
```

---

## Event Statuses

### Status Types

```tsx
// Completed - Shows checkmark or success indicator
{ id: 1, status: "completed", date: "2020", title: "Milestone Reached" }

// Current - Highlighted as active
{ id: 2, status: "current", date: "2024", title: "In Progress" }

// Upcoming - Muted/future indicator
{ id: 3, status: "upcoming", date: "2025", title: "Coming Soon" }

// Default - Neutral styling
{ id: 4, status: "default", date: "2023", title: "Standard Event" }
```

---

## Custom Icons

```tsx
import { Rocket, Award, Globe, TrendingUp } from 'lucide-react';

<Timeline
  events={[
    { id: 1, date: "2020", title: "Founded", icon: <Rocket size={20} />, status: "completed" },
    { id: 2, date: "2021", title: "Award", icon: <Award size={20} />, status: "completed" },
    { id: 3, date: "2022", title: "Global", icon: <Globe size={20} />, status: "current" },
    { id: 4, date: "2023", title: "Growth", icon: <TrendingUp size={20} />, status: "upcoming" }
  ]}
/>
```

---

## Complete Examples

### Company History

```tsx
import { Timeline, Badge } from '@orion/react';
import { Rocket, Users, Award, Globe, Zap } from 'lucide-react';

<Timeline
  eyebrow={<Badge>Our Story</Badge>}
  title="Building the Future"
  description="Key milestones in our journey to transform the industry."
  alternating
  events={[
    {
      id: 1,
      date: "January 2020",
      title: "Company Founded",
      description: "Two engineers with a vision started the company in a small garage.",
      icon: <Rocket size={20} />,
      status: "completed"
    },
    {
      id: 2,
      date: "June 2021",
      title: "First 1,000 Users",
      description: "Reached our first major user milestone.",
      icon: <Users size={20} />,
      status: "completed"
    },
    {
      id: 3,
      date: "March 2022",
      title: "Series A Funding",
      description: "Raised $15M to accelerate growth.",
      icon: <Award size={20} />,
      status: "completed"
    },
    {
      id: 4,
      date: "September 2023",
      title: "Global Expansion",
      description: "Launched in 25 new countries.",
      icon: <Globe size={20} />,
      status: "current"
    },
    {
      id: 5,
      date: "2024",
      title: "AI Integration",
      description: "Revolutionary AI features coming soon.",
      icon: <Zap size={20} />,
      status: "upcoming"
    }
  ]}
/>
```

### Project Roadmap

```tsx
<Timeline
  title="Product Roadmap"
  orientation="horizontal"
  events={[
    { id: 1, date: "Q1", title: "Research", description: "User research & planning", status: "completed" },
    { id: 2, date: "Q2", title: "Design", description: "UI/UX design phase", status: "completed" },
    { id: 3, date: "Q3", title: "Development", description: "Building the product", status: "current" },
    { id: 4, date: "Q4", title: "Launch", description: "Public release", status: "upcoming" }
  ]}
/>
```

### Process Steps

```tsx
<Timeline
  title="How It Works"
  compact
  showConnector={false}
  events={[
    { id: 1, date: "Step 1", title: "Sign Up", description: "Create your account in seconds" },
    { id: 2, date: "Step 2", title: "Connect", description: "Link your existing tools" },
    { id: 3, date: "Step 3", title: "Configure", description: "Set up your preferences" },
    { id: 4, date: "Step 4", title: "Launch", description: "Start using the platform" }
  ]}
/>
```

### Event with Additional Content

```tsx
<Timeline
  events={[
    {
      id: 1,
      date: "March 2024",
      title: "Product Launch",
      description: "Major release with new features",
      status: "current",
      content: (
        <div style={{ marginTop: 'var(--spacing-4)' }}>
          <img src="/launch-photo.jpg" alt="Launch event" style={{ borderRadius: 'var(--radius-md)', maxWidth: '100%' }} />
          <Button size="sm" style={{ marginTop: 'var(--spacing-2)' }}>Read More</Button>
        </div>
      )
    }
  ]}
/>
```

---

## Accessibility

- Timeline uses semantic list markup
- Status indicators have ARIA labels
- Icons are decorative (hidden from screen readers)
- Links are keyboard accessible
- Current event is announced to screen readers

```tsx
// Good: Clear, descriptive event titles
{ title: "Series A Funding - $15M raised" }

// Avoid: Vague titles
{ title: "Milestone" }
```

---

## Anti-Patterns

### Missing Dates

```tsx
// WRONG - No time context
{
  id: 1,
  title: "Company Founded"
  // When did this happen?
}

// CORRECT - Include date
{
  id: 1,
  date: "January 2020",
  title: "Company Founded"
}
```

### Too Many Events

```tsx
// WRONG - 50 events cramped together
<Timeline events={[...fiftyEvents]} />

// CORRECT - Show key milestones, paginate or filter
<Timeline
  events={keyMilestones}
  compact
/>
// Or use horizontal scrolling
<Timeline
  events={allEvents}
  orientation="horizontal"
/>
```

### Inconsistent Status Flow

```tsx
// WRONG - Illogical status order
events={[
  { id: 1, status: "upcoming" },
  { id: 2, status: "completed" },  // Can't complete before upcoming
  { id: 3, status: "current" }
]}

// CORRECT - Logical flow
events={[
  { id: 1, status: "completed" },
  { id: 2, status: "current" },
  { id: 3, status: "upcoming" }
]}
```

---

## When to Use Timeline

| Scenario | Recommendation |
|----------|----------------|
| Company history | Alternating vertical |
| Product roadmap | Horizontal |
| Process/steps | Compact, no connector |
| Event recap | Vertical with icons |

## When NOT to Use Timeline

| Scenario | Use Instead |
|----------|-------------|
| Live activity feed | ActivityFeed section |
| Task progress | Stepper section |
| Calendar events | Calendar component |
| Data over time | Chart/graph |

---

## Related Components

- **[ActivityFeed](../ActivityFeed/README.md)** — Real-time activity stream
- **[Stepper](../Stepper/README.md)** — Step-by-step progress
- **[Stats](../Stats/README.md)** — Key metrics display
- **[Hero](../Hero/README.md)** — Section header

