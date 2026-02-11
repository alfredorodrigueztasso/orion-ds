/**
 * Pricing Component
 *
 * A pricing section with support for multiple plans, feature lists, and
 * highlighting popular options. Composes atomic components from @orion/react.
 *
 * @example
 * ```tsx
 * <Pricing
 *   eyebrow={<Badge>Pricing</Badge>}
 *   title="Simple, transparent pricing"
 *   description="Choose the plan that's right for you"
 *   plans={[
 *     {
 *       name: "Starter",
 *       price: "$9",
 *       period: "per month",
 *       features: ["5 projects", "Basic support"],
 *       action: <Button>Get Started</Button>
 *     },
 *     {
 *       name: "Pro",
 *       price: "$29",
 *       period: "per month",
 *       features: ["Unlimited projects", "Priority support"],
 *       action: <Button>Get Started</Button>,
 *       popular: true
 *     }
 *   ]}
 * />
 * ```
 */
import type { PricingProps } from './Pricing.types';
export declare const Pricing: import("react").ForwardRefExoticComponent<PricingProps & import("react").RefAttributes<HTMLElement>>;
//# sourceMappingURL=Pricing.d.ts.map