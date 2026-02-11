/**
 * @orion/react Templates
 *
 * Full page templates that compose sections and components into ready-to-use pages.
 * Use these for rapidly building complete pages with consistent structure.
 *
 * @example
 * ```tsx
 * import { LandingPageTemplate, DashboardTemplate } from '@orion/react';
 *
 * // Marketing page
 * function MarketingPage() {
 *   return (
 *     <LandingPageTemplate
 *       hero={{ headline: 'Welcome' }}
 *       features={{ items: [...] }}
 *     />
 *   );
 * }
 *
 * // App page
 * function AppPage() {
 *   return (
 *     <DashboardTemplate
 *       pageHeader={{ title: 'Dashboard' }}
 *       metrics={{ metrics: [...] }}
 *     />
 *   );
 * }
 * ```
 *
 * @packageDocumentation
 */
export { LandingPageTemplate, PricingPageTemplate, AboutPageTemplate, ContactPageTemplate, } from './marketing';
export type { LandingPageTemplateProps, PricingPageTemplateProps, AboutPageTemplateProps, ContactPageTemplateProps, } from './marketing';
export { DashboardTemplate, SettingsTemplate, ProfilePageTemplate, KanbanPageTemplate, } from './app';
export type { DashboardTemplateProps, SettingsTemplateProps, ProfilePageTemplateProps, KanbanPageTemplateProps, } from './app';
//# sourceMappingURL=index.d.ts.map