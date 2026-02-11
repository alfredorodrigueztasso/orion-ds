/**
 * Comparison Section Types
 *
 * Type definitions for the Orion Comparison section component.
 */
import type { HTMLAttributes, ReactNode } from 'react';
/**
 * Feature row for comparison
 */
export interface ComparisonFeature {
    /**
     * Feature name/label
     */
    name: string;
    /**
     * Feature description (optional)
     */
    description?: string;
    /**
     * Feature category for grouping
     */
    category?: string;
    /**
     * Values for each column (true/false for boolean, string for text)
     */
    values: (boolean | string | ReactNode)[];
}
/**
 * Column header for comparison
 */
export interface ComparisonColumn {
    /**
     * Column title (product/plan name)
     */
    title: string;
    /**
     * Column subtitle (price, etc.)
     */
    subtitle?: string;
    /**
     * Highlight this column
     */
    highlighted?: boolean;
    /**
     * Badge text (e.g., "Popular", "Best Value")
     */
    badge?: string;
    /**
     * CTA button label
     */
    ctaLabel?: string;
    /**
     * CTA button href
     */
    ctaHref?: string;
}
/**
 * Comparison section props
 *
 * @example
 * ```tsx
 * <Comparison
 *   title="Compare Plans"
 *   columns={[
 *     { title: "Basic", subtitle: "$9/mo" },
 *     { title: "Pro", subtitle: "$29/mo", highlighted: true, badge: "Popular" },
 *     { title: "Enterprise", subtitle: "Custom" },
 *   ]}
 *   features={[
 *     { name: "Users", values: ["1", "5", "Unlimited"] },
 *     { name: "Storage", values: ["10GB", "100GB", "Unlimited"] },
 *     { name: "Support", values: [false, true, true] },
 *   ]}
 * />
 * ```
 */
export interface ComparisonProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
    /**
     * Optional eyebrow text
     */
    eyebrow?: ReactNode;
    /**
     * Section title
     */
    title?: ReactNode;
    /**
     * Section description
     */
    description?: ReactNode;
    /**
     * Column definitions
     */
    columns: ComparisonColumn[];
    /**
     * Feature rows
     */
    features: ComparisonFeature[];
    /**
     * Show category headers
     * @default true
     */
    showCategories?: boolean;
    /**
     * Show row descriptions
     * @default false
     */
    showDescriptions?: boolean;
    /**
     * Sticky header
     * @default true
     */
    stickyHeader?: boolean;
    /**
     * Background style
     * @default 'base'
     */
    background?: 'base' | 'subtle' | 'none';
    /**
     * Compact mode
     * @default false
     */
    compact?: boolean;
}
//# sourceMappingURL=Comparison.types.d.ts.map