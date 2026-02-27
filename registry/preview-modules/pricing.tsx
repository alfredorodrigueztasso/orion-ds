/**
 * Preview module for Pricing component
 * Marketing pricing sections with plans and features
 */

import React from 'react';
import { Pricing } from '@orion-ds/blocks';
import { Button, Badge } from '@orion-ds/react';
import { Check } from 'lucide-react';

export const previews = [
  {
    title: 'Standard Pricing',
    render: () => {
      const plans = [
        {
          name: 'Starter',
          price: '$9',
          period: 'per month',
          description: 'Perfect for individuals and small projects',
          features: [
            '5 projects',
            '10 GB storage',
            'Basic support',
            'Community access',
          ],
          action: <Button variant="secondary">Get Started</Button>,
        },
        {
          name: 'Pro',
          price: '$29',
          period: 'per month',
          description: 'Best for growing teams and businesses',
          features: [
            'Unlimited projects',
            '100 GB storage',
            'Priority support',
            'Advanced analytics',
            'Custom integrations',
          ],
          action: <Button variant="primary">Start Free Trial</Button>,
          popular: true,
          badge: <Badge variant="info">Most Popular</Badge>,
        },
        {
          name: 'Enterprise',
          price: '$99',
          period: 'per month',
          description: 'For large organizations with custom needs',
          features: [
            'Unlimited everything',
            '1 TB storage',
            'Dedicated support',
            'SLA guarantee',
            'On-premise deployment',
            'Custom training',
          ],
          action: <Button variant="secondary">Contact Sales</Button>,
        },
      ];

      return (
        <Pricing
          eyebrow={<Badge>Pricing</Badge>}
          title="Simple, transparent pricing"
          description="Choose the plan that's right for you. All plans include a 14-day free trial."
          plans={plans}
        />
      );
    },
  },
  {
    title: 'Annual Billing',
    render: () => {
      const plans = [
        {
          name: 'Basic',
          price: (
            <>
              <span style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 700 }}>$8</span>
              <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-tertiary)', marginLeft: '4px' }}>
                /month
              </span>
            </>
          ),
          period: 'billed annually ($96/year)',
          features: ['10 projects', '50 GB storage', 'Email support'],
          action: <Button variant="secondary">Get Started</Button>,
        },
        {
          name: 'Professional',
          price: (
            <>
              <span style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 700 }}>$24</span>
              <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-tertiary)', marginLeft: '4px' }}>
                /month
              </span>
            </>
          ),
          period: 'billed annually ($288/year)',
          features: [
            'Unlimited projects',
            '200 GB storage',
            'Priority support',
            'API access',
          ],
          action: <Button variant="primary">Start Free Trial</Button>,
          popular: true,
          badge: <Badge variant="success">Save 20%</Badge>,
        },
      ];

      return (
        <Pricing
          title="Annual pricing"
          description="Save 20% with annual billing"
          plans={plans}
          columns={2}
          background="none"
        />
      );
    },
  },
  {
    title: 'Feature Comparison',
    render: () => {
      const plans = [
        {
          name: 'Free',
          price: '$0',
          period: 'forever',
          features: [
            { text: '3 projects', included: true },
            { text: '5 GB storage', included: true },
            { text: 'Community support', included: true },
            { text: 'Advanced features', included: false },
            { text: 'API access', included: false },
          ],
          action: <Button variant="ghost">Get Started</Button>,
        },
        {
          name: 'Starter',
          price: '$12',
          period: 'per month',
          features: [
            { text: '10 projects', included: true },
            { text: '25 GB storage', included: true },
            { text: 'Email support', included: true },
            { text: 'Advanced features', included: true },
            { text: 'API access', included: false },
          ],
          action: <Button variant="secondary">Start Trial</Button>,
        },
        {
          name: 'Pro',
          price: '$39',
          period: 'per month',
          features: [
            { text: 'Unlimited projects', included: true },
            { text: '200 GB storage', included: true },
            { text: 'Priority support', included: true },
            { text: 'Advanced features', included: true },
            { text: 'API access', included: true },
          ],
          action: <Button variant="primary">Start Trial</Button>,
          popular: true,
        },
      ];

      return (
        <Pricing
          title="Compare plans"
          description="All the features you need, at a price that works for you"
          plans={plans}
          background="subtle"
        />
      );
    },
  },
  {
    title: 'Two Column Layout',
    render: () => {
      const plans = [
        {
          name: 'Personal',
          price: '$15',
          period: 'per month',
          description: 'For freelancers and independent creators',
          features: [
            'Unlimited projects',
            '50 GB storage',
            'Priority support',
            'Custom branding',
          ],
          action: <Button variant="primary" style={{ width: '100%' }}>Choose Personal</Button>,
        },
        {
          name: 'Business',
          price: '$49',
          period: 'per month',
          description: 'For teams and growing businesses',
          features: [
            'Everything in Personal',
            'Team collaboration',
            '500 GB storage',
            'Advanced analytics',
            'API access',
            'Dedicated support',
          ],
          action: <Button variant="primary" style={{ width: '100%' }}>Choose Business</Button>,
          popular: true,
          badge: <Badge variant="info">Best Value</Badge>,
        },
      ];

      return (
        <Pricing
          eyebrow={<Badge variant="brand">Limited Offer</Badge>}
          title="Special pricing for early adopters"
          description="Lock in these rates forever when you sign up today"
          plans={plans}
          columns={2}
          background="base"
        />
      );
    },
  },
];

export default previews;
