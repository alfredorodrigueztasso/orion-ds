import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as T}from"./index-Bi6L2ga8.js";import{C as K}from"./circle-alert-BMPEDkj1.js";import{C as G}from"./check-DDKQb6IN.js";import{U as J}from"./user-CUEj3VL3.js";import{C as Q}from"./credit-card-DVOexJYu.js";import{F as X}from"./file-text-3QR_BDt1.js";import{C as Y}from"./circle-check-big-CA7x2PYe.js";import"./createLucideIcon-DprCCbyf.js";const Z="_stepper_1ju9j_8",ee="_horizontal_1ju9j_16",te="_vertical_1ju9j_21",se="_step_1ju9j_8",re="_stepContent_1ju9j_43",ae="_stepClickable_1ju9j_54",ne="_stepIcon_1ju9j_70",ie="_stepIconActive_1ju9j_86",oe="_stepIconCompleted_1ju9j_91",le="_stepIconError_1ju9j_96",ce="_stepText_1ju9j_105",pe="_stepLabel_1ju9j_112",de="_stepActive_1ju9j_120",me="_stepCompleted_1ju9j_125",ue="_stepError_1ju9j_129",ve="_stepOptional_1ju9j_133",Se="_stepDescription_1ju9j_138",ge="_stepErrorMessage_1ju9j_145",fe="_connector_1ju9j_155",ye="_connectorCompleted_1ju9j_174",be="_alternativeLabel_1ju9j_208",he="_sm_1ju9j_235",je="_lg_1ju9j_253",s={stepper:Z,horizontal:ee,vertical:te,step:se,stepContent:re,stepClickable:ae,stepIcon:ne,stepIconActive:ie,stepIconCompleted:oe,stepIconError:le,stepText:ce,stepLabel:pe,stepActive:de,stepCompleted:me,stepError:ue,stepOptional:ve,stepDescription:Se,stepErrorMessage:ge,connector:fe,connectorCompleted:ye,"connector-dashed":"_connector-dashed_1ju9j_179","connector-dotted":"_connector-dotted_1ju9j_188",alternativeLabel:be,sm:he,lg:je},i=T.forwardRef(({steps:a,activeStep:o,onStepClick:C,orientation:_="horizontal",allowClickOnCompleted:l=!0,allowClickOnFuture:E=!1,showStepNumbers:O=!0,connectorStyle:L="solid",size:c="md",alternativeLabel:M=!1,className:F,...P},R)=>{const z=t=>t<o,I=t=>t===o,q=t=>t>o,D=t=>C?z(t)?l:I(t)?!0:q(t)?E:!1:!1,N=t=>{D(t)&&C?.(t)},V=(t,n)=>t.error?e.jsx(K,{size:c==="sm"?14:c==="lg"?20:16}):z(n)?e.jsx(G,{size:c==="sm"?14:c==="lg"?20:16}):t.icon?t.icon:O?e.jsx("span",{children:n+1}):null,W=[s.stepper,s[_],s[c],s[`connector-${L}`],M&&_==="horizontal"&&s.alternativeLabel,F].filter(Boolean).join(" ");return e.jsx("div",{ref:R,className:W,role:"navigation","aria-label":"Progress",...P,children:a.map((t,n)=>{const w=z(n),A=I(n),k=D(n),$=n===a.length-1,U=[s.step,w&&s.stepCompleted,A&&s.stepActive,t.error&&s.stepError,k&&s.stepClickable].filter(Boolean).join(" "),H=[s.stepIcon,w&&s.stepIconCompleted,A&&s.stepIconActive,t.error&&s.stepIconError].filter(Boolean).join(" ");return e.jsxs("div",{className:U,children:[e.jsxs("div",{className:s.stepContent,onClick:()=>N(n),onKeyDown:B=>{(B.key==="Enter"||B.key===" ")&&k&&N(n)},role:k?"button":void 0,tabIndex:k?0:void 0,"aria-current":A?"step":void 0,children:[e.jsx("div",{className:H,children:V(t,n)}),e.jsxs("div",{className:s.stepText,children:[e.jsxs("span",{className:s.stepLabel,children:[t.label,t.optional&&e.jsx("span",{className:s.stepOptional,children:" (Optional)"})]}),t.description&&e.jsx("span",{className:s.stepDescription,children:t.description}),t.error&&t.errorMessage&&e.jsx("span",{className:s.stepErrorMessage,children:t.errorMessage})]})]}),!$&&e.jsx("div",{className:`${s.connector} ${w?s.connectorCompleted:""}`})]},t.id)})})});i.displayName="Stepper";i.__docgenInfo={description:"",methods:[],displayName:"Stepper",props:{steps:{required:!0,tsType:{name:"Array",elements:[{name:"StepItem"}],raw:"StepItem[]"},description:"Step items"},activeStep:{required:!0,tsType:{name:"number"},description:"Current active step index (0-based)"},onStepClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:"Click handler for step navigation"},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:`Orientation
@default "horizontal"`,defaultValue:{value:"'horizontal'",computed:!1}},allowClickOnCompleted:{required:!1,tsType:{name:"boolean"},description:`Allow clicking on completed steps
@default true`,defaultValue:{value:"true",computed:!1}},allowClickOnFuture:{required:!1,tsType:{name:"boolean"},description:`Allow clicking on future steps
@default false`,defaultValue:{value:"false",computed:!1}},showStepNumbers:{required:!1,tsType:{name:"boolean"},description:`Show step numbers
@default true`,defaultValue:{value:"true",computed:!1}},connectorStyle:{required:!1,tsType:{name:"union",raw:"'solid' | 'dashed' | 'dotted'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'dashed'"},{name:"literal",value:"'dotted'"}]},description:`Connector line style
@default "solid"`,defaultValue:{value:"'solid'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`Size variant
@default "md"`,defaultValue:{value:"'md'",computed:!1}},alternativeLabel:{required:!1,tsType:{name:"boolean"},description:`Alternative label placement (horizontal only)
@default false`,defaultValue:{value:"false",computed:!1}}},composes:["HTMLAttributes"]};const Ne={title:"Sections/App/Stepper",component:i,parameters:{layout:"padded"},tags:["autodocs"]},r=[{id:"account",label:"Account Details",description:"Enter your information"},{id:"payment",label:"Payment",description:"Add payment method"},{id:"review",label:"Review",description:"Confirm your order"},{id:"complete",label:"Complete",description:"Order placed"}],p={args:{steps:r,activeStep:1,onStepClick:a=>console.log("Step clicked:",a)}},d={render:()=>{const[a,o]=T.useState(0),C=()=>{o(l=>Math.min(l+1,r.length-1))},_=()=>{o(l=>Math.max(l-1,0))};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-8)"},children:[e.jsx(i,{steps:r,activeStep:a,onStepClick:o}),e.jsxs("div",{style:{textAlign:"center",padding:"var(--spacing-8)",background:"var(--surface-subtle)",borderRadius:"var(--radius-sm)"},children:[e.jsx("h3",{style:{margin:"0 0 var(--spacing-2)",fontSize:"var(--font-size-18)"},children:r[a]?.label}),e.jsx("p",{style:{color:"var(--text-secondary)",margin:0},children:r[a]?.description})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("button",{onClick:_,disabled:a===0,style:{padding:"var(--spacing-2) var(--spacing-4)",background:"var(--surface-subtle)",border:"1px solid var(--border-default)",borderRadius:"var(--radius-sm)",cursor:a===0?"not-allowed":"pointer",opacity:a===0?.5:1},children:"Back"}),e.jsx("button",{onClick:C,disabled:a===r.length-1,style:{padding:"var(--spacing-2) var(--spacing-4)",background:"var(--interactive-primary)",color:"var(--interactive-primary-text)",border:"none",borderRadius:"var(--radius-sm)",cursor:a===r.length-1?"not-allowed":"pointer",opacity:a===r.length-1?.5:1},children:a===r.length-1?"Finish":"Next"})]})]})}},m={args:{steps:r,activeStep:2,orientation:"vertical",onStepClick:a=>console.log("Step clicked:",a)}},u={args:{steps:[{id:"account",label:"Account",icon:e.jsx(J,{size:18})},{id:"payment",label:"Payment",icon:e.jsx(Q,{size:18})},{id:"review",label:"Review",icon:e.jsx(X,{size:18})},{id:"complete",label:"Complete",icon:e.jsx(Y,{size:18})}],activeStep:1,showStepNumbers:!1}},v={args:{steps:[{id:"details",label:"Details"},{id:"address",label:"Address",optional:!0},{id:"payment",label:"Payment"},{id:"confirm",label:"Confirm"}],activeStep:1}},S={args:{steps:[{id:"details",label:"Details"},{id:"payment",label:"Payment",error:!0,errorMessage:"Payment failed"},{id:"confirm",label:"Confirm"}],activeStep:1}},g={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-12)"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"var(--spacing-4)",fontSize:"var(--font-size-12)",color:"var(--text-tertiary)"},children:"Solid (default)"}),e.jsx(i,{steps:r.slice(0,3),activeStep:1,connectorStyle:"solid"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"var(--spacing-4)",fontSize:"var(--font-size-12)",color:"var(--text-tertiary)"},children:"Dashed"}),e.jsx(i,{steps:r.slice(0,3),activeStep:1,connectorStyle:"dashed"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"var(--spacing-4)",fontSize:"var(--font-size-12)",color:"var(--text-tertiary)"},children:"Dotted"}),e.jsx(i,{steps:r.slice(0,3),activeStep:1,connectorStyle:"dotted"})]})]})},f={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-12)"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"var(--spacing-4)",fontSize:"var(--font-size-12)",color:"var(--text-tertiary)"},children:"Small"}),e.jsx(i,{steps:r.slice(0,3),activeStep:1,size:"sm"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"var(--spacing-4)",fontSize:"var(--font-size-12)",color:"var(--text-tertiary)"},children:"Medium (default)"}),e.jsx(i,{steps:r.slice(0,3),activeStep:1,size:"md"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"var(--spacing-4)",fontSize:"var(--font-size-12)",color:"var(--text-tertiary)"},children:"Large"}),e.jsx(i,{steps:r.slice(0,3),activeStep:1,size:"lg"})]})]})},y={args:{steps:r,activeStep:2,alternativeLabel:!0}},b={args:{steps:r,activeStep:1,allowClickOnCompleted:!1,allowClickOnFuture:!1}},h={args:{steps:r,activeStep:0,allowClickOnFuture:!0,onStepClick:a=>alert(`Clicked step ${a+1}`)}},j={args:{steps:r,activeStep:4}},x={args:{steps:[{id:"shipping",label:"Shipping"},{id:"payment",label:"Payment"},{id:"review",label:"Review"}],activeStep:0}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    steps: sampleSteps,
    activeStep: 1,
    onStepClick: (index: number) => console.log('Step clicked:', index)
  }
}`,...p.parameters?.docs?.source},description:{story:"Default Stepper (horizontal)",...p.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeStep, setActiveStep] = useState(0);
    const handleNext = () => {
      setActiveStep(prev => Math.min(prev + 1, sampleSteps.length - 1));
    };
    const handleBack = () => {
      setActiveStep(prev => Math.max(prev - 1, 0));
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-8)'
    }}>
        <Stepper steps={sampleSteps} activeStep={activeStep} onStepClick={setActiveStep} />

        <div style={{
        textAlign: 'center',
        padding: 'var(--spacing-8)',
        background: 'var(--surface-subtle)',
        borderRadius: 'var(--radius-sm)'
      }}>
          <h3 style={{
          margin: '0 0 var(--spacing-2)',
          fontSize: 'var(--font-size-18)'
        }}>
            {sampleSteps[activeStep]?.label}
          </h3>
          <p style={{
          color: 'var(--text-secondary)',
          margin: 0
        }}>
            {sampleSteps[activeStep]?.description}
          </p>
        </div>

        <div style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
          <button onClick={handleBack} disabled={activeStep === 0} style={{
          padding: 'var(--spacing-2) var(--spacing-4)',
          background: 'var(--surface-subtle)',
          border: '1px solid var(--border-default)',
          borderRadius: 'var(--radius-sm)',
          cursor: activeStep === 0 ? 'not-allowed' : 'pointer',
          opacity: activeStep === 0 ? 0.5 : 1
        }}>
            Back
          </button>
          <button onClick={handleNext} disabled={activeStep === sampleSteps.length - 1} style={{
          padding: 'var(--spacing-2) var(--spacing-4)',
          background: 'var(--interactive-primary)',
          color: 'var(--interactive-primary-text)',
          border: 'none',
          borderRadius: 'var(--radius-sm)',
          cursor: activeStep === sampleSteps.length - 1 ? 'not-allowed' : 'pointer',
          opacity: activeStep === sampleSteps.length - 1 ? 0.5 : 1
        }}>
            {activeStep === sampleSteps.length - 1 ? 'Finish' : 'Next'}
          </button>
        </div>
      </div>;
  }
}`,...d.parameters?.docs?.source},description:{story:"Interactive Stepper with navigation",...d.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    steps: sampleSteps,
    activeStep: 2,
    orientation: 'vertical',
    onStepClick: (index: number) => console.log('Step clicked:', index)
  }
}`,...m.parameters?.docs?.source},description:{story:"Vertical orientation",...m.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    steps: [{
      id: 'account',
      label: 'Account',
      icon: <User size={18} />
    }, {
      id: 'payment',
      label: 'Payment',
      icon: <CreditCard size={18} />
    }, {
      id: 'review',
      label: 'Review',
      icon: <FileText size={18} />
    }, {
      id: 'complete',
      label: 'Complete',
      icon: <CheckCircle size={18} />
    }],
    activeStep: 1,
    showStepNumbers: false
  }
}`,...u.parameters?.docs?.source},description:{story:"With custom icons",...u.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    steps: [{
      id: 'details',
      label: 'Details'
    }, {
      id: 'address',
      label: 'Address',
      optional: true
    }, {
      id: 'payment',
      label: 'Payment'
    }, {
      id: 'confirm',
      label: 'Confirm'
    }],
    activeStep: 1
  }
}`,...v.parameters?.docs?.source},description:{story:"With optional steps",...v.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    steps: [{
      id: 'details',
      label: 'Details'
    }, {
      id: 'payment',
      label: 'Payment',
      error: true,
      errorMessage: 'Payment failed'
    }, {
      id: 'confirm',
      label: 'Confirm'
    }],
    activeStep: 1
  }
}`,...S.parameters?.docs?.source},description:{story:"With error state",...S.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-12)'
  }}>
      <div>
        <p style={{
        marginBottom: 'var(--spacing-4)',
        fontSize: 'var(--font-size-12)',
        color: 'var(--text-tertiary)'
      }}>
          Solid (default)
        </p>
        <Stepper steps={sampleSteps.slice(0, 3)} activeStep={1} connectorStyle="solid" />
      </div>
      <div>
        <p style={{
        marginBottom: 'var(--spacing-4)',
        fontSize: 'var(--font-size-12)',
        color: 'var(--text-tertiary)'
      }}>
          Dashed
        </p>
        <Stepper steps={sampleSteps.slice(0, 3)} activeStep={1} connectorStyle="dashed" />
      </div>
      <div>
        <p style={{
        marginBottom: 'var(--spacing-4)',
        fontSize: 'var(--font-size-12)',
        color: 'var(--text-tertiary)'
      }}>
          Dotted
        </p>
        <Stepper steps={sampleSteps.slice(0, 3)} activeStep={1} connectorStyle="dotted" />
      </div>
    </div>
}`,...g.parameters?.docs?.source},description:{story:"Different connector styles",...g.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-12)'
  }}>
      <div>
        <p style={{
        marginBottom: 'var(--spacing-4)',
        fontSize: 'var(--font-size-12)',
        color: 'var(--text-tertiary)'
      }}>
          Small
        </p>
        <Stepper steps={sampleSteps.slice(0, 3)} activeStep={1} size="sm" />
      </div>
      <div>
        <p style={{
        marginBottom: 'var(--spacing-4)',
        fontSize: 'var(--font-size-12)',
        color: 'var(--text-tertiary)'
      }}>
          Medium (default)
        </p>
        <Stepper steps={sampleSteps.slice(0, 3)} activeStep={1} size="md" />
      </div>
      <div>
        <p style={{
        marginBottom: 'var(--spacing-4)',
        fontSize: 'var(--font-size-12)',
        color: 'var(--text-tertiary)'
      }}>
          Large
        </p>
        <Stepper steps={sampleSteps.slice(0, 3)} activeStep={1} size="lg" />
      </div>
    </div>
}`,...f.parameters?.docs?.source},description:{story:"Size variants",...f.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    steps: sampleSteps,
    activeStep: 2,
    alternativeLabel: true
  }
}`,...y.parameters?.docs?.source},description:{story:"Alternative label (centered)",...y.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    steps: sampleSteps,
    activeStep: 1,
    allowClickOnCompleted: false,
    allowClickOnFuture: false
  }
}`,...b.parameters?.docs?.source},description:{story:"Non-clickable steps",...b.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    steps: sampleSteps,
    activeStep: 0,
    allowClickOnFuture: true,
    onStepClick: (index: number) => alert(\`Clicked step \${index + 1}\`)
  }
}`,...h.parameters?.docs?.source},description:{story:"Allow future step clicks",...h.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    steps: sampleSteps,
    activeStep: 4 // Past last index
  }
}`,...j.parameters?.docs?.source},description:{story:"Completed state",...j.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    steps: [{
      id: 'shipping',
      label: 'Shipping'
    }, {
      id: 'payment',
      label: 'Payment'
    }, {
      id: 'review',
      label: 'Review'
    }],
    activeStep: 0
  }
}`,...x.parameters?.docs?.source},description:{story:"Three steps (common)",...x.parameters?.docs?.description}}};const Be=["Default","Interactive","Vertical","WithIcons","WithOptionalSteps","WithError","ConnectorStyles","Sizes","AlternativeLabel","NonClickable","AllowFutureClicks","Completed","ThreeSteps"];export{h as AllowFutureClicks,y as AlternativeLabel,j as Completed,g as ConnectorStyles,p as Default,d as Interactive,b as NonClickable,f as Sizes,x as ThreeSteps,m as Vertical,S as WithError,u as WithIcons,v as WithOptionalSteps,Be as __namedExportsOrder,Ne as default};
