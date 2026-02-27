/**
 * Preview module for LogoCloud section
 * Logo clouds for displaying partner/client logos with multiple layouts
 */

import React from 'react';
import { LogoCloud } from '@orion-ds/blocks';
import { Badge } from '@orion-ds/react';

// SVG logo components (simplified placeholders)
const VercelLogo = () => (
  <svg width="100" height="24" viewBox="0 0 100 24" fill="currentColor">
    <path d="M12 0L24 24H0L12 0Z" />
  </svg>
);

const StripeLogo = () => (
  <svg width="100" height="40" viewBox="0 0 100 40" fill="currentColor">
    <rect width="100" height="8" y="16" rx="4" />
  </svg>
);

const LinearLogo = () => (
  <svg width="100" height="30" viewBox="0 0 100 30" fill="currentColor">
    <circle cx="15" cy="15" r="12" />
    <rect x="35" y="5" width="60" height="20" rx="2" />
  </svg>
);

const NotionLogo = () => (
  <svg width="100" height="30" viewBox="0 0 100 30" fill="currentColor">
    <path d="M10 5L15 25L25 5H10Z" />
    <rect x="40" y="8" width="55" height="14" rx="2" />
  </svg>
);

const FigmaLogo = () => (
  <svg width="80" height="40" viewBox="0 0 80 40" fill="currentColor">
    <circle cx="20" cy="10" r="8" />
    <circle cx="20" cy="30" r="8" />
    <rect x="32" y="12" width="40" height="16" rx="8" />
  </svg>
);

const GitHubLogo = () => (
  <svg width="90" height="30" viewBox="0 0 90 30" fill="currentColor">
    <circle cx="15" cy="15" r="13" />
    <rect x="35" y="8" width="50" height="14" rx="2" />
  </svg>
);

const logos = [
  { logo: <VercelLogo />, name: 'Vercel', href: 'https://vercel.com' },
  { logo: <StripeLogo />, name: 'Stripe', href: 'https://stripe.com' },
  { logo: <LinearLogo />, name: 'Linear', href: 'https://linear.app' },
  { logo: <NotionLogo />, name: 'Notion', href: 'https://notion.so' },
  { logo: <FigmaLogo />, name: 'Figma', href: 'https://figma.com' },
  { logo: <GitHubLogo />, name: 'GitHub', href: 'https://github.com' },
];

const extendedLogos = [
  ...logos,
  { logo: <VercelLogo />, name: 'Slack' },
  { logo: <StripeLogo />, name: 'Shopify' },
  { logo: <LinearLogo />, name: 'Discord' },
  { logo: <NotionLogo />, name: 'Dropbox' },
];

export const previews = [
  {
    title: 'Inline Layout - Grayscale',
    render: () => (
      <LogoCloud
        eyebrow="Trusted by"
        title="Industry leaders use Orion"
        description="Join thousands of companies building with our design system"
        logos={logos}
        layout="inline"
        grayscale
        centered
        size="md"
      />
    ),
  },
  {
    title: 'Grid Layout - 5 Columns',
    render: () => (
      <LogoCloud
        eyebrow={<Badge variant="outline">Partners</Badge>}
        title="Trusted by the best teams"
        logos={extendedLogos}
        layout="grid"
        columns={5}
        grayscale
        background="subtle"
        size="md"
      />
    ),
  },
  {
    title: 'Grid Layout - 4 Columns',
    render: () => (
      <LogoCloud
        title="Powering next-generation products"
        logos={logos}
        layout="grid"
        columns={4}
        grayscale={false}
        background="none"
        size="lg"
      />
    ),
  },
  {
    title: 'Marquee Layout - Animated',
    render: () => (
      <LogoCloud
        eyebrow="Join the ecosystem"
        title="Used by teams worldwide"
        logos={extendedLogos}
        layout="marquee"
        marqueeSpeed="normal"
        grayscale
        size="md"
        background="base"
      />
    ),
  },
  {
    title: 'Compact - Without Header',
    render: () => (
      <div style={{ padding: 'var(--spacing-8)', background: 'var(--surface-base)' }}>
        <LogoCloud
          logos={logos.slice(0, 4)}
          layout="inline"
          grayscale
          size="sm"
          background="none"
          centered
        />
      </div>
    ),
  },
];

export default previews;
