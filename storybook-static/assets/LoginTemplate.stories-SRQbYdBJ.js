import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as v}from"./index-Bi6L2ga8.js";import{B as se}from"./Button-C5l-MScQ.js";import{F as q}from"./Field-q4DqLIqo.js";import{C as re}from"./Checkbox-BdQYmUbV.js";import{L as G}from"./Link-DG_lptrR.js";import{D as ne}from"./Divider-69YPMiYm.js";import{C as b,A as le}from"./chromium-DAoEycA3.js";import{G as r}from"./github-2kT0ytcx.js";import"./circle-alert-BMPEDkj1.js";import"./createLucideIcon-DprCCbyf.js";import"./minus-D7ovpRdW.js";import"./check-DDKQb6IN.js";import"./external-link-9jXcfSZM.js";const ce="_login_1xlw9_12",de="_formPanel_1xlw9_27",ue="_formContainer_1xlw9_36",me="_header_1xlw9_48",pe="_logo_1xlw9_54",ge="_titleGroup_1xlw9_59",he="_title_1xlw9_59",fe="_subtitle_1xlw9_75",be="_form_1xlw9_27",ye="_fields_1xlw9_93",ve="_formOptions_1xlw9_99",xe="_error_1xlw9_106",we="_socialSection_1xlw9_119",Se="_socialButtons_1xlw9_125",_e="_socialButton_1xlw9_125",Le="_socialIcon_1xlw9_155",je="_signUpPrompt_1xlw9_167",Pe="_footer_1xlw9_177",ke="_editorialPanel_1xlw9_191",Ce="_editorialContent_1xlw9_214",Ie="_editorialHeadline_1xlw9_223",Ne="_editorialDescription_1xlw9_237",qe="_testimonial_1xlw9_250",Ge="_quote_1xlw9_265",Re="_author_1xlw9_278",We="_authorAvatar_1xlw9_284",Te="_authorInfo_1xlw9_298",ze="_authorName_1xlw9_304",Ae="_authorRole_1xlw9_316",o={login:ce,formPanel:de,formContainer:ue,header:me,logo:pe,titleGroup:ge,title:he,subtitle:fe,form:be,fields:ye,formOptions:ve,error:xe,socialSection:we,socialButtons:Se,socialButton:_e,socialIcon:Le,signUpPrompt:je,footer:Pe,editorialPanel:ke,editorialContent:Ce,editorialHeadline:Ie,editorialDescription:Ne,testimonial:qe,quote:Ge,author:Re,authorAvatar:We,authorInfo:Te,authorName:ze,authorRole:Ae},x=v.forwardRef(({logo:a,title:R="Welcome back",subtitle:w="Sign in to your account",formConfig:W={},socialProviders:S=[],socialLabel:T="Or continue with",showSignUp:z=!0,signUpPrompt:A="Don't have an account?",signUpLabel:E="Sign up",signUpHref:M="/signup",editorial:t,onSubmit:O,isLoading:y=!1,error:_,footer:L,className:B,...D},H)=>{const[j,U]=v.useState(""),[P,F]=v.useState(""),[k,V]=v.useState(!1),{emailLabel:Y="Email",emailPlaceholder:$="you@example.com",passwordLabel:J="Password",passwordPlaceholder:X="Enter your password",submitLabel:Z="Sign in",showRememberMe:C=!0,rememberMeLabel:K="Remember me",showForgotPassword:I=!0,forgotPasswordLabel:Q="Forgot password?",forgotPasswordHref:ee="/forgot-password"}=W,oe=i=>{i.preventDefault(),O?.({email:j,password:P,rememberMe:k})},ae=S.length>0,N=!!t;return e.jsxs("div",{ref:H,className:`${o.login} ${B||""}`,"data-single-column":!N,...D,children:[e.jsx("div",{className:o.formPanel,children:e.jsxs("div",{className:o.formContainer,children:[e.jsxs("header",{className:o.header,children:[a&&e.jsx("div",{className:o.logo,children:a}),e.jsxs("div",{className:o.titleGroup,children:[e.jsx("h1",{className:o.title,children:R}),w&&e.jsx("p",{className:o.subtitle,children:w})]})]}),ae&&e.jsxs("div",{className:o.socialSection,children:[e.jsx("div",{className:o.socialButtons,children:S.map((i,te)=>{const ie=i.href?"a":"button";return e.jsxs(ie,{className:o.socialButton,onClick:i.onClick,href:i.href,type:i.href?void 0:"button",children:[e.jsx("span",{className:o.socialIcon,children:i.icon}),e.jsxs("span",{children:["Continue with ",i.name]})]},te)})}),e.jsx(ne,{label:T})]}),_&&e.jsx("div",{className:o.error,children:_}),e.jsxs("form",{className:o.form,onSubmit:oe,children:[e.jsxs("div",{className:o.fields,children:[e.jsx(q,{label:Y,type:"email",placeholder:$,value:j,onChange:i=>U(i.target.value),required:!0,fullWidth:!0,disabled:y,autoComplete:"email"}),e.jsx(q,{label:J,type:"password",placeholder:X,value:P,onChange:i=>F(i.target.value),required:!0,fullWidth:!0,disabled:y,autoComplete:"current-password"})]}),(C||I)&&e.jsxs("div",{className:o.formOptions,children:[C&&e.jsx(re,{label:K,checked:k,onChange:i=>V(i.target.checked),disabled:y}),I&&e.jsx(G,{href:ee,variant:"brand",size:"sm",children:Q})]}),e.jsx(se,{type:"submit",variant:"primary",fullWidth:!0,isLoading:y,children:Z})]}),z&&e.jsxs("div",{className:o.signUpPrompt,children:[e.jsx("span",{children:A}),e.jsx(G,{href:M,variant:"brand",children:E})]}),L&&e.jsx("div",{className:o.footer,children:L})]})}),N&&e.jsx("div",{className:o.editorialPanel,"data-has-image":!!t.backgroundImage,style:t.backgroundImage?{backgroundImage:`url(${t.backgroundImage})`}:void 0,children:t.children?t.children:e.jsxs("div",{className:o.editorialContent,children:[t.headline&&e.jsx("h2",{className:o.editorialHeadline,children:t.headline}),t.description&&e.jsx("p",{className:o.editorialDescription,children:t.description}),t.quote&&e.jsxs("div",{className:o.testimonial,children:[e.jsxs("p",{className:o.quote,children:['"',t.quote,'"']}),(t.author||t.authorRole)&&e.jsxs("div",{className:o.author,children:[t.authorAvatar&&e.jsx("div",{className:o.authorAvatar,children:t.authorAvatar}),e.jsxs("div",{className:o.authorInfo,children:[t.author&&e.jsx("p",{className:o.authorName,children:t.author}),t.authorRole&&e.jsx("p",{className:o.authorRole,children:t.authorRole})]})]})]})]})})]})});x.displayName="LoginTemplate";x.__docgenInfo={description:"",methods:[],displayName:"LoginTemplate",props:{logo:{required:!1,tsType:{name:"ReactNode"},description:"Logo element (displayed at top of form)"},title:{required:!1,tsType:{name:"string"},description:`Main heading
@default 'Welcome back'`,defaultValue:{value:"'Welcome back'",computed:!1}},subtitle:{required:!1,tsType:{name:"string"},description:`Subtitle/description
@default 'Sign in to your account'`,defaultValue:{value:"'Sign in to your account'",computed:!1}},formConfig:{required:!1,tsType:{name:"LoginFormConfig"},description:"Form configuration",defaultValue:{value:"{}",computed:!1}},socialProviders:{required:!1,tsType:{name:"Array",elements:[{name:"SocialProvider"}],raw:"SocialProvider[]"},description:"Social login providers",defaultValue:{value:"[]",computed:!1}},socialLabel:{required:!1,tsType:{name:"string"},description:`Social login section label
@default 'Or continue with'`,defaultValue:{value:"'Or continue with'",computed:!1}},showSignUp:{required:!1,tsType:{name:"boolean"},description:`Show sign up link
@default true`,defaultValue:{value:"true",computed:!1}},signUpPrompt:{required:!1,tsType:{name:"string"},description:`Sign up prompt text
@default "Don't have an account?"`,defaultValue:{value:`"Don't have an account?"`,computed:!1}},signUpLabel:{required:!1,tsType:{name:"string"},description:`Sign up link text
@default 'Sign up'`,defaultValue:{value:"'Sign up'",computed:!1}},signUpHref:{required:!1,tsType:{name:"string"},description:`Sign up URL
@default '/signup'`,defaultValue:{value:"'/signup'",computed:!1}},editorial:{required:!1,tsType:{name:"LoginEditorial"},description:`Editorial content for right panel
If not provided, right panel is hidden on all screen sizes`},onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: { email: string; password: string; rememberMe: boolean }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ email: string; password: string; rememberMe: boolean }",signature:{properties:[{key:"email",value:{name:"string",required:!0}},{key:"password",value:{name:"string",required:!0}},{key:"rememberMe",value:{name:"boolean",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:"Form submit handler"},isLoading:{required:!1,tsType:{name:"boolean"},description:`Loading state (disables form)
@default false`,defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"string"},description:"Error message to display"},footer:{required:!1,tsType:{name:"ReactNode"},description:"Footer content (e.g., terms, privacy links)"}},composes:["Omit"]};const Ke={title:"Templates/App/Login",component:x,parameters:{layout:"fullscreen",docs:{description:{component:"A complete login page template inspired by Supabase. Features a split layout with form and editorial content."}}},tags:["autodocs"]},s=()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[e.jsx("div",{style:{width:32,height:32,borderRadius:"var(--radius-control)",background:"var(--interactive-primary)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--interactive-primary-text)",fontWeight:"bold",fontSize:"var(--font-size-14)"},children:"O"}),e.jsx("span",{style:{fontFamily:"var(--font-secondary)",fontWeight:700,fontSize:"var(--font-size-18)",color:"var(--text-primary)"},children:"Orion"})]}),n={args:{logo:e.jsx(s,{}),title:"Welcome back",subtitle:"Sign in to your account to continue",socialProviders:[{name:"GitHub",icon:e.jsx(r,{size:20})},{name:"Google",icon:e.jsx(b,{size:20})}],editorial:{headline:"Build faster with Orion",description:"The AI-first design system that eliminates UI hallucination.",quote:"Orion has completely transformed how our team builds interfaces. The token system ensures consistency across our entire product.",author:"Sarah Chen",authorRole:"VP of Engineering at TechCorp",authorAvatar:e.jsx("img",{src:"https://i.pravatar.cc/80?u=sarah",alt:""})},onSubmit:a=>console.log("Login:",a)}},l={args:{logo:e.jsx(s,{}),title:"Sign in",subtitle:"Enter your credentials to access your account",editorial:{headline:"Welcome to Orion",description:"Your AI-first design system for building consistent, accessible interfaces."},onSubmit:a=>console.log("Login:",a)}},c={args:{logo:e.jsx(s,{}),title:"Welcome back",subtitle:"Sign in to your account",error:"Invalid email or password. Please try again.",socialProviders:[{name:"GitHub",icon:e.jsx(r,{size:20})}],editorial:{headline:"Secure & Reliable",description:"Your data is protected with enterprise-grade security."},onSubmit:a=>console.log("Login:",a)}},d={args:{logo:e.jsx(s,{}),title:"Welcome back",subtitle:"Sign in to your account",isLoading:!0,editorial:{headline:"Processing...",description:"Please wait while we verify your credentials."},onSubmit:a=>console.log("Login:",a)}},u={args:{logo:e.jsx(s,{}),title:"Welcome back",subtitle:"Sign in to your account",socialProviders:[{name:"GitHub",icon:e.jsx(r,{size:20})},{name:"Google",icon:e.jsx(b,{size:20})}],onSubmit:a=>console.log("Login:",a)}},m={args:{logo:e.jsx(s,{}),title:"Iniciar sesión",subtitle:"Ingresa tus credenciales para continuar",formConfig:{emailLabel:"Correo electrónico",emailPlaceholder:"tu@ejemplo.com",passwordLabel:"Contraseña",passwordPlaceholder:"Ingresa tu contraseña",submitLabel:"Iniciar sesión",rememberMeLabel:"Recordarme",forgotPasswordLabel:"¿Olvidaste tu contraseña?"},signUpPrompt:"¿No tienes cuenta?",signUpLabel:"Regístrate",socialLabel:"O continúa con",socialProviders:[{name:"Google",icon:e.jsx(b,{size:20})}],editorial:{headline:"Bienvenido a Orion",description:"El sistema de diseño AI-first para interfaces consistentes."},onSubmit:a=>console.log("Login:",a)}},p={args:{logo:e.jsx(s,{}),title:"Welcome back",subtitle:"Choose your preferred sign in method",socialProviders:[{name:"GitHub",icon:e.jsx(r,{size:20})},{name:"Google",icon:e.jsx(b,{size:20})},{name:"Apple",icon:e.jsx(le,{size:20})}],editorial:{headline:"Multiple ways to sign in",description:"Connect with your favorite provider for quick access.",quote:"Single sign-on makes our team workflow so much faster!",author:"Mike Johnson",authorRole:"Product Manager",authorAvatar:e.jsx("img",{src:"https://i.pravatar.cc/80?u=mike",alt:""})},onSubmit:a=>console.log("Login:",a)}},g={args:{logo:e.jsx(s,{}),title:"Welcome back",subtitle:"Sign in to continue to your dashboard",socialProviders:[{name:"GitHub",icon:e.jsx(r,{size:20})},{name:"Google",icon:e.jsx(b,{size:20})}],editorial:{backgroundImage:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800",headline:"Design at Scale",description:"Build beautiful, consistent interfaces with confidence.",quote:"The best design system I have ever used.",author:"Emily Davis",authorRole:"Lead Designer at StartupXYZ",authorAvatar:e.jsx("img",{src:"https://i.pravatar.cc/80?u=emily",alt:""})},onSubmit:a=>console.log("Login:",a)}},h={args:{logo:e.jsx(s,{}),title:"Welcome back",subtitle:"Sign in to your account",socialProviders:[{name:"GitHub",icon:e.jsx(r,{size:20})}],editorial:{headline:"Enterprise Ready",description:"Trusted by teams worldwide for mission-critical applications."},footer:e.jsxs("span",{children:["By signing in, you agree to our"," ",e.jsx("a",{href:"/terms",style:{color:"var(--text-brand)"},children:"Terms of Service"})," ","and"," ",e.jsx("a",{href:"/privacy",style:{color:"var(--text-brand)"},children:"Privacy Policy"})]}),onSubmit:a=>console.log("Login:",a)}},f={args:{title:"Sign in",formConfig:{showRememberMe:!1,showForgotPassword:!1},showSignUp:!1,onSubmit:a=>console.log("Login:",a)}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    logo: <Logo />,
    title: 'Welcome back',
    subtitle: 'Sign in to your account to continue',
    socialProviders: [{
      name: 'GitHub',
      icon: <Github size={20} />
    }, {
      name: 'Google',
      icon: <Chrome size={20} />
    }],
    editorial: {
      headline: 'Build faster with Orion',
      description: 'The AI-first design system that eliminates UI hallucination.',
      quote: 'Orion has completely transformed how our team builds interfaces. The token system ensures consistency across our entire product.',
      author: 'Sarah Chen',
      authorRole: 'VP of Engineering at TechCorp',
      authorAvatar: <img src="https://i.pravatar.cc/80?u=sarah" alt="" />
    },
    onSubmit: data => console.log('Login:', data)
  }
}`,...n.parameters?.docs?.source},description:{story:"Default login with editorial panel",...n.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    logo: <Logo />,
    title: 'Sign in',
    subtitle: 'Enter your credentials to access your account',
    editorial: {
      headline: 'Welcome to Orion',
      description: 'Your AI-first design system for building consistent, accessible interfaces.'
    },
    onSubmit: data => console.log('Login:', data)
  }
}`,...l.parameters?.docs?.source},description:{story:"Login without social providers",...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    logo: <Logo />,
    title: 'Welcome back',
    subtitle: 'Sign in to your account',
    error: 'Invalid email or password. Please try again.',
    socialProviders: [{
      name: 'GitHub',
      icon: <Github size={20} />
    }],
    editorial: {
      headline: 'Secure & Reliable',
      description: 'Your data is protected with enterprise-grade security.'
    },
    onSubmit: data => console.log('Login:', data)
  }
}`,...c.parameters?.docs?.source},description:{story:"Login with error state",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    logo: <Logo />,
    title: 'Welcome back',
    subtitle: 'Sign in to your account',
    isLoading: true,
    editorial: {
      headline: 'Processing...',
      description: 'Please wait while we verify your credentials.'
    },
    onSubmit: data => console.log('Login:', data)
  }
}`,...d.parameters?.docs?.source},description:{story:"Login in loading state",...d.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    logo: <Logo />,
    title: 'Welcome back',
    subtitle: 'Sign in to your account',
    socialProviders: [{
      name: 'GitHub',
      icon: <Github size={20} />
    }, {
      name: 'Google',
      icon: <Chrome size={20} />
    }],
    onSubmit: data => console.log('Login:', data)
  }
}`,...u.parameters?.docs?.source},description:{story:"Login without editorial panel (single column)",...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    logo: <Logo />,
    title: 'Iniciar sesión',
    subtitle: 'Ingresa tus credenciales para continuar',
    formConfig: {
      emailLabel: 'Correo electrónico',
      emailPlaceholder: 'tu@ejemplo.com',
      passwordLabel: 'Contraseña',
      passwordPlaceholder: 'Ingresa tu contraseña',
      submitLabel: 'Iniciar sesión',
      rememberMeLabel: 'Recordarme',
      forgotPasswordLabel: '¿Olvidaste tu contraseña?'
    },
    signUpPrompt: '¿No tienes cuenta?',
    signUpLabel: 'Regístrate',
    socialLabel: 'O continúa con',
    socialProviders: [{
      name: 'Google',
      icon: <Chrome size={20} />
    }],
    editorial: {
      headline: 'Bienvenido a Orion',
      description: 'El sistema de diseño AI-first para interfaces consistentes.'
    },
    onSubmit: data => console.log('Login:', data)
  }
}`,...m.parameters?.docs?.source},description:{story:"Login with custom form labels",...m.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    logo: <Logo />,
    title: 'Welcome back',
    subtitle: 'Choose your preferred sign in method',
    socialProviders: [{
      name: 'GitHub',
      icon: <Github size={20} />
    }, {
      name: 'Google',
      icon: <Chrome size={20} />
    }, {
      name: 'Apple',
      icon: <Apple size={20} />
    }],
    editorial: {
      headline: 'Multiple ways to sign in',
      description: 'Connect with your favorite provider for quick access.',
      quote: 'Single sign-on makes our team workflow so much faster!',
      author: 'Mike Johnson',
      authorRole: 'Product Manager',
      authorAvatar: <img src="https://i.pravatar.cc/80?u=mike" alt="" />
    },
    onSubmit: data => console.log('Login:', data)
  }
}`,...p.parameters?.docs?.source},description:{story:"Login with multiple social providers",...p.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    logo: <Logo />,
    title: 'Welcome back',
    subtitle: 'Sign in to continue to your dashboard',
    socialProviders: [{
      name: 'GitHub',
      icon: <Github size={20} />
    }, {
      name: 'Google',
      icon: <Chrome size={20} />
    }],
    editorial: {
      backgroundImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800',
      headline: 'Design at Scale',
      description: 'Build beautiful, consistent interfaces with confidence.',
      quote: 'The best design system I have ever used.',
      author: 'Emily Davis',
      authorRole: 'Lead Designer at StartupXYZ',
      authorAvatar: <img src="https://i.pravatar.cc/80?u=emily" alt="" />
    },
    onSubmit: data => console.log('Login:', data)
  }
}`,...g.parameters?.docs?.source},description:{story:"Login with background image on editorial",...g.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    logo: <Logo />,
    title: 'Welcome back',
    subtitle: 'Sign in to your account',
    socialProviders: [{
      name: 'GitHub',
      icon: <Github size={20} />
    }],
    editorial: {
      headline: 'Enterprise Ready',
      description: 'Trusted by teams worldwide for mission-critical applications.'
    },
    footer: <span>
        By signing in, you agree to our{' '}
        <a href="/terms" style={{
        color: 'var(--text-brand)'
      }}>
          Terms of Service
        </a>{' '}
        and{' '}
        <a href="/privacy" style={{
        color: 'var(--text-brand)'
      }}>
          Privacy Policy
        </a>
      </span>,
    onSubmit: data => console.log('Login:', data)
  }
}`,...h.parameters?.docs?.source},description:{story:"Login with footer content",...h.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Sign in',
    formConfig: {
      showRememberMe: false,
      showForgotPassword: false
    },
    showSignUp: false,
    onSubmit: data => console.log('Login:', data)
  }
}`,...f.parameters?.docs?.source},description:{story:"Minimal login - form only, no extras",...f.parameters?.docs?.description}}};const Qe=["Default","WithoutSocial","WithError","Loading","SingleColumn","CustomLabels","MultipleSocialProviders","WithBackgroundImage","WithFooter","Minimal"];export{m as CustomLabels,n as Default,d as Loading,f as Minimal,p as MultipleSocialProviders,u as SingleColumn,g as WithBackgroundImage,c as WithError,h as WithFooter,l as WithoutSocial,Qe as __namedExportsOrder,Ke as default};
