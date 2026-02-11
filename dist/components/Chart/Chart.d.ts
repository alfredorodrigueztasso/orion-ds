/**
 * Chart Component
 *
 * Lightweight wrapper around Recharts providing Orion token theming.
 * Does NOT wrap Recharts — user accesses Recharts components directly.
 * Provides: ChartContainer (CSS variable injection), ChartTooltipContent,
 * and ChartLegendContent styled with Orion tokens.
 *
 * @example
 * ```tsx
 * const config: ChartConfig = {
 *   revenue: { label: 'Revenue', color: 'var(--color-brand-500)' },
 *   expenses: { label: 'Expenses', color: 'var(--status-error)' },
 * };
 *
 * <ChartContainer config={config}>
 *   <BarChart data={data}>
 *     <XAxis dataKey="month" />
 *     <YAxis />
 *     <ChartTooltip content={<ChartTooltipContent />} />
 *     <ChartLegend content={<ChartLegendContent />} />
 *     <Bar dataKey="revenue" fill="var(--color-revenue)" />
 *   </BarChart>
 * </ChartContainer>
 * ```
 */
import React from 'react';
import { Tooltip, Legend } from 'recharts';
import type { ChartContainerProps, ChartTooltipContentProps, ChartLegendContentProps, ChartGradientProps } from './Chart.types';
/**
 * ChartContainer — wraps Recharts with CSS variable injection from config
 */
export declare const ChartContainer: React.FC<ChartContainerProps>;
/**
 * ChartTooltipContent — Orion-styled tooltip for Recharts
 */
export declare const ChartTooltipContent: React.FC<ChartTooltipContentProps>;
/**
 * ChartLegendContent — Orion-styled legend for Recharts
 */
export declare const ChartLegendContent: React.FC<ChartLegendContentProps>;
/**
 * ChartGradient — SVG linearGradient helper for elegant area chart fills.
 *
 * Place inside `<defs>` within a Recharts chart, then reference via `fill="url(#id)"`.
 *
 * @example
 * ```tsx
 * <AreaChart data={data}>
 *   <defs>
 *     <ChartGradient id="fillRevenue" color="var(--chart-1)" />
 *   </defs>
 *   <Area dataKey="revenue" fill="url(#fillRevenue)" fillOpacity={1} />
 * </AreaChart>
 * ```
 */
export declare const ChartGradient: React.FC<ChartGradientProps>;
export declare const ChartTooltip: typeof Tooltip;
export declare const ChartLegend: typeof Legend;
//# sourceMappingURL=Chart.d.ts.map