import type { Meta, StoryObj } from '@storybook/react';
import { AppDownload } from './AppDownload';
import { Smartphone, Zap, Shield } from 'lucide-react';

const meta = {
  title: 'Sections/Marketing/AppDownload',
  component: AppDownload,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    layout: {
      control: 'select',
      options: ['centered', 'split-left', 'split-right'],
    },
    background: {
      control: 'select',
      options: ['base', 'subtle', 'gradient', 'dark'],
    },
  },
} satisfies Meta<typeof AppDownload>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultBadges = [
  { store: 'apple' as const, href: '#' },
  { store: 'google' as const, href: '#' },
];

export const Default: Story = {
  args: {
    title: 'Get the app',
    description: 'Download our mobile app and take Orion with you everywhere.',
    badges: defaultBadges,
  },
};

export const WithAppImage: Story = {
  args: {
    title: 'Mobile App',
    description: 'Experience the full power of Orion on your phone.',
    badges: defaultBadges,
    appImage: 'https://picsum.photos/seed/app/300/600',
    layout: 'split-right',
  },
};

export const Centered: Story = {
  args: {
    title: 'Available on all platforms',
    description: 'Download now for iOS and Android.',
    badges: defaultBadges,
    layout: 'centered',
  },
};

export const WithQRCode: Story = {
  args: {
    title: 'Scan to download',
    description: 'Point your camera at the QR code.',
    badges: defaultBadges,
    qrCode: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://example.com',
    showQrCode: true,
  },
};

export const GradientBackground: Story = {
  args: {
    title: 'Get Started',
    description: 'Download the app today.',
    badges: defaultBadges,
    background: 'gradient',
  },
};

export const DarkBackground: Story = {
  args: {
    title: 'Download Now',
    description: 'Available on iOS and Android.',
    badges: defaultBadges,
    background: 'dark',
  },
};

export const WithEyebrow: Story = {
  args: {
    eyebrow: 'Mobile App',
    title: 'Orion in your pocket',
    description: 'Access your projects anywhere, anytime.',
    badges: defaultBadges,
  },
};

export const iOSOnly: Story = {
  args: {
    title: 'iOS App',
    description: 'Designed for iPhone and iPad.',
    badges: [{ store: 'apple' as const, href: '#' }],
  },
};

export const AndroidOnly: Story = {
  args: {
    title: 'Android App',
    description: 'Available on Google Play.',
    badges: [{ store: 'google' as const, href: '#' }],
  },
};

export const WithFeatures: Story = {
  args: {
    title: 'Download Our App',
    description: 'Everything you need, right in your pocket.',
    badges: defaultBadges,
    features: [
      {
        icon: <Smartphone size={24} />,
        title: 'Native Experience',
        description: 'Built for mobile',
      },
      { icon: <Zap size={24} />, title: 'Lightning Fast', description: 'Instant loading' },
      { icon: <Shield size={24} />, title: 'Secure', description: 'Bank-grade security' },
    ],
  },
};

export const WithRating: Story = {
  args: {
    title: 'Highly Rated',
    description: 'Join millions of happy users.',
    badges: defaultBadges,
    rating: {
      value: 4.9,
      count: '10K+',
    },
  },
};

export const SplitLeft: Story = {
  args: {
    title: 'Download Now',
    description: 'Get the best mobile experience.',
    badges: defaultBadges,
    appImage: 'https://picsum.photos/seed/app2/300/600',
    layout: 'split-left',
  },
};
