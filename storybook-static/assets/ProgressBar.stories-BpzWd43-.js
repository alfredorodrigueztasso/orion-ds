import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as P}from"./index-Bi6L2ga8.js";import{P as a}from"./ProgressBar-DKfZiO47.js";import{C as s}from"./Card-BimbyH8z.js";const R={title:"Components/Feedback/ProgressBar",component:a,parameters:{layout:"centered"},tags:["autodocs"],decorators:[r=>e.jsx("div",{style:{width:"400px"},children:e.jsx(r,{})})],argTypes:{value:{control:{type:"range",min:0,max:100,step:1},description:"Current progress value"},max:{control:"number",description:"Maximum value (defaults to 100)"},size:{control:"select",options:["sm","md","lg"],description:"Progress bar size"},variant:{control:"select",options:["primary","success","warning","error","info"],description:"Progress bar color variant"},showLabel:{control:"boolean",description:"Show percentage label"},label:{control:"text",description:"Custom label text"},indeterminate:{control:"boolean",description:"Show indeterminate loading state"}}},t={args:{value:50}},i={args:{value:65,showLabel:!0}},o={args:{value:75,label:"Uploading files...",showLabel:!0}},n={args:{value:60,variant:"primary",showLabel:!0}},l={args:{value:100,variant:"success",showLabel:!0,label:"Upload complete"}},d={args:{value:45,variant:"warning",showLabel:!0,label:"Limited storage"}},c={args:{value:20,variant:"error",showLabel:!0,label:"Upload failed"}},p={args:{value:80,variant:"info",showLabel:!0,label:"Processing..."}},v={args:{value:70,size:"sm",showLabel:!0}},m={args:{value:70,size:"md",showLabel:!0}},u={args:{value:70,size:"lg",showLabel:!0}},g={args:{indeterminate:!0,label:"Loading..."}},f={args:{value:25,max:50,showLabel:!0,label:"Step 25 of 50"}},h={args:{value:0,showLabel:!0,label:"Starting..."}},x={args:{value:100,variant:"success",showLabel:!0,label:"Complete!"}},b={render:()=>e.jsxs("div",{style:{width:"400px",display:"flex",flexDirection:"column",gap:"var(--spacing-8)"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"var(--spacing-2)",fontSize:"var(--font-size-14)",fontWeight:"var(--font-weight-medium)"},children:"Small"}),e.jsx(a,{value:70,size:"sm",showLabel:!0})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"var(--spacing-2)",fontSize:"var(--font-size-14)",fontWeight:"var(--font-weight-medium)"},children:"Medium (Default)"}),e.jsx(a,{value:70,size:"md",showLabel:!0})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"var(--spacing-2)",fontSize:"var(--font-size-14)",fontWeight:"var(--font-weight-medium)"},children:"Large"}),e.jsx(a,{value:70,size:"lg",showLabel:!0})]})]})},y={render:()=>{const[r,C]=P.useState(0),[W,D]=P.useState(!1);return P.useEffect(()=>{if(r<100){const M=setTimeout(()=>{C(I=>Math.min(I+10,100))},500);return()=>clearTimeout(M)}else D(!0)},[r]),e.jsxs("div",{style:{width:"400px"},children:[e.jsx("h3",{style:{marginBottom:"var(--spacing-4)",fontSize:"var(--font-size-16)",fontWeight:"var(--font-weight-medium)"},children:"File Upload"}),e.jsx(a,{value:r,variant:W?"success":"primary",showLabel:!0,label:W?"Upload complete!":"Uploading file...",size:"lg"}),e.jsx("button",{onClick:()=>{C(0),D(!1)},style:{marginTop:"var(--spacing-4)",padding:"var(--spacing-2) var(--spacing-4)",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-subtle)",background:"var(--surface-base)",cursor:"pointer",fontSize:"var(--font-size-14)"},children:"Reset"})]})}},w={render:()=>e.jsxs("div",{style:{width:"400px",display:"flex",flexDirection:"column",gap:"var(--spacing-6)"},children:[e.jsx("div",{children:e.jsx(a,{value:100,variant:"success",showLabel:!0,label:"Step 1: Data validation"})}),e.jsx("div",{children:e.jsx(a,{value:100,variant:"success",showLabel:!0,label:"Step 2: Processing files"})}),e.jsx("div",{children:e.jsx(a,{value:65,variant:"primary",showLabel:!0,label:"Step 3: Uploading assets"})}),e.jsx("div",{children:e.jsx(a,{value:0,showLabel:!0,label:"Step 4: Final review"})})]})},z={render:()=>e.jsxs("div",{style:{width:"400px",display:"flex",flexDirection:"column",gap:"var(--spacing-8)"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"var(--spacing-4)",fontSize:"var(--font-size-14)",color:"var(--text-secondary)"},children:"Determinate Loading"}),e.jsx(a,{value:73,variant:"info",showLabel:!0,label:"Loading data..."})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"var(--spacing-4)",fontSize:"var(--font-size-14)",color:"var(--text-secondary)"},children:"Indeterminate Loading"}),e.jsx(a,{indeterminate:!0,variant:"info",label:"Please wait..."})]})]})},S={render:()=>e.jsx(s,{style:{width:"400px"},children:e.jsxs(s.Body,{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-4)",marginBottom:"var(--spacing-4)"},children:[e.jsx("div",{style:{width:"48px",height:"48px",borderRadius:"var(--radius-sm)",background:"linear-gradient(135deg, var(--color-brand-400) 0%, var(--color-brand-600) 100%)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"var(--font-size-20)"}}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h4",{style:{margin:0,fontSize:"var(--font-size-16)",fontWeight:"var(--font-weight-medium)"},children:"document.pdf"}),e.jsx("p",{style:{margin:"var(--spacing-1) 0 0 0",fontSize:"var(--font-size-14)",color:"var(--text-secondary)"},children:"2.5 MB"})]})]}),e.jsx(a,{value:68,variant:"primary",showLabel:!0,label:"Uploading...",size:"lg"})]})})},j={render:()=>e.jsxs(s,{style:{width:"450px"},children:[e.jsx(s.Header,{children:"Download Queue"}),e.jsx(s.Body,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-6)"},children:[e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"var(--spacing-2)"},children:[e.jsx("span",{style:{fontSize:"var(--font-size-14)",fontWeight:"var(--font-weight-medium)"},children:"image-001.jpg"}),e.jsx("span",{style:{fontSize:"var(--font-size-14)",color:"var(--text-secondary)"},children:"1.2 MB"})]}),e.jsx(a,{value:100,variant:"success",showLabel:!0,size:"sm"})]}),e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"var(--spacing-2)"},children:[e.jsx("span",{style:{fontSize:"var(--font-size-14)",fontWeight:"var(--font-weight-medium)"},children:"video-demo.mp4"}),e.jsx("span",{style:{fontSize:"var(--font-size-14)",color:"var(--text-secondary)"},children:"45.8 MB"})]}),e.jsx(a,{value:42,variant:"primary",showLabel:!0,size:"sm"})]}),e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"var(--spacing-2)"},children:[e.jsx("span",{style:{fontSize:"var(--font-size-14)",fontWeight:"var(--font-weight-medium)"},children:"presentation.pptx"}),e.jsx("span",{style:{fontSize:"var(--font-size-14)",color:"var(--text-secondary)"},children:"8.5 MB"})]}),e.jsx(a,{value:0,showLabel:!0,size:"sm"})]})]})})]})},L={args:{value:75,variant:"success",showLabel:!0,label:"Custom styled progress",className:"custom-progress",style:{width:"400px"}}},B={render:()=>e.jsxs("div",{style:{width:"400px",display:"flex",flexDirection:"column",gap:"var(--spacing-6)"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"var(--spacing-2)",fontSize:"var(--font-size-14)",fontWeight:"var(--font-weight-medium)"},children:"Primary"}),e.jsx(a,{value:60,variant:"primary",showLabel:!0})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"var(--spacing-2)",fontSize:"var(--font-size-14)",fontWeight:"var(--font-weight-medium)"},children:"Success"}),e.jsx(a,{value:100,variant:"success",showLabel:!0})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"var(--spacing-2)",fontSize:"var(--font-size-14)",fontWeight:"var(--font-weight-medium)"},children:"Warning"}),e.jsx(a,{value:45,variant:"warning",showLabel:!0})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"var(--spacing-2)",fontSize:"var(--font-size-14)",fontWeight:"var(--font-weight-medium)"},children:"Error"}),e.jsx(a,{value:20,variant:"error",showLabel:!0})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"var(--spacing-2)",fontSize:"var(--font-size-14)",fontWeight:"var(--font-weight-medium)"},children:"Info"}),e.jsx(a,{value:80,variant:"info",showLabel:!0})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    value: 50
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    value: 65,
    showLabel: true
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    value: 75,
    label: 'Uploading files...',
    showLabel: true
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    value: 60,
    variant: 'primary',
    showLabel: true
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    value: 100,
    variant: 'success',
    showLabel: true,
    label: 'Upload complete'
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    value: 45,
    variant: 'warning',
    showLabel: true,
    label: 'Limited storage'
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    value: 20,
    variant: 'error',
    showLabel: true,
    label: 'Upload failed'
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    value: 80,
    variant: 'info',
    showLabel: true,
    label: 'Processing...'
  }
}`,...p.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    value: 70,
    size: 'sm',
    showLabel: true
  }
}`,...v.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    value: 70,
    size: 'md',
    showLabel: true
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    value: 70,
    size: 'lg',
    showLabel: true
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    indeterminate: true,
    label: 'Loading...'
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    value: 25,
    max: 50,
    showLabel: true,
    label: 'Step 25 of 50'
  }
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    value: 0,
    showLabel: true,
    label: 'Starting...'
  }
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    value: 100,
    variant: 'success',
    showLabel: true,
    label: 'Complete!'
  }
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '400px',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-8)'
  }}>
      <div>
        <p style={{
        marginBottom: 'var(--spacing-2)',
        fontSize: 'var(--font-size-14)',
        fontWeight: 'var(--font-weight-medium)'
      }}>Small</p>
        <ProgressBar value={70} size="sm" showLabel />
      </div>
      <div>
        <p style={{
        marginBottom: 'var(--spacing-2)',
        fontSize: 'var(--font-size-14)',
        fontWeight: 'var(--font-weight-medium)'
      }}>
          Medium (Default)
        </p>
        <ProgressBar value={70} size="md" showLabel />
      </div>
      <div>
        <p style={{
        marginBottom: 'var(--spacing-2)',
        fontSize: 'var(--font-size-14)',
        fontWeight: 'var(--font-weight-medium)'
      }}>Large</p>
        <ProgressBar value={70} size="lg" showLabel />
      </div>
    </div>
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [progress, setProgress] = useState(0);
    const [isComplete, setIsComplete] = useState(false);
    useEffect(() => {
      if (progress < 100) {
        const timer = setTimeout(() => {
          setProgress(prev => Math.min(prev + 10, 100));
        }, 500);
        return () => clearTimeout(timer);
      } else {
        setIsComplete(true);
      }
    }, [progress]);
    return <div style={{
      width: '400px'
    }}>
        <h3 style={{
        marginBottom: 'var(--spacing-4)',
        fontSize: 'var(--font-size-16)',
        fontWeight: 'var(--font-weight-medium)'
      }}>
          File Upload
        </h3>
        <ProgressBar value={progress} variant={isComplete ? 'success' : 'primary'} showLabel label={isComplete ? 'Upload complete!' : 'Uploading file...'} size="lg" />
        <button onClick={() => {
        setProgress(0);
        setIsComplete(false);
      }} style={{
        marginTop: 'var(--spacing-4)',
        padding: 'var(--spacing-2) var(--spacing-4)',
        borderRadius: 'var(--radius-sm)',
        border: '1px solid var(--border-subtle)',
        background: 'var(--surface-base)',
        cursor: 'pointer',
        fontSize: 'var(--font-size-14)'
      }}>
          Reset
        </button>
      </div>;
  }
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '400px',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-6)'
  }}>
      <div>
        <ProgressBar value={100} variant="success" showLabel label="Step 1: Data validation" />
      </div>
      <div>
        <ProgressBar value={100} variant="success" showLabel label="Step 2: Processing files" />
      </div>
      <div>
        <ProgressBar value={65} variant="primary" showLabel label="Step 3: Uploading assets" />
      </div>
      <div>
        <ProgressBar value={0} showLabel label="Step 4: Final review" />
      </div>
    </div>
}`,...w.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '400px',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-8)'
  }}>
      <div>
        <p style={{
        marginBottom: 'var(--spacing-4)',
        fontSize: 'var(--font-size-14)',
        color: 'var(--text-secondary)'
      }}>
          Determinate Loading
        </p>
        <ProgressBar value={73} variant="info" showLabel label="Loading data..." />
      </div>
      <div>
        <p style={{
        marginBottom: 'var(--spacing-4)',
        fontSize: 'var(--font-size-14)',
        color: 'var(--text-secondary)'
      }}>
          Indeterminate Loading
        </p>
        <ProgressBar indeterminate variant="info" label="Please wait..." />
      </div>
    </div>
}`,...z.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Card style={{
    width: '400px'
  }}>
      <Card.Body>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--spacing-4)',
        marginBottom: 'var(--spacing-4)'
      }}>
          <div style={{
          width: '48px',
          height: '48px',
          borderRadius: 'var(--radius-sm)',
          background: 'linear-gradient(135deg, var(--color-brand-400) 0%, var(--color-brand-600) 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: 'var(--font-size-20)'
        }} />
          <div style={{
          flex: 1
        }}>
            <h4 style={{
            margin: 0,
            fontSize: 'var(--font-size-16)',
            fontWeight: 'var(--font-weight-medium)'
          }}>document.pdf</h4>
            <p style={{
            margin: 'var(--spacing-1) 0 0 0',
            fontSize: 'var(--font-size-14)',
            color: 'var(--text-secondary)'
          }}>2.5 MB</p>
          </div>
        </div>
        <ProgressBar value={68} variant="primary" showLabel label="Uploading..." size="lg" />
      </Card.Body>
    </Card>
}`,...S.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <Card style={{
    width: '450px'
  }}>
      <Card.Header>Download Queue</Card.Header>
      <Card.Body>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-6)'
      }}>
          <div>
            <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: 'var(--spacing-2)'
          }}>
              <span style={{
              fontSize: 'var(--font-size-14)',
              fontWeight: 'var(--font-weight-medium)'
            }}>image-001.jpg</span>
              <span style={{
              fontSize: 'var(--font-size-14)',
              color: 'var(--text-secondary)'
            }}>1.2 MB</span>
            </div>
            <ProgressBar value={100} variant="success" showLabel size="sm" />
          </div>
          <div>
            <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: 'var(--spacing-2)'
          }}>
              <span style={{
              fontSize: 'var(--font-size-14)',
              fontWeight: 'var(--font-weight-medium)'
            }}>video-demo.mp4</span>
              <span style={{
              fontSize: 'var(--font-size-14)',
              color: 'var(--text-secondary)'
            }}>45.8 MB</span>
            </div>
            <ProgressBar value={42} variant="primary" showLabel size="sm" />
          </div>
          <div>
            <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: 'var(--spacing-2)'
          }}>
              <span style={{
              fontSize: 'var(--font-size-14)',
              fontWeight: 'var(--font-weight-medium)'
            }}>presentation.pptx</span>
              <span style={{
              fontSize: 'var(--font-size-14)',
              color: 'var(--text-secondary)'
            }}>8.5 MB</span>
            </div>
            <ProgressBar value={0} showLabel size="sm" />
          </div>
        </div>
      </Card.Body>
    </Card>
}`,...j.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    value: 75,
    variant: 'success',
    showLabel: true,
    label: 'Custom styled progress',
    className: 'custom-progress',
    style: {
      width: '400px'
    }
  }
}`,...L.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '400px',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-6)'
  }}>
      <div>
        <p style={{
        marginBottom: 'var(--spacing-2)',
        fontSize: 'var(--font-size-14)',
        fontWeight: 'var(--font-weight-medium)'
      }}>Primary</p>
        <ProgressBar value={60} variant="primary" showLabel />
      </div>
      <div>
        <p style={{
        marginBottom: 'var(--spacing-2)',
        fontSize: 'var(--font-size-14)',
        fontWeight: 'var(--font-weight-medium)'
      }}>Success</p>
        <ProgressBar value={100} variant="success" showLabel />
      </div>
      <div>
        <p style={{
        marginBottom: 'var(--spacing-2)',
        fontSize: 'var(--font-size-14)',
        fontWeight: 'var(--font-weight-medium)'
      }}>Warning</p>
        <ProgressBar value={45} variant="warning" showLabel />
      </div>
      <div>
        <p style={{
        marginBottom: 'var(--spacing-2)',
        fontSize: 'var(--font-size-14)',
        fontWeight: 'var(--font-weight-medium)'
      }}>Error</p>
        <ProgressBar value={20} variant="error" showLabel />
      </div>
      <div>
        <p style={{
        marginBottom: 'var(--spacing-2)',
        fontSize: 'var(--font-size-14)',
        fontWeight: 'var(--font-weight-medium)'
      }}>Info</p>
        <ProgressBar value={80} variant="info" showLabel />
      </div>
    </div>
}`,...B.parameters?.docs?.source}}};const T=["Default","WithLabel","CustomLabel","PrimaryVariant","SuccessVariant","WarningVariant","ErrorVariant","InfoVariant","SmallSize","MediumSize","LargeSize","Indeterminate","CustomMaxValue","ZeroPercent","HundredPercent","AllSizes","UploadProgress","MultipleProgress","LoadingStates","InCard","DownloadQueue","WithCustomStyling","AllVariants"];export{b as AllSizes,B as AllVariants,o as CustomLabel,f as CustomMaxValue,t as Default,j as DownloadQueue,c as ErrorVariant,x as HundredPercent,S as InCard,g as Indeterminate,p as InfoVariant,u as LargeSize,z as LoadingStates,m as MediumSize,w as MultipleProgress,n as PrimaryVariant,v as SmallSize,l as SuccessVariant,y as UploadProgress,d as WarningVariant,L as WithCustomStyling,i as WithLabel,h as ZeroPercent,T as __namedExportsOrder,R as default};
