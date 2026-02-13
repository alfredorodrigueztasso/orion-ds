# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Orion Design System** is an AI-first design system built on the "Chain of Truth" principle. It's a token-governed framework that eliminates UI hallucination by enforcing strict separation between primitives, semantics, and components. The system supports multiple brands and themes with zero visual drift through automated validation.

### TypeScript Migration (NEW)

The system now includes a **TypeScript-based monorepo architecture** with three npm packages:

- **@orion/core**: Design tokens with full TypeScript types
- **@orion/react**: Type-safe React component library
- **@orion/vue**: Type-safe Vue 3 composables

See [TYPESCRIPT_SETUP.md](./TYPESCRIPT_SETUP.md) for complete setup instructions.

## Core Architecture

### The Chain of Truth (3-Layer System)

1. **Primitives (Layer 1)**: Raw values in `tokens/primary.json` - the immutable source of truth
2. **Semantics (Layer 2)**: Intent-based aliases in `tokens/light.json` and `tokens/dark.json` - describe what values do, not what they look like
3. **Components (Layer 3)**: Blind consumers that reference semantic tokens via CSS variables

**CRITICAL**: Components never hardcode values. All styling must use semantic tokens (e.g., `var(--surface-base)`, `var(--interactive-primary)`).

### Multi-Brand Architecture

