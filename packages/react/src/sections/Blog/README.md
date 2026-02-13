# Blog Section

> Article previews with images, metadata, and multiple layout options.

## Quick Start

```tsx
import { Blog, Badge } from '@orion/react';

<Blog
  eyebrow={<Badge>Blog</Badge>}
  title="Latest Articles"
  description="Insights, tutorials, and updates from our team"
  articles={[
    {
      id: 1,
      title: 'Getting Started with Orion',
      excerpt: 'Learn the basics of building with Orion Design System.',
      image: '/blog/getting-started.jpg',
      category: 'Tutorial',
      author: { name: 'Jane Doe', avatar: '/avatars/jane.jpg' },
      date: '2024-01-15',
      readTime: 5,
      href: '/blog/getting-started',
    },
    {
      id: 2,
      title: 'Design Tokens Deep Dive',
      excerpt: 'Understanding the power of design tokens in modern systems.',
      image: '/blog/tokens.jpg',
      category: 'Engineering',
      author: { name: 'John Smith' },
      date: '2024-01-10',
      readTime: 8,
      href: '/blog/design-tokens',
    },
  ]}
  layout="grid"
  columns={3}
/>;
```

---

## Features

- **3 Layout Options** — Grid, List, Featured
- **Flexible Columns** — 2, 3, or 4 column grid
- **Rich Metadata** — Author, date, category, read time
- **Featured Images** — Thumbnail support
- **View All Link** — Optional link to full blog
- **Brand-Aware** — Adapts to all Orion brands

---

## Props Reference

```typescript
interface BlogProps {
  // Header
  eyebrow?: ReactNode; // Badge/label above title
  title?: ReactNode; // Section title
  description?: ReactNode; // Section description

  // Content
  articles: BlogArticle[]; // REQUIRED - Array of articles

  // Layout
  layout?: 'grid' | 'list' | 'featured'; // default: 'grid'
  columns?: 2 | 3 | 4; // Grid columns - default: 3

  // Display Options
  showAuthor?: boolean; // Show author info - default: true
  showDate?: boolean; // Show date - default: true
  showCategory?: boolean; // Show category badge - default: true
  showReadTime?: boolean; // Show read time - default: true

  // View All
  viewAllHref?: string; // Link to full blog
  viewAllText?: string; // Link text - default: "View all articles"

  // Styling
  background?: 'base' | 'subtle' | 'none'; // default: 'base'
}

interface BlogArticle {
  id: string | number; // Unique identifier
  title: string; // Article title
  excerpt: string; // Summary/preview text
  image?: string; // Featured image URL
  category?: string; // Category label
  author?: {
    name: string;
    avatar?: string;
  };
  date?: string; // Publication date
  readTime?: number; // Minutes to read
  href?: string; // Article URL
  tags?: string[]; // Tags/labels
}
```

---

## Layout Variants

### `layout="grid"` (Default)

Card grid with images and metadata.

```tsx
<Blog layout="grid" columns={3} articles={articles} />
```

### `layout="list"`

Vertical list with horizontal cards.

```tsx
<Blog layout="list" articles={articles} />
```

### `layout="featured"`

First article large, rest in grid.

```tsx
<Blog layout="featured" articles={articles} />
```

---

## Column Options

```tsx
// 2 columns (larger cards)
<Blog layout="grid" columns={2} articles={articles} />

// 3 columns (default)
<Blog layout="grid" columns={3} articles={articles} />

// 4 columns (compact)
<Blog layout="grid" columns={4} articles={articles} />
```

---

## Article Configuration

### Basic Article

```tsx
{
  id: 1,
  title: "Article Title",
  excerpt: "A brief description of the article content.",
  href: "/blog/article-slug"
}
```

### Full Article

```tsx
{
  id: 1,
  title: "Complete Guide to Design Systems",
  excerpt: "Everything you need to know about building and maintaining design systems at scale.",
  image: "/blog/design-systems.jpg",
  category: "Guide",
  author: {
    name: "Jane Doe",
    avatar: "/avatars/jane.jpg"
  },
  date: "2024-01-15",
  readTime: 12,
  href: "/blog/design-systems-guide",
  tags: ["design", "systems", "tutorial"]
}
```

---

## Display Options

### Hide Metadata

```tsx
// Minimal display
<Blog
  articles={articles}
  showAuthor={false}
  showDate={false}
  showCategory={false}
  showReadTime={false}
/>
```

### Show Only Essential

```tsx
<Blog
  articles={articles}
  showAuthor={true}
  showDate={true}
  showCategory={true}
  showReadTime={false}
/>
```

---

## View All Link

```tsx
<Blog
  title="Latest Posts"
  articles={recentPosts}
  viewAllHref="/blog"
  viewAllText="Read all posts"
/>
```

---

## Complete Examples

### Landing Page Blog Section

