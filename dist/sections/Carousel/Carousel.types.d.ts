/**
 * Carousel Component Types
 *
 * Type definitions for the Orion Carousel section component.
 * Inspired by Apple's editorial carousel design.
 */
import type { HTMLAttributes, ReactNode } from 'react';
/**
 * Carousel visual variant
 */
export type CarouselVariant = 'editorial' | 'product' | 'gallery';
/**
 * Carousel aspect ratio
 */
export type CarouselAspectRatio = '16/9' | '4/3' | '1/1' | '3/4';
/**
 * Carousel gap size
 */
export type CarouselGap = 'sm' | 'md' | 'lg';
/**
 * Overlay style for carousel cards
 */
export type CarouselOverlay = 'none' | 'gradient' | 'dark';
/**
 * Carousel item data structure
 */
export interface CarouselItem {
    /**
     * Background image element (typically an img)
     */
    image: ReactNode;
    /**
     * Small category/tag text above title
     */
    eyebrow?: string;
    /**
     * Main headline for the card
     */
    title: string;
    /**
     * Short description/subtitle
     */
    description?: string;
    /**
     * Optional action element (link or button)
     */
    action?: ReactNode;
    /**
     * Overlay style for text legibility
     * @default 'gradient'
     */
    overlay?: CarouselOverlay;
}
/**
 * Carousel card props (internal component)
 */
export interface CarouselCardProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Carousel item data
     */
    item: CarouselItem;
    /**
     * Aspect ratio of the card
     * @default '16/9'
     */
    aspectRatio?: CarouselAspectRatio;
    /**
     * Visual variant
     * @default 'editorial'
     */
    variant?: CarouselVariant;
}
/**
 * Carousel section props
 *
 * @example
 * ```tsx
 * <Carousel
 *   title="Featured Stories"
 *   variant="editorial"
 *   peek={true}
 *   items={[
 *     {
 *       image: <img src="/hero-1.jpg" alt="" />,
 *       eyebrow: "Design",
 *       title: "The future of interfaces",
 *       description: "How AI is reshaping how we build",
 *       overlay: "gradient"
 *     }
 *   ]}
 * />
 * ```
 */
export interface CarouselProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
    /**
     * Optional eyebrow/badge above title
     */
    eyebrow?: ReactNode;
    /**
     * Section title
     */
    title?: ReactNode;
    /**
     * Section description
     */
    description?: ReactNode;
    /**
     * Array of carousel items
     */
    items: CarouselItem[];
    /**
     * Visual variant
     * - editorial: Magazine-style with large images and text overlays
     * - product: Product showcase cards
     * - gallery: Simple image gallery
     * @default 'editorial'
     */
    variant?: CarouselVariant;
    /**
     * Aspect ratio for cards
     * @default '16/9'
     */
    aspectRatio?: CarouselAspectRatio;
    /**
     * Show cards cut at edge (Apple style peek effect)
     * @default true
     */
    peek?: boolean;
    /**
     * Enable auto-scroll
     * @default false
     */
    autoScroll?: boolean;
    /**
     * Auto-scroll interval in milliseconds
     * @default 5000
     */
    autoScrollInterval?: number;
    /**
     * Gap between cards
     * @default 'md'
     */
    gap?: CarouselGap;
    /**
     * Background style
     * @default 'base'
     */
    background?: 'base' | 'subtle' | 'sunken' | 'none';
    /**
     * Show navigation arrows
     * @default true
     */
    showNavigation?: boolean;
    /**
     * Show pagination dots
     * @default false
     */
    showPagination?: boolean;
}
//# sourceMappingURL=Carousel.types.d.ts.map