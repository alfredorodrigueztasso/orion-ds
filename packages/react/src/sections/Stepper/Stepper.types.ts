/**
 * Stepper Component Types
 *
 * Type definitions for the Orion Stepper section component.
 * A multi-step wizard/progress indicator for SaaS applications.
 */

import type { HTMLAttributes, ReactNode } from "react";

/**
 * Step item
 */
export interface StepItem {
  /**
   * Unique identifier
   */
  id: string;

  /**
   * Step label
   */
  label: string;

  /**
   * Optional description
   */
  description?: string;

  /**
   * Optional icon (replaces step number)
   */
  icon?: ReactNode;

  /**
   * Whether step is optional
   */
  optional?: boolean;

  /**
   * Error state for this step
   */
  error?: boolean;

  /**
   * Error message
   */
  errorMessage?: string;
}

/**
 * Stepper section props
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
export interface StepperProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Step items
   */
  steps: StepItem[];

  /**
   * Current active step index (0-based)
   */
  activeStep: number;

  /**
   * Click handler for step navigation
   */
  onStepClick?: (index: number) => void;

  /**
   * Orientation
   * @default "horizontal"
   */
  orientation?: "horizontal" | "vertical";

  /**
   * Allow clicking on completed steps
   * @default true
   */
  allowClickOnCompleted?: boolean;

  /**
   * Allow clicking on future steps
   * @default false
   */
  allowClickOnFuture?: boolean;

  /**
   * Show step numbers
   * @default true
   */
  showStepNumbers?: boolean;

  /**
   * Connector line style
   * @default "solid"
   */
  connectorStyle?: "solid" | "dashed" | "dotted";

  /**
   * Size variant
   * @default "md"
   */
  size?: "sm" | "md" | "lg";

  /**
   * Alternative label placement (horizontal only)
   * @default false
   */
  alternativeLabel?: boolean;
}
