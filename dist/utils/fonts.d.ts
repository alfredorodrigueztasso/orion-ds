/**
 * Font Configuration for Orion Design System
 *
 * This module provides font URLs and utilities for loading Google Fonts
 * required by each brand in the design system.
 *
 * @example
 * ```tsx
 * import { GOOGLE_FONTS_URL, BRAND_FONTS } from '@orion-ds/react';
 *
 * // Add to your HTML <head>
 * <link href={GOOGLE_FONTS_URL} rel="stylesheet" />
 *
 * // Or check which fonts a brand needs
 * console.log(BRAND_FONTS.lemon); // ['Anton', 'Work Sans', 'JetBrains Mono']
 * ```
 */
import type { Brand } from '../hooks/useTheme';
/**
 * Font families used by each brand
 */
export declare const BRAND_FONTS: Record<Brand, string[]>;
/**
 * All unique font families used across all brands
 */
export declare const ALL_FONTS: readonly ["Libre Baskerville", "DM Sans", "Inter", "JetBrains Mono", "Work Sans", "Poppins", "Anton"];
/**
 * Google Fonts URL with all fonts needed for all brands
 *
 * Add this to your HTML <head>:
 * ```html
 * <link rel="preconnect" href="https://fonts.googleapis.com">
 * <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
 * <link href="https://fonts.googleapis.com/css2?family=..." rel="stylesheet">
 * ```
 */
export declare const GOOGLE_FONTS_URL: string;
/**
 * Preconnect URLs for faster font loading
 */
export declare const FONT_PRECONNECT_URLS: readonly ["https://fonts.googleapis.com", "https://fonts.gstatic.com"];
/**
 * Check if a font is loaded in the document
 */
export declare function isFontLoaded(fontFamily: string): boolean;
/**
 * Check if all fonts for a brand are loaded
 */
export declare function areBrandFontsLoaded(brand: Brand): boolean;
/**
 * Get missing fonts for a brand
 */
export declare function getMissingFonts(brand: Brand): string[];
/**
 * Wait for fonts to be loaded
 */
export declare function waitForFonts(fonts: string[]): Promise<boolean>;
/**
 * Generate the HTML link tags for Google Fonts
 */
export declare function getFontLinkTags(): string;
//# sourceMappingURL=fonts.d.ts.map