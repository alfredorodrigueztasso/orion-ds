'use client';

import dynamic from 'next/dynamic';
import '@orion-ds/react/styles.css';
import type { ReactNode } from 'react';

interface ProvidersProps {
  children: ReactNode;
}

// Dynamically import ThemeProvider with no SSR
const DynamicThemeProvider = dynamic<{ children: ReactNode }>(
  () => import('@orion-ds/react').then(mod => ({ default: mod.ThemeProvider })),
  {
    ssr: false,
  }
);

export function Providers({ children }: ProvidersProps) {
  return <DynamicThemeProvider>{children}</DynamicThemeProvider>;
}
