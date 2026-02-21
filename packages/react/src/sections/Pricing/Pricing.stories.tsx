import type { Meta, StoryObj } from "@storybook/react";
import { Pricing } from "./Pricing";
import { Button } from "@orion-ds/react";

const meta = {
  title: "Sections/Marketing/Pricing",
  component: Pricing,
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
} satisfies Meta<typeof Pricing>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultPlans = [
  {
    name: "Starter",
    price: "$9",
    period: "per month",
    description: "Perfect for individuals and small projects.",
    features: ["5 projects", "10GB storage", "Basic support", "API access"],
    action: (
      <Button variant="secondary" fullWidth>
        Get Started
      </Button>
    ),
  },
  {
    name: "Pro",
    price: "$29",
    period: "per month",
    description: "For growing teams and businesses.",
    features: [
      "Unlimited projects",
      "100GB storage",
      "Priority support",
      "Advanced API",
      "Team collaboration",
    ],
    action: <Button fullWidth>Get Started</Button>,
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "per month",
    description: "For large organizations with custom needs.",
    features: [
      "Everything in Pro",
      "Unlimited storage",
      "Dedicated support",
      "Custom integrations",
      "SLA guarantee",
      "On-premise option",
    ],
    action: (
      <Button variant="secondary" fullWidth>
        Contact Sales
      </Button>
    ),
  },
];

export const Default: Story = {
  args: {
    title: "Simple, transparent pricing",
    description: "Choose the plan that works best for you.",
    plans: defaultPlans,
  },
};

export const TwoPlans: Story = {
  args: {
    title: "Choose your plan",
    plans: defaultPlans.slice(0, 2),
    columns: 2,
  },
};

export const WithEyebrow: Story = {
  args: {
    eyebrow: "Pricing",
    title: "Plans for every stage",
    description: "Start free, scale as you grow.",
    plans: defaultPlans,
  },
};

export const SubtleBackground: Story = {
  args: {
    title: "Flexible Pricing",
    plans: defaultPlans,
    background: "subtle",
  },
};

export const WithBadges: Story = {
  args: {
    title: "Special Offers",
    plans: [
      {
        name: "Starter",
        price: "$9",
        period: "per month",
        description: "Perfect for individuals.",
        features: ["5 projects", "10GB storage", "Basic support"],
        action: (
          <Button variant="secondary" fullWidth>
            Get Started
          </Button>
        ),
        badge: "Free Trial",
      },
      {
        name: "Pro",
        price: "$29",
        period: "per month",
        description: "For growing teams.",
        features: ["Unlimited projects", "100GB storage", "Priority support"],
        action: <Button fullWidth>Get Started</Button>,
        popular: true,
        badge: "Most Popular",
      },
      {
        name: "Enterprise",
        price: "$99",
        period: "per month",
        description: "For large organizations.",
        features: [
          "Everything in Pro",
          "Unlimited storage",
          "Dedicated support",
        ],
        action: (
          <Button variant="secondary" fullWidth>
            Contact Sales
          </Button>
        ),
        badge: "Best Value",
      },
    ],
  },
};

export const CustomPricing: Story = {
  args: {
    title: "Enterprise Pricing",
    plans: [
      {
        name: "Startup",
        price: "Free",
        description: "For startups under $1M ARR",
        features: ["All features", "Community support", "1 year free"],
        action: <Button fullWidth>Apply Now</Button>,
      },
      {
        name: "Business",
        price: "Custom",
        description: "Tailored to your needs",
        features: ["Volume discounts", "Dedicated CSM", "Custom SLA"],
        action: (
          <Button variant="secondary" fullWidth>
            Contact Us
          </Button>
        ),
        popular: true,
      },
    ],
    columns: 2,
  },
};
