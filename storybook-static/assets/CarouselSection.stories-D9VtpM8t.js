import{j as A}from"./jsx-runtime-u17CrQMm.js";import{C as T}from"./CarouselSection-BeAQkamy.js";import{B as k}from"./Badge-CTnzlsKR.js";import"./index-Bi6L2ga8.js";import"./Section-jIvUtuq6.js";import"./Container-yaIeCtkJ.js";import"./Carousel-DcIHTeQA.js";import"./chevron-left-D9uTS5hk.js";import"./createLucideIcon-DprCCbyf.js";import"./chevron-right-BuTIk0ZE.js";const x={title:"Sections/Marketing/CarouselSection",component:T,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["editorial","product","gallery"]},aspectRatio:{control:"select",options:["16/9","4/3","1/1","3/4"]},gap:{control:"select",options:["sm","md","lg"]},background:{control:"select",options:["base","subtle","sunken","none"]},alignToTitle:{control:"boolean",description:"Align first card with the title (container alignment)"},highlightActive:{control:"boolean",description:"Make the active card 10% larger (spotlight effect)"},loop:{control:"boolean",description:"Enable infinite loop scrolling"}}},c=t=>A.jsx("img",{src:`https://picsum.photos/seed/${t}/800/450`,alt:"",style:{width:"100%",height:"100%",objectFit:"cover"}}),e=[{image:c(1),eyebrow:"Design",title:"The future of interfaces",description:"How AI is reshaping how we build digital products.",overlay:"gradient"},{image:c(2),eyebrow:"Engineering",title:"Building at scale",description:"Lessons from shipping to millions of users.",overlay:"gradient"},{image:c(3),eyebrow:"Product",title:"User-centered design",description:"Putting users first in every decision.",overlay:"gradient"},{image:c(4),eyebrow:"Culture",title:"Remote-first teams",description:"How we collaborate across time zones.",overlay:"gradient"}],l={args:{items:e}},d={args:{title:"Featured Stories",description:"Check out our latest articles and insights.",items:e}},p={args:{eyebrow:A.jsx(k,{children:"Featured"}),title:"Editor Picks",items:e}},r={args:{title:"Featured Stories",description:"Cards are aligned with the title edge.",items:e,alignToTitle:!0}},s={args:{title:"Featured Stories",description:"Cards start from the screen edge.",items:e,alignToTitle:!1}},g={args:{title:"Auto-scrolling Carousel",items:e,autoScroll:!0,autoScrollInterval:3e3}},m={args:{title:"With Pagination Dots",items:e,showPagination:!0}},u={args:{title:"No Navigation Arrows",items:e,showNavigation:!1}},h={args:{title:"Featured Products",items:e.map((t,I)=>({...t,eyebrow:`$${(I+1)*29}.99`,description:"Free shipping"})),variant:"product",aspectRatio:"1/1"}},f={args:{title:"Photo Gallery",items:e.map(t=>({...t,eyebrow:void 0,description:void 0,overlay:"none"})),variant:"gallery",aspectRatio:"4/3"}},S={args:{title:"Small Gap",items:e,gap:"sm"}},v={args:{title:"Large Gap",items:e,gap:"lg"}},w={args:{title:"No Peek Effect",items:e,peek:!1}},y={args:{title:"Square Cards",items:e,aspectRatio:"1/1"}},b={args:{title:"Subtle Background",items:e,background:"subtle"}},a={args:{title:"Featured Stories",description:"Active card grows, others shrink - scroll to see the effect",items:e,highlightActive:!0}},i={args:{title:"Spotlight + Aligned",description:"Spotlight effect with title alignment",items:e,highlightActive:!0,alignToTitle:!0}},o={args:{title:"Infinite Loop",description:"Navigation loops back to the start when reaching the end",items:e,loop:!0}},n={args:{title:"Spotlight + Loop",description:"Active card grows with infinite navigation",items:e,highlightActive:!0,loop:!0}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Featured Stories',
    description: 'Check out our latest articles and insights.',
    items: defaultItems
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    eyebrow: <Badge>Featured</Badge>,
    title: 'Editor Picks',
    items: defaultItems
  }
}`,...p.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Featured Stories',
    description: 'Cards are aligned with the title edge.',
    items: defaultItems,
    alignToTitle: true
  }
}`,...r.parameters?.docs?.source},description:{story:`Cards aligned with the title (default behavior).
The first card starts at the same position as the section title.`,...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Featured Stories',
    description: 'Cards start from the screen edge.',
    items: defaultItems,
    alignToTitle: false
  }
}`,...s.parameters?.docs?.source},description:{story:`Cards start from the screen edge (Apple style).
Creates a more dramatic, edge-to-edge visual effect.`,...s.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Auto-scrolling Carousel',
    items: defaultItems,
    autoScroll: true,
    autoScrollInterval: 3000
  }
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'With Pagination Dots',
    items: defaultItems,
    showPagination: true
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'No Navigation Arrows',
    items: defaultItems,
    showNavigation: false
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Featured Products',
    items: defaultItems.map((item, i) => ({
      ...item,
      eyebrow: \`$\${(i + 1) * 29}.99\`,
      description: 'Free shipping'
    })),
    variant: 'product',
    aspectRatio: '1/1'
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Photo Gallery',
    items: defaultItems.map(item => ({
      ...item,
      eyebrow: undefined,
      description: undefined,
      overlay: 'none' as const
    })),
    variant: 'gallery',
    aspectRatio: '4/3'
  }
}`,...f.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Small Gap',
    items: defaultItems,
    gap: 'sm'
  }
}`,...S.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Large Gap',
    items: defaultItems,
    gap: 'lg'
  }
}`,...v.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'No Peek Effect',
    items: defaultItems,
    peek: false
  }
}`,...w.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Square Cards',
    items: defaultItems,
    aspectRatio: '1/1'
  }
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Subtle Background',
    items: defaultItems,
    background: 'subtle'
  }
}`,...b.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Featured Stories',
    description: 'Active card grows, others shrink - scroll to see the effect',
    items: defaultItems,
    highlightActive: true
  }
}`,...a.parameters?.docs?.source},description:{story:`Active card is 10% larger than the rest.
Creates a "spotlight" effect that follows scroll position.`,...a.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Spotlight + Aligned',
    description: 'Spotlight effect with title alignment',
    items: defaultItems,
    highlightActive: true,
    alignToTitle: true
  }
}`,...i.parameters?.docs?.source},description:{story:`Spotlight effect with title alignment.
The active card is visually prominent while maintaining alignment.`,...i.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Infinite Loop',
    description: 'Navigation loops back to the start when reaching the end',
    items: defaultItems,
    loop: true
  }
}`,...o.parameters?.docs?.source},description:{story:`Infinite loop carousel.
When reaching the end, navigation continues from the beginning.`,...o.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Spotlight + Loop',
    description: 'Active card grows with infinite navigation',
    items: defaultItems,
    highlightActive: true,
    loop: true
  }
}`,...n.parameters?.docs?.source},description:{story:`Spotlight effect with infinite loop.
The best combination for a dramatic carousel experience.`,...n.parameters?.docs?.description}}};const j=["Default","WithTitle","WithEyebrow","AlignedToTitle","EdgeAligned","AutoScroll","WithPagination","WithoutNavigation","ProductVariant","GalleryVariant","SmallGap","LargeGap","NoPeek","SquareAspectRatio","SubtleBackground","SpotlightEffect","SpotlightAligned","InfiniteLoop","SpotlightLoop"];export{r as AlignedToTitle,g as AutoScroll,l as Default,s as EdgeAligned,f as GalleryVariant,o as InfiniteLoop,v as LargeGap,w as NoPeek,h as ProductVariant,S as SmallGap,i as SpotlightAligned,a as SpotlightEffect,n as SpotlightLoop,y as SquareAspectRatio,b as SubtleBackground,p as WithEyebrow,m as WithPagination,d as WithTitle,u as WithoutNavigation,j as __namedExportsOrder,x as default};
