# SettingsLayout Section

> Settings page layout with navigation sidebar and content area.

## Quick Start

```tsx
import { SettingsLayout, FormSection, Field, Button } from "@orion/react";
import { User, Bell, Shield, CreditCard } from "lucide-react";
import { useState } from "react";

function SettingsPage() {
  const [activeSection, setActiveSection] = useState("profile");

  return (
    <SettingsLayout
      title="Settings"
      description="Manage your account settings and preferences."
      navigation={[
        {
          title: "Account",
          items: [
            { id: "profile", label: "Profile", icon: <User size={18} /> },
            {
              id: "notifications",
              label: "Notifications",
              icon: <Bell size={18} />,
            },
          ],
        },
        {
          title: "Security",
          items: [
            { id: "security", label: "Security", icon: <Shield size={18} /> },
            { id: "billing", label: "Billing", icon: <CreditCard size={18} /> },
          ],
        },
      ]}
      activeSection={activeSection}
      onNavigate={setActiveSection}
    >
      {activeSection === "profile" && <ProfileSettings />}
      {activeSection === "notifications" && <NotificationSettings />}
      {activeSection === "security" && <SecuritySettings />}
      {activeSection === "billing" && <BillingSettings />}
    </SettingsLayout>
  );
}
```

---

## Features

- **Grouped Navigation** — Organize settings by category
- **Sticky Sidebar** — Nav stays visible while scrolling
- **Mobile Responsive** — Collapsible nav on mobile
- **Icon Support** — Icons for nav items
- **Badges** — Notification badges on items
- **Header Actions** — Optional header buttons
- **Customizable Width** — Adjustable nav width
- **Brand-Aware** — Adapts to all Orion brands

---

## Props Reference

```typescript
interface SettingsLayoutProps {
  // Navigation
  navigation: SettingsNavGroup[]; // REQUIRED - Nav groups
  activeSection: string; // REQUIRED - Current section ID
  onNavigate: (sectionId: string) => void; // REQUIRED - Navigation handler

  // Content
  children: ReactNode; // REQUIRED - Section content

  // Header
  title?: string; // Page title
  description?: string; // Page description
  headerActions?: ReactNode; // Header action buttons

  // Layout
  navWidth?: number; // Nav width in px - default: 240
  stickyNav?: boolean; // Sticky navigation - default: true
  mobileNav?: boolean; // Mobile nav toggle - default: true
}

interface SettingsNavGroup {
  title?: string; // Group title (optional)
  items: SettingsNavItem[]; // Items in group
}

interface SettingsNavItem {
  id: string; // Unique identifier
  label: string; // Display label
  icon?: ReactNode; // Optional icon
  description?: string; // Item description
  disabled?: boolean; // Disabled state
  badge?: ReactNode; // Badge content
}
```

---

## Navigation Structure

### Single Group (No Titles)

```tsx
navigation={[
  {
    items: [
      { id: 'profile', label: 'Profile' },
      { id: 'security', label: 'Security' },
      { id: 'notifications', label: 'Notifications' }
    ]
  }
]}
```

### Multiple Groups

```tsx
navigation={[
  {
    title: 'Account',
    items: [
      { id: 'profile', label: 'Profile' },
      { id: 'preferences', label: 'Preferences' }
    ]
  },
  {
    title: 'Privacy & Security',
    items: [
      { id: 'security', label: 'Security' },
      { id: 'privacy', label: 'Privacy' }
    ]
  },
  {
    title: 'Billing',
    items: [
      { id: 'subscription', label: 'Subscription' },
      { id: 'payment', label: 'Payment Methods' }
    ]
  }
]}
```

---

## Nav Items with Icons

