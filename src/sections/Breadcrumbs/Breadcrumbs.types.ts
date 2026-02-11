/**
 * Breadcrumbs Component Types
 *
 * Type definitions for the Orion Breadcrumbs section component.
 * A standalone navigation breadcrumb trail for SaaS applications.
 */

import type { HTMLAttributes, ReactNode } from 'react';

/**
 * Breadcrumb item
 */
export interface BreadcrumbItem {
  /**
   * Unique identifier
   */
  id: string;

  /**
   * Item label
   */
  label: string;

  /**
   * Link URL (optional - last item typically has no href)
   */
  href?: string;

  /**
   * Optional icon
   */
  icon?: ReactNode;

  /**
   * Click handler (alternative to href)
   */
  onClick?: () => void;
}

/**
 * Breadcrumbs section props
 *
 * @example
 * ```tsx
 * <Breadcrumbs
 *   items={[
 *     { id: 'home', label: 'Home', href: '/' },
 *     { id: 'projects', label: 'Projects', href: '/projects' },
 *     { id: 'current', label: 'Project Alpha' }
 *   ]}
 * />
 * ```
 */
export interface BreadcrumbsProps extends HTMLAttributes<HTMLElement> {
  /**
   * Breadcrumb items
   */
  items: BreadcrumbItem[];

  /**
   * Custom separator
   * @default "/"
   */
  separator?: ReactNode;

  /**
   * Maximum items to show before collapsing
   * @default undefined (no collapse)
   */
  maxItems?: number;

  /**
   * Number of items to show at start when collapsed
   * @default 1
   */
  itemsBeforeCollapse?: number;

  /**
   * Number of items to show at end when collapsed
   * @default 1
   */
  itemsAfterCollapse?: number;

  /**
   * Show home icon for first item
   * @default false
   */
  showHomeIcon?: boolean;

  /**
   * Size variant
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg';
}
