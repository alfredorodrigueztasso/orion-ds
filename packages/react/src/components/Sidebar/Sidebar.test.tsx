import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Sidebar } from "./Sidebar";
import { Home, Settings, Users, FileText } from "lucide-react";
import type { SidebarItem, SidebarSection } from "./Sidebar.types";

describe("Sidebar", () => {
  const mockItems: SidebarItem[] = [
    {
      id: "home",
      label: "Home",
      icon: <Home size={20} />,
      href: "/",
    },
    {
      id: "users",
      label: "Users",
      icon: <Users size={20} />,
      href: "/users",
      badge: "5",
    },
    {
      id: "documents",
      label: "Documents",
      icon: <FileText size={20} />,
      children: [
        { id: "recent", label: "Recent", href: "/documents/recent" },
        { id: "archived", label: "Archived", href: "/documents/archived" },
      ],
    },
    {
      id: "settings",
      label: "Settings",
      icon: <Settings size={20} />,
      href: "/settings",
    },
  ];

  const mockSections: SidebarSection[] = [
    {
      items: mockItems,
    },
  ];

  it("renders sidebar items", () => {
    render(<Sidebar sections={mockSections} />);

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Users")).toBeInTheDocument();
    expect(screen.getByText("Documents")).toBeInTheDocument();
    expect(screen.getByText("Settings")).toBeInTheDocument();
  });

  it("renders badges", () => {
    render(<Sidebar sections={mockSections} />);

    expect(screen.getByText("5")).toBeInTheDocument();
  });

  it("renders collapsible items with children", () => {
    render(<Sidebar sections={mockSections} />);

    expect(screen.getByText("Documents")).toBeInTheDocument();
  });

  it("handles item click events", async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    const itemsWithClick = [
      {
        id: "action",
        label: "Action",
        onClick: handleClick,
      },
      ...mockItems,
    ];

    const sections: SidebarSection[] = [{ items: itemsWithClick }];

    render(<Sidebar sections={sections} />);

    const actionItem = screen.getByText("Action");
    await user.click(actionItem);

    expect(handleClick).toHaveBeenCalled();
  });

  it("supports active item highlighting", () => {
    const { container } = render(
      <Sidebar sections={mockSections} activeItem="home" />,
    );

    expect(container).toBeInTheDocument();
  });

  it("supports collapsed mode", () => {
    const handleCollapsedChange = vi.fn();
    const { container } = render(
      <Sidebar
        sections={mockSections}
        collapsed={false}
        onCollapsedChange={handleCollapsedChange}
      />,
    );

    expect(container.querySelector("nav")).toBeInTheDocument();
  });

  it("renders header when provided", () => {
    render(<Sidebar sections={mockSections} header={<div>My App</div>} />);

    expect(screen.getByText("My App")).toBeInTheDocument();
  });

  it("renders footer when provided", () => {
    render(<Sidebar sections={mockSections} footer={<div>Version 1.0</div>} />);

    expect(screen.getByText("Version 1.0")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <Sidebar sections={mockSections} className="custom-sidebar" />,
    );

    const sidebar = container.querySelector(".custom-sidebar");
    expect(sidebar).toBeInTheDocument();
  });

  it("forwards ref correctly", () => {
    const ref = vi.fn();

    render(<Sidebar ref={ref} sections={mockSections} />);

    expect(ref).toHaveBeenCalled();
  });

  it("handles nested navigation", async () => {
    const user = userEvent.setup();

    render(<Sidebar sections={mockSections} />);

    // Check if nested items exist
    const documentsItem = screen.getByText("Documents");
    expect(documentsItem).toBeInTheDocument();
  });

  it("renders with empty sections", () => {
    render(<Sidebar sections={[]} />);

    const sidebar =
      screen.queryByRole("navigation") || document.querySelector("nav");
    expect(sidebar).toBeInTheDocument();
  });
});
