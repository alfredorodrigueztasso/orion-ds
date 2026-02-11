/**
 * Theme Context
 *
 * Provides global theme and brand state to all components.
 * This ensures consistent theming across the entire application.
 *
 * Fonts are loaded automatically by default. No need to add <FontLoader /> manually.
 *
 * @example
 * ```tsx
 * // App.tsx
 * import { ThemeProvider } from '@orion/react';
 *
 * export default function App() {
 *   return (
 *     <ThemeProvider>
 *       <YourComponents />
 *     </ThemeProvider>
 *   );
 * }
 *
 * // Inside any component
 * import { useTheme } from '@orion/react';
 *
 * function MyComponent() {
 *   const { theme, brand } = useTheme();
 *   return <div>Current: {theme} / {brand}</div>;
 * }
 *
 * // To disable automatic font loading:
 * <ThemeProvider disableAutoFontLoading>
 *   <YourComponents />
 * </ThemeProvider>
 * ```
 */
import { ReactNode } from 'react';
import { UseThemeOptions, UseThemeReturn } from '../hooks/useTheme';
/**
 * Theme Provider Props
 */
export interface ThemeProviderProps {
    /**
     * Child components
     */
    children: ReactNode;
    /**
     * Default theme
     * @default 'light'
     */
    defaultTheme?: 'light' | 'dark';
    /**
     * Default brand
     * @default 'orion'
     */
    defaultBrand?: 'orion' | 'red' | 'deepblue' | 'orange' | 'lemon';
    /**
     * Theme options (see useTheme for full options)
     * @deprecated Use flat props (defaultTheme, defaultBrand) instead.
     */
    options?: UseThemeOptions;
    /**
     * Disable font loading warnings in development
     * @default false
     */
    disableFontWarnings?: boolean;
    /**
     * Disable automatic font loading via FontLoader
     * When false (default), fonts are loaded automatically.
     * Set to true if you want to manage font loading manually.
     * @default false
     */
    disableAutoFontLoading?: boolean;
    /**
     * Disable CSS import warnings in development
     * When false (default), a warning is shown if react.css is not imported.
     * @default false
     */
    disableCSSWarnings?: boolean;
}
/**
 * ThemeProvider Component
 *
 * Wraps your application to provide global theme and brand state.
 * Must be placed near the root of your application.
 */
export declare function ThemeProvider({ children, defaultTheme, defaultBrand, options, disableFontWarnings, disableAutoFontLoading, disableCSSWarnings, }: ThemeProviderProps): import("react/jsx-runtime").JSX.Element;
/**
 * Hook to access global theme state
 *
 * ⚠️ IMPORTANT: Must be used inside a ThemeProvider
 *
 * @throws Error if used outside ThemeProvider
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { theme, brand, setTheme, setBrand } = useTheme();
 *   // Components automatically inherit theme/brand from <html> attributes
 *   // DO NOT pass brand prop to components - it's applied globally!
 * }
 * ```
 */
export declare function useThemeContext(): UseThemeReturn;
//# sourceMappingURL=ThemeContext.d.ts.map