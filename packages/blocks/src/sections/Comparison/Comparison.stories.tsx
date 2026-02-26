import type { Meta, StoryObj } from "@storybook/react";
import { Comparison } from "./Comparison";

const meta = {
  title: "Sections/Marketing/Comparison",
  component: Comparison,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    background: {
      control: "select",
      options: ["base", "subtle", "none"],
    },
  },
} satisfies Meta<typeof Comparison>;

export default meta;
type Story = StoryObj<typeof meta>;

const twoColumnSetup = {
  columns: [{ title: "Orion", highlighted: true }, { title: "Others" }],
  features: [
    { name: "Components", values: ["50+", "20-30"] },
    { name: "TypeScript", values: [true, false] },
    { name: "Dark Mode", values: [true, true] },
    { name: "Accessibility", values: ["WCAG AA", "Partial"] },
    { name: "Bundle Size", values: ["< 50KB", "100KB+"] },
    { name: "Documentation", values: ["Comprehensive", "Basic"] },
    { name: "AI-First", values: [true, false] },
  ],
};

export const Default: Story = {
  args: {
    title: "Why choose Orion?",
    description: "See how we compare to other solutions.",
    ...twoColumnSetup,
  },
};

export const WithEyebrow: Story = {
  args: {
    eyebrow: "Comparison",
    title: "Orion vs. the competition",
    ...twoColumnSetup,
  },
};

export const SubtleBackground: Story = {
  args: {
    title: "Feature Comparison",
    ...twoColumnSetup,
    background: "subtle",
  },
};

export const ThreeColumns: Story = {
  args: {
    title: "Compare Plans",
    columns: [
      { title: "Free", subtitle: "$0/mo" },
      { title: "Pro", subtitle: "$29/mo", highlighted: true, badge: "Popular" },
      { title: "Enterprise", subtitle: "Custom" },
    ],
    features: [
      { name: "Projects", values: ["3", "Unlimited", "Unlimited"] },
      { name: "Storage", values: ["1GB", "100GB", "Unlimited"] },
      { name: "Support", values: ["Community", "Priority", "Dedicated"] },
      { name: "API Access", values: [false, true, true] },
      { name: "Custom Domain", values: [false, true, true] },
      { name: "SSO", values: [false, false, true] },
    ],
  },
};

export const WithCategories: Story = {
  args: {
    title: "Detailed Comparison",
    columns: [
      { title: "Basic", subtitle: "$9/mo" },
      { title: "Pro", subtitle: "$29/mo", highlighted: true },
      { title: "Enterprise", subtitle: "$99/mo" },
    ],
    features: [
      {
        name: "Users",
        values: ["1", "10", "Unlimited"],
        category: "Core Features",
      },
      {
        name: "Storage",
        values: ["10GB", "100GB", "1TB"],
        category: "Core Features",
      },
      {
        name: "Email Support",
        values: [true, true, true],
        category: "Support",
      },
      {
        name: "Phone Support",
        values: [false, true, true],
        category: "Support",
      },
      {
        name: "Dedicated Manager",
        values: [false, false, true],
        category: "Support",
      },
      {
        name: "API Access",
        values: [false, true, true],
        category: "Developer",
      },
      { name: "Webhooks", values: [false, true, true], category: "Developer" },
    ],
    showCategories: true,
  },
};

export const WithCTA: Story = {
  args: {
    title: "Choose Your Plan",
    columns: [
      {
        title: "Starter",
        subtitle: "Free forever",
        ctaLabel: "Get Started",
        ctaHref: "#",
      },
      {
        title: "Pro",
        subtitle: "$29/month",
        highlighted: true,
        badge: "Most Popular",
        ctaLabel: "Start Trial",
        ctaHref: "#",
      },
      {
        title: "Enterprise",
        subtitle: "Custom pricing",
        ctaLabel: "Contact Sales",
        ctaHref: "#",
      },
    ],
    features: [
      { name: "Projects", values: ["3", "Unlimited", "Unlimited"] },
      { name: "Team members", values: ["1", "10", "Unlimited"] },
      { name: "Analytics", values: ["Basic", "Advanced", "Custom"] },
    ],
  },
};

export const Compact: Story = {
  args: {
    title: "Quick Comparison",
    ...twoColumnSetup,
    compact: true,
  },
};
