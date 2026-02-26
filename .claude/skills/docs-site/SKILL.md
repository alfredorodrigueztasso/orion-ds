---
name: docs-site
description: "Start, build, and validate Next.js docs site. Auto-triggers when user says \"docs\", \"open docs\", \"start docs site\", \"build docs\", \"docs development\"."
allowed-tools: ["Bash"]
---

# Docs Site — Next.js App Router Documentation

Manages the Orion design system documentation site (docs-site/).

## What This Does

1. **Start dev server** - Next.js App Router on port 3001
2. **Build static site** - Production build validation
3. **Check for errors** - Detect broken components/imports
4. **Live hot-reload** - Watch mode for documentation updates
5. **Validate component usage** - Ensure docs use @orion-ds/react components

**Documentation site**:
- Location: `docs-site/`
- Type: Next.js 14 with App Router
- Port: 3001 (default)
- Contains: Component guides, examples, setup instructions

**Runtime**: ~10-30 seconds to start dev server

## Usage

```bash
/docs-site start
/docs-site build
/docs-site check    # Validate build without starting
```

## Execution Steps

### Start Command (`/docs-site start`)

1. Check if port 3001 is available
2. Navigate to docs-site/
3. Run `npm run dev`
4. Wait for "Ready in X.XXs"
5. Show URL: http://localhost:3001

### Build Command (`/docs-site build`)

1. Check Node version (must be 18+)
2. Navigate to docs-site/
3. Run `npm run build`
4. Report build time and output size
5. Check for warnings/errors

### Check Command (`/docs-site check`)

1. Validate next.config.js
2. Check tsconfig.json
3. Verify package.json dependencies
4. No actual build, just validation

## Commands (Sequential)

```bash
# Check if port is in use
lsof -ti :3001 2>/dev/null

# Start dev server
cd "/Users/alfredo/Documents/AI First DS Library/docs-site" && npm run dev

# Build for production
cd "/Users/alfredo/Documents/AI First DS Library/docs-site" && npm run build

# Production server (after build)
cd "/Users/alfredo/Documents/AI First DS Library/docs-site" && npm run start
```

## Auto-Trigger Patterns

This skill auto-triggers when user says:
- "start docs site"
- "open docs"
- "docs development"
- "build docs"
- "run docs"
- "deploy docs site"

## Success Output Format — Start

```
🚀 Starting Docs Site...

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ Port 3001 available

✅ Dependencies installed

✅ Dev server starting...

Ready in 3.5s

▲ Next.js 14.0.3
- Local:        http://localhost:3001
- Environments: .env.local

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📖 Docs site running!

Open: http://localhost:3001

Features:
- Hot reload (save to refresh)
- Server components (next/server)
- App Router navigation
- Orion component library integrated

Next steps:
1. Open browser: http://localhost:3001
2. Edit files in docs-site/app/
3. Changes auto-reload
4. Ctrl+C to stop server

Useful commands:
- /docs-site build       → Production build
- /docs-site check       → Validate config
- npm run build && npm start  → Test production build locally

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## Success Output Format — Build

```
🔨 Building Docs Site...

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ Build configuration valid

✅ TypeScript check passed

✅ Building Next.js production bundle...
   - Compiling 45 pages
   - Optimizing assets
   - Generating preload tags

✅ Build completed in 42.3s

Output:
- .next/                        2.5 MB
- .next/static/                 1.8 MB
- .next/server/pages/           650 KB

Performance:
- Route: / (index)              34 KB
- Route: /components            2.1 MB (loaded on demand)
- Route: /setup                 89 KB

CSS:
- Global CSS: 64 KB
- CSS Modules: 156 KB

Images optimized:
- 12 images processed
- ~200 KB savings with WebP

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ Build successful!

Next steps:
1. Test production build: npm run start
2. Deploy to Vercel: vercel deploy
3. Or deploy to custom server: npm run build && npm start

Commands:
- /docs-site start       → Restart dev server
- /docs-site build       → Rebuild (clears cache)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## Failure Output Format

```
🔨 Building Docs Site...

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

❌ TypeScript compilation failed

   Error in docs-site/app/components/[name]/page.tsx:23:15

   Type 'undefined' is not assignable to type 'string'

   const name: string = params.name;  // params.name might be undefined

   Fix:
   1. Check function parameters
   2. Add proper type guards
   3. Use optional chaining: params?.name

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

❌ BUILD FAILED

Fix errors above and run:
/docs-site build

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## Failure Output Format — Port in Use

```
🚀 Starting Docs Site...

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚠️  Port 3001 is already in use

