'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({ code, language = 'tsx' }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div style={{ position: 'relative', marginBottom: 'var(--spacing-4)' }}>
      <button
        onClick={handleCopy}
        aria-label={copied ? 'Copied!' : 'Copy code'}
        style={{
          position: 'absolute',
          top: 'var(--spacing-3)',
          right: 'var(--spacing-3)',
          padding: 'var(--spacing-2)',
          background: 'var(--surface-layer)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-sm)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--spacing-2)',
          fontSize: '0.875rem',
          color: 'var(--text-secondary)',
          transition: 'all 0.2s',
          zIndex: 10,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'var(--surface-subtle)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'var(--surface-layer)';
        }}
      >
        {copied ? (
          <>
            <Check size={16} />
            Copied!
          </>
        ) : (
          <>
            <Copy size={16} />
            Copy
          </>
        )}
      </button>
      <pre
        style={{
          padding: 'var(--spacing-4)',
          background: 'var(--surface-sunken)',
          borderRadius: 'var(--radius-control)',
          overflow: 'x-auto',
          border: '1px solid var(--border-subtle)',
          fontSize: '0.9rem',
          lineHeight: '1.5',
        }}
      >
        <code
          className={`language-${language}`}
          style={{
            fontFamily: 'var(--font-mono)',
            color: 'var(--text-primary)',
          }}
        >
          {code}
        </code>
      </pre>
    </div>
  );
}
