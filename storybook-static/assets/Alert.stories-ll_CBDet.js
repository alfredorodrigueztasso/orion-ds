import{j as r}from"./jsx-runtime-u17CrQMm.js";import{A as e}from"./Alert-Cy1_w5uj.js";import"./index-Bi6L2ga8.js";import"./x-Dd336Dmd.js";import"./createLucideIcon-DprCCbyf.js";import"./info-DJ_xuc1q.js";import"./triangle-alert-CPxB8gZu.js";import"./circle-check-big-CA7x2PYe.js";const v={title:"Components/Feedback/Alert",component:e,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["info","success","warning","error"]}}},a={args:{variant:"info",children:"This is an informational message for the user."}},s={args:{variant:"success",children:"Your action was completed successfully!"}},n={args:{variant:"warning",children:"Please review this warning before proceeding."}},t={args:{variant:"error",children:"An error occurred. Please try again."}},o={render:()=>r.jsxs(e,{variant:"info",children:[r.jsx("strong",{style:{display:"block",marginBottom:"var(--spacing-2)"},children:"Important Information"}),"Please read this carefully before continuing."]})},i={args:{variant:"warning",children:"This is a longer alert message that contains more detailed information. It might span multiple lines and should remain readable and well-formatted regardless of the content length. Make sure to provide enough context for users to understand the situation."}},c={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-4)",maxWidth:"600px"},children:[r.jsx(e,{variant:"info",children:"This is an informational alert"}),r.jsx(e,{variant:"success",children:"This is a success alert"}),r.jsx(e,{variant:"warning",children:"This is a warning alert"}),r.jsx(e,{variant:"error",children:"This is an error alert"})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    children: 'This is an informational message for the user.'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    children: 'Your action was completed successfully!'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    children: 'Please review this warning before proceeding.'
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    children: 'An error occurred. Please try again.'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Alert variant="info">
      <strong style={{
      display: 'block',
      marginBottom: 'var(--spacing-2)'
    }}>
        Important Information
      </strong>
      Please read this carefully before continuing.
    </Alert>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    children: 'This is a longer alert message that contains more detailed information. It might span multiple lines and should remain readable and well-formatted regardless of the content length. Make sure to provide enough context for users to understand the situation.'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-4)',
    maxWidth: '600px'
  }}>
      <Alert variant="info">
        This is an informational alert
      </Alert>
      <Alert variant="success">
        This is a success alert
      </Alert>
      <Alert variant="warning">
        This is a warning alert
      </Alert>
      <Alert variant="error">
        This is an error alert
      </Alert>
    </div>
}`,...c.parameters?.docs?.source}}};const x=["Info","Success","Warning","Error","WithTitle","LongMessage","AllVariants"];export{c as AllVariants,t as Error,a as Info,i as LongMessage,s as Success,n as Warning,o as WithTitle,x as __namedExportsOrder,v as default};
