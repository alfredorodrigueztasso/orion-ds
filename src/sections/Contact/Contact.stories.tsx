import type { Meta, StoryObj } from '@storybook/react';
import { Contact } from './Contact';
import { Mail, Phone, MapPin } from 'lucide-react';

const meta = {
  title: 'Sections/Marketing/Contact',
  component: Contact,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    layout: {
      control: 'select',
      options: ['split', 'stacked', 'form-only'],
    },
    background: {
      control: 'select',
      options: ['base', 'subtle', 'none'],
    },
  },
} satisfies Meta<typeof Contact>;

export default meta;
type Story = StoryObj<typeof meta>;

const contactInfo = [
  {
    icon: <Mail size={24} />,
    label: 'Email',
    value: 'hello@orion.dev',
    href: 'mailto:hello@orion.dev',
  },
  {
    icon: <Phone size={24} />,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: <MapPin size={24} />,
    label: 'Office',
    value: '123 Design Street, SF, CA',
  },
];

const formFields = [
  { name: 'name', label: 'Name', type: 'text' as const, required: true },
  { name: 'email', label: 'Email', type: 'email' as const, required: true },
  { name: 'subject', label: 'Subject', type: 'text' as const },
  { name: 'message', label: 'Message', type: 'textarea' as const, required: true },
];

export const Default: Story = {
  args: {
    title: 'Get in touch',
    description: 'We would love to hear from you. Send us a message and we will respond as soon as possible.',
    contactInfo,
    formFields,
    onSubmit: (data) => console.log('Form submitted:', data),
  },
};

export const SplitLayout: Story = {
  args: {
    title: 'Contact Us',
    description: 'Fill out the form below.',
    contactInfo,
    formFields,
    layout: 'split',
    onSubmit: (data) => console.log('Form submitted:', data),
  },
};

export const StackedLayout: Story = {
  args: {
    title: 'Contact Us',
    description: 'Fill out the form below.',
    contactInfo,
    formFields,
    layout: 'stacked',
    onSubmit: (data) => console.log('Form submitted:', data),
  },
};

export const WithEyebrow: Story = {
  args: {
    eyebrow: 'Contact',
    title: 'Let us talk',
    description: 'Have a question or want to work together?',
    contactInfo,
    formFields,
    onSubmit: (data) => console.log('Form submitted:', data),
  },
};

export const FormOnly: Story = {
  args: {
    title: 'Send us a message',
    formFields,
    layout: 'form-only',
    onSubmit: (data) => console.log('Form submitted:', data),
  },
};

export const InfoOnly: Story = {
  args: {
    title: 'Contact Information',
    description: 'Reach out through any of these channels.',
    contactInfo,
  },
};

export const SubtleBackground: Story = {
  args: {
    title: 'Get in touch',
    contactInfo,
    formFields,
    background: 'subtle',
    onSubmit: (data) => console.log('Form submitted:', data),
  },
};
