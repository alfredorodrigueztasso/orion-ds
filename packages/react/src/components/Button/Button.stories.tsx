import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import {
  Search,
  Download,
  ChevronDown,
  Check,
  Trash2,
  Plus,
  Settings,
  Heart,
  ExternalLink,
  Menu,
} from 'lucide-react';

const meta = {
  title: 'Components/Forms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'danger', 'inverse'],
      description: 'Button visual style',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Button size',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Make button full width',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable button',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default button
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Danger Button',
  },
};

export const Inverse: Story = {
  args: {
    variant: 'inverse',
    children: 'Inverse Button',
  },
};

// Inverse on colored background - combine with regular secondary/ghost for supporting actions
export const InverseOnColoredBackground: Story = {
  render: () => (
    <div
      style={{
        background: 'var(--interactive-primary)',
        padding: 'var(--spacing-8)',
        borderRadius: 'var(--radius-container)',
        display: 'flex',
        gap: 'var(--spacing-4)',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h3 style={{ color: 'white', margin: 0, fontFamily: 'var(--font-primary)' }}>
        Summer Sale - 50% Off
      </h3>
      <p style={{ color: 'white', margin: 0 }}>Limited time offer on all products</p>
      <div style={{ display: 'flex', gap: 'var(--spacing-3)', flexWrap: 'wrap' }}>
        <Button variant="inverse">Shop Now</Button>
        <Button variant="secondary">Learn More</Button>
        <Button variant="ghost">Skip</Button>
      </div>
    </div>
  ),
};

// Sizes
export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Button',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Medium Button',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Button',
  },
};

// States
export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: 'Full Width Button',
  },
};

// All sizes showcase
export const AllSizes: Story = {
  render: () => (
    <div
      style={{ display: 'flex', gap: 'var(--spacing-4)', alignItems: 'center', flexWrap: 'wrap' }}
    >
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

// Lucide Icons - Left side
export const LucideIconsLeft: Story = {
  args: {},
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--spacing-2)', flexWrap: 'wrap' }}>
      <Button icon={<Search size={20} />}>Search</Button>
      <Button icon={<Download size={20} />} variant="secondary">
        Download
      </Button>
      <Button icon={<Plus size={20} />} variant="ghost">
        Add
      </Button>
      <Button icon={<Settings size={20} />} variant="ghost">
        Settings
      </Button>
    </div>
  ),
};

// Lucide Icons - Right side
export const LucideIconsRight: Story = {
  args: {},
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--spacing-2)', flexWrap: 'wrap' }}>
      <Button iconRight={<ChevronDown size={20} />}>Dropdown</Button>
      <Button iconRight={<ExternalLink size={20} />} variant="secondary">
        External
      </Button>
      <Button iconRight={<Check size={20} />} variant="ghost">
        Confirm
      </Button>
    </div>
  ),
};

// Lucide Icons - Icon only
export const LucideIconsOnly: Story = {
  args: {},
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--spacing-2)' }}>
      <Button iconOnly icon={<Search size={20} />} aria-label="Search" />
      <Button iconOnly icon={<Heart size={20} />} variant="secondary" aria-label="Like" />
      <Button iconOnly icon={<Trash2 size={20} />} variant="danger" aria-label="Delete" />
      <Button iconOnly icon={<Settings size={20} />} variant="ghost" aria-label="Settings" />
    </div>
  ),
};

// Lucide Icons - Both sides
export const LucideIconsBoth: Story = {
  args: {},
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--spacing-2)', flexWrap: 'wrap' }}>
      <Button icon={<Menu size={20} />} iconRight={<ChevronDown size={20} />}>
        Menu Options
      </Button>
      <Button icon={<Download size={20} />} iconRight={<ExternalLink size={20} />}>
        Download File
      </Button>
    </div>
  ),
};

// Lucide Icons - Loading with icon
export const LucideWithLoading: Story = {
  args: {
    icon: <Download size={20} />,
    children: 'Downloading...',
    isLoading: true,
  },
};

// Loading states for all variants
export const LoadingAllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--spacing-4)', flexWrap: 'wrap' }}>
      <Button variant="primary" isLoading>
        Primary
      </Button>
      <Button variant="secondary" isLoading>
        Secondary
      </Button>
      <Button variant="ghost" isLoading>
        Ghost
      </Button>
      <Button variant="danger" isLoading>
        Danger
      </Button>
      <Button variant="inverse" isLoading>
        Inverse
      </Button>
    </div>
  ),
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--spacing-4)', flexWrap: 'wrap' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="inverse">Inverse</Button>
    </div>
  ),
};
