import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as y}from"./index-Bi6L2ga8.js";import{S as a}from"./Switch-BQ1qsiMs.js";import"./circle-alert-BMPEDkj1.js";import"./createLucideIcon-DprCCbyf.js";const F={title:"Components/Forms/Switch",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Switch size"},disabled:{control:"boolean",description:"Disable switch"}}},o={args:{label:"Enable notifications"}},n={args:{label:"Enabled by default",defaultChecked:!0}},l={args:{label:"Dark mode",helperText:"Use dark theme across the app"}},c={args:{label:"Disabled switch",disabled:!0}},d={args:{label:"Disabled and on",disabled:!0,defaultChecked:!0}},p={args:{label:"Small switch",size:"sm"}},u={args:{label:"Large switch",size:"lg"}},h={render:()=>{const[r,i]=y.useState(!1);return e.jsxs("div",{children:[e.jsx(a,{label:"Toggle me",checked:r,onChange:s=>i(s.target.checked)}),e.jsxs("p",{style:{marginTop:"var(--spacing-4)",fontSize:"var(--font-size-14)",color:"var(--text-secondary)"},children:["Status: ",r?"ON ✓":"OFF"]})]})}},m={render:()=>{const[r,i]=y.useState({notifications:!0,autoSave:!1,darkMode:!1,analytics:!0}),s=(t,k)=>{i(w=>({...w,[t]:k}))};return e.jsxs("div",{style:{width:"320px",padding:"var(--spacing-6)",borderRadius:"var(--radius-control)",border:"1px solid var(--border-subtle)"},children:[e.jsx("h3",{style:{marginBottom:"var(--spacing-6)",fontSize:"var(--font-size-16)",fontWeight:"var(--font-weight-medium)"},children:"Settings"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-6)"},children:[e.jsx(a,{label:"Enable notifications",helperText:"Receive email notifications",checked:r.notifications,onChange:t=>s("notifications",t.target.checked)}),e.jsx(a,{label:"Auto-save",helperText:"Automatically save changes",checked:r.autoSave,onChange:t=>s("autoSave",t.target.checked)}),e.jsx(a,{label:"Dark mode",helperText:"Use dark theme",checked:r.darkMode,onChange:t=>s("darkMode",t.target.checked)}),e.jsx(a,{label:"Analytics",helperText:"Share usage data",checked:r.analytics,onChange:t=>s("analytics",t.target.checked)})]})]})}},g={render:()=>{const[r,i]=y.useState({experimental:!1,betaFeatures:!1,advancedMode:!1});return e.jsxs("div",{style:{width:"400px",padding:"var(--spacing-8)",borderRadius:"var(--radius-control)",border:"1px solid var(--border-subtle)"},children:[e.jsx("h3",{style:{marginBottom:"var(--spacing-4)",fontSize:"var(--font-size-18)",fontWeight:"var(--font-weight-medium)"},children:"Feature Flags"}),e.jsx("p",{style:{marginBottom:"var(--spacing-8)",fontSize:"var(--font-size-14)",color:"var(--text-secondary)"},children:"Enable experimental features"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-6)"},children:[e.jsx(a,{label:"Experimental Features",helperText:"Try new features before release",checked:r.experimental,onChange:s=>i(t=>({...t,experimental:s.target.checked}))}),e.jsx(a,{label:"Beta Features",helperText:"Access beta functionality",checked:r.betaFeatures,onChange:s=>i(t=>({...t,betaFeatures:s.target.checked}))}),e.jsx(a,{label:"Advanced Mode",helperText:"Show advanced options",checked:r.advancedMode,onChange:s=>i(t=>({...t,advancedMode:s.target.checked}))})]})]})}},b={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-8)"},children:[e.jsx(a,{label:"Small switch",size:"sm"}),e.jsx(a,{label:"Medium switch (default)",size:"md"}),e.jsx(a,{label:"Large switch",size:"lg"})]})},v={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-6)"},children:[e.jsx(a,{label:"Off (default)"}),e.jsx(a,{label:"On",defaultChecked:!0}),e.jsx(a,{label:"With helper text",helperText:"Additional information"}),e.jsx(a,{label:"Disabled off",disabled:!0}),e.jsx(a,{label:"Disabled on",disabled:!0,defaultChecked:!0})]})},f={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-4)"},children:[e.jsx(a,{label:"Compact option 1",size:"sm"}),e.jsx(a,{label:"Compact option 2",size:"sm"}),e.jsx(a,{label:"Compact option 3",size:"sm"}),e.jsx(a,{label:"Compact option 4",size:"sm"})]})},x={render:()=>e.jsxs("div",{style:{width:"400px",padding:"var(--spacing-6)",borderRadius:"var(--radius-control)",border:"1px solid var(--border-subtle)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:"var(--font-weight-medium)",marginBottom:"var(--spacing-1)"},children:"Push Notifications"}),e.jsx("div",{style:{fontSize:"var(--font-size-14)",color:"var(--text-secondary)"},children:"Receive notifications on your device"})]}),e.jsx(a,{label:""})]})},S={args:{label:"Custom styled switch",helperText:"This switch has custom styling",className:"custom-switch"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Enable notifications'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Enabled by default',
    defaultChecked: true
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Dark mode',
    helperText: 'Use dark theme across the app'
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled switch',
    disabled: true
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled and on',
    disabled: true,
    defaultChecked: true
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Small switch',
    size: 'sm'
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Large switch',
    size: 'lg'
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [enabled, setEnabled] = useState(false);
    return <div>
        <Switch label="Toggle me" checked={enabled} onChange={e => setEnabled(e.target.checked)} />
        <p style={{
        marginTop: 'var(--spacing-4)',
        fontSize: 'var(--font-size-14)',
        color: 'var(--text-secondary)'
      }}>
          Status: {enabled ? 'ON ✓' : 'OFF'}
        </p>
      </div>;
  }
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [settings, setSettings] = useState({
      notifications: true,
      autoSave: false,
      darkMode: false,
      analytics: true
    });
    const updateSetting = (key: keyof typeof settings, value: boolean) => {
      setSettings(prev => ({
        ...prev,
        [key]: value
      }));
    };
    return <div style={{
      width: '320px',
      padding: 'var(--spacing-6)',
      borderRadius: 'var(--radius-control)',
      border: '1px solid var(--border-subtle)'
    }}>
        <h3 style={{
        marginBottom: 'var(--spacing-6)',
        fontSize: 'var(--font-size-16)',
        fontWeight: 'var(--font-weight-medium)'
      }}>
          Settings
        </h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-6)'
      }}>
          <Switch label="Enable notifications" helperText="Receive email notifications" checked={settings.notifications} onChange={e => updateSetting('notifications', e.target.checked)} />
          <Switch label="Auto-save" helperText="Automatically save changes" checked={settings.autoSave} onChange={e => updateSetting('autoSave', e.target.checked)} />
          <Switch label="Dark mode" helperText="Use dark theme" checked={settings.darkMode} onChange={e => updateSetting('darkMode', e.target.checked)} />
          <Switch label="Analytics" helperText="Share usage data" checked={settings.analytics} onChange={e => updateSetting('analytics', e.target.checked)} />
        </div>
      </div>;
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [features, setFeatures] = useState({
      experimental: false,
      betaFeatures: false,
      advancedMode: false
    });
    return <div style={{
      width: '400px',
      padding: 'var(--spacing-8)',
      borderRadius: 'var(--radius-control)',
      border: '1px solid var(--border-subtle)'
    }}>
        <h3 style={{
        marginBottom: 'var(--spacing-4)',
        fontSize: 'var(--font-size-18)',
        fontWeight: 'var(--font-weight-medium)'
      }}>
          Feature Flags
        </h3>
        <p style={{
        marginBottom: 'var(--spacing-8)',
        fontSize: 'var(--font-size-14)',
        color: 'var(--text-secondary)'
      }}>
          Enable experimental features
        </p>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-6)'
      }}>
          <Switch label="Experimental Features" helperText="Try new features before release" checked={features.experimental} onChange={e => setFeatures(prev => ({
          ...prev,
          experimental: e.target.checked
        }))} />
          <Switch label="Beta Features" helperText="Access beta functionality" checked={features.betaFeatures} onChange={e => setFeatures(prev => ({
          ...prev,
          betaFeatures: e.target.checked
        }))} />
          <Switch label="Advanced Mode" helperText="Show advanced options" checked={features.advancedMode} onChange={e => setFeatures(prev => ({
          ...prev,
          advancedMode: e.target.checked
        }))} />
        </div>
      </div>;
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-8)'
  }}>
      <Switch label="Small switch" size="sm" />
      <Switch label="Medium switch (default)" size="md" />
      <Switch label="Large switch" size="lg" />
    </div>
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-6)'
  }}>
      <Switch label="Off (default)" />
      <Switch label="On" defaultChecked />
      <Switch label="With helper text" helperText="Additional information" />
      <Switch label="Disabled off" disabled />
      <Switch label="Disabled on" disabled defaultChecked />
    </div>
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-4)'
  }}>
      <Switch label="Compact option 1" size="sm" />
      <Switch label="Compact option 2" size="sm" />
      <Switch label="Compact option 3" size="sm" />
      <Switch label="Compact option 4" size="sm" />
    </div>
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '400px',
    padding: 'var(--spacing-6)',
    borderRadius: 'var(--radius-control)',
    border: '1px solid var(--border-subtle)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }}>
      <div>
        <div style={{
        fontWeight: 'var(--font-weight-medium)',
        marginBottom: 'var(--spacing-1)'
      }}>Push Notifications</div>
        <div style={{
        fontSize: 'var(--font-size-14)',
        color: 'var(--text-secondary)'
      }}>
          Receive notifications on your device
        </div>
      </div>
      <Switch label="" />
    </div>
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Custom styled switch',
    helperText: 'This switch has custom styling',
    className: 'custom-switch'
  }
}`,...S.parameters?.docs?.source}}};const A=["Default","Checked","WithHelperText","Disabled","DisabledChecked","SmallSize","LargeSize","Interactive","SettingsPanel","FeatureToggles","AllSizes","AllStates","CompactLayout","InlineWithContent","WithCustomStyling"];export{b as AllSizes,v as AllStates,n as Checked,f as CompactLayout,o as Default,c as Disabled,d as DisabledChecked,g as FeatureToggles,x as InlineWithContent,h as Interactive,u as LargeSize,m as SettingsPanel,p as SmallSize,S as WithCustomStyling,l as WithHelperText,A as __namedExportsOrder,F as default};
