import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as n}from"./index-Bi6L2ga8.js";import{r as re}from"./index-Dmh4UR0O.js";import{B as l}from"./Button-C5l-MScQ.js";import"./index-D1UQZLgm.js";const oe="_trigger_fdmym_16",ne="_popover_fdmym_21",ae="_visible_fdmym_37",se="_content_fdmym_46",ie="_arrow_fdmym_57",y={trigger:oe,popover:ne,visible:ae,content:se,arrow:ie,"arrow-top":"_arrow-top_fdmym_67","arrow-bottom":"_arrow-bottom_fdmym_75","arrow-left":"_arrow-left_fdmym_83","arrow-right":"_arrow-right_fdmym_91"},le=(r,o,u,d)=>{const m=window.scrollX,g=window.scrollY;let a=0,i=0;const t={top:r.top+g-o.height-d,bottom:r.bottom+g+d,left:r.left+m-o.width-d,right:r.right+m+d,centerX:r.left+m+(r.width-o.width)/2,centerY:r.top+g+(r.height-o.height)/2,startX:r.left+m,endX:r.right+m-o.width,startY:r.top+g,endY:r.bottom+g-o.height};switch(u){case"top":a=t.top,i=t.centerX;break;case"top-start":a=t.top,i=t.startX;break;case"top-end":a=t.top,i=t.endX;break;case"bottom":a=t.bottom,i=t.centerX;break;case"bottom-start":a=t.bottom,i=t.startX;break;case"bottom-end":a=t.bottom,i=t.endX;break;case"left":a=t.centerY,i=t.left;break;case"left-start":a=t.startY,i=t.left;break;case"left-end":a=t.endY,i=t.left;break;case"right":a=t.centerY,i=t.right;break;case"right-start":a=t.startY,i=t.right;break;case"right-end":a=t.endY,i=t.right;break}return{top:a,left:i}},f=n.forwardRef(({trigger:r,content:o,placement:u="bottom",triggerType:d="click",open:m,defaultOpen:g=!1,onOpenChange:a,showArrow:i=!0,offset:t=8,closeOnClickOutside:M=!0,closeOnEscape:N=!0,openDelay:W=0,closeDelay:X=150,className:F,...I},H)=>{const[$,J]=n.useState(g),[R,U]=n.useState({top:0,left:0}),h=n.useRef(null),b=n.useRef(null),x=n.useRef(null),w=n.useRef(null);n.useImperativeHandle(H,()=>h.current);const Y=m!==void 0,c=Y?m:$,p=n.useCallback(s=>{Y||J(s),a?.(s)},[Y,a]),v=n.useCallback(()=>{if(!h.current||!b.current)return;const s=h.current.getBoundingClientRect(),k=b.current.getBoundingClientRect(),P=le(s,k,u,t);U(P)},[u,t]);n.useEffect(()=>{if(c)return requestAnimationFrame(v),window.addEventListener("resize",v),window.addEventListener("scroll",v,!0),()=>{window.removeEventListener("resize",v),window.removeEventListener("scroll",v,!0)}},[c,v]),n.useEffect(()=>{if(!c||!M)return;const s=k=>{const P=k.target;h.current&&!h.current.contains(P)&&b.current&&!b.current.contains(P)&&p(!1)};return document.addEventListener("mousedown",s),()=>document.removeEventListener("mousedown",s)},[c,M,p]),n.useEffect(()=>{if(!c||!N)return;const s=k=>{k.key==="Escape"&&p(!1)};return document.addEventListener("keydown",s),()=>document.removeEventListener("keydown",s)},[c,N,p]),n.useEffect(()=>()=>{x.current&&clearTimeout(x.current),w.current&&clearTimeout(w.current)},[]);const T=n.useCallback(()=>{w.current&&clearTimeout(w.current),W>0?x.current=setTimeout(()=>p(!0),W):p(!0)},[W,p]),j=n.useCallback(()=>{x.current&&clearTimeout(x.current),X>0?w.current=setTimeout(()=>p(!1),X):p(!1)},[X,p]),G=n.useCallback(()=>{c?j():T()},[c,T,j]),K=()=>{const s={"aria-expanded":c,"aria-haspopup":!0};switch(d){case"click":return{...s,onClick:G};case"hover":return{...s,onMouseEnter:T,onMouseLeave:j};case"focus":return{...s,onFocus:T,onBlur:j};case"manual":return s;default:return s}},Q=n.isValidElement(r)?n.cloneElement(r,K()):r,Z=()=>u.startsWith("top")?"bottom":u.startsWith("bottom")?"top":u.startsWith("left")?"right":u.startsWith("right")?"left":"top",ee=[y.popover,c&&y.visible,F].filter(Boolean).join(" "),te=e.jsxs("div",{ref:b,className:ee,style:{top:R.top,left:R.left},role:"dialog","aria-modal":"false",onMouseEnter:d==="hover"?T:void 0,onMouseLeave:d==="hover"?j:void 0,...I,children:[i&&e.jsx("div",{className:`${y.arrow} ${y[`arrow-${Z()}`]}`,"aria-hidden":"true"}),e.jsx("div",{className:y.content,children:o})]});return e.jsxs(e.Fragment,{children:[e.jsx("div",{ref:h,className:y.trigger,children:Q}),c&&re.createPortal(te,document.body)]})});f.displayName="Popover";f.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{trigger:{required:!0,tsType:{name:"ReactNode"},description:"The trigger element that opens the popover"},content:{required:!0,tsType:{name:"ReactNode"},description:"The content to display in the popover"},placement:{required:!1,tsType:{name:"union",raw:`| 'top'
| 'top-start'
| 'top-end'
| 'bottom'
| 'bottom-start'
| 'bottom-end'
| 'left'
| 'left-start'
| 'left-end'
| 'right'
| 'right-start'
| 'right-end'`,elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'top-start'"},{name:"literal",value:"'top-end'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'bottom-start'"},{name:"literal",value:"'bottom-end'"},{name:"literal",value:"'left'"},{name:"literal",value:"'left-start'"},{name:"literal",value:"'left-end'"},{name:"literal",value:"'right'"},{name:"literal",value:"'right-start'"},{name:"literal",value:"'right-end'"}]},description:`Placement of the popover relative to the trigger
@default 'bottom'`,defaultValue:{value:"'bottom'",computed:!1}},triggerType:{required:!1,tsType:{name:"union",raw:"'click' | 'hover' | 'focus' | 'manual'",elements:[{name:"literal",value:"'click'"},{name:"literal",value:"'hover'"},{name:"literal",value:"'focus'"},{name:"literal",value:"'manual'"}]},description:`How to trigger the popover
@default 'click'`,defaultValue:{value:"'click'",computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:"Whether the popover is open (controlled mode)"},defaultOpen:{required:!1,tsType:{name:"boolean"},description:`Default open state (uncontrolled mode)
@default false`,defaultValue:{value:"false",computed:!1}},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Callback when open state changes"},showArrow:{required:!1,tsType:{name:"boolean"},description:`Whether to show an arrow pointing to the trigger
@default true`,defaultValue:{value:"true",computed:!1}},offset:{required:!1,tsType:{name:"number"},description:`Offset from the trigger in pixels
@default 8`,defaultValue:{value:"8",computed:!1}},closeOnClickOutside:{required:!1,tsType:{name:"boolean"},description:`Whether to close when clicking outside
@default true`,defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:`Whether to close when pressing Escape
@default true`,defaultValue:{value:"true",computed:!1}},openDelay:{required:!1,tsType:{name:"number"},description:`Delay before showing (for hover trigger)
@default 0`,defaultValue:{value:"0",computed:!1}},closeDelay:{required:!1,tsType:{name:"number"},description:`Delay before hiding (for hover trigger)
@default 150`,defaultValue:{value:"150",computed:!1}}},composes:["Omit"]};const ge={title:"Components/Overlay/Popover",component:f,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{placement:{control:"select",options:["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"]},triggerType:{control:"radio",options:["click","hover","focus","manual"]}}},B={args:{trigger:e.jsx(l,{children:"Click me"}),content:e.jsx("div",{children:e.jsx("p",{style:{margin:0},children:"This is the popover content."})})}},C={args:{trigger:e.jsx(l,{children:"Top Popover"}),content:e.jsx("p",{style:{margin:0},children:"Popover appears above"}),placement:"top"}},E={args:{trigger:e.jsx(l,{children:"Left Popover"}),content:e.jsx("p",{style:{margin:0},children:"Popover appears to the left"}),placement:"left"}},_={args:{trigger:e.jsx(l,{children:"Right Popover"}),content:e.jsx("p",{style:{margin:0},children:"Popover appears to the right"}),placement:"right"}},z={args:{trigger:e.jsx(l,{children:"Hover me"}),content:e.jsx("p",{style:{margin:0},children:"This appears on hover"}),triggerType:"hover"}},S={args:{trigger:e.jsx(l,{children:"Focus me"}),content:e.jsx("p",{style:{margin:0},children:"This appears on focus"}),triggerType:"focus"}},O={args:{trigger:e.jsx(l,{children:"No Arrow"}),content:e.jsx("p",{style:{margin:0},children:"Popover without arrow"}),showArrow:!1}},D={args:{trigger:e.jsx(l,{children:"View Details"}),content:e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 var(--spacing-2) 0",fontWeight:"var(--font-weight-medium)"},children:"User Profile"}),e.jsx("p",{style:{margin:"0 0 var(--spacing-2) 0",fontSize:"var(--font-size-14)",color:"var(--text-secondary)"},children:"John Doe"}),e.jsx("p",{style:{margin:"0 0 var(--spacing-3) 0",fontSize:"var(--font-size-12)",color:"var(--text-tertiary)"},children:"john.doe@example.com"}),e.jsx(l,{size:"sm",variant:"secondary",fullWidth:!0,children:"View Full Profile"})]})}},L={render:()=>{const[r,o]=n.useState(!1);return e.jsxs("div",{style:{display:"flex",gap:"var(--spacing-3)",alignItems:"center"},children:[e.jsxs(l,{variant:"secondary",onClick:()=>o(!r),children:["Toggle: ",r?"Open":"Closed"]}),e.jsx(f,{trigger:e.jsx(l,{children:"Controlled"}),content:e.jsx("p",{style:{margin:0},children:"This is controlled externally"}),open:r,onOpenChange:o,triggerType:"manual"})]})}},A={render:()=>{const r=["top-start","top","top-end","left-start","left","left-end","right-start","right","right-end","bottom-start","bottom","bottom-end"];return e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"var(--spacing-12)",padding:"100px"},children:r.map(o=>e.jsx(f,{trigger:e.jsx(l,{size:"sm",children:o}),content:e.jsx("p",{style:{margin:0,fontSize:"var(--font-size-12)"},children:o}),placement:o},o))})}},q={render:()=>e.jsx(f,{trigger:e.jsx(l,{variant:"secondary",children:"Options"}),content:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-1)",margin:"calc(var(--spacing-2) * -1)"},children:["Edit","Duplicate","Archive","Delete"].map(r=>e.jsx("button",{style:{padding:"var(--spacing-2) var(--spacing-3)",textAlign:"left",background:"none",border:"none",cursor:"pointer",borderRadius:"var(--radius-sm)",fontSize:"var(--font-size-14)",color:r==="Delete"?"var(--status-error)":"var(--text-primary)"},onMouseEnter:o=>{o.currentTarget.style.background="var(--surface-subtle)"},onMouseLeave:o=>{o.currentTarget.style.background="none"},children:r},r))}),placement:"bottom-start",showArrow:!1})},V={render:()=>e.jsx(f,{trigger:e.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"20px",height:"20px",borderRadius:"50%",background:"var(--surface-subtle)",fontSize:"var(--font-size-12)",cursor:"help"},children:"?"}),content:e.jsx("p",{style:{margin:0,fontSize:"var(--font-size-12)"},children:"This is a helpful explanation that provides more context about the feature."}),triggerType:"hover",placement:"top",openDelay:200})};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <Button>Click me</Button>,
    content: <div>
        <p style={{
        margin: 0
      }}>This is the popover content.</p>
      </div>
  }
}`,...B.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <Button>Top Popover</Button>,
    content: <p style={{
      margin: 0
    }}>Popover appears above</p>,
    placement: 'top'
  }
}`,...C.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <Button>Left Popover</Button>,
    content: <p style={{
      margin: 0
    }}>Popover appears to the left</p>,
    placement: 'left'
  }
}`,...E.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <Button>Right Popover</Button>,
    content: <p style={{
      margin: 0
    }}>Popover appears to the right</p>,
    placement: 'right'
  }
}`,..._.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <Button>Hover me</Button>,
    content: <p style={{
      margin: 0
    }}>This appears on hover</p>,
    triggerType: 'hover'
  }
}`,...z.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <Button>Focus me</Button>,
    content: <p style={{
      margin: 0
    }}>This appears on focus</p>,
    triggerType: 'focus'
  }
}`,...S.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <Button>No Arrow</Button>,
    content: <p style={{
      margin: 0
    }}>Popover without arrow</p>,
    showArrow: false
  }
}`,...O.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <Button>View Details</Button>,
    content: <div>
        <h4 style={{
        margin: '0 0 var(--spacing-2) 0',
        fontWeight: 'var(--font-weight-medium)'
      }}>User Profile</h4>
        <p style={{
        margin: '0 0 var(--spacing-2) 0',
        fontSize: 'var(--font-size-14)',
        color: 'var(--text-secondary)'
      }}>
          John Doe
        </p>
        <p style={{
        margin: '0 0 var(--spacing-3) 0',
        fontSize: 'var(--font-size-12)',
        color: 'var(--text-tertiary)'
      }}>
          john.doe@example.com
        </p>
        <Button size="sm" variant="secondary" fullWidth>
          View Full Profile
        </Button>
      </div>
  }
}`,...D.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div style={{
      display: 'flex',
      gap: 'var(--spacing-3)',
      alignItems: 'center'
    }}>
        <Button variant="secondary" onClick={() => setOpen(!open)}>
          Toggle: {open ? 'Open' : 'Closed'}
        </Button>
        <Popover trigger={<Button>Controlled</Button>} content={<p style={{
        margin: 0
      }}>This is controlled externally</p>} open={open} onOpenChange={setOpen} triggerType="manual" />
      </div>;
  }
}`,...L.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    const placements = ['top-start', 'top', 'top-end', 'left-start', 'left', 'left-end', 'right-start', 'right', 'right-end', 'bottom-start', 'bottom', 'bottom-end'] as const;
    return <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--spacing-12)',
      padding: '100px'
    }}>
        {placements.map(placement => <Popover key={placement} trigger={<Button size="sm">{placement}</Button>} content={<p style={{
        margin: 0,
        fontSize: 'var(--font-size-12)'
      }}>{placement}</p>} placement={placement} />)}
      </div>;
  }
}`,...A.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <Popover trigger={<Button variant="secondary">Options</Button>} content={<div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-1)',
    margin: 'calc(var(--spacing-2) * -1)'
  }}>
          {['Edit', 'Duplicate', 'Archive', 'Delete'].map(action => <button key={action} style={{
      padding: 'var(--spacing-2) var(--spacing-3)',
      textAlign: 'left',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      borderRadius: 'var(--radius-sm)',
      fontSize: 'var(--font-size-14)',
      color: action === 'Delete' ? 'var(--status-error)' : 'var(--text-primary)'
    }} onMouseEnter={e => {
      e.currentTarget.style.background = 'var(--surface-subtle)';
    }} onMouseLeave={e => {
      e.currentTarget.style.background = 'none';
    }}>
              {action}
            </button>)}
        </div>} placement="bottom-start" showArrow={false} />
}`,...q.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <Popover trigger={<span style={{
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    background: 'var(--surface-subtle)',
    fontSize: 'var(--font-size-12)',
    cursor: 'help'
  }}>
          ?
        </span>} content={<p style={{
    margin: 0,
    fontSize: 'var(--font-size-12)'
  }}>
          This is a helpful explanation that provides more context about the feature.
        </p>} triggerType="hover" placement="top" openDelay={200} />
}`,...V.parameters?.docs?.source}}};const fe=["Default","TopPlacement","LeftPlacement","RightPlacement","HoverTrigger","FocusTrigger","WithoutArrow","RichContent","ControlledPopover","AllPlacements","MenuExample","TooltipLike"];export{A as AllPlacements,L as ControlledPopover,B as Default,S as FocusTrigger,z as HoverTrigger,E as LeftPlacement,q as MenuExample,D as RichContent,_ as RightPlacement,V as TooltipLike,C as TopPlacement,O as WithoutArrow,fe as __namedExportsOrder,ge as default};
