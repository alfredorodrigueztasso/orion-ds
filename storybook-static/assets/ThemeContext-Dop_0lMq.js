import{j as g}from"./jsx-runtime-u17CrQMm.js";import{r as o}from"./index-Bi6L2ga8.js";const S=t=>t==="light"||t==="dark",k=t=>["orion","red","deepblue","orange","lemon"].includes(t);function L(t={}){const{defaultTheme:a="light",defaultBrand:c="orion",storageEnabled:s=!0,storageKey:d="orion-theme",brandStorageKey:p="orion-brand"}=t,[n,h]=o.useState(()=>{if(typeof window>"u"||!s)return a;const e=localStorage.getItem(d);return e&&S(e)?e:a}),[l,m]=o.useState(()=>{if(typeof window>"u"||!s)return c;const e=localStorage.getItem(p);return e&&k(e)?e:c}),f=o.useCallback(e=>{h(e),typeof window<"u"&&(document.documentElement.setAttribute("data-theme",e),s&&localStorage.setItem(d,e))},[s,d]),r=o.useCallback(e=>{m(e),typeof window<"u"&&(document.documentElement.setAttribute("data-brand",e),s&&localStorage.setItem(p,e))},[s,p]),u=o.useCallback(()=>{f(n==="light"?"dark":"light")},[n,f]);return o.useEffect(()=>{typeof window<"u"&&(document.documentElement.setAttribute("data-theme",n),document.documentElement.setAttribute("data-brand",l))},[n,l]),o.useEffect(()=>{if(typeof window>"u"||!s)return;const e=window.matchMedia("(prefers-color-scheme: dark)"),i=y=>{localStorage.getItem(d)||f(y.matches?"dark":"light")};if(e.addEventListener)return e.addEventListener("change",i),()=>e.removeEventListener("change",i);if(e.addListener)return e.addListener(i),()=>e.removeListener(i)},[s,d,f]),{theme:n,brand:l,setTheme:f,setBrand:r,toggleTheme:u,isDark:n==="dark",isLight:n==="light"}}const T={orion:["Libre Baskerville","Inter","JetBrains Mono"],deepblue:["Work Sans","JetBrains Mono"],red:["Poppins","Inter","JetBrains Mono"],orange:["DM Sans","Inter","JetBrains Mono"],lemon:["Anton","Work Sans","JetBrains Mono"]},C=["Libre Baskerville","DM Sans","Inter","JetBrains Mono","Work Sans","Poppins","Anton"],v="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@400;500;700&family=Inter:wght@400;500;700&family=JetBrains+Mono:wght@400;500&family=Work+Sans:wght@400;500;700&family=Poppins:wght@400;500;700&family=Anton&display=swap",E=["https://fonts.googleapis.com","https://fonts.gstatic.com"];function F(t){if(typeof document>"u")return!0;try{return document.fonts.check(`16px "${t}"`)}catch{return!0}}function x(t){return T[t].filter(c=>!F(c))}async function I(t){if(typeof document>"u")return!0;try{return await Promise.all(t.map(a=>document.fonts.load(`16px "${a}"`))),!0}catch{return!1}}function w({onLoad:t,onError:a,showLoadingState:c=!1,loadingComponent:s,children:d}){const[p,n]=o.useState(!1),[h,l]=o.useState(!1);return o.useEffect(()=>{if(typeof document>"u"||h)return;const m=document.head;if(m.querySelector('link[href*="fonts.googleapis.com"]')){l(!0),n(!0),t?.();return}try{E.forEach((u,e)=>{const i=document.createElement("link");i.rel="preconnect",i.href=u,e===1&&(i.crossOrigin="anonymous"),i.setAttribute("data-orion-fonts","preconnect"),m.appendChild(i)});const r=document.createElement("link");r.rel="stylesheet",r.href=v,r.setAttribute("data-orion-fonts","stylesheet"),r.onload=async()=>{try{await I([...C]),n(!0),t?.()}catch{n(!0),t?.()}},r.onerror=()=>{const u=new Error("Failed to load Google Fonts");console.error("[Orion] Failed to load fonts from Google Fonts"),a?.(u),n(!0)},m.appendChild(r),l(!0)}catch(r){console.error("[Orion] Error injecting font links:",r),a?.(r instanceof Error?r:new Error("Font injection failed")),n(!0)}},[h,t,a]),c&&!p?s?g.jsx(g.Fragment,{children:s}):null:d?g.jsx(g.Fragment,{children:d}):null}w.displayName="FontLoader";w.__docgenInfo={description:`FontLoader - Injects Google Fonts into the document head

Place this component near the root of your app to ensure
all brand fonts are loaded automatically.`,methods:[],displayName:"FontLoader",props:{onLoad:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when fonts are loaded"},onError:{required:!1,tsType:{name:"signature",type:"function",raw:"(error: Error) => void",signature:{arguments:[{type:{name:"Error"},name:"error"}],return:{name:"void"}}},description:"Callback when fonts fail to load"},showLoadingState:{required:!1,tsType:{name:"boolean"},description:`Show loading state while fonts are loading
@default false`,defaultValue:{value:"false",computed:!1}},loadingComponent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom loading component"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children to render (will wait for fonts if showLoadingState is true)"}}};const b=o.createContext(void 0);function P(){return typeof window>"u"?!0:getComputedStyle(document.documentElement).getPropertyValue("--orion-react-styles-loaded").trim()==="1"}function R({children:t,defaultTheme:a,defaultBrand:c,options:s,disableFontWarnings:d=!1,disableAutoFontLoading:p=!1,disableCSSWarnings:n=!1}){const h={...s,...a!==void 0&&{defaultTheme:a},...c!==void 0&&{defaultBrand:c}},l=L(h),m=o.useRef(new Set),f=o.useRef(!1);return o.useEffect(()=>{if(n||typeof window>"u"||!(window.location.hostname==="localhost"))return;const u=setTimeout(()=>{!f.current&&!P()&&(f.current=!0,console.warn(`[Orion] Component styles not detected!

You must import the component CSS file:

  import '@orion-ds/react/dist/react.css';

Add this import alongside the theme CSS in your app entry file:

  import '@orion-ds/core/theme.css';       // Design tokens
  import '@orion-ds/react/dist/react.css'; // Component styles

To disable this warning, set disableCSSWarnings={true} on ThemeProvider.`))},100);return()=>clearTimeout(u)},[n]),o.useEffect(()=>{if(d||typeof window>"u"||!(typeof window<"u"&&window.location.hostname==="localhost"))return;const u=setTimeout(()=>{const{brand:e}=l,i=x(e);if(i.length>0&&!m.current.has(e)){m.current.add(e);const y=T[e].join(", ");console.warn(`[Orion] Missing fonts for "${e}" brand: ${i.join(", ")}

The "${e}" brand requires these fonts: ${y}

To fix this, add one of the following to your app:

Option 1: Use <FontLoader /> component (recommended)
  import { FontLoader } from '@orion-ds/react';
  <ThemeProvider>
    <FontLoader />
    <App />
  </ThemeProvider>

Option 2: Add Google Fonts to your HTML <head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="${v}" rel="stylesheet">

To disable this warning, set disableFontWarnings={true} on ThemeProvider.`)}},1e3);return()=>clearTimeout(u)},[l.brand,d,l]),g.jsxs(b.Provider,{value:l,children:[!p&&g.jsx(w,{}),t]})}function D(){const t=o.useContext(b);if(t===void 0)throw new Error(`❌ useTheme() must be used inside <ThemeProvider>

Solution:
Wrap your app with ThemeProvider:

export default function App() {
  return (
    <ThemeProvider>
      <YourComponents />
    </ThemeProvider>
  );
}`);return t}R.__docgenInfo={description:`ThemeProvider Component

Wraps your application to provide global theme and brand state.
Must be placed near the root of your application.`,methods:[],displayName:"ThemeProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Child components"},defaultTheme:{required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:`Default theme
@default 'light'`},defaultBrand:{required:!1,tsType:{name:"union",raw:"'orion' | 'red' | 'deepblue' | 'orange' | 'lemon'",elements:[{name:"literal",value:"'orion'"},{name:"literal",value:"'red'"},{name:"literal",value:"'deepblue'"},{name:"literal",value:"'orange'"},{name:"literal",value:"'lemon'"}]},description:`Default brand
@default 'orion'`},options:{required:!1,tsType:{name:"UseThemeOptions"},description:`Theme options (see useTheme for full options)
@deprecated Use flat props (defaultTheme, defaultBrand) instead.`},disableFontWarnings:{required:!1,tsType:{name:"boolean"},description:`Disable font loading warnings in development
@default false`,defaultValue:{value:"false",computed:!1}},disableAutoFontLoading:{required:!1,tsType:{name:"boolean"},description:`Disable automatic font loading via FontLoader
When false (default), fonts are loaded automatically.
Set to true if you want to manage font loading manually.
@default false`,defaultValue:{value:"false",computed:!1}},disableCSSWarnings:{required:!1,tsType:{name:"boolean"},description:`Disable CSS import warnings in development
When false (default), a warning is shown if react.css is not imported.
@default false`,defaultValue:{value:"false",computed:!1}}}};export{R as T,L as a,D as u};
