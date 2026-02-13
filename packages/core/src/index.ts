/**
 * @orion/core - Orion Design System Core Package
 *
 * This package provides the foundational design tokens and utilities
 * for the Orion Design System. It follows the "Chain of Truth" architecture:
 *
 * Layer 1: Primitives (raw values)
 * Layer 2: Semantics (intent-based aliases)
 * Layer 3: CSS Variables (browser-consumable)
 * Layer 4: Components (blind consumers)
 *
 * @packageDocumentation
 */

// Export all token types and values
export * from './tokens';

// Re-export commonly used items for convenience
export type {
  Theme,
  Brand,
  TokenPath,
  SemanticTokenPath,
  CSSVariableName,
  Primitives,
  SemanticTokens,
} from './tokens/types';

export { primitives, color, typography, spacing, radius, blur, icon } from './tokens/primitives';

export { lightTheme, darkTheme, themes } from './tokens/themes';

export { brands, defaultBrand } from './tokens/brands';

export {
  getToken,
  getSemanticToken,
  getBrand,
  toCSSVariable,
  isValidTheme,
  isValidBrand,
} from './tokens/utils';
