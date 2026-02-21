import type { Metadata } from 'next';
import { Providers } from '@/components/Providers';
import { DocsNavbar } from '@/components/DocsNavbar';
import { DocsSidebar } from '@/components/DocsSidebar';
import '@orion-ds/react/styles.css';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Orion Design System',
    template: '%s | Orion Design System',
  },
  description: 'AI-first design system for beautiful, consistent interfaces built on the Chain of Truth principle',
  keywords: [
    'design system',
    'react',
    'components',
    'ui',
    'typescript',
    'ai-first',
    'orion',
  ],
  authors: [
    {
      name: 'Orion Design System',
    },
  ],
  creator: 'Orion Design System',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://orion-ds.dev',
    title: 'Orion Design System',
    description: 'AI-first design system for beautiful, consistent interfaces',
    siteName: 'Orion Design System',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orion Design System',
    description: 'AI-first design system for beautiful, consistent interfaces',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-theme="light" data-brand="orion">
      <body>
        <Providers>
          <DocsNavbar />
          <div style={{ display: 'flex' }}>
            <DocsSidebar />
            <main className="main-content">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
