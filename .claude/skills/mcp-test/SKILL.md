---
name: mcp-test
description: "Test MCP server and validate all 9 tools work. Auto-triggers when user says \"test MCP\", \"MCP broken\", \"MCP tools\", \"check MCP server\", or before releases."
allowed-tools: ["Bash"]
model: haiku
---

# MCP Test — Validate Model Context Protocol Server

Tests all 9 MCP tools and validates server responses are correct.

## What This Does

1. **Start MCP server** - Launch `packages/mcp/`
2. **Test 9 tools**:
   - list-components
   - get-component [name]
   - search [keyword]
   - tokens
   - validate [code]
   - setup-guide
   - sections
   - validate-blocks
   - validate-previews
3. **Verify responses** - Check data format, no errors
4. **Report results** - Pass/fail summary

**Critical for**: Claude desktop integration, AI agent access to Orion

**Runtime**: ~10-20 seconds

## Usage

```bash
/mcp-test
/mcp-test --verbose      # Show full responses
/mcp-test --tool list-components  # Test one tool
```

## Execution Steps

1. **Check MCP dependencies** - Validate package.json
2. **Build MCP server** - npm run build
3. **Start server** - node dist/index.js
4. **Run 9 tests** - Call each tool
5. **Verify responses** - Check JSON structure
6. **Report results** - Summary

## Commands

```bash
# Build MCP server
cd "/Users/alfredo/Documents/AI First DS Library/packages/mcp" && npm run build

# Start and test (interactive)
node dist/index.js --test

# Or test individual tools via protocol
# (Tools run via Claude desktop or any MCP client)
```

## Success Output

```
🔬 Testing MCP Server...

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ MCP Server Started
   Process: node dist/index.js
   Port: (stdio-based, no port)
   Status: Ready

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Testing 9 Tools:

✅ Tool 1: list-components
   Returns: 39 components
   Examples: Button, Card, Modal, Chat
   Format: JSON with component metadata ✓

✅ Tool 2: get-component
   Input: "Button"
   Returns: Complete Button props
   - variant: [primary, secondary, ghost]
   - size: [sm, md, lg]
   - icon, iconRight, disabled, ...
   Format: Valid JSON ✓

✅ Tool 3: search
   Input: "chat"
   Returns: 2 results
   - Chat (component)
   - ChatBubble (component)
   Format: Valid array ✓

✅ Tool 4: tokens
   Returns: Token manifest
   - primitives: 45 tokens
   - semantics: light + dark themes
   - brands: 4 brands
   Format: Complete token schema ✓

✅ Tool 5: validate
   Input: "Component.tsx"
   Returns: Compliance check
   - AI-First rules: 97% compliant
   - Token usage: Valid
   Format: Validation report ✓

✅ Tool 6: setup-guide
   Returns: Next.js setup instructions
   - Import styles
   - Wrap with ThemeProvider
   - Use components
   Format: Markdown ✓

✅ Tool 7: sections
   Returns: 41 sections
   - Hero, Features, Pricing, Team
   - AgentFolder, SettingsLayout, Chat
   - From @orion-ds/react + @orion-ds/blocks
   Format: JSON with metadata ✓

✅ Tool 8: validate-blocks
   Returns: @orion-ds/blocks compliance
   - Import paths: Valid ✓
   - Component usage: Correct ✓
   - Bundle: 142 modules ✓
   Format: Validation report ✓

✅ Tool 9: validate-previews
   Returns: Storybook/docs validation
   - No hardcoded styles ✓
   - No duplicate components ✓
   - All imports from registry ✓
   Format: Validation report ✓

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎉 All 9 MCP Tools Working!

Server Status: ✅ Ready for Claude desktop

Integration points:
- Claude desktop: Tools available in sidebar
- Claude Code: @orion-ds/mcp in tools list
- Cursor: MCP server configuration
- Cline: Tools accessible via MCP protocol

Typical usage in Claude:
  User: "What components are available?"
  Claude uses: list-components tool

  User: "Show me Button component props"
  Claude uses: get-component Button tool

  User: "Find chat-related components"
  Claude uses: search tool

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## Failure Output

```
🔬 Testing MCP Server...

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

❌ Tool 2: get-component FAILED

   Tool: get-component
   Input: "Button"

   Expected: Component props object
   Got: Error: "Button not found in registry"

   Possible causes:
   1. Registry not built
   2. Component removed or renamed
   3. Export missing from index.ts

   Fix:
   1. Run: /registry-sync
   2. Run: /mcp-test again

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

