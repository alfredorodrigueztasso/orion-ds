# @orion-ds/blocks - Architecture & Decision Guide

## 🏗️ PACKAGE ARCHITECTURE

```
@orion-ds/blocks (NPM Package)
│
├── src/
│   ├── index.ts
│   ├── client.ts              ← 'use client' directive (Next.js)
│   ├── sections/              ← 21 reusable sections
│   │   ├── Hero/
│   │   │   ├── Hero.tsx       ← Component
│   │   │   ├── Hero.types.ts  ← TypeScript interfaces
│   │   │   ├── Hero.module.css ← Scoped styles
│   │   │   ├── Hero.stories.tsx ← Storybook
│   │   │   └── index.ts       ← Export barrel
│   │   ├── Features/
│   │   ├── Pricing/
│   │   ├── Footer/
│   │   ├── Stats/
│   │   ├── Team/
│   │   ├── FAQ/
│   │   ├── Blog/
│   │   ├── Gallery/
│   │   ├── Timeline/
│   │   ├── Testimonials/
│   │   ├── Contact/
│   │   ├── Newsletter/
│   │   ├── LogoCloud/
│   │   ├── Comparison/
│   │   ├── SocialProof/
│   │   ├── AppDownload/
│   │   ├── CarouselSection/
│   │   ├── AgentFolder/       ← App/SaaS
│   │   ├── Chat/              ← App/SaaS
│   │   ├── SettingsLayout/    ← App/SaaS
│   │   ├── Stepper/           ← App/SaaS
│   │   ├── Breadcrumbs/       ← App/SaaS
│   │   ├── EmptyState/        ← App/SaaS
│   │   └── index.ts           ← Export all
│   │
│   └── templates/             ← 12 full-page layouts
│       ├── marketing/         ← Landing pages
│       │   ├── LandingPageTemplate/
│       │   ├── PricingPageTemplate/
│       │   ├── AboutPageTemplate/
│       │   └── ContactPageTemplate/
│       └── app/              ← App interfaces
│           ├── AgentEditor/
│           ├── AgentWorkspace/
│           ├── ChatPageTemplate/
│           ├── DashboardTemplate/
│           ├── KanbanPageTemplate/
│           ├── LoginTemplate/
│           ├── ProfilePageTemplate/
│           └── SettingsTemplate/
│
├── dist/                      ← Compiled output
│   ├── index.mjs             ← ES Module (165 KB)
│   ├── index.cjs             ← CommonJS (105 KB)
│   ├── client.mjs/.cjs       ← 'use client' entry
│   ├── sections/             ← Per-section bundles
│   ├── templates/            ← Per-template bundles
│   ├── blocks.css            ← All styles (117 KB, monolithic)
│   └── **/*.d.ts             ← TypeScript definitions
│
├── package.json              ← Exports map, peer deps
├── vite.config.ts           ← Build config
├── tsconfig.json            ← TypeScript config
└── [README.md - MISSING]    ← 📋 TO ADD

@orion-ds/react (Dependency)
├── 31 primitives (Button, Input, etc)
├── 18 widgets (Card, Modal, Accordion, etc)
├── 3 AI components (Chat, CodeEditor, ComponentShowcase)
├── ~39 components total
└── Semantic tokens + CSS variables
```

---

## 🔀 DATA FLOW & COMPOSITION

### Template + Sections Flow
```
┌─────────────────────────────────────────────────────┐
│ User's App (pages/page.tsx)                        │
└──────────────────┬──────────────────────────────────┘
                   │
                   │ import
                   ▼
┌─────────────────────────────────────────────────────┐
│ LandingPageTemplate                                │
│ (Full-page layout wrapper)                         │
│                                                     │
│  ┌──────────────────────────────────────────────┐ │
│  │ <Hero /> ← ┬─ title (props)                  │ │
│  │            └─ @orion-ds/react Button, Badge │ │
│  └──────────────────────────────────────────────┘ │
│                                                     │
│  ┌──────────────────────────────────────────────┐ │
│  │ <Features /> ← features: Array of objects    │ │
│  │               @orion-ds/react Card          │ │
│  └──────────────────────────────────────────────┘ │
│                                                     │
│  ┌──────────────────────────────────────────────┐ │
│  │ <Pricing /> ← plans, features                │ │
│  │               @orion-ds/react Button         │ │
│  └──────────────────────────────────────────────┘ │
│                                                     │
│  ┌──────────────────────────────────────────────┐ │
│  │ <Footer /> ← links, copyright                │ │
│  │              @orion-ds/react Link            │ │
│  └──────────────────────────────────────────────┘ │
└──────────────────┬──────────────────────────────────┘
                   │
                   │ Uses
                   ▼
┌─────────────────────────────────────────────────────┐
│ @orion-ds/react Components + Tokens               │
│ (Atomic, reusable, token-driven)                   │
│                                                     │
│ Components: Button, Card, Badge, Input, Link      │
│ Tokens: --spacing-4, --interactive-primary        │
│ CSS: theme.css, styles.css                        │
└─────────────────────────────────────────────────────┘
```

