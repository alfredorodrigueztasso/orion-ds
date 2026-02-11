/**
 * Carousel Component
 *
 * An Apple-style editorial carousel with horizontal scrolling, snap behavior,
 * and peek effect. Supports editorial, product, and gallery variants.
 *
 * @example
 * ```tsx
 * <Carousel
 *   eyebrow={<Badge>Featured</Badge>}
 *   title="Featured Stories"
 *   variant="editorial"
 *   peek={true}
 *   aspectRatio="16/9"
 *   items={[
 *     {
 *       image: <img src="/hero-1.jpg" alt="" />,
 *       eyebrow: "Design",
 *       title: "The future of interfaces",
 *       description: "How AI is reshaping how we build",
 *       overlay: "gradient"
 *     },
 *     {
 *       image: <img src="/hero-2.jpg" alt="" />,
 *       eyebrow: "Engineering",
 *       title: "Building at scale",
 *       description: "Lessons from shipping to millions",
 *       overlay: "gradient"
 *     }
 *   ]}
 * />
 * ```
 */
import type { CarouselProps } from './Carousel.types';
export declare const Carousel: import("react").ForwardRefExoticComponent<CarouselProps & import("react").RefAttributes<HTMLElement>>;
//# sourceMappingURL=Carousel.d.ts.map