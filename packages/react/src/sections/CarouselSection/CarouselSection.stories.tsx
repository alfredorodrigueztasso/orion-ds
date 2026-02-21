import type { Meta, StoryObj } from "@storybook/react";
import { CarouselSection } from "./CarouselSection";
import { Badge } from "@orion-ds/react";

const meta = {
  title: "Sections/Marketing/CarouselSection",
  component: CarouselSection,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["editorial", "product", "gallery"],
    },
    aspectRatio: {
      control: "select",
      options: ["16/9", "4/3", "1/1", "3/4"],
    },
    gap: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    background: {
      control: "select",
      options: ["base", "subtle", "sunken", "none"],
    },
    alignToTitle: {
      control: "boolean",
      description: "Align first card with the title (container alignment)",
    },
    highlightActive: {
      control: "boolean",
      description: "Make the active card 10% larger (spotlight effect)",
    },
    loop: {
      control: "boolean",
      description: "Enable infinite loop scrolling",
    },
  },
} satisfies Meta<typeof CarouselSection>;

export default meta;
type Story = StoryObj<typeof meta>;

const createImage = (seed: number) => (
  <img
    src={`https://picsum.photos/seed/${seed}/800/450`}
    alt=""
    style={{ width: "100%", height: "100%", objectFit: "cover" }}
  />
);

const defaultItems = [
  {
    image: createImage(1),
    eyebrow: "Design",
    title: "The future of interfaces",
    description: "How AI is reshaping how we build digital products.",
    overlay: "gradient" as const,
  },
  {
    image: createImage(2),
    eyebrow: "Engineering",
    title: "Building at scale",
    description: "Lessons from shipping to millions of users.",
    overlay: "gradient" as const,
  },
  {
    image: createImage(3),
    eyebrow: "Product",
    title: "User-centered design",
    description: "Putting users first in every decision.",
    overlay: "gradient" as const,
  },
  {
    image: createImage(4),
    eyebrow: "Culture",
    title: "Remote-first teams",
    description: "How we collaborate across time zones.",
    overlay: "gradient" as const,
  },
];

export const Default: Story = {
  args: {
    items: defaultItems,
  },
};

export const WithTitle: Story = {
  args: {
    title: "Featured Stories",
    description: "Check out our latest articles and insights.",
    items: defaultItems,
  },
};

export const WithEyebrow: Story = {
  args: {
    eyebrow: <Badge>Featured</Badge>,
    title: "Editor Picks",
    items: defaultItems,
  },
};

/**
 * Cards aligned with the title (default behavior).
 * The first card starts at the same position as the section title.
 */
export const AlignedToTitle: Story = {
  args: {
    title: "Featured Stories",
    description: "Cards are aligned with the title edge.",
    items: defaultItems,
    alignToTitle: true,
  },
};

/**
 * Cards start from the screen edge (Apple style).
 * Creates a more dramatic, edge-to-edge visual effect.
 */
export const EdgeAligned: Story = {
  args: {
    title: "Featured Stories",
    description: "Cards start from the screen edge.",
    items: defaultItems,
    alignToTitle: false,
  },
};

export const AutoScroll: Story = {
  args: {
    title: "Auto-scrolling Carousel",
    items: defaultItems,
    autoScroll: true,
    autoScrollInterval: 3000,
  },
};

export const WithPagination: Story = {
  args: {
    title: "With Pagination Dots",
    items: defaultItems,
    showPagination: true,
  },
};

export const WithoutNavigation: Story = {
  args: {
    title: "No Navigation Arrows",
    items: defaultItems,
    showNavigation: false,
  },
};

export const ProductVariant: Story = {
  args: {
    title: "Featured Products",
    items: defaultItems.map((item, i) => ({
      ...item,
      eyebrow: `$${(i + 1) * 29}.99`,
      description: "Free shipping",
    })),
    variant: "product",
    aspectRatio: "1/1",
  },
};

export const GalleryVariant: Story = {
  args: {
    title: "Photo Gallery",
    items: defaultItems.map((item) => ({
      ...item,
      eyebrow: undefined,
      description: undefined,
      overlay: "none" as const,
    })),
    variant: "gallery",
    aspectRatio: "4/3",
  },
};

export const SmallGap: Story = {
  args: {
    title: "Small Gap",
    items: defaultItems,
    gap: "sm",
  },
};

export const LargeGap: Story = {
  args: {
    title: "Large Gap",
    items: defaultItems,
    gap: "lg",
  },
};

export const NoPeek: Story = {
  args: {
    title: "No Peek Effect",
    items: defaultItems,
    peek: false,
  },
};

export const SquareAspectRatio: Story = {
  args: {
    title: "Square Cards",
    items: defaultItems,
    aspectRatio: "1/1",
  },
};

export const SubtleBackground: Story = {
  args: {
    title: "Subtle Background",
    items: defaultItems,
    background: "subtle",
  },
};

/**
 * Active card is 10% larger than the rest.
 * Creates a "spotlight" effect that follows scroll position.
 */
export const SpotlightEffect: Story = {
  args: {
    title: "Featured Stories",
    description: "Active card grows, others shrink - scroll to see the effect",
    items: defaultItems,
    highlightActive: true,
  },
};

/**
 * Spotlight effect with title alignment.
 * The active card is visually prominent while maintaining alignment.
 */
export const SpotlightAligned: Story = {
  args: {
    title: "Spotlight + Aligned",
    description: "Spotlight effect with title alignment",
    items: defaultItems,
    highlightActive: true,
    alignToTitle: true,
  },
};

/**
 * Infinite loop carousel.
 * When reaching the end, navigation continues from the beginning.
 */
export const InfiniteLoop: Story = {
  args: {
    title: "Infinite Loop",
    description: "Navigation loops back to the start when reaching the end",
    items: defaultItems,
    loop: true,
  },
};

/**
 * Spotlight effect with infinite loop.
 * The best combination for a dramatic carousel experience.
 */
export const SpotlightLoop: Story = {
  args: {
    title: "Spotlight + Loop",
    description: "Active card grows with infinite navigation",
    items: defaultItems,
    highlightActive: true,
    loop: true,
  },
};
