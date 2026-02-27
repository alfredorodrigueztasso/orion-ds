/**
 * Preview module for Timeline section
 * Chronological event timelines for displaying history and progress
 */

import React from 'react';
import { Timeline } from '@orion-ds/blocks';
import { Badge } from '@orion-ds/react';
import { Rocket, Users, TrendingUp, Award, Globe, Zap } from 'lucide-react';

export const previews = [
  {
    title: 'Vertical Timeline - Company History',
    render: () => (
      <Timeline
        eyebrow={<Badge>Our Journey</Badge>}
        title="The Orion story"
        description="From idea to the design system trusted by thousands"
        orientation="vertical"
        showConnector={true}
        events={[
          {
            id: 1,
            date: 'January 2020',
            title: 'Company Founded',
            description: 'Started with a vision to eliminate UI hallucination and create the first AI-native design system.',
            icon: <Rocket size={20} />,
            status: 'completed',
          },
          {
            id: 2,
            date: 'June 2020',
            title: 'First 100 Users',
            description: 'Early adopters from Y Combinator startups validate the Chain of Truth architecture.',
            icon: <Users size={20} />,
            status: 'completed',
          },
          {
            id: 3,
            date: 'March 2021',
            title: 'Series A Funding',
            description: 'Raised $10M led by Sequoia Capital to scale engineering and expand the component library.',
            icon: <TrendingUp size={20} />,
            status: 'completed',
          },
          {
            id: 4,
            date: 'November 2022',
            title: 'Enterprise Launch',
            description: 'Released multi-brand support and SSO integration. First Fortune 500 client signed.',
            icon: <Award size={20} />,
            status: 'completed',
          },
          {
            id: 5,
            date: 'August 2024',
            title: 'Global Expansion',
            description: 'Reached 10,000+ teams across 150 countries. Opened offices in London and Singapore.',
            icon: <Globe size={20} />,
            status: 'completed',
          },
          {
            id: 6,
            date: 'Q1 2025',
            title: 'AI-First Features',
            description: 'Launching MCP integration and autonomous component generation with Claude.',
            icon: <Zap size={20} />,
            status: 'current',
          },
        ]}
        background="subtle"
      />
    ),
  },
  {
    title: 'Alternating Timeline',
    render: () => (
      <Timeline
        title="Product Roadmap"
        description="Key milestones in our product evolution"
        orientation="vertical"
        alternating={true}
        events={[
          {
            id: 1,
            date: 'Q1 2024',
            title: 'v2.0 Release',
            description: 'TypeScript rewrite with full type safety. 50+ new components added.',
            status: 'completed',
          },
          {
            id: 2,
            date: 'Q2 2024',
            title: 'Multi-Brand Support',
            description: 'Launch brand theming system. White-label capabilities for enterprise.',
            status: 'completed',
          },
          {
            id: 3,
            date: 'Q3 2024',
            title: 'CLI & Registry',
            description: 'shadcn-style component copying. Zero dependencies, full control.',
            status: 'completed',
          },
          {
            id: 4,
            date: 'Q4 2024',
            title: 'MCP Server',
            description: 'Model Context Protocol integration for AI agents. Autonomous UI generation.',
            status: 'current',
          },
          {
            id: 5,
            date: 'Q1 2025',
            title: 'Visual Regression',
            description: 'Percy integration for automated visual testing across all brands.',
            status: 'upcoming',
          },
        ]}
        background="base"
      />
    ),
  },
  {
    title: 'Horizontal Timeline - Compact',
    render: () => (
      <Timeline
        title="Deployment Pipeline"
        orientation="horizontal"
        showConnector={true}
        events={[
          { id: 1, date: 'Step 1', title: 'Code Review', status: 'completed' },
          { id: 2, date: 'Step 2', title: 'Build & Test', status: 'completed' },
          { id: 3, date: 'Step 3', title: 'Staging Deploy', status: 'current' },
          { id: 4, date: 'Step 4', title: 'Production', status: 'upcoming' },
        ]}
        background="none"
        compact={true}
      />
    ),
  },
  {
    title: 'With Links and Content',
    render: () => (
      <Timeline
        eyebrow="Release Notes"
        title="Recent Updates"
        description="Latest features and improvements"
        orientation="vertical"
        events={[
          {
            id: 1,
            date: 'Feb 14, 2025',
            title: 'v3.2.0 Released',
            description: 'Major performance improvements and new Chat component.',
            href: '#',
            status: 'completed',
            content: (
              <div style={{ marginTop: 'var(--spacing-2)' }}>
                <Badge variant="brand">New</Badge>
                <span style={{ marginLeft: 'var(--spacing-2)', color: 'var(--text-secondary)', fontSize: '14px' }}>
                  45% faster initial load
                </span>
              </div>
            ),
          },
          {
            id: 2,
            date: 'Feb 10, 2025',
            title: 'Documentation Update',
            description: 'Added 50+ new examples and AI-first development guides.',
            href: '#',
            status: 'completed',
          },
          {
            id: 3,
            date: 'Feb 5, 2025',
            title: 'Security Patch',
            description: 'Updated dependencies to address CVE-2025-1234.',
            href: '#',
            status: 'completed',
          },
        ]}
        background="subtle"
      />
    ),
  },
  {
    title: 'Minimal - No Connector',
    render: () => (
      <Timeline
        title="Career Path"
        orientation="vertical"
        showConnector={false}
        events={[
          {
            id: 1,
            date: '2015-2018',
            title: 'Junior Designer',
            description: 'Started career at small agency. Learned fundamentals of UI/UX design.',
          },
          {
            id: 2,
            date: '2018-2021',
            title: 'Design Systems Lead',
            description: 'Built design system for Series B startup. Team grew from 5 to 50.',
          },
          {
            id: 3,
            date: '2021-2024',
            title: 'Principal Designer',
            description: 'Led design systems at Fortune 500 company. Managed team of 12.',
          },
          {
            id: 4,
            date: '2024-Present',
            title: 'VP of Design',
            description: 'Currently leading design org at Orion. Building the future of design systems.',
          },
        ]}
        background="base"
        compact={false}
      />
    ),
  },
];

export default previews;
