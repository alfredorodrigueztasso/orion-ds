/**
 * AboutPageTemplate Types
 *
 * Type definitions for the about/company page template.
 */

import type { HTMLAttributes, ReactNode } from 'react';
import type { NavbarProps } from '../../../components/Navbar';
import type { HeroProps } from '../../../sections/Hero';
import type { CarouselSectionProps } from '../../../sections/CarouselSection';
import type { StatsProps } from '../../../sections/Stats';
import type { TimelineProps } from '../../../sections/Timeline';
import type { TeamProps } from '../../../sections/Team';
import type { CTAProps } from '../../../sections/CTA';
import type { FooterProps } from '../../../sections/Footer';

/**
 * AboutPageTemplate props
 *
 * @example
 * ```tsx
 * <AboutPageTemplate
 *   hero={{ headline: 'Our Story' }}
 *   stats={{ stats: [...] }}
 *   team={{ members: [...] }}
 * />
 * ```
 */
export interface AboutPageTemplateProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /**
   * Navbar configuration
   */
  navbar?: NavbarProps & { children?: ReactNode };

  /**
   * Hero section (required)
   */
  hero: HeroProps;

  /**
   * Editorial carousel for company story/milestones
   */
  storyCarousel?: Omit<CarouselSectionProps, 'variant'>;

  /**
   * Company stats/metrics
   */
  stats?: StatsProps;

  /**
   * Company timeline/history
   */
  timeline?: TimelineProps;

  /**
   * Gallery carousel for office/culture photos
   */
  galleryCarousel?: Omit<CarouselSectionProps, 'variant'>;

  /**
   * Team members section
   */
  team?: TeamProps;

  /**
   * Call-to-action section (e.g., careers, contact)
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
