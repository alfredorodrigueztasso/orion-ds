import{j as e}from"./jsx-runtime-u17CrQMm.js";import{S as a}from"./Select-B6ZD6SWf.js";import{r as S}from"./index-Bi6L2ga8.js";const z={title:"Components/Forms/Select",component:a,parameters:{layout:"padded"},tags:["autodocs"]},m=[{value:"mx",label:"Mexico"},{value:"us",label:"United States"},{value:"ca",label:"Canada"},{value:"uk",label:"United Kingdom"},{value:"fr",label:"France"},{value:"de",label:"Germany"},{value:"es",label:"Spain"},{value:"it",label:"Italy"}],r=[{value:"xs",label:"Extra Small"},{value:"s",label:"Small"},{value:"m",label:"Medium"},{value:"l",label:"Large"},{value:"xl",label:"Extra Large"}],l={args:{label:"Country",options:m,placeholder:"Select your country"}},s={render:()=>{const[b,h]=S.useState("mx");return e.jsx(a,{label:"Country",options:m,value:b,onChange:g=>h(g.target.value)})}},o={args:{label:"Size",options:r,placeholder:"Choose a size",required:!0}},t={args:{label:"Shipping Country",options:m,helperText:"Select the country for shipping",placeholder:"Choose a country"}},n={args:{label:"Payment Method",options:[{value:"card",label:"Credit Card"},{value:"paypal",label:"PayPal"},{value:"bank",label:"Bank Transfer"}],error:"Please select a payment method"}},i={args:{label:"Account Type",options:[{value:"free",label:"Free"},{value:"premium",label:"Premium"},{value:"enterprise",label:"Enterprise"}],value:"premium",disabled:!0}},u={args:{label:"Size",size:"sm",options:r,placeholder:"Small select"}},c={args:{label:"Size",size:"md",options:r,placeholder:"Medium select (default)"}},p={args:{label:"Size",size:"lg",options:r,placeholder:"Large select"}},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-4)",maxWidth:"400px"},children:[e.jsx(a,{label:"Country",options:m,placeholder:"Select your country",required:!0}),e.jsx(a,{label:"T-Shirt Size",options:r,placeholder:"Choose your size",helperText:"Refer to our size guide if unsure"}),e.jsx(a,{label:"Shipping Speed",options:[{value:"standard",label:"Standard (5-7 days)"},{value:"express",label:"Express (2-3 days)"},{value:"overnight",label:"Overnight"}],placeholder:"Select shipping option"})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Country',
    options: countries,
    placeholder: 'Select your country'
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('mx');
    return <Select label="Country" options={countries} value={value} onChange={e => setValue(e.target.value)} />;
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Size',
    options: sizes,
    placeholder: 'Choose a size',
    required: true
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Shipping Country',
    options: countries,
    helperText: 'Select the country for shipping',
    placeholder: 'Choose a country'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Payment Method',
    options: [{
      value: 'card',
      label: 'Credit Card'
    }, {
      value: 'paypal',
      label: 'PayPal'
    }, {
      value: 'bank',
      label: 'Bank Transfer'
    }],
    error: 'Please select a payment method'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Account Type',
    options: [{
      value: 'free',
      label: 'Free'
    }, {
      value: 'premium',
      label: 'Premium'
    }, {
      value: 'enterprise',
      label: 'Enterprise'
    }],
    value: 'premium',
    disabled: true
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Size',
    size: 'sm',
    options: sizes,
    placeholder: 'Small select'
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Size',
    size: 'md',
    options: sizes,
    placeholder: 'Medium select (default)'
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Size',
    size: 'lg',
    options: sizes,
    placeholder: 'Large select'
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-4)',
    maxWidth: '400px'
  }}>
      <Select label="Country" options={countries} placeholder="Select your country" required />
      <Select label="T-Shirt Size" options={sizes} placeholder="Choose your size" helperText="Refer to our size guide if unsure" />
      <Select label="Shipping Speed" options={[{
      value: 'standard',
      label: 'Standard (5-7 days)'
    }, {
      value: 'express',
      label: 'Express (2-3 days)'
    }, {
      value: 'overnight',
      label: 'Overnight'
    }]} placeholder="Select shipping option" />
    </div>
}`,...d.parameters?.docs?.source}}};const f=["Default","WithValue","Required","WithHelper","WithError","Disabled","Small","Medium","Large","MultipleSelects"];export{l as Default,i as Disabled,p as Large,c as Medium,d as MultipleSelects,o as Required,u as Small,n as WithError,t as WithHelper,s as WithValue,f as __namedExportsOrder,z as default};
