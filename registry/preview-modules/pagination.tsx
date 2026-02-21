/**
 * Preview module for Pagination component
 * Page navigation controls
 */

import React, { useState } from 'react';
import { Pagination } from '@orion-ds/react';

export const previews = [
  {
    title: 'Basic Pagination',
    render: () => {
      const [current, setCurrent] = useState(1);

      return (
        <div style={{ display: 'grid', gap: 'var(--spacing-3)' }}>
          <Pagination
            total={100}
            current={current}
            pageSize={10}
            onPageChange={setCurrent}
          />
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            Page {current} of 10
          </p>
        </div>
      );
    },
  },
  {
    title: 'Large Dataset',
    render: () => {
      const [current, setCurrent] = useState(5);

      return (
        <div style={{ display: 'grid', gap: 'var(--spacing-3)' }}>
          <Pagination
            total={500}
            current={current}
            pageSize={10}
            onPageChange={setCurrent}
          />
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            Showing {(current - 1) * 10 + 1}-{Math.min(current * 10, 500)} of 500 items
          </p>
        </div>
      );
    },
  },
  {
    title: 'Different Page Sizes',
    render: () => {
      const [current, setCurrent] = useState(1);
      const [pageSize, setPageSize] = useState(20);

      return (
        <div style={{ display: 'grid', gap: 'var(--spacing-4)' }}>
          <div style={{ display: 'flex', gap: 'var(--spacing-3)', alignItems: 'center' }}>
            <label style={{ fontSize: '0.875rem' }}>Items per page:</label>
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setCurrent(1);
              }}
              style={{
                padding: 'var(--spacing-2)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-control)',
              }}
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
          </div>
          <Pagination
            total={200}
            current={current}
            pageSize={pageSize}
            onPageChange={setCurrent}
          />
        </div>
      );
    },
  },
];

export default previews;
