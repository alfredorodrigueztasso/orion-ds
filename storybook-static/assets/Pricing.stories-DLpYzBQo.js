import{j as r}from"./jsx-runtime-u17CrQMm.js";import{P as c}from"./Pricing-CB1ZJm_R.js";import{B as t}from"./Button-C5l-MScQ.js";import"./index-Bi6L2ga8.js";import"./Section-jIvUtuq6.js";import"./Container-yaIeCtkJ.js";import"./Icon-DRfe94op.js";import"./Field-q4DqLIqo.js";import"./circle-alert-BMPEDkj1.js";import"./createLucideIcon-DprCCbyf.js";import"./Select-B6ZD6SWf.js";import"./Switch-BQ1qsiMs.js";import"./Checkbox-BdQYmUbV.js";import"./minus-D7ovpRdW.js";import"./check-DDKQb6IN.js";import"./Radio-CXxIYB9P.js";import"./Textarea-BZiGY5vV.js";import"./Card-BimbyH8z.js";import"./Badge-CTnzlsKR.js";import"./Alert-Cy1_w5uj.js";import"./x-Dd336Dmd.js";import"./info-DJ_xuc1q.js";import"./triangle-alert-CPxB8gZu.js";import"./circle-check-big-CA7x2PYe.js";import"./Spinner-C9iGDtuC.js";import"./ProgressBar-DKfZiO47.js";import"./Tooltip-CM6dVaRh.js";import"./Avatar-CustGMqw.js";import"./user-CUEj3VL3.js";import"./Table-B2i6IxkC.js";import"./Tabs-D5n6hrvS.js";import"./Breadcrumb-1YRPRYXK.js";import"./house-Bwi52rpT.js";import"./Navbar-CdASg_Md.js";import"./Modal-p6Evd_XR.js";import"./ThemeController-C0Cm4STl.js";import"./ThemeContext-Dop_0lMq.js";import"./Carousel-DcIHTeQA.js";import"./chevron-left-D9uTS5hk.js";import"./chevron-right-BuTIk0ZE.js";import"./Chat-DwlHfvOq.js";import"./copy-CDSbOGtH.js";import"./thumbs-up-CA1lH5H_.js";import"./file-text-3QR_BDt1.js";import"./code-BWcIXUuE.js";import"./clock-BOaF0ey4.js";import"./file-CJqdiTYx.js";import"./upload-DDi9KpFe.js";import"./plus-_oTOY7dX.js";import"./search-BC3UyaPv.js";import"./message-square-9wXJwYnY.js";import"./trash-2-B67onKV4.js";const pr={title:"Sections/Marketing/Pricing",component:c,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{columns:{control:"select",options:[2,3,4]},background:{control:"select",options:["base","subtle","none"]}}},p=[{name:"Starter",price:"$9",period:"per month",description:"Perfect for individuals and small projects.",features:["5 projects","10GB storage","Basic support","API access"],action:r.jsx(t,{variant:"secondary",fullWidth:!0,children:"Get Started"})},{name:"Pro",price:"$29",period:"per month",description:"For growing teams and businesses.",features:["Unlimited projects","100GB storage","Priority support","Advanced API","Team collaboration"],action:r.jsx(t,{fullWidth:!0,children:"Get Started"}),popular:!0},{name:"Enterprise",price:"$99",period:"per month",description:"For large organizations with custom needs.",features:["Everything in Pro","Unlimited storage","Dedicated support","Custom integrations","SLA guarantee","On-premise option"],action:r.jsx(t,{variant:"secondary",fullWidth:!0,children:"Contact Sales"})}],e={args:{title:"Simple, transparent pricing",description:"Choose the plan that works best for you.",plans:p}},o={args:{title:"Choose your plan",plans:p.slice(0,2),columns:2}},i={args:{eyebrow:"Pricing",title:"Plans for every stage",description:"Start free, scale as you grow.",plans:p}},a={args:{title:"Flexible Pricing",plans:p,background:"subtle"}},s={args:{title:"Special Offers",plans:[{name:"Starter",price:"$9",period:"per month",description:"Perfect for individuals.",features:["5 projects","10GB storage","Basic support"],action:r.jsx(t,{variant:"secondary",fullWidth:!0,children:"Get Started"}),badge:"Free Trial"},{name:"Pro",price:"$29",period:"per month",description:"For growing teams.",features:["Unlimited projects","100GB storage","Priority support"],action:r.jsx(t,{fullWidth:!0,children:"Get Started"}),popular:!0,badge:"Most Popular"},{name:"Enterprise",price:"$99",period:"per month",description:"For large organizations.",features:["Everything in Pro","Unlimited storage","Dedicated support"],action:r.jsx(t,{variant:"secondary",fullWidth:!0,children:"Contact Sales"}),badge:"Best Value"}]}},n={args:{title:"Enterprise Pricing",plans:[{name:"Startup",price:"Free",description:"For startups under $1M ARR",features:["All features","Community support","1 year free"],action:r.jsx(t,{fullWidth:!0,children:"Apply Now"})},{name:"Business",price:"Custom",description:"Tailored to your needs",features:["Volume discounts","Dedicated CSM","Custom SLA"],action:r.jsx(t,{variant:"secondary",fullWidth:!0,children:"Contact Us"}),popular:!0}],columns:2}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Simple, transparent pricing',
    description: 'Choose the plan that works best for you.',
    plans: defaultPlans
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Choose your plan',
    plans: defaultPlans.slice(0, 2),
    columns: 2
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    eyebrow: 'Pricing',
    title: 'Plans for every stage',
    description: 'Start free, scale as you grow.',
    plans: defaultPlans
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Flexible Pricing',
    plans: defaultPlans,
    background: 'subtle'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Special Offers',
    plans: [{
      name: 'Starter',
      price: '$9',
      period: 'per month',
      description: 'Perfect for individuals.',
      features: ['5 projects', '10GB storage', 'Basic support'],
      action: <Button variant="secondary" fullWidth>Get Started</Button>,
      badge: 'Free Trial'
    }, {
      name: 'Pro',
      price: '$29',
      period: 'per month',
      description: 'For growing teams.',
      features: ['Unlimited projects', '100GB storage', 'Priority support'],
      action: <Button fullWidth>Get Started</Button>,
      popular: true,
      badge: 'Most Popular'
    }, {
      name: 'Enterprise',
      price: '$99',
      period: 'per month',
      description: 'For large organizations.',
      features: ['Everything in Pro', 'Unlimited storage', 'Dedicated support'],
      action: <Button variant="secondary" fullWidth>Contact Sales</Button>,
      badge: 'Best Value'
    }]
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Enterprise Pricing',
    plans: [{
      name: 'Startup',
      price: 'Free',
      description: 'For startups under $1M ARR',
      features: ['All features', 'Community support', '1 year free'],
      action: <Button fullWidth>Apply Now</Button>
    }, {
      name: 'Business',
      price: 'Custom',
      description: 'Tailored to your needs',
      features: ['Volume discounts', 'Dedicated CSM', 'Custom SLA'],
      action: <Button variant="secondary" fullWidth>Contact Us</Button>,
      popular: true
    }],
    columns: 2
  }
}`,...n.parameters?.docs?.source}}};const cr=["Default","TwoPlans","WithEyebrow","SubtleBackground","WithBadges","CustomPricing"];export{n as CustomPricing,e as Default,a as SubtleBackground,o as TwoPlans,s as WithBadges,i as WithEyebrow,cr as __namedExportsOrder,pr as default};
