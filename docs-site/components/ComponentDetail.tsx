'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, Alert, Badge } from '@/components/ClientComponents';
import CodeBlock from '@/components/CodeBlock';
import PropsTable from '@/components/PropsTable';
import PreviewBrandModeBar from '@/components/PreviewBrandModeBar';
import PackageManagerTabs from '@/components/PackageManagerTabs';

interface ComponentDetailProps {
  component: any;
}

export default function ComponentDetail({ component }: ComponentDetailProps) {
  const [expandedCodes, setExpandedCodes] = useState<Set<number>>(new Set());

  const toggleCodeExpanded = (idx: number) => {
    const newSet = new Set(expandedCodes);
    if (newSet.has(idx)) {
      newSet.delete(idx);
    } else {
      newSet.add(idx);
    }
    setExpandedCodes(newSet);
  };

  return (
    <>
      {/* Mode Aware Alert */}
      {component.modeAware && (
        <Alert variant="info" style={{ marginBottom: 'var(--spacing-8)' }}>
          <strong>Mode Aware:</strong> This component adapts its styling based on the current mode
          (display, product, app).
        </Alert>
      )}

      {/* Section 1: Installation */}
      <section id="installation" style={{ marginBottom: 'var(--spacing-12)' }}>
        <h2>Installation</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-4)' }}>
          Install this component using the CLI or add the package to your project.
        </p>

        <Card variant="outlined" style={{ marginBottom: 'var(--spacing-4)' }}>
          <Card.Header>
            <h3 style={{ margin: 0, fontSize: '0.95rem' }}>Using CLI</h3>
          </Card.Header>
          <Card.Body style={{ padding: 0 }}>
            <CodeBlock code={`npx @orion-ds/cli add ${component.name}`} language="bash" />
          </Card.Body>
        </Card>

        {component.import && (
          <Card variant="outlined">
            <Card.Header>
              <h3 style={{ margin: 0, fontSize: '0.95rem' }}>Using npm Package</h3>
            </Card.Header>
            <Card.Body style={{ paddingBottom: 0 }}>
              <PackageManagerTabs packageName="@orion-ds/react" />
            </Card.Body>
          </Card>
        )}
      </section>

      {/* Section 2: Preview */}
      <section id="preview" style={{ marginBottom: 'var(--spacing-12)' }}>
        <h2>Preview</h2>
        <PreviewBrandModeBar componentName={component.name} />
      </section>

      {/* Section 3: Usage */}
      {component.import && (
        <section id="usage" style={{ marginBottom: 'var(--spacing-12)' }}>
          <h2>Usage</h2>
          <Card variant="outlined">
            <Card.Header>
              <h3 style={{ margin: 0, fontSize: '0.95rem' }}>Basic Example</h3>
            </Card.Header>
            <Card.Body style={{ padding: 0 }}>
              <CodeBlock
                code={`${component.import}${
                  component.cssImport ? `\n${component.cssImport}` : ''
                }\n\nexport default function Example() {\n  return <${component.title} />;\n}`}
                language="tsx"
              />
            </Card.Body>
          </Card>
        </section>
      )}

      {/* Section 4: Examples */}
      {component.examples && component.examples.length > 1 && (
        <section id="examples" style={{ marginBottom: 'var(--spacing-12)' }}>
          <h2>Examples</h2>
          {component.examples.map((example: any, idx: number) => (
            <div key={idx} style={{ marginBottom: 'var(--spacing-8)' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: 'var(--spacing-3)' }}>{example.title}</h3>
              <button
                onClick={() => toggleCodeExpanded(idx)}
                style={{
                  marginBottom: 'var(--spacing-3)',
                  padding: 'var(--spacing-2) var(--spacing-3)',
                  background: 'var(--surface-layer)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-sm)',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  color: 'var(--text-secondary)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--surface-subtle)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--surface-layer)';
                }}
              >
                {expandedCodes.has(idx) ? '▼ Hide Code' : '▶ View Code'}
              </button>
              {expandedCodes.has(idx) && <CodeBlock code={example.code} language="tsx" />}
            </div>
          ))}
        </section>
      )}

      {/* Section 5: Props */}
      {component.props && component.props.length > 0 && (
        <section id="props" style={{ marginBottom: 'var(--spacing-12)' }}>
          <h2>Props</h2>
          <PropsTable props={component.props} />
        </section>
      )}

      {/* Section 6: Design Tokens */}
      {component.tokens && component.tokens.length > 0 && (
        <section id="tokens" style={{ marginBottom: 'var(--spacing-12)' }}>
          <h2>Design Tokens</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-4)', fontSize: '0.9rem' }}>
            This component uses the following CSS tokens:
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-2)' }}>
            {component.tokens.map((token: string) => (
              <Badge key={token} variant="secondary" size="sm">
                <code style={{ fontSize: '0.8rem' }}>{token}</code>
              </Badge>
            ))}
          </div>
        </section>
      )}

      {/* Section 7: Accessibility */}
      {component.accessibility && (
        <section id="accessibility" style={{ marginBottom: 'var(--spacing-12)' }}>
          <h2>Accessibility</h2>

          {component.accessibility.role && (
            <div style={{ marginBottom: 'var(--spacing-6)' }}>
              <h3 style={{ fontSize: '0.95rem', marginBottom: 'var(--spacing-2)' }}>Role</h3>
              <Badge variant="secondary">{component.accessibility.role}</Badge>
            </div>
          )}

          {component.accessibility.ariaAttributes && component.accessibility.ariaAttributes.length > 0 && (
            <div style={{ marginBottom: 'var(--spacing-6)' }}>
              <h3 style={{ fontSize: '0.95rem', marginBottom: 'var(--spacing-2)' }}>ARIA Attributes</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-2)' }}>
                {component.accessibility.ariaAttributes.map((attr: string) => (
                  <Badge key={attr} variant="secondary" size="sm">
                    {attr}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {component.accessibility.keyboardNav && component.accessibility.keyboardNav.length > 0 && (
            <div style={{ marginBottom: 'var(--spacing-6)' }}>
              <h3 style={{ fontSize: '0.95rem', marginBottom: 'var(--spacing-3)' }}>Keyboard Navigation</h3>
              <table
                style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  fontSize: '0.9rem',
                }}
              >
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--border-subtle)' }}>
                    <th style={{ textAlign: 'left', padding: 'var(--spacing-2)', color: 'var(--text-secondary)' }}>
                      Key
                    </th>
                    <th style={{ textAlign: 'left', padding: 'var(--spacing-2)', color: 'var(--text-secondary)' }}>
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {component.accessibility.keyboardNav.map((item: any, idx: number) => (
                    <tr
                      key={idx}
                      style={{
                        borderBottom: '1px solid var(--border-subtle)',
                        background: idx % 2 === 0 ? 'transparent' : 'var(--surface-subtle)',
                      }}
                    >
                      <td style={{ padding: 'var(--spacing-3)', fontFamily: 'var(--font-mono)' }}>
                        <kbd style={{ background: 'var(--surface-layer)', padding: '2px 6px', borderRadius: '4px' }}>
                          {item.key}
                        </kbd>
                      </td>
                      <td style={{ padding: 'var(--spacing-3)' }}>{item.action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {component.accessibility.notes && component.accessibility.notes.length > 0 && (
            <div>
              <h3 style={{ fontSize: '0.95rem', marginBottom: 'var(--spacing-2)' }}>Notes</h3>
              <ul style={{ margin: 0, paddingLeft: 'var(--spacing-6)' }}>
                {component.accessibility.notes.map((note: string, idx: number) => (
                  <li key={idx} style={{ marginBottom: 'var(--spacing-2)' }}>
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      )}

      {/* Section 8: Dependencies */}
      {(component.dependencies || component.registryDependencies) && (
        <section id="dependencies" style={{ marginBottom: 'var(--spacing-12)' }}>
          <h2>Dependencies</h2>

          {component.dependencies && component.dependencies.length > 0 && (
            <div style={{ marginBottom: 'var(--spacing-6)' }}>
              <h3 style={{ fontSize: '0.95rem', marginBottom: 'var(--spacing-3)' }}>npm Packages</h3>
              <ul style={{ margin: 0, paddingLeft: 'var(--spacing-6)' }}>
                {component.dependencies.map((dep: string) => (
                  <li key={dep} style={{ marginBottom: 'var(--spacing-2)' }}>
                    <code>{dep}</code>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {component.registryDependencies && component.registryDependencies.length > 0 && (
            <div>
              <h3 style={{ fontSize: '0.95rem', marginBottom: 'var(--spacing-3)' }}>Registry Components</h3>
              <ul style={{ margin: 0, paddingLeft: 'var(--spacing-6)' }}>
                {component.registryDependencies.map((dep: string) => (
                  <li key={dep} style={{ marginBottom: 'var(--spacing-2)' }}>
                    <Link href={`/components/${dep}`}>
                      <code>{dep}</code>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      )}

      {/* Section 9: Files */}
      {component.files && component.files.length > 0 && (
        <section id="files" style={{ marginBottom: 'var(--spacing-12)' }}>
          <h2>Files</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-4)', fontSize: '0.9rem' }}>
            Files copied to your project when using the CLI.
          </p>
          <ul style={{ margin: 0, paddingLeft: 'var(--spacing-6)' }}>
            {component.files.map((file: any, idx: number) => (
              <li key={idx} style={{ marginBottom: 'var(--spacing-3)' }}>
                <code>{file.path}</code> <Badge variant="secondary" size="sm">{file.type}</Badge>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}
