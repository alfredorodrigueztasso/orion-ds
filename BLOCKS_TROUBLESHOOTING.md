# @orion-ds/blocks - Troubleshooting & Known Issues

## 🐛 CRITICAL ISSUES

### Issue #1: TypeScript Type-Check Fails ❌ BLOCKING
**Status**: CRITICAL | **Impact**: CI/CD blocker | **Fix Time**: 5 min

#### Symptom
```bash
npm run type-check --workspace=@orion-ds/blocks
# Error TS7016: Could not find a declaration file for module '@orion-ds/react'
# Appears in ~20+ template files
```

#### Root Cause
`@orion-ds/react` package.json doesn't have `"types"` field in exports:
```json
// ❌ WRONG - packages/react/package.json
{
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.cjs"
      // Missing "types" field!
    }
  }
}
```

#### Solution
**Step 1**: Edit `packages/react/package.json`:
```json
{
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",      // ← ADD THIS LINE
      "import": "./dist/index.mjs",
      "require": "./dist/index.cjs"
    },
    "./sections": {
      "types": "./dist/sections/index.d.ts", // ← ADD THIS
      "import": "./dist/sections/index.mjs",
      "require": "./dist/sections/index.cjs"
    }
    // ... other exports also need "types"
  }
}
```

**Step 2**: Rebuild packages:
```bash
npm run build:packages
```

**Step 3**: Verify:
```bash
npm run type-check --workspace=@orion-ds/blocks
# Should now pass ✅
```

#### Why This Happens
TypeScript needs `.d.ts` files to resolve types. Without `"types"` field, TypeScript doesn't know where to look for type definitions.

#### Impact
- ✅ Fixes `npm run type-check`
- ✅ Enables IDE autocomplete for blocks imports
- ✅ Unblocks CI/CD pipeline

---

### Issue #2: No Unit Tests ❌ ZERO COVERAGE
**Status**: HIGH | **Impact**: Risk of regressions | **Fix Time**: 6-8 hours

#### Symptom
```bash
find packages/blocks -name "*.test.tsx" -o -name "*.spec.tsx"
# (no output - 0 test files)
```

#### Why This Matters
- No regression detection
- No accessibility validation
- No props combination testing
- No responsive design testing
- **Risk**: Breaking changes slip into production

#### Solution

**Step 1**: Create test setup (if not exists):
```bash
npm install -D vitest @testing-library/react jsdom
```

**Step 2**: Add vitest.config.ts to packages/blocks:
```typescript
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
  },
});
```

**Step 3**: Create test file for Hero (example):
```typescript
// src/sections/Hero/Hero.test.tsx
import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';
import { describe, it, expect } from 'vitest';

describe('Hero', () => {
  it('renders title', () => {
    render(<Hero title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders description', () => {
    render(<Hero title="Title" description="Test desc" />);
    expect(screen.getByText('Test desc')).toBeInTheDocument();
  });

  it('renders primary action button', () => {
    const button = <button>Get Started</button>;
    render(<Hero title="Title" primaryAction={button} />);
    expect(screen.getByRole('button', { name: /get started/i })).toBeInTheDocument();
  });

  it('supports size prop', () => {
    const { container } = render(<Hero title="Title" size="lg" />);
    expect(container.querySelector('[class*=size]')).toBeInTheDocument();
  });
});
```

**Step 4**: Add to package.json:
```json
{
  "scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage"
  }
}
```

**Step 5**: Add 15 tests (priority):
- [ ] Hero (3 tests)
- [ ] Features (3 tests)
- [ ] Pricing (2 tests)
- [ ] LandingPageTemplate (2 tests)
- [ ] DashboardTemplate (2 tests)
- [ ] Chat section (1 test)
- [ ] Footer (1 test)
- [ ] Rest (10+ more for full coverage)

#### Expected Time
- Setup: 30 min
- 15 tests: 2 hours
- Setup in CI/CD: 1 hour
- **Total**: 3.5 hours

#### Benefits
✅ Catch regressions automatically
✅ Document expected behavior
✅ Enable confident refactoring
✅ Improve code quality

---

### Issue #3: CSS Not Optimized ⚠️ 117 KB MONOLITH
**Status**: MEDIUM | **Impact**: Larger bundle size | **Fix Time**: 20 min

#### Symptom
```bash
ls -lh packages/blocks/dist/*.css
# -rw-r--r-- 117K blocks.css ← HUGE for single file
```

All 21 sections + 12 templates CSS in one file, even if you only use Hero.

#### Root Cause
Vite config has `cssCodeSplit: false`:
```typescript
// ❌ WRONG
export default defineConfig({
  build: {
    cssCodeSplit: false,  // All CSS in one file!
  }
});
```

