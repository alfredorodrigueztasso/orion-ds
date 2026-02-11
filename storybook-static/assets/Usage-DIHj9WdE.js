import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-BAKU4KQN.js";import{M as a}from"./index-DLHpC4Z5.js";import{a as r,C as l,F as i}from"./DocComponents-Xr6RoBDO.js";import"./index-Bi6L2ga8.js";import"./iframe-CE78l5lG.js";import"./index-Dmh4UR0O.js";import"./index-D1UQZLgm.js";import"./index-CcR1FEzS.js";import"./index-DrFu-skq.js";function o(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Getting Started/Using Components"}),`
`,e.jsx(n.h1,{id:"using-components",children:"Using Components"}),`
`,e.jsxs(n.p,{children:["All Orion components are fully typed, accessible, and theme-aware. Import them from ",e.jsx(n.code,{children:"@orion-ds/react"}),"."]}),`
`,e.jsx(n.h2,{id:"basic-import",children:"Basic Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Button, Card, Field, Alert, Badge, Modal } from '@orion-ds/react';
`})}),`
`,e.jsx(r,{variant:"tip",children:e.jsx(n.p,{children:"All components are tree-shakeable. Only the components you import are included in your bundle."})}),`
`,e.jsx(n.h2,{id:"variants-and-sizes",children:"Variants and Sizes"}),`
`,e.jsxs(n.p,{children:["Most components support ",e.jsx(n.code,{children:"variant"})," and ",e.jsx(n.code,{children:"size"})," props."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Button variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>

// Button sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// Alert variants
<Alert variant="info">Information message</Alert>
<Alert variant="success">Success message</Alert>
<Alert variant="warning">Warning message</Alert>
<Alert variant="error">Error message</Alert>
`})}),`
`,e.jsx(n.h2,{id:"compound-components",children:"Compound Components"}),`
`,e.jsx(n.p,{children:"Several components use the compound pattern for flexible composition:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Card with sub-components
<Card>
  <Card.Header>Title</Card.Header>
  <Card.Body>Content goes here</Card.Body>
  <Card.Footer>
    <Button variant="primary">Save</Button>
  </Card.Footer>
</Card>

// Tabs
<Tabs defaultValue="tab1">
  <Tabs.List>
    <Tabs.Tab value="tab1">First</Tabs.Tab>
    <Tabs.Tab value="tab2">Second</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panel value="tab1">First panel content</Tabs.Panel>
  <Tabs.Panel value="tab2">Second panel content</Tabs.Panel>
</Tabs>
`})}),`
`,e.jsx(n.h2,{id:"icons-with-lucide",children:"Icons with Lucide"}),`
`,e.jsxs(n.p,{children:["Orion uses ",e.jsx(n.a,{href:"https://lucide.dev",rel:"nofollow",children:"Lucide"})," for icons — 5000+ consistent, open-source icons."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Button, Field } from '@orion-ds/react';
import { Search, Download, ChevronDown, Settings } from 'lucide-react';

// Icon on the left
<Button icon={<Search size={20} />}>Search</Button>

// Icon on the right
<Button iconRight={<ChevronDown size={20} />}>Menu</Button>

// Icon only (aria-label required!)
<Button iconOnly icon={<Settings size={20} />} aria-label="Settings" />

// Icon in a form field
<Field placeholder="Search..." icon={<Search size={18} />} />
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Icon sizing by component size:"})}),`
`,e.jsxs(l,{columns:3,children:[e.jsx(i,{title:"Small (sm)",icon:"S",children:"16–18px icons"}),e.jsx(i,{title:"Medium (md)",icon:"M",children:"20px icons (default)"}),e.jsx(i,{title:"Large (lg)",icon:"L",children:"24px icons"})]}),`
`,e.jsx(n.h2,{id:"forms",children:"Forms"}),`
`,e.jsx(n.p,{children:"Orion provides form components with built-in label, helper text, and error states."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Field, Select, Checkbox, Radio, Switch, Textarea } from '@orion-ds/react';

<Field
  label="Email"
  type="email"
  placeholder="your@email.com"
  helperText="We'll never share your email"
/>

<Field
  label="Password"
  type="password"
  error="Password must be at least 8 characters"
/>

<Select label="Country" options={[
  { value: 'us', label: 'United States' },
  { value: 'mx', label: 'Mexico' },
]} />

<Checkbox label="Accept terms" />
<Switch label="Enable notifications" />
<Textarea label="Message" rows={4} />
`})}),`
`,e.jsx(n.h2,{id:"theme-and-brand-switching",children:"Theme and Brand Switching"}),`
`,e.jsxs(n.p,{children:["Components adapt automatically to the current theme and brand. Use ",e.jsx(n.code,{children:"useTheme"})," to control them programmatically."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useTheme } from '@orion-ds/react';

function ThemeSwitcher() {
  const { theme, brand, setTheme, setBrand, toggleTheme } = useTheme();

  return (
    <div>
      <p>Theme: {theme} | Brand: {brand}</p>
      <Button onClick={toggleTheme}>Toggle Theme</Button>
      <Button onClick={() => setBrand('deepblue')}>Switch to Deepblue</Button>
    </div>
  );
}
`})}),`
`,e.jsx(r,{variant:"warning",title:"Brand is global, not per-component",children:e.jsxs(n.p,{children:["Never pass ",e.jsx("code",{children:"brand"})," as a prop to components. Brand is set once at the app root via ",e.jsx("code",{children:"<ThemeProvider>"})," and all components inherit it automatically."]})}),`
`,e.jsx(n.h2,{id:"sections-and-templates",children:"Sections and Templates"}),`
`,e.jsx(n.p,{children:"Orion includes 30+ pre-built sections and 9 page templates for rapid development."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Hero, Features, Pricing } from '@orion-ds/react';

// Pre-built marketing section
<Hero
  title="Build faster with Orion"
  description="AI-first design system with zero visual drift"
/>

// Features grid
<Features items={[
  { title: 'Type-safe', description: 'Full TypeScript support' },
  { title: 'Multi-brand', description: '5 brands out of the box' },
]} columns={2} />
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Full page template:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { LandingPageTemplate } from '@orion-ds/react';

<LandingPageTemplate
  hero={{ title: 'Welcome', description: 'Get started today' }}
  features={{ items: [...] }}
  pricing={{ plans: [...] }}
/>
`})}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(r,{variant:"info",children:e.jsxs(n.p,{children:["All components follow ",e.jsx("strong",{children:"WCAG AA"})," guidelines. Color contrast, keyboard navigation, and screen reader support are built in."]})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Visible ",e.jsx(n.code,{children:":focus-visible"})," states on interactive elements"]}),`
`,e.jsxs(n.li,{children:["Proper ARIA attributes (",e.jsx(n.code,{children:"aria-label"}),", ",e.jsx(n.code,{children:"role"}),", ",e.jsx(n.code,{children:"aria-live"}),")"]}),`
`,e.jsx(n.li,{children:"Keyboard navigation support"}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"prefers-reduced-motion"})," respected for animations"]}),`
`,e.jsxs(n.li,{children:["Icon-only buttons require ",e.jsx(n.code,{children:"aria-label"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"component-reference",children:"Component Reference"}),`
`,e.jsxs(n.p,{children:["Browse all components in the ",e.jsx(n.strong,{children:"Components"})," section of this Storybook sidebar. Each component page includes:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Live preview with controls"}),`
`,e.jsx(n.li,{children:"Prop documentation with types"}),`
`,e.jsx(n.li,{children:"Usage examples"}),`
`]})]})}function f(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{f as default};
