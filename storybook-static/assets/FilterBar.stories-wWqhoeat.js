import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as b}from"./index-Bi6L2ga8.js";import{F as f}from"./FilterBar-B88KHOHh.js";import{U as j}from"./user-CUEj3VL3.js";import{C as k}from"./calendar-BjEn5mzX.js";import{T as w}from"./tag-BsWcH7Lt.js";import"./search-BC3UyaPv.js";import"./createLucideIcon-DprCCbyf.js";import"./funnel-BrGssVc5.js";import"./chevron-down-buXKF-gJ.js";import"./x-Dd336Dmd.js";const V={title:"Sections/App/FilterBar",component:f,parameters:{layout:"padded",docs:{description:{component:"Horizontal filter controls with chips for SaaS dashboards. Optimized for Product Mode with efficient filtering interactions."}}},tags:["autodocs"],argTypes:{searchable:{control:"boolean"},showCount:{control:"boolean"},compact:{control:"boolean"}}},v={key:"status",label:"Status",type:"select",options:[{value:"active",label:"Active",count:24},{value:"pending",label:"Pending",count:8},{value:"inactive",label:"Inactive",count:4}]},F={key:"role",label:"Role",type:"multi-select",icon:r.jsx(j,{size:14}),options:[{value:"admin",label:"Admin",count:3},{value:"editor",label:"Editor",count:12},{value:"viewer",label:"Viewer",count:21}]},I={key:"date",label:"Date",type:"date",icon:r.jsx(k,{size:14})},C={key:"tags",label:"Tags",type:"multi-select",icon:r.jsx(w,{size:14}),options:[{value:"important",label:"Important"},{value:"urgent",label:"Urgent"},{value:"review",label:"Review"},{value:"archive",label:"Archive"}]},g=e=>{const[y,n]=b.useState([]),[A,S]=b.useState(""),x=(a,t)=>{if(t===null)n(s=>s.filter(o=>o.key!==a));else{const s=Array.isArray(t)?t.join(", "):String(t);n(o=>{const h=o.findIndex(i=>i.key===a);if(h>=0){const i=[...o];return i[h]={key:a,value:t,label:s},i}return[...o,{key:a,value:t,label:s}]})}},R=a=>{n(t=>t.filter(s=>s.key!==a))};return r.jsx(f,{filters:[v,F,C],activeFilters:y,onFilterChange:x,onFilterRemove:R,onClearAll:()=>n([]),searchable:e.searchable,searchValue:A,onSearchChange:S,...e})},l={render:e=>r.jsx(g,{...e}),args:{}},c={render:e=>r.jsx(g,{...e}),args:{searchable:!0}},u={args:{filters:[v,F],activeFilters:[{key:"status",value:"active",label:"Active"},{key:"role",value:["admin","editor"],label:"Admin, Editor"}],onFilterChange:()=>{},onFilterRemove:()=>{},onClearAll:()=>{}}},m={render:e=>r.jsx(g,{...e}),args:{compact:!0}},d={args:{filters:[v,F,I,C],activeFilters:[],onFilterChange:()=>{},onFilterRemove:()=>{}}},p={args:{filters:[v,F],activeFilters:[{key:"status",value:"active",label:"Active"}],onFilterChange:()=>{},onFilterRemove:()=>{},showCount:!1}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <InteractiveFilterBar {...args} />,
  args: {}
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <InteractiveFilterBar {...args} />,
  args: {
    searchable: true
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    filters: [statusFilter, roleFilter],
    activeFilters: [{
      key: 'status',
      value: 'active',
      label: 'Active'
    }, {
      key: 'role',
      value: ['admin', 'editor'],
      label: 'Admin, Editor'
    }],
    onFilterChange: () => {},
    onFilterRemove: () => {},
    onClearAll: () => {}
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <InteractiveFilterBar {...args} />,
  args: {
    compact: true
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    filters: [statusFilter, roleFilter, dateFilter, tagFilter],
    activeFilters: [],
    onFilterChange: () => {},
    onFilterRemove: () => {}
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    filters: [statusFilter, roleFilter],
    activeFilters: [{
      key: 'status',
      value: 'active',
      label: 'Active'
    }],
    onFilterChange: () => {},
    onFilterRemove: () => {},
    showCount: false
  }
}`,...p.parameters?.docs?.source}}};const _=["Default","WithSearch","WithActiveFilters","Compact","ManyFilters","NoCount"];export{m as Compact,l as Default,d as ManyFilters,p as NoCount,u as WithActiveFilters,c as WithSearch,_ as __namedExportsOrder,V as default};
