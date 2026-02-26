import type { Meta, StoryObj } from "@storybook/react";
import { Stats } from "./Stats";

const meta = {
  title: "Sections/Marketing/Stats",
  component: Stats,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    columns: {
      control: "select",
      options: [2, 3, 4],
    },
    variant: {
      control: "select",
      options: ["default", "cards", "minimal"],
    },
    background: {
      control: "select",
      options: ["base", "subtle", "none"],
    },
    highlightValue: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Stats>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultStats = [
  { value: "10K+", label: "Active Users" },
  { value: "99.9%", label: "Uptime" },
  { value: "50M+", label: "API Requests" },
  { value: "150+", label: "Countries" },
];

export const Default: Story = {
  args: {
    stats: defaultStats,
  },
};

export const WithTitle: Story = {
  args: {
    title: "Trusted by developers worldwide",
    description: "Our numbers speak for themselves.",
    stats: defaultStats,
  },
};

export const ThreeColumns: Story = {
  args: {
    stats: defaultStats.slice(0, 3),
    columns: 3,
  },
};

export const TwoColumns: Story = {
  args: {
    stats: defaultStats.slice(0, 2),
    columns: 2,
  },
};

export const WithEyebrow: Story = {
  args: {
    eyebrow: "By the numbers",
    title: "Scale with confidence",
    stats: defaultStats,
  },
};

export const SubtleBackground: Story = {
  args: {
    title: "Platform Statistics",
    stats: defaultStats,
    background: "subtle",
  },
};

export const WithTrends: Story = {
  args: {
    title: "This Month",
    stats: [
      {
        value: "10K+",
        label: "Active Users",
        trend: { value: "+12%", positive: true },
      },
      {
        value: "99.9%",
        label: "Uptime",
        trend: { value: "+0.1%", positive: true },
      },
      {
        value: "$1.2M",
        label: "Revenue",
        trend: { value: "+8%", positive: true },
      },
      {
        value: "2.3%",
        label: "Churn",
        trend: { value: "-0.5%", positive: true },
      },
    ],
  },
};

export const CardsVariant: Story = {
  args: {
    title: "Platform Metrics",
    stats: defaultStats,
    variant: "cards",
  },
};

export const HighlightedValues: Story = {
  args: {
    title: "Our Impact",
    description: "Numbers that speak for themselves.",
    stats: defaultStats,
    highlightValue: true,
  },
};

export const CardsWithHighlight: Story = {
  args: {
    title: "Key Metrics",
    stats: defaultStats,
    variant: "cards",
    highlightValue: true,
  },
};
