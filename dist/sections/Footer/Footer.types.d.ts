/**
 * Footer Component Types
 *
 * Type definitions for the Orion Footer section component.
 */
import type { HTMLAttributes, ReactNode } from 'react';
/**
 * Footer link item
 */
export interface FooterLink {
    /**
     * Link label
     */
    label: string;
    /**
     * Link URL
     */
    href: string;
    /**
     * Open in new tab
     * @default false
     */
    external?: boolean;
}
/**
 * Footer link group (column of links)
 */
export interface FooterLinkGroup {
    /**
     * Group title
     */
    title: string;
    /**
     * Links in this group
     */
    links: FooterLink[];
}
/**
 * Social link item
 */
export interface FooterSocialLink {
    /**
     * Platform name (for accessibility)
     */
    label: string;
    /**
     * Link URL
     */
    href: string;
    /**
     * Icon element
     */
    icon: ReactNode;
}
/**
 * Footer brand info
 */
export interface FooterBrand {
    /**
     * Brand name
     */
    name: string;
    /**
     * Brand logo (optional)
     */
    logo?: ReactNode;
    /**
     * Brand tagline/description
     */
    description?: string;
}
/**
 * Footer variant styles
 */
export type FooterVariant = 'default' | 'minimal' | 'centered';
/**
 * Footer section props
 *
 * @example
 * ```tsx
 * <Footer
 *   brand={{ name: "Orion", logo: <Logo />, description: "AI-first design system" }}
 *   linkGroups={[
 *     { title: "Product", links: [{ label: "Features", href: "#" }] },
 *     { title: "Company", links: [{ label: "About", href: "#" }] },
 *   ]}
 *   socialLinks={[
 *     { label: "Twitter", href: "#", icon: <Twitter /> },
 *   ]}
 *   copyright="© 2024 Orion. All rights reserved."
 * />
 * ```
 */
export interface FooterProps extends HTMLAttributes<HTMLElement> {
    /**
     * Brand information
     */
    brand?: FooterBrand;
    /**
     * Groups of navigation links (columns)
     */
    linkGroups?: FooterLinkGroup[];
    /**
     * Social media links
     */
    socialLinks?: FooterSocialLink[];
    /**
     * Newsletter signup element (custom component)
     */
    newsletter?: ReactNode;
    /**
     * Copyright text
     */
    copyright?: string;
    /**
     * Legal/bottom links (privacy, terms, etc.)
     */
    legalLinks?: FooterLink[];
    /**
     * Visual variant
     * - default: Full footer with all sections
     * - minimal: Compact footer with essential info
     * - centered: Centered layout
     * @default 'default'
     */
    variant?: FooterVariant;
    /**
     * Background style
     * @default 'subtle'
     */
    background?: 'base' | 'subtle' | 'sunken';
}
//# sourceMappingURL=Footer.types.d.ts.map