import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getAllSections, getItemByName } from '@/lib/registry';
import CodeBlock from '@/components/CodeBlock';
import PropsTable from '@/components/PropsTable';
import SectionPreview from '@/components/SectionPreview';

interface PageProps {
  params: Promise<{ name: string }>;
}

export async function generateStaticParams() {
  const sections = await getAllSections();
  return sections.map((section) => ({
    name: section.name,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const section = await getItemByName(resolvedParams.name);

  if (!section) {
    return {
      title: 'Section Not Found',
    };
  }

  return {
    title: `${section.title} Section`,
    description: section.description,
    keywords: [section.title, 'section', 'react', 'orion', section.category],
  };
}

export default async function SectionPage({ params }: PageProps) {
  const resolvedParams = await params;
  const section = await getItemByName(resolvedParams.name);

  if (!section || section.type !== 'registry:section') {
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
          {section.category}
        </div>
        <h1 style={{ fontSize: '3rem', marginBottom: 'var(--spacing-2)' }}>
          {section.title}
        </h1>
        <p style={{
          fontSize: '1.25rem',
          color: 'var(--text-secondary)',
          marginBottom: 0
        }}>
          {section.description}
        </p>
      </header>

      {/* Preview Section */}
      <SectionPreview sectionName={section.name} />

      <section style={{ marginBottom: 'var(--spacing-12)' }}>
        <h2>Installation</h2>
        <CodeBlock
          code={`npx @orion-ds/cli add ${section.name}`}
          language="bash"
        />
      </section>

      {section.import && (
        <section style={{ marginBottom: 'var(--spacing-12)' }}>
          <h2>Usage</h2>
          <CodeBlock
            code={`${section.import}${section.cssImport ? `\n${section.cssImport}` : ''}\n\nexport default function Example() {\n  return <${section.title} />;\n}`}
            language="tsx"
          />
        </section>
      )}

      {section.props && section.props.length > 0 && (
        <section style={{ marginBottom: 'var(--spacing-12)' }}>
          <h2>Props</h2>
          <PropsTable props={section.props} />
        </section>
      )}

      {(section.dependencies || section.registryDependencies) && (
        <section style={{ marginBottom: 'var(--spacing-12)' }}>
          <h2>Dependencies</h2>
          {section.dependencies && section.dependencies.length > 0 && (
            <div>
              <h3>npm packages:</h3>
              <ul>
                {section.dependencies.map((dep) => (
                  <li key={dep}>
                    <code>{dep}</code>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {section.registryDependencies && section.registryDependencies.length > 0 && (
            <div>
              <h3>Registry dependencies:</h3>
              <ul>
                {section.registryDependencies.map((dep) => (
                  <li key={dep}>
                    <code>{dep}</code>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      )}
    </div>
  );
}
