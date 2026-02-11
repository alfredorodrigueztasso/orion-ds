import{j as n}from"./jsx-runtime-u17CrQMm.js";import{r as b}from"./index-Bi6L2ga8.js";const x="_button_aoa44_9",v="_primary_aoa44_49",B="_secondary_aoa44_63",C="_ghost_aoa44_79",R="_danger_aoa44_93",N="_sm_aoa44_110",T="_md_aoa44_117",w="_lg_aoa44_124",S="_fullWidth_aoa44_136",j="_iconOnly_aoa44_141",q="_loading_aoa44_159",D="_spinner_aoa44_164",z="_spin_aoa44_164",O="_loadingContent_aoa44_197",V="_icon_aoa44_141",W="_iconRight_aoa44_214",e={button:x,primary:v,secondary:B,ghost:C,danger:R,sm:N,md:T,lg:w,fullWidth:S,iconOnly:j,loading:q,spinner:D,spin:z,loadingContent:O,icon:V,iconRight:W},l=b.forwardRef(({variant:r="primary",size:d="md",isLoading:t=!1,fullWidth:c=!1,icon:a,iconRight:i,iconOnly:o=!1,className:u,children:m,disabled:p,type:f="button",..._},h)=>{const g=[e.button,e[r],e[d],c&&e.fullWidth,o&&e.iconOnly,t&&e.loading,u].filter(Boolean).join(" "),y=p||t,s=t?e.loadingContent:void 0;return n.jsxs("button",{ref:h,type:f,className:g,disabled:y,..._,children:[t&&n.jsx("span",{className:e.spinner,"aria-hidden":"true"}),a&&!o&&n.jsx("span",{className:`${e.icon} ${s||""}`,"aria-hidden":"true",children:a}),o&&a?n.jsx("span",{className:`${e.icon} ${s||""}`,"aria-hidden":"true",children:a}):n.jsx("span",{className:s,children:m}),i&&!o&&n.jsx("span",{className:`${e.icon} ${e.iconRight} ${s||""}`,"aria-hidden":"true",children:i})]})});l.displayName="Button";l.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'ghost' | 'danger'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'ghost'"},{name:"literal",value:"'danger'"}]},description:"Visual variant of the button.\n\n@semanticGuide\n- `primary`: Main CTA (Submit, Save, Continue)\n- `secondary`: Supporting action (Cancel, Back)\n- `ghost`: Subtle action (Close, Dismiss)\n- `danger`: Destructive action (Delete, Remove)\n\n@default 'primary'",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`Size of the button. Automatically adapts to current mode.

@modeAware
- Display: 40/56/64px heights (spacious)
- Product: 28/32/36px heights (compact)
- App: 40/44/48px heights (touch-friendly)

@default 'md'`,defaultValue:{value:"'md'",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:`Loading state - shows spinner and disables interaction.
Button text remains visible but dimmed.

@example
\`\`\`tsx
<Button isLoading>Saving...</Button>
\`\`\`

@default false`,defaultValue:{value:"false",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:`Full width button - expands to fill container.
Useful for form submissions and card footers.

@example
\`\`\`tsx
<Card.Footer>
  <Button fullWidth>Continue</Button>
</Card.Footer>
\`\`\`

@default false`,defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:`Icon to display on the left side of button text.
Use 20px icons (size={20}) for best results.

@example
\`\`\`tsx
import { Download } from 'lucide-react';
<Button icon={<Download size={20} />}>Download</Button>
\`\`\``},iconRight:{required:!1,tsType:{name:"ReactNode"},description:`Icon to display on the right side of button text.
Commonly used for chevrons/arrows indicating action direction.

@example
\`\`\`tsx
import { ChevronRight } from 'lucide-react';
<Button iconRight={<ChevronRight size={20} />}>Continue</Button>
\`\`\``},iconOnly:{required:!1,tsType:{name:"boolean"},description:`Icon-only button (no text, just icon).

@requires aria-label - MUST provide aria-label for accessibility

@example
\`\`\`tsx
import { Settings } from 'lucide-react';

// CORRECT - has aria-label
<Button iconOnly icon={<Settings size={20} />} aria-label="Settings" />

// WRONG - missing aria-label (accessibility violation)
<Button iconOnly icon={<Settings size={20} />} />
\`\`\`

@default false`,defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:`Button content (text and/or elements).
Ignored when iconOnly is true.`},type:{defaultValue:{value:"'button'",computed:!1},required:!1}},composes:["ButtonHTMLAttributes"]};export{l as B};
