# @orion-ds/blocks - Quick Reference Card

## 🎯 3-SECOND SUMMARY
- **21 Secciones** + **12 Templates** ready-to-use
- **36 KB gzipped** | Tree-shaking ✅ | Next.js compatible ✅
- **Type-check broken** ❌ | **No tests** ❌ | Production-ready ⚠️

---

## 📊 CONTENT INVENTORY

### Sections By Category
```
MARKETING (16)
├─ Hero               ← Banner principal
├─ Features           ← Grid de features
├─ Pricing            ← Tabla de planes
├─ Testimonials       ← Reviews
├─ Stats              ← Métricas
├─ FAQ                ← Preguntas
├─ Team               ← Miembros
├─ Blog               ← Feed de posts
├─ Gallery            ← Galería de imágenes
├─ Timeline           ← Historia/progreso
├─ Footer             ← Pie de página
├─ Contact            ← Formulario
├─ Newsletter         ← Suscripción
├─ LogoCloud          ← Logos de clientes
├─ Comparison         ← Tabla comparativa
├─ SocialProof        ← Testimonios cortos
└─ AppDownload        ← Botones de descarga

APP/SAAS (6)
├─ AgentFolder        ← File browser
├─ Chat               ← Chat interface
├─ SettingsLayout     ← Sidebar + contenido
├─ Stepper            ← Pasos/wizard
├─ Breadcrumbs        ← Navegación
└─ EmptyState         ← No data state
```

### Templates By Type
```
MARKETING (4)
├─ LandingPageTemplate
├─ PricingPageTemplate
├─ AboutPageTemplate
└─ ContactPageTemplate

APP (8)
├─ AgentEditor        ← Editor de prompts
├─ AgentWorkspace     ← Workspace completo
├─ ChatPageTemplate
├─ DashboardTemplate
├─ KanbanPageTemplate
├─ LoginTemplate
├─ ProfilePageTemplate
└─ SettingsTemplate
```

---

## 🔌 IMPORT PATTERNS

### Everything (kitchen sink)
```typescript
import { Hero, Features, Pricing } from '@orion-ds/blocks';
import { LandingPageTemplate } from '@orion-ds/blocks';
import '@orion-ds/blocks/styles.css';
```

### Specific sections only
```typescript
import { Hero, Features } from '@orion-ds/blocks/sections';
```

### Individual component
```typescript
import { Hero } from '@orion-ds/blocks/sections/Hero';
```

### Server Components + Next.js
```typescript
import { Hero } from '@orion-ds/blocks/client'; // has 'use client'
```

### With CSS
```typescript
// Main bundle (all CSS)
import '@orion-ds/blocks/styles.css';

// Or just @orion-ds/react baseline
import '@orion-ds/react/styles.css';
```

---

## 📦 BUNDLE SIZE IMPACT

### By Component Group
```
Just Hero                    → +15 KB  (gzipped: +4 KB)
Hero + Features + CTA        → +35 KB  (gzipped: +9 KB)
All sections (no templates)  → +100 KB (gzipped: +28 KB)
Full package + CSS          → +165 KB (gzipped: +36 KB)
```

### Total Package Dependencies
```
@orion-ds/react   (peer)      ← main dependency
├─ lucide-react              ← icons
├─ react-markdown            ← markdown support
└─ react-syntax-highlighter  ← code blocks

recharts                      ← for Stats (optional)
@dnd-kit/core                ← for drag-drop (optional)
@dnd-kit/sortable            ← for sortable lists (optional)
```

---

## ⚙️ CONFIGURATION

### Entry Points in package.json
```json
{
  "main": "./dist/index.cjs",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": { "import": "...", "require": "...", "types": "..." },
    "./client": { "import": "...", "types": "..." },
    "./sections": { "import": "...", "types": "..." },
    "./sections/*": { "import": "...", "types": "..." },
    "./templates": { "import": "...", "types": "..." },
    "./templates/*": { "import": "...", "types": "..." },
    "./styles.css": "./dist/blocks.css"
  }
}
```

### Vite Build Config Highlights
```typescript
export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es', 'cjs'], // Dual build
    },
    cssCodeSplit: false, // Single CSS file (Issue: not optimized)
    rollupOptions: {
      external: [
        'react', 'react-dom',
        '@orion-ds/react', '@orion-ds/react/sections',
        'lucide-react', 'recharts', '@dnd-kit/*'
      ]
    }
  }
});
```

---

## 🚦 STATUS INDICATORS

### Green (Good)
- ✅ Build successful (Vite)
- ✅ Tree-shaking enabled
- ✅ SSR-safe patterns
- ✅ AI-first compliant (no hardcoded values)
- ✅ Next.js compatible
- ✅ TypeScript types generated
- ✅ Storybook stories complete
- ✅ Responsive design built-in

### Yellow (Warning)
- ⚠️ CSS not modular (117 KB single file)
- ⚠️ No tests (0 coverage)
- ⚠️ Type-check fails
- ⚠️ README missing

### Red (Critical)
- ❌ TypeScript declarations missing (blocks type-check)

---

## 🔧 QUICK FIXES

### Issue #1: Type-check Fails
**Error**: `TS7016: Could not find a declaration file for module '@orion-ds/react'`

**Fix**:
```bash
# In packages/react/package.json, add 'types' field:
{
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",  // ← ADD THIS
      "import": "...",
      "require": "..."
    }
  }
}

# Then rebuild
npm run build:packages
```

**Time**: 5 minutes

---

### Issue #2: No Unit Tests
**Current**: 0 test files

