/**
 * MetricCards Component
 *
 * A row of KPI cards for dashboard overviews.
 * Optimized for Product Mode with minimal visual noise and data density.
 *
 * @example
 * ```tsx
 * <MetricCards
 *   metrics={[
 *     { label: 'Revenue', value: '$12,345', change: { value: '+12%', positive: true } },
 *     { label: 'Users', value: '1,234', change: { value: '+5%', positive: true } },
 *     { label: 'Conversion', value: '3.2%', change: { value: '-0.5%', positive: false } }
 *   ]}
 *   columns={3}
 * />
 * ```
 */
import type { MetricCardsProps, MetricCardProps } from './MetricCards.types';
declare const MetricCard: import("react").ForwardRefExoticComponent<MetricCardProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const MetricCards: import("react").ForwardRefExoticComponent<MetricCardsProps & import("react").RefAttributes<HTMLDivElement>>;
export { MetricCard };
//# sourceMappingURL=MetricCards.d.ts.map