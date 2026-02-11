/**
 * Stats Component
 *
 * A stats/metrics section for displaying key numbers and KPIs.
 * Supports icons, trends, and multiple visual variants.
 *
 * @example
 * ```tsx
 * <Stats
 *   eyebrow={<Badge>Metrics</Badge>}
 *   title="By the numbers"
 *   description="Our platform's impact in real numbers"
 *   stats={[
 *     { value: "10K+", label: "Active users" },
 *     { value: "99.9%", label: "Uptime", trend: { value: "+0.1%", positive: true } },
 *     { value: "$1.2M", label: "Revenue" },
 *     { value: "150+", label: "Countries" }
 *   ]}
 *   columns={4}
 * />
 * ```
 */
import type { StatsProps } from './Stats.types';
export declare const Stats: import("react").ForwardRefExoticComponent<StatsProps & import("react").RefAttributes<HTMLElement>>;
//# sourceMappingURL=Stats.d.ts.map