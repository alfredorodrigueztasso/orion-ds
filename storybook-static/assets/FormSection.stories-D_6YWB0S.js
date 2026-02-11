import{j as e}from"./jsx-runtime-u17CrQMm.js";import{F as i}from"./FormSection-BhKFvmEk.js";import{B as o}from"./Button-C5l-MScQ.js";import{F as t}from"./Field-q4DqLIqo.js";import{B as u}from"./bell-B0mciaZ5.js";import{C as y}from"./credit-card-DVOexJYu.js";import{L as m}from"./lock-Cq0Y35Uf.js";import{U as h}from"./user-CUEj3VL3.js";import"./index-Bi6L2ga8.js";import"./chevron-down-buXKF-gJ.js";import"./createLucideIcon-DprCCbyf.js";import"./circle-alert-BMPEDkj1.js";const B={title:"Sections/App/FormSection",component:i,parameters:{layout:"padded",docs:{description:{component:"A form section for settings pages and structured form layouts. Optimized for Product Mode with clear hierarchy and efficient space usage."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","card","inline"]},collapsible:{control:"boolean"},divider:{control:"boolean"},disabled:{control:"boolean"}}},r={args:{title:"Profile Information",description:"Update your personal details and public profile.",children:e.jsxs(e.Fragment,{children:[e.jsxs(i.Group,{columns:2,children:[e.jsx(t,{label:"First Name",type:"text",placeholder:"John"}),e.jsx(t,{label:"Last Name",type:"text",placeholder:"Doe"})]}),e.jsx(t,{label:"Email",type:"email",placeholder:"john@example.com"}),e.jsx(t,{label:"Bio",type:"textarea",placeholder:"Tell us about yourself..."})]}),actions:e.jsxs(i.Actions,{children:[e.jsx(o,{variant:"secondary",children:"Cancel"}),e.jsx(o,{children:"Save Changes"})]})}},s={args:{icon:e.jsx(h,{size:20}),title:"Personal Details",description:"Manage your account information.",children:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Display Name",type:"text",placeholder:"johndoe"}),e.jsx(t,{label:"Phone Number",type:"tel",placeholder:"+1 (555) 123-4567"})]})}},a={args:{variant:"card",icon:e.jsx(u,{size:20}),title:"Notification Preferences",description:"Choose how you want to be notified.",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-4)"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:"var(--font-weight-medium)"},children:"Email Notifications"}),e.jsx("div",{style:{fontSize:"var(--font-size-14)",color:"var(--text-secondary)"},children:"Receive updates via email"})]}),e.jsx("input",{type:"checkbox",defaultChecked:!0})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:"var(--font-weight-medium)"},children:"Push Notifications"}),e.jsx("div",{style:{fontSize:"var(--font-size-14)",color:"var(--text-secondary)"},children:"Receive push notifications"})]}),e.jsx("input",{type:"checkbox"})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:"var(--font-weight-medium)"},children:"SMS Alerts"}),e.jsx("div",{style:{fontSize:"var(--font-size-14)",color:"var(--text-secondary)"},children:"Get important alerts via SMS"})]}),e.jsx("input",{type:"checkbox"})]})]})}},l={args:{variant:"inline",title:"Password",description:"Update your password to keep your account secure.",children:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Current Password",type:"password"}),e.jsx(t,{label:"New Password",type:"password"}),e.jsx(t,{label:"Confirm New Password",type:"password"})]}),actions:e.jsx(i.Actions,{children:e.jsx(o,{children:"Update Password"})})}},n={args:{collapsible:!0,icon:e.jsx(m,{size:20}),title:"Security Settings",description:"Configure security options for your account.",children:e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:"var(--font-weight-medium)"},children:"Two-Factor Authentication"}),e.jsx("div",{style:{fontSize:"var(--font-size-14)",color:"var(--text-secondary)"},children:"Add an extra layer of security"})]}),e.jsx("input",{type:"checkbox"})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:"var(--font-weight-medium)"},children:"Session Timeout"}),e.jsx("div",{style:{fontSize:"var(--font-size-14)",color:"var(--text-secondary)"},children:"Auto logout after inactivity"})]}),e.jsx("input",{type:"checkbox",defaultChecked:!0})]})]})}},c={args:{collapsible:!0,defaultCollapsed:!0,icon:e.jsx(y,{size:20}),title:"Billing Information",description:"Manage your payment methods and billing address.",children:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Card Number",type:"text",placeholder:"4242 4242 4242 4242"}),e.jsxs(i.Group,{columns:2,children:[e.jsx(t,{label:"Expiry Date",type:"text",placeholder:"MM/YY"}),e.jsx(t,{label:"CVV",type:"text",placeholder:"123"})]})]})}},d={args:{divider:!0,title:"Account Settings",description:"Basic account configuration.",children:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Username",type:"text"}),e.jsx(t,{label:"Language",type:"select"}),e.jsx(t,{label:"Timezone",type:"select"})]})}},p={args:{title:"Address Information",description:"Enter your shipping address.",children:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Street Address",type:"text",placeholder:"123 Main St"}),e.jsx(t,{label:"Address Line 2",type:"text",placeholder:"Apt, Suite, etc."}),e.jsxs(i.Group,{columns:3,children:[e.jsx(t,{label:"City",type:"text",placeholder:"San Francisco"}),e.jsx(t,{label:"State",type:"text",placeholder:"CA"}),e.jsx(t,{label:"ZIP Code",type:"text",placeholder:"94102"})]}),e.jsx(t,{label:"Country",type:"select"})]}),actions:e.jsxs(i.Actions,{align:"between",children:[e.jsx(o,{variant:"ghost",children:"Clear Form"}),e.jsxs("div",{style:{display:"flex",gap:"var(--spacing-2)"},children:[e.jsx(o,{variant:"secondary",children:"Cancel"}),e.jsx(o,{children:"Save Address"})]})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Profile Information',
    description: 'Update your personal details and public profile.',
    children: <>
        <FormSection.Group columns={2}>
          <Field label="First Name" type="text" placeholder="John" />
          <Field label="Last Name" type="text" placeholder="Doe" />
        </FormSection.Group>
        <Field label="Email" type="email" placeholder="john@example.com" />
        <Field label="Bio" type="textarea" placeholder="Tell us about yourself..." />
      </>,
    actions: <FormSection.Actions>
        <Button variant="secondary">Cancel</Button>
        <Button>Save Changes</Button>
      </FormSection.Actions>
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <User size={20} />,
    title: 'Personal Details',
    description: 'Manage your account information.',
    children: <>
        <Field label="Display Name" type="text" placeholder="johndoe" />
        <Field label="Phone Number" type="tel" placeholder="+1 (555) 123-4567" />
      </>
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'card',
    icon: <Bell size={20} />,
    title: 'Notification Preferences',
    description: 'Choose how you want to be notified.',
    children: <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-4)'
    }}>
        <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
          <div>
            <div style={{
            fontWeight: 'var(--font-weight-medium)'
          }}>Email Notifications</div>
            <div style={{
            fontSize: 'var(--font-size-14)',
            color: 'var(--text-secondary)'
          }}>
              Receive updates via email
            </div>
          </div>
          <input type="checkbox" defaultChecked />
        </div>
        <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
          <div>
            <div style={{
            fontWeight: 'var(--font-weight-medium)'
          }}>Push Notifications</div>
            <div style={{
            fontSize: 'var(--font-size-14)',
            color: 'var(--text-secondary)'
          }}>
              Receive push notifications
            </div>
          </div>
          <input type="checkbox" />
        </div>
        <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
          <div>
            <div style={{
            fontWeight: 'var(--font-weight-medium)'
          }}>SMS Alerts</div>
            <div style={{
            fontSize: 'var(--font-size-14)',
            color: 'var(--text-secondary)'
          }}>
              Get important alerts via SMS
            </div>
          </div>
          <input type="checkbox" />
        </div>
      </div>
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'inline',
    title: 'Password',
    description: 'Update your password to keep your account secure.',
    children: <>
        <Field label="Current Password" type="password" />
        <Field label="New Password" type="password" />
        <Field label="Confirm New Password" type="password" />
      </>,
    actions: <FormSection.Actions>
        <Button>Update Password</Button>
      </FormSection.Actions>
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    collapsible: true,
    icon: <Lock size={20} />,
    title: 'Security Settings',
    description: 'Configure security options for your account.',
    children: <>
        <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
          <div>
            <div style={{
            fontWeight: 'var(--font-weight-medium)'
          }}>Two-Factor Authentication</div>
            <div style={{
            fontSize: 'var(--font-size-14)',
            color: 'var(--text-secondary)'
          }}>
              Add an extra layer of security
            </div>
          </div>
          <input type="checkbox" />
        </div>
        <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
          <div>
            <div style={{
            fontWeight: 'var(--font-weight-medium)'
          }}>Session Timeout</div>
            <div style={{
            fontSize: 'var(--font-size-14)',
            color: 'var(--text-secondary)'
          }}>
              Auto logout after inactivity
            </div>
          </div>
          <input type="checkbox" defaultChecked />
        </div>
      </>
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    collapsible: true,
    defaultCollapsed: true,
    icon: <CreditCard size={20} />,
    title: 'Billing Information',
    description: 'Manage your payment methods and billing address.',
    children: <>
        <Field label="Card Number" type="text" placeholder="4242 4242 4242 4242" />
        <FormSection.Group columns={2}>
          <Field label="Expiry Date" type="text" placeholder="MM/YY" />
          <Field label="CVV" type="text" placeholder="123" />
        </FormSection.Group>
      </>
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    divider: true,
    title: 'Account Settings',
    description: 'Basic account configuration.',
    children: <>
        <Field label="Username" type="text" />
        <Field label="Language" type="select" />
        <Field label="Timezone" type="select" />
      </>
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Address Information',
    description: 'Enter your shipping address.',
    children: <>
        <Field label="Street Address" type="text" placeholder="123 Main St" />
        <Field label="Address Line 2" type="text" placeholder="Apt, Suite, etc." />
        <FormSection.Group columns={3}>
          <Field label="City" type="text" placeholder="San Francisco" />
          <Field label="State" type="text" placeholder="CA" />
          <Field label="ZIP Code" type="text" placeholder="94102" />
        </FormSection.Group>
        <Field label="Country" type="select" />
      </>,
    actions: <FormSection.Actions align="between">
        <Button variant="ghost">Clear Form</Button>
        <div style={{
        display: 'flex',
        gap: 'var(--spacing-2)'
      }}>
          <Button variant="secondary">Cancel</Button>
          <Button>Save Address</Button>
        </div>
      </FormSection.Actions>
  }
}`,...p.parameters?.docs?.source}}};const P=["Default","WithIcon","CardVariant","InlineVariant","Collapsible","CollapsedByDefault","WithDivider","MultipleGroups"];export{a as CardVariant,c as CollapsedByDefault,n as Collapsible,r as Default,l as InlineVariant,p as MultipleGroups,d as WithDivider,s as WithIcon,P as __namedExportsOrder,B as default};
