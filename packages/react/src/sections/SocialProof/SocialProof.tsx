/**
 * SocialProof Section Component
 *
 * A section combining logos, testimonials, and stats for social proof.
 */

import React from "react";
import type { SocialProofProps } from "./SocialProof.types";
import styles from "./SocialProof.module.css";

/**
 * Star icon for ratings
 */
const StarIcon: React.FC<{ filled: boolean }> = ({ filled }) => (
  <svg
    className={filled ? styles.star : styles.starEmpty}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="2"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

/**
 * SocialProof section for displaying trust indicators
 */
export const SocialProof: React.FC<SocialProofProps> = ({
  eyebrow,
  title,
  description,
  logos = [],
  testimonials = [],
  stats = [],
  layout = "stacked",
  logoStyle = "grid",
  grayscaleLogos = true,
  background = "subtle",
  compact = false,
  className,
  ...rest
}) => {
  const showLogos =
    logos.length > 0 &&
    layout !== "testimonials-only" &&
    layout !== "stats-only";
  const showStats =
    stats.length > 0 &&
    layout !== "testimonials-only" &&
    layout !== "logos-only";
  const showTestimonials =
    testimonials.length > 0 &&
    layout !== "logos-only" &&
    layout !== "stats-only";

  const renderLogos = () => (
    <div className={styles.logosSection}>
      <div
        className={
          logoStyle === "inline" ? styles.logosInline : styles.logosGrid
        }
      >
        {logos.map((logo, index) => {
          const LogoWrapper = logo.href ? "a" : "div";
          const logoProps = logo.href
            ? { href: logo.href, target: "_blank", rel: "noopener noreferrer" }
            : {};

          return (
            <LogoWrapper
              key={index}
              className={styles.logoItem}
              data-grayscale={grayscaleLogos}
              {...logoProps}
            >
              <img
                src={logo.logo}
                alt={logo.name}
                className={styles.logoImage}
              />
            </LogoWrapper>
          );
        })}
      </div>
    </div>
  );

  const renderStats = () => (
    <div className={styles.statsSection}>
      <div className={styles.statsGrid}>
        {stats.map((stat, index) => (
          <div key={index} className={styles.statItem}>
            <div className={styles.statValue}>{stat.value}</div>
            <div className={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderTestimonials = () => (
    <div className={styles.testimonialsSection}>
      <div className={styles.testimonialsGrid}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className={styles.testimonialCard}>
            {testimonial.rating !== undefined && (
              <div className={styles.testimonialRating}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon key={star} filled={star <= testimonial.rating!} />
                ))}
              </div>
            )}
            <p className={styles.testimonialQuote}>{testimonial.quote}</p>
            <div className={styles.testimonialAuthor}>
              {testimonial.avatar && (
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className={styles.authorAvatar}
                />
              )}
              <div className={styles.authorInfo}>
                <p className={styles.authorName}>{testimonial.author}</p>
                {(testimonial.title || testimonial.company) && (
                  <p className={styles.authorTitle}>
                    {[testimonial.title, testimonial.company]
                      .filter(Boolean)
                      .join(", ")}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    if (layout === "side-by-side") {
      return (
        <div className={styles.sideBySide}>
          <div>
            {showLogos && renderLogos()}
            {showStats && renderStats()}
          </div>
          <div>{showTestimonials && renderTestimonials()}</div>
        </div>
      );
    }

    return (
      <>
        {showLogos && renderLogos()}
        {showStats && renderStats()}
        {showTestimonials && renderTestimonials()}
      </>
    );
  };

  return (
    <section
      className={`${styles.socialProof} ${className || ""}`}
      data-background={background}
      data-compact={compact}
      {...rest}
    >
      <div className={styles.container}>
        {(eyebrow || title || description) && (
          <header className={styles.header}>
            {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
            {title && <h2 className={styles.title}>{title}</h2>}
            {description && <p className={styles.description}>{description}</p>}
          </header>
        )}

        {renderContent()}
      </div>
    </section>
  );
};

SocialProof.displayName = "SocialProof";