❌ 1 of 9 Tools Failed

Fix issues and run:
/mcp-test
```

## Verbose Mode

Shows full responses:

```bash
/mcp-test --verbose
```

**Output**: Complete JSON response for each tool

## MCP Tools Overview

### 1. list-components

Returns all components in registry:

```json
{
  "components": [
    {
      "name": "Button",
      "category": "forms",
      "description": "Primary action button"
    },
    ...
  ]
}
```

### 2. get-component [name]

Returns full component definition:

```json
{
  "name": "Button",
  "props": {
    "variant": { "type": "enum", "values": [...] },
    "size": { "type": "enum", "values": [...] }
  },
  "dependencies": ["lucide-react"],
  "examples": "..."
}
```

### 3. search [keyword]

Searches components by name/description:

```json
{
  "results": [
    { "name": "Chat", "type": "component" },
    { "name": "ChatBubble", "type": "component" }
  ]
}
```

### 4. tokens

Returns complete token manifest:

```json
{
  "primitives": [...],
  "semantics": { "light": {...}, "dark": {...} },
  "brands": { "orion": {...}, "red": {...} }
}
```

### 5. validate [code]

Validates component for AI-First compliance:

```json
{
  "status": "passed",
  "compliance": "97%",
  "violations": []
}
```

### 6. setup-guide

Returns markdown setup instructions

### 7. sections

Lists all sections (from both react + blocks)

### 8. validate-blocks

Validates @orion-ds/blocks package

### 9. validate-previews

Validates Storybook + docs site

## When to Test

**Before**:
- Updating MCP server code
- Changing registry structure
- Before deploying to prod
- Before releasing new version

**After**:
- `/registry-sync` - Regenerated registry
- `/pre-release` - Full release validation
- MCP server code changes

**Troubleshooting**:
- Tools not showing in Claude desktop
- MCP server crashes
- Tool returns empty results

## Common Issues & Fixes

### Issue: "Tool not found"

**Cause**: Tool not exported from MCP server

**Fix**:
```typescript
// packages/mcp/src/index.ts
export const tools = [
  listComponentsTool,
  getComponentTool,
  // ... all 9 tools
];
```

### Issue: "Registry empty"

**Cause**: Registry not built

**Fix**:
```bash
npm run build:registry
/mcp-test
```

### Issue: "Invalid response format"

**Cause**: Tool returns wrong JSON structure

**Fix**:
1. Check tool implementation
2. Verify schema matches expected format
3. Rebuild: `npm run build`
4. Test: `/mcp-test`

### Issue: "Server won't start"

**Cause**: Build failed or missing dependencies

**Fix**:
```bash
cd packages/mcp
npm install
npm run build
/mcp-test
```

## MCP Server Architecture

Location: `packages/mcp/`

Structure:
```
packages/mcp/
├── src/
│   ├── index.ts      # MCP server + 9 tools
│   ├── tools/        # Individual tool handlers
│   │   ├── list-components.ts
│   │   ├── get-component.ts
│   │   └── ... (7 more)
│   └── utils/        # Helper functions
├── dist/             # Built output
├── package.json
└── tsconfig.json
```

Tools use:
- `registry/` - Component definitions
- `tokens/` - Token manifest
- `scripts/validate-*.js` - Validation logic

## Integration with Claude

### Claude Desktop

1. Add to `claude_desktop_config.json`:
```json
{
  "mcpServers": {
    "orion": {
      "command": "npx",
      "args": ["@orion-ds/mcp"]
    }
  }
}
```

2. Tools appear in sidebar

### Claude Code

MCP tools available via `/` prefix in chat

### Cursor / Cline

MCP server configuration in IDE settings

## Related Skills

**Before MCP test**:
- `/registry-sync` - Update registry that MCP uses
- Build MCP: `cd packages/mcp && npm run build`

**After MCP test**:
- `/pre-release` - Gate check includes MCP validation
- `/release-patch`, `/release-minor`, `/release-major` - Publish

## Exit Codes

- **0** = All 9 tools working
- **1** = At least one tool failed

## References

- MCP SDK: `@modelcontextprotocol/sdk`
- MCP docs: https://modelcontextprotocol.io
- Claude desktop config: https://github.com/anthropics/claude-desktop
- Tool implementation: `packages/mcp/src/`