#### Solution
**Option A: Enable CSS Code-Splitting (Recommended)**
```typescript
// ✅ CORRECT - vite.config.ts
export default defineConfig({
  build: {
    lib: { ... },
    cssCodeSplit: true,  // Split CSS per entry point
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (ext === 'css') {
            return `styles/[name]-[hash].css`;  // Output to styles/ folder
          }
          return `[name]-[hash][extname]`;
        }
      }
    }
  }
});
```

**Option B: Tree-shake CSS with PurgeCSS (Alternative)**
```bash
npm install -D purgecss
```

Then create script:
```typescript
// scripts/purge-css.ts
import purgecss from 'purgecss';
// Only works if using Tailwind/utility classes (not applicable here)
```

#### Impact
**Before**: 117 KB CSS (~20 KB gzipped)
**After**:
- Just Hero: ~15 KB CSS (~3 KB gzipped)
- Hero + Features + Pricing: ~35 KB CSS (~7 KB gzipped)
- Full package: Still ~117 KB (for reference)

**Savings**: -30 KB gzipped per import (33% reduction)

---

## ⚠️ MEDIUM-PRIORITY ISSUES

### Issue #4: README.md Missing
**Status**: MEDIUM | **Impact**: No package documentation | **Fix Time**: 1 hour

#### What's Missing
```
packages/blocks/
├─ src/ ✓
├─ dist/ ✓
├─ package.json ✓
├─ tsconfig.json ✓
├─ vite.config.ts ✓
└─ README.md ❌ MISSING!
```

#### Solution
Create `packages/blocks/README.md`:
```markdown
# @orion-ds/blocks

Premium sections and full-page templates for Orion Design System.

## Installation

\`\`\`bash
npm install @orion-ds/react @orion-ds/blocks lucide-react
\`\`\`

## Quick Start

### Using Templates
\`\`\`tsx
import { LandingPageTemplate } from '@orion-ds/blocks';
import { Hero, Features, Footer } from '@orion-ds/blocks/sections';

export default function Home() {
  return (
    <LandingPageTemplate>
      <Hero title="Welcome" />
      <Features ... />
      <Footer ... />
    </LandingPageTemplate>
  );
}
\`\`\`

### Using Individual Sections
\`\`\`tsx
import { Hero, Features, Pricing } from '@orion-ds/blocks/sections';

function MyPage() {
  return (
    <>
      <Hero ... />
      <Features ... />
      <Pricing ... />
    </>
  );
}
\`\`\`

## Sections (21)

### Marketing
- Hero - Main banner
- Features - Feature grid
- Pricing - Pricing table
- Footer - Page footer
- (+ 12 more)

### App/SaaS
- DashboardTemplate - Full dashboard
- ChatPageTemplate - Chat interface
- (+ 6 more)

## Templates (12)

### Marketing (4)
- LandingPageTemplate
- PricingPageTemplate
- AboutPageTemplate
- ContactPageTemplate

### App (8)
- DashboardTemplate
- ChatPageTemplate
- AgentEditor
- (+ 5 more)

## CSS

\`\`\`tsx
import '@orion-ds/blocks/styles.css';  // All CSS (117 KB)
```

---

### Issue #5: Docs-Site No Blocks Showcase
**Status**: MEDIUM | **Impact**: Users don't know about blocks | **Fix Time**: 2 hours

#### What's Missing
- No `/docs/blocks` section
- No component gallery for sections
- No template examples
- No "when to use" guide

#### Solution
Create docs pages:
```
docs-site/src/
├── app/docs/blocks/
│   ├── sections/
│   │   └── page.tsx ← Gallery of all 21 sections
│   ├── templates/
│   │   └── page.tsx ← Gallery of all 12 templates
│   └── page.tsx ← Overview
```

Each page shows:
- Live component preview
- Code example
- Props API
- Use cases

---

## 🟡 LOW-PRIORITY ISSUES

### Issue #6: No Visual Regression Tests
**Status**: LOW | **Impact**: Visual bugs not caught | **Fix Time**: 4 hours

#### Solution
Add Percy:
```bash
npm install -D @percy/cli @percy/playwright
```

Then create GitHub Action to run on PR.

---

### Issue #7: Performance Budget Not Defined
**Status**: LOW | **Impact**: No bundle size alerts | **Fix Time**: 30 min

#### Solution
Add to package.json:
```json
{
  "budgets": [
    {
      "name": "index.mjs",
      "limit": "180kb",
      "warn": "170kb"
    },
    {
      "name": "blocks.css",
      "limit": "150kb",
      "warn": "120kb"
    }
  ]
}
```

---

## ✅ COMMON ERRORS & FIXES

