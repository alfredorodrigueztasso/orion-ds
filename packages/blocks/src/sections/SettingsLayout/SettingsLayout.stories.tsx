import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  User,
  Bell,
  Lock,
  CreditCard,
  Globe,
  Palette,
  Users,
  Key,
  Shield,
} from "lucide-react";
import { SettingsLayout } from "./SettingsLayout";
import { Button, Field, FormSection, Badge } from "@orion-ds/react";

const meta: Meta<typeof SettingsLayout> = {
  title: "Sections/App/SettingsLayout",
  component: SettingsLayout,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A layout for settings pages with navigation sidebar. Optimized for Product Mode with clear navigation and content separation.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    stickyNav: { control: "boolean" },
    mobileNav: { control: "boolean" },
    navWidth: { control: "number" },
  },
};

export default meta;
type Story = StoryObj<typeof SettingsLayout>;

const sampleNavigation = [
  {
    title: "Account",
    items: [
      { id: "profile", label: "Profile", icon: <User size={18} /> },
      {
        id: "notifications",
        label: "Notifications",
        icon: <Bell size={18} />,
        badge: <Badge variant="info">3</Badge>,
      },
      { id: "security", label: "Security", icon: <Lock size={18} /> },
      { id: "billing", label: "Billing", icon: <CreditCard size={18} /> },
    ],
  },
  {
    title: "Preferences",
    items: [
      { id: "language", label: "Language & Region", icon: <Globe size={18} /> },
      { id: "appearance", label: "Appearance", icon: <Palette size={18} /> },
    ],
  },
  {
    title: "Team",
    items: [
      { id: "members", label: "Team Members", icon: <Users size={18} /> },
      {
        id: "api",
        label: "API Keys",
        icon: <Key size={18} />,
        badge: <Badge>Pro</Badge>,
      },
      {
        id: "permissions",
        label: "Permissions",
        icon: <Shield size={18} />,
        disabled: true,
      },
    ],
  },
];

const ProfileContent = () => (
  <FormSection
    title="Profile Information"
    description="Update your personal details and public profile."
    variant="card"
    actions={
      <FormSection.Actions>
        <Button variant="secondary">Cancel</Button>
        <Button>Save Changes</Button>
      </FormSection.Actions>
    }
  >
    <FormSection.Group columns={2}>
      <Field label="First Name" type="text" defaultValue="John" />
      <Field label="Last Name" type="text" defaultValue="Doe" />
    </FormSection.Group>
    <Field label="Email" type="email" defaultValue="john@example.com" />
    <Field
      label="Bio"
      type="textarea"
      placeholder="Tell us about yourself..."
    />
  </FormSection>
);

const NotificationsContent = () => (
  <FormSection
    title="Notification Preferences"
    description="Manage how you receive notifications."
    variant="card"
  >
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--spacing-4)",
      }}
    >
      {[
        "Email notifications",
        "Push notifications",
        "SMS alerts",
        "Weekly digest",
      ].map((item) => (
        <div
          key={item}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>{item}</span>
          <input type="checkbox" />
        </div>
      ))}
    </div>
  </FormSection>
);

const InteractiveSettings = () => {
  const [activeSection, setActiveSection] = useState("profile");

  const renderContent = () => {
    switch (activeSection) {
      case "profile":
        return <ProfileContent />;
      case "notifications":
        return <NotificationsContent />;
      default:
        return (
          <div
            style={{
              padding: "var(--spacing-10)",
              textAlign: "center",
              color: "var(--text-secondary)",
            }}
          >
            <h2>
              {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}{" "}
              Settings
            </h2>
            <p>Content for this section would go here.</p>
          </div>
        );
    }
  };

  return (
    <div style={{ height: "100vh" }}>
      <SettingsLayout
        title="Settings"
        description="Manage your account settings and preferences"
        navigation={sampleNavigation}
        activeSection={activeSection}
        onNavigate={setActiveSection}
      >
        {renderContent()}
      </SettingsLayout>
    </div>
  );
};

export const Default: Story = {
  render: () => <InteractiveSettings />,
};

export const WithHeaderActions: Story = {
  render: () => {
    const [activeSection, setActiveSection] = useState("profile");
    return (
      <div style={{ height: "100vh" }}>
        <SettingsLayout
          title="Settings"
          description="Manage your account"
          navigation={sampleNavigation}
          activeSection={activeSection}
          onNavigate={setActiveSection}
          headerActions={
            <>
              <Button variant="secondary">Help</Button>
              <Button>Upgrade</Button>
            </>
          }
        >
          <ProfileContent />
        </SettingsLayout>
      </div>
    );
  },
};

export const NoTitle: Story = {
  render: () => {
    const [activeSection, setActiveSection] = useState("profile");
    return (
      <div style={{ height: "100vh" }}>
        <SettingsLayout
          navigation={sampleNavigation}
          activeSection={activeSection}
          onNavigate={setActiveSection}
        >
          <ProfileContent />
        </SettingsLayout>
      </div>
    );
  },
};

export const SimpleNavigation: Story = {
  render: () => {
    const [activeSection, setActiveSection] = useState("profile");
    const simpleNav = [
      {
        items: [
          { id: "profile", label: "Profile", icon: <User size={18} /> },
          { id: "security", label: "Security", icon: <Lock size={18} /> },
          {
            id: "notifications",
            label: "Notifications",
            icon: <Bell size={18} />,
          },
        ],
      },
    ];
    return (
      <div style={{ height: "100vh" }}>
        <SettingsLayout
          title="Account Settings"
          navigation={simpleNav}
          activeSection={activeSection}
          onNavigate={setActiveSection}
        >
          <ProfileContent />
        </SettingsLayout>
      </div>
    );
  },
};

export const WideNavigation: Story = {
  render: () => {
    const [activeSection, setActiveSection] = useState("profile");
    const navWithDescriptions = [
      {
        items: [
          {
            id: "profile",
            label: "Profile",
            icon: <User size={18} />,
            description: "Manage your public profile",
          },
          {
            id: "security",
            label: "Security",
            icon: <Lock size={18} />,
            description: "Password and 2FA settings",
          },
          {
            id: "billing",
            label: "Billing",
            icon: <CreditCard size={18} />,
            description: "Payment methods and invoices",
          },
        ],
      },
    ];
    return (
      <div style={{ height: "100vh" }}>
        <SettingsLayout
          title="Settings"
          navigation={navWithDescriptions}
          activeSection={activeSection}
          onNavigate={setActiveSection}
          navWidth={300}
        >
          <ProfileContent />
        </SettingsLayout>
      </div>
    );
  },
};
