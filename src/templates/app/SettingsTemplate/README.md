# SettingsTemplate

> Complete settings page with navigation sidebar and tabbed content sections.

## Quick Start

```tsx
import { SettingsTemplate, Field, Button } from '@orion/react';
import { User, Shield, Bell, CreditCard } from 'lucide-react';

<SettingsTemplate
  title="Settings"
  description="Manage your account preferences"
  navigation={[
    {
      items: [
        { id: 'profile', label: 'Profile', icon: <User size={20} /> },
        { id: 'security', label: 'Security', icon: <Shield size={20} /> },
        { id: 'notifications', label: 'Notifications', icon: <Bell size={20} /> },
        { id: 'billing', label: 'Billing', icon: <CreditCard size={20} /> },
      ],
    },
  ]}
  sections={[
    {
      id: 'profile',
      content: (
        <form>
          <Field label="Name" defaultValue="John Doe" />
          <Field label="Email" type="email" defaultValue="john@example.com" />
          <Button type="submit">Save Changes</Button>
        </form>
      ),
    },
    {
      id: 'security',
      content: (
        <form>
          <Field label="Current Password" type="password" />
          <Field label="New Password" type="password" />
          <Button type="submit">Update Password</Button>
        </form>
      ),
    },
    // ... more sections
  ]}
  defaultSection="profile"
/>
```

---

## Features

- **Settings Navigation** — Sidebar navigation for settings sections
- **Tabbed Content** — Show one section at a time
- **Controlled/Uncontrolled** — Works with or without external state
- **Section Groups** — Organize settings into logical groups
- **Header Actions** — Optional action buttons in header
- **Responsive** — Stacks navigation on mobile

---

## Sections Used

| Section | Required | Purpose |
|---------|----------|---------|
| `SettingsLayout` | Automatic | Core layout component |

---

## Props Reference

```typescript
interface SettingsTemplateProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /**
   * Page title
   */
  title?: string;

  /**
   * Page description
   */
  description?: string;

  /**
   * Navigation groups (passed to SettingsLayout)
   */
  navigation: SettingsLayoutProps['navigation'];

  /**
   * Section content mapped by ID
   */
  sections: SettingsSection[];

  /**
   * Default/initial section ID
   */
  defaultSection?: string;

  /**
   * Controlled active section (for external state management)
   */
  activeSection?: string;

  /**
   * Callback when section changes
   */
  onSectionChange?: (sectionId: string) => void;

  /**
   * Header actions (buttons in header area)
   */
  headerActions?: ReactNode;
}

interface SettingsSection {
  /**
   * Section ID (must match navigation item ID)
   */
  id: string;

  /**
   * Section content
   */
  content: ReactNode;
}
```

---

## Complete Examples

### Full Settings Page