### Component Hierarchy
```
LandingPageTemplate (Page-level wrapper)
│
├── <Hero>
│   ├── <Section> (from @orion-ds/react)
│   │   └── <Container>
│   ├── <Button> (from @orion-ds/react)
│   └── <Badge> (from @orion-ds/react)
│
├── <Features>
│   ├── <Section>
│   ├── <Container>
│   └── <FeatureCard> (local)
│       └── <Card> (from @orion-ds/react)
│
├── <Pricing>
│   ├── <Section>
│   ├── <PricingCard> (local)
│   │   └── <Button>, <Badge>
│
└── <Footer>
    ├── <Section>
    └── <Link> (from @orion-ds/react)
```

---

## 🎯 WHEN TO USE EACH

### Decision Matrix: Qué usar cuándo

```
NEED                          → USE WHAT              → FILES
────────────────────────────────────────────────────────────────
"Home page rápido"            → LandingPageTemplate   Hero + Features + CTA + Footer
                              + individual sections

"Dashboard completo"          → DashboardTemplate     SettingsLayout + Charts + Tables
                              + custom layout

"Solo un componente"          → Individual Hero       import { Hero } from '...'

"Next.js App Router"          → ./client entry        'use client' directive

"Todos los componentes"       → Main export           import { Hero, Features }

"Estilos personalizados"      → CSS Modules + props   Hero className prop + Hero.module.css

"Sin CSS (custom)"            → @orion-ds/react only  Ignore ./styles.css
```

---

### Use Case Examples

#### 1️⃣ LANDING PAGE (Marketing-focused)
```typescript
import { LandingPageTemplate } from '@orion-ds/blocks';
import { Hero, Features, Pricing, Footer } from '@orion-ds/blocks/sections';

export default function Home() {
  return (
    <LandingPageTemplate>
      <Hero
        title="Build amazing products"
        primaryAction={<Button>Get Started</Button>}
      />
      <Features features={[...]} />
      <Pricing plans={[...]} />
      <Footer ... />
    </LandingPageTemplate>
  );
}
```
**Customization**: 20 minutes | **Result**: Fully branded landing page

---

#### 2️⃣ DASHBOARD (App-focused)
```typescript
'use client';
import { DashboardTemplate } from '@orion-ds/blocks/client';
import { BarChart, LineChart } from 'recharts';

export default function Dashboard() {
  return (
    <DashboardTemplate
      sidebar={<NavSidebar />}
      header={<TopBar />}
    >
      <BarChart ... />
      <LineChart ... />
    </DashboardTemplate>
  );
}
```
**Customization**: 1 hour | **Result**: Full dashboard shell with layout

---

#### 3️⃣ CUSTOM COMPOSITION (Mixed)
```typescript
import { Hero, Features, Stats, CTA, Footer } from '@orion-ds/blocks/sections';

export default function CustomPage() {
  return (
    <>
      <Hero variant="background" ... />
      <div className="container">
        <Features ... />
        <Stats ... />
      </div>
      <CTA ... />
      <Footer ... />
    </>
  );
}
```
**Customization**: 30 minutes | **Result**: Custom section layout

---

#### 4️⃣ INDIVIDUAL COMPONENT
```typescript
import { Hero } from '@orion-ds/blocks/sections';

// In your own layout
<div className="my-layout">
  <Hero title="Section title" ... />
  <div>Custom content below</div>
</div>
```
**Customization**: 5 minutes | **Result**: Single reusable section

---

## 🔌 INTEGRATION PATTERNS

### With Next.js App Router
```typescript
// ✅ CORRECT - Works with SSR
'use client'; // Add this to use state/effects
import { DashboardTemplate } from '@orion-ds/blocks/client';

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <DashboardTemplate>
      {/* Client state works here */}
    </DashboardTemplate>
  );
}
```

