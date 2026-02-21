/**
 * Preview module for Toggle component
 * Pressable button controls
 */

import React, { useState } from 'react';
import { Toggle } from '@orion-ds/react';
import { Bold, Italic, Underline } from 'lucide-react';

export const previews = [
  {
    title: 'Interactive Toggle',
    render: () => {
      const [pressed, setPressed] = useState(false);

      return (
        <div style={{ display: 'flex', gap: 'var(--spacing-3)', alignItems: 'center' }}>
          <Toggle pressed={pressed} onPressedChange={setPressed}>
            Toggle me
          </Toggle>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            State: {pressed ? 'Pressed' : 'Unpressed'}
          </p>
        </div>
      );
    },
  },
  {
    title: 'Text Formatting',
    render: () => {
      const [bold, setBold] = useState(false);
      const [italic, setItalic] = useState(false);
      const [underline, setUnderline] = useState(false);

      return (
        <div style={{ display: 'grid', gap: 'var(--spacing-4)' }}>
          <div style={{ display: 'flex', gap: 'var(--spacing-2)' }}>
            <Toggle pressed={bold} onPressedChange={setBold} aria-label="Bold">
              <Bold size={16} />
            </Toggle>
            <Toggle pressed={italic} onPressedChange={setItalic} aria-label="Italic">
              <Italic size={16} />
            </Toggle>
            <Toggle pressed={underline} onPressedChange={setUnderline} aria-label="Underline">
              <Underline size={16} />
            </Toggle>
          </div>
          <p
            style={{
              fontWeight: bold ? 'bold' : 'normal',
              fontStyle: italic ? 'italic' : 'normal',
              textDecoration: underline ? 'underline' : 'none',
            }}
          >
            Preview text with formatting
          </p>
        </div>
      );
    },
  },
  {
    title: 'Variants',
    render: () => (
      <div style={{ display: 'flex', gap: 'var(--spacing-3)', flexWrap: 'wrap' }}>
        <Toggle variant="default">Default</Toggle>
        <Toggle variant="outline">Outline</Toggle>
        <Toggle variant="default" pressed>Default Pressed</Toggle>
        <Toggle variant="outline" pressed>Outline Pressed</Toggle>
      </div>
    ),
  },
  {
    title: 'Sizes',
    render: () => (
      <div style={{ display: 'flex', gap: 'var(--spacing-3)', alignItems: 'center', flexWrap: 'wrap' }}>
        <Toggle size="sm">Small</Toggle>
        <Toggle size="md">Medium</Toggle>
        <Toggle size="lg">Large</Toggle>
      </div>
    ),
  },
];

export default previews;
