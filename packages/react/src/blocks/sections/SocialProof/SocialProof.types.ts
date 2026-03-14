/**
 * SocialProof Section Types
 *
 * Type definitions for the Orion SocialProof section component.
 */

import type { HTMLAttributes, ReactNode } from "react";

/**
 * Logo item
 */
export interface SocialProofLogo {
  /**
   * Company/brand name
   */
  name: string;

  /**
   * Logo image URL
   */
  logo: string;

  /**
   * Optional link
   */
  href?: string;
}

/**
 * Testimonial item
 */
export interface SocialProofTestimonial {
  /**
   * Unique identifier
   */
  id: string | number;

  /**
   * Quote text
   */
  quote: string;

  /**
   * Author name
   */
  author: string;

  /**
   * Author title/role
   */
  title?: string;

  /**
   * Author company
   */
  company?: string;

  /**
   * Author avatar URL
   */
  avatar?: string;

  /**
   * Star rating (1-5)
   */
  rating?: number;
}

/**
 * Stat item
 */
export interface SocialProofStat {
  /**
   * Stat value
   */
  value: string;

  /**
   * Stat label
   */
  label: string;
}

/**
 * SocialProof section props
 *
 * @example
 * ```tsx
 * <SocialProof
 *   title="Trusted by Industry Leaders"
 *   logos={[
 *     { name: "Google", logo: "/logos/google.svg" },
 *     { name: "Meta", logo: "/logos/meta.svg" },
 *   ]}
 *   testimonials={[
 *     { id: 1, quote: "Amazing product!", author: "John Doe", title: "CEO" }
 *   ]}
 *   stats={[
 *     { value: "10K+", label: "Customers" },
 *     { value: "99%", label: "Satisfaction" },
 *   ]}
 * />
 * ```
 */
export interface SocialProofProps extends Omit<
  HTMLAttributes<HTMLElement>,
  "title"
> {
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
   * Company/brand logos
   */
  logos?: SocialProofLogo[];

  /**
   * Customer testimonials
   */
  testimonials?: SocialProofTestimonial[];

  /**
   * Stats/metrics
   */
  stats?: SocialProofStat[];

  /**
   * Layout variant
   * @default 'stacked'
   */
  layout?:
    | "stacked"
    | "side-by-side"
    | "testimonials-only"
    | "logos-only"
    | "stats-only";

  /**
   * Logo display style
   * @default 'grid'
   */
  logoStyle?: "grid" | "inline" | "carousel";

  /**
   * Grayscale logos
   * @default true
   */
  grayscaleLogos?: boolean;

  /**
   * Background style
   * @default 'subtle'
   */
  background?: "base" | "subtle" | "none";

  /**
   * Compact mode
   * @default false
   */
  compact?: boolean;
}
