/**
 * FAQ Component Types
 *
 * Type definitions for the Orion FAQ section component.
 */

import type { HTMLAttributes, ReactNode } from 'react';

/**
 * Grid column count for FAQ items
 */
export type FAQColumns = 1 | 2;

/**
 * FAQ visual variant
 */
export type FAQVariant = 'accordion' | 'grid';

/**
 * FAQ item data structure
 */
export interface FAQItem {
  /**
   * The question text
   */
  question: string;

  /**
   * The answer content (can be text or rich content)
   */
  answer: ReactNode;

  /**
   * Whether the item is open by default
   * @default false
   */
  defaultOpen?: boolean;
}

/**
 * FAQ accordion item props (internal component)
 */
export interface FAQItemCardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * FAQ item data
   */
  item: FAQItem;

  /**
   * Visual variant
   * @default 'accordion'
   */
  variant?: FAQVariant;

  /**
   * Whether the item is currently open (controlled)
   */
  isOpen?: boolean;

  /**
   * Callback when toggled
   */
  onToggle?: () => void;
}

/**
 * FAQ section props
 *
 * @example
 * ```tsx
 * <FAQ
 *   title="Frequently Asked Questions"
 *   description="Find answers to common questions"
 *   items={[
 *     {
 *       question: "How do I get started?",
 *       answer: "Simply sign up for a free account and follow our onboarding guide."
 *     },
 *     {
 *       question: "Is there a free trial?",
 *       answer: "Yes! We offer a 14-day free trial with full access to all features."
 *     }
 *   ]}
 * />
 * ```
 */
export interface FAQProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
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
   * Array of FAQ items
   */
  items: FAQItem[];

  /**
   * Number of grid columns (only applies to grid variant)
   * @default 1
   */
  columns?: FAQColumns;

  /**
   * Visual variant
   * - accordion: Expandable accordion items
   * - grid: Static grid of questions and answers
   * @default 'accordion'
   */
  variant?: FAQVariant;

  /**
   * Allow multiple items to be open at once (accordion only)
   * @default true
   */
  allowMultiple?: boolean;

  /**
   * Background style
   * @default 'base'
   */
  background?: 'base' | 'subtle' | 'none';

  /**
   * Center the header text
   * @default true
   */
  centered?: boolean;
}
