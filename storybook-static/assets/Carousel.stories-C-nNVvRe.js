import{j as a}from"./jsx-runtime-u17CrQMm.js";import{C as v}from"./Carousel-DcIHTeQA.js";import{C as I}from"./Card-BimbyH8z.js";import"./index-Bi6L2ga8.js";import"./chevron-left-D9uTS5hk.js";import"./createLucideIcon-DprCCbyf.js";import"./chevron-right-BuTIk0ZE.js";const B={title:"Components/Data Display/Carousel",component:v,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["editorial","product","gallery"]},aspectRatio:{control:"select",options:["16/9","4/3","1/1","3/4"]},gap:{control:"select",options:["sm","md","lg"]},align:{control:"select",options:["edge","container"]}}},f=r=>a.jsx("img",{src:`https://picsum.photos/seed/${r}/800/450`,alt:"",style:{width:"100%",height:"100%",objectFit:"cover"}}),e=[{image:f(10),eyebrow:"Design",title:"The future of interfaces",description:"How AI is reshaping how we build digital products.",overlay:"gradient"},{image:f(20),eyebrow:"Engineering",title:"Building at scale",description:"Lessons from shipping to millions of users.",overlay:"gradient"},{image:f(30),eyebrow:"Product",title:"User-centered design",description:"Putting users first in every decision.",overlay:"gradient"},{image:f(40),eyebrow:"Culture",title:"Remote-first teams",description:"How we collaborate across time zones.",overlay:"gradient"}],s={args:{items:e}},t={args:{items:e,align:"container"}},o={args:{items:e,align:"edge"}},i={args:{items:e.map(r=>({...r,eyebrow:void 0,description:void 0,overlay:"gradient"})),variant:"gallery",aspectRatio:"16/9",showNavigation:!0,showPagination:!0,peek:!1},render:r=>a.jsxs(I,{children:[a.jsx(I.Header,{children:a.jsx("h3",{style:{margin:0},children:"Featured Images"})}),a.jsx(I.Body,{style:{padding:0},children:a.jsx(v,{...r})})]})},n={args:{items:e.map((r,C)=>({...r,eyebrow:`$${(C+1)*29}.99`,description:"Free shipping"})),variant:"product",aspectRatio:"1/1"}},c={args:{items:e.map(r=>({...r,overlay:"gradient"})),variant:"gallery",aspectRatio:"4/3"}},d={args:{items:e,showNavigation:!1,showPagination:!0}},p={args:{items:e,showNavigation:!0,showPagination:!0}},m={args:{items:e,autoScroll:!0,autoScrollInterval:3e3}},l={args:{items:e,gap:"sm"}},g={args:{items:e,gap:"lg"}},u={args:{items:e,peek:!1}},y={args:{items:e,aspectRatio:"1/1"}},h={args:{items:e,aspectRatio:"3/4"}},w={args:{items:e},render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-8)"},children:[a.jsxs("div",{children:[a.jsx("h3",{style:{marginBottom:"var(--spacing-4)"},children:"Editorial"}),a.jsx(v,{items:e,variant:"editorial"})]}),a.jsxs("div",{children:[a.jsx("h3",{style:{marginBottom:"var(--spacing-4)"},children:"Product"}),a.jsx(v,{items:e.map((r,C)=>({...r,eyebrow:`$${(C+1)*29}.99`,description:"Free shipping"})),variant:"product",aspectRatio:"1/1"})]}),a.jsxs("div",{children:[a.jsx("h3",{style:{marginBottom:"var(--spacing-4)"},children:"Gallery"}),a.jsx(v,{items:e,variant:"gallery",aspectRatio:"4/3"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems
  }
}`,...s.parameters?.docs?.source},description:{story:`Basic atomic Carousel component without any section wrapper.
Use this inside Cards, Modals, or custom layouts.`,...s.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    align: 'container'
  }
}`,...t.parameters?.docs?.source},description:{story:`Carousel with cards aligned to container edge.
Useful when you want cards to align with surrounding content.`,...t.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    align: 'edge'
  }
}`,...o.parameters?.docs?.source},description:{story:`Carousel with cards starting from the edge (Apple style).
Creates a more dramatic, edge-to-edge visual effect.`,...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems.map(item => ({
      ...item,
      eyebrow: undefined,
      description: undefined,
      overlay: 'gradient' as const
    })),
    variant: 'gallery',
    aspectRatio: '16/9',
    showNavigation: true,
    showPagination: true,
    peek: false
  },
  render: args => <Card>
      <Card.Header>
        <h3 style={{
        margin: 0
      }}>Featured Images</h3>
      </Card.Header>
      <Card.Body style={{
      padding: 0
    }}>
        <Carousel {...args} />
      </Card.Body>
    </Card>
}`,...i.parameters?.docs?.source},description:{story:`Carousel inside a Card component.
Demonstrates atomic composition for embedded carousels.`,...i.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems.map((item, i) => ({
      ...item,
      eyebrow: \`$\${(i + 1) * 29}.99\`,
      description: 'Free shipping'
    })),
    variant: 'product',
    aspectRatio: '1/1'
  }
}`,...n.parameters?.docs?.source},description:{story:"Product showcase variant with square cards.",...n.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems.map(item => ({
      ...item,
      overlay: 'gradient' as const
    })),
    variant: 'gallery',
    aspectRatio: '4/3'
  }
}`,...c.parameters?.docs?.source},description:{story:"Gallery variant with hover-reveal captions.",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    showNavigation: false,
    showPagination: true
  }
}`,...d.parameters?.docs?.source},description:{story:"Carousel with pagination dots instead of navigation arrows.",...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    showNavigation: true,
    showPagination: true
  }
}`,...p.parameters?.docs?.source},description:{story:"Carousel with both navigation and pagination.",...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    autoScroll: true,
    autoScrollInterval: 3000
  }
}`,...m.parameters?.docs?.source},description:{story:"Auto-scrolling carousel.",...m.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    gap: 'sm'
  }
}`,...l.parameters?.docs?.source},description:{story:"Small gap between cards.",...l.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    gap: 'lg'
  }
}`,...g.parameters?.docs?.source},description:{story:"Large gap between cards.",...g.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    peek: false
  }
}`,...u.parameters?.docs?.source},description:{story:"Without peek effect - cards don't extend past container edge.",...u.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    aspectRatio: '1/1'
  }
}`,...y.parameters?.docs?.source},description:{story:"Square aspect ratio cards.",...y.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    aspectRatio: '3/4'
  }
}`,...h.parameters?.docs?.source},description:{story:"Portrait aspect ratio (3:4) cards.",...h.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-8)'
  }}>
      <div>
        <h3 style={{
        marginBottom: 'var(--spacing-4)'
      }}>Editorial</h3>
        <Carousel items={defaultItems} variant="editorial" />
      </div>
      <div>
        <h3 style={{
        marginBottom: 'var(--spacing-4)'
      }}>Product</h3>
        <Carousel items={defaultItems.map((item, i) => ({
        ...item,
        eyebrow: \`$\${(i + 1) * 29}.99\`,
        description: 'Free shipping'
      }))} variant="product" aspectRatio="1/1" />
      </div>
      <div>
        <h3 style={{
        marginBottom: 'var(--spacing-4)'
      }}>Gallery</h3>
        <Carousel items={defaultItems} variant="gallery" aspectRatio="4/3" />
      </div>
    </div>
}`,...w.parameters?.docs?.source}}};const N=["Default","AlignedToContainer","AlignedToEdge","InsideCard","ProductVariant","GalleryVariant","WithPagination","NavigationAndPagination","AutoScroll","SmallGap","LargeGap","NoPeek","SquareAspectRatio","PortraitAspectRatio","AllVariants"];export{t as AlignedToContainer,o as AlignedToEdge,w as AllVariants,m as AutoScroll,s as Default,c as GalleryVariant,i as InsideCard,g as LargeGap,p as NavigationAndPagination,u as NoPeek,h as PortraitAspectRatio,n as ProductVariant,l as SmallGap,y as SquareAspectRatio,d as WithPagination,N as __namedExportsOrder,B as default};
