/**
 * Preview module for Features section
 * Grid-based features with icons, badges, and hover effects
 */

import React from 'react';
import { Features } from '@orion-ds/react';
import { Zap, Shield, Code, Smartphone, Globe, Lock, Rocket, Cloud, Database, Users } from 'lucide-react';

export const previews = [
  {
    title: 'Basic Features (3 columns)',
    render: () => (
      <Features
        eyebrow="Features"
        title="Everything you need to succeed"
        description="Powerful tools designed for modern teams and products"
        items={[
          {
            icon: <Zap size={24} />,
            title: 'Lightning Fast',
            description: 'Built for speed with optimized performance and instant load times',
          },
          {
            icon: <Shield size={24} />,
            title: 'Bank-Grade Security',
            description: 'Enterprise-level security with end-to-end encryption and compliance',
          },
          {
            icon: <Code size={24} />,
            title: 'Developer First',
            description: 'Clean APIs, comprehensive docs, and tools developers love',
          },
        ]}
        columns={3}
      />
    ),
  },
  {
    title: '4 Column Grid',
    render: () => (
      <Features
        title="Platform Features"
        description="All the tools you need in one place"
        items={[
          {
            icon: <Cloud size={24} />,
            title: 'Cloud Infrastructure',
            description: 'Scalable cloud hosting with 99.9% uptime guarantee',
          },
          {
            icon: <Database size={24} />,
            title: 'Real-Time Data',
            description: 'Live data synchronization across all your devices',
          },
          {
            icon: <Users size={24} />,
            title: 'Team Collaboration',
            description: 'Work together seamlessly with built-in collaboration tools',
          },
          {
            icon: <Lock size={24} />,
            title: 'Advanced Security',
            description: 'Multi-factor authentication and role-based access control',
          },
        ]}
        columns={4}
        background="subtle"
      />
    ),
  },
  {
    title: '2 Column Layout',
    render: () => (
      <Features
        title="Why choose us"
        items={[
          {
            icon: <Rocket size={24} />,
            title: 'Launch Faster',
            description: 'Get to market quickly with pre-built components and templates. Save months of development time.',
            badge: 'Popular',
          },
          {
            icon: <Smartphone size={24} />,
            title: 'Mobile Optimized',
            description: 'Every feature works beautifully on any device. Responsive design built in from day one.',
            badge: 'New',
          },
        ]}
        columns={2}
        background="none"
      />
    ),
  },
  {
    title: 'With Links',
    render: () => (
      <Features
        eyebrow="Platform"
        title="Explore Our Capabilities"
        items={[
          {
            icon: <Globe size={24} />,
            title: 'Global CDN',
            description: 'Lightning-fast content delivery across 200+ edge locations worldwide',
            href: '#cdn',
          },
          {
            icon: <Database size={24} />,
            title: 'Managed Database',
            description: 'Fully managed PostgreSQL with automatic backups and scaling',
            href: '#database',
          },
          {
            icon: <Shield size={24} />,
            title: 'DDoS Protection',
            description: 'Enterprise-grade protection against threats and attacks',
            href: '#security',
          },
        ]}
        columns={3}
      />
    ),
  },
  {
    title: 'Left-Aligned Header',
    render: () => (
      <Features
        title="Product Capabilities"
        description="Everything you need to build, deploy, and scale your application"
        items={[
          {
            icon: <Code size={24} />,
            title: 'API Access',
            description: 'RESTful and GraphQL APIs with comprehensive documentation',
          },
          {
            icon: <Cloud size={24} />,
            title: 'Auto Scaling',
            description: 'Automatically scale resources based on traffic and demand',
          },
          {
            icon: <Lock size={24} />,
            title: 'Compliance',
            description: 'SOC 2, GDPR, and HIPAA compliant infrastructure',
          },
        ]}
        columns={3}
        centered={false}
        background="subtle"
      />
    ),
  },
];

export default previews;
