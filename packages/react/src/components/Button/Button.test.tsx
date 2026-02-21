import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

describe("Button", () => {
  it("renders with children", () => {
    render(<Button>Click me</Button>);
    expect(
      screen.getByRole("button", { name: "Click me" }),
    ).toBeInTheDocument();
  });

  it("applies variant classes", () => {
    const { rerender } = render(<Button variant="primary">Primary</Button>);
    const button = screen.getByRole("button");
    expect(button.className).toMatch(/primary/);

    rerender(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByRole("button").className).toMatch(/secondary/);

    rerender(<Button variant="ghost">Ghost</Button>);
    expect(screen.getByRole("button").className).toMatch(/ghost/);
  });

  it("applies size classes", () => {
    const { rerender } = render(<Button size="sm">Small</Button>);
    expect(screen.getByRole("button").className).toMatch(/sm/);

    rerender(<Button size="md">Medium</Button>);
    expect(screen.getByRole("button").className).toMatch(/md/);

    rerender(<Button size="lg">Large</Button>);
    expect(screen.getByRole("button").className).toMatch(/lg/);
  });

  it("applies fullWidth class", () => {
    render(<Button fullWidth>Full Width</Button>);
    expect(screen.getByRole("button").className).toMatch(/fullWidth/);
  });

  it("handles click events", async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    render(<Button onClick={handleClick}>Click</Button>);

    await user.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not trigger click when disabled", async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    render(
      <Button onClick={handleClick} disabled>
        Disabled
      </Button>,
    );

    await user.click(screen.getByRole("button"));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("forwards ref correctly", () => {
    const ref = vi.fn();
    render(<Button ref={ref}>Button</Button>);
    expect(ref).toHaveBeenCalled();
  });

  it("supports different button types", () => {
    const { rerender } = render(<Button type="submit">Submit</Button>);
    expect(screen.getByRole("button")).toHaveAttribute("type", "submit");

    rerender(<Button type="reset">Reset</Button>);
    expect(screen.getByRole("button")).toHaveAttribute("type", "reset");
  });

  it("applies custom className", () => {
    render(<Button className="custom-class">Custom</Button>);
    expect(screen.getByRole("button")).toHaveClass("custom-class");
  });

  it("passes through additional props", () => {
    render(
      <Button data-testid="custom-button" aria-label="Custom Button">
        Test
      </Button>,
    );
    expect(screen.getByTestId("custom-button")).toBeInTheDocument();
    expect(screen.getByLabelText("Custom Button")).toBeInTheDocument();
  });
});
