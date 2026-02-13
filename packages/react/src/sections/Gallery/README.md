# Gallery Section

> Image gallery with grid, masonry, or carousel layouts and optional lightbox.

## Quick Start

```tsx
import { Gallery, Badge } from '@orion/react';

<Gallery
  eyebrow={<Badge>Portfolio</Badge>}
  title="Our Work"
  description="A selection of our recent projects"
  images={[
    {
      id: 1,
      src: '/gallery/project-1.jpg',
      alt: 'E-commerce redesign',
      caption: 'E-commerce Platform',
    },
    { id: 2, src: '/gallery/project-2.jpg', alt: 'Mobile app design', caption: 'Fitness App' },
    {
      id: 3,
      src: '/gallery/project-3.jpg',
      alt: 'Dashboard interface',
      caption: 'Analytics Dashboard',
    },
    { id: 4, src: '/gallery/project-4.jpg', alt: 'Brand identity', caption: 'Brand Identity' },
  ]}
  layout="grid"
  columns={4}
  lightbox
/>;
```

---

## Features

- **3 Layout Options** — Grid, Masonry, Carousel
- **Lightbox Support** — Full-screen image viewer
- **Category Filtering** — Filter images by category
- **Flexible Columns** — 2, 3, 4, or 5 columns
- **Aspect Ratios** — Square, landscape, portrait, or auto
- **Captions** — Optional image descriptions
- **Brand-Aware** — Adapts to all Orion brands

---

## Props Reference

```typescript
interface GalleryProps {
  // Header
  eyebrow?: ReactNode; // Badge/label above title
  title?: ReactNode; // Section title
  description?: ReactNode; // Section description

  // Content
  images: GalleryImage[]; // REQUIRED - Array of images

  // Layout
  layout?: 'grid' | 'masonry' | 'carousel'; // default: 'grid'
  columns?: 2 | 3 | 4 | 5; // default: 4
  aspectRatio?: 'square' | 'landscape' | 'portrait' | 'auto'; // default: 'square'
  gap?: 'sm' | 'md' | 'lg' | 'none'; // default: 'md'

  // Features
  lightbox?: boolean; // Enable lightbox - default: true
  showCaptions?: boolean; // Show captions - default: false
  filterable?: boolean; // Enable category filter - default: false

  // Styling
  background?: 'base' | 'subtle' | 'none'; // default: 'base'
}

interface GalleryImage {
  id: string | number; // Unique identifier
  src: string; // Image source URL
  alt: string; // Alt text (required)
  thumbnail?: string; // Thumbnail URL (optional)
  caption?: string; // Image caption
  category?: string; // Category for filtering
  aspectRatio?: 'square' | 'landscape' | 'portrait' | 'auto'; // Override
}
```

---

## Layout Variants

### `layout="grid"` (Default)

Uniform grid with consistent sizing.

```tsx
<Gallery layout="grid" columns={4} aspectRatio="square" images={images} />
```

### `layout="masonry"`

Pinterest-style layout with varying heights.

```tsx
<Gallery layout="masonry" columns={3} images={images} />
```

### `layout="carousel"`

Horizontal scrolling carousel.

```tsx
<Gallery layout="carousel" images={images} />
```

---

## Column Options

```tsx
// 2 columns (large images)
<Gallery columns={2} images={images} />

// 3 columns
<Gallery columns={3} images={images} />

// 4 columns (default)
<Gallery columns={4} images={images} />

// 5 columns (compact)
<Gallery columns={5} images={images} />
```

---

## Aspect Ratios

### Square (Default)

All images cropped to 1:1 ratio.

```tsx
<Gallery aspectRatio="square" images={images} />
```

### Landscape

Images cropped to 16:9 ratio.

```tsx
<Gallery aspectRatio="landscape" images={images} />
```

### Portrait

Images cropped to 3:4 ratio.

```tsx
<Gallery aspectRatio="portrait" images={images} />
```

### Auto

Images maintain original aspect ratios (use with masonry).

```tsx
<Gallery layout="masonry" aspectRatio="auto" images={images} />
```

---

## Image Configuration

### Basic Image

```tsx
{
  id: 1,
  src: "/gallery/image.jpg",
  alt: "Description of the image"
}
```

