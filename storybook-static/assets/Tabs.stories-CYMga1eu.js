import{j as n}from"./jsx-runtime-u17CrQMm.js";import{r as x}from"./index-Bi6L2ga8.js";import{T as t}from"./Tabs-D5n6hrvS.js";import{F as b}from"./Field-q4DqLIqo.js";import{B as y}from"./Button-C5l-MScQ.js";import{C as f}from"./Checkbox-BdQYmUbV.js";import"./circle-alert-BMPEDkj1.js";import"./createLucideIcon-DprCCbyf.js";import"./minus-D7ovpRdW.js";import"./check-DDKQb6IN.js";const R={title:"Components/Navigation/Tabs",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{tabs:{description:"Array of tab items"},defaultTab:{control:"text",description:"Default active tab ID (uncontrolled)"},activeTab:{control:"text",description:"Active tab ID (controlled)"},fullWidth:{control:"boolean",description:"Full width tabs"}}},a=[{id:"profile",label:"Profile",content:n.jsxs("div",{style:{padding:"var(--spacing-6)"},children:[n.jsx("h3",{style:{margin:"0 0 var(--spacing-4) 0",fontSize:"var(--font-size-18)",fontWeight:"var(--font-weight-medium)"},children:"Profile"}),n.jsx("p",{style:{margin:0,color:"var(--text-secondary)"},children:"Manage your profile information"})]})},{id:"settings",label:"Settings",content:n.jsxs("div",{style:{padding:"var(--spacing-6)"},children:[n.jsx("h3",{style:{margin:"0 0 var(--spacing-4) 0",fontSize:"var(--font-size-18)",fontWeight:"var(--font-weight-medium)"},children:"Settings"}),n.jsx("p",{style:{margin:0,color:"var(--text-secondary)"},children:"Configure your preferences"})]})},{id:"notifications",label:"Notifications",content:n.jsxs("div",{style:{padding:"var(--spacing-6)"},children:[n.jsx("h3",{style:{margin:"0 0 var(--spacing-4) 0",fontSize:"var(--font-size-18)",fontWeight:"var(--font-weight-medium)"},children:"Notifications"}),n.jsx("p",{style:{margin:0,color:"var(--text-secondary)"},children:"Manage your notification settings"})]})}],r={args:{tabs:a},render:e=>n.jsx("div",{style:{width:"600px"},children:n.jsx(t,{...e})})},s={args:{tabs:a,defaultTab:"settings"},render:e=>n.jsx("div",{style:{width:"600px"},children:n.jsx(t,{...e})})},o={args:{tabs:a,fullWidth:!0},render:e=>n.jsx("div",{style:{width:"600px"},children:n.jsx(t,{...e})})},d={args:{tabs:a},render:()=>{const e=[{id:"home",label:"Home",icon:n.jsx("span",{style:{fontSize:"var(--font-size-18)"},children:"🏠"}),content:n.jsxs("div",{style:{padding:"var(--spacing-6)"},children:[n.jsx("h3",{style:{margin:"0 0 var(--spacing-4) 0",fontSize:"var(--font-size-18)",fontWeight:"var(--font-weight-medium)"},children:"Home"}),n.jsx("p",{style:{margin:0,color:"var(--text-secondary)"},children:"Welcome to your dashboard"})]})},{id:"search",label:"Search",icon:n.jsx("span",{style:{fontSize:"var(--font-size-18)"},children:"🔍"}),content:n.jsxs("div",{style:{padding:"var(--spacing-6)"},children:[n.jsx("h3",{style:{margin:"0 0 var(--spacing-4) 0",fontSize:"var(--font-size-18)",fontWeight:"var(--font-weight-medium)"},children:"Search"}),n.jsx("p",{style:{margin:0,color:"var(--text-secondary)"},children:"Find what you need"})]})},{id:"favorites",label:"Favorites",icon:n.jsx("span",{style:{fontSize:"var(--font-size-18)"},children:"⭐"}),content:n.jsxs("div",{style:{padding:"var(--spacing-6)"},children:[n.jsx("h3",{style:{margin:"0 0 var(--spacing-4) 0",fontSize:"var(--font-size-18)",fontWeight:"var(--font-weight-medium)"},children:"Favorites"}),n.jsx("p",{style:{margin:0,color:"var(--text-secondary)"},children:"Your saved items"})]})}];return n.jsx("div",{style:{width:"600px"},children:n.jsx(t,{tabs:e})})}},l={args:{tabs:a},render:()=>{const e=[{id:"inbox",label:"Inbox",badge:12,content:n.jsxs("div",{style:{padding:"var(--spacing-6)"},children:[n.jsx("h3",{style:{margin:"0 0 var(--spacing-4) 0",fontSize:"var(--font-size-18)",fontWeight:"var(--font-weight-medium)"},children:"Inbox"}),n.jsx("p",{style:{margin:0,color:"var(--text-secondary)"},children:"You have 12 unread messages"})]})},{id:"sent",label:"Sent",content:n.jsxs("div",{style:{padding:"var(--spacing-6)"},children:[n.jsx("h3",{style:{margin:"0 0 var(--spacing-4) 0",fontSize:"var(--font-size-18)",fontWeight:"var(--font-weight-medium)"},children:"Sent"}),n.jsx("p",{style:{margin:0,color:"var(--text-secondary)"},children:"View your sent messages"})]})},{id:"drafts",label:"Drafts",badge:3,content:n.jsxs("div",{style:{padding:"var(--spacing-6)"},children:[n.jsx("h3",{style:{margin:"0 0 var(--spacing-4) 0",fontSize:"var(--font-size-18)",fontWeight:"var(--font-weight-medium)"},children:"Drafts"}),n.jsx("p",{style:{margin:0,color:"var(--text-secondary)"},children:"You have 3 draft messages"})]})}];return n.jsx("div",{style:{width:"600px"},children:n.jsx(t,{tabs:e})})}},c={args:{tabs:a},render:()=>{const e=[{id:"general",label:"General",content:n.jsxs("div",{style:{padding:"var(--spacing-6)"},children:[n.jsx("h3",{style:{margin:"0 0 var(--spacing-4) 0",fontSize:"var(--font-size-18)",fontWeight:"var(--font-weight-medium)"},children:"General"}),n.jsx("p",{style:{margin:0,color:"var(--text-secondary)"},children:"General settings"})]})},{id:"security",label:"Security",content:n.jsxs("div",{style:{padding:"var(--spacing-6)"},children:[n.jsx("h3",{style:{margin:"0 0 var(--spacing-4) 0",fontSize:"var(--font-size-18)",fontWeight:"var(--font-weight-medium)"},children:"Security"}),n.jsx("p",{style:{margin:0,color:"var(--text-secondary)"},children:"Security settings"})]})},{id:"admin",label:"Admin",disabled:!0,content:n.jsxs("div",{style:{padding:"var(--spacing-6)"},children:[n.jsx("h3",{style:{margin:"0 0 var(--spacing-4) 0",fontSize:"var(--font-size-18)",fontWeight:"var(--font-weight-medium)"},children:"Admin"}),n.jsx("p",{style:{margin:0,color:"var(--text-secondary)"},children:"Admin panel (requires permission)"})]})}];return n.jsx("div",{style:{width:"600px"},children:n.jsx(t,{tabs:e})})}},g={args:{tabs:a},render:()=>{const[e,i]=x.useState("tab1"),u=[{id:"tab1",label:"Tab 1",content:n.jsxs("div",{style:{padding:"var(--spacing-6)"},children:[n.jsx("h3",{style:{margin:"0 0 var(--spacing-4) 0",fontSize:"var(--font-size-18)",fontWeight:"var(--font-weight-medium)"},children:"Tab 1"}),n.jsx("p",{style:{margin:0,color:"var(--text-secondary)"},children:"First tab content"})]})},{id:"tab2",label:"Tab 2",content:n.jsxs("div",{style:{padding:"var(--spacing-6)"},children:[n.jsx("h3",{style:{margin:"0 0 var(--spacing-4) 0",fontSize:"var(--font-size-18)",fontWeight:"var(--font-weight-medium)"},children:"Tab 2"}),n.jsx("p",{style:{margin:0,color:"var(--text-secondary)"},children:"Second tab content"})]})},{id:"tab3",label:"Tab 3",content:n.jsxs("div",{style:{padding:"var(--spacing-6)"},children:[n.jsx("h3",{style:{margin:"0 0 var(--spacing-4) 0",fontSize:"var(--font-size-18)",fontWeight:"var(--font-weight-medium)"},children:"Tab 3"}),n.jsx("p",{style:{margin:0,color:"var(--text-secondary)"},children:"Third tab content"})]})}];return n.jsxs("div",{style:{width:"600px"},children:[n.jsx(t,{tabs:u,activeTab:e,onChange:i}),n.jsxs("div",{style:{marginTop:"var(--spacing-4)",padding:"var(--spacing-4)",background:"var(--surface-subtle)",borderRadius:"var(--radius-sm)",fontSize:"var(--font-size-14)"},children:[n.jsx("strong",{children:"Current active tab:"})," ",e]})]})}},v={args:{tabs:a},render:()=>{const e=[{id:"profile",label:"Profile",icon:n.jsx("span",{children:"👤"}),content:n.jsxs("div",{style:{padding:"var(--spacing-8)"},children:[n.jsx("h3",{style:{margin:"0 0 var(--spacing-6) 0",fontSize:"var(--font-size-18)",fontWeight:"var(--font-weight-medium)"},children:"Profile Settings"}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-4)"},children:[n.jsx(b,{label:"Display Name",type:"text",defaultValue:"John Doe"}),n.jsx(b,{label:"Email",type:"email",defaultValue:"john@example.com"})]})]})},{id:"security",label:"Security",icon:n.jsx("span",{children:"🔒"}),content:n.jsxs("div",{style:{padding:"var(--spacing-8)"},children:[n.jsx("h3",{style:{margin:"0 0 var(--spacing-6) 0",fontSize:"var(--font-size-18)",fontWeight:"var(--font-weight-medium)"},children:"Security Settings"}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-4)"},children:[n.jsx(y,{variant:"secondary",style:{justifyContent:"flex-start"},children:"Change Password"}),n.jsx(y,{variant:"secondary",style:{justifyContent:"flex-start"},children:"Enable Two-Factor Authentication"})]})]})},{id:"notifications",label:"Notifications",icon:n.jsx("span",{children:"🔔"}),badge:5,content:n.jsxs("div",{style:{padding:"var(--spacing-8)"},children:[n.jsx("h3",{style:{margin:"0 0 var(--spacing-6) 0",fontSize:"var(--font-size-18)",fontWeight:"var(--font-weight-medium)"},children:"Notification Preferences"}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-4)"},children:[n.jsx(f,{label:"Email notifications",defaultChecked:!0}),n.jsx(f,{label:"Push notifications",defaultChecked:!0}),n.jsx(f,{label:"SMS notifications"})]})]})}];return n.jsx("div",{style:{width:"700px",border:"1px solid var(--border-subtle)",borderRadius:"var(--radius-control)"},children:n.jsx(t,{tabs:e})})}},p={args:{tabs:a},render:()=>{const e=[{id:"overview",label:"Overview",content:n.jsxs("div",{style:{padding:"var(--spacing-8)"},children:[n.jsx("h3",{style:{margin:"0 0 var(--spacing-6) 0",fontSize:"var(--font-size-18)",fontWeight:"var(--font-weight-medium)"},children:"Dashboard Overview"}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"var(--spacing-4)"},children:["Revenue","Users","Orders"].map(i=>n.jsxs("div",{style:{padding:"var(--spacing-6)",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-subtle)",textAlign:"center"},children:[n.jsx("div",{style:{fontSize:"var(--font-size-24)",fontWeight:"var(--font-weight-bold)",marginBottom:"var(--spacing-2)"},children:Math.floor(Math.random()*1e3)}),n.jsx("div",{style:{fontSize:"var(--font-size-14)",color:"var(--text-secondary)"},children:i})]},i))})]})},{id:"analytics",label:"Analytics",content:n.jsxs("div",{style:{padding:"var(--spacing-8)"},children:[n.jsx("h3",{style:{margin:"0 0 var(--spacing-4) 0",fontSize:"var(--font-size-18)",fontWeight:"var(--font-weight-medium)"},children:"Analytics"}),n.jsx("p",{style:{margin:0,color:"var(--text-secondary)"},children:"View detailed analytics and reports"})]})},{id:"reports",label:"Reports",badge:"3 new",content:n.jsxs("div",{style:{padding:"var(--spacing-8)"},children:[n.jsx("h3",{style:{margin:"0 0 var(--spacing-4) 0",fontSize:"var(--font-size-18)",fontWeight:"var(--font-weight-medium)"},children:"Reports"}),n.jsx("p",{style:{margin:0,color:"var(--text-secondary)"},children:"Access and download reports"})]})},{id:"export",label:"Export",disabled:!0,content:n.jsxs("div",{style:{padding:"var(--spacing-8)"},children:[n.jsx("h3",{style:{margin:"0 0 var(--spacing-4) 0",fontSize:"var(--font-size-18)",fontWeight:"var(--font-weight-medium)"},children:"Export Data"}),n.jsx("p",{style:{margin:0,color:"var(--text-secondary)"},children:"Upgrade to access data export"})]})}];return n.jsx("div",{style:{width:"800px",border:"1px solid var(--border-subtle)",borderRadius:"var(--radius-control)",background:"var(--surface-base)"},children:n.jsx(t,{tabs:e})})}},h={args:{tabs:a},render:()=>{const e=[{id:"getting-started",label:"Getting Started",content:n.jsxs("div",{style:{padding:"var(--spacing-8)",maxHeight:"400px",overflow:"auto"},children:[n.jsx("h3",{style:{margin:"0 0 var(--spacing-4) 0",fontSize:"var(--font-size-20)",fontWeight:"var(--font-weight-medium)"},children:"Getting Started"}),n.jsx("p",{style:{margin:"0 0 var(--spacing-4) 0",color:"var(--text-secondary)",lineHeight:1.6},children:"Welcome to the documentation. This guide will help you get started with our product."}),n.jsx("h4",{style:{margin:"var(--spacing-6) 0 var(--spacing-3) 0",fontSize:"var(--font-size-16)",fontWeight:"var(--font-weight-medium)"},children:"Installation"}),n.jsx("pre",{style:{padding:"var(--spacing-4)",borderRadius:"var(--radius-sm)",background:"var(--surface-subtle)",fontSize:"var(--font-size-14)",overflow:"auto"},children:"npm install @example/package"})]})},{id:"api-reference",label:"API Reference",content:n.jsxs("div",{style:{padding:"var(--spacing-8)"},children:[n.jsx("h3",{style:{margin:"0 0 var(--spacing-4) 0",fontSize:"var(--font-size-20)",fontWeight:"var(--font-weight-medium)"},children:"API Reference"}),n.jsx("p",{style:{margin:0,color:"var(--text-secondary)",lineHeight:1.6},children:"Complete API documentation with examples and best practices."})]})},{id:"examples",label:"Examples",content:n.jsxs("div",{style:{padding:"var(--spacing-8)"},children:[n.jsx("h3",{style:{margin:"0 0 var(--spacing-4) 0",fontSize:"var(--font-size-20)",fontWeight:"var(--font-weight-medium)"},children:"Examples"}),n.jsx("p",{style:{margin:0,color:"var(--text-secondary)",lineHeight:1.6},children:"Code examples and use cases to help you get started quickly."})]})}];return n.jsx("div",{style:{width:"700px",border:"1px solid var(--border-subtle)",borderRadius:"var(--radius-control)",background:"var(--surface-base)"},children:n.jsx(t,{tabs:e,fullWidth:!0})})}},m={args:{tabs:a,className:"custom-tabs"},render:e=>n.jsx("div",{style:{width:"600px"},children:n.jsx(t,{...e})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: basicTabs
  },
  render: args => <div style={{
    width: '600px'
  }}>
      <Tabs {...args} />
    </div>
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: basicTabs,
    defaultTab: 'settings'
  },
  render: args => <div style={{
    width: '600px'
  }}>
      <Tabs {...args} />
    </div>
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: basicTabs,
    fullWidth: true
  },
  render: args => <div style={{
    width: '600px'
  }}>
      <Tabs {...args} />
    </div>
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: basicTabs
  },
  render: () => {
    const tabsWithIcons: TabItem[] = [{
      id: 'home',
      label: 'Home',
      icon: <span style={{
        fontSize: 'var(--font-size-18)'
      }}>🏠</span>,
      content: <div style={{
        padding: 'var(--spacing-6)'
      }}>
            <h3 style={{
          margin: '0 0 var(--spacing-4) 0',
          fontSize: 'var(--font-size-18)',
          fontWeight: 'var(--font-weight-medium)'
        }}>Home</h3>
            <p style={{
          margin: 0,
          color: 'var(--text-secondary)'
        }}>Welcome to your dashboard</p>
          </div>
    }, {
      id: 'search',
      label: 'Search',
      icon: <span style={{
        fontSize: 'var(--font-size-18)'
      }}>🔍</span>,
      content: <div style={{
        padding: 'var(--spacing-6)'
      }}>
            <h3 style={{
          margin: '0 0 var(--spacing-4) 0',
          fontSize: 'var(--font-size-18)',
          fontWeight: 'var(--font-weight-medium)'
        }}>Search</h3>
            <p style={{
          margin: 0,
          color: 'var(--text-secondary)'
        }}>Find what you need</p>
          </div>
    }, {
      id: 'favorites',
      label: 'Favorites',
      icon: <span style={{
        fontSize: 'var(--font-size-18)'
      }}>⭐</span>,
      content: <div style={{
        padding: 'var(--spacing-6)'
      }}>
            <h3 style={{
          margin: '0 0 var(--spacing-4) 0',
          fontSize: 'var(--font-size-18)',
          fontWeight: 'var(--font-weight-medium)'
        }}>Favorites</h3>
            <p style={{
          margin: 0,
          color: 'var(--text-secondary)'
        }}>Your saved items</p>
          </div>
    }];
    return <div style={{
      width: '600px'
    }}>
        <Tabs tabs={tabsWithIcons} />
      </div>;
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: basicTabs
  },
  render: () => {
    const tabsWithBadges: TabItem[] = [{
      id: 'inbox',
      label: 'Inbox',
      badge: 12,
      content: <div style={{
        padding: 'var(--spacing-6)'
      }}>
            <h3 style={{
          margin: '0 0 var(--spacing-4) 0',
          fontSize: 'var(--font-size-18)',
          fontWeight: 'var(--font-weight-medium)'
        }}>Inbox</h3>
            <p style={{
          margin: 0,
          color: 'var(--text-secondary)'
        }}>You have 12 unread messages</p>
          </div>
    }, {
      id: 'sent',
      label: 'Sent',
      content: <div style={{
        padding: 'var(--spacing-6)'
      }}>
            <h3 style={{
          margin: '0 0 var(--spacing-4) 0',
          fontSize: 'var(--font-size-18)',
          fontWeight: 'var(--font-weight-medium)'
        }}>Sent</h3>
            <p style={{
          margin: 0,
          color: 'var(--text-secondary)'
        }}>View your sent messages</p>
          </div>
    }, {
      id: 'drafts',
      label: 'Drafts',
      badge: 3,
      content: <div style={{
        padding: 'var(--spacing-6)'
      }}>
            <h3 style={{
          margin: '0 0 var(--spacing-4) 0',
          fontSize: 'var(--font-size-18)',
          fontWeight: 'var(--font-weight-medium)'
        }}>Drafts</h3>
            <p style={{
          margin: 0,
          color: 'var(--text-secondary)'
        }}>You have 3 draft messages</p>
          </div>
    }];
    return <div style={{
      width: '600px'
    }}>
        <Tabs tabs={tabsWithBadges} />
      </div>;
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: basicTabs
  },
  render: () => {
    const tabsWithDisabled: TabItem[] = [{
      id: 'general',
      label: 'General',
      content: <div style={{
        padding: 'var(--spacing-6)'
      }}>
            <h3 style={{
          margin: '0 0 var(--spacing-4) 0',
          fontSize: 'var(--font-size-18)',
          fontWeight: 'var(--font-weight-medium)'
        }}>General</h3>
            <p style={{
          margin: 0,
          color: 'var(--text-secondary)'
        }}>General settings</p>
          </div>
    }, {
      id: 'security',
      label: 'Security',
      content: <div style={{
        padding: 'var(--spacing-6)'
      }}>
            <h3 style={{
          margin: '0 0 var(--spacing-4) 0',
          fontSize: 'var(--font-size-18)',
          fontWeight: 'var(--font-weight-medium)'
        }}>Security</h3>
            <p style={{
          margin: 0,
          color: 'var(--text-secondary)'
        }}>Security settings</p>
          </div>
    }, {
      id: 'admin',
      label: 'Admin',
      disabled: true,
      content: <div style={{
        padding: 'var(--spacing-6)'
      }}>
            <h3 style={{
          margin: '0 0 var(--spacing-4) 0',
          fontSize: 'var(--font-size-18)',
          fontWeight: 'var(--font-weight-medium)'
        }}>Admin</h3>
            <p style={{
          margin: 0,
          color: 'var(--text-secondary)'
        }}>Admin panel (requires permission)</p>
          </div>
    }];
    return <div style={{
      width: '600px'
    }}>
        <Tabs tabs={tabsWithDisabled} />
      </div>;
  }
}`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: basicTabs
  },
  render: () => {
    const [activeTab, setActiveTab] = useState('tab1');
    const controlledTabs: TabItem[] = [{
      id: 'tab1',
      label: 'Tab 1',
      content: <div style={{
        padding: 'var(--spacing-6)'
      }}>
            <h3 style={{
          margin: '0 0 var(--spacing-4) 0',
          fontSize: 'var(--font-size-18)',
          fontWeight: 'var(--font-weight-medium)'
        }}>Tab 1</h3>
            <p style={{
          margin: 0,
          color: 'var(--text-secondary)'
        }}>First tab content</p>
          </div>
    }, {
      id: 'tab2',
      label: 'Tab 2',
      content: <div style={{
        padding: 'var(--spacing-6)'
      }}>
            <h3 style={{
          margin: '0 0 var(--spacing-4) 0',
          fontSize: 'var(--font-size-18)',
          fontWeight: 'var(--font-weight-medium)'
        }}>Tab 2</h3>
            <p style={{
          margin: 0,
          color: 'var(--text-secondary)'
        }}>Second tab content</p>
          </div>
    }, {
      id: 'tab3',
      label: 'Tab 3',
      content: <div style={{
        padding: 'var(--spacing-6)'
      }}>
            <h3 style={{
          margin: '0 0 var(--spacing-4) 0',
          fontSize: 'var(--font-size-18)',
          fontWeight: 'var(--font-weight-medium)'
        }}>Tab 3</h3>
            <p style={{
          margin: 0,
          color: 'var(--text-secondary)'
        }}>Third tab content</p>
          </div>
    }];
    return <div style={{
      width: '600px'
    }}>
        <Tabs tabs={controlledTabs} activeTab={activeTab} onChange={setActiveTab} />
        <div style={{
        marginTop: 'var(--spacing-4)',
        padding: 'var(--spacing-4)',
        background: 'var(--surface-subtle)',
        borderRadius: 'var(--radius-sm)',
        fontSize: 'var(--font-size-14)'
      }}>
          <strong>Current active tab:</strong> {activeTab}
        </div>
      </div>;
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: basicTabs
  },
  render: () => {
    const settingsTabs: TabItem[] = [{
      id: 'profile',
      label: 'Profile',
      icon: <span>👤</span>,
      content: <div style={{
        padding: 'var(--spacing-8)'
      }}>
            <h3 style={{
          margin: '0 0 var(--spacing-6) 0',
          fontSize: 'var(--font-size-18)',
          fontWeight: 'var(--font-weight-medium)'
        }}>
              Profile Settings
            </h3>
            <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-4)'
        }}>
              <Field label="Display Name" type="text" defaultValue="John Doe" />
              <Field label="Email" type="email" defaultValue="john@example.com" />
            </div>
          </div>
    }, {
      id: 'security',
      label: 'Security',
      icon: <span>🔒</span>,
      content: <div style={{
        padding: 'var(--spacing-8)'
      }}>
            <h3 style={{
          margin: '0 0 var(--spacing-6) 0',
          fontSize: 'var(--font-size-18)',
          fontWeight: 'var(--font-weight-medium)'
        }}>
              Security Settings
            </h3>
            <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-4)'
        }}>
              <Button variant="secondary" style={{
            justifyContent: 'flex-start'
          }}>Change Password</Button>
              <Button variant="secondary" style={{
            justifyContent: 'flex-start'
          }}>Enable Two-Factor Authentication</Button>
            </div>
          </div>
    }, {
      id: 'notifications',
      label: 'Notifications',
      icon: <span>🔔</span>,
      badge: 5,
      content: <div style={{
        padding: 'var(--spacing-8)'
      }}>
            <h3 style={{
          margin: '0 0 var(--spacing-6) 0',
          fontSize: 'var(--font-size-18)',
          fontWeight: 'var(--font-weight-medium)'
        }}>
              Notification Preferences
            </h3>
            <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-4)'
        }}>
              <Checkbox label="Email notifications" defaultChecked />
              <Checkbox label="Push notifications" defaultChecked />
              <Checkbox label="SMS notifications" />
            </div>
          </div>
    }];
    return <div style={{
      width: '700px',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-control)'
    }}>
        <Tabs tabs={settingsTabs} />
      </div>;
  }
}`,...v.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: basicTabs
  },
  render: () => {
    const dashboardTabs: TabItem[] = [{
      id: 'overview',
      label: 'Overview',
      content: <div style={{
        padding: 'var(--spacing-8)'
      }}>
            <h3 style={{
          margin: '0 0 var(--spacing-6) 0',
          fontSize: 'var(--font-size-18)',
          fontWeight: 'var(--font-weight-medium)'
        }}>
              Dashboard Overview
            </h3>
            <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 'var(--spacing-4)'
        }}>
              {['Revenue', 'Users', 'Orders'].map(metric => <div key={metric} style={{
            padding: 'var(--spacing-6)',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-subtle)',
            textAlign: 'center'
          }}>
                  <div style={{
              fontSize: 'var(--font-size-24)',
              fontWeight: 'var(--font-weight-bold)',
              marginBottom: 'var(--spacing-2)'
            }}>
                    {Math.floor(Math.random() * 1000)}
                  </div>
                  <div style={{
              fontSize: 'var(--font-size-14)',
              color: 'var(--text-secondary)'
            }}>{metric}</div>
                </div>)}
            </div>
          </div>
    }, {
      id: 'analytics',
      label: 'Analytics',
      content: <div style={{
        padding: 'var(--spacing-8)'
      }}>
            <h3 style={{
          margin: '0 0 var(--spacing-4) 0',
          fontSize: 'var(--font-size-18)',
          fontWeight: 'var(--font-weight-medium)'
        }}>Analytics</h3>
            <p style={{
          margin: 0,
          color: 'var(--text-secondary)'
        }}>View detailed analytics and reports</p>
          </div>
    }, {
      id: 'reports',
      label: 'Reports',
      badge: '3 new',
      content: <div style={{
        padding: 'var(--spacing-8)'
      }}>
            <h3 style={{
          margin: '0 0 var(--spacing-4) 0',
          fontSize: 'var(--font-size-18)',
          fontWeight: 'var(--font-weight-medium)'
        }}>Reports</h3>
            <p style={{
          margin: 0,
          color: 'var(--text-secondary)'
        }}>Access and download reports</p>
          </div>
    }, {
      id: 'export',
      label: 'Export',
      disabled: true,
      content: <div style={{
        padding: 'var(--spacing-8)'
      }}>
            <h3 style={{
          margin: '0 0 var(--spacing-4) 0',
          fontSize: 'var(--font-size-18)',
          fontWeight: 'var(--font-weight-medium)'
        }}>Export Data</h3>
            <p style={{
          margin: 0,
          color: 'var(--text-secondary)'
        }}>Upgrade to access data export</p>
          </div>
    }];
    return <div style={{
      width: '800px',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-control)',
      background: 'var(--surface-base)'
    }}>
        <Tabs tabs={dashboardTabs} />
      </div>;
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: basicTabs
  },
  render: () => {
    const docTabs: TabItem[] = [{
      id: 'getting-started',
      label: 'Getting Started',
      content: <div style={{
        padding: 'var(--spacing-8)',
        maxHeight: '400px',
        overflow: 'auto'
      }}>
            <h3 style={{
          margin: '0 0 var(--spacing-4) 0',
          fontSize: 'var(--font-size-20)',
          fontWeight: 'var(--font-weight-medium)'
        }}>
              Getting Started
            </h3>
            <p style={{
          margin: '0 0 var(--spacing-4) 0',
          color: 'var(--text-secondary)',
          lineHeight: 1.6
        }}>
              Welcome to the documentation. This guide will help you get started with our product.
            </p>
            <h4 style={{
          margin: 'var(--spacing-6) 0 var(--spacing-3) 0',
          fontSize: 'var(--font-size-16)',
          fontWeight: 'var(--font-weight-medium)'
        }}>
              Installation
            </h4>
            <pre style={{
          padding: 'var(--spacing-4)',
          borderRadius: 'var(--radius-sm)',
          background: 'var(--surface-subtle)',
          fontSize: 'var(--font-size-14)',
          overflow: 'auto'
        }}>
              npm install @example/package
            </pre>
          </div>
    }, {
      id: 'api-reference',
      label: 'API Reference',
      content: <div style={{
        padding: 'var(--spacing-8)'
      }}>
            <h3 style={{
          margin: '0 0 var(--spacing-4) 0',
          fontSize: 'var(--font-size-20)',
          fontWeight: 'var(--font-weight-medium)'
        }}>
              API Reference
            </h3>
            <p style={{
          margin: 0,
          color: 'var(--text-secondary)',
          lineHeight: 1.6
        }}>
              Complete API documentation with examples and best practices.
            </p>
          </div>
    }, {
      id: 'examples',
      label: 'Examples',
      content: <div style={{
        padding: 'var(--spacing-8)'
      }}>
            <h3 style={{
          margin: '0 0 var(--spacing-4) 0',
          fontSize: 'var(--font-size-20)',
          fontWeight: 'var(--font-weight-medium)'
        }}>Examples</h3>
            <p style={{
          margin: 0,
          color: 'var(--text-secondary)',
          lineHeight: 1.6
        }}>
              Code examples and use cases to help you get started quickly.
            </p>
          </div>
    }];
    return <div style={{
      width: '700px',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-control)',
      background: 'var(--surface-base)'
    }}>
        <Tabs tabs={docTabs} fullWidth />
      </div>;
  }
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: basicTabs,
    className: 'custom-tabs'
  },
  render: args => <div style={{
    width: '600px'
  }}>
      <Tabs {...args} />
    </div>
}`,...m.parameters?.docs?.source}}};const P=["Default","WithDefaultTab","FullWidth","WithIcons","WithBadges","WithDisabledTab","ControlledTabs","AccountSettings","ProductDashboard","DocumentationPages","WithCustomStyling"];export{v as AccountSettings,g as ControlledTabs,r as Default,h as DocumentationPages,o as FullWidth,p as ProductDashboard,l as WithBadges,m as WithCustomStyling,s as WithDefaultTab,c as WithDisabledTab,d as WithIcons,P as __namedExportsOrder,R as default};
