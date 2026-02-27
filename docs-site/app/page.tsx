import { Button, Badge } from '@/components/ClientComponents';
import { getRegistryMetadata } from '@/lib/registry';
import { Github } from 'lucide-react';
import Link from 'next/link';
import ComponentShowcaseTabs from '@/components/ComponentShowcaseTabs';
import HomeFeatureStats from '@/components/HomeFeatureStats';

export default async function HomePage() {
  const metadata = getRegistryMetadata();

  return (
    <>
      {/* Minimal Hero Section */}
      <section style={{
        textAlign: 'center',
        padding: 'var(--spacing-24) var(--spacing-8)',
        background: 'linear-gradient(180deg, var(--surface-subtle) 0%, var(--surface-base) 100%)',
      }}>
        <Badge variant="secondary" size="sm" style={{ marginBottom: 'var(--spacing-6)' }}>
          ✨ Chain of Truth
        </Badge>

        <h1 style={{
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: 800,
          lineHeight: 1.2,
          marginBottom: 'var(--spacing-4)',
          color: 'var(--text-primary)',
        }}>
          The AI-first<br />Design System
        </h1>

        <p style={{
          fontSize: '1.25rem',
          color: 'var(--text-secondary)',
          maxWidth: '600px',
          margin: '0 auto var(--spacing-8)',
          lineHeight: 1.6,
        }}>
          Build beautiful, consistent interfaces with zero visual drift.<br />
          {metadata.componentCount} components · {metadata.sectionCount} sections · {metadata.templateCount} templates
        </p>

        <div style={{
          display: 'flex',
          gap: 'var(--spacing-3)',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          <Link href="/docs/getting-started">
            <Button size="lg" variant="primary">Get Started</Button>
          </Link>
          <Link href="https://github.com/orion-ds/orion" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="ghost" icon={<Github size={20} />}>GitHub</Button>
          </Link>
        </div>
      </section>

      {/* Component Showcase - Main Visual Section */}
      <section style={{ padding: '0 var(--spacing-8)', maxWidth: '1400px', margin: '0 auto' }}>
        <ComponentShowcaseTabs />
      </section>

      {/* Feature Stats */}
      <HomeFeatureStats counts={{
        components: metadata.componentCount,
        sections: metadata.sectionCount,
        templates: metadata.templateCount,
      }} />

      {/* Simple Footer */}
      <footer style={{
        padding: 'var(--spacing-12) var(--spacing-8)',
        borderTop: '1px solid var(--border-subtle)',
        marginTop: 'var(--spacing-12)',
        textAlign: 'center',
        color: 'var(--text-secondary)',
        fontSize: '0.875rem',
      }}>
        <p style={{ marginBottom: 'var(--spacing-4)' }}>
          © 2024 Orion Design System. Built with AI-first principles.
        </p>
        <div style={{ display: 'flex', gap: 'var(--spacing-6)', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="https://github.com/orion-ds/orion" style={{ color: 'var(--text-secondary)' }}>GitHub</Link>
          <Link href="https://npmjs.com/package/@orion-ds/react" style={{ color: 'var(--text-secondary)' }}>NPM</Link>
          <Link href="/docs/getting-started" style={{ color: 'var(--text-secondary)' }}>Docs</Link>
        </div>
      </footer>
    </>
  );
}
