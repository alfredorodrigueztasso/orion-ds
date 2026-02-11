import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r}from"./index-Bi6L2ga8.js";import{C as B}from"./chevron-down-buXKF-gJ.js";import{F as z}from"./file-text-3QR_BDt1.js";import{S as N}from"./settings-DVkWYkkM.js";import{S as F}from"./shield-DhOd_9EY.js";import{C as W}from"./circle-question-mark-C_pzcBL4.js";import"./createLucideIcon-DprCCbyf.js";const V="_accordion_fxm5k_9",L="_item_fxm5k_24",M="_bordered_fxm5k_33",P="_header_fxm5k_43",Q="_expanded_fxm5k_57",U="_contentInner_fxm5k_62",G="_separated_fxm5k_69",H="_disabled_fxm5k_91",R="_icon_fxm5k_130",Y="_title_fxm5k_137",$="_chevron_fxm5k_141",J="_chevronExpanded_fxm5k_149",K="_content_fxm5k_62",X="_animated_fxm5k_161",Z="_contentExpanded_fxm5k_169",t={accordion:V,default:"_default_fxm5k_20",item:L,bordered:M,header:P,expanded:Q,contentInner:U,separated:G,disabled:H,icon:R,title:Y,chevron:$,chevronExpanded:J,content:K,animated:X,contentExpanded:Z},ee=({item:a,isExpanded:n,onToggle:u,variant:C,animated:m})=>{const d=r.useId(),p=r.useId(),k=[t.item,t[C],n&&t.expanded,a.disabled&&t.disabled].filter(Boolean).join(" "),I=[t.content,m&&t.animated,n&&t.contentExpanded].filter(Boolean).join(" ");return e.jsxs("div",{className:k,children:[e.jsxs("button",{id:p,type:"button",className:t.header,onClick:u,disabled:a.disabled,"aria-expanded":n,"aria-controls":d,children:[a.icon&&e.jsx("span",{className:t.icon,"aria-hidden":"true",children:a.icon}),e.jsx("span",{className:t.title,children:a.title}),e.jsx("span",{className:`${t.chevron} ${n?t.chevronExpanded:""}`,"aria-hidden":"true",children:e.jsx(B,{size:20})})]}),e.jsx("div",{id:d,role:"region","aria-labelledby":p,className:I,hidden:!n,children:e.jsx("div",{className:t.contentInner,children:a.content})})]})},s=r.forwardRef(({items:a,variant:n="default",allowMultiple:u=!1,defaultExpanded:C=[],expanded:m,onChange:d,animated:p=!0,className:k,...I},q)=>{const[D,w]=r.useState(C),A=m!==void 0,c=A?m:D,T=r.useCallback(i=>{let l;c.includes(i)?l=c.filter(O=>O!==i):u?l=[...c,i]:l=[i],A||w(l),d?.(l)},[c,u,A,d]),E=[t.accordion,t[n],k].filter(Boolean).join(" ");return e.jsx("div",{ref:q,className:E,...I,children:a.map(i=>e.jsx(ee,{item:i,isExpanded:c.includes(i.id),onToggle:()=>T(i.id),variant:n,animated:p},i.id))})});s.displayName="Accordion";s.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"AccordionItem"}],raw:"AccordionItem[]"},description:"Array of accordion items"},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'bordered' | 'separated'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'bordered'"},{name:"literal",value:"'separated'"}]},description:`Visual variant of the accordion
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},allowMultiple:{required:!1,tsType:{name:"boolean"},description:`Allow multiple items to be expanded at once
@default false`,defaultValue:{value:"false",computed:!1}},defaultExpanded:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Default expanded item IDs (uncontrolled)",defaultValue:{value:"[]",computed:!1}},expanded:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Controlled expanded item IDs"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(expandedIds: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"expandedIds"}],return:{name:"void"}}},description:"Callback when expansion state changes"},animated:{required:!1,tsType:{name:"boolean"},description:`Whether to animate the expand/collapse
@default true`,defaultValue:{value:"true",computed:!1}}},composes:["Omit"]};const ce={title:"Components/Data Display/Accordion",component:s,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{variant:{control:"radio",options:["default","bordered","separated"]}}},o=[{id:"1",title:"What is Orion Design System?",content:'Orion is an AI-first design system built on the "Chain of Truth" principle. It eliminates UI hallucination by enforcing strict separation between primitives, semantics, and components.'},{id:"2",title:"How do I install Orion?",content:"You can install Orion using npm: npm install @orion/react @orion/core. Make sure to import the CSS file in your application entry point."},{id:"3",title:"Does Orion support theming?",content:"Yes! Orion supports multiple themes (light/dark) and multiple brands (orion, uvm, unitec, laureate). Theme and brand are controlled globally via the ThemeProvider component."}],f={args:{items:o}},x={args:{items:o,variant:"bordered"}},h={args:{items:o,variant:"separated"}},g={args:{items:o,allowMultiple:!0}},v={args:{items:o,defaultExpanded:["1"]}},b={args:{items:[{id:"1",title:"Getting Started",content:"Learn how to set up and configure Orion Design System in your project.",icon:e.jsx(z,{size:20})},{id:"2",title:"Configuration",content:"Customize themes, brands, and tokens to match your design requirements.",icon:e.jsx(N,{size:20})},{id:"3",title:"Security",content:"Best practices for securing your application when using Orion components.",icon:e.jsx(F,{size:20})},{id:"4",title:"FAQ",content:"Frequently asked questions about Orion Design System.",icon:e.jsx(W,{size:20})}],variant:"separated"}},y={args:{items:[{id:"1",title:"Available Section",content:"This section can be expanded."},{id:"2",title:"Disabled Section",content:"This content is hidden.",disabled:!0},{id:"3",title:"Another Available",content:"This section can also be expanded."}]}},_={render:()=>{const[a,n]=r.useState(["1"]);return e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:16,display:"flex",gap:8},children:[e.jsx("button",{onClick:()=>n(["1"]),children:"Open First"}),e.jsx("button",{onClick:()=>n(["2"]),children:"Open Second"}),e.jsx("button",{onClick:()=>n([]),children:"Close All"})]}),e.jsx(s,{items:o,expanded:a,onChange:n})]})}},S={args:{items:[{id:"1",title:"Terms of Service",content:`
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        `},{id:"2",title:"Privacy Policy",content:"We take your privacy seriously. This section outlines how we collect, use, and protect your personal information."}],variant:"bordered"}},j={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:32},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:16},children:"Default"}),e.jsx(s,{items:o.slice(0,2),variant:"default"})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:16},children:"Bordered"}),e.jsx(s,{items:o.slice(0,2),variant:"bordered"})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:16},children:"Separated"}),e.jsx(s,{items:o.slice(0,2),variant:"separated"})]})]})};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems
  }
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    variant: 'bordered'
  }
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    variant: 'separated'
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    allowMultiple: true
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    defaultExpanded: ['1']
  }
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: '1',
      title: 'Getting Started',
      content: 'Learn how to set up and configure Orion Design System in your project.',
      icon: <FileText size={20} />
    }, {
      id: '2',
      title: 'Configuration',
      content: 'Customize themes, brands, and tokens to match your design requirements.',
      icon: <Settings size={20} />
    }, {
      id: '3',
      title: 'Security',
      content: 'Best practices for securing your application when using Orion components.',
      icon: <Shield size={20} />
    }, {
      id: '4',
      title: 'FAQ',
      content: 'Frequently asked questions about Orion Design System.',
      icon: <HelpCircle size={20} />
    }],
    variant: 'separated'
  }
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: '1',
      title: 'Available Section',
      content: 'This section can be expanded.'
    }, {
      id: '2',
      title: 'Disabled Section',
      content: 'This content is hidden.',
      disabled: true
    }, {
      id: '3',
      title: 'Another Available',
      content: 'This section can also be expanded.'
    }]
  }
}`,...y.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [expanded, setExpanded] = useState<string[]>(['1']);
    return <div>
        <div style={{
        marginBottom: 16,
        display: 'flex',
        gap: 8
      }}>
          <button onClick={() => setExpanded(['1'])}>Open First</button>
          <button onClick={() => setExpanded(['2'])}>Open Second</button>
          <button onClick={() => setExpanded([])}>Close All</button>
        </div>
        <Accordion items={defaultItems} expanded={expanded} onChange={setExpanded} />
      </div>;
  }
}`,..._.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: '1',
      title: 'Terms of Service',
      content: \`
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        \`
    }, {
      id: '2',
      title: 'Privacy Policy',
      content: 'We take your privacy seriously. This section outlines how we collect, use, and protect your personal information.'
    }],
    variant: 'bordered'
  }
}`,...S.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32
  }}>
      <div>
        <h3 style={{
        marginBottom: 16
      }}>Default</h3>
        <Accordion items={defaultItems.slice(0, 2)} variant="default" />
      </div>
      <div>
        <h3 style={{
        marginBottom: 16
      }}>Bordered</h3>
        <Accordion items={defaultItems.slice(0, 2)} variant="bordered" />
      </div>
      <div>
        <h3 style={{
        marginBottom: 16
      }}>Separated</h3>
        <Accordion items={defaultItems.slice(0, 2)} variant="separated" />
      </div>
    </div>
}`,...j.parameters?.docs?.source}}};const le=["Default","Bordered","Separated","AllowMultiple","DefaultExpanded","WithIcons","WithDisabledItems","Controlled","LongContent","AllVariants"];export{j as AllVariants,g as AllowMultiple,x as Bordered,_ as Controlled,f as Default,v as DefaultExpanded,S as LongContent,h as Separated,y as WithDisabledItems,b as WithIcons,le as __namedExportsOrder,ce as default};
