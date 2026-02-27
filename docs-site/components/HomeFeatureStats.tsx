'use client';

import Link from 'next/link';
import { Package, Layers, FileText } from 'lucide-react';

interface HomeFeatureStatsProps {
  counts: {
    components: number;
    sections: number;
    templates: number;
  };
}

export default function HomeFeatureStats({ counts }: HomeFeatureStatsProps) {
  const stats = [
    {
      icon: Package,
      count: counts.components,
      title: 'Components',
      description: 'Ready-to-use React components with full TypeScript support',
      href: '/components',
    },
    {
      icon: Layers,
      count: counts.sections,
      title: 'Sections',
      description: 'Pre-built page blocks for rapid development',
      href: '/sections',
    },
    {
      icon: FileText,
      count: counts.templates,
      title: 'Templates',
      description: 'Complete page templates for common use cases',
      href: '/templates',
    },
  ];

  return (
    <section
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: 'var(--spacing-6)',
        padding: 'var(--spacing-12) var(--spacing-8)',
        maxWidth: '1400px',
        margin: '0 auto',
      }}
    >
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Link key={stat.href} href={stat.href as any} style={{ textDecoration: 'none' }}>
            <div
              style={{
                padding: 'var(--spacing-6)',
                background: 'var(--surface-subtle)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-control)',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.borderColor = 'var(--interactive-primary)';
                target.style.background = 'var(--surface-layer)';
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.borderColor = 'var(--border-subtle)';
                target.style.background = 'var(--surface-subtle)';
              }}
            >
              <Icon
                size={32}
                style={{ color: 'var(--text-brand)', marginBottom: 'var(--spacing-3)' }}
              />
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 'var(--spacing-1)' }}>
                {stat.count} {stat.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.875rem' }}>
                {stat.description}
              </p>
            </div>
          </Link>
        );
      })}
    </section>
  );
}
