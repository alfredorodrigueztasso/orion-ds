import { Hero, Features, CTA, Footer, Button } from '@/components/ClientComponents';
import { getRegistryMetadata } from '@/lib/registry';
import { Package, Layers, FileText, Zap, Shield, Code2 } from 'lucide-react';
import Link from 'next/link';

export default async function HomePage() {
  const metadata = getRegistryMetadata();

  return (
    <>
      <Hero
        layout="contained"
        align="center"
        size="lg"
        title={
          <>
            <span style={{
              background: 'linear-gradient(135deg, var(--color-brand-400), var(--color-brand-600))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              AI-first
            </span>{' '}
            design system built on the Chain of Truth
          </>
        }
        description="Beautiful, consistent interfaces with zero visual drift. Token-governed framework that eliminates UI hallucination."
        primaryAction={
          <Link href="/components">
            <Button size="lg" variant="primary">
              Browse Components
            </Button>
          </Link>
        }
        secondaryAction={
          <Link href="/docs/getting-started">
            <Button size="lg" variant="ghost">
              Get Started
            </Button>
          </Link>
        }
      />

      <Features
        title="Everything you need to build"
        description="A complete design system with components, sections, and templates"
        columns={3}
        items={[
          {
            icon: <Package size={24} />,
            title: `${metadata.componentCount} Components`,
            description: 'Ready-to-use React components with full TypeScript support and CSS Modules',
            href: '/components'
          },
          {
            icon: <Layers size={24} />,
            title: `${metadata.sectionCount} Sections`,
            description: 'Pre-built page sections for rapid development with consistent styling',
            href: '/sections'
          },
          {
            icon: <FileText size={24} />,
            title: `${metadata.templateCount} Templates`,
            description: 'Complete page templates for common use cases and layouts',
            href: '/templates'
          }
        ]}
      />

      <Features
        title="Built for AI-native development"
        eyebrow="Developer Experience"
        description="Designed from the ground up for AI code generation and consistency"
        columns={3}
        background="none"
        items={[
          {
            icon: <Zap size={24} />,
            title: 'Zero Hallucination',
            description: 'Chain of Truth architecture prevents AI from inventing styles or breaking tokens'
          },
          {
            icon: <Shield size={24} />,
            title: 'Type Safe',
            description: 'Full TypeScript support with auto-generated types from design tokens'
          },
          {
            icon: <Code2 size={24} />,
            title: 'MCP Integration',
            description: 'Model Context Protocol server for Claude Desktop and AI coding assistants'
          }
        ]}
      />

      <CTA
        variant="subtle"
        title="Ready to get started?"
        description={
          <>
            <code style={{
              background: 'var(--surface-base)',
              padding: 'var(--spacing-2) var(--spacing-4)',
              borderRadius: 'var(--radius-control)',
              fontSize: '0.875rem',
              display: 'inline-block',
              marginTop: 'var(--spacing-4)'
            }}>
              npm install @orion-ds/react
            </code>
            <br />
            <span style={{ display: 'block', marginTop: 'var(--spacing-4)', fontSize: '0.875rem' }}>
              Or add individual components:
            </span>
            <code style={{
              background: 'var(--surface-base)',
              padding: 'var(--spacing-2) var(--spacing-4)',
              borderRadius: 'var(--radius-control)',
              fontSize: '0.875rem',
              display: 'inline-block',
              marginTop: 'var(--spacing-2)'
            }}>
              npx @orion-ds/cli add button card modal
            </code>
          </>
        }
        actions={
          <>
            <Link href="/docs/getting-started">
              <Button size="lg">Read Documentation</Button>
            </Link>
            <Link href="/components">
              <Button size="lg" variant="ghost">Browse Examples</Button>
            </Link>
          </>
        }
      />

      <Footer
        variant="minimal"
        brand={{
          name: 'Orion Design System',
          description: 'AI-first design system built on the Chain of Truth principle'
        }}
        linkGroups={[
          {
            title: 'Product',
            links: [
              { label: 'Components', href: '/components' },
              { label: 'Sections', href: '/sections' },
              { label: 'Templates', href: '/templates' }
            ]
          },
          {
            title: 'Documentation',
            links: [
              { label: 'Getting Started', href: '/docs/getting-started' },
              { label: 'Installation', href: '/docs/installation' },
              { label: 'Contributing', href: '/docs/contributing' }
            ]
          },
          {
            title: 'Resources',
            links: [
              { label: 'GitHub', href: 'https://github.com/orion-ds/orion', external: true },
              { label: 'NPM', href: 'https://npmjs.com/package/@orion-ds/react', external: true }
            ]
          }
        ]}
        copyright="© 2024 Orion Design System. All rights reserved."
      />
    </>
  );
}
