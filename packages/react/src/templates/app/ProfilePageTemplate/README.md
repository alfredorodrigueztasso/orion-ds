# ProfilePageTemplate

> Complete user profile page with header, activity feed, and detail panel for editing.

## Quick Start

```tsx
import { ProfilePageTemplate, Button, Avatar } from "@orion/react";
import { Home, Users, Settings, Mail, MapPin, Edit } from "lucide-react";

<ProfilePageTemplate
  sidebar={{
    sections: [
      {
        items: [
          { id: "home", label: "Home", icon: <Home size={20} />, href: "/" },
          {
            id: "team",
            label: "Team",
            icon: <Users size={20} />,
            href: "/team",
          },
          {
            id: "settings",
            label: "Settings",
            icon: <Settings size={20} />,
            href: "/settings",
          },
        ],
      },
    ],
    activeItem: "team",
  }}
  profile={{
    avatar: <Avatar src="/john.jpg" fallback="JD" size="xl" />,
    name: "John Doe",
    role: "Software Engineer",
    email: "john@example.com",
    metadata: [
      {
        icon: <MapPin size={16} />,
        label: "Location",
        value: "San Francisco, CA",
      },
      { icon: <Mail size={16} />, label: "Email", value: "john@example.com" },
    ],
    actions: (
      <Button variant="secondary" icon={<Edit size={18} />}>
        Edit Profile
      </Button>
    ),
  }}
  activityFeed={{
    activities: [
      { id: "1", title: "Completed project review", timestamp: "2 hours ago" },
      { id: "2", title: "Updated profile photo", timestamp: "1 day ago" },
    ],
  }}
/>;
```

---

## Features

- **Profile Header** — Avatar, name, role, and metadata display
- **Sidebar Navigation** — Optional navigation sidebar
- **Activity Feed** — User activity timeline
- **Detail Panel** — Slide-out panel for editing
- **Metadata Display** — Custom user information with icons
- **Action Buttons** — Edit profile, message user, etc.
- **Responsive** — Adapts layout for mobile

---

## Sections Used

| Section        | Required | Purpose                |
| -------------- | -------- | ---------------------- |
| `Sidebar`      | No       | Navigation sidebar     |
| `PageHeader`   | No       | Optional page header   |
| `ActivityFeed` | No       | User activity timeline |
| `DetailPanel`  | No       | Edit panel overlay     |

---

## Props Reference

```typescript
interface ProfilePageTemplateProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Sidebar configuration (optional)
   */
  sidebar?: SidebarProps;

  /**
   * Page header configuration
   */
  pageHeader?: PageHeaderProps;

  /**
   * Profile header information (required)
   */
  profile: ProfileHeader;

  /**
   * Profile detail sections (rendered in main content)
   */
  children?: ReactNode;

  /**
   * Activity feed showing user activity
   */
  activityFeed?: ActivityFeedProps;

  /**
   * Detail panel for editing profile
   */
  detailPanel?: DetailPanelProps;

  /**
   * Show activity feed in sidebar
   * @default true
   */
  showActivity?: boolean;
}

interface ProfileHeader {
  /**
   * User avatar
   */
  avatar?: ReactNode;

  /**
   * User name (required)
   */
  name: string;

  /**
   * User role/title
   */
  role?: string;

  /**
   * User email
   */
  email?: string;

  /**
   * Additional metadata items
   */
  metadata?: Array<{
    icon?: ReactNode;
    label: string;
    value: string;
  }>;

  /**
   * Profile actions (buttons)
   */
  actions?: ReactNode;
}
```

---

## Complete Examples

### Full User Profile