```tsx
import { SettingsTemplate, Field, Button, Switch, Select } from '@orion/react';
import { User, Shield, Bell, CreditCard, Palette, Globe } from 'lucide-react';

function SettingsPage() {
  return (
    <SettingsTemplate
      title="Settings"
      description="Manage your account and preferences"
      navigation={[
        {
          title: 'Account',
          items: [
            { id: 'profile', label: 'Profile', icon: <User size={20} /> },
            { id: 'security', label: 'Security', icon: <Shield size={20} /> },
          ],
        },
        {
          title: 'Preferences',
          items: [
            { id: 'notifications', label: 'Notifications', icon: <Bell size={20} /> },
            { id: 'appearance', label: 'Appearance', icon: <Palette size={20} /> },
            { id: 'language', label: 'Language', icon: <Globe size={20} /> },
          ],
        },
        {
          title: 'Billing',
          items: [
            { id: 'billing', label: 'Billing', icon: <CreditCard size={20} /> },
          ],
        },
      ]}
      sections={[
        {
          id: 'profile',
          content: (
            <div className="settings-section">
              <h3>Profile Information</h3>
              <p>Update your personal information.</p>
              <form style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-4)' }}>
                  <Field label="First Name" defaultValue="John" />
                  <Field label="Last Name" defaultValue="Doe" />
                </div>
                <Field label="Email" type="email" defaultValue="john@example.com" />
                <Field label="Bio" as="textarea" rows={4} placeholder="Tell us about yourself" />
                <div>
                  <Button type="submit">Save Changes</Button>
                </div>
              </form>
            </div>
          ),
        },
        {
          id: 'security',
          content: (
            <div className="settings-section">
              <h3>Password</h3>
              <p>Update your password to keep your account secure.</p>
              <form style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)', maxWidth: '400px' }}>
                <Field label="Current Password" type="password" />
                <Field label="New Password" type="password" />
                <Field label="Confirm Password" type="password" />
                <div>
                  <Button type="submit">Update Password</Button>
                </div>
              </form>

              <h3 style={{ marginTop: 'var(--spacing-8)' }}>Two-Factor Authentication</h3>
              <p>Add an extra layer of security to your account.</p>
              <Button variant="secondary">Enable 2FA</Button>
            </div>
          ),
        },
        {
          id: 'notifications',
          content: (
            <div className="settings-section">
              <h3>Notification Preferences</h3>
              <p>Choose how you want to be notified.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <strong>Email Notifications</strong>
                    <p style={{ margin: 0, color: 'var(--text-secondary)' }}>Receive updates via email</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <strong>Push Notifications</strong>
                    <p style={{ margin: 0, color: 'var(--text-secondary)' }}>Receive push notifications</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <strong>Marketing Emails</strong>
                    <p style={{ margin: 0, color: 'var(--text-secondary)' }}>Receive product updates</p>
                  </div>
                  <Switch />
                </div>
              </div>
            </div>
          ),
        },
        {
          id: 'appearance',
          content: (
            <div className="settings-section">
              <h3>Appearance</h3>
              <p>Customize how the app looks.</p>
              <Select
                label="Theme"
                options={[
                  { value: 'light', label: 'Light' },
                  { value: 'dark', label: 'Dark' },
                  { value: 'system', label: 'System' },
                ]}
                defaultValue="system"
              />
            </div>
          ),
        },
        {
          id: 'language',
          content: (
            <div className="settings-section">
              <h3>Language & Region</h3>
              <Select
                label="Language"
                options={[
                  { value: 'en', label: 'English' },
                  { value: 'es', label: 'Spanish' },
                  { value: 'fr', label: 'French' },
                ]}
                defaultValue="en"
              />
              <Select
                label="Timezone"
                options={[
                  { value: 'utc', label: 'UTC' },
                  { value: 'pst', label: 'Pacific Time' },
                  { value: 'est', label: 'Eastern Time' },
                ]}
                defaultValue="pst"
              />
            </div>
          ),
        },
        {
          id: 'billing',
          content: (
            <div className="settings-section">
              <h3>Billing Information</h3>
              <p>Manage your subscription and payment methods.</p>
              <div className="current-plan">
                <h4>Current Plan: Pro</h4>
                <p>$29/month • Renews on March 1, 2024</p>
                <Button variant="secondary">Change Plan</Button>
              </div>
            </div>
          ),
        },
      ]}
      defaultSection="profile"
      onSectionChange={(sectionId) => {
        console.log('Section changed to:', sectionId);
      }}
    />
  );
}
```

### Controlled State

```tsx
function ControlledSettings() {
  const [activeSection, setActiveSection] = useState('profile');

  return (
    <SettingsTemplate
      title="Settings"
      navigation={[
        {
          items: [
            { id: 'profile', label: 'Profile', icon: <User size={20} /> },
            { id: 'security', label: 'Security', icon: <Shield size={20} /> },
          ],
        },
      ]}
      sections={[
        { id: 'profile', content: <ProfileForm /> },
        { id: 'security', content: <SecurityForm /> },
      ]}
      activeSection={activeSection}
      onSectionChange={setActiveSection}
    />
  );
}
```

### With Header Actions

```tsx
<SettingsTemplate
  title="Settings"
  headerActions={
    <>
      <Button variant="ghost">Cancel</Button>
      <Button variant="primary">Save All</Button>
    </>
  }
  navigation={[...]}
  sections={[...]}
/>
```

### Minimal Settings

