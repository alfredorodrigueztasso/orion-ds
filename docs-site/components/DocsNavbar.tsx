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
        <Link href="/components">Components</Link>
        <Link href="/sections">Sections</Link>
        <Link href="/templates">Templates</Link>
        <Link href="/docs/getting-started">Docs</Link>
      </Navbar.Nav>

      <Navbar.Actions>
        <SearchInput
          placeholder="Search..."
          style={{ width: '200px' }}
          size="sm"
        />
        <ThemeController compact />
        <Link
          href="https://github.com/orion-ds/orion"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={20} />
        </Link>
      </Navbar.Actions>
    </Navbar>
  );
}
