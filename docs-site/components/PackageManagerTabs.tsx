'use client';

import { useState, useEffect } from 'react';
import { Tabs } from '@/components/ClientComponents';
import CodeBlock from './CodeBlock';

type PackageManager = 'pnpm' | 'npm' | 'yarn';

interface PackageManagerTabsProps {
  packageName: string;
}

const PM_KEY = 'orion-docs-pm';

const getCommand = (pm: PackageManager, pkg: string): string => {
  const commands: Record<PackageManager, (pkg: string) => string> = {
    pnpm: (p) => `pnpm add ${p}`,
    npm: (p) => `npm install ${p}`,
    yarn: (p) => `yarn add ${p}`,
  };
  return commands[pm](pkg);
};

export default function PackageManagerTabs({ packageName }: PackageManagerTabsProps) {
  const [selectedPM, setSelectedPM] = useState<PackageManager>('pnpm');
  const [mounted, setMounted] = useState(false);

  // Restore preference from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(PM_KEY) as PackageManager | null;
    if (saved && ['pnpm', 'npm', 'yarn'].includes(saved)) {
      setSelectedPM(saved);
    }
    setMounted(true);
  }, []);

  const handlePMChange = (pm: PackageManager) => {
    setSelectedPM(pm);
    localStorage.setItem(PM_KEY, pm);
  };

  if (!mounted) {
    // Avoid hydration mismatch
    return <CodeBlock code={getCommand('pnpm', packageName)} language="bash" />;
  }

  return (
    <div style={{ marginBottom: 'var(--spacing-4)' }}>
      <div style={{ display: 'flex', gap: 'var(--spacing-2)', marginBottom: 'var(--spacing-3)' }}>
        {(['pnpm', 'npm', 'yarn'] as const).map((pm) => (
          <button
            key={pm}
            onClick={() => handlePMChange(pm)}
            style={{
              padding: 'var(--spacing-2) var(--spacing-3)',
              border: selectedPM === pm ? '2px solid var(--interactive-primary)' : '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-sm)',
              background: selectedPM === pm ? 'var(--interactive-primary)' : 'var(--surface-layer)',
              color: selectedPM === pm ? 'var(--interactive-primary-text)' : 'var(--text-primary)',
              cursor: 'pointer',
              fontSize: '0.875rem',
              fontWeight: selectedPM === pm ? '600' : '500',
              transition: 'all 0.2s',
            }}
          >
            {pm}
          </button>
        ))}
      </div>
      <CodeBlock code={getCommand(selectedPM, packageName)} language="bash" />
    </div>
  );
}
