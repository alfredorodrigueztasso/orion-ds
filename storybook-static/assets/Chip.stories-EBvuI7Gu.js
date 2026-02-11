import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as m}from"./index-Bi6L2ga8.js";import{C as b}from"./check-DDKQb6IN.js";import{X as N}from"./x-Dd336Dmd.js";import{S as O}from"./star-BFnvMsnD.js";import{C as F}from"./circle-alert-BMPEDkj1.js";import"./createLucideIcon-DprCCbyf.js";const B="_chip_1lf1r_9",A="_sm_1lf1r_24",q="_md_1lf1r_30",P="_lg_1lf1r_36",E="_primary_1lf1r_52",V="_success_1lf1r_58",M="_warning_1lf1r_64",L="_error_1lf1r_70",J="_info_1lf1r_76",$="_clickable_1lf1r_86",X="_disabled_1lf1r_89",G="_selected_1lf1r_103",K="_icon_1lf1r_127",H="_label_1lf1r_146",Q="_removeButton_1lf1r_150",c={chip:B,sm:A,md:q,lg:P,default:"_default_1lf1r_46",primary:E,success:V,warning:M,error:L,info:J,clickable:$,disabled:X,selected:G,icon:K,label:H,removeButton:Q},r=m.forwardRef(({variant:a="default",size:t="md",icon:n,clickable:s=!1,onClick:i,onRemove:o,disabled:l=!1,selected:z=!1,children:_,className:w,...k},D)=>{const d=s||!!i,I=[c.chip,c[a],c[t],d&&c.clickable,z&&c.selected,l&&c.disabled,w].filter(Boolean).join(" "),W=()=>{!l&&i&&i()},R=p=>{p.stopPropagation(),!l&&o&&o()},T=p=>{l||((p.key==="Enter"||p.key===" ")&&(p.preventDefault(),i?.()),(p.key==="Backspace"||p.key==="Delete")&&(p.preventDefault(),o?.()))};return e.jsxs("div",{ref:D,className:I,role:d?"button":void 0,tabIndex:d&&!l?0:void 0,"aria-disabled":l,"aria-pressed":z,onClick:d?W:void 0,onKeyDown:d?T:void 0,...k,children:[n&&e.jsx("span",{className:c.icon,"aria-hidden":"true",children:n}),e.jsx("span",{className:c.label,children:_}),o&&e.jsx("button",{type:"button",className:c.removeButton,onClick:R,disabled:l,"aria-label":"Remove",children:e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M10.5 3.5L3.5 10.5M3.5 3.5l7 7",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]})});r.displayName="Chip";r.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{variant:{required:!1,tsType:{name:"union",raw:"'default' | 'primary' | 'success' | 'warning' | 'error' | 'info'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"}]},description:`Visual variant of the chip
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`Size of the chip
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:"Icon to display before the label"},clickable:{required:!1,tsType:{name:"boolean"},description:`Whether the chip is clickable
@default false`,defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Click handler (when clickable is true)"},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback to remove the chip (shows X button)"},disabled:{required:!1,tsType:{name:"boolean"},description:`Whether the chip is disabled
@default false`,defaultValue:{value:"false",computed:!1}},selected:{required:!1,tsType:{name:"boolean"},description:`Whether the chip is selected (for selectable chips)
@default false`,defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:"Chip content"}},composes:["Omit"]};const ae={title:"Components/Data Display/Chip",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","primary","success","warning","error","info"]},size:{control:"radio",options:["sm","md","lg"]}}},f={args:{children:"Default Chip"}},h={render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--spacing-2)",alignItems:"center"},children:[e.jsx(r,{size:"sm",children:"Small"}),e.jsx(r,{size:"md",children:"Medium"}),e.jsx(r,{size:"lg",children:"Large"})]})},v={render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--spacing-2)",flexWrap:"wrap"},children:[e.jsx(r,{icon:e.jsx(b,{size:14}),variant:"success",children:"Completed"}),e.jsx(r,{icon:e.jsx(O,{size:14}),variant:"warning",children:"Featured"}),e.jsx(r,{icon:e.jsx(F,{size:14}),variant:"error",children:"Error"})]})},u={render:()=>{const[a,t]=m.useState(["React","TypeScript","Tailwind","Node.js"]),n=s=>{t(a.filter(i=>i!==s))};return e.jsxs("div",{style:{display:"flex",gap:"var(--spacing-2)",flexWrap:"wrap"},children:[a.map(s=>e.jsx(r,{onRemove:()=>n(s),children:s},s)),a.length===0&&e.jsx("span",{style:{color:"var(--text-tertiary)"},children:"No chips left!"})]})}},g={render:()=>{const[a,t]=m.useState(null),n=["Option A","Option B","Option C"];return e.jsx("div",{style:{display:"flex",gap:"var(--spacing-2)"},children:n.map(s=>e.jsx(r,{clickable:!0,selected:a===s,onClick:()=>t(s),children:s},s))})}},x={render:()=>{const[a,t]=m.useState([]),n=i=>{t(o=>o.includes(i)?o.filter(l=>l!==i):[...o,i])},s=["JavaScript","Python","Go","Rust","Java"];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-4)"},children:[e.jsx("div",{style:{display:"flex",gap:"var(--spacing-2)",flexWrap:"wrap"},children:s.map(i=>e.jsx(r,{variant:"primary",clickable:!0,selected:a.includes(i),onClick:()=>n(i),children:i},i))}),e.jsxs("p",{style:{fontSize:"var(--font-size-14)",color:"var(--text-secondary)"},children:["Selected: ",a.length>0?a.join(", "):"None"]})]})}},y={render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--spacing-2)"},children:[e.jsx(r,{disabled:!0,children:"Disabled"}),e.jsx(r,{disabled:!0,onRemove:()=>{},children:"Disabled Removable"}),e.jsx(r,{disabled:!0,onClick:()=>{},children:"Disabled Clickable"})]})},C={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-3)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[e.jsx("span",{style:{width:"80px",fontSize:"var(--font-size-14)"},children:"Order 1:"}),e.jsx(r,{variant:"success",size:"sm",icon:e.jsx(b,{size:12}),children:"Delivered"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[e.jsx("span",{style:{width:"80px",fontSize:"var(--font-size-14)"},children:"Order 2:"}),e.jsx(r,{variant:"warning",size:"sm",children:"In Transit"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[e.jsx("span",{style:{width:"80px",fontSize:"var(--font-size-14)"},children:"Order 3:"}),e.jsx(r,{variant:"error",size:"sm",icon:e.jsx(N,{size:12}),children:"Cancelled"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[e.jsx("span",{style:{width:"80px",fontSize:"var(--font-size-14)"},children:"Order 4:"}),e.jsx(r,{variant:"info",size:"sm",children:"Processing"})]})]})},j={render:()=>{const[a,t]=m.useState(["Price: $0-$100","Brand: Nike"]),n=s=>{t(a.filter(i=>i!==s))};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-3)"},children:[e.jsx("p",{style:{fontSize:"var(--font-size-14)",fontWeight:"var(--font-weight-medium)"},children:"Active Filters:"}),e.jsxs("div",{style:{display:"flex",gap:"var(--spacing-2)",flexWrap:"wrap"},children:[a.map(s=>e.jsx(r,{onRemove:()=>n(s),size:"sm",children:s},s)),a.length>0&&e.jsx(r,{variant:"error",size:"sm",clickable:!0,onClick:()=>t([]),children:"Clear All"})]})]})}},S={render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--spacing-2)",flexWrap:"wrap"},children:[e.jsx(r,{variant:"default",children:"Default"}),e.jsx(r,{variant:"primary",children:"Primary"}),e.jsx(r,{variant:"success",children:"Success"}),e.jsx(r,{variant:"warning",children:"Warning"}),e.jsx(r,{variant:"error",children:"Error"}),e.jsx(r,{variant:"info",children:"Info"})]})};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Default Chip'
  }
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--spacing-2)',
    alignItems: 'center'
  }}>
      <Chip size="sm">Small</Chip>
      <Chip size="md">Medium</Chip>
      <Chip size="lg">Large</Chip>
    </div>
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--spacing-2)',
    flexWrap: 'wrap'
  }}>
      <Chip icon={<Check size={14} />} variant="success">Completed</Chip>
      <Chip icon={<Star size={14} />} variant="warning">Featured</Chip>
      <Chip icon={<AlertCircle size={14} />} variant="error">Error</Chip>
    </div>
}`,...v.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [chips, setChips] = useState(['React', 'TypeScript', 'Tailwind', 'Node.js']);
    const removeChip = (chip: string) => {
      setChips(chips.filter(c => c !== chip));
    };
    return <div style={{
      display: 'flex',
      gap: 'var(--spacing-2)',
      flexWrap: 'wrap'
    }}>
        {chips.map(chip => <Chip key={chip} onRemove={() => removeChip(chip)}>
            {chip}
          </Chip>)}
        {chips.length === 0 && <span style={{
        color: 'var(--text-tertiary)'
      }}>No chips left!</span>}
      </div>;
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<string | null>(null);
    const options = ['Option A', 'Option B', 'Option C'];
    return <div style={{
      display: 'flex',
      gap: 'var(--spacing-2)'
    }}>
        {options.map(option => <Chip key={option} clickable selected={selected === option} onClick={() => setSelected(option)}>
            {option}
          </Chip>)}
      </div>;
  }
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<string[]>([]);
    const toggleSelect = (item: string) => {
      setSelected(prev => prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]);
    };
    const tags = ['JavaScript', 'Python', 'Go', 'Rust', 'Java'];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-4)'
    }}>
        <div style={{
        display: 'flex',
        gap: 'var(--spacing-2)',
        flexWrap: 'wrap'
      }}>
          {tags.map(tag => <Chip key={tag} variant="primary" clickable selected={selected.includes(tag)} onClick={() => toggleSelect(tag)}>
              {tag}
            </Chip>)}
        </div>
        <p style={{
        fontSize: 'var(--font-size-14)',
        color: 'var(--text-secondary)'
      }}>
          Selected: {selected.length > 0 ? selected.join(', ') : 'None'}
        </p>
      </div>;
  }
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--spacing-2)'
  }}>
      <Chip disabled>Disabled</Chip>
      <Chip disabled onRemove={() => {}}>Disabled Removable</Chip>
      <Chip disabled onClick={() => {}}>Disabled Clickable</Chip>
    </div>
}`,...y.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-3)'
  }}>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--spacing-2)'
    }}>
        <span style={{
        width: '80px',
        fontSize: 'var(--font-size-14)'
      }}>Order 1:</span>
        <Chip variant="success" size="sm" icon={<Check size={12} />}>Delivered</Chip>
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--spacing-2)'
    }}>
        <span style={{
        width: '80px',
        fontSize: 'var(--font-size-14)'
      }}>Order 2:</span>
        <Chip variant="warning" size="sm">In Transit</Chip>
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--spacing-2)'
    }}>
        <span style={{
        width: '80px',
        fontSize: 'var(--font-size-14)'
      }}>Order 3:</span>
        <Chip variant="error" size="sm" icon={<X size={12} />}>Cancelled</Chip>
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--spacing-2)'
    }}>
        <span style={{
        width: '80px',
        fontSize: 'var(--font-size-14)'
      }}>Order 4:</span>
        <Chip variant="info" size="sm">Processing</Chip>
      </div>
    </div>
}`,...C.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [filters, setFilters] = useState<string[]>(['Price: $0-$100', 'Brand: Nike']);
    const removeFilter = (filter: string) => {
      setFilters(filters.filter(f => f !== filter));
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-3)'
    }}>
        <p style={{
        fontSize: 'var(--font-size-14)',
        fontWeight: 'var(--font-weight-medium)'
      }}>Active Filters:</p>
        <div style={{
        display: 'flex',
        gap: 'var(--spacing-2)',
        flexWrap: 'wrap'
      }}>
          {filters.map(filter => <Chip key={filter} onRemove={() => removeFilter(filter)} size="sm">
              {filter}
            </Chip>)}
          {filters.length > 0 && <Chip variant="error" size="sm" clickable onClick={() => setFilters([])}>
              Clear All
            </Chip>}
        </div>
      </div>;
  }
}`,...j.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--spacing-2)',
    flexWrap: 'wrap'
  }}>
      <Chip variant="default">Default</Chip>
      <Chip variant="primary">Primary</Chip>
      <Chip variant="success">Success</Chip>
      <Chip variant="warning">Warning</Chip>
      <Chip variant="error">Error</Chip>
      <Chip variant="info">Info</Chip>
    </div>
}`,...S.parameters?.docs?.source}}};const te=["Default","Sizes","WithIcon","Removable","Clickable","MultiSelect","Disabled","StatusTags","FilterChips","AllVariants"];export{S as AllVariants,g as Clickable,f as Default,y as Disabled,j as FilterChips,x as MultiSelect,u as Removable,h as Sizes,C as StatusTags,v as WithIcon,te as __namedExportsOrder,ae as default};
