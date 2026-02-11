import{j as e}from"./jsx-runtime-u17CrQMm.js";import{M as p}from"./MetricCards-DekZ0wiY.js";import{D as c}from"./dollar-sign-DfkM_E10.js";import{U as v}from"./users-B3aIcKNm.js";import{S as m}from"./shopping-cart-jJMduW6k.js";import{T as g}from"./trending-up--FzQNwgR.js";import{E as h}from"./eye-6tB6fTIZ.js";import{A as d}from"./activity-FOcQ-hUg.js";import"./index-Bi6L2ga8.js";import"./trending-down-DLTGsz8J.js";import"./createLucideIcon-DprCCbyf.js";const M={title:"Sections/App/MetricCards",component:p,parameters:{layout:"padded",docs:{description:{component:"A row of KPI cards for dashboard overviews. Optimized for Product Mode with minimal visual noise and data density."}}},tags:["autodocs"],argTypes:{columns:{control:"select",options:[2,3,4,5]},variant:{control:"select",options:["default","compact","detailed"]},loading:{control:"boolean"}}},n={args:{metrics:[{label:"Total Revenue",value:"$45,231.89",change:{value:"+20.1%",positive:!0,label:"vs last month"},icon:e.jsx(c,{size:20})},{label:"Active Users",value:"2,350",change:{value:"+12.5%",positive:!0},icon:e.jsx(v,{size:20})},{label:"Sales",value:"12,234",change:{value:"-3.2%",positive:!1},icon:e.jsx(m,{size:20})},{label:"Growth Rate",value:"23.5%",change:{value:"+4.1%",positive:!0},icon:e.jsx(g,{size:20})}],columns:4}},a={args:{metrics:[{label:"Page Views",value:"1.2M",change:{value:"+15%",positive:!0},icon:e.jsx(h,{size:20})},{label:"Bounce Rate",value:"42.3%",change:{value:"-2.5%",positive:!0},icon:e.jsx(d,{size:20})},{label:"Avg. Session",value:"4m 23s",change:{value:"+8%",positive:!0}}],columns:3}},s={args:{variant:"compact",metrics:[{label:"Revenue",value:"$12.5K",change:{value:"+12%",positive:!0}},{label:"Orders",value:"156",change:{value:"+8%",positive:!0}},{label:"Customers",value:"89",change:{value:"-3%",positive:!1}},{label:"Conversion",value:"3.2%",change:{value:"+0.5%",positive:!0}}],columns:4}},l={args:{variant:"detailed",metrics:[{label:"Monthly Revenue",value:"$128,430",change:{value:"+23.1%",positive:!0,label:"vs last month"},icon:e.jsx(c,{size:24}),sparkline:[12,18,15,22,28,32,38,42,45,48,52,58],description:"Total revenue generated this month"},{label:"Active Subscribers",value:"8,942",change:{value:"+5.4%",positive:!0},icon:e.jsx(v,{size:24}),sparkline:[100,120,115,130,145,160,155,170,185,190,195,200],description:"Users with active subscriptions"},{label:"Churn Rate",value:"2.4%",change:{value:"-0.8%",positive:!0},sparkline:[5,4.5,4.2,3.8,3.5,3.2,3,2.8,2.6,2.5,2.4,2.4],description:"Monthly customer churn rate"}],columns:3}},r={args:{metrics:[{label:"Total Users",value:"24,521",change:{value:"+10%",positive:!0},href:"#users"},{label:"Active Sessions",value:"1,234",change:{value:"+5%",positive:!0},href:"#sessions"},{label:"Error Rate",value:"0.12%",change:{value:"-15%",positive:!0},href:"#errors"}],columns:3}},o={args:{loading:!0,metrics:[{label:"Revenue",value:""},{label:"Users",value:""},{label:"Orders",value:""},{label:"Growth",value:""}],columns:4}},t={args:{metrics:[{label:"Views",value:"45.2K",change:{value:"+12%",positive:!0}},{label:"Clicks",value:"2.1K",change:{value:"+8%",positive:!0}},{label:"CTR",value:"4.6%",change:{value:"+0.3%",positive:!0}},{label:"Conversions",value:"384",change:{value:"-2%",positive:!1}},{label:"Revenue",value:"$9.8K",change:{value:"+15%",positive:!0}}],columns:5}},i={args:{metrics:[{label:"Total Sales",value:"$892,123",change:{value:"+18.2%",positive:!0}},{label:"Avg. Order Value",value:"$156.32",change:{value:"+5.1%",positive:!0}},{label:"Refund Rate",value:"1.8%",change:{value:"-0.3%",positive:!0}}],columns:3}},u={args:{metrics:[{label:"This Month",value:"$32,450",change:{value:"+22%",positive:!0,label:"vs last month"},icon:e.jsx(c,{size:20})},{label:"Last Month",value:"$26,598",change:{value:"+15%",positive:!0,label:"vs previous"},icon:e.jsx(c,{size:20})}],columns:2}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    metrics: [{
      label: 'Total Revenue',
      value: '$45,231.89',
      change: {
        value: '+20.1%',
        positive: true,
        label: 'vs last month'
      },
      icon: <DollarSign size={20} />
    }, {
      label: 'Active Users',
      value: '2,350',
      change: {
        value: '+12.5%',
        positive: true
      },
      icon: <Users size={20} />
    }, {
      label: 'Sales',
      value: '12,234',
      change: {
        value: '-3.2%',
        positive: false
      },
      icon: <ShoppingCart size={20} />
    }, {
      label: 'Growth Rate',
      value: '23.5%',
      change: {
        value: '+4.1%',
        positive: true
      },
      icon: <TrendingUp size={20} />
    }],
    columns: 4
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    metrics: [{
      label: 'Page Views',
      value: '1.2M',
      change: {
        value: '+15%',
        positive: true
      },
      icon: <Eye size={20} />
    }, {
      label: 'Bounce Rate',
      value: '42.3%',
      change: {
        value: '-2.5%',
        positive: true
      },
      icon: <Activity size={20} />
    }, {
      label: 'Avg. Session',
      value: '4m 23s',
      change: {
        value: '+8%',
        positive: true
      }
    }],
    columns: 3
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'compact',
    metrics: [{
      label: 'Revenue',
      value: '$12.5K',
      change: {
        value: '+12%',
        positive: true
      }
    }, {
      label: 'Orders',
      value: '156',
      change: {
        value: '+8%',
        positive: true
      }
    }, {
      label: 'Customers',
      value: '89',
      change: {
        value: '-3%',
        positive: false
      }
    }, {
      label: 'Conversion',
      value: '3.2%',
      change: {
        value: '+0.5%',
        positive: true
      }
    }],
    columns: 4
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'detailed',
    metrics: [{
      label: 'Monthly Revenue',
      value: '$128,430',
      change: {
        value: '+23.1%',
        positive: true,
        label: 'vs last month'
      },
      icon: <DollarSign size={24} />,
      sparkline: [12, 18, 15, 22, 28, 32, 38, 42, 45, 48, 52, 58],
      description: 'Total revenue generated this month'
    }, {
      label: 'Active Subscribers',
      value: '8,942',
      change: {
        value: '+5.4%',
        positive: true
      },
      icon: <Users size={24} />,
      sparkline: [100, 120, 115, 130, 145, 160, 155, 170, 185, 190, 195, 200],
      description: 'Users with active subscriptions'
    }, {
      label: 'Churn Rate',
      value: '2.4%',
      change: {
        value: '-0.8%',
        positive: true
      },
      sparkline: [5, 4.5, 4.2, 3.8, 3.5, 3.2, 3, 2.8, 2.6, 2.5, 2.4, 2.4],
      description: 'Monthly customer churn rate'
    }],
    columns: 3
  }
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    metrics: [{
      label: 'Total Users',
      value: '24,521',
      change: {
        value: '+10%',
        positive: true
      },
      href: '#users'
    }, {
      label: 'Active Sessions',
      value: '1,234',
      change: {
        value: '+5%',
        positive: true
      },
      href: '#sessions'
    }, {
      label: 'Error Rate',
      value: '0.12%',
      change: {
        value: '-15%',
        positive: true
      },
      href: '#errors'
    }],
    columns: 3
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    metrics: [{
      label: 'Revenue',
      value: ''
    }, {
      label: 'Users',
      value: ''
    }, {
      label: 'Orders',
      value: ''
    }, {
      label: 'Growth',
      value: ''
    }],
    columns: 4
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    metrics: [{
      label: 'Views',
      value: '45.2K',
      change: {
        value: '+12%',
        positive: true
      }
    }, {
      label: 'Clicks',
      value: '2.1K',
      change: {
        value: '+8%',
        positive: true
      }
    }, {
      label: 'CTR',
      value: '4.6%',
      change: {
        value: '+0.3%',
        positive: true
      }
    }, {
      label: 'Conversions',
      value: '384',
      change: {
        value: '-2%',
        positive: false
      }
    }, {
      label: 'Revenue',
      value: '$9.8K',
      change: {
        value: '+15%',
        positive: true
      }
    }],
    columns: 5
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    metrics: [{
      label: 'Total Sales',
      value: '$892,123',
      change: {
        value: '+18.2%',
        positive: true
      }
    }, {
      label: 'Avg. Order Value',
      value: '$156.32',
      change: {
        value: '+5.1%',
        positive: true
      }
    }, {
      label: 'Refund Rate',
      value: '1.8%',
      change: {
        value: '-0.3%',
        positive: true
      }
    }],
    columns: 3
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    metrics: [{
      label: 'This Month',
      value: '$32,450',
      change: {
        value: '+22%',
        positive: true,
        label: 'vs last month'
      },
      icon: <DollarSign size={20} />
    }, {
      label: 'Last Month',
      value: '$26,598',
      change: {
        value: '+15%',
        positive: true,
        label: 'vs previous'
      },
      icon: <DollarSign size={20} />
    }],
    columns: 2
  }
}`,...u.parameters?.docs?.source}}};const U=["Default","ThreeColumns","Compact","Detailed","WithLinks","Loading","FiveColumns","NoIcons","TwoColumns"];export{s as Compact,n as Default,l as Detailed,t as FiveColumns,o as Loading,i as NoIcons,a as ThreeColumns,u as TwoColumns,r as WithLinks,U as __namedExportsOrder,M as default};
