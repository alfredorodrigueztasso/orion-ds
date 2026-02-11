/**
 * Gallery Section Types
 *
 * Type definitions for the Orion Gallery section component.
 */

import type { HTMLAttributes, ReactNode } from 'react';

/**
 * Gallery image item
 */
export interface GalleryImage {
  /**
   * Image unique identifier
   */
  id: string | number;

  /**
   * Image source URL
   */
  src: string;

  /**
   * Image alt text
   */
  alt: string;

  /**
   * Thumbnail URL (optional, uses src if not provided)
   */
  thumbnail?: string;

  /**
   * Image caption
   */
  caption?: string;

  /**
   * Image category for filtering
   */
  category?: string;

  /**
   * Aspect ratio override
   */
  aspectRatio?: 'square' | 'landscape' | 'portrait' | 'auto';
}

/**
 * Gallery layout variants
 */
export type GalleryLayout = 'grid' | 'masonry' | 'carousel';

/**
 * Gallery section props
 *
 * @example
 * ```tsx
 * <Gallery
 *   title="Our Work"
 *   images={[
 *     { id: 1, src: "/gallery/1.jpg", alt: "Project 1" },
 *     { id: 2, src: "/gallery/2.jpg", alt: "Project 2" },
 *   ]}
 *   layout="grid"
 *   lightbox
 * />
 * ```
 */
export interface GalleryProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
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
   * Array of images
   */
  images: GalleryImage[];

  /**
   * Layout variant
   * @default 'grid'
   */
  layout?: GalleryLayout;

  /**
   * Number of columns
   * @default 4
   */
  columns?: 2 | 3 | 4 | 5;

  /**
   * Enable lightbox on click
   * @default true
   */
  lightbox?: boolean;

  /**
   * Show captions below images
   * @default false
   */
  showCaptions?: boolean;

  /**
   * Gap between images
   * @default 'md'
   */
  gap?: 'sm' | 'md' | 'lg' | 'none';

  /**
   * Enable category filtering
   * @default false
   */
  filterable?: boolean;

  /**
   * Background style
   * @default 'base'
   */
  background?: 'base' | 'subtle' | 'none';

  /**
   * Aspect ratio for grid items
   * @default 'square'
   */
  aspectRatio?: 'square' | 'landscape' | 'portrait' | 'auto';
}
