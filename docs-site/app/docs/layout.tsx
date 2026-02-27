import OnThisPage from '@/components/OnThisPage';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        display: 'flex',
        gap: 'var(--spacing-8)',
        maxWidth: '1400px',
        width: '100%',
        margin: '0 auto',
      }}
    >
      {/* Main Content */}
      <div style={{ flex: 1, minWidth: 0 }}>
        {children}
      </div>

      {/* Table of Contents Sidebar */}
      <aside
        style={{
          width: '220px',
          flexShrink: 0,
          position: 'sticky',
          top: '80px',
          height: 'fit-content',
        }}
      >
        <OnThisPage />
      </aside>
    </div>
  );
}
