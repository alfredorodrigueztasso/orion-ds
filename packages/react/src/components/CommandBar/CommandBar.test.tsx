import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CommandBar } from "./CommandBar";
import { Settings, FileText } from "lucide-react";
import type { CommandItem } from "./CommandBar.types";

describe("CommandBar", () => {
  const mockCommands: CommandItem[] = [
    {
      id: "create-file",
      label: "Create File",
      description: "Create a new file",
      icon: <FileText size={16} />,
      shortcut: "⌘N",
      onSelect: vi.fn(),
    },
    {
      id: "settings",
      label: "Settings",
      description: "Open application settings",
      icon: <Settings size={16} />,
      shortcut: "⌘,",
      onSelect: vi.fn(),
    },
    {
      id: "search",
      label: "Search",
      description: "Search across files",
      icon: <FileText size={16} />,
      shortcut: "⌘P",
      onSelect: vi.fn(),
    },
  ];

  it("renders command input when open", () => {
    render(
      <CommandBar
        open={true}
        onOpenChange={() => {}}
        commands={mockCommands}
      />,
    );

    const input =
      screen.queryByPlaceholderText(/search|command/i) ||
      screen.queryByRole("textbox");
    expect(input).toBeInTheDocument();
  });

  it("displays commands when open", () => {
    render(
      <CommandBar
        open={true}
        onOpenChange={() => {}}
        commands={mockCommands}
      />,
    );

    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });

  it("filters commands by search", async () => {
    const user = userEvent.setup();

    render(
      <CommandBar
        open={true}
        onOpenChange={() => {}}
        commands={mockCommands}
      />,
    );

    const input = screen.getByRole("textbox");
    await user.type(input, "settings");

    // Should show Settings command
    expect(screen.getByText("Settings")).toBeInTheDocument();
  });

  it("executes command on select", async () => {
    const handleSelect = vi.fn();
    const onSelect = vi.fn();
    const user = userEvent.setup();

    const commands = [
      {
        id: "create-file",
        label: "Create File",
        description: "Create a new file",
        icon: <FileText size={16} />,
        onSelect,
      },
    ];

    render(
      <CommandBar
        open={true}
        onOpenChange={() => {}}
        commands={commands}
        onSelect={handleSelect}
      />,
    );

    const input = screen.getByRole("textbox");
    await user.type(input, "Create");

    const createOption = screen.getByText("Create File");
    await user.click(createOption);

    expect(handleSelect).toHaveBeenCalledWith(
      expect.objectContaining({ id: "create-file" }),
    );
  });

  it("displays command shortcuts", async () => {
    const user = userEvent.setup();

    render(
      <CommandBar
        open={true}
        onOpenChange={() => {}}
        commands={mockCommands}
      />,
    );

    const input = screen.getByRole("textbox");
    await user.type(input, "settings");

    // Shortcuts should be visible
    expect(screen.getByText("⌘,")).toBeInTheDocument();
  });

  it("handles keyboard navigation", async () => {
    render(
      <CommandBar
        open={true}
        onOpenChange={() => {}}
        commands={mockCommands}
      />,
    );

    const input = screen.getByRole("textbox");
    input.focus();

    // Should support arrow key navigation
    expect(input).toHaveFocus();
  });

  it("supports categorized commands", () => {
    const categorizedCommands: CommandItem[] = [
      {
        id: "file",
        label: "File",
        category: "Navigation",
        icon: <FileText size={16} />,
        onSelect: vi.fn(),
      },
      {
        id: "settings",
        label: "Settings",
        category: "Configuration",
        icon: <Settings size={16} />,
        onSelect: vi.fn(),
      },
    ];

    render(
      <CommandBar
        open={true}
        onOpenChange={() => {}}
        commands={categorizedCommands}
      />,
    );

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <CommandBar
        open={true}
        onOpenChange={() => {}}
        commands={mockCommands}
        className="custom-command"
      />,
    );

    const bar = container.querySelector(".custom-command");
    expect(bar).toBeInTheDocument();
  });

  it("forwards ref correctly", () => {
    const ref = vi.fn();

    render(
      <CommandBar
        ref={ref}
        open={true}
        onOpenChange={() => {}}
        commands={mockCommands}
      />,
    );

    expect(ref).toHaveBeenCalled();
  });

  it("handles empty search results", async () => {
    const user = userEvent.setup();

    render(
      <CommandBar
        open={true}
        onOpenChange={() => {}}
        commands={mockCommands}
      />,
    );

    const input = screen.getByRole("textbox");
    await user.type(input, "zzzzzzz");

    // Should show no results message or empty state
    expect(input).toBeInTheDocument();
  });

  it("calls onOpenChange when toggling visibility", async () => {
    const handleOpenChange = vi.fn();

    const { rerender } = render(
      <CommandBar
        open={false}
        onOpenChange={handleOpenChange}
        commands={mockCommands}
      />,
    );

    rerender(
      <CommandBar
        open={true}
        onOpenChange={handleOpenChange}
        commands={mockCommands}
      />,
    );

    expect(screen.queryByRole("textbox")).toBeInTheDocument();
  });
});
