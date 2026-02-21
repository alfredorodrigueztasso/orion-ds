import type { Meta, StoryObj } from "@storybook/react";
import { Newsletter } from "./Newsletter";

const meta = {
  title: "Sections/Marketing/Newsletter",
  component: Newsletter,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    layout: {
      control: "select",
      options: ["inline", "stacked", "card"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    background: {
      control: "select",
      options: ["base", "subtle", "none"],
    },
  },
} satisfies Meta<typeof Newsletter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Subscribe to our newsletter",
    description:
      "Get the latest updates, articles, and resources delivered to your inbox.",
    placeholder: "Enter your email",
    buttonText: "Subscribe",
    onSubmit: (email) => console.log("Subscribed:", email),
  },
};

export const InlineLayout: Story = {
  args: {
    title: "Stay updated",
    description: "Join our mailing list.",
    layout: "inline",
    placeholder: "your@email.com",
    buttonText: "Join",
    onSubmit: (email) => console.log("Subscribed:", email),
  },
};

export const CardLayout: Story = {
  args: {
    title: "Newsletter",
    description: "Weekly insights delivered to your inbox.",
    layout: "card",
    placeholder: "Email address",
    buttonText: "Subscribe",
    onSubmit: (email) => console.log("Subscribed:", email),
  },
};

export const WithEyebrow: Story = {
  args: {
    eyebrow: "Newsletter",
    title: "Do not miss an update",
    description: "Subscribe to get notified about new features and releases.",
    placeholder: "Enter your email",
    buttonText: "Subscribe",
    onSubmit: (email) => console.log("Subscribed:", email),
  },
};

export const LargeSize: Story = {
  args: {
    title: "Join the community",
    description: "Be the first to know about new features.",
    size: "lg",
    placeholder: "Your email",
    buttonText: "Sign Up",
    onSubmit: (email) => console.log("Subscribed:", email),
  },
};

export const SubtleBackground: Story = {
  args: {
    title: "Get notified",
    description: "We will only send you relevant updates.",
    background: "subtle",
    placeholder: "Email",
    buttonText: "Notify Me",
    onSubmit: (email) => console.log("Subscribed:", email),
  },
};

export const WithDisclaimer: Story = {
  args: {
    title: "Subscribe",
    description: "Monthly digest of the best resources.",
    placeholder: "Enter your email",
    buttonText: "Subscribe",
    disclaimer: "We respect your privacy. Unsubscribe at any time.",
    onSubmit: (email) => console.log("Subscribed:", email),
  },
};

export const WithSuccessMessage: Story = {
  args: {
    title: "Join our newsletter",
    description: "Get updates on new features.",
    placeholder: "Enter your email",
    buttonText: "Subscribe",
    successMessage: "Thanks for subscribing! Check your email to confirm.",
    onSubmit: (email) => console.log("Subscribed:", email),
  },
};
