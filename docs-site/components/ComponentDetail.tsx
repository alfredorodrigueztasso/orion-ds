'use client';

import Link from 'next/link';
import { Card, Tabs, Accordion, Alert, Badge, Breadcrumb } from '@/components/ClientComponents';
import CodeBlock from '@/components/CodeBlock';
import PropsTable from '@/components/PropsTable';
import ComponentPreview from '@/components/ComponentPreview';

interface ComponentDetailProps {
  component: any;
}

export default function ComponentDetail({ component }: ComponentDetailProps) {
  return (
    <>
      {/* Breadcrumbs */}
      <div style={{ marginBottom: 'var(--spacing-4)' }}>
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Components', href: '/components' },
            { label: component.title },
          ]}
        />
      </div>

      {/* Mode Aware Alert */}
      {component.modeAware && (
        <Alert variant="info" style={{ marginBottom: 'var(--spacing-8)' }}>
          <strong>Mode Aware:</strong> This component adapts its styling based on the current mode
          (display, product, app).
        </Alert>
      )}

      {/* Tabs for different sections */}
      <div style={{ marginTop: 'var(--spacing-8)' }}>
        <Tabs
          defaultTab="preview"
          tabs={[
            {
              id: 'preview',
              label: 'Preview',
              content: <ComponentPreview componentName={component.name} />,
            },
            {
              id: 'installation',
              label: 'Installation',
              content: (
                <Card variant="outlined" style={{ marginTop: 'var(--spacing-4)' }}>
                  <Card.Header>
                    <h3 style={{ margin: 0 }}>Install with CLI</h3>
                  </Card.Header>
                  <Card.Body style={{ padding: 0 }}>
                    <CodeBlock code={`npx @orion-ds/cli add ${component.name}`} language="bash" />
                  </Card.Body>
                </Card>
              ),
            },
            ...(component.import
              ? [
                  {
                    id: 'usage',
                    label: 'Usage',
                    content: (
                      <Card variant="outlined" style={{ marginTop: 'var(--spacing-4)' }}>
                        <Card.Header>
                          <h3 style={{ margin: 0 }}>Basic Example</h3>
                        </Card.Header>
                        <Card.Body style={{ padding: 0 }}>
                          <CodeBlock
                            code={`${component.import}${
                              component.cssImport ? `\n${component.cssImport}` : ''
                            }\n\nexport default function Example() {\n  return <${
                              component.title
                            } />;\n}`}
                            language="tsx"
                          />
                        </Card.Body>
                      </Card>
                    ),
                  },
                ]
              : []),
            ...(component.props && component.props.length > 0
              ? [
                  {
                    id: 'props',
                    label: 'Props',
                    content: (
                      <div style={{ marginTop: 'var(--spacing-4)' }}>
                        <PropsTable props={component.props} />
                      </div>
                    ),
                  },
                ]
              : []),
            ...(component.dependencies || component.registryDependencies
              ? [
                  {
                    id: 'dependencies',
                    label: 'Dependencies',
                    content: (
                      <div style={{ marginTop: 'var(--spacing-4)' }}>
                        <Accordion
                          defaultExpanded={
                            component.dependencies && component.dependencies.length > 0
                              ? ['npm']
                              : component.registryDependencies &&
                                component.registryDependencies.length > 0
                              ? ['registry']
                              : []
                          }
                          items={[
                            ...(component.dependencies && component.dependencies.length > 0
                              ? [
                                  {
                                    id: 'npm',
                                    title: 'npm packages',
                                    content: (
                                      <ul style={{ margin: 0, paddingLeft: 'var(--spacing-6)' }}>
                                        {component.dependencies.map((dep: string) => (
                                          <li key={dep}>
                                            <code>{dep}</code>
                                          </li>
                                        ))}
                                      </ul>
                                    ),
                                  },
                                ]
                              : []),
                            ...(component.registryDependencies &&
                            component.registryDependencies.length > 0
                              ? [
                                  {
                                    id: 'registry',
                                    title: 'Registry components',
                                    content: (
                                      <ul style={{ margin: 0, paddingLeft: 'var(--spacing-6)' }}>
                                        {component.registryDependencies.map((dep: string) => (
                                          <li key={dep}>
                                            <Link href={`/components/${dep}`}>
                                              <code>{dep}</code>
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    ),
                                  },
                                ]
                              : []),
                          ]}
                        />
                      </div>
                    ),
                  },
                ]
              : []),
            ...(component.files && component.files.length > 0
              ? [
                  {
                    id: 'files',
                    label: 'Files',
                    content: (
                      <Card variant="outlined" style={{ marginTop: 'var(--spacing-4)' }}>
                        <Card.Header>
                          <h3 style={{ margin: 0 }}>Files Copied to Your Project</h3>
                        </Card.Header>
                        <Card.Body>
                          <ul style={{ margin: 0, paddingLeft: 'var(--spacing-6)' }}>
                            {component.files.map((file: any, idx: number) => (
                              <li key={idx}>
                                <code>{file.path}</code>{' '}
                                <Badge variant="secondary" size="sm">
                                  {file.type}
                                </Badge>
                              </li>
                            ))}
                          </ul>
                        </Card.Body>
                      </Card>
                    ),
                  },
                ]
              : []),
          ]}
        />
      </div>
    </>
  );
}
