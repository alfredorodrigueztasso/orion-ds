import{j as e}from"./jsx-runtime-u17CrQMm.js";import{C as p}from"./Container-yaIeCtkJ.js";import"./index-Bi6L2ga8.js";const x={title:"Sections/Layout/Container",component:p,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg","xl","full"]}}},r=e.jsx("div",{style:{background:"var(--surface-subtle)",padding:"var(--spacing-8)",borderRadius:"var(--radius-container)"},children:e.jsx("p",{children:"This is content inside a container. The container controls the maximum width and horizontal centering of the content."})}),n={args:{children:r}},s={args:{size:"sm",children:r}},a={args:{size:"md",children:r}},t={args:{size:"lg",children:r}},c={args:{size:"xl",children:r}},o={args:{size:"full",children:r}},i={args:{padded:!0,children:r}},d={args:{padded:!1,children:r}},l={args:{centered:!0,size:"sm",children:e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("h2",{children:"Centered Content"}),e.jsx("p",{children:"This container is centered with a small max-width."})]})}},m={args:{centered:!1,size:"sm",children:e.jsxs("div",{children:[e.jsx("h2",{children:"Left-Aligned Container"}),e.jsx("p",{children:"This container is not centered."})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: content
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    children: content
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    children: content
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    children: content
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'xl',
    children: content
  }
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'full',
    children: content
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    padded: true,
    children: content
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    padded: false,
    children: content
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    centered: true,
    size: 'sm',
    children: <div style={{
      textAlign: 'center'
    }}>
        <h2>Centered Content</h2>
        <p>This container is centered with a small max-width.</p>
      </div>
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    centered: false,
    size: 'sm',
    children: <div>
        <h2>Left-Aligned Container</h2>
        <p>This container is not centered.</p>
      </div>
  }
}`,...m.parameters?.docs?.source}}};const f=["Default","Small","Medium","Large","ExtraLarge","FullWidth","WithPadding","NoPadding","Centered","NotCentered"];export{l as Centered,n as Default,c as ExtraLarge,o as FullWidth,t as Large,a as Medium,d as NoPadding,m as NotCentered,s as Small,i as WithPadding,f as __namedExportsOrder,x as default};
