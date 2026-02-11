import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as a}from"./index-Bi6L2ga8.js";import{r as q}from"./index-Dmh4UR0O.js";import{B as i}from"./Button-C5l-MScQ.js";import"./index-D1UQZLgm.js";const F="_container_12om0_9",V="_toast_12om0_64",$="_slideIn_12om0_1",Y="_exiting_12om0_77",z="_slideOut_12om0_1",H="_slideInLeft_12om0_1",G="_slideOutLeft_12om0_1",J="_slideInCenter_12om0_1",K="_slideOutCenter_12om0_1",Q="_info_12om0_173",X="_icon_12om0_173",Z="_success_12om0_177",ee="_warning_12om0_181",te="_error_12om0_185",oe="_content_12om0_199",ne="_title_12om0_204",se="_message_12om0_212",re="_action_12om0_223",ae="_closeButton_12om0_246",u={container:F,"top-left":"_top-left_12om0_25","top-center":"_top-center_12om0_30","top-right":"_top-right_12om0_36","bottom-left":"_bottom-left_12om0_41","bottom-center":"_bottom-center_12om0_47","bottom-right":"_bottom-right_12om0_54",toast:V,slideIn:$,exiting:Y,slideOut:z,slideInLeft:H,slideOutLeft:G,slideInCenter:J,slideOutCenter:K,info:Q,icon:X,success:Z,warning:ee,error:te,content:oe,title:ne,message:se,action:re,closeButton:ae};let ie=0;const ce=()=>`toast-${++ie}`,M=a.createContext(null),p=()=>{const t=a.useContext(M);if(!t)throw new Error("useToast must be used within a ToastProvider");return t},le=({toast:t,onDismiss:o})=>{const[c,n]=a.useState(!1),s=a.useRef(null),m=a.useCallback(()=>{n(!0),setTimeout(()=>{o(t.id),t.onDismiss?.()},200)},[t,o]);a.useEffect(()=>{if(t.duration&&t.duration>0)return s.current=setTimeout(m,t.duration),()=>{s.current&&clearTimeout(s.current)}},[t.duration,m]);const d=()=>{s.current&&clearTimeout(s.current)},f=()=>{t.duration&&t.duration>0&&(s.current=setTimeout(m,t.duration))},P=[u.toast,u[t.variant||"info"],c&&u.exiting].filter(Boolean).join(" "),S=()=>{switch(t.variant){case"success":return e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",children:e.jsx("path",{d:"M16.667 5L7.5 14.167 3.333 10",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})});case"error":return e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",children:[e.jsx("circle",{cx:"10",cy:"10",r:"7.5",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{d:"M10 6v5M10 13.5v.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]});case"warning":return e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",children:[e.jsx("path",{d:"M8.57 3.216L1.538 15.143a1.667 1.667 0 001.429 2.524h14.066a1.667 1.667 0 001.429-2.524L11.43 3.216a1.667 1.667 0 00-2.858 0z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M10 7.5v3.333M10 14.167h.008",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]});default:return e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",children:[e.jsx("circle",{cx:"10",cy:"10",r:"7.5",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{d:"M10 9v4.5M10 6.5v.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}};return e.jsxs("div",{className:P,role:"alert","aria-live":"polite",onMouseEnter:d,onMouseLeave:f,children:[e.jsx("span",{className:u.icon,"aria-hidden":"true",children:S()}),e.jsxs("div",{className:u.content,children:[t.title&&e.jsx("div",{className:u.title,children:t.title}),e.jsx("div",{className:u.message,children:t.message})]}),t.action&&e.jsx("button",{type:"button",className:u.action,onClick:()=>{t.action?.onClick(),m()},children:t.action.label}),t.dismissible!==!1&&e.jsx("button",{type:"button",className:u.closeButton,onClick:m,"aria-label":"Dismiss",children:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:e.jsx("path",{d:"M12 4L4 12M4 4l8 8",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]})},h=({children:t,position:o="bottom-right",maxToasts:c=5,defaultDuration:n=5e3})=>{const[s,m]=a.useState([]),d=a.useCallback(r=>{const l=ce(),A={id:l,duration:n,dismissible:!0,variant:"info",...r};return m(R=>{const N=[...R,A];return N.length>c?N.slice(-c):N}),l},[n,c]),f=a.useCallback(r=>{m(l=>l.filter(A=>A.id!==r))},[]),P=a.useCallback(()=>{m([])},[]),S=a.useCallback((r,l)=>d({message:r,variant:"info",...l}),[d]),I=a.useCallback((r,l)=>d({message:r,variant:"success",...l}),[d]),W=a.useCallback((r,l)=>d({message:r,variant:"warning",...l}),[d]),O=a.useCallback((r,l)=>d({message:r,variant:"error",...l}),[d]),E={toast:d,info:S,success:I,warning:W,error:O,dismiss:f,dismissAll:P},U=[u.container,u[o]].filter(Boolean).join(" ");return e.jsxs(M.Provider,{value:E,children:[t,s.length>0&&q.createPortal(e.jsx("div",{className:U,"aria-label":"Notifications",children:s.map(r=>e.jsx(le,{toast:r,onDismiss:f},r.id))}),document.body)]})};h.displayName="ToastProvider";h.__docgenInfo={description:"Toast Provider Component",methods:[],displayName:"ToastProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Children to wrap"},position:{required:!1,tsType:{name:"union",raw:`| 'top-left'
| 'top-center'
| 'top-right'
| 'bottom-left'
| 'bottom-center'
| 'bottom-right'`,elements:[{name:"literal",value:"'top-left'"},{name:"literal",value:"'top-center'"},{name:"literal",value:"'top-right'"},{name:"literal",value:"'bottom-left'"},{name:"literal",value:"'bottom-center'"},{name:"literal",value:"'bottom-right'"}]},description:`Default position for toasts
@default 'bottom-right'`,defaultValue:{value:"'bottom-right'",computed:!1}},maxToasts:{required:!1,tsType:{name:"number"},description:`Maximum number of toasts to show at once
@default 5`,defaultValue:{value:"5",computed:!1}},defaultDuration:{required:!1,tsType:{name:"number"},description:`Default duration for toasts
@default 5000`,defaultValue:{value:"5000",computed:!1}}}};const ge={title:"Components/Feedback/Toast",component:h,parameters:{layout:"centered"},tags:["autodocs"],decorators:[t=>e.jsx(h,{children:e.jsx(t,{})})]},g=()=>{const{toast:t,success:o,error:c,warning:n,info:s}=p();return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-3)"},children:[e.jsx(i,{onClick:()=>t({message:"This is a basic toast notification"}),children:"Basic Toast"}),e.jsx(i,{onClick:()=>o("Operation completed successfully!"),children:"Success Toast"}),e.jsx(i,{onClick:()=>c("Something went wrong. Please try again."),children:"Error Toast"}),e.jsx(i,{onClick:()=>n("Please review your changes before proceeding."),children:"Warning Toast"}),e.jsx(i,{onClick:()=>s("Here is some helpful information."),children:"Info Toast"})]})},T={render:()=>e.jsx(g,{})},C={render:()=>{const t=()=>{const{toast:o}=p();return e.jsx(i,{onClick:()=>o({title:"File uploaded",message:"Your file has been uploaded successfully and is now being processed.",variant:"success"}),children:"Toast with Title"})};return e.jsx(t,{})}},x={render:()=>{const t=()=>{const{toast:o}=p();return e.jsx(i,{onClick:()=>o({message:"Item moved to trash",action:{label:"Undo",onClick:()=>console.log("Undo clicked")}}),children:"Toast with Action"})};return e.jsx(t,{})}},v={render:()=>{const t=()=>{const{toast:o}=p();return e.jsx(i,{onClick:()=>o({message:"This toast will stay for 10 seconds",duration:1e4}),children:"Long Duration (10s)"})};return e.jsx(t,{})}},_={render:()=>{const t=()=>{const{toast:o}=p();return e.jsx(i,{onClick:()=>o({message:"This toast cannot be manually dismissed",dismissible:!1,duration:3e3}),children:"Non-dismissible Toast"})};return e.jsx(t,{})}},k={render:()=>{const t=()=>{const{toast:o}=p();return e.jsx(i,{onClick:()=>o({title:"Action Required",message:"Please complete your profile to continue.",duration:0,action:{label:"Complete Profile",onClick:()=>console.log("Navigate to profile")}}),children:"Persistent Toast"})};return e.jsx(t,{})}},j={render:()=>{const t=()=>{const{success:o,error:c,warning:n,info:s}=p();return e.jsx(i,{onClick:()=>{o("File saved"),setTimeout(()=>n("Low storage space"),200),setTimeout(()=>c("Upload failed"),400),setTimeout(()=>s("3 new messages"),600)},children:"Show Multiple Toasts"})};return e.jsx(t,{})}},b={render:()=>{const t=()=>{const{success:o,warning:c,error:n,dismissAll:s}=p();return e.jsxs("div",{style:{display:"flex",gap:"var(--spacing-3)"},children:[e.jsx(i,{onClick:()=>{o("Toast 1"),setTimeout(()=>c("Toast 2"),100),setTimeout(()=>n("Toast 3"),200)},children:"Show Toasts"}),e.jsx(i,{variant:"secondary",onClick:s,children:"Dismiss All"})]})};return e.jsx(t,{})}},w={render:()=>e.jsx(h,{position:"top-right",children:e.jsx(g,{})}),decorators:[]},y={render:()=>e.jsx(h,{position:"top-center",children:e.jsx(g,{})}),decorators:[]},B={render:()=>e.jsx(h,{position:"bottom-left",children:e.jsx(g,{})}),decorators:[]},L={render:()=>e.jsx(h,{position:"bottom-center",children:e.jsx(g,{})}),decorators:[]},D={render:()=>{const t=()=>{const{toast:o}=p(),c=["info","success","warning","error"];return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-3)"},children:c.map(n=>e.jsx(i,{onClick:()=>o({title:`${n.charAt(0).toUpperCase()+n.slice(1)} Notification`,message:`This is a ${n} toast message.`,variant:n}),children:n.charAt(0).toUpperCase()+n.slice(1)},n))})};return e.jsx(t,{})}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <ToastDemo />
}`,...T.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const Component = () => {
      const {
        toast
      } = useToast();
      return <Button onClick={() => toast({
        title: 'File uploaded',
        message: 'Your file has been uploaded successfully and is now being processed.',
        variant: 'success'
      })}>
          Toast with Title
        </Button>;
    };
    return <Component />;
  }
}`,...C.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const Component = () => {
      const {
        toast
      } = useToast();
      return <Button onClick={() => toast({
        message: 'Item moved to trash',
        action: {
          label: 'Undo',
          onClick: () => console.log('Undo clicked')
        }
      })}>
          Toast with Action
        </Button>;
    };
    return <Component />;
  }
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const Component = () => {
      const {
        toast
      } = useToast();
      return <Button onClick={() => toast({
        message: 'This toast will stay for 10 seconds',
        duration: 10000
      })}>
          Long Duration (10s)
        </Button>;
    };
    return <Component />;
  }
}`,...v.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const Component = () => {
      const {
        toast
      } = useToast();
      return <Button onClick={() => toast({
        message: 'This toast cannot be manually dismissed',
        dismissible: false,
        duration: 3000
      })}>
          Non-dismissible Toast
        </Button>;
    };
    return <Component />;
  }
}`,..._.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const Component = () => {
      const {
        toast
      } = useToast();
      return <Button onClick={() => toast({
        title: 'Action Required',
        message: 'Please complete your profile to continue.',
        duration: 0,
        action: {
          label: 'Complete Profile',
          onClick: () => console.log('Navigate to profile')
        }
      })}>
          Persistent Toast
        </Button>;
    };
    return <Component />;
  }
}`,...k.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const Component = () => {
      const {
        success,
        error,
        warning,
        info
      } = useToast();
      return <Button onClick={() => {
        success('File saved');
        setTimeout(() => warning('Low storage space'), 200);
        setTimeout(() => error('Upload failed'), 400);
        setTimeout(() => info('3 new messages'), 600);
      }}>
          Show Multiple Toasts
        </Button>;
    };
    return <Component />;
  }
}`,...j.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const Component = () => {
      const {
        success,
        warning,
        error,
        dismissAll
      } = useToast();
      return <div style={{
        display: 'flex',
        gap: 'var(--spacing-3)'
      }}>
          <Button onClick={() => {
          success('Toast 1');
          setTimeout(() => warning('Toast 2'), 100);
          setTimeout(() => error('Toast 3'), 200);
        }}>
            Show Toasts
          </Button>
          <Button variant="secondary" onClick={dismissAll}>
            Dismiss All
          </Button>
        </div>;
    };
    return <Component />;
  }
}`,...b.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <ToastProvider position="top-right">
      <ToastDemo />
    </ToastProvider>,
  decorators: [] // Override default decorator
}`,...w.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <ToastProvider position="top-center">
      <ToastDemo />
    </ToastProvider>,
  decorators: []
}`,...y.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <ToastProvider position="bottom-left">
      <ToastDemo />
    </ToastProvider>,
  decorators: []
}`,...B.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <ToastProvider position="bottom-center">
      <ToastDemo />
    </ToastProvider>,
  decorators: []
}`,...L.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    const Component = () => {
      const {
        toast
      } = useToast();
      const variants = ['info', 'success', 'warning', 'error'] as const;
      return <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-3)'
      }}>
          {variants.map(variant => <Button key={variant} onClick={() => toast({
          title: \`\${variant.charAt(0).toUpperCase() + variant.slice(1)} Notification\`,
          message: \`This is a \${variant} toast message.\`,
          variant
        })}>
              {variant.charAt(0).toUpperCase() + variant.slice(1)}
            </Button>)}
        </div>;
    };
    return <Component />;
  }
}`,...D.parameters?.docs?.source}}};const fe=["Default","WithTitle","WithAction","LongDuration","NoDismiss","PersistentToast","MultipleToasts","DismissAll","TopRight","TopCenter","BottomLeft","BottomCenter","AllVariants"];export{D as AllVariants,L as BottomCenter,B as BottomLeft,T as Default,b as DismissAll,v as LongDuration,j as MultipleToasts,_ as NoDismiss,k as PersistentToast,y as TopCenter,w as TopRight,x as WithAction,C as WithTitle,fe as __namedExportsOrder,ge as default};
