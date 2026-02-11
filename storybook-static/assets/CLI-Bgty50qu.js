import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-BAKU4KQN.js";import{M as l}from"./index-DLHpC4Z5.js";import{a as s,S as a,b as t,T as p,I as r,C as h,F as i}from"./DocComponents-Xr6RoBDO.js";import"./index-Bi6L2ga8.js";import"./iframe-CE78l5lG.js";import"./index-Dmh4UR0O.js";import"./index-D1UQZLgm.js";import"./index-CcR1FEzS.js";import"./index-DrFu-skq.js";function c(o){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Getting Started/CLI (orion add)"}),`
`,e.jsxs(n.h1,{id:"cli--orion-dscli",children:["CLI — ",e.jsx(n.code,{children:"@orion-ds/cli"})]}),`
`,e.jsx(n.p,{children:"Copy Orion components directly into your project, shadcn-style. You own the code and can modify it freely."}),`
`,e.jsx(s,{variant:"tip",title:"Zero dependencies",children:e.jsx(n.p,{children:"The CLI uses only Node.js built-ins — no additional packages are installed for the CLI itself."})}),`
`,e.jsx(n.h2,{id:"quick-start",children:"Quick Start"}),`
`,e.jsxs(a,{children:[e.jsx(t,{number:1,title:"Configure your project",children:e.jsxs(n.p,{children:["Run ",e.jsx("code",{children:"npx @orion-ds/cli init"})," to create an ",e.jsx("code",{children:"orion.json"})," config and install ",e.jsx("code",{children:"@orion-ds/core"}),"."]})}),e.jsx(t,{number:2,title:"Add components",children:e.jsxs(n.p,{children:["Run ",e.jsx("code",{children:"npx @orion-ds/cli add button card modal"})," to copy component source files into your project."]})})]}),`
`,e.jsx(n.h2,{id:"commands",children:"Commands"}),`
`,e.jsx(n.h3,{id:"orion-init",children:e.jsx(n.code,{children:"orion init"})}),`
`,e.jsxs(n.p,{children:["Creates an ",e.jsx(n.code,{children:"orion.json"})," config and installs ",e.jsx(n.code,{children:"@orion-ds/core"})," if missing."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npx @orion-ds/cli init          # Interactive setup
npx @orion-ds/cli init --yes    # Use defaults
`})}),`
`,e.jsx(n.p,{children:"After init, import the token CSS once in your entry file:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import '@orion-ds/core/theme.css';
`})}),`
`,e.jsx(n.h3,{id:"orion-add-name",children:e.jsx(n.code,{children:"orion add <name...>"})}),`
`,e.jsx(n.p,{children:"Copy components from the Orion registry into your project."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npx @orion-ds/cli add button                    # Single component
npx @orion-ds/cli add button card modal          # Multiple at once
npx @orion-ds/cli add theme-controller --yes     # Skip prompts (resolves 6 deps)
npx @orion-ds/cli add hero --type=section        # Add a section
npx @orion-ds/cli add button --overwrite         # Replace existing files
`})}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:["What happens when you run ",e.jsx(n.code,{children:"add"}),":"]})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Fetches component JSON from the registry"}),`
`,e.jsxs(n.li,{children:["Resolves ",e.jsx(n.code,{children:"registryDependencies"})," recursively (BFS)"]}),`
`,e.jsx(n.li,{children:"Asks for confirmation if extra dependencies are needed"}),`
`,e.jsxs(n.li,{children:["Transforms imports (hooks/contexts to ",e.jsx(n.code,{children:"@orion-ds/react"}),", cross-component to relative paths)"]}),`
`,e.jsx(n.li,{children:"Writes files to your configured directory"}),`
`,e.jsxs(n.li,{children:["Installs npm dependencies (e.g., ",e.jsx(n.code,{children:"lucide-react"}),")"]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Example output:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`+ button
+ card

Files:
  src/components/orion/button/Button.tsx
  src/components/orion/button/Button.types.ts
  src/components/orion/button/Button.module.css
  src/components/orion/button/index.ts
  src/components/orion/card/Card.tsx
  src/components/orion/card/Card.types.ts
  src/components/orion/card/Card.module.css
  src/components/orion/card/index.ts

Dependencies installed: lucide-react

Done!
`})}),`
`,e.jsx(n.h3,{id:"orion-list",children:e.jsx(n.code,{children:"orion list"})}),`
`,e.jsx(n.p,{children:"Browse all 90+ available items grouped by type and category."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npx @orion-ds/cli list                       # All items
npx @orion-ds/cli list --type=component      # Components only (39)
npx @orion-ds/cli list --type=section        # Sections only (41)
npx @orion-ds/cli list --type=template       # Templates only (10)
`})}),`
`,e.jsx(n.p,{children:"Installed components are marked with a checkmark."}),`
`,e.jsxs(n.h2,{id:"configuration-orionjson",children:["Configuration: ",e.jsx(n.code,{children:"orion.json"})]}),`
`,e.jsxs(n.p,{children:["Created by ",e.jsx(n.code,{children:"orion init"})," in your project root:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "$schema": "https://orion-ds.dev/schema/cli-config.json",
  "registryUrl": "https://orion-ds.dev/r",
  "componentDir": "src/components/orion",
  "sectionDir": "src/sections/orion",
  "templateDir": "src/templates/orion",
  "typescript": true,
  "brand": "orion",
  "mode": "product"
}
`})}),`
`,e.jsx(p,{rows:[{token:"registryUrl",description:"Base URL for the component registry"},{token:"componentDir",description:"Where components are copied to"},{token:"sectionDir",description:"Where sections are copied to"},{token:"templateDir",description:"Where templates are copied to"},{token:"typescript",description:"Generate TypeScript files"},{token:"brand",description:"Default brand for the project"},{token:"mode",description:"Default visual mode (display, product, app)"}]}),`
`,e.jsx(n.h2,{id:"import-transforms",children:"Import Transforms"}),`
`,e.jsx(n.p,{children:"When components are copied, imports are automatically rewritten:"}),`
`,e.jsx(r,{headers:["Original import","Transformed to","Why"],rows:[["from './Button.types'","Unchanged","Internal file"],["from './Button.module.css'","Unchanged","CSS Module"],["from '../Button'","from '../button'","Cross-component reference"],["from '../../hooks'","from '@orion-ds/react'","Shared hook"],["from '../../contexts/ThemeContext'","from '@orion-ds/react'","Shared context"]]}),`
`,e.jsx(n.h2,{id:"dependency-resolution",children:"Dependency Resolution"}),`
`,e.jsx(n.p,{children:"Some components depend on others. The CLI resolves this automatically:"}),`
`,e.jsx(r,{headers:["Component","Dependencies"],rows:[["chat","button"],["theme-controller","card, switch, radio, button, badge, alert"]]}),`
`,e.jsxs(n.p,{children:["When you ",e.jsx(n.code,{children:"add theme-controller"}),", all 6 dependencies are fetched and copied too."]}),`
`,e.jsx(n.h2,{id:"npm-vs-cli-when-to-use-each",children:"npm vs CLI: When to Use Each"}),`
`,e.jsxs(h,{columns:2,children:[e.jsx(i,{icon:"📦",title:"npm install @orion-ds/react",children:e.jsx(n.p,{children:"Stable versioned components with auto-updates. Zero maintenance — just upgrade the package version. Best for teams that want consistency."})}),e.jsx(i,{icon:"📋",title:"npx @orion-ds/cli add",children:e.jsx(n.p,{children:"Own the source code, customize freely. Full control over component internals. Best for projects that need deep customization."})})]}),`
`,e.jsx(s,{variant:"info",children:e.jsx(n.p,{children:"You can mix both approaches. Use npm for most components and copy specific ones you need to customize."})}),`
`,e.jsx(n.h2,{id:"flags-reference",children:"Flags Reference"}),`
`,e.jsx(r,{headers:["Flag","Description"],rows:[["--yes","Skip all confirmation prompts"],["--overwrite","Replace existing component files"],["--local","Use local public/r/ registry instead of HTTP"],["--type=component|section|template","Filter by item type"]]})]})}function S(o={}){const{wrapper:n}={...d(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(c,{...o})}):c(o)}export{S as default};
