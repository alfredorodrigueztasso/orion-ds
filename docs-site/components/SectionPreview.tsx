'use client';

import React from 'react';
import { Card, Alert } from '@/components/ClientComponents';

// Import preview modules for ALL sections (42 sections)
import { previewModules } from '../../registry/preview-modules/index';

interface SectionPreviewProps {
  sectionName: string;
  title?: string;
}

// Render section preview from preview modules
const getSectionPreview = (name: string): React.ReactNode => {
  // Try to use preview modules first
  const previewModule = previewModules[name];
  if (previewModule && previewModule.length > 0) {
    // Render all previews from the module
    return (
      <div style={{ display: 'grid', gap: 'var(--spacing-8)' }}>
        {previewModule.map((preview: any, idx: number) => (
          <div key={idx}>
            {preview.title && (
              <h4 style={{
                marginBottom: 'var(--spacing-3)',
                color: 'var(--text-secondary)',
                fontSize: '0.875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontWeight: 600,
              }}>
                {preview.title}
              </h4>
            )}
            <div style={{
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-control)',
              padding: 'var(--spacing-6)',
              background: 'var(--surface-base)',
            }}>
              {preview.render()}
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Fallback for sections without preview modules
  return (
    <Alert variant="info">
      <p>
        Preview not yet available for <strong>{name}</strong>. This section requires custom configuration.
      </p>
      <p style={{ marginTop: 'var(--spacing-2)', fontSize: '0.875rem' }}>
        Install it with: <code>npx @orion-ds/cli add {name}</code>
      </p>
    </Alert>
  );
};

export default function SectionPreview({ sectionName, title }: SectionPreviewProps) {
  return (
    <Card variant="elevated" style={{ marginTop: 'var(--spacing-4)' }}>
      <Card.Header>
        <h3 style={{ margin: 0 }}>{title || 'Live Preview'}</h3>
      </Card.Header>
      <Card.Body style={{ padding: 'var(--spacing-6)' }}>
        {getSectionPreview(sectionName)}
      </Card.Body>
    </Card>
  );
}
