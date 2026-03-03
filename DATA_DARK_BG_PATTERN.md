# data-dark-bg Pattern — Automatic Dark Background Styling

## Objetivo

El patrón `data-dark-bg="true"` permite que componentes Orion se adapten automáticamente a fondos oscuros (como Hero sections con background) sin necesidad de que el desarrollador especifique variants inversas manualmente.

**Problema que resuelve:**
- Inputs, buttons, chips y otros componentes tienen colores que **desaparecen en fondos oscuros**
- Developers deben seleccionar manualmente un variant "inverse" para cada componente dentro de Hero
- No es automático → mucho boilerplate, fácil olvidar

**Solución:**
- Un atributo CSS contextual `data-dark-bg="true"` en el contenedor
- Todos los componentes dentro adaptan automáticamente sus estilos
- **Cero cambios en el código de componentes** — solo CSS contextual

---

## Cómo Funciona

### CSS Modules + :global() Selector

```css
/* En el CSS del componente (ej: Badge.module.css) */

/* 1. Definir el variant inverse (si aplica) */
.inverse {
  background: color-mix(in srgb, var(--color-neutral-0) 20%, transparent);
  color: var(--color-neutral-0);
  border: 1px solid color-mix(in srgb, var(--color-neutral-0) 20%, transparent);
}

/* 2. Auto-mapear variants al contexto dark */
:global([data-dark-bg="true"]) .primary,
:global([data-dark-bg="true"]) .secondary {
  /* Aplicar estilos inverse automáticamente */
  background: color-mix(in srgb, var(--color-neutral-0) 20%, transparent);
  color: var(--color-neutral-0);
  border: 1px solid color-mix(in srgb, var(--color-neutral-0) 20%, transparent);
}
```

### DOM + data-dark-bg Attribute

```tsx
// En Hero o cualquier contexto con fondo oscuro
<div data-dark-bg="true">  {/* ← Activa el contexto */}
  <Badge variant="secondary">New</Badge>        {/* Auto-inverse en dark */}
  <Button variant="primary">Click me</Button>  {/* Auto-inverse en dark */}
  <Field label="Email" />                      {/* Auto-adapta en dark */}
</div>
```

**Resultado:**
- Badge `secondary` → se ve blanco en fondo oscuro (auto-mapeado a inverse)
- Button `primary` → se ve blanco en fondo oscuro
- Field label y border → visibles en fondo oscuro
- **Sin cambios en JSX** — todo sucede en CSS

---

## Componentes que Soportan data-dark-bg

### ✅ Con Variants (auto-mapeo)

| Componente | Variants que se mapean | Auto-inverse appearance |
|---|---|---|
| **Badge** | brand, secondary, neutral | Sí (white 20% transparent bg) |
| **Alert** | success, error, warning, info | Sí (white 20% transparent bg) |
| **Chip** | default, primary, success, warning, error, info | Sí (white 20% transparent bg) |
| **Card** | base, glass, elevated, outlined | Sí (white 20% transparent bg) |
| **Button** | primary, secondary, ghost | Sí (built-in en Button) |

Los variants que **NO se mapean** (mantienen su semántica):
- `inverse` (ya es para dark)
- `success`, `error`, `warning` en Badge/Alert (son semánticamente correctos en cualquier fondo)

### ✅ Sin Variants (contexto-only)

| Componente | Cómo funciona |
|---|---|
| **Field** | Input border, label, placeholder se hacen blancos/visibles |
| **SearchInput** | Border y text se adaptan |

---

## Patrones de Uso

### Patrón 1: Hero Section con Background

```tsx
import { Hero } from '@orion-ds/blocks';
import { Badge, Button } from '@orion-ds/react';

<Hero
  variant="background"                    // ← Dark background (image or color)
  backgroundImage="/hero-bg.jpg"
  title="Welcome"
  badge="New Feature"                     // Auto usa inverse inside data-dark-bg
>
  <Button>Get Started</Button>            // Auto inverse
</Hero>
```

**Internamente (en Hero component):**
```tsx
{badge && (
  <div data-dark-bg={isBackgroundVariant}>  {/* ← Activa el contexto */}
    {typeof badge === 'string'
      ? <Badge variant="brand">{badge}</Badge>
      : badge}
  </div>
)}
```

