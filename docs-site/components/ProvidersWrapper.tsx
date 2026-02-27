import dynamic from 'next/dynamic';
import type { ReactNode } from 'react';

const ProviderContent = dynamic(() => import('./Providers').then(mod => ({ default: mod.Providers })), {
  loading: () => <>{null}</>,
  ssr: false,
});

interface ProvidersWrapperProps {
  children: ReactNode;
}

export function ProvidersWrapper({ children }: ProvidersWrapperProps) {
  return <ProviderContent>{children}</ProviderContent>;
}
