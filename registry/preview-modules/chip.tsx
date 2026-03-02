/**
 * Preview module for Chip component
 * Tags and filter labels
 */

import React, { useState } from 'react';
import { Chip } from '@orion-ds/react';
import { Tag, X } from 'lucide-react';

const VariantsPreview = () => (
  <div style={{ display: 'flex', gap: 'var(--spacing-3)', flexWrap: 'wrap' }}>
    <Chip>Default</Chip>
    <Chip variant="brand">Brand</Chip>
    <Chip variant="success">Success</Chip>
    <Chip variant="warning">Warning</Chip>
    <Chip variant="error">Error</Chip>
  </div>
);

const SizesPreview = () => (
  <div style={{ display: 'flex', gap: 'var(--spacing-3)', alignItems: 'center', flexWrap: 'wrap' }}>
    <Chip size="sm">Small</Chip>
    <Chip>Medium</Chip>
    <Chip size="lg">Large</Chip>
  </div>
);

const RemovableChipsPreview = () => {
  const [chips, setChips] = useState(['React', 'TypeScript', 'Next.js', 'Tailwind']);

  return (
    <div style={{ display: 'flex', gap: 'var(--spacing-3)', flexWrap: 'wrap' }}>
      {chips.map((chip) => (
        <Chip
          key={chip}
          onRemove={() => setChips(chips.filter((c) => c !== chip))}
        >
          {chip}
        </Chip>
      ))}
    </div>
  );
};

const SelectableChipsPreview = () => {
  const [selected, setSelected] = useState<string[]>(['frontend']);

  const toggleChip = (value: string) => {
    setSelected(
      selected.includes(value)
        ? selected.filter((v) => v !== value)
        : [...selected, value]
    );
  };

  return (
    <div style={{ display: 'flex', gap: 'var(--spacing-3)', flexWrap: 'wrap' }}>
      <Chip
        selected={selected.includes('frontend')}
        onClick={() => toggleChip('frontend')}
      >
        Frontend
      </Chip>
      <Chip
        selected={selected.includes('backend')}
        onClick={() => toggleChip('backend')}
      >
        Backend
      </Chip>
      <Chip
        selected={selected.includes('design')}
        onClick={() => toggleChip('design')}
      >
        Design
      </Chip>
      <Chip
        selected={selected.includes('devops')}
        onClick={() => toggleChip('devops')}
      >
        DevOps
      </Chip>
    </div>
  );
};

export const previews = [
  {
    title: 'Variants',
    render: VariantsPreview,
  },
  {
    title: 'Sizes',
    render: SizesPreview,
  },
  {
    title: 'Removable Chips',
    render: RemovableChipsPreview,
  },
  {
    title: 'Selectable Chips (Filter)',
    render: SelectableChipsPreview,
  },
];

export default previews;
