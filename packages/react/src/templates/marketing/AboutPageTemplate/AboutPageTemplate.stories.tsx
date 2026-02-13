import type { Meta, StoryObj } from '@storybook/react';
import { AboutPageTemplate } from './AboutPageTemplate';
import { Button } from '../../../components/Button';
import { Badge } from '../../../components/Badge';
import { Navbar } from '../../../components/Navbar';
import {
  Twitter,
  Github,
  Linkedin,
  Building2,
  Rocket,
  Users,
  Globe,
  Heart,
  Award,
} from 'lucide-react';

const meta: Meta<typeof AboutPageTemplate> = {
  title: 'Templates/Marketing/About',
  component: AboutPageTemplate,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A complete about/company page template with hero, stats, timeline, team, and gallery sections.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AboutPageTemplate>;

// Sample data
const COMPANY_STATS = [
  { value: '2019', label: 'Founded', icon: <Building2 size={24} /> },
  { value: '150+', label: 'Team Members', icon: <Users size={24} /> },
  { value: '50M+', label: 'Users Worldwide', icon: <Globe size={24} /> },
  { value: '$50M', label: 'Funding Raised', icon: <Rocket size={24} /> },
];

const COMPANY_TIMELINE = [
  {
    id: '1',
    date: '2019',
    title: 'Founded',
    description: 'Started in a small apartment with a big dream to revolutionize development.',
    status: 'completed' as const,
    icon: <Rocket size={20} />,
  },
  {
    id: '2',
    date: '2020',
    title: 'Seed Round',
    description: 'Raised $5M seed round led by top Silicon Valley investors.',
    status: 'completed' as const,
  },
  {
    id: '3',
    date: '2021',
    title: 'Product Launch',
    description: 'Launched our first product to overwhelming positive response.',
    status: 'completed' as const,
  },
  {
    id: '4',
    date: '2022',
    title: 'Series A',
    description: 'Raised $20M Series A to expand the team and product.',
    status: 'completed' as const,
  },
  {
    id: '5',
    date: '2023',
    title: '1M Users',
    description: 'Reached 1 million active users milestone.',
    status: 'completed' as const,
    icon: <Award size={20} />,
  },
  {
    id: '6',
    date: '2024',
    title: 'Global Expansion',
    description: 'Opened offices in London, Singapore, and Sydney.',
    status: 'current' as const,
    icon: <Globe size={20} />,
  },
];

const TEAM_MEMBERS = [
  {
    name: 'Alex Chen',
    role: 'CEO & Co-founder',
    bio: 'Previously led engineering at Google. Stanford CS graduate.',
    avatar: <img src="https://i.pravatar.cc/300?u=alex" alt="" />,
    socialLinks: [
      { platform: 'Twitter', href: 'https://twitter.com' },
      { platform: 'LinkedIn', href: 'https://linkedin.com' },
    ],
  },
  {
    name: 'Sarah Johnson',
    role: 'CTO & Co-founder',
    bio: 'Ex-Meta engineer. Built systems serving billions of users.',
    avatar: <img src="https://i.pravatar.cc/300?u=sarah" alt="" />,
    socialLinks: [
      { platform: 'GitHub', href: 'https://github.com' },
      { platform: 'Twitter', href: 'https://twitter.com' },
    ],
  },
  {
    name: 'Mike Rodriguez',
    role: 'VP of Design',
    bio: 'Former design lead at Airbnb. Passionate about user experience.',
    avatar: <img src="https://i.pravatar.cc/300?u=mike" alt="" />,
    socialLinks: [{ platform: 'Twitter', href: 'https://twitter.com' }],
  },
  {
    name: 'Emily Davis',
    role: 'VP of Engineering',
    bio: 'Built infrastructure at Netflix. Distributed systems expert.',
    avatar: <img src="https://i.pravatar.cc/300?u=emily" alt="" />,
    socialLinks: [
      { platform: 'GitHub', href: 'https://github.com' },
      { platform: 'LinkedIn', href: 'https://linkedin.com' },
    ],
  },
  {
    name: 'David Kim',
    role: 'VP of Product',
    bio: 'Previously PM at Stripe. Loves building products people love.',
    avatar: <img src="https://i.pravatar.cc/300?u=david" alt="" />,
    socialLinks: [{ platform: 'Twitter', href: 'https://twitter.com' }],
  },
  {
    name: 'Lisa Wang',
    role: 'VP of Marketing',
    bio: 'Former CMO at HubSpot. Expert in B2B SaaS marketing.',
    avatar: <img src="https://i.pravatar.cc/300?u=lisa" alt="" />,
    socialLinks: [{ platform: 'LinkedIn', href: 'https://linkedin.com' }],
  },
];

const STORY_CAROUSEL_ITEMS = [
  {
    image: <img src="https://picsum.photos/1200/675?random=20" alt="" />,
    eyebrow: 'Our Beginning',
    title: 'Started in a Garage',
    description: 'Like many great tech companies, we started small but dreamed big.',
    overlay: 'gradient' as const,
  },
  {
    image: <img src="https://picsum.photos/1200/675?random=21" alt="" />,
    eyebrow: 'Growth',
    title: 'Building the Team',
    description: 'We attracted top talent from around the world.',
    overlay: 'gradient' as const,
  },
  {
    image: <img src="https://picsum.photos/1200/675?random=22" alt="" />,
    eyebrow: 'Today',
    title: 'A Global Company',
    description: 'Now serving millions of users across 150+ countries.',
    overlay: 'gradient' as const,
  },
];

const GALLERY_CAROUSEL_ITEMS = [
  {
    image: <img src="https://picsum.photos/800/600?random=30" alt="" />,
    title: 'San Francisco HQ',
    description: 'Our headquarters in the heart of SOMA',
  },
  {
    image: <img src="https://picsum.photos/800/600?random=31" alt="" />,
    title: 'London Office',
    description: 'Our European headquarters',
  },
  {
    image: <img src="https://picsum.photos/800/600?random=32" alt="" />,
    title: 'Singapore Office',
    description: 'Our Asia-Pacific hub',
  },
  {
    image: <img src="https://picsum.photos/800/600?random=33" alt="" />,
    title: 'Team Retreat',
    description: 'Annual all-hands in Hawaii',
  },
];

const FOOTER_LINKS = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '/features' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Changelog', href: '/changelog' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Careers', href: '/careers' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '/docs' },
      { label: 'API Reference', href: '/api' },
      { label: 'Community', href: '/community' },
    ],
  },
];

