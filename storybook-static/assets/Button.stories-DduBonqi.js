import{j as r}from"./jsx-runtime-u17CrQMm.js";import{B as e}from"./Button-C5l-MScQ.js";import{C as z}from"./chevron-down-buXKF-gJ.js";import{M as w}from"./menu-CnVLCxPO.js";import{E as S}from"./external-link-9jXcfSZM.js";import{D as j}from"./download-B1IGscQm.js";import{S as f}from"./search-BC3UyaPv.js";import{P as D}from"./plus-_oTOY7dX.js";import{S as L}from"./settings-DVkWYkkM.js";import{H as W}from"./heart-TBYWzl90.js";import{T as b}from"./trash-2-B67onKV4.js";import{C as I}from"./check-DDKQb6IN.js";import"./index-Bi6L2ga8.js";import"./createLucideIcon-DprCCbyf.js";const q={title:"Components/Forms/Button",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","ghost"],description:"Button visual style"},size:{control:"select",options:["sm","md","lg"],description:"Button size"},fullWidth:{control:"boolean",description:"Make button full width"},disabled:{control:"boolean",description:"Disable button"}}},a={args:{variant:"primary",children:"Primary Button"}},s={args:{variant:"secondary",children:"Secondary Button"}},n={args:{variant:"ghost",children:"Ghost Button"}},i={args:{size:"sm",children:"Small Button"}},t={args:{size:"md",children:"Medium Button"}},o={args:{size:"lg",children:"Large Button"}},c={args:{disabled:!0,children:"Disabled Button"}},d={args:{fullWidth:!0,children:"Full Width Button"}},l={args:{children:r.jsxs(r.Fragment,{children:[r.jsx("span",{style:{marginRight:"var(--spacing-2)"},children:"➕"}),"Add Item"]})}},p={args:{"aria-label":"Add",children:"➕",size:"sm"}},u={render:()=>r.jsxs("div",{style:{display:"flex",gap:"var(--spacing-4)",alignItems:"center",flexWrap:"wrap"},children:[r.jsx(e,{size:"sm",children:"Small"}),r.jsx(e,{size:"md",children:"Medium"}),r.jsx(e,{size:"lg",children:"Large"})]})},g={args:{},render:()=>r.jsxs("div",{style:{display:"flex",gap:"var(--spacing-2)",flexWrap:"wrap"},children:[r.jsx(e,{icon:r.jsx(f,{size:20}),children:"Search"}),r.jsx(e,{icon:r.jsx(j,{size:20}),variant:"secondary",children:"Download"}),r.jsx(e,{icon:r.jsx(D,{size:20}),variant:"ghost",children:"Add"}),r.jsx(e,{icon:r.jsx(L,{size:20}),variant:"ghost",children:"Settings"})]})},m={args:{},render:()=>r.jsxs("div",{style:{display:"flex",gap:"var(--spacing-2)",flexWrap:"wrap"},children:[r.jsx(e,{iconRight:r.jsx(z,{size:20}),children:"Dropdown"}),r.jsx(e,{iconRight:r.jsx(S,{size:20}),variant:"secondary",children:"External"}),r.jsx(e,{iconRight:r.jsx(I,{size:20}),variant:"ghost",children:"Confirm"})]})},h={args:{},render:()=>r.jsxs("div",{style:{display:"flex",gap:"var(--spacing-2)"},children:[r.jsx(e,{iconOnly:!0,icon:r.jsx(f,{size:20}),"aria-label":"Search"}),r.jsx(e,{iconOnly:!0,icon:r.jsx(W,{size:20}),variant:"secondary","aria-label":"Like"}),r.jsx(e,{iconOnly:!0,icon:r.jsx(b,{size:20}),variant:"danger","aria-label":"Delete"}),r.jsx(e,{iconOnly:!0,icon:r.jsx(L,{size:20}),variant:"ghost","aria-label":"Settings"})]})},x={args:{},render:()=>r.jsxs("div",{style:{display:"flex",gap:"var(--spacing-2)",flexWrap:"wrap"},children:[r.jsx(e,{icon:r.jsx(w,{size:20}),iconRight:r.jsx(z,{size:20}),children:"Menu Options"}),r.jsx(e,{icon:r.jsx(j,{size:20}),iconRight:r.jsx(S,{size:20}),children:"Download File"})]})},y={args:{icon:r.jsx(j,{size:20}),children:"Downloading...",isLoading:!0}},v={render:()=>r.jsxs("div",{style:{display:"flex",gap:"var(--spacing-4)",flexWrap:"wrap"},children:[r.jsx(e,{variant:"primary",isLoading:!0,children:"Primary"}),r.jsx(e,{variant:"secondary",isLoading:!0,children:"Secondary"}),r.jsx(e,{variant:"ghost",isLoading:!0,children:"Ghost"}),r.jsx(e,{variant:"danger",isLoading:!0,children:"Danger"})]})},B={render:()=>r.jsxs("div",{style:{display:"flex",gap:"var(--spacing-4)",flexWrap:"wrap"},children:[r.jsx(e,{variant:"primary",children:"Primary"}),r.jsx(e,{variant:"secondary",children:"Secondary"}),r.jsx(e,{variant:"ghost",children:"Ghost"})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Primary Button'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary Button'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    children: 'Ghost Button'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    children: 'Small Button'
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    children: 'Medium Button'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    children: 'Large Button'
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: 'Disabled Button'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    fullWidth: true,
    children: 'Full Width Button'
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <span style={{
        marginRight: 'var(--spacing-2)'
      }}>➕</span>
        Add Item
      </>
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Add',
    children: '➕',
    size: 'sm'
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--spacing-4)',
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--spacing-2)',
    flexWrap: 'wrap'
  }}>
      <Button icon={<Search size={20} />}>Search</Button>
      <Button icon={<Download size={20} />} variant="secondary">
        Download
      </Button>
      <Button icon={<Plus size={20} />} variant="ghost">
        Add
      </Button>
      <Button icon={<Settings size={20} />} variant="ghost">
        Settings
      </Button>
    </div>
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--spacing-2)',
    flexWrap: 'wrap'
  }}>
      <Button iconRight={<ChevronDown size={20} />}>Dropdown</Button>
      <Button iconRight={<ExternalLink size={20} />} variant="secondary">
        External
      </Button>
      <Button iconRight={<Check size={20} />} variant="ghost">
        Confirm
      </Button>
    </div>
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--spacing-2)'
  }}>
      <Button iconOnly icon={<Search size={20} />} aria-label="Search" />
      <Button iconOnly icon={<Heart size={20} />} variant="secondary" aria-label="Like" />
      <Button iconOnly icon={<Trash2 size={20} />} variant="danger" aria-label="Delete" />
      <Button iconOnly icon={<Settings size={20} />} variant="ghost" aria-label="Settings" />
    </div>
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--spacing-2)',
    flexWrap: 'wrap'
  }}>
      <Button icon={<Menu size={20} />} iconRight={<ChevronDown size={20} />}>
        Menu Options
      </Button>
      <Button icon={<Download size={20} />} iconRight={<ExternalLink size={20} />}>
        Download File
      </Button>
    </div>
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <Download size={20} />,
    children: 'Downloading...',
    isLoading: true
  }
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--spacing-4)',
    flexWrap: 'wrap'
  }}>
      <Button variant="primary" isLoading>Primary</Button>
      <Button variant="secondary" isLoading>Secondary</Button>
      <Button variant="ghost" isLoading>Ghost</Button>
      <Button variant="danger" isLoading>Danger</Button>
    </div>
}`,...v.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--spacing-4)',
    flexWrap: 'wrap'
  }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
}`,...B.parameters?.docs?.source}}};const J=["Primary","Secondary","Ghost","Small","Medium","Large","Disabled","FullWidth","WithIcon","IconOnly","AllSizes","LucideIconsLeft","LucideIconsRight","LucideIconsOnly","LucideIconsBoth","LucideWithLoading","LoadingAllVariants","AllVariants"];export{u as AllSizes,B as AllVariants,c as Disabled,d as FullWidth,n as Ghost,p as IconOnly,o as Large,v as LoadingAllVariants,x as LucideIconsBoth,g as LucideIconsLeft,h as LucideIconsOnly,m as LucideIconsRight,y as LucideWithLoading,t as Medium,a as Primary,s as Secondary,i as Small,l as WithIcon,J as __namedExportsOrder,q as default};
