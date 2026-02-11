import{j as e}from"./jsx-runtime-u17CrQMm.js";import{F as t}from"./Footer-Cdyrv6kV.js";import{T as l}from"./twitter-XLdaVmJS.js";import{G as c}from"./github-2kT0ytcx.js";import{M as p}from"./message-circle-ByYO5lLK.js";import"./index-Bi6L2ga8.js";import"./Section-jIvUtuq6.js";import"./Container-yaIeCtkJ.js";import"./createLucideIcon-DprCCbyf.js";const O={title:"Sections/Marketing/Footer",component:t,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","minimal","centered"]},background:{control:"select",options:["base","subtle","none"]}}},a=[{title:"Product",links:[{label:"Features",href:"#"},{label:"Pricing",href:"#"},{label:"Changelog",href:"#"},{label:"Roadmap",href:"#"}]},{title:"Company",links:[{label:"About",href:"#"},{label:"Blog",href:"#"},{label:"Careers",href:"#"},{label:"Press",href:"#"}]},{title:"Resources",links:[{label:"Documentation",href:"#"},{label:"API Reference",href:"#"},{label:"Guides",href:"#"},{label:"Examples",href:"#"}]},{title:"Legal",links:[{label:"Privacy",href:"#"},{label:"Terms",href:"#"},{label:"License",href:"#"}]}],f=[{label:"Twitter",href:"#",icon:e.jsx(l,{size:20})},{label:"GitHub",href:"#",icon:e.jsx(c,{size:20})},{label:"Discord",href:"#",icon:e.jsx(p,{size:20})}],r={args:{brand:{name:"Orion",logo:e.jsx("span",{style:{fontSize:"var(--font-size-24)",fontWeight:"var(--font-weight-bold)"},children:"✦"}),description:"The AI-first design system for modern web applications."},linkGroups:a,copyright:"© 2024 Orion. All rights reserved."}},n={args:{brand:{name:"Orion",logo:e.jsx("span",{style:{fontSize:"var(--font-size-24)",fontWeight:"var(--font-weight-bold)"},children:"✦"}),description:"Building the future of design systems."},linkGroups:a.slice(0,3),socialLinks:f,copyright:"© 2024 Orion. All rights reserved."}},s={args:{brand:{name:"Orion",logo:e.jsx("span",{style:{fontSize:"var(--font-size-24)",fontWeight:"var(--font-weight-bold)"},children:"✦"})},copyright:"© 2024 Orion. All rights reserved.",legalLinks:[{label:"Privacy",href:"#"},{label:"Terms",href:"#"},{label:"Contact",href:"#"}]}},o={args:{brand:{name:"Orion",description:"Stay updated with our newsletter."},linkGroups:a.slice(0,2),legalLinks:[{label:"Privacy Policy",href:"#"},{label:"Terms of Service",href:"#"}],copyright:"© 2024 Orion. All rights reserved."}},i={args:{brand:{name:"Orion"},copyright:"© 2024 Orion",variant:"minimal"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    brand: {
      name: 'Orion',
      logo: <span style={{
        fontSize: 'var(--font-size-24)',
        fontWeight: 'var(--font-weight-bold)'
      }}>✦</span>,
      description: 'The AI-first design system for modern web applications.'
    },
    linkGroups: defaultLinks,
    copyright: '© 2024 Orion. All rights reserved.'
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    brand: {
      name: 'Orion',
      logo: <span style={{
        fontSize: 'var(--font-size-24)',
        fontWeight: 'var(--font-weight-bold)'
      }}>✦</span>,
      description: 'Building the future of design systems.'
    },
    linkGroups: defaultLinks.slice(0, 3),
    socialLinks,
    copyright: '© 2024 Orion. All rights reserved.'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    brand: {
      name: 'Orion',
      logo: <span style={{
        fontSize: 'var(--font-size-24)',
        fontWeight: 'var(--font-weight-bold)'
      }}>✦</span>
    },
    copyright: '© 2024 Orion. All rights reserved.',
    legalLinks: [{
      label: 'Privacy',
      href: '#'
    }, {
      label: 'Terms',
      href: '#'
    }, {
      label: 'Contact',
      href: '#'
    }]
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    brand: {
      name: 'Orion',
      description: 'Stay updated with our newsletter.'
    },
    linkGroups: defaultLinks.slice(0, 2),
    legalLinks: [{
      label: 'Privacy Policy',
      href: '#'
    }, {
      label: 'Terms of Service',
      href: '#'
    }],
    copyright: '© 2024 Orion. All rights reserved.'
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    brand: {
      name: 'Orion'
    },
    copyright: '© 2024 Orion',
    variant: 'minimal'
  }
}`,...i.parameters?.docs?.source}}};const S=["Default","WithSocial","Simple","WithLegalLinks","Minimal"];export{r as Default,i as Minimal,s as Simple,o as WithLegalLinks,n as WithSocial,S as __namedExportsOrder,O as default};
