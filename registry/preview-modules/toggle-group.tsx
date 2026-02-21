/**
 * Preview module for ToggleGroup component
 * Multiple toggle controls with single or multiple selection
 */

import React, { useState } from 'react';
import { ToggleGroup } from '@orion-ds/react';
import { AlignLeft, AlignCenter, AlignRight, AlignJustify, Bold, Italic, Underline } from 'lucide-react';

export const previews = [
  {
    title: 'Single Selection',
    render: () => {
      const [value, setValue] = useState('center');

      return (
        <div style={{ display: 'grid', gap: 'var(--spacing-3)' }}>
          <ToggleGroup type="single" value={value} onValueChange={setValue}>
            <ToggleGroup.Item value="left" aria-label="Align left">
              <AlignLeft size={16} />
            </ToggleGroup.Item>
            <ToggleGroup.Item value="center" aria-label="Align center">
              <AlignCenter size={16} />
            </ToggleGroup.Item>
            <ToggleGroup.Item value="right" aria-label="Align right">
              <AlignRight size={16} />
            </ToggleGroup.Item>
            <ToggleGroup.Item value="justify" aria-label="Align justify">
              <AlignJustify size={16} />
            </ToggleGroup.Item>
          </ToggleGroup>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            Selected: {value}
          </p>
        </div>
      );
    },
  },
  {
    title: 'Multiple Selection',
    render: () => {
      const [value, setValue] = useState(['bold']);

      return (
        <div style={{ display: 'grid', gap: 'var(--spacing-3)' }}>
          <ToggleGroup type="multiple" value={value} onValueChange={setValue}>
            <ToggleGroup.Item value="bold" aria-label="Bold">
              <Bold size={16} />
            </ToggleGroup.Item>
            <ToggleGroup.Item value="italic" aria-label="Italic">
              <Italic size={16} />
            </ToggleGroup.Item>
            <ToggleGroup.Item value="underline" aria-label="Underline">
              <Underline size={16} />
            </ToggleGroup.Item>
          </ToggleGroup>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            Selected: {value.length > 0 ? value.join(', ') : 'none'}
          </p>
        </div>
      );
    },
  },
  {
    title: 'With Labels',
    render: () => {
      const [view, setView] = useState('grid');

      return (
        <div style={{ display: 'grid', gap: 'var(--spacing-3)' }}>
          <ToggleGroup type="single" value={view} onValueChange={setView}>
            <ToggleGroup.Item value="list">
              List View
            </ToggleGroup.Item>
            <ToggleGroup.Item value="grid">
              Grid View
            </ToggleGroup.Item>
            <ToggleGroup.Item value="table">
              Table View
            </ToggleGroup.Item>
          </ToggleGroup>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            Current view: {view}
          </p>
        </div>
      );
    },
  },
  {
    title: 'Sizes and Variants',
    render: () => (
      <div style={{ display: 'grid', gap: 'var(--spacing-4)' }}>
        <div>
          <p style={{ marginBottom: 'var(--spacing-2)', fontSize: '0.875rem' }}>Small</p>
          <ToggleGroup type="single" size="sm">
            <ToggleGroup.Item value="1">One</ToggleGroup.Item>
            <ToggleGroup.Item value="2">Two</ToggleGroup.Item>
            <ToggleGroup.Item value="3">Three</ToggleGroup.Item>
          </ToggleGroup>
        </div>
        <div>
          <p style={{ marginBottom: 'var(--spacing-2)', fontSize: '0.875rem' }}>Medium (Default)</p>
          <ToggleGroup type="single">
            <ToggleGroup.Item value="1">One</ToggleGroup.Item>
            <ToggleGroup.Item value="2">Two</ToggleGroup.Item>
            <ToggleGroup.Item value="3">Three</ToggleGroup.Item>
          </ToggleGroup>
        </div>
        <div>
          <p style={{ marginBottom: 'var(--spacing-2)', fontSize: '0.875rem' }}>Large</p>
          <ToggleGroup type="single" size="lg">
            <ToggleGroup.Item value="1">One</ToggleGroup.Item>
            <ToggleGroup.Item value="2">Two</ToggleGroup.Item>
            <ToggleGroup.Item value="3">Three</ToggleGroup.Item>
          </ToggleGroup>
        </div>
        <div>
          <p style={{ marginBottom: 'var(--spacing-2)', fontSize: '0.875rem' }}>Outline Variant</p>
          <ToggleGroup type="single" variant="outline">
            <ToggleGroup.Item value="1">One</ToggleGroup.Item>
            <ToggleGroup.Item value="2">Two</ToggleGroup.Item>
            <ToggleGroup.Item value="3">Three</ToggleGroup.Item>
          </ToggleGroup>
        </div>
      </div>
    ),
  },
];

export default previews;
