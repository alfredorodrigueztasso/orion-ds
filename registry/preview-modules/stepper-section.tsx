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
      const [currentStep, setCurrentStep] = useState(1);

      return (
        <div style={{ padding: 'var(--spacing-8)' }}>
          <Stepper
            steps={[
              { id: 'account', title: 'Account Details' },
              { id: 'payment', title: 'Payment Info' },
              { id: 'review', title: 'Review & Confirm' },
              { id: 'complete', title: 'Complete' },
            ]}
            currentStep={currentStep}
            onStepClick={(index) => setCurrentStep(index)}
            clickable
            orientation="horizontal"
          />
        </div>
      );
    },
  },
  {
    title: 'With Icons and Descriptions',
    render: () => {
      const [currentStep, setCurrentStep] = useState(1);

      return (
        <div style={{ padding: 'var(--spacing-8)' }}>
          <Stepper
            steps={[
              {
                id: 'details',
                title: 'Personal Details',
                description: 'Enter your information',
                icon: <User size={18} />,
              },
              {
                id: 'payment',
                title: 'Payment Method',
                description: 'Choose how to pay',
                icon: <CreditCard size={18} />,
              },
              {
                id: 'confirm',
                title: 'Confirmation',
                description: 'Review your order',
                icon: <CheckCircle size={18} />,
              },
            ]}
            currentStep={currentStep}
            onStepClick={(index) => setCurrentStep(index)}
            clickable
            size="lg"
          />
        </div>
      );
    },
  },
  {
    title: 'With Error State',
    render: () => {
      const [currentStep] = useState(2);

      return (
        <div style={{ padding: 'var(--spacing-8)' }}>
          <Stepper
            steps={[
              { id: 'shipping', title: 'Shipping Address' },
              {
                id: 'payment',
                title: 'Payment Details',
                error: true,
                errorMessage: 'Card number is invalid',
              },
              { id: 'review', title: 'Order Review' },
            ]}
            currentStep={currentStep}
            orientation="horizontal"
          />
        </div>
      );
    },
  },
  {
    title: 'Vertical Stepper',
    render: () => {
      const [currentStep, setCurrentStep] = useState(2);

      return (
        <div style={{ padding: 'var(--spacing-8)', maxWidth: '500px' }}>
          <Stepper
            steps={[
              {
                id: 'order',
                title: 'Order Placed',
                description: 'Your order has been confirmed',
                icon: <Package size={18} />,
              },
              {
                id: 'processing',
                title: 'Processing',
                description: 'Preparing your items for shipment',
                icon: <CheckCircle size={18} />,
              },
              {
                id: 'shipped',
                title: 'Shipped',
                description: 'Package is on its way',
                icon: <Truck size={18} />,
              },
              {
                id: 'delivered',
                title: 'Delivered',
                description: 'Arrives by Friday, Nov 24',
                icon: <Home size={18} />,
              },
            ]}
            currentStep={currentStep}
            onStepClick={(index) => setCurrentStep(index)}
            clickable
            orientation="vertical"
            size="md"
          />
        </div>
      );
    },
  },
  {
    title: 'Compact Horizontal - Scrollable on Mobile',
    render: () => {
      const [currentStep, setCurrentStep] = useState(0);

      return (
        <div style={{ padding: 'var(--spacing-8)' }}>
          <Stepper
            steps={[
              { id: 'cart', title: 'Cart' },
              { id: 'details', title: 'Details', optional: true },
              { id: 'payment', title: 'Payment' },
              { id: 'review', title: 'Review' },
              { id: 'done', title: 'Done' },
            ]}
            currentStep={currentStep}
            onStepClick={(index) => setCurrentStep(index)}
            clickable
            orientation="horizontal"
            size="sm"
            scrollable
          />
        </div>
      );
    },
  },
];

export default previews;
