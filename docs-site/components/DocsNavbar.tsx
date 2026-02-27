'use client';

import { Navbar, Link, SearchInput, ThemeController } from '@/components/ClientComponents';
import { Github } from 'lucide-react';

export function DocsNavbar() {
  return (
    <Navbar variant="solid" sticky height="md">
      <Navbar.Brand href="/">
        <span style={{ fontSize: '1.25rem', fontWeight: 600 }}>
          Orion DS
        </span>
      </Navbar.Brand>

      <Navbar.Nav>
        <Link href="/docs/getting-started">Docs</Link>
        <Link href="/components">Components</Link>
        <Link href="/sections">Blocks</Link>
        <Link href="/templates">Templates</Link>
      </Navbar.Nav>

      <Navbar.Actions>
        <SearchInput placeholder="Search..." style={{ width: '200px' }} size="sm" />
        <ThemeController compact />
        <Link
          href="https://github.com/orion-ds/orion"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-1)', fontSize: '0.875rem', color: 'var(--text-secondary)' }}
        >
          <Github size={20} />
          <span>2.1k</span>
        </Link>
      </Navbar.Actions>
    </Navbar>
  );
}
