/**
 * @orion/react Templates
 *
 * Full page templates that compose sections and components into ready-to-use pages.
 * Use these for rapidly building complete pages with consistent structure.
 *
 * @example
 * ```tsx
 * import {
 *   AgentWorkspace,      // ChatBuilder
 *   DashboardTemplate,   // App
 *   LandingPageTemplate, // Marketing
 * } from '@orion/react';
 *
 * // AI Agent workspace
 * function AgentLibrary() {
 *   return (
 *     <AgentWorkspace
 *       folders={[...]}
 *       looseAgents={[...]}
 *     />
 *   );
 * }
 *
 * // App dashboard
 * function AppPage() {
 *   return (
 *     <DashboardTemplate
 *       pageHeader={{ title: 'Dashboard' }}
 *       metrics={{ metrics: [...] }}
 *     />
 *   );
 * }
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
 * ```
 *
 * @packageDocumentation
 */

// ============================================================================
// CHATBUILDER TEMPLATES
// ============================================================================

export { AgentWorkspace, ChatPageTemplate } from "./app";

export type {
  AgentWorkspaceProps,
  NavbarConfig,
  PageHeaderConfig,
  Workspace,
  DragEndEvent,
  ChatPageTemplateProps,
} from "./app";

// ============================================================================
// APP TEMPLATES
// ============================================================================

export {
  DashboardTemplate,
  SettingsTemplate,
  ProfilePageTemplate,
  KanbanPageTemplate,
  LoginTemplate,
} from "./app";

export type {
  DashboardTemplateProps,
  DashboardLayout,
  SettingsTemplateProps,
  SettingsSection,
  ProfilePageTemplateProps,
  ProfileHeader,
  KanbanPageTemplateProps,
  LoginTemplateProps,
  LoginFormConfig,
  LoginEditorial,
  SocialProvider,
} from "./app";

// ============================================================================
// MARKETING TEMPLATES
// ============================================================================

export {
  LandingPageTemplate,
  PricingPageTemplate,
  AboutPageTemplate,
  ContactPageTemplate,
} from "./marketing";

export type {
  LandingPageTemplateProps,
  PricingPageTemplateProps,
  AboutPageTemplateProps,
  ContactPageTemplateProps,
} from "./marketing";
