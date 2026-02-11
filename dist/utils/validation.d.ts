/**
 * Orion React Validation Utilities
 *
 * Runtime validation helpers that provide helpful console warnings
 * during development to catch common AI-generated code mistakes.
 *
 * These warnings only appear in development mode (process.env.NODE_ENV !== 'production').
 *
 * @module validation
 */
/**
 * Warn when an icon-only button is missing aria-label.
 *
 * @param component - Component name (e.g., 'Button')
 * @param iconOnly - Whether the component is icon-only
 * @param hasAriaLabel - Whether aria-label is provided
 *
 * @example
 * ```tsx
 * // In Button.tsx
 * warnMissingAriaLabel('Button', iconOnly, !!rest['aria-label']);
 * ```
 */
export declare function warnMissingAriaLabel(component: string, iconOnly: boolean, hasAriaLabel: boolean): void;
/**
 * Warn when a component receives a brand prop.
 * Brand should be set globally via ThemeProvider, not on individual components.
 *
 * @param component - Component name (e.g., 'Button')
 * @param hasBrandProp - Whether the component received a brand prop
 *
 * @example
 * ```tsx
 * // In Button.tsx
 * warnBrandProp('Button', 'brand' in rest);
 * ```
 */
export declare function warnBrandProp(component: string, hasBrandProp: boolean): void;
/**
 * Warn when a component receives a theme prop.
 * Theme should be set globally via ThemeProvider, not on individual components.
 *
 * @param component - Component name (e.g., 'Card')
 * @param hasThemeProp - Whether the component received a theme prop
 *
 * @example
 * ```tsx
 * // In Card.tsx
 * warnThemeProp('Card', 'theme' in rest);
 * ```
 */
export declare function warnThemeProp(component: string, hasThemeProp: boolean): void;
/**
 * Warn when glass variant is used outside Display mode.
 * Glass effects only work properly in Display mode.
 *
 * @param component - Component name (e.g., 'Card', 'Navbar')
 * @param variant - The variant being used
 *
 * @example
 * ```tsx
 * // In Card.tsx
 * warnGlassVariant('Card', variant);
 * ```
 */
export declare function warnGlassVariant(component: string, variant: string | undefined): void;
/**
 * Warn when hardcoded colors are detected in style prop.
 *
 * @param component - Component name
 * @param style - The style object
 *
 * @example
 * ```tsx
 * warnHardcodedColors('Button', style);
 * ```
 */
export declare function warnHardcodedColors(component: string, style: React.CSSProperties | undefined): void;
/**
 * Warn when Field component might be misused.
 * Called when children are passed to Field (which doesn't support them).
 *
 * @param hasChildren - Whether children were passed
 */
export declare function warnFieldChildren(hasChildren: boolean): void;
/**
 * Warn when a section component is created instead of using pre-built sections.
 * This is for documentation/guidance purposes.
 *
 * @param customComponentName - Name of the custom component being created
 * @param suggestedSection - The pre-built section to use instead
 */
export declare function warnUsePrebuiltSection(customComponentName: string, suggestedSection: string): void;
//# sourceMappingURL=validation.d.ts.map