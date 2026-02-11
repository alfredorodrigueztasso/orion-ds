/**
 * AppDownload Section Types
 *
 * Type definitions for the Orion AppDownload section component.
 */
import type { HTMLAttributes, ReactNode } from 'react';
/**
 * App store badge item
 */
export interface AppStoreBadge {
    /**
     * Store type
     */
    store: 'apple' | 'google' | 'huawei' | 'custom';
    /**
     * Download URL
     */
    href: string;
    /**
     * Custom badge image (for 'custom' store)
     */
    badgeImage?: string;
    /**
     * Custom badge alt text
     */
    badgeAlt?: string;
}
/**
 * App feature item
 */
export interface AppFeature {
    /**
     * Feature icon
     */
    icon?: ReactNode;
    /**
     * Feature title
     */
    title: string;
    /**
     * Feature description
     */
    description?: string;
}
/**
 * AppDownload section props
 *
 * @example
 * ```tsx
 * <AppDownload
 *   title="Download Our App"
 *   description="Available on iOS and Android"
 *   badges={[
 *     { store: 'apple', href: 'https://apps.apple.com/...' },
 *     { store: 'google', href: 'https://play.google.com/...' },
 *   ]}
 *   appImage="/app-preview.png"
 * />
 * ```
 */
export interface AppDownloadProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
    /**
     * Optional eyebrow text
     */
    eyebrow?: ReactNode;
    /**
     * Section title
     */
    title: ReactNode;
    /**
     * Section description
     */
    description?: ReactNode;
    /**
     * App store badges
     */
    badges: AppStoreBadge[];
    /**
     * App preview image/screenshot
     */
    appImage?: string;
    /**
     * QR code image for direct download
     */
    qrCode?: string;
    /**
     * Show QR code
     * @default false
     */
    showQrCode?: boolean;
    /**
     * App features list
     */
    features?: AppFeature[];
    /**
     * Layout variant
     * @default 'centered'
     */
    layout?: 'centered' | 'split-left' | 'split-right';
    /**
     * Background style
     * @default 'gradient'
     */
    background?: 'base' | 'subtle' | 'gradient' | 'dark';
    /**
     * App rating
     */
    rating?: {
        value: number;
        count: string;
    };
    /**
     * Compact mode
     * @default false
     */
    compact?: boolean;
}
//# sourceMappingURL=AppDownload.types.d.ts.map