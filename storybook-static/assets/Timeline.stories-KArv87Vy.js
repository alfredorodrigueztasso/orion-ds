import{j as t}from"./jsx-runtime-u17CrQMm.js";import{T as m}from"./Timeline-BCkrRsts.js";import{R as p}from"./rocket-Dh7DKKOE.js";import{C as d}from"./code-BWcIXUuE.js";import{U as g}from"./users-B3aIcKNm.js";import{T as v}from"./trophy-DQ44h5SH.js";import"./createLucideIcon-DprCCbyf.js";import"./index-Bi6L2ga8.js";const z={title:"Sections/Marketing/Timeline",component:m,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{orientation:{control:"select",options:["vertical","horizontal"]},background:{control:"select",options:["base","subtle","none"]}}},e=[{id:"1",date:"2020",title:"Founded",description:"Orion was founded with a mission to simplify UI development.",icon:t.jsx(p,{size:20})},{id:"2",date:"2021",title:"First Release",description:"Launched v1.0 with 20 components and basic theming.",icon:t.jsx(d,{size:20}),status:"completed"},{id:"3",date:"2022",title:"10K Users",description:"Reached 10,000 active developers using Orion.",icon:t.jsx(g,{size:20}),status:"completed"},{id:"4",date:"2024",title:"v2.0 Launch",description:"Major release with AI-first architecture and 50+ components.",icon:t.jsx(v,{size:20})}],r={args:{events:e}},s={args:{title:"Our Journey",description:"Key milestones in our history.",events:e}},o={args:{title:"Timeline",events:e,orientation:"horizontal"}},n={args:{eyebrow:"History",title:"How we got here",events:e}},a={args:{title:"Milestones",events:e,background:"subtle"}},i={args:{title:"Our Story",events:e.map(({icon:f,...u})=>u)}},c={args:{title:"Company History",events:e,alternating:!0}},l={args:{title:"Quick Overview",events:e,compact:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    events: defaultEvents
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Our Journey',
    description: 'Key milestones in our history.',
    events: defaultEvents
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Timeline',
    events: defaultEvents,
    orientation: 'horizontal'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    eyebrow: 'History',
    title: 'How we got here',
    events: defaultEvents
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Milestones',
    events: defaultEvents,
    background: 'subtle'
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Our Story',
    events: defaultEvents.map(({
      icon,
      ...rest
    }) => rest)
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Company History',
    events: defaultEvents,
    alternating: true
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Quick Overview',
    events: defaultEvents,
    compact: true
  }
}`,...l.parameters?.docs?.source}}};const O=["Default","WithTitle","Horizontal","WithEyebrow","SubtleBackground","WithoutIcons","Alternating","Compact"];export{c as Alternating,l as Compact,r as Default,o as Horizontal,a as SubtleBackground,n as WithEyebrow,s as WithTitle,i as WithoutIcons,O as __namedExportsOrder,z as default};
