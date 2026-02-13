import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tabs } from './Tabs';
import type { TabItem } from './Tabs.types';

const mockTabs: TabItem[] = [
  {
    id: 'profile',
    label: 'Profile',
    content: <div>Profile Content</div>,
  },
  {
    id: 'settings',
    label: 'Settings',
    content: <div>Settings Content</div>,
  },
  {
    id: 'billing',
    label: 'Billing',
    content: <div>Billing Content</div>,
  },
];

describe('Tabs', () => {
  it('renders all tabs', () => {
    render(<Tabs tabs={mockTabs} />);
    expect(screen.getByRole('tab', { name: 'Profile' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Settings' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Billing' })).toBeInTheDocument();
  });

  it('renders first tab content by default', () => {
    render(<Tabs tabs={mockTabs} />);
    expect(screen.getByText('Profile Content')).toBeInTheDocument();
    expect(screen.queryByText('Settings Content')).not.toBeInTheDocument();
    expect(screen.queryByText('Billing Content')).not.toBeInTheDocument();
  });

  it('marks first tab as active by default', () => {
    render(<Tabs tabs={mockTabs} />);
    const profileTab = screen.getByRole('tab', { name: 'Profile' });
    expect(profileTab).toHaveAttribute('aria-selected', 'true');
  });

  it('switches tabs when clicked', async () => {
    const user = userEvent.setup();
    render(<Tabs tabs={mockTabs} />);

    // Initially shows profile content
    expect(screen.getByText('Profile Content')).toBeInTheDocument();

    // Click settings tab
    const settingsTab = screen.getByRole('tab', { name: 'Settings' });
    await user.click(settingsTab);

    // Shows settings content
    expect(screen.getByText('Settings Content')).toBeInTheDocument();
    expect(screen.queryByText('Profile Content')).not.toBeInTheDocument();
  });

  it('calls onChange when tab is clicked', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Tabs tabs={mockTabs} onChange={handleChange} />);

    const settingsTab = screen.getByRole('tab', { name: 'Settings' });
    await user.click(settingsTab);

    expect(handleChange).toHaveBeenCalledWith('settings');
  });

  it('respects defaultTab prop', () => {
    render(<Tabs tabs={mockTabs} defaultTab="settings" />);
    expect(screen.getByText('Settings Content')).toBeInTheDocument();
    expect(screen.queryByText('Profile Content')).not.toBeInTheDocument();
  });

  it('works in controlled mode with activeTab prop', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    const { rerender } = render(
      <Tabs tabs={mockTabs} activeTab="profile" onChange={handleChange} />,
    );

    expect(screen.getByText('Profile Content')).toBeInTheDocument();

    // Click settings tab (onChange is called but doesn't change active tab)
    const settingsTab = screen.getByRole('tab', { name: 'Settings' });
    await user.click(settingsTab);
    expect(handleChange).toHaveBeenCalledWith('settings');

    // Parent component controls active tab
    rerender(<Tabs tabs={mockTabs} activeTab="settings" onChange={handleChange} />);
    expect(screen.getByText('Settings Content')).toBeInTheDocument();
  });

  it('renders tabs with icons', () => {
    const tabsWithIcons: TabItem[] = [
      {
        id: 'home',
        label: 'Home',
        content: <div>Home Content</div>,
        icon: <span data-testid="home-icon">🏠</span>,
      },
      {
        id: 'search',
        label: 'Search',
        content: <div>Search Content</div>,
        icon: <span data-testid="search-icon">🔍</span>,
      },
    ];

    render(<Tabs tabs={tabsWithIcons} />);
    expect(screen.getByTestId('home-icon')).toBeInTheDocument();
    expect(screen.getByTestId('search-icon')).toBeInTheDocument();
  });

  it('renders tabs with badges', () => {
    const tabsWithBadges: TabItem[] = [
      {
        id: 'messages',
        label: 'Messages',
        content: <div>Messages Content</div>,
        badge: 5,
      },
      {
        id: 'notifications',
        label: 'Notifications',
        content: <div>Notifications Content</div>,
        badge: '10+',
      },
    ];

    render(<Tabs tabs={tabsWithBadges} />);
    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByText('10+')).toBeInTheDocument();
  });

  it('handles disabled tabs', async () => {
    const user = userEvent.setup();
    const tabsWithDisabled: TabItem[] = [
      ...mockTabs,
      {
        id: 'admin',
        label: 'Admin',
        content: <div>Admin Content</div>,
        disabled: true,
      },
    ];

    render(<Tabs tabs={tabsWithDisabled} />);
    const adminTab = screen.getByRole('tab', { name: 'Admin' });

    expect(adminTab).toBeDisabled();

    // Try to click disabled tab
    await user.click(adminTab);

    // Content should not change
    expect(screen.queryByText('Admin Content')).not.toBeInTheDocument();
    expect(screen.getByText('Profile Content')).toBeInTheDocument();
  });

  it('applies fullWidth class', () => {
    const { container } = render(<Tabs tabs={mockTabs} fullWidth />);
    expect((container.firstChild as HTMLElement).className).toMatch(/fullWidth/);
  });

  it('applies custom className', () => {
    const { container } = render(<Tabs tabs={mockTabs} className="custom-tabs" />);
    expect(container.firstChild).toHaveClass('custom-tabs');
  });

  it('has correct ARIA attributes', () => {
    render(<Tabs tabs={mockTabs} />);

    // Tab list
    expect(screen.getByRole('tablist')).toBeInTheDocument();

    // Tabs
    const profileTab = screen.getByRole('tab', { name: 'Profile' });
    expect(profileTab).toHaveAttribute('aria-selected', 'true');
    expect(profileTab).toHaveAttribute('aria-controls', 'panel-profile');
    expect(profileTab).toHaveAttribute('id', 'tab-profile');

    // Tab panel
    const panel = screen.getByRole('tabpanel');
    expect(panel).toHaveAttribute('id', 'panel-profile');
    expect(panel).toHaveAttribute('aria-labelledby', 'tab-profile');
  });

  it('updates aria-selected when tab changes', async () => {
    const user = userEvent.setup();
    render(<Tabs tabs={mockTabs} />);

    const profileTab = screen.getByRole('tab', { name: 'Profile' });
    const settingsTab = screen.getByRole('tab', { name: 'Settings' });

    // Initially profile is selected
    expect(profileTab).toHaveAttribute('aria-selected', 'true');
    expect(settingsTab).toHaveAttribute('aria-selected', 'false');

    // Click settings
    await user.click(settingsTab);

    // Settings is now selected
    expect(profileTab).toHaveAttribute('aria-selected', 'false');
    expect(settingsTab).toHaveAttribute('aria-selected', 'true');
  });

  it('handles empty tabs array', () => {
    const { container } = render(<Tabs tabs={[]} />);
    const tabList = container.querySelector('[role="tablist"]');
    expect(tabList).toBeInTheDocument();
    expect(tabList?.children).toHaveLength(0);
  });

  it('handles single tab', () => {
    const singleTab: TabItem[] = [
      {
        id: 'only',
        label: 'Only Tab',
        content: <div>Only Content</div>,
      },
    ];

    render(<Tabs tabs={singleTab} />);
    expect(screen.getByRole('tab', { name: 'Only Tab' })).toBeInTheDocument();
    expect(screen.getByText('Only Content')).toBeInTheDocument();
  });

  it('switches between all tabs', async () => {
    const user = userEvent.setup();
    render(<Tabs tabs={mockTabs} />);

    // Profile (default)
    expect(screen.getByText('Profile Content')).toBeInTheDocument();

    // Settings
    await user.click(screen.getByRole('tab', { name: 'Settings' }));
    expect(screen.getByText('Settings Content')).toBeInTheDocument();
    expect(screen.queryByText('Profile Content')).not.toBeInTheDocument();

    // Billing
    await user.click(screen.getByRole('tab', { name: 'Billing' }));
    expect(screen.getByText('Billing Content')).toBeInTheDocument();
    expect(screen.queryByText('Settings Content')).not.toBeInTheDocument();

    // Back to Profile
    await user.click(screen.getByRole('tab', { name: 'Profile' }));
    expect(screen.getByText('Profile Content')).toBeInTheDocument();
    expect(screen.queryByText('Billing Content')).not.toBeInTheDocument();
  });

  it('renders complex content', () => {
    const complexTabs: TabItem[] = [
      {
        id: 'complex',
        label: 'Complex',
        content: (
          <div>
            <h2>Title</h2>
            <p>Paragraph</p>
            <button>Action</button>
          </div>
        ),
      },
    ];

    render(<Tabs tabs={complexTabs} />);
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Paragraph')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Action' })).toBeInTheDocument();
  });

  describe('Uncontrolled Mode', () => {
    it('manages its own state', async () => {
      const user = userEvent.setup();
      render(<Tabs tabs={mockTabs} />);

      expect(screen.getByText('Profile Content')).toBeInTheDocument();

      await user.click(screen.getByRole('tab', { name: 'Settings' }));
      expect(screen.getByText('Settings Content')).toBeInTheDocument();
    });

    it('starts with defaultTab', () => {
      render(<Tabs tabs={mockTabs} defaultTab="billing" />);
      expect(screen.getByText('Billing Content')).toBeInTheDocument();
    });
  });

  describe('Controlled Mode', () => {
    it('does not change tabs without parent update', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      render(<Tabs tabs={mockTabs} activeTab="profile" onChange={handleChange} />);

      expect(screen.getByText('Profile Content')).toBeInTheDocument();

      await user.click(screen.getByRole('tab', { name: 'Settings' }));
      expect(handleChange).toHaveBeenCalledWith('settings');

      // Content doesn't change until parent updates activeTab
      expect(screen.getByText('Profile Content')).toBeInTheDocument();
    });

    it('changes tab when activeTab prop changes', () => {
      const { rerender } = render(<Tabs tabs={mockTabs} activeTab="profile" onChange={() => {}} />);
      expect(screen.getByText('Profile Content')).toBeInTheDocument();

      rerender(<Tabs tabs={mockTabs} activeTab="settings" onChange={() => {}} />);
      expect(screen.getByText('Settings Content')).toBeInTheDocument();
    });
  });

  describe('Tab with all features', () => {
    it('renders tab with icon, badge, and content', () => {
      const fullTab: TabItem[] = [
        {
          id: 'messages',
          label: 'Messages',
          content: <div>Messages Content</div>,
          icon: <span data-testid="msg-icon">💬</span>,
          badge: 3,
        },
      ];

      render(<Tabs tabs={fullTab} />);

      expect(screen.getByRole('tab', { name: /Messages/ })).toBeInTheDocument();
      expect(screen.getByTestId('msg-icon')).toBeInTheDocument();
      expect(screen.getByText('3')).toBeInTheDocument();
      expect(screen.getByText('Messages Content')).toBeInTheDocument();
    });
  });

  describe('Multiple instances', () => {
    it('maintains independent state for multiple tab groups', async () => {
      const user = userEvent.setup();
      const tabs1: TabItem[] = [
        { id: 'a1', label: 'A1', content: <div>Content A1</div> },
        { id: 'a2', label: 'A2', content: <div>Content A2</div> },
      ];
      const tabs2: TabItem[] = [
        { id: 'b1', label: 'B1', content: <div>Content B1</div> },
        { id: 'b2', label: 'B2', content: <div>Content B2</div> },
      ];

      render(
        <>
          <Tabs tabs={tabs1} />
          <Tabs tabs={tabs2} />
        </>,
      );

      // Both show first tab content
      expect(screen.getByText('Content A1')).toBeInTheDocument();
      expect(screen.getByText('Content B1')).toBeInTheDocument();

      // Click second tab in first group
      const [_a1, a2, _b1, _b2] = screen.getAllByRole('tab');
      await user.click(a2);

      // First group changes, second group doesn't
      expect(screen.getByText('Content A2')).toBeInTheDocument();
      expect(screen.getByText('Content B1')).toBeInTheDocument();
    });
  });
});
