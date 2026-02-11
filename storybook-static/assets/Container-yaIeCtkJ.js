import{j as u}from"./jsx-runtime-u17CrQMm.js";import{r as m}from"./index-Bi6L2ga8.js";const c="_container_1l2wi_8",p="_centered_1l2wi_13",f="_padded_1l2wi_19",_="_sm_1l2wi_28",x="_md_1l2wi_32",w="_lg_1l2wi_36",g="_xl_1l2wi_40",v="_full_1l2wi_44",e={container:c,centered:p,padded:f,sm:_,md:x,lg:w,xl:g,full:v},l=m.forwardRef(({size:t="lg",centered:a=!0,padded:n=!0,className:d,children:o,...r},s)=>{const i=[e.container,e[t],a&&e.centered,n&&e.padded,d].filter(Boolean).join(" ");return u.jsx("div",{ref:s,className:i,...r,children:o})});l.displayName="Container";l.__docgenInfo={description:"",methods:[],displayName:"Container",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg' | 'xl' | 'full'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'full'"}]},description:`Maximum width variant
- sm: 640px (small content, text-focused)
- md: 768px (medium content)
- lg: 1024px (standard layouts)
- xl: 1280px (wide layouts)
- full: 100% (full width)
@default 'lg'`,defaultValue:{value:"'lg'",computed:!1}},centered:{required:!1,tsType:{name:"boolean"},description:`Center the container horizontally
@default true`,defaultValue:{value:"true",computed:!1}},padded:{required:!1,tsType:{name:"boolean"},description:`Add horizontal padding
@default true`,defaultValue:{value:"true",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:"Container content"}},composes:["HTMLAttributes"]};export{l as C};
