import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as t}from"./Dropdown-DdHVo4Wo.js";import{B as r}from"./Button-C5l-MScQ.js";import{U as y}from"./user-CUEj3VL3.js";import{S as f}from"./settings-DVkWYkkM.js";import{C as j}from"./circle-question-mark-C_pzcBL4.js";import{L as S}from"./log-out-B9-sGcCl.js";import{S as b}from"./square-pen-Becd8mc9.js";import{C as v}from"./copy-CDSbOGtH.js";import{T as h}from"./trash-2-B67onKV4.js";import{D}from"./download-B1IGscQm.js";import{S as z}from"./share-Ds1sld2u.js";import{F as w}from"./file-text-3QR_BDt1.js";import"./index-Bi6L2ga8.js";import"./index-Dmh4UR0O.js";import"./index-D1UQZLgm.js";import"./createLucideIcon-DprCCbyf.js";const J={title:"Components/Overlay/Dropdown",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{placement:{control:"select",options:["bottom-start","bottom","bottom-end","top-start","top","top-end"]}}},g=[{id:"edit",label:"Edit"},{id:"duplicate",label:"Duplicate"},{id:"archive",label:"Archive"},{id:"delete",label:"Delete",danger:!0}],i={args:{trigger:e.jsx(r,{variant:"secondary",children:"Options"}),items:g}},a={args:{trigger:e.jsx(r,{variant:"secondary",children:"Actions"}),items:[{id:"edit",label:"Edit",icon:e.jsx(b,{size:16})},{id:"duplicate",label:"Duplicate",icon:e.jsx(v,{size:16})},{id:"download",label:"Download",icon:e.jsx(D,{size:16})},{id:"share",label:"Share",icon:e.jsx(z,{size:16})},{id:"delete",label:"Delete",icon:e.jsx(h,{size:16}),danger:!0}]}},s={args:{trigger:e.jsx(r,{variant:"secondary",children:"File"}),items:[{id:"new",label:"New File",shortcut:"⌘N",icon:e.jsx(w,{size:16})},{id:"save",label:"Save",shortcut:"⌘S"},{id:"export",label:"Export",shortcut:"⌘E"},{id:"print",label:"Print",shortcut:"⌘P"}]}},o={args:{trigger:e.jsx(r,{variant:"secondary",children:"Menu"}),groups:[{label:"Actions",items:[{id:"edit",label:"Edit",icon:e.jsx(b,{size:16})},{id:"duplicate",label:"Duplicate",icon:e.jsx(v,{size:16})}]},{label:"Danger Zone",items:[{id:"delete",label:"Delete",icon:e.jsx(h,{size:16}),danger:!0}]}]}},n={args:{trigger:e.jsxs("button",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)",padding:"var(--spacing-2) var(--spacing-3)",border:"1px solid var(--border-subtle)",borderRadius:"var(--radius-sm)",background:"var(--surface-base)",cursor:"pointer"},children:[e.jsx("div",{style:{width:"var(--spacing-8)",height:"var(--spacing-8)",borderRadius:"50%",background:"var(--interactive-primary)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--interactive-primary-text)",fontSize:"var(--font-size-14)",fontWeight:"var(--font-weight-medium)"},children:"JD"}),e.jsx("span",{children:"John Doe"})]}),groups:[{items:[{id:"profile",label:"Profile",icon:e.jsx(y,{size:16})},{id:"settings",label:"Settings",icon:e.jsx(f,{size:16})},{id:"help",label:"Help & Support",icon:e.jsx(j,{size:16})}]},{items:[{id:"logout",label:"Log out",icon:e.jsx(S,{size:16}),danger:!0}]}],placement:"bottom-end"}},d={args:{trigger:e.jsx(r,{variant:"secondary",children:"Options"}),items:[{id:"edit",label:"Edit"},{id:"duplicate",label:"Duplicate",disabled:!0},{id:"archive",label:"Archive",disabled:!0},{id:"delete",label:"Delete",danger:!0}]}},l={args:{trigger:e.jsx(r,{variant:"secondary",children:"Opens Up"}),items:g,placement:"top-start"},decorators:[x=>e.jsx("div",{style:{marginTop:"200px"},children:e.jsx(x,{})})]},c={args:{trigger:e.jsx(r,{variant:"secondary",children:"Bottom End"}),items:g,placement:"bottom-end"}},p={args:{trigger:e.jsx(r,{variant:"secondary",children:"Wide Menu"}),items:[{id:"option1",label:"This is a very long option label"},{id:"option2",label:"Another long option with description"},{id:"option3",label:"Short"}],minWidth:280}},u={render:()=>e.jsx("div",{style:{padding:"var(--spacing-12)",border:"1px dashed var(--border-subtle)",borderRadius:"var(--radius-sm)",textAlign:"center"},children:e.jsx(t,{trigger:e.jsx("div",{style:{padding:"var(--spacing-6)",background:"var(--surface-subtle)",borderRadius:"var(--radius-sm)",cursor:"context-menu"},children:"Right-click or click here"}),items:[{id:"cut",label:"Cut",shortcut:"⌘X"},{id:"copy",label:"Copy",shortcut:"⌘C"},{id:"paste",label:"Paste",shortcut:"⌘V"}]})})},m={render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--spacing-4)"},children:[e.jsx(t,{trigger:e.jsx(r,{variant:"secondary",children:"File"}),items:[{id:"new",label:"New"},{id:"open",label:"Open"},{id:"save",label:"Save"}]}),e.jsx(t,{trigger:e.jsx(r,{variant:"secondary",children:"Edit"}),items:[{id:"undo",label:"Undo"},{id:"redo",label:"Redo"},{id:"cut",label:"Cut"}]}),e.jsx(t,{trigger:e.jsx(r,{variant:"secondary",children:"View"}),items:[{id:"zoom-in",label:"Zoom In"},{id:"zoom-out",label:"Zoom Out"},{id:"fullscreen",label:"Fullscreen"}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <Button variant="secondary">Options</Button>,
    items: basicItems
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <Button variant="secondary">Actions</Button>,
    items: [{
      id: 'edit',
      label: 'Edit',
      icon: <Edit size={16} />
    }, {
      id: 'duplicate',
      label: 'Duplicate',
      icon: <Copy size={16} />
    }, {
      id: 'download',
      label: 'Download',
      icon: <Download size={16} />
    }, {
      id: 'share',
      label: 'Share',
      icon: <Share size={16} />
    }, {
      id: 'delete',
      label: 'Delete',
      icon: <Trash2 size={16} />,
      danger: true
    }]
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <Button variant="secondary">File</Button>,
    items: [{
      id: 'new',
      label: 'New File',
      shortcut: '⌘N',
      icon: <FileText size={16} />
    }, {
      id: 'save',
      label: 'Save',
      shortcut: '⌘S'
    }, {
      id: 'export',
      label: 'Export',
      shortcut: '⌘E'
    }, {
      id: 'print',
      label: 'Print',
      shortcut: '⌘P'
    }]
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <Button variant="secondary">Menu</Button>,
    groups: [{
      label: 'Actions',
      items: [{
        id: 'edit',
        label: 'Edit',
        icon: <Edit size={16} />
      }, {
        id: 'duplicate',
        label: 'Duplicate',
        icon: <Copy size={16} />
      }]
    }, {
      label: 'Danger Zone',
      items: [{
        id: 'delete',
        label: 'Delete',
        icon: <Trash2 size={16} />,
        danger: true
      }]
    }]
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <button style={{
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--spacing-2)',
      padding: 'var(--spacing-2) var(--spacing-3)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--surface-base)',
      cursor: 'pointer'
    }}>
        <div style={{
        width: 'var(--spacing-8)',
        height: 'var(--spacing-8)',
        borderRadius: '50%',
        background: 'var(--interactive-primary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--interactive-primary-text)',
        fontSize: 'var(--font-size-14)',
        fontWeight: 'var(--font-weight-medium)'
      }}>
          JD
        </div>
        <span>John Doe</span>
      </button>,
    groups: [{
      items: [{
        id: 'profile',
        label: 'Profile',
        icon: <User size={16} />
      }, {
        id: 'settings',
        label: 'Settings',
        icon: <Settings size={16} />
      }, {
        id: 'help',
        label: 'Help & Support',
        icon: <HelpCircle size={16} />
      }]
    }, {
      items: [{
        id: 'logout',
        label: 'Log out',
        icon: <LogOut size={16} />,
        danger: true
      }]
    }],
    placement: 'bottom-end'
  }
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <Button variant="secondary">Options</Button>,
    items: [{
      id: 'edit',
      label: 'Edit'
    }, {
      id: 'duplicate',
      label: 'Duplicate',
      disabled: true
    }, {
      id: 'archive',
      label: 'Archive',
      disabled: true
    }, {
      id: 'delete',
      label: 'Delete',
      danger: true
    }]
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <Button variant="secondary">Opens Up</Button>,
    items: basicItems,
    placement: 'top-start'
  },
  decorators: [Story => <div style={{
    marginTop: '200px'
  }}>
        <Story />
      </div>]
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <Button variant="secondary">Bottom End</Button>,
    items: basicItems,
    placement: 'bottom-end'
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <Button variant="secondary">Wide Menu</Button>,
    items: [{
      id: 'option1',
      label: 'This is a very long option label'
    }, {
      id: 'option2',
      label: 'Another long option with description'
    }, {
      id: 'option3',
      label: 'Short'
    }],
    minWidth: 280
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 'var(--spacing-12)',
    border: '1px dashed var(--border-subtle)',
    borderRadius: 'var(--radius-sm)',
    textAlign: 'center'
  }}>
      <Dropdown trigger={<div style={{
      padding: 'var(--spacing-6)',
      background: 'var(--surface-subtle)',
      borderRadius: 'var(--radius-sm)',
      cursor: 'context-menu'
    }}>
            Right-click or click here
          </div>} items={[{
      id: 'cut',
      label: 'Cut',
      shortcut: '⌘X'
    }, {
      id: 'copy',
      label: 'Copy',
      shortcut: '⌘C'
    }, {
      id: 'paste',
      label: 'Paste',
      shortcut: '⌘V'
    }]} />
    </div>
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--spacing-4)'
  }}>
      <Dropdown trigger={<Button variant="secondary">File</Button>} items={[{
      id: 'new',
      label: 'New'
    }, {
      id: 'open',
      label: 'Open'
    }, {
      id: 'save',
      label: 'Save'
    }]} />
      <Dropdown trigger={<Button variant="secondary">Edit</Button>} items={[{
      id: 'undo',
      label: 'Undo'
    }, {
      id: 'redo',
      label: 'Redo'
    }, {
      id: 'cut',
      label: 'Cut'
    }]} />
      <Dropdown trigger={<Button variant="secondary">View</Button>} items={[{
      id: 'zoom-in',
      label: 'Zoom In'
    }, {
      id: 'zoom-out',
      label: 'Zoom Out'
    }, {
      id: 'fullscreen',
      label: 'Fullscreen'
    }]} />
    </div>
}`,...m.parameters?.docs?.source}}};const V=["Default","WithIcons","WithShortcuts","WithGroups","UserMenu","WithDisabledItems","TopPlacement","BottomEnd","WideMenu","ContextMenu","MultipleDropdowns"];export{c as BottomEnd,u as ContextMenu,i as Default,m as MultipleDropdowns,l as TopPlacement,n as UserMenu,p as WideMenu,d as WithDisabledItems,o as WithGroups,a as WithIcons,s as WithShortcuts,V as __namedExportsOrder,J as default};
