'use client';

import { Sidebar } from '@/components/ClientComponents';
import { usePathname } from 'next/navigation';
import { Home, Book, Grid3x3, Layout } from 'lucide-react';

export function DocsSidebar() {
  const pathname = usePathname();

  // Determinar el item activo basado en el pathname
  const getActiveItem = () => {
    if (pathname === '/') return 'home';
    if (pathname === '/docs/getting-started') return 'getting-started';
    if (pathname === '/components') return 'components';
    if (pathname?.startsWith('/components/')) return 'components';
    if (pathname === '/sections') return 'sections';
    if (pathname?.startsWith('/sections/')) return 'sections';
    if (pathname === '/templates') return 'templates';
    if (pathname?.startsWith('/templates/')) return 'templates';
    return undefined;
  };

  return (
    <Sidebar
      variant="floating"
      style={{ height: 'calc(100vh - 64px)', position: 'sticky', top: '64px' }}
      activeItem={getActiveItem()}
      sections={[
        {
          items: [
            {
              id: 'home',
              label: 'Home',
              href: '/',
              icon: <Home size={20} />,
            },
            {
              id: 'getting-started',
              label: 'Getting Started',
              href: '/docs/getting-started',
              icon: <Book size={20} />,
            },
          ],
        },
        {
          title: 'Components',
          items: [
            {
              id: 'components',
              label: 'All Components',
              href: '/components',
              icon: <Grid3x3 size={20} />,
            },
          ],
        },
        {
          title: 'Sections',
          items: [
            {
              id: 'sections',
              label: 'All Sections',
              href: '/sections',
              icon: <Layout size={20} />,
            },
          ],
        },
        {
          title: 'Templates',
          items: [
            {
              id: 'templates',
              label: 'All Templates',
              href: '/templates',
              icon: <Layout size={20} />,
            },
          ],
        },
      ]}
    />
  );
}
