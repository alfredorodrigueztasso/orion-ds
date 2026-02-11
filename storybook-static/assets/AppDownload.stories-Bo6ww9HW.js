import{j as e}from"./jsx-runtime-u17CrQMm.js";import{S as W}from"./smartphone-CB9pOBJL.js";import{Z as R}from"./zap-BnVCcVUv.js";import{S as G}from"./shield-DhOd_9EY.js";import"./createLucideIcon-DprCCbyf.js";import"./index-Bi6L2ga8.js";const E="_appDownload_1kziv_5",P="_container_1kziv_32",F="_centered_1kziv_38",Q="_content_1kziv_42",L="_split_1kziv_48",M="_eyebrow_1kziv_64",V="_title_1kziv_82",Z="_description_1kziv_95",H="_rating_1kziv_108",J="_stars_1kziv_119",K="_star_1kziv_119",$="_ratingText_1kziv_128",U="_badges_1kziv_134",X="_badge_1kziv_134",Y="_badgeImage_1kziv_154",ee="_qrSection_1kziv_160",te="_qrCode_1kziv_179",ae="_qrText_1kziv_187",re="_features_1kziv_193",se="_feature_1kziv_193",ne="_featureIcon_1kziv_216",oe="_featureTitle_1kziv_233",ie="_featureDescription_1kziv_244",de="_appImageWrapper_1kziv_251",le="_appImage_1kziv_251",t={appDownload:E,container:P,centered:F,content:Q,split:L,eyebrow:M,title:V,description:Z,rating:H,stars:J,star:K,ratingText:$,badges:U,badge:X,badgeImage:Y,qrSection:ee,qrCode:te,qrText:ae,features:re,feature:se,featureIcon:ne,featureTitle:oe,featureDescription:ie,appImageWrapper:de,appImage:le},ce=()=>e.jsxs("svg",{width:"135",height:"40",viewBox:"0 0 135 40",children:[e.jsx("rect",{width:"135",height:"40",rx:"5",fill:"#000"}),e.jsx("text",{x:"67.5",y:"12",fill:"#fff",fontSize:"8",textAnchor:"middle",fontFamily:"system-ui",children:"Download on the"}),e.jsx("text",{x:"67.5",y:"28",fill:"#fff",fontSize:"16",textAnchor:"middle",fontWeight:"600",fontFamily:"system-ui",children:"App Store"})]}),pe=()=>e.jsxs("svg",{width:"135",height:"40",viewBox:"0 0 135 40",children:[e.jsx("rect",{width:"135",height:"40",rx:"5",fill:"#000"}),e.jsx("text",{x:"67.5",y:"12",fill:"#fff",fontSize:"8",textAnchor:"middle",fontFamily:"system-ui",children:"GET IT ON"}),e.jsx("text",{x:"67.5",y:"28",fill:"#fff",fontSize:"14",textAnchor:"middle",fontWeight:"600",fontFamily:"system-ui",children:"Google Play"})]}),ue=()=>e.jsx("svg",{className:t.star,width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"})}),ge=({badge:s})=>{const y=()=>{switch(s.store){case"apple":return e.jsx(ce,{});case"google":return e.jsx(pe,{});case"custom":return s.badgeImage?e.jsx("img",{src:s.badgeImage,alt:s.badgeAlt||"Download",className:t.badgeImage}):null;default:return null}};return e.jsx("a",{href:s.href,className:t.badge,target:"_blank",rel:"noopener noreferrer",children:y()})},_=({eyebrow:s,title:y,description:w,badges:N,appImage:k,qrCode:S,showQrCode:D=!1,features:A=[],layout:b="centered",background:q="gradient",rating:v,compact:I=!1,className:B,...T})=>{const O=b==="split-left"||b==="split-right",C=b==="split-left"?"left":"right",j=()=>e.jsxs("div",{className:t.content,children:[s&&e.jsx("span",{className:t.eyebrow,children:s}),e.jsx("h2",{className:t.title,children:y}),w&&e.jsx("p",{className:t.description,children:w}),v&&e.jsxs("div",{className:t.rating,children:[e.jsx("div",{className:t.stars,children:[1,2,3,4,5].map(r=>e.jsx(ue,{},r))}),e.jsxs("span",{className:t.ratingText,children:[v.value," (",v.count," reviews)"]})]}),e.jsx("div",{className:t.badges,children:N.map((r,x)=>e.jsx(ge,{badge:r},x))}),D&&S&&e.jsxs("div",{className:t.qrSection,children:[e.jsx("img",{src:S,alt:"QR Code",className:t.qrCode}),e.jsx("span",{className:t.qrText,children:"Scan to download"})]}),A.length>0&&e.jsx("div",{className:t.features,children:A.map((r,x)=>e.jsxs("div",{className:t.feature,children:[r.icon&&e.jsx("div",{className:t.featureIcon,children:r.icon}),e.jsxs("div",{children:[e.jsx("h4",{className:t.featureTitle,children:r.title}),r.description&&e.jsx("p",{className:t.featureDescription,children:r.description})]})]},x))})]}),z=()=>k?e.jsx("div",{className:t.appImageWrapper,children:e.jsx("img",{src:k,alt:"App preview",className:t.appImage})}):null;return e.jsx("section",{className:`${t.appDownload} ${B||""}`,"data-background":q,"data-compact":I,...T,children:e.jsx("div",{className:t.container,children:O?e.jsxs("div",{className:t.split,"data-image-position":C,children:[j(),z()]}):e.jsxs("div",{className:t.centered,children:[j(),z()]})})})};_.displayName="AppDownload";_.__docgenInfo={description:"AppDownload section for mobile app promotion",methods:[],displayName:"AppDownload",props:{eyebrow:{required:!1,tsType:{name:"ReactNode"},description:"Optional eyebrow text"},title:{required:!0,tsType:{name:"ReactNode"},description:"Section title"},description:{required:!1,tsType:{name:"ReactNode"},description:"Section description"},badges:{required:!0,tsType:{name:"Array",elements:[{name:"AppStoreBadge"}],raw:"AppStoreBadge[]"},description:"App store badges"},appImage:{required:!1,tsType:{name:"string"},description:"App preview image/screenshot"},qrCode:{required:!1,tsType:{name:"string"},description:"QR code image for direct download"},showQrCode:{required:!1,tsType:{name:"boolean"},description:`Show QR code
@default false`,defaultValue:{value:"false",computed:!1}},features:{required:!1,tsType:{name:"Array",elements:[{name:"AppFeature"}],raw:"AppFeature[]"},description:"App features list",defaultValue:{value:"[]",computed:!1}},layout:{required:!1,tsType:{name:"union",raw:"'centered' | 'split-left' | 'split-right'",elements:[{name:"literal",value:"'centered'"},{name:"literal",value:"'split-left'"},{name:"literal",value:"'split-right'"}]},description:`Layout variant
@default 'centered'`,defaultValue:{value:"'centered'",computed:!1}},background:{required:!1,tsType:{name:"union",raw:"'base' | 'subtle' | 'gradient' | 'dark'",elements:[{name:"literal",value:"'base'"},{name:"literal",value:"'subtle'"},{name:"literal",value:"'gradient'"},{name:"literal",value:"'dark'"}]},description:`Background style
@default 'gradient'`,defaultValue:{value:"'gradient'",computed:!1}},rating:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  value: number;
  count: string;
}`,signature:{properties:[{key:"value",value:{name:"number",required:!0}},{key:"count",value:{name:"string",required:!0}}]}},description:"App rating"},compact:{required:!1,tsType:{name:"boolean"},description:`Compact mode
@default false`,defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const xe={title:"Sections/Marketing/AppDownload",component:_,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{layout:{control:"select",options:["centered","split-left","split-right"]},background:{control:"select",options:["base","subtle","gradient","dark"]}}},a=[{store:"apple",href:"#"},{store:"google",href:"#"}],n={args:{title:"Get the app",description:"Download our mobile app and take Orion with you everywhere.",badges:a}},o={args:{title:"Mobile App",description:"Experience the full power of Orion on your phone.",badges:a,appImage:"https://picsum.photos/seed/app/300/600",layout:"split-right"}},i={args:{title:"Available on all platforms",description:"Download now for iOS and Android.",badges:a,layout:"centered"}},d={args:{title:"Scan to download",description:"Point your camera at the QR code.",badges:a,qrCode:"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://example.com",showQrCode:!0}},l={args:{title:"Get Started",description:"Download the app today.",badges:a,background:"gradient"}},c={args:{title:"Download Now",description:"Available on iOS and Android.",badges:a,background:"dark"}},p={args:{eyebrow:"Mobile App",title:"Orion in your pocket",description:"Access your projects anywhere, anytime.",badges:a}},u={args:{title:"iOS App",description:"Designed for iPhone and iPad.",badges:[{store:"apple",href:"#"}]}},g={args:{title:"Android App",description:"Available on Google Play.",badges:[{store:"google",href:"#"}]}},m={args:{title:"Download Our App",description:"Everything you need, right in your pocket.",badges:a,features:[{icon:e.jsx(W,{size:24}),title:"Native Experience",description:"Built for mobile"},{icon:e.jsx(R,{size:24}),title:"Lightning Fast",description:"Instant loading"},{icon:e.jsx(G,{size:24}),title:"Secure",description:"Bank-grade security"}]}},f={args:{title:"Highly Rated",description:"Join millions of happy users.",badges:a,rating:{value:4.9,count:"10K+"}}},h={args:{title:"Download Now",description:"Get the best mobile experience.",badges:a,appImage:"https://picsum.photos/seed/app2/300/600",layout:"split-left"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Get the app',
    description: 'Download our mobile app and take Orion with you everywhere.',
    badges: defaultBadges
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Mobile App',
    description: 'Experience the full power of Orion on your phone.',
    badges: defaultBadges,
    appImage: 'https://picsum.photos/seed/app/300/600',
    layout: 'split-right'
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Available on all platforms',
    description: 'Download now for iOS and Android.',
    badges: defaultBadges,
    layout: 'centered'
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Scan to download',
    description: 'Point your camera at the QR code.',
    badges: defaultBadges,
    qrCode: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://example.com',
    showQrCode: true
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Get Started',
    description: 'Download the app today.',
    badges: defaultBadges,
    background: 'gradient'
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Download Now',
    description: 'Available on iOS and Android.',
    badges: defaultBadges,
    background: 'dark'
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    eyebrow: 'Mobile App',
    title: 'Orion in your pocket',
    description: 'Access your projects anywhere, anytime.',
    badges: defaultBadges
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'iOS App',
    description: 'Designed for iPhone and iPad.',
    badges: [{
      store: 'apple' as const,
      href: '#'
    }]
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Android App',
    description: 'Available on Google Play.',
    badges: [{
      store: 'google' as const,
      href: '#'
    }]
  }
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Download Our App',
    description: 'Everything you need, right in your pocket.',
    badges: defaultBadges,
    features: [{
      icon: <Smartphone size={24} />,
      title: 'Native Experience',
      description: 'Built for mobile'
    }, {
      icon: <Zap size={24} />,
      title: 'Lightning Fast',
      description: 'Instant loading'
    }, {
      icon: <Shield size={24} />,
      title: 'Secure',
      description: 'Bank-grade security'
    }]
  }
}`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Highly Rated',
    description: 'Join millions of happy users.',
    badges: defaultBadges,
    rating: {
      value: 4.9,
      count: '10K+'
    }
  }
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Download Now',
    description: 'Get the best mobile experience.',
    badges: defaultBadges,
    appImage: 'https://picsum.photos/seed/app2/300/600',
    layout: 'split-left'
  }
}`,...h.parameters?.docs?.source}}};const _e=["Default","WithAppImage","Centered","WithQRCode","GradientBackground","DarkBackground","WithEyebrow","iOSOnly","AndroidOnly","WithFeatures","WithRating","SplitLeft"];export{g as AndroidOnly,i as Centered,c as DarkBackground,n as Default,l as GradientBackground,h as SplitLeft,o as WithAppImage,p as WithEyebrow,m as WithFeatures,d as WithQRCode,f as WithRating,_e as __namedExportsOrder,xe as default,u as iOSOnly};
