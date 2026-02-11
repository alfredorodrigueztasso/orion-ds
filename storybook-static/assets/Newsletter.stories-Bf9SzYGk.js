import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as o}from"./index-Bi6L2ga8.js";import{S as O}from"./Section-jIvUtuq6.js";import{C as Y}from"./Container-yaIeCtkJ.js";import"./Icon-DRfe94op.js";import{B as k}from"./Button-C5l-MScQ.js";import{F as $}from"./Field-q4DqLIqo.js";import"./Select-B6ZD6SWf.js";import"./Switch-BQ1qsiMs.js";import"./Checkbox-BdQYmUbV.js";import"./Radio-CXxIYB9P.js";import"./Textarea-BZiGY5vV.js";import{C as E}from"./Card-BimbyH8z.js";import"./Badge-CTnzlsKR.js";import"./Alert-Cy1_w5uj.js";import"./Spinner-C9iGDtuC.js";import"./ProgressBar-DKfZiO47.js";import"./Tooltip-CM6dVaRh.js";import"./Avatar-CustGMqw.js";import"./Table-B2i6IxkC.js";import"./Tabs-D5n6hrvS.js";import"./Breadcrumb-1YRPRYXK.js";import"./Navbar-CdASg_Md.js";import"./Modal-p6Evd_XR.js";import"./ThemeController-C0Cm4STl.js";import"./Carousel-DcIHTeQA.js";import"./Chat-DwlHfvOq.js";import{C as A}from"./circle-check-big-CA7x2PYe.js";import{C as H}from"./circle-alert-BMPEDkj1.js";import"./minus-D7ovpRdW.js";import"./createLucideIcon-DprCCbyf.js";import"./check-DDKQb6IN.js";import"./x-Dd336Dmd.js";import"./info-DJ_xuc1q.js";import"./triangle-alert-CPxB8gZu.js";import"./user-CUEj3VL3.js";import"./house-Bwi52rpT.js";import"./ThemeContext-Dop_0lMq.js";import"./chevron-left-D9uTS5hk.js";import"./chevron-right-BuTIk0ZE.js";import"./copy-CDSbOGtH.js";import"./thumbs-up-CA1lH5H_.js";import"./file-text-3QR_BDt1.js";import"./code-BWcIXUuE.js";import"./clock-BOaF0ey4.js";import"./file-CJqdiTYx.js";import"./upload-DDi9KpFe.js";import"./plus-_oTOY7dX.js";import"./search-BC3UyaPv.js";import"./message-square-9wXJwYnY.js";import"./trash-2-B67onKV4.js";const P="_newsletter_ubh9w_8",K="_centered_ubh9w_16",Q="_header_ubh9w_19",X="_description_ubh9w_23",Z="_form_ubh9w_28",ee="_inputGroup_ubh9w_32",te="_disclaimer_ubh9w_36",re="_eyebrow_ubh9w_49",se="_title_ubh9w_53",oe="_emailInput_ubh9w_113",ae="_submitButton_ubh9w_118",ie="_card_ubh9w_141",ne="_cardBody_ubh9w_145",le="_successState_ubh9w_166",ce="_errorState_ubh9w_167",ue="_successIcon_ubh9w_182",de="_errorIcon_ubh9w_192",r={newsletter:P,centered:K,header:Q,description:X,form:Z,inputGroup:ee,disclaimer:te,eyebrow:re,title:se,"size-sm":"_size-sm_ubh9w_75","size-lg":"_size-lg_ubh9w_85",emailInput:oe,submitButton:ae,"layout-stacked":"_layout-stacked_ubh9w_127",card:ie,cardBody:ne,successState:le,errorState:ce,successIcon:ue,errorIcon:de},f=o.forwardRef(({eyebrow:t,title:p,description:b,placeholder:j="Enter your email",buttonText:B="Subscribe",submitButton:C,onSubmit:g,disclaimer:y,layout:S="inline",size:_="md",background:I="subtle",centered:q=!0,successMessage:w,errorMessage:x,loading:v=!1,className:z,...W},G)=>{const M=t||p||b,[s,R]=o.useState(""),[J,L]=o.useState(!1),[D,N]=o.useState(!1),V=o.useCallback(h=>{h.preventDefault(),g&&s&&(g(s),L(!0),N(!1))},[s,g]),F=[r.newsletter,r[`layout-${S}`],r[`size-${_}`],q&&r.centered,z].filter(Boolean).join(" "),U=()=>J&&w?e.jsxs("div",{className:r.successState,children:[e.jsx(A,{size:24,className:r.successIcon}),e.jsx("span",{children:w})]}):D&&x?e.jsxs("div",{className:r.errorState,children:[e.jsx(H,{size:24,className:r.errorIcon}),e.jsx("span",{children:x}),e.jsx(k,{variant:"ghost",size:"sm",onClick:()=>N(!1),children:"Try again"})]}):e.jsxs("form",{className:r.form,onSubmit:V,children:[e.jsxs("div",{className:r.inputGroup,children:[e.jsx($,{type:"email",placeholder:j,value:s,onChange:h=>R(h.target.value),required:!0,className:r.emailInput,"aria-label":"Email address"}),C||e.jsx(k,{type:"submit",disabled:v||!s,className:r.submitButton,children:v?"Sending...":B})]}),y&&e.jsx("p",{className:r.disclaimer,children:y})]}),T=e.jsxs(e.Fragment,{children:[M&&e.jsxs("header",{className:r.header,children:[t&&e.jsx("div",{className:r.eyebrow,children:t}),p&&e.jsx("h2",{className:r.title,children:p}),b&&e.jsx("p",{className:r.description,children:b})]}),U()]});return e.jsx(O,{ref:G,spacing:_==="lg"?"lg":"md",background:I,className:F,...W,children:e.jsx(Y,{size:"md",children:S==="card"?e.jsx(E,{variant:"elevated",className:r.card,children:e.jsx(E.Body,{className:r.cardBody,children:T})}):T})})});f.displayName="Newsletter";f.__docgenInfo={description:"",methods:[],displayName:"Newsletter",props:{eyebrow:{required:!1,tsType:{name:"ReactNode"},description:"Optional eyebrow/badge above title"},title:{required:!1,tsType:{name:"ReactNode"},description:"Section title"},description:{required:!1,tsType:{name:"ReactNode"},description:"Section description"},placeholder:{required:!1,tsType:{name:"string"},description:`Email input placeholder
@default "Enter your email"`,defaultValue:{value:"'Enter your email'",computed:!1}},buttonText:{required:!1,tsType:{name:"string"},description:`Submit button text
@default "Subscribe"`,defaultValue:{value:"'Subscribe'",computed:!1}},submitButton:{required:!1,tsType:{name:"ReactNode"},description:"Custom submit button element"},onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(email: string) => void",signature:{arguments:[{type:{name:"string"},name:"email"}],return:{name:"void"}}},description:"Form submit handler - receives email address"},disclaimer:{required:!1,tsType:{name:"ReactNode"},description:"Privacy/disclaimer text below form"},layout:{required:!1,tsType:{name:"union",raw:"'inline' | 'stacked' | 'card'",elements:[{name:"literal",value:"'inline'"},{name:"literal",value:"'stacked'"},{name:"literal",value:"'card'"}]},description:`Layout variant
- inline: Input and button on same line
- stacked: Input above button
- card: Contained in a card with padding
@default 'inline'`,defaultValue:{value:"'inline'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`Size variant affecting spacing and typography
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},background:{required:!1,tsType:{name:"union",raw:"'base' | 'subtle' | 'brand' | 'none'",elements:[{name:"literal",value:"'base'"},{name:"literal",value:"'subtle'"},{name:"literal",value:"'brand'"},{name:"literal",value:"'none'"}]},description:`Background style
@default 'subtle'`,defaultValue:{value:"'subtle'",computed:!1}},centered:{required:!1,tsType:{name:"boolean"},description:`Center align content
@default true`,defaultValue:{value:"true",computed:!1}},successMessage:{required:!1,tsType:{name:"ReactNode"},description:"Success message to show after submission"},errorMessage:{required:!1,tsType:{name:"ReactNode"},description:"Error message to show on submission error"},loading:{required:!1,tsType:{name:"boolean"},description:`Loading state
@default false`,defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const ct={title:"Sections/Marketing/Newsletter",component:f,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{layout:{control:"select",options:["inline","stacked","card"]},size:{control:"select",options:["sm","md","lg"]},background:{control:"select",options:["base","subtle","none"]}}},a={args:{title:"Subscribe to our newsletter",description:"Get the latest updates, articles, and resources delivered to your inbox.",placeholder:"Enter your email",buttonText:"Subscribe",onSubmit:t=>console.log("Subscribed:",t)}},i={args:{title:"Stay updated",description:"Join our mailing list.",layout:"inline",placeholder:"your@email.com",buttonText:"Join",onSubmit:t=>console.log("Subscribed:",t)}},n={args:{title:"Newsletter",description:"Weekly insights delivered to your inbox.",layout:"card",placeholder:"Email address",buttonText:"Subscribe",onSubmit:t=>console.log("Subscribed:",t)}},l={args:{eyebrow:"Newsletter",title:"Do not miss an update",description:"Subscribe to get notified about new features and releases.",placeholder:"Enter your email",buttonText:"Subscribe",onSubmit:t=>console.log("Subscribed:",t)}},c={args:{title:"Join the community",description:"Be the first to know about new features.",size:"lg",placeholder:"Your email",buttonText:"Sign Up",onSubmit:t=>console.log("Subscribed:",t)}},u={args:{title:"Get notified",description:"We will only send you relevant updates.",background:"subtle",placeholder:"Email",buttonText:"Notify Me",onSubmit:t=>console.log("Subscribed:",t)}},d={args:{title:"Subscribe",description:"Monthly digest of the best resources.",placeholder:"Enter your email",buttonText:"Subscribe",disclaimer:"We respect your privacy. Unsubscribe at any time.",onSubmit:t=>console.log("Subscribed:",t)}},m={args:{title:"Join our newsletter",description:"Get updates on new features.",placeholder:"Enter your email",buttonText:"Subscribe",successMessage:"Thanks for subscribing! Check your email to confirm.",onSubmit:t=>console.log("Subscribed:",t)}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Subscribe to our newsletter',
    description: 'Get the latest updates, articles, and resources delivered to your inbox.',
    placeholder: 'Enter your email',
    buttonText: 'Subscribe',
    onSubmit: email => console.log('Subscribed:', email)
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Stay updated',
    description: 'Join our mailing list.',
    layout: 'inline',
    placeholder: 'your@email.com',
    buttonText: 'Join',
    onSubmit: email => console.log('Subscribed:', email)
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Newsletter',
    description: 'Weekly insights delivered to your inbox.',
    layout: 'card',
    placeholder: 'Email address',
    buttonText: 'Subscribe',
    onSubmit: email => console.log('Subscribed:', email)
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    eyebrow: 'Newsletter',
    title: 'Do not miss an update',
    description: 'Subscribe to get notified about new features and releases.',
    placeholder: 'Enter your email',
    buttonText: 'Subscribe',
    onSubmit: email => console.log('Subscribed:', email)
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Join the community',
    description: 'Be the first to know about new features.',
    size: 'lg',
    placeholder: 'Your email',
    buttonText: 'Sign Up',
    onSubmit: email => console.log('Subscribed:', email)
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Get notified',
    description: 'We will only send you relevant updates.',
    background: 'subtle',
    placeholder: 'Email',
    buttonText: 'Notify Me',
    onSubmit: email => console.log('Subscribed:', email)
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Subscribe',
    description: 'Monthly digest of the best resources.',
    placeholder: 'Enter your email',
    buttonText: 'Subscribe',
    disclaimer: 'We respect your privacy. Unsubscribe at any time.',
    onSubmit: email => console.log('Subscribed:', email)
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Join our newsletter',
    description: 'Get updates on new features.',
    placeholder: 'Enter your email',
    buttonText: 'Subscribe',
    successMessage: 'Thanks for subscribing! Check your email to confirm.',
    onSubmit: email => console.log('Subscribed:', email)
  }
}`,...m.parameters?.docs?.source}}};const ut=["Default","InlineLayout","CardLayout","WithEyebrow","LargeSize","SubtleBackground","WithDisclaimer","WithSuccessMessage"];export{n as CardLayout,a as Default,i as InlineLayout,c as LargeSize,u as SubtleBackground,d as WithDisclaimer,l as WithEyebrow,m as WithSuccessMessage,ut as __namedExportsOrder,ct as default};
