import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { User, CreditCard, CheckCircle, FileText } from 'lucide-react';
import { Stepper } from './Stepper';
import type { StepItem } from './Stepper.types';

const meta: Meta<typeof Stepper> = {
  title: 'Sections/App/Stepper',
  component: Stepper,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Stepper>;

// Sample steps
const sampleSteps: StepItem[] = [
  { id: 'account', label: 'Account Details', description: 'Enter your information' },
  { id: 'payment', label: 'Payment', description: 'Add payment method' },
  { id: 'review', label: 'Review', description: 'Confirm your order' },
  { id: 'complete', label: 'Complete', description: 'Order placed' },
];

/**
 * Default Stepper (horizontal)
 */
export const Default: Story = {
  args: {
    steps: sampleSteps,
    activeStep: 1,
    onStepClick: (index: number) => console.log('Step clicked:', index),
  },
};

/**
 * Interactive Stepper with navigation
 */
export const Interactive: Story = {
  render: () => {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
      setActiveStep((prev) => Math.min(prev + 1, sampleSteps.length - 1));
    };

    const handleBack = () => {
      setActiveStep((prev) => Math.max(prev - 1, 0));
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
        <Stepper steps={sampleSteps} activeStep={activeStep} onStepClick={setActiveStep} />

        <div
          style={{
            textAlign: 'center',
            padding: 'var(--spacing-8)',
            background: 'var(--surface-subtle)',
            borderRadius: 'var(--radius-sm)',
          }}
        >
          <h3 style={{ margin: '0 0 var(--spacing-2)', fontSize: 'var(--font-size-18)' }}>
            {sampleSteps[activeStep]?.label}
          </h3>
          <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
            {sampleSteps[activeStep]?.description}
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button
            onClick={handleBack}
            disabled={activeStep === 0}
            style={{
              padding: 'var(--spacing-2) var(--spacing-4)',
              background: 'var(--surface-subtle)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-sm)',
              cursor: activeStep === 0 ? 'not-allowed' : 'pointer',
              opacity: activeStep === 0 ? 0.5 : 1,
            }}
          >
            Back
          </button>
          <button
            onClick={handleNext}
            disabled={activeStep === sampleSteps.length - 1}
            style={{
              padding: 'var(--spacing-2) var(--spacing-4)',
              background: 'var(--interactive-primary)',
              color: 'var(--interactive-primary-text)',
              border: 'none',
              borderRadius: 'var(--radius-sm)',
              cursor: activeStep === sampleSteps.length - 1 ? 'not-allowed' : 'pointer',
              opacity: activeStep === sampleSteps.length - 1 ? 0.5 : 1,
            }}
          >
            {activeStep === sampleSteps.length - 1 ? 'Finish' : 'Next'}
          </button>
        </div>
      </div>
    );
  },
};

/**
 * Vertical orientation
 */
export const Vertical: Story = {
  args: {
    steps: sampleSteps,
    activeStep: 2,
    orientation: 'vertical',
    onStepClick: (index: number) => console.log('Step clicked:', index),
  },
};

/**
 * With custom icons
 */
export const WithIcons: Story = {
  args: {
    steps: [
      { id: 'account', label: 'Account', icon: <User size={18} /> },
      { id: 'payment', label: 'Payment', icon: <CreditCard size={18} /> },
      { id: 'review', label: 'Review', icon: <FileText size={18} /> },
      { id: 'complete', label: 'Complete', icon: <CheckCircle size={18} /> },
    ],
    activeStep: 1,
    showStepNumbers: false,
  },
};

/**
 * With optional steps
 */
export const WithOptionalSteps: Story = {
  args: {
    steps: [
      { id: 'details', label: 'Details' },
      { id: 'address', label: 'Address', optional: true },
      { id: 'payment', label: 'Payment' },
      { id: 'confirm', label: 'Confirm' },
    ],
    activeStep: 1,
  },
};

/**
 * With error state
 */
export const WithError: Story = {
  args: {
    steps: [
      { id: 'details', label: 'Details' },
      { id: 'payment', label: 'Payment', error: true, errorMessage: 'Payment failed' },
      { id: 'confirm', label: 'Confirm' },
    ],
    activeStep: 1,
  },
};

/**
 * Different connector styles
 */
export const ConnectorStyles: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-12)' }}>
      <div>
        <p
          style={{
            marginBottom: 'var(--spacing-4)',
            fontSize: 'var(--font-size-12)',
            color: 'var(--text-tertiary)',
          }}
        >
          Solid (default)
        </p>
        <Stepper steps={sampleSteps.slice(0, 3)} activeStep={1} connectorStyle="solid" />
      </div>
      <div>
        <p
          style={{
            marginBottom: 'var(--spacing-4)',
            fontSize: 'var(--font-size-12)',
            color: 'var(--text-tertiary)',
          }}
        >
          Dashed
        </p>
        <Stepper steps={sampleSteps.slice(0, 3)} activeStep={1} connectorStyle="dashed" />
      </div>
      <div>
        <p
          style={{
            marginBottom: 'var(--spacing-4)',
            fontSize: 'var(--font-size-12)',
            color: 'var(--text-tertiary)',
          }}
        >
          Dotted
        </p>
        <Stepper steps={sampleSteps.slice(0, 3)} activeStep={1} connectorStyle="dotted" />
      </div>
    </div>
  ),
};

/**
 * Size variants
 */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-12)' }}>
      <div>
        <p
          style={{
            marginBottom: 'var(--spacing-4)',
            fontSize: 'var(--font-size-12)',
            color: 'var(--text-tertiary)',
          }}
        >
          Small
        </p>
        <Stepper steps={sampleSteps.slice(0, 3)} activeStep={1} size="sm" />
      </div>
      <div>
        <p
          style={{
            marginBottom: 'var(--spacing-4)',
            fontSize: 'var(--font-size-12)',
            color: 'var(--text-tertiary)',
          }}
        >
          Medium (default)
        </p>
        <Stepper steps={sampleSteps.slice(0, 3)} activeStep={1} size="md" />
      </div>
      <div>
        <p
          style={{
            marginBottom: 'var(--spacing-4)',
            fontSize: 'var(--font-size-12)',
            color: 'var(--text-tertiary)',
          }}
        >
          Large
        </p>
        <Stepper steps={sampleSteps.slice(0, 3)} activeStep={1} size="lg" />
      </div>
    </div>
  ),
};

/**
 * Alternative label (centered)
 */
export const AlternativeLabel: Story = {
  args: {
    steps: sampleSteps,
    activeStep: 2,
    alternativeLabel: true,
  },
};

/**
 * Non-clickable steps
 */
export const NonClickable: Story = {
  args: {
    steps: sampleSteps,
    activeStep: 1,
    allowClickOnCompleted: false,
    allowClickOnFuture: false,
  },
};

/**
 * Allow future step clicks
 */
export const AllowFutureClicks: Story = {
  args: {
    steps: sampleSteps,
    activeStep: 0,
    allowClickOnFuture: true,
    onStepClick: (index: number) => alert(`Clicked step ${index + 1}`),
  },
};

/**
 * Completed state
 */
export const Completed: Story = {
  args: {
    steps: sampleSteps,
    activeStep: 4, // Past last index
  },
};

/**
 * Three steps (common)
 */
export const ThreeSteps: Story = {
  args: {
    steps: [
      { id: 'shipping', label: 'Shipping' },
      { id: 'payment', label: 'Payment' },
      { id: 'review', label: 'Review' },
    ],
    activeStep: 0,
  },
};
