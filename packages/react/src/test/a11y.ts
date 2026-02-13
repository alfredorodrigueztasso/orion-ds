import { axe } from 'vitest-axe';
import { expect } from 'vitest';
import type { RenderResult } from '@testing-library/react';

/**
 * Run axe accessibility checks on a rendered component.
 * Usage: await expectNoA11yViolations(renderResult);
 */
export async function expectNoA11yViolations({ container }: Pick<RenderResult, 'container'>) {
  const results = await axe(container);
  expect(results).toHaveNoViolations();
}
