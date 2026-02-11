import{j as o}from"./jsx-runtime-u17CrQMm.js";import{L as u}from"./LogoCloud-CyrsISm5.js";import"./index-Bi6L2ga8.js";import"./Section-jIvUtuq6.js";import"./Container-yaIeCtkJ.js";const b={title:"Sections/Marketing/LogoCloud",component:u,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{columns:{control:"select",options:[3,4,5,6]},background:{control:"select",options:["base","subtle","none"]}}},e=[{name:"Acme",logo:o.jsx("span",{style:{fontSize:"var(--font-size-24)",fontWeight:"var(--font-weight-bold)"},children:"Acme"})},{name:"TechCorp",logo:o.jsx("span",{style:{fontSize:"var(--font-size-24)",fontWeight:"var(--font-weight-bold)"},children:"TechCorp"})},{name:"StartupXYZ",logo:o.jsx("span",{style:{fontSize:"var(--font-size-24)",fontWeight:"var(--font-weight-bold)"},children:"StartupXYZ"})},{name:"DesignCo",logo:o.jsx("span",{style:{fontSize:"var(--font-size-24)",fontWeight:"var(--font-weight-bold)"},children:"DesignCo"})},{name:"CloudBase",logo:o.jsx("span",{style:{fontSize:"var(--font-size-24)",fontWeight:"var(--font-weight-bold)"},children:"CloudBase"})},{name:"DataFlow",logo:o.jsx("span",{style:{fontSize:"var(--font-size-24)",fontWeight:"var(--font-weight-bold)"},children:"DataFlow"})}],s={args:{logos:e}},r={args:{title:"Trusted by leading companies",logos:e}},t={args:{title:"Our Partners",description:"We work with the best in the industry.",logos:e}},a={args:{title:"Featured In",logos:e.slice(0,4),columns:4}},n={args:{logos:e.slice(0,3),columns:3}},l={args:{title:"Trusted by",logos:e,background:"subtle"}},i={args:{title:"Our Customers",logos:e.map(g=>({...g,href:"#"}))}},c={args:{title:"Featured In",logos:e,grayscale:!0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    logos: defaultLogos
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Trusted by leading companies',
    logos: defaultLogos
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Our Partners',
    description: 'We work with the best in the industry.',
    logos: defaultLogos
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Featured In',
    logos: defaultLogos.slice(0, 4),
    columns: 4
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    logos: defaultLogos.slice(0, 3),
    columns: 3
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Trusted by',
    logos: defaultLogos,
    background: 'subtle'
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Our Customers',
    logos: defaultLogos.map(logo => ({
      ...logo,
      href: '#'
    }))
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Featured In',
    logos: defaultLogos,
    grayscale: true
  }
}`,...c.parameters?.docs?.source}}};const S=["Default","WithTitle","WithDescription","FourColumns","ThreeColumns","SubtleBackground","WithLinks","Grayscale"];export{s as Default,a as FourColumns,c as Grayscale,l as SubtleBackground,n as ThreeColumns,t as WithDescription,i as WithLinks,r as WithTitle,S as __namedExportsOrder,b as default};
