# Test Full — Reference Guide

## Test Types Overview

### Unit Tests (Vitest)

**What**: Tests individual component behavior in isolation

**Examples**:
- Button renders with correct props
- Form validation works
- Event handlers fire correctly
- Accessibility attributes present
- CSS classes applied correctly

**Location**: `packages/react/src/components/**/*.test.tsx`

**Coverage thresholds**:
- Statements: 80%
- Branches: 75%
- Functions: 80%
- Lines: 80%

---

### E2E Tests (Playwright)

**What**: Tests critical user flows across real browsers

**Examples**:
- Theme switching works end-to-end
- Modal opens and closes correctly
- Form submission works
- Navigation flows work
- Keyboard accessibility works

**Location**: `packages/react/e2e/*.spec.ts`

**Browsers**:
- Chromium (Chrome/Edge)
- Firefox
- WebKit (Safari)
- Mobile Chrome
- Mobile Safari

**Run in debug mode**:
```bash
cd packages/react && npm run test:e2e:debug
```

---

### Visual Tests (Percy)

**What**: Detects unintended visual changes

**How it works**:
1. Percy captures screenshots of all Storybook stories
2. Compares against baseline (previous build)
3. Flags visual differences
4. Human reviews changes (approve or reject)

**Examples**:
- Button color changed unintentionally
- Spacing shifted
- Font rendering different
- Layout broken

**Percy Dashboard**: https://percy.io/orion-ds/orion-react

**Manual review required**: If visual changes detected, review in Percy dashboard

---

## Skip Visual Tests

For faster test runs during development:

```bash
/test-full --skip-visual
```

**Skips**:
- Percy snapshot upload
- Visual comparison

**When to use**:
- Local development
- Rapid iteration
- When visual changes are expected
- CI/CD dry runs

**When NOT to use**:
- Final release validation
- PR merge validation
- When components were visually changed

---

## Debug Mode

Run E2E tests with visible browser:

```bash
/test-full --headed
```

**Benefits**:
- See tests execute in real-time
- Debug failures visually
- Understand test behavior
- Inspect element states

**Use for**:
- Debugging failing E2E tests
- Understanding test flow
- Developing new E2E tests

---

## Test Reports

After running tests, view detailed reports:

### Unit Test Report
```bash
open packages/react/coverage/index.html
```

**Shows**:
- Line-by-line coverage
- Untested code highlighted
- Coverage percentages per file

### E2E Test Report
```bash
open packages/react/playwright-report/index.html
```

**Shows**:
- Test results per browser
- Screenshots on failure
- Execution timeline
- Error stack traces

### Percy Dashboard
```
https://percy.io/orion-ds/orion-react/builds/<build-id>
```

**Shows**:
- Side-by-side visual comparisons
- Approved/rejected changes
- Build status timeline

---

## Writing Tests

### Unit Test Template

```typescript
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click</Button>);

    screen.getByRole('button').click();
    expect(handleClick).toHaveBeenCalled();
  });

  it('respects disabled state', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('applies variant classes', () => {
    render(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByRole('button')).toHaveClass('secondary');
  });
});
```

### E2E Test Template

```typescript
import { test, expect } from '@playwright/test';

test.describe('Modal Component', () => {
  test('opens and closes', async ({ page }) => {
    await page.goto('http://localhost:6006/?path=/story/components-modal--default');

    const modal = page.locator('[role="dialog"]');
    expect(modal).toBeVisible();

    const closeButton = page.locator('[aria-label="Close"]');
    await closeButton.click();

    await expect(modal).toBeHidden();
  });

  test('traps focus inside modal', async ({ page }) => {
    await page.goto('http://localhost:6006/?path=/story/components-modal--default');

    const button = page.locator('button:first-of-type');
    await button.click();

    const modal = page.locator('[role="dialog"]');
    expect(modal).toBeFocused();
  });
});
```

---

## Common Test Failures

### Failure: "Cannot find element"

**Cause**: Element doesn't exist or hasn't rendered

**Fix**:
```typescript
// Use waitFor for async rendering
const element = await screen.findByRole('button', { name: /submit/i });
```

### Failure: "Assertion failed"

**Debug**:
```typescript
// Print actual DOM
screen.debug();

// Check specific element
screen.logTestingPlaygroundURL();
```

### Failure: "Timeout waiting for selector"

**Cause**: E2E test ran before element appeared

**Fix**:
```typescript
// Wait for element
await page.waitForSelector('[data-testid="my-element"]');
```

---

## Performance Optimization

### Skip Slow Tests Locally

```bash
# Run only unit tests (fastest)
cd packages/react && npm test

# Run unit + E2E (faster, no Percy)
npm run test:e2e -- --workers=1

# Full suite (slowest, includes Percy)
npm run test:visual
```

### Parallel Execution

Tests run in parallel by default:
```bash
# Control worker count
npm test -- --workers=4
```

---

## Coverage Requirements

| Category | Threshold | Target |
|----------|-----------|--------|
| Statements | 80% | 95% |
| Branches | 75% | 90% |
| Functions | 80% | 95% |
| Lines | 80% | 95% |

**View coverage**:
```bash
cd packages/react && npm test -- --coverage
```

---

## Integration with CI/CD

Tests run automatically on:
- Pull requests (via GitHub Actions)
- Commits to main
- Pre-release validation

**Test order**:
1. Lint (fastest)
2. Type-check
3. Unit tests
4. E2E tests
5. Visual tests (Percy)

---

## Exit Codes

- **0** = All tests passing
- **1** = Test failures found
- **2** = Test configuration invalid

---

## References

- Vitest docs: https://vitest.dev
- Playwright docs: https://playwright.dev
- Percy docs: https://docs.percy.io
- Testing Library: https://testing-library.com
- Storybook: https://storybook.js.org
