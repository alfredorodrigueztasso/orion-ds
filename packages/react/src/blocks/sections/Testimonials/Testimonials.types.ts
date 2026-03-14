/**
 * Testimonials Component Types
 *
 * Type definitions for the Orion Testimonials section component.
 */

import type { HTMLAttributes, ReactNode } from "react";

/**
 * Grid column count for testimonial cards
 */
export type TestimonialsColumns = 1 | 2 | 3;

/**
 * Testimonial variant styles
 */
export type TestimonialsVariant = "default" | "cards" | "minimal";

/**
 * Author information for a testimonial
 */
export interface TestimonialAuthor {
  /**
   * Author's name
   */
  name: string;

  /**
   * Author's role or title
   */
  role?: string;

  /**
   * Author's company or organization
   */
  company?: string;

  /**
   * Avatar element (img or custom component)
   */
  avatar?: ReactNode;
}

/**
 * Testimonial data structure
 */
export interface Testimonial {
  /**
   * The testimonial quote text
   */
  quote: string;

  /**
   * Author information
   */
  author: TestimonialAuthor;

  /**
   * Star rating (1-5)
   */
  rating?: number;
}

/**
 * Testimonial card props (internal component)
 */
export interface TestimonialCardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Testimonial data
   */
  testimonial: Testimonial;

  /**
   * Visual variant
   * @default 'default'
   */
  variant?: TestimonialsVariant;
}

/**
 * Testimonials section props
 *
 * @example
 * ```tsx
 * <Testimonials
 *   title="What our customers say"
 *   testimonials={[
 *     {
 *       quote: "This product changed everything for us.",
 *       author: {
 *         name: "Jane Doe",
 *         role: "CEO",
 *         company: "Acme Corp",
 *         avatar: <img src="/avatar.jpg" alt="Jane" />
 *       },
 *       rating: 5
 *     }
 *   ]}
 * />
 * ```
 */
export interface TestimonialsProps extends Omit<
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
   * Array of testimonials
   */
  testimonials: Testimonial[];

  /**
   * Number of grid columns
   * @default 3
   */
  columns?: TestimonialsColumns;

  /**
   * Visual variant
   * - default: Full cards with borders
   * - cards: Elevated cards with shadows
   * - minimal: Simple quotes without cards
   * @default 'default'
   */
  variant?: TestimonialsVariant;

  /**
   * Background style
   * @default 'base'
   */
  background?: "base" | "subtle" | "none";

  /**
   * Center the header text
   * @default true
   */
  centered?: boolean;
}
