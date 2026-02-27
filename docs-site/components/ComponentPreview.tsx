'use client';

import React, { useEffect, useState } from 'react';
import { Card, Alert } from '@/components/ClientComponents';

interface ComponentPreviewProps {
  componentName: string;
  title?: string;
}

interface PreviewModule {
  title: string;
  render: () => React.ReactNode;
}

export default function ComponentPreview({ componentName, title }: ComponentPreviewProps) {
  const [previews, setPreviews] = useState<PreviewModule[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Mark that we're on the client side
    setIsClient(true);

    // Dynamically import preview modules at runtime only
    const importModule = async () => {
      try {
        // @ts-ignore - registry is loaded dynamically at runtime
        const module = await import('../../registry/preview-modules/index');
        const previewModules = module.previewModules as Record<string, PreviewModule[]>;
        const previewModule = previewModules[componentName];
        if (previewModule && previewModule.length > 0) {
          setPreviews(previewModule);
        }
      } catch (err) {
        console.error('Failed to load preview module:', err);
        setError('Failed to load preview');
      } finally {
        setLoading(false);
      }
    };

    importModule();
  }, [componentName]);

  const content = !isClient ? (
    // During prerender/build, show a simple placeholder
    <div style={{ padding: 'var(--spacing-4)', color: 'var(--text-secondary)' }}>
      Preview will load when you visit this page in the browser.
    </div>
  ) : loading ? (
    <div style={{ padding: 'var(--spacing-4)', textAlign: 'center', color: 'var(--text-secondary)' }}>
      Loading preview...
    </div>
  ) : previews.length > 0 ? (
    <div style={{ display: 'grid', gap: 'var(--spacing-6)' }}>
      {previews.map((preview, idx) => (
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
  ) : (
    <Alert variant="info">
      <p>
        Preview not yet available for <strong>{componentName}</strong>. This component requires custom setup
        or integration.
      </p>
      <p style={{ marginTop: 'var(--spacing-2)', fontSize: '0.875rem' }}>
        Install it with: <code>npx @orion-ds/cli add {componentName}</code>
      </p>
    </Alert>
  );

  return (
    <Card variant="elevated" style={{ marginTop: 'var(--spacing-4)' }}>
      <Card.Header>
        <h3 style={{ margin: 0 }}>{title || 'Live Preview'}</h3>
      </Card.Header>
      <Card.Body>{content}</Card.Body>
    </Card>
  );
}
