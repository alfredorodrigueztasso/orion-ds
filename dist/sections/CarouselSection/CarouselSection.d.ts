/**
 * CarouselSection Component
 *
 * A full-page carousel section with title, description, and navigation.
 * Uses the atomic Carousel component internally.
 *
 * @example
 * ```tsx
 * <CarouselSection
 *   eyebrow={<Badge>Featured</Badge>}
 *   title="Featured Stories"
 *   description="Check out our latest articles and insights."
 *   alignToTitle={true}
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
import type { CarouselSectionProps } from './CarouselSection.types';
export declare const CarouselSection: import("react").ForwardRefExoticComponent<CarouselSectionProps & import("react").RefAttributes<HTMLElement>>;
//# sourceMappingURL=CarouselSection.d.ts.map