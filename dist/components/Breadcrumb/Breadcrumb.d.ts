/**
 * Breadcrumb Component
 *
 * Navigation breadcrumbs showing current page location in site hierarchy.
 *
 * @example
 * ```tsx
 * <Breadcrumb
 *   items={[
 *     { label: 'Home', href: '/' },
 *     { label: 'Products', href: '/products' },
 *     { label: 'Laptop' }
 *   ]}
 * />
 *
 * <Breadcrumb
 *   items={breadcrumbs}
 *   separator="slash"
 *   showHomeIcon
 *   maxItems={3}
 *   size="lg"
 * />
 *
 * <Breadcrumb
 *   items={items}
 *   separator="custom"
 *   customSeparator={<Icon name="arrow-right" />}
 * />
 * ```
 */
import React from 'react';
import type { BreadcrumbProps } from './Breadcrumb.types';
export declare const Breadcrumb: React.FC<BreadcrumbProps>;
//# sourceMappingURL=Breadcrumb.d.ts.map