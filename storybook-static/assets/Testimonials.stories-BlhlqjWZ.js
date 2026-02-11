import{j as l}from"./jsx-runtime-u17CrQMm.js";import{T as u}from"./Testimonials-DoATQhRq.js";import{A as p}from"./Avatar-CustGMqw.js";import"./index-Bi6L2ga8.js";import"./Section-jIvUtuq6.js";import"./Container-yaIeCtkJ.js";import"./Icon-DRfe94op.js";import"./Button-C5l-MScQ.js";import"./Field-q4DqLIqo.js";import"./circle-alert-BMPEDkj1.js";import"./createLucideIcon-DprCCbyf.js";import"./Select-B6ZD6SWf.js";import"./Switch-BQ1qsiMs.js";import"./Checkbox-BdQYmUbV.js";import"./minus-D7ovpRdW.js";import"./check-DDKQb6IN.js";import"./Radio-CXxIYB9P.js";import"./Textarea-BZiGY5vV.js";import"./Card-BimbyH8z.js";import"./Badge-CTnzlsKR.js";import"./Alert-Cy1_w5uj.js";import"./x-Dd336Dmd.js";import"./info-DJ_xuc1q.js";import"./triangle-alert-CPxB8gZu.js";import"./circle-check-big-CA7x2PYe.js";import"./Spinner-C9iGDtuC.js";import"./ProgressBar-DKfZiO47.js";import"./Tooltip-CM6dVaRh.js";import"./Table-B2i6IxkC.js";import"./Tabs-D5n6hrvS.js";import"./Breadcrumb-1YRPRYXK.js";import"./house-Bwi52rpT.js";import"./Navbar-CdASg_Md.js";import"./Modal-p6Evd_XR.js";import"./ThemeController-C0Cm4STl.js";import"./ThemeContext-Dop_0lMq.js";import"./Carousel-DcIHTeQA.js";import"./chevron-left-D9uTS5hk.js";import"./chevron-right-BuTIk0ZE.js";import"./Chat-DwlHfvOq.js";import"./copy-CDSbOGtH.js";import"./thumbs-up-CA1lH5H_.js";import"./file-text-3QR_BDt1.js";import"./code-BWcIXUuE.js";import"./user-CUEj3VL3.js";import"./clock-BOaF0ey4.js";import"./file-CJqdiTYx.js";import"./upload-DDi9KpFe.js";import"./plus-_oTOY7dX.js";import"./search-BC3UyaPv.js";import"./message-square-9wXJwYnY.js";import"./trash-2-B67onKV4.js";import"./star-BFnvMsnD.js";const dt={title:"Sections/Marketing/Testimonials",component:u,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{columns:{control:"select",options:[1,2,3]},variant:{control:"select",options:["default","cards","minimal"]},background:{control:"select",options:["base","subtle","none"]}}},t=[{quote:"Orion has completely transformed how we build products. The component library is incredibly well thought out and saves us countless hours.",author:{name:"Sarah Chen",role:"VP of Engineering",company:"TechCorp",avatar:l.jsx(p,{initials:"SC",size:"md"})},rating:5},{quote:"The best design system I have ever used. The documentation is excellent and the components just work perfectly together.",author:{name:"Michael Johnson",role:"Lead Designer",company:"DesignStudio",avatar:l.jsx(p,{initials:"MJ",size:"md"})},rating:5},{quote:"We migrated our entire platform to Orion in just two weeks. The TypeScript support is fantastic.",author:{name:"Emily Davis",role:"CTO",company:"StartupXYZ",avatar:l.jsx(p,{initials:"ED",size:"md"})},rating:5}],e={args:{title:"What our customers say",testimonials:t}},r={args:{title:"Customer Stories",testimonials:t,columns:1}},s={args:{title:"Testimonials",testimonials:t.slice(0,2),columns:2}},o={args:{title:"Loved by developers",testimonials:t,variant:"cards"}},a={args:{title:"What people are saying",testimonials:t,variant:"minimal"}},i={args:{eyebrow:"Testimonials",title:"Trusted by industry leaders",description:"See what our customers have to say about their experience.",testimonials:t}},n={args:{title:"Customer Reviews",testimonials:t,background:"subtle"}},m={args:{title:"What they say",testimonials:t.map(({rating:d,...c})=>c)}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'What our customers say',
    testimonials: defaultTestimonials
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Customer Stories',
    testimonials: defaultTestimonials,
    columns: 1
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Testimonials',
    testimonials: defaultTestimonials.slice(0, 2),
    columns: 2
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Loved by developers',
    testimonials: defaultTestimonials,
    variant: 'cards'
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'What people are saying',
    testimonials: defaultTestimonials,
    variant: 'minimal'
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    eyebrow: 'Testimonials',
    title: 'Trusted by industry leaders',
    description: 'See what our customers have to say about their experience.',
    testimonials: defaultTestimonials
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Customer Reviews',
    testimonials: defaultTestimonials,
    background: 'subtle'
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'What they say',
    testimonials: defaultTestimonials.map(({
      rating,
      ...rest
    }) => rest)
  }
}`,...m.parameters?.docs?.source}}};const gt=["Default","SingleColumn","TwoColumns","CardsVariant","MinimalVariant","WithEyebrow","SubtleBackground","WithoutRatings"];export{o as CardsVariant,e as Default,a as MinimalVariant,r as SingleColumn,n as SubtleBackground,s as TwoColumns,i as WithEyebrow,m as WithoutRatings,gt as __namedExportsOrder,dt as default};
