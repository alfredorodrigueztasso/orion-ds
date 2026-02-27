---
name: registry-sync
description: "Sync registry for @orion-ds/react + @orion-ds/blocks. Regenerate registry JSONs, rebuild HTTP API, verify MCP tools. Auto-triggers after component changes, before releases, when user says \"sync registry\", \"update registry\", \"rebuild registry\"."
allowed-tools: ["Bash"]
model: haiku
---

# Registry Sync — Regenerate Registry & HTTP API

Keeps registry in sync across @orion-ds/react (free components) and @orion-ds/blocks (premium sections/templates).

## What This Does

1. **Generate registry** - Scan components, rebuild registry JSON files
2. **Build HTTP API** - Update `public/r/` endpoints
3. **Verify MCP tools** - Test that all 9 MCP tools respond
4. **Validate imports** - Check CLI can fetch from registry
5. **Report changes** - Show what was added/updated/removed

**Critical for**: CLI (`@orion-ds/cli add button`), MCP Server, docs site

**Runtime**: ~15-30 seconds

## Usage

```bash
/registry-sync
/registry-sync --verbose      # Show every item
/registry-sync --react-only   # Only @orion-ds/react
/registry-sync --blocks-only  # Only @orion-ds/blocks
/registry-sync --mcp-test     # Test MCP tools
```

## Execution Steps

1. **Validate monorepo** - Check both packages exist
2. **Generate @orion-ds/react registry** - Read components/, sections/
3. **Generate @orion-ds/blocks registry** - Read components/ (premium)
4. **Merge registries** - Combine into single index
5. **Build HTTP API** - Create `public/r/` endpoints
6. **Validate registry** - Check JSON structure
7. **Test MCP tools** - Verify all 9 tools work
8. **Report results** - Summary of changes

## Commands (Sequential)

```bash
# Step 1: Generate React registry
cd "/Users/alfredo/Documents/AI First DS Library" && npm run build:registry

# Step 2: Generate Blocks registry (if script exists)
cd "/Users/alfredo/Documents/AI First DS Library/packages/blocks" && npm run build:registry 2>/dev/null || true

# Step 3: Build HTTP API
cd "/Users/alfredo/Documents/AI First DS Library" && npm run build:registry-api

# Step 4: Validate registry
node -e "const r = require('./registry/index.json'); console.log('✅ Registry items:', r.components?.length + r.sections?.length + r.templates?.length);"

# Step 5: Test MCP tools (if available)
cd "/Users/alfredo/Documents/AI First DS Library/packages/mcp" && node -e "console.log('🔧 MCP server available - test with: npx @orion-ds/mcp')"
```

## Auto-Trigger Patterns

This skill auto-triggers when user says:
- "sync registry"
- "update registry"
- "rebuild registry"
- "registry changed"

Or after:
- Adding a new component
- Modifying component exports
- Changing sections/templates
- Before `/pre-release`

## Success Output Format

```
🔄 Syncing Registry...

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ Step 1: Generate @orion-ds/react Registry
   Scanned: packages/react/src/components/
   Components: 39 items
   - New: Button (updated props)
   - Unchanged: Card, Modal, Chat (39 total)

✅ Step 2: Generate @orion-ds/blocks Registry
   Scanned: packages/blocks/src/
   Sections: 26 items
   Templates: 12 items
   - New: HeroV2 (variant)
   - Unchanged: Hero, Features, Pricing (38 total)

✅ Step 3: Merge Registries
   Combined index.json:
   - Components: 39
   - Sections: 41 (26 blocks + 15 react)
   - Templates: 10
   - Total: 90 items

✅ Step 4: Build HTTP API
   Generated public/r/:
   - /index.json               4.2 KB
   - /components/ (39 items)   ~420 KB total
   - /sections/ (41 items)     ~512 KB total
   - /templates/ (10 items)    ~156 KB total
   API ready at: http://localhost:3000/r/

✅ Step 5: Validate Registry Structure
   - All items have required fields ✓
   - Export paths exist ✓
   - Component props documented ✓
   - No circular dependencies ✓

✅ Step 6: Test MCP Tools
   - list-components: ✓ Returns 39 items
   - get-component Button: ✓ Returns props
   - search "chat": ✓ Returns 2 results
   - tokens: ✓ Returns token manifest
   - validate: ✓ Runs compliance check
   - validate-blocks: ✓ Checks @orion-ds/blocks
   - setup-guide: ✓ Returns setup instructions
   - sections: ✓ Returns 41 sections
   - validate-previews: ✓ Returns Storybook validation

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ Registry Synced!

Usage:
  npx @orion-ds/cli add button     # Uses registry
  curl http://localhost:3000/r/index.json  # HTTP API
  Claude desktop: @orion-ds/mcp    # MCP tools

CLI example:
  npx @orion-ds/cli add button card modal
  → Fetches from registry/
  → Copies components to your project

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## Failure Output Format

```
🔄 Syncing Registry...

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

❌ Step 1: Generate @orion-ds/react Registry FAILED

   Error: Cannot read property 'types' of undefined
   In: packages/react/src/components/Button/Button.types.ts:12

   Issue: Button.types.ts has syntax error or invalid export

   Fix:
   1. Check Button.types.ts syntax
   2. Run: npm run type-check
   3. Run: /registry-sync again

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

