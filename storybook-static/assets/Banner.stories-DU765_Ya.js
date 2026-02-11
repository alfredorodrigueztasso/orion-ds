import{j as e}from"./jsx-runtime-u17CrQMm.js";const W="_banner_112r9_5",I="_container_112r9_45",P="_content_112r9_57",F="_splitLayout_112r9_67",G="_splitContent_112r9_82",O="_splitImage_112r9_86",$="_eyebrow_112r9_94",E="_title_112r9_112",R="_description_112r9_125",M="_actions_112r9_138",U="_ctaButton_112r9_147",J="_ctaPrimary_112r9_159",z="_ctaSecondary_112r9_174",K="_dismissButton_112r9_190",t={banner:W,container:I,content:P,splitLayout:F,splitContent:G,splitImage:O,eyebrow:$,title:E,description:R,actions:M,ctaButton:U,ctaPrimary:J,ctaSecondary:z,dismissButton:K},g=({eyebrow:b,title:C,description:h,ctaLabel:m,ctaHref:y,secondaryCtaLabel:f,secondaryCtaHref:v,variant:a="default",backgroundImage:_,sideImage:S,imagePosition:B="right",backgroundColor:L,gradient:x,dismissible:N=!1,onDismiss:T,fullWidth:A=!1,compact:H=!1,centered:k=!0,className:q,style:j,...D})=>{const V={...j,..._&&a==="image"&&{backgroundImage:`url(${_})`},...L&&{backgroundColor:L},...x&&a==="gradient"&&{background:x}},w=()=>e.jsxs("div",{className:t.content,children:[b&&e.jsx("span",{className:t.eyebrow,children:b}),e.jsx("h2",{className:t.title,children:C}),h&&e.jsx("p",{className:t.description,children:h}),(m||f)&&e.jsxs("div",{className:t.actions,children:[m&&y&&e.jsx("a",{href:y,className:`${t.ctaButton} ${t.ctaPrimary}`,children:m}),f&&v&&e.jsx("a",{href:v,className:`${t.ctaButton} ${t.ctaSecondary}`,children:f})]})]});return e.jsxs("section",{className:`${t.banner} ${q||""}`,"data-variant":a,"data-compact":H,"data-centered":k&&a!=="split","data-full-width":A,style:V,...D,children:[e.jsx("div",{className:t.container,children:a==="split"&&S?e.jsxs("div",{className:t.splitLayout,"data-image-position":B,children:[e.jsx("div",{className:t.splitContent,children:w()}),e.jsx("img",{src:S,alt:"",className:t.splitImage,"aria-hidden":"true"})]}):w()}),N&&e.jsx("button",{className:t.dismissButton,onClick:T,"aria-label":"Dismiss banner",children:e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]})};g.displayName="Banner";g.__docgenInfo={description:"Banner section for promotions and announcements",methods:[],displayName:"Banner",props:{eyebrow:{required:!1,tsType:{name:"ReactNode"},description:"Optional eyebrow/badge text"},title:{required:!0,tsType:{name:"ReactNode"},description:"Banner title"},description:{required:!1,tsType:{name:"ReactNode"},description:"Banner description"},ctaLabel:{required:!1,tsType:{name:"string"},description:"Primary CTA button label"},ctaHref:{required:!1,tsType:{name:"string"},description:"Primary CTA button href"},secondaryCtaLabel:{required:!1,tsType:{name:"string"},description:"Secondary CTA label"},secondaryCtaHref:{required:!1,tsType:{name:"string"},description:"Secondary CTA href"},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'gradient' | 'image' | 'split'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'gradient'"},{name:"literal",value:"'image'"},{name:"literal",value:"'split'"}]},description:`Banner variant
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},backgroundImage:{required:!1,tsType:{name:"string"},description:"Background image URL (for 'image' and 'split' variants)"},sideImage:{required:!1,tsType:{name:"string"},description:"Side image URL (for 'split' variant)"},imagePosition:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:`Image position for split variant
@default 'right'`,defaultValue:{value:"'right'",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:"Custom background color"},gradient:{required:!1,tsType:{name:"string"},description:"Custom gradient (overrides default)"},dismissible:{required:!1,tsType:{name:"boolean"},description:`Dismissible banner
@default false`,defaultValue:{value:"false",computed:!1}},onDismiss:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"On dismiss callback"},fullWidth:{required:!1,tsType:{name:"boolean"},description:`Full width (no max-width constraint)
@default false`,defaultValue:{value:"false",computed:!1}},compact:{required:!1,tsType:{name:"boolean"},description:`Compact mode
@default false`,defaultValue:{value:"false",computed:!1}},centered:{required:!1,tsType:{name:"boolean"},description:`Center content
@default true`,defaultValue:{value:"true",computed:!1}}},composes:["Omit"]};const X={title:"Sections/Marketing/Banner",component:g,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","gradient","image","split"]},imagePosition:{control:"select",options:["left","right"]}}},r={args:{title:"Summer Sale",description:"Get up to 50% off on selected items.",ctaLabel:"Shop Now",ctaHref:"#"}},s={args:{title:"New Features Available",description:"Check out our latest updates and improvements.",ctaLabel:"Learn More",ctaHref:"#",variant:"gradient",gradient:"linear-gradient(135deg, var(--color-brand-500), var(--color-brand-700))"}},n={args:{title:"Black Friday Deals",description:"Limited time offers you do not want to miss.",ctaLabel:"Shop Deals",ctaHref:"#",secondaryCtaLabel:"View All",secondaryCtaHref:"#",variant:"gradient"}},i={args:{title:"Cookie Notice",description:"We use cookies to improve your experience.",ctaLabel:"Accept",ctaHref:"#",dismissible:!0,onDismiss:()=>console.log("Banner dismissed")}},o={args:{title:"Download Our App",description:"Get the full experience on mobile.",ctaLabel:"Get Started",ctaHref:"#",variant:"split",sideImage:"https://picsum.photos/seed/banner/400/300",imagePosition:"right"}},c={args:{title:"Meet Our Team",description:"Learn about the people behind the product.",ctaLabel:"About Us",ctaHref:"#",variant:"split",sideImage:"https://picsum.photos/seed/team/400/300",imagePosition:"left"}},l={args:{eyebrow:"Announcement",title:"We have been acquired!",description:"Exciting news for our community.",ctaLabel:"Read More",ctaHref:"#"}},d={args:{title:"Free shipping on orders over $50",ctaLabel:"Shop Now",ctaHref:"#",compact:!0}},p={args:{title:"Join 10,000+ developers",description:"Building the future of design systems.",ctaLabel:"Get Started Free",ctaHref:"#",fullWidth:!0,variant:"gradient"}},u={args:{title:"Special Offer",description:"Use code SAVE20 for 20% off.",ctaLabel:"Apply Code",ctaHref:"#",backgroundColor:"var(--surface-brand)"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Summer Sale',
    description: 'Get up to 50% off on selected items.',
    ctaLabel: 'Shop Now',
    ctaHref: '#'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'New Features Available',
    description: 'Check out our latest updates and improvements.',
    ctaLabel: 'Learn More',
    ctaHref: '#',
    variant: 'gradient',
    gradient: 'linear-gradient(135deg, var(--color-brand-500), var(--color-brand-700))'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Black Friday Deals',
    description: 'Limited time offers you do not want to miss.',
    ctaLabel: 'Shop Deals',
    ctaHref: '#',
    secondaryCtaLabel: 'View All',
    secondaryCtaHref: '#',
    variant: 'gradient'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Cookie Notice',
    description: 'We use cookies to improve your experience.',
    ctaLabel: 'Accept',
    ctaHref: '#',
    dismissible: true,
    onDismiss: () => console.log('Banner dismissed')
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Download Our App',
    description: 'Get the full experience on mobile.',
    ctaLabel: 'Get Started',
    ctaHref: '#',
    variant: 'split',
    sideImage: 'https://picsum.photos/seed/banner/400/300',
    imagePosition: 'right'
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Meet Our Team',
    description: 'Learn about the people behind the product.',
    ctaLabel: 'About Us',
    ctaHref: '#',
    variant: 'split',
    sideImage: 'https://picsum.photos/seed/team/400/300',
    imagePosition: 'left'
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    eyebrow: 'Announcement',
    title: 'We have been acquired!',
    description: 'Exciting news for our community.',
    ctaLabel: 'Read More',
    ctaHref: '#'
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Free shipping on orders over $50',
    ctaLabel: 'Shop Now',
    ctaHref: '#',
    compact: true
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Join 10,000+ developers',
    description: 'Building the future of design systems.',
    ctaLabel: 'Get Started Free',
    ctaHref: '#',
    fullWidth: true,
    variant: 'gradient'
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Special Offer',
    description: 'Use code SAVE20 for 20% off.',
    ctaLabel: 'Apply Code',
    ctaHref: '#',
    backgroundColor: 'var(--surface-brand)'
  }
}`,...u.parameters?.docs?.source}}};const Y=["Default","GradientVariant","WithSecondaryAction","Dismissible","SplitVariant","SplitImageLeft","WithEyebrow","Compact","FullWidth","CustomBackground"];export{d as Compact,u as CustomBackground,r as Default,i as Dismissible,p as FullWidth,s as GradientVariant,c as SplitImageLeft,o as SplitVariant,l as WithEyebrow,n as WithSecondaryAction,Y as __namedExportsOrder,X as default};
