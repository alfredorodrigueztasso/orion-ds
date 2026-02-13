# Getting Started with Orion Design System

⏱️ **Setup time: 2 minutes**

## Quick Start

### Option 1: Create New Project (Recommended)
```bash
npx @orion-ds/create my-app --brand=orion
cd my-app && npm run dev
```

### Option 2: Add to Existing Project
```bash
# Install CLI
npx @orion-ds/cli init

# Add components (copies source code to your project)
npx @orion-ds/cli add button card modal

# Or install as npm package
npm install @orion-ds/react @orion-ds/core
```

### Option 3: Use in Your Code
```tsx
import { ThemeProvider, Button } from '@orion-ds/react';
import '@orion-ds/react/styles.css';

function App() {
  return (
    <ThemeProvider>
      <Button variant="primary">Click me</Button>
    </ThemeProvider>
  );
}
```

## What is Orion?

AI-first design system with **zero hardcoded values** (Chain of Truth principle):

- 📦 **102 registry items** (51 components, 41 sections, 10 templates)
- 🎨 **5 brands** (orion, red, deepblue, orange, lemon) + unlimited custom brands
- 🌓 **Dark/light themes** built-in
- 🤖 **AI-native** (MCP server for Claude, Cursor, Cline)
- ✅ **99.3% validation compliance** (auto-enforced via AI-first rules)

## Next Steps

Choose your path:

