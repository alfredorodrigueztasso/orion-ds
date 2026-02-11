/**
 * Stats Component Types
 *
 * Type definitions for the Orion Stats section component.
 */
import type { HTMLAttributes, ReactNode } from 'react';
/**
 * Grid column count for stat items
 */
export type StatsColumns = 2 | 3 | 4;
/**
 * Stats visual variant
 */
export type StatsVariant = 'default' | 'cards' | 'inline';
/**
 * Trend indicator for a stat
 */
export interface StatTrend {
    /**
     * Trend value (e.g., "+12%", "-5%")
     */
    value: string;
    /**
     * Whether the trend is positive
     * @default true
     */
    positive?: boolean;
}
/**
 * Stat item data structure
 */
export interface StatItem {
    /**
     * The main stat value (e.g., "10K+", "99.9%", "$1.2M")
     */
    value: string | number;
    /**
     * Label describing the stat
     */
    label: string;
    /**
     * Optional description for more context
     */
    description?: string;
    /**
     * Optional icon element
     */
    icon?: ReactNode;
    /**
     * Optional trend indicator
     */
    trend?: StatTrend;
}
/**
 * Stat item card props (internal component)
 */
export interface StatItemCardProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Stat item data
     */
    stat: StatItem;
    /**
     * Visual variant
     * @default 'default'
     */
    variant?: StatsVariant;
    /**
     * Apply gradient highlight to value
     * @default false
     */
    highlightValue?: boolean;
}
/**
 * Stats section props
 *
 * @example
 * ```tsx
 * <Stats
 *   title="By the numbers"
 *   stats={[
 *     { value: "10K+", label: "Active users" },
 *     { value: "99.9%", label: "Uptime" },
 *     { value: "$1.2M", label: "Revenue generated", trend: { value: "+12%", positive: true } }
 *   ]}
 *   columns={3}
 * />
 * ```
 */
export interface StatsProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
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
     * Array of stat items
     */
    stats: StatItem[];
    /**
     * Number of grid columns
     * @default 4
     */
    columns?: StatsColumns;
    /**
     * Visual variant
     * - default: Simple grid with dividers
     * - cards: Individual cards for each stat
     * - inline: Compact inline layout
     * @default 'default'
     */
    variant?: StatsVariant;
    /**
     * Background style
     * @default 'subtle'
     */
    background?: 'base' | 'subtle' | 'brand' | 'none';
    /**
     * Center the header and stats
     * @default true
     */
    centered?: boolean;
    /**
     * Apply gradient highlight to stat values
     * @default false
     */
    highlightValue?: boolean;
}
//# sourceMappingURL=Stats.types.d.ts.map