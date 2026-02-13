/**
 * Blog Section Types
 *
 * Type definitions for the Orion Blog/ArticleList section component.
 */

import type { HTMLAttributes, ReactNode } from 'react';

/**
 * Blog article item
 */
export interface BlogArticle {
  /**
   * Article unique identifier
   */
  id: string | number;

  /**
   * Article title
   */
  title: string;

  /**
   * Article excerpt/summary
   */
  excerpt: string;

  /**
   * Featured image URL
   */
  image?: string;

  /**
   * Article category
   */
  category?: string;

  /**
   * Author information
   */
  author?: {
    name: string;
    avatar?: string;
  };

  /**
   * Publication date
   */
  date?: string;

  /**
   * Reading time in minutes
   */
  readTime?: number;

  /**
   * Article URL
   */
  href?: string;

  /**
   * Tags/labels
   */
  tags?: string[];
}

/**
 * Blog layout variants
 */
export type BlogLayout = 'grid' | 'list' | 'featured';

/**
 * Blog section props
 *
 * @example
 * ```tsx
 * <Blog
 *   title="Latest Articles"
 *   articles={[
 *     {
 *       id: 1,
 *       title: "Getting Started",
 *       excerpt: "Learn the basics...",
 *       image: "/blog/getting-started.jpg",
 *       author: { name: "John Doe" },
 *       date: "2024-01-15"
 *     }
 *   ]}
 *   layout="grid"
 *   columns={3}
 * />
 * ```
 */
export interface BlogProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
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
   * Array of articles
   */
  articles: BlogArticle[];

  /**
   * Layout variant
   * @default 'grid'
   */
  layout?: BlogLayout;

  /**
   * Number of columns for grid layout
   * @default 3
   */
  columns?: 2 | 3 | 4;

  /**
   * Show author info
   * @default true
   */
  showAuthor?: boolean;

  /**
   * Show date
   * @default true
   */
  showDate?: boolean;

  /**
   * Show category badge
   * @default true
   */
  showCategory?: boolean;

  /**
   * Show read time
   * @default true
   */
  showReadTime?: boolean;

  /**
   * Background style
   * @default 'base'
   */
  background?: 'base' | 'subtle' | 'none';

  /**
   * View all link
   */
  viewAllHref?: string;

  /**
   * View all link text
   * @default 'View all articles'
   */
  viewAllText?: string;
}
