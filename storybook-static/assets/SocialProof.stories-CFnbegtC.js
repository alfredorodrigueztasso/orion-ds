import{j as e}from"./jsx-runtime-u17CrQMm.js";const D="_socialProof_mffl1_5",J="_container_mffl1_25",Q="_header_mffl1_30",F="_eyebrow_mffl1_35",U="_title_mffl1_45",M="_description_mffl1_54",X="_sideBySide_mffl1_62",Y="_logosSection_mffl1_70",Z="_logosGrid_mffl1_74",$="_logosInline_mffl1_82",K="_logoItem_mffl1_90",z="_logoImage_mffl1_107",H="_statsSection_mffl1_114",ee="_statsGrid_mffl1_118",se="_statItem_mffl1_125",te="_statValue_mffl1_129",oe="_statLabel_mffl1_137",ae="_testimonialsSection_mffl1_143",le="_testimonialsGrid_mffl1_147",re="_testimonialCard_mffl1_153",ne="_testimonialRating_mffl1_160",ie="_star_mffl1_166",ce="_starEmpty_mffl1_170",de="_testimonialQuote_mffl1_175",me="_testimonialAuthor_mffl1_191",ue="_authorAvatar_mffl1_197",ge="_authorInfo_mffl1_205",fe="_authorName_mffl1_209",pe="_authorTitle_mffl1_216",s={socialProof:D,container:J,header:Q,eyebrow:F,title:U,description:M,sideBySide:X,logosSection:Y,logosGrid:Z,logosInline:$,logoItem:K,logoImage:z,statsSection:H,statsGrid:ee,statItem:se,statValue:te,statLabel:oe,testimonialsSection:ae,testimonialsGrid:le,testimonialCard:re,testimonialRating:ne,star:ie,starEmpty:ce,testimonialQuote:de,testimonialAuthor:me,authorAvatar:ue,authorInfo:ge,authorName:fe,authorTitle:pe},ye=({filled:l})=>e.jsx("svg",{className:l?s.star:s.starEmpty,width:"20",height:"20",viewBox:"0 0 24 24",fill:l?"currentColor":"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"})}),v=({eyebrow:l,title:S,description:b,logos:x=[],testimonials:N=[],stats:j=[],layout:a="stacked",logoStyle:G="grid",grayscaleLogos:q=!0,background:O="subtle",compact:A=!1,className:B,...V})=>{const T=x.length>0&&a!=="testimonials-only"&&a!=="stats-only",L=j.length>0&&a!=="testimonials-only"&&a!=="logos-only",I=N.length>0&&a!=="logos-only"&&a!=="stats-only",C=()=>e.jsx("div",{className:s.logosSection,children:e.jsx("div",{className:G==="inline"?s.logosInline:s.logosGrid,children:x.map((t,r)=>{const E=t.href?"a":"div",R=t.href?{href:t.href,target:"_blank",rel:"noopener noreferrer"}:{};return e.jsx(E,{className:s.logoItem,"data-grayscale":q,...R,children:e.jsx("img",{src:t.logo,alt:t.name,className:s.logoImage})},r)})})}),w=()=>e.jsx("div",{className:s.statsSection,children:e.jsx("div",{className:s.statsGrid,children:j.map((t,r)=>e.jsxs("div",{className:s.statItem,children:[e.jsx("div",{className:s.statValue,children:t.value}),e.jsx("div",{className:s.statLabel,children:t.label})]},r))})}),P=()=>e.jsx("div",{className:s.testimonialsSection,children:e.jsx("div",{className:s.testimonialsGrid,children:N.map(t=>e.jsxs("div",{className:s.testimonialCard,children:[t.rating!==void 0&&e.jsx("div",{className:s.testimonialRating,children:[1,2,3,4,5].map(r=>e.jsx(ye,{filled:r<=t.rating},r))}),e.jsx("p",{className:s.testimonialQuote,children:t.quote}),e.jsxs("div",{className:s.testimonialAuthor,children:[t.avatar&&e.jsx("img",{src:t.avatar,alt:t.author,className:s.authorAvatar}),e.jsxs("div",{className:s.authorInfo,children:[e.jsx("p",{className:s.authorName,children:t.author}),(t.title||t.company)&&e.jsx("p",{className:s.authorTitle,children:[t.title,t.company].filter(Boolean).join(", ")})]})]})]},t.id))})}),W=()=>a==="side-by-side"?e.jsxs("div",{className:s.sideBySide,children:[e.jsxs("div",{children:[T&&C(),L&&w()]}),e.jsx("div",{children:I&&P()})]}):e.jsxs(e.Fragment,{children:[T&&C(),L&&w(),I&&P()]});return e.jsx("section",{className:`${s.socialProof} ${B||""}`,"data-background":O,"data-compact":A,...V,children:e.jsxs("div",{className:s.container,children:[(l||S||b)&&e.jsxs("header",{className:s.header,children:[l&&e.jsx("span",{className:s.eyebrow,children:l}),S&&e.jsx("h2",{className:s.title,children:S}),b&&e.jsx("p",{className:s.description,children:b})]}),W()]})})};v.displayName="SocialProof";v.__docgenInfo={description:"SocialProof section for displaying trust indicators",methods:[],displayName:"SocialProof",props:{eyebrow:{required:!1,tsType:{name:"ReactNode"},description:"Optional eyebrow text"},title:{required:!1,tsType:{name:"ReactNode"},description:"Section title"},description:{required:!1,tsType:{name:"ReactNode"},description:"Section description"},logos:{required:!1,tsType:{name:"Array",elements:[{name:"SocialProofLogo"}],raw:"SocialProofLogo[]"},description:"Company/brand logos",defaultValue:{value:"[]",computed:!1}},testimonials:{required:!1,tsType:{name:"Array",elements:[{name:"SocialProofTestimonial"}],raw:"SocialProofTestimonial[]"},description:"Customer testimonials",defaultValue:{value:"[]",computed:!1}},stats:{required:!1,tsType:{name:"Array",elements:[{name:"SocialProofStat"}],raw:"SocialProofStat[]"},description:"Stats/metrics",defaultValue:{value:"[]",computed:!1}},layout:{required:!1,tsType:{name:"union",raw:"'stacked' | 'side-by-side' | 'testimonials-only' | 'logos-only' | 'stats-only'",elements:[{name:"literal",value:"'stacked'"},{name:"literal",value:"'side-by-side'"},{name:"literal",value:"'testimonials-only'"},{name:"literal",value:"'logos-only'"},{name:"literal",value:"'stats-only'"}]},description:`Layout variant
@default 'stacked'`,defaultValue:{value:"'stacked'",computed:!1}},logoStyle:{required:!1,tsType:{name:"union",raw:"'grid' | 'inline' | 'carousel'",elements:[{name:"literal",value:"'grid'"},{name:"literal",value:"'inline'"},{name:"literal",value:"'carousel'"}]},description:`Logo display style
@default 'grid'`,defaultValue:{value:"'grid'",computed:!1}},grayscaleLogos:{required:!1,tsType:{name:"boolean"},description:`Grayscale logos
@default true`,defaultValue:{value:"true",computed:!1}},background:{required:!1,tsType:{name:"union",raw:"'base' | 'subtle' | 'none'",elements:[{name:"literal",value:"'base'"},{name:"literal",value:"'subtle'"},{name:"literal",value:"'none'"}]},description:`Background style
@default 'subtle'`,defaultValue:{value:"'subtle'",computed:!1}},compact:{required:!1,tsType:{name:"boolean"},description:`Compact mode
@default false`,defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const _e={title:"Sections/Marketing/SocialProof",component:v,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{layout:{control:"select",options:["stacked","side-by-side","testimonials-only","logos-only","stats-only"]},logoStyle:{control:"select",options:["grid","inline","carousel"]},background:{control:"select",options:["base","subtle","none"]}}},o=[{name:"Acme",logo:"https://via.placeholder.com/120x40?text=Acme"},{name:"TechCorp",logo:"https://via.placeholder.com/120x40?text=TechCorp"},{name:"StartupXYZ",logo:"https://via.placeholder.com/120x40?text=StartupXYZ"},{name:"DesignCo",logo:"https://via.placeholder.com/120x40?text=DesignCo"},{name:"CloudBase",logo:"https://via.placeholder.com/120x40?text=CloudBase"}],k=[{id:1,quote:"Orion has completely transformed how we build products.",author:"Sarah Chen",title:"VP of Engineering",company:"TechCorp",rating:5},{id:2,quote:"The best design system I have ever used.",author:"Michael Johnson",title:"Lead Designer",company:"DesignStudio",rating:5}],_=[{value:"10K+",label:"Users"},{value:"4.9",label:"Rating"},{value:"99%",label:"Satisfaction"}],n={args:{title:"Trusted by Industry Leaders",logos:o}},i={args:{title:"Our Impact",stats:_,layout:"stats-only"}},c={args:{title:"What Our Customers Say",testimonials:k,layout:"testimonials-only"}},d={args:{title:"Trusted by thousands of developers",description:"Join the community building the future of web interfaces.",logos:o,testimonials:k,stats:_,layout:"stacked"}},m={args:{title:"Our Partners",logos:o,stats:_,layout:"side-by-side"}},u={args:{title:"Featured In",logos:o,layout:"logos-only"}},g={args:{title:"Trusted by",logos:o,grayscaleLogos:!0,layout:"logos-only"}},f={args:{title:"Our Partners",logos:o,logoStyle:"inline",layout:"logos-only"}},p={args:{title:"Join the community",logos:o,stats:_,background:"subtle"}},y={args:{logos:o,compact:!0,layout:"logos-only"}},h={args:{eyebrow:"Social Proof",title:"Used by teams at 500+ companies",logos:o}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Trusted by Industry Leaders',
    logos: defaultLogos
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Our Impact',
    stats: defaultStats,
    layout: 'stats-only'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'What Our Customers Say',
    testimonials: defaultTestimonials,
    layout: 'testimonials-only'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Trusted by thousands of developers',
    description: 'Join the community building the future of web interfaces.',
    logos: defaultLogos,
    testimonials: defaultTestimonials,
    stats: defaultStats,
    layout: 'stacked'
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Our Partners',
    logos: defaultLogos,
    stats: defaultStats,
    layout: 'side-by-side'
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Featured In',
    logos: defaultLogos,
    layout: 'logos-only'
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Trusted by',
    logos: defaultLogos,
    grayscaleLogos: true,
    layout: 'logos-only'
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Our Partners',
    logos: defaultLogos,
    logoStyle: 'inline',
    layout: 'logos-only'
  }
}`,...f.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Join the community',
    logos: defaultLogos,
    stats: defaultStats,
    background: 'subtle'
  }
}`,...p.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    logos: defaultLogos,
    compact: true,
    layout: 'logos-only'
  }
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    eyebrow: 'Social Proof',
    title: 'Used by teams at 500+ companies',
    logos: defaultLogos
  }
}`,...h.parameters?.docs?.source}}};const Se=["Default","WithStats","WithTestimonials","Combined","SideBySide","LogosOnly","GrayscaleLogos","InlineLogos","SubtleBackground","Compact","WithEyebrow"];export{d as Combined,y as Compact,n as Default,g as GrayscaleLogos,f as InlineLogos,u as LogosOnly,m as SideBySide,p as SubtleBackground,h as WithEyebrow,i as WithStats,c as WithTestimonials,Se as __namedExportsOrder,_e as default};
