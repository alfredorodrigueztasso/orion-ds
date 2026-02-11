import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-BAKU4KQN.js";import{M as l}from"./index-DLHpC4Z5.js";import{C as a,F as r,B as o,a as i,T as c}from"./DocComponents-Xr6RoBDO.js";import"./index-Bi6L2ga8.js";import"./iframe-CE78l5lG.js";import"./index-Dmh4UR0O.js";import"./index-D1UQZLgm.js";import"./index-CcR1FEzS.js";import"./index-DrFu-skq.js";function s(t){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Getting Started/Brands & Themes"}),`
`,e.jsx(n.h1,{id:"brands--themes",children:"Brands & Themes"}),`
`,e.jsx(n.p,{children:"Orion supports multiple brands and themes through CSS variables. Switch between brands and themes at runtime — all components update automatically."}),`
`,e.jsx(n.h2,{id:"available-brands",children:"Available Brands"}),`
`,e.jsxs(a,{columns:3,children:[e.jsx(r,{icon:e.jsx(o,{color:"#1B5BFF",name:"Orion Blue"}),title:"Orion (default)",children:e.jsx(n.p,{children:"Libre Baskerville + Inter. Pill buttons. The flagship brand with a bold blue accent."})}),e.jsx(r,{icon:e.jsx(o,{color:"#006FBA",name:"Deep Blue"}),title:"Deepblue",children:e.jsx(n.p,{children:"Work Sans. Rounded buttons (12px radius). A corporate, professional feel."})}),e.jsx(r,{icon:e.jsx(o,{color:"#D7282F",name:"Red"}),title:"Red",children:e.jsx(n.p,{children:"Poppins + Inter. Pill buttons. Bold, energetic, and attention-grabbing."})}),e.jsx(r,{icon:e.jsx(o,{color:"#F15D22",name:"Orange"}),title:"Orange",children:e.jsx(n.p,{children:"DM Sans + Inter. Pill buttons. Warm, approachable, and modern."})}),e.jsx(r,{icon:e.jsx(o,{color:"#84CC16",name:"Lemon"}),title:"Lemon",children:e.jsx(n.p,{children:"Anton + Work Sans. Pill buttons. Fresh, vibrant, and eye-catching."})})]}),`
`,e.jsx(i,{variant:"info",title:"How brands work",children:e.jsxs(n.p,{children:["Each brand overrides accent colors, typography, and border radius through CSS variables. Components use semantic tokens like ",e.jsx("code",{children:"var(--interactive-primary)"})," — they don't need to know which brand is active."]})}),`
`,e.jsx(n.h2,{id:"setting-up-themeprovider",children:"Setting Up ThemeProvider"}),`
`,e.jsxs(n.p,{children:["Wrap your app with ",e.jsx(n.code,{children:"ThemeProvider"})," and optionally set a default brand:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import '@orion-ds/react/styles.css';
import { ThemeProvider } from '@orion-ds/react';

function App() {
  return (
    <ThemeProvider defaultBrand="deepblue" defaultTheme="light">
      <YourApp />
    </ThemeProvider>
  );
}
`})}),`
`,e.jsx(i,{variant:"tip",title:"Fonts load automatically",children:e.jsxs(n.p,{children:[e.jsx("code",{children:"ThemeProvider"})," detects the active brand and loads the correct Google Fonts. No manual ",e.jsx("code",{children:"<link>"})," tags required."]})}),`
`,e.jsx(n.h2,{id:"switching-brand-and-theme",children:"Switching Brand and Theme"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.code,{children:"useTheme"})," hook to control brand and theme programmatically:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useTheme } from '@orion-ds/react';

function BrandSwitcher() {
  const { theme, brand, setTheme, setBrand, toggleTheme } = useTheme();

  return (
    <div>
      <p>Current: {brand} / {theme}</p>

      {/* Toggle light/dark */}
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'dark' : 'light'}
      </button>

      {/* Switch brand */}
      <button onClick={() => setBrand('red')}>Red Brand</button>
      <button onClick={() => setBrand('deepblue')}>Deepblue Brand</button>
      <button onClick={() => setBrand('orange')}>Orange Brand</button>
      <button onClick={() => setBrand('lemon')}>Lemon Brand</button>
    </div>
  );
}
`})}),`
`,e.jsx(n.h2,{id:"how-it-works",children:"How It Works"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ThemeProvider"})," sets ",e.jsx(n.code,{children:"data-theme"})," and ",e.jsx(n.code,{children:"data-brand"})," attributes on ",e.jsx(n.code,{children:"<html>"})]}),`
`,e.jsxs(n.li,{children:["CSS uses selectors like ",e.jsx(n.code,{children:'[data-brand="deepblue"]'})," to override token values"]}),`
`,e.jsxs(n.li,{children:["Components use semantic tokens (",e.jsx(n.code,{children:"var(--interactive-primary)"}),") that resolve per-brand"]}),`
`,e.jsx(n.li,{children:"Changing the brand attribute instantly updates every component"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Light theme, Orion brand (default) -->
<html data-theme="light">

<!-- Dark theme, Deepblue brand -->
<html data-theme="dark" data-brand="deepblue">
`})}),`
`,e.jsx(n.h2,{id:"key-semantic-tokens",children:"Key Semantic Tokens"}),`
`,e.jsx(n.p,{children:"These tokens change value per brand and theme:"}),`
`,e.jsx(c,{rows:[{token:"--interactive-primary",description:"Primary button/link color"},{token:"--interactive-primary-hover",description:"Hover state"},{token:"--interactive-primary-text",description:"Text on primary buttons"},{token:"--text-brand",description:"Brand-colored text"},{token:"--color-brand-400 to 600",description:"Brand color range (for gradients)"},{token:"--radius-control",description:"Button/input border radius"},{token:"--font-primary",description:"Heading font family"},{token:"--font-secondary",description:"Body font family"}]}),`
`,e.jsx(i,{variant:"warning",title:"Brand is global, not per-component",children:e.jsxs(n.p,{children:["Never pass ",e.jsx("code",{children:"brand"})," as a prop. Components inherit the brand from the nearest ",e.jsx("code",{children:"ThemeProvider"}),"."]})}),`
`,e.jsx(n.h2,{id:"tri-modal-system",children:"Tri-Modal System"}),`
`,e.jsxs(n.p,{children:["In addition to brands and themes, Orion has a ",e.jsx(n.strong,{children:"mode"})," system that controls visual behavior:"]}),`
`,e.jsxs(a,{columns:3,children:[e.jsx(r,{icon:"🍎",title:"Display Mode",children:e.jsx(n.p,{children:"Atmospheric (Apple-style). Generous shadows, -4px hover lift, glassmorphism enabled. For marketing pages."})}),e.jsx(r,{icon:"📐",title:"Product Mode",children:e.jsx(n.p,{children:"Flat (Linear-style). Minimal shadows, color-change-only hover, no glassmorphism. For dashboards."})}),e.jsx(r,{icon:"📱",title:"App Mode",children:e.jsx(n.p,{children:"Tactile (Material 3-style). Native shadows, -2px hover lift, no glassmorphism. For touch interfaces."})})]}),`
`,e.jsx(n.p,{children:"Set the mode via data attribute or ThemeProvider:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<html data-theme="light" data-brand="orion" data-mode="product">
`})}),`
`,e.jsx(n.p,{children:"Components use mode-aware tokens automatically:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* These tokens change per mode */
var(--mode-shadow-hover)     /* Shadow on hover */
var(--mode-hover-lift)       /* Transform on hover */
var(--mode-hover-duration)   /* Animation speed */
`})}),`
`,e.jsx(n.h2,{id:"storybook-toolbar",children:"Storybook Toolbar"}),`
`,e.jsx(n.p,{children:"Use the Storybook toolbar at the top of this page to switch themes, brands, and modes in real-time. All component stories will update instantly."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Theme"})," (sun/moon icon): Switch between light and dark"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Brand"})," (paintbrush icon): Switch between orion, deepblue, red, orange, lemon"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Mode"})," (browser icon): Switch between display, product, app"]}),`
`]})]})}function y(t={}){const{wrapper:n}={...d(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{y as default};
