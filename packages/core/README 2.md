# ⚠️ @orion/core (DEPRECATED)

**This package has been merged into @orion-ds/react v3.0.0 and is no longer maintained.**

## Migration Guide

If you're using `@orion-ds/core`, please migrate to `@orion-ds/react@^3.0.0`:

```bash
npm uninstall @orion-ds/core
npm install @orion-ds/react@^3.0.0
```

### Before (v2.x)

```bash
npm install @orion-ds/core @orion-ds/react
```

```typescript
import "@orion-ds/core/theme.css";
import "@orion-ds/react/dist/react.css";
import type { Theme, Brand } from "@orion-ds/core";
```

### After (v3.x)

```bash
npm install @orion-ds/react@^3.0.0
```

```typescript
import "@orion-ds/react/styles.css"; // Single import
import type { Theme, Brand } from "@orion-ds/react";
```

---

## Legacy Documentation

Core design tokens and utilities for the Orion Design System.

## Installation

```bash
npm install @orion/core
# or
pnpm add @orion/core
# or
yarn add @orion/core
```

## Usage

### Import CSS Variables

```css
@import "@orion/core/theme.css";
```

### Use TypeScript Tokens

```typescript
import { primitives, getToken, getSemanticToken } from "@orion/core";

// Access primitive tokens
const brandColor = primitives.color.brand.orion[500]; // "#1B5BFF"
const spacing = primitives.spacing[4]; // "16px"

// Get tokens by path
const color = getToken("color.brand.orion.500"); // "#1B5BFF"

// Get semantic tokens
const surfaceBase = getSemanticToken("light", "surface.base"); // "#ffffff"
const textPrimary = getSemanticToken("dark", "text.primary"); // "#ffffff"
```

### Type-Safe Token Paths

```typescript
import type { TokenPath, SemanticTokenPath } from "@orion/core";

// TypeScript will autocomplete and validate token paths
const path: TokenPath = "color.brand.orion.500"; // ✅
const invalid: TokenPath = "color.brand.invalid.500"; // ❌ Type error

const semantic: SemanticTokenPath = "surface.base"; // ✅
const invalidSemantic: SemanticTokenPath = "invalid.token"; // ❌ Type error
```

### Brand and Theme Support

```typescript
import { brands, themes, getBrand, isValidTheme } from "@orion/core";

// Access brand configuration
const orionBrand = getBrand("orion");
console.log(orionBrand.accentColor); // "#1B5BFF"
console.log(orionBrand.radius); // "12px"

// Check if theme is valid
if (isValidTheme("dark")) {
  // Load dark theme
}

// Access all themes
console.log(themes.light);
console.log(themes.dark);
```

## Using with @orion-ds/react

If you're using the React component library, you need **BOTH** CSS files:

```tsx
// In your app entry file (e.g., main.tsx, App.tsx)
import "@orion-ds/core/theme.css"; // Design tokens - REQUIRED
import "@orion-ds/react/dist/react.css"; // Component styles - REQUIRED

import { ThemeProvider, Button } from "@orion-ds/react";
```

> **Warning**: Missing either import will result in unstyled or broken components.

## Features

- **Type-Safe**: Full TypeScript support with autocomplete
- **Chain of Truth**: Enforced token hierarchy (Primitives → Semantics → Components)
- **Multi-Brand**: Support for Orion, Red, Deepblue, Orange, and Lemon brands
- **Multi-Theme**: Light and dark theme support
- **Zero Runtime**: Types are compile-time only, no runtime overhead
- **Tree-Shakeable**: Import only what you need

## Architecture

### Primitives (Layer 1)

Raw values that never change:

- Colors (brand, neutral, status)
- Typography (family, size, weight, line-height)
- Spacing (0-32 scale)
- Radius (xs, sm, md, lg, lg-2, xl, 2xl, 3xl, full) + radiusScale derivation
- Blur (sm, md, lg, xl)

### Semantics (Layer 2)

Intent-based aliases that describe purpose:

- Surface (base, subtle, layer, glass, sunken)
- Text (primary, secondary, tertiary, inverse, brand)
- Interactive (primary, secondary, ghost)
- Border (subtle, strong, interactive)
- Status (error, success, warning, info)

### CSS Variables (Layer 3)

Browser-consumable variables:

- `--surface-base`
- `--text-primary`
- `--interactive-primary`
- `--spacing-4`
- `--radius-control`

## Token Path Types

All token paths are type-checked:

```typescript
type ColorTokenPath =
  | `color.brand.${Brand}.${keyof ColorShades}`
  | `color.neutral.${keyof NeutralColors}`
  | "color.error.500"
  | "color.success.500"
  | "color.warning.500"
  | "color.info.500";

type SemanticTokenPath =
  | `surface.${keyof SurfaceSemantics}`
  | `text.${keyof TextSemantics}`
  | `interactive.primary.${keyof InteractivePrimarySemantics}`;
// ...
```

## API Reference

### Functions

#### `getToken(path: TokenPath): string`

Get a primitive token value by path.

#### `getSemanticToken(theme: Theme, path: SemanticTokenPath): string`

Get a semantic token value for a specific theme.

#### `getBrand(brand: Brand): BrandConfig`

Get brand configuration.

#### `toCSSVariable(path: SemanticTokenPath): string`

Convert semantic path to CSS variable name.

#### `isValidTheme(value: string): value is Theme`

Type guard for valid theme.

#### `isValidBrand(value: string): value is Brand`

Type guard for valid brand.

## License

MIT
