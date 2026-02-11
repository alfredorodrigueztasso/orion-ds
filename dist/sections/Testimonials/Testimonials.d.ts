/**
 * Testimonials Component
 *
 * A testimonials section with support for quotes, avatars, ratings, and
 * multiple visual variants. Composes atomic components from @orion/react.
 *
 * @example
 * ```tsx
 * <Testimonials
 *   eyebrow={<Badge>Testimonials</Badge>}
 *   title="What our customers say"
 *   description="See why thousands of teams love our product"
 *   testimonials={[
 *     {
 *       quote: "This product changed everything for us.",
 *       author: {
 *         name: "Jane Doe",
 *         role: "CEO",
 *         company: "Acme Corp",
 *         avatar: <img src="/avatar.jpg" alt="Jane" />
 *       },
 *       rating: 5
 *     }
 *   ]}
 *   columns={3}
 * />
 * ```
 */
import type { TestimonialsProps } from './Testimonials.types';
export declare const Testimonials: import("react").ForwardRefExoticComponent<TestimonialsProps & import("react").RefAttributes<HTMLElement>>;
//# sourceMappingURL=Testimonials.d.ts.map