import{r as a}from"./index-Bi6L2ga8.js";const p="_section_f5l02_8",f="_borderTop_f5l02_71",b="_borderBottom_f5l02_75",e={section:p,"spacing-none":"_spacing-none_f5l02_17","spacing-sm":"_spacing-sm_f5l02_22","spacing-md":"_spacing-md_f5l02_27","spacing-lg":"_spacing-lg_f5l02_32","spacing-xl":"_spacing-xl_f5l02_37","bg-none":"_bg-none_f5l02_46","bg-base":"_bg-base_f5l02_50","bg-subtle":"_bg-subtle_f5l02_54","bg-sunken":"_bg-sunken_f5l02_58","bg-brand":"_bg-brand_f5l02_62",borderTop:f,borderBottom:b},n=a.forwardRef(({as:l="section",spacing:s="lg",background:t="none",borderTop:o=!1,borderBottom:r=!1,className:i,children:d,...u},c)=>{const m=[e.section,e[`spacing-${s}`],e[`bg-${t}`],o&&e.borderTop,r&&e.borderBottom,i].filter(Boolean).join(" ");return a.createElement(l,{ref:c,className:m,...u},d)});n.displayName="Section";n.__docgenInfo={description:"",methods:[],displayName:"Section",props:{as:{required:!1,tsType:{name:"union",raw:"'section' | 'div' | 'article' | 'aside' | 'header' | 'footer'",elements:[{name:"literal",value:"'section'"},{name:"literal",value:"'div'"},{name:"literal",value:"'article'"},{name:"literal",value:"'aside'"},{name:"literal",value:"'header'"},{name:"literal",value:"'footer'"}]},description:`HTML element to render
@default 'section'`,defaultValue:{value:"'section'",computed:!1}},spacing:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg' | 'xl' | 'none'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'none'"}]},description:`Vertical spacing (padding)
- none: 0
- sm: spacing-8 (32px)
- md: spacing-16 (64px)
- lg: spacing-24 (96px)
- xl: spacing-32 (128px)
@default 'lg'`,defaultValue:{value:"'lg'",computed:!1}},background:{required:!1,tsType:{name:"union",raw:"'base' | 'subtle' | 'sunken' | 'brand' | 'none'",elements:[{name:"literal",value:"'base'"},{name:"literal",value:"'subtle'"},{name:"literal",value:"'sunken'"},{name:"literal",value:"'brand'"},{name:"literal",value:"'none'"}]},description:`Background style
- base: surface-base (main background)
- subtle: surface-subtle (gray background)
- sunken: surface-sunken (recessed)
- brand: interactive-primary (brand color)
- none: transparent
@default 'none'`,defaultValue:{value:"'none'",computed:!1}},borderTop:{required:!1,tsType:{name:"boolean"},description:`Add top border
@default false`,defaultValue:{value:"false",computed:!1}},borderBottom:{required:!1,tsType:{name:"boolean"},description:`Add bottom border
@default false`,defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:"Section content"}},composes:["HTMLAttributes"]};export{n as S};
