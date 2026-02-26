'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Book, Grid3x3, Layout, FileText, Palette, Settings } from 'lucide-react';
import { useState } from 'react';

export function DocsSidebar() {
  const pathname = usePathname();
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    docs: true,
    components: false,
  });

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const isActive = (path: string) => pathname === path || pathname?.startsWith(path + '/');
  const isComponentCategory = (category: string) =>
    pathname?.includes(`?category=${category}`) || pathname?.includes(`#${category}`);

  const componentCategories = [
    'Actions',
    'Data Display',
    'Feedback',
    'Forms',
    'Layout',
    'Navigation',
    'Overlays',
    'Text',
  ];

  return (
    <nav
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 64px)',
        overflowY: 'auto',
        borderRight: '1px solid var(--border-subtle)',
        background: 'var(--surface-base)',
        width: '250px',
        fontSize: '0.875rem',
        paddingTop: 'var(--spacing-4)',
        paddingBottom: 'var(--spacing-8)',
      }}
    >
      {/* Home */}
      <Link
        href="/"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--spacing-2)',
          padding: 'var(--spacing-2) var(--spacing-4)',
          color: isActive('/') && pathname === '/' ? 'var(--text-brand)' : 'var(--text-primary)',
          textDecoration: 'none',
          borderLeft: isActive('/') && pathname === '/' ? '3px solid var(--text-brand)' : '3px solid transparent',
          paddingLeft: 'calc(var(--spacing-4) - 3px)',
        }}
      >
        <Home size={18} />
        Home
      </Link>

      {/* Documentation Section */}
      <div style={{ marginTop: 'var(--spacing-6)' }}>
        <button
          onClick={() => toggleSection('docs')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--spacing-2)',
            padding: 'var(--spacing-2) var(--spacing-4)',
            width: '100%',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: '0.75rem',
            color: 'var(--text-tertiary)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          <span>{expandedSections.docs ? '▼' : '▶'}</span>
          Getting Started
        </button>

        {expandedSections.docs && (
          <div style={{ paddingLeft: 'var(--spacing-2)' }}>
            {[
              { label: 'Introduction', href: '/docs/getting-started' },
              { label: 'Installation', href: '/docs/installation' },
              { label: 'Theming', href: '/docs/theming' },
              { label: 'CLI', href: '/docs/cli' },
              { label: 'Tokens', href: '/docs/tokens' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: 'block',
                  padding: 'var(--spacing-2) var(--spacing-4)',
                  color: isActive(item.href) ? 'var(--text-brand)' : 'var(--text-primary)',
                  textDecoration: 'none',
                  borderLeft: isActive(item.href) ? '3px solid var(--text-brand)' : '3px solid transparent',
                  paddingLeft: 'calc(var(--spacing-4) - 3px)',
                  fontSize: '0.875rem',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => {
                  if (!isActive(item.href)) {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive(item.href)) {
                    e.currentTarget.style.color = 'var(--text-primary)';
                  }
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Components Section */}
      <div style={{ marginTop: 'var(--spacing-6)' }}>
        <button
          onClick={() => toggleSection('components')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--spacing-2)',
            padding: 'var(--spacing-2) var(--spacing-4)',
            width: '100%',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: '0.75rem',
            color: 'var(--text-tertiary)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          <span>{expandedSections.components ? '▼' : '▶'}</span>
          Components
        </button>

        {expandedSections.components && (
          <div style={{ paddingLeft: 'var(--spacing-2)' }}>
            <Link
              href="/components"
              style={{
                display: 'block',
                padding: 'var(--spacing-2) var(--spacing-4)',
                color: isActive('/components') && pathname === '/components' ? 'var(--text-brand)' : 'var(--text-primary)',
                textDecoration: 'none',
                borderLeft: isActive('/components') && pathname === '/components' ? '3px solid var(--text-brand)' : '3px solid transparent',
                paddingLeft: 'calc(var(--spacing-4) - 3px)',
                fontWeight: 500,
                fontSize: '0.875rem',
              }}
            >
              All Components
            </Link>
          </div>
        )}
      </div>

      {/* Sections Link */}
      <Link
        href="/sections"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--spacing-2)',
          padding: 'var(--spacing-2) var(--spacing-4)',
          marginTop: 'var(--spacing-6)',
          color: isActive('/sections') ? 'var(--text-brand)' : 'var(--text-primary)',
          textDecoration: 'none',
          borderLeft: isActive('/sections') ? '3px solid var(--text-brand)' : '3px solid transparent',
          paddingLeft: 'calc(var(--spacing-4) - 3px)',
          fontWeight: 600,
          fontSize: '0.75rem',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          color: 'var(--text-tertiary)',
        }}
      >
        <span style={{ marginRight: '2px' }}>→</span>
        Sections
      </Link>

      {/* Templates Link */}
      <Link
        href="/templates"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--spacing-2)',
          padding: 'var(--spacing-2) var(--spacing-4)',
          marginTop: 'var(--spacing-3)',
          color: isActive('/templates') ? 'var(--text-brand)' : 'var(--text-primary)',
          textDecoration: 'none',
          borderLeft: isActive('/templates') ? '3px solid var(--text-brand)' : '3px solid transparent',
          paddingLeft: 'calc(var(--spacing-4) - 3px)',
          fontWeight: 600,
          fontSize: '0.75rem',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          color: 'var(--text-tertiary)',
        }}
      >
        <span style={{ marginRight: '2px' }}>→</span>
        Templates
      </Link>
    </nav>
  );
}
