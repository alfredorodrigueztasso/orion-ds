/**
 * EmptyState Component Types
 *
 * Type definitions for the Orion EmptyState section component.
 * Designed for Product Mode (SaaS dashboards) with minimal visual noise.
 */
import type { HTMLAttributes, ReactNode } from 'react';
/**
 * EmptyState size variant
 */
export type EmptyStateSize = 'sm' | 'md' | 'lg';
/**
 * EmptyState visual variant
 */
export type EmptyStateVariant = 'default' | 'compact' | 'full-page';
/**
 * EmptyState section props
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
export interface EmptyStateProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Icon element to display
     * Typically a Lucide icon with size 48-64
     */
    icon?: ReactNode;
    /**
     * Optional illustration element (larger visual)
     * Use instead of icon for full-page variants
     */
    illustration?: ReactNode;
    /**
     * Main title/heading
     */
    title: string;
    /**
     * Description text providing context
     */
    description?: string;
    /**
     * Primary action button
     */
    action?: ReactNode;
    /**
     * Secondary action (link or button)
     */
    secondaryAction?: ReactNode;
    /**
     * Visual variant
     * - default: Standard centered layout
     * - compact: Smaller padding and text
     * - full-page: Takes full viewport height
     * @default 'default'
     */
    variant?: EmptyStateVariant;
    /**
     * Size variant affecting padding and typography
     * @default 'md'
     */
    size?: EmptyStateSize;
}
//# sourceMappingURL=EmptyState.types.d.ts.map