### Patrón 2: Custom Dark Container

```tsx
<div
  style={{
    background: 'linear-gradient(135deg, #000, #333)',
    padding: 'var(--spacing-6)'
  }}
  data-dark-bg="true"  {/* ← Activa contexto para toda la sección */}
>
  <h2 style={{ color: 'white' }}>Premium Features</h2>

  <Badge variant="primary">Pro</Badge>          {/* Blanco en dark */}
  <Field label="Email" type="email" />         {/* Visible en dark */}
  <Button variant="secondary">Subscribe</Button> {/* Blanco en dark */}
</div>
```

### Patrón 3: Override Manual (escape hatch)

```tsx
<div data-dark-bg="true">
  <Badge variant="primary">Auto-inverse</Badge>    {/* Usa inverse automático */}
  <Badge variant="success">Always green</Badge>   {/* NO se mapea, es verde siempre */}
  <Badge variant="inverse">Explicit inverse</Badge> {/* Explícito */}
</div>
```

---

## Implementación en Nuevos Componentes

### Paso 1: Agregar Variant Inverse (si tiene variants)

**ComponentName.types.ts**
```typescript
export type ComponentVariant =
  | "primary"
  | "secondary"
  | "success"
  | "inverse";  // ← Nuevo
```

### Paso 2: Agregar CSS para Inverse

**ComponentName.module.css**
```css
.inverse {
  background: color-mix(in srgb, var(--color-neutral-0) 20%, transparent);
  color: var(--color-neutral-0);
  border: 1px solid color-mix(in srgb, var(--color-neutral-0) 20%, transparent);
}
```

### Paso 3: Agregar Context Selector

```css
/* ============================================================================
 * CONTEXT: data-dark-bg="true" — Dark background contexts
 * (e.g. Hero variant="background")
 * Maps primary/secondary/success variants to inverse automatically.
 * ============================================================================ */

:global([data-dark-bg="true"]) .primary,
:global([data-dark-bg="true"]) .secondary,
:global([data-dark-bg="true"]) .success {
  background: color-mix(in srgb, var(--color-neutral-0) 20%, transparent);
  color: var(--color-neutral-0);
  border: 1px solid color-mix(in srgb, var(--color-neutral-0) 20%, transparent);
}
```

**Decisión de mapping:**
- ✅ Mapear: variants que son "neutros" semánticamente (primary, secondary)
- ✅ Mapear: variants que representan estados claros (default, base, outlined)
- ❌ NO mapear: variants semánticamente ricos (success=verde, error=rojo — correctos en cualquier fondo)
- ❌ NO mapear: `inverse` (ya es para dark)

### Paso 4: Agregar Story

**ComponentName.stories.tsx**
```tsx
export const OnDarkBackground: Story = {
  render: () => (
    <div
      style={{
        padding: "var(--spacing-6)",
        background: "linear-gradient(135deg, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.7))",
      }}
    >
      <h3 style={{ color: "var(--color-neutral-0)" }}>On Dark Background</h3>
      <div data-dark-bg="true" style={{ display: "flex", gap: "var(--spacing-4)" }}>
        <Component variant="primary">Primary (auto-inverse)</Component>
        <Component variant="inverse">Explicit inverse</Component>
      </div>
    </div>
  ),
};
```

### Paso 5: Agregar Preview-Module

**registry/preview-modules/component-name.tsx**
```tsx
export const previews = [
  {
    title: 'On Dark Background',
    render: () => (
      <div style={{ padding: 'var(--spacing-6)', background: 'rgba(0,0,0,0.8)' }} data-dark-bg="true">
        <Component variant="primary">Auto-inverse on dark</Component>
      </div>
    ),
  },
];
```

---

## Componentes Completados (Phase 3)

✅ **Badge** (4944bfa)
- Variants: 8 (primary, secondary, neutral, success, error, warning, info, inverse)
- Mapeo: brand, secondary, neutral → inverse

✅ **Alert** (5cd5402)
- Variants: 5 (success, error, warning, info, inverse)
- Mapeo: success, error, warning, info → inverse

✅ **Chip** (5cd5402)
- Variants: 7 (default, primary, success, warning, error, info, inverse)
- Mapeo: all 6 colored variants → inverse

