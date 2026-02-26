/**
 * ProfilePageTemplate Types
 *
 * Type definitions for the profile page template.
 */

import type { HTMLAttributes, ReactNode } from "react";
import type { SidebarProps } from "../../../components/Sidebar";
import type { PageHeaderProps } from "../../../components/PageHeader";
import type { DetailPanelProps } from "../../../components/DetailPanel";
import type { ActivityFeedProps } from "../../../components/ActivityFeed";

/**
 * Profile header content
 */
export interface ProfileHeader {
  /**
   * User avatar
   */
  avatar?: ReactNode;

  /**
   * User name
   */
  name: string;

  /**
   * User role/title
   */
  role?: string;

  /**
   * User email
   */
  email?: string;

  /**
   * Additional metadata items
   */
  metadata?: Array<{
    icon?: ReactNode;
    label: string;
    value: string;
  }>;

  /**
   * Profile actions (buttons)
   */
  actions?: ReactNode;
}

/**
 * ProfilePageTemplate props
 *
 * @example
 * ```tsx
 * <ProfilePageTemplate
 *   pageHeader={{ title: 'User Profile' }}
 *   profile={{
 *     name: 'John Doe',
 *     role: 'Software Engineer',
 *     avatar: <Avatar src="..." />
 *   }}
 * />
 * ```
 */
export interface ProfilePageTemplateProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Sidebar configuration (optional)
   */
  sidebar?: SidebarProps;

  /**
   * Page header configuration
   */
  pageHeader?: PageHeaderProps;

  /**
   * Profile header information
   */
  profile: ProfileHeader;

  /**
   * Profile detail sections (rendered in main content)
   */
  children?: ReactNode;

  /**
   * Activity feed showing user activity
   */
  activityFeed?: ActivityFeedProps;

  /**
   * Detail panel for editing profile
   */
  detailPanel?: DetailPanelProps;

  /**
   * Show activity feed in sidebar
   * @default true
   */
  showActivity?: boolean;
}
