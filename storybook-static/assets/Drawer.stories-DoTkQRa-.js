import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as l}from"./index-Bi6L2ga8.js";import{r as L}from"./index-Dmh4UR0O.js";import{B as i}from"./Button-C5l-MScQ.js";import"./index-D1UQZLgm.js";const E="_overlay_16qxc_9",A="_overlayVisible_16qxc_20",R="_backdrop_16qxc_27",$="_drawer_16qxc_34",M="_left_16qxc_48",U="_drawerVisible_16qxc_55",I="_right_16qxc_59",Y="_top_16qxc_70",G="_bottom_16qxc_81",J="_closeButton_16qxc_151",K="_header_16qxc_184",Q="_body_16qxc_195",X="_footer_16qxc_204",n={overlay:E,overlayVisible:A,backdrop:R,drawer:$,left:M,drawerVisible:U,right:I,top:Y,bottom:G,"size-sm":"_size-sm_16qxc_96","size-md":"_size-md_16qxc_101","size-lg":"_size-lg_16qxc_106","size-xl":"_size-xl_16qxc_111","size-full":"_size-full_16qxc_116",closeButton:J,header:K,body:Q,footer:X},k=l.forwardRef(({children:t,className:r,...s},o)=>e.jsx("div",{ref:o,className:`${n.header} ${r||""}`,...s,children:t}));k.displayName="Drawer.Header";const z=l.forwardRef(({children:t,className:r,...s},o)=>e.jsx("div",{ref:o,className:`${n.body} ${r||""}`,...s,children:t}));z.displayName="Drawer.Body";const S=l.forwardRef(({children:t,className:r,...s},o)=>e.jsx("div",{ref:o,className:`${n.footer} ${r||""}`,...s,children:t}));S.displayName="Drawer.Footer";const B=l.forwardRef(({open:t,onClose:r,placement:s="right",size:o="md",closeOnBackdrop:d=!0,closeOnEscape:b=!0,showCloseButton:O=!0,children:q,className:N,...T},H)=>{const _=l.useCallback(C=>{b&&C.key==="Escape"&&r()},[b,r]),F=l.useCallback(()=>{d&&r()},[d,r]);if(l.useEffect(()=>{if(t){const C=document.body.style.overflow;return document.body.style.overflow="hidden",document.addEventListener("keydown",_),()=>{document.body.style.overflow=C,document.removeEventListener("keydown",_)}}},[t,_]),!t)return null;const W=[n.overlay,t&&n.overlayVisible].filter(Boolean).join(" "),P=[n.drawer,n[s],n[`size-${o}`],t&&n.drawerVisible,N].filter(Boolean).join(" "),V=e.jsxs("div",{className:W,children:[e.jsx("div",{className:n.backdrop,onClick:F,"aria-hidden":"true"}),e.jsxs("div",{ref:H,className:P,role:"dialog","aria-modal":"true",...T,children:[O&&e.jsx("button",{type:"button",className:n.closeButton,onClick:r,"aria-label":"Close drawer",children:e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M15 5L5 15M5 5L15 15",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),q]})]});return L.createPortal(V,document.body)});B.displayName="Drawer";const a=Object.assign(B,{Header:k,Body:z,Footer:S});B.__docgenInfo={description:"Drawer Component",methods:[],displayName:"Drawer",props:{open:{required:!0,tsType:{name:"boolean"},description:"Whether the drawer is open"},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when the drawer should close"},placement:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'top' | 'bottom'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:`Placement of the drawer
@default 'right'`,defaultValue:{value:"'right'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg' | 'xl' | 'full'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'full'"}]},description:`Size of the drawer
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},closeOnBackdrop:{required:!1,tsType:{name:"boolean"},description:`Whether to close when clicking the backdrop
@default true`,defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:`Whether to close when pressing Escape
@default true`,defaultValue:{value:"true",computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:`Whether to show a close button
@default true`,defaultValue:{value:"true",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:"Drawer content"}},composes:["HTMLAttributes"]};const ae={title:"Components/Overlay/Drawer",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{placement:{control:"radio",options:["left","right","top","bottom"]},size:{control:"radio",options:["sm","md","lg","xl","full"]}}},c=({placement:t="right",size:r="md",...s})=>{const[o,d]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(i,{onClick:()=>d(!0),children:"Open Drawer"}),e.jsxs(a,{open:o,onClose:()=>d(!1),placement:t,size:r,...s,children:[e.jsx(a.Header,{children:"Drawer Title"}),e.jsxs(a.Body,{children:[e.jsx("p",{children:"This is the drawer content. You can put any content here."}),e.jsx("p",{style:{marginTop:"var(--spacing-4)"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),e.jsxs(a.Footer,{children:[e.jsx(i,{variant:"secondary",onClick:()=>d(!1),children:"Cancel"}),e.jsx(i,{onClick:()=>d(!1),children:"Save"})]})]})]})},p={render:()=>e.jsx(c,{})},m={render:()=>e.jsx(c,{placement:"left"})},u={render:()=>e.jsx(c,{placement:"top"})},h={render:()=>e.jsx(c,{placement:"bottom"})},f={render:()=>e.jsx(c,{size:"sm"})},g={render:()=>e.jsx(c,{size:"lg"})},w={render:()=>e.jsx(c,{size:"full"})},v={render:()=>e.jsx(c,{showCloseButton:!1})},x={render:()=>e.jsx(c,{closeOnBackdrop:!1})},y={render:()=>{const[t,r]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(i,{onClick:()=>r(!0),children:"Open Menu"}),e.jsxs(a,{open:t,onClose:()=>r(!1),placement:"left",size:"sm",children:[e.jsx(a.Header,{children:"Navigation"}),e.jsx(a.Body,{children:e.jsx("nav",{children:e.jsx("ul",{style:{listStyle:"none",padding:0,margin:0},children:["Home","Products","About","Contact","Blog"].map(s=>e.jsx("li",{children:e.jsx("a",{href:"#",style:{display:"block",padding:"var(--spacing-3) 0",color:"var(--text-primary)",textDecoration:"none",borderBottom:"1px solid var(--border-subtle)"},onClick:()=>r(!1),children:s})},s))})})})]})]})}},D={render:()=>{const[t,r]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(i,{onClick:()=>r(!0),children:"Open Settings"}),e.jsxs(a,{open:t,onClose:()=>r(!1),placement:"right",size:"md",children:[e.jsx(a.Header,{children:"Settings"}),e.jsx(a.Body,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-6)"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"var(--spacing-2)",fontWeight:"var(--font-weight-medium)"},children:"Appearance"}),e.jsx("p",{style:{fontSize:"var(--font-size-14)",color:"var(--text-secondary)"},children:"Customize how the app looks on your device."})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"var(--spacing-2)",fontWeight:"var(--font-weight-medium)"},children:"Notifications"}),e.jsx("p",{style:{fontSize:"var(--font-size-14)",color:"var(--text-secondary)"},children:"Configure when and how you receive notifications."})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"var(--spacing-2)",fontWeight:"var(--font-weight-medium)"},children:"Privacy"}),e.jsx("p",{style:{fontSize:"var(--font-size-14)",color:"var(--text-secondary)"},children:"Control your privacy settings and data sharing."})]})]})}),e.jsxs(a.Footer,{children:[e.jsx(i,{variant:"secondary",onClick:()=>r(!1),children:"Cancel"}),e.jsx(i,{onClick:()=>r(!1),children:"Save Changes"})]})]})]})}},j={render:()=>{const[t,r]=l.useState(null),s=["left","right","top","bottom"];return e.jsx("div",{style:{display:"flex",gap:"var(--spacing-3)",flexWrap:"wrap"},children:s.map(o=>e.jsxs("div",{children:[e.jsx(i,{onClick:()=>r(o),children:o.charAt(0).toUpperCase()+o.slice(1)}),e.jsxs(a,{open:t===o,onClose:()=>r(null),placement:o,size:"sm",children:[e.jsxs(a.Header,{children:[o," Drawer"]}),e.jsx(a.Body,{children:e.jsxs("p",{children:["This drawer slides in from the ",o,"."]})}),e.jsx(a.Footer,{children:e.jsx(i,{onClick:()=>r(null),children:"Close"})})]})]},o))})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <DrawerDemo />
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <DrawerDemo placement="left" />
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <DrawerDemo placement="top" />
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <DrawerDemo placement="bottom" />
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <DrawerDemo size="sm" />
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <DrawerDemo size="lg" />
}`,...g.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <DrawerDemo size="full" />
}`,...w.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <DrawerDemo showCloseButton={false} />
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <DrawerDemo closeOnBackdrop={false} />
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Open Menu</Button>
        <Drawer open={open} onClose={() => setOpen(false)} placement="left" size="sm">
          <Drawer.Header>Navigation</Drawer.Header>
          <Drawer.Body>
            <nav>
              <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
                {['Home', 'Products', 'About', 'Contact', 'Blog'].map(item => <li key={item}>
                    <a href="#" style={{
                  display: 'block',
                  padding: 'var(--spacing-3) 0',
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  borderBottom: '1px solid var(--border-subtle)'
                }} onClick={() => setOpen(false)}>
                      {item}
                    </a>
                  </li>)}
              </ul>
            </nav>
          </Drawer.Body>
        </Drawer>
      </>;
  }
}`,...y.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Open Settings</Button>
        <Drawer open={open} onClose={() => setOpen(false)} placement="right" size="md">
          <Drawer.Header>Settings</Drawer.Header>
          <Drawer.Body>
            <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-6)'
          }}>
              <div>
                <h4 style={{
                marginBottom: 'var(--spacing-2)',
                fontWeight: 'var(--font-weight-medium)'
              }}>Appearance</h4>
                <p style={{
                fontSize: 'var(--font-size-14)',
                color: 'var(--text-secondary)'
              }}>
                  Customize how the app looks on your device.
                </p>
              </div>
              <div>
                <h4 style={{
                marginBottom: 'var(--spacing-2)',
                fontWeight: 'var(--font-weight-medium)'
              }}>Notifications</h4>
                <p style={{
                fontSize: 'var(--font-size-14)',
                color: 'var(--text-secondary)'
              }}>
                  Configure when and how you receive notifications.
                </p>
              </div>
              <div>
                <h4 style={{
                marginBottom: 'var(--spacing-2)',
                fontWeight: 'var(--font-weight-medium)'
              }}>Privacy</h4>
                <p style={{
                fontSize: 'var(--font-size-14)',
                color: 'var(--text-secondary)'
              }}>
                  Control your privacy settings and data sharing.
                </p>
              </div>
            </div>
          </Drawer.Body>
          <Drawer.Footer>
            <Button variant="secondary" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Save Changes</Button>
          </Drawer.Footer>
        </Drawer>
      </>;
  }
}`,...D.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [openDrawer, setOpenDrawer] = useState<string | null>(null);
    const placements = ['left', 'right', 'top', 'bottom'] as const;
    return <div style={{
      display: 'flex',
      gap: 'var(--spacing-3)',
      flexWrap: 'wrap'
    }}>
        {placements.map(placement => <div key={placement}>
            <Button onClick={() => setOpenDrawer(placement)}>
              {placement.charAt(0).toUpperCase() + placement.slice(1)}
            </Button>
            <Drawer open={openDrawer === placement} onClose={() => setOpenDrawer(null)} placement={placement} size="sm">
              <Drawer.Header>{placement} Drawer</Drawer.Header>
              <Drawer.Body>
                <p>This drawer slides in from the {placement}.</p>
              </Drawer.Body>
              <Drawer.Footer>
                <Button onClick={() => setOpenDrawer(null)}>Close</Button>
              </Drawer.Footer>
            </Drawer>
          </div>)}
      </div>;
  }
}`,...j.parameters?.docs?.source}}};const se=["Default","LeftPlacement","TopPlacement","BottomPlacement","SmallSize","LargeSize","FullSize","WithoutCloseButton","NoBackdropClose","NavigationDrawer","SettingsDrawer","AllPlacements"];export{j as AllPlacements,h as BottomPlacement,p as Default,w as FullSize,g as LargeSize,m as LeftPlacement,y as NavigationDrawer,x as NoBackdropClose,D as SettingsDrawer,f as SmallSize,u as TopPlacement,v as WithoutCloseButton,se as __namedExportsOrder,ae as default};
