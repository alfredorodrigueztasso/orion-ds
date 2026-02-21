'use client';

import React from 'react';
import { Card, Alert } from '@/components/ClientComponents';

// Import preview modules - now covers 13 components!
import { previewModules } from '../../registry/preview-modules/index';

interface ComponentPreviewProps {
  componentName: string;
  title?: string;
}

// Mapa de ejemplos para cada componente
const getComponentExample = (name: string): React.ReactNode => {
  // Phase 1: Try to use preview modules first
  const previewModule = previewModules[name];
  if (previewModule && previewModule.length > 0) {
    // Render all previews from the module
    return (
      <div style={{ display: 'grid', gap: 'var(--spacing-6)' }}>
        {previewModule.map((preview: any, idx: number) => (
          <div key={idx}>
            {preview.title && (
              <h4 style={{ marginBottom: 'var(--spacing-3)', color: 'var(--text-secondary)', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {preview.title}
              </h4>
            )}
            {preview.render()}
          </div>
        ))}
      </div>
    );
  }

  // All components now use preview modules - no hardcoded examples!

  return (
    <Alert variant="info">
      <p>
        Preview not yet available for <strong>{name}</strong>. This component requires custom setup
        or integration.
      </p>
      <p style={{ marginTop: 'var(--spacing-2)', fontSize: '0.875rem' }}>
        Install it with: <code>npx @orion-ds/cli add {name}</code>
      </p>
    </Alert>
  );
};

export default function ComponentPreview({ componentName, title }: ComponentPreviewProps) {
  return (
    <Card variant="elevated" style={{ marginTop: 'var(--spacing-4)' }}>
      <Card.Header>
        <h3 style={{ margin: 0 }}>{title || 'Live Preview'}</h3>
      </Card.Header>
      <Card.Body>{getComponentExample(componentName)}</Card.Body>
    </Card>
  );
}
