'use client';

import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  count: number | string;
}

export default function FeatureCard({ icon: Icon, title, description, href, count }: FeatureCardProps) {
  return (
    <Link href={href} style={{ textDecoration: 'none' }}>
      <div style={{
        padding: 'var(--spacing-6)',
        background: 'var(--surface-subtle)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-control)',
        textAlign: 'center',
        cursor: 'pointer',
        transition: 'all 0.2s',
      }}
        onMouseEnter={(e) => {
          (e.currentTarget as any).style.borderColor = 'var(--interactive-primary)';
          (e.currentTarget as any).style.background = 'var(--surface-layer)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as any).style.borderColor = 'var(--border-subtle)';
          (e.currentTarget as any).style.background = 'var(--surface-subtle)';
        }}
      >
        <Icon size={32} style={{ color: 'var(--text-brand)', marginBottom: 'var(--spacing-3)' }} />
        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 'var(--spacing-1)' }}>
          {count} {title}
        </h3>
        <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.875rem' }}>
          {description}
        </p>
      </div>
    </Link>
  );
}
