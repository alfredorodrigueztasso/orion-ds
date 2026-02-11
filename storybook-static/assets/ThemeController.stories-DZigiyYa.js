import{j as e}from"./jsx-runtime-u17CrQMm.js";import{T as r}from"./ThemeController-C0Cm4STl.js";import{T as y}from"./ThemeContext-Dop_0lMq.js";import"./index-Bi6L2ga8.js";import"./Card-BimbyH8z.js";import"./Switch-BQ1qsiMs.js";import"./circle-alert-BMPEDkj1.js";import"./createLucideIcon-DprCCbyf.js";import"./Radio-CXxIYB9P.js";import"./Button-C5l-MScQ.js";import"./Badge-CTnzlsKR.js";import"./Alert-Cy1_w5uj.js";import"./x-Dd336Dmd.js";import"./info-DJ_xuc1q.js";import"./triangle-alert-CPxB8gZu.js";import"./circle-check-big-CA7x2PYe.js";const I={title:"Documentation/Theme Switcher",component:r,parameters:{layout:"centered"},tags:["autodocs"],decorators:[n=>e.jsx(y,{children:e.jsx(n,{})})],argTypes:{showThemeToggle:{control:"boolean",description:"Show theme toggle section"},showBrandSelector:{control:"boolean",description:"Show brand selector section"},showSummary:{control:"boolean",description:"Show current settings summary"},compact:{control:"boolean",description:"Use compact horizontal layout"}}},a={args:{},render:n=>e.jsx("div",{style:{width:"700px"},children:e.jsx(r,{...n})})},s={args:{showThemeToggle:!0,showBrandSelector:!1,showSummary:!1},render:n=>e.jsx("div",{style:{width:"700px"},children:e.jsx(r,{...n})})},o={args:{showThemeToggle:!1,showBrandSelector:!0,showSummary:!1},render:n=>e.jsx("div",{style:{width:"700px"},children:e.jsx(r,{...n})})},t={args:{showThemeToggle:!0,showBrandSelector:!0,showSummary:!1},render:n=>e.jsx("div",{style:{width:"700px"},children:e.jsx(r,{...n})})},i={args:{compact:!0},render:n=>e.jsx("div",{style:{width:"100%",padding:"var(--spacing-4)",background:"var(--surface-base)"},children:e.jsx(r,{...n})})},d={args:{compact:!0,showThemeToggle:!0,showBrandSelector:!1},render:n=>e.jsx("div",{style:{padding:"var(--spacing-4)",background:"var(--surface-base)"},children:e.jsx(r,{...n})})},c={args:{compact:!0,showThemeToggle:!1,showBrandSelector:!0},render:n=>e.jsx("div",{style:{padding:"var(--spacing-4)",background:"var(--surface-base)"},children:e.jsx(r,{...n})})},l={args:{onThemeChange:n=>console.log("Theme changed to:",n),onBrandChange:n=>console.log("Brand changed to:",n)},render:n=>e.jsxs("div",{style:{width:"700px"},children:[e.jsx("p",{style:{marginBottom:"var(--spacing-4)",fontSize:"var(--font-size-14)",color:"var(--text-secondary)"},children:"Open the console to see callbacks in action"}),e.jsx(r,{...n})]})},g={render:()=>e.jsxs("div",{style:{display:"flex",height:"600px",gap:"var(--spacing-4)"},children:[e.jsxs("div",{style:{width:"300px",padding:"var(--spacing-4)",background:"var(--surface-subtle)",borderRadius:"var(--radius-control)",border:"1px solid var(--border-subtle)"},children:[e.jsx("h3",{style:{margin:"0 0 var(--spacing-4) 0",fontSize:"var(--font-size-16)",fontWeight:"var(--font-weight-medium)"},children:"Settings"}),e.jsx("div",{style:{marginBottom:"var(--spacing-4)"},children:e.jsx(r,{compact:!0,showThemeToggle:!0,showBrandSelector:!0})}),e.jsxs("nav",{children:[e.jsx("div",{style:{padding:"var(--spacing-3)",borderRadius:"var(--radius-sm)",marginBottom:"var(--spacing-2)",cursor:"pointer"},children:"Profile"}),e.jsx("div",{style:{padding:"var(--spacing-3)",borderRadius:"var(--radius-sm)",marginBottom:"var(--spacing-2)",cursor:"pointer"},children:"Security"}),e.jsx("div",{style:{padding:"var(--spacing-3)",borderRadius:"var(--radius-sm)",cursor:"pointer"},children:"Notifications"})]})]}),e.jsxs("div",{style:{flex:1,padding:"var(--spacing-6)",background:"var(--surface-base)",borderRadius:"var(--radius-control)"},children:[e.jsx("h2",{style:{margin:"0 0 var(--spacing-4) 0",fontSize:"var(--font-size-24)",fontWeight:"var(--font-weight-bold)"},children:"Main Content"}),e.jsx("p",{style:{color:"var(--text-secondary)"},children:"The theme controller is embedded in the sidebar for easy access."})]})]})},p={render:()=>e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"var(--spacing-4) var(--spacing-6)",background:"var(--surface-base)",borderBottom:"1px solid var(--border-subtle)"},children:[e.jsx("div",{style:{fontSize:"var(--font-size-20)",fontWeight:"var(--font-weight-bold)"},children:"MyApp"}),e.jsxs("nav",{style:{display:"flex",gap:"var(--spacing-6)",fontSize:"var(--font-size-14)"},children:[e.jsx("span",{style:{cursor:"pointer"},children:"Home"}),e.jsx("span",{style:{cursor:"pointer"},children:"About"}),e.jsx("span",{style:{cursor:"pointer"},children:"Contact"})]}),e.jsx(r,{compact:!0,showThemeToggle:!0})]}),e.jsxs("div",{style:{padding:"var(--spacing-8)"},children:[e.jsx("h2",{style:{margin:"0 0 var(--spacing-4) 0",fontSize:"var(--font-size-24)",fontWeight:"var(--font-weight-bold)"},children:"Page Content"}),e.jsx("p",{style:{color:"var(--text-secondary)"},children:"Theme toggle is integrated into the navbar for quick access."})]})]})},v={render:()=>e.jsxs("div",{style:{width:"800px",padding:"var(--spacing-8)",background:"var(--surface-base)",borderRadius:"var(--radius-control)",border:"1px solid var(--border-subtle)"},children:[e.jsxs("div",{style:{marginBottom:"var(--spacing-8)"},children:[e.jsx("h2",{style:{margin:"0 0 var(--spacing-2) 0",fontSize:"var(--font-size-24)",fontWeight:"var(--font-weight-bold)"},children:"App Settings"}),e.jsx("p",{style:{margin:0,color:"var(--text-secondary)"},children:"Customize your experience"})]}),e.jsxs("div",{style:{marginBottom:"var(--spacing-8)"},children:[e.jsx("h3",{style:{margin:"0 0 var(--spacing-4) 0",fontSize:"var(--font-size-18)",fontWeight:"var(--font-weight-medium)"},children:"Appearance"}),e.jsx(r,{})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 var(--spacing-4) 0",fontSize:"var(--font-size-18)",fontWeight:"var(--font-weight-medium)"},children:"Other Settings"}),e.jsx("div",{style:{padding:"var(--spacing-4)",background:"var(--surface-subtle)",borderRadius:"var(--radius-sm)",fontSize:"var(--font-size-14)",color:"var(--text-secondary)"},children:"Additional settings would go here..."})]})]})},m={render:()=>e.jsxs("div",{style:{position:"relative",width:"600px",height:"400px",background:"var(--surface-subtle)",borderRadius:"var(--radius-control)",padding:"var(--spacing-8)"},children:[e.jsx("h2",{style:{margin:"0 0 var(--spacing-4) 0",fontSize:"var(--font-size-24)",fontWeight:"var(--font-weight-bold)"},children:"Page Content"}),e.jsx("p",{style:{color:"var(--text-secondary)",marginBottom:"var(--spacing-4)"},children:"The theme controller floats in the bottom-right corner for easy access."}),e.jsx("p",{style:{color:"var(--text-secondary)"},children:"This is useful for demo pages or documentation sites where you want users to quickly change themes without navigating away."}),e.jsx("div",{style:{position:"absolute",bottom:"var(--spacing-4)",right:"var(--spacing-4)",boxShadow:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",borderRadius:"var(--radius-control)"},children:e.jsx(r,{compact:!0})})]})},h={render:()=>e.jsx("div",{style:{padding:"var(--spacing-8)",background:"var(--surface-base)"},children:e.jsxs("div",{style:{marginBottom:"var(--spacing-8)"},children:[e.jsx("h2",{style:{margin:"0 0 var(--spacing-4) 0",fontSize:"var(--font-size-24)",fontWeight:"var(--font-weight-bold)"},children:"Article Title"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-4)",marginBottom:"var(--spacing-4)"},children:[e.jsx("span",{style:{fontSize:"var(--font-size-14)",color:"var(--text-secondary)"},children:"Published on Jan 23, 2024"}),e.jsx(r,{compact:!0,showThemeToggle:!0,showBrandSelector:!1,showSummary:!1})]}),e.jsx("p",{style:{color:"var(--text-secondary)",lineHeight:1.6},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})})},u={render:()=>e.jsxs("div",{style:{width:"900px"},children:[e.jsxs("div",{style:{marginBottom:"var(--spacing-8)",textAlign:"center"},children:[e.jsx("h1",{style:{margin:"0 0 var(--spacing-2) 0",fontSize:"var(--font-size-24)",fontWeight:"var(--font-weight-bold)"},children:"Orion Design System"}),e.jsx("p",{style:{margin:0,fontSize:"var(--font-size-18)",color:"var(--text-secondary)"},children:"Try different themes and brands in real-time"})]}),e.jsx(r,{}),e.jsxs("div",{style:{marginTop:"var(--spacing-8)",padding:"var(--spacing-8)",background:"var(--surface-subtle)",borderRadius:"var(--radius-control)"},children:[e.jsx("h3",{style:{margin:"0 0 var(--spacing-4) 0",fontSize:"var(--font-size-20)",fontWeight:"var(--font-weight-medium)"},children:"Sample Components"}),e.jsxs("div",{style:{display:"flex",gap:"var(--spacing-4)",flexWrap:"wrap"},children:[e.jsx("button",{style:{padding:"var(--spacing-3) var(--spacing-6)",borderRadius:"var(--radius-control)",border:"none",background:"var(--interactive-primary)",color:"var(--interactive-primary-text)",cursor:"pointer"},children:"Primary Button"}),e.jsx("button",{style:{padding:"var(--spacing-3) var(--spacing-6)",borderRadius:"var(--radius-control)",border:"1px solid var(--border-subtle)",background:"var(--surface-base)",color:"var(--text-primary)",cursor:"pointer"},children:"Secondary Button"}),e.jsx("div",{style:{padding:"var(--spacing-1) var(--spacing-3)",borderRadius:"var(--radius-control)",background:"var(--interactive-primary)",color:"white",fontSize:"var(--font-size-14)"},children:"Badge"})]})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => <div style={{
    width: '700px'
  }}>
      <ThemeController {...args} />
    </div>
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    showThemeToggle: true,
    showBrandSelector: false,
    showSummary: false
  },
  render: args => <div style={{
    width: '700px'
  }}>
      <ThemeController {...args} />
    </div>
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    showThemeToggle: false,
    showBrandSelector: true,
    showSummary: false
  },
  render: args => <div style={{
    width: '700px'
  }}>
      <ThemeController {...args} />
    </div>
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    showThemeToggle: true,
    showBrandSelector: true,
    showSummary: false
  },
  render: args => <div style={{
    width: '700px'
  }}>
      <ThemeController {...args} />
    </div>
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    compact: true
  },
  render: args => <div style={{
    width: '100%',
    padding: 'var(--spacing-4)',
    background: 'var(--surface-base)'
  }}>
      <ThemeController {...args} />
    </div>
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    compact: true,
    showThemeToggle: true,
    showBrandSelector: false
  },
  render: args => <div style={{
    padding: 'var(--spacing-4)',
    background: 'var(--surface-base)'
  }}>
      <ThemeController {...args} />
    </div>
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    compact: true,
    showThemeToggle: false,
    showBrandSelector: true
  },
  render: args => <div style={{
    padding: 'var(--spacing-4)',
    background: 'var(--surface-base)'
  }}>
      <ThemeController {...args} />
    </div>
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    onThemeChange: (theme: string) => console.log('Theme changed to:', theme),
    onBrandChange: (brand: string) => console.log('Brand changed to:', brand)
  },
  render: args => <div style={{
    width: '700px'
  }}>
      <p style={{
      marginBottom: 'var(--spacing-4)',
      fontSize: 'var(--font-size-14)',
      color: 'var(--text-secondary)'
    }}>
        Open the console to see callbacks in action
      </p>
      <ThemeController {...args} />
    </div>
}`,...l.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    height: '600px',
    gap: 'var(--spacing-4)'
  }}>
      <div style={{
      width: '300px',
      padding: 'var(--spacing-4)',
      background: 'var(--surface-subtle)',
      borderRadius: 'var(--radius-control)',
      border: '1px solid var(--border-subtle)'
    }}>
        <h3 style={{
        margin: '0 0 var(--spacing-4) 0',
        fontSize: 'var(--font-size-16)',
        fontWeight: 'var(--font-weight-medium)'
      }}>Settings</h3>
        <div style={{
        marginBottom: 'var(--spacing-4)'
      }}>
          <ThemeController compact showThemeToggle showBrandSelector />
        </div>
        <nav>
          <div style={{
          padding: 'var(--spacing-3)',
          borderRadius: 'var(--radius-sm)',
          marginBottom: 'var(--spacing-2)',
          cursor: 'pointer'
        }}>
            Profile
          </div>
          <div style={{
          padding: 'var(--spacing-3)',
          borderRadius: 'var(--radius-sm)',
          marginBottom: 'var(--spacing-2)',
          cursor: 'pointer'
        }}>
            Security
          </div>
          <div style={{
          padding: 'var(--spacing-3)',
          borderRadius: 'var(--radius-sm)',
          cursor: 'pointer'
        }}>
            Notifications
          </div>
        </nav>
      </div>
      <div style={{
      flex: 1,
      padding: 'var(--spacing-6)',
      background: 'var(--surface-base)',
      borderRadius: 'var(--radius-control)'
    }}>
        <h2 style={{
        margin: '0 0 var(--spacing-4) 0',
        fontSize: 'var(--font-size-24)',
        fontWeight: 'var(--font-weight-bold)'
      }}>Main Content</h2>
        <p style={{
        color: 'var(--text-secondary)'
      }}>
          The theme controller is embedded in the sidebar for easy access.
        </p>
      </div>
    </div>
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 'var(--spacing-4) var(--spacing-6)',
      background: 'var(--surface-base)',
      borderBottom: '1px solid var(--border-subtle)'
    }}>
        <div style={{
        fontSize: 'var(--font-size-20)',
        fontWeight: 'var(--font-weight-bold)'
      }}>MyApp</div>
        <nav style={{
        display: 'flex',
        gap: 'var(--spacing-6)',
        fontSize: 'var(--font-size-14)'
      }}>
          <span style={{
          cursor: 'pointer'
        }}>Home</span>
          <span style={{
          cursor: 'pointer'
        }}>About</span>
          <span style={{
          cursor: 'pointer'
        }}>Contact</span>
        </nav>
        <ThemeController compact showThemeToggle />
      </div>
      <div style={{
      padding: 'var(--spacing-8)'
    }}>
        <h2 style={{
        margin: '0 0 var(--spacing-4) 0',
        fontSize: 'var(--font-size-24)',
        fontWeight: 'var(--font-weight-bold)'
      }}>Page Content</h2>
        <p style={{
        color: 'var(--text-secondary)'
      }}>
          Theme toggle is integrated into the navbar for quick access.
        </p>
      </div>
    </div>
}`,...p.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '800px',
    padding: 'var(--spacing-8)',
    background: 'var(--surface-base)',
    borderRadius: 'var(--radius-control)',
    border: '1px solid var(--border-subtle)'
  }}>
      <div style={{
      marginBottom: 'var(--spacing-8)'
    }}>
        <h2 style={{
        margin: '0 0 var(--spacing-2) 0',
        fontSize: 'var(--font-size-24)',
        fontWeight: 'var(--font-weight-bold)'
      }}>
          App Settings
        </h2>
        <p style={{
        margin: 0,
        color: 'var(--text-secondary)'
      }}>
          Customize your experience
        </p>
      </div>

      <div style={{
      marginBottom: 'var(--spacing-8)'
    }}>
        <h3 style={{
        margin: '0 0 var(--spacing-4) 0',
        fontSize: 'var(--font-size-18)',
        fontWeight: 'var(--font-weight-medium)'
      }}>
          Appearance
        </h3>
        <ThemeController />
      </div>

      <div>
        <h3 style={{
        margin: '0 0 var(--spacing-4) 0',
        fontSize: 'var(--font-size-18)',
        fontWeight: 'var(--font-weight-medium)'
      }}>
          Other Settings
        </h3>
        <div style={{
        padding: 'var(--spacing-4)',
        background: 'var(--surface-subtle)',
        borderRadius: 'var(--radius-sm)',
        fontSize: 'var(--font-size-14)',
        color: 'var(--text-secondary)'
      }}>
          Additional settings would go here...
        </div>
      </div>
    </div>
}`,...v.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    position: 'relative',
    width: '600px',
    height: '400px',
    background: 'var(--surface-subtle)',
    borderRadius: 'var(--radius-control)',
    padding: 'var(--spacing-8)'
  }}>
      <h2 style={{
      margin: '0 0 var(--spacing-4) 0',
      fontSize: 'var(--font-size-24)',
      fontWeight: 'var(--font-weight-bold)'
    }}>Page Content</h2>
      <p style={{
      color: 'var(--text-secondary)',
      marginBottom: 'var(--spacing-4)'
    }}>
        The theme controller floats in the bottom-right corner for easy access.
      </p>
      <p style={{
      color: 'var(--text-secondary)'
    }}>
        This is useful for demo pages or documentation sites where you want users to quickly
        change themes without navigating away.
      </p>

      <div style={{
      position: 'absolute',
      bottom: 'var(--spacing-4)',
      right: 'var(--spacing-4)',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      borderRadius: 'var(--radius-control)'
    }}>
        <ThemeController compact />
      </div>
    </div>
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 'var(--spacing-8)',
    background: 'var(--surface-base)'
  }}>
      <div style={{
      marginBottom: 'var(--spacing-8)'
    }}>
        <h2 style={{
        margin: '0 0 var(--spacing-4) 0',
        fontSize: 'var(--font-size-24)',
        fontWeight: 'var(--font-weight-bold)'
      }}>
          Article Title
        </h2>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--spacing-4)',
        marginBottom: 'var(--spacing-4)'
      }}>
          <span style={{
          fontSize: 'var(--font-size-14)',
          color: 'var(--text-secondary)'
        }}>
            Published on Jan 23, 2024
          </span>
          <ThemeController compact showThemeToggle showBrandSelector={false} showSummary={false} />
        </div>
        <p style={{
        color: 'var(--text-secondary)',
        lineHeight: 1.6
      }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '900px'
  }}>
      <div style={{
      marginBottom: 'var(--spacing-8)',
      textAlign: 'center'
    }}>
        <h1 style={{
        margin: '0 0 var(--spacing-2) 0',
        fontSize: 'var(--font-size-24)',
        fontWeight: 'var(--font-weight-bold)'
      }}>
          Orion Design System
        </h1>
        <p style={{
        margin: 0,
        fontSize: 'var(--font-size-18)',
        color: 'var(--text-secondary)'
      }}>
          Try different themes and brands in real-time
        </p>
      </div>

      <ThemeController />

      <div style={{
      marginTop: 'var(--spacing-8)',
      padding: 'var(--spacing-8)',
      background: 'var(--surface-subtle)',
      borderRadius: 'var(--radius-control)'
    }}>
        <h3 style={{
        margin: '0 0 var(--spacing-4) 0',
        fontSize: 'var(--font-size-20)',
        fontWeight: 'var(--font-weight-medium)'
      }}>
          Sample Components
        </h3>
        <div style={{
        display: 'flex',
        gap: 'var(--spacing-4)',
        flexWrap: 'wrap'
      }}>
          <button style={{
          padding: 'var(--spacing-3) var(--spacing-6)',
          borderRadius: 'var(--radius-control)',
          border: 'none',
          background: 'var(--interactive-primary)',
          color: 'var(--interactive-primary-text)',
          cursor: 'pointer'
        }}>
            Primary Button
          </button>
          <button style={{
          padding: 'var(--spacing-3) var(--spacing-6)',
          borderRadius: 'var(--radius-control)',
          border: '1px solid var(--border-subtle)',
          background: 'var(--surface-base)',
          color: 'var(--text-primary)',
          cursor: 'pointer'
        }}>
            Secondary Button
          </button>
          <div style={{
          padding: 'var(--spacing-1) var(--spacing-3)',
          borderRadius: 'var(--radius-control)',
          background: 'var(--interactive-primary)',
          color: 'white',
          fontSize: 'var(--font-size-14)'
        }}>
            Badge
          </div>
        </div>
      </div>
    </div>
}`,...u.parameters?.docs?.source}}};const M=["Default","ThemeToggleOnly","BrandSelectorOnly","WithoutSummary","CompactMode","CompactThemeOnly","CompactBrandsOnly","WithCallbacks","InSidebar","InNavbar","SettingsPanel","FloatingControl","MinimalControl","DemoShowcase"];export{o as BrandSelectorOnly,c as CompactBrandsOnly,i as CompactMode,d as CompactThemeOnly,a as Default,u as DemoShowcase,m as FloatingControl,p as InNavbar,g as InSidebar,h as MinimalControl,v as SettingsPanel,s as ThemeToggleOnly,l as WithCallbacks,t as WithoutSummary,M as __namedExportsOrder,I as default};
