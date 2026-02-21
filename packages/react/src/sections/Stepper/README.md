# Stepper Section

> Multi-step progress indicator for wizards and multi-step forms.

## Quick Start

```tsx
import { Stepper } from "@orion/react";

<Stepper
  steps={[
    { id: "details", label: "Details" },
    { id: "payment", label: "Payment" },
    { id: "confirm", label: "Confirmation" },
  ]}
  activeStep={1}
  onStepClick={(index) => setActiveStep(index)}
/>;
```

---

## Features

- **Horizontal & Vertical** — Two orientation options
- **Step Numbers or Icons** — Customizable indicators
- **Optional Steps** — Mark steps as optional
- **Error States** — Highlight steps with errors
- **Click Navigation** — Click to navigate steps
- **Connector Styles** — Solid, dashed, or dotted lines
- **Size Variants** — Small, medium, large
- **Alternative Labels** — Labels below indicators
- **Brand-Aware** — Adapts to all Orion brands

---

## Props Reference

```typescript
interface StepperProps {
  // Content
  steps: StepItem[]; // REQUIRED - Step items
  activeStep: number; // REQUIRED - Current step (0-based)

  // Navigation
  onStepClick?: (index: number) => void;
  allowClickOnCompleted?: boolean; // Click past steps - default: true
  allowClickOnFuture?: boolean; // Click future steps - default: false

  // Display
  orientation?: "horizontal" | "vertical"; // default: 'horizontal'
  showStepNumbers?: boolean; // Show numbers - default: true
  connectorStyle?: "solid" | "dashed" | "dotted"; // default: 'solid'
  size?: "sm" | "md" | "lg"; // default: 'md'
  alternativeLabel?: boolean; // Labels below (horizontal) - default: false
}

interface StepItem {
  id: string; // Unique identifier
  label: string; // Step label
  description?: string; // Optional description
  icon?: ReactNode; // Custom icon (replaces number)
  optional?: boolean; // Mark as optional
  error?: boolean; // Error state
  errorMessage?: string; // Error message
}
```

---

## Basic Usage

### Simple Stepper

```tsx
<Stepper
  steps={[
    { id: "step1", label: "Step 1" },
    { id: "step2", label: "Step 2" },
    { id: "step3", label: "Step 3" },
  ]}
  activeStep={0}
/>
```

### With Navigation

```tsx
const [activeStep, setActiveStep] = useState(0);

<Stepper
  steps={steps}
  activeStep={activeStep}
  onStepClick={(index) => setActiveStep(index)}
/>;
```

---

## Orientation

### Horizontal (Default)

```tsx
<Stepper orientation="horizontal" steps={steps} activeStep={activeStep} />
```

### Vertical

```tsx
<Stepper orientation="vertical" steps={steps} activeStep={activeStep} />
```

---

## Step Configuration

### With Descriptions

```tsx
steps={[
  { id: 'details', label: 'Account Details', description: 'Enter your information' },
  { id: 'plan', label: 'Select Plan', description: 'Choose a subscription' },
  { id: 'payment', label: 'Payment', description: 'Add payment method' },
  { id: 'confirm', label: 'Confirm', description: 'Review and submit' }
]}
```

### With Icons

```tsx
import { User, CreditCard, Check, Settings } from 'lucide-react';

steps={[
  { id: 'account', label: 'Account', icon: <User size={20} /> },
  { id: 'plan', label: 'Plan', icon: <Settings size={20} /> },
  { id: 'payment', label: 'Payment', icon: <CreditCard size={20} /> },
  { id: 'done', label: 'Complete', icon: <Check size={20} /> }
]}
```

### Optional Steps

```tsx
steps={[
  { id: 'required1', label: 'Required Step' },
  { id: 'optional', label: 'Optional Step', optional: true },
  { id: 'required2', label: 'Final Step' }
]}
```

### Error States

```tsx
steps={[
  { id: 'details', label: 'Details' },
  { id: 'payment', label: 'Payment', error: true, errorMessage: 'Payment failed' },
  { id: 'confirm', label: 'Confirmation' }
]}
```

---

## Navigation Control

### Allow Clicking Completed Steps

```tsx
<Stepper
  steps={steps}
  activeStep={activeStep}
  onStepClick={setActiveStep}
  allowClickOnCompleted={true} // Can go back
  allowClickOnFuture={false} // Can't skip ahead
/>
```

### Allow Clicking All Steps

```tsx
<Stepper
  steps={steps}
  activeStep={activeStep}
  onStepClick={setActiveStep}
  allowClickOnCompleted={true}
  allowClickOnFuture={true} // Free navigation
/>
```

### Disable Click Navigation

```tsx
<Stepper
  steps={steps}
  activeStep={activeStep}
  // No onStepClick = no click navigation
/>
```

---

## Connector Styles

### Solid (Default)

```tsx
<Stepper connectorStyle="solid" ... />
```

### Dashed

```tsx
<Stepper connectorStyle="dashed" ... />
```

### Dotted

```tsx
<Stepper connectorStyle="dotted" ... />
```

---

## Size Variants

### Small

```tsx
<Stepper size="sm" ... />
```

### Medium (Default)

```tsx
<Stepper size="md" ... />
```

### Large

```tsx
<Stepper size="lg" ... />
```

---

## Alternative Label Placement

Labels below step indicators (horizontal only).

```tsx
<Stepper
  orientation="horizontal"
  alternativeLabel
  steps={steps}
  activeStep={activeStep}
/>
```

---

