import type { Meta, StoryObj } from '@storybook/react';
import { Inbox, Search, FileText, Users, FolderOpen } from 'lucide-react';
import { EmptyState } from './EmptyState';
import { Button } from '../../components/Button';

const meta: Meta<typeof EmptyState> = {
  title: 'Sections/App/EmptyState',
  component: EmptyState,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A placeholder section for empty states in SaaS applications. Optimized for Product Mode with minimal visual noise and clear CTAs.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'compact', 'full-page'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {
  args: {
    icon: <Inbox size={48} />,
    title: 'No messages yet',
    description: 'When you receive messages, they will appear here.',
    action: <Button>Compose Message</Button>,
  },
};

export const WithSecondaryAction: Story = {
  args: {
    icon: <Search size={48} />,
    title: 'No results found',
    description: 'Try adjusting your search or filter to find what you are looking for.',
    action: <Button>Clear Filters</Button>,
    secondaryAction: <Button variant="ghost">Learn More</Button>,
  },
};

export const NoData: Story = {
  args: {
    icon: <FileText size={48} />,
    title: 'No documents',
    description: 'Upload your first document to get started.',
    action: <Button icon={<FileText size={18} />}>Upload Document</Button>,
  },
};

export const NoUsers: Story = {
  args: {
    icon: <Users size={48} />,
    title: 'No team members',
    description: 'Invite your team to start collaborating.',
    action: <Button>Invite Team</Button>,
  },
};

export const Compact: Story = {
  args: {
    icon: <FolderOpen size={32} />,
    title: 'Folder is empty',
    description: 'Add files to this folder.',
    variant: 'compact',
  },
};

export const FullPage: Story = {
  args: {
    icon: <Inbox size={64} />,
    title: 'Welcome to your inbox',
    description:
      'This is where you will see all your notifications and messages. Start by exploring the app!',
    action: <Button size="lg">Get Started</Button>,
    secondaryAction: (
      <Button variant="ghost" size="lg">
        Take a Tour
      </Button>
    ),
    variant: 'full-page',
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export const Small: Story = {
  args: {
    icon: <Search size={32} />,
    title: 'No matches',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    icon: <Inbox size={64} />,
    title: 'Your inbox is empty',
    description: 'All caught up! Check back later for new messages.',
    size: 'lg',
    action: <Button>Refresh</Button>,
  },
};

export const NoIcon: Story = {
  args: {
    title: 'Nothing here yet',
    description: 'Content will appear here once available.',
  },
};
