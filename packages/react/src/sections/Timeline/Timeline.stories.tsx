import type { Meta, StoryObj } from '@storybook/react';
import { Timeline } from './Timeline';
import { Rocket, Code, Users, Trophy } from 'lucide-react';

const meta = {
  title: 'Sections/Marketing/Timeline',
  component: Timeline,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal'],
    },
    background: {
      control: 'select',
      options: ['base', 'subtle', 'none'],
    },
  },
} satisfies Meta<typeof Timeline>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultEvents = [
  {
    id: '1',
    date: '2020',
    title: 'Founded',
    description: 'Orion was founded with a mission to simplify UI development.',
    icon: <Rocket size={20} />,
  },
  {
    id: '2',
    date: '2021',
    title: 'First Release',
    description: 'Launched v1.0 with 20 components and basic theming.',
    icon: <Code size={20} />,
    status: 'completed' as const,
  },
  {
    id: '3',
    date: '2022',
    title: '10K Users',
    description: 'Reached 10,000 active developers using Orion.',
    icon: <Users size={20} />,
    status: 'completed' as const,
  },
  {
    id: '4',
    date: '2024',
    title: 'v2.0 Launch',
    description: 'Major release with AI-first architecture and 50+ components.',
    icon: <Trophy size={20} />,
  },
];

export const Default: Story = {
  args: {
    events: defaultEvents,
  },
};

export const WithTitle: Story = {
  args: {
    title: 'Our Journey',
    description: 'Key milestones in our history.',
    events: defaultEvents,
  },
};

export const Horizontal: Story = {
  args: {
    title: 'Timeline',
    events: defaultEvents,
    orientation: 'horizontal',
  },
};

export const WithEyebrow: Story = {
  args: {
    eyebrow: 'History',
    title: 'How we got here',
    events: defaultEvents,
  },
};

export const SubtleBackground: Story = {
  args: {
    title: 'Milestones',
    events: defaultEvents,
    background: 'subtle',
  },
};

export const WithoutIcons: Story = {
  args: {
    title: 'Our Story',
    events: defaultEvents.map(({ icon, ...rest }) => rest),
  },
};

export const Alternating: Story = {
  args: {
    title: 'Company History',
    events: defaultEvents,
    alternating: true,
  },
};

export const Compact: Story = {
  args: {
    title: 'Quick Overview',
    events: defaultEvents,
    compact: true,
  },
};
