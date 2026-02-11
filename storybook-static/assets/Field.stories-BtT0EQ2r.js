import{j as e}from"./jsx-runtime-u17CrQMm.js";import{F as r}from"./Field-q4DqLIqo.js";import{r as d}from"./index-Bi6L2ga8.js";import{M as I}from"./mail-B1OdJ1bA.js";import{E as F}from"./eye-off-DhGw57pq.js";import{E as T}from"./eye-6tB6fTIZ.js";import{L as C}from"./lock-Cq0Y35Uf.js";import{S as q}from"./search-BC3UyaPv.js";import{U as L}from"./user-CUEj3VL3.js";import"./circle-alert-BMPEDkj1.js";import"./createLucideIcon-DprCCbyf.js";const _={title:"Components/Forms/Field",component:r,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{type:{control:"select",options:["text","email","password","number","tel","url","search"]},size:{control:"select",options:["sm","md","lg"]}}},p={args:{label:"Username",placeholder:"Enter your username"}},u={render:()=>{const[a,o]=d.useState("john.doe@example.com");return e.jsx(r,{type:"email",label:"Email",value:a,onChange:s=>o(s.target.value)})}},m={args:{label:"Full Name",placeholder:"Enter your full name",required:!0}},h={args:{label:"Password",type:"password",helperText:"Must be at least 8 characters long"}},b={args:{label:"Email",type:"email",value:"invalid-email",error:"Please enter a valid email address"}},g={args:{label:"Account ID",value:"ACC-12345",disabled:!0}},y={args:{label:"Small Input",size:"sm",placeholder:"Small size"}},x={args:{label:"Medium Input",size:"md",placeholder:"Medium size (default)"}},w={args:{label:"Large Input",size:"lg",placeholder:"Large size"}},v={args:{label:"Email Address",type:"email",placeholder:"your@email.com"}},f={args:{label:"Password",type:"password",placeholder:"Enter your password"}},S={args:{label:"Age",type:"number",placeholder:"25"}},j={args:{label:"Search",type:"search",placeholder:"Search..."}},E={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-4)",maxWidth:"400px"},children:[e.jsx(r,{label:"Full Name",placeholder:"John Doe",required:!0}),e.jsx(r,{type:"email",label:"Email",placeholder:"john@example.com",helperText:"We'll never share your email",required:!0}),e.jsx(r,{type:"password",label:"Password",helperText:"Must be at least 8 characters",required:!0}),e.jsx(r,{type:"tel",label:"Phone Number",placeholder:"+1 (555) 000-0000"})]})},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-4)",maxWidth:"400px"},children:[e.jsx(r,{label:"Email",type:"email",leftIcon:e.jsx(I,{size:18}),placeholder:"you@example.com"}),e.jsx(r,{label:"Username",leftIcon:e.jsx(L,{size:18}),placeholder:"johndoe"})]})},t={render:()=>{const[a,o]=d.useState(!1);return e.jsx(r,{label:"Password",type:a?"text":"password",leftIcon:e.jsx(C,{size:18}),placeholder:"Enter your password",rightIcon:e.jsx("button",{type:"button",onClick:()=>o(!a),"aria-label":a?"Hide password":"Show password","aria-pressed":a,children:a?e.jsx(F,{size:18}):e.jsx(T,{size:18})})})}},i={render:()=>e.jsx(r,{type:"search","aria-label":"Search",leftIcon:e.jsx(q,{size:18}),placeholder:"Search..."})},n={render:()=>e.jsxs("div",{style:{maxWidth:"400px"},children:[e.jsx("p",{id:"password-requirements",style:{fontSize:"var(--font-size-12)",color:"var(--text-secondary)",marginBottom:"var(--spacing-4)",padding:"var(--spacing-3)",background:"var(--surface-subtle)",borderRadius:"var(--radius-sm)"},children:"Password requirements: at least 8 characters, one uppercase letter, one number, and one special character."}),e.jsx(r,{label:"Create Password",type:"password","aria-describedby":"password-requirements",placeholder:"Create a secure password"})]})},c={render:()=>{const[a,o]=d.useState(""),[s,D]=d.useState(!1),[P,W]=d.useState(""),A=P&&!P.includes("@")?"Please enter a valid email":void 0;return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-6)",maxWidth:"450px"},children:[e.jsxs("div",{style:{padding:"var(--spacing-4)",background:"var(--surface-subtle)",borderRadius:"var(--radius-control)",fontSize:"var(--font-size-12)",color:"var(--text-secondary)"},children:[e.jsx("strong",{style:{color:"var(--text-primary)"},children:"Accessibility Features:"}),e.jsxs("ul",{style:{margin:"var(--spacing-2) 0 0",paddingLeft:"var(--spacing-4)"},children:[e.jsx("li",{children:"Labels linked via htmlFor/id"}),e.jsx("li",{children:"aria-invalid on error states"}),e.jsx("li",{children:"aria-describedby for helper/error text"}),e.jsx("li",{children:'role="alert" on error messages'}),e.jsx("li",{children:"Focus-visible ring for keyboard users"}),e.jsx("li",{children:"High contrast mode support"}),e.jsx("li",{children:"Reduced motion support"})]})]}),e.jsx(r,{label:"Full Name",placeholder:"John Doe",required:!0,helperText:"Enter your legal name as it appears on documents"}),e.jsx(r,{label:"Email Address",type:"email",leftIcon:e.jsx(I,{size:18}),value:P,onChange:z=>W(z.target.value),error:A,placeholder:"you@example.com",required:!0}),e.jsx(r,{label:"Password",type:s?"text":"password",leftIcon:e.jsx(C,{size:18}),value:a,onChange:z=>o(z.target.value),placeholder:"Create a secure password",helperText:"Minimum 8 characters",required:!0,rightIcon:e.jsx("button",{type:"button",onClick:()=>D(!s),"aria-label":s?"Hide password":"Show password","aria-pressed":s,children:s?e.jsx(F,{size:18}):e.jsx(T,{size:18})})}),e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"var(--font-size-11)",color:"var(--text-tertiary)",marginBottom:"var(--spacing-2)",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Icon-only input (uses aria-label)"}),e.jsx(r,{type:"search","aria-label":"Search products",leftIcon:e.jsx(q,{size:18}),placeholder:"Search products..."})]}),e.jsx(r,{label:"Account ID",value:"ACC-12345-LOCKED",disabled:!0,helperText:"This field cannot be edited"})]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    placeholder: 'Enter your username'
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('john.doe@example.com');
    return <Field type="email" label="Email" value={value} onChange={e => setValue(e.target.value)} />;
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Full Name',
    placeholder: 'Enter your full name',
    required: true
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    type: 'password',
    helperText: 'Must be at least 8 characters long'
  }
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    type: 'email',
    value: 'invalid-email',
    error: 'Please enter a valid email address'
  }
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Account ID',
    value: 'ACC-12345',
    disabled: true
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Small Input',
    size: 'sm',
    placeholder: 'Small size'
  }
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Medium Input',
    size: 'md',
    placeholder: 'Medium size (default)'
  }
}`,...x.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Large Input',
    size: 'lg',
    placeholder: 'Large size'
  }
}`,...w.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email Address',
    type: 'email',
    placeholder: 'your@email.com'
  }
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password'
  }
}`,...f.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Age',
    type: 'number',
    placeholder: '25'
  }
}`,...S.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Search',
    type: 'search',
    placeholder: 'Search...'
  }
}`,...j.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-4)',
    maxWidth: '400px'
  }}>
      <Field label="Full Name" placeholder="John Doe" required />
      <Field type="email" label="Email" placeholder="john@example.com" helperText="We'll never share your email" required />
      <Field type="password" label="Password" helperText="Must be at least 8 characters" required />
      <Field type="tel" label="Phone Number" placeholder="+1 (555) 000-0000" />
    </div>
}`,...E.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-4)',
    maxWidth: '400px'
  }}>
      <Field label="Email" type="email" leftIcon={<Mail size={18} />} placeholder="you@example.com" />
      <Field label="Username" leftIcon={<User size={18} />} placeholder="johndoe" />
    </div>
}`,...l.parameters?.docs?.source},description:{story:"With Icons - Shows left and right icon support with proper accessibility.",...l.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [showPassword, setShowPassword] = useState(false);
    return <Field label="Password" type={showPassword ? 'text' : 'password'} leftIcon={<Lock size={18} />} placeholder="Enter your password" rightIcon={<button type="button" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? 'Hide password' : 'Show password'} aria-pressed={showPassword}>
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>} />;
  }
}`,...t.parameters?.docs?.source},description:{story:`Password Toggle - Accessible password visibility toggle using rightIcon.
The button inside rightIcon is keyboard accessible and properly announced.`,...t.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Field type="search" aria-label="Search" leftIcon={<Search size={18} />} placeholder="Search..." />
}`,...i.parameters?.docs?.source},description:{story:`Search without Label - Using aria-label for icon-only search input.
When no visible label is provided, aria-label is required for accessibility.`,...i.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '400px'
  }}>
      <p id="password-requirements" style={{
      fontSize: 'var(--font-size-12)',
      color: 'var(--text-secondary)',
      marginBottom: 'var(--spacing-4)',
      padding: 'var(--spacing-3)',
      background: 'var(--surface-subtle)',
      borderRadius: 'var(--radius-sm)'
    }}>
        Password requirements: at least 8 characters, one uppercase letter,
        one number, and one special character.
      </p>
      <Field label="Create Password" type="password" aria-describedby="password-requirements" placeholder="Create a secure password" />
    </div>
}`,...n.parameters?.docs?.source},description:{story:`External Description - Using aria-describedby with external content.
The field can reference additional descriptive text outside the component.`,...n.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const emailError = email && !email.includes('@') ? 'Please enter a valid email' : undefined;
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-6)',
      maxWidth: '450px'
    }}>
        <div style={{
        padding: 'var(--spacing-4)',
        background: 'var(--surface-subtle)',
        borderRadius: 'var(--radius-control)',
        fontSize: 'var(--font-size-12)',
        color: 'var(--text-secondary)'
      }}>
          <strong style={{
          color: 'var(--text-primary)'
        }}>Accessibility Features:</strong>
          <ul style={{
          margin: 'var(--spacing-2) 0 0',
          paddingLeft: 'var(--spacing-4)'
        }}>
            <li>Labels linked via htmlFor/id</li>
            <li>aria-invalid on error states</li>
            <li>aria-describedby for helper/error text</li>
            <li>role=&quot;alert&quot; on error messages</li>
            <li>Focus-visible ring for keyboard users</li>
            <li>High contrast mode support</li>
            <li>Reduced motion support</li>
          </ul>
        </div>

        {/* Standard field with label */}
        <Field label="Full Name" placeholder="John Doe" required helperText="Enter your legal name as it appears on documents" />

        {/* Email with live validation */}
        <Field label="Email Address" type="email" leftIcon={<Mail size={18} />} value={email} onChange={e => setEmail(e.target.value)} error={emailError} placeholder="you@example.com" required />

        {/* Password with toggle */}
        <Field label="Password" type={showPassword ? 'text' : 'password'} leftIcon={<Lock size={18} />} value={password} onChange={e => setPassword(e.target.value)} placeholder="Create a secure password" helperText="Minimum 8 characters" required rightIcon={<button type="button" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? 'Hide password' : 'Show password'} aria-pressed={showPassword}>
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>} />

        {/* Search without visible label */}
        <div>
          <p style={{
          fontSize: 'var(--font-size-11)',
          color: 'var(--text-tertiary)',
          marginBottom: 'var(--spacing-2)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
            Icon-only input (uses aria-label)
          </p>
          <Field type="search" aria-label="Search products" leftIcon={<Search size={18} />} placeholder="Search products..." />
        </div>

        {/* Disabled state */}
        <Field label="Account ID" value="ACC-12345-LOCKED" disabled helperText="This field cannot be edited" />
      </div>;
  }
}`,...c.parameters?.docs?.source},description:{story:"Accessibility Overview - Demonstrates all accessibility features in one view.",...c.parameters?.docs?.description}}};const G=["Default","WithValue","Required","WithHelper","WithError","Disabled","Small","Medium","Large","EmailType","PasswordType","NumberType","SearchType","CompleteForm","WithIcons","PasswordToggle","SearchWithoutLabel","ExternalDescription","AccessibilityOverview"];export{c as AccessibilityOverview,E as CompleteForm,p as Default,g as Disabled,v as EmailType,n as ExternalDescription,w as Large,x as Medium,S as NumberType,t as PasswordToggle,f as PasswordType,m as Required,j as SearchType,i as SearchWithoutLabel,y as Small,b as WithError,h as WithHelper,l as WithIcons,u as WithValue,G as __namedExportsOrder,_ as default};
