# CarouselSection

A full-page carousel section with title, description, and navigation controls. Built on top of the atomic `Carousel` component.

**For carousel use inside Cards/Modals, use the atomic `Carousel` component from components.**

## When to Use

| Need                           | Use                                    |
| ------------------------------ | -------------------------------------- |
| Full-page carousel section     | `<CarouselSection />` (this component) |
| Carousel with title/background | `<CarouselSection />` (this component) |
| Carousel inside a Card         | `<Carousel />` (from components)       |
| Carousel inside a Modal        | `<Carousel />` (from components)       |

## Installation

```tsx
import { CarouselSection } from "@orion/react";
// or
import { CarouselSection } from "@orion/react/sections";
```

## Basic Usage

```tsx
import { CarouselSection, Badge } from "@orion/react";

function FeaturedStories() {
  return (
    <CarouselSection
      eyebrow={<Badge>Featured</Badge>}
      title="Featured Stories"
      description="Check out our latest articles and insights."
      items={[
        {
          image: <img src="/hero-1.jpg" alt="" />,
          eyebrow: "Design",
          title: "The future of interfaces",
          description: "How AI is reshaping how we build",
          overlay: "gradient",
        },
        {
          image: <img src="/hero-2.jpg" alt="" />,
          eyebrow: "Engineering",
          title: "Building at scale",
          description: "Lessons from shipping to millions",
          overlay: "gradient",
        },
      ]}
    />
  );
}
```

## Props

| Prop                 | Type                                       | Default       | Description                 |
| -------------------- | ------------------------------------------ | ------------- | --------------------------- |
| `eyebrow`            | `ReactNode`                                | -             | Badge/tag above title       |
| `title`              | `ReactNode`                                | -             | Section title               |
| `description`        | `ReactNode`                                | -             | Section description         |
| `items`              | `CarouselItem[]`                           | required      | Array of carousel items     |
| `variant`            | `'editorial' \| 'product' \| 'gallery'`    | `'editorial'` | Visual style variant        |
| `aspectRatio`        | `'16/9' \| '4/3' \| '1/1' \| '3/4'`        | `'16/9'`      | Card aspect ratio           |
| `peek`               | `boolean`                                  | `true`        | Show cards cut at edge      |
| `gap`                | `'sm' \| 'md' \| 'lg'`                     | `'md'`        | Gap between cards           |
| `background`         | `'base' \| 'subtle' \| 'sunken' \| 'none'` | `'base'`      | Section background          |
| `showNavigation`     | `boolean`                                  | `true`        | Show navigation arrows      |
| `showPagination`     | `boolean`                                  | `false`       | Show pagination dots        |
| `autoScroll`         | `boolean`                                  | `false`       | Enable auto-scroll          |
| `autoScrollInterval` | `number`                                   | `5000`        | Auto-scroll interval (ms)   |
| `alignToTitle`       | `boolean`                                  | `true`        | Align first card with title |

## Title Alignment

The `alignToTitle` prop controls whether cards align with the section title:

```tsx
// Cards aligned with title (default)
<CarouselSection
  title="Featured Stories"
  alignToTitle={true}
  items={items}
/>

// Cards start from screen edge (Apple style)
<CarouselSection
  title="Featured Stories"
  alignToTitle={false}
  items={items}
/>
```

| `alignToTitle`   | Visual Effect                                        |
| ---------------- | ---------------------------------------------------- |
| `true` (default) | First card starts at the same position as the title  |
| `false`          | Cards extend to screen edges (Apple marketing style) |

## Variants

### Editorial (Default)

Magazine-style cards ideal for blog posts, case studies, and articles.

```tsx
<CarouselSection title="Latest Articles" variant="editorial" items={articles} />
```

### Product

Product showcase cards with separate content area.

```tsx
<CarouselSection
  title="Featured Products"
  variant="product"
  aspectRatio="1/1"
  items={products}
/>
```

### Gallery

Image gallery with hover-reveal captions.

```tsx
<CarouselSection
  title="Photo Gallery"
  variant="gallery"
  aspectRatio="4/3"
  items={photos}
/>
```

## Auto-Scroll

```tsx
<CarouselSection
  title="Auto-scrolling Carousel"
  autoScroll
  autoScrollInterval={3000}
  items={items}
/>
```

## With Pagination

```tsx
<CarouselSection title="With Pagination Dots" showPagination items={items} />
```

## Backgrounds

```tsx
// Subtle background
<CarouselSection background="subtle" items={items} />

// Sunken background
<CarouselSection background="sunken" items={items} />
```

## Migration from Carousel

If you were using `<Carousel>` from sections, it now exports as `<CarouselSection>`:

```tsx
// Old (still works via alias, but deprecated)
import { Carousel } from '@orion/react';
<Carousel title="..." items={[...]} />

// New (recommended)
import { CarouselSection } from '@orion/react';
<CarouselSection title="..." items={[...]} />

// For atomic carousel (inside Card/Modal)
import { Carousel } from '@orion/react';
<Carousel items={[...]} />  // No title/Section wrapper
```

## CarouselItem

```typescript
interface CarouselItem {
  image: ReactNode; // Background image element
  title: string; // Card headline
  eyebrow?: string; // Category/tag text
  description?: string; // Subtitle/description
  action?: ReactNode; // Optional button/link
  overlay?: "none" | "gradient" | "dark";
}
```

## Related

- [Carousel](../../components/Carousel/README.md) - Atomic carousel for Cards/Modals
- [Section](../Section/README.md) - Base section component
- [Container](../Container/README.md) - Layout container
