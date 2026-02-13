/**
 * EmptyState Component
 *
 * A placeholder section for empty states in SaaS applications.
 * Optimized for Product Mode with minimal visual noise and clear CTAs.
 *
 * @example
 * ```tsx
 * <EmptyState
 *   icon={<Inbox size={48} />}
 *   title="No messages yet"
 *   description="When you receive messages, they'll appear here."
 *   action={<Button>Compose Message</Button>}
 * />
 * ```
 */

import { forwardRef } from 'react';
import type { EmptyStateProps } from './EmptyState.types';
import styles from './EmptyState.module.css';

export const EmptyState = forwardRef<HTMLDivElement, EmptyStateProps>(
  (
    {
      icon,
      illustration,
      title,
      description,
      action,
      secondaryAction,
      variant = 'default',
      size = 'md',
      className,
      ...rest
    },
    ref,
  ) => {
    const classNames = [
      styles.emptyState,
      styles[`variant-${variant}`],
      styles[`size-${size}`],
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={ref} className={classNames} {...rest}>
        <div className={styles.content}>
          {illustration && <div className={styles.illustration}>{illustration}</div>}

          {icon && !illustration && <div className={styles.icon}>{icon}</div>}

          <div className={styles.text}>
            <h3 className={styles.title}>{title}</h3>
            {description && <p className={styles.description}>{description}</p>}
          </div>

          {(action || secondaryAction) && (
            <div className={styles.actions}>
              {action}
              {secondaryAction}
            </div>
          )}
        </div>
      </div>
    );
  },
);

EmptyState.displayName = 'EmptyState';
