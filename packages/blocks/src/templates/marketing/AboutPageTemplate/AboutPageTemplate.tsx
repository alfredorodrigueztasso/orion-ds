/**
 * AboutPageTemplate
 *
 * A complete about/company page template composing Orion sections.
 * Designed for company about pages, team pages, and culture showcases.
 */

import { forwardRef } from "react";
import type { AboutPageTemplateProps } from "./AboutPageTemplate.types";

// Components
import { Navbar } from "@orion-ds/react";

// Sections
import { Hero } from "../../../sections/Hero";
import { CarouselSection } from "../../../sections/CarouselSection";
import { Stats } from "../../../sections/Stats";
import { Timeline } from "../../../sections/Timeline";
import { Team } from "../../../sections/Team";
import { CTA } from "../../../sections/CTA";
import { Footer } from "../../../sections/Footer";

/**
 * AboutPageTemplate - Full about page composition
 *
 * Combines Hero, Stats, Timeline, Team, and Gallery into a complete about page.
 *
 * @example
 * ```tsx
 * <AboutPageTemplate
 *   hero={{ headline: 'Our Mission' }}
 *   stats={{ stats: companyStats }}
 *   timeline={{ events: companyHistory }}
 *   team={{ members: teamMembers }}
 * />
 * ```
 */
export const AboutPageTemplate = forwardRef<
  HTMLDivElement,
  AboutPageTemplateProps
>(
  (
    {
      navbar,
      hero,
      storyCarousel,
      stats,
      timeline,
      galleryCarousel,
      team,
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

        {/* Company Story Carousel (Editorial) */}
        {storyCarousel && (
          <CarouselSection
            variant="editorial"
            aspectRatio="16/9"
            peek={true}
            showNavigation={true}
            {...storyCarousel}
          />
        )}

        {/* Company Stats */}
        {stats && <Stats {...stats} />}

        {/* Company Timeline/History */}
        {timeline && <Timeline {...timeline} />}

        {/* Office/Culture Gallery (Gallery variant) */}
        {galleryCarousel && (
          <CarouselSection
            variant="gallery"
            aspectRatio="4/3"
            peek={true}
            gap="md"
            {...galleryCarousel}
          />
        )}

        {/* Team Section */}
        {team && <Team {...team} />}

        {/* Call to Action (Careers, Contact, etc.) */}
        {cta && <CTA {...cta} />}

        {/* Custom Content */}
        {children}

        {/* Footer */}
        {footer && <Footer {...footer} />}
      </div>
    );
  },
);

AboutPageTemplate.displayName = "AboutPageTemplate";

export default AboutPageTemplate;
