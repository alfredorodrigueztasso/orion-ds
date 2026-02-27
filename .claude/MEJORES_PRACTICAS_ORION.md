# ✨ MEJORES PRÁCTICAS PARA ORION - GUÍA COMPLETA

**Propósito**: Maximizar valor de Orion, evitar anti-patterns, mantener coherencia

---

## 1. TOKENS: LA BASE FUNDAMENTAL

### ✅ CORRECTO: Usar siempre variables semánticas

```css
/* ✅ BIEN */
.button {
  background: var(--interactive-primary);      /* Semántico */
  color: var(--interactive-primary-text);      /* Semántico */
  padding: var(--spacing-4);                   /* Semántico */
  border-radius: var(--radius-control);        /* Semántico */
  font-size: var(--font-size-base);            /* Semántico */
  box-shadow: var(--shadow-md);                /* Semántico */
  transition: var(--transition-normal);        /* Semántico */
  z-index: var(--z-dropdown);                  /* Semántico */
}
```

### ❌ INCORRECTO: Hardcoded values

```css
/* ❌ NUNCA */
.button {
  background: #1B5BFF;                         /* Hardcoded color */
  color: white;                                /* Hardcoded */
  padding: 16px;                               /* Hardcoded pixel */
  border-radius: 12px;                         /* Hardcoded */
  font-family: 'DM Sans';                      /* Hardcoded font */
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);      /* Hardcoded shadow */
  transition: 200ms ease;                      /* Hardcoded duration */
  z-index: 50;                                 /* Hardcoded z-index */
}
```

### Por qué importa

**Cambiar brand de Orion a Red**:
```
SIN tokens (hardcoded):
  ├─ Buscar "#1B5BFF" en 200+ archivos
  ├─ Reemplazar manualmente
  ├─ Riesgo de faltar algunos
  ├─ Testing extra necesario
  └─ ❌ 4-6 horas de trabajo

CON tokens (semánticos):
  ├─ Cambiar token en 1 archivo (brands.json)
  ├─ 200+ componentes actualizan automáticamente
  ├─ Zero riesgo de faltar
  ├─ Cero testing extra
  └─ ✅ 5 minutos
```

---

## 2. COMPONENTES: LA REGLA DE ORO

### ✅ NUNCA tengas props de brand/theme

```tsx
/* ✅ CORRECTO */
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  // ❌ NO: brand?: Brand;
  // ❌ NO: theme?: Theme;
}

export function Button({ variant = 'primary', size = 'md', ...props }: ButtonProps) {
  return (
    <button className={`btn btn-${variant} btn-${size}`} {...props} />
  );
}
```

### ❌ INCORRECTO: Brand prop en componentes

```tsx
/* ❌ NUNCA HAGAS ESTO */
export interface ButtonProps {
  variant?: 'primary' | 'secondary';
  brand?: 'orion' | 'red' | 'deepblue';  // ❌ ANTI-PATTERN
  theme?: 'light' | 'dark';              // ❌ ANTI-PATTERN
}

export function Button({ variant, brand, theme, ...props }: ButtonProps) {
  const color = brand === 'red' ? '#D7282F' : '#1B5BFF';  // ❌ Hardcoded!
  return <button style={{ background: color }} {...props} />;
}

// Uso incorrecto:
<Button brand="red" theme="dark">Click</Button>
```

### Por qué importa

```
PROBLEMA con brand props:
  ├─ IA puede inventar valores: <Button brand="hologram" />
  ├─ Propaga hardcoded values
  ├─ 100 combinaciones por componente
  ├─ Impossible de testear todas
  └─ Leads to inconsistency

SOLUCIÓN (Orion):
  ├─ Brand es GLOBAL via <ThemeProvider>
  ├─ Un único lugar de verdad
  ├─ Automatic para TODOS componentes
  ├─ Zero inconsistency
  └─ IA no puede inventar
```

### Patrón correcto

```tsx
// ✅ Configuración global
<ThemeProvider brand="red" theme="dark">
  {/* Todos los componentes automáticamente rojo + dark */}
  <Button variant="primary">Automáticamente rojo ✅</Button>
  <Card>Automáticamente con fondo dark ✅</Card>
</ThemeProvider>

// ✅ Cambiar en tiempo de ejecución
const { setBrand, setTheme } = useThemeContext();

<button onClick={() => setBrand('orion')}>
  Cambiar a Orion (todos componentes automáticamente azules)
</button>
```