✅ **Card** (51485ed)
- Variants: 6 (base, glass, elevated, outlined, image, inverse)
- Mapeo: base, glass, elevated, outlined → inverse

✅ **Field** (60e5fae)
- No variants, contexto-only
- Mapeo: label, input, icons auto-adapt

---

## Ventajas del Patrón

| Aspecto | Beneficio |
|---|---|
| **DX (Developer Experience)** | Zero boilerplate — `data-dark-bg="true"` una sola vez |
| **Mantenibilidad** | Cambios en un lugar (CSS) afectan a todos los componentes |
| **Escalabilidad** | Fácil agregar a nuevos componentes (3-5 CSS rules) |
| **Breaking changes** | Zero — completamente backwards compatible |
| **Escape hatch** | Siempre puedes pasar `variant="success"` para override manual |
| **CSS-first** | No requiere props ni lógica JavaScript |
| **Semantic correctness** | Variants que son semánticamente ricos (error, success) NO se mapean |

---

## Limitaciones

| Limitación | Razón |
|---|---|
| **Solo CSS contextual** | No puede acceder a JavaScript context (por diseño — CSS-only) |
| **data-dark-bg no es reactivo** | Es atributo DOM, no cambia dinámicamente (se usa en Hero, que es estático) |
| **Requiere estructura HTML** | El atributo debe estar en el contenedor padre de los componentes |
| **No mapea semantic variants** | error, success, warning deben verse iguales en cualquier fondo |

---

## Testing

### En Storybook

Cada componente tiene una story `OnDarkBackground` que muestra:
1. Variantes normales en luz (arriba)
2. Mismas variantes en dark con `data-dark-bg="true"` (abajo)
3. Variant `inverse` explícito para comparar

```
http://localhost:6006/?path=/story/components-data-display-badge--on-dark-background
http://localhost:6006/?path=/story/components-forms-field--on-dark-background
```

### Validación Manual

```tsx
// Verificar que esto funciona:
<div data-dark-bg="true">
  <Badge variant="secondary">✅ Should be white</Badge>
</div>

// Verificar que esto no se mapea:
<div data-dark-bg="true">
  <Badge variant="success">✅ Should stay green (not white)</Badge>
</div>
```

---

## Próximos Pasos

### Phase 3 Continuation
- [ ] Dropdown/Select — Context selector para borders y options
- [ ] Modal/Dialog — Dialog backdrop + content adaptation
- [ ] CommandBar — Input + results styling

### Phase 4: Hero Integration
- [ ] Add `data-dark-bg` al Hero wrapper automáticamente cuando `variant="background"`
- [ ] Deprecate manual variant overrides (users can rely on auto-switch)
- [ ] Update Hero documentation

### Phase 5: Documentation
- [ ] Add to CLAUDE.md — Best practices section
- [ ] Add to component README templates
- [ ] Create video tutorial on data-dark-bg pattern

---

## FAQ

**P: ¿Por qué no usar CSS variables en lugar de data-dark-bg?**
R: CSS variables cambiarían globalmente (todo el sitio). `data-dark-bg` es local al contenedor.

**P: ¿Funciona en modo oscuro del navegador (prefers-color-scheme)?**
R: No — es para fondos oscuros específicos (como Hero). Para modo oscuro global, usa `prefers-color-scheme` media query.

**P: ¿Puedo anular un mapeo automático?**
R: Sí, pasa `variant="success"` (que no se mapea) o `variant="inverse"` (explícito).

**P: ¿Qué pasa si olvido agregar `data-dark-bg`?**
R: Los componentes seguirán funcionando, pero tendrán bajo contraste en fondos oscuros. No es un error — es responsabilidad del developer.

**P: ¿Puede un componente vivir dentro de múltiples `data-dark-bg` padres?**
R: Los selectores CSS se aplicarán del padre más cercano. No hay conflictos.

---

## Referencias

- **Components**: Badge, Alert, Chip, Card, Field, Button
- **Storybook**: `OnDarkBackground` story en cada componente
- **Commits**: 4944bfa, 5cd5402, 51485ed, 61a5a47, 88c5c7f, 60e5fae
- **CSS Pattern**: `:global([data-dark-bg="true"]) .selector { ... }`
