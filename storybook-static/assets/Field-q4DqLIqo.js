import{j as n}from"./jsx-runtime-u17CrQMm.js";import{r as g}from"./index-Bi6L2ga8.js";import{C as b}from"./circle-alert-BMPEDkj1.js";const W="_fieldContainer_aewgj_9",P="_fullWidth_aewgj_15",R="_disabled_aewgj_19",C="_label_aewgj_24",z="_labelText_aewgj_40",$="_optional_aewgj_44",A="_required_aewgj_50",S="_inputWrapper_aewgj_57",D="_input_aewgj_57",L="_error_aewgj_133",U="_leftIcon_aewgj_150",B="_rightIcon_aewgj_151",O="_rightIconInteractive_aewgj_171",V="_errorIconInline_aewgj_202",k="_errorIconMessage_aewgj_208",G="_sm_aewgj_213",H="_md_aewgj_222",Q="_lg_aewgj_231",J="_hasLeftIcon_aewgj_241",K="_hasRightIcon_aewgj_245",X="_helperText_aewgj_250",Y="_errorMessage_aewgj_259",e={fieldContainer:W,fullWidth:P,disabled:R,label:C,labelText:z,optional:$,required:A,inputWrapper:S,input:D,error:L,leftIcon:U,rightIcon:B,rightIconInteractive:O,errorIconInline:V,errorIconMessage:k,sm:G,md:H,lg:Q,hasLeftIcon:J,hasRightIcon:K,helperText:X,errorMessage:Y},x=g.forwardRef(({label:r,error:a,helperText:l,leftIcon:o,rightIcon:i,fullWidth:I=!1,size:d="md",optional:p=!1,className:w,id:j,disabled:m,required:c,"aria-label":y,"aria-describedby":u,...v},T)=>{const N=g.useId(),t=j||`field-${N}`,h=`${t}-error`,f=`${t}-helper`,_=a&&!i,s=[];a&&s.push(h),l&&!a&&s.push(f),u&&s.push(u);const q=s.length>0?s.join(" "):void 0,F=[e.fieldContainer,I&&e.fullWidth,a&&e.error,m&&e.disabled,w].filter(Boolean).join(" "),E=[e.input,e[d],o&&e.hasLeftIcon,(i||_)&&e.hasRightIcon].filter(Boolean).join(" "),M=d==="sm"?14:d==="lg"?20:16;return n.jsxs("div",{className:F,children:[r&&n.jsxs("label",{htmlFor:t,className:e.label,children:[n.jsx("span",{className:e.labelText,children:r}),p&&n.jsx("span",{className:e.optional,"aria-hidden":"true",children:"(optional)"}),c&&!p&&n.jsx("span",{className:e.required,"aria-hidden":"true",children:"*"})]}),n.jsxs("div",{className:e.inputWrapper,children:[o&&n.jsx("span",{className:e.leftIcon,"aria-hidden":"true",children:o}),n.jsx("input",{ref:T,id:t,className:E,disabled:m,required:c,"aria-required":c||void 0,"aria-invalid":a?"true":void 0,"aria-describedby":q,"aria-label":r?void 0:y,...v}),i&&n.jsx("span",{className:`${e.rightIcon} ${e.rightIconInteractive}`,children:i}),_&&n.jsx("span",{className:`${e.rightIcon} ${e.errorIconInline}`,"aria-hidden":"true",children:n.jsx(b,{size:M})})]}),l&&!a&&n.jsx("p",{id:f,className:e.helperText,children:l}),a&&n.jsxs("p",{id:h,className:e.errorMessage,role:"alert","aria-live":"assertive",children:[n.jsx(b,{size:14,"aria-hidden":"true",className:e.errorIconMessage}),n.jsx("span",{children:a})]})]})});x.displayName="Field";x.__docgenInfo={description:"",methods:[],displayName:"Field",props:{label:{required:!1,tsType:{name:"string"},description:'Input label text displayed above the input.\nRequired for accessibility unless aria-label is provided.\n\n@example\n```tsx\n<Field label="Email Address" type="email" />\n```'},error:{required:!1,tsType:{name:"string"},description:`Error message - shows error state and displays message below input.
Takes precedence over helperText when both are provided.
Automatically associated with input via aria-describedby.

@example
\`\`\`tsx
<Field
  label="Email"
  type="email"
  error="Please enter a valid email address"
/>
\`\`\``},helperText:{required:!1,tsType:{name:"string"},description:`Helper text displayed below input (when no error).
Provides additional context or instructions.

@example
\`\`\`tsx
<Field
  label="Password"
  type="password"
  helperText="Must be at least 8 characters"
/>
\`\`\``},leftIcon:{required:!1,tsType:{name:"ReactNode"},description:`Icon to display on the left side of input.
Use 18px icons (size={18}) for best results.

@example
\`\`\`tsx
import { Mail } from 'lucide-react';
<Field leftIcon={<Mail size={18} />} label="Email" type="email" />
\`\`\``},rightIcon:{required:!1,tsType:{name:"ReactNode"},description:`Icon to display on the right side of input.
Can be an icon or interactive element (e.g., password toggle).

@example
\`\`\`tsx
import { Eye, EyeOff } from 'lucide-react';

<Field
  label="Password"
  type={showPassword ? 'text' : 'password'}
  rightIcon={
    <button onClick={() => setShowPassword(!showPassword)}>
      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
    </button>
  }
/>
\`\`\``},fullWidth:{required:!1,tsType:{name:"boolean"},description:`Full width input - expands to fill container.

@example
\`\`\`tsx
<form style={{ maxWidth: '400px' }}>
  <Field label="Name" fullWidth />
  <Field label="Email" type="email" fullWidth />
</form>
\`\`\`

@default false`,defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`Input size variant.

@semanticGuide
- \`sm\`: Dense UIs, tables, compact forms
- \`md\`: Default - most forms (recommended)
- \`lg\`: Prominent forms, search inputs

@default 'md'`,defaultValue:{value:"'md'",computed:!1}},optional:{required:!1,tsType:{name:"boolean"},description:`Shows "(optional)" indicator next to label.
Use when most fields are required but some are optional.

@example
\`\`\`tsx
<Field label="Phone Number" type="tel" optional />
\`\`\`

@default false`,defaultValue:{value:"false",computed:!1}},"aria-label":{required:!1,tsType:{name:"string"},description:`Accessible label for screen readers when no visible label is provided.
REQUIRED if \`label\` prop is not provided.

@example
\`\`\`tsx
// Icon-only search input
<Field
  aria-label="Search"
  leftIcon={<Search size={18} />}
  placeholder="Search..."
/>
\`\`\``},"aria-describedby":{required:!1,tsType:{name:"string"},description:`Additional element IDs that describe this input.
Automatically includes error and helper text IDs when provided.

@example
\`\`\`tsx
<p id="password-requirements">Must be 8+ characters</p>
<Field
  label="Password"
  type="password"
  aria-describedby="password-requirements"
/>
\`\`\``}},composes:["Omit"]};export{x as F};