```typescript
// ❌ WRONG - Hydration mismatch if no 'use client'
import { DashboardTemplate } from '@orion-ds/blocks';

export default function Page() {
  // This will cause hydration error in Next.js
  const [mounted, setMounted] = useState(false);
  return <DashboardTemplate />;
}
```

### With Next.js Pages Router
```typescript
// Works as-is with Pages Router
import { LandingPageTemplate } from '@orion-ds/blocks';

export default function Home() {
  return <LandingPageTemplate>...</LandingPageTemplate>;
}

export async function getStaticProps() {
  // Can use static generation
  return { props: {}, revalidate: 86400 };
}
```

### With Custom Styling
```typescript
// ✅ CSS Modules (scoped)
import { Hero } from '@orion-ds/blocks/sections';
import styles from './my-hero.module.css';

<Hero className={styles.customHero} ... />
// Then override in CSS Module
.customHero {
  --spacing-4: 20px; // Override token
}
```

```typescript
// ❌ AVOID - Inline styles (not AI-first)
<Hero style={{ padding: '20px' }} /> // Bad
```

---

## 📊 COMPONENT DEPENDENCY MAP

### Heavy Dependencies (Most Complex)
```
DashboardTemplate
├─ SettingsLayout
│  └─ AgentFolder (drag-drop: @dnd-kit)
├─ Charts (recharts)
└─ Tables (recharts for data rendering)

AgentEditor
├─ CodeEditor (@orion-ds/react)
│  └─ react-syntax-highlighter
├─ AgentFolder (drag-drop)
└─ Chat section
```

### Light Dependencies (Simple)
```
Hero
├─ Button, Badge (@orion-ds/react)
└─ CSS variables only

Features
├─ Card (@orion-ds/react)
└─ No heavy deps

Footer
├─ Link (@orion-ds/react)
└─ Static content
```

### Optional Dependencies
```
Stats
├─ If using recharts → includes Chart
└─ If just badges → no extra deps

AgentFolder
├─ If using drag-drop → requires @dnd-kit
└─ If read-only → no drag-drop code runs
```

---

## 🔧 BUILD SYSTEM DETAILS

