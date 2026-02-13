/**
 * Banner Section Component
 *
 * A promotional banner section with multiple style variants.
 */

import React from 'react';
import type { BannerProps } from './Banner.types';
import styles from './Banner.module.css';

/**
 * Banner section for promotions and announcements
 */
export const Banner: React.FC<BannerProps> = ({
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  variant = 'default',
  backgroundImage,
  sideImage,
  imagePosition = 'right',
  backgroundColor,
  gradient,
  dismissible = false,
  onDismiss,
  fullWidth = false,
  compact = false,
  centered = true,
  className,
  style,
  ...rest
}) => {
  const customStyle: React.CSSProperties = {
    ...style,
    ...(backgroundImage &&
      variant === 'image' && {
        backgroundImage: `url(${backgroundImage})`,
      }),
    ...(backgroundColor && { backgroundColor }),
    ...(gradient &&
      variant === 'gradient' && {
        background: gradient,
      }),
  };

  const renderContent = () => (
    <div className={styles.content}>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
      {(ctaLabel || secondaryCtaLabel) && (
        <div className={styles.actions}>
          {ctaLabel && ctaHref && (
            <a href={ctaHref} className={`${styles.ctaButton} ${styles.ctaPrimary}`}>
              {ctaLabel}
            </a>
          )}
          {secondaryCtaLabel && secondaryCtaHref && (
            <a href={secondaryCtaHref} className={`${styles.ctaButton} ${styles.ctaSecondary}`}>
              {secondaryCtaLabel}
            </a>
          )}
        </div>
      )}
    </div>
  );

  return (
    <section
      className={`${styles.banner} ${className || ''}`}
      data-variant={variant}
      data-compact={compact}
      data-centered={centered && variant !== 'split'}
      data-full-width={fullWidth}
      style={customStyle}
      {...rest}
    >
      <div className={styles.container}>
        {variant === 'split' && sideImage ? (
          <div className={styles.splitLayout} data-image-position={imagePosition}>
            <div className={styles.splitContent}>{renderContent()}</div>
            <img src={sideImage} alt="" className={styles.splitImage} aria-hidden="true" />
          </div>
        ) : (
          renderContent()
        )}
      </div>

      {dismissible && (
        <button className={styles.dismissButton} onClick={onDismiss} aria-label="Dismiss banner">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </section>
  );
};

Banner.displayName = 'Banner';
