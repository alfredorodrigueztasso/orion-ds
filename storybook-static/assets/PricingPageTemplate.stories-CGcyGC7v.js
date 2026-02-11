import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as C}from"./index-Bi6L2ga8.js";import{N as i}from"./Navbar-CdASg_Md.js";import{H as x}from"./Hero-9IRXc4V7.js";import{C as I}from"./CarouselSection-BeAQkamy.js";import"./Carousel-DcIHTeQA.js";import{P as F}from"./Pricing-CB1ZJm_R.js";import{C as N}from"./Comparison-C5Fpo12h.js";import{F as j}from"./FAQ-6vqm8AZW.js";import{C as T}from"./CTA-BjsZPgSz.js";import{F as E}from"./Footer-Cdyrv6kV.js";import{B as t}from"./Button-C5l-MScQ.js";import{B as g}from"./Badge-CTnzlsKR.js";import{T as q}from"./twitter-XLdaVmJS.js";import{G as k}from"./github-2kT0ytcx.js";import{L as B}from"./linkedin-BzmqobWX.js";import"./Section-jIvUtuq6.js";import"./Container-yaIeCtkJ.js";import"./chevron-left-D9uTS5hk.js";import"./createLucideIcon-DprCCbyf.js";import"./chevron-right-BuTIk0ZE.js";import"./Icon-DRfe94op.js";import"./Field-q4DqLIqo.js";import"./circle-alert-BMPEDkj1.js";import"./Select-B6ZD6SWf.js";import"./Switch-BQ1qsiMs.js";import"./Checkbox-BdQYmUbV.js";import"./minus-D7ovpRdW.js";import"./check-DDKQb6IN.js";import"./Radio-CXxIYB9P.js";import"./Textarea-BZiGY5vV.js";import"./Card-BimbyH8z.js";import"./Alert-Cy1_w5uj.js";import"./x-Dd336Dmd.js";import"./info-DJ_xuc1q.js";import"./triangle-alert-CPxB8gZu.js";import"./circle-check-big-CA7x2PYe.js";import"./Spinner-C9iGDtuC.js";import"./ProgressBar-DKfZiO47.js";import"./Tooltip-CM6dVaRh.js";import"./Avatar-CustGMqw.js";import"./user-CUEj3VL3.js";import"./Table-B2i6IxkC.js";import"./Tabs-D5n6hrvS.js";import"./Breadcrumb-1YRPRYXK.js";import"./house-Bwi52rpT.js";import"./Modal-p6Evd_XR.js";import"./ThemeController-C0Cm4STl.js";import"./ThemeContext-Dop_0lMq.js";import"./Chat-DwlHfvOq.js";import"./copy-CDSbOGtH.js";import"./thumbs-up-CA1lH5H_.js";import"./file-text-3QR_BDt1.js";import"./code-BWcIXUuE.js";import"./clock-BOaF0ey4.js";import"./file-CJqdiTYx.js";import"./upload-DDi9KpFe.js";import"./plus-_oTOY7dX.js";import"./search-BC3UyaPv.js";import"./message-square-9wXJwYnY.js";import"./trash-2-B67onKV4.js";import"./chevron-down-buXKF-gJ.js";const l=C.forwardRef(({navbar:a,hero:v,featuresCarousel:p,pricing:S,comparison:d,faq:u,cta:m,footer:h,children:A,...P},w)=>e.jsxs("div",{ref:w,...P,children:[a&&e.jsx(i,{...a}),e.jsx(x,{...v}),p&&e.jsx(I,{variant:"product",aspectRatio:"4/3",peek:!0,gap:"md",...p}),e.jsx(F,{...S}),d&&e.jsx(N,{...d}),u&&e.jsx(j,{...u}),m&&e.jsx(T,{...m}),A,h&&e.jsx(E,{...h})]}));l.displayName="PricingPageTemplate";l.__docgenInfo={description:`PricingPageTemplate - Full pricing page composition

Combines Hero, Pricing cards, Comparison table, and FAQ into a complete pricing page.

@example
\`\`\`tsx
<PricingPageTemplate
  hero={{ headline: 'Choose your plan' }}
  pricing={{ plans: pricingPlans }}
  comparison={{ columns: cols, features: features }}
/>
\`\`\``,methods:[],displayName:"PricingPageTemplate",props:{navbar:{required:!1,tsType:{name:"intersection",raw:"NavbarProps & { children?: ReactNode }",elements:[{name:"NavbarProps"},{name:"signature",type:"object",raw:"{ children?: ReactNode }",signature:{properties:[{key:"children",value:{name:"ReactNode",required:!1}}]}}]},description:"Navbar configuration"},hero:{required:!0,tsType:{name:"HeroProps"},description:"Hero section (required) - typically smaller for pricing pages"},featuresCarousel:{required:!1,tsType:{name:"Omit",elements:[{name:"CarouselSectionProps"},{name:"literal",value:"'variant'"}],raw:"Omit<CarouselSectionProps, 'variant'>"},description:"Product carousel for showcasing key features"},pricing:{required:!0,tsType:{name:"PricingProps"},description:"Pricing cards section (required)"},comparison:{required:!1,tsType:{name:"ComparisonProps"},description:"Feature comparison table"},faq:{required:!1,tsType:{name:"FAQProps"},description:"FAQ section for pricing questions"},cta:{required:!1,tsType:{name:"CTAProps"},description:"Call-to-action section"},footer:{required:!1,tsType:{name:"FooterProps"},description:"Footer section"},children:{required:!1,tsType:{name:"ReactNode"},description:"Additional children rendered before footer"}},composes:["Omit"]};const Qe={title:"Templates/Marketing/Pricing",component:l,parameters:{layout:"fullscreen",docs:{description:{component:"A complete pricing page template with pricing cards, comparison table, and FAQ."}}},tags:["autodocs"]},c=[{name:"Starter",price:"$0",period:"/month",description:"Perfect for individuals and small projects",features:[{text:"5 projects",included:!0},{text:"10GB storage",included:!0},{text:"Basic analytics",included:!0},{text:"Community support",included:!0},{text:"API access",included:!1},{text:"Custom domain",included:!1}],action:e.jsx(t,{variant:"secondary",fullWidth:!0,children:"Get Started Free"})},{name:"Pro",price:"$29",period:"/month",description:"For growing teams and businesses",features:[{text:"Unlimited projects",included:!0},{text:"100GB storage",included:!0},{text:"Advanced analytics",included:!0},{text:"Priority support",included:!0},{text:"API access",included:!0},{text:"Custom domain",included:!0}],action:e.jsx(t,{variant:"primary",fullWidth:!0,children:"Start Free Trial"}),popular:!0},{name:"Enterprise",price:"Custom",description:"For large organizations with specific needs",features:[{text:"Everything in Pro",included:!0},{text:"Unlimited storage",included:!0},{text:"Custom integrations",included:!0},{text:"Dedicated support",included:!0},{text:"SLA guarantee",included:!0},{text:"On-premise option",included:!0}],action:e.jsx(t,{variant:"secondary",fullWidth:!0,children:"Contact Sales"})}],f=[{title:"Starter",subtitle:"Free"},{title:"Pro",subtitle:"$29/mo",highlighted:!0,badge:"Popular"},{title:"Enterprise",subtitle:"Custom"}],y=[{name:"Projects",category:"Usage",values:["5","Unlimited","Unlimited"]},{name:"Storage",category:"Usage",values:["10GB","100GB","Unlimited"]},{name:"Team members",category:"Usage",values:["1","10","Unlimited"]},{name:"Analytics",category:"Features",values:["Basic","Advanced","Advanced"]},{name:"API access",category:"Features",values:[!1,!0,!0]},{name:"Custom domain",category:"Features",values:[!1,!0,!0]},{name:"White-label",category:"Features",values:[!1,!1,!0]},{name:"SSO/SAML",category:"Security",values:[!1,!1,!0]},{name:"Audit logs",category:"Security",values:[!1,!0,!0]},{name:"Support",category:"Support",values:["Community","Priority email","Dedicated"]},{name:"SLA",category:"Support",values:[!1,!1,"99.99%"]}],b=[{question:"Can I switch plans later?",answer:"Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll be charged the prorated difference. When downgrading, the credit will be applied to future invoices."},{question:"What payment methods do you accept?",answer:"We accept all major credit cards (Visa, Mastercard, American Express) and PayPal. Enterprise customers can also pay via invoice and wire transfer."},{question:"Is there a free trial?",answer:"Yes! Pro plan includes a 14-day free trial with full access to all features. No credit card required to start."},{question:"What happens when I exceed my storage limit?",answer:"We'll notify you when you're approaching your limit. You can either upgrade your plan or purchase additional storage. We'll never delete your data without notice."},{question:"Do you offer discounts for annual billing?",answer:"Yes, annual billing saves you 20% compared to monthly billing. The discount is applied automatically when you select annual billing."},{question:"Can I get a refund?",answer:"We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, contact support for a full refund."}],O=[{image:e.jsx("img",{src:"https://picsum.photos/800/600?random=10",alt:""}),title:"Real-time Analytics",description:"Track your metrics as they happen"},{image:e.jsx("img",{src:"https://picsum.photos/800/600?random=11",alt:""}),title:"Team Collaboration",description:"Work together seamlessly"},{image:e.jsx("img",{src:"https://picsum.photos/800/600?random=12",alt:""}),title:"API Integration",description:"Connect with your favorite tools"},{image:e.jsx("img",{src:"https://picsum.photos/800/600?random=13",alt:""}),title:"Custom Dashboards",description:"Build dashboards that fit your needs"}],L=[{title:"Product",links:[{label:"Features",href:"/features"},{label:"Pricing",href:"/pricing"},{label:"Changelog",href:"/changelog"}]},{title:"Company",links:[{label:"About",href:"/about"},{label:"Blog",href:"/blog"},{label:"Careers",href:"/careers"}]},{title:"Support",links:[{label:"Documentation",href:"/docs"},{label:"Contact",href:"/contact"},{label:"Status",href:"/status"}]}],r={args:{navbar:{variant:"solid",sticky:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(i.Brand,{href:"/",children:e.jsx("span",{style:{fontWeight:700,fontSize:"var(--text-xl)"},children:"Acme"})}),e.jsxs(i.Nav,{children:[e.jsx(i.Link,{href:"/features",children:"Features"}),e.jsx(i.Link,{href:"/pricing",active:!0,children:"Pricing"}),e.jsx(i.Link,{href:"/docs",children:"Docs"})]}),e.jsxs(i.Actions,{children:[e.jsx(t,{variant:"ghost",children:"Sign In"}),e.jsx(t,{variant:"primary",children:"Get Started"})]})]})},hero:{headline:"Simple, transparent pricing",description:"Choose the plan that fits your needs. All plans include a 14-day free trial.",align:"center",size:"sm"},pricing:{plans:c},comparison:{eyebrow:"Compare Plans",title:"Feature comparison",description:"See what's included in each plan",columns:f,features:y,showCategories:!0},faq:{eyebrow:"FAQ",title:"Pricing questions",description:"Everything you need to know about our pricing",items:b},cta:{headline:"Still have questions?",description:"Our team is here to help you find the right plan.",actions:e.jsxs(e.Fragment,{children:[e.jsx(t,{size:"lg",children:"Contact Sales"}),e.jsx(t,{variant:"ghost",size:"lg",children:"Schedule Demo"})]})},footer:{brand:{name:"Acme Inc",description:"Building the future of development."},linkGroups:L,socialLinks:[{label:"Twitter",href:"https://twitter.com",icon:e.jsx(q,{size:20})},{label:"GitHub",href:"https://github.com",icon:e.jsx(k,{size:20})},{label:"LinkedIn",href:"https://linkedin.com",icon:e.jsx(B,{size:20})}],copyright:`${new Date().getFullYear()} Acme Inc. All rights reserved.`}}},n={args:{...r.args,hero:{badge:e.jsx(g,{variant:"brand",children:"New Plans Available"}),headline:"Pricing that scales with you",description:"From startups to enterprises, we have a plan that fits your needs.",align:"center",size:"md"},featuresCarousel:{title:"What you get",description:"All plans include these powerful features",items:O}}},o={args:{hero:{headline:"Choose your plan",description:"Start free, upgrade when you need.",align:"center",size:"sm"},pricing:{plans:c},faq:{title:"Common questions",items:b.slice(0,4)},footer:{brand:{name:"Acme"},copyright:`${new Date().getFullYear()} Acme Inc.`}}},s={args:{navbar:r.args?.navbar,hero:{badge:e.jsx(g,{variant:"brand",children:"Enterprise"}),headline:"Built for scale",description:"Secure, reliable, and enterprise-ready. Trusted by Fortune 500 companies.",primaryAction:e.jsx(t,{size:"lg",children:"Contact Sales"}),secondaryAction:e.jsx(t,{variant:"ghost",size:"lg",children:"View Demo"}),align:"center",size:"md"},pricing:{plans:c,centered:!0},comparison:{title:"Enterprise features",columns:f,features:y.filter(a=>a.category==="Security"||a.category==="Support")},faq:{title:"Enterprise FAQ",items:[{question:"What security certifications do you have?",answer:"We are SOC2 Type II certified, GDPR compliant, and ISO 27001 certified. We also support HIPAA compliance for healthcare customers."},{question:"Do you offer on-premise deployment?",answer:"Yes, Enterprise plans include the option for on-premise or hybrid deployment. Our team will work with you to design the right architecture."},{question:"What SLA do you offer?",answer:"Enterprise plans include a 99.99% uptime SLA with financial credits for any downtime."}]},cta:{headline:"Ready to talk?",description:"Our enterprise team is ready to help you get started.",actions:e.jsx(t,{size:"lg",children:"Schedule a Call"}),variant:"brand"},footer:r.args?.footer}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
            <Navbar.Link href="/pricing" active>Pricing</Navbar.Link>
            <Navbar.Link href="/docs">Docs</Navbar.Link>
          </Navbar.Nav>
          <Navbar.Actions>
            <Button variant="ghost">Sign In</Button>
            <Button variant="primary">Get Started</Button>
          </Navbar.Actions>
        </>
    },
    hero: {
      headline: 'Simple, transparent pricing',
      description: 'Choose the plan that fits your needs. All plans include a 14-day free trial.',
      align: 'center',
      size: 'sm'
    },
    pricing: {
      plans: PRICING_PLANS
    },
    comparison: {
      eyebrow: 'Compare Plans',
      title: 'Feature comparison',
      description: 'See what\\'s included in each plan',
      columns: COMPARISON_COLUMNS,
      features: COMPARISON_FEATURES,
      showCategories: true
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Pricing questions',
      description: 'Everything you need to know about our pricing',
      items: PRICING_FAQ
    },
    cta: {
      headline: 'Still have questions?',
      description: 'Our team is here to help you find the right plan.',
      actions: <>
          <Button size="lg">Contact Sales</Button>
          <Button variant="ghost" size="lg">Schedule Demo</Button>
        </>
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
}`,...r.parameters?.docs?.source},description:{story:"Default pricing page with all sections",...r.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    hero: {
      badge: <Badge variant="brand">New Plans Available</Badge>,
      headline: 'Pricing that scales with you',
      description: 'From startups to enterprises, we have a plan that fits your needs.',
      align: 'center',
      size: 'md'
    },
    featuresCarousel: {
      title: 'What you get',
      description: 'All plans include these powerful features',
      items: FEATURES_CAROUSEL_ITEMS
    }
  }
}`,...n.parameters?.docs?.source},description:{story:"Pricing page with features carousel",...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    hero: {
      headline: 'Choose your plan',
      description: 'Start free, upgrade when you need.',
      align: 'center',
      size: 'sm'
    },
    pricing: {
      plans: PRICING_PLANS
    },
    faq: {
      title: 'Common questions',
      items: PRICING_FAQ.slice(0, 4)
    },
    footer: {
      brand: {
        name: 'Acme'
      },
      copyright: \`\${new Date().getFullYear()} Acme Inc.\`
    }
  }
}`,...o.parameters?.docs?.source},description:{story:"Minimal pricing page",...o.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    navbar: Default.args?.navbar,
    hero: {
      badge: <Badge variant="brand">Enterprise</Badge>,
      headline: 'Built for scale',
      description: 'Secure, reliable, and enterprise-ready. Trusted by Fortune 500 companies.',
      primaryAction: <Button size="lg">Contact Sales</Button>,
      secondaryAction: <Button variant="ghost" size="lg">View Demo</Button>,
      align: 'center',
      size: 'md'
    },
    pricing: {
      plans: PRICING_PLANS,
      centered: true
    },
    comparison: {
      title: 'Enterprise features',
      columns: COMPARISON_COLUMNS,
      features: COMPARISON_FEATURES.filter(f => f.category === 'Security' || f.category === 'Support')
    },
    faq: {
      title: 'Enterprise FAQ',
      items: [{
        question: 'What security certifications do you have?',
        answer: 'We are SOC2 Type II certified, GDPR compliant, and ISO 27001 certified. We also support HIPAA compliance for healthcare customers.'
      }, {
        question: 'Do you offer on-premise deployment?',
        answer: 'Yes, Enterprise plans include the option for on-premise or hybrid deployment. Our team will work with you to design the right architecture.'
      }, {
        question: 'What SLA do you offer?',
        answer: 'Enterprise plans include a 99.99% uptime SLA with financial credits for any downtime.'
      }]
    },
    cta: {
      headline: 'Ready to talk?',
      description: 'Our enterprise team is ready to help you get started.',
      actions: <Button size="lg">Schedule a Call</Button>,
      variant: 'brand'
    },
    footer: Default.args?.footer
  }
}`,...s.parameters?.docs?.source},description:{story:"Enterprise-focused pricing page",...s.parameters?.docs?.description}}};const Ye=["Default","WithFeaturesCarousel","Minimal","Enterprise"];export{r as Default,s as Enterprise,o as Minimal,n as WithFeaturesCarousel,Ye as __namedExportsOrder,Qe as default};