/**
 * Default about page with all sections
 */
export const Default: Story = {
  args: {
    navbar: {
      variant: 'solid',
      sticky: true,
      children: (
        <>
          <Navbar.Brand href="/">
            <span style={{ fontWeight: 700, fontSize: 'var(--text-xl)' }}>Acme</span>
          </Navbar.Brand>
          <Navbar.Nav>
            <Navbar.Link href="/features">Features</Navbar.Link>
            <Navbar.Link href="/pricing">Pricing</Navbar.Link>
            <Navbar.Link href="/about" active>
              About
            </Navbar.Link>
            <Navbar.Link href="/careers">Careers</Navbar.Link>
          </Navbar.Nav>
          <Navbar.Actions>
            <Button variant="ghost">Sign In</Button>
            <Button variant="primary">Get Started</Button>
          </Navbar.Actions>
        </>
      ),
    },
    hero: {
      badge: <Badge variant="brand">Our Story</Badge>,
      headline: 'Building the future of development',
      description:
        "We're on a mission to make software development accessible to everyone. Founded in 2019, we've grown from a small team to a global company serving millions.",
      align: 'center',
      size: 'md',
    },
    stats: {
      stats: [
        { value: '2019', label: 'Founded' },
        { value: '150+', label: 'Team Members' },
        { value: '50M+', label: 'Users Worldwide' },
        { value: '$50M', label: 'Funding Raised' },
      ],
      highlightValue: true,
    },
    timeline: {
      eyebrow: 'Our Journey',
      title: 'From garage to global',
      events: COMPANY_TIMELINE,
      alternating: true,
    },
    team: {
      eyebrow: 'Our Team',
      title: 'Meet the people behind Acme',
      description: 'A diverse team of builders, dreamers, and problem solvers.',
      members: TEAM_MEMBERS,
      columns: 3,
    },
    cta: {
      headline: 'Join our team',
      description: "We're always looking for talented people to join us on our mission.",
      actions: (
        <>
          <Button size="lg">View Open Positions</Button>
          <Button variant="ghost" size="lg">
            Our Culture
          </Button>
        </>
      ),
    },
    footer: {
      brand: {
        name: 'Acme Inc',
        description: 'Building the future of development.',
      },
      linkGroups: FOOTER_LINKS,
      socialLinks: [
        { label: 'Twitter', href: 'https://twitter.com', icon: <Twitter size={20} /> },
        { label: 'GitHub', href: 'https://github.com', icon: <Github size={20} /> },
        { label: 'LinkedIn', href: 'https://linkedin.com', icon: <Linkedin size={20} /> },
      ],
      copyright: `${new Date().getFullYear()} Acme Inc. All rights reserved.`,
    },
  },
};

