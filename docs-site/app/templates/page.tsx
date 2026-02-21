import Link from 'next/link';
import { getAllTemplates, getCategoriesByType } from '@/lib/registry';

export const metadata = {
  title: 'Templates',
  description: 'Complete page templates for common use cases',
};

export default async function TemplatesListPage() {
  const templates = await getAllTemplates();
  const categories = getCategoriesByType('registry:template');

  // Group templates by category
  const templatesByCategory = categories.reduce((acc, category) => {
    acc[category] = templates.filter(t => t.category === category);
    return acc;
  }, {} as Record<string, typeof templates>);

  return (
    <div className="main-content">
      <header style={{ marginBottom: 'var(--spacing-8)' }}>
        <h1>Templates</h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)' }}>
          {templates.length} complete page templates ready to use
        </p>
      </header>

      {categories.map((category) => (
        <section key={category} style={{ marginBottom: 'var(--spacing-12)' }}>
          <h2 style={{ textTransform: 'capitalize' }}>{category}</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: 'var(--spacing-4)',
            marginTop: 'var(--spacing-4)'
          }}>
            {templatesByCategory[category]?.map((template) => (
              <Link
                key={template.name}
                href={`/templates/${template.name}`}
                style={{
                  display: 'block',
                  padding: 'var(--spacing-6)',
                  background: 'var(--surface-subtle)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-control)',
                  textDecoration: 'none',
                  transition: 'all 0.2s'
                }}
              >
                <h3 style={{
                  fontSize: '1.25rem',
                  marginBottom: 'var(--spacing-2)',
                  color: 'var(--text-primary)'
                }}>
                  {template.title}
                </h3>
                <p style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-secondary)',
                  margin: 0
                }}>
                  {template.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
