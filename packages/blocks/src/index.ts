/**
 * @deprecated This package is deprecated. Use @orion-ds/react/blocks and @orion-ds/react/templates instead.
 *
 * @orion-ds/blocks - Premium Sections & Templates (DEPRECATED)
 *
 * ⚠️  DEPRECATION NOTICE
 * This package is maintained for backward compatibility only.
 * All blocks and templates have been consolidated into @orion-ds/react as subpath exports.
 *
 * MIGRATION:
 * - Old: `import { Hero } from '@orion-ds/blocks'`
 * - New: `import { Hero } from '@orion-ds/react/blocks'`
 *
 * - Old: `import { DashboardTemplate } from '@orion-ds/blocks'`
 * - New: `import { DashboardTemplate } from '@orion-ds/react/templates'`
 *
 * - Old: `import '@orion-ds/blocks/styles.css'`
 * - New: `import '@orion-ds/react/blocks.css'`
 *
 * This re-export wrapper will be removed in a future major version.
 * Please update your imports to use @orion-ds/react/blocks and @orion-ds/react/templates.
 *
 * @packageDocumentation
 */

// Re-export from @orion-ds/react for backward compatibility
export * from "@orion-ds/react/blocks";
export * from "@orion-ds/react/templates";
