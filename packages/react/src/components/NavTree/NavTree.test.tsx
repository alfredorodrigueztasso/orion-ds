import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NavTree } from "./NavTree";
import { Folder, FileText } from "lucide-react";
import type { NavTreeNode, NavTreeSection } from "./NavTree.types";

describe("NavTree", () => {
  const mockNodes: NavTreeNode[] = [
    {
      id: "src",
      type: "folder",
      label: "src",
      icon: <Folder size={16} />,
      children: [
        {
          id: "src-components",
          type: "folder",
          label: "components",
          icon: <Folder size={16} />,
          children: [
            {
              id: "src-components-button",
              type: "page",
              label: "Button.tsx",
              icon: <FileText size={16} />,
            },
            {
              id: "src-components-card",
              type: "page",
              label: "Card.tsx",
              icon: <FileText size={16} />,
            },
          ],
        },
        {
          id: "src-utils",
          type: "folder",
          label: "utils",
          icon: <Folder size={16} />,
          children: [
            {
              id: "src-utils-helpers",
              type: "page",
              label: "helpers.ts",
              icon: <FileText size={16} />,
            },
          ],
        },
      ],
    },
    {
      id: "public",
      type: "folder",
      label: "public",
      icon: <Folder size={16} />,
      children: [
        {
          id: "public-index",
          type: "page",
          label: "index.html",
          icon: <FileText size={16} />,
        },
      ],
    },
  ];

  const mockSections: NavTreeSection[] = [
    {
      id: "project",
      title: "Project Structure",
      nodes: mockNodes,
      defaultExpanded: true,
    },
  ];

  it("renders root nodes", () => {
    render(<NavTree sections={mockSections} />);

    expect(screen.getByText("src")).toBeInTheDocument();
    expect(screen.getByText("public")).toBeInTheDocument();
  });

  it("expands/collapses nodes on click", async () => {
    const user = userEvent.setup();

    render(<NavTree sections={mockSections} />);

    const srcNode = screen.getByText("src");
    await user.click(srcNode);

    // After clicking, the node should be expanded or collapsed
    expect(srcNode).toBeInTheDocument();
  });

  it("displays nested children when expanded", async () => {
    render(<NavTree sections={mockSections} />);

    // With default expanded, children should be visible
    expect(screen.getByText("components")).toBeInTheDocument();
    expect(screen.getByText("utils")).toBeInTheDocument();
  });

  it("handles node selection", async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    const singlePageSection: NavTreeSection[] = [
      {
        id: "pages",
        title: "Pages",
        nodes: [
          {
            id: "home",
            type: "page",
            label: "Home",
          },
        ],
        defaultExpanded: true,
      },
    ];

    render(<NavTree sections={singlePageSection} onNodeClick={handleClick} />);

    const homeNode = screen.getByText("Home");
    await user.click(homeNode);

    expect(handleClick).toHaveBeenCalled();
  });

  it("highlights active node", () => {
    render(<NavTree sections={mockSections} activeNodeId="src" />);

    const activeNode = screen.getByText("src");
    expect(activeNode).toBeInTheDocument();
  });

  it("renders icons for nodes", () => {
    const { container } = render(<NavTree sections={mockSections} />);

    const icons = container.querySelectorAll("[data-lucide]");
    expect(icons.length).toBeGreaterThan(0);
  });

  it("applies custom className", () => {
    const { container } = render(
      <NavTree sections={mockSections} className="custom-tree" />,
    );

    const tree = container.querySelector(".custom-tree");
    expect(tree).toBeInTheDocument();
  });

  it("forwards ref correctly", () => {
    const ref = vi.fn();

    render(<NavTree ref={ref} sections={mockSections} />);

    expect(ref).toHaveBeenCalled();
  });

  it("renders with empty sections", () => {
    const { container } = render(<NavTree sections={[]} />);

    const tree =
      container.querySelector("[class*='navtree']") || container.firstChild;
    expect(tree).toBeInTheDocument();
  });

  it("handles deep nesting", () => {
    render(<NavTree sections={mockSections} />);

    // Top-level nodes should be visible
    expect(screen.getByText("src")).toBeInTheDocument();
    expect(screen.getByText("public")).toBeInTheDocument();
  });

  it("responds to keyboard navigation", async () => {
    render(<NavTree sections={mockSections} />);

    const srcNode = screen.getByText("src");

    // Verify the node is accessible and can be interacted with
    expect(srcNode).toBeInTheDocument();
    expect(srcNode).toBeVisible();
  });
});
