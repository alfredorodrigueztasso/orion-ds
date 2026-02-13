import type { Meta, StoryObj } from '@storybook/react';
import { Folder, FileText, Settings } from 'lucide-react';
import { Breadcrumbs } from './Breadcrumbs';
import type { BreadcrumbItem } from './Breadcrumbs.types';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Sections/App/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

// Sample breadcrumb items
const sampleItems: BreadcrumbItem[] = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'projects', label: 'Projects', href: '/projects' },
  { id: 'alpha', label: 'Project Alpha', href: '/projects/alpha' },
  { id: 'settings', label: 'Settings' },
];

/**
 * Default Breadcrumbs
 */
export const Default: Story = {
  args: {
    items: sampleItems,
  },
};

/**
 * With home icon
 */
export const WithHomeIcon: Story = {
  args: {
    items: sampleItems,
    showHomeIcon: true,
  },
};

/**
 * With custom icons
 */
export const WithIcons: Story = {
  args: {
    items: [
      { id: 'home', label: 'Home', href: '/' },
      { id: 'docs', label: 'Documents', href: '/docs', icon: <Folder size={14} /> },
      { id: 'file', label: 'Report.pdf', icon: <FileText size={14} /> },
    ],
    showHomeIcon: true,
  },
};

/**
 * Collapsible (long path)
 */
export const Collapsible: Story = {
  args: {
    items: [
      { id: 'home', label: 'Home', href: '/' },
      { id: 'workspace', label: 'Workspace', href: '/workspace' },
      { id: 'projects', label: 'Projects', href: '/workspace/projects' },
      { id: 'alpha', label: 'Project Alpha', href: '/workspace/projects/alpha' },
      { id: 'docs', label: 'Documents', href: '/workspace/projects/alpha/docs' },
      { id: 'settings', label: 'Settings' },
    ],
    maxItems: 4,
    itemsBeforeCollapse: 1,
    itemsAfterCollapse: 2,
  },
};

/**
 * Custom separator
 */
export const CustomSeparator: Story = {
  args: {
    items: sampleItems,
    separator: '/',
  },
};

/**
 * Arrow separator
 */
export const ArrowSeparator: Story = {
  args: {
    items: sampleItems,
    separator: '→',
  },
};

/**
 * Size: Small
 */
export const Small: Story = {
  args: {
    items: sampleItems,
    size: 'sm',
  },
};

/**
 * Size: Large
 */
export const Large: Story = {
  args: {
    items: sampleItems,
    size: 'lg',
  },
};

/**
 * All sizes comparison
 */
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
      <div>
        <p
          style={{
            marginBottom: 'var(--spacing-2)',
            fontSize: 'var(--font-size-12)',
            color: 'var(--text-tertiary)',
          }}
        >
          Small
        </p>
        <Breadcrumbs items={sampleItems} size="sm" />
      </div>
      <div>
        <p
          style={{
            marginBottom: 'var(--spacing-2)',
            fontSize: 'var(--font-size-12)',
            color: 'var(--text-tertiary)',
          }}
        >
          Medium (default)
        </p>
        <Breadcrumbs items={sampleItems} size="md" />
      </div>
      <div>
        <p
          style={{
            marginBottom: 'var(--spacing-2)',
            fontSize: 'var(--font-size-12)',
            color: 'var(--text-tertiary)',
          }}
        >
          Large
        </p>
        <Breadcrumbs items={sampleItems} size="lg" />
      </div>
    </div>
  ),
};

/**
 * With onClick handlers
 */
export const WithClickHandlers: Story = {
  args: {
    items: [
      { id: 'home', label: 'Home', onClick: () => alert('Go to Home') },
      { id: 'products', label: 'Products', onClick: () => alert('Go to Products') },
      { id: 'electronics', label: 'Electronics', onClick: () => alert('Go to Electronics') },
      { id: 'laptop', label: 'Laptop Pro 16' },
    ],
  },
};

/**
 * Two items only
 */
export const TwoItems: Story = {
  args: {
    items: [
      { id: 'home', label: 'Dashboard', href: '/' },
      { id: 'settings', label: 'Settings' },
    ],
    showHomeIcon: true,
  },
};

/**
 * Single item
 */
export const SingleItem: Story = {
  args: {
    items: [{ id: 'home', label: 'Dashboard' }],
    showHomeIcon: true,
  },
};

/**
 * In a page context
 */
export const InPageContext: Story = {
  render: () => (
    <div
      style={{
        padding: 'var(--spacing-4)',
        background: 'var(--surface-subtle)',
        borderRadius: 'var(--radius-sm)',
      }}
    >
      <Breadcrumbs
        items={[
          { id: 'settings', label: 'Settings', href: '/settings', icon: <Settings size={14} /> },
          { id: 'account', label: 'Account', href: '/settings/account' },
          { id: 'security', label: 'Security' },
        ]}
        showHomeIcon
        size="sm"
      />
      <h1
        style={{
          margin: 'var(--spacing-4) 0 var(--spacing-2)',
          fontSize: 'var(--font-size-24)',
          fontWeight: 'var(--font-weight-medium)',
        }}
      >
        Security Settings
      </h1>
      <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-14)' }}>
        Manage your account security preferences
      </p>
    </div>
  ),
};
