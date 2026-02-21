/**
 * Link Component Tests
 */

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Link } from "./Link";

describe("Link", () => {
  it("renders a link with text", () => {
    render(<Link href="/about">About us</Link>);
    const link = screen.getByRole("link", { name: "About us" });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/about");
  });

  it("applies default variant and size", () => {
    render(<Link href="/">Home</Link>);
    const link = screen.getByRole("link");

    expect(link.className).toContain("default");
    expect(link.className).toContain("md");
  });

  it("applies variant classes", () => {
    const { rerender } = render(
      <Link href="/" variant="subtle">
        Link
      </Link>,
    );
    expect(screen.getByRole("link").className).toContain("subtle");

    rerender(
      <Link href="/" variant="brand">
        Link
      </Link>,
    );
    expect(screen.getByRole("link").className).toContain("brand");
  });

  it("applies size classes", () => {
    const { rerender } = render(
      <Link href="/" size="sm">
        Link
      </Link>,
    );
    expect(screen.getByRole("link").className).toContain("sm");

    rerender(
      <Link href="/" size="lg">
        Link
      </Link>,
    );
    expect(screen.getByRole("link").className).toContain("lg");
  });

  it("opens in new tab when external is true", () => {
    render(
      <Link href="https://example.com" external>
        External
      </Link>,
    );
    const link = screen.getByRole("link");

    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("does not add external attributes for internal links", () => {
    render(<Link href="/about">About</Link>);
    const link = screen.getByRole("link");

    expect(link).not.toHaveAttribute("target");
    expect(link).not.toHaveAttribute("rel");
  });

  it("applies underline class by default", () => {
    render(<Link href="/">Link</Link>);
    expect(screen.getByRole("link").className).toContain("underline");
  });

  it("removes underline when underline is false", () => {
    render(
      <Link href="/" underline={false}>
        Link
      </Link>,
    );
    expect(screen.getByRole("link").className).not.toContain("underline");
  });

  it("renders with left icon", () => {
    render(
      <Link href="/" icon={<span data-testid="left-icon">←</span>}>
        Back
      </Link>,
    );
    expect(screen.getByTestId("left-icon")).toBeInTheDocument();
  });

  it("renders with right icon", () => {
    render(
      <Link href="/" iconRight={<span data-testid="right-icon">→</span>}>
        Next
      </Link>,
    );
    expect(screen.getByTestId("right-icon")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(
      <Link href="/" className="custom-class">
        Link
      </Link>,
    );
    expect(screen.getByRole("link").className).toContain("custom-class");
  });

  it("forwards ref correctly", () => {
    const ref = { current: null };
    render(
      <Link ref={ref} href="/">
        Link
      </Link>,
    );
    expect(ref.current).toBeInstanceOf(HTMLAnchorElement);
  });
});
