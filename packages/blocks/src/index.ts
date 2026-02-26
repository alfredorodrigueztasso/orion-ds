/**
 * @orion-ds/blocks - Premium Sections & Templates
 *
 * Pre-built sections and full-page templates for Orion Design System.
 * Extends the core @orion-ds/react components with ready-to-use page blocks
 * and compositions optimized for marketing, SaaS, and app interfaces.
 *
 * @example
 * ```tsx
 * import { Hero, Features, CTA, Footer } from '@orion-ds/blocks/sections';
 * import { LandingPageTemplate } from '@orion-ds/blocks/templates';
 *
 * export default function LandingPage() {
 *   return (
 *     <LandingPageTemplate>
 *       <Hero />
 *       <Features />
 *       <CTA />
 *       <Footer />
 *     </LandingPageTemplate>
 *   );
 * }
 * ```
 *
 * @packageDocumentation
 */

// Import and re-export sections
export * from './sections';

// Import and re-export templates
export * from './templates';
