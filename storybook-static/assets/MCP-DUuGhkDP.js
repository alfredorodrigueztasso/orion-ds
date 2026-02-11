import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-BAKU4KQN.js";import{M as a}from"./index-DLHpC4Z5.js";import{a as s,S as c,b as t,C as r,F as i}from"./DocComponents-Xr6RoBDO.js";import"./index-Bi6L2ga8.js";import"./iframe-CE78l5lG.js";import"./index-Dmh4UR0O.js";import"./index-D1UQZLgm.js";import"./index-CcR1FEzS.js";import"./index-DrFu-skq.js";function l(o){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Getting Started/MCP Server"}),`
`,e.jsxs(n.h1,{id:"mcp-server--orion-dsmcp",children:["MCP Server — ",e.jsx(n.code,{children:"@orion-ds/mcp"})]}),`
`,e.jsx(n.p,{children:"The Orion MCP (Model Context Protocol) Server connects AI assistants directly to the design system. It provides 9 tools that let Claude, Cursor, and other AI tools query components, tokens, and validate code — without reading documentation manually."}),`
`,e.jsx(n.h2,{id:"what-is-mcp",children:"What is MCP?"}),`
`,e.jsx(s,{variant:"info",title:"Model Context Protocol",children:e.jsxs(n.p,{children:["MCP is a protocol that allows AI assistants to use external tools. Instead of copy-pasting documentation into your prompt, the AI can call tools like ",e.jsx("code",{children:"get-component"})," or ",e.jsx("code",{children:"validate-code"})," directly."]})}),`
`,e.jsx(n.h2,{id:"setup",children:"Setup"}),`
`,e.jsx(n.h3,{id:"claude-desktop",children:"Claude Desktop"}),`
`,e.jsxs(c,{children:[e.jsx(t,{number:1,title:"Open your Claude Desktop config",children:e.jsxs(n.p,{children:["Located at ",e.jsx("code",{children:"~/Library/Application Support/Claude/claude_desktop_config.json"})]})}),e.jsx(t,{number:2,title:"Add the Orion MCP server",children:e.jsx(n.p,{children:"Add the following to your config file:"})})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "mcpServers": {
    "orion-ds": {
      "command": "npx",
      "args": ["@orion-ds/mcp"]
    }
  }
}
`})}),`
`,e.jsx(n.h3,{id:"cursor",children:"Cursor"}),`
`,e.jsxs(c,{children:[e.jsx(t,{number:1,title:"Open your Cursor MCP settings",children:e.jsxs(n.p,{children:["Located at ",e.jsx("code",{children:".cursor/mcp.json"})," in your project root."]})}),e.jsx(t,{number:2,title:"Add the Orion MCP server",children:e.jsx(n.p,{children:"Add the following to your config file:"})})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "mcpServers": {
    "orion-ds": {
      "command": "npx",
      "args": ["@orion-ds/mcp"]
    }
  }
}
`})}),`
`,e.jsx(s,{variant:"tip",children:e.jsx(n.p,{children:"After configuration, restart the application. The Orion tools will be available to the AI assistant."})}),`
`,e.jsx(n.h2,{id:"available-tools",children:"Available Tools"}),`
`,e.jsx(n.h3,{id:"component-tools",children:"Component Tools"}),`
`,e.jsxs(r,{columns:3,children:[e.jsx(i,{icon:"📋",title:"list-components",children:e.jsx(n.p,{children:"List all available components, sections, and templates. Filter by category or type."})}),e.jsx(i,{icon:"🔍",title:"get-component",children:e.jsx(n.p,{children:"Get complete details: props, types, code examples, tokens, accessibility info."})}),e.jsx(i,{icon:"🔎",title:"search-components",children:e.jsx(n.p,{children:'Semantic search by keyword or use case (e.g., "form input" finds Field, Select, Checkbox).'})})]}),`
`,e.jsx(n.h3,{id:"token-tools",children:"Token Tools"}),`
`,e.jsxs(r,{columns:2,children:[e.jsx(i,{icon:"🎨",title:"list-tokens",children:e.jsx(n.p,{children:"List design tokens by category (surface, text, interactive, spacing, etc.)."})}),e.jsx(i,{icon:"🏷",title:"get-token",children:e.jsx(n.p,{children:"Get a specific token's values per theme and brand."})})]}),`
`,e.jsx(n.h3,{id:"validation--setup",children:"Validation & Setup"}),`
`,e.jsxs(r,{columns:3,children:[e.jsx(i,{icon:"✅",title:"validate-code",children:e.jsx(n.p,{children:"Validate TSX/CSS against Orion rules. Catches hardcoded colors, wrong props, missing imports."})}),e.jsx(i,{icon:"📖",title:"get-setup-guide",children:e.jsx(n.p,{children:"Get a complete setup guide for Vite, Next.js, or React projects."})}),e.jsx(i,{icon:"🧩",title:"list-sections",children:e.jsx(n.p,{children:"List all pre-built sections (Hero, Pricing, Sidebar, etc.)."})}),e.jsx(i,{icon:"📄",title:"get-section",children:e.jsx(n.p,{children:"Get details and code for a specific section or template."})})]}),`
`,e.jsx(n.h2,{id:"example-workflows",children:"Example Workflows"}),`
`,e.jsx(s,{variant:"tip",title:"Just describe what you need",children:e.jsx(n.p,{children:"The AI assistant will call the right tools automatically. You don't need to specify tool names."})}),`
`,e.jsx(n.h3,{id:"building-a-new-page",children:"Building a new page"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`You: "Build a pricing page for the deepblue brand"

AI calls: list-sections → finds Pricing, Hero, Footer sections
AI calls: get-section("pricing") → gets full code with props
AI calls: get-section("hero") → gets hero section code
AI calls: get-setup-guide("vite", brand="deepblue") → gets project setup
AI calls: validate-code(generatedCode) → checks for violations
`})}),`
`,e.jsx(n.h3,{id:"finding-the-right-component",children:"Finding the right component"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`You: "I need a form with email, password, and a submit button"

AI calls: search-components("form input") → finds Field, Select, Checkbox
AI calls: get-component("field") → gets Field props, examples
AI calls: get-component("button") → gets Button variants
`})}),`
`,e.jsx(n.h3,{id:"checking-token-values",children:"Checking token values"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`You: "What's the primary color for the red brand?"

AI calls: get-token("--interactive-primary") → values per brand/theme
AI calls: list-tokens("interactive") → all interactive tokens
`})}),`
`,e.jsx(n.h3,{id:"validating-generated-code",children:"Validating generated code"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`You: "Check if this component follows Orion rules"

AI calls: validate-code(\`<Button brand="red">...\`)
→ Error: Components should not have a "brand" prop. Brand is global via ThemeProvider.
`})}),`
`,e.jsx(n.h2,{id:"tool-parameters",children:"Tool Parameters"}),`
`,e.jsx(n.h3,{id:"list-components",children:e.jsx(n.code,{children:"list-components"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"category"})," (optional): actions, forms, layout, feedback, data-display, navigation, overlays, etc."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type"})," (optional): ",e.jsx(n.code,{children:"registry:component"}),", ",e.jsx(n.code,{children:"registry:section"}),", ",e.jsx(n.code,{children:"registry:template"})]}),`
`]}),`
`,e.jsx(n.h3,{id:"get-component",children:e.jsx(n.code,{children:"get-component"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name"})," (required): Component name in kebab-case (e.g., ",e.jsx(n.code,{children:'"button"'}),", ",e.jsx(n.code,{children:'"data-table"'}),")"]}),`
`]}),`
`,e.jsx(n.h3,{id:"search-components",children:e.jsx(n.code,{children:"search-components"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"query"})," (required): Keyword or use case (e.g., ",e.jsx(n.code,{children:'"dialog popup"'}),", ",e.jsx(n.code,{children:'"navigation"'}),")"]}),`
`]}),`
`,e.jsx(n.h3,{id:"get-setup-guide",children:e.jsx(n.code,{children:"get-setup-guide"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"framework"})," (required): ",e.jsx(n.code,{children:'"vite"'}),", ",e.jsx(n.code,{children:'"nextjs"'}),", or ",e.jsx(n.code,{children:'"react"'})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"brand"})," (optional): Brand to configure (default: ",e.jsx(n.code,{children:'"orion"'}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"theme"})," (optional): ",e.jsx(n.code,{children:'"light"'})," or ",e.jsx(n.code,{children:'"dark"'})," (default: ",e.jsx(n.code,{children:'"light"'}),")"]}),`
`]}),`
`,e.jsx(n.h3,{id:"validate-code",children:e.jsx(n.code,{children:"validate-code"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"code"})," (required): The TSX or CSS code to validate"]}),`
`]})]})}function y(o={}){const{wrapper:n}={...d(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(l,{...o})}):l(o)}export{y as default};
