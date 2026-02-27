# Claude Code Skills Integration Map

**Fecha**: Feb 27, 2026 | **Versión**: 1.0 | **Total Skills**: 21

Documentación oficial de cómo los 21 skills interactúan, se complementan, y ejecutan en orden.

---

## 🎯 Quick Reference: Flujos de Trabajo Principales

### Workflow 1: Crear un Componente Nuevo
```
1. /create-component Button
   ↓ Crea 8 archivos (tsx, types, css, stories, test, spec, README, index)
   ↓
2. (Editar componente en el editor)
   ↓
3. /validate-ai-first
   ↓ Verifica: no hardcoded colors, no brand prop, tokens válidos
   ↓
4. /update-component Button
   ↓ Sincroniza README, stories, spec.yaml, registry
   ↓
5. /storybook
   ↓ Visualiza stories en Storybook
   ↓
6. /quick-check
   ↓ Format + lint + type-check + CSS lint
   ↓
7. /pr-ready
   ↓ Auto-fix + audit + build + test + registry
   ↓
8. (Crear PR y mergear)
```

### Workflow 2: Iterar sobre un Componente Existente
```
1. (Editar componente existente)
   ↓
2. /validate-ai-first
   ↓ Verifica compliance
   ↓
3. /update-component ComponentName
   ↓ Sincroniza todos los archivos
   ↓
4. /storybook
   ↓ Visualiza cambios
   ↓
5. /quick-check
   ↓ Pre-commit validation
   ↓
6. /pr-ready
   ↓ Full PR workflow
```

### Workflow 3: Preparar un Release
```
1. /audit
   ↓ Full system validation
   ↓
2. /bundle-check
   ↓ Valida tree-shaking y bundle size
   ↓
3. /perf-budget
   ↓ Verifica presupuestos de performance
   ↓
4. /test-full
   ↓ Unit + E2E + Visual tests
   ↓
5. /registry-sync
   ↓ Sincroniza registry + HTTP API
   ↓
6. /mcp-test
   ↓ Valida 9 MCP tools
   ↓
7. /pre-release
   ↓ Gate check completo antes de publicar
   ↓
8. /release-patch (o /release-minor o /release-major)
   ↓ Publica a npm
```

### Workflow 4: Desarrollo Daily
```
Morning:
  1. /storybook
     ↓ Inicia servidor

During work:
  2. (Editar componentes)
  3. /validate-ai-first (auto-trigger after edits)
  4. /quick-check (antes de commit)

Before PR:
  5. /pr-ready (full validation)
```

---

## 📊 Dependency Matrix: Qué Corre Antes de Qué

### Direct Dependencies (skill A → skill B significa: correr A antes de B)

