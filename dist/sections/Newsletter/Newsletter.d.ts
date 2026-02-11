/**
 * Newsletter Component
 *
 * A newsletter signup section with email input and customizable messaging.
 * Supports multiple layouts and states (loading, success, error).
 *
 * @example
 * ```tsx
 * <Newsletter
 *   eyebrow={<Badge>Newsletter</Badge>}
 *   title="Stay in the loop"
 *   description="Get the latest updates, tips, and resources delivered to your inbox."
 *   placeholder="you@example.com"
 *   buttonText="Subscribe"
 *   disclaimer="We respect your privacy. Unsubscribe at any time."
 *   onSubmit={(email) => handleSubscribe(email)}
 * />
 * ```
 */
import type { NewsletterProps } from './Newsletter.types';
export declare const Newsletter: import("react").ForwardRefExoticComponent<NewsletterProps & import("react").RefAttributes<HTMLElement>>;
//# sourceMappingURL=Newsletter.d.ts.map