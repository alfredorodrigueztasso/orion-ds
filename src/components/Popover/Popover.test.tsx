/**
 * Popover Component Tests
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Popover } from './Popover';

describe('Popover', () => {
  it('renders trigger element', () => {
    render(
      <Popover
        trigger={<button>Open Popover</button>}
        content={<div>Popover content</div>}
      />
    );

    expect(screen.getByRole('button', { name: 'Open Popover' })).toBeInTheDocument();
  });

  it('opens on click by default', async () => {
    const user = userEvent.setup();

    render(
      <Popover
        trigger={<button>Open Popover</button>}
        content={<div>Popover content</div>}
      />
    );

    const trigger = screen.getByRole('button', { name: 'Open Popover' });
    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getByText('Popover content')).toBeInTheDocument();
    });
  });

  it('closes on second click', async () => {
    const user = userEvent.setup();

    render(
      <Popover
        trigger={<button>Open Popover</button>}
        content={<div>Popover content</div>}
      />
    );

    const trigger = screen.getByRole('button', { name: 'Open Popover' });
    await user.click(trigger);
    await user.click(trigger);

    await waitFor(() => {
      expect(screen.queryByText('Popover content')).not.toBeInTheDocument();
    });
  });

  it('closes on Escape key', async () => {
    const user = userEvent.setup();

    render(
      <Popover
        trigger={<button>Open Popover</button>}
        content={<div>Popover content</div>}
      />
    );

    const trigger = screen.getByRole('button', { name: 'Open Popover' });
    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getByText('Popover content')).toBeInTheDocument();
    });

    await user.keyboard('{Escape}');

    await waitFor(() => {
      expect(screen.queryByText('Popover content')).not.toBeInTheDocument();
    });
  });

  it('does not close on Escape when closeOnEscape is false', async () => {
    const user = userEvent.setup();

    render(
      <Popover
        trigger={<button>Open Popover</button>}
        content={<div>Popover content</div>}
        closeOnEscape={false}
      />
    );

    const trigger = screen.getByRole('button', { name: 'Open Popover' });
    await user.click(trigger);
    await user.keyboard('{Escape}');

    expect(screen.getByText('Popover content')).toBeInTheDocument();
  });

  it('closes on click outside', async () => {
    const user = userEvent.setup();

    render(
      <>
        <button>Outside</button>
        <Popover
          trigger={<button>Open Popover</button>}
          content={<div>Popover content</div>}
        />
      </>
    );

    const trigger = screen.getByRole('button', { name: 'Open Popover' });
    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getByText('Popover content')).toBeInTheDocument();
    });

    await user.click(screen.getByRole('button', { name: 'Outside' }));

    await waitFor(() => {
      expect(screen.queryByText('Popover content')).not.toBeInTheDocument();
    });
  });

  it('does not close on click outside when closeOnClickOutside is false', async () => {
    const user = userEvent.setup();

    render(
      <>
        <button>Outside</button>
        <Popover
          trigger={<button>Open Popover</button>}
          content={<div>Popover content</div>}
          closeOnClickOutside={false}
        />
      </>
    );

    const trigger = screen.getByRole('button', { name: 'Open Popover' });
    await user.click(trigger);
    await user.click(screen.getByRole('button', { name: 'Outside' }));

    expect(screen.getByText('Popover content')).toBeInTheDocument();
  });

  it('works as controlled component', async () => {
    const user = userEvent.setup();
    const onOpenChange = vi.fn();

    const { rerender } = render(
      <Popover
        trigger={<button>Open Popover</button>}
        content={<div>Popover content</div>}
        open={false}
        onOpenChange={onOpenChange}
      />
    );

    const trigger = screen.getByRole('button', { name: 'Open Popover' });
    await user.click(trigger);

    expect(onOpenChange).toHaveBeenCalledWith(true);

    rerender(
      <Popover
        trigger={<button>Open Popover</button>}
        content={<div>Popover content</div>}
        open={true}
        onOpenChange={onOpenChange}
      />
    );

    expect(screen.getByText('Popover content')).toBeInTheDocument();
  });

  it('respects defaultOpen prop', () => {
    render(
      <Popover
        trigger={<button>Open Popover</button>}
        content={<div>Popover content</div>}
        defaultOpen={true}
      />
    );

    expect(screen.getByText('Popover content')).toBeInTheDocument();
  });

  it('opens on hover when triggerType is hover', async () => {
    const user = userEvent.setup();

    render(
      <Popover
        trigger={<button>Hover me</button>}
        content={<div>Popover content</div>}
        triggerType="hover"
      />
    );

    const trigger = screen.getByRole('button', { name: 'Hover me' });
    await user.hover(trigger);

    await waitFor(() => {
      expect(screen.getByText('Popover content')).toBeInTheDocument();
    });
  });

  it('opens on focus when triggerType is focus', async () => {
    const user = userEvent.setup();

    render(
      <Popover
        trigger={<button>Focus me</button>}
        content={<div>Popover content</div>}
        triggerType="focus"
      />
    );

    const trigger = screen.getByRole('button', { name: 'Focus me' });
    await user.click(trigger); // Focus the button

    await waitFor(() => {
      expect(screen.getByText('Popover content')).toBeInTheDocument();
    });
  });

  it('hides arrow when showArrow is false', async () => {
    const user = userEvent.setup();

    render(
      <Popover
        trigger={<button>Open Popover</button>}
        content={<div>Popover content</div>}
        showArrow={false}
      />
    );

    await user.click(screen.getByRole('button', { name: 'Open Popover' }));

    const popover = screen.getByRole('dialog');
    const arrow = popover.querySelector('[class*="arrow"]');
    expect(arrow).not.toBeInTheDocument();
  });

  it('has proper accessibility attributes', async () => {
    const user = userEvent.setup();

    render(
      <Popover
        trigger={<button>Open Popover</button>}
        content={<div>Popover content</div>}
      />
    );

    const trigger = screen.getByRole('button', { name: 'Open Popover' });
    expect(trigger).toHaveAttribute('aria-haspopup', 'true');
    expect(trigger).toHaveAttribute('aria-expanded', 'false');

    await user.click(trigger);

    await waitFor(() => {
      expect(trigger).toHaveAttribute('aria-expanded', 'true');
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });
  });
});
