/**
 * Team Component Types
 *
 * Type definitions for the Orion Team section component.
 */

import type { HTMLAttributes, ReactNode } from "react";

/**
 * Grid column count for team members
 */
export type TeamColumns = 2 | 3 | 4;

/**
 * Team card visual variant
 */
export type TeamVariant = "default" | "cards" | "compact";

/**
 * Social link for team member
 */
export interface TeamSocialLink {
  /**
   * Platform name (e.g., "twitter", "linkedin", "github")
   */
  platform: string;

  /**
   * URL to the social profile
   */
  href: string;

  /**
   * Icon element for the social link
   */
  icon?: ReactNode;
}

/**
 * Team member data structure
 */
export interface TeamMember {
  /**
   * Member's name
   */
  name: string;

  /**
   * Member's role or title
   */
  role: string;

  /**
   * Optional bio or description
   */
  bio?: string;

  /**
   * Avatar image URL
   */
  avatarSrc?: string;

  /**
   * Avatar initials (fallback if no image)
   */
  avatarInitials?: string;

  /**
   * @deprecated Use avatarSrc instead. Legacy support for ReactNode avatar.
   */
  avatar?: ReactNode;

  /**
   * Social media links
   */
  socialLinks?: TeamSocialLink[];
}

/**
 * Team member card props (internal component)
 */
export interface TeamMemberCardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Team member data
   */
  member: TeamMember;

  /**
   * Visual variant
   * @default 'default'
   */
  variant?: TeamVariant;
}

/**
 * Team section props
 *
 * @example
 * ```tsx
 * <Team
 *   title="Meet our team"
 *   description="The people behind the product"
 *   members={[
 *     {
 *       name: "Jane Doe",
 *       role: "CEO & Founder",
 *       bio: "Building the future of design systems",
 *       avatar: <img src="/jane.jpg" alt="Jane" />,
 *       socialLinks: [
 *         { platform: "twitter", href: "#", icon: <Twitter /> }
 *       ]
 *     }
 *   ]}
 *   columns={4}
 * />
 * ```
 */
export interface TeamProps extends Omit<HTMLAttributes<HTMLElement>, "title"> {
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
   * Array of team members
   */
  members: TeamMember[];

  /**
   * Number of grid columns
   * @default 4
   */
  columns?: TeamColumns;

  /**
   * Visual variant
   * - default: Simple grid with avatars
   * - cards: Card-based layout with borders
   * - compact: Smaller avatars, minimal info
   * @default 'default'
   */
  variant?: TeamVariant;

  /**
   * Background style
   * @default 'base'
   */
  background?: "base" | "subtle" | "none";

  /**
   * Center the header and members
   * @default true
   */
  centered?: boolean;
}
