import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as m}from"./index-Bi6L2ga8.js";import{C as k}from"./circle-alert-BMPEDkj1.js";const j="_container_6zd5k_12",R="_disabled_6zd5k_18",N="_labelWrapper_6zd5k_26",q="_input_6zd5k_43",I="_radio_6zd5k_55",T="_dot_6zd5k_76",w="_sm_6zd5k_90",A="_md_6zd5k_100",E="_lg_6zd5k_110",M="_error_6zd5k_181",W="_label_6zd5k_26",C="_required_6zd5k_214",D="_helperText_6zd5k_220",$="_errorMessage_6zd5k_238",e={container:j,disabled:R,labelWrapper:N,input:q,radio:I,dot:T,sm:w,md:A,lg:E,error:M,label:W,required:C,helperText:D,errorMessage:$},_=m.forwardRef(({label:d,helperText:l,error:s,size:u="md",className:b,id:h,disabled:t,required:n,"aria-label":x,"aria-describedby":o,...f},y)=>{const g=m.useId(),i=h||`radio-${g}`,c=`${i}-error`,p=`${i}-helper`,r=[];s&&r.push(c),l&&!s&&r.push(p),o&&r.push(o);const v=r.length>0?r.join(" "):void 0,z=[e.container,e[u],s&&e.error,t&&e.disabled,b].filter(Boolean).join(" ");return a.jsxs("div",{className:z,children:[a.jsx("input",{ref:y,type:"radio",id:i,className:e.input,disabled:t,required:n,"aria-required":n||void 0,"aria-invalid":s?"true":void 0,"aria-describedby":v,"aria-label":d?void 0:x,...f}),a.jsxs("label",{htmlFor:i,className:e.labelWrapper,children:[a.jsx("span",{className:e.radio,"aria-hidden":"true",children:a.jsx("span",{className:e.dot})}),d&&a.jsxs("span",{className:e.label,children:[d,n&&a.jsx("span",{className:e.required,"aria-hidden":"true",children:"*"})]})]}),l&&!s&&a.jsx("p",{id:p,className:e.helperText,children:l}),s&&a.jsxs("p",{id:c,className:e.errorMessage,role:"alert","aria-live":"assertive",children:[a.jsx(k,{size:14,"aria-hidden":"true"}),a.jsx("span",{children:s})]})]})});_.displayName="Radio";_.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{label:{required:!1,tsType:{name:"string"},description:`Radio label text.
Required for accessibility unless aria-label is provided.`},helperText:{required:!1,tsType:{name:"string"},description:`Helper text displayed below the radio.
Automatically linked via aria-describedby.`},error:{required:!1,tsType:{name:"string"},description:`Error message.
Shows error state and displays message below radio.`},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`Radio size variant.
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},"aria-label":{required:!1,tsType:{name:"string"},description:`Accessible label for screen readers when no visible label is provided.
REQUIRED if \`label\` prop is not provided.

@example
\`\`\`tsx
<Radio
  name="color"
  value="red"
  aria-label="Red color"
  style={{ background: 'red' }}
/>
\`\`\``},"aria-describedby":{required:!1,tsType:{name:"string"},description:`Additional element IDs that describe this radio.
Automatically includes error and helper text IDs when provided.`}},composes:["Omit"]};export{_ as R};
