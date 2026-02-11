import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as l}from"./index-Bi6L2ga8.js";import{U as ie}from"./upload-DDi9KpFe.js";import{L as ne}from"./loader-circle-CragUQIO.js";import{C as le}from"./circle-check-big-CA7x2PYe.js";import{C as te}from"./circle-alert-BMPEDkj1.js";import{X as de}from"./x-Dd336Dmd.js";import{F as ce,a as pe,b as me}from"./file-play-BeSa0hT3.js";import{F as ue}from"./file-text-3QR_BDt1.js";import{F as fe}from"./file-CJqdiTYx.js";import"./createLucideIcon-DprCCbyf.js";const ge="_fileUploader_elcmy_8",Fe="_dropzone_elcmy_18",he="_dropzoneDragging_elcmy_40",ve="_dropzoneDisabled_elcmy_45",ye="_dropzoneError_elcmy_55",_e="_input_elcmy_59",xe="_dropzoneContent_elcmy_63",ze="_dropzoneIcon_elcmy_71",Se="_dropzonePlaceholder_elcmy_82",we="_dropzoneHints_elcmy_90",Ie="_dropzoneHint_elcmy_90",Ce="_helperText_elcmy_107",De="_helperTextError_elcmy_113",je="_fileList_elcmy_121",be="_fileItem_elcmy_130",Ae="_fileIcon_elcmy_139",Ne="_filePreview_elcmy_152",Re="_fileInfo_elcmy_158",Ue="_fileName_elcmy_166",ke="_fileSize_elcmy_176",Te="_fileStatus_elcmy_182",Le="_progressBar_elcmy_188",Me="_progressFill_elcmy_196",Ee="_fileStatusIcon_elcmy_202",Be="_spin_elcmy_1",We="_fileStatusSuccess_elcmy_207",qe="_fileStatusError_elcmy_211",Pe="_fileRemove_elcmy_221",$e="_minimal_elcmy_246",He="_card_elcmy_258",Oe="_compact_elcmy_273",a={fileUploader:ge,dropzone:Fe,dropzoneDragging:he,dropzoneDisabled:ve,dropzoneError:ye,input:_e,dropzoneContent:xe,dropzoneIcon:ze,dropzonePlaceholder:Se,dropzoneHints:we,dropzoneHint:Ie,helperText:Ce,helperTextError:De,fileList:je,fileItem:be,fileIcon:Ae,filePreview:Ne,fileInfo:Re,fileName:Ue,fileSize:ke,fileStatus:Te,progressBar:Le,progressFill:Me,fileStatusIcon:Ee,spin:Be,fileStatusSuccess:We,fileStatusError:qe,fileRemove:Pe,minimal:$e,card:He,compact:Oe},Ve=e=>e.startsWith("image/")?ce:e.startsWith("video/")?pe:e.startsWith("audio/")?me:e.includes("pdf")||e.includes("document")?ue:fe,B=e=>{if(e===0)return"0 B";const n=1024,d=["B","KB","MB","GB"],g=Math.floor(Math.log(e)/Math.log(n));return`${parseFloat((e/Math.pow(n,g)).toFixed(1))} ${d[g]}`},k=l.forwardRef(({accept:e,maxFiles:n,maxSize:d,multiple:g=!0,onFilesAdded:u,onFileRemove:p,files:i=[],disabled:o=!1,dropzoneContent:T,placeholder:F="Drag and drop files here, or click to browse",showFileList:c=!0,compact:L=!1,variant:O="default",error:N,helperText:W,className:V,...K},G)=>{const M=l.useRef(null),[X,E]=l.useState(!1),[R,q]=l.useState(null),P=l.useCallback(s=>{const m=[],t=[],$=Array.from(s);return n&&i.length+$.length>n?(t.push(`Maximum ${n} files allowed`),{valid:m,errors:t}):($.forEach(f=>{if(d&&f.size>d){t.push(`${f.name} exceeds maximum size of ${B(d)}`);return}if(e&&e.length>0&&!e.some(h=>h.startsWith(".")?f.name.toLowerCase().endsWith(h.toLowerCase()):h.endsWith("/*")?f.type.startsWith(h.replace("/*","/")):f.type===h)){t.push(`${f.name} is not an accepted file type`);return}m.push(f)}),{valid:m,errors:t})},[e,n,d,i.length]),U=l.useCallback(s=>{if(o)return;const{valid:m,errors:t}=P(s);t.length>0&&t[0]&&(q(t[0]),setTimeout(()=>q(null),3e3)),m.length>0&&u?.(m)},[o,P,u]),J=l.useCallback(s=>{s.preventDefault(),o||E(!0)},[o]),Q=l.useCallback(s=>{s.preventDefault(),E(!1)},[]),Y=l.useCallback(s=>{s.preventDefault(),E(!1),U(s.dataTransfer.files)},[U]),Z=l.useCallback(s=>{s.target.files&&U(s.target.files),s.target.value=""},[U]),ee=()=>{o||M.current?.click()},se=s=>{(s.key==="Enter"||s.key===" ")&&!o&&(s.preventDefault(),M.current?.click())},ae=e?.join(","),re=[a.fileUploader,a[O],L&&a.compact,V].filter(Boolean).join(" "),oe=[a.dropzone,X&&a.dropzoneDragging,o&&a.dropzoneDisabled,(N||R)&&a.dropzoneError].filter(Boolean).join(" ");return r.jsxs("div",{ref:G,className:re,...K,children:[r.jsxs("div",{className:oe,onDragOver:J,onDragLeave:Q,onDrop:Y,onClick:ee,onKeyDown:se,role:"button",tabIndex:o?-1:0,"aria-disabled":o,children:[r.jsx("input",{ref:M,type:"file",className:a.input,accept:ae,multiple:g,onChange:Z,disabled:o,"aria-hidden":"true"}),T||r.jsxs("div",{className:a.dropzoneContent,children:[r.jsx("div",{className:a.dropzoneIcon,children:r.jsx(ie,{size:L?20:24})}),r.jsx("p",{className:a.dropzonePlaceholder,children:F}),!L&&r.jsxs("div",{className:a.dropzoneHints,children:[e&&r.jsxs("span",{className:a.dropzoneHint,children:["Accepted: ",e.join(", ")]}),d&&r.jsxs("span",{className:a.dropzoneHint,children:["Max size: ",B(d)]}),n&&r.jsxs("span",{className:a.dropzoneHint,children:["Max files: ",n]})]})]})]}),(N||R||W)&&r.jsx("div",{className:`${a.helperText} ${N||R?a.helperTextError:""}`,children:N||R||W}),c&&i.length>0&&r.jsx("ul",{className:a.fileList,children:i.map(s=>{const m=Ve(s.type);return r.jsxs("li",{className:a.fileItem,children:[r.jsx("div",{className:a.fileIcon,children:s.preview?r.jsx("img",{src:s.preview,alt:"",className:a.filePreview}):r.jsx(m,{size:20})}),r.jsxs("div",{className:a.fileInfo,children:[r.jsx("span",{className:a.fileName,children:s.name}),r.jsx("span",{className:a.fileSize,children:B(s.size)})]}),r.jsxs("div",{className:a.fileStatus,children:[s.status==="uploading"&&r.jsxs(r.Fragment,{children:[r.jsx("div",{className:a.progressBar,children:r.jsx("div",{className:a.progressFill,style:{width:`${s.progress||0}%`}})}),r.jsx(ne,{size:16,className:a.fileStatusIcon})]}),s.status==="completed"&&r.jsx(le,{size:16,className:a.fileStatusSuccess}),s.status==="error"&&r.jsx(te,{size:16,className:a.fileStatusError})]}),p&&r.jsx("button",{type:"button",className:a.fileRemove,onClick:t=>{t.stopPropagation(),p(s.id)},"aria-label":`Remove ${s.name}`,children:r.jsx(de,{size:16})})]},s.id)})})]})});k.displayName="FileUploader";k.__docgenInfo={description:"",methods:[],displayName:"FileUploader",props:{accept:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Accepted file types (MIME types or extensions)"},maxFiles:{required:!1,tsType:{name:"number"},description:"Maximum number of files"},maxSize:{required:!1,tsType:{name:"number"},description:"Maximum file size in bytes"},multiple:{required:!1,tsType:{name:"boolean"},description:`Allow multiple files
@default true`,defaultValue:{value:"true",computed:!1}},onFilesAdded:{required:!1,tsType:{name:"signature",type:"function",raw:"(files: File[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"File"}],raw:"File[]"},name:"files"}],return:{name:"void"}}},description:"Callback when files are added"},onFileRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"(fileId: string) => void",signature:{arguments:[{type:{name:"string"},name:"fileId"}],return:{name:"void"}}},description:"Callback when a file is removed"},files:{required:!1,tsType:{name:"Array",elements:[{name:"UploadedFile"}],raw:"UploadedFile[]"},description:"Current uploaded files (controlled)",defaultValue:{value:"[]",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state",defaultValue:{value:"false",computed:!1}},dropzoneContent:{required:!1,tsType:{name:"ReactNode"},description:"Custom dropzone content"},placeholder:{required:!1,tsType:{name:"string"},description:`Custom placeholder text
@default "Drag and drop files here, or click to browse"`,defaultValue:{value:"'Drag and drop files here, or click to browse'",computed:!1}},showFileList:{required:!1,tsType:{name:"boolean"},description:`Show file list below dropzone
@default true`,defaultValue:{value:"true",computed:!1}},compact:{required:!1,tsType:{name:"boolean"},description:`Compact mode
@default false`,defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'minimal' | 'card'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'minimal'"},{name:"literal",value:"'card'"}]},description:`Variant style
@default "default"`,defaultValue:{value:"'default'",computed:!1}},error:{required:!1,tsType:{name:"string"},description:"Error message"},helperText:{required:!1,tsType:{name:"string"},description:"Helper text"}},composes:["Omit"]};const is={title:"Sections/App/FileUploader",component:k,parameters:{layout:"padded"},tags:["autodocs"]},H=[{id:"1",name:"document.pdf",size:1024*1024*2.5,type:"application/pdf",status:"completed"},{id:"2",name:"image.png",size:1024*512,type:"image/png",status:"uploading",progress:65,preview:"https://picsum.photos/100/100?random=1"},{id:"3",name:"spreadsheet.xlsx",size:1024*1024*1.2,type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",status:"completed"}],v={args:{accept:["image/*",".pdf",".doc",".docx"],maxSize:10*1024*1024,maxFiles:5,onFilesAdded:e=>console.log("Files added:",e)}},y={render:()=>{const[e,n]=l.useState([]),d=l.useCallback(u=>{const p=u.map((i,o)=>({id:`${Date.now()}-${o}`,name:i.name,size:i.size,type:i.type,status:"uploading",progress:0,file:i,preview:i.type.startsWith("image/")?URL.createObjectURL(i):void 0}));n(i=>[...i,...p]),p.forEach(i=>{let o=0;const T=setInterval(()=>{o+=Math.random()*30,o>=100?(o=100,clearInterval(T),n(F=>F.map(c=>c.id===i.id?{...c,status:"completed",progress:100}:c))):n(F=>F.map(c=>c.id===i.id?{...c,progress:Math.min(o,99)}:c))},500)})},[]),g=l.useCallback(u=>{n(p=>{const i=p.find(o=>o.id===u);return i?.preview&&URL.revokeObjectURL(i.preview),p.filter(o=>o.id!==u)})},[]);return r.jsx(k,{accept:["image/*",".pdf"],maxSize:5*1024*1024,maxFiles:3,files:e,onFilesAdded:d,onFileRemove:g,helperText:"Drag and drop or click to upload. Max 3 files, 5MB each."})}},_={args:{files:H,onFileRemove:e=>console.log("Remove file:",e),onFilesAdded:e=>console.log("Files added:",e)}},x={args:{accept:["image/*"],placeholder:"Drag and drop images here, or click to browse",maxSize:5*1024*1024,onFilesAdded:e=>console.log("Files added:",e)}},z={args:{multiple:!1,maxFiles:1,accept:[".pdf"],placeholder:"Upload a PDF document",onFilesAdded:e=>console.log("File added:",e[0])}},S={args:{compact:!0,accept:["image/*",".pdf"],onFilesAdded:e=>console.log("Files added:",e)}},w={args:{variant:"minimal",accept:["image/*",".pdf"],onFilesAdded:e=>console.log("Files added:",e)}},I={args:{variant:"card",accept:["image/*",".pdf",".doc",".docx"],maxSize:10*1024*1024,onFilesAdded:e=>console.log("Files added:",e)}},C={args:{accept:["image/*"],error:"File type not supported. Please upload an image.",onFilesAdded:e=>console.log("Files added:",e)}},D={args:{disabled:!0,placeholder:"File upload is disabled"}},j={args:{showFileList:!1,files:H,onFilesAdded:e=>console.log("Files added:",e)}},b={args:{files:[{id:"1",name:"pending-file.pdf",size:1024*500,type:"application/pdf",status:"pending"},{id:"2",name:"uploading-file.png",size:1024*1024,type:"image/png",status:"uploading",progress:45},{id:"3",name:"completed-file.docx",size:1024*750,type:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",status:"completed"},{id:"4",name:"failed-file.xlsx",size:1024*1024*5,type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",status:"error",error:"Upload failed"}],onFileRemove:e=>console.log("Remove file:",e)}},A={args:{maxSize:100*1024*1024,placeholder:"Upload large files (up to 100MB)",helperText:"Supported formats: Any file type",onFilesAdded:e=>console.log("Files added:",e)}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    accept: ['image/*', '.pdf', '.doc', '.docx'],
    maxSize: 10 * 1024 * 1024,
    // 10 MB
    maxFiles: 5,
    onFilesAdded: (files: File[]) => console.log('Files added:', files)
  }
}`,...v.parameters?.docs?.source},description:{story:"Default FileUploader",...v.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [files, setFiles] = useState<UploadedFile[]>([]);
    const handleFilesAdded = useCallback((newFiles: File[]) => {
      const uploadedFiles: UploadedFile[] = newFiles.map((file, index) => ({
        id: \`\${Date.now()}-\${index}\`,
        name: file.name,
        size: file.size,
        type: file.type,
        status: 'uploading' as const,
        progress: 0,
        file,
        preview: file.type.startsWith('image/') ? URL.createObjectURL(file) : undefined
      }));
      setFiles(prev => [...prev, ...uploadedFiles]);

      // Simulate upload progress
      uploadedFiles.forEach(uploadedFile => {
        let progress = 0;
        const interval = setInterval(() => {
          progress += Math.random() * 30;
          if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            setFiles(prev => prev.map(f => f.id === uploadedFile.id ? {
              ...f,
              status: 'completed' as const,
              progress: 100
            } : f));
          } else {
            setFiles(prev => prev.map(f => f.id === uploadedFile.id ? {
              ...f,
              progress: Math.min(progress, 99)
            } : f));
          }
        }, 500);
      });
    }, []);
    const handleFileRemove = useCallback((fileId: string) => {
      setFiles(prev => {
        const file = prev.find(f => f.id === fileId);
        if (file?.preview) {
          URL.revokeObjectURL(file.preview);
        }
        return prev.filter(f => f.id !== fileId);
      });
    }, []);
    return <FileUploader accept={['image/*', '.pdf']} maxSize={5 * 1024 * 1024} maxFiles={3} files={files} onFilesAdded={handleFilesAdded} onFileRemove={handleFileRemove} helperText="Drag and drop or click to upload. Max 3 files, 5MB each." />;
  }
}`,...y.parameters?.docs?.source},description:{story:"Interactive FileUploader with state",...y.parameters?.docs?.description}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    files: sampleFiles,
    onFileRemove: (id: string) => console.log('Remove file:', id),
    onFilesAdded: (files: File[]) => console.log('Files added:', files)
  }
}`,..._.parameters?.docs?.source},description:{story:"With existing files",..._.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    accept: ['image/*'],
    placeholder: 'Drag and drop images here, or click to browse',
    maxSize: 5 * 1024 * 1024,
    onFilesAdded: (files: File[]) => console.log('Files added:', files)
  }
}`,...x.parameters?.docs?.source},description:{story:"Images only",...x.parameters?.docs?.description}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    multiple: false,
    maxFiles: 1,
    accept: ['.pdf'],
    placeholder: 'Upload a PDF document',
    onFilesAdded: (files: File[]) => console.log('File added:', files[0])
  }
}`,...z.parameters?.docs?.source},description:{story:"Single file upload",...z.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    compact: true,
    accept: ['image/*', '.pdf'],
    onFilesAdded: (files: File[]) => console.log('Files added:', files)
  }
}`,...S.parameters?.docs?.source},description:{story:"Compact variant",...S.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'minimal',
    accept: ['image/*', '.pdf'],
    onFilesAdded: (files: File[]) => console.log('Files added:', files)
  }
}`,...w.parameters?.docs?.source},description:{story:"Minimal variant",...w.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'card',
    accept: ['image/*', '.pdf', '.doc', '.docx'],
    maxSize: 10 * 1024 * 1024,
    onFilesAdded: (files: File[]) => console.log('Files added:', files)
  }
}`,...I.parameters?.docs?.source},description:{story:"Card variant",...I.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    accept: ['image/*'],
    error: 'File type not supported. Please upload an image.',
    onFilesAdded: (files: File[]) => console.log('Files added:', files)
  }
}`,...C.parameters?.docs?.source},description:{story:"With error",...C.parameters?.docs?.description}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: 'File upload is disabled'
  }
}`,...D.parameters?.docs?.source},description:{story:"Disabled",...D.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    showFileList: false,
    files: sampleFiles,
    onFilesAdded: (files: File[]) => console.log('Files added:', files)
  }
}`,...j.parameters?.docs?.source},description:{story:"Without file list",...j.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    files: [{
      id: '1',
      name: 'pending-file.pdf',
      size: 1024 * 500,
      type: 'application/pdf',
      status: 'pending'
    }, {
      id: '2',
      name: 'uploading-file.png',
      size: 1024 * 1024,
      type: 'image/png',
      status: 'uploading',
      progress: 45
    }, {
      id: '3',
      name: 'completed-file.docx',
      size: 1024 * 750,
      type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      status: 'completed'
    }, {
      id: '4',
      name: 'failed-file.xlsx',
      size: 1024 * 1024 * 5,
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      status: 'error',
      error: 'Upload failed'
    }],
    onFileRemove: (id: string) => console.log('Remove file:', id)
  }
}`,...b.parameters?.docs?.source},description:{story:"File status examples",...b.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    maxSize: 100 * 1024 * 1024,
    // 100 MB
    placeholder: 'Upload large files (up to 100MB)',
    helperText: 'Supported formats: Any file type',
    onFilesAdded: (files: File[]) => console.log('Files added:', files)
  }
}`,...A.parameters?.docs?.source},description:{story:"Large file limit",...A.parameters?.docs?.description}}};const ns=["Default","Interactive","WithFiles","ImagesOnly","SingleFile","Compact","Minimal","Card","WithError","Disabled","WithoutFileList","FileStatuses","LargeFileLimit"];export{I as Card,S as Compact,v as Default,D as Disabled,b as FileStatuses,x as ImagesOnly,y as Interactive,A as LargeFileLimit,w as Minimal,z as SingleFile,C as WithError,_ as WithFiles,j as WithoutFileList,ns as __namedExportsOrder,is as default};