```
/create-component
    ↓
    ├→ /validate-ai-first (siempre después de crear)
    ├→ /update-component (luego de editar)
    └→ /storybook (visualizar)

/update-component
    ↓
    ├→ /validate-ai-first (validar cambios)
    ├→ /registry-sync (si API cambió)
    └→ /quick-check (formato + tipos)

/validate-ai-first
    ↓
    ├→ /audit (como parte de auditoría)
    └→ /pr-ready (incluye validación)

/quick-check
    ↓
    ├→ /pr-ready (depende del estado)
    └→ /commit (usuario runea después)

/storybook
    ↓
    ├→ /validate-previews (validar stories)
    ├→ /build-storybook (para Percy)
    └→ /test-full (E2E tests contra Storybook)

/audit
    ↓
    ├→ /pre-release (paso 1 de release gate)
    └→ /pr-ready (incluye audit)

/bundle-check
    ↓
    ├→ /perf-budget (después, si quieres comparar)
    ├→ /pre-release (paso de validación)
    └→ /release-* (antes de publicar)

/perf-budget
    ↓
    ├→ /pre-release (step 5: performance gate)
    └→ /release-* (validar antes de publicar)

/test-full
    ↓
    ├→ /pre-release (paso 6: testing gate)
    └→ /release-* (validar antes de publicar)

/registry-sync
    ↓
    ├→ /mcp-test (valida registry)
    ├→ /pre-release (paso 5: registry validation)
    └→ /release-* (registry debe estar sincronizado)

/mcp-test
    ↓
    └→ /pre-release (paso 6: MCP validation)

/pr-ready
    ↓
    ├→ /commit (usuario hace commit después)
    └→ (Crear PR en GitHub)

/pre-release
    ↓
    └→ /release-patch (si pre-release ✅)
    └→ /release-minor (si pre-release ✅)
    └→ /release-major (si pre-release ✅)

/release-patch, /release-minor, /release-major
    ↓
    └→ (Publicado a npm ✅)

/fix-tokens
    ↓
    ├→ /validate-ai-first (si cambió tokens)
    ├→ /quick-check (validar tipos)
    └→ /audit (validar toda la cadena)

/validate-previews
    ↓
    ├→ /pr-ready (paso 3)
    └→ /pre-release (validación)

/component-rename
    ↓
    ├→ /registry-sync (rebuild registry)
    ├→ /quick-check (validar cambios)
    └→ /pr-ready (prepare PR)

/docs-site
    ↓
    ├→ /validate-previews (validar docs)
    └→ /pre-release (si cambios en docs)

/mcp-test
    ↓
    ├→ /registry-sync (debe estar sincronizado primero)
    └→ /pre-release (validación)
```

---

## ⚡ Optimization Paths: Qué NO Ejecutar

### Evita repetir validaciones:

```
❌ MAL:
  /quick-check
  +
  /pr-ready (includes /quick-check)
  = Validación duplicada ❌

✅ BIEN:
  /pr-ready
  = Ya corre /quick-check adentro ✅
```

```
❌ MAL:
  /validate-ai-first
  +
  /audit (includes /validate-ai-first)
  = Validación duplicada ❌

✅ BIEN:
  /audit
  = Ya corre /validate-ai-first adentro ✅
```

```
❌ MAL:
  /bundle-check
  +
  /perf-budget
  = Mediciones duplicadas ❌

✅ BIEN:
  /perf-budget
  = Ya incluye bundle validation ✅
  (O corre /bundle-check si necesitas más detalle)
```

### Flujos optimizados por contexto:

**Para desarrollo local** (el más rápido):
```
/storybook              (dev server)
→ /validate-ai-first   (auto-trigger)
→ /quick-check         (antes de commit)
→ /commit
```
**Tiempo**: ~1-2 minutos total

**Para PR** (validación completa):
```
/pr-ready              (includes: quick-check + audit + build + test + registry)
→ (Crear PR)
```
**Tiempo**: ~2-3 minutos

**Para Release** (gate check exhaustivo):
```
/pre-release          (includes: audit + bundle-check + perf-budget + test-full + registry + mcp-test)
→ /release-patch      (si pre-release ✅)
```
**Tiempo**: ~10-15 minutos

---

## 📤 Datos que Fluyen entre Skills

### Artifact 1: Registry
```
Generado por:
  → /create-component (new entry)
  → /update-component (updates entry)
  → /component-rename (renames entry)

Consumido por:
  ← /registry-sync (rebuilds)
  ← /mcp-test (validates)
  ← /cli add button (para usuarios)

Archivo: registry/*/
```

### Artifact 2: Type Definitions
```
Generado por:
  → /fix-tokens (generates types from JSON)
  → /create-component (creates types)
  → /update-component (updates types)

Consumido por:
  ← /validate-ai-first (checks types)
  ← /quick-check (type-check)
  ← /audit (validates types)

Archivo: packages/react/src/tokens/types.ts
```

### Artifact 3: CSS
```
Generado por:
  → /fix-tokens (generates CSS from tokens)
  → /create-component (creates module.css)

Consumido por:
  ← /validate-ai-first (checks no hardcoded colors)
  ← /quick-check (CSS lint)
  ← /storybook (renders with CSS)

Archivo: theme.css, Component.module.css
```