**Quick Add** (Recommended):
```bash
# Add 3 critical tests
npm run test -- Hero.test.tsx
npm run test -- Features.test.tsx
npm run test -- LandingPageTemplate.test.tsx

# Add to CI/CD
npm test -- --coverage
```

**Time**: 2 hours for 15 tests

---

### Issue #3: CSS Bundle Not Optimized
**Current**: 117 KB single file (all sections + templates)

**Fix**:
```typescript
// In vite.config.ts
export default defineConfig({
  build: {
    cssCodeSplit: true, // Enable per-entry CSS
    rollupOptions: {
      output: {
        assetFileNames: 'styles/[name]-[hash].css'
      }
    }
  }
});
```

**Time**: 15 minutes
**Benefit**: Save ~30 KB gzipped

---

## 🎨 COMPONENT SHOWCASE

### Hero - Most Complex
```tsx
import { Hero } from '@orion-ds/blocks/sections';

<Hero
  badge={<Badge>New Release</Badge>}
  title={<>Build <Hero.Highlight>faster</Hero.Highlight></>}
  description="The AI-first design system"
  primaryAction={<Button>Get Started</Button>}
  media={<img src="..." />}
  align="center"
/>
```

### Features - Most Used
```tsx
import { Features } from '@orion-ds/blocks/sections';

<Features
  title="Our Features"
  description="Everything you need"
  features={[
    { title: 'Fast', description: '...', icon: <Zap /> },
    { title: 'Secure', description: '...', icon: <Lock /> },
  ]}
/>
```

### LandingPageTemplate - Most Complete
```tsx
import { LandingPageTemplate } from '@orion-ds/blocks';
import { Hero, Features, CTA, Footer } from '@orion-ds/blocks/sections';

<LandingPageTemplate>
  <Hero ... />
  <Features ... />
  <CTA ... />
  <Footer ... />
</LandingPageTemplate>
```

---

## 📈 USAGE SCENARIOS

### Scenario 1: Quick Landing Page
**Time**: 10 minutes

```bash
npx create-next-app my-landing
cd my-landing

npm install @orion-ds/react @orion-ds/blocks lucide-react
```

```tsx
// app/page.tsx
'use client';
import { LandingPageTemplate } from '@orion-ds/blocks/client';
import { Hero, Features, Pricing, CTA } from '@orion-ds/blocks/sections';

export default function Home() {
  return (
    <LandingPageTemplate>
      <Hero ... />
      <Features ... />
      <Pricing ... />
      <CTA ... />
    </LandingPageTemplate>
  );
}
```

**Result**: Fully functional landing page, ~5 minutes of customization

---

### Scenario 2: App Dashboard
**Time**: 2 hours

```tsx
// app/dashboard/page.tsx
'use client';
import { DashboardTemplate } from '@orion-ds/blocks/client';
import { Chart, DataTable } from '@orion-ds/react';

export default function Dashboard() {
  return (
    <DashboardTemplate>
      <Chart ... />
      <DataTable ... />
    </DashboardTemplate>
  );
}
```

**Result**: Full dashboard shell, customize internals

---

### Scenario 3: Custom Sections
**Time**: 1 hour

```tsx
// Combine individual sections
import { Hero, Features, Stats, Footer } from '@orion-ds/blocks/sections';

<>
  <Hero variant="background" ... />
  <Features ... />
  <Stats ... />
  <Footer ... />
</>
```

---

## 🧪 TESTING WHAT'S COVERED

### Currently Tested
- ❌ Nothing (0 test files)

### Should Test
1. **Hero component** — All variants, props combinations
2. **Features** — Grid rendering, responsive
3. **Pricing** — Card layout, CTA
4. **LandingPageTemplate** — Full page composition
5. **DashboardTemplate** — Layout integrity
6. ...rest of critical components (10+ more)

### Testing Stack Recommended
```json
{
  "devDependencies": {
    "vitest": "^1.0.0",
    "@testing-library/react": "^14.0.0",
    "@testing-library/jest-dom": "^6.0.0",
    "jsdom": "^23.0.0"
  }
}
```

---

## 🚀 PERFORMANCE CHECKLIST

- [x] Tree-shaking: Enabled
- [x] Dual build: ESM + CJS
- [x] Type definitions: Generated
- [x] Storybook: Stories included
- [x] Responsive: All components
- [ ] Unit tests: ❌ Missing
- [ ] Visual regression: ❌ Missing
- [ ] Performance budget: ❌ Missing
- [ ] Lighthouse: ⚠️ Not tested
- [ ] Bundle analyzer: ⚠️ Not configured

---

## 📞 SUPPORT & RESOURCES

### Internal
- Storybook: `npm run storybook` (port 6006)
- Type definitions: `dist/*.d.ts`
- Stories: `src/**/*.stories.tsx` (34 files)

### External
- @orion-ds/react docs: See parent package
- Lucide icons: https://lucide.dev
- Recharts: https://recharts.org
- dnd-kit: https://docs.dndkit.com

---

## 📋 NEXT 30 DAYS PLAN

| Week | Task | Priority |
|------|------|----------|
| Week 1 | Fix type-check errors | 🔴 CRITICAL |
| Week 1 | Add README.md | 🟠 HIGH |
| Week 2 | Add 15 unit tests | 🟠 HIGH |
| Week 2 | Enable CSS code-splitting | 🟡 MEDIUM |
| Week 3 | Docs-site blocks showcase | 🟡 MEDIUM |
| Week 4 | Visual regression tests (Percy) | 🟡 MEDIUM |

---

*Last updated: 27 Feb 2026*
*Maintenance Owner: Orion Design System Team*