### Vite Configuration
```typescript
// vite.config.ts
export default defineConfig({
  build: {
    // Dual format output
    lib: {
      formats: ['es', 'cjs'],
      entry: 'src/index.ts',
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'cjs'}`
    },

    // All dependencies externalized
    rollupOptions: {
      external: [
        'react', 'react-dom',
        '@orion-ds/react',
        'lucide-react', 'recharts',
        '@dnd-kit/*'
      ]
    },

    // Single CSS file (NOT optimized)
    cssCodeSplit: false
  }
});
```

### Build Output Structure
```
dist/
├── index.mjs               ← ES Module main
├── index.cjs               ← CommonJS main
├── client.mjs/cjs          ← Next.js entry with 'use client'
├── blocks.css              ← All CSS bundled (117 KB)
├── sections/
│   ├── index.mjs/cjs       ← All sections
│   ├── Hero/
│   │   ├── index.mjs/cjs   ← Individual export
│   │   └── Hero.mjs/cjs    ← Default export
│   └── ...
├── templates/
│   ├── index.mjs/cjs
│   ├── marketing/
│   │   └── LandingPageTemplate/...
│   └── app/
│       └── ...
└── **/*.d.ts              ← All type definitions
```

### Tree-Shaking How It Works
```
User imports:
import { Hero } from '@orion-ds/blocks/sections';

Bundler sees:
- only Hero is used
- Features, Pricing, etc. unused
- Marks other exports as dead code

Minifier removes:
- Features.tsx, Pricing.tsx code
- Unused @orion-ds/react imports

Final bundle:
- ~15-20 KB (just Hero)
- instead of 165 KB (all)

But CSS:
- Still includes ALL 117 KB (no splitting)
- This is the bottleneck
```

---

## ⚡ PERFORMANCE CHARACTERISTICS

### Import Cost (Time to Interactive)

| Import | Size | Gzip | Parse Time |
|--------|------|------|-----------|
| `{ Hero }` | 15 KB | 4 KB | ~5ms |
| `{ Hero, Features }` | 28 KB | 8 KB | ~8ms |
| `{ Hero, Features, Pricing, Team }` | 45 KB | 12 KB | ~15ms |
| Full package | 165 KB | 36 KB | ~50ms |

### CSS Impact
- **Loaded**: Full 117 KB regardless (no per-component CSS)
- **Impact**: +30ms parse time for CSS
- **Optimization**: Enable CSS code-splitting (reduces to ~40 KB actual)

### Rendering Performance
- **Sections**: ~0-1ms to render (mostly DOM operations)
- **Templates**: ~2-5ms (nested layouts)
- **Responsive**: Built-in, no reflow issues

---

## 🧠 MENTAL MODEL

Think of @orion-ds/blocks as:

```
┌─────────────────────────────────┐
│ Your Custom App Page            │
│ (JSX + Business Logic)          │
└──────────┬──────────────────────┘
           │
           │ uses
           ▼
┌─────────────────────────────────┐
│ @orion-ds/blocks                │
│ ─────────────────────────────── │
│ Ready-made:                     │
│ - Page layouts (templates)      │
│ - Page sections (Hero, etc.)    │
│ - All props-driven              │
│ - 100% customizable             │
│ - Zero inline styles            │
│                                 │
│ Based on:                       │
│ - Atomic components             │
│ - Semantic tokens               │
│ - Responsive design             │
└──────────┬──────────────────────┘
           │
           │ builds on
           ▼
┌─────────────────────────────────┐
│ @orion-ds/react                 │
│ ─────────────────────────────── │
│ Atomic building blocks:         │
│ - Button, Card, Input           │
│ - TextField, Checkbox           │
│ - Design tokens                 │
│ - Typography system             │
│ - Theme switching               │
└─────────────────────────────────┘
```

### Analogy
- **@orion-ds/react** = LEGO bricks (primitives)
- **@orion-ds/blocks** = LEGO sets (pre-built structures)
- **Your app** = LEGO creations (final product)

---

## 🚀 SCALING PATTERNS

### For 10 Pages
```
pages/
├─ landing.tsx         ← LandingPageTemplate + custom sections
├─ pricing.tsx         ← PricingPageTemplate
├─ about.tsx           ← AboutPageTemplate
├─ dashboard.tsx       ← DashboardTemplate
└─ settings.tsx        ← SettingsTemplate
```
**Benefit**: Consistent UI, rapid development

### For 50+ Pages
```
pages/
├─ marketing/
│  ├─ landing.tsx
│  ├─ pricing.tsx
│  └─ case-studies.tsx
├─ app/
│  ├─ dashboard.tsx
│  ├─ chat.tsx
│  ├─ settings.tsx
│  └─ profile.tsx
└─ admin/
   └─ management.tsx    ← Custom (no blocks)

layouts/
├─ marketing-layout.tsx
├─ app-layout.tsx
└─ admin-layout.tsx
```
**Benefit**: Organized, easy to maintain, scales with app

---

## 🔐 WHAT BLOCKS CAN'T DO

❌ **Mobile App Native**
- Blocks are React components (web only)
- Use React Native separately

❌ **Backend/Database**
- Blocks are UI-only
- Bring your own backend

❌ **SEO on Demand**
- Need Next.js static generation
- Or SSR with your framework

❌ **Custom Animations**
- Blocks use semantic CSS
- Bring your own animation library

❌ **Animated Transitions**
- Plain CSS, no framer-motion
- Add motion library if needed

---

## ✅ WHAT BLOCKS DO WELL

✅ **Rapid UI Development**
- 21 sections ready to go
- 12 full-page templates
- Copy-paste and customize

✅ **Consistent Branding**
- All components respect design tokens
- Multi-brand support (orion, red, deepblue, orange)
- Automatic dark mode

✅ **Type Safety**
- Full TypeScript support
- Autocomplete in IDE
- Catch errors at build time

✅ **Performance**
- 36 KB gzipped main bundle
- Tree-shaking enabled
- CSS variables (no cascading issues)

✅ **Accessibility**
- Built on WCAG patterns
- Inherited from @orion-ds/react
- Role + ARIA support

---

## 📚 LEARNING PATH

### Day 1 (1 hour)
- [ ] Read this guide
- [ ] Explore Storybook: `npm run storybook`
- [ ] Try LandingPageTemplate in Storybook

### Day 2 (2 hours)
- [ ] Create new Next.js project
- [ ] Install: `npm install @orion-ds/react @orion-ds/blocks`
- [ ] Copy LandingPageTemplate example
- [ ] Customize title, colors, content

### Day 3 (3 hours)
- [ ] Add 3-4 custom pages using templates
- [ ] Try individual sections (don't use templates)
- [ ] Experiment with props and variants

### Week 2 (4 hours)
- [ ] Read @orion-ds/react docs
- [ ] Understand tokens system
- [ ] Deep dive into custom layouts

---

*Architecture Guide v1.0*
*Last updated: 27 Feb 2026*
