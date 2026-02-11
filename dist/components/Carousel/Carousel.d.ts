/**
 * Carousel Component
 *
 * An atomic carousel with horizontal scrolling, snap behavior, and peek effect.
 * This is a low-level component for use within cards, modals, or custom layouts.
 * For full-page carousel sections with title/description, use CarouselSection.
 *
 * @example
 * ```tsx
 * // Inside a Card
 * <Card>
 *   <Carousel
 *     items={[
 *       { image: <img src="/1.jpg" />, title: "Slide 1" },
 *       { image: <img src="/2.jpg" />, title: "Slide 2" },
 *     ]}
 *     variant="gallery"
 *     aspectRatio="16/9"
 *   />
 * </Card>
 *
 * // Inside a Modal
 * <Modal>
 *   <Modal.Body>
 *     <Carousel items={items} showNavigation showPagination />
 *   </Modal.Body>
 * </Modal>
 * ```
 */
import type { CarouselProps } from './Carousel.types';
export declare const Carousel: import("react").ForwardRefExoticComponent<CarouselProps & import("react").RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Carousel.d.ts.map