### Error 1: Import Error
```typescript
// ❌ WRONG
import { Hero } from '@orion-ds/blocks';
// Error: Hero is not exported from index

// ✅ CORRECT
import { Hero } from '@orion-ds/blocks/sections';
// or
import Hero from '@orion-ds/blocks/sections/Hero';
```

### Error 2: Hydration Mismatch (Next.js)
```typescript
// ❌ WRONG - No 'use client'
import { DashboardTemplate } from '@orion-ds/blocks';
const [mounted, setMounted] = useState(false);
// Hydration error!

// ✅ CORRECT - Add 'use client'
'use client';
import { DashboardTemplate } from '@orion-ds/blocks/client';
const [mounted, setMounted] = useState(false);
// Works!
```

### Error 3: Missing @orion-ds/react
```bash
# ❌ WRONG
npm install @orion-ds/blocks
# Missing peer dependency error

# ✅ CORRECT
npm install @orion-ds/react @orion-ds/blocks lucide-react
# All peer deps installed
```

### Error 4: Styles Not Loading
```typescript
// ❌ WRONG - Forgot to import CSS
import { Hero } from '@orion-ds/blocks/sections';
// Hero renders unstyled

// ✅ CORRECT - Import CSS
import '@orion-ds/blocks/styles.css';
import '@orion-ds/react/styles.css';  // or just this
import { Hero } from '@orion-ds/blocks/sections';
// Hero styled correctly
```

### Error 5: TypeScript Errors
```typescript
// ❌ WRONG - Using any type
interface Props {
  data: any; // Bad!
}

// ✅ CORRECT - Proper types
interface HeroProps {
  title: string;
  description?: string;
  primaryAction?: ReactNode;
}
```

---

## 📊 ISSUE PRIORITY MATRIX

```
           EFFORT
           Low    Med    High
IMPACT │
High   │ ❌#1   ❌#2   (none)
       │ Fix    Add
       │ types  tests
       │
Med    │ ❌#4  ⚠️#3   (none)
       │README  CSS
       │ Meta   split
       │
Low    │ ⚠️#7  ⚠️#6   (none)
       │ Budget Perf
       │       tests
```

### Priority Order
1. **IMMEDIATELY** → Issue #1 (TypeScript types)
2. **This Week** → Issue #2 (Unit tests), Issue #4 (README)
3. **Next 2 Weeks** → Issue #3 (CSS optimization), Issue #5 (Docs)
4. **Monthly** → Issue #6, #7 (Polish)

---

## 🧪 VERIFICATION CHECKLIST

After fixes, verify with:

```bash
# 1. Type-check passes
npm run type-check --workspace=@orion-ds/blocks
# ✅ No errors

# 2. Build succeeds
npm run build --workspace=@orion-ds/blocks
# ✅ dist/ generated

# 3. Tests pass
npm run test --workspace=@orion-ds/blocks
# ✅ X tests passed

# 4. Bundle size OK
npm run measure:bundle-size --workspace=@orion-ds/blocks
# ✅ Within budget

# 5. CSS loads
# Check in browser DevTools:
# - Storybook shows styled components
# - No console CSS errors
# - Dark mode works

# 6. Storybook works
npm run storybook
# ✅ All sections visible with styles
```

---

## 🚀 QUICK FIX SCRIPT

**Run this to fix the most critical issues:**

```bash
#!/bin/bash
# fix-blocks.sh

echo "🔧 Fixing @orion-ds/blocks..."

# 1. Add types to react exports
echo "1️⃣  Adding types to @orion-ds/react exports..."
# (Manually edit packages/react/package.json)

# 2. Rebuild
echo "2️⃣  Rebuilding packages..."
npm run build:packages

# 3. Verify type-check
echo "3️⃣  Verifying type-check..."
npm run type-check --workspace=@orion-ds/blocks

# 4. Check bundle size
echo "4️⃣  Checking bundle size..."
du -sh packages/blocks/dist/

echo "✅ Done! Next steps:"
echo "  - Add unit tests: 2-3 hours"
echo "  - Enable CSS code-splitting: 20 min"
echo "  - Create README.md: 1 hour"
```

---

## 📞 GETTING HELP

### For Blocks-specific Issues
1. Check this troubleshooting guide
2. Check Storybook examples: `npm run storybook`
3. Check source code: `packages/blocks/src/`
4. Run tests: `npm run test --workspace=@orion-ds/blocks`

### For React Component Issues
- Refer to `@orion-ds/react` documentation
- Check `packages/react/src/` for implementation

### For Build Issues
- Check Vite config: `packages/blocks/vite.config.ts`
- Check TypeScript config: `packages/blocks/tsconfig.json`

---

*Troubleshooting Guide v1.0*
*Last updated: 27 Feb 2026*
