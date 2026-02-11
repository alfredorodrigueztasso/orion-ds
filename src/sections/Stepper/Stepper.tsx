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

import { forwardRef } from 'react';
import { Check, AlertCircle } from 'lucide-react';
import type { StepperProps, StepItem } from './Stepper.types';
import styles from './Stepper.module.css';

export const Stepper = forwardRef<HTMLDivElement, StepperProps>(
  (
    {
      steps,
      activeStep,
      onStepClick,
      orientation = 'horizontal',
      allowClickOnCompleted = true,
      allowClickOnFuture = false,
      showStepNumbers = true,
      connectorStyle = 'solid',
      size = 'md',
      alternativeLabel = false,
      className,
      ...rest
    },
    ref
  ) => {
    const isStepCompleted = (index: number) => index < activeStep;
    const isStepActive = (index: number) => index === activeStep;
    const isStepFuture = (index: number) => index > activeStep;

    const canClickStep = (index: number) => {
      if (!onStepClick) return false;
      if (isStepCompleted(index)) return allowClickOnCompleted;
      if (isStepActive(index)) return true;
      if (isStepFuture(index)) return allowClickOnFuture;
      return false;
    };

    const handleStepClick = (index: number) => {
      if (canClickStep(index)) {
        onStepClick?.(index);
      }
    };

    const renderStepIcon = (step: StepItem, index: number) => {
      if (step.error) {
        return <AlertCircle size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />;
      }

      if (isStepCompleted(index)) {
        return <Check size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />;
      }

      if (step.icon) {
        return step.icon;
      }

      if (showStepNumbers) {
        return <span>{index + 1}</span>;
      }

      return null;
    };

    const classNames = [
      styles.stepper,
      styles[orientation],
      styles[size],
      styles[`connector-${connectorStyle}`],
      alternativeLabel && orientation === 'horizontal' && styles.alternativeLabel,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={ref} className={classNames} role="navigation" aria-label="Progress" {...rest}>
        {steps.map((step, index) => {
          const completed = isStepCompleted(index);
          const active = isStepActive(index);
          const clickable = canClickStep(index);
          const isLast = index === steps.length - 1;

          const stepClasses = [
            styles.step,
            completed && styles.stepCompleted,
            active && styles.stepActive,
            step.error && styles.stepError,
            clickable && styles.stepClickable,
          ]
            .filter(Boolean)
            .join(' ');

          const iconClasses = [
            styles.stepIcon,
            completed && styles.stepIconCompleted,
            active && styles.stepIconActive,
            step.error && styles.stepIconError,
          ]
            .filter(Boolean)
            .join(' ');

          return (
            <div key={step.id} className={stepClasses}>
              <div
                className={styles.stepContent}
                onClick={() => handleStepClick(index)}
                onKeyDown={(e) => {
                  if ((e.key === 'Enter' || e.key === ' ') && clickable) {
                    handleStepClick(index);
                  }
                }}
                role={clickable ? 'button' : undefined}
                tabIndex={clickable ? 0 : undefined}
                aria-current={active ? 'step' : undefined}
              >
                <div className={iconClasses}>{renderStepIcon(step, index)}</div>
                <div className={styles.stepText}>
                  <span className={styles.stepLabel}>
                    {step.label}
                    {step.optional && (
                      <span className={styles.stepOptional}> (Optional)</span>
                    )}
                  </span>
                  {step.description && (
                    <span className={styles.stepDescription}>{step.description}</span>
                  )}
                  {step.error && step.errorMessage && (
                    <span className={styles.stepErrorMessage}>{step.errorMessage}</span>
                  )}
                </div>
              </div>

              {!isLast && (
                <div
                  className={`${styles.connector} ${completed ? styles.connectorCompleted : ''}`}
                />
              )}
            </div>
          );
        })}
      </div>
    );
  }
);

Stepper.displayName = 'Stepper';
