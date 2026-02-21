/**
 * Preview module for AppDownload section
 * CTA section for mobile app downloads with store badges
 */

import React from 'react';
import { AppDownload } from '@orion-ds/react';
import { Shield, Zap, Heart } from 'lucide-react';

export const previews = [
  {
    title: 'Centered Layout',
    render: () => (
      <AppDownload
        title="Download Our App"
        description="Get the best experience on mobile with our free iOS and Android apps. Available now on the App Store and Google Play."
        badges={[
          { store: 'apple', href: 'https://apps.apple.com/' },
          { store: 'google', href: 'https://play.google.com/' },
        ]}
        layout="centered"
        background="gradient"
      />
    ),
  },
  {
    title: 'With App Preview Image',
    render: () => (
      <AppDownload
        eyebrow="Download Now"
        title="Take Your Productivity Everywhere"
        description="Access all your tools on the go. Work seamlessly across all your devices with our mobile app."
        badges={[
          { store: 'apple', href: 'https://apps.apple.com/' },
          { store: 'google', href: 'https://play.google.com/' },
        ]}
        appImage="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=600&fit=crop"
        layout="centered"
        background="base"
      />
    ),
  },
  {
    title: 'Split Layout - Image Left',
    render: () => (
      <AppDownload
        eyebrow="Mobile Experience"
        title="Your Fitness Journey in Your Pocket"
        description="Track workouts, monitor progress, and stay motivated with our comprehensive fitness app. Join millions of users worldwide."
        badges={[
          { store: 'apple', href: 'https://apps.apple.com/' },
          { store: 'google', href: 'https://play.google.com/' },
        ]}
        appImage="https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=300&h=600&fit=crop"
        layout="split-left"
        background="subtle"
        rating={{ value: 4.8, count: '12.5K' }}
      />
    ),
  },
  {
    title: 'Split Layout - Image Right',
    render: () => (
      <AppDownload
        title="Banking Made Simple"
        description="Manage your finances with ease. Send money, track spending, and save smarter with our award-winning banking app."
        badges={[
          { store: 'apple', href: 'https://apps.apple.com/' },
          { store: 'google', href: 'https://play.google.com/' },
        ]}
        appImage="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=300&h=600&fit=crop"
        layout="split-right"
        background="gradient"
        rating={{ value: 4.9, count: '8.2K' }}
      />
    ),
  },
  {
    title: 'With Features',
    render: () => (
      <AppDownload
        eyebrow="Featured App"
        title="Everything You Need in One Place"
        description="Download today and discover why millions trust us for their daily productivity needs."
        badges={[
          { store: 'apple', href: 'https://apps.apple.com/' },
          { store: 'google', href: 'https://play.google.com/' },
        ]}
        features={[
          {
            icon: <Shield size={24} />,
            title: 'Secure & Private',
            description: 'Bank-level encryption protects your data',
          },
          {
            icon: <Zap size={24} />,
            title: 'Lightning Fast',
            description: 'Optimized performance on all devices',
          },
          {
            icon: <Heart size={24} />,
            title: 'Loved by Users',
            description: '4.8 stars from 50K+ reviews',
          },
        ]}
        layout="centered"
        background="base"
      />
    ),
  },
  {
    title: 'With QR Code',
    render: () => (
      <AppDownload
        title="Scan to Download"
        description="Point your camera at the QR code to download our app instantly."
        badges={[
          { store: 'apple', href: 'https://apps.apple.com/' },
          { store: 'google', href: 'https://play.google.com/' },
        ]}
        qrCode="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://example.com/app"
        showQrCode={true}
        layout="centered"
        background="subtle"
        compact={true}
      />
    ),
  },
];

export default previews;
