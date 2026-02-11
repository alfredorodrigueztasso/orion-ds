/**
 * FontLoader Component
 *
 * Automatically injects Google Fonts into the document head.
 * This ensures all brand fonts are available without manual HTML setup.
 *
 * **Note:** Since v1.1.4, ThemeProvider includes FontLoader automatically.
 * You don't need to add this component manually unless you've disabled
 * auto font loading with `disableAutoFontLoading` prop.
 *
 * @example
 * ```tsx
 * // ThemeProvider loads fonts automatically - no FontLoader needed!
 * import { ThemeProvider } from '@orion-ds/react';
 *
 * function App() {
 *   return (
 *     <ThemeProvider>
 *       <YourComponents />
 *     </ThemeProvider>
 *   );
 * }
 * ```
 *
 * @example
 * ```tsx
 * // Use standalone only if you need callbacks or custom loading behavior
 * <FontLoader onLoad={() => console.log('Fonts ready!')} />
 * ```
 */
export interface FontLoaderProps {
    /**
     * Callback when fonts are loaded
     */
    onLoad?: () => void;
    /**
     * Callback when fonts fail to load
     */
    onError?: (error: Error) => void;
    /**
     * Show loading state while fonts are loading
     * @default false
     */
    showLoadingState?: boolean;
    /**
     * Custom loading component
     */
    loadingComponent?: React.ReactNode;
    /**
     * Children to render (will wait for fonts if showLoadingState is true)
     */
    children?: React.ReactNode;
}
/**
 * FontLoader - Injects Google Fonts into the document head
 *
 * Place this component near the root of your app to ensure
 * all brand fonts are loaded automatically.
 */
export declare function FontLoader({ onLoad, onError, showLoadingState, loadingComponent, children, }: FontLoaderProps): import("react/jsx-runtime").JSX.Element | null;
export declare namespace FontLoader {
    var displayName: string;
}
//# sourceMappingURL=FontLoader.d.ts.map