import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as i}from"./index-Bi6L2ga8.js";const ee="_container_1k1mj_16",ae="_sm_1k1mj_24",re="_track_1k1mj_24",se="_input_1k1mj_28",te="_md_1k1mj_38",ne="_lg_1k1mj_52",ie="_fill_1k1mj_76",oe="_valueDisplay_1k1mj_163",le="_ticks_1k1mj_188",ue="_tick_1k1mj_188",ce="_labels_1k1mj_203",de="_labelMin_1k1mj_211",me="_labelMax_1k1mj_212",pe="_disabled_1k1mj_217",t={container:ee,sm:ae,track:re,input:se,md:te,lg:ne,fill:ie,valueDisplay:oe,ticks:le,tick:ue,labels:ce,labelMin:de,labelMax:me,disabled:pe},u=i.forwardRef(({value:a,onChange:n,min:r=0,max:o=100,step:F=1,size:P="md",disabled:I=!1,showValue:A=!1,formatValue:c,showLabels:R=!1,showTicks:E=!1,tickValues:W,label:O,id:U,onChangeStart:M,onChangeEnd:$,className:G,...H},J)=>{const K=i.useId(),Q=U||K,T=i.useRef(!1),q=(a-r)/(o-r)*100,D=c?c(a):a.toString(),X=i.useCallback(l=>{const C=parseFloat(l.target.value);n(C)},[n]),B=i.useCallback(()=>{T.current=!0,M?.()},[M]),N=i.useCallback(()=>{T.current&&(T.current=!1,$?.(a))},[$,a]),Y=()=>{if(W)return W;const l=[],C=(o-r)/4;for(let L=r;L<=o;L+=C)l.push(Math.round(L*100)/100);return l},Z=[t.container,t[P],I&&t.disabled,G].filter(Boolean).join(" ");return e.jsxs("div",{ref:J,className:Z,...H,children:[A&&e.jsx("div",{className:t.valueDisplay,style:{left:`${q}%`},"aria-hidden":"true",children:D}),e.jsxs("div",{className:t.track,children:[e.jsx("div",{className:t.fill,style:{width:`${q}%`},"aria-hidden":"true"}),e.jsx("input",{id:Q,type:"range",className:t.input,value:a,onChange:X,onMouseDown:B,onMouseUp:N,onTouchStart:B,onTouchEnd:N,min:r,max:o,step:F,disabled:I,"aria-label":O,"aria-valuemin":r,"aria-valuemax":o,"aria-valuenow":a,"aria-valuetext":D})]}),E&&e.jsx("div",{className:t.ticks,"aria-hidden":"true",children:Y().map(l=>e.jsx("div",{className:t.tick,style:{left:`${(l-r)/(o-r)*100}%`}},l))}),R&&e.jsxs("div",{className:t.labels,"aria-hidden":"true",children:[e.jsx("span",{className:t.labelMin,children:c?c(r):r}),e.jsx("span",{className:t.labelMax,children:c?c(o):o})]})]})});u.displayName="Slider";u.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{value:{required:!0,tsType:{name:"number"},description:"Current value"},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:"Callback when value changes"},min:{required:!1,tsType:{name:"number"},description:`Minimum value
@default 0`,defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:`Maximum value
@default 100`,defaultValue:{value:"100",computed:!1}},step:{required:!1,tsType:{name:"number"},description:`Step increment
@default 1`,defaultValue:{value:"1",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`Size variant
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`Whether the slider is disabled
@default false`,defaultValue:{value:"false",computed:!1}},showValue:{required:!1,tsType:{name:"boolean"},description:`Show the current value above the thumb
@default false`,defaultValue:{value:"false",computed:!1}},formatValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => string",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"string"}}},description:"Format function for displaying the value"},showLabels:{required:!1,tsType:{name:"boolean"},description:`Show min and max labels
@default false`,defaultValue:{value:"false",computed:!1}},showTicks:{required:!1,tsType:{name:"boolean"},description:`Show tick marks
@default false`,defaultValue:{value:"false",computed:!1}},tickValues:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:"Custom tick values (if not provided, uses step)"},label:{required:!1,tsType:{name:"string"},description:"Label for the slider (accessibility)"},id:{required:!1,tsType:{name:"string"},description:"ID for the slider input"},onChangeStart:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when dragging starts"},onChangeEnd:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:"Callback when dragging ends"}},composes:["Omit"]};const he={title:"Components/Forms/Slider",component:u,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"radio",options:["sm","md","lg"]}},decorators:[a=>e.jsx("div",{style:{width:"300px",padding:"var(--spacing-5)"},children:e.jsx(a,{})})]},s=a=>{const[n,r]=i.useState(a.value??50);return e.jsx(u,{value:n,onChange:r,...a})},d={render:()=>e.jsx(s,{})},m={render:()=>e.jsx(s,{showValue:!0})},p={render:()=>e.jsx(s,{showLabels:!0})},v={render:()=>e.jsx(s,{showValue:!0,showLabels:!0})},g={render:()=>e.jsx(s,{showTicks:!0,showLabels:!0})},h={render:()=>e.jsx(s,{min:-100,max:100,value:0,showValue:!0,showLabels:!0})},f={render:()=>e.jsx(s,{min:0,max:1,step:.01,value:.5,showValue:!0,formatValue:a=>a.toFixed(2)})},x={render:()=>e.jsx(s,{min:0,max:100,step:10,value:50,showValue:!0,showTicks:!0,tickValues:[0,10,20,30,40,50,60,70,80,90,100]})},w={render:()=>e.jsx(s,{showValue:!0,showLabels:!0,formatValue:a=>`${a}%`})},b={render:()=>e.jsx(s,{min:0,max:1e3,value:500,showValue:!0,showLabels:!0,formatValue:a=>`$${a}`})},S={render:()=>e.jsx(s,{size:"sm",showValue:!0})},y={render:()=>e.jsx(s,{size:"lg",showValue:!0})},j={args:{value:50,onChange:()=>{},disabled:!0,showValue:!0}},V={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-8)"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"var(--spacing-2)",fontWeight:"var(--font-weight-medium)",fontSize:"var(--font-size-14)"},children:"Small"}),e.jsx(s,{size:"sm",showValue:!0})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"var(--spacing-2)",fontWeight:"var(--font-weight-medium)",fontSize:"var(--font-size-14)"},children:"Medium (Default)"}),e.jsx(s,{size:"md",showValue:!0})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"var(--spacing-2)",fontWeight:"var(--font-weight-medium)",fontSize:"var(--font-size-14)"},children:"Large"}),e.jsx(s,{size:"lg",showValue:!0})]})]})},k={render:()=>{const[a,n]=i.useState(75);return e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-3)",marginBottom:"var(--spacing-4)"},children:[e.jsx("span",{style:{fontSize:"var(--font-size-24)"},children:"🔊"}),e.jsxs("span",{style:{fontWeight:"var(--font-weight-medium)"},children:[a,"%"]})]}),e.jsx(u,{value:a,onChange:n,min:0,max:100,label:"Volume",showTicks:!0,tickValues:[0,25,50,75,100]})]})}},_={render:()=>{const[a,n]=i.useState(250);return e.jsxs("div",{children:[e.jsxs("p",{style:{marginBottom:"var(--spacing-4)",fontWeight:"var(--font-weight-medium)"},children:["Max Price: $",a]}),e.jsx(u,{value:a,onChange:n,min:0,max:500,step:10,showValue:!0,showLabels:!0,formatValue:r=>`$${r}`,label:"Maximum price"})]})}},z={render:()=>{const[a,n]=i.useState(22);return e.jsxs("div",{children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"var(--spacing-4)"},children:[e.jsxs("span",{style:{fontSize:"var(--font-size-48)",fontWeight:"var(--font-weight-bold)"},children:[a,"°"]}),e.jsx("p",{style:{color:"var(--text-secondary)",marginTop:"var(--spacing-1)"},children:a<18?"❄️ Cold":a>24?"🔥 Warm":"✨ Comfortable"})]}),e.jsx(u,{value:a,onChange:n,min:15,max:30,step:.5,showLabels:!0,formatValue:r=>`${r}°C`,label:"Temperature"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveSlider />
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveSlider showValue />
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveSlider showLabels />
}`,...p.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveSlider showValue showLabels />
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveSlider showTicks showLabels />
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveSlider min={-100} max={100} value={0} showValue showLabels />
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveSlider min={0} max={1} step={0.01} value={0.5} showValue formatValue={v => v.toFixed(2)} />
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveSlider min={0} max={100} step={10} value={50} showValue showTicks tickValues={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]} />
}`,...x.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:"{\n  render: () => <InteractiveSlider showValue showLabels formatValue={v => `${v}%`} />\n}",...w.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"{\n  render: () => <InteractiveSlider min={0} max={1000} value={500} showValue showLabels formatValue={v => `$${v}`} />\n}",...b.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveSlider size="sm" showValue />
}`,...S.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveSlider size="lg" showValue />
}`,...y.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    value: 50,
    onChange: () => {},
    disabled: true,
    showValue: true
  }
}`,...j.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-8)'
  }}>
      <div>
        <p style={{
        marginBottom: 'var(--spacing-2)',
        fontWeight: 'var(--font-weight-medium)',
        fontSize: 'var(--font-size-14)'
      }}>Small</p>
        <InteractiveSlider size="sm" showValue />
      </div>
      <div>
        <p style={{
        marginBottom: 'var(--spacing-2)',
        fontWeight: 'var(--font-weight-medium)',
        fontSize: 'var(--font-size-14)'
      }}>Medium (Default)</p>
        <InteractiveSlider size="md" showValue />
      </div>
      <div>
        <p style={{
        marginBottom: 'var(--spacing-2)',
        fontWeight: 'var(--font-weight-medium)',
        fontSize: 'var(--font-size-14)'
      }}>Large</p>
        <InteractiveSlider size="lg" showValue />
      </div>
    </div>
}`,...V.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [volume, setVolume] = useState(75);
    return <div>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--spacing-3)',
        marginBottom: 'var(--spacing-4)'
      }}>
          <span style={{
          fontSize: 'var(--font-size-24)'
        }}>🔊</span>
          <span style={{
          fontWeight: 'var(--font-weight-medium)'
        }}>{volume}%</span>
        </div>
        <Slider value={volume} onChange={setVolume} min={0} max={100} label="Volume" showTicks tickValues={[0, 25, 50, 75, 100]} />
      </div>;
  }
}`,...k.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [price, setPrice] = useState(250);
    return <div>
        <p style={{
        marginBottom: 'var(--spacing-4)',
        fontWeight: 'var(--font-weight-medium)'
      }}>
          Max Price: \${price}
        </p>
        <Slider value={price} onChange={setPrice} min={0} max={500} step={10} showValue showLabels formatValue={v => \`$\${v}\`} label="Maximum price" />
      </div>;
  }
}`,..._.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [temp, setTemp] = useState(22);
    return <div>
        <div style={{
        textAlign: 'center',
        marginBottom: 'var(--spacing-4)'
      }}>
          <span style={{
          fontSize: 'var(--font-size-48)',
          fontWeight: 'var(--font-weight-bold)'
        }}>{temp}°</span>
          <p style={{
          color: 'var(--text-secondary)',
          marginTop: 'var(--spacing-1)'
        }}>
            {temp < 18 ? '❄️ Cold' : temp > 24 ? '🔥 Warm' : '✨ Comfortable'}
          </p>
        </div>
        <Slider value={temp} onChange={setTemp} min={15} max={30} step={0.5} showLabels formatValue={v => \`\${v}°C\`} label="Temperature" />
      </div>;
  }
}`,...z.parameters?.docs?.source}}};const fe=["Default","WithValue","WithLabels","WithValueAndLabels","WithTicks","CustomRange","SmallStep","LargeStep","PercentageFormat","CurrencyFormat","SmallSize","LargeSize","Disabled","AllSizes","VolumeControl","PriceRange","TemperatureControl"];export{V as AllSizes,b as CurrencyFormat,h as CustomRange,d as Default,j as Disabled,y as LargeSize,x as LargeStep,w as PercentageFormat,_ as PriceRange,S as SmallSize,f as SmallStep,z as TemperatureControl,k as VolumeControl,p as WithLabels,g as WithTicks,m as WithValue,v as WithValueAndLabels,fe as __namedExportsOrder,he as default};
