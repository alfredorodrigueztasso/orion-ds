/**
 * SettingsTemplate Types
 *
 * Type definitions for the settings page template.
 */

import type { HTMLAttributes, ReactNode } from "react";
import type { SettingsLayoutProps } from "../../../sections/SettingsLayout";

/**
 * Settings section content
 */
export interface SettingsSection {
  /**
   * Section ID (must match navigation item ID)
   */
  id: string;

  /**
   * Section content
   */
  content: ReactNode;
}

/**
 * SettingsTemplate props
 *
 * @example
 * ```tsx
 * <SettingsTemplate
 *   title="Settings"
 *   navigation={[...]}
 *   sections={[
 *     { id: 'profile', content: <ProfileForm /> },
 *     { id: 'security', content: <SecurityForm /> },
 *   ]}
 *   defaultSection="profile"
 * />
 * ```
 */
export interface SettingsTemplateProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "title"
> {
  /**
   * Page title
   */
  title?: string;

  /**
   * Page description
   */
  description?: string;

  /**
   * Navigation groups (passed to SettingsLayout)
   */
  navigation: SettingsLayoutProps["navigation"];

  /**
   * Section content mapped by ID
   */
  sections: SettingsSection[];

  /**
   * Default/initial section ID
   */
  defaultSection?: string;

  /**
   * Controlled active section (for external state management)
   */
  activeSection?: string;

  /**
   * Callback when section changes
   */
  onSectionChange?: (sectionId: string) => void;

  /**
   * Header actions (buttons in header area)
   */
  headerActions?: ReactNode;
}