---

## 3. ESTILOS: CSS MODULES > INLINE > STYLED-COMPONENTS

### ✅ MEJOR: CSS Modules (Scoped)

```tsx
// Button.tsx
import styles from './Button.module.css';

export function Button({ variant = 'primary', ...props }) {
  return (
    <button className={`${styles.button} ${styles[variant]}`} {...props} />
  );
}
```

```css
/* Button.module.css */
.button {
  padding: var(--spacing-4);
  border-radius: var(--radius-control);
  font-weight: 500;
}

.primary {
  background: var(--interactive-primary);
  color: var(--interactive-primary-text);
}

.secondary {
  background: var(--surface-subtle);
  color: var(--text-primary);
}
```

**Ventajas**:
- ✅ Scoped (no CSS conflicts)
- ✅ Build-time optimization
- ✅ Tree-shakeable
- ✅ Mejor performance

### ⚠️ ACEPTABLE: Inline styles (SOLO en casos especiales)

```tsx
// Aceptable para:
// 1. Valores dinámicos
<div style={{ width: `${percentage}%`, height: `${height}px` }} />

// 2. Posicionamiento dinámico
<div style={{ top: `${topPosition}px`, left: `${leftPosition}px` }} />

// 3. Display condicional
<div style={{ display: visible ? 'block' : 'none' }} />
```

**Nunca para**:
- ❌ Valores estáticos (usa CSS Modules)
- ❌ Colores/fonts (usa tokens)
- ❌ Espacios (usa tokens)

### ❌ EVITAR: Styled-components / Emotion

**Razón**: Extra overhead, harder to trace, no scoping benefit

---

## 4. TIPOS & TYPESCRIPT

### ✅ SIEMPRE: Type-safe Props

```tsx
import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  children?: ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', loading, children, ...rest }, ref) => {
    return (
      <button ref={ref} className={getButtonClass(variant, size)} {...rest}>
        {loading && <Spinner />}
        {children}
      </button>
    );
  }
);
```

### ❌ NUNCA: `any` type

```tsx
/* ❌ NUNCA */
function Component(props: any) {  // ❌
  return <div {...props} />;
}

export interface CustomProps {
  data: any;                      // ❌
  callback?: Function;            // ❌
}
```

### ✅ MEJOR: Proper typing

```tsx
/* ✅ SIEMPRE */
import type { ReactNode, ReactElement } from 'react';

function Component<T extends Record<string, unknown>>(props: T) {  // ✅
  return <div {...props} />;
}

export interface CustomProps {
  data: User[];                                    // ✅ Specific type
  callback?: (user: User) => Promise<void>;      // ✅ Callback signature
}
```

---

## 5. VALIDACIÓN: RUN `npm run validate`

### Antes de Commit

```bash
# ALWAYS ejecutar antes de git commit
npm run audit

# Esto valida 4 niveles:
# 1. Token compliance (no hardcoded values)
# 2. Component compliance (no brand props)
# 3. TypeScript validation (proper types)
# 4. Build validation (tree-shaking, bundle size)
```

### Lo que se detecta

```bash
npm run validate

❌ ERROR: Hardcoded color #1B5BFF in Button.module.css
   → SOLUCIÓN: Cambiar a var(--interactive-primary)

❌ ERROR: Hardcoded pixel 16px in Card.tsx
   → SOLUCIÓN: Cambiar a var(--spacing-4)

❌ ERROR: Brand prop en ButtonProps interface
   → SOLUCIÓN: Remover brand prop, usar ThemeProvider global

❌ ERROR: TypeScript 'any' type detected
   → SOLUCIÓN: Use proper types

✅ All validations passed!
```

---

## 6. MULTI-BRAND: CÓMO FUNCIONA

### Setup Correcto

```tsx
// App.tsx
import { ThemeProvider, Button, Card } from '@orion-ds/react';
import '@orion-ds/react/styles.css';

function App() {
  const [brand, setBrand] = useState('orion');
  const [theme, setTheme] = useState('dark');

  return (
    <ThemeProvider brand={brand} theme={theme}>
      <Navbar>
        <BrandSwitcher value={brand} onChange={setBrand} />
        <ThemeSwitcher value={theme} onChange={setTheme} />
      </Navbar>

      <main>
        {/* Automáticamente refleja brand + theme */}
        <Button variant="primary">Click me</Button>
        <Card>Content</Card>
      </main>
    </ThemeProvider>
  );
}
```

