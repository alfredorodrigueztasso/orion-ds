import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-BAKU4KQN.js";import{M as l}from"./index-DLHpC4Z5.js";import{C as c,F as s,a as r,S as a,b as i}from"./DocComponents-Xr6RoBDO.js";import"./index-Bi6L2ga8.js";import"./iframe-CE78l5lG.js";import"./index-Dmh4UR0O.js";import"./index-D1UQZLgm.js";import"./index-CcR1FEzS.js";import"./index-DrFu-skq.js";function t(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Getting Started/Installation"}),`
`,e.jsx(n.h1,{id:"installation",children:"Installation"}),`
`,e.jsx(n.p,{children:"There are two ways to use Orion components in your project."}),`
`,e.jsxs(c,{columns:2,children:[e.jsx(s,{icon:"📦",title:"Option A: npm install",children:e.jsx(n.p,{children:"Install the full library as a versioned dependency. Auto-updates, zero maintenance. Best for most projects."})}),e.jsx(s,{icon:"📋",title:"Option B: CLI copy",children:e.jsx(n.p,{children:"Copy individual components into your project (shadcn-style). Own the source, customize freely."})})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"option-a-npm-install-full-library",children:"Option A: npm install (full library)"}),`
`,e.jsx(n.p,{children:"Install the package to get all components as a versioned dependency."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install @orion-ds/react @orion-ds/core
`})}),`
`,e.jsx(r,{variant:"info",children:e.jsxs(n.p,{children:[e.jsx("code",{children:"@orion-ds/core"})," is a peer dependency required for design tokens."]})}),`
`,e.jsx(n.h3,{id:"css-setup",children:"CSS Setup"}),`
`,e.jsxs(n.p,{children:["Import styles in your app entry file (",e.jsx(n.code,{children:"main.tsx"})," or ",e.jsx(n.code,{children:"App.tsx"}),")."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Single import (recommended):"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import '@orion-ds/react/styles.css';
`})}),`
`,e.jsx(n.p,{children:"This bundles both design tokens and component styles."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Separate imports (if you need granular control):"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import '@orion-ds/core/theme.css';        // Design tokens
import '@orion-ds/react/dist/react.css';  // Component styles
`})}),`
`,e.jsx(r,{variant:"warning",title:"Missing CSS = unstyled components",children:e.jsx(n.p,{children:"You must import the CSS file — without it, components will render without any Orion styling."})}),`
`,e.jsx(n.h3,{id:"themeprovider-setup",children:"ThemeProvider Setup"}),`
`,e.jsxs(n.p,{children:["Wrap your app root with ",e.jsx(n.code,{children:"ThemeProvider"}),". This is ",e.jsx(n.strong,{children:"required"})," — it manages global theme/brand state and loads fonts automatically."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import '@orion-ds/react/styles.css';
import { ThemeProvider } from '@orion-ds/react';

function App() {
  return (
    <ThemeProvider>
      <YourApp />
    </ThemeProvider>
  );
}
`})}),`
`,e.jsx(r,{variant:"tip",title:"Fonts load automatically",children:e.jsxs(n.p,{children:[e.jsx("code",{children:"ThemeProvider"})," loads Google Fonts for the active brand automatically. No manual ",e.jsx("code",{children:"<link>"})," tags needed."]})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"ThemeProvider props:"})}),`
`,e.jsxs(n.p,{children:[`| Prop | Default | Description |
|------|---------|-------------|
| `,e.jsx(n.code,{children:"defaultTheme"})," | ",e.jsx(n.code,{children:"'light'"}),` | Initial theme |
| `,e.jsx(n.code,{children:"defaultBrand"})," | ",e.jsx(n.code,{children:"'orion'"}),` | Initial brand |
| `,e.jsx(n.code,{children:"disableAutoFontLoading"})," | ",e.jsx(n.code,{children:"false"}),` | Disable automatic Google Fonts loading |
| `,e.jsx(n.code,{children:"disableFontWarnings"})," | ",e.jsx(n.code,{children:"false"})," | Disable console warnings for missing fonts |"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"That's it."})," Fonts load automatically, theme/brand are managed globally, and all components inherit the correct styling."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"option-b-cli-copy-own-the-code",children:"Option B: CLI copy (own the code)"}),`
`,e.jsx(n.p,{children:"Copy individual components into your project, shadcn-style. You own the source and can modify freely."}),`
`,e.jsxs(a,{children:[e.jsx(i,{number:1,title:"Initialize your project",children:e.jsxs(n.p,{children:["Run ",e.jsx("code",{children:"npx @orion-ds/cli init"})," — creates an ",e.jsx("code",{children:"orion.json"})," config and installs ",e.jsx("code",{children:"@orion-ds/core"}),"."]})}),e.jsx(i,{number:2,title:"Add the components you need",children:e.jsxs(n.p,{children:["Run ",e.jsx("code",{children:"npx @orion-ds/cli add button card modal"})," — copies component source files, resolves dependencies, transforms imports."]})})]}),`
`,e.jsx(n.p,{children:"After init, import the token CSS once:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import '@orion-ds/core/theme.css';
`})}),`
`,e.jsxs(n.p,{children:["See the ",e.jsx(n.a,{href:"?path=/docs/getting-started-cli-orion-add--docs",children:"CLI documentation"})," for full details."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"verify-your-setup",children:"Verify Your Setup"}),`
`,e.jsx(n.p,{children:"A minimal working example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import '@orion-ds/react/styles.css';
import { ThemeProvider, Button } from '@orion-ds/react';

export default function App() {
  return (
    <ThemeProvider>
      <Button variant="primary">It works!</Button>
    </ThemeProvider>
  );
}
`})}),`
`,e.jsx(n.p,{children:"If the button renders with the correct Orion blue color and rounded corners, you're all set."}),`
`,e.jsx(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),`
`,e.jsx(r,{variant:"error",title:"Components render unstyled?",children:e.jsxs(n.p,{children:["Ensure you've imported ",e.jsx("code",{children:"@orion-ds/react/styles.css"})," (or both separate CSS files). This is the most common setup issue."]})}),`
`,e.jsx(r,{variant:"warning",title:"Fonts look wrong (Times New Roman)?",children:e.jsxs(n.p,{children:["Make sure ",e.jsx("code",{children:"ThemeProvider"})," wraps your app. It loads Google Fonts automatically. If you disabled auto-loading, add the font ",e.jsx("code",{children:"<link>"})," manually."]})}),`
`,e.jsx(r,{variant:"info",title:"TypeScript errors?",children:e.jsxs(n.p,{children:["Both packages include type declarations. Make sure ",e.jsx("code",{children:"@orion-ds/core"})," is installed alongside ",e.jsx("code",{children:"@orion-ds/react"}),"."]})})]})}function v(o={}){const{wrapper:n}={...d(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{v as default};
