import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as P}from"./index-Bi6L2ga8.js";import{N as i}from"./Navbar-CdASg_Md.js";import{H as w}from"./Hero-9IRXc4V7.js";import{C as v}from"./CarouselSection-BeAQkamy.js";import"./Carousel-DcIHTeQA.js";import{L as B}from"./LogoCloud-CyrsISm5.js";import{F as L}from"./Features-Cm7p7Zfw.js";import{S as N}from"./Stats-ChMu63Sh.js";import{P as E}from"./Pricing-CB1ZJm_R.js";import{T as I}from"./Testimonials-DoATQhRq.js";import{F as z}from"./FAQ-6vqm8AZW.js";import{C as k}from"./CTA-BjsZPgSz.js";import{F as R}from"./Footer-Cdyrv6kV.js";import{B as t}from"./Button-C5l-MScQ.js";import{B as n}from"./Badge-CTnzlsKR.js";import{T as O}from"./twitter-XLdaVmJS.js";import{G as q}from"./github-2kT0ytcx.js";import{L as D}from"./linkedin-BzmqobWX.js";import{Z as U}from"./zap-BnVCcVUv.js";import{S as _}from"./shield-DhOd_9EY.js";import{R as G}from"./rocket-Dh7DKKOE.js";import{C as M}from"./chart-column-DwEZQFyg.js";import{U as H}from"./users-B3aIcKNm.js";import{G as W}from"./globe-CaDiCyrV.js";import"./Section-jIvUtuq6.js";import"./Container-yaIeCtkJ.js";import"./chevron-left-D9uTS5hk.js";import"./createLucideIcon-DprCCbyf.js";import"./chevron-right-BuTIk0ZE.js";import"./Icon-DRfe94op.js";import"./Field-q4DqLIqo.js";import"./circle-alert-BMPEDkj1.js";import"./Select-B6ZD6SWf.js";import"./Switch-BQ1qsiMs.js";import"./Checkbox-BdQYmUbV.js";import"./minus-D7ovpRdW.js";import"./check-DDKQb6IN.js";import"./Radio-CXxIYB9P.js";import"./Textarea-BZiGY5vV.js";import"./Card-BimbyH8z.js";import"./Alert-Cy1_w5uj.js";import"./x-Dd336Dmd.js";import"./info-DJ_xuc1q.js";import"./triangle-alert-CPxB8gZu.js";import"./circle-check-big-CA7x2PYe.js";import"./Spinner-C9iGDtuC.js";import"./ProgressBar-DKfZiO47.js";import"./Tooltip-CM6dVaRh.js";import"./Avatar-CustGMqw.js";import"./user-CUEj3VL3.js";import"./Table-B2i6IxkC.js";import"./Tabs-D5n6hrvS.js";import"./Breadcrumb-1YRPRYXK.js";import"./house-Bwi52rpT.js";import"./Modal-p6Evd_XR.js";import"./ThemeController-C0Cm4STl.js";import"./ThemeContext-Dop_0lMq.js";import"./Chat-DwlHfvOq.js";import"./copy-CDSbOGtH.js";import"./thumbs-up-CA1lH5H_.js";import"./file-text-3QR_BDt1.js";import"./code-BWcIXUuE.js";import"./clock-BOaF0ey4.js";import"./file-CJqdiTYx.js";import"./upload-DDi9KpFe.js";import"./plus-_oTOY7dX.js";import"./search-BC3UyaPv.js";import"./message-square-9wXJwYnY.js";import"./trash-2-B67onKV4.js";import"./trending-up--FzQNwgR.js";import"./trending-down-DLTGsz8J.js";import"./star-BFnvMsnD.js";import"./chevron-down-buXKF-gJ.js";const l=P.forwardRef(({navbar:c,hero:j,featuredCarousel:d,logoCloud:p,features:m,stats:u,productCarousel:g,pricing:h,testimonials:f,faq:y,cta:b,footer:x,children:A,...C},F)=>e.jsxs("div",{ref:F,...C,children:[c&&e.jsx(i,{...c}),e.jsx(w,{...j}),d&&e.jsx(v,{variant:"editorial",aspectRatio:"16/9",peek:!0,showNavigation:!0,...d}),p&&e.jsx(B,{...p}),m&&e.jsx(L,{...m}),u&&e.jsx(N,{...u}),g&&e.jsx(v,{variant:"editorial",aspectRatio:"4/3",peek:!0,gap:"md",...g}),h&&e.jsx(E,{...h}),f&&e.jsx(I,{...f}),y&&e.jsx(z,{...y}),b&&e.jsx(k,{...b}),A,x&&e.jsx(R,{...x})]}));l.displayName="LandingPageTemplate";l.__docgenInfo={description:`LandingPageTemplate - Full landing page composition

Combines multiple Orion sections into a complete, ready-to-use landing page.
All sections are optional except Hero, allowing flexible page composition.

@example
\`\`\`tsx
<LandingPageTemplate
  hero={{ title: 'Welcome', primaryAction: <Button>Start</Button> }}
  features={{ items: featureItems }}
  pricing={{ plans: pricingPlans }}
/>
\`\`\``,methods:[],displayName:"LandingPageTemplate",props:{navbar:{required:!1,tsType:{name:"intersection",raw:"NavbarProps & { children?: ReactNode }",elements:[{name:"NavbarProps"},{name:"signature",type:"object",raw:"{ children?: ReactNode }",signature:{properties:[{key:"children",value:{name:"ReactNode",required:!1}}]}}]},description:"Navbar configuration"},hero:{required:!0,tsType:{name:"HeroProps"},description:"Hero section (required)"},featuredCarousel:{required:!1,tsType:{name:"Omit",elements:[{name:"CarouselSectionProps"},{name:"literal",value:"'variant'"}],raw:"Omit<CarouselSectionProps, 'variant'>"},description:`Editorial carousel for featured stories/content
Displays as magazine-style with large images and text overlays`},logoCloud:{required:!1,tsType:{name:"LogoCloudProps"},description:"Logo cloud for social proof"},features:{required:!1,tsType:{name:"FeaturesProps"},description:"Features section"},stats:{required:!1,tsType:{name:"StatsProps"},description:"Stats/metrics section"},productCarousel:{required:!1,tsType:{name:"Omit",elements:[{name:"CarouselSectionProps"},{name:"literal",value:"'variant'"}],raw:"Omit<CarouselSectionProps, 'variant'>"},description:`Product carousel for showcasing features/products
Displays as product showcase cards`},pricing:{required:!1,tsType:{name:"PricingProps"},description:"Pricing section"},testimonials:{required:!1,tsType:{name:"TestimonialsProps"},description:"Testimonials section"},faq:{required:!1,tsType:{name:"FAQProps"},description:"FAQ section"},cta:{required:!1,tsType:{name:"CTAProps"},description:"Call-to-action section"},footer:{required:!1,tsType:{name:"FooterProps"},description:"Footer section"},children:{required:!1,tsType:{name:"ReactNode"},description:"Additional children rendered before footer"}},composes:["Omit"]};const vt={title:"Templates/Marketing/Landing Page",component:l,parameters:{layout:"fullscreen",docs:{description:{component:"A complete landing page template with hero, features, pricing, testimonials, and more."}}},tags:["autodocs"]},S=[{icon:e.jsx(U,{size:24}),title:"Lightning Fast",description:"Optimized for performance at every level. Sub-second load times guaranteed."},{icon:e.jsx(_,{size:24}),title:"Secure by Default",description:"Enterprise-grade security with SOC2 compliance and end-to-end encryption."},{icon:e.jsx(G,{size:24}),title:"Scale Infinitely",description:"From startup to enterprise, our infrastructure grows with your needs."},{icon:e.jsx(M,{size:24}),title:"Analytics Built-in",description:"Real-time insights and reporting without the complexity."},{icon:e.jsx(H,{size:24}),title:"Team Collaboration",description:"Work together seamlessly with real-time collaboration features."},{icon:e.jsx(W,{size:24}),title:"Global CDN",description:"Content delivered from edge locations worldwide for best performance."}],Y=[{value:"10K+",label:"Active Users"},{value:"99.9%",label:"Uptime"},{value:"50M+",label:"API Calls/Day"},{value:"150+",label:"Countries"}],Q=[{name:"Starter",price:"$0",period:"/month",description:"Perfect for individuals",features:[{text:"5 projects",included:!0},{text:"10GB storage",included:!0},{text:"Basic analytics",included:!0},{text:"API access",included:!1}],action:e.jsx(t,{variant:"secondary",fullWidth:!0,children:"Get Started"})},{name:"Pro",price:"$29",period:"/month",description:"For growing teams",features:[{text:"Unlimited projects",included:!0},{text:"100GB storage",included:!0},{text:"Advanced analytics",included:!0},{text:"API access",included:!0}],action:e.jsx(t,{variant:"primary",fullWidth:!0,children:"Start Free Trial"}),popular:!0},{name:"Enterprise",price:"Custom",description:"For large organizations",features:[{text:"Everything in Pro",included:!0},{text:"Unlimited storage",included:!0},{text:"Custom integrations",included:!0},{text:"Dedicated support",included:!0}],action:e.jsx(t,{variant:"secondary",fullWidth:!0,children:"Contact Sales"})}],$=[{quote:"This platform transformed how we build products. We shipped our MVP in half the time.",author:{name:"Sarah Chen",role:"CTO",company:"TechCorp",avatar:e.jsx("img",{src:"https://i.pravatar.cc/150?u=sarah",alt:""})}},{quote:"The developer experience is unmatched. Our team productivity increased by 40%.",author:{name:"Mike Johnson",role:"Lead Engineer",company:"StartupXYZ",avatar:e.jsx("img",{src:"https://i.pravatar.cc/150?u=mike",alt:""})}},{quote:"Finally, a design system that actually works. No more UI inconsistencies.",author:{name:"Emily Rodriguez",role:"Design Director",company:"CreativeHub",avatar:e.jsx("img",{src:"https://i.pravatar.cc/150?u=emily",alt:""})}}],J=[{question:"How do I get started?",answer:"Sign up for a free account and follow our quick start guide. You'll be up and running in less than 5 minutes."},{question:"Can I cancel my subscription anytime?",answer:"Yes, you can cancel your subscription at any time with no penalties."},{question:"Is there a free tier?",answer:"Yes! Our Starter plan is completely free and includes 5 projects and 10GB storage."},{question:"What kind of support do you offer?",answer:"Starter plans get community support. Pro plans include priority email support. Enterprise gets dedicated support."}],Z=[{title:"Product",links:[{label:"Features",href:"#features"},{label:"Pricing",href:"#pricing"},{label:"Changelog",href:"/changelog"}]},{title:"Company",links:[{label:"About",href:"/about"},{label:"Blog",href:"/blog"},{label:"Careers",href:"/careers"}]},{title:"Resources",links:[{label:"Documentation",href:"/docs"},{label:"API Reference",href:"/api"},{label:"Community",href:"/community"}]}],K=[{name:"Company 1",logo:e.jsx("img",{src:"https://placehold.co/120x40/1f2937/9ca3af?text=Logo+1",alt:""})},{name:"Company 2",logo:e.jsx("img",{src:"https://placehold.co/120x40/1f2937/9ca3af?text=Logo+2",alt:""})},{name:"Company 3",logo:e.jsx("img",{src:"https://placehold.co/120x40/1f2937/9ca3af?text=Logo+3",alt:""})},{name:"Company 4",logo:e.jsx("img",{src:"https://placehold.co/120x40/1f2937/9ca3af?text=Logo+4",alt:""})},{name:"Company 5",logo:e.jsx("img",{src:"https://placehold.co/120x40/1f2937/9ca3af?text=Logo+5",alt:""})}],T=[{image:e.jsx("img",{src:"https://picsum.photos/1200/675?random=1",alt:""}),eyebrow:"Design",title:"The Future of AI-First Design",description:"How machine learning is reshaping interface design",overlay:"gradient"},{image:e.jsx("img",{src:"https://picsum.photos/1200/675?random=2",alt:""}),eyebrow:"Engineering",title:"Building at Scale",description:"Lessons from shipping to millions of users",overlay:"gradient"},{image:e.jsx("img",{src:"https://picsum.photos/1200/675?random=3",alt:""}),eyebrow:"Product",title:"Zero to Product-Market Fit",description:"A step-by-step guide to finding your audience",overlay:"gradient"}],V=[{image:e.jsx("img",{src:"https://picsum.photos/800/600?random=4",alt:""}),title:"Analytics Dashboard",description:"Real-time insights at your fingertips"},{image:e.jsx("img",{src:"https://picsum.photos/800/600?random=5",alt:""}),title:"Team Collaboration",description:"Work together seamlessly"},{image:e.jsx("img",{src:"https://picsum.photos/800/600?random=6",alt:""}),title:"API Integration",description:"Connect with your favorite tools"}],X=[{image:e.jsx("img",{src:"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",alt:""}),eyebrow:"Performance",title:"Lightning Fast",description:"Optimized for performance at every level. Sub-second load times guaranteed.",overlay:"gradient"},{image:e.jsx("img",{src:"https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",alt:""}),eyebrow:"Security",title:"Secure by Default",description:"Enterprise-grade security with SOC2 compliance and end-to-end encryption.",overlay:"gradient"},{image:e.jsx("img",{src:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",alt:""}),eyebrow:"Infrastructure",title:"Scale Infinitely",description:"From startup to enterprise, our infrastructure grows with your needs.",overlay:"gradient"},{image:e.jsx("img",{src:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",alt:""}),eyebrow:"Insights",title:"Analytics Built-in",description:"Real-time insights and reporting without the complexity.",overlay:"gradient"},{image:e.jsx("img",{src:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",alt:""}),eyebrow:"Teamwork",title:"Team Collaboration",description:"Work together seamlessly with real-time collaboration features.",overlay:"gradient"},{image:e.jsx("img",{src:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop",alt:""}),eyebrow:"Global",title:"Global CDN",description:"Content delivered from edge locations worldwide for best performance.",overlay:"gradient"}],r={args:{navbar:{variant:"solid",sticky:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(i.Brand,{href:"/",children:e.jsx("span",{style:{fontWeight:"var(--font-weight-bold)",fontSize:"var(--text-xl)"},children:"Acme"})}),e.jsxs(i.Nav,{children:[e.jsx(i.Link,{href:"#features",children:"Features"}),e.jsx(i.Link,{href:"#pricing",children:"Pricing"}),e.jsx(i.Link,{href:"#testimonials",children:"Testimonials"})]}),e.jsxs(i.Actions,{children:[e.jsx(t,{variant:"ghost",children:"Sign In"}),e.jsx(t,{variant:"primary",children:"Get Started"})]})]})},hero:{badge:e.jsx(n,{variant:"brand",children:"Now in Public Beta"}),headline:e.jsxs(e.Fragment,{children:["Build Products ",e.jsx(w.Highlight,{children:"10x Faster"})]}),description:"The all-in-one platform for modern development teams. Ship features, not infrastructure.",primaryAction:e.jsx(t,{size:"lg",children:"Start Free Trial"}),secondaryAction:e.jsx(t,{variant:"ghost",size:"lg",children:"Watch Demo"}),align:"center",size:"lg"},logoCloud:{logos:K,title:"Trusted by industry leaders"},productCarousel:{id:"features",eyebrow:e.jsx(n,{children:"Features"}),title:"Everything you need to ship faster",description:"Built for modern teams who value speed, quality, and developer experience.",items:X},stats:{eyebrow:"By the Numbers",title:"Trusted by thousands",stats:Y},pricing:{id:"pricing",eyebrow:"Pricing",title:"Simple, transparent pricing",description:"No hidden fees. No surprises. Cancel anytime.",plans:Q},testimonials:{id:"testimonials",eyebrow:"Testimonials",title:"Loved by teams worldwide",testimonials:$},faq:{eyebrow:"FAQ",title:"Frequently asked questions",items:J},cta:{headline:"Ready to get started?",description:"Join thousands of teams already building with Acme.",actions:e.jsxs(e.Fragment,{children:[e.jsx(t,{size:"lg",children:"Start Free Trial"}),e.jsx(t,{variant:"ghost",size:"lg",children:"Talk to Sales"})]})},footer:{brand:{name:"Acme Inc",description:"Building the future of development."},linkGroups:Z,socialLinks:[{label:"Twitter",href:"https://twitter.com",icon:e.jsx(O,{size:20})},{label:"GitHub",href:"https://github.com",icon:e.jsx(q,{size:20})},{label:"LinkedIn",href:"https://linkedin.com",icon:e.jsx(D,{size:20})}],copyright:`${new Date().getFullYear()} Acme Inc. All rights reserved.`}}},a={args:{...r.args,featuredCarousel:{eyebrow:e.jsx(n,{children:"Featured"}),title:"Latest Stories",items:T},productCarousel:{title:"Product Features",description:"Everything you need to ship faster",items:V}}},o={args:{hero:{headline:"Build Products 10x Faster",description:"The all-in-one platform for modern development teams.",primaryAction:e.jsx(t,{size:"lg",children:"Get Started"}),align:"center",size:"lg"},features:{items:S.slice(0,3),columns:3},cta:{headline:"Ready to start?",actions:e.jsx(t,{size:"lg",children:"Sign Up Free"})},footer:{brand:{name:"Acme"},copyright:`${new Date().getFullYear()} Acme Inc.`}}},s={args:{navbar:r.args?.navbar,hero:{badge:e.jsx(n,{variant:"success",children:"Just Launched"}),headline:"Introducing Acme 2.0",description:"The next generation of our platform is here. Faster, smarter, and more powerful than ever.",primaryAction:e.jsx(t,{size:"lg",children:"Explore Now"}),secondaryAction:e.jsx(t,{variant:"ghost",size:"lg",children:"See What\\'s New"}),align:"center",size:"lg",fullHeight:!0},featuredCarousel:{title:"What's New",items:T},features:{title:"New in 2.0",items:S.slice(0,4),columns:4},cta:{headline:"Upgrade to Acme 2.0",description:"Free for existing customers. New users start free.",actions:e.jsxs(e.Fragment,{children:[e.jsx(t,{size:"lg",children:"Upgrade Now"}),e.jsx(t,{variant:"ghost",size:"lg",children:"View Changelog"})]})},footer:r.args?.footer}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    navbar: {
      variant: 'solid',
      sticky: true,
      children: <>
          <Navbar.Brand href="/">
            <span style={{
            fontWeight: 'var(--font-weight-bold)',
            fontSize: 'var(--text-xl)'
          }}>Acme</span>
          </Navbar.Brand>
          <Navbar.Nav>
            <Navbar.Link href="#features">Features</Navbar.Link>
            <Navbar.Link href="#pricing">Pricing</Navbar.Link>
            <Navbar.Link href="#testimonials">Testimonials</Navbar.Link>
          </Navbar.Nav>
          <Navbar.Actions>
            <Button variant="ghost">Sign In</Button>
            <Button variant="primary">Get Started</Button>
          </Navbar.Actions>
        </>
    },
    hero: {
      badge: <Badge variant="brand">Now in Public Beta</Badge>,
      headline: <>Build Products <Hero.Highlight>10x Faster</Hero.Highlight></>,
      description: 'The all-in-one platform for modern development teams. Ship features, not infrastructure.',
      primaryAction: <Button size="lg">Start Free Trial</Button>,
      secondaryAction: <Button variant="ghost" size="lg">Watch Demo</Button>,
      align: 'center',
      size: 'lg'
    },
    logoCloud: {
      logos: LOGO_ITEMS,
      title: 'Trusted by industry leaders'
    },
    productCarousel: {
      id: 'features',
      eyebrow: <Badge>Features</Badge>,
      title: 'Everything you need to ship faster',
      description: 'Built for modern teams who value speed, quality, and developer experience.',
      items: FEATURES_CAROUSEL_ITEMS
    },
    stats: {
      eyebrow: 'By the Numbers',
      title: 'Trusted by thousands',
      stats: STATS
    },
    pricing: {
      id: 'pricing',
      eyebrow: 'Pricing',
      title: 'Simple, transparent pricing',
      description: 'No hidden fees. No surprises. Cancel anytime.',
      plans: PRICING_PLANS
    },
    testimonials: {
      id: 'testimonials',
      eyebrow: 'Testimonials',
      title: 'Loved by teams worldwide',
      testimonials: TESTIMONIALS
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Frequently asked questions',
      items: FAQ_ITEMS
    },
    cta: {
      headline: 'Ready to get started?',
      description: 'Join thousands of teams already building with Acme.',
      actions: <>
          <Button size="lg">Start Free Trial</Button>
          <Button variant="ghost" size="lg">Talk to Sales</Button>
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
}`,...r.parameters?.docs?.source},description:{story:`Default landing page with all sections
Uses Hero with highlight text and CarouselSection for features`,...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    featuredCarousel: {
      eyebrow: <Badge>Featured</Badge>,
      title: 'Latest Stories',
      items: FEATURED_CAROUSEL_ITEMS
    },
    productCarousel: {
      title: 'Product Features',
      description: 'Everything you need to ship faster',
      items: PRODUCT_CAROUSEL_ITEMS
    }
  }
}`,...a.parameters?.docs?.source},description:{story:"Landing page with carousels for featured content",...a.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    hero: {
      headline: 'Build Products 10x Faster',
      description: 'The all-in-one platform for modern development teams.',
      primaryAction: <Button size="lg">Get Started</Button>,
      align: 'center',
      size: 'lg'
    },
    features: {
      items: FEATURES.slice(0, 3),
      columns: 3
    },
    cta: {
      headline: 'Ready to start?',
      actions: <Button size="lg">Sign Up Free</Button>
    },
    footer: {
      brand: {
        name: 'Acme'
      },
      copyright: \`\${new Date().getFullYear()} Acme Inc.\`
    }
  }
}`,...o.parameters?.docs?.source},description:{story:"Minimal landing page with only essential sections",...o.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    navbar: Default.args?.navbar,
    hero: {
      badge: <Badge variant="success">Just Launched</Badge>,
      headline: 'Introducing Acme 2.0',
      description: 'The next generation of our platform is here. Faster, smarter, and more powerful than ever.',
      primaryAction: <Button size="lg">Explore Now</Button>,
      secondaryAction: <Button variant="ghost" size="lg">See What\\'s New</Button>,
      align: 'center',
      size: 'lg',
      fullHeight: true
    },
    featuredCarousel: {
      title: "What's New",
      items: FEATURED_CAROUSEL_ITEMS
    },
    features: {
      title: 'New in 2.0',
      items: FEATURES.slice(0, 4),
      columns: 4
    },
    cta: {
      headline: 'Upgrade to Acme 2.0',
      description: 'Free for existing customers. New users start free.',
      actions: <>
          <Button size="lg">Upgrade Now</Button>
          <Button variant="ghost" size="lg">View Changelog</Button>
        </>
    },
    footer: Default.args?.footer
  }
}`,...s.parameters?.docs?.source},description:{story:"Hero-focused landing page for product launches",...s.parameters?.docs?.description}}};const wt=["Default","WithCarousels","Minimal","ProductLaunch"];export{r as Default,o as Minimal,s as ProductLaunch,a as WithCarousels,wt as __namedExportsOrder,vt as default};
