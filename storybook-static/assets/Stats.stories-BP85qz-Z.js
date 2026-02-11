import{S as c}from"./Stats-ChMu63Sh.js";import"./jsx-runtime-u17CrQMm.js";import"./index-Bi6L2ga8.js";import"./Section-jIvUtuq6.js";import"./Container-yaIeCtkJ.js";import"./Icon-DRfe94op.js";import"./Button-C5l-MScQ.js";import"./Field-q4DqLIqo.js";import"./circle-alert-BMPEDkj1.js";import"./createLucideIcon-DprCCbyf.js";import"./Select-B6ZD6SWf.js";import"./Switch-BQ1qsiMs.js";import"./Checkbox-BdQYmUbV.js";import"./minus-D7ovpRdW.js";import"./check-DDKQb6IN.js";import"./Radio-CXxIYB9P.js";import"./Textarea-BZiGY5vV.js";import"./Card-BimbyH8z.js";import"./Badge-CTnzlsKR.js";import"./Alert-Cy1_w5uj.js";import"./x-Dd336Dmd.js";import"./info-DJ_xuc1q.js";import"./triangle-alert-CPxB8gZu.js";import"./circle-check-big-CA7x2PYe.js";import"./Spinner-C9iGDtuC.js";import"./ProgressBar-DKfZiO47.js";import"./Tooltip-CM6dVaRh.js";import"./Avatar-CustGMqw.js";import"./user-CUEj3VL3.js";import"./Table-B2i6IxkC.js";import"./Tabs-D5n6hrvS.js";import"./Breadcrumb-1YRPRYXK.js";import"./house-Bwi52rpT.js";import"./Navbar-CdASg_Md.js";import"./Modal-p6Evd_XR.js";import"./ThemeController-C0Cm4STl.js";import"./ThemeContext-Dop_0lMq.js";import"./Carousel-DcIHTeQA.js";import"./chevron-left-D9uTS5hk.js";import"./chevron-right-BuTIk0ZE.js";import"./Chat-DwlHfvOq.js";import"./copy-CDSbOGtH.js";import"./thumbs-up-CA1lH5H_.js";import"./file-text-3QR_BDt1.js";import"./code-BWcIXUuE.js";import"./clock-BOaF0ey4.js";import"./file-CJqdiTYx.js";import"./upload-DDi9KpFe.js";import"./plus-_oTOY7dX.js";import"./search-BC3UyaPv.js";import"./message-square-9wXJwYnY.js";import"./trash-2-B67onKV4.js";import"./trending-up--FzQNwgR.js";import"./trending-down-DLTGsz8J.js";const ut={title:"Sections/Marketing/Stats",component:c,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{columns:{control:"select",options:[2,3,4]},variant:{control:"select",options:["default","cards","minimal"]},background:{control:"select",options:["base","subtle","none"]},highlightValue:{control:"boolean"}}},t=[{value:"10K+",label:"Active Users"},{value:"99.9%",label:"Uptime"},{value:"50M+",label:"API Requests"},{value:"150+",label:"Countries"}],e={args:{stats:t}},r={args:{title:"Trusted by developers worldwide",description:"Our numbers speak for themselves.",stats:t}},s={args:{stats:t.slice(0,3),columns:3}},a={args:{stats:t.slice(0,2),columns:2}},o={args:{eyebrow:"By the numbers",title:"Scale with confidence",stats:t}},i={args:{title:"Platform Statistics",stats:t,background:"subtle"}},n={args:{title:"This Month",stats:[{value:"10K+",label:"Active Users",trend:{value:"+12%",positive:!0}},{value:"99.9%",label:"Uptime",trend:{value:"+0.1%",positive:!0}},{value:"$1.2M",label:"Revenue",trend:{value:"+8%",positive:!0}},{value:"2.3%",label:"Churn",trend:{value:"-0.5%",positive:!0}}]}},l={args:{title:"Platform Metrics",stats:t,variant:"cards"}},m={args:{title:"Our Impact",description:"Numbers that speak for themselves.",stats:t,highlightValue:!0}},p={args:{title:"Key Metrics",stats:t,variant:"cards",highlightValue:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    stats: defaultStats
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Trusted by developers worldwide',
    description: 'Our numbers speak for themselves.',
    stats: defaultStats
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    stats: defaultStats.slice(0, 3),
    columns: 3
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    stats: defaultStats.slice(0, 2),
    columns: 2
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    eyebrow: 'By the numbers',
    title: 'Scale with confidence',
    stats: defaultStats
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Platform Statistics',
    stats: defaultStats,
    background: 'subtle'
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'This Month',
    stats: [{
      value: '10K+',
      label: 'Active Users',
      trend: {
        value: '+12%',
        positive: true
      }
    }, {
      value: '99.9%',
      label: 'Uptime',
      trend: {
        value: '+0.1%',
        positive: true
      }
    }, {
      value: '$1.2M',
      label: 'Revenue',
      trend: {
        value: '+8%',
        positive: true
      }
    }, {
      value: '2.3%',
      label: 'Churn',
      trend: {
        value: '-0.5%',
        positive: true
      }
    }]
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Platform Metrics',
    stats: defaultStats,
    variant: 'cards'
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Our Impact',
    description: 'Numbers that speak for themselves.',
    stats: defaultStats,
    highlightValue: true
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Key Metrics',
    stats: defaultStats,
    variant: 'cards',
    highlightValue: true
  }
}`,...p.parameters?.docs?.source}}};const dt=["Default","WithTitle","ThreeColumns","TwoColumns","WithEyebrow","SubtleBackground","WithTrends","CardsVariant","HighlightedValues","CardsWithHighlight"];export{l as CardsVariant,p as CardsWithHighlight,e as Default,m as HighlightedValues,i as SubtleBackground,s as ThreeColumns,a as TwoColumns,o as WithEyebrow,r as WithTitle,n as WithTrends,dt as __namedExportsOrder,ut as default};
