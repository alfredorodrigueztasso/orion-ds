/**
 * Preview module for Contact section
 * Contact form with various layouts and contact information display
 */

import React from 'react';
import { Contact } from '@orion-ds/blocks';
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';

export const previews = [
  {
    title: 'Split Layout (Default)',
    render: () => (
      <Contact
        title="Get in touch"
        description="We'd love to hear from you. Send us a message and we'll respond as soon as possible."
        contactInfo={[
          {
            icon: <Mail size={20} />,
            label: 'Email',
            value: 'hello@orion-ds.dev',
            href: 'mailto:hello@orion-ds.dev',
          },
          {
            icon: <Phone size={20} />,
            label: 'Phone',
            value: '+1 (555) 123-4567',
            href: 'tel:+15551234567',
          },
          {
            icon: <MapPin size={20} />,
            label: 'Office',
            value: '123 Design Street, San Francisco, CA 94102',
          },
          {
            icon: <Clock size={20} />,
            label: 'Hours',
            value: 'Monday - Friday, 9am - 6pm PST',
          },
        ]}
        onSubmit={(data) => console.log('Form submitted:', data)}
        layout="split"
      />
    ),
  },
  {
    title: 'Stacked Layout',
    render: () => (
      <Contact
        title="Contact our sales team"
        description="Ready to transform your design workflow? Reach out and let's discuss how Orion can help."
        contactInfo={[
          {
            icon: <MessageSquare size={20} />,
            label: 'Live Chat',
            value: 'Available 24/7',
          },
          {
            icon: <Mail size={20} />,
            label: 'Email',
            value: 'sales@orion-ds.dev',
            href: 'mailto:sales@orion-ds.dev',
          },
        ]}
        formFields={[
          { name: 'name', label: 'Full Name', required: true, placeholder: 'John Doe' },
          {
            name: 'email',
            label: 'Work Email',
            type: 'email',
            required: true,
            placeholder: 'john@company.com',
          },
          {
            name: 'company',
            label: 'Company',
            required: true,
            placeholder: 'Acme Inc.',
          },
          {
            name: 'message',
            label: 'Tell us about your project',
            type: 'textarea',
            required: true,
            placeholder: 'What are you looking to build?',
            rows: 5,
          },
        ]}
        onSubmit={(data) => console.log('Sales inquiry:', data)}
        submitText="Request Demo"
        layout="stacked"
      />
    ),
  },
  {
    title: 'Form Only',
    render: () => (
      <Contact
        title="Quick contact form"
        description="Fill out the form below and we'll get back to you within 24 hours."
        formFields={[
          { name: 'name', label: 'Name', required: true },
          { name: 'email', label: 'Email', type: 'email', required: true },
          { name: 'subject', label: 'Subject', required: true },
          {
            name: 'message',
            label: 'Message',
            type: 'textarea',
            required: true,
            rows: 6,
          },
        ]}
        onSubmit={(data) => console.log('Contact form:', data)}
        layout="form-only"
        background="subtle"
      />
    ),
  },
  {
    title: 'Support Contact',
    render: () => (
      <Contact
        title="Need help?"
        description="Our support team is here to assist you with any questions or issues."
        contactInfo={[
          {
            icon: <Mail size={20} />,
            label: 'Support Email',
            value: 'support@orion-ds.dev',
            href: 'mailto:support@orion-ds.dev',
          },
          {
            icon: <MessageSquare size={20} />,
            label: 'Live Chat',
            value: 'Chat with us',
            href: '#chat',
          },
          {
            icon: <Clock size={20} />,
            label: 'Response Time',
            value: 'Usually within 2 hours',
          },
        ]}
        formFields={[
          { name: 'email', label: 'Your Email', type: 'email', required: true },
          { name: 'orderNumber', label: 'Order Number (optional)', placeholder: '#12345' },
          {
            name: 'issue',
            label: 'Describe your issue',
            type: 'textarea',
            required: true,
            placeholder: 'Tell us what went wrong...',
            rows: 5,
          },
        ]}
        onSubmit={(data) => console.log('Support ticket:', data)}
        submitText="Submit Ticket"
        layout="split"
        background="base"
      />
    ),
  },
  {
    title: 'Custom Submit Button',
    render: () => {
      const CustomButton = () => (
        <button
          type="submit"
          style={{
            padding: 'var(--spacing-4)',
            background: 'var(--interactive-primary)',
            color: 'var(--interactive-primary-text)',
            borderRadius: 'var(--radius-control)',
            border: 'none',
            fontSize: '16px',
            fontWeight: 500,
            cursor: 'pointer',
          }}
        >
          Send Message →
        </button>
      );

      return (
        <Contact
          title="Let's collaborate"
          description="Have a project in mind? We're here to make it happen."
          contactInfo={[
            {
              icon: <Mail size={20} />,
              label: 'Email',
              value: 'hello@orion-ds.dev',
              href: 'mailto:hello@orion-ds.dev',
            },
          ]}
          formFields={[
            { name: 'name', label: 'Name', required: true },
            { name: 'email', label: 'Email', type: 'email', required: true },
            { name: 'message', label: 'Message', type: 'textarea', required: true },
          ]}
          submitButton={<CustomButton />}
          onSubmit={(data) => console.log('Custom submit:', data)}
          layout="split"
        />
      );
    },
  },
];

export default previews;