```tsx
import { User, Bell, Shield, CreditCard, Palette, Globe } from 'lucide-react';

navigation={[
  {
    title: 'General',
    items: [
      { id: 'profile', label: 'Profile', icon: <User size={18} /> },
      { id: 'appearance', label: 'Appearance', icon: <Palette size={18} /> },
      { id: 'language', label: 'Language', icon: <Globe size={18} /> }
    ]
  },
  {
    title: 'Account',
    items: [
      { id: 'security', label: 'Security', icon: <Shield size={18} /> },
      { id: 'notifications', label: 'Notifications', icon: <Bell size={18} /> },
      { id: 'billing', label: 'Billing', icon: <CreditCard size={18} /> }
    ]
  }
]}
```

---

## Nav Items with Badges

```tsx
navigation={[
  {
    items: [
      { id: 'profile', label: 'Profile' },
      {
        id: 'notifications',
        label: 'Notifications',
        badge: <Badge variant="brand">3</Badge>
      },
      {
        id: 'security',
        label: 'Security',
        badge: <Badge variant="warning">!</Badge>
      }
    ]
  }
]}
```

---

## Header Actions

```tsx
<SettingsLayout
  title="Settings"
  headerActions={
    <>
      <Button variant="ghost">Cancel</Button>
      <Button variant="primary">Save All</Button>
    </>
  }
  navigation={navigation}
  activeSection={activeSection}
  onNavigate={setActiveSection}
>
  {children}
</SettingsLayout>
```

---

## Complete Examples

### Full Settings Page

```tsx
import {
  SettingsLayout,
  FormSection,
  Field,
  Button,
  Badge,
} from "@orion/react";
import {
  User,
  Bell,
  Shield,
  CreditCard,
  Palette,
  Key,
  Trash2,
} from "lucide-react";

function SettingsPage() {
  const [activeSection, setActiveSection] = useState("profile");

  const navigation = [
    {
      title: "Account",
      items: [
        {
          id: "profile",
          label: "Profile",
          icon: <User size={18} />,
          description: "Your personal information",
        },
        {
          id: "appearance",
          label: "Appearance",
          icon: <Palette size={18} />,
          description: "Theme and display",
        },
        {
          id: "notifications",
          label: "Notifications",
          icon: <Bell size={18} />,
          badge: <Badge>5</Badge>,
        },
      ],
    },
    {
      title: "Security",
      items: [
        { id: "password", label: "Password", icon: <Key size={18} /> },
        {
          id: "two-factor",
          label: "Two-Factor Auth",
          icon: <Shield size={18} />,
          badge: <Badge variant="warning">Setup</Badge>,
        },
      ],
    },
    {
      title: "Billing",
      items: [
        {
          id: "subscription",
          label: "Subscription",
          icon: <CreditCard size={18} />,
        },
        {
          id: "payment",
          label: "Payment Methods",
          icon: <CreditCard size={18} />,
        },
      ],
    },
    {
      title: "Danger Zone",
      items: [
        { id: "delete", label: "Delete Account", icon: <Trash2 size={18} /> },
      ],
    },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "profile":
        return (
          <FormSection
            title="Profile"
            description="Update your personal information."
          >
            <Field label="Name" type="text" defaultValue="John Doe" />
            <Field label="Email" type="email" defaultValue="john@example.com" />
            <Field
              label="Bio"
              type="textarea"
              placeholder="Tell us about yourself"
            />
            <FormSection.Actions>
              <Button variant="primary">Save Changes</Button>
            </FormSection.Actions>
          </FormSection>
        );
      case "notifications":
        return (
          <FormSection
            title="Notifications"
            description="Choose what updates you receive."
          >
            <Field label="Email notifications" type="checkbox" defaultChecked />
            <Field label="Push notifications" type="checkbox" />
            <Field label="Weekly digest" type="checkbox" defaultChecked />
            <FormSection.Actions>
              <Button variant="primary">Save Preferences</Button>
            </FormSection.Actions>
          </FormSection>
        );
      // ... other sections
      default:
        return null;
    }
  };

  return (
    <SettingsLayout
      title="Settings"
      description="Manage your account settings and preferences."
      navigation={navigation}
      activeSection={activeSection}
      onNavigate={setActiveSection}
      stickyNav
      mobileNav
    >
      {renderContent()}
    </SettingsLayout>
  );
}
```

