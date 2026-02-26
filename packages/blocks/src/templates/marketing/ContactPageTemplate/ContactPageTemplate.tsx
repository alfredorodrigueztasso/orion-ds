/**
 * ContactPageTemplate
 *
 * A complete contact page template composing Orion sections.
 * Designed for contact us and support pages.
 */

import { forwardRef } from "react";
import type { ContactPageTemplateProps } from "./ContactPageTemplate.types";

// Components
import { Navbar } from "@orion-ds/react/components/Navbar";

// Sections
import { Hero } from "../../../sections/Hero";
import { CarouselSection } from "../../../sections/CarouselSection";
import { Contact } from "../../../sections/Contact";
import { FAQ } from "../../../sections/FAQ";
import { Footer } from "../../../sections/Footer";

/**
 * ContactPageTemplate - Full contact page composition
 *
 * Combines Hero, Contact form, FAQ, and optional locations gallery.
 *
 * @example
 * ```tsx
 * <ContactPageTemplate
 *   hero={{ headline: 'Contact us' }}
 *   contact={{ contactInfo: info, formFields: fields }}
 *   faq={{ items: faqItems }}
 * />
 * ```
 */
export const ContactPageTemplate = forwardRef<
  HTMLDivElement,
  ContactPageTemplateProps
>(
  (
    {
      navbar,
      hero,
      locationsCarousel,
      contact,
      faq,
      footer,
      children,
      ...rest
    },
    ref,
  ) => {
    return (
      <div ref={ref} {...rest}>
        {/* Navigation */}
        {navbar && <Navbar {...navbar} />}

        {/* Hero Section - Typically smaller for contact pages */}
        <Hero {...hero} />

        {/* Locations Gallery (Gallery variant) */}
        {locationsCarousel && (
          <CarouselSection
            variant="gallery"
            aspectRatio="4/3"
            peek={true}
            gap="md"
            {...locationsCarousel}
          />
        )}

        {/* Contact Section - Required */}
        <Contact {...contact} />

        {/* FAQ Section */}
        {faq && <FAQ {...faq} />}

        {/* Custom Content */}
        {children}

        {/* Footer */}
        {footer && <Footer {...footer} />}
      </div>
    );
  },
);

ContactPageTemplate.displayName = "ContactPageTemplate";

export default ContactPageTemplate;
