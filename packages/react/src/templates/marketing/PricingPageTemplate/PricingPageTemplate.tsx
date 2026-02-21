/**
 * PricingPageTemplate
 *
 * A complete pricing page template composing Orion sections.
 * Designed for SaaS and product pricing pages.
 */

import { forwardRef } from "react";
import type { PricingPageTemplateProps } from "./PricingPageTemplate.types";

// Components
import { Navbar } from "../../../components/Navbar";

// Sections
import { Hero } from "../../../sections/Hero";
import { CarouselSection } from "../../../sections/CarouselSection";
import { Pricing } from "../../../sections/Pricing";
import { Comparison } from "../../../sections/Comparison";
import { FAQ } from "../../../sections/FAQ";
import { CTA } from "../../../sections/CTA";
import { Footer } from "../../../sections/Footer";

/**
 * PricingPageTemplate - Full pricing page composition
 *
 * Combines Hero, Pricing cards, Comparison table, and FAQ into a complete pricing page.
 *
 * @example
 * ```tsx
 * <PricingPageTemplate
 *   hero={{ headline: 'Choose your plan' }}
 *   pricing={{ plans: pricingPlans }}
 *   comparison={{ columns: cols, features: features }}
 * />
 * ```
 */
export const PricingPageTemplate = forwardRef<
  HTMLDivElement,
  PricingPageTemplateProps
>(
  (
    {
      navbar,
      hero,
      featuresCarousel,
      pricing,
      comparison,
      faq,
      cta,
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

        {/* Hero Section - Typically smaller for pricing pages */}
        <Hero {...hero} />

        {/* Key Features Carousel (Product variant) */}
        {featuresCarousel && (
          <CarouselSection
            variant="product"
            aspectRatio="4/3"
            peek={true}
            gap="md"
            {...featuresCarousel}
          />
        )}

        {/* Pricing Cards - Required */}
        <Pricing {...pricing} />

        {/* Feature Comparison Table */}
        {comparison && <Comparison {...comparison} />}

        {/* Pricing FAQ */}
        {faq && <FAQ {...faq} />}

        {/* Call to Action */}
        {cta && <CTA {...cta} />}

        {/* Custom Content */}
        {children}

        {/* Footer */}
        {footer && <Footer {...footer} />}
      </div>
    );
  },
);

PricingPageTemplate.displayName = "PricingPageTemplate";

export default PricingPageTemplate;