### Qué sucede internamente

```
1. setBrand('red')
   ↓
2. <html data-brand="red">
   ↓
3. CSS :root selector aplica overrides
   --color-brand-500: #D7282F (red)
   --radius-button: 9999px (pills)
   ↓
4. <Button> usa var(--interactive-primary)
   ↓
5. CSS entiende: var(--interactive-primary) = #D7282F
   ↓
6. Button renderiza: ROJO ✅
   ↓
7. Cambiar setBrand('orion')
   ↓
8. Automáticamente: #1B5BFF (azul)
```

---

## 7. PERSONALIZACIÓN SIN ROMPER TOKENS

### ✅ CORRECTO: Override con tokens

```css
/* MyButton.module.css */

/* Opción A: Usar variante existente */
.buttonLarge {
  composes: button from '@orion-ds/react/Button.module.css';
  padding: var(--spacing-6);  /* Override con token */
}

/* Opción B: Extender con más tokens */
.buttonSpecial {
  background: var(--interactive-primary);
  padding: var(--spacing-5);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-container);
}

/* Opción C: Usar conditional tokens */
.buttonHover {
  background: var(--interactive-primary-hover);
}
```

### ❌ INCORRECTO: Hardcoded customization

```css
/* ❌ NUNCA */
.myButton {
  background: #FF6B35;         /* ❌ Hardcoded */
  padding: 24px;               /* ❌ Hardcoded */
  border-radius: 16px;         /* ❌ Hardcoded */
}
```

---

## 8. TESTING

### Unit Tests: Componentes

```tsx
// Button.test.tsx
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@orion-ds/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders with primary variant', () => {
    render(
      <ThemeProvider>
        <Button variant="primary">Click</Button>
      </ThemeProvider>
    );

    const button = screen.getByRole('button', { name: /click/i });
    expect(button).toHaveClass('primary');
  });

  it('applies correct size', () => {
    render(
      <ThemeProvider>
        <Button size="lg">Large</Button>
      </ThemeProvider>
    );

    const button = screen.getByRole('button');
    expect(button).toHaveClass('lg');
  });

  it('respects theme context', () => {
    render(
      <ThemeProvider theme="dark">
        <Button>Dark</Button>
      </ThemeProvider>
    );

    // No verificar colors (dinámicos), verificar estructura
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
```

### Visual Tests: Storybook

```tsx
// Button.stories.tsx
import { ThemeProvider } from '@orion-ds/react';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export const Primary = {
  args: { variant: 'primary', children: 'Primary' },
};

export const Secondary = {
  args: { variant: 'secondary', children: 'Secondary' },
};

// Test diferentes temas
export const DarkTheme = {
  decorators: [
    (Story) => (
      <ThemeProvider theme="dark">
        <Story />
      </ThemeProvider>
    ),
  ],
  args: { variant: 'primary', children: 'Dark' },
};

// Test diferentes brands
export const RedBrand = {
  decorators: [
    (Story) => (
      <ThemeProvider brand="red" theme="dark">
        <Story />
      </ThemeProvider>
    ),
  ],
  args: { variant: 'primary', children: 'Red' },
};
```

---

## 9. PERFORMANCE: TREE-SHAKING

### ✅ CORRECTO: Importar lo necesario

```tsx
/* ✅ BIEN - Tree-shakeable */
import { Button } from '@orion-ds/react';
import { Card } from '@orion-ds/react';

// Bundle final: ~50KB (solo Button + Card)
```

### ❌ INCORRECTO: Wildcard imports

```tsx
/* ❌ EVITAR */
import * as Orion from '@orion-ds/react';
// Bundle final: ~150KB (todo @orion-ds/react)

Orion.Button  // 🚫 Menos tree-shakeable
Orion.Card    // 🚫 Menos tree-shakeable
```

### SSR Safety (Next.js)

```tsx
/* ✅ CORRECTO */
'use client';  // Client component (hooks)

import { useThemeContext } from '@orion-ds/react/client';
// ✅ Imports from /client entry point
```

