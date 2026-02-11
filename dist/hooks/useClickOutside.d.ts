/**
 * useClickOutside Hook
 *
 * Detects clicks outside of a specified element.
 *
 * @example
 * ```tsx
 * const ref = useRef<HTMLDivElement>(null);
 * useClickOutside(ref, () => setIsOpen(false));
 *
 * return <div ref={ref}>Dropdown content</div>;
 * ```
 */
import { type RefObject } from 'react';
/**
 * Hook to detect clicks outside of a referenced element
 *
 * @param ref - React ref to the element to monitor
 * @param handler - Callback function when click outside is detected
 * @param enabled - Whether the hook is active (default: true)
 */
export declare function useClickOutside<T extends HTMLElement = HTMLElement>(ref: RefObject<T | null>, handler: (event: MouseEvent | TouchEvent) => void, enabled?: boolean): void;
/**
 * Hook to detect clicks outside of multiple elements
 *
 * @param refs - Array of React refs to monitor
 * @param handler - Callback function when click outside all refs is detected
 * @param enabled - Whether the hook is active (default: true)
 */
export declare function useClickOutsideMultiple<T extends HTMLElement = HTMLElement>(refs: RefObject<T | null>[], handler: (event: MouseEvent | TouchEvent) => void, enabled?: boolean): void;
//# sourceMappingURL=useClickOutside.d.ts.map