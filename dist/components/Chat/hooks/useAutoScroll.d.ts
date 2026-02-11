/**
 * useAutoScroll Hook
 *
 * Automatically scrolls to the bottom of a container when new content is added.
 * Includes smart detection to pause auto-scroll when user scrolls up.
 */
export interface UseAutoScrollOptions {
    /** Whether auto-scroll is enabled */
    enabled?: boolean;
    /** Threshold in pixels from bottom to consider "at bottom" */
    threshold?: number;
    /** Smooth scroll behavior */
    smooth?: boolean;
}
export interface UseAutoScrollReturn {
    /** Ref to attach to the scrollable container */
    scrollRef: React.RefObject<HTMLDivElement | null>;
    /** Whether the user is currently at the bottom */
    isAtBottom: boolean;
    /** Manually scroll to bottom */
    scrollToBottom: () => void;
}
export declare function useAutoScroll(options?: UseAutoScrollOptions): UseAutoScrollReturn;
//# sourceMappingURL=useAutoScroll.d.ts.map