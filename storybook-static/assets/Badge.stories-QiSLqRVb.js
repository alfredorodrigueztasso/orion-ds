import{j as r}from"./jsx-runtime-u17CrQMm.js";import{B as a}from"./Badge-CTnzlsKR.js";const x={title:"Components/Data Display/Badge",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","neutral","success","error","warning","info","brand"]},size:{control:"select",options:["sm","md","lg"]}}},e={args:{variant:"primary",children:"Primary"}},s={args:{variant:"secondary",children:"Secondary"}},n={args:{variant:"neutral",children:"Neutral"}},i={args:{variant:"success",children:"Success"}},d={args:{variant:"error",children:"Error"}},c={args:{variant:"warning",children:"Warning"}},t={args:{variant:"info",children:"Info"}},o={args:{variant:"brand",children:"Brand"}},l={args:{size:"sm",children:"Small"}},g={args:{size:"md",children:"Medium"}},m={args:{size:"lg",children:"Large"}},p={render:()=>r.jsxs("div",{style:{display:"flex",gap:"var(--spacing-3)",alignItems:"center"},children:[r.jsx(a,{size:"sm",children:"Small"}),r.jsx(a,{size:"md",children:"Medium"}),r.jsx(a,{size:"lg",children:"Large"})]})},u={render:()=>r.jsxs("div",{style:{display:"flex",gap:"var(--spacing-3)"},children:[r.jsx(a,{variant:"error",children:"99+"}),r.jsx(a,{variant:"info",children:"12"}),r.jsx(a,{variant:"success",children:"✓"})]})},v={render:()=>r.jsxs("div",{style:{display:"flex",gap:"var(--spacing-3)",flexWrap:"wrap"},children:[r.jsx(a,{variant:"success",dot:!0,children:"Active"}),r.jsx(a,{variant:"error",dot:!0,children:"Offline"}),r.jsx(a,{variant:"warning",dot:!0,children:"Pending"}),r.jsx(a,{variant:"info",dot:!0,children:"Processing"}),r.jsx(a,{variant:"brand",dot:!0,children:"New"}),r.jsx(a,{variant:"neutral",dot:!0,children:"Draft"}),r.jsx(a,{variant:"primary",dot:!0,children:"Primary"}),r.jsx(a,{variant:"secondary",dot:!0,children:"Secondary"})]})},B={render:()=>r.jsxs("div",{style:{display:"flex",gap:"var(--spacing-3)",flexWrap:"wrap"},children:[r.jsx(a,{variant:"primary",children:"Primary"}),r.jsx(a,{variant:"secondary",children:"Secondary"}),r.jsx(a,{variant:"neutral",children:"Neutral"}),r.jsx(a,{variant:"success",children:"Success"}),r.jsx(a,{variant:"error",children:"Error"}),r.jsx(a,{variant:"warning",children:"Warning"}),r.jsx(a,{variant:"info",children:"Info"}),r.jsx(a,{variant:"brand",children:"Brand"})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Primary'
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'neutral',
    children: 'Neutral'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    children: 'Success'
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    children: 'Error'
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    children: 'Warning'
  }
}`,...c.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    children: 'Info'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'brand',
    children: 'Brand'
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    children: 'Small'
  }
}`,...l.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    children: 'Medium'
  }
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    children: 'Large'
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--spacing-3)',
    alignItems: 'center'
  }}>
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--spacing-3)'
  }}>
      <Badge variant="error">99+</Badge>
      <Badge variant="info">12</Badge>
      <Badge variant="success">✓</Badge>
    </div>
}`,...u.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--spacing-3)',
    flexWrap: 'wrap'
  }}>
      <Badge variant="success" dot>Active</Badge>
      <Badge variant="error" dot>Offline</Badge>
      <Badge variant="warning" dot>Pending</Badge>
      <Badge variant="info" dot>Processing</Badge>
      <Badge variant="brand" dot>New</Badge>
      <Badge variant="neutral" dot>Draft</Badge>
      <Badge variant="primary" dot>Primary</Badge>
      <Badge variant="secondary" dot>Secondary</Badge>
    </div>
}`,...v.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--spacing-3)',
    flexWrap: 'wrap'
  }}>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="neutral">Neutral</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="brand">Brand</Badge>
    </div>
}`,...B.parameters?.docs?.source}}};const S=["Primary","Secondary","Neutral","Success","Error","Warning","Info","Brand","Small","Medium","Large","AllSizes","WithNumbers","WithDot","AllVariants"];export{p as AllSizes,B as AllVariants,o as Brand,d as Error,t as Info,m as Large,g as Medium,n as Neutral,e as Primary,s as Secondary,l as Small,i as Success,c as Warning,v as WithDot,u as WithNumbers,S as __namedExportsOrder,x as default};
