/**
 * Preview module for Section component
 * Semantic section wrapper with spacing and backgrounds
 */

import React from 'react';
import { Section, Container, Button } from '@orion-ds/react';

export const previews = [
  {
    title: 'Basic Section',
    render: () => {
      return (
        <Section spacing="lg" background="base">
          <Container size="md">
            <h2 style={{ fontSize: 'var(--font-size-2xl)', marginBottom: 'var(--spacing-4)' }}>
              Section Title
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-6)' }}>
              This is a basic section with default spacing and a base background. Use sections to
              organize your page content with consistent vertical rhythm.
            </p>
            <Button variant="primary">Learn More</Button>
          </Container>
        </Section>
      );
    },
  },
  {
    title: 'Subtle Background',
    render: () => {
      return (
        <Section spacing="lg" background="subtle">
          <Container size="lg">
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ fontSize: 'var(--font-size-3xl)', marginBottom: 'var(--spacing-4)' }}>
                Features Overview
              </h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-8)', maxWidth: '600px', margin: '0 auto var(--spacing-8)' }}>
                Explore powerful features designed to help you build faster and more efficiently.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--spacing-6)' }}>
                <div style={{ padding: 'var(--spacing-6)', background: 'var(--surface-base)', borderRadius: 'var(--radius-control)', border: '1px solid var(--border-subtle)' }}>
                  <h3 style={{ marginBottom: 'var(--spacing-2)' }}>Fast</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-sm)' }}>
                    Optimized for performance
                  </p>
                </div>
                <div style={{ padding: 'var(--spacing-6)', background: 'var(--surface-base)', borderRadius: 'var(--radius-control)', border: '1px solid var(--border-subtle)' }}>
                  <h3 style={{ marginBottom: 'var(--spacing-2)' }}>Reliable</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-sm)' }}>
                    Built with best practices
                  </p>
                </div>
                <div style={{ padding: 'var(--spacing-6)', background: 'var(--surface-base)', borderRadius: 'var(--radius-control)', border: '1px solid var(--border-subtle)' }}>
                  <h3 style={{ marginBottom: 'var(--spacing-2)' }}>Scalable</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-sm)' }}>
                    Grows with your needs
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      );
    },
  },
  {
    title: 'Brand Background',
    render: () => {
      return (
        <Section spacing="xl" background="brand">
          <Container size="md">
            <div style={{ textAlign: 'center', color: 'var(--interactive-primary-text)' }}>
              <h2 style={{ fontSize: 'var(--font-size-3xl)', marginBottom: 'var(--spacing-4)' }}>
                Ready to get started?
              </h2>
              <p style={{ marginBottom: 'var(--spacing-6)', opacity: 0.9 }}>
                Join thousands of teams already using our platform to build amazing products.
              </p>
              <div style={{ display: 'flex', gap: 'var(--spacing-4)', justifyContent: 'center' }}>
                <Button variant="secondary" style={{ background: 'white', color: 'var(--interactive-primary)' }}>
                  View Demo
                </Button>
                <Button style={{ background: 'rgba(255, 255, 255, 0.2)', color: 'white', border: '1px solid rgba(255, 255, 255, 0.3)' }}>
                  Contact Sales
                </Button>
              </div>
            </div>
          </Container>
        </Section>
      );
    },
  },
  {
    title: 'With Borders',
    render: () => {
      return (
        <>
          <Section spacing="md" background="none" borderTop>
            <Container size="md">
              <h3 style={{ marginBottom: 'var(--spacing-3)' }}>Section with Top Border</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Use borders to visually separate sections without background changes.
              </p>
            </Container>
          </Section>
          <Section spacing="md" background="none" borderBottom>
            <Container size="md">
              <h3 style={{ marginBottom: 'var(--spacing-3)' }}>Section with Bottom Border</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Combine with transparent backgrounds for minimal visual weight.
              </p>
            </Container>
          </Section>
        </>
      );
    },
  },
  {
    title: 'Different Spacing',
    render: () => {
      return (
        <div>
          <Section spacing="sm" background="subtle">
            <Container size="md">
              <p><strong>Small spacing</strong> - Compact vertical padding</p>
            </Container>
          </Section>
          <Section spacing="md" background="base">
            <Container size="md">
              <p><strong>Medium spacing</strong> - Standard vertical padding</p>
            </Container>
          </Section>
          <Section spacing="lg" background="subtle">
            <Container size="md">
              <p><strong>Large spacing</strong> - Generous vertical padding (default)</p>
            </Container>
          </Section>
          <Section spacing="xl" background="base">
            <Container size="md">
              <p><strong>Extra large spacing</strong> - Maximum vertical padding</p>
            </Container>
          </Section>
        </div>
      );
    },
  },
];

export default previews;
