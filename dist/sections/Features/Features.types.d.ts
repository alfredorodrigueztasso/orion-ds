/**
 * Features Component Types
 *
 * Type definitions for the Orion Features section component.
 */
import type { HTMLAttributes, ReactNode } from 'react';
/**
 * Grid column count
 */
export type FeaturesColumns = 2 | 3 | 4;
/**
 * Feature item data structure
 */
export interface FeatureItem {
    /**
     * Icon element (typically from lucide-react)
     */
    icon?: ReactNode;
    /**
     * Feature title
     */
    title: string;
    /**
     * Feature description
     */
    description: string;
    /**
     * Optional badge text
     */
    badge?: string;
    /**
     * Optional link href
     */
    href?: string;
}
/**
 * Feature card props (internal component)
 */
export interface FeatureCardProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Feature item data
     */
    feature: FeatureItem;
    /**
     * Enable hover effects
     * @default true
     */
    interactive?: boolean;
}
/**
 * Features section props
 *
 * @example
 * ```tsx
 * <Features
 *   title="Everything you need"
 *   description="Powerful features designed for modern apps"
 *   items={[
 *     { icon: <Zap />, title: "Fast", description: "Lightning speed" },
 *     { icon: <Shield />, title: "Secure", description: "Bank-grade security" },
 *   ]}
 *   columns={3}
 * />
 * ```
 */
export interface FeaturesProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
    /**
     * Optional eyebrow/badge above title
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
     * Feature items array
     */
    items: FeatureItem[];
    /**
     * Number of grid columns
     * @default 3
     */
    columns?: FeaturesColumns;
    /**
     * Background style
     * @default 'subtle'
     */
    background?: 'base' | 'subtle' | 'none';
    /**
     * Enable card hover effects
     * @default true
     */
    interactive?: boolean;
    /**
     * Center the header text
     * @default true
     */
    centered?: boolean;
}
//# sourceMappingURL=Features.types.d.ts.map