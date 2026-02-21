/**
 * Preview module for Combobox component
 * Autocomplete/typeahead input
 */

import React, { useState } from 'react';
import { Combobox } from '@orion-ds/react';

export const previews = [
  {
    title: 'Country Selection',
    render: () => {
      const [value, setValue] = useState<string | null>(null);

      const countries = [
        { value: 'us', label: 'United States' },
        { value: 'uk', label: 'United Kingdom' },
        { value: 'ca', label: 'Canada' },
        { value: 'au', label: 'Australia' },
        { value: 'de', label: 'Germany' },
        { value: 'fr', label: 'France' },
        { value: 'jp', label: 'Japan' },
        { value: 'br', label: 'Brazil' },
      ];

      return (
        <div style={{ maxWidth: '400px' }}>
          <Combobox
            label="Select a country"
            placeholder="Search countries..."
            options={countries}
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
          {value && (
            <p style={{ marginTop: 'var(--spacing-2)', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              Selected: {countries.find((c) => c.value === value)?.label}
            </p>
          )}
        </div>
      );
    },
  },
  {
    title: 'Programming Languages',
    render: () => {
      const [value, setValue] = useState<string | null>(null);

      const languages = [
        { value: 'js', label: 'JavaScript' },
        { value: 'ts', label: 'TypeScript' },
        { value: 'py', label: 'Python' },
        { value: 'rb', label: 'Ruby' },
        { value: 'go', label: 'Go' },
        { value: 'rs', label: 'Rust' },
        { value: 'java', label: 'Java' },
        { value: 'cpp', label: 'C++' },
      ];

      return (
        <div style={{ maxWidth: '400px' }}>
          <Combobox
            label="Programming language"
            placeholder="Type to search..."
            options={languages}
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
        </div>
      );
    },
  },
  {
    title: 'With Descriptions',
    render: () => {
      const [value, setValue] = useState<string | null>(null);

      const frameworks = [
        { value: 'react', label: 'React', description: 'A JavaScript library for building user interfaces', group: 'Frontend' },
        { value: 'vue', label: 'Vue', description: 'The Progressive JavaScript Framework', group: 'Frontend' },
        { value: 'angular', label: 'Angular', description: 'Platform for building mobile and desktop apps', group: 'Frontend' },
        { value: 'node', label: 'Node.js', description: 'JavaScript runtime built on Chrome V8', group: 'Backend' },
        { value: 'django', label: 'Django', description: 'The web framework for perfectionists', group: 'Backend' },
        { value: 'rails', label: 'Ruby on Rails', description: 'Web framework written in Ruby', group: 'Backend' },
      ];

      return (
        <div style={{ maxWidth: '400px' }}>
          <Combobox
            label="Framework"
            placeholder="Search frameworks..."
            options={frameworks}
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
        </div>
      );
    },
  },
];

export default previews;
