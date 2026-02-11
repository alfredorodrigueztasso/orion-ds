import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as k}from"./index-Bi6L2ga8.js";import{B as R}from"./bell-B0mciaZ5.js";import{C as B}from"./check-DDKQb6IN.js";import{X as L}from"./x-Dd336Dmd.js";import{C as z,I as E}from"./info-DJ_xuc1q.js";import{T as P}from"./triangle-alert-CPxB8gZu.js";import{C as $}from"./circle-check-big-CA7x2PYe.js";import"./createLucideIcon-DprCCbyf.js";const Y="_notificationCenter_1i45p_8",Z="_header_1i45p_23",G="_headerTitle_1i45p_31",W="_badge_1i45p_41",O="_headerActions_1i45p_52",U="_headerAction_1i45p_52",X="_content_1i45p_76",F="_group_1i45p_80",J="_groupTitle_1i45p_84",K="_item_1i45p_99",Q="_itemClickable_1i45p_113",ee="_itemRead_1i45p_122",te="_itemLeft_1i45p_126",se="_itemAvatar_1i45p_130",ae="_itemIcon_1i45p_137",ie="_itemContent_1i45p_171",oe="_itemHeader_1i45p_176",ne="_itemTitle_1i45p_182",re="_unreadDot_1i45p_189",le="_itemMessage_1i45p_197",ce="_itemTime_1i45p_209",de="_itemActions_1i45p_217",me="_itemAction_1i45p_217",pe="_empty_1i45p_252",ue="_loading_1i45p_271",ge="_spinner_1i45p_278",fe="_spin_1i45p_278",_e="_footer_1i45p_297",he="_footerAction_1i45p_306",ye="_footerActionPrimary_1i45p_321",s={notificationCenter:Y,header:Z,headerTitle:G,badge:W,headerActions:O,headerAction:U,content:X,group:F,groupTitle:J,item:K,itemClickable:Q,itemRead:ee,itemLeft:te,itemAvatar:se,itemIcon:ae,"icon-info":"_icon-info_1i45p_146","icon-success":"_icon-success_1i45p_151","icon-warning":"_icon-warning_1i45p_156","icon-error":"_icon-error_1i45p_161","icon-default":"_icon-default_1i45p_166",itemContent:ie,itemHeader:oe,itemTitle:ne,unreadDot:re,itemMessage:le,itemTime:ce,itemActions:de,itemAction:me,empty:pe,loading:ue,spinner:ge,spin:fe,footer:_e,footerAction:he,footerActionPrimary:ye},Ae={info:t.jsx(E,{size:18}),success:t.jsx($,{size:18}),warning:t.jsx(P,{size:18}),error:t.jsx(z,{size:18}),default:t.jsx(R,{size:18})},b=({notification:e,onMarkAsRead:a,onDismiss:c})=>{const p=e.icon||Ae[e.type||"default"],n=e.href||e.onClick,l=()=>{e.onClick&&e.onClick(),!e.read&&a&&a(e.id)},r=t.jsxs(t.Fragment,{children:[t.jsx("div",{className:s.itemLeft,children:e.avatar?t.jsx("img",{src:e.avatar,alt:"",className:s.itemAvatar}):t.jsx("div",{className:`${s.itemIcon} ${s[`icon-${e.type||"default"}`]}`,children:p})}),t.jsxs("div",{className:s.itemContent,children:[t.jsxs("div",{className:s.itemHeader,children:[t.jsx("span",{className:s.itemTitle,children:e.title}),!e.read&&t.jsx("span",{className:s.unreadDot})]}),e.message&&t.jsx("p",{className:s.itemMessage,children:e.message}),t.jsx("span",{className:s.itemTime,children:e.relativeTime||e.timestamp})]}),t.jsxs("div",{className:s.itemActions,children:[!e.read&&a&&t.jsx("button",{type:"button",className:s.itemAction,onClick:o=>{o.stopPropagation(),a(e.id)},title:"Mark as read",children:t.jsx(B,{size:14})}),c&&t.jsx("button",{type:"button",className:s.itemAction,onClick:o=>{o.stopPropagation(),c(e.id)},title:"Dismiss",children:t.jsx(L,{size:14})})]})]});return e.href?t.jsx("a",{href:e.href,className:`${s.item} ${e.read?s.itemRead:""}`,onClick:l,children:r}):t.jsx("div",{className:`${s.item} ${e.read?s.itemRead:""} ${n?s.itemClickable:""}`,onClick:n?l:void 0,role:n?"button":void 0,tabIndex:n?0:void 0,children:r})},M=k.forwardRef(({notifications:e,onMarkAsRead:a,onMarkAllAsRead:c,onDismiss:p,onClearAll:n,onViewAll:l,title:r="Notifications",emptyMessage:o="No notifications",loading:d=!1,maxHeight:D="400px",groupByCategory:j=!1,showUnreadCount:V=!0,className:S,...I},q)=>{const T=k.useMemo(()=>e.filter(i=>!i.read).length,[e]),w=k.useMemo(()=>{if(!j)return null;const i={};return e.forEach(x=>{const u=x.category||"Other";i[u]||(i[u]=[]),i[u].push(x)}),i},[e,j]),H=[s.notificationCenter,S].filter(Boolean).join(" ");return t.jsxs("div",{ref:q,className:H,...I,children:[t.jsxs("div",{className:s.header,children:[t.jsxs("div",{className:s.headerTitle,children:[t.jsx("span",{children:r}),V&&T>0&&t.jsx("span",{className:s.badge,children:T})]}),t.jsx("div",{className:s.headerActions,children:c&&T>0&&t.jsx("button",{type:"button",className:s.headerAction,onClick:c,children:"Mark all as read"})})]}),t.jsx("div",{className:s.content,style:{maxHeight:D},children:d?t.jsx("div",{className:s.loading,children:t.jsx("div",{className:s.spinner})}):e.length===0?t.jsxs("div",{className:s.empty,children:[t.jsx(R,{size:32}),t.jsx("span",{children:o})]}):j&&w?Object.entries(w).map(([i,x])=>t.jsxs("div",{className:s.group,children:[t.jsx("div",{className:s.groupTitle,children:i}),x.map(u=>t.jsx(b,{notification:u,onMarkAsRead:a,onDismiss:p},u.id))]},i)):e.map(i=>t.jsx(b,{notification:i,onMarkAsRead:a,onDismiss:p},i.id))}),(l||n)&&e.length>0&&t.jsxs("div",{className:s.footer,children:[n&&t.jsx("button",{type:"button",className:s.footerAction,onClick:n,children:"Clear all"}),l&&t.jsx("button",{type:"button",className:s.footerActionPrimary,onClick:l,children:"View all notifications"})]})]})});M.displayName="NotificationCenter";M.__docgenInfo={description:"",methods:[],displayName:"NotificationCenter",props:{notifications:{required:!0,tsType:{name:"Array",elements:[{name:"NotificationItem"}],raw:"NotificationItem[]"},description:"Notification items"},onMarkAsRead:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:"Mark single notification as read"},onMarkAllAsRead:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Mark all notifications as read"},onDismiss:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:"Delete/dismiss notification"},onClearAll:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Clear all notifications"},onViewAll:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"View all link/action"},title:{required:!1,tsType:{name:"string"},description:`Header title
@default "Notifications"`,defaultValue:{value:"'Notifications'",computed:!1}},emptyMessage:{required:!1,tsType:{name:"string"},description:`Empty state message
@default "No notifications"`,defaultValue:{value:"'No notifications'",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"Loading state",defaultValue:{value:"false",computed:!1}},maxHeight:{required:!1,tsType:{name:"string"},description:"Maximum height before scrolling",defaultValue:{value:"'400px'",computed:!1}},groupByCategory:{required:!1,tsType:{name:"boolean"},description:`Group notifications by category
@default false`,defaultValue:{value:"false",computed:!1}},showUnreadCount:{required:!1,tsType:{name:"boolean"},description:`Show unread count badge
@default true`,defaultValue:{value:"true",computed:!1}}},composes:["HTMLAttributes"]};const be={title:"Sections/App/NotificationCenter",component:M,parameters:{layout:"centered"},tags:["autodocs"]},m=[{id:"1",type:"info",title:"New comment on your post",message:'John Doe commented on "Getting started with React"',timestamp:"2024-02-10T10:30:00Z",relativeTime:"2 min ago",read:!1,href:"/posts/1#comments"},{id:"2",type:"success",title:"Deployment successful",message:"Your latest changes have been deployed to production.",timestamp:"2024-02-10T10:15:00Z",relativeTime:"15 min ago",read:!1,category:"System"},{id:"3",type:"warning",title:"Storage almost full",message:"You have used 90% of your storage quota.",timestamp:"2024-02-10T09:00:00Z",relativeTime:"1 hour ago",read:!1,category:"System"},{id:"4",type:"default",title:"Team invitation",message:"Sarah invited you to join the Design team.",timestamp:"2024-02-10T08:30:00Z",relativeTime:"2 hours ago",read:!0,avatar:"https://i.pravatar.cc/150?img=5",category:"Social"},{id:"5",type:"error",title:"Payment failed",message:"We could not process your payment. Please update your billing info.",timestamp:"2024-02-09T18:00:00Z",relativeTime:"Yesterday",read:!0,category:"Billing"},{id:"6",type:"default",title:"New follower",message:"Mike started following you.",timestamp:"2024-02-09T15:00:00Z",relativeTime:"Yesterday",read:!0,avatar:"https://i.pravatar.cc/150?img=8",category:"Social"}],g={args:{notifications:m,onMarkAsRead:e=>console.log("Mark as read:",e),onMarkAllAsRead:()=>console.log("Mark all as read"),onDismiss:e=>console.log("Dismiss:",e),onViewAll:()=>console.log("View all")}},f={render:()=>{const[e,a]=k.useState(m),c=r=>{a(o=>o.map(d=>d.id===r?{...d,read:!0}:d))},p=()=>{a(r=>r.map(o=>({...o,read:!0})))},n=r=>{a(o=>o.filter(d=>d.id!==r))},l=()=>{a([])};return t.jsx(M,{notifications:e,onMarkAsRead:c,onMarkAllAsRead:p,onDismiss:n,onClearAll:l,onViewAll:()=>alert("View all notifications")})}},_={args:{notifications:m,groupByCategory:!0,onMarkAsRead:e=>console.log("Mark as read:",e),onMarkAllAsRead:()=>console.log("Mark all as read")}},h={args:{notifications:[],emptyMessage:"You're all caught up!"}},y={args:{notifications:[],loading:!0}},A={args:{notifications:m,showUnreadCount:!1,onMarkAsRead:e=>console.log("Mark as read:",e)}},v={args:{notifications:m.slice(0,3),title:"Activity",onMarkAsRead:e=>console.log("Mark as read:",e),onViewAll:()=>console.log("View all")}},N={args:{notifications:m,maxHeight:"250px",onMarkAsRead:e=>console.log("Mark as read:",e)}},C={args:{notifications:m.map(e=>({...e,read:!0})),onDismiss:e=>console.log("Dismiss:",e),onClearAll:()=>console.log("Clear all"),onViewAll:()=>console.log("View all")}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    notifications: sampleNotifications,
    onMarkAsRead: (id: string) => console.log('Mark as read:', id),
    onMarkAllAsRead: () => console.log('Mark all as read'),
    onDismiss: (id: string) => console.log('Dismiss:', id),
    onViewAll: () => console.log('View all')
  }
}`,...g.parameters?.docs?.source},description:{story:"Default NotificationCenter with sample notifications",...g.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [notifications, setNotifications] = useState<NotificationItem[]>(sampleNotifications);
    const handleMarkAsRead = (id: string) => {
      setNotifications(prev => prev.map(n => n.id === id ? {
        ...n,
        read: true
      } : n));
    };
    const handleMarkAllAsRead = () => {
      setNotifications(prev => prev.map(n => ({
        ...n,
        read: true
      })));
    };
    const handleDismiss = (id: string) => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    };
    const handleClearAll = () => {
      setNotifications([]);
    };
    return <NotificationCenter notifications={notifications} onMarkAsRead={handleMarkAsRead} onMarkAllAsRead={handleMarkAllAsRead} onDismiss={handleDismiss} onClearAll={handleClearAll} onViewAll={() => alert('View all notifications')} />;
  }
}`,...f.parameters?.docs?.source},description:{story:"Interactive NotificationCenter with state management",...f.parameters?.docs?.description}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    notifications: sampleNotifications,
    groupByCategory: true,
    onMarkAsRead: (id: string) => console.log('Mark as read:', id),
    onMarkAllAsRead: () => console.log('Mark all as read')
  }
}`,..._.parameters?.docs?.source},description:{story:"Grouped by category",..._.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    notifications: [],
    emptyMessage: 'You\\'re all caught up!'
  }
}`,...h.parameters?.docs?.source},description:{story:"Empty state",...h.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    notifications: [],
    loading: true
  }
}`,...y.parameters?.docs?.source},description:{story:"Loading state",...y.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    notifications: sampleNotifications,
    showUnreadCount: false,
    onMarkAsRead: (id: string) => console.log('Mark as read:', id)
  }
}`,...A.parameters?.docs?.source},description:{story:"Without unread badge",...A.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    notifications: sampleNotifications.slice(0, 3),
    title: 'Activity',
    onMarkAsRead: (id: string) => console.log('Mark as read:', id),
    onViewAll: () => console.log('View all')
  }
}`,...v.parameters?.docs?.source},description:{story:"Custom title",...v.parameters?.docs?.description}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    notifications: sampleNotifications,
    maxHeight: '250px',
    onMarkAsRead: (id: string) => console.log('Mark as read:', id)
  }
}`,...N.parameters?.docs?.source},description:{story:"With custom max height",...N.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    notifications: sampleNotifications.map(n => ({
      ...n,
      read: true
    })),
    onDismiss: (id: string) => console.log('Dismiss:', id),
    onClearAll: () => console.log('Clear all'),
    onViewAll: () => console.log('View all')
  }
}`,...C.parameters?.docs?.source},description:{story:"All read",...C.parameters?.docs?.description}}};const Re=["Default","Interactive","GroupedByCategory","Empty","Loading","WithoutBadge","CustomTitle","CustomMaxHeight","AllRead"];export{C as AllRead,N as CustomMaxHeight,v as CustomTitle,g as Default,h as Empty,_ as GroupedByCategory,f as Interactive,y as Loading,A as WithoutBadge,Re as __namedExportsOrder,be as default};
