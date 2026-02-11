import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as F}from"./index-Bi6L2ga8.js";import{N as r}from"./Navbar-CdASg_Md.js";import{H as A}from"./Hero-9IRXc4V7.js";import{C as T}from"./CarouselSection-BeAQkamy.js";import"./Carousel-DcIHTeQA.js";import{C as k}from"./Contact-DINELpHo.js";import{F as j}from"./FAQ-6vqm8AZW.js";import{F as N}from"./Footer-Cdyrv6kV.js";import{B as l}from"./Button-C5l-MScQ.js";import{B as c}from"./Badge-CTnzlsKR.js";import{T as O}from"./twitter-XLdaVmJS.js";import{G as L}from"./github-2kT0ytcx.js";import{L as I}from"./linkedin-BzmqobWX.js";import{M as h}from"./mail-B1OdJ1bA.js";import{P as z}from"./phone-D_YpRfIr.js";import{M as f}from"./map-pin-0MytI99a.js";import{C as g}from"./clock-BOaF0ey4.js";import{M as P}from"./message-square-9wXJwYnY.js";import"./Section-jIvUtuq6.js";import"./Container-yaIeCtkJ.js";import"./chevron-left-D9uTS5hk.js";import"./createLucideIcon-DprCCbyf.js";import"./chevron-right-BuTIk0ZE.js";import"./Icon-DRfe94op.js";import"./Field-q4DqLIqo.js";import"./circle-alert-BMPEDkj1.js";import"./Select-B6ZD6SWf.js";import"./Switch-BQ1qsiMs.js";import"./Checkbox-BdQYmUbV.js";import"./minus-D7ovpRdW.js";import"./check-DDKQb6IN.js";import"./Radio-CXxIYB9P.js";import"./Textarea-BZiGY5vV.js";import"./Card-BimbyH8z.js";import"./Alert-Cy1_w5uj.js";import"./x-Dd336Dmd.js";import"./info-DJ_xuc1q.js";import"./triangle-alert-CPxB8gZu.js";import"./circle-check-big-CA7x2PYe.js";import"./Spinner-C9iGDtuC.js";import"./ProgressBar-DKfZiO47.js";import"./Tooltip-CM6dVaRh.js";import"./Avatar-CustGMqw.js";import"./user-CUEj3VL3.js";import"./Table-B2i6IxkC.js";import"./Tabs-D5n6hrvS.js";import"./Breadcrumb-1YRPRYXK.js";import"./house-Bwi52rpT.js";import"./Modal-p6Evd_XR.js";import"./ThemeController-C0Cm4STl.js";import"./ThemeContext-Dop_0lMq.js";import"./Chat-DwlHfvOq.js";import"./copy-CDSbOGtH.js";import"./thumbs-up-CA1lH5H_.js";import"./file-text-3QR_BDt1.js";import"./code-BWcIXUuE.js";import"./file-CJqdiTYx.js";import"./upload-DDi9KpFe.js";import"./plus-_oTOY7dX.js";import"./search-BC3UyaPv.js";import"./trash-2-B67onKV4.js";import"./chevron-down-buXKF-gJ.js";const m=F.forwardRef(({navbar:t,hero:w,locationsCarousel:p,contact:v,faq:u,footer:d,children:C,...x},q)=>e.jsxs("div",{ref:q,...x,children:[t&&e.jsx(r,{...t}),e.jsx(A,{...w}),p&&e.jsx(T,{variant:"gallery",aspectRatio:"4/3",peek:!0,gap:"md",...p}),e.jsx(k,{...v}),u&&e.jsx(j,{...u}),C,d&&e.jsx(N,{...d})]}));m.displayName="ContactPageTemplate";m.__docgenInfo={description:`ContactPageTemplate - Full contact page composition

Combines Hero, Contact form, FAQ, and optional locations gallery.

@example
\`\`\`tsx
<ContactPageTemplate
  hero={{ headline: 'Contact us' }}
  contact={{ contactInfo: info, formFields: fields }}
  faq={{ items: faqItems }}
/>
\`\`\``,methods:[],displayName:"ContactPageTemplate",props:{navbar:{required:!1,tsType:{name:"intersection",raw:"NavbarProps & { children?: ReactNode }",elements:[{name:"NavbarProps"},{name:"signature",type:"object",raw:"{ children?: ReactNode }",signature:{properties:[{key:"children",value:{name:"ReactNode",required:!1}}]}}]},description:"Navbar configuration"},hero:{required:!0,tsType:{name:"HeroProps"},description:"Hero section (required) - typically smaller for contact pages"},locationsCarousel:{required:!1,tsType:{name:"Omit",elements:[{name:"CarouselSectionProps"},{name:"literal",value:"'variant'"}],raw:"Omit<CarouselSectionProps, 'variant'>"},description:"Gallery carousel for office locations/photos"},contact:{required:!0,tsType:{name:"ContactProps"},description:"Contact section with form and info (required)"},faq:{required:!1,tsType:{name:"FAQProps"},description:"FAQ section for common questions"},footer:{required:!1,tsType:{name:"FooterProps"},description:"Footer section"},children:{required:!1,tsType:{name:"ReactNode"},description:"Additional children rendered before footer"}},composes:["Omit"]};const $e={title:"Templates/Marketing/Contact",component:m,parameters:{layout:"fullscreen",docs:{description:{component:"A complete contact page template with contact form, office locations, and FAQ."}}},tags:["autodocs"]},b=[{icon:e.jsx(h,{size:20}),label:"Email",value:"hello@acme.com",href:"mailto:hello@acme.com"},{icon:e.jsx(z,{size:20}),label:"Phone",value:"+1 (555) 123-4567",href:"tel:+15551234567"},{icon:e.jsx(f,{size:20}),label:"Address",value:"123 Market St, San Francisco, CA 94105"},{icon:e.jsx(g,{size:20}),label:"Hours",value:"Mon-Fri 9am-6pm PST"}],y=[{name:"name",label:"Full name",type:"text",placeholder:"John Doe",required:!0},{name:"email",label:"Email address",type:"email",placeholder:"john@example.com",required:!0},{name:"company",label:"Company",type:"text",placeholder:"Acme Inc"},{name:"subject",label:"Subject",type:"text",placeholder:"How can we help?",required:!0},{name:"message",label:"Message",type:"textarea",placeholder:"Tell us more about your project...",required:!0,rows:5}],S=[{question:"What is your response time?",answer:"We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call our support line."},{question:"Do you offer phone support?",answer:"Phone support is available for Pro and Enterprise customers. Starter plan customers can reach us via email or our community forum."},{question:"Where are your offices located?",answer:"Our headquarters is in San Francisco, with additional offices in London, Singapore, and Sydney."},{question:"How do I report a bug?",answer:"You can report bugs through our GitHub repository or by emailing support@acme.com with details and steps to reproduce."}],D=[{image:e.jsx("img",{src:"https://picsum.photos/800/600?random=50",alt:""}),title:"San Francisco",description:"123 Market St, CA 94105"},{image:e.jsx("img",{src:"https://picsum.photos/800/600?random=51",alt:""}),title:"London",description:"10 Downing St, London SW1A"},{image:e.jsx("img",{src:"https://picsum.photos/800/600?random=52",alt:""}),title:"Singapore",description:"1 Raffles Place, Singapore"},{image:e.jsx("img",{src:"https://picsum.photos/800/600?random=53",alt:""}),title:"Sydney",description:"1 George St, Sydney NSW"}],E=[{title:"Product",links:[{label:"Features",href:"/features"},{label:"Pricing",href:"/pricing"},{label:"Changelog",href:"/changelog"}]},{title:"Company",links:[{label:"About",href:"/about"},{label:"Blog",href:"/blog"},{label:"Careers",href:"/careers"}]},{title:"Support",links:[{label:"Documentation",href:"/docs"},{label:"Contact",href:"/contact"},{label:"Status",href:"/status"}]}],o={args:{navbar:{variant:"solid",sticky:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(r.Brand,{href:"/",children:e.jsx("span",{style:{fontWeight:700,fontSize:"var(--text-xl)"},children:"Acme"})}),e.jsxs(r.Nav,{children:[e.jsx(r.Link,{href:"/features",children:"Features"}),e.jsx(r.Link,{href:"/pricing",children:"Pricing"}),e.jsx(r.Link,{href:"/about",children:"About"}),e.jsx(r.Link,{href:"/contact",active:!0,children:"Contact"})]}),e.jsxs(r.Actions,{children:[e.jsx(l,{variant:"ghost",children:"Sign In"}),e.jsx(l,{variant:"primary",children:"Get Started"})]})]})},hero:{headline:"Get in touch",description:"Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.",align:"center",size:"sm"},contact:{title:"Contact us",description:"Fill out the form below and we'll get back to you within 24 hours.",contactInfo:b,formFields:y,onSubmit:t=>console.log("Form submitted:",t),layout:"split"},faq:{eyebrow:"FAQ",title:"Frequently asked questions",description:"Find answers to common questions below.",items:S},footer:{brand:{name:"Acme Inc",description:"Building the future of development."},linkGroups:E,socialLinks:[{label:"Twitter",href:"https://twitter.com",icon:e.jsx(O,{size:20})},{label:"GitHub",href:"https://github.com",icon:e.jsx(L,{size:20})},{label:"LinkedIn",href:"https://linkedin.com",icon:e.jsx(I,{size:20})}],copyright:`${new Date().getFullYear()} Acme Inc. All rights reserved.`}}},a={args:{...o.args,hero:{badge:e.jsxs(c,{variant:"brand",children:[e.jsx(f,{size:14,style:{marginRight:4}})," Our Offices"]}),headline:"Visit us",description:"We have offices around the world. Stop by and say hello!",align:"center",size:"sm"},locationsCarousel:{eyebrow:"Locations",title:"Our offices",description:"Find an office near you",items:D}}},i={args:{navbar:o.args?.navbar,hero:{badge:e.jsx(c,{variant:"brand",children:"Enterprise"}),headline:"Talk to sales",description:"Ready to get started? Our sales team is here to help you find the right solution.",primaryAction:e.jsx(l,{size:"lg",children:"Schedule a Demo"}),align:"center",size:"md"},contact:{title:"Request a demo",description:"Fill out the form and our team will reach out within 24 hours.",formFields:[{name:"name",label:"Full name",type:"text",required:!0},{name:"email",label:"Work email",type:"email",required:!0},{name:"company",label:"Company name",type:"text",required:!0},{name:"employees",label:"Company size",type:"text",placeholder:"e.g., 50-100"},{name:"message",label:"Tell us about your needs",type:"textarea",rows:4}],onSubmit:t=>console.log("Demo request:",t),submitText:"Request Demo",layout:"form-only"},faq:{title:"Enterprise FAQ",items:[{question:"What is included in the Enterprise plan?",answer:"Enterprise includes unlimited users, SSO/SAML, audit logs, dedicated support, custom SLA, and on-premise deployment options."},{question:"Can I get a custom contract?",answer:"Yes, we offer custom contracts for Enterprise customers with specific requirements."},{question:"Do you offer POC/pilot programs?",answer:"Yes, we offer pilot programs to help you evaluate the product before committing."}]},footer:o.args?.footer}},s={args:{navbar:o.args?.navbar,hero:{badge:e.jsxs(c,{variant:"info",children:[e.jsx(P,{size:14,style:{marginRight:4}})," Support"]}),headline:"How can we help?",description:"Our support team is here to assist you with any questions or issues.",align:"center",size:"sm"},contact:{title:"Submit a ticket",description:"Describe your issue and we'll get back to you ASAP.",contactInfo:[{icon:e.jsx(h,{size:20}),label:"Email",value:"support@acme.com",href:"mailto:support@acme.com"},{icon:e.jsx(g,{size:20}),label:"Response time",value:"Within 24 hours"}],formFields:[{name:"email",label:"Your email",type:"email",required:!0},{name:"subject",label:"Subject",type:"text",required:!0},{name:"priority",label:"Priority",type:"text",placeholder:"Low / Medium / High"},{name:"message",label:"Describe your issue",type:"textarea",required:!0,rows:6}],onSubmit:t=>console.log("Support ticket:",t),submitText:"Submit Ticket",layout:"split"},faq:{title:"Common issues",items:S},footer:o.args?.footer}},n={args:{hero:{headline:"Contact us",description:"We'd love to hear from you.",align:"center",size:"sm"},contact:{contactInfo:b.slice(0,2),formFields:y.filter(t=>["name","email","message"].includes(t.name)),onSubmit:t=>console.log("Contact:",t),layout:"stacked"},footer:{brand:{name:"Acme"},copyright:`${new Date().getFullYear()} Acme Inc.`}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    navbar: {
      variant: 'solid',
      sticky: true,
      children: <>
          <Navbar.Brand href="/">
            <span style={{
            fontWeight: 700,
            fontSize: 'var(--text-xl)'
          }}>Acme</span>
          </Navbar.Brand>
          <Navbar.Nav>
            <Navbar.Link href="/features">Features</Navbar.Link>
            <Navbar.Link href="/pricing">Pricing</Navbar.Link>
            <Navbar.Link href="/about">About</Navbar.Link>
            <Navbar.Link href="/contact" active>Contact</Navbar.Link>
          </Navbar.Nav>
          <Navbar.Actions>
            <Button variant="ghost">Sign In</Button>
            <Button variant="primary">Get Started</Button>
          </Navbar.Actions>
        </>
    },
    hero: {
      headline: 'Get in touch',
      description: "Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
      align: 'center',
      size: 'sm'
    },
    contact: {
      title: 'Contact us',
      description: 'Fill out the form below and we\\'ll get back to you within 24 hours.',
      contactInfo: CONTACT_INFO,
      formFields: CONTACT_FORM_FIELDS,
      onSubmit: data => console.log('Form submitted:', data),
      layout: 'split'
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Frequently asked questions',
      description: 'Find answers to common questions below.',
      items: CONTACT_FAQ
    },
    footer: {
      brand: {
        name: 'Acme Inc',
        description: 'Building the future of development.'
      },
      linkGroups: FOOTER_LINKS,
      socialLinks: [{
        label: 'Twitter',
        href: 'https://twitter.com',
        icon: <Twitter size={20} />
      }, {
        label: 'GitHub',
        href: 'https://github.com',
        icon: <Github size={20} />
      }, {
        label: 'LinkedIn',
        href: 'https://linkedin.com',
        icon: <Linkedin size={20} />
      }],
      copyright: \`\${new Date().getFullYear()} Acme Inc. All rights reserved.\`
    }
  }
}`,...o.parameters?.docs?.source},description:{story:"Default contact page with all sections",...o.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    hero: {
      badge: <Badge variant="brand"><MapPin size={14} style={{
          marginRight: 4
        }} /> Our Offices</Badge>,
      headline: 'Visit us',
      description: 'We have offices around the world. Stop by and say hello!',
      align: 'center',
      size: 'sm'
    },
    locationsCarousel: {
      eyebrow: 'Locations',
      title: 'Our offices',
      description: 'Find an office near you',
      items: LOCATIONS_CAROUSEL_ITEMS
    }
  }
}`,...a.parameters?.docs?.source},description:{story:"Contact page with office locations carousel",...a.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    navbar: Default.args?.navbar,
    hero: {
      badge: <Badge variant="brand">Enterprise</Badge>,
      headline: 'Talk to sales',
      description: 'Ready to get started? Our sales team is here to help you find the right solution.',
      primaryAction: <Button size="lg">Schedule a Demo</Button>,
      align: 'center',
      size: 'md'
    },
    contact: {
      title: 'Request a demo',
      description: 'Fill out the form and our team will reach out within 24 hours.',
      formFields: [{
        name: 'name',
        label: 'Full name',
        type: 'text',
        required: true
      }, {
        name: 'email',
        label: 'Work email',
        type: 'email',
        required: true
      }, {
        name: 'company',
        label: 'Company name',
        type: 'text',
        required: true
      }, {
        name: 'employees',
        label: 'Company size',
        type: 'text',
        placeholder: 'e.g., 50-100'
      }, {
        name: 'message',
        label: 'Tell us about your needs',
        type: 'textarea',
        rows: 4
      }],
      onSubmit: data => console.log('Demo request:', data),
      submitText: 'Request Demo',
      layout: 'form-only'
    },
    faq: {
      title: 'Enterprise FAQ',
      items: [{
        question: 'What is included in the Enterprise plan?',
        answer: 'Enterprise includes unlimited users, SSO/SAML, audit logs, dedicated support, custom SLA, and on-premise deployment options.'
      }, {
        question: 'Can I get a custom contract?',
        answer: 'Yes, we offer custom contracts for Enterprise customers with specific requirements.'
      }, {
        question: 'Do you offer POC/pilot programs?',
        answer: 'Yes, we offer pilot programs to help you evaluate the product before committing.'
      }]
    },
    footer: Default.args?.footer
  }
}`,...i.parameters?.docs?.source},description:{story:"Sales contact page",...i.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    navbar: Default.args?.navbar,
    hero: {
      badge: <Badge variant="info"><MessageSquare size={14} style={{
          marginRight: 4
        }} /> Support</Badge>,
      headline: 'How can we help?',
      description: 'Our support team is here to assist you with any questions or issues.',
      align: 'center',
      size: 'sm'
    },
    contact: {
      title: 'Submit a ticket',
      description: "Describe your issue and we'll get back to you ASAP.",
      contactInfo: [{
        icon: <Mail size={20} />,
        label: 'Email',
        value: 'support@acme.com',
        href: 'mailto:support@acme.com'
      }, {
        icon: <Clock size={20} />,
        label: 'Response time',
        value: 'Within 24 hours'
      }],
      formFields: [{
        name: 'email',
        label: 'Your email',
        type: 'email',
        required: true
      }, {
        name: 'subject',
        label: 'Subject',
        type: 'text',
        required: true
      }, {
        name: 'priority',
        label: 'Priority',
        type: 'text',
        placeholder: 'Low / Medium / High'
      }, {
        name: 'message',
        label: 'Describe your issue',
        type: 'textarea',
        required: true,
        rows: 6
      }],
      onSubmit: data => console.log('Support ticket:', data),
      submitText: 'Submit Ticket',
      layout: 'split'
    },
    faq: {
      title: 'Common issues',
      items: CONTACT_FAQ
    },
    footer: Default.args?.footer
  }
}`,...s.parameters?.docs?.source},description:{story:"Support contact page",...s.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    hero: {
      headline: 'Contact us',
      description: "We'd love to hear from you.",
      align: 'center',
      size: 'sm'
    },
    contact: {
      contactInfo: CONTACT_INFO.slice(0, 2),
      formFields: CONTACT_FORM_FIELDS.filter(f => ['name', 'email', 'message'].includes(f.name)),
      onSubmit: data => console.log('Contact:', data),
      layout: 'stacked'
    },
    footer: {
      brand: {
        name: 'Acme'
      },
      copyright: \`\${new Date().getFullYear()} Acme Inc.\`
    }
  }
}`,...n.parameters?.docs?.source},description:{story:"Minimal contact page",...n.parameters?.docs?.description}}};const Ke=["Default","WithLocations","SalesContact","SupportContact","Minimal"];export{o as Default,n as Minimal,i as SalesContact,s as SupportContact,a as WithLocations,Ke as __namedExportsOrder,$e as default};
