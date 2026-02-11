import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as i}from"./index-Bi6L2ga8.js";const $="_gallery_v93gb_5",L="_container_v93gb_21",M="_header_v93gb_26",R="_eyebrow_v93gb_31",D="_title_v93gb_41",K="_description_v93gb_50",z="_filters_v93gb_58",H="_filterButton_v93gb_66",J="_grid_v93gb_90",Q="_masonry_v93gb_127",U="_imageItem_v93gb_144",X="_imageOverlay_v93gb_157",Y="_image_v93gb_144",Z="_expandIcon_v93gb_199",ee="_caption_v93gb_210",te="_lightbox_v93gb_218",ae="_lightboxContent_v93gb_229",se="_lightboxImage_v93gb_235",re="_lightboxCaption_v93gb_242",oe="_lightboxClose_v93gb_249",le="_lightboxNav_v93gb_268",ie="_lightboxPrev_v93gb_287",ne="_lightboxNext_v93gb_291",t={gallery:$,container:L,header:M,eyebrow:R,title:D,description:K,filters:z,filterButton:H,grid:J,masonry:Q,imageItem:U,imageOverlay:X,image:Y,expandIcon:Z,caption:ee,lightbox:te,lightboxContent:ae,lightboxImage:se,lightboxCaption:re,lightboxClose:oe,lightboxNav:le,lightboxPrev:ie,lightboxNext:ne},P=({eyebrow:u,title:d,description:k,images:m,layout:S="grid",columns:q=4,lightbox:c=!0,showCaptions:G=!1,gap:E="md",filterable:w=!1,background:O="base",aspectRatio:F="square",className:B,...W})=>{const[r,g]=i.useState(null),[p,T]=i.useState(null),A=i.useMemo(()=>{if(!w)return[];const e=new Set;return m.forEach(s=>{s.category&&e.add(s.category)}),Array.from(e)},[m,w]),o=i.useMemo(()=>p?m.filter(e=>e.category===p):m,[m,p]),l=r?o.findIndex(e=>e.id===r.id):-1,I=i.useCallback(()=>{if(l>0){const e=o[l-1];e&&g(e)}},[l,o]),j=i.useCallback(()=>{if(l<o.length-1){const e=o[l+1];e&&g(e)}},[l,o]),h=i.useCallback(()=>{g(null)},[]);i.useEffect(()=>{if(!r)return;const e=s=>{s.key==="Escape"&&h(),s.key==="ArrowLeft"&&I(),s.key==="ArrowRight"&&j()};return document.addEventListener("keydown",e),document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",e),document.body.style.overflow=""}},[r,h,I,j]);const V=S==="masonry"?t.masonry:t.grid;return a.jsxs("section",{className:`${t.gallery} ${B||""}`,"data-background":O,...W,children:[a.jsxs("div",{className:t.container,children:[(u||d||k)&&a.jsxs("header",{className:t.header,children:[u&&a.jsx("span",{className:t.eyebrow,children:u}),d&&a.jsx("h2",{className:t.title,children:d}),k&&a.jsx("p",{className:t.description,children:k})]}),w&&A.length>0&&a.jsxs("div",{className:t.filters,children:[a.jsx("button",{className:t.filterButton,"data-active":p===null,onClick:()=>T(null),children:"All"}),A.map(e=>a.jsx("button",{className:t.filterButton,"data-active":p===e,onClick:()=>T(e),children:e},e))]}),a.jsx("div",{className:V,"data-columns":q,"data-gap":E,children:o.map(e=>a.jsxs("div",{className:t.imageItem,"data-lightbox":c,"data-aspect":e.aspectRatio||F,onClick:()=>c&&g(e),role:c?"button":void 0,tabIndex:c?0:void 0,onKeyDown:s=>{c&&(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),g(e))},children:[a.jsx("img",{src:e.thumbnail||e.src,alt:e.alt,className:t.image,loading:"lazy"}),c&&a.jsx("div",{className:t.imageOverlay,children:a.jsx("span",{className:t.expandIcon,children:a.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"})})})}),G&&e.caption&&a.jsx("div",{className:t.caption,children:e.caption})]},e.id))})]}),r&&a.jsxs("div",{className:t.lightbox,onClick:h,role:"dialog","aria-modal":"true","aria-label":"Image lightbox",children:[a.jsxs("div",{className:t.lightboxContent,onClick:e=>e.stopPropagation(),children:[a.jsx("img",{src:r.src,alt:r.alt,className:t.lightboxImage}),r.caption&&a.jsx("div",{className:t.lightboxCaption,children:r.caption})]}),a.jsx("button",{className:t.lightboxClose,onClick:h,"aria-label":"Close lightbox",children:"×"}),l>0&&a.jsx("button",{className:`${t.lightboxNav} ${t.lightboxPrev}`,onClick:e=>{e.stopPropagation(),I()},"aria-label":"Previous image",children:"‹"}),l<o.length-1&&a.jsx("button",{className:`${t.lightboxNav} ${t.lightboxNext}`,onClick:e=>{e.stopPropagation(),j()},"aria-label":"Next image",children:"›"})]})]})};P.displayName="Gallery";P.__docgenInfo={description:"Gallery section for displaying images with optional lightbox",methods:[],displayName:"Gallery",props:{eyebrow:{required:!1,tsType:{name:"ReactNode"},description:"Optional eyebrow text"},title:{required:!1,tsType:{name:"ReactNode"},description:"Section title"},description:{required:!1,tsType:{name:"ReactNode"},description:"Section description"},images:{required:!0,tsType:{name:"Array",elements:[{name:"GalleryImage"}],raw:"GalleryImage[]"},description:"Array of images"},layout:{required:!1,tsType:{name:"union",raw:"'grid' | 'masonry' | 'carousel'",elements:[{name:"literal",value:"'grid'"},{name:"literal",value:"'masonry'"},{name:"literal",value:"'carousel'"}]},description:`Layout variant
@default 'grid'`,defaultValue:{value:"'grid'",computed:!1}},columns:{required:!1,tsType:{name:"union",raw:"2 | 3 | 4 | 5",elements:[{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"}]},description:`Number of columns
@default 4`,defaultValue:{value:"4",computed:!1}},lightbox:{required:!1,tsType:{name:"boolean"},description:`Enable lightbox on click
@default true`,defaultValue:{value:"true",computed:!1}},showCaptions:{required:!1,tsType:{name:"boolean"},description:`Show captions below images
@default false`,defaultValue:{value:"false",computed:!1}},gap:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg' | 'none'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'none'"}]},description:`Gap between images
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},filterable:{required:!1,tsType:{name:"boolean"},description:`Enable category filtering
@default false`,defaultValue:{value:"false",computed:!1}},background:{required:!1,tsType:{name:"union",raw:"'base' | 'subtle' | 'none'",elements:[{name:"literal",value:"'base'"},{name:"literal",value:"'subtle'"},{name:"literal",value:"'none'"}]},description:`Background style
@default 'base'`,defaultValue:{value:"'base'",computed:!1}},aspectRatio:{required:!1,tsType:{name:"union",raw:"'square' | 'landscape' | 'portrait' | 'auto'",elements:[{name:"literal",value:"'square'"},{name:"literal",value:"'landscape'"},{name:"literal",value:"'portrait'"},{name:"literal",value:"'auto'"}]},description:`Aspect ratio for grid items
@default 'square'`,defaultValue:{value:"'square'",computed:!1}}},composes:["Omit"]};const de={title:"Sections/Marketing/Gallery",component:P,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{columns:{control:"select",options:[2,3,4]},layout:{control:"select",options:["grid","masonry"]},background:{control:"select",options:["base","subtle","none"]}}},n=[{id:"1",src:"https://picsum.photos/seed/1/600/400",alt:"Gallery image 1"},{id:"2",src:"https://picsum.photos/seed/2/600/400",alt:"Gallery image 2"},{id:"3",src:"https://picsum.photos/seed/3/600/400",alt:"Gallery image 3"},{id:"4",src:"https://picsum.photos/seed/4/600/400",alt:"Gallery image 4"},{id:"5",src:"https://picsum.photos/seed/5/600/400",alt:"Gallery image 5"},{id:"6",src:"https://picsum.photos/seed/6/600/400",alt:"Gallery image 6"}],b={args:{images:n}},f={args:{title:"Our Work",description:"A showcase of projects built with Orion.",images:n}},y={args:{title:"Featured",images:n.slice(0,4),columns:2}},v={args:{images:n,columns:4}},x={args:{title:"Portfolio",images:n.map((u,d)=>({...u,caption:`Project ${d+1}`})),showCaptions:!0}},_={args:{title:"Gallery",images:n,background:"subtle"}},N={args:{title:"Click to enlarge",images:n,lightbox:!0}},C={args:{title:"Filter by Category",images:[{id:"1",src:"https://picsum.photos/seed/1/600/400",alt:"Nature 1",category:"Nature"},{id:"2",src:"https://picsum.photos/seed/2/600/400",alt:"Architecture 1",category:"Architecture"},{id:"3",src:"https://picsum.photos/seed/3/600/400",alt:"Nature 2",category:"Nature"},{id:"4",src:"https://picsum.photos/seed/4/600/400",alt:"Portrait 1",category:"Portrait"},{id:"5",src:"https://picsum.photos/seed/5/600/400",alt:"Architecture 2",category:"Architecture"},{id:"6",src:"https://picsum.photos/seed/6/600/400",alt:"Portrait 2",category:"Portrait"}],filterable:!0}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    images: defaultImages
  }
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Our Work',
    description: 'A showcase of projects built with Orion.',
    images: defaultImages
  }
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Featured',
    images: defaultImages.slice(0, 4),
    columns: 2
  }
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    images: defaultImages,
    columns: 4
  }
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Portfolio',
    images: defaultImages.map((img, i) => ({
      ...img,
      caption: \`Project \${i + 1}\`
    })),
    showCaptions: true
  }
}`,...x.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Gallery',
    images: defaultImages,
    background: 'subtle'
  }
}`,..._.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Click to enlarge',
    images: defaultImages,
    lightbox: true
  }
}`,...N.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Filter by Category',
    images: [{
      id: '1',
      src: 'https://picsum.photos/seed/1/600/400',
      alt: 'Nature 1',
      category: 'Nature'
    }, {
      id: '2',
      src: 'https://picsum.photos/seed/2/600/400',
      alt: 'Architecture 1',
      category: 'Architecture'
    }, {
      id: '3',
      src: 'https://picsum.photos/seed/3/600/400',
      alt: 'Nature 2',
      category: 'Nature'
    }, {
      id: '4',
      src: 'https://picsum.photos/seed/4/600/400',
      alt: 'Portrait 1',
      category: 'Portrait'
    }, {
      id: '5',
      src: 'https://picsum.photos/seed/5/600/400',
      alt: 'Architecture 2',
      category: 'Architecture'
    }, {
      id: '6',
      src: 'https://picsum.photos/seed/6/600/400',
      alt: 'Portrait 2',
      category: 'Portrait'
    }],
    filterable: true
  }
}`,...C.parameters?.docs?.source}}};const me=["Default","WithTitle","TwoColumns","FourColumns","WithCaptions","SubtleBackground","WithLightbox","Filterable"];export{b as Default,C as Filterable,v as FourColumns,_ as SubtleBackground,y as TwoColumns,x as WithCaptions,N as WithLightbox,f as WithTitle,me as __namedExportsOrder,de as default};
