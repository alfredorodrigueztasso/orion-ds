import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as y}from"./index-Bi6L2ga8.js";import{N as a}from"./Navbar-CdASg_Md.js";import{B as e}from"./Button-C5l-MScQ.js";const z={title:"Components/Navigation/Navbar",component:a,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{height:{control:"select",options:["sm","md","lg"],description:"Navbar height"},variant:{control:"select",options:["solid","transparent","glass"],description:"Navbar background style"},sticky:{control:"boolean",description:"Make navbar sticky"},bordered:{control:"boolean",description:"Add bottom border"}},decorators:[i=>r.jsx("div",{style:{width:"100%",minHeight:"100vh"},children:r.jsx(i,{})})]},s={args:{children:r.jsxs(r.Fragment,{children:[r.jsx(a.Brand,{href:"/",children:"MyApp"}),r.jsxs(a.Nav,{children:[r.jsx(a.Link,{href:"/",active:!0,children:"Home"}),r.jsx(a.Link,{href:"/about",children:"About"}),r.jsx(a.Link,{href:"/contact",children:"Contact"})]}),r.jsxs(a.Actions,{children:[r.jsx(e,{variant:"ghost",children:"Sign In"}),r.jsx(e,{variant:"primary",children:"Sign Up"})]})]})}},o={args:{children:r.jsxs(r.Fragment,{children:[r.jsx(a.Brand,{href:"/",children:r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[r.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"var(--radius-sm)",background:"linear-gradient(135deg, var(--color-brand-400) 0%, var(--color-brand-600) 100%)"}}),r.jsx("span",{style:{fontWeight:"var(--font-weight-medium)"},children:"MyApp"})]})}),r.jsxs(a.Nav,{children:[r.jsx(a.Link,{href:"/",active:!0,children:"Home"}),r.jsx(a.Link,{href:"/products",children:"Products"}),r.jsx(a.Link,{href:"/pricing",children:"Pricing"}),r.jsx(a.Link,{href:"/docs",children:"Docs"})]}),r.jsxs(a.Actions,{children:[r.jsx(e,{variant:"ghost",children:"Login"}),r.jsx(e,{variant:"primary",children:"Get Started"})]})]})}},d={args:{children:null},render:()=>r.jsxs("div",{style:{background:"linear-gradient(135deg, var(--color-brand-400) 0%, var(--color-brand-600) 100%)",minHeight:"300px",borderRadius:"var(--radius-control)"},children:[r.jsxs(a,{variant:"glass",colorScheme:"light",bordered:!1,children:[r.jsx(a.Brand,{href:"/",children:"Brand"}),r.jsxs(a.Nav,{children:[r.jsx(a.Link,{href:"/",active:!0,children:"Home"}),r.jsx(a.Link,{href:"/features",children:"Features"}),r.jsx(a.Link,{href:"/pricing",children:"Pricing"})]}),r.jsx(a.Actions,{children:r.jsx(e,{variant:"secondary",size:"sm",children:"Login"})})]}),r.jsxs("div",{style:{padding:"var(--spacing-8)",color:"var(--interactive-primary-text)"},children:[r.jsx("h2",{style:{marginBottom:"var(--spacing-2)"},children:"Glass Navbar"}),r.jsx("p",{style:{opacity:.8},children:"The glass effect creates a frosted appearance with backdrop blur."})]})]})},c={args:{children:null},render:()=>r.jsxs("div",{style:{background:"linear-gradient(135deg, var(--color-neutral-900) 0%, var(--color-neutral-800) 50%, var(--color-neutral-800) 100%)",minHeight:"300px",borderRadius:"var(--radius-control)"},children:[r.jsxs(a,{variant:"transparent",colorScheme:"light",bordered:!1,children:[r.jsx(a.Brand,{href:"/",children:"Brand"}),r.jsxs(a.Nav,{children:[r.jsx(a.Link,{href:"/",active:!0,children:"Home"}),r.jsx(a.Link,{href:"/about",children:"About"}),r.jsx(a.Link,{href:"/contact",children:"Contact"})]}),r.jsxs(a.Actions,{children:[r.jsx(e,{variant:"secondary",size:"sm",children:"Sign In"}),r.jsx(e,{variant:"primary",size:"sm",children:"Get Started"})]})]}),r.jsxs("div",{style:{padding:"var(--spacing-8)",color:"var(--interactive-primary-text)"},children:[r.jsx("h2",{style:{marginBottom:"var(--spacing-2)"},children:"Transparent Navbar"}),r.jsx("p",{style:{opacity:.8},children:'Use colorScheme="light" for dark backgrounds, colorScheme="dark" for light backgrounds.'})]})]})},l={args:{children:null},render:()=>r.jsxs("div",{children:[r.jsxs(a,{height:"sm",children:[r.jsx(a.Brand,{href:"/",children:"Compact"}),r.jsxs(a.Nav,{children:[r.jsx(a.Link,{href:"/",active:!0,children:"Home"}),r.jsx(a.Link,{href:"/about",children:"About"}),r.jsx(a.Link,{href:"/contact",children:"Contact"})]}),r.jsxs(a.Actions,{children:[r.jsx(e,{variant:"ghost",size:"sm",children:"Sign In"}),r.jsx(e,{variant:"primary",size:"sm",children:"Get Started"})]})]}),r.jsx("div",{style:{padding:"var(--spacing-6)",background:"var(--surface-subtle)"},children:r.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"var(--font-size-14)"},children:"Small navbar (56px height) - ideal for dense interfaces and admin panels."})})]})},v={args:{children:null},render:()=>r.jsxs("div",{children:[r.jsxs(a,{height:"lg",children:[r.jsx(a.Brand,{href:"/",children:"Spacious"}),r.jsxs(a.Nav,{children:[r.jsx(a.Link,{href:"/",active:!0,children:"Home"}),r.jsx(a.Link,{href:"/products",children:"Products"}),r.jsx(a.Link,{href:"/about",children:"About"})]}),r.jsxs(a.Actions,{children:[r.jsx(e,{variant:"ghost",size:"sm",children:"Sign In"}),r.jsx(e,{variant:"primary",children:"Get Started"})]})]}),r.jsx("div",{style:{padding:"var(--spacing-6)",background:"var(--surface-subtle)"},children:r.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"var(--font-size-14)"},children:"Large navbar (72px height) - ideal for marketing sites and landing pages."})})]})},h={args:{children:null},render:()=>r.jsxs("div",{style:{minHeight:"200vh"},children:[r.jsxs(a,{sticky:!0,children:[r.jsx(a.Brand,{href:"/",children:"Sticky Nav"}),r.jsxs(a.Nav,{children:[r.jsx(a.Link,{href:"/",active:!0,children:"Home"}),r.jsx(a.Link,{href:"/features",children:"Features"}),r.jsx(a.Link,{href:"/pricing",children:"Pricing"})]}),r.jsx(a.Actions,{children:r.jsx(e,{variant:"primary",size:"sm",children:"Get Started"})})]}),r.jsxs("div",{style:{padding:"var(--spacing-8)"},children:[r.jsx("h1",{style:{marginBottom:"var(--spacing-4)"},children:"Scroll down to see sticky behavior"}),r.jsx("p",{style:{color:"var(--text-secondary)",marginBottom:"var(--spacing-8)"},children:"The navbar will stay fixed at the top as you scroll."}),Array.from({length:10}).map((i,n)=>r.jsxs("div",{style:{padding:"var(--spacing-6)",marginBottom:"var(--spacing-4)",background:"var(--surface-subtle)",borderRadius:"var(--radius-control)"},children:[r.jsxs("h3",{style:{marginBottom:"var(--spacing-2)"},children:["Section ",n+1]}),r.jsx("p",{style:{color:"var(--text-secondary)"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]},n))]})]})},b={args:{children:null},render:()=>r.jsxs("div",{children:[r.jsxs(a,{bordered:!1,children:[r.jsx(a.Brand,{href:"/",children:"No Border"}),r.jsxs(a.Nav,{children:[r.jsx(a.Link,{href:"/",active:!0,children:"Home"}),r.jsx(a.Link,{href:"/about",children:"About"}),r.jsx(a.Link,{href:"/contact",children:"Contact"})]}),r.jsx(a.Actions,{children:r.jsx(e,{variant:"ghost",size:"sm",children:"Sign In"})})]}),r.jsx("div",{style:{padding:"var(--spacing-6)",background:"var(--surface-subtle)"},children:r.jsx("p",{style:{color:"var(--text-secondary)"},children:"Notice there is no border at the bottom of the navbar."})})]})},p={args:{children:r.jsxs(r.Fragment,{children:[r.jsx(a.Brand,{href:"/",children:"Brand"}),r.jsx(a.Actions,{children:r.jsx(e,{variant:"ghost",children:"Menu"})})]})}},g={args:{children:r.jsxs(r.Fragment,{children:[r.jsx(a.Brand,{href:"/",children:"Brand"}),r.jsxs(a.Nav,{children:[r.jsx(a.Link,{href:"/",active:!0,children:"Home"}),r.jsx(a.Link,{href:"/products",children:"Products"}),r.jsx(a.Link,{href:"/solutions",children:"Solutions"}),r.jsx(a.Link,{href:"/pricing",children:"Pricing"}),r.jsx(a.Link,{href:"/docs",children:"Docs"}),r.jsx(a.Link,{href:"/blog",children:"Blog"}),r.jsx(a.Link,{href:"/about",children:"About"})]}),r.jsxs(a.Actions,{children:[r.jsx(e,{variant:"ghost",children:"Login"}),r.jsx(e,{variant:"primary",children:"Sign Up"})]})]})}},u={args:{children:null},render:()=>r.jsxs("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:"var(--spacing-8)"},children:[r.jsxs("div",{style:{background:"linear-gradient(135deg, var(--color-neutral-900) 0%, var(--color-neutral-800) 100%)",minHeight:"180px",borderRadius:"var(--radius-control)",overflow:"hidden"},children:[r.jsxs(a,{variant:"glass",colorScheme:"light",bordered:!1,children:[r.jsx(a.Brand,{children:"GlassNav"}),r.jsxs(a.Nav,{children:[r.jsx(a.Link,{href:"/",active:!0,children:"Home"}),r.jsx(a.Link,{href:"/about",children:"About"}),r.jsx(a.Link,{href:"/contact",children:"Contact"})]}),r.jsx(a.Actions,{children:r.jsx(e,{variant:"primary",size:"sm",children:"Action"})})]}),r.jsx("div",{style:{padding:"var(--spacing-6)",color:"var(--interactive-primary-text)"},children:r.jsx("p",{style:{opacity:.7,fontSize:"var(--font-size-14)"},children:'Glass + colorScheme="light" on dark gradient'})})]}),r.jsxs("div",{style:{background:'url("https://images.unsplash.com/photo-1557683316-973673baf926?w=1200") center/cover',minHeight:"180px",borderRadius:"var(--radius-control)",overflow:"hidden",position:"relative"},children:[r.jsx("div",{style:{position:"absolute",inset:0,background:"rgba(0,0,0,0.2)"}}),r.jsxs("div",{style:{position:"relative",zIndex:1},children:[r.jsxs(a,{variant:"glass",colorScheme:"light",bordered:!1,children:[r.jsx(a.Brand,{children:"PhotoApp"}),r.jsxs(a.Nav,{children:[r.jsx(a.Link,{href:"/",active:!0,children:"Gallery"}),r.jsx(a.Link,{href:"/albums",children:"Albums"}),r.jsx(a.Link,{href:"/upload",children:"Upload"})]}),r.jsx(a.Actions,{children:r.jsx(e,{variant:"secondary",size:"sm",children:"Sign In"})})]}),r.jsx("div",{style:{padding:"var(--spacing-6)",color:"var(--interactive-primary-text)"},children:r.jsx("p",{style:{opacity:.9,fontSize:"var(--font-size-14)"},children:"Glass over image with overlay"})})]})]}),r.jsxs("div",{style:{background:"linear-gradient(135deg, var(--surface-subtle) 0%, var(--surface-layer) 100%)",minHeight:"180px",borderRadius:"var(--radius-control)",overflow:"hidden",border:"1px solid var(--border-subtle)"},children:[r.jsxs(a,{variant:"glass",colorScheme:"dark",bordered:!1,children:[r.jsx(a.Brand,{children:"Dashboard"}),r.jsxs(a.Nav,{children:[r.jsx(a.Link,{href:"/",active:!0,children:"Overview"}),r.jsx(a.Link,{href:"/analytics",children:"Analytics"}),r.jsx(a.Link,{href:"/settings",children:"Settings"})]}),r.jsxs(a.Actions,{children:[r.jsx(e,{variant:"ghost",size:"sm",children:"Help"}),r.jsx(e,{variant:"primary",size:"sm",children:"Upgrade"})]})]}),r.jsx("div",{style:{padding:"var(--spacing-6)"},children:r.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"var(--font-size-14)"},children:'Glass + colorScheme="dark" on light gradient'})})]})]})},m={args:{children:null},render:()=>r.jsxs("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:"var(--spacing-8)"},children:[r.jsxs("div",{style:{background:"linear-gradient(135deg, var(--color-brand-400) 0%, var(--color-brand-600) 100%)",minHeight:"200px",borderRadius:"var(--radius-control)",overflow:"hidden"},children:[r.jsxs(a,{variant:"transparent",colorScheme:"light",bordered:!1,children:[r.jsx(a.Brand,{children:"LightOnDark"}),r.jsxs(a.Nav,{children:[r.jsx(a.Link,{href:"/",active:!0,children:"Home"}),r.jsx(a.Link,{href:"/features",children:"Features"}),r.jsx(a.Link,{href:"/pricing",children:"Pricing"})]}),r.jsxs(a.Actions,{children:[r.jsx(e,{variant:"secondary",size:"sm",children:"Sign In"}),r.jsx(e,{variant:"primary",size:"sm",children:"Get Started"})]})]}),r.jsxs("div",{style:{padding:"var(--spacing-6)",color:"var(--interactive-primary-text)"},children:[r.jsx("h2",{style:{marginBottom:"var(--spacing-2)"},children:"Hero Section"}),r.jsx("p",{style:{opacity:.8},children:'Use colorScheme="light" for navbars on dark or colored backgrounds.'})]})]}),r.jsxs("div",{style:{background:"var(--surface-subtle)",minHeight:"200px",borderRadius:"var(--radius-control)",overflow:"hidden",border:"1px solid var(--border-subtle)"},children:[r.jsxs(a,{variant:"transparent",colorScheme:"dark",bordered:!1,children:[r.jsx(a.Brand,{children:"DarkOnLight"}),r.jsxs(a.Nav,{children:[r.jsx(a.Link,{href:"/",active:!0,children:"Home"}),r.jsx(a.Link,{href:"/features",children:"Features"}),r.jsx(a.Link,{href:"/pricing",children:"Pricing"})]}),r.jsxs(a.Actions,{children:[r.jsx(e,{variant:"ghost",size:"sm",children:"Sign In"}),r.jsx(e,{variant:"primary",size:"sm",children:"Get Started"})]})]}),r.jsxs("div",{style:{padding:"var(--spacing-6)"},children:[r.jsx("h2",{style:{marginBottom:"var(--spacing-2)"},children:"Content Section"}),r.jsx("p",{style:{color:"var(--text-secondary)"},children:'Use colorScheme="dark" for navbars on light backgrounds.'})]})]}),r.jsxs("div",{style:{background:'url("https://images.unsplash.com/photo-1557683316-973673baf926?w=1200") center/cover',minHeight:"200px",borderRadius:"var(--radius-control)",overflow:"hidden",position:"relative"},children:[r.jsx("div",{style:{position:"absolute",inset:0,background:"rgba(0,0,0,0.3)"}}),r.jsxs("div",{style:{position:"relative",zIndex:1},children:[r.jsxs(a,{variant:"glass",colorScheme:"light",bordered:!1,children:[r.jsx(a.Brand,{children:"GlassNav"}),r.jsxs(a.Nav,{children:[r.jsx(a.Link,{href:"/",active:!0,children:"Home"}),r.jsx(a.Link,{href:"/gallery",children:"Gallery"}),r.jsx(a.Link,{href:"/contact",children:"Contact"})]}),r.jsx(a.Actions,{children:r.jsx(e,{variant:"secondary",size:"sm",children:"Explore"})})]}),r.jsxs("div",{style:{padding:"var(--spacing-6)",color:"var(--interactive-primary-text)"},children:[r.jsx("h2",{style:{marginBottom:"var(--spacing-2)"},children:"Glass Effect"}),r.jsx("p",{style:{opacity:.9},children:"Glass navbar with light color scheme over an image."})]})]})]})]})},x={args:{children:null},render:()=>r.jsxs("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:"var(--spacing-8)",padding:"var(--spacing-4)"},children:[r.jsxs("div",{children:[r.jsx("h3",{style:{marginBottom:"var(--spacing-4)",paddingLeft:"var(--spacing-4)"},children:"Small (56px)"}),r.jsxs(a,{height:"sm",children:[r.jsx(a.Brand,{children:"Brand"}),r.jsxs(a.Nav,{children:[r.jsx(a.Link,{href:"/",active:!0,children:"Home"}),r.jsx(a.Link,{href:"/about",children:"About"}),r.jsx(a.Link,{href:"/contact",children:"Contact"})]}),r.jsx(a.Actions,{children:r.jsx(e,{variant:"primary",size:"sm",children:"Action"})})]})]}),r.jsxs("div",{children:[r.jsx("h3",{style:{marginBottom:"var(--spacing-4)",paddingLeft:"var(--spacing-4)"},children:"Medium (64px) - Default"}),r.jsxs(a,{height:"md",children:[r.jsx(a.Brand,{children:"Brand"}),r.jsxs(a.Nav,{children:[r.jsx(a.Link,{href:"/",active:!0,children:"Home"}),r.jsx(a.Link,{href:"/about",children:"About"}),r.jsx(a.Link,{href:"/contact",children:"Contact"})]}),r.jsx(a.Actions,{children:r.jsx(e,{variant:"primary",size:"sm",children:"Action"})})]})]}),r.jsxs("div",{children:[r.jsx("h3",{style:{marginBottom:"var(--spacing-4)",paddingLeft:"var(--spacing-4)"},children:"Large (72px)"}),r.jsxs(a,{height:"lg",children:[r.jsx(a.Brand,{children:"Brand"}),r.jsxs(a.Nav,{children:[r.jsx(a.Link,{href:"/",active:!0,children:"Home"}),r.jsx(a.Link,{href:"/about",children:"About"}),r.jsx(a.Link,{href:"/contact",children:"Contact"})]}),r.jsx(a.Actions,{children:r.jsx(e,{variant:"primary",size:"sm",children:"Action"})})]})]})]})},j=()=>{const[i,n]=y.useState(!1),t=()=>n(!1);return r.jsxs(a,{sticky:!0,children:[r.jsx(a.Brand,{href:"/",children:r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[r.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"var(--radius-sm)",background:"var(--interactive-primary)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--interactive-primary-text)",fontWeight:"var(--font-weight-bold)",fontSize:"var(--font-size-14)"},children:"O"}),r.jsx("span",{children:"Orion"})]})}),r.jsxs(a.Nav,{children:[r.jsx(a.Link,{href:"/",active:!0,children:"Home"}),r.jsx(a.Link,{href:"/features",children:"Features"}),r.jsx(a.Link,{href:"/pricing",children:"Pricing"}),r.jsx(a.Link,{href:"/docs",children:"Documentation"}),r.jsx(a.Link,{href:"/blog",children:"Blog"})]}),r.jsxs(a.Actions,{children:[r.jsx(e,{variant:"ghost",size:"sm",children:"Sign In"}),r.jsx(e,{variant:"primary",size:"sm",children:"Get Started"})]}),r.jsx(a.Toggle,{isOpen:i,onToggle:()=>n(!i)}),r.jsxs(a.Collapse,{isOpen:i,children:[r.jsx(a.Link,{href:"/",active:!0,onClick:t,children:"Home"}),r.jsx(a.Link,{href:"/features",onClick:t,children:"Features"}),r.jsx(a.Link,{href:"/pricing",onClick:t,children:"Pricing"}),r.jsx(a.Link,{href:"/docs",onClick:t,children:"Documentation"}),r.jsx(a.Link,{href:"/blog",onClick:t,children:"Blog"}),r.jsxs(a.CollapseActions,{children:[r.jsx(e,{variant:"secondary",fullWidth:!0,children:"Sign In"}),r.jsx(e,{variant:"primary",fullWidth:!0,children:"Get Started"})]})]})]})},N={args:{children:null},render:()=>r.jsx(j,{}),parameters:{docs:{description:{story:"Resize the viewport to see the responsive behavior. On mobile (< 768px), the nav and actions are hidden and a hamburger menu appears."}}}},f={args:{children:null},render:()=>{const[i,n]=y.useState(!0);return r.jsxs("div",{style:{maxWidth:"375px",margin:"0 auto",border:"1px solid var(--border-subtle)",borderRadius:"var(--radius-control)",overflow:"hidden"},children:[r.jsxs(a,{children:[r.jsx(a.Brand,{href:"/",children:r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[r.jsx("div",{style:{width:"28px",height:"28px",borderRadius:"var(--radius-sm)",background:"var(--interactive-primary)"}}),r.jsx("span",{children:"App"})]})}),r.jsx("button",{onClick:()=>n(!i),style:{display:"flex",alignItems:"center",justifyContent:"center",width:"40px",height:"40px",background:"transparent",border:"none",borderRadius:"var(--radius-sm)",cursor:"pointer"},children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-1)"},children:[r.jsx("span",{style:{width:"20px",height:"2px",background:"var(--text-primary)",borderRadius:"1px",transform:i?"translateY(7px) rotate(45deg)":"none",transition:"all 0.2s"}}),r.jsx("span",{style:{width:"20px",height:"2px",background:"var(--text-primary)",borderRadius:"1px",opacity:i?0:1,transition:"all 0.2s"}}),r.jsx("span",{style:{width:"20px",height:"2px",background:"var(--text-primary)",borderRadius:"1px",transform:i?"translateY(-7px) rotate(-45deg)":"none",transition:"all 0.2s"}})]})}),r.jsxs(a.Collapse,{isOpen:i,children:[r.jsx(a.Link,{href:"/",active:!0,children:"Home"}),r.jsx(a.Link,{href:"/features",children:"Features"}),r.jsx(a.Link,{href:"/pricing",children:"Pricing"}),r.jsx(a.Link,{href:"/about",children:"About"}),r.jsxs(a.CollapseActions,{children:[r.jsx(e,{variant:"secondary",fullWidth:!0,children:"Sign In"}),r.jsx(e,{variant:"primary",fullWidth:!0,children:"Get Started"})]})]})]}),r.jsx("div",{style:{padding:"var(--spacing-6)",minHeight:"200px",background:"var(--surface-subtle)"},children:r.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"var(--font-size-14)"},children:"This demonstrates the mobile menu. The toggle button shows a hamburger that animates to an X when open."})})]})}},k={args:{children:null},render:()=>r.jsxs("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:"var(--spacing-8)",padding:"var(--spacing-4)"},children:[r.jsxs("div",{children:[r.jsx("h3",{style:{marginBottom:"var(--spacing-4)",paddingLeft:"var(--spacing-4)"},children:"Solid (Default)"}),r.jsxs(a,{variant:"solid",children:[r.jsx(a.Brand,{children:"Brand"}),r.jsxs(a.Nav,{children:[r.jsx(a.Link,{href:"/",active:!0,children:"Home"}),r.jsx(a.Link,{href:"/about",children:"About"}),r.jsx(a.Link,{href:"/contact",children:"Contact"})]}),r.jsx(a.Actions,{children:r.jsx(e,{variant:"primary",size:"sm",children:"Action"})})]})]}),r.jsxs("div",{style:{background:"linear-gradient(135deg, var(--interactive-primary), var(--color-brand-600))",borderRadius:"var(--radius-control)",padding:"var(--spacing-4) 0"},children:[r.jsx("h3",{style:{marginBottom:"var(--spacing-4)",paddingLeft:"var(--spacing-4)",color:"var(--interactive-primary-text)"},children:'Transparent + colorScheme="light"'}),r.jsxs(a,{variant:"transparent",colorScheme:"light",bordered:!1,children:[r.jsx(a.Brand,{children:"Brand"}),r.jsxs(a.Nav,{children:[r.jsx(a.Link,{href:"/",active:!0,children:"Home"}),r.jsx(a.Link,{href:"/about",children:"About"}),r.jsx(a.Link,{href:"/contact",children:"Contact"})]}),r.jsx(a.Actions,{children:r.jsx(e,{variant:"secondary",size:"sm",children:"Action"})})]})]}),r.jsxs("div",{style:{background:"linear-gradient(135deg, var(--color-neutral-900), var(--color-neutral-800))",borderRadius:"var(--radius-control)",padding:"var(--spacing-4) 0"},children:[r.jsx("h3",{style:{marginBottom:"var(--spacing-4)",paddingLeft:"var(--spacing-4)",color:"var(--interactive-primary-text)"},children:'Glass + colorScheme="light"'}),r.jsxs(a,{variant:"glass",colorScheme:"light",bordered:!1,children:[r.jsx(a.Brand,{children:"Brand"}),r.jsxs(a.Nav,{children:[r.jsx(a.Link,{href:"/",active:!0,children:"Home"}),r.jsx(a.Link,{href:"/about",children:"About"}),r.jsx(a.Link,{href:"/contact",children:"Contact"})]}),r.jsx(a.Actions,{children:r.jsx(e,{variant:"primary",size:"sm",children:"Action"})})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <Navbar.Brand href="/">MyApp</Navbar.Brand>
        <Navbar.Nav>
          <Navbar.Link href="/" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="/about">About</Navbar.Link>
          <Navbar.Link href="/contact">Contact</Navbar.Link>
        </Navbar.Nav>
        <Navbar.Actions>
          <Button variant="ghost">Sign In</Button>
          <Button variant="primary">Sign Up</Button>
        </Navbar.Actions>
      </>
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <Navbar.Brand href="/">
          <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--spacing-2)'
        }}>
            <div style={{
            width: '32px',
            height: '32px',
            borderRadius: 'var(--radius-sm)',
            background: 'linear-gradient(135deg, var(--color-brand-400) 0%, var(--color-brand-600) 100%)'
          }} />
            <span style={{
            fontWeight: 'var(--font-weight-medium)'
          }}>MyApp</span>
          </div>
        </Navbar.Brand>
        <Navbar.Nav>
          <Navbar.Link href="/" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="/products">Products</Navbar.Link>
          <Navbar.Link href="/pricing">Pricing</Navbar.Link>
          <Navbar.Link href="/docs">Docs</Navbar.Link>
        </Navbar.Nav>
        <Navbar.Actions>
          <Button variant="ghost">Login</Button>
          <Button variant="primary">Get Started</Button>
        </Navbar.Actions>
      </>
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <div style={{
    background: 'linear-gradient(135deg, var(--color-brand-400) 0%, var(--color-brand-600) 100%)',
    minHeight: '300px',
    borderRadius: 'var(--radius-control)'
  }}>
      <Navbar variant="glass" colorScheme="light" bordered={false}>
        <Navbar.Brand href="/">Brand</Navbar.Brand>
        <Navbar.Nav>
          <Navbar.Link href="/" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="/features">Features</Navbar.Link>
          <Navbar.Link href="/pricing">Pricing</Navbar.Link>
        </Navbar.Nav>
        <Navbar.Actions>
          <Button variant="secondary" size="sm">Login</Button>
        </Navbar.Actions>
      </Navbar>
      <div style={{
      padding: 'var(--spacing-8)',
      color: 'var(--interactive-primary-text)'
    }}>
        <h2 style={{
        marginBottom: 'var(--spacing-2)'
      }}>Glass Navbar</h2>
        <p style={{
        opacity: 0.8
      }}>The glass effect creates a frosted appearance with backdrop blur.</p>
      </div>
    </div>
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <div style={{
    background: 'linear-gradient(135deg, var(--color-neutral-900) 0%, var(--color-neutral-800) 50%, var(--color-neutral-800) 100%)',
    minHeight: '300px',
    borderRadius: 'var(--radius-control)'
  }}>
      <Navbar variant="transparent" colorScheme="light" bordered={false}>
        <Navbar.Brand href="/">Brand</Navbar.Brand>
        <Navbar.Nav>
          <Navbar.Link href="/" active>Home</Navbar.Link>
          <Navbar.Link href="/about">About</Navbar.Link>
          <Navbar.Link href="/contact">Contact</Navbar.Link>
        </Navbar.Nav>
        <Navbar.Actions>
          <Button variant="secondary" size="sm">Sign In</Button>
          <Button variant="primary" size="sm">Get Started</Button>
        </Navbar.Actions>
      </Navbar>
      <div style={{
      padding: 'var(--spacing-8)',
      color: 'var(--interactive-primary-text)'
    }}>
        <h2 style={{
        marginBottom: 'var(--spacing-2)'
      }}>Transparent Navbar</h2>
        <p style={{
        opacity: 0.8
      }}>Use colorScheme="light" for dark backgrounds, colorScheme="dark" for light backgrounds.</p>
      </div>
    </div>
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <div>
      <Navbar height="sm">
        <Navbar.Brand href="/">Compact</Navbar.Brand>
        <Navbar.Nav>
          <Navbar.Link href="/" active>Home</Navbar.Link>
          <Navbar.Link href="/about">About</Navbar.Link>
          <Navbar.Link href="/contact">Contact</Navbar.Link>
        </Navbar.Nav>
        <Navbar.Actions>
          <Button variant="ghost" size="sm">Sign In</Button>
          <Button variant="primary" size="sm">Get Started</Button>
        </Navbar.Actions>
      </Navbar>
      <div style={{
      padding: 'var(--spacing-6)',
      background: 'var(--surface-subtle)'
    }}>
        <p style={{
        color: 'var(--text-secondary)',
        fontSize: 'var(--font-size-14)'
      }}>
          Small navbar (56px height) - ideal for dense interfaces and admin panels.
        </p>
      </div>
    </div>
}`,...l.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <div>
      <Navbar height="lg">
        <Navbar.Brand href="/">Spacious</Navbar.Brand>
        <Navbar.Nav>
          <Navbar.Link href="/" active>Home</Navbar.Link>
          <Navbar.Link href="/products">Products</Navbar.Link>
          <Navbar.Link href="/about">About</Navbar.Link>
        </Navbar.Nav>
        <Navbar.Actions>
          <Button variant="ghost" size="sm">Sign In</Button>
          <Button variant="primary">Get Started</Button>
        </Navbar.Actions>
      </Navbar>
      <div style={{
      padding: 'var(--spacing-6)',
      background: 'var(--surface-subtle)'
    }}>
        <p style={{
        color: 'var(--text-secondary)',
        fontSize: 'var(--font-size-14)'
      }}>
          Large navbar (72px height) - ideal for marketing sites and landing pages.
        </p>
      </div>
    </div>
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <div style={{
    minHeight: '200vh'
  }}>
      <Navbar sticky>
        <Navbar.Brand href="/">Sticky Nav</Navbar.Brand>
        <Navbar.Nav>
          <Navbar.Link href="/" active>Home</Navbar.Link>
          <Navbar.Link href="/features">Features</Navbar.Link>
          <Navbar.Link href="/pricing">Pricing</Navbar.Link>
        </Navbar.Nav>
        <Navbar.Actions>
          <Button variant="primary" size="sm">Get Started</Button>
        </Navbar.Actions>
      </Navbar>
      <div style={{
      padding: 'var(--spacing-8)'
    }}>
        <h1 style={{
        marginBottom: 'var(--spacing-4)'
      }}>Scroll down to see sticky behavior</h1>
        <p style={{
        color: 'var(--text-secondary)',
        marginBottom: 'var(--spacing-8)'
      }}>
          The navbar will stay fixed at the top as you scroll.
        </p>
        {Array.from({
        length: 10
      }).map((_, i) => <div key={i} style={{
        padding: 'var(--spacing-6)',
        marginBottom: 'var(--spacing-4)',
        background: 'var(--surface-subtle)',
        borderRadius: 'var(--radius-control)'
      }}>
            <h3 style={{
          marginBottom: 'var(--spacing-2)'
        }}>Section {i + 1}</h3>
            <p style={{
          color: 'var(--text-secondary)'
        }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>)}
      </div>
    </div>
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <div>
      <Navbar bordered={false}>
        <Navbar.Brand href="/">No Border</Navbar.Brand>
        <Navbar.Nav>
          <Navbar.Link href="/" active>Home</Navbar.Link>
          <Navbar.Link href="/about">About</Navbar.Link>
          <Navbar.Link href="/contact">Contact</Navbar.Link>
        </Navbar.Nav>
        <Navbar.Actions>
          <Button variant="ghost" size="sm">Sign In</Button>
        </Navbar.Actions>
      </Navbar>
      <div style={{
      padding: 'var(--spacing-6)',
      background: 'var(--surface-subtle)'
    }}>
        <p style={{
        color: 'var(--text-secondary)'
      }}>
          Notice there is no border at the bottom of the navbar.
        </p>
      </div>
    </div>
}`,...b.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <Navbar.Brand href="/">Brand</Navbar.Brand>
        <Navbar.Actions>
          <Button variant="ghost">Menu</Button>
        </Navbar.Actions>
      </>
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <Navbar.Brand href="/">Brand</Navbar.Brand>
        <Navbar.Nav>
          <Navbar.Link href="/" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="/products">Products</Navbar.Link>
          <Navbar.Link href="/solutions">Solutions</Navbar.Link>
          <Navbar.Link href="/pricing">Pricing</Navbar.Link>
          <Navbar.Link href="/docs">Docs</Navbar.Link>
          <Navbar.Link href="/blog">Blog</Navbar.Link>
          <Navbar.Link href="/about">About</Navbar.Link>
        </Navbar.Nav>
        <Navbar.Actions>
          <Button variant="ghost">Login</Button>
          <Button variant="primary">Sign Up</Button>
        </Navbar.Actions>
      </>
  }
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <div style={{
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-8)'
  }}>
      {/* Glass on gradient background */}
      <div style={{
      background: 'linear-gradient(135deg, var(--color-neutral-900) 0%, var(--color-neutral-800) 100%)',
      minHeight: '180px',
      borderRadius: 'var(--radius-control)',
      overflow: 'hidden'
    }}>
        <Navbar variant="glass" colorScheme="light" bordered={false}>
          <Navbar.Brand>GlassNav</Navbar.Brand>
          <Navbar.Nav>
            <Navbar.Link href="/" active>Home</Navbar.Link>
            <Navbar.Link href="/about">About</Navbar.Link>
            <Navbar.Link href="/contact">Contact</Navbar.Link>
          </Navbar.Nav>
          <Navbar.Actions>
            <Button variant="primary" size="sm">Action</Button>
          </Navbar.Actions>
        </Navbar>
        <div style={{
        padding: 'var(--spacing-6)',
        color: 'var(--interactive-primary-text)'
      }}>
          <p style={{
          opacity: 0.7,
          fontSize: 'var(--font-size-14)'
        }}>Glass + colorScheme="light" on dark gradient</p>
        </div>
      </div>

      {/* Glass on image background */}
      <div style={{
      background: 'url("https://images.unsplash.com/photo-1557683316-973673baf926?w=1200") center/cover',
      minHeight: '180px',
      borderRadius: 'var(--radius-control)',
      overflow: 'hidden',
      position: 'relative'
    }}>
        <div style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(0,0,0,0.2)'
      }} />
        <div style={{
        position: 'relative',
        zIndex: 1
      }}>
          <Navbar variant="glass" colorScheme="light" bordered={false}>
            <Navbar.Brand>PhotoApp</Navbar.Brand>
            <Navbar.Nav>
              <Navbar.Link href="/" active>Gallery</Navbar.Link>
              <Navbar.Link href="/albums">Albums</Navbar.Link>
              <Navbar.Link href="/upload">Upload</Navbar.Link>
            </Navbar.Nav>
            <Navbar.Actions>
              <Button variant="secondary" size="sm">Sign In</Button>
            </Navbar.Actions>
          </Navbar>
          <div style={{
          padding: 'var(--spacing-6)',
          color: 'var(--interactive-primary-text)'
        }}>
            <p style={{
            opacity: 0.9,
            fontSize: 'var(--font-size-14)'
          }}>Glass over image with overlay</p>
          </div>
        </div>
      </div>

      {/* Glass on light background */}
      <div style={{
      background: 'linear-gradient(135deg, var(--surface-subtle) 0%, var(--surface-layer) 100%)',
      minHeight: '180px',
      borderRadius: 'var(--radius-control)',
      overflow: 'hidden',
      border: '1px solid var(--border-subtle)'
    }}>
        <Navbar variant="glass" colorScheme="dark" bordered={false}>
          <Navbar.Brand>Dashboard</Navbar.Brand>
          <Navbar.Nav>
            <Navbar.Link href="/" active>Overview</Navbar.Link>
            <Navbar.Link href="/analytics">Analytics</Navbar.Link>
            <Navbar.Link href="/settings">Settings</Navbar.Link>
          </Navbar.Nav>
          <Navbar.Actions>
            <Button variant="ghost" size="sm">Help</Button>
            <Button variant="primary" size="sm">Upgrade</Button>
          </Navbar.Actions>
        </Navbar>
        <div style={{
        padding: 'var(--spacing-6)'
      }}>
          <p style={{
          color: 'var(--text-secondary)',
          fontSize: 'var(--font-size-14)'
        }}>Glass + colorScheme="dark" on light gradient</p>
        </div>
      </div>
    </div>
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <div style={{
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-8)'
  }}>
      {/* Light color scheme on dark background */}
      <div style={{
      background: 'linear-gradient(135deg, var(--color-brand-400) 0%, var(--color-brand-600) 100%)',
      minHeight: '200px',
      borderRadius: 'var(--radius-control)',
      overflow: 'hidden'
    }}>
        <Navbar variant="transparent" colorScheme="light" bordered={false}>
          <Navbar.Brand>LightOnDark</Navbar.Brand>
          <Navbar.Nav>
            <Navbar.Link href="/" active>Home</Navbar.Link>
            <Navbar.Link href="/features">Features</Navbar.Link>
            <Navbar.Link href="/pricing">Pricing</Navbar.Link>
          </Navbar.Nav>
          <Navbar.Actions>
            <Button variant="secondary" size="sm">Sign In</Button>
            <Button variant="primary" size="sm">Get Started</Button>
          </Navbar.Actions>
        </Navbar>
        <div style={{
        padding: 'var(--spacing-6)',
        color: 'var(--interactive-primary-text)'
      }}>
          <h2 style={{
          marginBottom: 'var(--spacing-2)'
        }}>Hero Section</h2>
          <p style={{
          opacity: 0.8
        }}>Use colorScheme="light" for navbars on dark or colored backgrounds.</p>
        </div>
      </div>

      {/* Dark color scheme on light background */}
      <div style={{
      background: 'var(--surface-subtle)',
      minHeight: '200px',
      borderRadius: 'var(--radius-control)',
      overflow: 'hidden',
      border: '1px solid var(--border-subtle)'
    }}>
        <Navbar variant="transparent" colorScheme="dark" bordered={false}>
          <Navbar.Brand>DarkOnLight</Navbar.Brand>
          <Navbar.Nav>
            <Navbar.Link href="/" active>Home</Navbar.Link>
            <Navbar.Link href="/features">Features</Navbar.Link>
            <Navbar.Link href="/pricing">Pricing</Navbar.Link>
          </Navbar.Nav>
          <Navbar.Actions>
            <Button variant="ghost" size="sm">Sign In</Button>
            <Button variant="primary" size="sm">Get Started</Button>
          </Navbar.Actions>
        </Navbar>
        <div style={{
        padding: 'var(--spacing-6)'
      }}>
          <h2 style={{
          marginBottom: 'var(--spacing-2)'
        }}>Content Section</h2>
          <p style={{
          color: 'var(--text-secondary)'
        }}>Use colorScheme="dark" for navbars on light backgrounds.</p>
        </div>
      </div>

      {/* Glass with light scheme */}
      <div style={{
      background: 'url("https://images.unsplash.com/photo-1557683316-973673baf926?w=1200") center/cover',
      minHeight: '200px',
      borderRadius: 'var(--radius-control)',
      overflow: 'hidden',
      position: 'relative'
    }}>
        <div style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(0,0,0,0.3)'
      }} />
        <div style={{
        position: 'relative',
        zIndex: 1
      }}>
          <Navbar variant="glass" colorScheme="light" bordered={false}>
            <Navbar.Brand>GlassNav</Navbar.Brand>
            <Navbar.Nav>
              <Navbar.Link href="/" active>Home</Navbar.Link>
              <Navbar.Link href="/gallery">Gallery</Navbar.Link>
              <Navbar.Link href="/contact">Contact</Navbar.Link>
            </Navbar.Nav>
            <Navbar.Actions>
              <Button variant="secondary" size="sm">Explore</Button>
            </Navbar.Actions>
          </Navbar>
          <div style={{
          padding: 'var(--spacing-6)',
          color: 'var(--interactive-primary-text)'
        }}>
            <h2 style={{
            marginBottom: 'var(--spacing-2)'
          }}>Glass Effect</h2>
            <p style={{
            opacity: 0.9
          }}>Glass navbar with light color scheme over an image.</p>
          </div>
        </div>
      </div>
    </div>
}`,...m.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <div style={{
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-8)',
    padding: 'var(--spacing-4)'
  }}>
      <div>
        <h3 style={{
        marginBottom: 'var(--spacing-4)',
        paddingLeft: 'var(--spacing-4)'
      }}>Small (56px)</h3>
        <Navbar height="sm">
          <Navbar.Brand>Brand</Navbar.Brand>
          <Navbar.Nav>
            <Navbar.Link href="/" active>Home</Navbar.Link>
            <Navbar.Link href="/about">About</Navbar.Link>
            <Navbar.Link href="/contact">Contact</Navbar.Link>
          </Navbar.Nav>
          <Navbar.Actions>
            <Button variant="primary" size="sm">Action</Button>
          </Navbar.Actions>
        </Navbar>
      </div>

      <div>
        <h3 style={{
        marginBottom: 'var(--spacing-4)',
        paddingLeft: 'var(--spacing-4)'
      }}>Medium (64px) - Default</h3>
        <Navbar height="md">
          <Navbar.Brand>Brand</Navbar.Brand>
          <Navbar.Nav>
            <Navbar.Link href="/" active>Home</Navbar.Link>
            <Navbar.Link href="/about">About</Navbar.Link>
            <Navbar.Link href="/contact">Contact</Navbar.Link>
          </Navbar.Nav>
          <Navbar.Actions>
            <Button variant="primary" size="sm">Action</Button>
          </Navbar.Actions>
        </Navbar>
      </div>

      <div>
        <h3 style={{
        marginBottom: 'var(--spacing-4)',
        paddingLeft: 'var(--spacing-4)'
      }}>Large (72px)</h3>
        <Navbar height="lg">
          <Navbar.Brand>Brand</Navbar.Brand>
          <Navbar.Nav>
            <Navbar.Link href="/" active>Home</Navbar.Link>
            <Navbar.Link href="/about">About</Navbar.Link>
            <Navbar.Link href="/contact">Contact</Navbar.Link>
          </Navbar.Nav>
          <Navbar.Actions>
            <Button variant="primary" size="sm">Action</Button>
          </Navbar.Actions>
        </Navbar>
      </div>
    </div>
}`,...x.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <ResponsiveNavbarDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Resize the viewport to see the responsive behavior. On mobile (< 768px), the nav and actions are hidden and a hamburger menu appears.'
      }
    }
  }
}`,...N.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(true);
    return <div style={{
      maxWidth: '375px',
      margin: '0 auto',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-control)',
      overflow: 'hidden'
    }}>
        <Navbar>
          <Navbar.Brand href="/">
            <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--spacing-2)'
          }}>
              <div style={{
              width: '28px',
              height: '28px',
              borderRadius: 'var(--radius-sm)',
              background: 'var(--interactive-primary)'
            }} />
              <span>App</span>
            </div>
          </Navbar.Brand>

          <button onClick={() => setIsOpen(!isOpen)} style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '40px',
          height: '40px',
          background: 'transparent',
          border: 'none',
          borderRadius: 'var(--radius-sm)',
          cursor: 'pointer'
        }}>
            <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-1)'
          }}>
              <span style={{
              width: '20px',
              height: '2px',
              background: 'var(--text-primary)',
              borderRadius: '1px',
              transform: isOpen ? 'translateY(7px) rotate(45deg)' : 'none',
              transition: 'all 0.2s'
            }} />
              <span style={{
              width: '20px',
              height: '2px',
              background: 'var(--text-primary)',
              borderRadius: '1px',
              opacity: isOpen ? 0 : 1,
              transition: 'all 0.2s'
            }} />
              <span style={{
              width: '20px',
              height: '2px',
              background: 'var(--text-primary)',
              borderRadius: '1px',
              transform: isOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
              transition: 'all 0.2s'
            }} />
            </div>
          </button>

          <Navbar.Collapse isOpen={isOpen}>
            <Navbar.Link href="/" active>Home</Navbar.Link>
            <Navbar.Link href="/features">Features</Navbar.Link>
            <Navbar.Link href="/pricing">Pricing</Navbar.Link>
            <Navbar.Link href="/about">About</Navbar.Link>

            <Navbar.CollapseActions>
              <Button variant="secondary" fullWidth>Sign In</Button>
              <Button variant="primary" fullWidth>Get Started</Button>
            </Navbar.CollapseActions>
          </Navbar.Collapse>
        </Navbar>

        <div style={{
        padding: 'var(--spacing-6)',
        minHeight: '200px',
        background: 'var(--surface-subtle)'
      }}>
          <p style={{
          color: 'var(--text-secondary)',
          fontSize: 'var(--font-size-14)'
        }}>
            This demonstrates the mobile menu. The toggle button shows a hamburger that animates to an X when open.
          </p>
        </div>
      </div>;
  }
}`,...f.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <div style={{
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-8)',
    padding: 'var(--spacing-4)'
  }}>
      <div>
        <h3 style={{
        marginBottom: 'var(--spacing-4)',
        paddingLeft: 'var(--spacing-4)'
      }}>Solid (Default)</h3>
        <Navbar variant="solid">
          <Navbar.Brand>Brand</Navbar.Brand>
          <Navbar.Nav>
            <Navbar.Link href="/" active>Home</Navbar.Link>
            <Navbar.Link href="/about">About</Navbar.Link>
            <Navbar.Link href="/contact">Contact</Navbar.Link>
          </Navbar.Nav>
          <Navbar.Actions>
            <Button variant="primary" size="sm">Action</Button>
          </Navbar.Actions>
        </Navbar>
      </div>

      <div style={{
      background: 'linear-gradient(135deg, var(--interactive-primary), var(--color-brand-600))',
      borderRadius: 'var(--radius-control)',
      padding: 'var(--spacing-4) 0'
    }}>
        <h3 style={{
        marginBottom: 'var(--spacing-4)',
        paddingLeft: 'var(--spacing-4)',
        color: 'var(--interactive-primary-text)'
      }}>Transparent + colorScheme="light"</h3>
        <Navbar variant="transparent" colorScheme="light" bordered={false}>
          <Navbar.Brand>Brand</Navbar.Brand>
          <Navbar.Nav>
            <Navbar.Link href="/" active>Home</Navbar.Link>
            <Navbar.Link href="/about">About</Navbar.Link>
            <Navbar.Link href="/contact">Contact</Navbar.Link>
          </Navbar.Nav>
          <Navbar.Actions>
            <Button variant="secondary" size="sm">Action</Button>
          </Navbar.Actions>
        </Navbar>
      </div>

      <div style={{
      background: 'linear-gradient(135deg, var(--color-neutral-900), var(--color-neutral-800))',
      borderRadius: 'var(--radius-control)',
      padding: 'var(--spacing-4) 0'
    }}>
        <h3 style={{
        marginBottom: 'var(--spacing-4)',
        paddingLeft: 'var(--spacing-4)',
        color: 'var(--interactive-primary-text)'
      }}>Glass + colorScheme="light"</h3>
        <Navbar variant="glass" colorScheme="light" bordered={false}>
          <Navbar.Brand>Brand</Navbar.Brand>
          <Navbar.Nav>
            <Navbar.Link href="/" active>Home</Navbar.Link>
            <Navbar.Link href="/about">About</Navbar.Link>
            <Navbar.Link href="/contact">Contact</Navbar.Link>
          </Navbar.Nav>
          <Navbar.Actions>
            <Button variant="primary" size="sm">Action</Button>
          </Navbar.Actions>
        </Navbar>
      </div>
    </div>
}`,...k.parameters?.docs?.source}}};const H=["Default","WithLogo","GlassVariant","TransparentVariant","SmallHeight","LargeHeight","Sticky","NoBorder","MinimalNav","ManyLinks","GlassShowcase","ColorSchemes","AllHeights","Responsive","MobileView","AllVariants"];export{x as AllHeights,k as AllVariants,m as ColorSchemes,s as Default,u as GlassShowcase,d as GlassVariant,v as LargeHeight,g as ManyLinks,p as MinimalNav,f as MobileView,b as NoBorder,N as Responsive,l as SmallHeight,h as Sticky,c as TransparentVariant,o as WithLogo,H as __namedExportsOrder,z as default};
