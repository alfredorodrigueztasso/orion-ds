import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as x}from"./index-Bi6L2ga8.js";import{M as o}from"./Modal-p6Evd_XR.js";import{B as a}from"./Button-C5l-MScQ.js";import{F as g}from"./Field-q4DqLIqo.js";import{T as j}from"./Textarea-BZiGY5vV.js";import"./circle-alert-BMPEDkj1.js";import"./createLucideIcon-DprCCbyf.js";const v={title:"Components/Overlay/Modal",component:o,parameters:{layout:"fullscreen",docs:{story:{inline:!1,iframeHeight:500}}},decorators:[r=>e.jsx("div",{style:{padding:"var(--spacing-8)"},children:e.jsx(r,{})})],tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg","xl","full"],description:"Modal size"},closeOnBackdrop:{control:"boolean",description:"Close modal when clicking backdrop"},closeOnEscape:{control:"boolean",description:"Close modal when pressing Escape key"},showCloseButton:{control:"boolean",description:"Show close button in corner"}}},l=r=>{const[n,M]=x.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>M(!0),children:"Open Modal"}),e.jsx(o,{...r,open:n,onClose:()=>M(!1),children:r.children})]})},s={render:r=>e.jsx(l,{...r}),args:{open:!1,onClose:()=>{},children:e.jsxs(e.Fragment,{children:[e.jsx(o.Header,{children:"Modal Title"}),e.jsx(o.Body,{children:e.jsx("p",{children:"This is the modal content. You can put any content here."})}),e.jsxs(o.Footer,{children:[e.jsx(a,{variant:"secondary",children:"Cancel"}),e.jsx(a,{variant:"primary",children:"Confirm"})]})]})}},d={render:r=>e.jsx(l,{...r}),args:{open:!1,onClose:()=>{},size:"sm",children:e.jsxs(e.Fragment,{children:[e.jsx(o.Header,{children:"Small Modal"}),e.jsx(o.Body,{children:e.jsx("p",{children:"This is a small modal for quick confirmations."})})]})}},t={render:r=>e.jsx(l,{...r}),args:{open:!1,onClose:()=>{},size:"lg",children:e.jsxs(e.Fragment,{children:[e.jsx(o.Header,{children:"Large Modal"}),e.jsxs(o.Body,{children:[e.jsx("p",{children:"This is a large modal with more space for content."}),e.jsx("p",{children:"It can contain multiple paragraphs and complex layouts."})]}),e.jsx(o.Footer,{children:e.jsx(a,{children:"Action"})})]})}},i={render:r=>e.jsx(l,{...r}),args:{open:!1,onClose:()=>{},size:"full",children:e.jsxs(e.Fragment,{children:[e.jsx(o.Header,{children:"Full Screen Modal"}),e.jsxs(o.Body,{children:[e.jsx("p",{children:"This modal takes up the entire screen."}),e.jsx("p",{children:"Useful for complex forms or detailed content."})]}),e.jsx(o.Footer,{children:e.jsx(a,{children:"Save"})})]})}},c={render:r=>e.jsx(l,{...r}),args:{open:!1,onClose:()=>{},showCloseButton:!1,children:e.jsxs(e.Fragment,{children:[e.jsx(o.Header,{children:"No Close Button"}),e.jsxs(o.Body,{children:[e.jsx("p",{children:"This modal doesn't have a close button in the corner."}),e.jsx("p",{children:"You can only close it using the buttons below or pressing Escape."})]}),e.jsx(o.Footer,{children:e.jsx(a,{variant:"primary",children:"Close"})})]})}},p={render:r=>e.jsx(l,{...r}),args:{open:!1,onClose:()=>{},closeOnBackdrop:!1,children:e.jsxs(e.Fragment,{children:[e.jsx(o.Header,{children:"Persistent Modal"}),e.jsxs(o.Body,{children:[e.jsx("p",{children:"Clicking outside this modal won't close it."}),e.jsx("p",{children:"You must use the close button or press Escape."})]}),e.jsxs(o.Footer,{children:[e.jsx(a,{variant:"secondary",children:"Cancel"}),e.jsx(a,{variant:"primary",children:"Confirm"})]})]})}},m={render:r=>e.jsx(l,{...r}),args:{open:!1,onClose:()=>{},size:"sm",children:e.jsxs(e.Fragment,{children:[e.jsx(o.Header,{children:"Confirm Action"}),e.jsxs(o.Body,{children:[e.jsx("p",{children:"Are you sure you want to delete this item?"}),e.jsx("p",{children:"This action cannot be undone."})]}),e.jsxs(o.Footer,{children:[e.jsx(a,{variant:"secondary",children:"Cancel"}),e.jsx(a,{variant:"primary",children:"Delete"})]})]})}},u={render:r=>e.jsx(l,{...r}),args:{open:!1,onClose:()=>{},size:"md",children:e.jsxs(e.Fragment,{children:[e.jsx(o.Header,{children:"Create New Item"}),e.jsx(o.Body,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-4)"},children:[e.jsx(g,{label:"Name",type:"text",placeholder:"Enter name",fullWidth:!0}),e.jsx(j,{label:"Description",placeholder:"Enter description",rows:4})]})}),e.jsxs(o.Footer,{children:[e.jsx(a,{variant:"secondary",children:"Cancel"}),e.jsx(a,{variant:"primary",children:"Create"})]})]})}},h={args:{open:!1,onClose:()=>{}},render:()=>{const[r,n]=x.useState(null);return e.jsxs("div",{style:{display:"flex",gap:"var(--spacing-4)",flexWrap:"wrap"},children:[e.jsx(a,{onClick:()=>n("sm"),children:"Small"}),e.jsx(a,{onClick:()=>n("md"),children:"Medium"}),e.jsx(a,{onClick:()=>n("lg"),children:"Large"}),e.jsx(a,{onClick:()=>n("xl"),children:"Extra Large"}),e.jsx(a,{onClick:()=>n("full"),children:"Full Screen"}),e.jsxs(o,{open:r==="sm",onClose:()=>n(null),size:"sm",children:[e.jsx(o.Header,{children:"Small Modal"}),e.jsx(o.Body,{children:"Small size modal content"})]}),e.jsxs(o,{open:r==="md",onClose:()=>n(null),size:"md",children:[e.jsx(o.Header,{children:"Medium Modal"}),e.jsx(o.Body,{children:"Medium size modal content"})]}),e.jsxs(o,{open:r==="lg",onClose:()=>n(null),size:"lg",children:[e.jsx(o.Header,{children:"Large Modal"}),e.jsx(o.Body,{children:"Large size modal content"})]}),e.jsxs(o,{open:r==="xl",onClose:()=>n(null),size:"xl",children:[e.jsx(o.Header,{children:"Extra Large Modal"}),e.jsx(o.Body,{children:"Extra large size modal content"})]}),e.jsxs(o,{open:r==="full",onClose:()=>n(null),size:"full",children:[e.jsx(o.Header,{children:"Full Screen Modal"}),e.jsx(o.Body,{children:"Full screen modal content"})]})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <ModalWrapper {...args} />,
  args: {
    open: false,
    onClose: () => {},
    children: <>
        <Modal.Header>Modal Title</Modal.Header>
        <Modal.Body>
          <p>This is the modal content. You can put any content here.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Cancel</Button>
          <Button variant="primary">Confirm</Button>
        </Modal.Footer>
      </>
  }
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <ModalWrapper {...args} />,
  args: {
    open: false,
    onClose: () => {},
    size: 'sm',
    children: <>
        <Modal.Header>Small Modal</Modal.Header>
        <Modal.Body>
          <p>This is a small modal for quick confirmations.</p>
        </Modal.Body>
      </>
  }
}`,...d.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <ModalWrapper {...args} />,
  args: {
    open: false,
    onClose: () => {},
    size: 'lg',
    children: <>
        <Modal.Header>Large Modal</Modal.Header>
        <Modal.Body>
          <p>This is a large modal with more space for content.</p>
          <p>It can contain multiple paragraphs and complex layouts.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button>Action</Button>
        </Modal.Footer>
      </>
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <ModalWrapper {...args} />,
  args: {
    open: false,
    onClose: () => {},
    size: 'full',
    children: <>
        <Modal.Header>Full Screen Modal</Modal.Header>
        <Modal.Body>
          <p>This modal takes up the entire screen.</p>
          <p>Useful for complex forms or detailed content.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button>Save</Button>
        </Modal.Footer>
      </>
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <ModalWrapper {...args} />,
  args: {
    open: false,
    onClose: () => {},
    showCloseButton: false,
    children: <>
        <Modal.Header>No Close Button</Modal.Header>
        <Modal.Body>
          <p>This modal doesn't have a close button in the corner.</p>
          <p>You can only close it using the buttons below or pressing Escape.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">Close</Button>
        </Modal.Footer>
      </>
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <ModalWrapper {...args} />,
  args: {
    open: false,
    onClose: () => {},
    closeOnBackdrop: false,
    children: <>
        <Modal.Header>Persistent Modal</Modal.Header>
        <Modal.Body>
          <p>Clicking outside this modal won't close it.</p>
          <p>You must use the close button or press Escape.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Cancel</Button>
          <Button variant="primary">Confirm</Button>
        </Modal.Footer>
      </>
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <ModalWrapper {...args} />,
  args: {
    open: false,
    onClose: () => {},
    size: 'sm',
    children: <>
        <Modal.Header>Confirm Action</Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete this item?</p>
          <p>This action cannot be undone.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Cancel</Button>
          <Button variant="primary">Delete</Button>
        </Modal.Footer>
      </>
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <ModalWrapper {...args} />,
  args: {
    open: false,
    onClose: () => {},
    size: 'md',
    children: <>
        <Modal.Header>Create New Item</Modal.Header>
        <Modal.Body>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-4)'
        }}>
            <Field label="Name" type="text" placeholder="Enter name" fullWidth />
            <Textarea label="Description" placeholder="Enter description" rows={4} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Cancel</Button>
          <Button variant="primary">Create</Button>
        </Modal.Footer>
      </>
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    onClose: () => {}
  },
  render: () => {
    const [openModal, setOpenModal] = useState<string | null>(null);
    return <div style={{
      display: 'flex',
      gap: 'var(--spacing-4)',
      flexWrap: 'wrap'
    }}>
        <Button onClick={() => setOpenModal('sm')}>Small</Button>
        <Button onClick={() => setOpenModal('md')}>Medium</Button>
        <Button onClick={() => setOpenModal('lg')}>Large</Button>
        <Button onClick={() => setOpenModal('xl')}>Extra Large</Button>
        <Button onClick={() => setOpenModal('full')}>Full Screen</Button>

        <Modal open={openModal === 'sm'} onClose={() => setOpenModal(null)} size="sm">
          <Modal.Header>Small Modal</Modal.Header>
          <Modal.Body>Small size modal content</Modal.Body>
        </Modal>

        <Modal open={openModal === 'md'} onClose={() => setOpenModal(null)} size="md">
          <Modal.Header>Medium Modal</Modal.Header>
          <Modal.Body>Medium size modal content</Modal.Body>
        </Modal>

        <Modal open={openModal === 'lg'} onClose={() => setOpenModal(null)} size="lg">
          <Modal.Header>Large Modal</Modal.Header>
          <Modal.Body>Large size modal content</Modal.Body>
        </Modal>

        <Modal open={openModal === 'xl'} onClose={() => setOpenModal(null)} size="xl">
          <Modal.Header>Extra Large Modal</Modal.Header>
          <Modal.Body>Extra large size modal content</Modal.Body>
        </Modal>

        <Modal open={openModal === 'full'} onClose={() => setOpenModal(null)} size="full">
          <Modal.Header>Full Screen Modal</Modal.Header>
          <Modal.Body>Full screen modal content</Modal.Body>
        </Modal>
      </div>;
  }
}`,...h.parameters?.docs?.source}}};const k=["Default","SmallSize","LargeSize","FullScreen","WithoutCloseButton","NoBackdropClose","ConfirmationDialog","FormModal","AllSizes"];export{h as AllSizes,m as ConfirmationDialog,s as Default,u as FormModal,i as FullScreen,t as LargeSize,p as NoBackdropClose,d as SmallSize,c as WithoutCloseButton,k as __namedExportsOrder,v as default};
