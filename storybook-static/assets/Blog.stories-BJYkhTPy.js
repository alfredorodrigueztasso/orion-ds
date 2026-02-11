import{j as e}from"./jsx-runtime-u17CrQMm.js";const M="_blog_167yt_5",C="_container_167yt_21",O="_header_167yt_26",D="_eyebrow_167yt_31",I="_title_167yt_41",R="_description_167yt_50",F="_grid_167yt_58",W="_list_167yt_76",E="_featured_167yt_83",J="_featuredMain_167yt_89",P="_article_167yt_94",$="_articleImage_167yt_107",H="_articleContent_167yt_118",G="_articleMeta_167yt_122",U="_category_167yt_130",z="_date_167yt_140",K="_readTime_167yt_144",Q="_articleTitle_167yt_153",X="_excerpt_167yt_175",Y="_author_167yt_186",Z="_authorAvatar_167yt_195",ee="_authorName_167yt_203",te="_viewAll_167yt_227",ae="_viewAllLink_167yt_232",re="_tags_167yt_247",se="_tag_167yt_247",a={blog:M,container:C,header:O,eyebrow:D,title:I,description:R,grid:F,list:W,featured:E,featuredMain:J,article:P,articleImage:$,articleContent:H,articleMeta:G,category:U,date:z,readTime:K,articleTitle:Q,excerpt:X,author:Y,authorAvatar:Z,authorName:ee,viewAll:te,viewAllLink:ae,tags:re,tag:se},b=({article:t,showAuthor:s=!0,showDate:l=!0,showCategory:i=!0,showReadTime:n=!0,featured:v=!1})=>e.jsxs("article",{className:`${a.article} ${v?a.featuredMain:""}`,children:[t.image&&e.jsx("img",{src:t.image,alt:t.title,className:a.articleImage}),e.jsxs("div",{className:a.articleContent,children:[e.jsxs("div",{className:a.articleMeta,children:[i&&t.category&&e.jsx("span",{className:a.category,children:t.category}),l&&t.date&&e.jsx("span",{className:a.date,children:t.date}),n&&t.readTime&&e.jsxs("span",{className:a.readTime,children:[t.readTime," min read"]})]}),e.jsx("h3",{className:a.articleTitle,children:t.href?e.jsx("a",{href:t.href,children:t.title}):t.title}),e.jsx("p",{className:a.excerpt,children:t.excerpt}),t.tags&&t.tags.length>0&&e.jsx("div",{className:a.tags,children:t.tags.map((o,c)=>e.jsx("span",{className:a.tag,children:o},c))}),s&&t.author&&e.jsxs("div",{className:a.author,children:[t.author.avatar&&e.jsx("img",{src:t.author.avatar,alt:t.author.name,className:a.authorAvatar}),e.jsx("span",{className:a.authorName,children:t.author.name})]})]})]}),w=({eyebrow:t,title:s,description:l,articles:i,layout:n="grid",columns:v=3,showAuthor:o=!0,showDate:c=!0,showCategory:x=!0,showReadTime:A=!0,background:j="base",viewAllHref:N,viewAllText:S="View all articles",className:B,...k})=>{const V=()=>{if(n==="featured"&&i.length>0){const[d,...q]=i;return d?e.jsxs("div",{className:a.featured,children:[e.jsx(b,{article:d,showAuthor:o,showDate:c,showCategory:x,showReadTime:A,featured:!0}),q.slice(0,2).map(T=>e.jsx(b,{article:T,showAuthor:o,showDate:c,showCategory:x,showReadTime:A},T.id))]}):null}const L=n==="list"?a.list:a.grid;return e.jsx("div",{className:L,"data-columns":n==="grid"?v:void 0,children:i.map(d=>e.jsx(b,{article:d,showAuthor:o,showDate:c,showCategory:x,showReadTime:A},d.id))})};return e.jsx("section",{className:`${a.blog} ${B||""}`,"data-background":j,...k,children:e.jsxs("div",{className:a.container,children:[(t||s||l)&&e.jsxs("header",{className:a.header,children:[t&&e.jsx("span",{className:a.eyebrow,children:t}),s&&e.jsx("h2",{className:a.title,children:s}),l&&e.jsx("p",{className:a.description,children:l})]}),V(),N&&e.jsx("div",{className:a.viewAll,children:e.jsxs("a",{href:N,className:a.viewAllLink,children:[S,e.jsx("span",{"aria-hidden":"true",children:"→"})]})})]})})};w.displayName="Blog";w.__docgenInfo={description:"Blog section for displaying articles",methods:[],displayName:"Blog",props:{eyebrow:{required:!1,tsType:{name:"ReactNode"},description:"Optional eyebrow text"},title:{required:!1,tsType:{name:"ReactNode"},description:"Section title"},description:{required:!1,tsType:{name:"ReactNode"},description:"Section description"},articles:{required:!0,tsType:{name:"Array",elements:[{name:"BlogArticle"}],raw:"BlogArticle[]"},description:"Array of articles"},layout:{required:!1,tsType:{name:"union",raw:"'grid' | 'list' | 'featured'",elements:[{name:"literal",value:"'grid'"},{name:"literal",value:"'list'"},{name:"literal",value:"'featured'"}]},description:`Layout variant
@default 'grid'`,defaultValue:{value:"'grid'",computed:!1}},columns:{required:!1,tsType:{name:"union",raw:"2 | 3 | 4",elements:[{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"}]},description:`Number of columns for grid layout
@default 3`,defaultValue:{value:"3",computed:!1}},showAuthor:{required:!1,tsType:{name:"boolean"},description:`Show author info
@default true`,defaultValue:{value:"true",computed:!1}},showDate:{required:!1,tsType:{name:"boolean"},description:`Show date
@default true`,defaultValue:{value:"true",computed:!1}},showCategory:{required:!1,tsType:{name:"boolean"},description:`Show category badge
@default true`,defaultValue:{value:"true",computed:!1}},showReadTime:{required:!1,tsType:{name:"boolean"},description:`Show read time
@default true`,defaultValue:{value:"true",computed:!1}},background:{required:!1,tsType:{name:"union",raw:"'base' | 'subtle' | 'none'",elements:[{name:"literal",value:"'base'"},{name:"literal",value:"'subtle'"},{name:"literal",value:"'none'"}]},description:`Background style
@default 'base'`,defaultValue:{value:"'base'",computed:!1}},viewAllHref:{required:!1,tsType:{name:"string"},description:"View all link"},viewAllText:{required:!1,tsType:{name:"string"},description:`View all link text
@default 'View all articles'`,defaultValue:{value:"'View all articles'",computed:!1}}},composes:["Omit"]};const ie={title:"Sections/Marketing/Blog",component:w,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{columns:{control:"select",options:[2,3,4]},layout:{control:"select",options:["grid","list","featured"]},background:{control:"select",options:["base","subtle","none"]}}},r=[{id:"1",title:"Getting Started with Orion",excerpt:"Learn how to set up and use the Orion design system in your projects.",date:"Jan 15, 2024",author:{name:"Sarah Chen"},category:"Tutorial",href:"#",readTime:5},{id:"2",title:"Design Tokens Deep Dive",excerpt:"Understanding the token system that powers Orion components.",date:"Jan 10, 2024",author:{name:"Michael Johnson"},category:"Architecture",href:"#",readTime:8},{id:"3",title:"Building Accessible Components",excerpt:"Best practices for creating inclusive user interfaces.",date:"Jan 5, 2024",author:{name:"Emily Davis"},category:"Accessibility",href:"#",readTime:6}],u={args:{title:"Latest from our blog",articles:r}},m={args:{title:"Blog",description:"Insights, tutorials, and updates from the Orion team.",articles:r}},p={args:{title:"Recent Posts",articles:r.slice(0,2),columns:2}},g={args:{eyebrow:"Blog",title:"Read our latest articles",articles:r}},f={args:{title:"From the Blog",articles:r,background:"subtle"}},h={args:{title:"Featured Articles",articles:r,layout:"featured"}},_={args:{title:"All Articles",articles:r,layout:"list"}},y={args:{title:"Latest Posts",articles:r,viewAllHref:"#",viewAllText:"View all posts"}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Latest from our blog',
    articles: defaultArticles
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Blog',
    description: 'Insights, tutorials, and updates from the Orion team.',
    articles: defaultArticles
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Recent Posts',
    articles: defaultArticles.slice(0, 2),
    columns: 2
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    eyebrow: 'Blog',
    title: 'Read our latest articles',
    articles: defaultArticles
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'From the Blog',
    articles: defaultArticles,
    background: 'subtle'
  }
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Featured Articles',
    articles: defaultArticles,
    layout: 'featured'
  }
}`,...h.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'All Articles',
    articles: defaultArticles,
    layout: 'list'
  }
}`,..._.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Latest Posts',
    articles: defaultArticles,
    viewAllHref: '#',
    viewAllText: 'View all posts'
  }
}`,...y.parameters?.docs?.source}}};const ne=["Default","WithDescription","TwoColumns","WithEyebrow","SubtleBackground","FeaturedLayout","ListLayout","WithViewAll"];export{u as Default,h as FeaturedLayout,_ as ListLayout,f as SubtleBackground,p as TwoColumns,m as WithDescription,g as WithEyebrow,y as WithViewAll,ne as __namedExportsOrder,ie as default};
