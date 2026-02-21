/**
 * Preview module for FormSection section
 * Form sections for settings pages and structured layouts
 */

import React, { useState } from 'react';
import { FormSection, Button, Field } from '@orion-ds/react';
import { User, Bell, Lock, CreditCard } from 'lucide-react';

export const previews = [
  {
    title: 'Basic Form Section',
    render: () => (
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <FormSection
          title="Profile Information"
          description="Update your personal details and account information"
          actions={
            <>
              <Button variant="ghost">Cancel</Button>
              <Button variant="primary">Save Changes</Button>
            </>
          }
        >
          <Field label="Full Name" type="text" defaultValue="John Doe" />
          <Field label="Email Address" type="email" defaultValue="john@example.com" />
          <Field
            label="Bio"
            type="textarea"
            placeholder="Tell us about yourself"
            helperText="Brief description for your profile"
          />
        </FormSection>
      </div>
    ),
  },
  {
    title: 'Card Variant',
    render: () => (
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <FormSection
          title="Account Settings"
          description="Manage your account preferences and security"
          icon={<User size={20} />}
          variant="card"
          actions={<Button variant="primary">Update Settings</Button>}
        >
          <Field label="Username" type="text" defaultValue="johndoe" />
          <Field label="Display Name" type="text" defaultValue="John D." />
          <Field label="Account Email" type="email" defaultValue="john@example.com" />
        </FormSection>
      </div>
    ),
  },
  {
    title: 'With Field Groups',
    render: () => (
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <FormSection
          title="Personal Details"
          description="Your basic information and contact details"
          actions={<Button variant="primary">Save</Button>}
        >
          <FormSection.Group label="Name" columns={2}>
            <Field label="First Name" type="text" defaultValue="John" />
            <Field label="Last Name" type="text" defaultValue="Doe" />
          </FormSection.Group>

          <FormSection.Group label="Contact" columns={1}>
            <Field label="Email" type="email" defaultValue="john@example.com" />
            <Field label="Phone" type="tel" defaultValue="+1 (555) 123-4567" />
          </FormSection.Group>

          <FormSection.Group label="Address" helpText="Your primary residential address">
            <Field label="Street Address" type="text" />
            <FormSection.Group columns={2}>
              <Field label="City" type="text" />
              <Field label="Postal Code" type="text" />
            </FormSection.Group>
          </FormSection.Group>
        </FormSection>
      </div>
    ),
  },
  {
    title: 'Collapsible Sections',
    render: () => {
      return (
        <div style={{ maxWidth: '700px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <FormSection
            title="Profile"
            description="Basic account information"
            icon={<User size={20} />}
            collapsible
            defaultCollapsed={false}
          >
            <Field label="Username" type="text" defaultValue="johndoe" />
            <Field label="Email" type="email" defaultValue="john@example.com" />
          </FormSection>

          <FormSection
            title="Notifications"
            description="Manage your notification preferences"
            icon={<Bell size={20} />}
            collapsible
            defaultCollapsed
            divider
          >
            <Field label="Email Notifications" type="checkbox" defaultChecked />
            <Field label="Push Notifications" type="checkbox" />
            <Field label="SMS Notifications" type="checkbox" />
          </FormSection>

          <FormSection
            title="Security"
            description="Password and authentication settings"
            icon={<Lock size={20} />}
            collapsible
            defaultCollapsed
            divider
          >
            <Field label="Current Password" type="password" />
            <Field label="New Password" type="password" />
            <Field label="Confirm Password" type="password" />
          </FormSection>
        </div>
      );
    },
  },
  {
    title: 'Inline Variant',
    render: () => (
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <FormSection
          title="Billing Information"
          description="Payment method and billing details"
          icon={<CreditCard size={20} />}
          variant="inline"
          actions={<Button variant="primary">Update Billing</Button>}
        >
          <Field label="Card Number" type="text" placeholder="1234 5678 9012 3456" />
          <FormSection.Group columns={3}>
            <Field label="Expiry Date" type="text" placeholder="MM/YY" />
            <Field label="CVV" type="text" placeholder="123" />
            <Field label="ZIP Code" type="text" placeholder="12345" />
          </FormSection.Group>
          <Field label="Cardholder Name" type="text" placeholder="John Doe" />
        </FormSection>
      </div>
    ),
  },
];

export default previews;
