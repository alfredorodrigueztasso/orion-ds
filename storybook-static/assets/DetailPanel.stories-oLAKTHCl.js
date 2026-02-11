import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as v}from"./index-Bi6L2ga8.js";import{D as g}from"./DetailPanel-pvpFAb0T.js";import{B as r}from"./Button-C5l-MScQ.js";import{F as t}from"./Field-q4DqLIqo.js";import{S as h}from"./square-pen-Becd8mc9.js";import{T as x}from"./trash-2-B67onKV4.js";import"./x-Dd336Dmd.js";import"./createLucideIcon-DprCCbyf.js";import"./circle-alert-BMPEDkj1.js";const C={title:"Sections/App/DetailPanel",component:g,parameters:{layout:"fullscreen",docs:{description:{component:"A slide-over panel for viewing and editing entity details. Optimized for Product Mode with focused interactions."}}},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg","xl"]},position:{control:"select",options:["right","left"]},overlay:{control:"boolean"},closeOnOverlayClick:{control:"boolean"},closeOnEscape:{control:"boolean"},loading:{control:"boolean"}}},i=a=>{const[m,u]=v.useState(!0);return e.jsxs("div",{style:{padding:"var(--spacing-5)",height:"100vh"},children:[e.jsx(r,{onClick:()=>u(!0),children:"Open Panel"}),e.jsx(g,{...a,open:m,onClose:()=>u(!1)})]})},s={render:a=>e.jsx(i,{...a}),args:{title:"User Details",subtitle:"View and edit user information",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-4)"},children:[e.jsx(t,{label:"Name",type:"text",defaultValue:"John Doe"}),e.jsx(t,{label:"Email",type:"email",defaultValue:"john@example.com"}),e.jsx(t,{label:"Role",type:"select"}),e.jsx(t,{label:"Bio",type:"textarea",defaultValue:"Software developer with 5+ years of experience."})]}),footer:e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"secondary",children:"Cancel"}),e.jsx(r,{children:"Save Changes"})]})}},n={render:a=>e.jsx(i,{...a}),args:{title:"Quick Edit",size:"sm",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-4)"},children:[e.jsx(t,{label:"Name",type:"text"}),e.jsx(t,{label:"Status",type:"select"})]}),footer:e.jsx(r,{style:{width:"100%"},children:"Save"})}},l={render:a=>e.jsx(i,{...a}),args:{title:"Project Overview",subtitle:"Complete project details and settings",size:"lg",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-6)"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"var(--spacing-3)"},children:"General Information"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"var(--spacing-4)"},children:[e.jsx(t,{label:"Project Name",type:"text",defaultValue:"Acme Website Redesign"}),e.jsx(t,{label:"Status",type:"select"}),e.jsx(t,{label:"Start Date",type:"text",defaultValue:"2024-01-01"}),e.jsx(t,{label:"Due Date",type:"text",defaultValue:"2024-03-31"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"var(--spacing-3)"},children:"Description"}),e.jsx(t,{type:"textarea",defaultValue:"Complete redesign of the company website with new branding guidelines."})]})]}),footer:e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"secondary",children:"Cancel"}),e.jsx(r,{children:"Save Changes"})]})}},o={render:a=>e.jsx(i,{...a}),args:{title:"Navigation",position:"left",children:e.jsxs("nav",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-2)"},children:[e.jsx("a",{href:"#",style:{padding:"var(--spacing-3)",background:"var(--surface-subtle)",borderRadius:"var(--radius-sm)",textDecoration:"none",color:"inherit"},children:"Dashboard"}),e.jsx("a",{href:"#",style:{padding:"var(--spacing-3)",background:"var(--surface-subtle)",borderRadius:"var(--radius-sm)",textDecoration:"none",color:"inherit"},children:"Projects"}),e.jsx("a",{href:"#",style:{padding:"var(--spacing-3)",background:"var(--surface-subtle)",borderRadius:"var(--radius-sm)",textDecoration:"none",color:"inherit"},children:"Team"}),e.jsx("a",{href:"#",style:{padding:"var(--spacing-3)",background:"var(--surface-subtle)",borderRadius:"var(--radius-sm)",textDecoration:"none",color:"inherit"},children:"Settings"})]})}},c={render:a=>e.jsx(i,{...a}),args:{title:"Document",subtitle:"contract-v2.pdf",headerActions:e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"ghost",size:"sm",iconOnly:!0,icon:e.jsx(h,{size:16}),"aria-label":"Edit"}),e.jsx(r,{variant:"ghost",size:"sm",iconOnly:!0,icon:e.jsx(x,{size:16}),"aria-label":"Delete"})]}),children:e.jsx("div",{style:{padding:"var(--spacing-10)",textAlign:"center",color:"var(--text-secondary)"},children:"Document preview would appear here"})}},d={render:a=>e.jsx(i,{...a}),args:{title:"Loading...",loading:!0,children:null}},p={render:a=>e.jsx(i,{...a}),args:{title:"Side Panel",overlay:!1,children:e.jsx("p",{children:"This panel has no overlay backdrop. You can interact with the content behind it."})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <InteractivePanel {...args} />,
  args: {
    title: 'User Details',
    subtitle: 'View and edit user information',
    children: <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-4)'
    }}>
        <Field label="Name" type="text" defaultValue="John Doe" />
        <Field label="Email" type="email" defaultValue="john@example.com" />
        <Field label="Role" type="select" />
        <Field label="Bio" type="textarea" defaultValue="Software developer with 5+ years of experience." />
      </div>,
    footer: <>
        <Button variant="secondary">Cancel</Button>
        <Button>Save Changes</Button>
      </>
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <InteractivePanel {...args} />,
  args: {
    title: 'Quick Edit',
    size: 'sm',
    children: <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-4)'
    }}>
        <Field label="Name" type="text" />
        <Field label="Status" type="select" />
      </div>,
    footer: <Button style={{
      width: '100%'
    }}>Save</Button>
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <InteractivePanel {...args} />,
  args: {
    title: 'Project Overview',
    subtitle: 'Complete project details and settings',
    size: 'lg',
    children: <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-6)'
    }}>
        <div>
          <h3 style={{
          marginBottom: 'var(--spacing-3)'
        }}>General Information</h3>
          <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--spacing-4)'
        }}>
            <Field label="Project Name" type="text" defaultValue="Acme Website Redesign" />
            <Field label="Status" type="select" />
            <Field label="Start Date" type="text" defaultValue="2024-01-01" />
            <Field label="Due Date" type="text" defaultValue="2024-03-31" />
          </div>
        </div>
        <div>
          <h3 style={{
          marginBottom: 'var(--spacing-3)'
        }}>Description</h3>
          <Field type="textarea" defaultValue="Complete redesign of the company website with new branding guidelines." />
        </div>
      </div>,
    footer: <>
        <Button variant="secondary">Cancel</Button>
        <Button>Save Changes</Button>
      </>
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <InteractivePanel {...args} />,
  args: {
    title: 'Navigation',
    position: 'left',
    children: <nav style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-2)'
    }}>
        <a href="#" style={{
        padding: 'var(--spacing-3)',
        background: 'var(--surface-subtle)',
        borderRadius: 'var(--radius-sm)',
        textDecoration: 'none',
        color: 'inherit'
      }}>Dashboard</a>
        <a href="#" style={{
        padding: 'var(--spacing-3)',
        background: 'var(--surface-subtle)',
        borderRadius: 'var(--radius-sm)',
        textDecoration: 'none',
        color: 'inherit'
      }}>Projects</a>
        <a href="#" style={{
        padding: 'var(--spacing-3)',
        background: 'var(--surface-subtle)',
        borderRadius: 'var(--radius-sm)',
        textDecoration: 'none',
        color: 'inherit'
      }}>Team</a>
        <a href="#" style={{
        padding: 'var(--spacing-3)',
        background: 'var(--surface-subtle)',
        borderRadius: 'var(--radius-sm)',
        textDecoration: 'none',
        color: 'inherit'
      }}>Settings</a>
      </nav>
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <InteractivePanel {...args} />,
  args: {
    title: 'Document',
    subtitle: 'contract-v2.pdf',
    headerActions: <>
        <Button variant="ghost" size="sm" iconOnly icon={<Edit size={16} />} aria-label="Edit" />
        <Button variant="ghost" size="sm" iconOnly icon={<Trash2 size={16} />} aria-label="Delete" />
      </>,
    children: <div style={{
      padding: 'var(--spacing-10)',
      textAlign: 'center',
      color: 'var(--text-secondary)'
    }}>
        Document preview would appear here
      </div>
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <InteractivePanel {...args} />,
  args: {
    title: 'Loading...',
    loading: true,
    children: null
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <InteractivePanel {...args} />,
  args: {
    title: 'Side Panel',
    overlay: false,
    children: <p>This panel has no overlay backdrop. You can interact with the content behind it.</p>
  }
}`,...p.parameters?.docs?.source}}};const F=["Default","SmallSize","LargeSize","LeftPosition","WithHeaderActions","Loading","NoOverlay"];export{s as Default,l as LargeSize,o as LeftPosition,d as Loading,p as NoOverlay,n as SmallSize,c as WithHeaderActions,F as __namedExportsOrder,C as default};