### Artifact 4: Storybook Stories
```
Generado por:
  → /create-component (creates .stories.tsx)
  → /update-component (updates stories)

Consumido por:
  ← /validate-previews (checks no duplication)
  ← /storybook (renders)
  ← /test-full (E2E tests)
  ← Percy (visual regression)

Archivo: Component.stories.tsx
```

### Artifact 5: Test Results
```
Generado por:
  → /test-full (unit + E2E + visual)
  → /quick-check (lint results)

Consumido por:
  ← /pr-ready (shows if passing)
  ← /pre-release (gate check)
  ← /release-* (validation)

Artifact: coverage/, playwright-report/, Percy builds
```

### Artifact 6: Performance Metrics
```
Generado por:
  → /bundle-check (tree-shaking, entry points)
  → /perf-budget (bundle size per module)

Consumido por:
  ← /pre-release (performance gate)
  ← /release-* (before publish)

Artifact: performance.budgets.json, dist/ analysis
```

### Artifact 7: Validation Reports
```
Generado por:
  → /validate-ai-first (compliance score)
  → /validate-previews (preview validation)
  → /audit (full report)

Consumido por:
  ← /pr-ready (shows violations)
  ← /pre-release (gate check)

Artifact: stdout reports
```

---

## 🔄 Skill Categories & Relationships

### Tier 1: Foundation Skills (必須 Always Start Here)
```
/create-component        New component generation
/update-component        Sync component files
/fix-tokens             Generate types & CSS from tokens
```

### Tier 2: Validation Skills (检查 Always Before PR)
```
/validate-ai-first      AI-First compliance
/quick-check            Format + lint + type-check
/validate-previews      Storybook + docs validation
```

### Tier 3: Development Skills (开发 During Development)
```
/storybook              Visual development server
/component-rename       Safe refactoring
```

### Tier 4: PR Skills (準備 Before PR)
```
/pr-ready               Complete PR workflow
```

### Tier 5: Release Skills (発行 Before Release)
```
/audit                  Full system audit
/bundle-check           Bundle optimization validation
/perf-budget            Performance budget monitoring
/test-full              Complete test suite
/registry-sync          Sync registry + API
/mcp-test               Validate MCP tools
/pre-release            Release gate check
/release-patch          Publish patch (v1.0.0 → v1.0.1)
/release-minor          Publish minor (v1.0.0 → v1.1.0)
/release-major          Publish major (v1.0.0 → v2.0.0)
```

### Tier 6: Infrastructure Skills (インフラ Rarely Direct)
```
/docs-site              Docs site management
/registry-sync          (already listed in Tier 5)
/perf-budget            (already listed in Tier 5)
```

---

## 🎬 Decision Tree: "What Should I Run?"

```
START
  │
  ├─ "I just created a new component"
  │  └─→ /create-component → /validate-ai-first → /update-component → /storybook
  │
  ├─ "I edited a component's design"
  │  └─→ /validate-ai-first → /update-component → /storybook → /quick-check
  │
  ├─ "I want to commit my changes"
  │  └─→ /quick-check → (git commit)
  │
  ├─ "I want to prepare a PR"
  │  └─→ /pr-ready → (create GitHub PR)
  │
  ├─ "I want to rename a component"
  │  └─→ /component-rename OldName NewName → /registry-sync → /quick-check
  │
  ├─ "I edited token JSON files"
  │  └─→ /fix-tokens → /validate-ai-first → /quick-check
  │
  ├─ "I want to run all tests"
  │  └─→ /test-full (includes unit + E2E + visual)
  │
  ├─ "I want to check bundle size"
  │  └─→ /bundle-check (detailed) OR /perf-budget (vs budget)
  │
  ├─ "I want a full system audit"
  │  └─→ /audit (comprehensive validation)
  │
  ├─ "I'm ready to release"
  │  └─→ /pre-release → /release-patch (or /release-minor or /release-major)
  │
  ├─ "I want to develop visually"
  │  └─→ /storybook (start dev server)
  │
  ├─ "I broke something and need to fix"
  │  └─→ /audit (diagnose) → (fix issue) → /quick-check
  │
  └─ "I want fast feedback (5 mins)"
     └─→ /quick-check + /storybook (parallel)
```