❌ REGISTRY SYNC FAILED

Failed to regenerate registry.

Fix errors above and run:
/registry-sync

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## Verbose Mode

Shows every item:

```bash
/registry-sync --verbose
```

**Output**:
```
Syncing registry...

✅ React Components (39):
   1. AccordionGroup
   2. AccordionItem
   3. Alert
   ...
   39. VideoCard

✅ Blocks Sections (26):
   1. Hero
   2. HeroV2
   ...
   26. Testimonials

✅ Templates (10):
   1. LandingPageTemplate
   ...
   10. DocumentationTemplate

✅ API Endpoints:
   http://localhost:3000/r/index.json
   http://localhost:3000/r/components/button.json
   http://localhost:3000/r/sections/hero.json
   ...
```

## Registry Structure

### `registry/index.json`

```json
{
  "version": "1.0.0",
  "components": [
    {
      "name": "Button",
      "description": "Primary action button",
      "category": "forms",
      "examples": "...",
      "type": "component"
    }
  ],
  "sections": [
    {
      "name": "Hero",
      "description": "Hero section",
      "category": "marketing",
      "type": "section",
      "from": "blocks"
    }
  ],
  "templates": [...]
}
```

### `registry/components/*.json`

Individual component entry:

```json
{
  "name": "Button",
  "path": "@orion-ds/react/components/Button",
  "props": {
    "variant": {
      "type": "enum",
      "values": ["primary", "secondary", "ghost"],
      "default": "primary"
    },
    "size": {
      "type": "enum",
      "values": ["sm", "md", "lg"],
      "default": "md"
    }
  },
  "dependencies": ["lucide-react"],
  "examples": "..."
}
```

## HTTP API Endpoints

### `public/r/index.json`

Full manifest:
```bash
curl http://localhost:3000/r/index.json
# Returns: { components: [...], sections: [...], templates: [...] }
```

### `public/r/components/button.json`

Individual component:
```bash
curl http://localhost:3000/r/components/button.json
# Returns: Component details, props, dependencies
```

### `public/r/sections/hero.json`

Section details:
```bash
curl http://localhost:3000/r/sections/hero.json
# Returns: Section props, usage examples
```

## CLI Integration

The CLI uses the registry:

```bash
# CLI lists registry items
npx @orion-ds/cli list
# Reads: registry/index.json

# CLI adds component
npx @orion-ds/cli add button
# Fetches: registry/components/button.json OR
# Fetches: http://localhost:3000/r/components/button.json (if --remote)
# Copies files to project
```

## MCP Server Integration

9 MCP tools use the registry:

1. **list-components** - Returns all 39 components from registry
2. **get-component [name]** - Returns component details + props
3. **search [keyword]** - Searches registry for matching items
4. **tokens** - Returns token manifest
5. **validate [code]** - Validates component compliance
6. **setup-guide** - Returns setup instructions
7. **sections** - Lists all 41 sections
8. **validate-blocks** - Validates @orion-ds/blocks
9. **validate-previews** - Validates Storybook + docs

## When to Run

**Always after**:
- Adding a new component
- Modifying component props or variants
- Adding sections/templates to blocks
- Before `/pre-release`
- Before deploying to production

**In CI/CD**:
- Pre-release: `npm run build:registry` before publish
- Daily build: Regenerate registry snapshot

## Common Issues & Fixes

### Issue: "Component not found in registry"

**Cause**: Component not exported from index.ts

**Fix**:
```typescript
// packages/react/src/index.ts
export { Button } from './components/Button';

// Then run:
/registry-sync
```

### Issue: "HTTP API returns 404"

**Cause**: API not built (public/r/ missing)

**Fix**:
```bash
npm run build:registry-api
/registry-sync
```

### Issue: "MCP tools return empty"

**Cause**: MCP server not updated

**Fix**:
```bash
cd packages/mcp
npm run build  # Rebuild MCP server
# Then test with Claude desktop
```

### Issue: "CLI can't fetch components"

**Cause**: Registry file corrupted or missing

**Fix**:
```bash
rm -rf registry/
/registry-sync  # Regenerate from scratch
```

## Performance

**Registry size**:
- Full index.json: ~4-5 KB
- Per component: ~2-10 KB
- Total public/r/: ~1-1.5 MB

**HTTP API**:
- Index endpoint: <50ms response
- Component endpoint: <50ms response
- CLI download: ~2-5s (network dependent)

## Related Skills

**Before registry sync**:
- `/update-component [Name]` - Updates one component
- `/create-component [Name]` - Creates new component

**After registry sync**:
- `/pr-ready` - Prepare PR (includes registry)
- `/pre-release` - Gate check (validates registry)
- `/release-patch`, `/release-minor`, `/release-major` - Publish

**MCP testing**:
- `/mcp-test` - Test individual MCP tools

## Exit Codes

- **0** = Registry synced successfully
- **1** = Registry sync failed (invalid components)

## References

- Registry files: `registry/`
- API builder: `scripts/build-registry-api.ts`
- Generator: `scripts/generate-registry.ts`
- CLI: `packages/cli/` uses registry
- MCP: `packages/mcp/` provides 9 tools
