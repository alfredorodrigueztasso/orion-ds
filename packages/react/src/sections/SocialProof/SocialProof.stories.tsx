import type { Meta, StoryObj } from "@storybook/react";
import { SocialProof } from "./SocialProof";

const meta = {
  title: "Sections/Marketing/SocialProof",
  component: SocialProof,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    layout: {
      control: "select",
      options: [
        "stacked",
        "side-by-side",
        "testimonials-only",
        "logos-only",
        "stats-only",
      ],
    },
    logoStyle: {
      control: "select",
      options: ["grid", "inline", "carousel"],
    },
    background: {
      control: "select",
      options: ["base", "subtle", "none"],
    },
  },
} satisfies Meta<typeof SocialProof>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultLogos = [
  { name: "Acme", logo: "https://via.placeholder.com/120x40?text=Acme" },
  {
    name: "TechCorp",
    logo: "https://via.placeholder.com/120x40?text=TechCorp",
  },
  {
    name: "StartupXYZ",
    logo: "https://via.placeholder.com/120x40?text=StartupXYZ",
  },
  {
    name: "DesignCo",
    logo: "https://via.placeholder.com/120x40?text=DesignCo",
  },
  {
    name: "CloudBase",
    logo: "https://via.placeholder.com/120x40?text=CloudBase",
  },
];

const defaultTestimonials = [
  {
    id: 1,
    quote: "Orion has completely transformed how we build products.",
    author: "Sarah Chen",
    title: "VP of Engineering",
    company: "TechCorp",
    rating: 5,
  },
  {
    id: 2,
    quote: "The best design system I have ever used.",
    author: "Michael Johnson",
    title: "Lead Designer",
    company: "DesignStudio",
    rating: 5,
  },
];

const defaultStats = [
  { value: "10K+", label: "Users" },
  { value: "4.9", label: "Rating" },
  { value: "99%", label: "Satisfaction" },
];

export const Default: Story = {
  args: {
    title: "Trusted by Industry Leaders",
    logos: defaultLogos,
  },
};

export const WithStats: Story = {
  args: {
    title: "Our Impact",
    stats: defaultStats,
    layout: "stats-only",
  },
};

export const WithTestimonials: Story = {
  args: {
    title: "What Our Customers Say",
    testimonials: defaultTestimonials,
    layout: "testimonials-only",
  },
};

export const Combined: Story = {
  args: {
    title: "Trusted by thousands of developers",
    description: "Join the community building the future of web interfaces.",
    logos: defaultLogos,
    testimonials: defaultTestimonials,
    stats: defaultStats,
    layout: "stacked",
  },
};

export const SideBySide: Story = {
  args: {
    title: "Our Partners",
    logos: defaultLogos,
    stats: defaultStats,
    layout: "side-by-side",
  },
};

export const LogosOnly: Story = {
  args: {
    title: "Featured In",
    logos: defaultLogos,
    layout: "logos-only",
  },
};

export const GrayscaleLogos: Story = {
  args: {
    title: "Trusted by",
    logos: defaultLogos,
    grayscaleLogos: true,
    layout: "logos-only",
  },
};

export const InlineLogos: Story = {
  args: {
    title: "Our Partners",
    logos: defaultLogos,
    logoStyle: "inline",
    layout: "logos-only",
  },
};

export const SubtleBackground: Story = {
  args: {
    title: "Join the community",
    logos: defaultLogos,
    stats: defaultStats,
    background: "subtle",
  },
};

export const Compact: Story = {
  args: {
    logos: defaultLogos,
    compact: true,
    layout: "logos-only",
  },
};

export const WithEyebrow: Story = {
  args: {
    eyebrow: "Social Proof",
    title: "Used by teams at 500+ companies",
    logos: defaultLogos,
  },
};
