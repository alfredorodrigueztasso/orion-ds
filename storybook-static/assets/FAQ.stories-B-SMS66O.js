import{F as u}from"./FAQ-6vqm8AZW.js";import"./jsx-runtime-u17CrQMm.js";import"./index-Bi6L2ga8.js";import"./Section-jIvUtuq6.js";import"./Container-yaIeCtkJ.js";import"./chevron-down-buXKF-gJ.js";import"./createLucideIcon-DprCCbyf.js";const h={title:"Sections/Marketing/FAQ",component:u,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{columns:{control:"select",options:[1,2]},variant:{control:"select",options:["accordion","grid"]},background:{control:"select",options:["base","subtle","none"]}}},e=[{question:"How do I get started with Orion?",answer:"Simply install the package via npm or yarn, import the components you need, and start building. Check our getting started guide for detailed instructions."},{question:"Is Orion free to use?",answer:"Yes! Orion is open source and free to use in both personal and commercial projects under the MIT license."},{question:"Does Orion support dark mode?",answer:"Absolutely. Orion has built-in dark mode support with automatic detection of system preferences and manual toggle options."},{question:"Can I customize the design tokens?",answer:"Yes, all design tokens are fully customizable. You can override colors, spacing, typography, and more to match your brand."},{question:"Is Orion accessible?",answer:"Accessibility is a core priority. All components are WCAG 2.1 AA compliant with proper ARIA attributes and keyboard navigation."},{question:"What frameworks does Orion support?",answer:"Orion currently supports React and Vue 3, with more frameworks planned for future releases."}],t={args:{title:"Frequently Asked Questions",items:e}},s={args:{title:"FAQ",description:"Find answers to the most common questions about Orion.",items:e}},r={args:{title:"Common Questions",items:e,columns:2}},o={args:{title:"Questions & Answers",items:e,variant:"grid",columns:2}},n={args:{eyebrow:"Support",title:"How can we help?",items:e.slice(0,4)}},a={args:{title:"FAQ",items:e,background:"subtle"}},i={args:{title:"Questions",items:e,allowMultiple:!1}},c={args:{title:"Getting Started",items:[{question:"How do I get started with Orion?",answer:"Simply install the package via npm or yarn, import the components you need, and start building.",defaultOpen:!0},...e.slice(1)]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Frequently Asked Questions',
    items: defaultItems
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'FAQ',
    description: 'Find answers to the most common questions about Orion.',
    items: defaultItems
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Common Questions',
    items: defaultItems,
    columns: 2
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Questions & Answers',
    items: defaultItems,
    variant: 'grid',
    columns: 2
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    eyebrow: 'Support',
    title: 'How can we help?',
    items: defaultItems.slice(0, 4)
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'FAQ',
    items: defaultItems,
    background: 'subtle'
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Questions',
    items: defaultItems,
    allowMultiple: false
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Getting Started',
    items: [{
      question: 'How do I get started with Orion?',
      answer: 'Simply install the package via npm or yarn, import the components you need, and start building.',
      defaultOpen: true
    }, ...defaultItems.slice(1)]
  }
}`,...c.parameters?.docs?.source}}};const b=["Default","WithDescription","TwoColumns","GridVariant","WithEyebrow","SubtleBackground","SingleOpen","WithDefaultOpen"];export{t as Default,o as GridVariant,i as SingleOpen,a as SubtleBackground,r as TwoColumns,c as WithDefaultOpen,s as WithDescription,n as WithEyebrow,b as __namedExportsOrder,h as default};
