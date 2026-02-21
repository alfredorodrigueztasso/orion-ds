import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getAllTemplates, getItemByName } from '@/lib/registry';
import CodeBlock from '@/components/CodeBlock';
import PropsTable from '@/components/PropsTable';
import TemplatePreview from '@/components/TemplatePreview';

interface PageProps {
  params: Promise<{ name: string }>;
}

export async function generateStaticParams() {
  const templates = await getAllTemplates();
  return templates.map((template) => ({
    name: template.name,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const template = await getItemByName(resolvedParams.name);

  if (!template) {
    return {
      title: 'Template Not Found',
    };
  }

  return {
    title: `${template.title} Template`,
    description: template.description,
    keywords: [template.title, 'template', 'react', 'orion', template.category],
  };
}

export default async function TemplatePage({ params }: PageProps) {
  const resolvedParams = await params;
  const template = await getItemByName(resolvedParams.name);

  if (!template || template.type !== 'registry:template') {
    notFound();
  }

  return (
    <div className="main-content">
      <header style={{ marginBottom: 'var(--spacing-8)' }}>
        <div style={{
          display: 'inline-block',
          padding: 'var(--spacing-1) var(--spacing-3)',
          background: 'var(--surface-layer)',
          borderRadius: 'var(--radius-sm)',
          fontSize: '0.875rem',
          color: 'var(--text-secondary)',
          marginBottom: 'var(--spacing-4)'
        }}>
          {template.category}
        </div>
        <h1 style={{ fontSize: '3rem', marginBottom: 'var(--spacing-2)' }}>
          {template.title}
        </h1>
        <p style={{
          fontSize: '1.25rem',
          color: 'var(--text-secondary)',
          marginBottom: 0
        }}>
          {template.description}
        </p>
      </header>

      {/* Preview Section */}
      <TemplatePreview templateName={template.name} />

      <section style={{ marginBottom: 'var(--spacing-12)' }}>
        <h2>Installation</h2>
        <CodeBlock
          code={`npx @orion-ds/cli add ${template.name}`}
          language="bash"
        />
      </section>

      {template.import && (
        <section style={{ marginBottom: 'var(--spacing-12)' }}>
          <h2>Usage</h2>
          <CodeBlock
            code={`${template.import}${template.cssImport ? `\n${template.cssImport}` : ''}\n\nexport default function MyPage() {\n  return <${template.title} />;\n}`}
            language="tsx"
          />
        </section>
      )}

      {template.props && template.props.length > 0 && (
        <section style={{ marginBottom: 'var(--spacing-12)' }}>
          <h2>Props</h2>
          <PropsTable props={template.props} />
        </section>
      )}

      {(template.dependencies || template.registryDependencies) && (
        <section style={{ marginBottom: 'var(--spacing-12)' }}>
          <h2>Dependencies</h2>
          {template.dependencies && template.dependencies.length > 0 && (
            <div>
              <h3>npm packages:</h3>
              <ul>
                {template.dependencies.map((dep) => (
                  <li key={dep}>
                    <code>{dep}</code>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {template.registryDependencies && template.registryDependencies.length > 0 && (
            <div>
              <h3>Registry dependencies:</h3>
              <ul>
                {template.registryDependencies.map((dep) => (
                  <li key={dep}>
                    <code>{dep}</code>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      )}

      {template.preview && (
        <section style={{ marginBottom: 'var(--spacing-12)' }}>
          <h2>Preview</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            View the live preview: <a href={template.preview.url} target="_blank" rel="noopener noreferrer">{template.preview.url}</a>
          </p>
        </section>
      )}
    </div>
  );
}
