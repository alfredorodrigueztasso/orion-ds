import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Stack } from "./Stack";

describe("Stack", () => {
  it("renders with children", () => {
    render(<Stack>Test Content</Stack>);
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("applies direction classes correctly", () => {
    const { rerender, container } = render(
      <Stack direction="vertical">Vertical</Stack>,
    );
    let stack = container.firstChild as HTMLElement;
    expect(stack.className).toMatch(/vertical/);

    rerender(<Stack direction="horizontal">Horizontal</Stack>);
    stack = container.firstChild as HTMLElement;
    expect(stack.className).toMatch(/horizontal/);
  });

  it("applies gap classes correctly", () => {
    const gaps = ["xs", "sm", "md", "lg", "xl"] as const;

    gaps.forEach((gap) => {
      const { container } = render(<Stack gap={gap}>Content</Stack>);
      const stack = container.firstChild as HTMLElement;
      expect(stack.className).toMatch(new RegExp(`gap-${gap}`));
    });
  });

  it("applies align classes correctly", () => {
    const aligns = [
      "flex-start",
      "center",
      "flex-end",
      "stretch",
      "baseline",
    ] as const;

    aligns.forEach((align) => {
      const { container } = render(<Stack align={align}>Content</Stack>);
      const stack = container.firstChild as HTMLElement;
      expect(stack.className).toMatch(new RegExp(`align-${align}`));
    });
  });

  it("applies justify classes correctly", () => {
    const justifies = [
      "flex-start",
      "center",
      "flex-end",
      "space-between",
      "space-around",
      "space-evenly",
    ] as const;

    justifies.forEach((justify) => {
      const { container } = render(<Stack justify={justify}>Content</Stack>);
      const stack = container.firstChild as HTMLElement;
      expect(stack.className).toMatch(new RegExp(`justify-${justify}`));
    });
  });

  it("applies wrap classes correctly", () => {
    const wraps = ["nowrap", "wrap", "wrap-reverse"] as const;

    wraps.forEach((wrap) => {
      const { container } = render(<Stack wrap={wrap}>Content</Stack>);
      const stack = container.firstChild as HTMLElement;
      expect(stack.className).toMatch(new RegExp(`wrap-${wrap}`));
    });
  });

  it("uses default props when not specified", () => {
    const { container } = render(<Stack>Default</Stack>);
    const stack = container.firstChild as HTMLElement;
    expect(stack.className).toMatch(/vertical/); // default direction
    expect(stack.className).toMatch(/gap-md/); // default gap
    expect(stack.className).toMatch(/align-stretch/); // default align
    expect(stack.className).toMatch(/justify-flex-start/); // default justify
  });

  it("applies custom className", () => {
    const { container } = render(
      <Stack className="custom-stack">Custom</Stack>,
    );
    expect(container.firstChild).toHaveClass("custom-stack");
  });

  it("passes through additional props", () => {
    render(<Stack data-testid="test-stack">Test</Stack>);
    expect(screen.getByTestId("test-stack")).toBeInTheDocument();
  });

  it("renders with custom element type", () => {
    const { container } = render(
      <Stack as="section" data-testid="section-stack">
        Section
      </Stack>,
    );
    const stack = container.firstChild as HTMLElement;
    expect(stack.tagName.toLowerCase()).toBe("section");
  });

  it("renders as form element", () => {
    const { container } = render(
      <Stack as="form" data-testid="form-stack">
        Form
      </Stack>,
    );
    const stack = container.firstChild as HTMLElement;
    expect(stack.tagName.toLowerCase()).toBe("form");
  });

  it("supports multiple children", () => {
    render(
      <Stack>
        <div>Child 1</div>
        <div>Child 2</div>
        <div>Child 3</div>
      </Stack>,
    );
    expect(screen.getByText("Child 1")).toBeInTheDocument();
    expect(screen.getByText("Child 2")).toBeInTheDocument();
    expect(screen.getByText("Child 3")).toBeInTheDocument();
  });

  it("combines multiple props correctly", () => {
    const { container } = render(
      <Stack
        direction="horizontal"
        gap="lg"
        align="center"
        justify="space-between"
      >
        Content
      </Stack>,
    );
    const stack = container.firstChild as HTMLElement;
    expect(stack.className).toMatch(/horizontal/);
    expect(stack.className).toMatch(/gap-lg/);
    expect(stack.className).toMatch(/align-center/);
    expect(stack.className).toMatch(/justify-space-between/);
  });
});
