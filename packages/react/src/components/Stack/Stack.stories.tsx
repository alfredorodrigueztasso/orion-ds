import type { Meta, StoryObj } from "@storybook/react";
import { Stack } from "./Stack";
import { Button } from "../Button";
import { Card } from "../Card";
import { Field } from "../Field";

const meta = {
  title: "Components/Layout/Stack",
  component: Stack,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    direction: {
      control: "select",
      options: ["vertical", "horizontal"],
    },
    gap: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    align: {
      control: "select",
      options: ["flex-start", "center", "flex-end", "stretch", "baseline"],
    },
    justify: {
      control: "select",
      options: [
        "flex-start",
        "center",
        "flex-end",
        "space-between",
        "space-around",
        "space-evenly",
      ],
    },
    wrap: {
      control: "select",
      options: ["nowrap", "wrap", "wrap-reverse"],
    },
    as: {
      control: "select",
      options: ["div", "section", "article", "form"],
    },
  },
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

// ============================================================================
// DIRECTION STORIES
// ============================================================================

export const Vertical: Story = {
  args: {
    direction: "vertical",
    gap: "md",
  },
  render: (args) => (
    <Stack {...args}>
      <Card variant="outlined">Item 1</Card>
      <Card variant="outlined">Item 2</Card>
      <Card variant="outlined">Item 3</Card>
    </Stack>
  ),
};

export const Horizontal: Story = {
  args: {
    direction: "horizontal",
    gap: "md",
  },
  render: (args) => (
    <Stack {...args}>
      <Card variant="outlined">Item 1</Card>
      <Card variant="outlined">Item 2</Card>
      <Card variant="outlined">Item 3</Card>
    </Stack>
  ),
};

// ============================================================================
// GAP STORIES
// ============================================================================

export const GapXs: Story = {
  args: {
    direction: "horizontal",
    gap: "xs",
  },
  render: (args) => (
    <Stack {...args}>
      <Card variant="outlined">Item 1</Card>
      <Card variant="outlined">Item 2</Card>
      <Card variant="outlined">Item 3</Card>
    </Stack>
  ),
};

export const GapSm: Story = {
  args: {
    direction: "horizontal",
    gap: "sm",
  },
  render: (args) => (
    <Stack {...args}>
      <Card variant="outlined">Item 1</Card>
      <Card variant="outlined">Item 2</Card>
      <Card variant="outlined">Item 3</Card>
    </Stack>
  ),
};

export const GapMd: Story = {
  args: {
    direction: "horizontal",
    gap: "md",
  },
  render: (args) => (
    <Stack {...args}>
      <Card variant="outlined">Item 1</Card>
      <Card variant="outlined">Item 2</Card>
      <Card variant="outlined">Item 3</Card>
    </Stack>
  ),
};

export const GapLg: Story = {
  args: {
    direction: "horizontal",
    gap: "lg",
  },
  render: (args) => (
    <Stack {...args}>
      <Card variant="outlined">Item 1</Card>
      <Card variant="outlined">Item 2</Card>
      <Card variant="outlined">Item 3</Card>
    </Stack>
  ),
};

export const GapXl: Story = {
  args: {
    direction: "horizontal",
    gap: "xl",
  },
  render: (args) => (
    <Stack {...args}>
      <Card variant="outlined">Item 1</Card>
      <Card variant="outlined">Item 2</Card>
      <Card variant="outlined">Item 3</Card>
    </Stack>
  ),
};

