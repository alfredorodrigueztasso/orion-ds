import{j as e}from"./jsx-runtime-u17CrQMm.js";import{T as r}from"./Tooltip-CM6dVaRh.js";import"./index-Bi6L2ga8.js";const j={title:"Components/Overlay/Tooltip",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{placement:{control:"select",options:["top","right","bottom","left"],description:"Tooltip placement"},delay:{control:"number",description:"Delay before showing (ms)"},disabled:{control:"boolean",description:"Disable tooltip"}}},a={args:{content:"This is a tooltip",children:e.jsx("button",{style:{padding:"var(--spacing-3) var(--spacing-6)",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-subtle)",background:"var(--surface-base)",cursor:"pointer"},children:"Hover me"})}},n={args:{content:"Tooltip on top",placement:"top",children:e.jsx("button",{style:{padding:"var(--spacing-3) var(--spacing-6)",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-subtle)",background:"var(--surface-base)",cursor:"pointer"},children:"Top"})}},o={args:{content:"Tooltip on right",placement:"right",children:e.jsx("button",{style:{padding:"var(--spacing-3) var(--spacing-6)",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-subtle)",background:"var(--surface-base)",cursor:"pointer"},children:"Right"})}},s={args:{content:"Tooltip on bottom",placement:"bottom",children:e.jsx("button",{style:{padding:"var(--spacing-3) var(--spacing-6)",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-subtle)",background:"var(--surface-base)",cursor:"pointer"},children:"Bottom"})}},i={args:{content:"Tooltip on left",placement:"left",children:e.jsx("button",{style:{padding:"var(--spacing-3) var(--spacing-6)",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-subtle)",background:"var(--surface-base)",cursor:"pointer"},children:"Left"})}},d={args:{content:"This tooltip is disabled",disabled:!0,children:e.jsx("button",{style:{padding:"var(--spacing-3) var(--spacing-6)",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-subtle)",background:"var(--surface-layer)",cursor:"not-allowed"},children:"Disabled"})}},l={args:{content:"Tooltip with 1 second delay",delay:1e3,children:e.jsx("button",{style:{padding:"var(--spacing-3) var(--spacing-6)",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-subtle)",background:"var(--surface-base)",cursor:"pointer"},children:"Slow tooltip"})}},c={args:{content:"This is a longer tooltip message that provides more detailed information about the button",children:e.jsx("button",{style:{padding:"var(--spacing-3) var(--spacing-6)",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-subtle)",background:"var(--surface-base)",cursor:"pointer"},children:"Long tooltip"})}},p={args:{content:"Tooltip",children:e.jsx("span",{children:"Hover"})},render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--spacing-4)"},children:[e.jsx(r,{content:"Information",children:e.jsx("button",{style:{width:"40px",height:"40px",borderRadius:"50%",border:"1px solid var(--border-subtle)",background:"var(--surface-base)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"var(--font-size-18)"},"aria-label":"Info",children:"ℹ️"})}),e.jsx(r,{content:"Settings",children:e.jsx("button",{style:{width:"40px",height:"40px",borderRadius:"50%",border:"1px solid var(--border-subtle)",background:"var(--surface-base)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"var(--font-size-18)"},"aria-label":"Settings",children:"⚙️"})}),e.jsx(r,{content:"Delete",children:e.jsx("button",{style:{width:"40px",height:"40px",borderRadius:"50%",border:"1px solid var(--border-subtle)",background:"var(--surface-base)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"var(--font-size-18)"},"aria-label":"Delete",children:"🗑️"})})]})},u={args:{content:"Tooltip",children:e.jsx("span",{children:"Hover"})},render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"var(--spacing-12)",padding:"var(--spacing-16)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(r,{content:"Top placement",placement:"top",children:e.jsx("button",{style:{padding:"var(--spacing-3) var(--spacing-6)",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-subtle)",background:"var(--surface-base)",cursor:"pointer"},children:"Top"})})}),e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(r,{content:"Right placement",placement:"right",children:e.jsx("button",{style:{padding:"var(--spacing-3) var(--spacing-6)",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-subtle)",background:"var(--surface-base)",cursor:"pointer"},children:"Right"})})}),e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(r,{content:"Bottom placement",placement:"bottom",children:e.jsx("button",{style:{padding:"var(--spacing-3) var(--spacing-6)",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-subtle)",background:"var(--surface-base)",cursor:"pointer"},children:"Bottom"})})}),e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(r,{content:"Left placement",placement:"left",children:e.jsx("button",{style:{padding:"var(--spacing-3) var(--spacing-6)",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-subtle)",background:"var(--surface-base)",cursor:"pointer"},children:"Left"})})})]})},b={args:{content:"Tooltip",children:e.jsx("span",{children:"Hover"})},render:()=>e.jsxs("div",{style:{width:"400px",padding:"var(--spacing-8)",borderRadius:"var(--radius-control)",border:"1px solid var(--border-subtle)",background:"var(--surface-base)"},children:[e.jsx("h3",{style:{margin:"0 0 var(--spacing-6) 0",fontSize:"var(--font-size-18)",fontWeight:"var(--font-weight-medium)"},children:"User Registration"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-6)"},children:[e.jsxs("div",{children:[e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)",marginBottom:"var(--spacing-2)",fontSize:"var(--font-size-14)",fontWeight:"var(--font-weight-medium)"},children:["Username",e.jsx(r,{content:"Username must be unique and contain only letters and numbers",placement:"right",children:e.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"16px",height:"16px",borderRadius:"50%",background:"var(--interactive-primary)",color:"var(--interactive-primary-text)",fontSize:"var(--font-size-12)",cursor:"help"},children:"?"})})]}),e.jsx("input",{type:"text",style:{width:"100%",padding:"var(--spacing-3)",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-subtle)",fontSize:"var(--font-size-14)"},placeholder:"Enter username"})]}),e.jsxs("div",{children:[e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)",marginBottom:"var(--spacing-2)",fontSize:"var(--font-size-14)",fontWeight:"var(--font-weight-medium)"},children:["Password",e.jsx(r,{content:"Password must be at least 8 characters with uppercase, lowercase, and numbers",placement:"right",children:e.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"16px",height:"16px",borderRadius:"50%",background:"var(--interactive-primary)",color:"var(--interactive-primary-text)",fontSize:"var(--font-size-12)",cursor:"help"},children:"?"})})]}),e.jsx("input",{type:"password",style:{width:"100%",padding:"var(--spacing-3)",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-subtle)",fontSize:"var(--font-size-14)"},placeholder:"Enter password"})]})]})]})},v={args:{content:"Tooltip",children:e.jsx("span",{children:"Hover"})},render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--spacing-2)"},children:[e.jsx(r,{content:"Save changes",placement:"top",children:e.jsx("button",{style:{padding:"var(--spacing-3) var(--spacing-4)",borderRadius:"var(--radius-sm)",border:"none",background:"var(--status-success)",color:"var(--surface-base)",cursor:"pointer",fontSize:"var(--font-size-14)"},children:"Save"})}),e.jsx(r,{content:"Cancel and discard changes",placement:"top",children:e.jsx("button",{style:{padding:"var(--spacing-3) var(--spacing-4)",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-subtle)",background:"var(--surface-base)",cursor:"pointer",fontSize:"var(--font-size-14)"},children:"Cancel"})}),e.jsx(r,{content:"Delete permanently (cannot be undone)",placement:"top",children:e.jsx("button",{style:{padding:"var(--spacing-3) var(--spacing-4)",borderRadius:"var(--radius-sm)",border:"none",background:"var(--status-error)",color:"var(--surface-base)",cursor:"pointer",fontSize:"var(--font-size-14)"},children:"Delete"})})]})},g={args:{content:"Tooltip",children:e.jsx("span",{children:"Hover"})},render:()=>e.jsx("div",{style:{display:"flex",gap:"var(--spacing-1)",padding:"var(--spacing-2)",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-subtle)",background:"var(--surface-base)"},children:[{icon:"B",label:"Bold"},{icon:"I",label:"Italic"},{icon:"U",label:"Underline"},{icon:"≡",label:"Align left"},{icon:"☰",label:"Align center"},{icon:"🔗",label:"Insert link"},{icon:"📷",label:"Insert image"}].map(t=>e.jsx(r,{content:t.label,placement:"bottom",children:e.jsx("button",{style:{width:"36px",height:"36px",borderRadius:"var(--radius-sm)",border:"none",background:"transparent",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"var(--font-size-16)",fontWeight:t.icon.match(/[BIU]/)?"var(--font-weight-bold)":"normal",fontStyle:t.icon==="I"?"italic":"normal"},onMouseEnter:f=>{f.currentTarget.style.background="var(--surface-layer)"},onMouseLeave:f=>{f.currentTarget.style.background="transparent"},children:t.icon})},t.label))})},m={args:{content:"Tooltip",children:e.jsx("span",{children:"Hover"})},render:()=>e.jsxs("div",{style:{width:"500px",padding:"var(--spacing-8)",borderRadius:"var(--radius-control)",border:"1px solid var(--border-subtle)",background:"var(--surface-base)"},children:[e.jsx("h3",{style:{margin:"0 0 var(--spacing-6) 0",fontSize:"var(--font-size-18)",fontWeight:"var(--font-weight-medium)"},children:"Performance Metrics"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"var(--spacing-4)"},children:[e.jsx(r,{content:"Total revenue for the current month",placement:"top",children:e.jsxs("div",{style:{padding:"var(--spacing-6)",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-subtle)",textAlign:"center",cursor:"help"},children:[e.jsx("div",{style:{fontSize:"var(--font-size-24)",fontWeight:"var(--font-weight-bold)"},children:"$45.2K"}),e.jsx("div",{style:{fontSize:"var(--font-size-14)",color:"var(--text-secondary)",marginTop:"var(--spacing-1)"},children:"Revenue"})]})}),e.jsx(r,{content:"Active users in the last 30 days",placement:"top",children:e.jsxs("div",{style:{padding:"var(--spacing-6)",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-subtle)",textAlign:"center",cursor:"help"},children:[e.jsx("div",{style:{fontSize:"var(--font-size-24)",fontWeight:"var(--font-weight-bold)"},children:"1,234"}),e.jsx("div",{style:{fontSize:"var(--font-size-14)",color:"var(--text-secondary)",marginTop:"var(--spacing-1)"},children:"Users"})]})}),e.jsx(r,{content:"Total number of completed orders",placement:"top",children:e.jsxs("div",{style:{padding:"var(--spacing-6)",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-subtle)",textAlign:"center",cursor:"help"},children:[e.jsx("div",{style:{fontSize:"var(--font-size-24)",fontWeight:"var(--font-weight-bold)"},children:"567"}),e.jsx("div",{style:{fontSize:"var(--font-size-14)",color:"var(--text-secondary)",marginTop:"var(--spacing-1)"},children:"Orders"})]})})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'This is a tooltip',
    children: <button style={{
      padding: 'var(--spacing-3) var(--spacing-6)',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-subtle)',
      background: 'var(--surface-base)',
      cursor: 'pointer'
    }}>Hover me</button>
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Tooltip on top',
    placement: 'top',
    children: <button style={{
      padding: 'var(--spacing-3) var(--spacing-6)',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-subtle)',
      background: 'var(--surface-base)',
      cursor: 'pointer'
    }}>Top</button>
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Tooltip on right',
    placement: 'right',
    children: <button style={{
      padding: 'var(--spacing-3) var(--spacing-6)',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-subtle)',
      background: 'var(--surface-base)',
      cursor: 'pointer'
    }}>Right</button>
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Tooltip on bottom',
    placement: 'bottom',
    children: <button style={{
      padding: 'var(--spacing-3) var(--spacing-6)',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-subtle)',
      background: 'var(--surface-base)',
      cursor: 'pointer'
    }}>Bottom</button>
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Tooltip on left',
    placement: 'left',
    children: <button style={{
      padding: 'var(--spacing-3) var(--spacing-6)',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-subtle)',
      background: 'var(--surface-base)',
      cursor: 'pointer'
    }}>Left</button>
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'This tooltip is disabled',
    disabled: true,
    children: <button style={{
      padding: 'var(--spacing-3) var(--spacing-6)',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-subtle)',
      background: 'var(--surface-layer)',
      cursor: 'not-allowed'
    }}>Disabled</button>
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Tooltip with 1 second delay',
    delay: 1000,
    children: <button style={{
      padding: 'var(--spacing-3) var(--spacing-6)',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-subtle)',
      background: 'var(--surface-base)',
      cursor: 'pointer'
    }}>Slow tooltip</button>
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'This is a longer tooltip message that provides more detailed information about the button',
    children: <button style={{
      padding: 'var(--spacing-3) var(--spacing-6)',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-subtle)',
      background: 'var(--surface-base)',
      cursor: 'pointer'
    }}>Long tooltip</button>
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Tooltip',
    children: <span>Hover</span>
  },
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--spacing-4)'
  }}>
      <Tooltip content="Information">
        <button style={{
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        border: '1px solid var(--border-subtle)',
        background: 'var(--surface-base)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'var(--font-size-18)'
      }} aria-label="Info">
          ℹ️
        </button>
      </Tooltip>
      <Tooltip content="Settings">
        <button style={{
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        border: '1px solid var(--border-subtle)',
        background: 'var(--surface-base)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'var(--font-size-18)'
      }} aria-label="Settings">
          ⚙️
        </button>
      </Tooltip>
      <Tooltip content="Delete">
        <button style={{
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        border: '1px solid var(--border-subtle)',
        background: 'var(--surface-base)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'var(--font-size-18)'
      }} aria-label="Delete">
          🗑️
        </button>
      </Tooltip>
    </div>
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Tooltip',
    children: <span>Hover</span>
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: 'var(--spacing-12)',
    padding: 'var(--spacing-16)'
  }}>
      <div style={{
      display: 'flex',
      justifyContent: 'center'
    }}>
        <Tooltip content="Top placement" placement="top">
          <button style={{
          padding: 'var(--spacing-3) var(--spacing-6)',
          borderRadius: 'var(--radius-sm)',
          border: '1px solid var(--border-subtle)',
          background: 'var(--surface-base)',
          cursor: 'pointer'
        }}>Top</button>
        </Tooltip>
      </div>
      <div style={{
      display: 'flex',
      justifyContent: 'center'
    }}>
        <Tooltip content="Right placement" placement="right">
          <button style={{
          padding: 'var(--spacing-3) var(--spacing-6)',
          borderRadius: 'var(--radius-sm)',
          border: '1px solid var(--border-subtle)',
          background: 'var(--surface-base)',
          cursor: 'pointer'
        }}>Right</button>
        </Tooltip>
      </div>
      <div style={{
      display: 'flex',
      justifyContent: 'center'
    }}>
        <Tooltip content="Bottom placement" placement="bottom">
          <button style={{
          padding: 'var(--spacing-3) var(--spacing-6)',
          borderRadius: 'var(--radius-sm)',
          border: '1px solid var(--border-subtle)',
          background: 'var(--surface-base)',
          cursor: 'pointer'
        }}>Bottom</button>
        </Tooltip>
      </div>
      <div style={{
      display: 'flex',
      justifyContent: 'center'
    }}>
        <Tooltip content="Left placement" placement="left">
          <button style={{
          padding: 'var(--spacing-3) var(--spacing-6)',
          borderRadius: 'var(--radius-sm)',
          border: '1px solid var(--border-subtle)',
          background: 'var(--surface-base)',
          cursor: 'pointer'
        }}>Left</button>
        </Tooltip>
      </div>
    </div>
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Tooltip',
    children: <span>Hover</span>
  },
  render: () => <div style={{
    width: '400px',
    padding: 'var(--spacing-8)',
    borderRadius: 'var(--radius-control)',
    border: '1px solid var(--border-subtle)',
    background: 'var(--surface-base)'
  }}>
      <h3 style={{
      margin: '0 0 var(--spacing-6) 0',
      fontSize: 'var(--font-size-18)',
      fontWeight: 'var(--font-weight-medium)'
    }}>
        User Registration
      </h3>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-6)'
    }}>
        <div>
          <label style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--spacing-2)',
          marginBottom: 'var(--spacing-2)',
          fontSize: 'var(--font-size-14)',
          fontWeight: 'var(--font-weight-medium)'
        }}>
            Username
            <Tooltip content="Username must be unique and contain only letters and numbers" placement="right">
              <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '16px',
              height: '16px',
              borderRadius: '50%',
              background: 'var(--interactive-primary)',
              color: 'var(--interactive-primary-text)',
              fontSize: 'var(--font-size-12)',
              cursor: 'help'
            }}>
                ?
              </span>
            </Tooltip>
          </label>
          <input type="text" style={{
          width: '100%',
          padding: 'var(--spacing-3)',
          borderRadius: 'var(--radius-sm)',
          border: '1px solid var(--border-subtle)',
          fontSize: 'var(--font-size-14)'
        }} placeholder="Enter username" />
        </div>
        <div>
          <label style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--spacing-2)',
          marginBottom: 'var(--spacing-2)',
          fontSize: 'var(--font-size-14)',
          fontWeight: 'var(--font-weight-medium)'
        }}>
            Password
            <Tooltip content="Password must be at least 8 characters with uppercase, lowercase, and numbers" placement="right">
              <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '16px',
              height: '16px',
              borderRadius: '50%',
              background: 'var(--interactive-primary)',
              color: 'var(--interactive-primary-text)',
              fontSize: 'var(--font-size-12)',
              cursor: 'help'
            }}>
                ?
              </span>
            </Tooltip>
          </label>
          <input type="password" style={{
          width: '100%',
          padding: 'var(--spacing-3)',
          borderRadius: 'var(--radius-sm)',
          border: '1px solid var(--border-subtle)',
          fontSize: 'var(--font-size-14)'
        }} placeholder="Enter password" />
        </div>
      </div>
    </div>
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Tooltip',
    children: <span>Hover</span>
  },
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--spacing-2)'
  }}>
      <Tooltip content="Save changes" placement="top">
        <button style={{
        padding: 'var(--spacing-3) var(--spacing-4)',
        borderRadius: 'var(--radius-sm)',
        border: 'none',
        background: 'var(--status-success)',
        color: 'var(--surface-base)',
        cursor: 'pointer',
        fontSize: 'var(--font-size-14)'
      }}>
          Save
        </button>
      </Tooltip>
      <Tooltip content="Cancel and discard changes" placement="top">
        <button style={{
        padding: 'var(--spacing-3) var(--spacing-4)',
        borderRadius: 'var(--radius-sm)',
        border: '1px solid var(--border-subtle)',
        background: 'var(--surface-base)',
        cursor: 'pointer',
        fontSize: 'var(--font-size-14)'
      }}>
          Cancel
        </button>
      </Tooltip>
      <Tooltip content="Delete permanently (cannot be undone)" placement="top">
        <button style={{
        padding: 'var(--spacing-3) var(--spacing-4)',
        borderRadius: 'var(--radius-sm)',
        border: 'none',
        background: 'var(--status-error)',
        color: 'var(--surface-base)',
        cursor: 'pointer',
        fontSize: 'var(--font-size-14)'
      }}>
          Delete
        </button>
      </Tooltip>
    </div>
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Tooltip',
    children: <span>Hover</span>
  },
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--spacing-1)',
    padding: 'var(--spacing-2)',
    borderRadius: 'var(--radius-sm)',
    border: '1px solid var(--border-subtle)',
    background: 'var(--surface-base)'
  }}>
      {[{
      icon: 'B',
      label: 'Bold'
    }, {
      icon: 'I',
      label: 'Italic'
    }, {
      icon: 'U',
      label: 'Underline'
    }, {
      icon: '≡',
      label: 'Align left'
    }, {
      icon: '☰',
      label: 'Align center'
    }, {
      icon: '🔗',
      label: 'Insert link'
    }, {
      icon: '📷',
      label: 'Insert image'
    }].map(tool => <Tooltip key={tool.label} content={tool.label} placement="bottom">
          <button style={{
        width: '36px',
        height: '36px',
        borderRadius: 'var(--radius-sm)',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'var(--font-size-16)',
        fontWeight: tool.icon.match(/[BIU]/) ? 'var(--font-weight-bold)' : 'normal',
        fontStyle: tool.icon === 'I' ? 'italic' : 'normal'
      }} onMouseEnter={e => {
        e.currentTarget.style.background = 'var(--surface-layer)';
      }} onMouseLeave={e => {
        e.currentTarget.style.background = 'transparent';
      }}>
            {tool.icon}
          </button>
        </Tooltip>)}
    </div>
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Tooltip',
    children: <span>Hover</span>
  },
  render: () => <div style={{
    width: '500px',
    padding: 'var(--spacing-8)',
    borderRadius: 'var(--radius-control)',
    border: '1px solid var(--border-subtle)',
    background: 'var(--surface-base)'
  }}>
      <h3 style={{
      margin: '0 0 var(--spacing-6) 0',
      fontSize: 'var(--font-size-18)',
      fontWeight: 'var(--font-weight-medium)'
    }}>
        Performance Metrics
      </h3>
      <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--spacing-4)'
    }}>
        <Tooltip content="Total revenue for the current month" placement="top">
          <div style={{
          padding: 'var(--spacing-6)',
          borderRadius: 'var(--radius-sm)',
          border: '1px solid var(--border-subtle)',
          textAlign: 'center',
          cursor: 'help'
        }}>
            <div style={{
            fontSize: 'var(--font-size-24)',
            fontWeight: 'var(--font-weight-bold)'
          }}>$45.2K</div>
            <div style={{
            fontSize: 'var(--font-size-14)',
            color: 'var(--text-secondary)',
            marginTop: 'var(--spacing-1)'
          }}>Revenue</div>
          </div>
        </Tooltip>
        <Tooltip content="Active users in the last 30 days" placement="top">
          <div style={{
          padding: 'var(--spacing-6)',
          borderRadius: 'var(--radius-sm)',
          border: '1px solid var(--border-subtle)',
          textAlign: 'center',
          cursor: 'help'
        }}>
            <div style={{
            fontSize: 'var(--font-size-24)',
            fontWeight: 'var(--font-weight-bold)'
          }}>1,234</div>
            <div style={{
            fontSize: 'var(--font-size-14)',
            color: 'var(--text-secondary)',
            marginTop: 'var(--spacing-1)'
          }}>Users</div>
          </div>
        </Tooltip>
        <Tooltip content="Total number of completed orders" placement="top">
          <div style={{
          padding: 'var(--spacing-6)',
          borderRadius: 'var(--radius-sm)',
          border: '1px solid var(--border-subtle)',
          textAlign: 'center',
          cursor: 'help'
        }}>
            <div style={{
            fontSize: 'var(--font-size-24)',
            fontWeight: 'var(--font-weight-bold)'
          }}>567</div>
            <div style={{
            fontSize: 'var(--font-size-14)',
            color: 'var(--text-secondary)',
            marginTop: 'var(--spacing-1)'
          }}>Orders</div>
          </div>
        </Tooltip>
      </div>
    </div>
}`,...m.parameters?.docs?.source}}};const T=["Default","TopPlacement","RightPlacement","BottomPlacement","LeftPlacement","Disabled","CustomDelay","LongContent","WithIconButton","AllPlacements","InForm","ActionButtons","Toolbar","DataPoints"];export{v as ActionButtons,u as AllPlacements,s as BottomPlacement,l as CustomDelay,m as DataPoints,a as Default,d as Disabled,b as InForm,i as LeftPlacement,c as LongContent,o as RightPlacement,g as Toolbar,n as TopPlacement,p as WithIconButton,T as __namedExportsOrder,j as default};
