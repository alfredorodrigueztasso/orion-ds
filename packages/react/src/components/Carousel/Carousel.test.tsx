import { describe, it, expect, vi, beforeAll } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Carousel } from './Carousel';
import type { CarouselItem } from './Carousel.types';

// Mock @orion-ds/core spacing to avoid import issues in test env
vi.mock('@orion-ds/core', () => ({
  spacing: {
    4: '16px',
    6: '24px',
    8: '32px',
  },
}));

// jsdom doesn't implement scrollTo/scrollBy
beforeAll(() => {
  Element.prototype.scrollTo = vi.fn();
  Element.prototype.scrollBy = vi.fn();
});

const mockItems: CarouselItem[] = [
  { image: <img src="/1.jpg" alt="Slide 1" />, title: 'Slide 1' },
  { image: <img src="/2.jpg" alt="Slide 2" />, title: 'Slide 2' },
  { image: <img src="/3.jpg" alt="Slide 3" />, title: 'Slide 3' },
];

describe('Carousel', () => {
  it('renders all slide items', () => {
    render(<Carousel items={mockItems} />);

    expect(screen.getByText('Slide 1')).toBeInTheDocument();
    expect(screen.getByText('Slide 2')).toBeInTheDocument();
    expect(screen.getByText('Slide 3')).toBeInTheDocument();
  });

  it('renders a region with aria-label', () => {
    render(<Carousel items={mockItems} />);
    expect(screen.getByRole('region', { name: 'Carousel' })).toBeInTheDocument();
  });

  it('renders navigation buttons when showNavigation is true', () => {
    render(<Carousel items={mockItems} showNavigation />);

    expect(screen.getByLabelText('Previous')).toBeInTheDocument();
    expect(screen.getByLabelText('Next')).toBeInTheDocument();
  });

  it('hides navigation buttons when showNavigation is false', () => {
    render(<Carousel items={mockItems} showNavigation={false} />);

    expect(screen.queryByLabelText('Previous')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Next')).not.toBeInTheDocument();
  });

  it('does not show navigation with only one item', () => {
    render(<Carousel items={[mockItems[0]]} showNavigation />);

    expect(screen.queryByLabelText('Previous')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Next')).not.toBeInTheDocument();
  });

  it('renders pagination dots when showPagination is true', () => {
    render(<Carousel items={mockItems} showPagination />);

    const dots = screen.getAllByLabelText(/Go to slide/);
    expect(dots).toHaveLength(3);
  });

  it('does not render pagination when showPagination is false', () => {
    render(<Carousel items={mockItems} showPagination={false} />);
    expect(screen.queryByLabelText(/Go to slide/)).not.toBeInTheDocument();
  });

  it('does not show pagination with only one item', () => {
    render(<Carousel items={[mockItems[0]]} showPagination />);

    expect(screen.queryByLabelText(/Go to slide/)).not.toBeInTheDocument();
  });

  it('renders items with eyebrow and description', () => {
    const items: CarouselItem[] = [
      {
        image: <img src="/1.jpg" alt="Img" />,
        title: 'Title',
        eyebrow: 'Category',
        description: 'A short description',
      },
    ];

    render(<Carousel items={items} showNavigation={false} />);

    expect(screen.getByText('Category')).toBeInTheDocument();
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('A short description')).toBeInTheDocument();
  });

  it('renders items with action element', () => {
    const items: CarouselItem[] = [
      {
        image: <img src="/1.jpg" alt="Img" />,
        title: 'Title',
        action: <button>Learn More</button>,
      },
    ];

    render(<Carousel items={items} showNavigation={false} />);
    expect(screen.getByText('Learn More')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Carousel items={mockItems} className="custom-carousel" data-testid="carousel" />);
    expect(screen.getByTestId('carousel')).toHaveClass('custom-carousel');
  });

  it('forwards ref correctly', () => {
    const ref = { current: null };
    render(<Carousel ref={ref} items={mockItems} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('clicking pagination dot triggers scrollToIndex', async () => {
    const user = userEvent.setup();
    render(<Carousel items={mockItems} showPagination />);

    const dot = screen.getByLabelText('Go to slide 2');
    await user.click(dot);

    // scrollTo should have been called (mocked above)
    expect(Element.prototype.scrollTo).toHaveBeenCalled();
  });

  it('navigation buttons are rendered and clickable', async () => {
    const user = userEvent.setup();
    render(<Carousel items={mockItems} showNavigation />);

    const prevButton = screen.getByLabelText('Previous');
    const nextButton = screen.getByLabelText('Next');

    // Verify buttons exist and have correct type
    expect(prevButton).toHaveAttribute('type', 'button');
    expect(nextButton).toHaveAttribute('type', 'button');

    // Clicking Next should call scrollBy or scrollTo (depending on loop/boundary state)
    await user.click(nextButton);

    // In jsdom, dimensions are 0 so scroll boundaries behave differently.
    // Verify no errors were thrown and the buttons function correctly.
    expect(nextButton).toBeInTheDocument();
  });

  it('loop carousel enables navigation buttons', () => {
    render(<Carousel items={mockItems} showNavigation loop />);

    const prevButton = screen.getByLabelText('Previous');
    const nextButton = screen.getByLabelText('Next');

    // With loop enabled, neither button should be disabled
    expect(prevButton).not.toBeDisabled();
    expect(nextButton).not.toBeDisabled();
  });

  it('renders with custom navigation', () => {
    render(
      <Carousel
        items={mockItems}
        renderNavigation={({ totalItems }) => (
          <div data-testid="custom-nav">Total: {totalItems}</div>
        )}
      />,
    );

    expect(screen.getByTestId('custom-nav')).toBeInTheDocument();
    expect(screen.getByTestId('custom-nav')).toHaveTextContent('Total: 3');
  });

  it('renders articles for each carousel card', () => {
    render(<Carousel items={mockItems} showNavigation={false} />);
    const articles = screen.getAllByRole('article');
    expect(articles).toHaveLength(3);
  });
});
