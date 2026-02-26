/**
 * AppDownload Section Component
 *
 * A CTA section for mobile app downloads with store badges.
 */

import React from "react";
import type { AppDownloadProps, AppStoreBadge } from "./AppDownload.types";
import styles from "./AppDownload.module.css";

/**
 * App Store badge SVG
 */
const AppleStoreBadge: React.FC = () => (
  <svg width="135" height="40" viewBox="0 0 135 40">
    <rect width="135" height="40" rx="5" fill="#000" />
    <text
      x="67.5"
      y="12"
      fill="#fff"
      fontSize="8"
      textAnchor="middle"
      fontFamily="system-ui"
    >
      Download on the
    </text>
    <text
      x="67.5"
      y="28"
      fill="#fff"
      fontSize="16"
      textAnchor="middle"
      fontWeight="600"
      fontFamily="system-ui"
    >
      App Store
    </text>
  </svg>
);

/**
 * Google Play badge SVG
 */
const GooglePlayBadge: React.FC = () => (
  <svg width="135" height="40" viewBox="0 0 135 40">
    <rect width="135" height="40" rx="5" fill="#000" />
    <text
      x="67.5"
      y="12"
      fill="#fff"
      fontSize="8"
      textAnchor="middle"
      fontFamily="system-ui"
    >
      GET IT ON
    </text>
    <text
      x="67.5"
      y="28"
      fill="#fff"
      fontSize="14"
      textAnchor="middle"
      fontWeight="600"
      fontFamily="system-ui"
    >
      Google Play
    </text>
  </svg>
);

/**
 * Star icon
 */
const StarIcon: React.FC = () => (
  <svg
    className={styles.star}
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

/**
 * Render store badge
 */
const StoreBadge: React.FC<{ badge: AppStoreBadge }> = ({ badge }) => {
  const renderBadgeContent = () => {
    switch (badge.store) {
      case "apple":
        return <AppleStoreBadge />;
      case "google":
        return <GooglePlayBadge />;
      case "custom":
        return badge.badgeImage ? (
          <img
            src={badge.badgeImage}
            alt={badge.badgeAlt || "Download"}
            className={styles.badgeImage}
          />
        ) : null;
      default:
        return null;
    }
  };

  return (
    <a
      href={badge.href}
      className={styles.badge}
      target="_blank"
      rel="noopener noreferrer"
    >
      {renderBadgeContent()}
    </a>
  );
};

/**
 * AppDownload section for mobile app promotion
 */
export const AppDownload: React.FC<AppDownloadProps> = ({
  eyebrow,
  title,
  description,
  badges,
  appImage,
  qrCode,
  showQrCode = false,
  features = [],
  layout = "centered",
  background = "gradient",
  rating,
  compact = false,
  className,
  ...rest
}) => {
  const isSplit = layout === "split-left" || layout === "split-right";
  const imagePosition = layout === "split-left" ? "left" : "right";

  const renderContent = () => (
    <div className={styles.content}>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}

      {rating && (
        <div className={styles.rating}>
          <div className={styles.stars}>
            {[1, 2, 3, 4, 5].map((star) => (
              <StarIcon key={star} />
            ))}
          </div>
          <span className={styles.ratingText}>
            {rating.value} ({rating.count} reviews)
          </span>
        </div>
      )}

      <div className={styles.badges}>
        {badges.map((badge, index) => (
          <StoreBadge key={index} badge={badge} />
        ))}
      </div>

      {showQrCode && qrCode && (
        <div className={styles.qrSection}>
          <img src={qrCode} alt="QR Code" className={styles.qrCode} />
          <span className={styles.qrText}>Scan to download</span>
        </div>
      )}

      {features.length > 0 && (
        <div className={styles.features}>
          {features.map((feature, index) => (
            <div key={index} className={styles.feature}>
              {feature.icon && (
                <div className={styles.featureIcon}>{feature.icon}</div>
              )}
              <div>
                <h4 className={styles.featureTitle}>{feature.title}</h4>
                {feature.description && (
                  <p className={styles.featureDescription}>
                    {feature.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderImage = () =>
    appImage ? (
      <div className={styles.appImageWrapper}>
        <img src={appImage} alt="App preview" className={styles.appImage} />
      </div>
    ) : null;

  return (
    <section
      className={`${styles.appDownload} ${className || ""}`}
      data-background={background}
      data-compact={compact}
      {...rest}
    >
      <div className={styles.container}>
        {isSplit ? (
          <div className={styles.split} data-image-position={imagePosition}>
            {renderContent()}
            {renderImage()}
          </div>
        ) : (
          <div className={styles.centered}>
            {renderContent()}
            {renderImage()}
          </div>
        )}
      </div>
    </section>
  );
};

AppDownload.displayName = "AppDownload";
