import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as M}from"./index-Bi6L2ga8.js";import{N as r}from"./Navbar-CdASg_Md.js";import{H as C}from"./Hero-9IRXc4V7.js";import{C as f}from"./CarouselSection-BeAQkamy.js";import"./Carousel-DcIHTeQA.js";import{S as L}from"./Stats-ChMu63Sh.js";import{T as B}from"./Timeline-BCkrRsts.js";import{T as E}from"./Team-NpiuherT.js";import{C as N}from"./CTA-BjsZPgSz.js";import{F as z}from"./Footer-Cdyrv6kV.js";import{B as i}from"./Button-C5l-MScQ.js";import{B as v}from"./Badge-CTnzlsKR.js";import{T as P}from"./twitter-XLdaVmJS.js";import{G as R}from"./github-2kT0ytcx.js";import{L as F}from"./linkedin-BzmqobWX.js";import{R as y}from"./rocket-Dh7DKKOE.js";import{A as I,B as W}from"./building-2-Bf24h8Ct.js";import{G as w}from"./globe-CaDiCyrV.js";import{U as _}from"./users-B3aIcKNm.js";import{H as G}from"./heart-TBYWzl90.js";import"./Section-jIvUtuq6.js";import"./Container-yaIeCtkJ.js";import"./chevron-left-D9uTS5hk.js";import"./createLucideIcon-DprCCbyf.js";import"./chevron-right-BuTIk0ZE.js";import"./Icon-DRfe94op.js";import"./Field-q4DqLIqo.js";import"./circle-alert-BMPEDkj1.js";import"./Select-B6ZD6SWf.js";import"./Switch-BQ1qsiMs.js";import"./Checkbox-BdQYmUbV.js";import"./minus-D7ovpRdW.js";import"./check-DDKQb6IN.js";import"./Radio-CXxIYB9P.js";import"./Textarea-BZiGY5vV.js";import"./Card-BimbyH8z.js";import"./Alert-Cy1_w5uj.js";import"./x-Dd336Dmd.js";import"./info-DJ_xuc1q.js";import"./triangle-alert-CPxB8gZu.js";import"./circle-check-big-CA7x2PYe.js";import"./Spinner-C9iGDtuC.js";import"./ProgressBar-DKfZiO47.js";import"./Tooltip-CM6dVaRh.js";import"./Avatar-CustGMqw.js";import"./user-CUEj3VL3.js";import"./Table-B2i6IxkC.js";import"./Tabs-D5n6hrvS.js";import"./Breadcrumb-1YRPRYXK.js";import"./house-Bwi52rpT.js";import"./Modal-p6Evd_XR.js";import"./ThemeController-C0Cm4STl.js";import"./ThemeContext-Dop_0lMq.js";import"./Chat-DwlHfvOq.js";import"./copy-CDSbOGtH.js";import"./thumbs-up-CA1lH5H_.js";import"./file-text-3QR_BDt1.js";import"./code-BWcIXUuE.js";import"./clock-BOaF0ey4.js";import"./file-CJqdiTYx.js";import"./upload-DDi9KpFe.js";import"./plus-_oTOY7dX.js";import"./search-BC3UyaPv.js";import"./message-square-9wXJwYnY.js";import"./trash-2-B67onKV4.js";import"./trending-up--FzQNwgR.js";import"./trending-down-DLTGsz8J.js";const l=M.forwardRef(({navbar:m,hero:j,storyCarousel:c,stats:d,timeline:p,galleryCarousel:u,team:h,cta:g,footer:b,children:S,...k},O)=>e.jsxs("div",{ref:O,...k,children:[m&&e.jsx(r,{...m}),e.jsx(C,{...j}),c&&e.jsx(f,{variant:"editorial",aspectRatio:"16/9",peek:!0,showNavigation:!0,...c}),d&&e.jsx(L,{...d}),p&&e.jsx(B,{...p}),u&&e.jsx(f,{variant:"gallery",aspectRatio:"4/3",peek:!0,gap:"md",...u}),h&&e.jsx(E,{...h}),g&&e.jsx(N,{...g}),S,b&&e.jsx(z,{...b})]}));l.displayName="AboutPageTemplate";l.__docgenInfo={description:`AboutPageTemplate - Full about page composition

Combines Hero, Stats, Timeline, Team, and Gallery into a complete about page.

@example
\`\`\`tsx
<AboutPageTemplate
  hero={{ headline: 'Our Mission' }}
  stats={{ stats: companyStats }}
  timeline={{ events: companyHistory }}
  team={{ members: teamMembers }}
/>
\`\`\``,methods:[],displayName:"AboutPageTemplate",props:{navbar:{required:!1,tsType:{name:"intersection",raw:"NavbarProps & { children?: ReactNode }",elements:[{name:"NavbarProps"},{name:"signature",type:"object",raw:"{ children?: ReactNode }",signature:{properties:[{key:"children",value:{name:"ReactNode",required:!1}}]}}]},description:"Navbar configuration"},hero:{required:!0,tsType:{name:"HeroProps"},description:"Hero section (required)"},storyCarousel:{required:!1,tsType:{name:"Omit",elements:[{name:"CarouselSectionProps"},{name:"literal",value:"'variant'"}],raw:"Omit<CarouselSectionProps, 'variant'>"},description:"Editorial carousel for company story/milestones"},stats:{required:!1,tsType:{name:"StatsProps"},description:"Company stats/metrics"},timeline:{required:!1,tsType:{name:"TimelineProps"},description:"Company timeline/history"},galleryCarousel:{required:!1,tsType:{name:"Omit",elements:[{name:"CarouselSectionProps"},{name:"literal",value:"'variant'"}],raw:"Omit<CarouselSectionProps, 'variant'>"},description:"Gallery carousel for office/culture photos"},team:{required:!1,tsType:{name:"TeamProps"},description:"Team members section"},cta:{required:!1,tsType:{name:"CTAProps"},description:"Call-to-action section (e.g., careers, contact)"},footer:{required:!1,tsType:{name:"FooterProps"},description:"Footer section"},children:{required:!1,tsType:{name:"ReactNode"},description:"Additional children rendered before footer"}},composes:["Omit"]};const ot={title:"Templates/Marketing/About",component:l,parameters:{layout:"fullscreen",docs:{description:{component:"A complete about/company page template with hero, stats, timeline, team, and gallery sections."}}},tags:["autodocs"]},x=[{value:"2019",label:"Founded",icon:e.jsx(W,{size:24})},{value:"150+",label:"Team Members",icon:e.jsx(_,{size:24})},{value:"50M+",label:"Users Worldwide",icon:e.jsx(w,{size:24})},{value:"$50M",label:"Funding Raised",icon:e.jsx(y,{size:24})}],T=[{id:"1",date:"2019",title:"Founded",description:"Started in a small apartment with a big dream to revolutionize development.",status:"completed",icon:e.jsx(y,{size:20})},{id:"2",date:"2020",title:"Seed Round",description:"Raised $5M seed round led by top Silicon Valley investors.",status:"completed"},{id:"3",date:"2021",title:"Product Launch",description:"Launched our first product to overwhelming positive response.",status:"completed"},{id:"4",date:"2022",title:"Series A",description:"Raised $20M Series A to expand the team and product.",status:"completed"},{id:"5",date:"2023",title:"1M Users",description:"Reached 1 million active users milestone.",status:"completed",icon:e.jsx(I,{size:20})},{id:"6",date:"2024",title:"Global Expansion",description:"Opened offices in London, Singapore, and Sydney.",status:"current",icon:e.jsx(w,{size:20})}],A=[{name:"Alex Chen",role:"CEO & Co-founder",bio:"Previously led engineering at Google. Stanford CS graduate.",avatar:e.jsx("img",{src:"https://i.pravatar.cc/300?u=alex",alt:""}),socialLinks:[{platform:"Twitter",href:"https://twitter.com"},{platform:"LinkedIn",href:"https://linkedin.com"}]},{name:"Sarah Johnson",role:"CTO & Co-founder",bio:"Ex-Meta engineer. Built systems serving billions of users.",avatar:e.jsx("img",{src:"https://i.pravatar.cc/300?u=sarah",alt:""}),socialLinks:[{platform:"GitHub",href:"https://github.com"},{platform:"Twitter",href:"https://twitter.com"}]},{name:"Mike Rodriguez",role:"VP of Design",bio:"Former design lead at Airbnb. Passionate about user experience.",avatar:e.jsx("img",{src:"https://i.pravatar.cc/300?u=mike",alt:""}),socialLinks:[{platform:"Twitter",href:"https://twitter.com"}]},{name:"Emily Davis",role:"VP of Engineering",bio:"Built infrastructure at Netflix. Distributed systems expert.",avatar:e.jsx("img",{src:"https://i.pravatar.cc/300?u=emily",alt:""}),socialLinks:[{platform:"GitHub",href:"https://github.com"},{platform:"LinkedIn",href:"https://linkedin.com"}]},{name:"David Kim",role:"VP of Product",bio:"Previously PM at Stripe. Loves building products people love.",avatar:e.jsx("img",{src:"https://i.pravatar.cc/300?u=david",alt:""}),socialLinks:[{platform:"Twitter",href:"https://twitter.com"}]},{name:"Lisa Wang",role:"VP of Marketing",bio:"Former CMO at HubSpot. Expert in B2B SaaS marketing.",avatar:e.jsx("img",{src:"https://i.pravatar.cc/300?u=lisa",alt:""}),socialLinks:[{platform:"LinkedIn",href:"https://linkedin.com"}]}],D=[{image:e.jsx("img",{src:"https://picsum.photos/1200/675?random=20",alt:""}),eyebrow:"Our Beginning",title:"Started in a Garage",description:"Like many great tech companies, we started small but dreamed big.",overlay:"gradient"},{image:e.jsx("img",{src:"https://picsum.photos/1200/675?random=21",alt:""}),eyebrow:"Growth",title:"Building the Team",description:"We attracted top talent from around the world.",overlay:"gradient"},{image:e.jsx("img",{src:"https://picsum.photos/1200/675?random=22",alt:""}),eyebrow:"Today",title:"A Global Company",description:"Now serving millions of users across 150+ countries.",overlay:"gradient"}],V=[{image:e.jsx("img",{src:"https://picsum.photos/800/600?random=30",alt:""}),title:"San Francisco HQ",description:"Our headquarters in the heart of SOMA"},{image:e.jsx("img",{src:"https://picsum.photos/800/600?random=31",alt:""}),title:"London Office",description:"Our European headquarters"},{image:e.jsx("img",{src:"https://picsum.photos/800/600?random=32",alt:""}),title:"Singapore Office",description:"Our Asia-Pacific hub"},{image:e.jsx("img",{src:"https://picsum.photos/800/600?random=33",alt:""}),title:"Team Retreat",description:"Annual all-hands in Hawaii"}],H=[{title:"Product",links:[{label:"Features",href:"/features"},{label:"Pricing",href:"/pricing"},{label:"Changelog",href:"/changelog"}]},{title:"Company",links:[{label:"About",href:"/about"},{label:"Blog",href:"/blog"},{label:"Careers",href:"/careers"}]},{title:"Resources",links:[{label:"Documentation",href:"/docs"},{label:"API Reference",href:"/api"},{label:"Community",href:"/community"}]}],t={args:{navbar:{variant:"solid",sticky:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(r.Brand,{href:"/",children:e.jsx("span",{style:{fontWeight:700,fontSize:"var(--text-xl)"},children:"Acme"})}),e.jsxs(r.Nav,{children:[e.jsx(r.Link,{href:"/features",children:"Features"}),e.jsx(r.Link,{href:"/pricing",children:"Pricing"}),e.jsx(r.Link,{href:"/about",active:!0,children:"About"}),e.jsx(r.Link,{href:"/careers",children:"Careers"})]}),e.jsxs(r.Actions,{children:[e.jsx(i,{variant:"ghost",children:"Sign In"}),e.jsx(i,{variant:"primary",children:"Get Started"})]})]})},hero:{badge:e.jsx(v,{variant:"brand",children:"Our Story"}),headline:"Building the future of development",description:"We're on a mission to make software development accessible to everyone. Founded in 2019, we've grown from a small team to a global company serving millions.",align:"center",size:"md"},stats:{stats:[{value:"2019",label:"Founded"},{value:"150+",label:"Team Members"},{value:"50M+",label:"Users Worldwide"},{value:"$50M",label:"Funding Raised"}],highlightValue:!0},timeline:{eyebrow:"Our Journey",title:"From garage to global",events:T,alternating:!0},team:{eyebrow:"Our Team",title:"Meet the people behind Acme",description:"A diverse team of builders, dreamers, and problem solvers.",members:A,columns:3},cta:{headline:"Join our team",description:"We're always looking for talented people to join us on our mission.",actions:e.jsxs(e.Fragment,{children:[e.jsx(i,{size:"lg",children:"View Open Positions"}),e.jsx(i,{variant:"ghost",size:"lg",children:"Our Culture"})]})},footer:{brand:{name:"Acme Inc",description:"Building the future of development."},linkGroups:H,socialLinks:[{label:"Twitter",href:"https://twitter.com",icon:e.jsx(P,{size:20})},{label:"GitHub",href:"https://github.com",icon:e.jsx(R,{size:20})},{label:"LinkedIn",href:"https://linkedin.com",icon:e.jsx(F,{size:20})}],copyright:`${new Date().getFullYear()} Acme Inc. All rights reserved.`}}},a={args:{...t.args,storyCarousel:{title:"Our Story",items:D},galleryCarousel:{eyebrow:"Our Offices",title:"Where we work",description:"Take a peek inside our offices around the world",items:V}}},o={args:{navbar:t.args?.navbar,hero:{headline:"Meet our team",description:"The talented people building Acme and shaping the future of development.",align:"center",size:"sm"},team:{members:A,columns:3,variant:"cards"},cta:{headline:"Want to join us?",description:"We're hiring across all teams.",actions:e.jsx(i,{size:"lg",children:"View Careers"})},footer:t.args?.footer}},s={args:{hero:{headline:"About Acme",description:"We're building tools that empower developers to ship faster.",align:"center",size:"md"},stats:{stats:x},cta:{headline:"Learn more",actions:e.jsx(i,{size:"lg",children:"Read our blog"})},footer:{brand:{name:"Acme"},copyright:`${new Date().getFullYear()} Acme Inc.`}}},n={args:{navbar:t.args?.navbar,hero:{badge:e.jsxs(v,{variant:"brand",children:[e.jsx(G,{size:14,style:{marginRight:4}})," Our Mission"]}),headline:"Democratizing software development",description:"We believe everyone should have the tools to bring their ideas to life. Our mission is to remove the barriers that stand between imagination and implementation.",align:"center",size:"lg"},storyCarousel:{title:"Our Values",items:[{image:e.jsx("img",{src:"https://picsum.photos/1200/675?random=40",alt:""}),eyebrow:"Value #1",title:"User First",description:"Every decision starts with the user in mind.",overlay:"gradient"},{image:e.jsx("img",{src:"https://picsum.photos/1200/675?random=41",alt:""}),eyebrow:"Value #2",title:"Ship Fast",description:"Move quickly and iterate based on feedback.",overlay:"gradient"},{image:e.jsx("img",{src:"https://picsum.photos/1200/675?random=42",alt:""}),eyebrow:"Value #3",title:"Be Transparent",description:"Open communication builds trust.",overlay:"gradient"}]},stats:{eyebrow:"Impact",title:"By the numbers",stats:x,variant:"cards"},timeline:{title:"Our journey",events:T},cta:{headline:"Join our mission",description:"Help us build tools that empower millions of developers.",actions:e.jsxs(e.Fragment,{children:[e.jsx(i,{size:"lg",children:"Explore Careers"}),e.jsx(i,{variant:"ghost",size:"lg",children:"Read Our Blog"})]}),variant:"brand"},footer:t.args?.footer}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
            <Navbar.Link href="/about" active>About</Navbar.Link>
            <Navbar.Link href="/careers">Careers</Navbar.Link>
          </Navbar.Nav>
          <Navbar.Actions>
            <Button variant="ghost">Sign In</Button>
            <Button variant="primary">Get Started</Button>
          </Navbar.Actions>
        </>
    },
    hero: {
      badge: <Badge variant="brand">Our Story</Badge>,
      headline: 'Building the future of development',
      description: "We're on a mission to make software development accessible to everyone. Founded in 2019, we've grown from a small team to a global company serving millions.",
      align: 'center',
      size: 'md'
    },
    stats: {
      stats: [{
        value: '2019',
        label: 'Founded'
      }, {
        value: '150+',
        label: 'Team Members'
      }, {
        value: '50M+',
        label: 'Users Worldwide'
      }, {
        value: '$50M',
        label: 'Funding Raised'
      }],
      highlightValue: true
    },
    timeline: {
      eyebrow: 'Our Journey',
      title: 'From garage to global',
      events: COMPANY_TIMELINE,
      alternating: true
    },
    team: {
      eyebrow: 'Our Team',
      title: 'Meet the people behind Acme',
      description: 'A diverse team of builders, dreamers, and problem solvers.',
      members: TEAM_MEMBERS,
      columns: 3
    },
    cta: {
      headline: 'Join our team',
      description: "We're always looking for talented people to join us on our mission.",
      actions: <>
          <Button size="lg">View Open Positions</Button>
          <Button variant="ghost" size="lg">Our Culture</Button>
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
}`,...t.parameters?.docs?.source},description:{story:"Default about page with all sections",...t.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    storyCarousel: {
      title: 'Our Story',
      items: STORY_CAROUSEL_ITEMS
    },
    galleryCarousel: {
      eyebrow: 'Our Offices',
      title: 'Where we work',
      description: 'Take a peek inside our offices around the world',
      items: GALLERY_CAROUSEL_ITEMS
    }
  }
}`,...a.parameters?.docs?.source},description:{story:"About page with story and gallery carousels",...a.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    navbar: Default.args?.navbar,
    hero: {
      headline: 'Meet our team',
      description: 'The talented people building Acme and shaping the future of development.',
      align: 'center',
      size: 'sm'
    },
    team: {
      members: TEAM_MEMBERS,
      columns: 3,
      variant: 'cards'
    },
    cta: {
      headline: 'Want to join us?',
      description: "We're hiring across all teams.",
      actions: <Button size="lg">View Careers</Button>
    },
    footer: Default.args?.footer
  }
}`,...o.parameters?.docs?.source},description:{story:"Team-focused about page",...o.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    hero: {
      headline: 'About Acme',
      description: "We're building tools that empower developers to ship faster.",
      align: 'center',
      size: 'md'
    },
    stats: {
      stats: COMPANY_STATS
    },
    cta: {
      headline: 'Learn more',
      actions: <Button size="lg">Read our blog</Button>
    },
    footer: {
      brand: {
        name: 'Acme'
      },
      copyright: \`\${new Date().getFullYear()} Acme Inc.\`
    }
  }
}`,...s.parameters?.docs?.source},description:{story:"Minimal about page",...s.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    navbar: Default.args?.navbar,
    hero: {
      badge: <Badge variant="brand"><Heart size={14} style={{
          marginRight: 4
        }} /> Our Mission</Badge>,
      headline: 'Democratizing software development',
      description: 'We believe everyone should have the tools to bring their ideas to life. Our mission is to remove the barriers that stand between imagination and implementation.',
      align: 'center',
      size: 'lg'
    },
    storyCarousel: {
      title: 'Our Values',
      items: [{
        image: <img src="https://picsum.photos/1200/675?random=40" alt="" />,
        eyebrow: 'Value #1',
        title: 'User First',
        description: 'Every decision starts with the user in mind.',
        overlay: 'gradient' as const
      }, {
        image: <img src="https://picsum.photos/1200/675?random=41" alt="" />,
        eyebrow: 'Value #2',
        title: 'Ship Fast',
        description: 'Move quickly and iterate based on feedback.',
        overlay: 'gradient' as const
      }, {
        image: <img src="https://picsum.photos/1200/675?random=42" alt="" />,
        eyebrow: 'Value #3',
        title: 'Be Transparent',
        description: 'Open communication builds trust.',
        overlay: 'gradient' as const
      }]
    },
    stats: {
      eyebrow: 'Impact',
      title: 'By the numbers',
      stats: COMPANY_STATS,
      variant: 'cards'
    },
    timeline: {
      title: 'Our journey',
      events: COMPANY_TIMELINE
    },
    cta: {
      headline: 'Join our mission',
      description: "Help us build tools that empower millions of developers.",
      actions: <>
          <Button size="lg">Explore Careers</Button>
          <Button variant="ghost" size="lg">Read Our Blog</Button>
        </>,
      variant: 'brand'
    },
    footer: Default.args?.footer
  }
}`,...n.parameters?.docs?.source},description:{story:"Mission-focused about page",...n.parameters?.docs?.description}}};const st=["Default","WithCarousels","TeamFocused","Minimal","MissionFocused"];export{t as Default,s as Minimal,n as MissionFocused,o as TeamFocused,a as WithCarousels,st as __namedExportsOrder,ot as default};
