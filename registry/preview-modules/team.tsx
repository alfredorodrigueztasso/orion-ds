/**
 * Preview module for Team section
 * Team member sections with avatars, roles, bios, and social links
 */

import React from 'react';
import { Team, Badge } from '@orion-ds/react';
import { Twitter, Linkedin, Github } from 'lucide-react';

export const previews = [
  {
    title: 'Default Team - 4 Columns',
    render: () => (
      <Team
        eyebrow={<Badge>Our Team</Badge>}
        title="Meet the people behind Orion"
        description="A passionate team building the future of design systems"
        members={[
          {
            name: 'Sarah Chen',
            role: 'CEO & Founder',
            bio: 'Former design lead at Stripe. 10+ years in design systems.',
            avatarSrc: 'https://i.pravatar.cc/200?img=1',
            socialLinks: [
              { platform: 'twitter', href: '#', icon: <Twitter size={18} /> },
              { platform: 'linkedin', href: '#', icon: <Linkedin size={18} /> },
            ],
          },
          {
            name: 'Marcus Johnson',
            role: 'CTO',
            bio: 'Built design systems at Figma and Linear. Loves TypeScript.',
            avatarSrc: 'https://i.pravatar.cc/200?img=12',
            socialLinks: [
              { platform: 'github', href: '#', icon: <Github size={18} /> },
              { platform: 'twitter', href: '#', icon: <Twitter size={18} /> },
            ],
          },
          {
            name: 'Emily Rodriguez',
            role: 'Head of Design',
            bio: 'Previously at Airbnb. Passionate about accessible design.',
            avatarSrc: 'https://i.pravatar.cc/200?img=5',
            socialLinks: [
              { platform: 'linkedin', href: '#', icon: <Linkedin size={18} /> },
            ],
          },
          {
            name: 'David Kim',
            role: 'Engineering Lead',
            bio: 'Architected token systems at Shopify. Open-source contributor.',
            avatarSrc: 'https://i.pravatar.cc/200?img=14',
            socialLinks: [
              { platform: 'github', href: '#', icon: <Github size={18} /> },
              { platform: 'linkedin', href: '#', icon: <Linkedin size={18} /> },
            ],
          },
        ]}
        columns={4}
        variant="default"
        background="base"
      />
    ),
  },
  {
    title: 'Card Variant - 3 Columns',
    render: () => (
      <Team
        title="Leadership Team"
        description="Experienced leaders from top tech companies"
        members={[
          {
            name: 'Lisa Thompson',
            role: 'VP of Product',
            bio: 'Led product teams at Meta and Netflix. Expert in design systems at scale with 15+ years of experience.',
            avatarSrc: 'https://i.pravatar.cc/200?img=9',
            socialLinks: [
              { platform: 'twitter', href: '#', icon: <Twitter size={18} /> },
              { platform: 'linkedin', href: '#', icon: <Linkedin size={18} /> },
            ],
          },
          {
            name: 'James Wilson',
            role: 'VP of Engineering',
            bio: 'Built infrastructure at Google and Uber. Passionate about developer experience and scalability.',
            avatarSrc: 'https://i.pravatar.cc/200?img=13',
            socialLinks: [
              { platform: 'github', href: '#', icon: <Github size={18} /> },
            ],
          },
          {
            name: 'Maya Patel',
            role: 'Head of Customer Success',
            bio: 'Helped 500+ teams adopt design systems. Previously led support at Atlassian.',
            avatarSrc: 'https://i.pravatar.cc/200?img=20',
            socialLinks: [
              { platform: 'linkedin', href: '#', icon: <Linkedin size={18} /> },
              { platform: 'twitter', href: '#', icon: <Twitter size={18} /> },
            ],
          },
        ]}
        columns={3}
        variant="cards"
        background="subtle"
      />
    ),
  },
  {
    title: 'Compact Variant - 4 Columns',
    render: () => (
      <Team
        eyebrow="Contributors"
        title="Core maintainers"
        members={[
          {
            name: 'Alex Turner',
            role: 'Design Systems Engineer',
            avatarSrc: 'https://i.pravatar.cc/200?img=15',
            socialLinks: [{ platform: 'github', href: '#', icon: <Github size={18} /> }],
          },
          {
            name: 'Nina Garcia',
            role: 'UI Engineer',
            avatarSrc: 'https://i.pravatar.cc/200?img=16',
            socialLinks: [{ platform: 'github', href: '#', icon: <Github size={18} /> }],
          },
          {
            name: 'Ryan Cooper',
            role: 'UX Engineer',
            avatarSrc: 'https://i.pravatar.cc/200?img=17',
            socialLinks: [{ platform: 'github', href: '#', icon: <Github size={18} /> }],
          },
          {
            name: 'Priya Sharma',
            role: 'Documentation Lead',
            avatarSrc: 'https://i.pravatar.cc/200?img=18',
            socialLinks: [{ platform: 'github', href: '#', icon: <Github size={18} /> }],
          },
        ]}
        columns={4}
        variant="compact"
        background="base"
      />
    ),
  },
  {
    title: 'Two Column Layout - Large Profiles',
    render: () => (
      <Team
        eyebrow={<Badge variant="brand">Founders</Badge>}
        title="Founded by design system experts"
        description="Decades of combined experience building design systems at scale"
        members={[
          {
            name: 'Jennifer Lee',
            role: 'Co-Founder & CEO',
            bio: 'Previously led design systems at Airbnb and Pinterest. Published author on component architecture. Passionate about making design systems accessible to all.',
            avatarSrc: 'https://i.pravatar.cc/200?img=10',
            socialLinks: [
              { platform: 'twitter', href: '#', icon: <Twitter size={18} /> },
              { platform: 'linkedin', href: '#', icon: <Linkedin size={18} /> },
              { platform: 'github', href: '#', icon: <Github size={18} /> },
            ],
          },
          {
            name: 'Michael Zhang',
            role: 'Co-Founder & CTO',
            bio: 'Built token systems at Shopify and Figma. Open-source contributor with 50K+ GitHub stars. Expert in design token automation and AI-first architectures.',
            avatarSrc: 'https://i.pravatar.cc/200?img=33',
            socialLinks: [
              { platform: 'github', href: '#', icon: <Github size={18} /> },
              { platform: 'twitter', href: '#', icon: <Twitter size={18} /> },
              { platform: 'linkedin', href: '#', icon: <Linkedin size={18} /> },
            ],
          },
        ]}
        columns={2}
        variant="cards"
        background="subtle"
        centered={true}
      />
    ),
  },
  {
    title: 'With Initials Fallback',
    render: () => (
      <Team
        title="Advisory Board"
        members={[
          {
            name: 'Robert Smith',
            role: 'Advisor - Design',
            avatarInitials: 'RS',
            socialLinks: [{ platform: 'linkedin', href: '#', icon: <Linkedin size={18} /> }],
          },
          {
            name: 'Amanda Brown',
            role: 'Advisor - Engineering',
            avatarInitials: 'AB',
            socialLinks: [{ platform: 'linkedin', href: '#', icon: <Linkedin size={18} /> }],
          },
          {
            name: 'Kevin Martinez',
            role: 'Advisor - Product',
            avatarInitials: 'KM',
            socialLinks: [{ platform: 'linkedin', href: '#', icon: <Linkedin size={18} /> }],
          },
        ]}
        columns={3}
        variant="default"
        background="base"
      />
    ),
  },
];

export default previews;
