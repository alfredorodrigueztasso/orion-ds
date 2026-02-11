import{j as c}from"./jsx-runtime-u17CrQMm.js";import{C as p}from"./Contact-DINELpHo.js";import{M as u}from"./mail-B1OdJ1bA.js";import{P as d}from"./phone-D_YpRfIr.js";import{M as b}from"./map-pin-0MytI99a.js";import"./index-Bi6L2ga8.js";import"./Section-jIvUtuq6.js";import"./Container-yaIeCtkJ.js";import"./Icon-DRfe94op.js";import"./Button-C5l-MScQ.js";import"./Field-q4DqLIqo.js";import"./circle-alert-BMPEDkj1.js";import"./createLucideIcon-DprCCbyf.js";import"./Select-B6ZD6SWf.js";import"./Switch-BQ1qsiMs.js";import"./Checkbox-BdQYmUbV.js";import"./minus-D7ovpRdW.js";import"./check-DDKQb6IN.js";import"./Radio-CXxIYB9P.js";import"./Textarea-BZiGY5vV.js";import"./Card-BimbyH8z.js";import"./Badge-CTnzlsKR.js";import"./Alert-Cy1_w5uj.js";import"./x-Dd336Dmd.js";import"./info-DJ_xuc1q.js";import"./triangle-alert-CPxB8gZu.js";import"./circle-check-big-CA7x2PYe.js";import"./Spinner-C9iGDtuC.js";import"./ProgressBar-DKfZiO47.js";import"./Tooltip-CM6dVaRh.js";import"./Avatar-CustGMqw.js";import"./user-CUEj3VL3.js";import"./Table-B2i6IxkC.js";import"./Tabs-D5n6hrvS.js";import"./Breadcrumb-1YRPRYXK.js";import"./house-Bwi52rpT.js";import"./Navbar-CdASg_Md.js";import"./Modal-p6Evd_XR.js";import"./ThemeController-C0Cm4STl.js";import"./ThemeContext-Dop_0lMq.js";import"./Carousel-DcIHTeQA.js";import"./chevron-left-D9uTS5hk.js";import"./chevron-right-BuTIk0ZE.js";import"./Chat-DwlHfvOq.js";import"./copy-CDSbOGtH.js";import"./thumbs-up-CA1lH5H_.js";import"./file-text-3QR_BDt1.js";import"./code-BWcIXUuE.js";import"./clock-BOaF0ey4.js";import"./file-CJqdiTYx.js";import"./upload-DDi9KpFe.js";import"./plus-_oTOY7dX.js";import"./search-BC3UyaPv.js";import"./message-square-9wXJwYnY.js";import"./trash-2-B67onKV4.js";const So={title:"Sections/Marketing/Contact",component:p,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{layout:{control:"select",options:["split","stacked","form-only"]},background:{control:"select",options:["base","subtle","none"]}}},t=[{icon:c.jsx(u,{size:24}),label:"Email",value:"hello@orion.dev",href:"mailto:hello@orion.dev"},{icon:c.jsx(d,{size:24}),label:"Phone",value:"+1 (555) 123-4567",href:"tel:+15551234567"},{icon:c.jsx(b,{size:24}),label:"Office",value:"123 Design Street, SF, CA"}],e=[{name:"name",label:"Name",type:"text",required:!0},{name:"email",label:"Email",type:"email",required:!0},{name:"subject",label:"Subject",type:"text"},{name:"message",label:"Message",type:"textarea",required:!0}],r={args:{title:"Get in touch",description:"We would love to hear from you. Send us a message and we will respond as soon as possible.",contactInfo:t,formFields:e,onSubmit:o=>console.log("Form submitted:",o)}},a={args:{title:"Contact Us",description:"Fill out the form below.",contactInfo:t,formFields:e,layout:"split",onSubmit:o=>console.log("Form submitted:",o)}},s={args:{title:"Contact Us",description:"Fill out the form below.",contactInfo:t,formFields:e,layout:"stacked",onSubmit:o=>console.log("Form submitted:",o)}},n={args:{eyebrow:"Contact",title:"Let us talk",description:"Have a question or want to work together?",contactInfo:t,formFields:e,onSubmit:o=>console.log("Form submitted:",o)}},i={args:{title:"Send us a message",formFields:e,layout:"form-only",onSubmit:o=>console.log("Form submitted:",o)}},m={args:{title:"Contact Information",description:"Reach out through any of these channels.",contactInfo:t}},l={args:{title:"Get in touch",contactInfo:t,formFields:e,background:"subtle",onSubmit:o=>console.log("Form submitted:",o)}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Get in touch',
    description: 'We would love to hear from you. Send us a message and we will respond as soon as possible.',
    contactInfo,
    formFields,
    onSubmit: data => console.log('Form submitted:', data)
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Contact Us',
    description: 'Fill out the form below.',
    contactInfo,
    formFields,
    layout: 'split',
    onSubmit: data => console.log('Form submitted:', data)
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Contact Us',
    description: 'Fill out the form below.',
    contactInfo,
    formFields,
    layout: 'stacked',
    onSubmit: data => console.log('Form submitted:', data)
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    eyebrow: 'Contact',
    title: 'Let us talk',
    description: 'Have a question or want to work together?',
    contactInfo,
    formFields,
    onSubmit: data => console.log('Form submitted:', data)
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Send us a message',
    formFields,
    layout: 'form-only',
    onSubmit: data => console.log('Form submitted:', data)
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Contact Information',
    description: 'Reach out through any of these channels.',
    contactInfo
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Get in touch',
    contactInfo,
    formFields,
    background: 'subtle',
    onSubmit: data => console.log('Form submitted:', data)
  }
}`,...l.parameters?.docs?.source}}};const yo=["Default","SplitLayout","StackedLayout","WithEyebrow","FormOnly","InfoOnly","SubtleBackground"];export{r as Default,i as FormOnly,m as InfoOnly,a as SplitLayout,s as StackedLayout,l as SubtleBackground,n as WithEyebrow,yo as __namedExportsOrder,So as default};