Process: node (PID: 1234)

Options:
1. Kill existing process:
   kill 1234

2. Use different port:
   PORT=3002 npm run dev

3. Kill and start fresh:
   kill 1234 && npm run dev

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## Docs Site Structure

```
docs-site/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout (Providers, ThemeProvider)
│   ├── page.tsx           # Home page
│   ├── components/        # Component documentation
│   │   ├── page.tsx       # Component index
│   │   └── [name]/
│   │       └── page.tsx   # Individual component page
│   ├── setup/             # Setup guides
│   ├── examples/          # Usage examples
│   └── api/               # API routes (if needed)
├── components/            # React components (wrapper, layout)
├── lib/                   # Utilities
├── public/                # Static assets
├── next.config.js         # Next.js config
├── tsconfig.json          # TypeScript config
├── package.json
└── .env.local            # Environment variables (port, etc.)
```

## Key Features (v4.0.0+)

### Server Components

The docs site uses Next.js 14 Server Components:

```typescript
// app/components/page.tsx - Server Component (default)
export default async function ComponentsPage() {
  const components = await getComponentRegistry();
  return <div>{/* render */}</div>;
}
```

### Hydration Safety

`Providers.tsx` wraps client components for hydration:

```typescript
// app/layout.tsx
import { Providers } from './components/Providers';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
```

### Dynamic Imports

For heavy components, use dynamic imports:

```typescript
import dynamic from 'next/dynamic';

const ChatDemo = dynamic(() => import('./ChatDemo'), {
  loading: () => <div>Loading...</div>,
});
```

## Development Workflow

```bash
# 1. Start dev server
/docs-site start

# 2. Edit documentation
#    (Changes auto-reload)

# 3. Before PR/release, build
/docs-site build

# 4. Test production build locally
npm run start

# 5. If all good, deploy
vercel deploy  # or git push to GitHub
```

## Environment Variables

Check `.env.local`:

```bash
# Port (default 3001)
PORT=3001

# Next.js
NEXT_PUBLIC_SITE_URL=http://localhost:3001
```

## Deployment

### Vercel (Recommended)

```bash
vercel deploy
# or push to GitHub → auto-deploys
```

### Self-Hosted

```bash
# Build
npm run build

# Start production server
npm run start

# Or with PM2
pm2 start "npm run start" --name "orion-docs"
```

## Common Issues & Fixes

### Issue: Port 3001 in use

**Solution**:
```bash
kill $(lsof -ti :3001)  # Kill process using 3001
/docs-site start         # Start fresh
```

### Issue: "Cannot find module"

**Solution**:
```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
/docs-site build
```

### Issue: TypeScript errors

**Solution**:
```bash
# Check types
npm run type-check

# Fix errors in app/ directory
# Usually missing type annotations on Server Component params
```

### Issue: Components not updating

**Solution**:
```bash
# Rebuild component registry
npm run build:registry

# Or restart dev server
/docs-site start
```

## Testing Docs Locally

Before deploying:

```bash
# Build production bundle
/docs-site build

# Start production server
npm run start

# Test at http://localhost:3000 (different from 3001)

# Verify:
# - All pages load
# - No 404 errors
# - Components render
# - No console errors
```

## Integration with Orion

The docs site pulls from the registry:

1. **Registry data**: `registry/` JSON files
2. **Component imports**: `@orion-ds/react` package
3. **Tokens**: `@orion-ds/react/styles.css`
4. **Themes**: `ThemeProvider` in Providers.tsx

If registry changes, docs auto-reflect them after rebuild.

## Related Skills

**Before docs-site work**:
- `/storybook` - Component visual development
- `/update-component` - Update component docs

**After docs-site changes**:
- `/pr-ready` - Prepare PR with docs updates
- `/pre-release` - Gate check includes docs validation

**Deploy docs**:
- GitHub Actions: Auto-deploy on push to main
- Vercel: `vercel deploy` command
- Manual: `npm run build && npm run start`

## Exit Codes

- **0** = Dev server running / build successful
- **1** = Build failed / TypeScript errors
- **2** = Port in use

## References

- Next.js docs: https://nextjs.org/docs
- Vercel deployment: https://vercel.com/docs/frameworks/nextjs
- TypeScript in Next.js: https://nextjs.org/docs/basic-features/typescript
- Environment variables: https://nextjs.org/docs/basic-features/environment-variables
