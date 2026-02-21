import Link from 'next/link';
import { getAllSections, getCategoriesByType } from '@/lib/registry';

export const metadata = {
  title: 'Sections',
  description: 'Pre-built page sections for rapid development',
};

export default async function SectionsListPage() {
  const sections = await getAllSections();
  const categories = getCategoriesByType('registry:section');

  // Group sections by category
  const sectionsByCategory = categories.reduce((acc, category) => {
    acc[category] = sections.filter(s => s.category === category);
    return acc;
  }, {} as Record<string, typeof sections>);

  return (
    <div className="main-content">
      <header style={{ marginBottom: 'var(--spacing-8)' }}>
        <h1>Sections</h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)' }}>
          {sections.length} pre-built sections ready to compose into pages
        </p>
      </header>

      {categories.map((category) => (
        <section key={category} style={{ marginBottom: 'var(--spacing-12)' }}>
          <h2 style={{ textTransform: 'capitalize' }}>{category}</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 'var(--spacing-4)',
            marginTop: 'var(--spacing-4)'
          }}>
            {sectionsByCategory[category]?.map((section) => (
              <Link
                key={section.name}
                href={`/sections/${section.name}`}
                style={{
                  display: 'block',
                  padding: 'var(--spacing-4)',
                  background: 'var(--surface-subtle)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-control)',
                  textDecoration: 'none',
                  transition: 'all 0.2s'
                }}
              >
                <h3 style={{
                  fontSize: '1.125rem',
                  marginBottom: 'var(--spacing-2)',
                  color: 'var(--text-primary)'
                }}>
                  {section.title}
                </h3>
                <p style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-secondary)',
                  margin: 0
                }}>
                  {section.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
