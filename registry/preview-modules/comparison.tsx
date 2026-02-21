/**
 * Preview module for Comparison section
 * Comparison table for products, plans, or features
 */

import React from 'react';
import { Comparison } from '@orion-ds/react';
import type { ComparisonColumn, ComparisonFeature } from '@orion-ds/react';

const pricingColumns: ComparisonColumn[] = [
  {
    title: 'Starter',
    subtitle: '$9/month',
    ctaLabel: 'Get Started',
    ctaHref: '#',
  },
  {
    title: 'Professional',
    subtitle: '$29/month',
    highlighted: true,
    badge: 'Popular',
    ctaLabel: 'Start Free Trial',
    ctaHref: '#',
  },
  {
    title: 'Enterprise',
    subtitle: 'Custom pricing',
    ctaLabel: 'Contact Sales',
    ctaHref: '#',
  },
];

const pricingFeatures: ComparisonFeature[] = [
  {
    name: 'Users',
    values: ['1 user', '5 users', 'Unlimited'],
    category: 'Team',
  },
  {
    name: 'Projects',
    values: ['3 projects', '25 projects', 'Unlimited'],
    category: 'Team',
  },
  {
    name: 'Storage',
    values: ['10 GB', '100 GB', 'Unlimited'],
    category: 'Resources',
  },
  {
    name: 'File uploads',
    values: ['100 MB', '1 GB', '10 GB'],
    category: 'Resources',
  },
  {
    name: 'API access',
    values: [false, true, true],
    category: 'Integrations',
  },
  {
    name: 'Webhooks',
    values: [false, true, true],
    category: 'Integrations',
  },
  {
    name: 'Custom domains',
    values: [false, false, true],
    category: 'Integrations',
  },
  {
    name: 'Priority support',
    values: [false, true, true],
    category: 'Support',
  },
  {
    name: 'Dedicated account manager',
    values: [false, false, true],
    category: 'Support',
  },
];

const productColumns: ComparisonColumn[] = [
  {
    title: 'Basic Plan',
    subtitle: 'Essential features',
  },
  {
    title: 'Pro Plan',
    subtitle: 'Advanced capabilities',
    highlighted: true,
  },
  {
    title: 'Business Plan',
    subtitle: 'Full platform',
  },
];

const productFeatures: ComparisonFeature[] = [
  {
    name: 'Real-time collaboration',
    description: 'Work together with your team in real-time',
    values: [true, true, true],
  },
  {
    name: 'Version history',
    description: 'Track changes and restore previous versions',
    values: ['7 days', '30 days', 'Unlimited'],
  },
  {
    name: 'Export formats',
    description: 'Available file formats for export',
    values: ['PDF', 'PDF, PNG, SVG', 'All formats'],
  },
  {
    name: 'Custom branding',
    description: 'Add your logo and brand colors',
    values: [false, true, true],
  },
  {
    name: 'Analytics dashboard',
    description: 'Track usage and engagement metrics',
    values: [false, 'Basic', 'Advanced'],
  },
];

const competitorColumns: ComparisonColumn[] = [
  {
    title: 'Competitor A',
  },
  {
    title: 'Competitor B',
  },
  {
    title: 'Our Product',
    highlighted: true,
    badge: 'Best Value',
  },
];

const competitorFeatures: ComparisonFeature[] = [
  {
    name: 'Starting price',
    values: ['$15/mo', '$12/mo', '$9/mo'],
  },
  {
    name: 'Free tier',
    values: [false, true, true],
  },
  {
    name: 'Team collaboration',
    values: [true, true, true],
  },
  {
    name: 'API access',
    values: [false, true, true],
  },
  {
    name: 'Custom integrations',
    values: [false, false, true],
  },
  {
    name: '24/7 support',
    values: [false, 'Business only', true],
  },
  {
    name: 'Mobile apps',
    values: [true, true, true],
  },
  {
    name: 'Offline mode',
    values: [false, true, true],
  },
];

export const previews = [
  {
    title: 'Pricing Comparison',
    render: () => (
      <Comparison
        eyebrow="Pricing"
        title="Choose the right plan for your team"
        description="All plans include 14-day free trial. No credit card required."
        columns={pricingColumns}
        features={pricingFeatures}
        showCategories
      />
    ),
  },
  {
    title: 'Product Features',
    render: () => (
      <Comparison
        title="Compare Plans"
        description="Find the perfect fit for your needs"
        columns={productColumns}
        features={productFeatures}
        showDescriptions
        background="subtle"
      />
    ),
  },
  {
    title: 'Competitor Analysis',
    render: () => (
      <Comparison
        title="How We Stack Up"
        description="See why teams choose us over the competition"
        columns={competitorColumns}
        features={competitorFeatures}
        showCategories={false}
        stickyHeader
      />
    ),
  },
  {
    title: 'Compact Mode',
    render: () => (
      <Comparison
        title="Quick Comparison"
        columns={[
          { title: 'Free' },
          { title: 'Pro', highlighted: true },
          { title: 'Team' },
        ]}
        features={[
          {
            name: 'Users',
            values: ['1', '5', '10'],
          },
          {
            name: 'Storage',
            values: ['5 GB', '50 GB', '500 GB'],
          },
          {
            name: 'Support',
            values: [false, true, true],
          },
          {
            name: 'Analytics',
            values: [false, true, true],
          },
        ]}
        compact
        showCategories={false}
        background="none"
      />
    ),
  },
  {
    title: 'Two Column Comparison',
    render: () => (
      <Comparison
        title="Self-Hosted vs Cloud"
        description="Choose the deployment option that works best for you"
        columns={[
          {
            title: 'Self-Hosted',
            subtitle: 'Deploy on your infrastructure',
            ctaLabel: 'Download',
            ctaHref: '#',
          },
          {
            title: 'Cloud',
            subtitle: 'Fully managed service',
            highlighted: true,
            badge: 'Recommended',
            ctaLabel: 'Start Free Trial',
            ctaHref: '#',
          },
        ]}
        features={[
          {
            name: 'Setup time',
            values: ['1-2 days', '5 minutes'],
            category: 'Getting Started',
          },
          {
            name: 'Maintenance',
            values: ['Your responsibility', 'Fully managed'],
            category: 'Getting Started',
          },
          {
            name: 'Data location',
            values: ['Your servers', 'US/EU regions'],
            category: 'Security',
          },
          {
            name: 'Compliance',
            values: ['Your control', 'SOC 2, GDPR'],
            category: 'Security',
          },
          {
            name: 'Updates',
            values: ['Manual', 'Automatic'],
            category: 'Maintenance',
          },
          {
            name: 'Backup',
            values: ['Your setup', 'Automated daily'],
            category: 'Maintenance',
          },
        ]}
        showCategories
        showDescriptions={false}
      />
    ),
  },
];

export default previews;
