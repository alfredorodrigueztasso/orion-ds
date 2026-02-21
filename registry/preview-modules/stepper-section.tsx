/**
 * Preview module for Stepper section
 * Multi-step wizard/progress indicators for SaaS applications
 */

import React, { useState } from 'react';
import { Stepper } from '@orion-ds/react';
import { User, CreditCard, CheckCircle, Package, Truck, Home } from 'lucide-react';

export const previews = [
  {
    title: 'Basic Horizontal Stepper',
    render: () => {
      const [activeStep, setActiveStep] = useState(1);

      return (
        <div style={{ padding: 'var(--spacing-8)' }}>
          <Stepper
            steps={[
              { id: 'account', label: 'Account Details' },
              { id: 'payment', label: 'Payment Info' },
              { id: 'review', label: 'Review & Confirm' },
              { id: 'complete', label: 'Complete' },
            ]}
            activeStep={activeStep}
            onStepClick={setActiveStep}
            orientation="horizontal"
          />
        </div>
      );
    },
  },
  {
    title: 'With Icons and Descriptions',
    render: () => {
      const [activeStep, setActiveStep] = useState(1);

      return (
        <div style={{ padding: 'var(--spacing-8)' }}>
          <Stepper
            steps={[
              {
                id: 'details',
                label: 'Personal Details',
                description: 'Enter your information',
                icon: <User size={18} />,
              },
              {
                id: 'payment',
                label: 'Payment Method',
                description: 'Choose how to pay',
                icon: <CreditCard size={18} />,
              },
              {
                id: 'confirm',
                label: 'Confirmation',
                description: 'Review your order',
                icon: <CheckCircle size={18} />,
              },
            ]}
            activeStep={activeStep}
            onStepClick={setActiveStep}
            size="lg"
          />
        </div>
      );
    },
  },
  {
    title: 'With Error State',
    render: () => {
      const [activeStep] = useState(2);

      return (
        <div style={{ padding: 'var(--spacing-8)' }}>
          <Stepper
            steps={[
              { id: 'shipping', label: 'Shipping Address' },
              {
                id: 'payment',
                label: 'Payment Details',
                error: true,
                errorMessage: 'Card number is invalid',
              },
              { id: 'review', label: 'Order Review' },
            ]}
            activeStep={activeStep}
            onStepClick={() => {}}
            orientation="horizontal"
          />
        </div>
      );
    },
  },
  {
    title: 'Vertical Stepper',
    render: () => {
      const [activeStep, setActiveStep] = useState(2);

      return (
        <div style={{ padding: 'var(--spacing-8)', maxWidth: '500px' }}>
          <Stepper
            steps={[
              {
                id: 'order',
                label: 'Order Placed',
                description: 'Your order has been confirmed',
                icon: <Package size={18} />,
              },
              {
                id: 'processing',
                label: 'Processing',
                description: 'Preparing your items for shipment',
                icon: <CheckCircle size={18} />,
              },
              {
                id: 'shipped',
                label: 'Shipped',
                description: 'Package is on its way',
                icon: <Truck size={18} />,
              },
              {
                id: 'delivered',
                label: 'Delivered',
                description: 'Arrives by Friday, Nov 24',
                icon: <Home size={18} />,
              },
            ]}
            activeStep={activeStep}
            onStepClick={setActiveStep}
            orientation="vertical"
            size="md"
          />
        </div>
      );
    },
  },
  {
    title: 'Alternative Label - Compact',
    render: () => {
      const [activeStep, setActiveStep] = useState(0);

      return (
        <div style={{ padding: 'var(--spacing-8)' }}>
          <Stepper
            steps={[
              { id: 'cart', label: 'Cart' },
              { id: 'details', label: 'Details', optional: true },
              { id: 'payment', label: 'Payment' },
              { id: 'review', label: 'Review' },
              { id: 'done', label: 'Done' },
            ]}
            activeStep={activeStep}
            onStepClick={setActiveStep}
            orientation="horizontal"
            alternativeLabel={true}
            size="sm"
            connectorStyle="dashed"
          />
        </div>
      );
    },
  },
];

export default previews;