The system supports multiple brands via `data-brand` attribute:
- **orion** (default): Blue accent (#1B5BFF), 12px radius
- **red**: Red accent (#D7282F), 9999px radius (pill buttons)
- **deepblue**: Deep Blue accent (#006FBA), 12px radius
- **orange**: Red-Orange accent (#F15D22), 9999px radius

Brands are configured in `tokens/brands.json` and override base tokens in `theme.css`.

### Token System

All tokens are defined in JSON and compiled to CSS variables:
- `tokens/ai-manifest.json` - **AI system status & capabilities (READ THIS FIRST!)**
- `tokens/primary.json` - Primitive values (colors, spacing, typography, radius, blur)
- `tokens/light.json` - Light theme semantic mappings
- `tokens/dark.json` - Dark theme semantic mappings
- `tokens/components.json` - Component definitions with HTML templates
- `tokens/utilities.json` - Utility class definitions
- `tokens/brands.json` - Brand-specific overrides
- `tokens/index.json` - Unified reference (single source of truth for AI agents)

### TypeScript Token System (NEW)

TypeScript types are auto-generated from JSON tokens:

```bash
npm run build:tokens  # Generates TypeScript types from JSON
```

Generated files:
- `packages/core/src/tokens/types.ts` - TypeScript interfaces
- `packages/core/src/tokens/primitives.ts` - Typed constants
- `packages/core/src/tokens/themes.ts` - Light/dark theme definitions
- `packages/core/src/tokens/brands.ts` - Brand configurations
- `packages/core/src/tokens/utils.ts` - Helper functions

## Development Commands

### Build & Validation
```bash
npm run build:tokens                    # Generate TypeScript types from JSON
npm run build:packages                  # Build all TypeScript packages
npm run build:cli                       # Build @orion-ds/cli package
npm run type-check                      # Run TypeScript type checking
npm run validate                        # Audit theme.css for hardcoded values
npm run audit                           # Full validation suite
npm run dev                             # Start live-server on port 3000
npm run dev:packages                    # Start all packages in watch mode

# Component AI-First Validation (Prevents hallucination)
node scripts/validate-components.js     # Check React components follow AI-first rules
```

### CLI Commands (@orion-ds/cli)

The CLI lets developers copy individual components into their project (shadcn-style):

```bash
npx @orion-ds/cli init                    # Configure project, create orion.json
npx @orion-ds/cli add button card modal   # Copy components to project
npx @orion-ds/cli add theme-controller    # Resolves 6 deps automatically
npx @orion-ds/cli list                    # Show all 90 registry items
npx @orion-ds/cli list --type=component   # Filter by type
```

**Flags:** `--yes` (skip prompts), `--overwrite` (replace existing), `--local` (use `public/r/` instead of HTTP), `--type=component|section|template`

**Config file:** `orion.json` — created by `orion init`, controls output directories and registry URL.

See `packages/cli/README.md` for full documentation.

### Python Utilities
```bash
python check_contrast.py   # Validate WCAG color contrast ratios
python check_tokens.py     # Additional token validation
```

## Anti-Hallucination Rules (MANDATORY)

### ❌ NEVER Do These

1. **Hardcode colors**: `#FFFFFF`, `#000000`, `rgb(255,255,255)`
2. **Hardcode pixels**: `16px`, `24px`, `12px` (except `1px` borders, `0px`, `9999px` pills)
3. **Hardcode fonts**: `font-family: Inter`, `font-family: DM Sans`
4. **Invent components**: Only use components from `tokens/components.json`
5. **Create arbitrary wrappers**: Don't add unnecessary div layers
6. **Override brand tokens**: Never hardcode brand-specific values
7. **Use `any` type in TypeScript**: Always use proper types

### ✅ ALWAYS Do These

1. **Use CSS variables**: `var(--surface-base)`, `var(--text-primary)`, `var(--spacing-4)`
2. **Reference semantic tokens**: `var(--interactive-primary)`, `var(--border-subtle)`
3. **Check component manifest**: Use HTML patterns from `tokens/components.json`
4. **Verify brand context**: Check `data-brand` attribute before generating code
5. **Validate after changes**: Run `npm run validate` to ensure token compliance
6. **Use TypeScript types**: Import types from `@orion/core` for type safety
7. **Generate types after token changes**: Run `npm run build:tokens` after editing JSON

### React Component Specific Rules (CRITICAL FOR @orion/react)

**Brand and Theme are GLOBAL - NOT component props.**

#### ❌ NEVER Do These (Will Fail Validation)

1. **Add `brand` prop to components**: ❌ `export interface ButtonProps { brand?: Brand }`
2. **Set `data-brand` on component elements**: ❌ `<button data-brand={brand}>`
3. **Create brand-specific component variants**: ❌ Don't hardcode `--radius-button` differently per component
4. **Use `useTheme()` for component styling**: Components don't need individual theme/brand access
5. **Pass brand/theme between components**: Set once at app root via `<ThemeProvider>`

#### ✅ ALWAYS Do These

1. **Remove `brand` from all component prop interfaces**: Components never take brand/theme parameters
2. **Use `data-theme` and `data-brand` on `<html>` only**: Set globally via ThemeProvider
3. **Let CSS variables handle brand changes**: Use `var(--radius-button)` which changes per brand automatically
4. **Use `useThemeContext()` only if component needs to CHANGE brand/theme**: For theme switchers, not regular components
5. **Wrap your app with `<ThemeProvider>`**: Required once at root, all components inherit global state

#### Validation

Run the component validation to catch AI mistakes:

```bash
node scripts/validate-components.js
```

This script checks:
- ✅ No `data-brand` in component JSX
- ✅ No `brand` prop in TypeScript types
- ✅ No hardcoded colors (must use CSS variables)
- ✅ No hardcoded fonts (must use CSS variables)

**Exit code 0 = All tests passed (AI-first compliant)**

## Visual System Rules (Mode-Aware) — CRITICAL

The Orion Design System implements **"Contextual Minimalism"**: visual language adapts based on context (Display, Product, App mode). Each mode has distinct visual characteristics.

### ✅ ALWAYS Use Mode-Aware Tokens for Visual Effects

```css
/* Shadows - Mode-aware */
.btn:hover {
  box-shadow: var(--mode-shadow-hover);    /* Uses mode-specific shadow */
  transform: translateY(var(--mode-hover-lift));  /* Uses mode-specific lift */
  transition-duration: var(--mode-hover-duration);  /* Uses mode-specific speed */
}
```

### Mode Reference (Mode-Aware Styling)

| Mode | Visual Style | Glassmorphism | Hover Lift | Shadow | Duration |
|------|--------------|---------------|-----------|--------|----------|
| **Display** | Atmospheric (Apple) | ✅ Enabled | `-4px` | generous (shadow-lg) | 250ms |
| **Product** | Flat (Linear) | ❌ Disabled | `0px` | minimal (shadow-flat) | 150ms |
| **App** | Tactile (Material 3) | ❌ Disabled | `-2px` | native (shadow-md) | 200ms |

### Display Mode (Marketing & Landing Pages)
- **Philosophy**: Atmospheric & Narrative
- **Glassmorphism**: ✅ ENABLED (`backdrop-filter: blur(12px)` on navbars, sidebars, cards)
- **Shadows**: Generous (default: shadow-md, hover: shadow-lg)
- **Hover Lifts**: `-4px` translateY (dramatic, responsive)
- **Typography**: 20px+ body (readable at scale)
- **Use When**: Marketing pages, landing pages, hero sections

**Visual Rules**:
```css
[data-mode="display"] .navbar { backdrop-filter: blur(...); }
[data-mode="display"] .card-glass { backdrop-filter: blur(...); }
[data-mode="display"] .btn:hover { transform: translateY(-4px); }
```

### Product Mode (SaaS & Dashboards)
- **Philosophy**: Geometric Precision (Linear/Figma style)
- **Glassmorphism**: ❌ DISABLED (solid backgrounds only)
- **Shadows**: Minimal (default: shadow-flat, hover: shadow-sm)
- **Hover Lifts**: `0px` NO lift (background color change only)
- **Typography**: 14px body (dense, efficient)
- **Use When**: Dashboards, admin panels, data-heavy interfaces

**Visual Rules**:
```css
[data-mode="product"] .navbar { backdrop-filter: none; }
[data-mode="product"] .btn:hover { background-color: var(...); /* No lift */ }
[data-mode="product"] .card { box-shadow: var(--shadow-flat); }
```

### App Mode (Mobile & Touch-First)
- **Philosophy**: Tactile Elevation (Material 3 style)
- **Glassmorphism**: ❌ DISABLED (native feel)
- **Shadows**: Native (default: shadow-md, hover: shadow-lg)
- **Hover Lifts**: `-2px` translateY (subtle tactile feedback)
- **Typography**: 16px+ body minimum (mobile legibility)
- **Use When**: Mobile apps, touch interfaces, native feel required

**Visual Rules**:
```css
[data-mode="app"] .btn:hover { transform: translateY(-2px); }
[data-mode="app"] .card { border: none; /* No borders */ }
```

### ❌ NEVER Do These (Visual Violations)

1. **Add `backdrop-filter` outside Display mode**
   - ❌ `[data-mode="product"] .card { backdrop-filter: blur(...); }` — Use solid backgrounds
   - ✅ `[data-mode="display"] .card { backdrop-filter: blur(...); }` — Glass only in Display

2. **Use hover lifts in Product mode**
   - ❌ `[data-mode="product"] .btn:hover { transform: translateY(-4px); }` — No motion
   - ✅ `[data-mode="product"] .btn:hover { background-color: var(...); }` — Color only

3. **Hardcode shadow values**
   - ❌ `box-shadow: 0 4px 6px rgba(0,0,0,0.1);` — Violates Chain of Truth
   - ✅ `box-shadow: var(--mode-shadow-hover);` — Uses mode tokens

4. **Apply heavy shadows in Product mode**
   - ❌ `[data-mode="product"] .card { box-shadow: shadow-lg; }` — Too prominent
   - ✅ `[data-mode="product"] .card { box-shadow: var(--shadow-flat); }` — Minimal

5. **Forget brand tints on shadows**
   - ❌ Generic shadows for all brands
   - ✅ `[data-brand="orange"] .card:hover { box-shadow: 0 8px 16px -4px rgba(241, 93, 34, 0.2); }`

### ✅ ALWAYS Do These

1. **Use `var(--mode-shadow-*)` tokens**
   ```css
   .btn:hover { box-shadow: var(--mode-shadow-hover); }
   ```

2. **Use `var(--mode-hover-lift)` for transforms**
   ```css
   .card:hover { transform: translateY(var(--mode-hover-lift)); }
   ```

3. **Check mode before adding visual effects**
   ```css
   [data-mode="display"] .sidebar { backdrop-filter: blur(...); }
   [data-mode="product"] .sidebar { backdrop-filter: none; }
   ```

4. **Apply brand-specific shadow tints**
   - **Deepblue**: Blue-tinted shadows (`rgba(0, 111, 186, 0.3)`)
   - **Orange**: Red-orange-tinted shadows (`rgba(241, 93, 34, 0.2)`)

5. **Respect reduced motion**
   - Test with `prefers-reduced-motion: reduce`
   - Transforms disabled automatically
   - Blur effects preserved (not motion-inducing)

### Visual System Documentation

See [VISUAL_GUIDELINES.md](./VISUAL_GUIDELINES.md) for complete mode-aware styling guide.

### Button Size Variants (Mode-Aware)

Button sizes scale contextually per mode using a proportional system. Each mode maintains its own size hierarchy while preserving relative differences between small, medium, and large variants.

**Display Mode (Atmospheric - Spacious)**:
- `btn-sm`: 14px font, 40px min-height — Smaller but readable
- `btn` (default): 18px font, 56px min-height — Generous and impactful
- `btn-lg`: 20px font, 64px min-height — Dramatic and commanding

**Product Mode (Geometric Precision - Compact)**:
- `btn-sm`: 12px font, 28px min-height — Ultra-compact for dense layouts
- `btn` (default): 14px font, 32px min-height — Efficient and functional
- `btn-lg`: 16px font, 36px min-height — Prominent but space-conscious

**App Mode (Tactile - Touch-Friendly)**:
- `btn-sm`: 14px font, 40px min-height — Accessible touch target
- `btn` (default): 16px font, 44px min-height — iOS/Android standard
- `btn-lg`: 18px font, 48px min-height — Generous touch target

**Rule**: Each mode has proportional size scaling (sm ≈ 70-80% of base, lg ≈ 115-130% of base). Don't force a single button size across all modes—let the mode determine the visual context.

## ⚠️ Common Mistakes (CRITICAL)

### CSS Variables That DON'T EXIST

**Typography:**
- ❌ `var(--font-sans)` - DOES NOT EXIST
- ❌ `var(--font-body)` - DOES NOT EXIST
- ✅ **Use:** `var(--font-secondary)` for body text (DM Sans)
- ✅ **Use:** `var(--font-primary)` for headings (Libre Baskerville)
- ✅ **Use:** `var(--font-mono)` for code (JetBrains Mono)

**Colors for Gradients:**
- ❌ `var(--brand-accent-vivid)` - DOES NOT EXIST
- ❌ `var(--gradient-primary)` - DOES NOT EXIST
- ✅ **Use:** `var(--color-brand-400)` and `var(--color-brand-600)` for gradients
- ✅ **Use:** `var(--text-brand)` for single-color brand text

**Example gradient:**
```css
.gradient-text {
  background: linear-gradient(135deg, var(--color-brand-400), var(--color-brand-600));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Font Loading (Automatic in React)

**For @orion/react users:** Fonts are loaded **automatically** by `ThemeProvider`. No manual setup required.

```tsx
// ✅ Fonts load automatically - zero config needed
<ThemeProvider>
  <App />
</ThemeProvider>
```

**To disable auto-loading** (if you want to manage fonts manually):
```tsx
<ThemeProvider disableAutoFontLoading>
  <App />
</ThemeProvider>
```

**For vanilla HTML projects:** Add Google Fonts manually in HTML:
```html
<link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=DM+Sans:wght@400;500;700&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
```

Without fonts, text will fallback to system fonts (Times New Roman, etc.)

### React Component CSS Import

When using `@orion-ds/react`, import styles using ONE of these methods:

**Option 1: Single Import (Recommended)**
```typescript
import '@orion-ds/react/styles.css';      // Combined bundle (tokens + components)
```

**Option 2: Separate Imports**
```typescript
import '@orion-ds/core/theme.css';        // Design tokens
import '@orion-ds/react/dist/react.css';  // Component styles
```

Missing CSS imports will result in unstyled components.

## TypeScript Development Workflow (NEW)

### 1. Working with Tokens

#### Using @orion/core (Type-Safe Tokens)

```typescript
import {
  primitives,
  getToken,
  getSemanticToken,
  getBrand,
  type Theme,
  type Brand,
  type TokenPath
} from '@orion/core';

// Access primitives with autocomplete
const color = primitives.color.brand.orion[500]; // "#1B5BFF"
const spacing = primitives.spacing[4]; // "16px"

// Type-safe token paths
const path: TokenPath = 'color.brand.orion.500'; // ✅ Autocomplete
const invalid: TokenPath = 'invalid.path'; // ❌ Type error

// Get semantic tokens
const surface = getSemanticToken('light', 'surface.base');
const text = getSemanticToken('dark', 'text.primary');
```

### 2. Creating React Components

#### Component Structure

```
packages/react/src/components/Button/
├── Button.tsx           # Component implementation
├── Button.types.ts      # TypeScript type definitions
├── Button.module.css    # CSS Modules (scoped styles)
└── index.ts            # Exports
```

#### Example Component (AI-First Pattern)

**CRITICAL: Do NOT pass brand as a component prop. Brand is GLOBAL.**

```typescript
// Button.types.ts - NO brand prop (AI-first architecture)
import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children?: ReactNode;
}
```

```tsx
// Button.tsx - NO brand parameter (AI-first architecture)
import type { ButtonProps } from './Button.types';
import styles from './Button.module.css';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        className={`${styles.button} ${styles[variant]} ${styles[size]} ${className || ''}`}
        {...rest}
      >
        {children}
    </button>
  );
};
```

```css
/* Button.module.css */
.button {
  padding: var(--spacing-4);
  border-radius: var(--radius-control);
  font-family: var(--font-secondary);
}

.primary {
  background: var(--interactive-primary);
  color: var(--interactive-primary-text);
}
```

### 3. Global Brand & Theme Management (AI-First Architecture)

**Brand and theme are GLOBAL - set once at app root via ThemeProvider.**

**Fonts load automatically** - no need to add `<FontLoader />` manually (since v1.1.4).

```tsx
// app.tsx - Root component MUST wrap with ThemeProvider
import { ThemeProvider, Button } from '@orion-ds/react';
import '@orion-ds/react/styles.css';  // Single import for all styles

export default function App() {
  return (
    <ThemeProvider>  {/* Fonts load automatically */}
      <YourComponents />
    </ThemeProvider>
  );
}
```

**ThemeProvider Props:**
| Prop | Default | Description |
|------|---------|-------------|
| `disableFontWarnings` | `false` | Disable console warnings for missing fonts |
| `disableAutoFontLoading` | `false` | Disable automatic font loading (use if managing fonts manually) |

#### Accessing Global Theme/Brand in Components

Components should NEVER have `brand` props. Instead, use the `useThemeContext()` hook:

```tsx
// Inside any component wrapped by ThemeProvider
import { useThemeContext } from '@orion/react';

function MyComponent() {
  const { theme, brand, setTheme, setBrand } = useThemeContext();

  return (
    <div>
      <p>Current brand: {brand}</p>
      <p>Current theme: {theme}</p>
      <button onClick={() => setBrand('red')}>Switch to Red</button>
      <button onClick={() => setTheme('dark')}>Switch to Dark</button>
    </div>
  );
}
```

**How it works:**
1. `ThemeProvider` wraps your app and manages global state via React Context
2. `useThemeContext()` gives any component access to `theme`, `brand`, and setters
3. Changes update the `<html data-theme="..." data-brand="..." />` attributes
4. CSS uses `:root` and `[data-theme]` selectors to apply styling globally
5. All components automatically inherit the correct brand/theme styling

### 4. Using React Components

```tsx
// ✅ CORRECT - Components don't manage brand/theme
import { Button } from '@orion/react';

function MyButton() {
  return (
    <Button variant="primary">
      Click me
    </Button>
  );
}
```

```tsx
// ❌ WRONG - Don't pass brand to components
<Button variant="primary" brand="red">  {/* This won't work - brand is not a prop */}
  Click me
</Button>
```

### 4a. Using Lucide Icons in React Components

Orion React includes **Lucide icons** - a comprehensive icon library with 5000+ icons.

Components with icon support:
- `Button` - `icon`, `iconRight`, `iconOnly` props
- `Field` - `icon` prop for input icons
- `Alert` - `icon` prop for custom alert icons
- Other components - Accept `ReactNode` for icon content

```tsx
import { Button, Field } from '@orion/react';
import { Search, Download, ChevronDown, Settings } from 'lucide-react';

// Icon on left
<Button icon={<Search size={20} />}>Search</Button>

// Icon on right
<Button iconRight={<ChevronDown size={20} />}>Menu</Button>

// Icon only (must have aria-label)
<Button iconOnly icon={<Settings size={20} />} aria-label="Settings" />

// With form field
<Field
  type="email"
  placeholder="Email"
  icon={<Search size={18} />}
/>

// Multiple icons
<Button
  icon={<Download size={20} />}
  iconRight={<ChevronDown size={20} />}
>
  Download Options
</Button>
```

**Common Icons**

```tsx
// Navigation
import { Menu, X, ChevronDown, ChevronUp, Home, Settings, User } from 'lucide-react';

// Actions
import { Plus, Minus, Check, Copy, Download, Upload, Trash2, Edit } from 'lucide-react';

// Status
import { AlertCircle, CheckCircle, XCircle, Info, HelpCircle } from 'lucide-react';

// Media & Social
import { Heart, Star, Mail, MessageSquare, Image, Video } from 'lucide-react';

// Commerce
import { ShoppingCart, DollarSign, CreditCard } from 'lucide-react';
```

**Browse all 5000+ icons**: https://lucide.dev

**Icon Sizing** - Use `size` prop in pixels:
```tsx
<Search size={16} />  // Small
<Search size={20} />  // Default (icon=prop default)
<Search size={24} />  // Medium
<Search size={32} />  // Large
```

**Accessibility** - Icon-only buttons MUST have `aria-label`:
```tsx
// ✅ CORRECT
<Button iconOnly icon={<Settings size={20} />} aria-label="Settings" />

// ❌ WRONG - No label for screen readers
<Button iconOnly icon={<Settings size={20} />} />
```

**AI-First Icon Rules** for component generation:
- ✅ Always use `<Button icon={<IconName size={20} />}>` pattern
- ✅ Import icons directly from `lucide-react`
- ✅ Include `aria-label` for icon-only buttons
- ✅ Size icons to match component (sm=16-18px, md=20px, lg=24px)
- ❌ Never create custom SVG icons - use Lucide library
- ❌ Never hardcode `<svg>` markup - import from lucide-react
- ❌ Never forget `aria-label` on icon-only buttons

See `/packages/react/LUCIDE_ICONS.md` for complete icon documentation.

### 4b. Vue 3 Development

```vue
<script setup lang="ts">
import { useTheme } from '@orion-ds/vue';
import '@orion-ds/core/theme.css';

const { theme, brand, setTheme, toggleTheme } = useTheme();
</script>

<template>
  <button @click="toggleTheme">
    {{ theme === 'light' ? '🌙' : '☀️' }}
  </button>
</template>
```

## Component Generation Workflow

### Step 1: Read Component Definition
Always check `tokens/components.json` for:
- Available variants (e.g., button: primary, secondary, ghost)
- Required tokens (e.g., `--interactive-primary`, `--radius-control`)
- HTML structure and modifiers

### Step 2: Use Standard HTML Patterns (Vanilla)
Example button:
```html
<button class="btn btn-primary">Label</button>
<button class="btn btn-secondary btn-icon-only"><i data-lucide="search" class="icon"></i></button>
```

Example card:
```html
<div class="card">
  <div class="card-header">Title</div>
  <div class="card-body">Content</div>
</div>
```

### Step 3: Use TypeScript Components (React/Vue)

**React:**
```tsx
<Button variant="primary">Label</Button>
<Button variant="secondary" iconOnly icon={<SearchIcon />} />
```

**Vue:**
```vue
<Button variant="primary">Label</Button>
<Button variant="secondary" :iconOnly="true" :icon="SearchIcon" />
```

### Step 4: External Reference Protocol (Critical)

When user provides external references (screenshots, website URLs, brand names like "Revolut", "Linear"):

1. **Inventory**: List every visual element from the reference
2. **Cross-reference**: Match each element to `tokens/components.json`
3. **Flag orphans**: If element doesn't exist, ask user for guidance:
   - (A) Extend the library
   - (B) Use existing alternatives
   - (C) Proceed without those elements
4. **Generate mapping table** before coding:
   ```markdown
   | External Element | Orion Component | Token/Class |
   |------------------|-----------------|-------------|
   | Hero gradient    | (orphan)        | Request extension |
   | Nav bar          | .navbar         | Standard |
   | CTA button       | .btn-primary    | --interactive-primary |
   ```

**NEVER invent styles** for external elements. Use utility classes or request library extension.

## File Structure

### Core Files
- `theme.css` - Main CSS file with all tokens + component styles (DO NOT edit generated sections)
- `index.html` - Landing page
- `library.html` - Component library with live examples
- `components.html` - Component documentation
- `tokens.html` - Token reference
- `rules.html` - Rendered governance rules
- `rules.md` - The Constitution (governance document)
- `AGENTS.md` - Quick reference for AI agents
- `TYPESCRIPT_SETUP.md` - TypeScript migration guide (NEW)

### TypeScript Packages (NEW)
```
packages/
├── core/           # @orion/core - Design tokens
├── react/          # @orion/react - React components
└── vue/            # @orion/vue - Vue composables
```

### Testing Projects
- `testing-projects/` - Brand-specific demo implementations
  - `aura-finance/` - Finance app demo
  - `nexus-health/` - Health tracking demo
  - `premium-finance/` - Premium finance demo
  - `student-platform/` - Student platform demo
  - `red-demo/` - Red brand demo

### Assets
- `assets/docs.css` - Documentation page styles
- `assets/landing.css` - Landing page specific styles
- `assets/docs-shell.js` - Navigation shell for docs
- `brands/` - Brand-specific CSS overrides (e.g., `red.css`)

## Common Token Reference

### Surfaces (Backgrounds)
- `--surface-base` - Main background (white in light, near-black in dark)
- `--surface-subtle` - Subtle background (gray-50 in light, gray-900 in dark)
- `--surface-layer` - Layered surface (gray-100 in light, gray-800 in dark)
- `--surface-sunken` - Recessed surface (for sidebars)

### Text
- `--text-primary` - Main content text
- `--text-secondary` - Descriptions, labels
- `--text-tertiary` - Captions, hints, disabled
- `--text-brand` - Brand accent text

### Interactive
- `--interactive-primary` - Primary button background
- `--interactive-primary-hover` - Primary button hover state
- `--interactive-primary-text` - Primary button text color
- `--interactive-secondary` - Secondary button background

### Spacing (base unit: 4px)
- `--spacing-1` (4px), `--spacing-2` (8px), `--spacing-3` (12px)
- `--spacing-4` (16px) - Standard component padding
- `--spacing-6` (24px), `--spacing-8` (32px)
- `--spacing-16` (64px), `--spacing-32` (128px)

### Radius
- `--radius-sm` (6px) - Small elements
- `--radius-control` (12px) - The master knob (brand override possible)
- `--radius-container` (16px) - Larger containers
- `--radius-full` (9999px) - Pills/circles

## Tri-Modal Operating System

The system supports three distinct contexts (not yet fully implemented in codebase):

| Mode | Philosophy | Typography | Spacing | Use Case |
|------|-----------|------------|---------|----------|
| **Display** | Atmospheric & Narrative | 80px+ titles | Expansive (64px+) | Marketing pages |
| **Product** | Dense & Functional | 13-14px body | Compact (16px) | SaaS dashboards |
| **App** | Fluid & Tactile | 16px+ body | Adaptable | Touch interfaces |

## Split Layout Contract

For dashboards and split-view layouts:

1. **Unified Margin**: Use `--spacing-4` (16px) margin on all sides
2. **Height Calculation**: `height: calc(100vh - (var(--spacing-4) * 2))`
3. **Zero-Margin Mandate**: Reset internal margins when using padded shells

Example:
```html
<div class="app-shell" style="padding: var(--spacing-4); gap: var(--spacing-4);">
  <aside class="sidebar" style="height: calc(100vh - 32px); margin: 0;"></aside>
  <main class="content" style="height: calc(100vh - 32px);"></main>
</div>
```

## Icon System

Default: **Lucide Icons** via CDN (`https://unpkg.com/lucide@latest`)

Usage:
```html
<i data-lucide="icon-name" class="icon"></i>
<i data-lucide="check-circle" class="icon icon-lg"></i>
```

Initialize after DOM load: `lucide.createIcons();`

## Accessibility Requirements

- All interactive elements must have visible focus states (`:focus-visible`)
- Use proper ARIA attributes (`aria-label`, `aria-pressed`, `role`, `aria-live`)
- Support `prefers-reduced-motion` for animations
- Screen reader utilities: `.sr-only`, `.skip-link`

## Validation & CI/CD

The `validate-tokens.js` script enforces token compliance:
- Detects hardcoded HEX colors, pixel values, font families
- Skips `:root` blocks (where primitives are defined)
- Calculates compliance score
- Exit code 1 if violations found (CI/CD integration ready)

### TypeScript Validation (NEW)

```bash
npm run type-check  # Ensures all TypeScript is valid
npm run validate    # Ensures CSS uses tokens correctly
npm run audit       # Runs both checks
```

## Key Principles for AI Agents

1. **Check system status**: Always read `tokens/ai-manifest.json` FIRST to understand system capabilities
2. **Read documentation**: Then read `AGENTS.md`, `tokens/index.json`, and `tokens/components.json`
3. **TypeScript first**: When available, use TypeScript packages (`@orion/react`, `@orion/vue`) over vanilla HTML
4. **Type safety**: Always import and use TypeScript types from `@orion/core`
5. **Validate after**: Run `npm run validate` and `npm run type-check` after making changes
6. **Brand awareness**: Check `data-brand` attribute and use appropriate tokens
7. **No innovation**: Don't invent components or tokens - use what exists or ask
8. **Semantic intent**: Use semantic tokens that describe purpose, not appearance
9. **External references**: Always run Mapping Protocol when given screenshots or brand references
10. **Generate types**: Run `npm run build:tokens` after editing JSON token files
11. **Update docs after changes**: Follow the Documentation Update Protocol below

## Documentation Update Protocol

When making changes to the codebase, **always update the relevant documentation**. This ensures AI agents and developers have accurate, up-to-date information.

### Which Files to Update

| Change Type | Files to Update |
|-------------|-----------------|
| **Component API change** | `CLAUDE.md`, `packages/react/README.md`, component's JSDoc |
| **New component** | `CLAUDE.md`, `packages/react/README.md`, `tokens/components.json` |
| **Token change** | `CLAUDE.md`, `tokens/*.json`, regenerate types |
| **ThemeProvider change** | `CLAUDE.md` (section 3), `packages/react/README.md` |
| **Build/CLI change** | `CLAUDE.md` (Development Commands section) |
| **New package feature** | Package `README.md`, `CLAUDE.md` if affects usage patterns |
| **Breaking change** | All docs + add to CHANGELOG if exists |

### Documentation Checklist

After any significant change, verify:

1. **CLAUDE.md** - Is the relevant section updated?
2. **Package README** - Does the Quick Start still work?
3. **Code examples** - Do all code snippets reflect current API?
4. **JSDoc comments** - Are function/component docs accurate?
5. **Type definitions** - Do TypeScript types match implementation?

### Example: Publishing a New Version

```bash
# 1. Make your code changes
# 2. Update documentation
# 3. Run validation
npm run type-check
npm run validate

# 4. Bump version in package.json
# 5. Build and publish
cd packages/react
npm run build
npm publish --access public

# 6. Update CLAUDE.md if behavior changed
```

### Self-Documenting Commits

When committing changes that affect documentation:

```bash
git commit -m "feat(react): auto-load fonts in ThemeProvider

- ThemeProvider now includes FontLoader by default
- Added disableAutoFontLoading prop for opt-out
- Updated CLAUDE.md and README with new behavior"
```

## Common Pitfalls

### Vanilla CSS
- Don't use `#000000` or `#ffffff` - use `--text-primary` and `--surface-base`
- Don't hardcode `16px` padding - use `var(--spacing-4)`
- Don't add `font-family: Inter` - it's already set via `--font-sans`
- Don't create `<div class="custom-card-v2">` - use standard `.card` from components.json
- Don't assume brand colors - check `data-brand` and reference `tokens/brands.json`

### TypeScript (NEW)
- Don't use `any` type - always use proper types from `@orion-ds/core`
- Don't skip type generation - run `npm run build:tokens` after editing JSON
- Don't bypass type checking - ensure `npm run type-check` passes
- Don't hardcode token paths - use `TokenPath` and `SemanticTokenPath` types
- Don't forget to import CSS - use `import '@orion-ds/react/styles.css'` (recommended) or separate imports

## Documentation Pages

- `index.html` - Landing page with hero, Chain of Truth explanation, tri-modal overview
- `library.html` - Live component library with code snippets
- `components.html` - Component documentation
- `tokens.html` - Token reference with visual examples
- `rules.html` - Governance rules (rendered from rules.md)
- `examples.html` - Real-world implementation examples
- `TYPESCRIPT_SETUP.md` - Complete TypeScript setup guide (NEW)

## Theme Switching

Themes are controlled via `data-theme` attribute on `<html>`:
```html
<html data-theme="dark" data-brand="orion">
<html data-theme="light" data-brand="red">
```

JavaScript for theme toggle:
```javascript
document.documentElement.dataset.theme = 'dark'; // or 'light'
document.documentElement.dataset.brand = 'red'; // or 'orion'
```

TypeScript with hooks (NEW):
```typescript
// React
import { useTheme } from '@orion/react';
const { setTheme, setBrand } = useTheme();
setTheme('dark');
setBrand('red');
```

```typescript
// Vue
import { useTheme } from '@orion/vue';
const { setTheme, setBrand } = useTheme();
setTheme('dark');
setBrand('red');
```

### Theme Switcher Component (Interactive Testing)

All testing projects include an **interactive Theme Switcher** for quick testing of themes, brands, and modes:

**Location**: Fixed floating panel in bottom-right corner

**Features**:
- 🌙 **Theme Toggle**: Switch between light and dark themes
- 🎨 **Brand Selector**: Choose between orion, red, deepblue, orange
- 📱 **Mode Switcher**: Switch between display, product, app modes
- 💾 **Persistence**: All selections saved to localStorage
- 📱 **Responsive**: Stacks vertically on mobile

**How to Use**:
1. Open any testing project (e.g., `http://localhost:3000/testing-projects/tri-modal-showcase/`)
2. Look for the floating control panel in bottom-right
3. Change theme, brand, or mode
4. Observe CSS updates in real-time
5. Close and reopen page — preferences persist

**Files**:
- `assets/theme-switcher.js` - Main logic
- `assets/theme-switcher.css` - Styling
- `THEME_SWITCHER.md` - Complete documentation

**Programmatic Control** (in browser console):
```javascript
// Access current settings
console.log(document.documentElement.dataset.theme);   // 'light' or 'dark'
console.log(document.documentElement.dataset.brand);   // 'orion', 'red', 'deepblue', 'orange'
console.log(document.documentElement.dataset.mode);    // 'display', 'product', 'app'

// Check localStorage
localStorage.getItem('orion-theme');
localStorage.getItem('orion-brand');
localStorage.getItem('orion-mode');
```
