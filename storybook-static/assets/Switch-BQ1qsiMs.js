import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as h}from"./index-Bi6L2ga8.js";import{C as N}from"./circle-alert-BMPEDkj1.js";const k="_container_1wog3_12",q="_disabled_1wog3_18",I="_labelWrapper_1wog3_26",T="_input_1wog3_43",S="_track_1wog3_55",E="_thumb_1wog3_79",M="_sm_1wog3_97",A="_md_1wog3_109",R="_lg_1wog3_121",C="_error_1wog3_211",D="_label_1wog3_26",W="_required_1wog3_244",z="_helperText_1wog3_250",$="_errorMessage_1wog3_268",e={container:k,disabled:q,labelWrapper:I,input:T,track:S,thumb:E,sm:M,md:A,lg:R,error:C,label:D,required:W,helperText:z,errorMessage:$},_=h.forwardRef(({label:t,size:u="sm",helperText:l,error:a,className:b,id:g,disabled:o,required:n,checked:d,"aria-label":w,"aria-describedby":c,...x},f)=>{const y=h.useId(),i=g||`switch-${y}`,p=`${i}-error`,m=`${i}-helper`,r=[];a&&r.push(p),l&&!a&&r.push(m),c&&r.push(c);const v=r.length>0?r.join(" "):void 0,j=[e.container,e[u],a&&e.error,o&&e.disabled,b].filter(Boolean).join(" ");return s.jsxs("div",{className:j,children:[s.jsx("input",{ref:f,type:"checkbox",role:"switch",id:i,className:e.input,disabled:o,required:n,checked:d,"aria-checked":d,"aria-required":n||void 0,"aria-invalid":a?"true":void 0,"aria-describedby":v,"aria-label":t?void 0:w,...x}),s.jsxs("label",{htmlFor:i,className:e.labelWrapper,children:[s.jsx("span",{className:e.track,"aria-hidden":"true",children:s.jsx("span",{className:e.thumb})}),t&&s.jsxs("span",{className:e.label,children:[t,n&&s.jsx("span",{className:e.required,"aria-hidden":"true",children:"*"})]})]}),l&&!a&&s.jsx("p",{id:m,className:e.helperText,children:l}),a&&s.jsxs("p",{id:p,className:e.errorMessage,role:"alert","aria-live":"assertive",children:[s.jsx(N,{size:14,"aria-hidden":"true"}),s.jsx("span",{children:a})]})]})});_.displayName="Switch";_.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{label:{required:!1,tsType:{name:"string"},description:`Switch label text.
Required for accessibility unless aria-label is provided.`},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`Switch size variant.
@default 'sm'`,defaultValue:{value:"'sm'",computed:!1}},helperText:{required:!1,tsType:{name:"string"},description:`Helper text displayed below the switch.
Automatically linked via aria-describedby.`},error:{required:!1,tsType:{name:"string"},description:`Error message.
Shows error state and displays message below switch.`},"aria-label":{required:!1,tsType:{name:"string"},description:`Accessible label for screen readers when no visible label is provided.
REQUIRED if \`label\` prop is not provided.

@example
\`\`\`tsx
<Switch
  aria-label="Enable dark mode"
  checked={darkMode}
  onChange={toggleDarkMode}
/>
\`\`\``},"aria-describedby":{required:!1,tsType:{name:"string"},description:`Additional element IDs that describe this switch.
Automatically includes error and helper text IDs when provided.`}},composes:["Omit"]};export{_ as S};
