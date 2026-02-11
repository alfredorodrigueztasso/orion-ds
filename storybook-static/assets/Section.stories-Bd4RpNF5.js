import{j as e}from"./jsx-runtime-u17CrQMm.js";import{S}from"./Section-jIvUtuq6.js";import"./index-Bi6L2ga8.js";const x={title:"Sections/Layout/Section",component:S,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{background:{control:"select",options:["base","subtle","sunken","brand","none"]},spacing:{control:"select",options:["none","sm","md","lg","xl"]},as:{control:"select",options:["section","div","article","aside","header","footer"]}}},r=e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("h2",{children:"Section Content"}),e.jsx("p",{children:"This is a generic section wrapper that provides consistent spacing and background options."})]}),n={args:{children:r}},s={args:{background:"base",children:r}},o={args:{background:"subtle",children:r}},a={args:{background:"sunken",children:r}},c={args:{background:"brand",children:r}},t={args:{spacing:"sm",children:r}},i={args:{spacing:"lg",children:r}},d={args:{spacing:"xl",children:r}},p={args:{spacing:"none",children:r}},l={args:{borderTop:!0,children:r}},g={args:{borderBottom:!0,children:r}},u={args:{borderTop:!0,borderBottom:!0,children:r}},m={args:{as:"article",children:e.jsxs("article",{children:[e.jsx("h2",{children:"Article Section"}),e.jsx("p",{children:"This section renders as an article element."})]})}},h={args:{as:"footer",background:"subtle",spacing:"md",children:e.jsx("footer",{style:{textAlign:"center"},children:e.jsx("p",{children:"Footer content goes here"})})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: content
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    background: 'base',
    children: content
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    background: 'subtle',
    children: content
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    background: 'sunken',
    children: content
  }
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    background: 'brand',
    children: content
  }
}`,...c.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    spacing: 'sm',
    children: content
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    spacing: 'lg',
    children: content
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    spacing: 'xl',
    children: content
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    spacing: 'none',
    children: content
  }
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    borderTop: true,
    children: content
  }
}`,...l.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    borderBottom: true,
    children: content
  }
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    borderTop: true,
    borderBottom: true,
    children: content
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    as: 'article',
    children: <article>
        <h2>Article Section</h2>
        <p>This section renders as an article element.</p>
      </article>
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    as: 'footer',
    background: 'subtle',
    spacing: 'md',
    children: <footer style={{
      textAlign: 'center'
    }}>
        <p>Footer content goes here</p>
      </footer>
  }
}`,...h.parameters?.docs?.source}}};const f=["Default","BaseBackground","SubtleBackground","SunkenBackground","BrandBackground","SmallSpacing","LargeSpacing","ExtraLargeSpacing","NoSpacing","WithTopBorder","WithBottomBorder","WithBothBorders","AsArticle","AsFooter"];export{m as AsArticle,h as AsFooter,s as BaseBackground,c as BrandBackground,n as Default,d as ExtraLargeSpacing,i as LargeSpacing,p as NoSpacing,t as SmallSpacing,o as SubtleBackground,a as SunkenBackground,u as WithBothBorders,g as WithBottomBorder,l as WithTopBorder,f as __namedExportsOrder,x as default};
