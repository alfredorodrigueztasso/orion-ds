/**
 * Preview module for SearchInput component
 * Search field with icon and loading state
 */

import React, { useState } from 'react';
import { SearchInput } from '@orion-ds/react';

export const previews = [
  {
    title: 'Basic Search',
    render: () => {
      const [query, setQuery] = useState('');

      return (
        <div style={{ display: 'grid', gap: 'var(--spacing-3)', maxWidth: '400px' }}>
          <SearchInput
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onSearch={(q) => console.log('Searching:', q)}
          />
          {query && (
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              Query: {query}
            </p>
          )}
        </div>
      );
    },
  },
  {
    title: 'Sizes',
    render: () => (
      <div style={{ display: 'grid', gap: 'var(--spacing-4)', maxWidth: '400px' }}>
        <SearchInput size="sm" placeholder="Small search" />
        <SearchInput placeholder="Medium search (default)" />
        <SearchInput size="lg" placeholder="Large search" />
      </div>
    ),
  },
  {
    title: 'Loading State',
    render: () => {
      const [loading, setLoading] = useState(false);
      const [query, setQuery] = useState('');

      const handleSearch = (q: string) => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          console.log('Search completed:', q);
        }, 2000);
      };

      return (
        <div style={{ display: 'grid', gap: 'var(--spacing-3)', maxWidth: '400px' }}>
          <SearchInput
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onSearch={handleSearch}
            loading={loading}
          />
          {loading && (
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              Searching...
            </p>
          )}
        </div>
      );
    },
  },
  {
    title: 'With Clear Button',
    render: () => {
      const [query, setQuery] = useState('Initial search query');

      return (
        <div style={{ maxWidth: '400px' }}>
          <SearchInput
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onClear={() => setQuery('')}
            onSearch={(q) => console.log('Searching:', q)}
          />
        </div>
      );
    },
  },
];

export default previews;
