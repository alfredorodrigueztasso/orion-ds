/**
 * Preview module for Footer section
 * Flexible footer with brand info, link groups, social links, and legal links
 */

import React from 'react';
import { Footer } from '@orion-ds/react';
import { Twitter, Github, Linkedin, Youtube, Mail } from 'lucide-react';

const basicLinkGroups = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Changelog', href: '#changelog' },
      { label: 'Roadmap', href: '#roadmap' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Blog', href: '#blog' },
      { label: 'Careers', href: '#careers' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '#docs' },
      { label: 'API Reference', href: '#api' },
      { label: 'Community', href: '#community' },
      { label: 'Support', href: '#support' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '#privacy' },
      { label: 'Terms', href: '#terms' },
      { label: 'Security', href: '#security' },
      { label: 'Compliance', href: '#compliance' },
    ],
  },
];

const socialLinks = [
  { label: 'Twitter', href: 'https://twitter.com', icon: <Twitter size={20} /> },
  { label: 'GitHub', href: 'https://github.com', icon: <Github size={20} /> },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: <Linkedin size={20} /> },
  { label: 'YouTube', href: 'https://youtube.com', icon: <Youtube size={20} /> },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '#privacy' },
  { label: 'Terms of Service', href: '#terms' },
  { label: 'Cookie Policy', href: '#cookies' },
];

export const previews = [
  {
    title: 'Default Footer',
    render: () => (
      <Footer
        brand={{
          name: 'Orion',
          description: 'AI-first design system built on the Chain of Truth principle',
        }}
        linkGroups={basicLinkGroups}
        socialLinks={socialLinks}
        legalLinks={legalLinks}
      />
    ),
  },
  {
    title: 'With Logo',
    render: () => (
      <Footer
        brand={{
          name: 'Orion',
          logo: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
              <rect width="32" height="32" rx="8" />
            </svg>
          ),
          description: 'Design system for modern applications',
        }}
        linkGroups={basicLinkGroups.slice(0, 3)}
        socialLinks={socialLinks}
        copyright="© 2024 Orion Design System. All rights reserved."
      />
    ),
  },
  {
    title: 'Minimal Variant',
    render: () => (
      <Footer
        brand={{
          name: 'Orion',
          description: 'Building the future of design systems',
        }}
        linkGroups={[
          {
            title: 'Product',
            links: [
              { label: 'Features', href: '#features' },
              { label: 'Pricing', href: '#pricing' },
              { label: 'Documentation', href: '#docs' },
            ],
          },
          {
            title: 'Company',
            links: [
              { label: 'About', href: '#about' },
              { label: 'Blog', href: '#blog' },
              { label: 'Contact', href: '#contact' },
            ],
          },
        ]}
        socialLinks={socialLinks}
        legalLinks={legalLinks}
        variant="minimal"
        background="base"
      />
    ),
  },
  {
    title: 'Centered Layout',
    render: () => (
      <Footer
        brand={{
          name: 'Orion',
          description: 'Trusted by teams worldwide',
        }}
        linkGroups={[
          {
            title: 'Links',
            links: [
              { label: 'Home', href: '#' },
              { label: 'Features', href: '#features' },
              { label: 'Pricing', href: '#pricing' },
              { label: 'About', href: '#about' },
              { label: 'Contact', href: '#contact' },
            ],
          },
        ]}
        socialLinks={socialLinks}
        legalLinks={legalLinks}
        variant="centered"
      />
    ),
  },
  {
    title: 'With Newsletter',
    render: () => (
      <Footer
        brand={{
          name: 'Orion',
          description: 'Stay ahead with our AI-first approach to design systems',
        }}
        linkGroups={basicLinkGroups.slice(0, 3)}
        socialLinks={socialLinks}
        legalLinks={legalLinks}
        newsletter={
          <div style={{ maxWidth: '320px' }}>
            <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
              Subscribe to our newsletter
            </h4>
            <p style={{ marginBottom: '16px', fontSize: '13px', opacity: 0.8 }}>
              Get updates on new features and best practices
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <input
                type="email"
                placeholder="your@email.com"
                style={{
                  flex: 1,
                  padding: '8px 12px',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-control)',
                  background: 'var(--surface-base)',
                  color: 'var(--text-primary)',
                  fontSize: '14px',
                }}
              />
              <button
                style={{
                  padding: '8px 16px',
                  background: 'var(--interactive-primary)',
                  color: 'var(--interactive-primary-text)',
                  border: 'none',
                  borderRadius: 'var(--radius-control)',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        }
      />
    ),
  },
];

export default previews;