export const AllGaps: Story = {
  render: () => (
    <Stack direction="vertical" gap="lg">
      <div>
        <p
          style={{
            marginBottom: "var(--spacing-2)",
            fontSize: "var(--font-size-sm)",
          }}
        >
          Gap XS (8px)
        </p>
        <Stack direction="horizontal" gap="xs">
          <Card variant="outlined" style={{ flex: 1 }}>
            Item
          </Card>
          <Card variant="outlined" style={{ flex: 1 }}>
            Item
          </Card>
          <Card variant="outlined" style={{ flex: 1 }}>
            Item
          </Card>
        </Stack>
      </div>
      <div>
        <p
          style={{
            marginBottom: "var(--spacing-2)",
            fontSize: "var(--font-size-sm)",
          }}
        >
          Gap SM (12px)
        </p>
        <Stack direction="horizontal" gap="sm">
          <Card variant="outlined" style={{ flex: 1 }}>
            Item
          </Card>
          <Card variant="outlined" style={{ flex: 1 }}>
            Item
          </Card>
          <Card variant="outlined" style={{ flex: 1 }}>
            Item
          </Card>
        </Stack>
      </div>
      <div>
        <p
          style={{
            marginBottom: "var(--spacing-2)",
            fontSize: "var(--font-size-sm)",
          }}
        >
          Gap MD (16px)
        </p>
        <Stack direction="horizontal" gap="md">
          <Card variant="outlined" style={{ flex: 1 }}>
            Item
          </Card>
          <Card variant="outlined" style={{ flex: 1 }}>
            Item
          </Card>
          <Card variant="outlined" style={{ flex: 1 }}>
            Item
          </Card>
        </Stack>
      </div>
      <div>
        <p
          style={{
            marginBottom: "var(--spacing-2)",
            fontSize: "var(--font-size-sm)",
          }}
        >
          Gap LG (24px)
        </p>
        <Stack direction="horizontal" gap="lg">
          <Card variant="outlined" style={{ flex: 1 }}>
            Item
          </Card>
          <Card variant="outlined" style={{ flex: 1 }}>
            Item
          </Card>
          <Card variant="outlined" style={{ flex: 1 }}>
            Item
          </Card>
        </Stack>
      </div>
      <div>
        <p
          style={{
            marginBottom: "var(--spacing-2)",
            fontSize: "var(--font-size-sm)",
          }}
        >
          Gap XL (32px)
        </p>
        <Stack direction="horizontal" gap="xl">
          <Card variant="outlined" style={{ flex: 1 }}>
            Item
          </Card>
          <Card variant="outlined" style={{ flex: 1 }}>
            Item
          </Card>
          <Card variant="outlined" style={{ flex: 1 }}>
            Item
          </Card>
        </Stack>
      </div>
    </Stack>
  ),
};

// ============================================================================
// ALIGN STORIES
// ============================================================================

export const AlignVariants: Story = {
  render: () => (
    <Stack direction="vertical" gap="lg">
      <div>
        <p
          style={{
            marginBottom: "var(--spacing-2)",
            fontSize: "var(--font-size-sm)",
          }}
        >
          Align: Flex Start
        </p>
        <Stack
          direction="horizontal"
          gap="md"
          align="flex-start"
          style={{
            minHeight: "120px",
            backgroundColor: "var(--surface-subtle)",
            padding: "var(--spacing-3)",
            borderRadius: "var(--radius-control)",
          }}
        >
          <Card variant="outlined">Short</Card>
          <Card variant="outlined">Taller item here</Card>
          <Card variant="outlined">Short</Card>
        </Stack>
      </div>
      <div>
        <p
          style={{
            marginBottom: "var(--spacing-2)",
            fontSize: "var(--font-size-sm)",
          }}
        >
          Align: Center
        </p>
        <Stack
          direction="horizontal"
          gap="md"
          align="center"
          style={{
            minHeight: "120px",
            backgroundColor: "var(--surface-subtle)",
            padding: "var(--spacing-3)",
            borderRadius: "var(--radius-control)",
          }}
        >
          <Card variant="outlined">Short</Card>
          <Card variant="outlined">Taller item here</Card>
          <Card variant="outlined">Short</Card>
        </Stack>
      </div>
      <div>
        <p
          style={{
            marginBottom: "var(--spacing-2)",
            fontSize: "var(--font-size-sm)",
          }}
        >
          Align: Flex End
        </p>
        <Stack
          direction="horizontal"
          gap="md"
          align="flex-end"
          style={{
            minHeight: "120px",
            backgroundColor: "var(--surface-subtle)",
            padding: "var(--spacing-3)",
            borderRadius: "var(--radius-control)",
          }}
        >
          <Card variant="outlined">Short</Card>
          <Card variant="outlined">Taller item here</Card>
          <Card variant="outlined">Short</Card>
        </Stack>
      </div>
      <div>
        <p
          style={{
            marginBottom: "var(--spacing-2)",
            fontSize: "var(--font-size-sm)",
          }}
        >
          Align: Stretch
        </p>
        <Stack
          direction="horizontal"
          gap="md"
          align="stretch"
          style={{
            minHeight: "120px",
            backgroundColor: "var(--surface-subtle)",
            padding: "var(--spacing-3)",
            borderRadius: "var(--radius-control)",
          }}
        >
          <Card variant="outlined">Short</Card>
          <Card variant="outlined">Item</Card>
          <Card variant="outlined">Short</Card>
        </Stack>
      </div>
    </Stack>
  ),
};

// ============================================================================
// JUSTIFY STORIES
// ============================================================================

