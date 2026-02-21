'use client';

import React from 'react';
import { Card, Alert } from '@/components/ClientComponents';
import * as OrionComponents from '@/components/ClientComponents';
import * as OrionSections from '@/components/ClientComponents';

interface TemplatePreviewProps {
  templateName: string;
  title?: string;
}

// Renderizar preview de templates
const getTemplatePreview = (name: string): React.ReactNode => {
  const { Hero, Features, CTA, Footer, Navbar, PageHeader, Card: CardComponent, Button } = OrionComponents as any;

  // Mapeo de templates a sus previews
  const previews: Record<string, React.ReactNode> = {
    'landing-page-template': Hero && Features && CTA && Footer && (
      <div style={{ background: 'var(--surface-base)', minHeight: '600px' }}>
        <Navbar variant="solid">
          <Navbar.Brand href="/">Brand</Navbar.Brand>
          <Navbar.Nav>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#about">About</a>
          </Navbar.Nav>
          <Navbar.Actions>
            <Button variant="primary" size="sm">Get Started</Button>
          </Navbar.Actions>
        </Navbar>

        <Hero
          layout="contained"
          align="center"
          title="Welcome to Our Product"
          subtitle="Build amazing things with our platform"
          actions={
            <>
              <Button variant="primary" size="lg">Get Started</Button>
              <Button variant="secondary" size="lg">Learn More</Button>
            </>
          }
        />

        <Features
          title="Key Features"
          description="Everything you need to succeed"
          layout="grid"
          items={[
            {
              title: 'Fast',
              description: 'Lightning-fast performance',
              icon: '⚡',
            },
            {
              title: 'Secure',
              description: 'Enterprise-grade security',
              icon: '🔒',
            },
            {
              title: 'Scalable',
              description: 'Grows with your needs',
              icon: '📈',
            },
          ]}
        />

        <CTA
          title="Ready to get started?"
          description="Join thousands of happy customers"
          actions={<Button variant="primary" size="lg">Sign Up Free</Button>}
        />

        <Footer />
      </div>
    ),

    'dashboard-template': PageHeader && (
      <div style={{ background: 'var(--surface-base)', minHeight: '600px', padding: 'var(--spacing-6)' }}>
        <PageHeader
          title="Dashboard"
          description="Welcome back! Here's what's happening."
          actions={<Button variant="primary">New Project</Button>}
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-4)', marginTop: 'var(--spacing-6)' }}>
          <CardComponent variant="elevated">
            <CardComponent.Header>Total Users</CardComponent.Header>
            <CardComponent.Body>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>1,234</div>
              <div style={{ color: 'var(--text-success)', marginTop: 'var(--spacing-2)' }}>
                +12% from last month
              </div>
            </CardComponent.Body>
          </CardComponent>

          <CardComponent variant="elevated">
            <CardComponent.Header>Revenue</CardComponent.Header>
            <CardComponent.Body>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>$45.2K</div>
              <div style={{ color: 'var(--text-success)', marginTop: 'var(--spacing-2)' }}>
                +18% from last month
              </div>
            </CardComponent.Body>
          </CardComponent>

          <CardComponent variant="elevated">
            <CardComponent.Header>Active Projects</CardComponent.Header>
            <CardComponent.Body>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>23</div>
              <div style={{ color: 'var(--text-secondary)', marginTop: 'var(--spacing-2)' }}>
                5 completed this week
              </div>
            </CardComponent.Body>
          </CardComponent>
        </div>
      </div>
    ),

    'about-page-template': Hero && Features && (
      <div style={{ background: 'var(--surface-base)', minHeight: '600px' }}>
        <Hero
          layout="contained"
          align="center"
          title="About Us"
          subtitle="We're on a mission to make the web better"
        />

        <div style={{ padding: 'var(--spacing-12)', maxWidth: '800px', margin: '0 auto' }}>
          <h2>Our Story</h2>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
            Founded in 2020, we've been building tools that help developers create better experiences.
            Our team is passionate about design systems and making high-quality components accessible to everyone.
          </p>

          <h2 style={{ marginTop: 'var(--spacing-8)' }}>Our Values</h2>
          <Features
            layout="grid"
            items={[
              {
                title: 'Quality First',
                description: 'We never compromise on quality',
                icon: '✨',
              },
              {
                title: 'Open Source',
                description: 'Building in public, for everyone',
                icon: '🌍',
              },
              {
                title: 'Community',
                description: 'Together we build better things',
                icon: '🤝',
              },
            ]}
          />
        </div>
      </div>
    ),
  };

  return previews[name] || (
    <Alert variant="info">
      <p>
        Preview not yet available for <strong>{name}</strong>. This template requires a full page setup.
      </p>
      <p style={{ marginTop: 'var(--spacing-2)', fontSize: '0.875rem' }}>
        Install it with: <code>npx @orion-ds/cli add {name}</code>
      </p>
    </Alert>
  );
};

export default function TemplatePreview({ templateName, title }: TemplatePreviewProps) {
  return (
    <Card variant="elevated" style={{ marginBottom: 'var(--spacing-8)', overflow: 'hidden' }}>
      <Card.Header>
        <h2 style={{ margin: 0 }}>{title || 'Template Preview'}</h2>
      </Card.Header>
      <Card.Body style={{ padding: 0 }}>
        <div
          style={{
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-control)',
            overflow: 'auto',
            maxHeight: '800px',
          }}
        >
          {getTemplatePreview(templateName)}
        </div>
      </Card.Body>
    </Card>
  );
}