---

## 🚀 Recommended Daily Workflow

### Morning (Setup - 1 min)
```bash
/storybook              # Start Storybook dev server
# (Keep running in background)
```

### During Work (Iterative - 30 sec per iteration)
```bash
(Edit component in editor)
[Auto-trigger] /validate-ai-first  # Runs automatically
# Review violations
(Fix issues if any)
```

### Before Commit (Pre-commit - 1-2 min)
```bash
/quick-check            # Format + lint + type-check
# Fix any issues
git commit -m "..."
```

### Before PR (Validation - 2-3 min)
```bash
/pr-ready               # Full PR workflow
# Review all checks
gh pr create ...        # Create PR
```

### Before Release (Release Gate - 10-15 min)
```bash
/pre-release            # Comprehensive validation
# Review all gates
/release-patch          # Publish if all good
```

---

## ⚙️ Performance Notes

### Fastest Skills (< 30 seconds)
- `/storybook` — Just starts server
- `/quick-check` — Parallel checks
- `/validate-ai-first` — Just scans
- `/fix-tokens` — Just generates

### Medium Skills (30 seconds - 2 minutes)
- `/pr-ready` — Multiple steps
- `/registry-sync` — Rebuilds registry
- `/validate-previews` — Scans files
- `/bundle-check` — Analyzes bundle

### Slowest Skills (5-15 minutes)
- `/pre-release` — Full gate check
- `/test-full` — All test suites
- `/audit` — Comprehensive

**Tip**: Run slow skills before leaving desk or before big meetings.

---

## 🔗 Integration Examples

### Example 1: New Component Feature
```
Day 1:
  /create-component Toast
  → (Implement Toast component)
  → /validate-ai-first
  → /storybook (visual check)

Day 2:
  → (Refine design based on feedback)
  → /update-component Toast
  → /quick-check
  → /pr-ready

Day 3:
  → (PR approved)
  → /registry-sync
  → /pre-release (before next release)
```

### Example 2: Bug Fix Release
```
  (Fix bug in Button component)
  → /validate-ai-first
  → /quick-check
  → /pr-ready
  → (PR merged)
  → /pre-release
  → /release-patch (v3.2.0 → v3.2.1)
```

### Example 3: Performance Regression
```
  /perf-budget (detects +25KB regression)
  → /bundle-check --detailed (diagnose)
  → (Find culprit: lucide-react bundled)
  → (Fix: add to peerDependencies)
  → /bundle-check (verify fix)
  → /quick-check
  → /pr-ready
```

---

## 📋 Checklist: Pre-Release Validation

Before running `/pre-release`, ensure:

- [ ] All features merged to main
- [ ] `/pr-ready` passed on last PR
- [ ] `/audit` shows green ✅
- [ ] `/bundle-check` shows no regressions
- [ ] `/perf-budget` within limits
- [ ] `/test-full` all passing
- [ ] `/registry-sync` completed
- [ ] `/mcp-test` all 9 tools working
- [ ] CHANGELOG.md updated
- [ ] Version number decided (patch/minor/major)

**Then**: `→ /pre-release → /release-*`

---

## 📞 Support: "I'm Stuck"

**"I don't know what to run"**
→ Use Decision Tree above

**"Skills are failing"**
→ Run `/audit` for diagnosis

**"I want a quick feedback loop"**
→ `/storybook` + `/quick-check` + `/validate-ai-first`

**"I want to prepare a release"**
→ `/pre-release` (handles everything)

**"Something broke and I need help"**
→ `/audit` → review violations → fix → rerun

---

**End of Integration Map**

Para preguntas, ver individual skill documentation en `.claude/skills/*/SKILL.md`
