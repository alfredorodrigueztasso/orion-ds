'use client';

import Link from 'next/link';
import { Card, Badge } from '@/components/ClientComponents';

interface Component {
  name: string;
  title: string;
  description: string;
  category: string;
  modeAware?: boolean;
}

interface ComponentsListProps {
  components: Component[];
  categories: string[];
}

export default function ComponentsList({ components, categories }: ComponentsListProps) {
  // Group components by category
  const componentsByCategory = categories.reduce((acc, category) => {
    acc[category] = components.filter(c => c.category === category);
    return acc;
  }, {} as Record<string, Component[]>);

  return (
    <>
      {categories.map((category) => (
        <section key={category} style={{ marginBottom: 'var(--spacing-12)' }}>
          <h2 style={{ textTransform: 'capitalize', marginBottom: 'var(--spacing-4)' }}>
            {category}
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 'var(--spacing-4)'
          }}>
            {componentsByCategory[category]?.map((component) => (
              <Link
                key={component.name}
                href={`/components/${component.name}`}
                style={{ textDecoration: 'none' }}
              >
                <Card variant="outlined" interactive style={{ height: '100%' }}>
                  <Card.Header>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
                      <span>{component.title}</span>
                      {component.modeAware && (
                        <Badge variant="info" size="sm">Mode Aware</Badge>
                      )}
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <p style={{ margin: 0, color: 'var(--text-secondary)' }}>
                      {component.description}
                    </p>
                  </Card.Body>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
