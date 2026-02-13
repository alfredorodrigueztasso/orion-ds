import type { Meta, StoryObj } from '@storybook/react';
import { Team } from './Team';
import { Avatar } from '../../components/Avatar';
import { Twitter, Linkedin, Github } from 'lucide-react';

const meta = {
  title: 'Sections/Marketing/Team',
  component: Team,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: 'select',
      options: [2, 3, 4],
    },
    variant: {
      control: 'select',
      options: ['default', 'cards', 'compact'],
    },
    background: {
      control: 'select',
      options: ['base', 'subtle', 'none'],
    },
  },
} satisfies Meta<typeof Team>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultMembers = [
  {
    name: 'Sarah Chen',
    role: 'CEO & Co-founder',
    bio: 'Previously led design at TechCorp.',
    avatar: <Avatar initials="SC" size="xl" />,
    socialLinks: [
      { platform: 'twitter', href: '#', icon: <Twitter size={18} /> },
      { platform: 'linkedin', href: '#', icon: <Linkedin size={18} /> },
    ],
  },
  {
    name: 'Michael Johnson',
    role: 'CTO & Co-founder',
    bio: 'Ex-Google engineer with 10+ years experience.',
    avatar: <Avatar initials="MJ" size="xl" />,
    socialLinks: [
      { platform: 'twitter', href: '#', icon: <Twitter size={18} /> },
      { platform: 'github', href: '#', icon: <Github size={18} /> },
    ],
  },
  {
    name: 'Emily Davis',
    role: 'Head of Design',
    bio: 'Award-winning designer and accessibility advocate.',
    avatar: <Avatar initials="ED" size="xl" />,
    socialLinks: [
      { platform: 'twitter', href: '#', icon: <Twitter size={18} /> },
      { platform: 'linkedin', href: '#', icon: <Linkedin size={18} /> },
    ],
  },
  {
    name: 'David Kim',
    role: 'Lead Engineer',
    bio: 'Open source contributor and TypeScript enthusiast.',
    avatar: <Avatar initials="DK" size="xl" />,
    socialLinks: [
      { platform: 'github', href: '#', icon: <Github size={18} /> },
      { platform: 'linkedin', href: '#', icon: <Linkedin size={18} /> },
    ],
  },
];

export const Default: Story = {
  args: {
    title: 'Meet our team',
    description: 'The people behind Orion.',
    members: defaultMembers,
  },
};

export const ThreeColumns: Story = {
  args: {
    title: 'Our Leadership',
    members: defaultMembers.slice(0, 3),
    columns: 3,
  },
};

export const TwoColumns: Story = {
  args: {
    title: 'Founders',
    members: defaultMembers.slice(0, 2),
    columns: 2,
  },
};

export const WithEyebrow: Story = {
  args: {
    eyebrow: 'Our Team',
    title: 'World-class talent',
    description: 'We are a diverse team of designers, engineers, and creators.',
    members: defaultMembers,
  },
};

export const SubtleBackground: Story = {
  args: {
    title: 'The Team',
    members: defaultMembers,
    background: 'subtle',
  },
};

export const CardsVariant: Story = {
  args: {
    title: 'Meet the Team',
    members: defaultMembers,
    variant: 'cards',
  },
};

export const CompactVariant: Story = {
  args: {
    title: 'Team Members',
    members: defaultMembers,
    variant: 'compact',
  },
};

export const WithoutBio: Story = {
  args: {
    title: 'Team Members',
    members: defaultMembers.map(({ bio, ...rest }) => rest),
  },
};
