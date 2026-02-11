import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as s}from"./index-Bi6L2ga8.js";import{S as n}from"./SettingsLayout-BNR_kDoG.js";import{B as m}from"./Button-C5l-MScQ.js";import{F as r}from"./Field-q4DqLIqo.js";import{F as u}from"./FormSection-BhKFvmEk.js";import{B as f}from"./Badge-CTnzlsKR.js";import{U as g}from"./user-CUEj3VL3.js";import{B as x}from"./bell-B0mciaZ5.js";import{L as h}from"./lock-Cq0Y35Uf.js";import{C as y}from"./credit-card-DVOexJYu.js";import{G as j}from"./globe-CaDiCyrV.js";import{P as b}from"./palette-BU3FMOx2.js";import{U as N}from"./users-B3aIcKNm.js";import{K as A}from"./key-P9TBH7C_.js";import{S as P}from"./shield-DhOd_9EY.js";import"./x-Dd336Dmd.js";import"./createLucideIcon-DprCCbyf.js";import"./menu-CnVLCxPO.js";import"./circle-alert-BMPEDkj1.js";import"./chevron-down-buXKF-gJ.js";const Q={title:"Sections/App/SettingsLayout",component:n,parameters:{layout:"fullscreen",docs:{description:{component:"A layout for settings pages with navigation sidebar. Optimized for Product Mode with clear navigation and content separation."}}},tags:["autodocs"],argTypes:{stickyNav:{control:"boolean"},mobileNav:{control:"boolean"},navWidth:{control:"number"}}},S=[{title:"Account",items:[{id:"profile",label:"Profile",icon:e.jsx(g,{size:18})},{id:"notifications",label:"Notifications",icon:e.jsx(x,{size:18}),badge:e.jsx(f,{variant:"info",children:"3"})},{id:"security",label:"Security",icon:e.jsx(h,{size:18})},{id:"billing",label:"Billing",icon:e.jsx(y,{size:18})}]},{title:"Preferences",items:[{id:"language",label:"Language & Region",icon:e.jsx(j,{size:18})},{id:"appearance",label:"Appearance",icon:e.jsx(b,{size:18})}]},{title:"Team",items:[{id:"members",label:"Team Members",icon:e.jsx(N,{size:18})},{id:"api",label:"API Keys",icon:e.jsx(A,{size:18}),badge:e.jsx(f,{children:"Pro"})},{id:"permissions",label:"Permissions",icon:e.jsx(P,{size:18}),disabled:!0}]}],a=()=>e.jsxs(u,{title:"Profile Information",description:"Update your personal details and public profile.",variant:"card",actions:e.jsxs(u.Actions,{children:[e.jsx(m,{variant:"secondary",children:"Cancel"}),e.jsx(m,{children:"Save Changes"})]}),children:[e.jsxs(u.Group,{columns:2,children:[e.jsx(r,{label:"First Name",type:"text",defaultValue:"John"}),e.jsx(r,{label:"Last Name",type:"text",defaultValue:"Doe"})]}),e.jsx(r,{label:"Email",type:"email",defaultValue:"john@example.com"}),e.jsx(r,{label:"Bio",type:"textarea",placeholder:"Tell us about yourself..."})]}),z=()=>e.jsx(u,{title:"Notification Preferences",description:"Manage how you receive notifications.",variant:"card",children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-4)"},children:["Email notifications","Push notifications","SMS alerts","Weekly digest"].map(i=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("span",{children:i}),e.jsx("input",{type:"checkbox"})]},i))})}),C=()=>{const[i,t]=s.useState("profile"),o=()=>{switch(i){case"profile":return e.jsx(a,{});case"notifications":return e.jsx(z,{});default:return e.jsxs("div",{style:{padding:"var(--spacing-10)",textAlign:"center",color:"var(--text-secondary)"},children:[e.jsxs("h2",{children:[i.charAt(0).toUpperCase()+i.slice(1)," Settings"]}),e.jsx("p",{children:"Content for this section would go here."})]})}};return e.jsx("div",{style:{height:"100vh"},children:e.jsx(n,{title:"Settings",description:"Manage your account settings and preferences",navigation:S,activeSection:i,onNavigate:t,children:o()})})},c={render:()=>e.jsx(C,{})},l={render:()=>{const[i,t]=s.useState("profile");return e.jsx("div",{style:{height:"100vh"},children:e.jsx(n,{title:"Settings",description:"Manage your account",navigation:S,activeSection:i,onNavigate:t,headerActions:e.jsxs(e.Fragment,{children:[e.jsx(m,{variant:"secondary",children:"Help"}),e.jsx(m,{children:"Upgrade"})]}),children:e.jsx(a,{})})})}},d={render:()=>{const[i,t]=s.useState("profile");return e.jsx("div",{style:{height:"100vh"},children:e.jsx(n,{navigation:S,activeSection:i,onNavigate:t,children:e.jsx(a,{})})})}},p={render:()=>{const[i,t]=s.useState("profile"),o=[{items:[{id:"profile",label:"Profile",icon:e.jsx(g,{size:18})},{id:"security",label:"Security",icon:e.jsx(h,{size:18})},{id:"notifications",label:"Notifications",icon:e.jsx(x,{size:18})}]}];return e.jsx("div",{style:{height:"100vh"},children:e.jsx(n,{title:"Account Settings",navigation:o,activeSection:i,onNavigate:t,children:e.jsx(a,{})})})}},v={render:()=>{const[i,t]=s.useState("profile"),o=[{items:[{id:"profile",label:"Profile",icon:e.jsx(g,{size:18}),description:"Manage your public profile"},{id:"security",label:"Security",icon:e.jsx(h,{size:18}),description:"Password and 2FA settings"},{id:"billing",label:"Billing",icon:e.jsx(y,{size:18}),description:"Payment methods and invoices"}]}];return e.jsx("div",{style:{height:"100vh"},children:e.jsx(n,{title:"Settings",navigation:o,activeSection:i,onNavigate:t,navWidth:300,children:e.jsx(a,{})})})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveSettings />
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeSection, setActiveSection] = useState('profile');
    return <div style={{
      height: '100vh'
    }}>
        <SettingsLayout title="Settings" description="Manage your account" navigation={sampleNavigation} activeSection={activeSection} onNavigate={setActiveSection} headerActions={<>
              <Button variant="secondary">Help</Button>
              <Button>Upgrade</Button>
            </>}>
          <ProfileContent />
        </SettingsLayout>
      </div>;
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeSection, setActiveSection] = useState('profile');
    return <div style={{
      height: '100vh'
    }}>
        <SettingsLayout navigation={sampleNavigation} activeSection={activeSection} onNavigate={setActiveSection}>
          <ProfileContent />
        </SettingsLayout>
      </div>;
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeSection, setActiveSection] = useState('profile');
    const simpleNav = [{
      items: [{
        id: 'profile',
        label: 'Profile',
        icon: <User size={18} />
      }, {
        id: 'security',
        label: 'Security',
        icon: <Lock size={18} />
      }, {
        id: 'notifications',
        label: 'Notifications',
        icon: <Bell size={18} />
      }]
    }];
    return <div style={{
      height: '100vh'
    }}>
        <SettingsLayout title="Account Settings" navigation={simpleNav} activeSection={activeSection} onNavigate={setActiveSection}>
          <ProfileContent />
        </SettingsLayout>
      </div>;
  }
}`,...p.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeSection, setActiveSection] = useState('profile');
    const navWithDescriptions = [{
      items: [{
        id: 'profile',
        label: 'Profile',
        icon: <User size={18} />,
        description: 'Manage your public profile'
      }, {
        id: 'security',
        label: 'Security',
        icon: <Lock size={18} />,
        description: 'Password and 2FA settings'
      }, {
        id: 'billing',
        label: 'Billing',
        icon: <CreditCard size={18} />,
        description: 'Payment methods and invoices'
      }]
    }];
    return <div style={{
      height: '100vh'
    }}>
        <SettingsLayout title="Settings" navigation={navWithDescriptions} activeSection={activeSection} onNavigate={setActiveSection} navWidth={300}>
          <ProfileContent />
        </SettingsLayout>
      </div>;
  }
}`,...v.parameters?.docs?.source}}};const X=["Default","WithHeaderActions","NoTitle","SimpleNavigation","WideNavigation"];export{c as Default,d as NoTitle,p as SimpleNavigation,v as WideNavigation,l as WithHeaderActions,X as __namedExportsOrder,Q as default};
