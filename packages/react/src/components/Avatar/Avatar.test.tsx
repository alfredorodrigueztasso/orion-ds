import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Avatar } from "./Avatar";

describe("Avatar", () => {
  it("renders with image", () => {
    render(<Avatar src="/user.jpg" alt="User" />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "/user.jpg");
    expect(img).toHaveAttribute("alt", "User");
  });

  it("renders with initials when no image", () => {
    render(<Avatar initials="JD" />);
    expect(screen.getByText("JD")).toBeInTheDocument();
  });

  it("renders with custom icon when no image or initials", () => {
    render(<Avatar icon={<span data-testid="custom-icon">👨</span>} />);
    expect(screen.getByTestId("custom-icon")).toBeInTheDocument();
  });

  it("renders default fallback icon when no image, initials, or icon", () => {
    const { container } = render(<Avatar />);
    // Default icon is lucide User icon
    const icon = container.querySelector('[data-icon="User"]');
    expect(icon).toBeInTheDocument();
  });

  it("fallbacks to initials when image fails to load", () => {
    render(<Avatar src="/invalid.jpg" alt="User" initials="JD" />);
    const img = screen.getByRole("img");

    // Simulate image load error
    fireEvent.error(img);

    expect(screen.getByText("JD")).toBeInTheDocument();
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  it("fallbacks to icon when image fails and no initials", () => {
    render(
      <Avatar
        src="/invalid.jpg"
        alt="User"
        icon={<span data-testid="fallback-icon">👨</span>}
      />,
    );
    const img = screen.getByRole("img");

    fireEvent.error(img);

    expect(screen.getByTestId("fallback-icon")).toBeInTheDocument();
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  it("fallbacks to default icon when image fails and no initials or icon", () => {
    const { container } = render(<Avatar src="/invalid.jpg" alt="User" />);
    const img = screen.getByRole("img");

    fireEvent.error(img);

    // Should render lucide User icon
    const icon = container.querySelector('[data-icon="User"]');
    expect(icon).toBeInTheDocument();
  });

  it("applies xs size class", () => {
    const { container } = render(<Avatar initials="JD" size="xs" />);
    expect((container.firstChild as HTMLElement).className).toMatch(/xs/);
  });

  it("applies sm size class", () => {
    const { container } = render(<Avatar initials="JD" size="sm" />);
    expect((container.firstChild as HTMLElement).className).toMatch(/sm/);
  });

  it("applies md size class by default", () => {
    const { container } = render(<Avatar initials="JD" />);
    expect((container.firstChild as HTMLElement).className).toMatch(/md/);
  });

  it("applies lg size class", () => {
    const { container } = render(<Avatar initials="JD" size="lg" />);
    expect((container.firstChild as HTMLElement).className).toMatch(/lg/);
  });

  it("applies xl size class", () => {
    const { container } = render(<Avatar initials="JD" size="xl" />);
    expect((container.firstChild as HTMLElement).className).toMatch(/xl/);
  });

  it("applies 2xl size class", () => {
    const { container } = render(<Avatar initials="JD" size="2xl" />);
    expect((container.firstChild as HTMLElement).className).toMatch(/2xl/);
  });

  it("renders online status indicator", () => {
    render(<Avatar initials="JD" status="online" />);
    const statusIndicator = screen.getByLabelText("Status: online");
    expect(statusIndicator).toBeInTheDocument();
  });

  it("renders offline status indicator", () => {
    render(<Avatar initials="JD" status="offline" />);
    const statusIndicator = screen.getByLabelText("Status: offline");
    expect(statusIndicator).toBeInTheDocument();
  });

  it("renders away status indicator", () => {
    render(<Avatar initials="JD" status="away" />);
    const statusIndicator = screen.getByLabelText("Status: away");
    expect(statusIndicator).toBeInTheDocument();
  });

  it("renders busy status indicator", () => {
    render(<Avatar initials="JD" status="busy" />);
    const statusIndicator = screen.getByLabelText("Status: busy");
    expect(statusIndicator).toBeInTheDocument();
  });

  it("does not render status indicator when status is not provided", () => {
    render(<Avatar initials="JD" />);
    expect(screen.queryByLabelText(/Status:/)).not.toBeInTheDocument();
  });

  it("applies interactive class when interactive is true", () => {
    const { container } = render(<Avatar initials="JD" interactive />);
    expect((container.firstChild as HTMLElement).className).toMatch(
      /interactive/,
    );
  });

  it("does not apply interactive class by default", () => {
    const { container } = render(<Avatar initials="JD" />);
    expect(container.firstChild?.className).not.toMatch(/interactive/);
  });

  it("applies custom className", () => {
    const { container } = render(
      <Avatar initials="JD" className="custom-avatar" />,
    );
    expect(container.firstChild).toHaveClass("custom-avatar");
  });

  it("passes through HTML attributes", () => {
    render(<Avatar initials="JD" data-testid="test-avatar" />);
    expect(screen.getByTestId("test-avatar")).toBeInTheDocument();
  });

  it("supports onClick handler", () => {
    const handleClick = vi.fn();
    render(<Avatar initials="JD" onClick={handleClick} />);
    fireEvent.click(screen.getByText("JD").parentElement!);
    expect(handleClick).toHaveBeenCalled();
  });

  describe("Display priority", () => {
    it("prioritizes image over initials", () => {
      render(<Avatar src="/user.jpg" alt="User" initials="JD" />);
      expect(screen.getByRole("img")).toBeInTheDocument();
      expect(screen.queryByText("JD")).not.toBeInTheDocument();
    });

    it("prioritizes image over icon", () => {
      render(
        <Avatar
          src="/user.jpg"
          alt="User"
          icon={<span data-testid="icon">👨</span>}
        />,
      );
      expect(screen.getByRole("img")).toBeInTheDocument();
      expect(screen.queryByTestId("icon")).not.toBeInTheDocument();
    });

    it("prioritizes initials over icon", () => {
      render(
        <Avatar initials="JD" icon={<span data-testid="icon">👨</span>} />,
      );
      expect(screen.getByText("JD")).toBeInTheDocument();
      expect(screen.queryByTestId("icon")).not.toBeInTheDocument();
    });

    it("shows icon when no image or initials", () => {
      render(<Avatar icon={<span data-testid="icon">👨</span>} />);
      expect(screen.getByTestId("icon")).toBeInTheDocument();
    });
  });

  describe("All sizes", () => {
    it("renders xs size", () => {
      const { container } = render(<Avatar initials="JD" size="xs" />);
      expect((container.firstChild as HTMLElement).className).toMatch(/xs/);
    });

    it("renders sm size", () => {
      const { container } = render(<Avatar initials="JD" size="sm" />);
      expect((container.firstChild as HTMLElement).className).toMatch(/sm/);
    });

    it("renders md size", () => {
      const { container } = render(<Avatar initials="JD" size="md" />);
      expect((container.firstChild as HTMLElement).className).toMatch(/md/);
    });

    it("renders lg size", () => {
      const { container } = render(<Avatar initials="JD" size="lg" />);
      expect((container.firstChild as HTMLElement).className).toMatch(/lg/);
    });

    it("renders xl size", () => {
      const { container } = render(<Avatar initials="JD" size="xl" />);
      expect((container.firstChild as HTMLElement).className).toMatch(/xl/);
    });

    it("renders 2xl size", () => {
      const { container } = render(<Avatar initials="JD" size="2xl" />);
      expect((container.firstChild as HTMLElement).className).toMatch(/2xl/);
    });
  });

  describe("All status indicators", () => {
    it("renders online status", () => {
      render(<Avatar initials="JD" status="online" />);
      expect(screen.getByLabelText("Status: online")).toBeInTheDocument();
    });

    it("renders offline status", () => {
      render(<Avatar initials="JD" status="offline" />);
      expect(screen.getByLabelText("Status: offline")).toBeInTheDocument();
    });

    it("renders away status", () => {
      render(<Avatar initials="JD" status="away" />);
      expect(screen.getByLabelText("Status: away")).toBeInTheDocument();
    });

    it("renders busy status", () => {
      render(<Avatar initials="JD" status="busy" />);
      expect(screen.getByLabelText("Status: busy")).toBeInTheDocument();
    });
  });

  describe("Edge cases", () => {
    it("handles empty initials", () => {
      const { container } = render(<Avatar initials="" />);
      // Should fallback to lucide User icon
      const icon = container.querySelector('[data-icon="User"]');
      expect(icon).toBeInTheDocument();
    });

    it("handles long initials (truncates in CSS)", () => {
      render(<Avatar initials="ABCDEFG" />);
      expect(screen.getByText("ABCDEFG")).toBeInTheDocument();
    });

    it("works with single initial", () => {
      render(<Avatar initials="J" />);
      expect(screen.getByText("J")).toBeInTheDocument();
    });

    it("handles missing alt text", () => {
      const { container } = render(<Avatar src="/user.jpg" />);
      const img = container.querySelector("img");
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute("alt", "");
    });
  });
});
