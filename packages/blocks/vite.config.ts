import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react(), dts({ insertTypesEntry: true })],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'OrionBlocks',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'cjs'}`,
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        '@orion-ds/react',
        '@orion-ds/react/sections',
        '@orion-ds/react/client',
        '@orion-ds/react/styles.css',
        '@orion-ds/react/theme.css',
        'lucide-react',
        'recharts',
        'date-fns',
        'react-markdown',
        'react-syntax-highlighter',
        'remark-gfm',
        'refractor',
        '@dnd-kit/core',
        '@dnd-kit/sortable',
        '@dnd-kit/utilities',
      ],
      output: {
        // Enable tree-shaking by preserving module structure
        preserveModules: true,
        preserveModulesRoot: 'src',
        // Rename CSS file from 'style.css' to 'blocks.css'
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'blocks.css';
          }
          return assetInfo.name || 'assets/[name]-[hash][extname]';
        },
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@orion-ds/react': 'OrionReact',
          'lucide-react': 'LucideReact',
          recharts: 'Recharts',
          '@dnd-kit/core': 'DndKitCore',
          '@dnd-kit/sortable': 'DndKitSortable',
        },
      },
    },
    cssCodeSplit: false,
  },
});
