import { getAllComponents, getCategoriesByType } from '@/lib/registry';
import DocsPageHero from '@/components/DocsPageHero';
import ComponentsList from '@/components/ComponentsList';

export const metadata = {
  title: 'Components',
  description: 'Browse all available Orion Design System components',
};

export default async function ComponentsListPage() {
  const components = await getAllComponents();
  const categories = getCategoriesByType('registry:component');

  return (
    <div className="main-content">
      <DocsPageHero
        title="Components"
        subtitle={`${components.length} ready-to-use React components with full TypeScript support`}
        badges={[
          { label: `${components.length} Components`, variant: 'info' },
          { label: 'TypeScript', variant: 'success' },
          { label: 'Accessible', variant: 'success' },
        ]}
      />
      <ComponentsList components={components} categories={categories} />
    </div>
  );
}