```tsx
/* ❌ INCORRECTO */
const [theme] = useState(() => localStorage.getItem('theme'));
// ❌ Hydration mismatch (server rendered with default, client reads storage)

/* ✅ CORRECTO */
const [theme, setTheme] = useState('light');  // Default (SSR safe)
useEffect(() => {
  setTheme(localStorage.getItem('theme') || 'light');  // Read after mount
}, []);
```

---

## 10. DOCUMENTACIÓN

### Componentes DEBEN tener JSDoc

```tsx
/**
 * Button component - Primary action element
 *
 * Supports 3 variants (primary, secondary, ghost) and 3 sizes (sm, md, lg)
 * Automatically inherits brand/theme from ThemeProvider context.
 *
 * @example
 * <ThemeProvider>
 *   <Button variant="primary" onClick={() => console.log('clicked')}>
 *     Click me
 *   </Button>
 * </ThemeProvider>
 *
 * @param variant - Visual style (primary: filled, secondary: outlined, ghost: transparent)
 * @param size - Button size (sm: 32px, md: 40px, lg: 48px)
 * @param disabled - If true, button is not interactive
 * @param loading - If true, shows spinner and disables click
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', loading, disabled, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={`button button-${variant} button-${size}`}
        {...rest}
      />
    );
  }
);
```

---

## 11. COMMIT MESSAGES: SEMANTIC

### ✅ CORRECTO

```bash
git commit -m "feat(button): add loading state with spinner

- Added loading prop to Button component
- Shows spinner during async operations
- Disables click while loading
- Updated Button.stories with loading example
- Added unit tests for loading state"
```

### ❌ INCORRECTO

```bash
git commit -m "updated button"
git commit -m "fixed stuff"
git commit -m "WIP"
```

---

## 12. CHANGELOG DE BREAKING CHANGES

Si cambias API de componente:

```markdown
## v5.0.0 (Breaking)

### Removed
- ❌ Removed `label` prop from Button (use `children` instead)
- ❌ Removed `color` prop from Button (use variant + brand instead)

### Changed
- ✅ Button.size renamed to Button.size (sm, md, lg instead of small, medium, large)
- ✅ Renamed component from `PrimaryButton` to `Button`

### Deprecated
- ⚠️ Input.icon - use Field instead

### Migration Guide
```tsx
// Before
<Button label="Click" color="primary" size="small" />

// After
<Button variant="primary" size="sm">Click</Button>
```
```

---

## 13. CUANDO ROMPER REGLAS (Muy Raro)

### Solo cuando:

1. **Accesibilidad**: WCAG compliance > reglas
   ```tsx
   /* Aceptable para a11y */
   <div style={{ srOnly: true }}>Skip to content</div>
   ```

2. **Performance crítica**: Benchmarking comprobado
   ```tsx
   /* Si Lighthouse dice que component es bottleneck */
   const memoized = React.memo(Component);
   ```

3. **Legacy compatibility**: No hay mejor opción
   ```tsx
   /* Solo si mantener versión vieja es necesario */
   // Un export con deprecated warning
   ```

4. **Error edge-case**: No hay tokens para caso
   ```tsx
   /* Aceptable si token no existe después de revisión */
   // Pero: Crear el token primero, usar después
   ```

---

## CHECKLIST ANTES DE PR

- [ ] `npm run validate` → ✅ Pass
- [ ] `npm run type-check` → ✅ Pass
- [ ] `npm run test` → ✅ Pass
- [ ] `npm run lint` → ✅ Pass
- [ ] `npm run format:check` → ✅ Pass
- [ ] Storybook stories actualizadas
- [ ] JSDoc comments added
- [ ] No hardcoded values
- [ ] No brand props
- [ ] CSS Modules (no inline styles)
- [ ] Semantic versioning correct
- [ ] Changelog updated

---

## RESUMEN: LAS 5 REGLAS DE ORO

1. **TOKENS SIEMPRE**: var(--xxx), nunca hardcode
2. **BRAND GLOBAL**: ThemeProvider, nunca prop
3. **CSS MODULES**: Scoped, no inline
4. **TYPE-SAFE**: Proper types, no `any`
5. **VALIDATE**: `npm run validate` antes de commit

---

**Última actualización**: 27 Feb 2026
**Versión**: Orion 4.0.0
**Mantener actualizado**: Después de cada mayor release
