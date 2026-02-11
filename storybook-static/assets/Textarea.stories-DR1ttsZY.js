import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as i}from"./index-Bi6L2ga8.js";import{T as a}from"./Textarea-BZiGY5vV.js";import"./circle-alert-BMPEDkj1.js";import"./createLucideIcon-DprCCbyf.js";const H={title:"Components/Forms/Textarea",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Textarea size"},resize:{control:"select",options:["none","vertical","horizontal","both"],description:"Resize behavior"},label:{control:"text",description:"Textarea label"},helperText:{control:"text",description:"Helper text below textarea"},error:{control:"text",description:"Error message"},showCounter:{control:"boolean",description:"Show character counter"},maxLength:{control:"number",description:"Maximum character length"},rows:{control:"number",description:"Number of visible text lines"},disabled:{control:"boolean",description:"Disable textarea"}}},l={args:{label:"Description",placeholder:"Enter your description..."}},d={args:{label:"Comments",placeholder:"Add your comments...",helperText:"Please provide detailed feedback"}},c={args:{label:"Required Field",placeholder:"Enter text...",error:"This field is required"}},u={args:{label:"Bio",placeholder:"Tell us about yourself...",maxLength:500,showCounter:!0,helperText:"Maximum 500 characters"}},m={args:{label:"Small Textarea",placeholder:"Enter text...",size:"sm"}},p={args:{label:"Large Textarea",placeholder:"Enter text...",size:"lg"}},h={args:{label:"No Resize",placeholder:"This textarea cannot be resized",resize:"none"}},g={args:{label:"Horizontal Resize",placeholder:"Drag the corner to resize horizontally",resize:"horizontal"}},v={args:{label:"Resize Both",placeholder:"Drag the corner to resize in any direction",resize:"both"}},b={args:{label:"Disabled",placeholder:"Cannot edit this",disabled:!0,value:"This textarea is disabled"}},x={args:{label:"Message",defaultValue:"This is the initial content"}},f={args:{label:"Tall Textarea",placeholder:"Lots of space to write...",rows:10}},z={render:()=>{const[r,t]=i.useState("");return e.jsxs("div",{style:{width:"500px"},children:[e.jsx(a,{label:"Your Message",placeholder:"Type your message...",value:r,onChange:s=>t(s.target.value),maxLength:200,showCounter:!0,helperText:"Maximum 200 characters"}),e.jsxs("div",{style:{marginTop:"var(--spacing-4)",fontSize:"var(--font-size-14)",color:"var(--text-secondary)"},children:[e.jsx("strong",{children:"Preview:"}),e.jsx("div",{style:{marginTop:"var(--spacing-2)",padding:"var(--spacing-4)",borderRadius:"var(--radius-sm)",background:"var(--surface-subtle)",minHeight:"60px"},children:r||e.jsx("em",{children:"Your message will appear here..."})})]})]})}},y={render:()=>{const[r,t]=i.useState(""),[s,o]=i.useState(!1),n=()=>{r.trim()&&(o(!0),setTimeout(()=>{t(""),o(!1)},2e3))};return e.jsxs("div",{style:{width:"600px",padding:"var(--spacing-8)",borderRadius:"var(--radius-control)",border:"1px solid var(--border-subtle)",background:"var(--surface-base)"},children:[e.jsx("h3",{style:{marginBottom:"var(--spacing-6)",fontSize:"var(--font-size-18)",fontWeight:"var(--font-weight-medium)"},children:"Leave a Comment"}),e.jsx(a,{label:"Your Comment",placeholder:"Share your thoughts...",value:r,onChange:W=>t(W.target.value),maxLength:1e3,showCounter:!0,rows:6}),e.jsxs("div",{style:{marginTop:"var(--spacing-4)",display:"flex",gap:"var(--spacing-3)"},children:[e.jsx("button",{onClick:n,disabled:!r.trim(),style:{padding:"var(--spacing-3) var(--spacing-6)",borderRadius:"var(--radius-sm)",border:"none",background:r.trim()?"var(--interactive-primary)":"var(--border-subtle)",color:r.trim()?"var(--interactive-primary-text)":"var(--text-tertiary)",fontSize:"var(--font-size-14)",fontWeight:"var(--font-weight-medium)",cursor:r.trim()?"pointer":"not-allowed"},children:"Submit"}),e.jsx("button",{onClick:()=>t(""),style:{padding:"var(--spacing-3) var(--spacing-6)",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-subtle)",background:"var(--surface-base)",color:"var(--text-primary)",fontSize:"var(--font-size-14)",fontWeight:"var(--font-weight-medium)",cursor:"pointer"},children:"Clear"})]}),s&&e.jsx("div",{style:{marginTop:"var(--spacing-4)",padding:"var(--spacing-4)",borderRadius:"var(--radius-sm)",background:"var(--soft-success)",color:"var(--status-success)",fontSize:"var(--font-size-14)"},children:"✓ Comment submitted successfully!"})]})}},S={render:()=>{const[r,t]=i.useState(""),[s,o]=i.useState(""),n=()=>{r.trim()?r.length<10?o("Feedback must be at least 10 characters"):(o(""),alert("Feedback submitted!")):o("Please provide your feedback")};return e.jsxs("div",{style:{width:"500px",padding:"var(--spacing-8)",borderRadius:"var(--radius-control)",border:"1px solid var(--border-subtle)"},children:[e.jsx("h3",{style:{marginBottom:"var(--spacing-4)",fontSize:"var(--font-size-18)",fontWeight:"var(--font-weight-medium)"},children:"Product Feedback"}),e.jsx("p",{style:{marginBottom:"var(--spacing-8)",fontSize:"var(--font-size-14)",color:"var(--text-secondary)"},children:"Help us improve by sharing your thoughts"}),e.jsx(a,{label:"Your Feedback",placeholder:"Tell us what you think...",value:r,onChange:W=>{t(W.target.value),o("")},error:s,maxLength:500,showCounter:!0,rows:6}),e.jsx("button",{onClick:n,style:{marginTop:"var(--spacing-4)",padding:"var(--spacing-3) var(--spacing-6)",borderRadius:"var(--radius-sm)",border:"none",background:"var(--interactive-primary)",color:"var(--interactive-primary-text)",fontSize:"var(--font-size-14)",fontWeight:"var(--font-weight-medium)",cursor:"pointer"},children:"Submit Feedback"})]})}},T={render:()=>e.jsxs("div",{style:{width:"500px",display:"flex",flexDirection:"column",gap:"var(--spacing-8)"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"var(--spacing-2)",fontSize:"var(--font-size-14)",fontWeight:"var(--font-weight-medium)"},children:"Small"}),e.jsx(a,{label:"Small Textarea",size:"sm",placeholder:"Small size..."})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"var(--spacing-2)",fontSize:"var(--font-size-14)",fontWeight:"var(--font-weight-medium)"},children:"Medium (Default)"}),e.jsx(a,{label:"Medium Textarea",size:"md",placeholder:"Medium size..."})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"var(--spacing-2)",fontSize:"var(--font-size-14)",fontWeight:"var(--font-weight-medium)"},children:"Large"}),e.jsx(a,{label:"Large Textarea",size:"lg",placeholder:"Large size..."})]})]})},w={render:()=>e.jsxs("div",{style:{width:"500px",display:"flex",flexDirection:"column",gap:"var(--spacing-8)"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"var(--spacing-2)",fontSize:"var(--font-size-14)",fontWeight:"var(--font-weight-medium)"},children:"None"}),e.jsx(a,{label:"No Resize",resize:"none",placeholder:"Cannot be resized"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"var(--spacing-2)",fontSize:"var(--font-size-14)",fontWeight:"var(--font-weight-medium)"},children:"Vertical (Default)"}),e.jsx(a,{label:"Vertical Resize",resize:"vertical",placeholder:"Resize vertically"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"var(--spacing-2)",fontSize:"var(--font-size-14)",fontWeight:"var(--font-weight-medium)"},children:"Horizontal"}),e.jsx(a,{label:"Horizontal Resize",resize:"horizontal",placeholder:"Resize horizontally"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"var(--spacing-2)",fontSize:"var(--font-size-14)",fontWeight:"var(--font-weight-medium)"},children:"Both"}),e.jsx(a,{label:"Both Resize",resize:"both",placeholder:"Resize in any direction"})]})]})},C={render:()=>e.jsxs("div",{style:{width:"500px",display:"flex",flexDirection:"column",gap:"var(--spacing-6)"},children:[e.jsx(a,{label:"Default",placeholder:"Enter text..."}),e.jsx(a,{label:"With value",value:"This textarea has initial content",onChange:()=>{}}),e.jsx(a,{label:"With helper text",helperText:"Additional information"}),e.jsx(a,{label:"With error",error:"This field is required"}),e.jsx(a,{label:"Disabled",disabled:!0,value:"Cannot be edited"}),e.jsx(a,{label:"With counter",maxLength:100,showCounter:!0,placeholder:"Type here..."})]})},j={render:()=>{const[r,t]=i.useState("");return e.jsxs("div",{style:{width:"500px"},children:[e.jsx(a,{label:"Tweet",placeholder:"What's happening?",value:r,onChange:s=>t(s.target.value),maxLength:280,showCounter:!0,helperText:"Share your thoughts in 280 characters or less",rows:4}),e.jsxs("div",{style:{marginTop:"var(--spacing-4)",fontSize:"var(--font-size-12)",color:"var(--text-secondary)"},children:[r.length>=252&&r.length<280&&e.jsx("div",{style:{color:"var(--status-warning)"},children:"⚠ Warning: Approaching character limit"}),r.length===280&&e.jsx("div",{style:{color:"var(--status-error)"},children:"❌ Character limit reached"})]})]})}},k={render:()=>{const[r,t]=i.useState(""),[s,o]=i.useState("medium");return e.jsxs("div",{style:{width:"600px",padding:"var(--spacing-8)",borderRadius:"var(--radius-control)",border:"1px solid var(--border-subtle)"},children:[e.jsx("h3",{style:{marginBottom:"var(--spacing-6)",fontSize:"var(--font-size-18)",fontWeight:"var(--font-weight-medium)"},children:"Submit Support Ticket"}),e.jsxs("div",{style:{marginBottom:"var(--spacing-6)"},children:[e.jsx("label",{style:{display:"block",marginBottom:"var(--spacing-2)",fontSize:"var(--font-size-14)",fontWeight:"var(--font-weight-medium)"},children:"Priority"}),e.jsxs("select",{value:s,onChange:n=>o(n.target.value),style:{width:"100%",padding:"var(--spacing-3)",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-subtle)",fontSize:"var(--font-size-14)"},children:[e.jsx("option",{value:"low",children:"Low"}),e.jsx("option",{value:"medium",children:"Medium"}),e.jsx("option",{value:"high",children:"High"}),e.jsx("option",{value:"urgent",children:"Urgent"})]})]}),e.jsx(a,{label:"Describe your issue",placeholder:"Please provide as much detail as possible...",value:r,onChange:n=>t(n.target.value),maxLength:2e3,showCounter:!0,rows:8,helperText:"Include steps to reproduce, error messages, or screenshots"}),e.jsx("button",{style:{marginTop:"var(--spacing-4)",padding:"var(--spacing-3) var(--spacing-6)",borderRadius:"var(--radius-sm)",border:"none",background:"var(--interactive-primary)",color:"var(--interactive-primary-text)",fontSize:"var(--font-size-14)",fontWeight:"var(--font-weight-medium)",cursor:"pointer"},children:"Submit Ticket"})]})}},R={args:{label:"Custom styled textarea",helperText:"This textarea has custom styling",className:"custom-textarea",placeholder:"Enter text..."}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    placeholder: 'Enter your description...'
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Comments',
    placeholder: 'Add your comments...',
    helperText: 'Please provide detailed feedback'
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Required Field',
    placeholder: 'Enter text...',
    error: 'This field is required'
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Bio',
    placeholder: 'Tell us about yourself...',
    maxLength: 500,
    showCounter: true,
    helperText: 'Maximum 500 characters'
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Small Textarea',
    placeholder: 'Enter text...',
    size: 'sm'
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Large Textarea',
    placeholder: 'Enter text...',
    size: 'lg'
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'No Resize',
    placeholder: 'This textarea cannot be resized',
    resize: 'none'
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Horizontal Resize',
    placeholder: 'Drag the corner to resize horizontally',
    resize: 'horizontal'
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Resize Both',
    placeholder: 'Drag the corner to resize in any direction',
    resize: 'both'
  }
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled',
    placeholder: 'Cannot edit this',
    disabled: true,
    value: 'This textarea is disabled'
  }
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Message',
    defaultValue: 'This is the initial content'
  }
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Tall Textarea',
    placeholder: 'Lots of space to write...',
    rows: 10
  }
}`,...f.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <div style={{
      width: '500px'
    }}>
        <Textarea label="Your Message" placeholder="Type your message..." value={value} onChange={e => setValue(e.target.value)} maxLength={200} showCounter helperText="Maximum 200 characters" />
        <div style={{
        marginTop: 'var(--spacing-4)',
        fontSize: 'var(--font-size-14)',
        color: 'var(--text-secondary)'
      }}>
          <strong>Preview:</strong>
          <div style={{
          marginTop: 'var(--spacing-2)',
          padding: 'var(--spacing-4)',
          borderRadius: 'var(--radius-sm)',
          background: 'var(--surface-subtle)',
          minHeight: '60px'
        }}>
            {value || <em>Your message will appear here...</em>}
          </div>
        </div>
      </div>;
  }
}`,...z.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [comment, setComment] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
      if (comment.trim()) {
        setSubmitted(true);
        setTimeout(() => {
          setComment('');
          setSubmitted(false);
        }, 2000);
      }
    };
    return <div style={{
      width: '600px',
      padding: 'var(--spacing-8)',
      borderRadius: 'var(--radius-control)',
      border: '1px solid var(--border-subtle)',
      background: 'var(--surface-base)'
    }}>
        <h3 style={{
        marginBottom: 'var(--spacing-6)',
        fontSize: 'var(--font-size-18)',
        fontWeight: 'var(--font-weight-medium)'
      }}>
          Leave a Comment
        </h3>
        <Textarea label="Your Comment" placeholder="Share your thoughts..." value={comment} onChange={e => setComment(e.target.value)} maxLength={1000} showCounter rows={6} />
        <div style={{
        marginTop: 'var(--spacing-4)',
        display: 'flex',
        gap: 'var(--spacing-3)'
      }}>
          <button onClick={handleSubmit} disabled={!comment.trim()} style={{
          padding: 'var(--spacing-3) var(--spacing-6)',
          borderRadius: 'var(--radius-sm)',
          border: 'none',
          background: comment.trim() ? 'var(--interactive-primary)' : 'var(--border-subtle)',
          color: comment.trim() ? 'var(--interactive-primary-text)' : 'var(--text-tertiary)',
          fontSize: 'var(--font-size-14)',
          fontWeight: 'var(--font-weight-medium)',
          cursor: comment.trim() ? 'pointer' : 'not-allowed'
        }}>
            Submit
          </button>
          <button onClick={() => setComment('')} style={{
          padding: 'var(--spacing-3) var(--spacing-6)',
          borderRadius: 'var(--radius-sm)',
          border: '1px solid var(--border-subtle)',
          background: 'var(--surface-base)',
          color: 'var(--text-primary)',
          fontSize: 'var(--font-size-14)',
          fontWeight: 'var(--font-weight-medium)',
          cursor: 'pointer'
        }}>
            Clear
          </button>
        </div>
        {submitted && <div style={{
        marginTop: 'var(--spacing-4)',
        padding: 'var(--spacing-4)',
        borderRadius: 'var(--radius-sm)',
        background: 'var(--soft-success)',
        color: 'var(--status-success)',
        fontSize: 'var(--font-size-14)'
      }}>
            ✓ Comment submitted successfully!
          </div>}
      </div>;
  }
}`,...y.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [feedback, setFeedback] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = () => {
      if (!feedback.trim()) {
        setError('Please provide your feedback');
      } else if (feedback.length < 10) {
        setError('Feedback must be at least 10 characters');
      } else {
        setError('');
        alert('Feedback submitted!');
      }
    };
    return <div style={{
      width: '500px',
      padding: 'var(--spacing-8)',
      borderRadius: 'var(--radius-control)',
      border: '1px solid var(--border-subtle)'
    }}>
        <h3 style={{
        marginBottom: 'var(--spacing-4)',
        fontSize: 'var(--font-size-18)',
        fontWeight: 'var(--font-weight-medium)'
      }}>
          Product Feedback
        </h3>
        <p style={{
        marginBottom: 'var(--spacing-8)',
        fontSize: 'var(--font-size-14)',
        color: 'var(--text-secondary)'
      }}>
          Help us improve by sharing your thoughts
        </p>
        <Textarea label="Your Feedback" placeholder="Tell us what you think..." value={feedback} onChange={e => {
        setFeedback(e.target.value);
        setError('');
      }} error={error} maxLength={500} showCounter rows={6} />
        <button onClick={handleSubmit} style={{
        marginTop: 'var(--spacing-4)',
        padding: 'var(--spacing-3) var(--spacing-6)',
        borderRadius: 'var(--radius-sm)',
        border: 'none',
        background: 'var(--interactive-primary)',
        color: 'var(--interactive-primary-text)',
        fontSize: 'var(--font-size-14)',
        fontWeight: 'var(--font-weight-medium)',
        cursor: 'pointer'
      }}>
          Submit Feedback
        </button>
      </div>;
  }
}`,...S.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '500px',
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
        <Textarea label="Small Textarea" size="sm" placeholder="Small size..." />
      </div>
      <div>
        <p style={{
        marginBottom: 'var(--spacing-2)',
        fontSize: 'var(--font-size-14)',
        fontWeight: 'var(--font-weight-medium)'
      }}>
          Medium (Default)
        </p>
        <Textarea label="Medium Textarea" size="md" placeholder="Medium size..." />
      </div>
      <div>
        <p style={{
        marginBottom: 'var(--spacing-2)',
        fontSize: 'var(--font-size-14)',
        fontWeight: 'var(--font-weight-medium)'
      }}>Large</p>
        <Textarea label="Large Textarea" size="lg" placeholder="Large size..." />
      </div>
    </div>
}`,...T.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '500px',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-8)'
  }}>
      <div>
        <p style={{
        marginBottom: 'var(--spacing-2)',
        fontSize: 'var(--font-size-14)',
        fontWeight: 'var(--font-weight-medium)'
      }}>None</p>
        <Textarea label="No Resize" resize="none" placeholder="Cannot be resized" />
      </div>
      <div>
        <p style={{
        marginBottom: 'var(--spacing-2)',
        fontSize: 'var(--font-size-14)',
        fontWeight: 'var(--font-weight-medium)'
      }}>
          Vertical (Default)
        </p>
        <Textarea label="Vertical Resize" resize="vertical" placeholder="Resize vertically" />
      </div>
      <div>
        <p style={{
        marginBottom: 'var(--spacing-2)',
        fontSize: 'var(--font-size-14)',
        fontWeight: 'var(--font-weight-medium)'
      }}>Horizontal</p>
        <Textarea label="Horizontal Resize" resize="horizontal" placeholder="Resize horizontally" />
      </div>
      <div>
        <p style={{
        marginBottom: 'var(--spacing-2)',
        fontSize: 'var(--font-size-14)',
        fontWeight: 'var(--font-weight-medium)'
      }}>Both</p>
        <Textarea label="Both Resize" resize="both" placeholder="Resize in any direction" />
      </div>
    </div>
}`,...w.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '500px',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-6)'
  }}>
      <Textarea label="Default" placeholder="Enter text..." />
      <Textarea label="With value" value="This textarea has initial content" onChange={() => {}} />
      <Textarea label="With helper text" helperText="Additional information" />
      <Textarea label="With error" error="This field is required" />
      <Textarea label="Disabled" disabled value="Cannot be edited" />
      <Textarea label="With counter" maxLength={100} showCounter placeholder="Type here..." />
    </div>
}`,...C.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [text, setText] = useState('');
    return <div style={{
      width: '500px'
    }}>
        <Textarea label="Tweet" placeholder="What's happening?" value={text} onChange={e => setText(e.target.value)} maxLength={280} showCounter helperText="Share your thoughts in 280 characters or less" rows={4} />
        <div style={{
        marginTop: 'var(--spacing-4)',
        fontSize: 'var(--font-size-12)',
        color: 'var(--text-secondary)'
      }}>
          {text.length >= 252 && text.length < 280 && <div style={{
          color: 'var(--status-warning)'
        }}>⚠ Warning: Approaching character limit</div>}
          {text.length === 280 && <div style={{
          color: 'var(--status-error)'
        }}>❌ Character limit reached</div>}
        </div>
      </div>;
  }
}`,...j.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [issue, setIssue] = useState('');
    const [priority, setPriority] = useState('medium');
    return <div style={{
      width: '600px',
      padding: 'var(--spacing-8)',
      borderRadius: 'var(--radius-control)',
      border: '1px solid var(--border-subtle)'
    }}>
        <h3 style={{
        marginBottom: 'var(--spacing-6)',
        fontSize: 'var(--font-size-18)',
        fontWeight: 'var(--font-weight-medium)'
      }}>
          Submit Support Ticket
        </h3>
        <div style={{
        marginBottom: 'var(--spacing-6)'
      }}>
          <label style={{
          display: 'block',
          marginBottom: 'var(--spacing-2)',
          fontSize: 'var(--font-size-14)',
          fontWeight: 'var(--font-weight-medium)'
        }}>
            Priority
          </label>
          <select value={priority} onChange={e => setPriority(e.target.value)} style={{
          width: '100%',
          padding: 'var(--spacing-3)',
          borderRadius: 'var(--radius-sm)',
          border: '1px solid var(--border-subtle)',
          fontSize: 'var(--font-size-14)'
        }}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="urgent">Urgent</option>
          </select>
        </div>
        <Textarea label="Describe your issue" placeholder="Please provide as much detail as possible..." value={issue} onChange={e => setIssue(e.target.value)} maxLength={2000} showCounter rows={8} helperText="Include steps to reproduce, error messages, or screenshots" />
        <button style={{
        marginTop: 'var(--spacing-4)',
        padding: 'var(--spacing-3) var(--spacing-6)',
        borderRadius: 'var(--radius-sm)',
        border: 'none',
        background: 'var(--interactive-primary)',
        color: 'var(--interactive-primary-text)',
        fontSize: 'var(--font-size-14)',
        fontWeight: 'var(--font-weight-medium)',
        cursor: 'pointer'
      }}>
          Submit Ticket
        </button>
      </div>;
  }
}`,...k.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Custom styled textarea',
    helperText: 'This textarea has custom styling',
    className: 'custom-textarea',
    placeholder: 'Enter text...'
  }
}`,...R.parameters?.docs?.source}}};const M=["Default","WithHelperText","WithError","WithCharacterCounter","SmallSize","LargeSize","ResizeNone","ResizeHorizontal","ResizeBoth","Disabled","WithDefaultValue","WithRows","Interactive","CommentForm","FeedbackForm","AllSizes","AllResizeBehaviors","AllStates","CharacterCounter","SupportTicket","WithCustomStyling"];export{w as AllResizeBehaviors,T as AllSizes,C as AllStates,j as CharacterCounter,y as CommentForm,l as Default,b as Disabled,S as FeedbackForm,z as Interactive,p as LargeSize,v as ResizeBoth,g as ResizeHorizontal,h as ResizeNone,m as SmallSize,k as SupportTicket,u as WithCharacterCounter,R as WithCustomStyling,x as WithDefaultValue,c as WithError,d as WithHelperText,f as WithRows,M as __namedExportsOrder,H as default};
