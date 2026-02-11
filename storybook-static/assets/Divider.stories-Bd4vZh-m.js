import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as a}from"./Divider-69YPMiYm.js";import"./index-Bi6L2ga8.js";const h={title:"Components/Data Display/Divider",component:a,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{orientation:{control:"radio",options:["horizontal","vertical"]},variant:{control:"radio",options:["solid","dashed","dotted"]},spacing:{control:"radio",options:["none","sm","md","lg"]}}},r={},s={args:{orientation:"horizontal"},decorators:[l=>e.jsxs("div",{style:{width:"100%"},children:[e.jsx("p",{children:"Content above"}),e.jsx(l,{}),e.jsx("p",{children:"Content below"})]})]},t={args:{orientation:"vertical"},decorators:[l=>e.jsxs("div",{style:{display:"flex",alignItems:"center",height:"100px"},children:[e.jsx("span",{children:"Left"}),e.jsx(l,{}),e.jsx("span",{children:"Right"})]})]},n={args:{variant:"dashed"}},i={args:{variant:"dotted"}},o={args:{label:"OR"}},d={args:{label:"Continue with"}},c={render:()=>e.jsxs("div",{children:[e.jsx("p",{children:"No spacing"}),e.jsx(a,{spacing:"none"}),e.jsx("p",{children:"Small spacing"}),e.jsx(a,{spacing:"sm"}),e.jsx("p",{children:"Medium spacing (default)"}),e.jsx(a,{spacing:"md"}),e.jsx("p",{children:"Large spacing"}),e.jsx(a,{spacing:"lg"}),e.jsx("p",{children:"End"})]})},p={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-6)"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"var(--spacing-2)",fontWeight:"var(--font-weight-medium)"},children:"Solid"}),e.jsx(a,{variant:"solid"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"var(--spacing-2)",fontWeight:"var(--font-weight-medium)"},children:"Dashed"}),e.jsx(a,{variant:"dashed"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"var(--spacing-2)",fontWeight:"var(--font-weight-medium)"},children:"Dotted"}),e.jsx(a,{variant:"dotted"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"var(--spacing-2)",fontWeight:"var(--font-weight-medium)"},children:"With Label"}),e.jsx(a,{label:"OR"})]})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal'
  },
  decorators: [Story => <div style={{
    width: '100%'
  }}>
        <p>Content above</p>
        <Story />
        <p>Content below</p>
      </div>]
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical'
  },
  decorators: [Story => <div style={{
    display: 'flex',
    alignItems: 'center',
    height: '100px'
  }}>
        <span>Left</span>
        <Story />
        <span>Right</span>
      </div>]
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'dashed'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'dotted'
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'OR'
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Continue with'
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <p>No spacing</p>
      <Divider spacing="none" />
      <p>Small spacing</p>
      <Divider spacing="sm" />
      <p>Medium spacing (default)</p>
      <Divider spacing="md" />
      <p>Large spacing</p>
      <Divider spacing="lg" />
      <p>End</p>
    </div>
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-6)'
  }}>
      <div>
        <p style={{
        marginBottom: 'var(--spacing-2)',
        fontWeight: 'var(--font-weight-medium)'
      }}>Solid</p>
        <Divider variant="solid" />
      </div>
      <div>
        <p style={{
        marginBottom: 'var(--spacing-2)',
        fontWeight: 'var(--font-weight-medium)'
      }}>Dashed</p>
        <Divider variant="dashed" />
      </div>
      <div>
        <p style={{
        marginBottom: 'var(--spacing-2)',
        fontWeight: 'var(--font-weight-medium)'
      }}>Dotted</p>
        <Divider variant="dotted" />
      </div>
      <div>
        <p style={{
        marginBottom: 'var(--spacing-2)',
        fontWeight: 'var(--font-weight-medium)'
      }}>With Label</p>
        <Divider label="OR" />
      </div>
    </div>
}`,...p.parameters?.docs?.source}}};const u=["Default","Horizontal","Vertical","Dashed","Dotted","WithLabel","WithLabelContinue","Spacings","AllVariants"];export{p as AllVariants,n as Dashed,r as Default,i as Dotted,s as Horizontal,c as Spacings,t as Vertical,o as WithLabel,d as WithLabelContinue,u as __namedExportsOrder,h as default};
