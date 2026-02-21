import type { Meta, StoryObj } from "@storybook/react";
import { Features } from "./Features";
import { Zap, Shield, Palette, Code, Globe, Smartphone } from "lucide-react";

const meta = {
  title: "Sections/Marketing/Features",
  component: Features,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    columns: {
      control: "select",
      options: [2, 3, 4],
    },
    background: {
      control: "select",
      options: ["base", "subtle", "none"],
    },
  },
} satisfies Meta<typeof Features>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultItems = [
  {
    icon: <Zap size={24} />,
    title: "Lightning Fast",
    description:
      "Optimized for performance with minimal bundle size and maximum speed.",
  },
  {
    icon: <Shield size={24} />,
    title: "Secure by Default",
    description: "Built with security best practices and regular audits.",
  },
  {
    icon: <Palette size={24} />,
    title: "Fully Customizable",
    description: "Adapt to any brand with our flexible token system.",
  },
  {
    icon: <Code size={24} />,
    title: "Developer Friendly",
    description:
      "TypeScript-first with excellent IDE support and documentation.",
  },
  {
    icon: <Globe size={24} />,
    title: "Accessible",
    description: "WCAG 2.1 AA compliant with full keyboard navigation.",
  },
  {
    icon: <Smartphone size={24} />,
    title: "Responsive",
    description: "Mobile-first design that looks great on any device.",
  },
];

export const Default: Story = {
  args: {
    title: "Everything you need",
    description: "Powerful features designed for modern web development.",
    items: defaultItems,
  },
};

export const TwoColumns: Story = {
  args: {
    title: "Core Features",
    items: defaultItems.slice(0, 4),
    columns: 2,
  },
};

export const FourColumns: Story = {
  args: {
    title: "All Features",
    items: defaultItems,
    columns: 4,
  },
};

export const WithEyebrow: Story = {
  args: {
    eyebrow: "Why Choose Us",
    title: "Built for developers",
    description: "Every feature is designed with developer experience in mind.",
    items: defaultItems.slice(0, 3),
  },
};

export const SubtleBackground: Story = {
  args: {
    title: "Platform Features",
    items: defaultItems,
    background: "subtle",
  },
};

export const NonInteractive: Story = {
  args: {
    title: "Static Features",
    items: defaultItems.slice(0, 3),
    interactive: false,
  },
};

export const LeftAligned: Story = {
  args: {
    title: "Our Capabilities",
    description: "What we bring to the table.",
    items: defaultItems.slice(0, 3),
    centered: false,
  },
};
