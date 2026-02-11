import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as t}from"./index-Bi6L2ga8.js";import{M as T}from"./minus-D7ovpRdW.js";import{C as w}from"./check-DDKQb6IN.js";import{C as R}from"./circle-alert-BMPEDkj1.js";const E="_container_1ggcm_12",M="_disabled_1ggcm_18",W="_labelWrapper_1ggcm_26",A="_input_1ggcm_43",S="_checkbox_1ggcm_55",z="_checkmark_1ggcm_76",D="_sm_1ggcm_92",$="_md_1ggcm_102",B="_lg_1ggcm_112",U="_error_1ggcm_199",V="_label_1ggcm_26",F="_required_1ggcm_232",H="_helperText_1ggcm_238",O="_errorMessage_1ggcm_256",s={container:E,disabled:M,labelWrapper:W,input:A,checkbox:S,checkmark:z,sm:D,md:$,lg:B,error:U,label:V,required:F,helperText:H,errorMessage:O},u=t.forwardRef(({label:n,helperText:o,error:a,size:g="md",indeterminate:i=!1,className:_,id:x,disabled:m,required:d,checked:f,"aria-label":k,"aria-describedby":p,...y},v)=>{const j=t.useId(),c=x||`checkbox-${j}`,h=`${c}-error`,b=`${c}-helper`,C=t.useRef(null),l=v||C;t.useEffect(()=>{l.current&&(l.current.indeterminate=i)},[i,l]);const r=[];a&&r.push(h),o&&!a&&r.push(b),p&&r.push(p);const q=r.length>0?r.join(" "):void 0,I=i?"mixed":void 0,N=[s.container,s[g],a&&s.error,m&&s.disabled,_].filter(Boolean).join(" ");return e.jsxs("div",{className:N,children:[e.jsx("input",{ref:l,type:"checkbox",id:c,className:s.input,disabled:m,required:d,checked:f,"aria-required":d||void 0,"aria-invalid":a?"true":void 0,"aria-checked":I,"aria-describedby":q,"aria-label":n?void 0:k,...y}),e.jsxs("label",{htmlFor:c,className:s.labelWrapper,children:[e.jsx("span",{className:s.checkbox,"aria-hidden":"true",children:e.jsx("span",{className:s.checkmark,children:i?e.jsx(T,{strokeWidth:3}):e.jsx(w,{strokeWidth:3})})}),n&&e.jsxs("span",{className:s.label,children:[n,d&&e.jsx("span",{className:s.required,"aria-hidden":"true",children:"*"})]})]}),o&&!a&&e.jsx("p",{id:b,className:s.helperText,children:o}),a&&e.jsxs("p",{id:h,className:s.errorMessage,role:"alert","aria-live":"assertive",children:[e.jsx(R,{size:14,"aria-hidden":"true"}),e.jsx("span",{children:a})]})]})});u.displayName="Checkbox";u.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"string"},description:`Checkbox label text.
Required for accessibility unless aria-label is provided.`},helperText:{required:!1,tsType:{name:"string"},description:`Helper text displayed below the checkbox.
Automatically linked via aria-describedby.`},error:{required:!1,tsType:{name:"string"},description:`Error message.
Shows error state and displays message below checkbox.`},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`Checkbox size variant.
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},indeterminate:{required:!1,tsType:{name:"boolean"},description:`Indeterminate state (partially checked).
Used for "select all" patterns where some items are selected.
Sets aria-checked="mixed" for screen readers.
@default false`,defaultValue:{value:"false",computed:!1}},"aria-label":{required:!1,tsType:{name:"string"},description:`Accessible label for screen readers when no visible label is provided.
REQUIRED if \`label\` prop is not provided.

@example
\`\`\`tsx
<Checkbox
  aria-label="Select row 1"
  checked={selected}
  onChange={handleSelect}
/>
\`\`\``},"aria-describedby":{required:!1,tsType:{name:"string"},description:`Additional element IDs that describe this checkbox.
Automatically includes error and helper text IDs when provided.`}},composes:["Omit"]};export{u as C};
