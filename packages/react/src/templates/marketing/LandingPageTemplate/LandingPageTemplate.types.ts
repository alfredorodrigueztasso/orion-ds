/**
 * LandingPageTemplate Types
 *
 * Type definitions for the full landing page template.
 */

import type { HTMLAttributes, ReactNode } from "react";
import type { NavbarProps } from "../../../components/Navbar";
import type { HeroProps } from "../../../sections/Hero";
import type { CarouselSectionProps } from "../../../sections/CarouselSection";
import type { LogoCloudProps } from "../../../sections/LogoCloud";
import type { FeaturesProps } from "../../../sections/Features";
import type { StatsProps } from "../../../sections/Stats";
import type { PricingProps } from "../../../sections/Pricing";
import type { TestimonialsProps } from "../../../sections/Testimonials";
import type { FAQProps } from "../../../sections/FAQ";
import type { CTAProps } from "../../../sections/CTA";
import type { FooterProps } from "../../../sections/Footer";

/**
 * LandingPageTemplate props
 *
 * @example
 * ```tsx
 * <LandingPageTemplate
 *   navbar={{ variant: 'solid', sticky: true }}
 *   hero={{
 *     headline: 'Build Products 10x Faster',
 *     primaryAction: <Button>Get Started</Button>
 *   }}
 *   features={{ items: [...] }}
 *   pricing={{ plans: [...] }}
 *   footer={{ brand: {...}, linkGroups: [...] }}
 * />
 * ```
 */
export interface LandingPageTemplateProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "title"
> {
  /**
   * Navbar configuration
   */
  navbar?: NavbarProps & { children?: ReactNode };

  /**
   * Hero section (required)
   */
  hero: HeroProps;

  /**
   * Editorial carousel for featured stories/content
   * Displays as magazine-style with large images and text overlays
   */
  featuredCarousel?: Omit<CarouselSectionProps, "variant">;

  /**
   * Logo cloud for social proof
   */
  logoCloud?: LogoCloudProps;

  /**
   * Features section
   */
  features?: FeaturesProps;

  /**
   * Stats/metrics section
   */
  stats?: StatsProps;

  /**
   * Product carousel for showcasing features/products
   * Displays as product showcase cards
   */
  productCarousel?: Omit<CarouselSectionProps, "variant">;

  /**
   * Pricing section
   */
  pricing?: PricingProps;

  /**
   * Testimonials section
   */
  testimonials?: TestimonialsProps;

  /**
   * FAQ section
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
