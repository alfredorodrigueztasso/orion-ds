'use client';

import { ThemeProvider } from '@orion-ds/react';
import '@orion-ds/react/styles.css';
import type { ReactNode } from 'react';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
