import{j as g}from"./jsx-runtime-u17CrQMm.js";import{r}from"./index-Bi6L2ga8.js";const b="_icon_1i3np_9",h="_xs_1i3np_27",w="_sm_1i3np_32",I="_md_1i3np_37",S="_lg_1i3np_42",q="_xl_1i3np_47",T="_current_1i3np_56",k="_primary_1i3np_60",M="_secondary_1i3np_64",j="_tertiary_1i3np_68",V="_brand_1i3np_72",A="_success_1i3np_76",E="_warning_1i3np_80",B="_error_1i3np_84",C="_info_1i3np_88",L="_inverse_1i3np_92",N="_disabled_1i3np_100",a={icon:b,xs:h,sm:w,md:I,lg:S,xl:q,current:T,primary:k,secondary:M,tertiary:j,brand:V,success:A,warning:E,error:B,info:C,inverse:L,disabled:N},R={xs:12,sm:16,md:20,lg:24,xl:32},u=r.forwardRef(({icon:d,size:e="md",color:i="current",strokeWidth:m=2,label:o,decorative:l=!1,disabled:c=!1,className:t,style:s,...p},f)=>{const _=r.useMemo(()=>typeof e=="number"?e:R[e],[e]),y=r.useMemo(()=>{const n=[a.icon];return typeof e=="string"&&n.push(a[e]),n.push(a[i]),c&&n.push(a.disabled),t&&n.push(t),n.filter(Boolean).join(" ")},[e,i,c,t]),v=r.useMemo(()=>l?{"aria-hidden":!0,role:"presentation"}:{"aria-label":o,role:"img"},[l,o]),x=r.useMemo(()=>typeof e=="number"?{width:e,height:e,...s}:s,[e,s]);return g.jsx(d,{ref:f,className:y,size:_,strokeWidth:m,style:x,...v,...p})});u.displayName="Icon";u.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{icon:{required:!0,tsType:{name:"LucideIcon"},description:`Lucide icon component to render
Import directly from lucide-react for tree-shaking

@example
import { Search } from 'lucide-react';
<Icon icon={Search} />`},size:{required:!1,tsType:{name:"union",raw:"IconSize | number",elements:[{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},{name:"number"}]},description:`Icon size - uses design tokens or custom pixel value
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:`| 'current'    // currentColor (inherits from parent)
| 'primary'    // --text-primary
| 'secondary'  // --text-secondary
| 'tertiary'   // --text-tertiary
| 'brand'      // --text-brand
| 'success'    // --status-success
| 'warning'    // --status-warning
| 'error'      // --status-error
| 'info'       // --status-info
| 'inverse'`,elements:[{name:"literal",value:"'current'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"},{name:"literal",value:"'brand'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"},{name:"literal",value:"'inverse'"}]},description:`Icon color variant - uses semantic tokens
@default 'current'`,defaultValue:{value:"'current'",computed:!1}},strokeWidth:{required:!1,tsType:{name:"number"},description:`Stroke width (Lucide default: 2)
@default 2`,defaultValue:{value:"2",computed:!1}},label:{required:!1,tsType:{name:"string"},description:`Accessible label for screen readers
Required when decorative=false

@example
<Icon icon={AlertCircle} label="Error occurred" />`},decorative:{required:!1,tsType:{name:"boolean"},description:`Mark icon as decorative (hidden from screen readers)
Use when icon is purely visual and adjacent text provides meaning
@default false

@example
<Button icon={<Icon icon={Search} decorative />}>Search</Button>`,defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`Disabled state (applies muted styling)
@default false`,defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class name"}},composes:["Omit"]};export{u as I};
