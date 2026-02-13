/**
 * ContactPageTemplate Types
 *
 * Type definitions for the contact page template.
 */

import type { HTMLAttributes, ReactNode } from 'react';
import type { NavbarProps } from '../../../components/Navbar';
import type { HeroProps } from '../../../sections/Hero';
import type { CarouselSectionProps } from '../../../sections/CarouselSection';
import type { ContactProps } from '../../../sections/Contact';
import type { FAQProps } from '../../../sections/FAQ';
import type { FooterProps } from '../../../sections/Footer';

/**
 * ContactPageTemplate props
 *
 * @example
 * ```tsx
 * <ContactPageTemplate
 *   hero={{ headline: 'Get in touch' }}
 *   contact={{
 *     contactInfo: [...],
 *     formFields: [...],
 *     onSubmit: handleSubmit
 *   }}
 * />
 * ```
 */
export interface ContactPageTemplateProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /**
   * Navbar configuration
   */
  navbar?: NavbarProps & { children?: ReactNode };

  /**
   * Hero section (required) - typically smaller for contact pages
   */
  hero: HeroProps;

  /**
   * Gallery carousel for office locations/photos
   */
  locationsCarousel?: Omit<CarouselSectionProps, 'variant'>;

  /**
   * Contact section with form and info (required)
   */
  contact: ContactProps;

  /**
   * FAQ section for common questions
   */
  faq?: FAQProps;

  /**
   * Footer section
   */
  footer?: FooterProps;

  /**
   * Additional children rendered before footer
   */
  children?: ReactNode;
}
