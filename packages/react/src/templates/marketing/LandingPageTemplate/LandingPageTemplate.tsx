/**
 * LandingPageTemplate
 *
 * A complete landing page template composing Orion sections.
 * Designed for marketing sites and product landing pages.
 */

import { forwardRef } from "react";
import type { LandingPageTemplateProps } from "./LandingPageTemplate.types";

// Components
import { Navbar } from "../../../components/Navbar";

// Sections
import { Hero } from "../../../sections/Hero";
import { CarouselSection } from "../../../sections/CarouselSection";
import { LogoCloud } from "../../../sections/LogoCloud";
import { Features } from "../../../sections/Features";
import { Stats } from "../../../sections/Stats";
import { Pricing } from "../../../sections/Pricing";
import { Testimonials } from "../../../sections/Testimonials";
import { FAQ } from "../../../sections/FAQ";
import { CTA } from "../../../sections/CTA";
import { Footer } from "../../../sections/Footer";

/**
 * LandingPageTemplate - Full landing page composition
 *
 * Combines multiple Orion sections into a complete, ready-to-use landing page.
 * All sections are optional except Hero, allowing flexible page composition.
 *
 * @example
 * ```tsx
 * <LandingPageTemplate
 *   hero={{ title: 'Welcome', primaryAction: <Button>Start</Button> }}
 *   features={{ items: featureItems }}
 *   pricing={{ plans: pricingPlans }}
 * />
 * ```
 */
export const LandingPageTemplate = forwardRef<
  HTMLDivElement,
  LandingPageTemplateProps
>(
  (
    {
      navbar,
      hero,
      featuredCarousel,
      logoCloud,
      features,
      stats,
      productCarousel,
      pricing,
      testimonials,
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

        {/* Hero Section - Required */}
        <Hero {...hero} />

        {/* Featured Stories Carousel (Editorial) */}
        {featuredCarousel && (
          <CarouselSection
            variant="editorial"
            aspectRatio="16/9"
            peek={true}
            showNavigation={true}
            {...featuredCarousel}
          />
        )}

        {/* Logo Cloud / Social Proof */}
        {logoCloud && <LogoCloud {...logoCloud} />}

        {/* Features Section */}
        {features && <Features {...features} />}

        {/* Stats Section */}
        {stats && <Stats {...stats} />}

        {/* Product Features Carousel */}
        {productCarousel && (
          <CarouselSection
            variant="editorial"
            aspectRatio="4/3"
            peek={true}
            gap="md"
            {...productCarousel}
          />
        )}

        {/* Pricing Section */}
        {pricing && <Pricing {...pricing} />}

        {/* Testimonials Section */}
        {testimonials && <Testimonials {...testimonials} />}

        {/* FAQ Section */}
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

LandingPageTemplate.displayName = "LandingPageTemplate";

export default LandingPageTemplate;
