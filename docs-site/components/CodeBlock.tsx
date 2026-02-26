import { codeToHtml } from 'shiki';
import CopyButton from './CopyButton';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default async function CodeBlock({ code, language = 'tsx' }: CodeBlockProps) {
  let highlightedHtml = '';

  try {
    highlightedHtml = await codeToHtml(code, {
      lang: language,
      themes: {
        dark: 'github-dark',
        light: 'github-light',
      },
      defaultColor: false,
    });
  } catch (error) {
    console.warn(`Failed to highlight code for language ${language}:`, error);
    // Fallback to plain text
    highlightedHtml = `<pre style="background: var(--surface-sunken); padding: var(--spacing-4); border-radius: var(--radius-control); border: 1px solid var(--border-subtle);"><code style="font-family: var(--font-mono); color: var(--text-primary);">${escapeHtml(code)}</code></pre>`;
  }

  return (
    <div style={{ position: 'relative', marginBottom: 'var(--spacing-4)' }}>
      <CopyButton code={code} />
      <div
        style={{
          borderRadius: 'var(--radius-control)',
          overflow: 'auto',
          border: '1px solid var(--border-subtle)',
          fontSize: '0.9rem',
          lineHeight: '1.5',
        }}
        dangerouslySetInnerHTML={{ __html: highlightedHtml }}
      />
    </div>
  );
}

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