## Complete Examples

### Checkout Flow

```tsx
import { Stepper, Button, FormSection, Field } from "@orion/react";
import { useState } from "react";

function CheckoutWizard() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({});

  const steps = [
    { id: "shipping", label: "Shipping", description: "Delivery address" },
    { id: "payment", label: "Payment", description: "Payment method" },
    { id: "review", label: "Review", description: "Confirm order" },
  ];

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  return (
    <div>
      <Stepper
        steps={steps}
        activeStep={activeStep}
        onStepClick={(index) => {
          if (index < activeStep) setActiveStep(index);
        }}
        allowClickOnCompleted={true}
        allowClickOnFuture={false}
      />

      <div style={{ marginTop: "var(--spacing-8)" }}>
        {activeStep === 0 && (
          <FormSection title="Shipping Address">
            <Field label="Address" type="text" />
            <Field label="City" type="text" />
            <Field label="ZIP Code" type="text" />
          </FormSection>
        )}

        {activeStep === 1 && (
          <FormSection title="Payment Method">
            <Field label="Card Number" type="text" />
            <Field label="Expiry" type="text" />
            <Field label="CVV" type="text" />
          </FormSection>
        )}

        {activeStep === 2 && (
          <FormSection title="Review Order">
            <p>Please review your order before confirming.</p>
          </FormSection>
        )}

        <div
          style={{
            display: "flex",
            gap: "var(--spacing-4)",
            marginTop: "var(--spacing-6)",
          }}
        >
          <Button
            variant="ghost"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            Back
          </Button>
          <Button
            variant="primary"
            onClick={activeStep === steps.length - 1 ? submitOrder : handleNext}
          >
            {activeStep === steps.length - 1 ? "Place Order" : "Continue"}
          </Button>
        </div>
      </div>
    </div>
  );
}
```

### Account Setup Wizard

```tsx
import { User, Building, Users, Check } from "lucide-react";

<Stepper
  orientation="vertical"
  steps={[
    {
      id: "profile",
      label: "Your Profile",
      icon: <User size={20} />,
      description: "Basic information",
    },
    {
      id: "company",
      label: "Company Details",
      icon: <Building size={20} />,
      description: "Organization info",
    },
    {
      id: "team",
      label: "Invite Team",
      icon: <Users size={20} />,
      description: "Add team members",
      optional: true,
    },
    {
      id: "done",
      label: "All Set!",
      icon: <Check size={20} />,
      description: "Ready to start",
    },
  ]}
  activeStep={activeStep}
  onStepClick={setActiveStep}
  size="lg"
/>;
```

### Form with Validation Errors

```tsx
<Stepper
  steps={[
    { id: "info", label: "Information" },
    {
      id: "details",
      label: "Details",
      error: hasErrors,
      errorMessage: "Please fix errors",
    },
    { id: "submit", label: "Submit" },
  ]}
  activeStep={1}
/>
```

### Progress Indicator Only

```tsx
<Stepper
  steps={[
    { id: "1", label: "Step 1" },
    { id: "2", label: "Step 2" },
    { id: "3", label: "Step 3" },
    { id: "4", label: "Step 4" },
  ]}
  activeStep={2}
  size="sm"
  showStepNumbers={false}
  // No onStepClick - display only
/>
```

---

## Accessibility

- Steps use proper list markup
- Active step announced to screen readers
- Completed steps marked with checkmark
- Error states announced
- Keyboard navigation supported

```tsx
// Good: Descriptive step labels
{
  label: "Enter Shipping Address";
}

// Avoid: Vague labels
{
  label: "Step 2";
}
```

---

## Anti-Patterns

### Too Many Steps

```tsx
// WRONG - 10 steps overwhelms users
<Stepper steps={[...tenSteps]} activeStep={activeStep} />

// CORRECT - Break into sub-steps or simplify
<Stepper steps={fourMainSteps} activeStep={activeStep} />
// Or use vertical with scrolling
```

### No Progress Indication

```tsx
// WRONG - Users don't know their progress
<div>
  <h2>Step 3</h2>
  <form>...</form>
</div>

// CORRECT - Show stepper for context
<Stepper steps={steps} activeStep={2} />
<form>...</form>
```

### Unclear Step Labels

```tsx
// WRONG - Meaningless labels
steps={[
  { id: '1', label: 'Step 1' },
  { id: '2', label: 'Step 2' },
  { id: '3', label: 'Step 3' }
]}

// CORRECT - Descriptive labels
steps={[
  { id: 'info', label: 'Your Information' },
  { id: 'plan', label: 'Choose Plan' },
  { id: 'confirm', label: 'Confirm & Pay' }
]}
```

---

## When to Use Stepper

| Scenario          | Recommendation             |
| ----------------- | -------------------------- |
| Checkout flow     | Horizontal with icons      |
| Account setup     | Vertical with descriptions |
| Form wizard       | With back/next navigation  |
| Progress tracking | Display only (no click)    |

## When NOT to Use Stepper

| Scenario         | Use Instead      |
| ---------------- | ---------------- |
| Tab navigation   | Tabs component   |
| Status timeline  | Timeline section |
| Single page form | Form sections    |
| Task completion  | Progress bar     |

---

## Related Components

- **[Timeline](../Timeline/README.md)** — Chronological events
- **[FormSection](../FormSection/README.md)** — Form layouts
- **[Progress](../../components/Progress/README.md)** — Progress bars
- **[Tabs](../../components/Tabs/README.md)** — Tab navigation
