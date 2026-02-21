import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Card } from "./Card";

describe("Card", () => {
  it("renders with children", () => {
    render(
      <Card>
        <Card.Body>Test content</Card.Body>
      </Card>,
    );
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  it("applies variant classes", () => {
    const { container, rerender } = render(<Card variant="base">Content</Card>);
    expect((container.firstChild as HTMLElement).className).toMatch(/card/);
    expect((container.firstChild as HTMLElement).className).toMatch(/base/);

    rerender(<Card variant="elevated">Content</Card>);
    expect((container.firstChild as HTMLElement).className).toMatch(/elevated/);

    rerender(<Card variant="glass">Content</Card>);
    expect((container.firstChild as HTMLElement).className).toMatch(/glass/);
  });

  it("applies interactive class when interactive prop is true", () => {
    const { container } = render(<Card interactive>Content</Card>);
    expect((container.firstChild as HTMLElement).className).toMatch(
      /interactive/,
    );
  });

  it("does not apply interactive class by default", () => {
    const { container } = render(<Card>Content</Card>);
    expect((container.firstChild as HTMLElement).className).not.toMatch(
      /interactive/,
    );
  });

  it("applies custom className", () => {
    const { container } = render(<Card className="custom-card">Content</Card>);
    expect(container.firstChild).toHaveClass("custom-card");
  });

  it("passes through additional props", () => {
    render(<Card data-testid="test-card">Content</Card>);
    expect(screen.getByTestId("test-card")).toBeInTheDocument();
  });

  describe("Card.Header", () => {
    it("renders header content", () => {
      render(
        <Card>
          <Card.Header>Header Text</Card.Header>
        </Card>,
      );
      expect(screen.getByText("Header Text")).toBeInTheDocument();
    });

    it("applies custom className to header", () => {
      render(
        <Card>
          <Card.Header className="custom-header">Header</Card.Header>
        </Card>,
      );
      const header = screen.getByText("Header");
      expect(header.className).toContain("custom-header");
    });
  });

  describe("Card.Body", () => {
    it("renders body content", () => {
      render(
        <Card>
          <Card.Body>Body Text</Card.Body>
        </Card>,
      );
      expect(screen.getByText("Body Text")).toBeInTheDocument();
    });

    it("applies custom className to body", () => {
      render(
        <Card>
          <Card.Body className="custom-body">Body</Card.Body>
        </Card>,
      );
      const body = screen.getByText("Body");
      expect(body.className).toContain("custom-body");
    });
  });

  describe("Card.Footer", () => {
    it("renders footer content", () => {
      render(
        <Card>
          <Card.Footer>Footer Text</Card.Footer>
        </Card>,
      );
      expect(screen.getByText("Footer Text")).toBeInTheDocument();
    });

    it("applies custom className to footer", () => {
      render(
        <Card>
          <Card.Footer className="custom-footer">Footer</Card.Footer>
        </Card>,
      );
      const footer = screen.getByText("Footer");
      expect(footer.className).toContain("custom-footer");
    });
  });

  describe("Complete Card", () => {
    it("renders all sections together", () => {
      render(
        <Card>
          <Card.Header>Header</Card.Header>
          <Card.Body>Body</Card.Body>
          <Card.Footer>Footer</Card.Footer>
        </Card>,
      );

      expect(screen.getByText("Header")).toBeInTheDocument();
      expect(screen.getByText("Body")).toBeInTheDocument();
      expect(screen.getByText("Footer")).toBeInTheDocument();
    });

    it("handles click events on interactive cards", async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();

      render(
        <Card interactive onClick={handleClick}>
          <Card.Body>Clickable content</Card.Body>
        </Card>,
      );

      await user.click(screen.getByText("Clickable content").parentElement!);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("uses default variant when not specified", () => {
      const { container } = render(<Card>Content</Card>);
      expect((container.firstChild as HTMLElement).className).toMatch(/base/);
    });
  });
});
