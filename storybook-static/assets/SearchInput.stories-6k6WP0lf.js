import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as o}from"./index-Bi6L2ga8.js";import{L as K}from"./loader-circle-CragUQIO.js";import{S as T}from"./search-BC3UyaPv.js";import{X as O}from"./x-Dd336Dmd.js";import"./createLucideIcon-DprCCbyf.js";const $="_container_t2ahw_9",X="_disabled_t2ahw_20",H="_input_t2ahw_31",J="_fullWidth_t2ahw_38",P="_sm_t2ahw_43",Q="_md_t2ahw_48",U="_lg_t2ahw_53",Y="_inputSm_t2ahw_59",Z="_inputMd_t2ahw_63",ee="_inputLg_t2ahw_67",ae="_searchIcon_t2ahw_72",te="_searchIconSm_t2ahw_82",se="_searchIconMd_t2ahw_86",re="_searchIconLg_t2ahw_90",ne="_clearButton_t2ahw_120",oe="_searchButton_t2ahw_146",le="_loading_t2ahw_186",ie="_spinner_t2ahw_190",ce="_spin_t2ahw_190",n={container:$,disabled:X,input:H,fullWidth:J,sm:P,md:Q,lg:U,inputSm:Y,inputMd:Z,inputLg:ee,searchIcon:ae,searchIconSm:te,searchIconMd:se,searchIconLg:re,clearButton:ne,searchButton:oe,loading:le,spinner:ie,spin:ce},d=o.forwardRef(({size:a="md",value:t,onClear:r,onSearch:s,showClear:i=!0,showSearchButton:u=!1,searchIcon:I,clearLabel:C="Clear search",searchLabel:l="Search",loading:h=!1,fullWidth:j=!1,disabled:W=!1,className:k,onKeyDown:B,...q},D)=>{const M=t!==void 0&&t!=="",R=o.useCallback(L=>{L.key==="Enter"&&s&&s(L.currentTarget.value),B?.(L)},[s,B]),E=o.useCallback(()=>{r?.()},[r]),N=o.useCallback(()=>{s&&typeof t=="string"&&s(t)},[s,t]),F=[n.container,n[a],j&&n.fullWidth,h&&n.loading,W&&n.disabled,k].filter(Boolean).join(" "),V={sm:"Sm",md:"Md",lg:"Lg"}[a],A=[n.input,n[`input${V}`]].join(" "),G=[n.searchIcon,n[`searchIcon${V}`]].join(" "),p=a==="sm"?16:a==="lg"?22:18;return e.jsxs("div",{className:F,children:[e.jsx("span",{className:G,"aria-hidden":"true",children:h?e.jsx(K,{size:p,className:n.spinner}):I||e.jsx(T,{size:p})}),e.jsx("input",{ref:D,type:"search",className:A,value:t,disabled:W,onKeyDown:R,...q}),i&&M&&!h&&e.jsx("button",{type:"button",className:n.clearButton,onClick:E,"aria-label":C,children:e.jsx(O,{size:p-2})}),u&&e.jsx("button",{type:"button",className:n.searchButton,onClick:N,"aria-label":l,disabled:h,children:e.jsx(T,{size:p})})]})});d.displayName="SearchInput";d.__docgenInfo={description:"",methods:[],displayName:"SearchInput",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`Size variant
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when the clear button is clicked"},onSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Callback when search is triggered (Enter key or search button)"},showClear:{required:!1,tsType:{name:"boolean"},description:`Whether to show the clear button when there's a value
@default true`,defaultValue:{value:"true",computed:!1}},showSearchButton:{required:!1,tsType:{name:"boolean"},description:`Whether to show a search button
@default false`,defaultValue:{value:"false",computed:!1}},searchIcon:{required:!1,tsType:{name:"ReactNode"},description:"Custom search icon"},clearLabel:{required:!1,tsType:{name:"string"},description:`Label for the clear button (accessibility)
@default 'Clear search'`,defaultValue:{value:"'Clear search'",computed:!1}},searchLabel:{required:!1,tsType:{name:"string"},description:`Label for the search button (accessibility)
@default 'Search'`,defaultValue:{value:"'Search'",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:`Whether the input is in a loading state
@default false`,defaultValue:{value:"false",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:`Make the input take full width
@default false`,defaultValue:{value:"false",computed:!1}},disabled:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["Omit"]};const ve={title:"Components/Forms/SearchInput",component:d,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"radio",options:["sm","md","lg"]}}},c=a=>{const[t,r]=o.useState("");return e.jsx(d,{...a,value:t,onChange:s=>r(s.target.value),onClear:()=>r("")})},m={args:{placeholder:"Search...",size:"md"},render:a=>e.jsx(c,{...a})},g={args:{placeholder:"Search...",size:"md"},render:a=>e.jsx(c,{...a})},f={render:()=>{const[a,t]=o.useState(""),[r,s]=o.useState("");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-4)"},children:[e.jsx(d,{value:a,onChange:i=>t(i.target.value),onClear:()=>t(""),onSearch:i=>s(i),placeholder:"Search and press Enter or click button...",showSearchButton:!0}),r&&e.jsxs("p",{style:{fontSize:"var(--font-size-14)",color:"var(--text-secondary)"},children:['Last search: "',r,'"']})]})}},v={args:{placeholder:"Search...",size:"sm"},render:a=>e.jsx(c,{...a})},S={args:{placeholder:"Search...",size:"lg"},render:a=>e.jsx(c,{...a})},y={args:{placeholder:"Search...",size:"md",fullWidth:!0},render:a=>e.jsx("div",{style:{width:"400px"},children:e.jsx(c,{...a})})},_={render:()=>{const[a,t]=o.useState(!1),[r,s]=o.useState(""),i=()=>{t(!0),setTimeout(()=>t(!1),2e3)};return e.jsx(d,{value:r,onChange:u=>s(u.target.value),onClear:()=>s(""),onSearch:i,placeholder:"Type and press Enter...",loading:a})}},x={args:{placeholder:"Search...",size:"md",showClear:!1},render:a=>e.jsx(c,{...a})},w={args:{placeholder:"Search disabled",disabled:!0}},b={args:{placeholder:"Search..."},render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-4)",alignItems:"flex-start"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"var(--spacing-2)",fontWeight:"var(--font-weight-medium)",fontSize:"var(--font-size-14)"},children:"Small"}),e.jsx(c,{...a,size:"sm"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"var(--spacing-2)",fontWeight:"var(--font-weight-medium)",fontSize:"var(--font-size-14)"},children:"Medium (Default)"}),e.jsx(c,{...a,size:"md"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"var(--spacing-2)",fontWeight:"var(--font-weight-medium)",fontSize:"var(--font-size-14)"},children:"Large"}),e.jsx(c,{...a,size:"lg"})]})]})},z={render:()=>{const[a,t]=o.useState(""),[r,s]=o.useState([]),[i,u]=o.useState(!1),I=["Apple","Banana","Cherry","Date","Elderberry","Fig","Grape"],C=l=>{u(!0),setTimeout(()=>{const h=I.filter(j=>j.toLowerCase().includes(l.toLowerCase()));s(h),u(!1)},500)};return e.jsxs("div",{style:{width:"300px"},children:[e.jsx(d,{value:a,onChange:l=>{t(l.target.value),l.target.value?C(l.target.value):s([])},onClear:()=>{t(""),s([])},placeholder:"Search fruits...",loading:i,fullWidth:!0}),r.length>0&&e.jsx("div",{style:{marginTop:"var(--spacing-2)",padding:"var(--spacing-2)",background:"var(--surface-subtle)",borderRadius:"var(--radius-sm)"},children:r.map(l=>e.jsx("div",{style:{padding:"var(--spacing-2)",cursor:"pointer"},children:l},l))})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search...',
    size: 'md'
  },
  render: args => <InteractiveSearchInput {...args} />
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search...',
    size: 'md'
  },
  render: args => <InteractiveSearchInput {...args} />
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    const [lastSearch, setLastSearch] = useState('');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-4)'
    }}>
        <SearchInput value={value} onChange={e => setValue(e.target.value)} onClear={() => setValue('')} onSearch={v => setLastSearch(v)} placeholder="Search and press Enter or click button..." showSearchButton />
        {lastSearch && <p style={{
        fontSize: 'var(--font-size-14)',
        color: 'var(--text-secondary)'
      }}>
            Last search: "{lastSearch}"
          </p>}
      </div>;
  }
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search...',
    size: 'sm'
  },
  render: args => <InteractiveSearchInput {...args} />
}`,...v.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search...',
    size: 'lg'
  },
  render: args => <InteractiveSearchInput {...args} />
}`,...S.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search...',
    size: 'md',
    fullWidth: true
  },
  render: args => <div style={{
    width: '400px'
  }}>
      <InteractiveSearchInput {...args} />
    </div>
}`,...y.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState('');
    const handleSearch = () => {
      setLoading(true);
      setTimeout(() => setLoading(false), 2000);
    };
    return <SearchInput value={value} onChange={e => setValue(e.target.value)} onClear={() => setValue('')} onSearch={handleSearch} placeholder="Type and press Enter..." loading={loading} />;
  }
}`,..._.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search...',
    size: 'md',
    showClear: false
  },
  render: args => <InteractiveSearchInput {...args} />
}`,...x.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search disabled',
    disabled: true
  }
}`,...w.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search...'
  },
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-4)',
    alignItems: 'flex-start'
  }}>
      <div>
        <p style={{
        marginBottom: 'var(--spacing-2)',
        fontWeight: 'var(--font-weight-medium)',
        fontSize: 'var(--font-size-14)'
      }}>Small</p>
        <InteractiveSearchInput {...args} size="sm" />
      </div>
      <div>
        <p style={{
        marginBottom: 'var(--spacing-2)',
        fontWeight: 'var(--font-weight-medium)',
        fontSize: 'var(--font-size-14)'
      }}>Medium (Default)</p>
        <InteractiveSearchInput {...args} size="md" />
      </div>
      <div>
        <p style={{
        marginBottom: 'var(--spacing-2)',
        fontWeight: 'var(--font-weight-medium)',
        fontSize: 'var(--font-size-14)'
      }}>Large</p>
        <InteractiveSearchInput {...args} size="lg" />
      </div>
    </div>
}`,...b.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    const [results, setResults] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape'];
    const handleSearch = (query: string) => {
      setLoading(true);
      setTimeout(() => {
        const filtered = items.filter(item => item.toLowerCase().includes(query.toLowerCase()));
        setResults(filtered);
        setLoading(false);
      }, 500);
    };
    return <div style={{
      width: '300px'
    }}>
        <SearchInput value={value} onChange={e => {
        setValue(e.target.value);
        if (e.target.value) {
          handleSearch(e.target.value);
        } else {
          setResults([]);
        }
      }} onClear={() => {
        setValue('');
        setResults([]);
      }} placeholder="Search fruits..." loading={loading} fullWidth />
        {results.length > 0 && <div style={{
        marginTop: 'var(--spacing-2)',
        padding: 'var(--spacing-2)',
        background: 'var(--surface-subtle)',
        borderRadius: 'var(--radius-sm)'
      }}>
            {results.map(item => <div key={item} style={{
          padding: 'var(--spacing-2)',
          cursor: 'pointer'
        }}>
                {item}
              </div>)}
          </div>}
      </div>;
  }
}`,...z.parameters?.docs?.source}}};const Se=["Default","WithValue","WithSearchButton","SmallSize","LargeSize","FullWidth","Loading","NoClearButton","Disabled","AllSizes","SearchWithResults"];export{b as AllSizes,m as Default,w as Disabled,y as FullWidth,S as LargeSize,_ as Loading,x as NoClearButton,z as SearchWithResults,v as SmallSize,f as WithSearchButton,g as WithValue,Se as __namedExportsOrder,ve as default};
