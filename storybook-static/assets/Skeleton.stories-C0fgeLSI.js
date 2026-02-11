import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as R}from"./index-Bi6L2ga8.js";const W="_skeleton_4ix9v_9",C="_text_4ix9v_18",N="_circular_4ix9v_24",I="_rectangular_4ix9v_28",B="_rounded_4ix9v_32",D="_pulse_4ix9v_40",q="_wave_4ix9v_44",V="_none_4ix9v_65",P="_lines_4ix9v_92",a={skeleton:W,text:C,circular:N,rectangular:I,rounded:B,pulse:D,wave:q,none:V,lines:P},t=R.forwardRef(({variant:u="text",animation:x="pulse",width:y,height:f,lines:w=1,borderRadius:S,className:b,style:z,...k},_)=>{const T=[a.skeleton,a[u],a[x],b].filter(Boolean).join(" "),j={width:typeof y=="number"?`${y}px`:y,height:typeof f=="number"?`${f}px`:f,borderRadius:typeof S=="number"?`${S}px`:S,...z};return u==="text"&&w>1?e.jsx("div",{ref:_,className:a.lines,...k,children:Array.from({length:w}).map((E,A)=>e.jsx("div",{className:T,style:{...j,width:A===w-1?"80%":j.width},"aria-hidden":"true"},A))}):e.jsx("div",{ref:_,className:T,style:j,"aria-hidden":"true",...k})});t.displayName="Skeleton";t.__docgenInfo={description:"",methods:[],displayName:"Skeleton",props:{variant:{required:!1,tsType:{name:"union",raw:"'text' | 'circular' | 'rectangular' | 'rounded'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'circular'"},{name:"literal",value:"'rectangular'"},{name:"literal",value:"'rounded'"}]},description:`Shape variant of the skeleton
@default 'text'`,defaultValue:{value:"'text'",computed:!1}},animation:{required:!1,tsType:{name:"union",raw:"'pulse' | 'wave' | 'none'",elements:[{name:"literal",value:"'pulse'"},{name:"literal",value:"'wave'"},{name:"literal",value:"'none'"}]},description:`Animation type
@default 'pulse'`,defaultValue:{value:"'pulse'",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Width of the skeleton
Can be a number (pixels) or string (e.g., '100%', '10rem')`},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Height of the skeleton
Can be a number (pixels) or string (e.g., '100%', '2rem')`},lines:{required:!1,tsType:{name:"number"},description:`Number of skeleton lines to render (for text variant)
@default 1`,defaultValue:{value:"1",computed:!1}},borderRadius:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Border radius override"}},composes:["HTMLAttributes"]};const $={title:"Components/Data Display/Skeleton",component:t,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{variant:{control:"radio",options:["text","circular","rectangular","rounded"]},animation:{control:"radio",options:["pulse","wave","none"]},width:{control:"text"},height:{control:"text"}}},r={args:{width:200,height:20}},n={args:{variant:"text",width:"100%"}},i={args:{variant:"text",lines:3,width:"100%"}},s={args:{variant:"circular",width:48,height:48}},o={args:{variant:"rectangular",width:300,height:200}},l={args:{variant:"rounded",width:300,height:100}},d={args:{animation:"wave",width:200,height:20}},c={args:{animation:"none",width:200,height:20}},p={render:()=>e.jsxs("div",{style:{width:300,padding:"var(--spacing-4)",border:"1px solid var(--border-subtle)",borderRadius:"var(--radius-control)"},children:[e.jsx(t,{variant:"rectangular",width:"100%",height:160}),e.jsxs("div",{style:{marginTop:"var(--spacing-4)"},children:[e.jsx(t,{variant:"text",width:"80%"}),e.jsx("div",{style:{marginTop:"var(--spacing-2)"},children:e.jsx(t,{variant:"text",lines:2})})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-3)",marginTop:"var(--spacing-4)"},children:[e.jsx(t,{variant:"circular",width:32,height:32}),e.jsx(t,{variant:"text",width:100})]})]})},g={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-4)"},children:[e.jsx(t,{variant:"circular",width:64,height:64}),e.jsxs("div",{children:[e.jsx(t,{variant:"text",width:150,height:24}),e.jsx("div",{style:{marginTop:"var(--spacing-2)"},children:e.jsx(t,{variant:"text",width:200})})]})]})},v={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-3)"},children:Array.from({length:5}).map((u,x)=>e.jsxs("div",{style:{display:"flex",gap:"var(--spacing-4)",alignItems:"center"},children:[e.jsx(t,{variant:"circular",width:40,height:40}),e.jsx(t,{variant:"text",width:150}),e.jsx(t,{variant:"text",width:200}),e.jsx(t,{variant:"rounded",width:80,height:24})]},x))})},m={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-6)"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"var(--spacing-2)",fontWeight:"var(--font-weight-medium)"},children:"Pulse Animation"}),e.jsx(t,{animation:"pulse",width:200,height:20})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"var(--spacing-2)",fontWeight:"var(--font-weight-medium)"},children:"Wave Animation"}),e.jsx(t,{animation:"wave",width:200,height:20})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"var(--spacing-2)",fontWeight:"var(--font-weight-medium)"},children:"No Animation"}),e.jsx(t,{animation:"none",width:200,height:20})]})]})},h={render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--spacing-4)",alignItems:"center",flexWrap:"wrap"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(t,{variant:"text",width:120,height:16}),e.jsx("p",{style:{marginTop:"var(--spacing-2)",fontSize:"var(--font-size-12)",color:"var(--text-secondary)"},children:"Text"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(t,{variant:"circular",width:48,height:48}),e.jsx("p",{style:{marginTop:"var(--spacing-2)",fontSize:"var(--font-size-12)",color:"var(--text-secondary)"},children:"Circular"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(t,{variant:"rectangular",width:120,height:80}),e.jsx("p",{style:{marginTop:"var(--spacing-2)",fontSize:"var(--font-size-12)",color:"var(--text-secondary)"},children:"Rectangular"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(t,{variant:"rounded",width:120,height:80}),e.jsx("p",{style:{marginTop:"var(--spacing-2)",fontSize:"var(--font-size-12)",color:"var(--text-secondary)"},children:"Rounded"})]})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    width: 200,
    height: 20
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    width: '100%'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    lines: 3,
    width: '100%'
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'circular',
    width: 48,
    height: 48
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'rectangular',
    width: 300,
    height: 200
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'rounded',
    width: 300,
    height: 100
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    animation: 'wave',
    width: 200,
    height: 20
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    animation: 'none',
    width: 200,
    height: 20
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 300,
    padding: 'var(--spacing-4)',
    border: '1px solid var(--border-subtle)',
    borderRadius: 'var(--radius-control)'
  }}>
      <Skeleton variant="rectangular" width="100%" height={160} />
      <div style={{
      marginTop: 'var(--spacing-4)'
    }}>
        <Skeleton variant="text" width="80%" />
        <div style={{
        marginTop: 'var(--spacing-2)'
      }}>
          <Skeleton variant="text" lines={2} />
        </div>
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--spacing-3)',
      marginTop: 'var(--spacing-4)'
    }}>
        <Skeleton variant="circular" width={32} height={32} />
        <Skeleton variant="text" width={100} />
      </div>
    </div>
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--spacing-4)'
  }}>
      <Skeleton variant="circular" width={64} height={64} />
      <div>
        <Skeleton variant="text" width={150} height={24} />
        <div style={{
        marginTop: 'var(--spacing-2)'
      }}>
          <Skeleton variant="text" width={200} />
        </div>
      </div>
    </div>
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-3)'
  }}>
      {Array.from({
      length: 5
    }).map((_, i) => <div key={i} style={{
      display: 'flex',
      gap: 'var(--spacing-4)',
      alignItems: 'center'
    }}>
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="text" width={150} />
          <Skeleton variant="text" width={200} />
          <Skeleton variant="rounded" width={80} height={24} />
        </div>)}
    </div>
}`,...v.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-6)'
  }}>
      <div>
        <p style={{
        marginBottom: 'var(--spacing-2)',
        fontWeight: 'var(--font-weight-medium)'
      }}>Pulse Animation</p>
        <Skeleton animation="pulse" width={200} height={20} />
      </div>
      <div>
        <p style={{
        marginBottom: 'var(--spacing-2)',
        fontWeight: 'var(--font-weight-medium)'
      }}>Wave Animation</p>
        <Skeleton animation="wave" width={200} height={20} />
      </div>
      <div>
        <p style={{
        marginBottom: 'var(--spacing-2)',
        fontWeight: 'var(--font-weight-medium)'
      }}>No Animation</p>
        <Skeleton animation="none" width={200} height={20} />
      </div>
    </div>
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--spacing-4)',
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
      <div style={{
      textAlign: 'center'
    }}>
        <Skeleton variant="text" width={120} height={16} />
        <p style={{
        marginTop: 'var(--spacing-2)',
        fontSize: 'var(--font-size-12)',
        color: 'var(--text-secondary)'
      }}>Text</p>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <Skeleton variant="circular" width={48} height={48} />
        <p style={{
        marginTop: 'var(--spacing-2)',
        fontSize: 'var(--font-size-12)',
        color: 'var(--text-secondary)'
      }}>Circular</p>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <Skeleton variant="rectangular" width={120} height={80} />
        <p style={{
        marginTop: 'var(--spacing-2)',
        fontSize: 'var(--font-size-12)',
        color: 'var(--text-secondary)'
      }}>Rectangular</p>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <Skeleton variant="rounded" width={120} height={80} />
        <p style={{
        marginTop: 'var(--spacing-2)',
        fontSize: 'var(--font-size-12)',
        color: 'var(--text-secondary)'
      }}>Rounded</p>
      </div>
    </div>
}`,...h.parameters?.docs?.source}}};const H=["Default","Text","TextMultipleLines","Circular","Rectangular","Rounded","WaveAnimation","NoAnimation","CardSkeleton","ProfileSkeleton","TableRowSkeleton","AnimationComparison","AllVariants"];export{h as AllVariants,m as AnimationComparison,p as CardSkeleton,s as Circular,r as Default,c as NoAnimation,g as ProfileSkeleton,o as Rectangular,l as Rounded,v as TableRowSkeleton,n as Text,i as TextMultipleLines,d as WaveAnimation,H as __namedExportsOrder,$ as default};
