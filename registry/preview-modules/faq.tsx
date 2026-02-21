/**
 * Preview module for FAQ section
 * Frequently asked questions with accordion or grid layout
 */

import React from 'react';
import { FAQ, Badge } from '@orion-ds/react';

const basicFAQs = [
  {
    question: 'What is Orion Design System?',
    answer:
      'Orion is an AI-first design system built on the Chain of Truth principle. It provides a token-governed framework with React, Vue, and vanilla HTML components.',
  },
  {
    question: 'How do I install Orion?',
    answer:
      'Install via npm: `npm install @orion-ds/react`. Import styles: `import "@orion-ds/react/styles.css"`. Wrap your app with ThemeProvider and start using components.',
  },
  {
    question: 'Is Orion free to use?',
    answer:
      'Yes! Orion is open source and free for both personal and commercial projects. We welcome contributions from the community.',
  },
  {
    question: 'Does Orion support TypeScript?',
    answer:
      'Absolutely. All Orion packages are built with TypeScript and provide full type definitions out of the box.',
  },
];

const technicalFAQs = [
  {
    question: 'What frameworks does Orion support?',
    answer:
      'Orion provides official packages for React (@orion-ds/react) and Vue 3 (@orion-ds/vue). You can also use the vanilla HTML/CSS version with any framework.',
    defaultOpen: true,
  },
  {
    question: 'Can I customize the design tokens?',
    answer:
      'Yes! Orion follows the Chain of Truth architecture. Override CSS variables at the root level or use the token system to create custom themes and brands.',
  },
  {
    question: 'Does Orion support dark mode?',
    answer:
      'Yes. Dark mode is built into the core system. Use the ThemeProvider component to toggle between light and dark themes dynamically.',
  },
  {
    question: 'Is Orion accessible?',
    answer:
      'Accessibility is a core principle. All components follow WCAG 2.1 Level AA guidelines with proper ARIA attributes, keyboard navigation, and screen reader support.',
  },
  {
    question: 'Can I use Orion with Next.js or other meta-frameworks?',
    answer:
      'Yes! Orion works seamlessly with Next.js, Remix, Gatsby, and other React-based frameworks. Import components and styles as you would in any React app.',
  },
];

const pricingFAQs = [
  {
    question: 'Is there a free trial?',
    answer: 'Orion is completely free and open source. There are no trials or subscriptions required.',
  },
  {
    question: 'Do you offer enterprise support?',
    answer:
      'Yes! We offer enterprise support packages with SLA guarantees, priority bug fixes, custom component development, and training sessions. Contact our sales team for details.',
  },
  {
    question: 'Can I use Orion in commercial projects?',
    answer:
      'Absolutely. Orion is MIT licensed, which means you can use it freely in commercial projects without any licensing fees.',
  },
];

export const previews = [
  {
    title: 'Basic Accordion',
    render: () => (
      <FAQ
        title="Frequently Asked Questions"
        description="Find answers to common questions about Orion Design System"
        items={basicFAQs}
        variant="accordion"
      />
    ),
  },
  {
    title: 'Accordion with Eyebrow',
    render: () => (
      <FAQ
        eyebrow={<Badge>Support</Badge>}
        title="Technical Questions"
        description="Deep dive into Orion's technical capabilities"
        items={technicalFAQs}
        variant="accordion"
        allowMultiple={true}
      />
    ),
  },
  {
    title: 'Single Item Accordion',
    render: () => (
      <FAQ
        title="Pricing FAQs"
        description="Common questions about pricing and licensing"
        items={pricingFAQs}
        variant="accordion"
        allowMultiple={false}
      />
    ),
  },
  {
    title: 'Grid Layout - Single Column',
    render: () => (
      <FAQ
        title="Getting Started"
        description="Everything you need to know to start using Orion"
        items={basicFAQs}
        variant="grid"
        columns={1}
      />
    ),
  },
  {
    title: 'Grid Layout - Two Columns',
    render: () => (
      <FAQ
        title="Technical Documentation"
        description="In-depth answers to technical questions"
        items={technicalFAQs}
        variant="grid"
        columns={2}
      />
    ),
  },
  {
    title: 'Left Aligned',
    render: () => (
      <FAQ
        title="Product Questions"
        description="Learn more about what Orion can do"
        items={basicFAQs}
        variant="accordion"
        centered={false}
      />
    ),
  },
  {
    title: 'Subtle Background',
    render: () => (
      <FAQ
        eyebrow={<Badge variant="brand">Help Center</Badge>}
        title="Need more help?"
        description="Browse our knowledge base or contact support"
        items={[
          {
            question: 'How do I report a bug?',
            answer:
              'Open an issue on our GitHub repository with a detailed description and reproduction steps. We typically respond within 24 hours.',
          },
          {
            question: 'Where can I find examples?',
            answer:
              'Check out our Storybook documentation, the examples folder in the repository, or explore our showcase page featuring real-world implementations.',
          },
          {
            question: 'How do I contribute?',
            answer:
              'We welcome contributions! Read our CONTRIBUTING.md guide, pick an issue labeled "good first issue", and submit a pull request. We review all contributions promptly.',
          },
        ]}
        variant="accordion"
        background="subtle"
      />
    ),
  },
];

export default previews;
