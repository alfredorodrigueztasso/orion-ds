import path from 'path';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import preserveDirectives from 'rollup-plugin-preserve-directives';
import { defineConfig } from 'vite';

export const COMMON_EXTERNALS = [
  'react',
  'react/jsx-runtime',
  'react/jsx-dev-runtime',
  'react-dom',
  'react-dom/client',
  'react-dom/server',
  'lucide-react',
  'react-syntax-highlighter',
  'react-syntax-highlighter/dist/esm/styles/prism',
  'react-markdown',
  'remark-gfm',
  'refractor',
  'recharts',
  'date-fns',
  '@dnd-kit/core',
  '@dnd-kit/sortable',
  '@dnd-kit/utilities',
];

export const BLOCKS_EXTERNALS = [
  '@orion-ds/react',
  '@orion-ds/react/sections',
  '@orion-ds/react/client',
  '@orion-ds/react/styles.css',
  '@orion-ds/react/theme.css',
];

export interface ViteConfigOptions {
  entry: string | Record<string, string>;
  name: string;
  extraExternals?: string[];
  resolveAlias?: Record<string, string>;
  cssCodeSplit?: boolean;
  assetFileNames?: (assetInfo: { name?: string }) => string;
}

export function createViteConfig(options: ViteConfigOptions) {
  return defineConfig({
    plugins: [react(), dts({ insertTypesEntry: true }), preserveDirectives()],
    resolve: options.resolveAlias ? { alias: options.resolveAlias } : undefined,
    build: {
      lib: {
        entry: options.entry,
        name: options.name,
        formats: ['es', 'cjs'] as const,
        fileName: typeof options.entry === 'string'
          ? (format: string) => `index.${format === 'es' ? 'mjs' : 'cjs'}`
          : (format: string, entryAlias: string) =>
              `${entryAlias}.${format === 'es' ? 'mjs' : 'cjs'}`,
      },
      cssCodeSplit: options.cssCodeSplit ?? true,
      rollupOptions: {
        external: [
          ...COMMON_EXTERNALS,
          ...(options.extraExternals || []),
        ],
        onwarn(warning, warn) {
          // Suppress Rollup's warning about module-level directives (like "use client")
          if (warning.code === 'MODULE_LEVEL_DIRECTIVE') return;
          warn(warning);
        },
        output: {
          preserveModules: true,
          preserveModulesRoot: 'src',
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
          },
          ...(options.assetFileNames
            ? { assetFileNames: options.assetFileNames }
            : {}),
        },
      },
      sourcemap: false,
      emptyOutDir: true,
    },
  });
}