```tsx
<SettingsTemplate
  navigation={[
    {
      items: [
        { id: 'general', label: 'General' },
        { id: 'advanced', label: 'Advanced' },
      ],
    },
  ]}
  sections={[
    { id: 'general', content: <GeneralSettings /> },
    { id: 'advanced', content: <AdvancedSettings /> },
  ]}
  defaultSection="general"
/>
```

---

## Customization

### Section Content Structure

Each section can contain any React content. Common patterns:

```tsx
// Form-based section
{
  id: 'profile',
  content: (
    <div>
      <h3>Profile Settings</h3>
      <p className="description">Update your profile information.</p>
      <form>
        {/* Form fields */}
      </form>
    </div>
  ),
}

// Toggle-based section
{
  id: 'notifications',
  content: (
    <div>
      <h3>Notifications</h3>
      <div className="toggle-list">
        <ToggleRow label="Email" description="..." />
        <ToggleRow label="Push" description="..." />
      </div>
    </div>
  ),
}

// Card-based section
{
  id: 'billing',
  content: (
    <div>
      <h3>Billing</h3>
      <Card>Current plan info</Card>
      <Card>Payment method</Card>
    </div>
  ),
}
```

---

## Accessibility

- Navigation uses `<nav>` with proper ARIA labels
- Active section indicated with `aria-current`
- Section content uses semantic headings
- Keyboard navigation between sections
- Focus management on section change

---

## Anti-Patterns

### Mismatched Section IDs

```tsx
// WRONG - Section ID doesn't match navigation
<SettingsTemplate
  navigation={[
    {
      items: [
        { id: 'profile', label: 'Profile' },  // ID is 'profile'
      ],
    },
  ]}
  sections={[
    { id: 'user-profile', content: <ProfileForm /> },  // ID mismatch!
  ]}
/>

// CORRECT - IDs must match
<SettingsTemplate
  navigation={[
    {
      items: [
        { id: 'profile', label: 'Profile' },
      ],
    },
  ]}
  sections={[
    { id: 'profile', content: <ProfileForm /> },  // Same ID
  ]}
/>
```

### Missing Sections

```tsx
// WRONG - Navigation item without corresponding section
<SettingsTemplate
  navigation={[
    {
      items: [
        { id: 'profile', label: 'Profile' },
        { id: 'security', label: 'Security' },  // No section for this
      ],
    },
  ]}
  sections={[
    { id: 'profile', content: <ProfileForm /> },
    // Missing security section!
  ]}
/>

// CORRECT - Every nav item has a section
<SettingsTemplate
  navigation={[
    {
      items: [
        { id: 'profile', label: 'Profile' },
        { id: 'security', label: 'Security' },
      ],
    },
  ]}
  sections={[
    { id: 'profile', content: <ProfileForm /> },
    { id: 'security', content: <SecurityForm /> },
  ]}
/>
```

### Deep Nesting in Navigation

```tsx
// WRONG - Settings should be flat, not nested
<SettingsTemplate
  navigation={[
    {
      items: [
        {
          id: 'account',
          label: 'Account',
          children: [  // Nested navigation not supported
            { id: 'profile', label: 'Profile' },
          ],
        },
      ],
    },
  ]}
/>

// CORRECT - Use section groups for organization
<SettingsTemplate
  navigation={[
    {
      title: 'Account',  // Group title
      items: [
        { id: 'profile', label: 'Profile' },
        { id: 'security', label: 'Security' },
      ],
    },
  ]}
/>
```

---

## When to Use

| Scenario | Recommendation |
|----------|----------------|
| Account settings | Yes |
| App preferences | Yes |
| Admin configuration | Yes |
| User preferences | Yes |
| Team settings | Yes |

## When NOT to Use

| Scenario | Use Instead |
|----------|-------------|
| User profile display | `ProfilePageTemplate` |
| Dashboard | `DashboardTemplate` |
| Simple form | Single form component |
| Onboarding wizard | Custom stepper layout |

---

## Related

- **[SettingsLayout](../../../sections/SettingsLayout/README.md)** — Core settings layout section
- **[Field](../../../components/Field/README.md)** — Form input fields
- **[Switch](../../../components/Switch/README.md)** — Toggle switches
- **[Select](../../../components/Select/README.md)** — Dropdown selects
