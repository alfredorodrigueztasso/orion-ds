/**
 * Stepper Component
 *
 * A multi-step wizard/progress indicator for SaaS applications.
 * Optimized for Product Mode with clean, efficient step navigation.
 *
 * @example
 * ```tsx
 * <Stepper
 *   steps={[
 *     { id: 'details', label: 'Details' },
 *     { id: 'payment', label: 'Payment' },
 *     { id: 'confirm', label: 'Confirmation' }
 *   ]}
 *   activeStep={1}
 *   onStepClick={(index) => setActiveStep(index)}
 * />
 * ```
 */
import type { StepperProps } from './Stepper.types';
export declare const Stepper: import("react").ForwardRefExoticComponent<StepperProps & import("react").RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Stepper.d.ts.map