### Organization Settings

```tsx
<SettingsLayout
  title="Organization Settings"
  description="Manage your team and organization."
  headerActions={<Button variant="primary">Upgrade Plan</Button>}
  navigation={[
    {
      title: "General",
      items: [
        {
          id: "details",
          label: "Organization Details",
          icon: <Building size={18} />,
        },
        { id: "branding", label: "Branding", icon: <Palette size={18} /> },
      ],
    },
    {
      title: "Team",
      items: [
        {
          id: "members",
          label: "Members",
          icon: <Users size={18} />,
          badge: "12",
        },
        {
          id: "roles",
          label: "Roles & Permissions",
          icon: <Shield size={18} />,
        },
        {
          id: "invites",
          label: "Invitations",
          icon: <Mail size={18} />,
          badge: "3 pending",
        },
      ],
    },
    {
      title: "Integrations",
      items: [
        { id: "apps", label: "Connected Apps", icon: <Plug size={18} /> },
        { id: "api", label: "API Keys", icon: <Key size={18} /> },
        { id: "webhooks", label: "Webhooks", icon: <Webhook size={18} /> },
      ],
    },
  ]}
  activeSection={activeSection}
  onNavigate={setActiveSection}
  navWidth={280}
>
  {children}
</SettingsLayout>
```

### Compact Settings

```tsx
<SettingsLayout
  title="Preferences"
  navigation={[
    {
      items: [
        { id: "general", label: "General" },
        { id: "appearance", label: "Appearance" },
        { id: "shortcuts", label: "Keyboard Shortcuts" },
      ],
    },
  ]}
  activeSection={activeSection}
  onNavigate={setActiveSection}
  navWidth={200}
  stickyNav={false}
>
  {children}
</SettingsLayout>
```

---

## Accessibility

- Navigation uses proper `<nav>` element
- Active item marked with `aria-current`
- Groups use heading elements
- Keyboard navigation supported
- Mobile toggle has accessible label

```tsx
// Good: Descriptive nav labels
{
  label: "Password & Security";
}

// Avoid: Vague labels
{
  label: "Settings 1";
}
```

---

## Anti-Patterns

### Too Many Top-Level Items

```tsx
// WRONG - 20 nav items without grouping
navigation={[
  { items: [...twentyItems] }
]}

// CORRECT - Group related items
navigation={[
  { title: 'Account', items: [...accountItems] },
  { title: 'Security', items: [...securityItems] },
  { title: 'Preferences', items: [...prefItems] }
]}
```

### Missing Active State

```tsx
// WRONG - No visual feedback
<SettingsLayout
  navigation={navigation}
  activeSection=""  // Nothing selected
  onNavigate={setActive}
>

// CORRECT - Always have active section
<SettingsLayout
  navigation={navigation}
  activeSection={activeSection || 'profile'}
  onNavigate={setActive}
>
```

### Content Mismatch

```tsx
// WRONG - Content doesn't match nav
activeSection === "profile";
// But showing <BillingSettings />

// CORRECT - Match content to active section
activeSection === "profile" && <ProfileSettings />;
activeSection === "billing" && <BillingSettings />;
```

---

## When to Use SettingsLayout

| Scenario              | Recommendation            |
| --------------------- | ------------------------- |
| User settings         | Full featured with groups |
| Admin panel           | With header actions       |
| App preferences       | Compact nav               |
| Organization settings | Wide nav with badges      |

## When NOT to Use SettingsLayout

| Scenario             | Use Instead          |
| -------------------- | -------------------- |
| Single settings page | FormSection only     |
| Modal settings       | Modal with tabs      |
| Wizard flow          | Stepper section      |
| Dashboard            | Sidebar with content |

---

## Related Components

- **[FormSection](../FormSection/README.md)** — Form layouts
- **[Sidebar](../Sidebar/README.md)** — App sidebar navigation
- **[Tabs](../../components/Tabs/README.md)** — Tab navigation
- **[DetailPanel](../DetailPanel/README.md)** — Slide-over panel
