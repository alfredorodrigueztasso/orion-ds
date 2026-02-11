import{j as e}from"./jsx-runtime-u17CrQMm.js";import{S as r}from"./Spinner-C9iGDtuC.js";import{B as a}from"./Button-C5l-MScQ.js";import"./index-Bi6L2ga8.js";const A={title:"Components/Feedback/Spinner",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl"],description:"Spinner size"},variant:{control:"select",options:["primary","secondary","neutral","inverse"],description:"Spinner color variant"},showLabel:{control:"boolean",description:"Show loading label below spinner"},label:{control:"text",description:"Loading label text (for accessibility)"}}},s={args:{}},n={args:{showLabel:!0}},i={args:{label:"Loading data...",showLabel:!0}},t={args:{variant:"primary",showLabel:!0,label:"Loading..."}},o={args:{variant:"secondary",showLabel:!0,label:"Processing..."}},l={args:{variant:"neutral",showLabel:!0,label:"Please wait..."}},c={args:{size:"xs"}},d={args:{size:"sm"}},p={args:{size:"md"}},g={args:{size:"lg"}},m={args:{size:"xl"}},v={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-8)"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(r,{size:"xs"}),e.jsx("p",{style:{marginTop:"var(--spacing-2)",fontSize:"var(--font-size-12)",color:"var(--text-secondary)"},children:"XS"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(r,{size:"sm"}),e.jsx("p",{style:{marginTop:"var(--spacing-2)",fontSize:"var(--font-size-12)",color:"var(--text-secondary)"},children:"SM"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(r,{size:"md"}),e.jsx("p",{style:{marginTop:"var(--spacing-2)",fontSize:"var(--font-size-12)",color:"var(--text-secondary)"},children:"MD"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(r,{size:"lg"}),e.jsx("p",{style:{marginTop:"var(--spacing-2)",fontSize:"var(--font-size-12)",color:"var(--text-secondary)"},children:"LG"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(r,{size:"xl"}),e.jsx("p",{style:{marginTop:"var(--spacing-2)",fontSize:"var(--font-size-12)",color:"var(--text-secondary)"},children:"XL"})]})]})},u={render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--spacing-4)",flexWrap:"wrap"},children:[e.jsx(a,{variant:"primary",isLoading:!0,children:"Primary Loading"}),e.jsx(a,{variant:"secondary",isLoading:!0,children:"Secondary Loading"}),e.jsx(a,{variant:"ghost",isLoading:!0,children:"Ghost Loading"}),e.jsx(a,{variant:"danger",isLoading:!0,children:"Danger Loading"})]})},y={render:()=>e.jsxs("div",{style:{padding:"var(--spacing-8)",background:"var(--interactive-primary)",borderRadius:"var(--radius-control)",display:"flex",alignItems:"center",gap:"var(--spacing-4)"},children:[e.jsx(r,{size:"md",variant:"inverse"}),e.jsx("span",{style:{color:"var(--interactive-primary-text)",fontWeight:"var(--font-weight-medium)"},children:"Loading on dark background..."})]})},x={render:()=>e.jsx("div",{style:{width:"300px",padding:"var(--spacing-8)",borderRadius:"var(--radius-control)",border:"1px solid var(--border-subtle)",textAlign:"center"},children:e.jsx(r,{size:"lg",showLabel:!0,label:"Loading your data..."})})},h={render:()=>e.jsx("div",{style:{width:"100vw",height:"50vh",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0, 0, 0, 0.05)"},children:e.jsx(r,{size:"xl",showLabel:!0,label:"Loading application..."})})},f={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-8)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-4)"},children:[e.jsx(r,{size:"sm"}),e.jsx("span",{children:"Saving changes..."})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-4)"},children:[e.jsx(r,{size:"sm",variant:"secondary"}),e.jsx("span",{children:"Processing payment..."})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-4)"},children:[e.jsx(r,{size:"sm",variant:"neutral"}),e.jsx("span",{children:"Uploading file..."})]})]})},S={args:{size:"lg",variant:"primary",showLabel:!0,label:"Please wait...",className:"custom-spinner",style:{padding:"var(--spacing-8)",borderRadius:"var(--radius-control)",background:"var(--surface-subtle)"}}},z={render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--spacing-12)"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(r,{variant:"primary",size:"lg"}),e.jsx("p",{style:{marginTop:"var(--spacing-4)",fontSize:"var(--font-size-14)",fontWeight:"var(--font-weight-medium)"},children:"Primary"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(r,{variant:"secondary",size:"lg"}),e.jsx("p",{style:{marginTop:"var(--spacing-4)",fontSize:"var(--font-size-14)",fontWeight:"var(--font-weight-medium)"},children:"Secondary"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(r,{variant:"neutral",size:"lg"}),e.jsx("p",{style:{marginTop:"var(--spacing-4)",fontSize:"var(--font-size-14)",fontWeight:"var(--font-weight-medium)"},children:"Neutral"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    showLabel: true
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Loading data...',
    showLabel: true
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    showLabel: true,
    label: 'Loading...'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    showLabel: true,
    label: 'Processing...'
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'neutral',
    showLabel: true,
    label: 'Please wait...'
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'xs'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md'
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'xl'
  }
}`,...m.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--spacing-8)'
  }}>
      <div style={{
      textAlign: 'center'
    }}>
        <Spinner size="xs" />
        <p style={{
        marginTop: 'var(--spacing-2)',
        fontSize: 'var(--font-size-12)',
        color: 'var(--text-secondary)'
      }}>XS</p>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <Spinner size="sm" />
        <p style={{
        marginTop: 'var(--spacing-2)',
        fontSize: 'var(--font-size-12)',
        color: 'var(--text-secondary)'
      }}>SM</p>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <Spinner size="md" />
        <p style={{
        marginTop: 'var(--spacing-2)',
        fontSize: 'var(--font-size-12)',
        color: 'var(--text-secondary)'
      }}>MD</p>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <Spinner size="lg" />
        <p style={{
        marginTop: 'var(--spacing-2)',
        fontSize: 'var(--font-size-12)',
        color: 'var(--text-secondary)'
      }}>LG</p>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <Spinner size="xl" />
        <p style={{
        marginTop: 'var(--spacing-2)',
        fontSize: 'var(--font-size-12)',
        color: 'var(--text-secondary)'
      }}>XL</p>
      </div>
    </div>
}`,...v.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--spacing-4)',
    flexWrap: 'wrap'
  }}>
      <Button variant="primary" isLoading>
        Primary Loading
      </Button>
      <Button variant="secondary" isLoading>
        Secondary Loading
      </Button>
      <Button variant="ghost" isLoading>
        Ghost Loading
      </Button>
      <Button variant="danger" isLoading>
        Danger Loading
      </Button>
    </div>
}`,...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 'var(--spacing-8)',
    background: 'var(--interactive-primary)',
    borderRadius: 'var(--radius-control)',
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--spacing-4)'
  }}>
      <Spinner size="md" variant="inverse" />
      <span style={{
      color: 'var(--interactive-primary-text)',
      fontWeight: 'var(--font-weight-medium)'
    }}>Loading on dark background...</span>
    </div>
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '300px',
    padding: 'var(--spacing-8)',
    borderRadius: 'var(--radius-control)',
    border: '1px solid var(--border-subtle)',
    textAlign: 'center'
  }}>
      <Spinner size="lg" showLabel label="Loading your data..." />
    </div>
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '100vw',
    height: '50vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(0, 0, 0, 0.05)'
  }}>
      <Spinner size="xl" showLabel label="Loading application..." />
    </div>
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-8)'
  }}>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--spacing-4)'
    }}>
        <Spinner size="sm" />
        <span>Saving changes...</span>
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--spacing-4)'
    }}>
        <Spinner size="sm" variant="secondary" />
        <span>Processing payment...</span>
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--spacing-4)'
    }}>
        <Spinner size="sm" variant="neutral" />
        <span>Uploading file...</span>
      </div>
    </div>
}`,...f.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    variant: 'primary',
    showLabel: true,
    label: 'Please wait...',
    className: 'custom-spinner',
    style: {
      padding: 'var(--spacing-8)',
      borderRadius: 'var(--radius-control)',
      background: 'var(--surface-subtle)'
    }
  }
}`,...S.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--spacing-12)'
  }}>
      <div style={{
      textAlign: 'center'
    }}>
        <Spinner variant="primary" size="lg" />
        <p style={{
        marginTop: 'var(--spacing-4)',
        fontSize: 'var(--font-size-14)',
        fontWeight: 'var(--font-weight-medium)'
      }}>Primary</p>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <Spinner variant="secondary" size="lg" />
        <p style={{
        marginTop: 'var(--spacing-4)',
        fontSize: 'var(--font-size-14)',
        fontWeight: 'var(--font-weight-medium)'
      }}>Secondary</p>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <Spinner variant="neutral" size="lg" />
        <p style={{
        marginTop: 'var(--spacing-4)',
        fontSize: 'var(--font-size-14)',
        fontWeight: 'var(--font-weight-medium)'
      }}>Neutral</p>
      </div>
    </div>
}`,...z.parameters?.docs?.source}}};const I=["Default","WithLabel","CustomLabel","Primary","Secondary","Neutral","ExtraSmall","Small","Medium","Large","ExtraLarge","AllSizes","InButton","InverseVariant","InCard","FullPageLoader","MultipleStates","WithCustomStyling","AllVariants"];export{v as AllSizes,z as AllVariants,i as CustomLabel,s as Default,m as ExtraLarge,c as ExtraSmall,h as FullPageLoader,u as InButton,x as InCard,y as InverseVariant,g as Large,p as Medium,f as MultipleStates,l as Neutral,t as Primary,o as Secondary,d as Small,S as WithCustomStyling,n as WithLabel,I as __namedExportsOrder,A as default};