| If you want to... | Go to... |
|-------------------|----------|
| Browse all components | [Component Library](./library.html) |
| Understand architecture | [CLAUDE.md](./CLAUDE.md#core-architecture) |
| Add components via CLI | [CLI Guide](./packages/cli/README.md) |
| Integrate with AI tools | [MCP Setup](./packages/mcp/README.md) |
| Validate code compliance | [Validation Guide](#validation) |
| Contribute | [CONTRIBUTING.md](./CONTRIBUTING.md) |

## Common Tasks

```tsx
// Change theme
import { useThemeContext } from '@orion-ds/react';

function ThemeSwitcher() {
  const { theme, setTheme } = useThemeContext();

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}
```

```tsx
// Change brand
function BrandSwitcher() {
  const { brand, setBrand } = useThemeContext();

  return (
    <select value={brand} onChange={(e) => setBrand(e.target.value)}>
      <option value="orion">Orion (Blue)</option>
      <option value="red">Red</option>
      <option value="deepblue">Deep Blue</option>
      <option value="orange">Orange</option>
      <option value="lemon">Lemon</option>
    </select>
  );
}
```

```bash
# Validate code compliance (checks for hardcoded values)
npx @orion-ds/validate src/

# Build all packages
npm run build:packages

# Run component validation (AI-first rules)
node scripts/validate-components.js

# Generate registry (for CLI/MCP consumption)
npm run build:registry
```

## Architecture

Orion uses a **3-layer Chain of Truth** to eliminate UI hallucination:

1. **Primitives (Layer 1)**: Raw values in `tokens/primary.json`
   - Example: `"color": { "brand": { "orion": { "500": "#1B5BFF" } } }`

2. **Semantics (Layer 2)**: Intent-based mappings in `tokens/light.json`/`tokens/dark.json`
   - Example: `"interactive": { "primary": { "default": "{color.brand.500}" } }`

3. **Components (Layer 3)**: Blind consumers via CSS variables
   - Example: `background: var(--interactive-primary);`

**Rule:** Components NEVER hardcode values - only use semantic tokens like `var(--surface-base)`, `var(--text-primary)`, `var(--interactive-primary)`.

### Why This Matters

Traditional design systems allow components to hardcode values like `#1B5BFF` or `16px`. This creates "visual drift" when brands change.

Orion enforces **100% token usage** via automated validation:
- ✅ `background: var(--interactive-primary)` → **PASS**
- ❌ `background: #1B5BFF` → **FAIL** (hardcoded color)

This makes the system **AI-friendly**: when AI agents generate code, the validation catches mistakes automatically.

## Validation

Orion includes automated validation to catch hardcoded values:

```bash
# Validate CSS/TypeScript files
npx @orion-ds/validate src/

# Component-specific validation (React)
node scripts/validate-components.js

# Token usage validation (CSS)
npm run validate
```

**What Gets Validated:**
- ❌ Hardcoded HEX colors (`#FFFFFF`, `rgb(255,255,255)`)
- ❌ Hardcoded pixel values (`16px`, `24px` - except `0px`, `1px`)
- ❌ Hardcoded font families (`font-family: Inter`)
- ❌ Hardcoded z-index values (`z-index: 100`)
- ❌ Hardcoded transitions (`transition: 200ms ease`)
- ❌ Brand-specific component props (brand should be global)

**Acceptable Exceptions:**
- `0px`, `1px` (atomic values)
- `9999px` (pill buttons)
- Inline styles for dynamic values (`style={{ width: \`\${progress}%\` }}`)
- Negative z-index for background layers (`z-index: -1`)

## Why AI-First?

### Anti-Hallucination Validation
Catches when AI generates hardcoded values instead of using tokens:
```tsx
// ❌ AI mistake (validation catches this)
<div style={{ backgroundColor: '#1B5BFF' }}>

// ✅ Correct (passes validation)
<div style={{ backgroundColor: 'var(--interactive-primary)' }}>
```

### MCP Server
Gives AI agents live access to component registry:
```bash
# Install MCP server
npx @orion-ds/mcp

# AI can now:
# - List all 102 components
# - Get component source code
# - Search by keyword
# - Validate compliance
```

### No Brand Props
Brand is **global** (set on `<html>`), preventing common AI mistake:
```tsx
// ❌ AI often does this (won't work)
<Button brand="red" />

// ✅ Correct (brand is global)
<ThemeProvider>  {/* Sets data-brand on <html> */}
  <Button />     {/* Inherits brand via CSS */}
</ThemeProvider>
```

### TypeScript-First
Full type safety with autocomplete:
```tsx
import { primitives, type Brand, type Theme } from '@orion-ds/core';

// ✅ Autocomplete for token paths
const color = primitives.color.brand.orion[500];

// ✅ Type-safe brand/theme values
const brand: Brand = 'orion';  // 'orion' | 'red' | 'deepblue' | 'orange' | 'lemon'
const theme: Theme = 'dark';   // 'light' | 'dark'
```

## Multi-Brand Support

Orion supports **unlimited brands** via `data-brand` attribute:

```tsx
// Switch brand dynamically
<html data-brand="red">
```

**Built-in Brands:**

| Brand | Accent | Radius | Typography |
|-------|--------|--------|------------|
| **orion** (default) | Blue (#1B5BFF) | 12px | Libre Baskerville + Inter |
| **red** | Red (#D7282F) | 9999px (pill) | Poppins + Inter |
| **deepblue** | Deep Blue (#006FBA) | 12px | Work Sans |
| **orange** | Red-Orange (#F15D22) | 9999px (pill) | DM Sans + Inter |
| **lemon** | Lime Green (#C0DC00) | 16px | Anton + Work Sans |

**Custom Brands:** Add to `tokens/brands.json` - see [CLAUDE.md](./CLAUDE.md#multi-brand-architecture) for instructions.

## Tri-Modal System

Orion adapts visual language based on context (Display, Product, App mode):

| Mode | Philosophy | Visual Style | Use Case |
|------|-----------|--------------|----------|
| **Display** | Atmospheric & Narrative | Glassmorphism, generous shadows, `-4px` hover lift | Marketing pages, landing pages |
| **Product** | Geometric Precision (Linear-style) | Flat backgrounds, minimal shadows, `0px` hover lift | Dashboards, SaaS apps |
| **App** | Tactile Elevation (Material 3-style) | Native shadows, `-2px` hover lift | Mobile apps, touch interfaces |

```tsx
// Switch mode dynamically
<html data-mode="product">
```

See [VISUAL_GUIDELINES.md](./VISUAL_GUIDELINES.md) for complete mode-aware styling guide.

## Font Loading

**For React users:** Fonts load **automatically** via `ThemeProvider` (zero config):

```tsx
<ThemeProvider>  {/* Loads Google Fonts automatically */}
  <App />
</ThemeProvider>
```

**To disable auto-loading** (if managing fonts manually):
```tsx
<ThemeProvider disableAutoFontLoading>
  <App />
</ThemeProvider>
```

**For vanilla HTML:** Add Google Fonts manually:
```html
<link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=DM+Sans:wght@400;500;700&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
```

## Need Help?

- 📖 **Full Documentation**: [DOCUMENTATION-INDEX.md](./DOCUMENTATION-INDEX.md)
- 🤖 **AI Guide**: [CLAUDE.md](./CLAUDE.md) (for Claude Code users)
- 💬 **GitHub Discussions**: [github.com/your-org/orion-ds/discussions](https://github.com)
- 🐛 **Report Issues**: [github.com/your-org/orion-ds/issues](https://github.com)

## Quick Links

- [Component Library](./library.html) - Browse all 102 items
- [Token Reference](./tokens.html) - All design tokens
- [CLI Documentation](./packages/cli/README.md) - Add components
- [MCP Documentation](./packages/mcp/README.md) - AI integration
- [Validation Guide](./packages/validate/README.md) - Code compliance

---

**Built with ❤️ by the Orion team. Powered by the Chain of Truth.**