```tsx
import { ProfilePageTemplate, Button, Badge, Avatar } from "@orion/react";
import {
  Home,
  Users,
  Settings,
  Mail,
  MapPin,
  Calendar,
  Building,
  Edit,
  MessageSquare,
  MoreHorizontal,
} from "lucide-react";

function UserProfile() {
  const [showEditPanel, setShowEditPanel] = useState(false);

  return (
    <ProfilePageTemplate
      sidebar={{
        header: (
          <div style={{ padding: "var(--spacing-4)", fontWeight: 700 }}>
            Acme
          </div>
        ),
        sections: [
          {
            items: [
              {
                id: "home",
                label: "Home",
                icon: <Home size={20} />,
                href: "/",
              },
              {
                id: "team",
                label: "Team",
                icon: <Users size={20} />,
                href: "/team",
              },
            ],
          },
          {
            title: "Settings",
            items: [
              {
                id: "settings",
                label: "Settings",
                icon: <Settings size={20} />,
                href: "/settings",
              },
            ],
          },
        ],
        activeItem: "team",
      }}
      pageHeader={{
        breadcrumbs: [{ label: "Team", href: "/team" }, { label: "John Doe" }],
      }}
      profile={{
        avatar: <Avatar src="/john.jpg" fallback="JD" size="xl" />,
        name: "John Doe",
        role: "Senior Software Engineer",
        email: "john@acme.com",
        metadata: [
          {
            icon: <Building size={16} />,
            label: "Department",
            value: "Engineering",
          },
          {
            icon: <MapPin size={16} />,
            label: "Location",
            value: "San Francisco, CA",
          },
          {
            icon: <Calendar size={16} />,
            label: "Joined",
            value: "March 2022",
          },
          { icon: <Mail size={16} />, label: "Email", value: "john@acme.com" },
        ],
        actions: (
          <>
            <Button variant="ghost" icon={<MessageSquare size={18} />}>
              Message
            </Button>
            <Button
              variant="secondary"
              icon={<Edit size={18} />}
              onClick={() => setShowEditPanel(true)}
            >
              Edit Profile
            </Button>
            <Button
              variant="ghost"
              iconOnly
              icon={<MoreHorizontal size={18} />}
              aria-label="More options"
            />
          </>
        ),
      }}
      activityFeed={{
        title: "Recent Activity",
        activities: [
          {
            id: "1",
            title: "Completed code review for Project Alpha",
            timestamp: "2 hours ago",
            type: "task",
          },
          {
            id: "2",
            title: "Joined the Platform Team",
            timestamp: "1 day ago",
            type: "team",
          },
          {
            id: "3",
            title: "Updated profile information",
            timestamp: "3 days ago",
            type: "profile",
          },
          {
            id: "4",
            title: "Shipped v2.0 release",
            timestamp: "1 week ago",
            type: "release",
          },
        ],
      }}
      detailPanel={
        showEditPanel
          ? {
              title: "Edit Profile",
              onClose: () => setShowEditPanel(false),
              children: <form>{/* Edit form content */}</form>,
            }
          : undefined
      }
      showActivity={true}
    >
      {/* Custom profile content sections */}
      <section>
        <h3>About</h3>
        <p>
          Senior Software Engineer with 8+ years of experience building scalable
          web applications. Passionate about developer experience and design
          systems.
        </p>
      </section>

      <section>
        <h3>Skills</h3>
        <div
          style={{ display: "flex", gap: "var(--spacing-2)", flexWrap: "wrap" }}
        >
          <Badge>TypeScript</Badge>
          <Badge>React</Badge>
          <Badge>Node.js</Badge>
          <Badge>GraphQL</Badge>
          <Badge>AWS</Badge>
        </div>
      </section>

      <section>
        <h3>Projects</h3>
        {/* Project list */}
      </section>
    </ProfilePageTemplate>
  );
}
```

### Team Member Profile

```tsx
<ProfilePageTemplate
  profile={{
    avatar: <Avatar src="/sarah.jpg" fallback="SC" size="xl" />,
    name: "Sarah Chen",
    role: "Product Manager",
    metadata: [
      { icon: <Building size={16} />, label: "Team", value: "Product" },
      { icon: <MapPin size={16} />, label: "Location", value: "New York, NY" },
    ],
    actions: (
      <Button variant="secondary" icon={<MessageSquare size={18} />}>
        Send Message
      </Button>
    ),
  }}
  showActivity={false}
>
  <section>
    <h3>Bio</h3>
    <p>Product Manager focused on user growth and engagement.</p>
  </section>
</ProfilePageTemplate>
```

### Without Sidebar (Embedded View)

