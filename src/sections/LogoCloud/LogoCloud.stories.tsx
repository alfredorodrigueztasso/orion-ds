import type { Meta, StoryObj } from '@storybook/react';
import { LogoCloud } from './LogoCloud';

const meta = {
  title: 'Sections/Marketing/LogoCloud',
  component: LogoCloud,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: 'select',
      options: [3, 4, 5, 6],
    },
    background: {
      control: 'select',
      options: ['base', 'subtle', 'none'],
    },
  },
} satisfies Meta<typeof LogoCloud>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultLogos = [
  { name: 'Acme', logo: <span style={{ fontSize: 'var(--font-size-24)', fontWeight: 'var(--font-weight-bold)' }}>Acme</span> },
  { name: 'TechCorp', logo: <span style={{ fontSize: 'var(--font-size-24)', fontWeight: 'var(--font-weight-bold)' }}>TechCorp</span> },
  { name: 'StartupXYZ', logo: <span style={{ fontSize: 'var(--font-size-24)', fontWeight: 'var(--font-weight-bold)' }}>StartupXYZ</span> },
  { name: 'DesignCo', logo: <span style={{ fontSize: 'var(--font-size-24)', fontWeight: 'var(--font-weight-bold)' }}>DesignCo</span> },
  { name: 'CloudBase', logo: <span style={{ fontSize: 'var(--font-size-24)', fontWeight: 'var(--font-weight-bold)' }}>CloudBase</span> },
  { name: 'DataFlow', logo: <span style={{ fontSize: 'var(--font-size-24)', fontWeight: 'var(--font-weight-bold)' }}>DataFlow</span> },
];

export const Default: Story = {
  args: {
    logos: defaultLogos,
  },
};

export const WithTitle: Story = {
  args: {
    title: 'Trusted by leading companies',
    logos: defaultLogos,
  },
};

export const WithDescription: Story = {
  args: {
    title: 'Our Partners',
    description: 'We work with the best in the industry.',
    logos: defaultLogos,
  },
};

export const FourColumns: Story = {
  args: {
    title: 'Featured In',
    logos: defaultLogos.slice(0, 4),
    columns: 4,
  },
};

export const ThreeColumns: Story = {
  args: {
    logos: defaultLogos.slice(0, 3),
    columns: 3,
  },
};

export const SubtleBackground: Story = {
  args: {
    title: 'Trusted by',
    logos: defaultLogos,
    background: 'subtle',
  },
};

export const WithLinks: Story = {
  args: {
    title: 'Our Customers',
    logos: defaultLogos.map((logo) => ({ ...logo, href: '#' })),
  },
};

export const Grayscale: Story = {
  args: {
    title: 'Featured In',
    logos: defaultLogos,
    grayscale: true,
  },
};
