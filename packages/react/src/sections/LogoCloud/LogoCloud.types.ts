/**
 * LogoCloud Component Types
 *
 * Type definitions for the Orion LogoCloud section component.
 */

import type { HTMLAttributes, ReactNode } from 'react';

/**
 * LogoCloud layout variant
 */
export type LogoCloudLayout = 'grid' | 'inline' | 'marquee';

/**
 * Logo size variant
 */
export type LogoCloudSize = 'sm' | 'md' | 'lg';

/**
 * Logo item data structure
 */
export interface LogoItem {
  /**
   * Logo element (typically an img or svg)
   */
  logo: ReactNode;

  /**
   * Company/brand name (for accessibility)
   */
  name: string;

  /**
   * Optional link URL
   */
  href?: string;
}

/**
 * LogoCloud section props
 *
 * @example
 * ```tsx
 * <LogoCloud
 *   title="Trusted by leading companies"
 *   logos={[
 *     { logo: <img src="/vercel.svg" alt="" />, name: "Vercel" },
 *     { logo: <img src="/stripe.svg" alt="" />, name: "Stripe" },
 *     { logo: <img src="/linear.svg" alt="" />, name: "Linear" }
 *   ]}
 *   layout="grid"
 *   columns={5}
 * />
 * ```
 */
export interface LogoCloudProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
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
   * Array of logo items
   */
  logos: LogoItem[];

  /**
   * Layout variant
   * - grid: Fixed grid layout
   * - inline: Flexible inline/wrap layout
   * - marquee: Animated scrolling marquee
   * @default 'inline'
   */
  layout?: LogoCloudLayout;

  /**
   * Number of columns (for grid layout)
   * @default 5
   */
  columns?: 3 | 4 | 5 | 6;

  /**
   * Logo size
   * @default 'md'
   */
  size?: LogoCloudSize;

  /**
   * Grayscale logos (colorize on hover)
   * @default true
   */
  grayscale?: boolean;

  /**
   * Background style
   * @default 'none'
   */
  background?: 'base' | 'subtle' | 'none';

  /**
   * Center the content
   * @default true
   */
  centered?: boolean;

  /**
   * Marquee animation speed (for marquee layout)
   * @default 'normal'
   */
  marqueeSpeed?: 'slow' | 'normal' | 'fast';
}
