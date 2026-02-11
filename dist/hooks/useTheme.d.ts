/**
 * useTheme Hook
 *
 * React hook for managing theme and brand state in Orion Design System.
 *
 * @example
 * ```tsx
 * function App() {
 *   const { theme, brand, setTheme, setBrand } = useTheme();
 *
 *   return (
 *     <div>
 *       <button onClick={() => setTheme('dark')}>
 *         Switch to {theme === 'light' ? 'dark' : 'light'} mode
 *       </button>
 *       <button onClick={() => setBrand('red')}>
 *         Switch to Red brand
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 */
export type Theme = 'light' | 'dark';
export type Brand = 'orion' | 'red' | 'deepblue' | 'orange' | 'lemon';
export interface UseThemeOptions {
    /**
     * Default theme to use
     * @default 'light'
     */
    defaultTheme?: Theme;
    /**
     * Default brand to use
     * @default 'orion'
     */
    defaultBrand?: Brand;
    /**
     * Store theme preference in localStorage
     * @default true
     */
    storageEnabled?: boolean;
    /**
     * localStorage key for theme
     * @default 'orion-theme'
     */
    storageKey?: string;
    /**
     * localStorage key for brand
     * @default 'orion-brand'
     */
    brandStorageKey?: string;
}
export interface UseThemeReturn {
    /** Current theme */
    theme: Theme;
    /** Current brand */
    brand: Brand;
    /** Set theme */
    setTheme: (theme: Theme) => void;
    /** Set brand */
    setBrand: (brand: Brand) => void;
    /** Toggle between light and dark themes */
    toggleTheme: () => void;
    /** Check if current theme is dark */
    isDark: boolean;
    /** Check if current theme is light */
    isLight: boolean;
}
/**
 * Hook for managing theme and brand state
 */
export declare function useTheme(options?: UseThemeOptions): UseThemeReturn;
//# sourceMappingURL=useTheme.d.ts.map