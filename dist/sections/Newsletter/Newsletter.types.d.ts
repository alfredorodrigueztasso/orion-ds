/**
 * Newsletter Component Types
 *
 * Type definitions for the Orion Newsletter section component.
 */
import type { HTMLAttributes, ReactNode } from 'react';
/**
 * Newsletter layout variant
 */
export type NewsletterLayout = 'inline' | 'stacked' | 'card';
/**
 * Newsletter size variant
 */
export type NewsletterSize = 'sm' | 'md' | 'lg';
/**
 * Newsletter section props
 *
 * @example
 * ```tsx
 * <Newsletter
 *   title="Subscribe to our newsletter"
 *   description="Get the latest updates delivered to your inbox"
 *   placeholder="Enter your email"
 *   buttonText="Subscribe"
 *   onSubmit={(email) => console.log(email)}
 * />
 * ```
 */
export interface NewsletterProps extends Omit<HTMLAttributes<HTMLElement>, 'title' | 'onSubmit'> {
    /**
     * Optional eyebrow/badge above title
     */
    eyebrow?: ReactNode;
    /**
     * Section title
     */
    title?: ReactNode;
    /**
     * Section description
     */
    description?: ReactNode;
    /**
     * Email input placeholder
     * @default "Enter your email"
     */
    placeholder?: string;
    /**
     * Submit button text
     * @default "Subscribe"
     */
    buttonText?: string;
    /**
     * Custom submit button element
     */
    submitButton?: ReactNode;
    /**
     * Form submit handler - receives email address
     */
    onSubmit?: (email: string) => void;
    /**
     * Privacy/disclaimer text below form
     */
    disclaimer?: ReactNode;
    /**
     * Layout variant
     * - inline: Input and button on same line
     * - stacked: Input above button
     * - card: Contained in a card with padding
     * @default 'inline'
     */
    layout?: NewsletterLayout;
    /**
     * Size variant affecting spacing and typography
     * @default 'md'
     */
    size?: NewsletterSize;
    /**
     * Background style
     * @default 'subtle'
     */
    background?: 'base' | 'subtle' | 'brand' | 'none';
    /**
     * Center align content
     * @default true
     */
    centered?: boolean;
    /**
     * Success message to show after submission
     */
    successMessage?: ReactNode;
    /**
     * Error message to show on submission error
     */
    errorMessage?: ReactNode;
    /**
     * Loading state
     * @default false
     */
    loading?: boolean;
}
//# sourceMappingURL=Newsletter.types.d.ts.map