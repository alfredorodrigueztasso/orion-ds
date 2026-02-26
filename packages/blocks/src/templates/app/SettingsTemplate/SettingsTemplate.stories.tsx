import type { Meta, StoryObj } from "@storybook/react";
import { SettingsTemplate } from "./SettingsTemplate";
import { Button } from "@orion-ds/react/components/Button";
import { Field } from "@orion-ds/react/components/Field";
import { Textarea } from "@orion-ds/react/components/Textarea";
import { Switch } from "@orion-ds/react/components/Switch";
import { Select } from "@orion-ds/react/components/Select";
import { FormSection } from "@orion-ds/react/components/FormSection";
import {
  User,
  Lock,
  Bell,
  CreditCard,
  Globe,
  Palette,
  Shield,
  Key,
  Smartphone,
  Mail,
} from "lucide-react";

const meta: Meta<typeof SettingsTemplate> = {
  title: "Templates/App/Settings",
  component: SettingsTemplate,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A complete settings page template with navigation sidebar and form sections.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SettingsTemplate>;

// Sample navigation
const SETTINGS_NAVIGATION = [
  {
    title: "Account",
    items: [
      { id: "profile", label: "Profile", icon: <User size={18} /> },
      { id: "security", label: "Security", icon: <Lock size={18} /> },
      { id: "notifications", label: "Notifications", icon: <Bell size={18} /> },
    ],
  },
  {
    title: "Preferences",
    items: [
      { id: "billing", label: "Billing", icon: <CreditCard size={18} /> },
      { id: "language", label: "Language & Region", icon: <Globe size={18} /> },
      { id: "appearance", label: "Appearance", icon: <Palette size={18} /> },
    ],
  },
];

// Sample section content
const ProfileSection = () => (
  <>
    <FormSection
      title="Personal Information"
      description="Update your personal details here."
    >
      <FormSection.Group>
        <Field label="Full name" defaultValue="John Doe" />
        <Field label="Email" type="email" defaultValue="john@example.com" />
      </FormSection.Group>
      <FormSection.Group>
        <Field label="Username" defaultValue="johndoe" />
        <Field label="Phone" type="tel" defaultValue="+1 (555) 123-4567" />
      </FormSection.Group>
      <FormSection.Actions>
        <Button variant="ghost">Cancel</Button>
        <Button variant="primary">Save Changes</Button>
      </FormSection.Actions>
    </FormSection>

    <FormSection title="Bio" description="Tell others about yourself.">
      <Textarea
        label="About"
        rows={4}
        defaultValue="Software engineer passionate about building great products."
      />
      <FormSection.Actions>
        <Button variant="primary">Update Bio</Button>
      </FormSection.Actions>
    </FormSection>
  </>
);

const SecuritySection = () => (
  <>
    <FormSection
      title="Password"
      description="Change your password here. We recommend using a strong password."
      icon={<Key size={20} />}
    >
      <FormSection.Group>
        <Field label="Current password" type="password" />
        <Field label="New password" type="password" />
      </FormSection.Group>
      <Field label="Confirm new password" type="password" />
      <FormSection.Actions>
        <Button variant="primary">Update Password</Button>
      </FormSection.Actions>
    </FormSection>

    <FormSection
      title="Two-Factor Authentication"
      description="Add an extra layer of security to your account."
      icon={<Shield size={20} />}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <p style={{ fontWeight: 500 }}>Authenticator App</p>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "var(--text-sm)",
            }}
          >
            Use an authenticator app to generate one-time codes.
          </p>
        </div>
        <Switch />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <p style={{ fontWeight: 500 }}>SMS Authentication</p>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "var(--text-sm)",
            }}
          >
            Receive codes via text message.
          </p>
        </div>
        <Switch />
      </div>
    </FormSection>

    <FormSection
      title="Sessions"
      description="Manage your active sessions and devices."
      icon={<Smartphone size={20} />}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "var(--spacing-3)",
          backgroundColor: "var(--surface-subtle)",
          borderRadius: "var(--radius-sm)",
        }}
      >
        <div>
          <p style={{ fontWeight: 500 }}>MacBook Pro - San Francisco</p>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "var(--text-sm)",
            }}
          >
            Current session • Last active now
          </p>
        </div>
        <Button variant="ghost" size="sm">
          Sign Out
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "var(--spacing-3)",
          backgroundColor: "var(--surface-subtle)",
          borderRadius: "var(--radius-sm)",
        }}
      >
        <div>
          <p style={{ fontWeight: 500 }}>iPhone 14 - San Francisco</p>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "var(--text-sm)",
            }}
          >
            Last active 2 hours ago
          </p>
        </div>
        <Button variant="ghost" size="sm">
          Sign Out
        </Button>
      </div>
    </FormSection>
  </>
);

const NotificationsSection = () => (
  <>
    <FormSection
      title="Email Notifications"
      description="Choose what emails you want to receive."
      icon={<Mail size={20} />}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <p style={{ fontWeight: 500 }}>Product updates</p>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "var(--text-sm)",
            }}
          >
            News about product and feature updates.
          </p>
        </div>
        <Switch defaultChecked />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <p style={{ fontWeight: 500 }}>Marketing emails</p>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "var(--text-sm)",
            }}
          >
            Promotions, tips, and offers.
          </p>
        </div>
        <Switch />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <p style={{ fontWeight: 500 }}>Security alerts</p>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "var(--text-sm)",
            }}
          >
            Important security notifications.
          </p>
        </div>
        <Switch defaultChecked />
      </div>
    </FormSection>

    <FormSection
      title="Push Notifications"
      description="Configure push notification preferences."
      icon={<Bell size={20} />}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <p style={{ fontWeight: 500 }}>Enable push notifications</p>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "var(--text-sm)",
            }}
          >
            Receive notifications on your device.
          </p>
        </div>
        <Switch defaultChecked />
      </div>
    </FormSection>
  </>
);

