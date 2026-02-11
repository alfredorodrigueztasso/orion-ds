import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as a}from"./index-Bi6L2ga8.js";import{r as Ie}from"./index-Dmh4UR0O.js";import{L as Le}from"./loader-circle-CragUQIO.js";import{X as We}from"./x-Dd336Dmd.js";import{C as Oe}from"./chevron-down-buXKF-gJ.js";import{C as Ae}from"./check-DDKQb6IN.js";import{A as ne}from"./Avatar-CustGMqw.js";import{C as Ne}from"./code-BWcIXUuE.js";import{U as De}from"./user-CUEj3VL3.js";import{B as Ee}from"./briefcase-CUbZ5BkF.js";import{G as Fe}from"./globe-CaDiCyrV.js";import"./index-D1UQZLgm.js";import"./createLucideIcon-DprCCbyf.js";const qe="_container_e4jby_9",Me="_fullWidth_e4jby_15",Re="_label_e4jby_20",Be="_inputWrapper_e4jby_27",Pe="_disabled_e4jby_39",He="_input_e4jby_27",$e="_sm_e4jby_58",Ue="_md_e4jby_67",Ge="_lg_e4jby_76",Je="_actions_e4jby_103",Ke="_clearButton_e4jby_111",Xe="_chevron_e4jby_130",Qe="_open_e4jby_138",Ye="_error_e4jby_143",Ze="_errorText_e4jby_159",et="_helperText_e4jby_165",tt="_dropdown_e4jby_182",at="_visible_e4jby_198",ot="_option_e4jby_205",rt="_highlighted_e4jby_224",st="_selected_e4jby_228",nt="_optionIcon_e4jby_238",lt="_optionContent_e4jby_246",it="_optionLabel_e4jby_254",ct="_optionDescription_e4jby_262",ut="_checkIcon_e4jby_270",dt="_loading_e4jby_276",pt="_spinner_e4jby_285",mt="_spin_e4jby_285",bt="_empty_e4jby_299",o={container:qe,fullWidth:Me,label:Re,inputWrapper:Be,disabled:Pe,input:He,sm:$e,md:Ue,lg:Ge,actions:Je,clearButton:Ke,chevron:Xe,open:Qe,error:Ye,errorText:Ze,helperText:et,dropdown:tt,visible:at,option:ot,highlighted:rt,selected:st,optionIcon:nt,optionContent:lt,optionLabel:it,optionDescription:ct,checkIcon:ut,loading:dt,spinner:pt,spin:mt,empty:bt},ht=(r,s)=>{const n=s.toLowerCase().trim();return n?r.label.toLowerCase().includes(n)||r.value.toLowerCase().includes(n)||(r.description?.toLowerCase().includes(n)??!1):!0},d=a.forwardRef(({options:r,value:s,onChange:n,onInputChange:i,size:C="md",label:v,helperText:h,error:f,loading:ee=!1,clearable:te=!0,allowFreeInput:g=!1,filterFn:le=ht,openOnFocus:ie=!0,minChars:z=0,emptyText:be="No results found",renderOption:ce,maxHeight:he=300,fullWidth:fe=!1,placeholder:ue,disabled:k,className:ve,id:ge,onFocus:de,onBlur:pe,onKeyDown:me,...xe},I)=>{const Ce=a.useId(),ae=ge||Ce,oe=`${ae}-listbox`,T=a.useRef(null),L=a.useRef(null),w=a.useRef(null),[u,x]=a.useState(!1),[W,m]=a.useState(""),[b,V]=a.useState(-1),[re,ye]=a.useState({top:0,left:0,width:0}),c=a.useMemo(()=>r.find(t=>t.value===s)??null,[r,s]);a.useEffect(()=>{c?m(c.label):g||m("")},[c,g]);const S=a.useMemo(()=>W.length<z?[]:r.filter(t=>le(t,W)),[r,W,z,le]),_=a.useCallback(()=>{if(!T.current)return;const t=T.current.getBoundingClientRect();ye({top:t.bottom+window.scrollY+4,left:t.left+window.scrollX,width:t.width})},[]);a.useEffect(()=>{if(u)return _(),window.addEventListener("resize",_),window.addEventListener("scroll",_,!0),()=>{window.removeEventListener("resize",_),window.removeEventListener("scroll",_,!0)}},[u,_]),a.useEffect(()=>{if(!u)return;const t=l=>{const y=l.target;T.current&&!T.current.contains(y)&&w.current&&!w.current.contains(y)&&(x(!1),!g&&!s?m(""):c&&m(c.label))};return document.addEventListener("mousedown",t),()=>document.removeEventListener("mousedown",t)},[u,g,s,c]);const we=a.useCallback(t=>{const l=t.target.value;m(l),V(-1),i?.(l),!u&&l.length>=z&&x(!0),c&&l!==c.label&&!g&&n?.(null,null)},[u,z,i,c,g,n]),Se=a.useCallback(t=>{ie&&!k&&x(!0),de?.(t)},[ie,k,de]),_e=a.useCallback(t=>{setTimeout(()=>{w.current?.contains(document.activeElement)||(x(!1),!g&&!s?m(""):c&&m(c.label))},200),pe?.(t)},[g,s,c,pe]),se=a.useCallback(t=>{t.disabled||(n?.(t.value,t),m(t.label),x(!1),V(-1),L.current?.focus())},[n]),je=a.useCallback(t=>{t.stopPropagation(),n?.(null,null),m(""),L.current?.focus()},[n]),ke=a.useCallback(t=>{switch(t.key){case"ArrowDown":t.preventDefault(),u?V(l=>Math.min(l+1,S.length-1)):x(!0);break;case"ArrowUp":t.preventDefault(),V(l=>Math.max(l-1,0));break;case"Enter":t.preventDefault(),u&&b>=0&&S[b]&&se(S[b]);break;case"Escape":t.preventDefault(),x(!1),m(c?c.label:"");break;case"Tab":x(!1);break}me?.(t)},[u,b,S,se,c,me]);a.useEffect(()=>{b>=0&&w.current&&w.current.querySelectorAll('[role="option"]')[b]?.scrollIntoView({block:"nearest"})},[b]);const Te=[o.container,o[C],fe&&o.fullWidth,k&&o.disabled,f&&o.error,ve].filter(Boolean).join(" "),O=C==="sm"?14:C==="lg"?20:16,Ve=(t,l)=>{const y=t.value===s,A=l===b;return ce?ce(t,y,A):e.jsxs(e.Fragment,{children:[t.icon&&e.jsx("span",{className:o.optionIcon,"aria-hidden":"true",children:t.icon}),e.jsxs("div",{className:o.optionContent,children:[e.jsx("span",{className:o.optionLabel,children:t.label}),t.description&&e.jsx("span",{className:o.optionDescription,children:t.description})]}),y&&e.jsx(Ae,{size:O,className:o.checkIcon,"aria-hidden":"true"})]})},ze=e.jsx("div",{ref:w,className:`${o.dropdown} ${u&&o.visible}`,style:{top:re.top,left:re.left,width:re.width,maxHeight:he},role:"listbox",id:oe,"aria-label":v||ue,children:ee?e.jsxs("div",{className:o.loading,children:[e.jsx(Le,{size:O,className:o.spinner}),e.jsx("span",{children:"Loading..."})]}):S.length===0?e.jsx("div",{className:o.empty,children:be}):S.map((t,l)=>{const y=l===b,A=t.value===s;return e.jsx("div",{className:[o.option,y&&o.highlighted,A&&o.selected,t.disabled&&o.disabled].filter(Boolean).join(" "),role:"option","aria-selected":A,"aria-disabled":t.disabled,onClick:()=>se(t),onMouseEnter:()=>V(l),children:Ve(t,l)},t.value)})});return e.jsxs("div",{className:Te,children:[v&&e.jsx("label",{htmlFor:ae,className:o.label,children:v}),e.jsxs("div",{ref:T,className:o.inputWrapper,onClick:()=>L.current?.focus(),children:[e.jsx("input",{...xe,ref:t=>{typeof I=="function"?I(t):I&&(I.current=t),L.current=t},id:ae,type:"text",className:o.input,value:W,onChange:we,onFocus:Se,onBlur:_e,onKeyDown:ke,disabled:k,placeholder:ue,role:"combobox","aria-expanded":u,"aria-haspopup":"listbox","aria-controls":oe,"aria-autocomplete":"list","aria-activedescendant":b>=0?`${oe}-option-${b}`:void 0}),e.jsxs("div",{className:o.actions,children:[te&&s&&!k&&e.jsx("button",{type:"button",className:o.clearButton,onClick:je,"aria-label":"Clear selection",tabIndex:-1,children:e.jsx(We,{size:O})}),e.jsx("span",{className:`${o.chevron} ${u?o.open:""}`,"aria-hidden":"true",children:e.jsx(Oe,{size:O})})]})]}),(h||f)&&e.jsx("span",{className:f?o.errorText:o.helperText,children:f||h}),u&&Ie.createPortal(ze,document.body)]})});d.displayName="Combobox";d.__docgenInfo={description:"",methods:[],displayName:"Combobox",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"ComboboxOption"}],raw:"ComboboxOption[]"},description:"Available options"},value:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"Currently selected value"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | null, option: ComboboxOption | null) => void",signature:{arguments:[{type:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},name:"value"},{type:{name:"union",raw:"ComboboxOption | null",elements:[{name:"ComboboxOption"},{name:"null"}]},name:"option"}],return:{name:"void"}}},description:"Callback when selection changes"},onInputChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Callback when input value changes (for custom filtering)"},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`Size variant
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Field label"},helperText:{required:!1,tsType:{name:"string"},description:"Helper text below the input"},error:{required:!1,tsType:{name:"string"},description:"Error message (also sets error state)"},loading:{required:!1,tsType:{name:"boolean"},description:`Whether the combobox is loading
@default false`,defaultValue:{value:"false",computed:!1}},clearable:{required:!1,tsType:{name:"boolean"},description:`Whether to allow clearing the selection
@default true`,defaultValue:{value:"true",computed:!1}},allowFreeInput:{required:!1,tsType:{name:"boolean"},description:`Whether to allow free text input (not just selection)
@default false`,defaultValue:{value:"false",computed:!1}},filterFn:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: ComboboxOption, inputValue: string) => boolean",signature:{arguments:[{type:{name:"ComboboxOption"},name:"option"},{type:{name:"string"},name:"inputValue"}],return:{name:"boolean"}}},description:"Custom filter function",defaultValue:{value:`(option: ComboboxOption, inputValue: string): boolean => {
  const searchTerm = inputValue.toLowerCase().trim();
  if (!searchTerm) return true;

  return (
    option.label.toLowerCase().includes(searchTerm) ||
    option.value.toLowerCase().includes(searchTerm) ||
    (option.description?.toLowerCase().includes(searchTerm) ?? false)
  );
}`,computed:!1}},openOnFocus:{required:!1,tsType:{name:"boolean"},description:`Whether to show the dropdown when input is focused
@default true`,defaultValue:{value:"true",computed:!1}},minChars:{required:!1,tsType:{name:"number"},description:`Minimum characters before showing options
@default 0`,defaultValue:{value:"0",computed:!1}},emptyText:{required:!1,tsType:{name:"string"},description:`Text to show when no options match
@default 'No results found'`,defaultValue:{value:"'No results found'",computed:!1}},renderOption:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: ComboboxOption, isSelected: boolean, isHighlighted: boolean) => ReactNode",signature:{arguments:[{type:{name:"ComboboxOption"},name:"option"},{type:{name:"boolean"},name:"isSelected"},{type:{name:"boolean"},name:"isHighlighted"}],return:{name:"ReactNode"}}},description:"Custom render function for options"},maxHeight:{required:!1,tsType:{name:"number"},description:`Maximum height of the dropdown
@default 300`,defaultValue:{value:"300",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:`Whether the input is full width
@default false`,defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const Lt={title:"Components/Forms/Combobox",component:d,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"radio",options:["sm","md","lg"]}},decorators:[r=>e.jsx("div",{style:{width:"300px",padding:"20px"},children:e.jsx(r,{})})]},j=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"solid",label:"SolidJS"},{value:"qwik",label:"Qwik"}],ft=[{value:"us",label:"United States",description:"North America"},{value:"uk",label:"United Kingdom",description:"Europe"},{value:"de",label:"Germany",description:"Europe"},{value:"fr",label:"France",description:"Europe"},{value:"jp",label:"Japan",description:"Asia"},{value:"au",label:"Australia",description:"Oceania"}],p=r=>{const[s,n]=a.useState(r.value??null);return e.jsx(d,{options:j,value:s,onChange:i=>n(i),placeholder:"Select a framework...",...r})},N={render:()=>e.jsx(p,{})},D={render:()=>e.jsx(p,{label:"Framework"})},E={render:()=>e.jsx(p,{label:"Framework",helperText:"Choose your preferred JavaScript framework"})},F={render:()=>e.jsx(p,{label:"Framework",error:"Please select a framework"})},q={render:()=>{const[r,s]=a.useState(null);return e.jsx(d,{options:ft,value:r,onChange:n=>s(n),label:"Country",placeholder:"Select a country..."})}},M={render:()=>{const[r,s]=a.useState(null),n=[{value:"dev",label:"Developer",icon:e.jsx(Ne,{size:18})},{value:"design",label:"Designer",icon:e.jsx(De,{size:18})},{value:"pm",label:"Product Manager",icon:e.jsx(Ee,{size:18})},{value:"marketing",label:"Marketing",icon:e.jsx(Fe,{size:18})}];return e.jsx(d,{options:n,value:r,onChange:i=>s(i),label:"Role",placeholder:"Select your role..."})}},R={render:()=>{const[r,s]=a.useState(null),n=[{value:"alice",label:"Alice Cooper",description:"alice@example.com",icon:e.jsx(ne,{initials:"AC",size:"xs"})},{value:"bob",label:"Bob Martin",description:"bob@example.com",icon:e.jsx(ne,{initials:"BM",size:"xs"})},{value:"carol",label:"Carol White",description:"carol@example.com",icon:e.jsx(ne,{initials:"CW",size:"xs"})}];return e.jsx(d,{options:n,value:r,onChange:i=>s(i),label:"Assignee",placeholder:"Select a person..."})}},B={render:()=>e.jsx(p,{loading:!0})},P={render:()=>e.jsx(p,{clearable:!1})},H={render:()=>e.jsx(p,{minChars:2,helperText:"Type at least 2 characters to see options"})},$={render:()=>e.jsx(p,{emptyText:"No frameworks match your search. Try something else!"})},U={render:()=>e.jsx(p,{size:"sm",label:"Framework"})},G={render:()=>e.jsx(p,{size:"lg",label:"Framework"})},J={render:()=>e.jsx(p,{fullWidth:!0,label:"Framework"}),decorators:[r=>e.jsx("div",{style:{width:"400px"},children:e.jsx(r,{})})]},K={args:{options:j,value:"react",disabled:!0,label:"Framework"}},X={render:()=>{const[r,s]=a.useState(null),n=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular (Coming soon)",disabled:!0},{value:"svelte",label:"Svelte (Coming soon)",disabled:!0}];return e.jsx(d,{options:n,value:r,onChange:i=>s(i),label:"Framework",placeholder:"Select a framework..."})}},Q={render:()=>e.jsx(p,{value:"react"})},Y={render:()=>{const[r,s]=a.useState(null),[n,i]=a.useState(null),[C,v]=a.useState(null);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-6)"},children:[e.jsx(d,{options:j,value:r,onChange:h=>s(h),size:"sm",label:"Small",placeholder:"Select..."}),e.jsx(d,{options:j,value:n,onChange:h=>i(h),size:"md",label:"Medium",placeholder:"Select..."}),e.jsx(d,{options:j,value:C,onChange:h=>v(h),size:"lg",label:"Large",placeholder:"Select..."})]})}},Z={render:()=>{const[r,s]=a.useState(null),[n,i]=a.useState(!1),[C,v]=a.useState([]),h=f=>{if(f.length<2){v([]);return}i(!0),setTimeout(()=>{const ee=j.filter(te=>te.label.toLowerCase().includes(f.toLowerCase()));v(ee),i(!1)},500)};return e.jsx(d,{options:C,value:r,onChange:f=>s(f),onInputChange:h,loading:n,label:"Framework",placeholder:"Search frameworks...",helperText:"Type to search (simulated API)",minChars:2})}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveCombobox />
}`,...N.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveCombobox label="Framework" />
}`,...D.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveCombobox label="Framework" helperText="Choose your preferred JavaScript framework" />
}`,...E.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveCombobox label="Framework" error="Please select a framework" />
}`,...F.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | null>(null);
    return <Combobox options={countryOptions} value={value} onChange={v => setValue(v)} label="Country" placeholder="Select a country..." />;
  }
}`,...q.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | null>(null);
    const options = [{
      value: 'dev',
      label: 'Developer',
      icon: <Code size={18} />
    }, {
      value: 'design',
      label: 'Designer',
      icon: <User size={18} />
    }, {
      value: 'pm',
      label: 'Product Manager',
      icon: <Briefcase size={18} />
    }, {
      value: 'marketing',
      label: 'Marketing',
      icon: <Globe size={18} />
    }];
    return <Combobox options={options} value={value} onChange={v => setValue(v)} label="Role" placeholder="Select your role..." />;
  }
}`,...M.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | null>(null);
    const options = [{
      value: 'alice',
      label: 'Alice Cooper',
      description: 'alice@example.com',
      icon: <Avatar initials="AC" size="xs" />
    }, {
      value: 'bob',
      label: 'Bob Martin',
      description: 'bob@example.com',
      icon: <Avatar initials="BM" size="xs" />
    }, {
      value: 'carol',
      label: 'Carol White',
      description: 'carol@example.com',
      icon: <Avatar initials="CW" size="xs" />
    }];
    return <Combobox options={options} value={value} onChange={v => setValue(v)} label="Assignee" placeholder="Select a person..." />;
  }
}`,...R.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveCombobox loading />
}`,...B.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveCombobox clearable={false} />
}`,...P.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveCombobox minChars={2} helperText="Type at least 2 characters to see options" />
}`,...H.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveCombobox emptyText="No frameworks match your search. Try something else!" />
}`,...$.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveCombobox size="sm" label="Framework" />
}`,...U.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveCombobox size="lg" label="Framework" />
}`,...G.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveCombobox fullWidth label="Framework" />,
  decorators: [Story => <div style={{
    width: '400px'
  }}>
        <Story />
      </div>]
}`,...J.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    options: frameworkOptions,
    value: 'react',
    disabled: true,
    label: 'Framework'
  }
}`,...K.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | null>(null);
    const options = [{
      value: 'react',
      label: 'React'
    }, {
      value: 'vue',
      label: 'Vue'
    }, {
      value: 'angular',
      label: 'Angular (Coming soon)',
      disabled: true
    }, {
      value: 'svelte',
      label: 'Svelte (Coming soon)',
      disabled: true
    }];
    return <Combobox options={options} value={value} onChange={v => setValue(v)} label="Framework" placeholder="Select a framework..." />;
  }
}`,...X.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveCombobox value="react" />
}`,...Q.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value1, setValue1] = useState<string | null>(null);
    const [value2, setValue2] = useState<string | null>(null);
    const [value3, setValue3] = useState<string | null>(null);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-6)'
    }}>
        <Combobox options={frameworkOptions} value={value1} onChange={v => setValue1(v)} size="sm" label="Small" placeholder="Select..." />
        <Combobox options={frameworkOptions} value={value2} onChange={v => setValue2(v)} size="md" label="Medium" placeholder="Select..." />
        <Combobox options={frameworkOptions} value={value3} onChange={v => setValue3(v)} size="lg" label="Large" placeholder="Select..." />
      </div>;
  }
}`,...Y.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [options, setOptions] = useState<typeof frameworkOptions>([]);
    const handleInputChange = (input: string) => {
      if (input.length < 2) {
        setOptions([]);
        return;
      }
      setLoading(true);

      // Simulate API call
      setTimeout(() => {
        const filtered = frameworkOptions.filter(opt => opt.label.toLowerCase().includes(input.toLowerCase()));
        setOptions(filtered);
        setLoading(false);
      }, 500);
    };
    return <Combobox options={options} value={value} onChange={v => setValue(v)} onInputChange={handleInputChange} loading={loading} label="Framework" placeholder="Search frameworks..." helperText="Type to search (simulated API)" minChars={2} />;
  }
}`,...Z.parameters?.docs?.source}}};const Wt=["Default","WithLabel","WithHelperText","WithError","WithDescriptions","WithIcons","WithAvatars","Loading","NotClearable","MinimumCharacters","CustomEmptyState","SmallSize","LargeSize","FullWidth","Disabled","WithDisabledOptions","PreSelected","AllSizes","AsyncSearch"];export{Y as AllSizes,Z as AsyncSearch,$ as CustomEmptyState,N as Default,K as Disabled,J as FullWidth,G as LargeSize,B as Loading,H as MinimumCharacters,P as NotClearable,Q as PreSelected,U as SmallSize,R as WithAvatars,q as WithDescriptions,X as WithDisabledOptions,F as WithError,E as WithHelperText,M as WithIcons,D as WithLabel,Wt as __namedExportsOrder,Lt as default};
