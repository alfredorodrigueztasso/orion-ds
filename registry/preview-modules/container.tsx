/**
 * Preview module for Container section
 * Layout wrapper with max-width constraints and consistent padding
 */

import React from 'react';
import { Container } from '@orion-ds/react';

const SampleContent = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      padding: 'var(--spacing-8)',
      background: 'var(--surface-layer)',
      borderRadius: 'var(--radius-control)',
      border: '1px solid var(--border-subtle)',
    }}
  >
    {children}
  </div>
);

export const previews = [
  {
    title: 'Small Container (640px)',
    render: () => (
      <Container size="sm">
        <SampleContent>
          <h3>Small Container</h3>
          <p style={{ color: 'var(--text-secondary)' }}>
            Ideal for text-focused content like blog posts and articles. Max width: 640px. This
            container keeps line lengths readable and comfortable for extended reading.
          </p>
        </SampleContent>
      </Container>
    ),
  },
  {
    title: 'Medium Container (768px)',
    render: () => (
      <Container size="md">
        <SampleContent>
          <h3>Medium Container</h3>
          <p style={{ color: 'var(--text-secondary)' }}>
            Perfect for forms, login pages, and focused content sections. Max width: 768px. Provides
            a balanced layout that works well for single-column interfaces.
          </p>
        </SampleContent>
      </Container>
    ),
  },
  {
    title: 'Large Container (1024px) - Default',
    render: () => (
      <Container size="lg">
        <SampleContent>
          <h3>Large Container</h3>
          <p style={{ color: 'var(--text-secondary)' }}>
            The standard container for most layouts. Max width: 1024px. Suitable for dashboards,
            multi-column content, and general application layouts. This is the default size.
          </p>
        </SampleContent>
      </Container>
    ),
  },
  {
    title: 'Extra Large Container (1280px)',
    render: () => (
      <Container size="xl">
        <SampleContent>
          <h3>Extra Large Container</h3>
          <p style={{ color: 'var(--text-secondary)' }}>
            For wide layouts requiring more horizontal space. Max width: 1280px. Great for complex
            dashboards, data tables, and applications that benefit from additional width on larger
            screens.
          </p>
        </SampleContent>
      </Container>
    ),
  },
  {
    title: 'Full Width Container',
    render: () => (
      <Container size="full">
        <SampleContent>
          <h3>Full Width Container</h3>
          <p style={{ color: 'var(--text-secondary)' }}>
            Takes up 100% of the available width. Use for edge-to-edge layouts, hero sections, or
            when you need complete control over the width. Still includes consistent padding.
          </p>
        </SampleContent>
      </Container>
    ),
  },
  {
    title: 'Nested Containers',
    render: () => (
      <Container size="xl">
        <SampleContent>
          <h2>Outer Container (XL)</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-4)' }}>
            This is an extra-large container that can hold nested containers for more complex
            layouts.
          </p>

          <Container size="md">
            <div
              style={{
                padding: 'var(--spacing-6)',
                background: 'var(--surface-base)',
                borderRadius: 'var(--radius-control)',
                border: '1px dashed var(--border-default)',
              }}
            >
              <h3>Inner Container (MD)</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                A medium container nested within the extra-large container, creating a focused
                content area within a wider layout.
              </p>
            </div>
          </Container>
        </SampleContent>
      </Container>
    ),
  },
  {
    title: 'Without Padding',
    render: () => (
      <Container size="lg" padded={false}>
        <div
          style={{
            padding: 'var(--spacing-8)',
            background: 'var(--surface-layer)',
            borderRadius: 'var(--radius-control)',
            border: '1px solid var(--border-subtle)',
          }}
        >
          <h3>Container with padded=false</h3>
          <p style={{ color: 'var(--text-secondary)' }}>
            This container has padded=false, removing the horizontal padding. Useful when you want
            the content to stretch edge-to-edge within the max-width constraint, or when you want
            to handle padding yourself.
          </p>
        </div>
      </Container>
    ),
  },
];

export default previews;