const BillingSection = () => (
  <>
    <FormSection
      title="Current Plan"
      description="You are currently on the Pro plan."
    >
      <div
        style={{
          padding: "var(--spacing-4)",
          backgroundColor: "var(--surface-subtle)",
          borderRadius: "var(--radius-sm)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <p style={{ fontWeight: 600, fontSize: "var(--text-lg)" }}>
            Pro Plan
          </p>
          <p style={{ color: "var(--text-secondary)" }}>
            $29/month • Renews on Feb 1, 2024
          </p>
        </div>
        <Button variant="secondary">Change Plan</Button>
      </div>
    </FormSection>

    <FormSection
      title="Payment Method"
      description="Update your billing details and payment method."
    >
      <div
        style={{
          padding: "var(--spacing-4)",
          backgroundColor: "var(--surface-subtle)",
          borderRadius: "var(--radius-sm)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--spacing-3)",
          }}
        >
          <CreditCard size={24} />
          <div>
            <p style={{ fontWeight: 500 }}>Visa ending in 4242</p>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "var(--text-sm)",
              }}
            >
              Expires 12/2025
            </p>
          </div>
        </div>
        <Button variant="ghost" size="sm">
          Edit
        </Button>
      </div>
      <FormSection.Actions>
        <Button variant="secondary">Add Payment Method</Button>
      </FormSection.Actions>
    </FormSection>
  </>
);

const AppearanceSection = () => (
  <FormSection
    title="Theme"
    description="Customize how the app looks on your device."
  >
    <Select
      label="Theme"
      options={[
        { value: "system", label: "System default" },
        { value: "light", label: "Light" },
        { value: "dark", label: "Dark" },
      ]}
      defaultValue="system"
    />
    <Select
      label="Accent color"
      options={[
        { value: "blue", label: "Blue (Default)" },
        { value: "purple", label: "Purple" },
        { value: "green", label: "Green" },
        { value: "orange", label: "Orange" },
      ]}
      defaultValue="blue"
    />
    <FormSection.Actions>
      <Button variant="primary">Save Preferences</Button>
    </FormSection.Actions>
  </FormSection>
);

const LanguageSection = () => (
  <FormSection
    title="Language & Region"
    description="Set your language and regional preferences."
  >
    <Select
      label="Language"
      options={[
        { value: "en", label: "English (US)" },
        { value: "en-gb", label: "English (UK)" },
        { value: "es", label: "Spanish" },
        { value: "fr", label: "French" },
        { value: "de", label: "German" },
        { value: "ja", label: "Japanese" },
      ]}
      defaultValue="en"
    />
    <Select
      label="Timezone"
      options={[
        { value: "pst", label: "Pacific Time (PT)" },
        { value: "est", label: "Eastern Time (ET)" },
        { value: "utc", label: "UTC" },
        { value: "gmt", label: "GMT" },
      ]}
      defaultValue="pst"
    />
    <Select
      label="Date format"
      options={[
        { value: "mdy", label: "MM/DD/YYYY" },
        { value: "dmy", label: "DD/MM/YYYY" },
        { value: "ymd", label: "YYYY-MM-DD" },
      ]}
      defaultValue="mdy"
    />
    <FormSection.Actions>
      <Button variant="primary">Save Preferences</Button>
    </FormSection.Actions>
  </FormSection>
);

const SETTINGS_SECTIONS = [
  { id: "profile", content: <ProfileSection /> },
  { id: "security", content: <SecuritySection /> },
  { id: "notifications", content: <NotificationsSection /> },
  { id: "billing", content: <BillingSection /> },
  { id: "language", content: <LanguageSection /> },
  { id: "appearance", content: <AppearanceSection /> },
];

/**
 * Default settings page
 */
export const Default: Story = {
  args: {
    title: "Settings",
    description: "Manage your account settings and preferences.",
    navigation: SETTINGS_NAVIGATION,
    sections: SETTINGS_SECTIONS,
    defaultSection: "profile",
  },
};

/**
 * Security focused settings
 */
export const Security: Story = {
  args: {
    title: "Security Settings",
    description: "Manage your security preferences and authentication.",
    navigation: SETTINGS_NAVIGATION,
    sections: SETTINGS_SECTIONS,
    defaultSection: "security",
  },
};

/**
 * Billing settings
 */
export const Billing: Story = {
  args: {
    title: "Billing & Plans",
    description: "Manage your subscription and payment methods.",
    navigation: SETTINGS_NAVIGATION,
    sections: SETTINGS_SECTIONS,
    defaultSection: "billing",
    headerActions: <Button variant="primary">Upgrade Plan</Button>,
  },
};

/**
 * Minimal settings with fewer options
 */
export const Minimal: Story = {
  args: {
    title: "Preferences",
    navigation: [
      {
        items: [
          { id: "profile", label: "Profile", icon: <User size={18} /> },
          {
            id: "notifications",
            label: "Notifications",
            icon: <Bell size={18} />,
          },
        ],
      },
    ],
    sections: [
      { id: "profile", content: <ProfileSection /> },
      { id: "notifications", content: <NotificationsSection /> },
    ],
    defaultSection: "profile",
  },
};
