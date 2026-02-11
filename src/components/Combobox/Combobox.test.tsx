/**
 * Combobox Component Tests
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Combobox } from './Combobox';

const mockOptions = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
];

describe('Combobox', () => {
  it('renders with placeholder', () => {
    render(<Combobox options={mockOptions} placeholder="Select a framework" />);
    expect(screen.getByPlaceholderText('Select a framework')).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(<Combobox options={mockOptions} label="Framework" />);
    expect(screen.getByText('Framework')).toBeInTheDocument();
  });

  it('opens dropdown on focus', () => {
    render(<Combobox options={mockOptions} />);
    const input = screen.getByRole('combobox');

    fireEvent.focus(input);

    expect(input).toHaveAttribute('aria-expanded', 'true');
  });

  it('shows options in dropdown', async () => {
    render(<Combobox options={mockOptions} />);
    const input = screen.getByRole('combobox');

    fireEvent.focus(input);

    await waitFor(() => {
      expect(screen.getByText('React')).toBeInTheDocument();
      expect(screen.getByText('Vue')).toBeInTheDocument();
    });
  });

  it('filters options based on input', async () => {
    render(<Combobox options={mockOptions} />);
    const input = screen.getByRole('combobox');

    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: 'rea' } });

    await waitFor(() => {
      expect(screen.getByText('React')).toBeInTheDocument();
      expect(screen.queryByText('Vue')).not.toBeInTheDocument();
    });
  });

  it('selects option on click', async () => {
    const onChange = vi.fn();
    render(<Combobox options={mockOptions} onChange={onChange} />);
    const input = screen.getByRole('combobox');

    fireEvent.focus(input);

    await waitFor(() => {
      fireEvent.click(screen.getByText('Vue'));
    });

    expect(onChange).toHaveBeenCalledWith('vue', mockOptions[1]);
  });

  it('shows selected value in input', () => {
    render(<Combobox options={mockOptions} value="react" />);
    expect(screen.getByRole('combobox')).toHaveValue('React');
  });

  it('clears selection on clear button click', async () => {
    const onChange = vi.fn();
    render(<Combobox options={mockOptions} value="react" onChange={onChange} />);

    const clearButton = screen.getByRole('button', { name: 'Clear selection' });
    fireEvent.click(clearButton);

    expect(onChange).toHaveBeenCalledWith(null, null);
  });

  it('hides clear button when clearable is false', () => {
    render(<Combobox options={mockOptions} value="react" clearable={false} />);
    expect(screen.queryByRole('button', { name: 'Clear selection' })).not.toBeInTheDocument();
  });

  it('navigates options with arrow keys', async () => {
    render(<Combobox options={mockOptions} />);
    const input = screen.getByRole('combobox');

    fireEvent.focus(input);
    fireEvent.keyDown(input, { key: 'ArrowDown' });

    await waitFor(() => {
      const options = screen.getAllByRole('option');
      expect(options[0]).toHaveClass('highlighted');
    });

    fireEvent.keyDown(input, { key: 'ArrowDown' });

    await waitFor(() => {
      const options = screen.getAllByRole('option');
      expect(options[1]).toHaveClass('highlighted');
    });
  });

  it('selects highlighted option with Enter', async () => {
    const onChange = vi.fn();
    render(<Combobox options={mockOptions} onChange={onChange} />);
    const input = screen.getByRole('combobox');

    fireEvent.focus(input);
    fireEvent.keyDown(input, { key: 'ArrowDown' });
    fireEvent.keyDown(input, { key: 'Enter' });

    expect(onChange).toHaveBeenCalledWith('react', mockOptions[0]);
  });

  it('closes dropdown with Escape', async () => {
    render(<Combobox options={mockOptions} />);
    const input = screen.getByRole('combobox');

    fireEvent.focus(input);
    expect(input).toHaveAttribute('aria-expanded', 'true');

    fireEvent.keyDown(input, { key: 'Escape' });
    expect(input).toHaveAttribute('aria-expanded', 'false');
  });

  it('shows empty state when no options match', async () => {
    render(<Combobox options={mockOptions} emptyText="No matches" />);
    const input = screen.getByRole('combobox');

    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: 'xyz' } });

    await waitFor(() => {
      expect(screen.getByText('No matches')).toBeInTheDocument();
    });
  });

  it('shows loading state', async () => {
    render(<Combobox options={mockOptions} loading />);
    const input = screen.getByRole('combobox');

    fireEvent.focus(input);

    await waitFor(() => {
      expect(screen.getByText('Loading...')).toBeInTheDocument();
    });
  });

  it('shows error state', () => {
    const { container } = render(<Combobox options={mockOptions} error="Required field" />);
    expect(screen.getByText('Required field')).toBeInTheDocument();
    expect(container.querySelector('.error')).toBeInTheDocument();
  });

  it('shows helper text', () => {
    render(<Combobox options={mockOptions} helperText="Select your favorite framework" />);
    expect(screen.getByText('Select your favorite framework')).toBeInTheDocument();
  });

  it('is disabled', () => {
    render(<Combobox options={mockOptions} disabled />);
    expect(screen.getByRole('combobox')).toBeDisabled();
  });

  it('renders different sizes', () => {
    const { container, rerender } = render(<Combobox options={mockOptions} size="sm" />);
    expect(container.querySelector('.sm')).toBeInTheDocument();

    rerender(<Combobox options={mockOptions} size="md" />);
    expect(container.querySelector('.md')).toBeInTheDocument();

    rerender(<Combobox options={mockOptions} size="lg" />);
    expect(container.querySelector('.lg')).toBeInTheDocument();
  });

  it('renders full width', () => {
    const { container } = render(<Combobox options={mockOptions} fullWidth />);
    expect(container.querySelector('.fullWidth')).toBeInTheDocument();
  });

  it('respects minChars before showing options', async () => {
    render(<Combobox options={mockOptions} minChars={2} />);
    const input = screen.getByRole('combobox');

    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: 'r' } });

    await waitFor(() => {
      expect(screen.queryByText('React')).not.toBeInTheDocument();
    });

    fireEvent.change(input, { target: { value: 're' } });

    await waitFor(() => {
      expect(screen.getByText('React')).toBeInTheDocument();
    });
  });

  it('renders option with description', async () => {
    const optionsWithDesc = [
      { value: 'react', label: 'React', description: 'A JavaScript library' },
    ];
    render(<Combobox options={optionsWithDesc} />);
    const input = screen.getByRole('combobox');

    fireEvent.focus(input);

    await waitFor(() => {
      expect(screen.getByText('A JavaScript library')).toBeInTheDocument();
    });
  });

  it('disables specific options', async () => {
    const optionsWithDisabled = [
      { value: 'react', label: 'React' },
      { value: 'vue', label: 'Vue', disabled: true },
    ];
    const onChange = vi.fn();
    render(<Combobox options={optionsWithDisabled} onChange={onChange} />);
    const input = screen.getByRole('combobox');

    fireEvent.focus(input);

    await waitFor(() => {
      fireEvent.click(screen.getByText('Vue'));
    });

    expect(onChange).not.toHaveBeenCalled();
  });

  it('has correct ARIA attributes', () => {
    render(<Combobox options={mockOptions} label="Framework" />);
    const input = screen.getByRole('combobox');

    expect(input).toHaveAttribute('aria-haspopup', 'listbox');
    expect(input).toHaveAttribute('aria-autocomplete', 'list');
  });
});
