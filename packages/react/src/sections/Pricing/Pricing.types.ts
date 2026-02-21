/**
 * Pricing Component Types
 *
 * Type definitions for the Orion Pricing section component.
 */

import type { HTMLAttributes, ReactNode } from "react";

/**
 * Grid column count for pricing cards
 */
export type PricingColumns = 2 | 3 | 4;

/**
 * Feature item in a pricing plan
 */
export interface PricingFeature {
  /**
   * Feature text
   */
  text: string;

  /**
   * Whether the feature is included in the plan
   * @default true
   */
  included?: boolean;
}

/**
 * Pricing plan data structure
 */
export interface PricingPlan {
  /**
   * Plan name (e.g., "Starter", "Pro", "Enterprise")
   */
  name: string;

  /**
   * Price display (e.g., "$9", "$29/mo", or ReactNode for custom)
   */
  price: string | ReactNode;

  /**
   * Billing period (e.g., "per month", "per user/month")
   */
  period?: string;

  /**
   * Short description of the plan
   */
  description?: string;

  /**
   * List of features included in the plan
   */
  features: (string | PricingFeature)[];

  /**
   * Call-to-action button/element
   */
  action?: ReactNode;

  /**
   * Mark as most popular/recommended
   * @default false
   */
  popular?: boolean;

  /**
   * Optional badge text (e.g., "Best Value", "Most Popular")
   */
  badge?: ReactNode;
}

/**
 * Pricing card props (internal component)
 */
export interface PricingCardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Pricing plan data
   */
  plan: PricingPlan;
}

/**
 * Pricing section props
 *
 * @example
 * ```tsx
 * <Pricing
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
export interface PricingProps extends Omit<
  HTMLAttributes<HTMLElement>,
  "title"
> {
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
   * Array of pricing plans
   */
  plans: PricingPlan[];

  /**
   * Number of grid columns
   * @default 3
   */
  columns?: PricingColumns;

  /**
   * Background style
   * @default 'subtle'
   */
  background?: "base" | "subtle" | "none";

  /**
   * Center the header text
   * @default true
   */
  centered?: boolean;
}
