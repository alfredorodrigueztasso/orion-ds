/**
 * useStreamingText Hook
 *
 * Reveals text progressively, word by word, simulating real-time
 * content generation. Content is final — text only grows, never rewrites.
 */
export interface UseStreamingTextOptions {
    /** Words revealed per tick (default: 2) */
    wordsPerTick?: number;
    /** Milliseconds between ticks (default: 60) */
    intervalMs?: number;
    /** Whether streaming is active (default: true) */
    enabled?: boolean;
}
export interface UseStreamingTextReturn {
    /** The portion of text currently visible */
    displayText: string;
    /** Whether all text has been revealed */
    isComplete: boolean;
}
export declare function useStreamingText(fullText: string, options?: UseStreamingTextOptions): UseStreamingTextReturn;
//# sourceMappingURL=useStreamingText.d.ts.map