```tsx
import { Blog, Badge } from '@orion/react';

<Blog
  eyebrow={<Badge variant="brand">From the Blog</Badge>}
  title="Latest insights"
  description="Tips, tutorials, and industry updates from our team."
  articles={[
    {
      id: 1,
      title: 'Announcing Orion 2.0',
      excerpt: 'The biggest update yet with new components, themes, and performance improvements.',
      image: '/blog/orion-2.jpg',
      category: 'Announcement',
      author: { name: 'Sarah Chen', avatar: '/team/sarah.jpg' },
      date: '2024-01-20',
      readTime: 3,
      href: '/blog/orion-2',
    },
    {
      id: 2,
      title: 'Building Accessible Components',
      excerpt: 'A deep dive into making your design system accessible to everyone.',
      image: '/blog/accessibility.jpg',
      category: 'Tutorial',
      author: { name: 'Marcus Johnson', avatar: '/team/marcus.jpg' },
      date: '2024-01-15',
      readTime: 8,
      href: '/blog/accessible-components',
    },
    {
      id: 3,
      title: 'Design Tokens Best Practices',
      excerpt: 'How to structure your design tokens for maximum flexibility.',
      image: '/blog/tokens.jpg',
      category: 'Engineering',
      author: { name: 'Emily Rodriguez' },
      date: '2024-01-10',
      readTime: 6,
      href: '/blog/design-tokens-practices',
    },
  ]}
  layout="grid"
  columns={3}
  viewAllHref="/blog"
  viewAllText="Read all articles"
  background="subtle"
/>;
```

### Featured Layout

```tsx
<Blog
  title="Featured Stories"
  articles={[
    {
      id: 1,
      title: 'The Future of Design Systems',
      excerpt: 'An in-depth look at where design systems are headed...',
      image: '/blog/featured.jpg',
      category: 'Featured',
      author: { name: 'CEO Name' },
      date: '2024-01-20',
      readTime: 10,
      href: '/blog/future-of-design',
    },
    ...otherArticles,
  ]}
  layout="featured"
/>
```

### Compact List Layout

```tsx
<Blog
  title="Recent Updates"
  articles={updates}
  layout="list"
  showCategory={false}
  showReadTime={false}
/>
```

### Category-Filtered Section

```tsx
<Blog
  eyebrow="Engineering"
  title="Technical Deep Dives"
  description="In-depth technical articles from our engineering team."
  articles={engineeringArticles}
  layout="grid"
  columns={2}
  showCategory={false} // Already filtered by category
/>
```

---

## Accessibility

- Article cards are semantic `<article>` elements
- Images have alt text (use descriptive text, not title)
- Links are keyboard accessible
- Date formatted for screen readers
- Category badges have appropriate roles

```tsx
// Good: Descriptive image (set in image processing)
{
  image: "/blog/design-tokens.jpg",  // Has alt text in img tag
  title: "Design Tokens Guide"
}

// Alt text should describe the image, not repeat the title
```

---

## Anti-Patterns

### Missing Images

```tsx
// WRONG - Inconsistent (some with images, some without)
articles={[
  { id: 1, title: "...", image: "/image.jpg", ... },
  { id: 2, title: "...", ... },  // No image
  { id: 3, title: "...", image: "/image.jpg", ... },
]}

// CORRECT - Consistent presentation
// Either all have images, or none do
articles={[
  { id: 1, title: "...", image: "/image1.jpg", ... },
  { id: 2, title: "...", image: "/image2.jpg", ... },
  { id: 3, title: "...", image: "/image3.jpg", ... },
]}
```

### Long Excerpts

```tsx
// WRONG - Excerpt as full paragraph
{
  excerpt: "In this comprehensive guide, we'll explore everything you need to know about design tokens. We'll cover what they are, why they matter, how to implement them, best practices for naming conventions, and how to integrate them with your existing design workflow. By the end, you'll have a complete understanding of...";
}

// CORRECT - Brief, enticing preview
{
  excerpt: 'A comprehensive guide to implementing design tokens in your system.';
}
```

### No Links

```tsx
// WRONG - Articles without links are confusing
articles={[
  { id: 1, title: "Article", excerpt: "..." }  // Can't click to read
]}

// CORRECT - Always include href
articles={[
  { id: 1, title: "Article", excerpt: "...", href: "/blog/article" }
]}
```

---

## When to Use Blog

| Scenario      | Recommendation                     |
| ------------- | ---------------------------------- |
| Landing page  | 3 latest articles, `layout="grid"` |
| Blog homepage | `layout="featured"` or full grid   |
| Sidebar       | `layout="list"`, recent posts      |
| Category page | Filtered grid                      |

## When NOT to Use Blog

| Scenario          | Use Instead                         |
| ----------------- | ----------------------------------- |
| Full blog archive | Dedicated blog page with pagination |
| News feed         | ActivityFeed section                |
| Documentation     | Docs site structure                 |
| Single article    | Article page layout                 |

---

## Related Components

- **[Gallery](../Gallery/README.md)** — Image gallery
- **[CarouselSection](../CarouselSection/README.md)** — Content carousel
- **[Card](../../components/Card/README.md)** — Card component
- **[Badge](../../components/Badge/README.md)** — Category badges
