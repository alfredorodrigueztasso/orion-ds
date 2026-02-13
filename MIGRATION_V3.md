# Migration Guide: @orion-ds/react v2 → v3

## Breaking Change: @orion-ds/core Merged into @orion-ds/react

Starting with v3.0.0, all functionality from `@orion-ds/core` is included in `@orion-ds/react`. You no longer need to install Core separately.

## Installation Changes

### Before (v2.x)

```bash
npm install @orion-ds/core @orion-ds/react
# or
pnpm add @orion-ds/core @orion-ds/react
# or
yarn add @orion-ds/core @orion-ds/react
```

### After (v3.x)

```bash
# First, uninstall Core
npm uninstall @orion-ds/core

# Install React v3
npm install @orion-ds/react@^3.0.0
```

## CSS Import Changes

### Before (v2.x) - Two imports required

```tsx
// You needed two separate imports
import '@orion-ds/core/theme.css';        // Design tokens
import '@orion-ds/react/dist/react.css';  // Component styles

import { Button } from '@orion-ds/react';
```

### After (v3.x) - Single import

```tsx
// Now just one import that includes everything
import '@orion-ds/react/styles.css';

import { Button } from '@orion-ds/react';
```

## Type Imports Changes

### Before (v2.x) - Types from Core

```typescript
import type { Theme, Brand } from '@orion-ds/core';
import { Button } from '@orion-ds/react';

function MyComponent() {
  const theme: Theme = 'light';
  const brand: Brand = 'orion';
  return <Button>Click me</Button>;
}
```

### After (v3.x) - Types from React

```typescript
import type { Theme, Brand } from '@orion-ds/react';
import { Button } from '@orion-ds/react';

function MyComponent() {
  const theme: Theme = 'light';
  const brand: Brand = 'orion';
  return <Button>Click me</Button>;
}
```

## Token Utilities Changes

All token utilities are now exported from `@orion-ds/react`:

### Before (v2.x)

```typescript
import { spacing, primitives, getToken, getBrand } from '@orion-ds/core';

const size = spacing[4];  // "16px"
const color = getToken('color.brand.orion.500');  // "#1B5BFF"
```

### After (v3.x)

```typescript
import { spacing, primitives, getToken, getBrand } from '@orion-ds/react';

const size = spacing[4];  // "16px"
const color = getToken('color.brand.orion.500');  // "#1B5BFF"
```

## Direct Token Access

For advanced use cases, token utilities are still available via subpath:

### Before (v2.x)

```typescript
import { primitives } from '@orion-ds/core/tokens';
```

### After (v3.x)

```typescript
import { primitives } from '@orion-ds/react/tokens';
```

## Full Migration Example

Here's a complete before and after example:

### Before (v2.x)

```tsx
// package.json
{
  "dependencies": {
    "@orion-ds/core": "^1.2.0",
    "@orion-ds/react": "^2.0.6",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  }
}

// App.tsx
import '@orion-ds/core/theme.css';
import '@orion-ds/react/dist/react.css';

import type { Theme, Brand } from '@orion-ds/core';
import { Button, Card, ThemeProvider, useTheme } from '@orion-ds/react';
import { spacing } from '@orion-ds/core';

export default function App() {
  return (
    <ThemeProvider>
      <MyApp />
    </ThemeProvider>
  );
}

function MyApp() {
  const { theme } = useTheme();
  const padding = spacing[4];

  return (
    <Card>
      <Button>Click me</Button>
    </Card>
  );
}
```

### After (v3.x)

```tsx
// package.json
{
  "dependencies": {
    "@orion-ds/react": "^3.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  }
}

// App.tsx
import '@orion-ds/react/styles.css';  // Single import!

import type { Theme, Brand } from '@orion-ds/react';
import { Button, Card, ThemeProvider, useTheme, spacing } from '@orion-ds/react';

export default function App() {
  return (
    <ThemeProvider>
      <MyApp />
    </ThemeProvider>
  );
}

function MyApp() {
  const { theme } = useTheme();
  const padding = spacing[4];

  return (
    <Card>
      <Button>Click me</Button>
    </Card>
  );
}
```

## CLI Integration

If you're using `@orion-ds/cli` to scaffold projects, it automatically uses `@orion-ds/react@^3.0.0`:

```bash
npx @orion-ds/create my-app --brand=orion --mode=product
```

The generated `package.json` will include:

```json
{
  "dependencies": {
    "@orion-ds/react": "^3.0.0"
  }
}
```

## Validation

The `@orion-ds/validate` tool automatically checks for the correct CSS imports:

```bash
npx @orion-ds/validate src/
```

It will suggest:
- ✅ `import '@orion-ds/react/styles.css'` (correct)
- ❌ Old patterns like `@orion-ds/core/theme.css` (outdated)

## Troubleshooting

### Issue: Import fails with "Cannot find module '@orion-ds/core'"

**Solution**: You uninstalled `@orion-ds/core`, but your code still imports from it. Update all imports to use `@orion-ds/react` instead.

```diff
- import type { Theme } from '@orion-ds/core';
+ import type { Theme } from '@orion-ds/react';

- import { spacing } from '@orion-ds/core';
+ import { spacing } from '@orion-ds/react';
```

### Issue: CSS not loading / unstyled components

**Solution**: Make sure you have the single CSS import at the root of your app:

```tsx
import '@orion-ds/react/styles.css';  // Must be imported

import { ThemeProvider } from '@orion-ds/react';

export default function App() {
  return (
    <ThemeProvider>
      <YourComponents />
    </ThemeProvider>
  );
}
```

### Issue: TypeScript errors about missing types

**Solution**: Re-export statements may have cached types. Clear your node_modules and reinstall:

```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

## Summary of Changes

| Aspect | v2.x | v3.x |
|--------|------|------|
| **Installation** | 2 packages (`@orion-ds/core` + `@orion-ds/react`) | 1 package (`@orion-ds/react`) |
| **CSS Imports** | 2 imports (core + react) | 1 import (`styles.css`) |
| **Type Imports** | `from '@orion-ds/core'` | `from '@orion-ds/react'` |
| **Token Utils** | `from '@orion-ds/core'` | `from '@orion-ds/react'` |
| **Package Size** | Smaller React, separate Core | Slightly larger React (1.7% increase) |
| **Maintenance** | 2 packages to maintain | 1 package to maintain |

## Need Help?

- **Read the docs**: See `/packages/react/README.md` for complete documentation
- **Report issues**: https://github.com/orion-ds/orion/issues
- **Ask questions**: https://github.com/orion-ds/orion/discussions

---

**Last updated**: 2026-02-13
**Migration version**: v3.0.0
