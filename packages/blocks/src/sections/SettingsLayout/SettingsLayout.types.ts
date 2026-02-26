/**
 * SettingsLayout Component Types
 *
 * Type definitions for the Orion SettingsLayout section component.
 * A layout for settings pages with navigation sidebar.
 */

import type { HTMLAttributes, ReactNode } from "react";

/**
 * Settings navigation item
 */
export interface SettingsNavItem {
  /**
   * Unique identifier
   */
  id: string;

  /**
   * Display label
   */
  label: string;

  /**
   * Optional icon
   */
  icon?: ReactNode;

  /**
   * Optional description
   */
  description?: string;

  /**
   * Disabled state
   */
  disabled?: boolean;

  /**
   * Badge content
   */
  badge?: ReactNode;
}

/**
 * Settings navigation group
 */
export interface SettingsNavGroup {
  /**
   * Group title
   */
  title?: string;

  /**
   * Items in this group
   */
  items: SettingsNavItem[];
}

/**
 * SettingsLayout section props
 *
 * @example
 * ```tsx
 * <SettingsLayout
 *   navigation={[
 *     {
 *       title: 'Account',
 *       items: [
 *         { id: 'profile', label: 'Profile', icon: <User /> },
 *         { id: 'security', label: 'Security', icon: <Lock /> }
 *       ]
 *     }
 *   ]}
 *   activeSection="profile"
 *   onNavigate={(id) => setActiveSection(id)}
 * >
 *   <ProfileSettings />
 * </SettingsLayout>
 * ```
 */
export interface SettingsLayoutProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Navigation items/groups
   */
  navigation: SettingsNavGroup[];

  /**
   * Currently active section ID
   */
  activeSection: string;

  /**
   * Navigation handler
   */
  onNavigate: (sectionId: string) => void;

  /**
   * Content for the active section
   */
  children: ReactNode;

  /**
   * Page title
   */
  title?: string;

  /**
   * Page description
   */
  description?: string;

  /**
   * Header actions
   */
  headerActions?: ReactNode;

  /**
   * Navigation width in pixels
   * @default 240
   */
  navWidth?: number;

  /**
   * Sticky navigation
   * @default true
   */
  stickyNav?: boolean;

  /**
   * Show mobile nav toggle
   * @default true
   */
  mobileNav?: boolean;
}
