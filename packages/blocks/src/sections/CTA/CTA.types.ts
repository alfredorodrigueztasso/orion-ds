/**
 * CTA Component Types
 *
 * Type definitions for the Orion CTA (Call-to-Action) section component.
 */

import type { HTMLAttributes, ReactNode } from "react";

/**
 * CTA visual variants
 */
export type CTAVariant = "default" | "brand" | "subtle" | "outline";

/**
 * CTA size variants
 */
export type CTASize = "sm" | "md" | "lg";

/**
 * CTA section props
 *
 * @example
 * ```tsx
 * <CTA
 *   title="Ready to get started?"
 *   description="Join thousands of developers building with Orion"
 *   actions={
 *     <>
 *       <Button size="lg">Start Free Trial</Button>
 *       <Button size="lg" variant="ghost">Contact Sales</Button>
 *     </>
 *   }
 * />
 * ```
 */
export interface CTAProps extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  /**
   * Main title text
   */
  title?: ReactNode;

  /**
   * @deprecated Use `title` instead. Will be removed in v3.0.
   */
  headline?: ReactNode;

  /**
   * Supporting description text
   */
  description?: ReactNode;

  /**
   * Action buttons/elements
   */
  actions?: ReactNode;

  /**
   * Additional text below actions (disclaimers, etc.)
   */
  footnote?: ReactNode;

  /**
   * Visual variant
   * - default: Standard background
   * - brand: Brand color background
   * - subtle: Subtle background
   * - outline: Outlined container
   * @default 'brand'
   */
  variant?: CTAVariant;

  /**
   * Size variant
   * @default 'md'
   */
  size?: CTASize;

  /**
   * Text alignment
   * @default 'center'
   */
  align?: "left" | "center";

  /**
   * Render as card (contained box) vs full-width section
   * @default true
   */
  contained?: boolean;
}