### With Thumbnail

```tsx
{
  id: 1,
  src: "/gallery/image-full.jpg",      // Full size for lightbox
  thumbnail: "/gallery/image-thumb.jpg", // Smaller for grid
  alt: "Project screenshot"
}
```

### With Caption

```tsx
{
  id: 1,
  src: "/gallery/project.jpg",
  alt: "E-commerce platform redesign",
  caption: "E-commerce Platform Redesign - 2024"
}
```

### With Category

```tsx
{
  id: 1,
  src: "/gallery/web-project.jpg",
  alt: "Website design",
  caption: "Corporate Website",
  category: "Web Design"
}
```

---

## Lightbox

Enable clicking images to view full-screen.

```tsx
// Lightbox enabled (default)
<Gallery lightbox images={images} />

// Lightbox disabled
<Gallery lightbox={false} images={images} />
```

---

## Captions

Show captions below images in the grid.

```tsx
<Gallery showCaptions images={[{ id: 1, src: '/img.jpg', alt: '...', caption: 'Project Name' }]} />
```

---

## Category Filtering

Enable filtering by category.

```tsx
<Gallery
  filterable
  images={[
    { id: 1, src: '/web1.jpg', alt: '...', category: 'Web Design' },
    { id: 2, src: '/app1.jpg', alt: '...', category: 'App Design' },
    { id: 3, src: '/web2.jpg', alt: '...', category: 'Web Design' },
    { id: 4, src: '/brand1.jpg', alt: '...', category: 'Branding' },
  ]}
/>
```

---

## Gap Options

```tsx
// No gap
<Gallery gap="none" images={images} />

// Small gap
<Gallery gap="sm" images={images} />

// Medium gap (default)
<Gallery gap="md" images={images} />

// Large gap
<Gallery gap="lg" images={images} />
```

---

## Complete Examples

### Portfolio Gallery

```tsx
import { Gallery, Badge } from '@orion/react';

<Gallery
  eyebrow={<Badge variant="brand">Portfolio</Badge>}
  title="Selected Work"
  description="A curated selection of our recent design and development projects."
  images={[
    {
      id: 1,
      src: '/portfolio/ecommerce-full.jpg',
      thumbnail: '/portfolio/ecommerce-thumb.jpg',
      alt: 'E-commerce platform with product grid and cart',
      caption: 'E-commerce Platform Redesign',
      category: 'Web Design',
    },
    {
      id: 2,
      src: '/portfolio/mobile-full.jpg',
      thumbnail: '/portfolio/mobile-thumb.jpg',
      alt: 'Fitness tracking mobile app screens',
      caption: 'FitTrack Mobile App',
      category: 'App Design',
    },
    {
      id: 3,
      src: '/portfolio/dashboard-full.jpg',
      thumbnail: '/portfolio/dashboard-thumb.jpg',
      alt: 'Analytics dashboard with charts and metrics',
      caption: 'Analytics Dashboard',
      category: 'Web Design',
    },
    {
      id: 4,
      src: '/portfolio/brand-full.jpg',
      thumbnail: '/portfolio/brand-thumb.jpg',
      alt: 'Brand identity design showing logo and colors',
      caption: 'TechCorp Brand Identity',
      category: 'Branding',
    },
    {
      id: 5,
      src: '/portfolio/landing-full.jpg',
      thumbnail: '/portfolio/landing-thumb.jpg',
      alt: 'SaaS landing page design',
      caption: 'SaaS Landing Page',
      category: 'Web Design',
    },
    {
      id: 6,
      src: '/portfolio/icon-full.jpg',
      thumbnail: '/portfolio/icon-thumb.jpg',
      alt: 'Custom icon set design',
      caption: 'Icon System',
      category: 'Branding',
    },
  ]}
  layout="grid"
  columns={3}
  aspectRatio="landscape"
  lightbox
  showCaptions
  filterable
  background="subtle"
/>;
```

### Masonry Photo Gallery

```tsx
<Gallery title="Photo Gallery" images={photos} layout="masonry" columns={4} lightbox gap="sm" />
```

### Product Images Carousel

