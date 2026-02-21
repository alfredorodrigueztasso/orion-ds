import { getAllComponents, getCategoriesByType } from '@/lib/registry';
import { PageHeader } from '@/components/ClientComponents';
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
      <PageHeader
        title="Components"
        description={`${components.length} ready-to-use React components with full TypeScript support`}
      />
      <ComponentsList components={components} categories={categories} />
    </div>
  );
}
