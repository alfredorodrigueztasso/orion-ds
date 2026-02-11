/**
 * useMediaQuery Hook
 *
 * Detects if a media query matches the current viewport.
 *
 * @example
 * ```tsx
 * const isMobile = useMediaQuery('(max-width: 768px)');
 * const isDark = useMediaQuery('(prefers-color-scheme: dark)');
 * const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
 * ```
 */
/**
 * Hook to detect if a media query matches
 *
 * @param query - CSS media query string
 * @returns Whether the media query matches
 */
export declare function useMediaQuery(query: string): boolean;
/**
 * Preset breakpoint hooks based on Orion Design System
 */
/**
 * Returns true if viewport is mobile (< 640px)
 */
export declare function useIsMobile(): boolean;
/**
 * Returns true if viewport is tablet (640px - 1023px)
 */
export declare function useIsTablet(): boolean;
/**
 * Returns true if viewport is desktop (>= 1024px)
 */
export declare function useIsDesktop(): boolean;
/**
 * Returns true if user prefers dark color scheme
 */
export declare function usePrefersDarkMode(): boolean;
/**
 * Returns true if user prefers reduced motion
 */
export declare function usePrefersReducedMotion(): boolean;
//# sourceMappingURL=useMediaQuery.d.ts.map