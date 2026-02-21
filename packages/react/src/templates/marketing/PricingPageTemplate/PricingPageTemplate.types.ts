/**
 * PricingPageTemplate Types
 *
 * Type definitions for the pricing page template.
 */

import type { HTMLAttributes, ReactNode } from "react";
import type { NavbarProps } from "../../../components/Navbar";
import type { HeroProps } from "../../../sections/Hero";
import type { CarouselSectionProps } from "../../../sections/CarouselSection";
import type { PricingProps } from "../../../sections/Pricing";
import type { ComparisonProps } from "../../../sections/Comparison";
import type { FAQProps } from "../../../sections/FAQ";
import type { CTAProps } from "../../../sections/CTA";
import type { FooterProps } from "../../../sections/Footer";

/**
 * PricingPageTemplate props
 *
 * @example
 * ```tsx
 * <PricingPageTemplate
 *   hero={{ headline: 'Simple, transparent pricing' }}
 *   pricing={{ plans: [...] }}
 *   comparison={{ columns: [...], features: [...] }}
 * />
 * ```
 */
export interface PricingPageTemplateProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "title"
> {
  /**
   * Navbar configuration
   */
  navbar?: NavbarProps & { children?: ReactNode };

  /**
   * Hero section (required) - typically smaller for pricing pages
   */
  hero: HeroProps;

  /**
   * Product carousel for showcasing key features
   */
  featuresCarousel?: Omit<CarouselSectionProps, "variant">;

  /**
   * Pricing cards section (required)
   */
  pricing: PricingProps;

  /**
   * Feature comparison table
   */
  comparison?: ComparisonProps;

  /**
   * FAQ section for pricing questions
   */
  faq?: FAQProps;

  /**
   * Call-to-action section
   */
  cta?: CTAProps;

  /**
   * Footer section
   */
  footer?: FooterProps;

  /**
   * Additional children rendered before footer
   */
  children?: ReactNode;
}
