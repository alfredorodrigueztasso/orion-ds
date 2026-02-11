import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as l}from"./index-Bi6L2ga8.js";import{C as G}from"./circle-alert-BMPEDkj1.js";import{C as J}from"./check-DDKQb6IN.js";import{B as v}from"./Button-C5l-MScQ.js";import{U as Q}from"./user-CUEj3VL3.js";import{C as U}from"./credit-card-DVOexJYu.js";import{P as $}from"./package-DxuTZZfD.js";import{C as H}from"./circle-check-big-CA7x2PYe.js";import{F as Z}from"./file-text-3QR_BDt1.js";import"./createLucideIcon-DprCCbyf.js";const ee="_stepper_15gfg_10",te="_list_15gfg_14",re="_horizontal_15gfg_26",ie="_item_15gfg_33",ne="_step_15gfg_10",se="_indicator_15gfg_70",ae="_sm_15gfg_84",oe="_md_15gfg_90",le="_lg_15gfg_96",ce="_upcoming_15gfg_107",de="_current_15gfg_114",pe="_complete_15gfg_122",ue="_error_15gfg_129",me="_number_15gfg_139",ge="_content_15gfg_147",ve="_title_15gfg_158",fe="_optional_15gfg_179",he="_description_15gfg_190",Se="_errorMessage_15gfg_209",xe="_connector_15gfg_218",ye="_vertical_15gfg_250",be="_clickable_15gfg_292",Ce="_disabled_15gfg_318",ze="_scrollable_15gfg_394",n={stepper:ee,list:te,horizontal:re,item:ie,step:ne,"label-right":"_label-right_15gfg_61",indicator:se,sm:ae,md:oe,lg:le,upcoming:ce,current:de,complete:pe,error:ue,number:me,content:ge,title:ve,optional:fe,description:he,errorMessage:Se,connector:xe,"label-bottom":"_label-bottom_15gfg_240",vertical:ye,clickable:be,disabled:Ce,scrollable:ze},je=({step:t,index:i,status:r,size:a,showNumber:h,showCheckmark:u,clickable:d,onClick:m,labelPosition:O})=>{const q=l.useCallback(()=>{d&&!t.disabled&&m&&m()},[d,t.disabled,m]),S=l.useCallback(f=>{(f.key==="Enter"||f.key===" ")&&d&&!t.disabled&&(f.preventDefault(),m?.())},[d,t.disabled,m]),F=[n.step,n[r],n[a],n[`label-${O}`],d&&!t.disabled&&n.clickable,t.disabled&&n.disabled].filter(Boolean).join(" "),C=a==="sm"?14:a==="lg"?20:16,L=()=>r==="error"||t.error?e.jsx(G,{size:C}):t.icon?t.icon:r==="complete"&&u?e.jsx(J,{size:C}):h?e.jsx("span",{className:n.number,children:i+1}):null;return e.jsxs("div",{className:F,role:d?"button":void 0,tabIndex:d&&!t.disabled?0:void 0,"aria-current":r==="current"?"step":void 0,"aria-disabled":t.disabled,onClick:q,onKeyDown:S,children:[e.jsx("div",{className:n.indicator,children:L()}),e.jsxs("div",{className:n.content,children:[e.jsxs("span",{className:n.title,children:[t.title,t.optional&&e.jsx("span",{className:n.optional,children:"(Optional)"})]}),t.description&&e.jsx("span",{className:n.description,children:t.description}),(t.error||r==="error")&&t.errorMessage&&e.jsx("span",{className:n.errorMessage,children:t.errorMessage})]})]})},s=l.forwardRef(({steps:t,currentStep:i=0,onStepClick:r,clickable:a=!1,orientation:h="horizontal",size:u="md",showNumbers:d=!0,showConnectors:m=!0,showCheckmarks:O=!0,labelPosition:q="bottom",scrollable:S=!1,className:F,...C},L)=>{const f=l.useRef(null);l.useEffect(()=>{if(S&&f.current){const o=f.current.children[i];o&&o.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})}},[i,S]);const K=c=>t[c]?.error?"error":c<i?"complete":c===i?"current":"upcoming",Y=l.useCallback(c=>{const o=t[c];r&&o&&!o.disabled&&r(c,o)},[r,t]),X=[n.stepper,n[h],n[u],m&&n.withConnectors,S&&n.scrollable,F].filter(Boolean).join(" ");return e.jsx("div",{ref:L,className:X,role:"navigation","aria-label":"Progress",...C,children:e.jsx("ol",{ref:f,className:n.list,children:t.map((c,o)=>e.jsxs("li",{className:n.item,children:[e.jsx(je,{step:c,index:o,status:K(o),size:u,showNumber:d,showCheckmark:O,clickable:a,onClick:()=>Y(o),labelPosition:q}),m&&o<t.length-1&&e.jsx("div",{className:`${n.connector} ${o<i?n.complete:""}`,"aria-hidden":"true"})]},c.id))})})});s.displayName="Stepper";s.__docgenInfo={description:"",methods:[],displayName:"Stepper",props:{steps:{required:!0,tsType:{name:"Array",elements:[{name:"StepItem"}],raw:"StepItem[]"},description:"Array of step items"},currentStep:{required:!1,tsType:{name:"number"},description:`Current active step index (0-based)
@default 0`,defaultValue:{value:"0",computed:!1}},onStepClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(stepIndex: number, step: StepItem) => void",signature:{arguments:[{type:{name:"number"},name:"stepIndex"},{type:{name:"StepItem"},name:"step"}],return:{name:"void"}}},description:"Callback when a step is clicked (if clickable)"},clickable:{required:!1,tsType:{name:"boolean"},description:`Whether steps are clickable
@default false`,defaultValue:{value:"false",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:`Stepper orientation
@default 'horizontal'`,defaultValue:{value:"'horizontal'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`Size variant
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},showNumbers:{required:!1,tsType:{name:"boolean"},description:`Whether to show step numbers
@default true`,defaultValue:{value:"true",computed:!1}},showConnectors:{required:!1,tsType:{name:"boolean"},description:`Whether to show connector lines between steps
@default true`,defaultValue:{value:"true",computed:!1}},showCheckmarks:{required:!1,tsType:{name:"boolean"},description:`Whether completed steps should be marked with a checkmark
@default true`,defaultValue:{value:"true",computed:!1}},labelPosition:{required:!1,tsType:{name:"union",raw:"'bottom' | 'right'",elements:[{name:"literal",value:"'bottom'"},{name:"literal",value:"'right'"}]},description:`Alternative label position (only for horizontal orientation)
@default 'bottom'`,defaultValue:{value:"'bottom'",computed:!1}},scrollable:{required:!1,tsType:{name:"boolean"},description:`Enable horizontal scrolling on mobile for better UX with many steps
When enabled, labels remain visible and the stepper scrolls horizontally.
Auto-scrolls to center the current step when it changes.
@default false`,defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const Ve={title:"Components/Navigation/Stepper",component:s,parameters:{layout:"padded",docs:{description:{component:"A minimalist stepper component inspired by Linear's design language. Features thin borders, subtle colors, and clean typography."}}},tags:["autodocs"],argTypes:{size:{control:"radio",options:["sm","md","lg"]},orientation:{control:"radio",options:["horizontal","vertical"]}}},p=[{id:"1",title:"Account"},{id:"2",title:"Profile"},{id:"3",title:"Review"},{id:"4",title:"Complete"}],g=[{id:"1",title:"Account Details",description:"Enter your email and password"},{id:"2",title:"Personal Info",description:"Tell us about yourself"},{id:"3",title:"Payment Method",description:"Add a payment method"},{id:"4",title:"Confirmation",description:"Review and submit"}],z={args:{steps:g,currentStep:1}},j={args:{steps:g,currentStep:1}},k={render:()=>{const[t,i]=l.useState(0);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-6)"},children:[e.jsx(s,{steps:g,currentStep:t,clickable:!0,onStepClick:r=>{r<=t&&i(r)}}),e.jsxs("div",{style:{display:"flex",gap:"var(--spacing-3)",justifyContent:"center"},children:[e.jsx(v,{variant:"secondary",onClick:()=>i(Math.max(0,t-1)),disabled:t===0,children:"Previous"}),e.jsx(v,{onClick:()=>i(Math.min(g.length-1,t+1)),disabled:t===g.length-1,children:t===g.length-2?"Finish":"Next"})]})]})}},_={args:{steps:[{id:"1",title:"Account",icon:e.jsx(Q,{size:16})},{id:"2",title:"Payment",icon:e.jsx(U,{size:16})},{id:"3",title:"Shipping",icon:e.jsx($,{size:16})},{id:"4",title:"Complete",icon:e.jsx(H,{size:16})}],currentStep:2,showNumbers:!1}},w={args:{steps:g,currentStep:1,orientation:"vertical"}},B={args:{steps:[{id:"1",title:"Basic Info",description:"Required information"},{id:"2",title:"Additional Details",description:"Extra information",optional:!0},{id:"3",title:"Review",description:"Check your information"}],currentStep:0}},A={args:{steps:[{id:"1",title:"Account",description:"Email and password"},{id:"2",title:"Verification",description:"Verify your email",error:!0,errorMessage:"Verification failed. Please try again."},{id:"3",title:"Complete",description:"Finish setup"}],currentStep:1}},R={args:{steps:p,currentStep:2,size:"sm"}},T={args:{steps:p,currentStep:2,size:"lg"}},W={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-10)"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"var(--spacing-4)",color:"var(--text-tertiary)",fontSize:"var(--font-size-12)",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Small"}),e.jsx(s,{steps:p,currentStep:1,size:"sm"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"var(--spacing-4)",color:"var(--text-tertiary)",fontSize:"var(--font-size-12)",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Medium (Default)"}),e.jsx(s,{steps:p,currentStep:1,size:"md"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"var(--spacing-4)",color:"var(--text-tertiary)",fontSize:"var(--font-size-12)",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Large"}),e.jsx(s,{steps:p,currentStep:1,size:"lg"})]})]})},N={args:{steps:p,currentStep:2,showNumbers:!1}},P={args:{steps:p,currentStep:2,showConnectors:!1}},M={args:{steps:g,currentStep:1,labelPosition:"right"}},V={args:{steps:p,currentStep:p.length}},I={args:{steps:[{id:"1",title:"Step 1"},{id:"2",title:"Step 2",disabled:!0},{id:"3",title:"Step 3"},{id:"4",title:"Step 4",disabled:!0}],currentStep:0,clickable:!0}},D={render:()=>{const[t,i]=l.useState(1),r=[{id:"1",title:"Account",description:"Create account"},{id:"2",title:"Profile",description:"Add your info"},{id:"3",title:"Verify",description:"Confirm email"},{id:"4",title:"Done",description:"All set!"}];return e.jsxs("div",{style:{maxWidth:"375px",margin:"0 auto",border:"1px solid var(--border-subtle)",borderRadius:"24px",overflow:"hidden",background:"var(--surface-base)"},children:[e.jsx("div",{style:{height:"44px",background:"var(--surface-base)",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("div",{style:{width:"120px",height:"28px",background:"var(--text-primary)",borderRadius:"20px"}})}),e.jsxs("div",{style:{padding:"var(--spacing-4)"},children:[e.jsx(s,{steps:r,currentStep:t}),e.jsxs("div",{style:{marginTop:"var(--spacing-6)",padding:"var(--spacing-5)",background:"var(--surface-subtle)",borderRadius:"var(--radius-control)",textAlign:"center"},children:[e.jsxs("div",{style:{fontSize:"var(--font-size-12)",color:"var(--text-tertiary)",marginBottom:"var(--spacing-1)"},children:["Step ",t+1," of ",r.length]}),e.jsx("h3",{style:{fontSize:"var(--font-size-18)",marginBottom:"var(--spacing-1)"},children:r[t]?.title}),e.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"var(--font-size-14)"},children:r[t]?.description})]}),e.jsxs("div",{style:{display:"flex",gap:"var(--spacing-3)",marginTop:"var(--spacing-4)"},children:[e.jsx(v,{variant:"secondary",fullWidth:!0,onClick:()=>i(Math.max(0,t-1)),disabled:t===0,children:"Back"}),e.jsx(v,{fullWidth:!0,onClick:()=>i(Math.min(r.length-1,t+1)),disabled:t===r.length-1,children:t===r.length-2?"Finish":"Next"})]})]}),e.jsx("div",{style:{height:"34px",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("div",{style:{width:"134px",height:"5px",background:"var(--text-tertiary)",borderRadius:"3px"}})})]})}},E={render:()=>{const[t,i]=l.useState(0),r=[{id:"cart",title:"Cart",icon:e.jsx($,{size:14})},{id:"shipping",title:"Shipping",icon:e.jsx(Z,{size:14})},{id:"payment",title:"Payment",icon:e.jsx(U,{size:14})},{id:"confirm",title:"Confirm",icon:e.jsx(H,{size:14})}],a=[{title:"Review Cart",desc:"Review your shopping cart and make any changes."},{title:"Shipping Address",desc:"Enter your shipping address for delivery."},{title:"Payment Method",desc:"Add your payment information securely."},{title:"Confirm Order",desc:"Review your order and place it."}];return e.jsxs("div",{style:{maxWidth:"500px",margin:"0 auto"},children:[e.jsx(s,{steps:r,currentStep:t,showNumbers:!1}),e.jsxs("div",{style:{marginTop:"var(--spacing-6)",padding:"var(--spacing-6)",background:"var(--surface-subtle)",borderRadius:"var(--radius-control)"},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"var(--spacing-6)"},children:[e.jsx("div",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"48px",height:"48px",borderRadius:"50%",background:"var(--soft-brand)",color:"var(--text-brand)",marginBottom:"var(--spacing-3)"},children:r[t]?.icon}),e.jsx("h3",{style:{marginBottom:"var(--spacing-1)"},children:a[t]?.title}),e.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"var(--font-size-14)"},children:a[t]?.desc})]}),e.jsxs("div",{style:{display:"flex",gap:"var(--spacing-3)"},children:[e.jsx(v,{variant:"secondary",fullWidth:!0,onClick:()=>i(Math.max(0,t-1)),disabled:t===0,children:"Back"}),e.jsx(v,{fullWidth:!0,onClick:()=>t<r.length-1?i(t+1):alert("Order placed!"),children:t===r.length-1?"Place Order":"Continue"})]})]})]})}},x={render:()=>{const[t,i]=l.useState(2),r=[{id:"1",title:"Account",description:"Create account"},{id:"2",title:"Profile",description:"Add your info"},{id:"3",title:"Verification",description:"Verify email"},{id:"4",title:"Payment",description:"Add payment"},{id:"5",title:"Review",description:"Review details"},{id:"6",title:"Complete",description:"All done!"}];return e.jsxs("div",{style:{maxWidth:"375px",margin:"0 auto",border:"1px solid var(--border-subtle)",borderRadius:"24px",overflow:"hidden",background:"var(--surface-base)"},children:[e.jsx("div",{style:{height:"44px",background:"var(--surface-base)",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("div",{style:{width:"120px",height:"28px",background:"var(--text-primary)",borderRadius:"20px"}})}),e.jsxs("div",{style:{padding:"var(--spacing-4)"},children:[e.jsx("p",{style:{fontSize:"var(--font-size-12)",color:"var(--text-tertiary)",marginBottom:"var(--spacing-3)",textAlign:"center"},children:"Scrollable mode - swipe horizontally"}),e.jsx(s,{steps:r,currentStep:t,scrollable:!0,clickable:!0,onStepClick:a=>i(a)}),e.jsxs("div",{style:{marginTop:"var(--spacing-6)",padding:"var(--spacing-5)",background:"var(--surface-subtle)",borderRadius:"var(--radius-control)",textAlign:"center"},children:[e.jsxs("div",{style:{fontSize:"var(--font-size-12)",color:"var(--text-tertiary)",marginBottom:"var(--spacing-1)"},children:["Step ",t+1," of ",r.length]}),e.jsx("h3",{style:{fontSize:"var(--font-size-18)",marginBottom:"var(--spacing-1)"},children:r[t]?.title}),e.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"var(--font-size-14)"},children:r[t]?.description})]}),e.jsxs("div",{style:{display:"flex",gap:"var(--spacing-3)",marginTop:"var(--spacing-4)"},children:[e.jsx(v,{variant:"secondary",fullWidth:!0,onClick:()=>i(Math.max(0,t-1)),disabled:t===0,children:"Back"}),e.jsx(v,{fullWidth:!0,onClick:()=>i(Math.min(r.length-1,t+1)),disabled:t===r.length-1,children:t===r.length-2?"Finish":"Next"})]})]}),e.jsx("div",{style:{height:"34px",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("div",{style:{width:"134px",height:"5px",background:"var(--text-tertiary)",borderRadius:"3px"}})})]})}},y={render:()=>{const[t,i]=l.useState(2),[r,a]=l.useState(2),h=[{id:"1",title:"Account",description:"Create account"},{id:"2",title:"Profile",description:"Add your info"},{id:"3",title:"Verification",description:"Verify email"},{id:"4",title:"Payment",description:"Add payment"},{id:"5",title:"Review",description:"Review details"}];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-10)"},children:[e.jsxs("div",{style:{maxWidth:"375px"},children:[e.jsx("p",{style:{marginBottom:"var(--spacing-4)",color:"var(--text-tertiary)",fontSize:"var(--font-size-12)",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Default (compressed on mobile)"}),e.jsx(s,{steps:h,currentStep:t,clickable:!0,onStepClick:u=>i(u)})]}),e.jsxs("div",{style:{maxWidth:"375px"},children:[e.jsx("p",{style:{marginBottom:"var(--spacing-4)",color:"var(--text-tertiary)",fontSize:"var(--font-size-12)",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Scrollable (labels visible, swipe to see more)"}),e.jsx(s,{steps:h,currentStep:r,scrollable:!0,clickable:!0,onStepClick:u=>a(u)})]})]})}},b={render:()=>{const t=[{id:"1",title:"Completed",description:"This step is done"},{id:"2",title:"Current",description:"You are here"},{id:"3",title:"Upcoming",description:"Not started yet"}],i=[{id:"1",title:"Account"},{id:"2",title:"Verification",error:!0},{id:"3",title:"Complete"}];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-10)"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"var(--spacing-4)",color:"var(--text-tertiary)",fontSize:"var(--font-size-12)",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Standard States"}),e.jsx(s,{steps:t,currentStep:1})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"var(--spacing-4)",color:"var(--text-tertiary)",fontSize:"var(--font-size-12)",textTransform:"uppercase",letterSpacing:"0.05em"},children:"With Error State"}),e.jsx(s,{steps:i,currentStep:1})]})]})}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    steps: detailedSteps,
    currentStep: 1
  }
}`,...z.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    steps: detailedSteps,
    currentStep: 1
  }
}`,...j.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [currentStep, setCurrentStep] = useState(0);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-6)'
    }}>
        <Stepper steps={detailedSteps} currentStep={currentStep} clickable onStepClick={index => {
        if (index <= currentStep) {
          setCurrentStep(index);
        }
      }} />
        <div style={{
        display: 'flex',
        gap: 'var(--spacing-3)',
        justifyContent: 'center'
      }}>
          <Button variant="secondary" onClick={() => setCurrentStep(Math.max(0, currentStep - 1))} disabled={currentStep === 0}>
            Previous
          </Button>
          <Button onClick={() => setCurrentStep(Math.min(detailedSteps.length - 1, currentStep + 1))} disabled={currentStep === detailedSteps.length - 1}>
            {currentStep === detailedSteps.length - 2 ? 'Finish' : 'Next'}
          </Button>
        </div>
      </div>;
  }
}`,...k.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    steps: [{
      id: '1',
      title: 'Account',
      icon: <User size={16} />
    }, {
      id: '2',
      title: 'Payment',
      icon: <CreditCard size={16} />
    }, {
      id: '3',
      title: 'Shipping',
      icon: <Package size={16} />
    }, {
      id: '4',
      title: 'Complete',
      icon: <CheckCircle size={16} />
    }],
    currentStep: 2,
    showNumbers: false
  }
}`,..._.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    steps: detailedSteps,
    currentStep: 1,
    orientation: 'vertical'
  }
}`,...w.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    steps: [{
      id: '1',
      title: 'Basic Info',
      description: 'Required information'
    }, {
      id: '2',
      title: 'Additional Details',
      description: 'Extra information',
      optional: true
    }, {
      id: '3',
      title: 'Review',
      description: 'Check your information'
    }],
    currentStep: 0
  }
}`,...B.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    steps: [{
      id: '1',
      title: 'Account',
      description: 'Email and password'
    }, {
      id: '2',
      title: 'Verification',
      description: 'Verify your email',
      error: true,
      errorMessage: 'Verification failed. Please try again.'
    }, {
      id: '3',
      title: 'Complete',
      description: 'Finish setup'
    }],
    currentStep: 1
  }
}`,...A.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    steps: basicSteps,
    currentStep: 2,
    size: 'sm'
  }
}`,...R.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    steps: basicSteps,
    currentStep: 2,
    size: 'lg'
  }
}`,...T.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-10)'
  }}>
      <div>
        <p style={{
        marginBottom: 'var(--spacing-4)',
        color: 'var(--text-tertiary)',
        fontSize: 'var(--font-size-12)',
        textTransform: 'uppercase',
        letterSpacing: '0.05em'
      }}>Small</p>
        <Stepper steps={basicSteps} currentStep={1} size="sm" />
      </div>
      <div>
        <p style={{
        marginBottom: 'var(--spacing-4)',
        color: 'var(--text-tertiary)',
        fontSize: 'var(--font-size-12)',
        textTransform: 'uppercase',
        letterSpacing: '0.05em'
      }}>Medium (Default)</p>
        <Stepper steps={basicSteps} currentStep={1} size="md" />
      </div>
      <div>
        <p style={{
        marginBottom: 'var(--spacing-4)',
        color: 'var(--text-tertiary)',
        fontSize: 'var(--font-size-12)',
        textTransform: 'uppercase',
        letterSpacing: '0.05em'
      }}>Large</p>
        <Stepper steps={basicSteps} currentStep={1} size="lg" />
      </div>
    </div>
}`,...W.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    steps: basicSteps,
    currentStep: 2,
    showNumbers: false
  }
}`,...N.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    steps: basicSteps,
    currentStep: 2,
    showConnectors: false
  }
}`,...P.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    steps: detailedSteps,
    currentStep: 1,
    labelPosition: 'right'
  }
}`,...M.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    steps: basicSteps,
    currentStep: basicSteps.length
  }
}`,...V.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    steps: [{
      id: '1',
      title: 'Step 1'
    }, {
      id: '2',
      title: 'Step 2',
      disabled: true
    }, {
      id: '3',
      title: 'Step 3'
    }, {
      id: '4',
      title: 'Step 4',
      disabled: true
    }],
    currentStep: 0,
    clickable: true
  }
}`,...I.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [currentStep, setCurrentStep] = useState(1);
    const steps = [{
      id: '1',
      title: 'Account',
      description: 'Create account'
    }, {
      id: '2',
      title: 'Profile',
      description: 'Add your info'
    }, {
      id: '3',
      title: 'Verify',
      description: 'Confirm email'
    }, {
      id: '4',
      title: 'Done',
      description: 'All set!'
    }];
    return <div style={{
      maxWidth: '375px',
      margin: '0 auto',
      border: '1px solid var(--border-subtle)',
      borderRadius: '24px',
      overflow: 'hidden',
      background: 'var(--surface-base)'
    }}>
        {/* Phone notch */}
        <div style={{
        height: '44px',
        background: 'var(--surface-base)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
          <div style={{
          width: '120px',
          height: '28px',
          background: 'var(--text-primary)',
          borderRadius: '20px'
        }} />
        </div>

        {/* Content */}
        <div style={{
        padding: 'var(--spacing-4)'
      }}>
          <Stepper steps={steps} currentStep={currentStep} />

          {/* Current step info shown separately on mobile */}
          <div style={{
          marginTop: 'var(--spacing-6)',
          padding: 'var(--spacing-5)',
          background: 'var(--surface-subtle)',
          borderRadius: 'var(--radius-control)',
          textAlign: 'center'
        }}>
            <div style={{
            fontSize: 'var(--font-size-12)',
            color: 'var(--text-tertiary)',
            marginBottom: 'var(--spacing-1)'
          }}>
              Step {currentStep + 1} of {steps.length}
            </div>
            <h3 style={{
            fontSize: 'var(--font-size-18)',
            marginBottom: 'var(--spacing-1)'
          }}>
              {steps[currentStep]?.title}
            </h3>
            <p style={{
            color: 'var(--text-secondary)',
            fontSize: 'var(--font-size-14)'
          }}>
              {steps[currentStep]?.description}
            </p>
          </div>

          <div style={{
          display: 'flex',
          gap: 'var(--spacing-3)',
          marginTop: 'var(--spacing-4)'
        }}>
            <Button variant="secondary" fullWidth onClick={() => setCurrentStep(Math.max(0, currentStep - 1))} disabled={currentStep === 0}>
              Back
            </Button>
            <Button fullWidth onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))} disabled={currentStep === steps.length - 1}>
              {currentStep === steps.length - 2 ? 'Finish' : 'Next'}
            </Button>
          </div>
        </div>

        {/* Home indicator */}
        <div style={{
        height: '34px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
          <div style={{
          width: '134px',
          height: '5px',
          background: 'var(--text-tertiary)',
          borderRadius: '3px'
        }} />
        </div>
      </div>;
  }
}`,...D.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [currentStep, setCurrentStep] = useState(0);
    const steps = [{
      id: 'cart',
      title: 'Cart',
      icon: <Package size={14} />
    }, {
      id: 'shipping',
      title: 'Shipping',
      icon: <FileText size={14} />
    }, {
      id: 'payment',
      title: 'Payment',
      icon: <CreditCard size={14} />
    }, {
      id: 'confirm',
      title: 'Confirm',
      icon: <CheckCircle size={14} />
    }];
    const stepContent = [{
      title: 'Review Cart',
      desc: 'Review your shopping cart and make any changes.'
    }, {
      title: 'Shipping Address',
      desc: 'Enter your shipping address for delivery.'
    }, {
      title: 'Payment Method',
      desc: 'Add your payment information securely.'
    }, {
      title: 'Confirm Order',
      desc: 'Review your order and place it.'
    }];
    return <div style={{
      maxWidth: '500px',
      margin: '0 auto'
    }}>
        <Stepper steps={steps} currentStep={currentStep} showNumbers={false} />

        <div style={{
        marginTop: 'var(--spacing-6)',
        padding: 'var(--spacing-6)',
        background: 'var(--surface-subtle)',
        borderRadius: 'var(--radius-control)'
      }}>
          <div style={{
          textAlign: 'center',
          marginBottom: 'var(--spacing-6)'
        }}>
            <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: 'var(--soft-brand)',
            color: 'var(--text-brand)',
            marginBottom: 'var(--spacing-3)'
          }}>
              {steps[currentStep]?.icon}
            </div>
            <h3 style={{
            marginBottom: 'var(--spacing-1)'
          }}>{stepContent[currentStep]?.title}</h3>
            <p style={{
            color: 'var(--text-secondary)',
            fontSize: 'var(--font-size-14)'
          }}>
              {stepContent[currentStep]?.desc}
            </p>
          </div>

          <div style={{
          display: 'flex',
          gap: 'var(--spacing-3)'
        }}>
            <Button variant="secondary" fullWidth onClick={() => setCurrentStep(Math.max(0, currentStep - 1))} disabled={currentStep === 0}>
              Back
            </Button>
            <Button fullWidth onClick={() => currentStep < steps.length - 1 ? setCurrentStep(currentStep + 1) : alert('Order placed!')}>
              {currentStep === steps.length - 1 ? 'Place Order' : 'Continue'}
            </Button>
          </div>
        </div>
      </div>;
  }
}`,...E.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [currentStep, setCurrentStep] = useState(2);
    const steps = [{
      id: '1',
      title: 'Account',
      description: 'Create account'
    }, {
      id: '2',
      title: 'Profile',
      description: 'Add your info'
    }, {
      id: '3',
      title: 'Verification',
      description: 'Verify email'
    }, {
      id: '4',
      title: 'Payment',
      description: 'Add payment'
    }, {
      id: '5',
      title: 'Review',
      description: 'Review details'
    }, {
      id: '6',
      title: 'Complete',
      description: 'All done!'
    }];
    return <div style={{
      maxWidth: '375px',
      margin: '0 auto',
      border: '1px solid var(--border-subtle)',
      borderRadius: '24px',
      overflow: 'hidden',
      background: 'var(--surface-base)'
    }}>
        {/* Phone notch */}
        <div style={{
        height: '44px',
        background: 'var(--surface-base)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
          <div style={{
          width: '120px',
          height: '28px',
          background: 'var(--text-primary)',
          borderRadius: '20px'
        }} />
        </div>

        {/* Content */}
        <div style={{
        padding: 'var(--spacing-4)'
      }}>
          <p style={{
          fontSize: 'var(--font-size-12)',
          color: 'var(--text-tertiary)',
          marginBottom: 'var(--spacing-3)',
          textAlign: 'center'
        }}>
            Scrollable mode - swipe horizontally
          </p>

          <Stepper steps={steps} currentStep={currentStep} scrollable clickable onStepClick={index => setCurrentStep(index)} />

          {/* Current step info */}
          <div style={{
          marginTop: 'var(--spacing-6)',
          padding: 'var(--spacing-5)',
          background: 'var(--surface-subtle)',
          borderRadius: 'var(--radius-control)',
          textAlign: 'center'
        }}>
            <div style={{
            fontSize: 'var(--font-size-12)',
            color: 'var(--text-tertiary)',
            marginBottom: 'var(--spacing-1)'
          }}>
              Step {currentStep + 1} of {steps.length}
            </div>
            <h3 style={{
            fontSize: 'var(--font-size-18)',
            marginBottom: 'var(--spacing-1)'
          }}>
              {steps[currentStep]?.title}
            </h3>
            <p style={{
            color: 'var(--text-secondary)',
            fontSize: 'var(--font-size-14)'
          }}>
              {steps[currentStep]?.description}
            </p>
          </div>

          <div style={{
          display: 'flex',
          gap: 'var(--spacing-3)',
          marginTop: 'var(--spacing-4)'
        }}>
            <Button variant="secondary" fullWidth onClick={() => setCurrentStep(Math.max(0, currentStep - 1))} disabled={currentStep === 0}>
              Back
            </Button>
            <Button fullWidth onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))} disabled={currentStep === steps.length - 1}>
              {currentStep === steps.length - 2 ? 'Finish' : 'Next'}
            </Button>
          </div>
        </div>

        {/* Home indicator */}
        <div style={{
        height: '34px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
          <div style={{
          width: '134px',
          height: '5px',
          background: 'var(--text-tertiary)',
          borderRadius: '3px'
        }} />
        </div>
      </div>;
  }
}`,...x.parameters?.docs?.source},description:{story:`Scrollable Mobile - Shows the stepper with horizontal scrolling enabled for many steps.
Best viewed in mobile viewport. Labels stay visible and scroll with touch/drag.`,...x.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [step1, setStep1] = useState(2);
    const [step2, setStep2] = useState(2);
    const steps = [{
      id: '1',
      title: 'Account',
      description: 'Create account'
    }, {
      id: '2',
      title: 'Profile',
      description: 'Add your info'
    }, {
      id: '3',
      title: 'Verification',
      description: 'Verify email'
    }, {
      id: '4',
      title: 'Payment',
      description: 'Add payment'
    }, {
      id: '5',
      title: 'Review',
      description: 'Review details'
    }];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-10)'
    }}>
        <div style={{
        maxWidth: '375px'
      }}>
          <p style={{
          marginBottom: 'var(--spacing-4)',
          color: 'var(--text-tertiary)',
          fontSize: 'var(--font-size-12)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
            Default (compressed on mobile)
          </p>
          <Stepper steps={steps} currentStep={step1} clickable onStepClick={index => setStep1(index)} />
        </div>

        <div style={{
        maxWidth: '375px'
      }}>
          <p style={{
          marginBottom: 'var(--spacing-4)',
          color: 'var(--text-tertiary)',
          fontSize: 'var(--font-size-12)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
            Scrollable (labels visible, swipe to see more)
          </p>
          <Stepper steps={steps} currentStep={step2} scrollable clickable onStepClick={index => setStep2(index)} />
        </div>
      </div>;
  }
}`,...y.parameters?.docs?.source},description:{story:"Scrollable Comparison - Compare scrollable vs default mode side by side",...y.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const statesSteps = [{
      id: '1',
      title: 'Completed',
      description: 'This step is done'
    }, {
      id: '2',
      title: 'Current',
      description: 'You are here'
    }, {
      id: '3',
      title: 'Upcoming',
      description: 'Not started yet'
    }];
    const errorSteps = [{
      id: '1',
      title: 'Account'
    }, {
      id: '2',
      title: 'Verification',
      error: true
    }, {
      id: '3',
      title: 'Complete'
    }];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-10)'
    }}>
        <div>
          <p style={{
          marginBottom: 'var(--spacing-4)',
          color: 'var(--text-tertiary)',
          fontSize: 'var(--font-size-12)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
            Standard States
          </p>
          <Stepper steps={statesSteps} currentStep={1} />
        </div>
        <div>
          <p style={{
          marginBottom: 'var(--spacing-4)',
          color: 'var(--text-tertiary)',
          fontSize: 'var(--font-size-12)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
            With Error State
          </p>
          <Stepper steps={errorSteps} currentStep={1} />
        </div>
      </div>;
  }
}`,...b.parameters?.docs?.source},description:{story:"States Overview - Shows all status states in a clean presentation",...b.parameters?.docs?.description}}};const Ie=["Default","WithDescriptions","Interactive","WithIcons","Vertical","WithOptionalSteps","WithError","SmallSize","LargeSize","AllSizes","NoNumbers","NoConnectors","LabelRight","AllCompleted","WithDisabledSteps","MobilePreview","CheckoutWizard","ScrollableMobile","ScrollableComparison","StatesOverview"];export{V as AllCompleted,W as AllSizes,E as CheckoutWizard,z as Default,k as Interactive,M as LabelRight,T as LargeSize,D as MobilePreview,P as NoConnectors,N as NoNumbers,y as ScrollableComparison,x as ScrollableMobile,R as SmallSize,b as StatesOverview,w as Vertical,j as WithDescriptions,I as WithDisabledSteps,A as WithError,_ as WithIcons,B as WithOptionalSteps,Ie as __namedExportsOrder,Ve as default};
