import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as D}from"./index-Bi6L2ga8.js";import{C as t}from"./Checkbox-BdQYmUbV.js";import"./minus-D7ovpRdW.js";import"./createLucideIcon-DprCCbyf.js";import"./check-DDKQb6IN.js";import"./circle-alert-BMPEDkj1.js";const E={title:"Components/Forms/Checkbox",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Checkbox size"},indeterminate:{control:"boolean",description:"Indeterminate state (partially checked)"},disabled:{control:"boolean",description:"Disable checkbox"}}},i={args:{label:"Accept terms and conditions"}},d={args:{label:"I agree",defaultChecked:!0}},p={args:{label:"Subscribe to newsletter",helperText:"We will send you weekly updates"}},m={args:{label:"Accept terms",error:"You must accept the terms to continue"}},h={args:{label:"Disabled option",disabled:!0}},b={args:{label:"Disabled and checked",disabled:!0,defaultChecked:!0}},u={args:{label:"Select all",indeterminate:!0}},g={args:{label:"Small checkbox",size:"sm"}},k={args:{label:"Large checkbox",size:"lg"}},x={render:()=>{const[r,l]=D.useState(!1);return e.jsxs("div",{children:[e.jsx(t,{label:"Toggle me",checked:r,onChange:n=>l(n.target.checked)}),e.jsxs("p",{style:{marginTop:"var(--spacing-4)",fontSize:"var(--font-size-14)",color:"var(--text-secondary)"},children:["Status: ",r?"Checked ✓":"Unchecked"]})]})}},C={render:()=>{const[r,l]=D.useState([]),n=[{id:"option1",label:"Option 1"},{id:"option2",label:"Option 2"},{id:"option3",label:"Option 3"},{id:"option4",label:"Option 4"}],y=(s,o)=>{l(a=>o?[...a,s]:a.filter(c=>c!==s))};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-4)"},children:[n.map(s=>e.jsx(t,{label:s.label,checked:r.includes(s.id),onChange:o=>y(s.id,o.target.checked)},s.id)),e.jsxs("p",{style:{marginTop:"var(--spacing-4)",fontSize:"var(--font-size-14)",color:"var(--text-secondary)"},children:["Selected: ",r.length>0?r.join(", "):"None"]})]})}},f={render:()=>{const[r,l]=D.useState([{id:"item1",label:"Item 1",checked:!1},{id:"item2",label:"Item 2",checked:!1},{id:"item3",label:"Item 3",checked:!1}]),n=r.every(a=>a.checked),y=r.some(a=>a.checked)&&!n,s=a=>{l(c=>c.map(j=>({...j,checked:a})))},o=(a,c)=>{l(j=>j.map(z=>z.id===a?{...z,checked:c}:z))};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-4)"},children:[e.jsx(t,{label:"Select All",checked:n,indeterminate:y,onChange:a=>s(a.target.checked)}),e.jsx("div",{style:{paddingLeft:"var(--spacing-8)",display:"flex",flexDirection:"column",gap:"var(--spacing-3)"},children:r.map(a=>e.jsx(t,{label:a.label,checked:a.checked,onChange:c=>o(a.id,c.target.checked)},a.id))})]})}},S={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-6)"},children:[e.jsx(t,{label:"Small checkbox",size:"sm"}),e.jsx(t,{label:"Medium checkbox",size:"md"}),e.jsx(t,{label:"Large checkbox",size:"lg"})]})},v={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-4)"},children:[e.jsx(t,{label:"Unchecked"}),e.jsx(t,{label:"Checked",defaultChecked:!0}),e.jsx(t,{label:"Indeterminate",indeterminate:!0}),e.jsx(t,{label:"With helper text",helperText:"Additional information"}),e.jsx(t,{label:"With error",error:"This field is required"}),e.jsx(t,{label:"Disabled",disabled:!0}),e.jsx(t,{label:"Disabled checked",disabled:!0,defaultChecked:!0})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Accept terms and conditions'
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'I agree',
    defaultChecked: true
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Subscribe to newsletter',
    helperText: 'We will send you weekly updates'
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Accept terms',
    error: 'You must accept the terms to continue'
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled option',
    disabled: true
  }
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled and checked',
    disabled: true,
    defaultChecked: true
  }
}`,...b.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Select all',
    indeterminate: true
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Small checkbox',
    size: 'sm'
  }
}`,...g.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Large checkbox',
    size: 'lg'
  }
}`,...k.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <div>
        <Checkbox label="Toggle me" checked={checked} onChange={e => setChecked(e.target.checked)} />
        <p style={{
        marginTop: 'var(--spacing-4)',
        fontSize: 'var(--font-size-14)',
        color: 'var(--text-secondary)'
      }}>
          Status: {checked ? 'Checked ✓' : 'Unchecked'}
        </p>
      </div>;
  }
}`,...x.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<string[]>([]);
    const options = [{
      id: 'option1',
      label: 'Option 1'
    }, {
      id: 'option2',
      label: 'Option 2'
    }, {
      id: 'option3',
      label: 'Option 3'
    }, {
      id: 'option4',
      label: 'Option 4'
    }];
    const handleChange = (id: string, checked: boolean) => {
      setSelected(prev => checked ? [...prev, id] : prev.filter(item => item !== id));
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-4)'
    }}>
        {options.map(option => <Checkbox key={option.id} label={option.label} checked={selected.includes(option.id)} onChange={e => handleChange(option.id, e.target.checked)} />)}
        <p style={{
        marginTop: 'var(--spacing-4)',
        fontSize: 'var(--font-size-14)',
        color: 'var(--text-secondary)'
      }}>
          Selected: {selected.length > 0 ? selected.join(', ') : 'None'}
        </p>
      </div>;
  }
}`,...C.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [items, setItems] = useState([{
      id: 'item1',
      label: 'Item 1',
      checked: false
    }, {
      id: 'item2',
      label: 'Item 2',
      checked: false
    }, {
      id: 'item3',
      label: 'Item 3',
      checked: false
    }]);
    const allChecked = items.every(item => item.checked);
    const someChecked = items.some(item => item.checked) && !allChecked;
    const handleSelectAll = (checked: boolean) => {
      setItems(prev => prev.map(item => ({
        ...item,
        checked
      })));
    };
    const handleItemChange = (id: string, checked: boolean) => {
      setItems(prev => prev.map(item => item.id === id ? {
        ...item,
        checked
      } : item));
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-4)'
    }}>
        <Checkbox label="Select All" checked={allChecked} indeterminate={someChecked} onChange={e => handleSelectAll(e.target.checked)} />
        <div style={{
        paddingLeft: 'var(--spacing-8)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-3)'
      }}>
          {items.map(item => <Checkbox key={item.id} label={item.label} checked={item.checked} onChange={e => handleItemChange(item.id, e.target.checked)} />)}
        </div>
      </div>;
  }
}`,...f.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-6)'
  }}>
      <Checkbox label="Small checkbox" size="sm" />
      <Checkbox label="Medium checkbox" size="md" />
      <Checkbox label="Large checkbox" size="lg" />
    </div>
}`,...S.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-4)'
  }}>
      <Checkbox label="Unchecked" />
      <Checkbox label="Checked" defaultChecked />
      <Checkbox label="Indeterminate" indeterminate />
      <Checkbox label="With helper text" helperText="Additional information" />
      <Checkbox label="With error" error="This field is required" />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Disabled checked" disabled defaultChecked />
    </div>
}`,...v.parameters?.docs?.source}}};const U=["Default","Checked","WithHelperText","WithError","Disabled","DisabledChecked","Indeterminate","SmallSize","LargeSize","Interactive","CheckboxGroup","SelectAllPattern","AllSizes","AllStates"];export{S as AllSizes,v as AllStates,C as CheckboxGroup,d as Checked,i as Default,h as Disabled,b as DisabledChecked,u as Indeterminate,x as Interactive,k as LargeSize,f as SelectAllPattern,g as SmallSize,m as WithError,p as WithHelperText,U as __namedExportsOrder,E as default};
