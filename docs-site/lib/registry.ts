import registryData from '../../registry/index.json';

export interface RegistryItem {
  name: string;
  title: string;
  description: string;
  category: string;
  type: 'registry:component' | 'registry:section' | 'registry:template';
  props?: Array<{
    name: string;
    type: string;
    description: string;
    default?: string;
    required?: boolean;
    values?: string[];
  }>;
  examples?: Array<{
    title: string;
    code: string;
  }>;
  import?: string;
  cssImport?: string;
  dependencies?: string[];
  registryDependencies?: string[];
  modeAware?: boolean;
  preview?: {
    url?: string;
    local?: string;
  };
  files?: Array<{
    path: string;
    type: string;
  }>;
}

export interface RegistryData {
  $schema: string;
  name: string;
  version: string;
  description: string;
  homepage: string;
  components: RegistryItem[];
}

const registry: RegistryData = registryData as RegistryData;

/**
 * Get all components from the registry
 */
export async function getAllComponents(): Promise<RegistryItem[]> {
  return registry.components.filter(item => item.type === 'registry:component');
}

/**
 * Get all sections from the registry
 */
export async function getAllSections(): Promise<RegistryItem[]> {
  return registry.components.filter(item => item.type === 'registry:section');
}

/**
 * Get all templates from the registry
 */
export async function getAllTemplates(): Promise<RegistryItem[]> {
  return registry.components.filter(item => item.type === 'registry:template');
}

/**
 * Get all items from the registry
 */
export async function getAllItems(): Promise<RegistryItem[]> {
  return registry.components;
}

/**
 * Get a single item by name
 */
export async function getItemByName(name: string): Promise<RegistryItem | undefined> {
  return registry.components.find(item => item.name === name);
}

/**
 * Get items by category
 */
export async function getItemsByCategory(category: string): Promise<RegistryItem[]> {
  return registry.components.filter(item => item.category === category);
}

/**
 * Get all unique categories
 */
export function getCategories(): string[] {
  return [...new Set(registry.components.map(item => item.category))];
}

/**
 * Get categories for a specific type
 */
export function getCategoriesByType(type: RegistryItem['type']): string[] {
  const items = registry.components.filter(item => item.type === type);
  return [...new Set(items.map(item => item.category))];
}

/**
 * Search items by query (searches name, title, description)
 */
export async function searchItems(query: string): Promise<RegistryItem[]> {
  const lowercaseQuery = query.toLowerCase();
  return registry.components.filter(item =>
    item.name.toLowerCase().includes(lowercaseQuery) ||
    item.title.toLowerCase().includes(lowercaseQuery) ||
    item.description.toLowerCase().includes(lowercaseQuery)
  );
}

/**
 * Get registry metadata
 */
export function getRegistryMetadata() {
  return {
    name: registry.name,
    version: registry.version,
    description: registry.description,
    homepage: registry.homepage,
    totalItems: registry.components.length,
    componentCount: registry.components.filter(i => i.type === 'registry:component').length,
    sectionCount: registry.components.filter(i => i.type === 'registry:section').length,
    templateCount: registry.components.filter(i => i.type === 'registry:template').length,
  };
}