export const JustifyVariants: Story = {
  render: () => (
    <Stack direction="vertical" gap="lg">
      <div>
        <p
          style={{
            marginBottom: "var(--spacing-2)",
            fontSize: "var(--font-size-sm)",
          }}
        >
          Justify: Flex Start
        </p>
        <Stack
          direction="horizontal"
          gap="md"
          justify="flex-start"
          style={{
            backgroundColor: "var(--surface-subtle)",
            padding: "var(--spacing-3)",
            borderRadius: "var(--radius-control)",
          }}
        >
          <Card variant="outlined">Item 1</Card>
          <Card variant="outlined">Item 2</Card>
        </Stack>
      </div>
      <div>
        <p
          style={{
            marginBottom: "var(--spacing-2)",
            fontSize: "var(--font-size-sm)",
          }}
        >
          Justify: Center
        </p>
        <Stack
          direction="horizontal"
          gap="md"
          justify="center"
          style={{
            backgroundColor: "var(--surface-subtle)",
            padding: "var(--spacing-3)",
            borderRadius: "var(--radius-control)",
          }}
        >
          <Card variant="outlined">Item 1</Card>
          <Card variant="outlined">Item 2</Card>
        </Stack>
      </div>
      <div>
        <p
          style={{
            marginBottom: "var(--spacing-2)",
            fontSize: "var(--font-size-sm)",
          }}
        >
          Justify: Space Between
        </p>
        <Stack
          direction="horizontal"
          gap="md"
          justify="space-between"
          style={{
            backgroundColor: "var(--surface-subtle)",
            padding: "var(--spacing-3)",
            borderRadius: "var(--radius-control)",
          }}
        >
          <Card variant="outlined">Item 1</Card>
          <Card variant="outlined">Item 2</Card>
        </Stack>
      </div>
      <div>
        <p
          style={{
            marginBottom: "var(--spacing-2)",
            fontSize: "var(--font-size-sm)",
          }}
        >
          Justify: Space Around
        </p>
        <Stack
          direction="horizontal"
          gap="md"
          justify="space-around"
          style={{
            backgroundColor: "var(--surface-subtle)",
            padding: "var(--spacing-3)",
            borderRadius: "var(--radius-control)",
          }}
        >
          <Card variant="outlined">Item 1</Card>
          <Card variant="outlined">Item 2</Card>
          <Card variant="outlined">Item 3</Card>
        </Stack>
      </div>
    </Stack>
  ),
};

// ============================================================================
// COMPOSITION STORIES
// ============================================================================

export const ButtonGroup: Story = {
  render: () => (
    <Stack direction="horizontal" gap="sm">
      <Button variant="primary">Save</Button>
      <Button variant="secondary">Cancel</Button>
      <Button variant="ghost">Reset</Button>
    </Stack>
  ),
};

export const FormLayout: Story = {
  render: () => (
    <Stack
      as="form"
      direction="vertical"
      gap="md"
      style={{ maxWidth: "400px" }}
    >
      <Field label="First Name" placeholder="Enter first name" />
      <Field label="Last Name" placeholder="Enter last name" />
      <Field label="Email" type="email" placeholder="Enter email" />
      <Stack direction="horizontal" gap="sm" justify="flex-end">
        <Button variant="secondary">Cancel</Button>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Stack>
    </Stack>
  ),
};

export const CardGrid: Story = {
  render: () => (
    <Stack direction="vertical" gap="md">
      <Stack direction="horizontal" gap="md" wrap="wrap">
        <Card
          variant="outlined"
          style={{
            flex: "1 1 calc(33.333% - var(--spacing-3))",
            minWidth: "200px",
          }}
        >
          <strong>Card 1</strong>
          <p
            style={{
              margin: 0,
              marginTop: "var(--spacing-2)",
              fontSize: "var(--font-size-sm)",
              color: "var(--text-secondary)",
            }}
          >
            Content
          </p>
        </Card>
        <Card
          variant="outlined"
          style={{
            flex: "1 1 calc(33.333% - var(--spacing-3))",
            minWidth: "200px",
          }}
        >
          <strong>Card 2</strong>
          <p
            style={{
              margin: 0,
              marginTop: "var(--spacing-2)",
              fontSize: "var(--font-size-sm)",
              color: "var(--text-secondary)",
            }}
          >
            Content
          </p>
        </Card>
        <Card
          variant="outlined"
          style={{
            flex: "1 1 calc(33.333% - var(--spacing-3))",
            minWidth: "200px",
          }}
        >
          <strong>Card 3</strong>
          <p
            style={{
              margin: 0,
              marginTop: "var(--spacing-2)",
              fontSize: "var(--font-size-sm)",
              color: "var(--text-secondary)",
            }}
          >
            Content
          </p>
        </Card>
      </Stack>
    </Stack>
  ),
};
