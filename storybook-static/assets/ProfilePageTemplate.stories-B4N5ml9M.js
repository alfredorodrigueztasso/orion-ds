import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as B}from"./index-Bi6L2ga8.js";import{S as H}from"./Sidebar-Bm4CyupK.js";import{P as N}from"./PageHeader-CDlIDpAo.js";import{A as k}from"./ActivityFeed-BDb9XJJo.js";import{D}from"./DetailPanel-pvpFAb0T.js";import{B as o}from"./Button-C5l-MScQ.js";import{B as s}from"./Badge-CTnzlsKR.js";import{C as r}from"./Card-BimbyH8z.js";import{F as f}from"./FormSection-BhKFvmEk.js";import{F as h}from"./Field-q4DqLIqo.js";import{T as V}from"./Textarea-BZiGY5vV.js";import{M as v}from"./message-square-9wXJwYnY.js";import{S as C}from"./square-pen-Becd8mc9.js";import{M as x}from"./mail-B1OdJ1bA.js";import{M as T}from"./map-pin-0MytI99a.js";import{C as L}from"./calendar-BjEn5mzX.js";import{H as q}from"./house-Bwi52rpT.js";import{U}from"./users-B3aIcKNm.js";import{S as G}from"./settings-DVkWYkkM.js";import{P as O}from"./phone-D_YpRfIr.js";import{G as W}from"./globe-CaDiCyrV.js";import"./chevron-right-BuTIk0ZE.js";import"./createLucideIcon-DprCCbyf.js";import"./chevron-left-D9uTS5hk.js";import"./chevron-down-buXKF-gJ.js";import"./user-plus-ieu4bY2k.js";import"./upload-DDi9KpFe.js";import"./circle-check-big-CA7x2PYe.js";import"./trash-2-B67onKV4.js";import"./plus-_oTOY7dX.js";import"./x-Dd336Dmd.js";import"./circle-alert-BMPEDkj1.js";const Y="_profilePage_1ik3a_8",J="_main_1ik3a_16",Q="_content_1ik3a_26",K="_contentNoAside_1ik3a_34",X="_profileHeader_1ik3a_42",Z="_profileAvatar_1ik3a_66",$="_profileInfo_1ik3a_88",ee="_profileName_1ik3a_96",ae="_profileRole_1ik3a_112",ie="_profileMeta_1ik3a_130",re="_profileMetaItem_1ik3a_137",te="_profileActions_1ik3a_152",se="_mainContent_1ik3a_163",oe="_aside_1ik3a_173",a={profilePage:Y,main:J,content:Q,contentNoAside:K,profileHeader:X,profileAvatar:Z,profileInfo:$,profileName:ee,profileRole:ae,profileMeta:ie,profileMetaItem:re,profileActions:te,mainContent:se,aside:oe},y=B.forwardRef(({sidebar:b,pageHeader:S,profile:i,children:I,activityFeed:u,detailPanel:P,showActivity:A=!0,className:E,...F},M)=>{const w=[a.profilePage,E].filter(Boolean).join(" "),R=[a.content,!(A&&u)&&a.contentNoAside].filter(Boolean).join(" ");return e.jsxs("div",{ref:M,className:w,...F,children:[b&&e.jsx(H,{variant:"floating",...b}),e.jsxs("main",{className:a.main,children:[S&&e.jsx(N,{variant:"transparent",...S}),e.jsxs("div",{className:R,children:[e.jsxs("div",{className:a.mainContent,children:[e.jsxs("div",{className:a.profileHeader,children:[i.avatar&&e.jsx("div",{className:a.profileAvatar,children:i.avatar}),e.jsxs("div",{className:a.profileInfo,children:[e.jsx("h1",{className:a.profileName,children:i.name}),i.role&&e.jsx("p",{className:a.profileRole,children:i.role}),i.metadata&&i.metadata.length>0&&e.jsx("div",{className:a.profileMeta,children:i.metadata.map((_,z)=>e.jsxs("div",{className:a.profileMetaItem,children:[_.icon,e.jsx("span",{children:_.value})]},z))})]}),i.actions&&e.jsx("div",{className:a.profileActions,children:i.actions})]}),I]}),A&&u&&e.jsx("aside",{className:a.aside,children:e.jsx(k,{...u})})]})]}),P&&e.jsx(D,{...P})]})});y.displayName="ProfilePageTemplate";y.__docgenInfo={description:`ProfilePageTemplate - Full profile page composition

Combines Sidebar, PageHeader, Profile card, content sections, and ActivityFeed.

@example
\`\`\`tsx
<ProfilePageTemplate
  sidebar={{ sections: navSections }}
  profile={{
    name: 'John Doe',
    role: 'Software Engineer',
    avatar: <img src="..." alt="" />
  }}
  activityFeed={{ activities: userActivity }}
>
  <ProfileSections />
</ProfilePageTemplate>
\`\`\``,methods:[],displayName:"ProfilePageTemplate",props:{sidebar:{required:!1,tsType:{name:"SidebarProps"},description:"Sidebar configuration (optional)"},pageHeader:{required:!1,tsType:{name:"PageHeaderProps"},description:"Page header configuration"},profile:{required:!0,tsType:{name:"ProfileHeader"},description:"Profile header information"},children:{required:!1,tsType:{name:"ReactNode"},description:"Profile detail sections (rendered in main content)"},activityFeed:{required:!1,tsType:{name:"ActivityFeedProps"},description:"Activity feed showing user activity"},detailPanel:{required:!1,tsType:{name:"DetailPanelProps"},description:"Detail panel for editing profile"},showActivity:{required:!1,tsType:{name:"boolean"},description:`Show activity feed in sidebar
@default true`,defaultValue:{value:"true",computed:!1}}},composes:["HTMLAttributes"]};const Le={title:"Templates/App/Profile",component:y,parameters:{layout:"fullscreen",docs:{description:{component:"A complete profile page template with user info, activity feed, and editable sections."}}},tags:["autodocs"]},ne=[{items:[{id:"dashboard",label:"Dashboard",icon:e.jsx(q,{size:20}),href:"/dashboard"},{id:"team",label:"Team",icon:e.jsx(U,{size:20}),href:"/team"},{id:"settings",label:"Settings",icon:e.jsx(G,{size:20}),href:"/settings"}]}],m={name:"Sarah Chen",role:"Senior Software Engineer",avatar:e.jsx("img",{src:"https://i.pravatar.cc/200?u=sarah",alt:""}),metadata:[{icon:e.jsx(x,{size:16}),label:"Email",value:"sarah@acme.com"},{icon:e.jsx(T,{size:16}),label:"Location",value:"San Francisco, CA"},{icon:e.jsx(L,{size:16}),label:"Joined",value:"March 2022"}],actions:e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"ghost",icon:e.jsx(v,{size:18}),children:"Message"}),e.jsx(o,{variant:"primary",icon:e.jsx(C,{size:18}),children:"Edit Profile"})]})},j=[{id:"1",title:"Updated profile picture",timestamp:"2 hours ago",actor:{name:"Sarah Chen"}},{id:"2",title:"Completed task: API Integration",timestamp:"5 hours ago",actor:{name:"Sarah Chen"}},{id:"3",title:"Joined project: Mobile App",timestamp:"1 day ago",actor:{name:"Sarah Chen"}},{id:"4",title:"Commented on Design Review",timestamp:"2 days ago",actor:{name:"Sarah Chen"}},{id:"5",title:"Received badge: Top Contributor",timestamp:"1 week ago",actor:{name:"Sarah Chen"}}],g=()=>e.jsxs(e.Fragment,{children:[e.jsxs(r,{children:[e.jsx(r.Header,{children:e.jsx("h3",{style:{margin:0},children:"About"})}),e.jsxs(r.Body,{children:[e.jsx("p",{style:{color:"var(--text-secondary)",lineHeight:1.6},children:"Senior Software Engineer with 8+ years of experience building scalable web applications. Passionate about clean code, system design, and mentoring junior developers. Currently focused on building the next generation of developer tools at Acme."}),e.jsxs("div",{style:{marginTop:"var(--spacing-4)",display:"flex",gap:"var(--spacing-2)",flexWrap:"wrap"},children:[e.jsx(s,{variant:"secondary",children:"TypeScript"}),e.jsx(s,{variant:"secondary",children:"React"}),e.jsx(s,{variant:"secondary",children:"Node.js"}),e.jsx(s,{variant:"secondary",children:"GraphQL"}),e.jsx(s,{variant:"secondary",children:"PostgreSQL"})]})]})]}),e.jsxs(r,{children:[e.jsx(r.Header,{children:e.jsx("h3",{style:{margin:0},children:"Contact Information"})}),e.jsx(r.Body,{children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"var(--spacing-4)"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{color:"var(--text-tertiary)",fontSize:"var(--text-sm)",marginBottom:"var(--spacing-1)"},children:"Email"}),e.jsxs("p",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[e.jsx(x,{size:16})," sarah@acme.com"]})]}),e.jsxs("div",{children:[e.jsx("p",{style:{color:"var(--text-tertiary)",fontSize:"var(--text-sm)",marginBottom:"var(--spacing-1)"},children:"Phone"}),e.jsxs("p",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[e.jsx(O,{size:16})," +1 (555) 123-4567"]})]}),e.jsxs("div",{children:[e.jsx("p",{style:{color:"var(--text-tertiary)",fontSize:"var(--text-sm)",marginBottom:"var(--spacing-1)"},children:"Location"}),e.jsxs("p",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[e.jsx(T,{size:16})," San Francisco, CA"]})]}),e.jsxs("div",{children:[e.jsx("p",{style:{color:"var(--text-tertiary)",fontSize:"var(--text-sm)",marginBottom:"var(--spacing-1)"},children:"Website"}),e.jsxs("p",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[e.jsx(W,{size:16})," sarahchen.dev"]})]})]})})]}),e.jsxs(r,{children:[e.jsx(r.Header,{children:e.jsx("h3",{style:{margin:0},children:"Recent Projects"})}),e.jsx(r.Body,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-4)"},children:[e.jsxs("div",{style:{padding:"var(--spacing-3)",backgroundColor:"var(--surface-subtle)",borderRadius:"var(--radius-sm)"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("h4",{style:{margin:0},children:"Mobile App v2"}),e.jsx(s,{variant:"success",children:"Active"})]}),e.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"var(--text-sm)",margin:"var(--spacing-2) 0 0 0"},children:"Lead developer for the mobile app redesign project."})]}),e.jsxs("div",{style:{padding:"var(--spacing-3)",backgroundColor:"var(--surface-subtle)",borderRadius:"var(--radius-sm)"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("h4",{style:{margin:0},children:"API Gateway"}),e.jsx(s,{children:"Completed"})]}),e.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"var(--text-sm)",margin:"var(--spacing-2) 0 0 0"},children:"Architected and implemented the new API gateway."})]})]})})]})]}),t={args:{sidebar:{sections:ne,activeItem:"team",header:e.jsx("div",{style:{padding:"var(--spacing-4)",fontWeight:700,fontSize:"var(--text-xl)"},children:"Acme"})},pageHeader:{title:"Profile",breadcrumbs:[{label:"Team",href:"/team"},{label:"Sarah Chen"}]},profile:m,activityFeed:{title:"Recent Activity",activities:j},children:e.jsx(g,{})}},n={args:{pageHeader:{title:"My Profile",actions:e.jsx(o,{variant:"primary",icon:e.jsx(C,{size:18}),children:"Edit Profile"})},profile:m,activityFeed:{title:"Your Activity",activities:j},children:e.jsx(g,{})}},l={args:{sidebar:t.args?.sidebar,pageHeader:t.args?.pageHeader,profile:m,showActivity:!1,children:e.jsx(g,{})}},c={args:{sidebar:t.args?.sidebar,pageHeader:{title:"Team Member",breadcrumbs:[{label:"Team",href:"/team"},{label:"Sarah Chen"}],actions:e.jsx(o,{variant:"ghost",icon:e.jsx(v,{size:18}),children:"Send Message"})},profile:{...m,actions:e.jsx(o,{variant:"ghost",icon:e.jsx(v,{size:18}),children:"Message"})},activityFeed:{title:"Recent Activity",activities:j},children:e.jsx(g,{})}},d={args:{sidebar:t.args?.sidebar,pageHeader:{title:"Edit Profile",breadcrumbs:[{label:"Settings",href:"/settings"},{label:"Profile"}]},profile:{...m,actions:e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"ghost",children:"Cancel"}),e.jsx(o,{variant:"primary",children:"Save Changes"})]})},showActivity:!1,children:e.jsxs(e.Fragment,{children:[e.jsxs(f,{title:"Personal Information",description:"Update your personal details.",children:[e.jsxs(f.Group,{children:[e.jsx(h,{label:"Full name",defaultValue:"Sarah Chen"}),e.jsx(h,{label:"Email",type:"email",defaultValue:"sarah@acme.com"})]}),e.jsxs(f.Group,{children:[e.jsx(h,{label:"Phone",type:"tel",defaultValue:"+1 (555) 123-4567"}),e.jsx(h,{label:"Location",defaultValue:"San Francisco, CA"})]})]}),e.jsx(f,{title:"Bio",description:"Tell others about yourself.",children:e.jsx(V,{label:"About",rows:4,defaultValue:"Senior Software Engineer with 8+ years of experience..."})})]})}},p={args:{profile:{name:"Sarah Chen",role:"Senior Software Engineer",avatar:e.jsx("img",{src:"https://i.pravatar.cc/200?u=sarah",alt:""}),metadata:[{icon:e.jsx(x,{size:16}),label:"Email",value:"sarah@acme.com"}]},showActivity:!1}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    sidebar: {
      sections: SIDEBAR_SECTIONS,
      activeItem: 'team',
      header: <div style={{
        padding: 'var(--spacing-4)',
        fontWeight: 700,
        fontSize: 'var(--text-xl)'
      }}>
          Acme
        </div>
    },
    pageHeader: {
      title: 'Profile',
      breadcrumbs: [{
        label: 'Team',
        href: '/team'
      }, {
        label: 'Sarah Chen'
      }]
    },
    profile: USER_PROFILE,
    activityFeed: {
      title: 'Recent Activity',
      activities: ACTIVITY_ITEMS
    },
    children: <ProfileSections />
  }
}`,...t.parameters?.docs?.source},description:{story:"Default profile page",...t.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    pageHeader: {
      title: 'My Profile',
      actions: <Button variant="primary" icon={<Edit size={18} />}>Edit Profile</Button>
    },
    profile: USER_PROFILE,
    activityFeed: {
      title: 'Your Activity',
      activities: ACTIVITY_ITEMS
    },
    children: <ProfileSections />
  }
}`,...n.parameters?.docs?.source},description:{story:"Profile without sidebar (standalone view)",...n.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    sidebar: Default.args?.sidebar,
    pageHeader: Default.args?.pageHeader,
    profile: USER_PROFILE,
    showActivity: false,
    children: <ProfileSections />
  }
}`,...l.parameters?.docs?.source},description:{story:"Profile without activity feed",...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    sidebar: Default.args?.sidebar,
    pageHeader: {
      title: 'Team Member',
      breadcrumbs: [{
        label: 'Team',
        href: '/team'
      }, {
        label: 'Sarah Chen'
      }],
      actions: <Button variant="ghost" icon={<MessageSquare size={18} />}>Send Message</Button>
    },
    profile: {
      ...USER_PROFILE,
      actions: <Button variant="ghost" icon={<MessageSquare size={18} />}>Message</Button>
    },
    activityFeed: {
      title: 'Recent Activity',
      activities: ACTIVITY_ITEMS
    },
    children: <ProfileSections />
  }
}`,...c.parameters?.docs?.source},description:{story:"Team member profile (view-only)",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    sidebar: Default.args?.sidebar,
    pageHeader: {
      title: 'Edit Profile',
      breadcrumbs: [{
        label: 'Settings',
        href: '/settings'
      }, {
        label: 'Profile'
      }]
    },
    profile: {
      ...USER_PROFILE,
      actions: <>
          <Button variant="ghost">Cancel</Button>
          <Button variant="primary">Save Changes</Button>
        </>
    },
    showActivity: false,
    children: <>
        <FormSection title="Personal Information" description="Update your personal details.">
          <FormSection.Group>
            <Field label="Full name" defaultValue="Sarah Chen" />
            <Field label="Email" type="email" defaultValue="sarah@acme.com" />
          </FormSection.Group>
          <FormSection.Group>
            <Field label="Phone" type="tel" defaultValue="+1 (555) 123-4567" />
            <Field label="Location" defaultValue="San Francisco, CA" />
          </FormSection.Group>
        </FormSection>
        <FormSection title="Bio" description="Tell others about yourself.">
          <Textarea label="About" rows={4} defaultValue="Senior Software Engineer with 8+ years of experience..." />
        </FormSection>
      </>
  }
}`,...d.parameters?.docs?.source},description:{story:"Editable profile with form sections",...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    profile: {
      name: 'Sarah Chen',
      role: 'Senior Software Engineer',
      avatar: <img src="https://i.pravatar.cc/200?u=sarah" alt="" />,
      metadata: [{
        icon: <Mail size={16} />,
        label: 'Email',
        value: 'sarah@acme.com'
      }]
    },
    showActivity: false
  }
}`,...p.parameters?.docs?.source},description:{story:"Minimal profile card only",...p.parameters?.docs?.description}}};const qe=["Default","WithoutSidebar","WithoutActivity","TeamMemberView","EditableProfile","MinimalProfile"];export{t as Default,d as EditableProfile,p as MinimalProfile,c as TeamMemberView,l as WithoutActivity,n as WithoutSidebar,qe as __namedExportsOrder,Le as default};