```tsx
<Gallery
  title="Product Images"
  images={[
    { id: 1, src: '/product/front.jpg', alt: 'Product front view' },
    { id: 2, src: '/product/side.jpg', alt: 'Product side view' },
    { id: 3, src: '/product/back.jpg', alt: 'Product back view' },
    { id: 4, src: '/product/detail.jpg', alt: 'Product detail' },
  ]}
  layout="carousel"
  lightbox
/>
```

### Team Photos

```tsx
<Gallery
  title="Life at Orion"
  description="A glimpse into our culture and workspace."
  images={teamPhotos}
  layout="grid"
  columns={4}
  aspectRatio="square"
  gap="sm"
  lightbox={false}
/>
```

### Event Gallery with Filtering

```tsx
<Gallery
  title="Conference 2024"
  images={[
    { id: 1, src: '/event/keynote.jpg', alt: 'Keynote presentation', category: 'Keynotes' },
    { id: 2, src: '/event/workshop.jpg', alt: 'Workshop session', category: 'Workshops' },
    { id: 3, src: '/event/networking.jpg', alt: 'Networking event', category: 'Networking' },
    { id: 4, src: '/event/panel.jpg', alt: 'Panel discussion', category: 'Keynotes' },
    // ... more images
  ]}
  filterable
  lightbox
  showCaptions
/>
```

---

## Accessibility

- All images require `alt` text
- Lightbox is keyboard accessible
- Filter buttons have proper ARIA attributes
- Captions associated with images
- Focus management in lightbox mode

```tsx
// Good: Descriptive alt text
{
  src: "/project.jpg",
  alt: "Mobile app dashboard showing daily activity metrics and goal progress"
}

// Bad: Unhelpful alt text
{
  src: "/project.jpg",
  alt: "Screenshot"  // Too vague
}

// Bad: Missing alt text
{
  src: "/project.jpg"
  // alt is required!
}
```

---

## Anti-Patterns

### Missing Alt Text

```tsx
// WRONG - Alt text is required
{ id: 1, src: "/img.jpg" }

// CORRECT - Always include descriptive alt
{ id: 1, src: "/img.jpg", alt: "Detailed description of image content" }
```

### Inconsistent Image Sizes

```tsx
// WRONG - Mix of different sized source images
images={[
  { id: 1, src: "/small-image.jpg", alt: "..." },    // 400x300
  { id: 2, src: "/huge-image.jpg", alt: "..." },     // 4000x3000
]}

// CORRECT - Use thumbnails for grid, full for lightbox
images={[
  { id: 1, src: "/full/1.jpg", thumbnail: "/thumb/1.jpg", alt: "..." },
  { id: 2, src: "/full/2.jpg", thumbnail: "/thumb/2.jpg", alt: "..." },
]}
```

### Too Many Columns

```tsx
// WRONG - Images too small to see
<Gallery columns={5} aspectRatio="square" images={[...manyImages]} />

// CORRECT - Balance columns with image detail
<Gallery columns={3} images={[...manyImages]} />
// or use masonry for varying sizes
<Gallery layout="masonry" columns={4} images={[...manyImages]} />
```

### No Lightbox for Small Grids

```tsx
// WRONG - Small thumbnails with no way to see detail
<Gallery columns={5} lightbox={false} images={detailedImages} />

// CORRECT - Enable lightbox for detailed viewing
<Gallery columns={5} lightbox images={detailedImages} />
```

---

## When to Use Gallery

| Scenario           | Recommendation                              |
| ------------------ | ------------------------------------------- |
| Portfolio showcase | `layout="grid"` or `masonry`, with lightbox |
| Event photos       | `layout="masonry"`, filterable              |
| Product images     | `layout="carousel"` or small grid           |
| Team culture       | `layout="grid"`, square aspect              |

## When NOT to Use Gallery

| Scenario          | Use Instead                  |
| ----------------- | ---------------------------- |
| Single hero image | Hero section with background |
| Blog post images  | Inline in article            |
| Product catalog   | Product grid component       |
| Avatar collection | Team section                 |

---

## Related Components

- **[CarouselSection](../CarouselSection/README.md)** — Content carousel
- **[Blog](../Blog/README.md)** — Article previews with images
- **[Team](../Team/README.md)** — Team member photos
- **[Hero](../Hero/README.md)** — Hero with media
