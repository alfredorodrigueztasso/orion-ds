import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./index-Bi6L2ga8.js";const T="_pagination_18hiv_8",q="_list_18hiv_13",F="_button_18hiv_26",G="_pageButton_18hiv_54",V="_active_18hiv_59",A="_ellipsis_18hiv_74",E="_sm_18hiv_87",R="_md_18hiv_101",$="_lg_18hiv_115",O="_disabled_18hiv_137",n={pagination:T,list:q,button:F,pageButton:G,active:V,ellipsis:A,sm:E,md:R,lg:$,disabled:O},H=(a,t,r)=>{const c=r*2+5;if(t<=c)return Array.from({length:t},(u,z)=>z+1);const d=Math.max(a-r,1),g=Math.min(a+r,t),h=d>2,l=g<t-1,i=[];i.push(1),h?i.push("ellipsis"):d===2&&i.push(2);for(let u=d;u<=g;u++)u!==1&&u!==t&&i.push(u);return l?i.push("ellipsis"):g===t-1&&i.push(t-1),t>1&&i.push(t),i},m=p.forwardRef(({currentPage:a,totalPages:t,onPageChange:r,siblingCount:c=1,showFirstLast:d=!0,showPrevNext:g=!0,size:h="md",disabled:l=!1,className:i,...u},z)=>{const W=p.useMemo(()=>H(a,t,c),[a,t,c]),L=a>1,M=a<t,v=s=>{!l&&s>=1&&s<=t&&s!==a&&r(s)},B=[n.pagination,n[h],l&&n.disabled,i].filter(Boolean).join(" ");return t<=0?null:e.jsx("nav",{ref:z,className:B,"aria-label":"Pagination",...u,children:e.jsxs("ul",{className:n.list,children:[d&&e.jsx("li",{children:e.jsx("button",{type:"button",className:n.button,onClick:()=>v(1),disabled:!L||l,"aria-label":"Go to first page",children:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:e.jsx("path",{d:"M11 12L7 8l4-4M5 12V4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})}),g&&e.jsx("li",{children:e.jsx("button",{type:"button",className:n.button,onClick:()=>v(a-1),disabled:!L||l,"aria-label":"Go to previous page",children:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:e.jsx("path",{d:"M10 12L6 8l4-4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})}),W.map((s,D)=>e.jsx("li",{children:s==="ellipsis"?e.jsx("span",{className:n.ellipsis,"aria-hidden":"true",children:"…"}):e.jsx("button",{type:"button",className:`${n.button} ${n.pageButton} ${s===a?n.active:""}`,onClick:()=>v(s),disabled:l,"aria-label":`Go to page ${s}`,"aria-current":s===a?"page":void 0,children:s})},s==="ellipsis"?`ellipsis-${D}`:s)),g&&e.jsx("li",{children:e.jsx("button",{type:"button",className:n.button,onClick:()=>v(a+1),disabled:!M||l,"aria-label":"Go to next page",children:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:e.jsx("path",{d:"M6 12l4-4-4-4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})}),d&&e.jsx("li",{children:e.jsx("button",{type:"button",className:n.button,onClick:()=>v(t),disabled:!M||l,"aria-label":"Go to last page",children:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:e.jsx("path",{d:"M5 12l4-4-4-4M11 12V4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})})]})})});m.displayName="Pagination";m.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{currentPage:{required:!0,tsType:{name:"number"},description:"Current active page (1-indexed)"},totalPages:{required:!0,tsType:{name:"number"},description:"Total number of pages"},onPageChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:"Callback when page changes"},siblingCount:{required:!1,tsType:{name:"number"},description:`Number of sibling pages to show on each side of current page
@default 1`,defaultValue:{value:"1",computed:!1}},showFirstLast:{required:!1,tsType:{name:"boolean"},description:`Whether to show first/last page buttons
@default true`,defaultValue:{value:"true",computed:!1}},showPrevNext:{required:!1,tsType:{name:"boolean"},description:`Whether to show previous/next buttons
@default true`,defaultValue:{value:"true",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`Size variant
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`Whether the pagination is disabled
@default false`,defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const Q={title:"Components/Navigation/Pagination",component:m,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"radio",options:["sm","md","lg"]}}},o=a=>{const[t,r]=p.useState(1);return e.jsx(m,{currentPage:t,totalPages:10,onPageChange:r,...a})},f={render:()=>e.jsx(o,{})},x={render:()=>e.jsx(o,{totalPages:5})},P={render:()=>{const[a,t]=p.useState(10);return e.jsx(m,{currentPage:a,totalPages:100,onPageChange:t})}},b={render:()=>e.jsx(o,{size:"sm"})},j={render:()=>e.jsx(o,{size:"lg"})},y={render:()=>e.jsx(o,{showFirstLast:!1})},S={render:()=>e.jsx(o,{showPrevNext:!1})},w={render:()=>e.jsx(o,{showFirstLast:!1,showPrevNext:!1})},_={args:{currentPage:5,totalPages:10,onPageChange:()=>{},disabled:!0}},I={args:{currentPage:1,totalPages:1,onPageChange:()=>{}}},N={render:()=>{const[a,t]=p.useState(10);return e.jsx(m,{currentPage:a,totalPages:50,onPageChange:t,siblingCount:2})}},C={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-6)",alignItems:"center"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"var(--spacing-2)",fontWeight:"var(--font-weight-medium)"},children:"Small"}),e.jsx(o,{size:"sm"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"var(--spacing-2)",fontWeight:"var(--font-weight-medium)"},children:"Medium (Default)"}),e.jsx(o,{size:"md"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"var(--spacing-2)",fontWeight:"var(--font-weight-medium)"},children:"Large"}),e.jsx(o,{size:"lg"})]})]})},k={render:()=>{const[a,t]=p.useState(1),r=5,c=47,d=Math.ceil(c/r),g=(a-1)*r+1,h=Math.min(a*r,c);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-4)",alignItems:"center"},children:[e.jsx("div",{style:{padding:"var(--spacing-6)",background:"var(--surface-subtle)",borderRadius:"var(--radius-sm)",width:"300px",textAlign:"center"},children:e.jsxs("p",{style:{fontSize:"var(--font-size-14)",color:"var(--text-secondary)"},children:["Showing items ",g,"-",h," of ",c]})}),e.jsx(m,{currentPage:a,totalPages:d,onPageChange:t})]})}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <InteractivePagination />
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <InteractivePagination totalPages={5} />
}`,...x.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(10);
    return <Pagination currentPage={page} totalPages={100} onPageChange={setPage} />;
  }
}`,...P.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <InteractivePagination size="sm" />
}`,...b.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <InteractivePagination size="lg" />
}`,...j.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <InteractivePagination showFirstLast={false} />
}`,...y.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <InteractivePagination showPrevNext={false} />
}`,...S.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <InteractivePagination showFirstLast={false} showPrevNext={false} />
}`,...w.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 5,
    totalPages: 10,
    onPageChange: () => {},
    disabled: true
  }
}`,..._.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 1,
    totalPages: 1,
    onPageChange: () => {}
  }
}`,...I.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(10);
    return <Pagination currentPage={page} totalPages={50} onPageChange={setPage} siblingCount={2} />;
  }
}`,...N.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-6)',
    alignItems: 'center'
  }}>
      <div>
        <p style={{
        marginBottom: 'var(--spacing-2)',
        fontWeight: 'var(--font-weight-medium)'
      }}>Small</p>
        <InteractivePagination size="sm" />
      </div>
      <div>
        <p style={{
        marginBottom: 'var(--spacing-2)',
        fontWeight: 'var(--font-weight-medium)'
      }}>Medium (Default)</p>
        <InteractivePagination size="md" />
      </div>
      <div>
        <p style={{
        marginBottom: 'var(--spacing-2)',
        fontWeight: 'var(--font-weight-medium)'
      }}>Large</p>
        <InteractivePagination size="lg" />
      </div>
    </div>
}`,...C.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    const itemsPerPage = 5;
    const totalItems = 47;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startItem = (page - 1) * itemsPerPage + 1;
    const endItem = Math.min(page * itemsPerPage, totalItems);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-4)',
      alignItems: 'center'
    }}>
        <div style={{
        padding: 'var(--spacing-6)',
        background: 'var(--surface-subtle)',
        borderRadius: 'var(--radius-sm)',
        width: '300px',
        textAlign: 'center'
      }}>
          <p style={{
          fontSize: 'var(--font-size-14)',
          color: 'var(--text-secondary)'
        }}>
            Showing items {startItem}-{endItem} of {totalItems}
          </p>
        </div>
        <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
      </div>;
  }
}`,...k.parameters?.docs?.source}}};const U=["Default","FewPages","ManyPages","SmallSize","LargeSize","NoFirstLast","NoPrevNext","OnlyPageNumbers","Disabled","SinglePage","WithMoreSiblings","AllSizes","WithDataTable"];export{C as AllSizes,f as Default,_ as Disabled,x as FewPages,j as LargeSize,P as ManyPages,y as NoFirstLast,S as NoPrevNext,w as OnlyPageNumbers,I as SinglePage,b as SmallSize,k as WithDataTable,N as WithMoreSiblings,U as __namedExportsOrder,Q as default};