```tsx
<ProfilePageTemplate
  pageHeader={{
    breadcrumbs: [{ label: "Team", href: "/team" }, { label: "John Doe" }],
    actions: <Button>Back to Team</Button>,
  }}
  profile={{
    avatar: <Avatar initials="JD" size="xl" />,
    name: "John Doe",
    role: "Software Engineer",
  }}
/>
```

### With Edit Panel

```tsx
function EditableProfile() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <ProfilePageTemplate
      profile={{
        name: "John Doe",
        role: "Software Engineer",
        actions: <Button onClick={() => setIsEditing(true)}>Edit</Button>,
      }}
      detailPanel={
        isEditing
          ? {
              title: "Edit Profile",
              onClose: () => setIsEditing(false),
              footer: (
                <>
                  <Button variant="ghost" onClick={() => setIsEditing(false)}>
                    Cancel
                  </Button>
                  <Button variant="primary">Save Changes</Button>
                </>
              ),
              children: (
                <form>
                  <Field label="Name" defaultValue="John Doe" />
                  <Field label="Role" defaultValue="Software Engineer" />
                  <Field label="Bio" as="textarea" rows={4} />
                </form>
              ),
            }
          : undefined
      }
    />
  );
}
```

---

## Customization

### Hide Activity Feed

```tsx
<ProfilePageTemplate profile={{ name: "John Doe" }} showActivity={false} />
```

### Custom Content Sections

Use `children` to add custom profile sections.

```tsx
<ProfilePageTemplate profile={{ name: "John Doe", role: "Engineer" }}>
  <section className="profile-section">
    <h3>Certifications</h3>
    <ul>
      <li>AWS Solutions Architect</li>
      <li>Google Cloud Professional</li>
    </ul>
  </section>

  <section className="profile-section">
    <h3>Publications</h3>
    {/* Publication list */}
  </section>
</ProfilePageTemplate>
```

---

## Accessibility

- Profile header uses semantic HTML
- Avatar has proper alt text via fallback
- Action buttons have descriptive labels
- Activity feed uses proper list semantics
- Detail panel traps focus when open
- `aria-expanded` for collapsible sections

---

## Anti-Patterns

### Missing Profile Name

```tsx
// WRONG - name is required
<ProfilePageTemplate
  profile={{
    role: 'Engineer',
    // name is missing
  }}
/>

// CORRECT
<ProfilePageTemplate
  profile={{
    name: 'John Doe',
    role: 'Engineer',
  }}
/>
```

### Hardcoding Content in Profile

```tsx
// WRONG - Don't hardcode user data
<ProfilePageTemplate
  profile={{
    name: 'John Doe',  // Hardcoded
  }}
/>

// CORRECT - Use dynamic data
<ProfilePageTemplate
  profile={{
    name: user.name,
    role: user.role,
    avatar: <Avatar src={user.avatarUrl} fallback={user.initials} />,
  }}
/>
```

### Using for Non-User Profiles

```tsx
// WRONG - This template is for user profiles
<ProfilePageTemplate
  profile={{
    name: "Acme Inc", // This is a company, not a user
    role: "Company Profile",
  }}
/>

// CORRECT - Use a custom layout for company profiles
// ProfilePageTemplate is specifically for user/team member profiles
```

---

## When to Use

| Scenario          | Recommendation                        |
| ----------------- | ------------------------------------- |
| User profile page | Yes                                   |
| Team member page  | Yes                                   |
| Account settings  | Partial (consider `SettingsTemplate`) |
| Public profile    | Yes                                   |

## When NOT to Use

| Scenario            | Use Instead           |
| ------------------- | --------------------- |
| Company about page  | `AboutPageTemplate`   |
| Product detail page | Custom layout         |
| Dashboard           | `DashboardTemplate`   |
| Settings page       | `SettingsTemplate`    |
| Contact page        | `ContactPageTemplate` |

---

## Related

- **[Sidebar](../../../sections/Sidebar/README.md)** — Navigation sidebar
- **[PageHeader](../../../sections/PageHeader/README.md)** — Page header section
- **[ActivityFeed](../../../sections/ActivityFeed/README.md)** — Activity timeline
- **[DetailPanel](../../../sections/DetailPanel/README.md)** — Slide-out edit panel
- **[Avatar](../../../components/Avatar/README.md)** — User avatar component