/**
 * About page with story and gallery carousels
 */
export const WithCarousels: Story = {
  args: {
    ...Default.args,
    storyCarousel: {
      title: 'Our Story',
      items: STORY_CAROUSEL_ITEMS,
    },
    galleryCarousel: {
      eyebrow: 'Our Offices',
      title: 'Where we work',
      description: 'Take a peek inside our offices around the world',
      items: GALLERY_CAROUSEL_ITEMS,
    },
  },
};

/**
 * Team-focused about page
 */
export const TeamFocused: Story = {
  args: {
    navbar: Default.args?.navbar,
    hero: {
      headline: 'Meet our team',
      description: 'The talented people building Acme and shaping the future of development.',
      align: 'center',
      size: 'sm',
    },
    team: {
      members: TEAM_MEMBERS,
      columns: 3,
      variant: 'cards',
    },
    cta: {
      headline: 'Want to join us?',
      description: "We're hiring across all teams.",
      actions: <Button size="lg">View Careers</Button>,
    },
    footer: Default.args?.footer,
  },
};

/**
 * Minimal about page
 */
export const Minimal: Story = {
  args: {
    hero: {
      headline: 'About Acme',
      description: "We're building tools that empower developers to ship faster.",
      align: 'center',
      size: 'md',
    },
    stats: {
      stats: COMPANY_STATS,
    },
    cta: {
      headline: 'Learn more',
      actions: <Button size="lg">Read our blog</Button>,
    },
    footer: {
      brand: { name: 'Acme' },
      copyright: `${new Date().getFullYear()} Acme Inc.`,
    },
  },
};

/**
 * Mission-focused about page
 */
export const MissionFocused: Story = {
  args: {
    navbar: Default.args?.navbar,
    hero: {
      badge: (
        <Badge variant="brand">
          <Heart size={14} style={{ marginRight: 4 }} /> Our Mission
        </Badge>
      ),
      headline: 'Democratizing software development',
      description:
        'We believe everyone should have the tools to bring their ideas to life. Our mission is to remove the barriers that stand between imagination and implementation.',
      align: 'center',
      size: 'lg',
    },
    storyCarousel: {
      title: 'Our Values',
      items: [
        {
          image: <img src="https://picsum.photos/1200/675?random=40" alt="" />,
          eyebrow: 'Value #1',
          title: 'User First',
          description: 'Every decision starts with the user in mind.',
          overlay: 'gradient' as const,
        },
        {
          image: <img src="https://picsum.photos/1200/675?random=41" alt="" />,
          eyebrow: 'Value #2',
          title: 'Ship Fast',
          description: 'Move quickly and iterate based on feedback.',
          overlay: 'gradient' as const,
        },
        {
          image: <img src="https://picsum.photos/1200/675?random=42" alt="" />,
          eyebrow: 'Value #3',
          title: 'Be Transparent',
          description: 'Open communication builds trust.',
          overlay: 'gradient' as const,
        },
      ],
    },
    stats: {
      eyebrow: 'Impact',
      title: 'By the numbers',
      stats: COMPANY_STATS,
      variant: 'cards',
    },
    timeline: {
      title: 'Our journey',
      events: COMPANY_TIMELINE,
    },
    cta: {
      headline: 'Join our mission',
      description: 'Help us build tools that empower millions of developers.',
      actions: (
        <>
          <Button size="lg">Explore Careers</Button>
          <Button variant="ghost" size="lg">
            Read Our Blog
          </Button>
        </>
      ),
      variant: 'brand',
    },
    footer: Default.args?.footer,
  },
};
