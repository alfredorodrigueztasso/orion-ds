import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Alert } from './Alert';

describe('Alert', () => {
  it('renders with children', () => {
    render(<Alert>Alert message</Alert>);
    expect(screen.getByText('Alert message')).toBeInTheDocument();
  });

  it('applies variant classes correctly', () => {
    const { container, rerender } = render(<Alert variant="info">Info</Alert>);
    expect((container.firstChild as HTMLElement).className).toMatch(/info/);

    rerender(<Alert variant="success">Success</Alert>);
    expect((container.firstChild as HTMLElement).className).toMatch(/success/);

    rerender(<Alert variant="warning">Warning</Alert>);
    expect((container.firstChild as HTMLElement).className).toMatch(/warning/);

    rerender(<Alert variant="error">Error</Alert>);
    expect((container.firstChild as HTMLElement).className).toMatch(/error/);
  });

  it('uses default variant when not specified', () => {
    const { container } = render(<Alert>Default</Alert>);
    expect((container.firstChild as HTMLElement).className).toMatch(/info/);
  });

  it('applies custom className', () => {
    const { container } = render(<Alert className="custom-alert">Message</Alert>);
    expect(container.firstChild).toHaveClass('custom-alert');
  });

  it('passes through additional props', () => {
    render(<Alert data-testid="test-alert">Message</Alert>);
    expect(screen.getByTestId('test-alert')).toBeInTheDocument();
  });

  it('renders with role="alert" for accessibility', () => {
    const { container } = render(<Alert>Alert message</Alert>);
    expect(container.firstChild).toHaveAttribute('role', 'alert');
  });

  it('renders long messages correctly', () => {
    const longMessage = 'This is a very long alert message that should still render correctly and be accessible to screen readers and other assistive technologies.';
    render(<Alert>{longMessage}</Alert>);
    expect(screen.getByText(longMessage)).toBeInTheDocument();
  });

  it('renders with complex children', () => {
    render(
      <Alert variant="warning">
        <strong>Warning:</strong> Please review this carefully.
      </Alert>
    );
    expect(screen.getByText('Warning:')).toBeInTheDocument();
    expect(screen.getByText(/Please review this carefully/)).toBeInTheDocument();
  });

  describe('All variants', () => {
    it('info variant renders correctly', () => {
      const { container } = render(<Alert variant="info">Info message</Alert>);
      expect((container.firstChild as HTMLElement).className).toMatch(/info/);
      expect(screen.getByRole('alert')).toBeInTheDocument();
    });

    it('success variant renders correctly', () => {
      const { container } = render(<Alert variant="success">Success message</Alert>);
      expect((container.firstChild as HTMLElement).className).toMatch(/success/);
      expect(screen.getByRole('alert')).toBeInTheDocument();
    });

    it('warning variant renders correctly', () => {
      const { container } = render(<Alert variant="warning">Warning message</Alert>);
      expect((container.firstChild as HTMLElement).className).toMatch(/warning/);
      expect(screen.getByRole('alert')).toBeInTheDocument();
    });

    it('error variant renders correctly', () => {
      const { container } = render(<Alert variant="error">Error message</Alert>);
      expect((container.firstChild as HTMLElement).className).toMatch(/error/);
      expect(screen.getByRole('alert')).toBeInTheDocument();
    });
  });
});
