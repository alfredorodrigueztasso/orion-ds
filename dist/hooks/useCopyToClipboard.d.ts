/**
 * useCopyToClipboard Hook
 *
 * Provides a function to copy text to clipboard with status tracking.
 *
 * @example
 * ```tsx
 * const { copy, copied, error } = useCopyToClipboard();
 *
 * return (
 *   <Button onClick={() => copy('Hello!')}>
 *     {copied ? 'Copied!' : 'Copy'}
 *   </Button>
 * );
 * ```
 */
/**
 * Options for useCopyToClipboard hook
 */
export interface UseCopyToClipboardOptions {
    /**
     * Duration in ms to show "copied" state
     * @default 2000
     */
    copiedDuration?: number;
    /**
     * Callback when copy succeeds
     */
    onSuccess?: (text: string) => void;
    /**
     * Callback when copy fails
     */
    onError?: (error: Error) => void;
}
/**
 * Return type for useCopyToClipboard hook
 */
export interface UseCopyToClipboardReturn {
    /**
     * Function to copy text to clipboard
     */
    copy: (text: string) => Promise<boolean>;
    /**
     * Whether text was recently copied
     */
    copied: boolean;
    /**
     * The last copied text
     */
    copiedText: string | null;
    /**
     * Any error that occurred
     */
    error: Error | null;
    /**
     * Reset the copied state
     */
    reset: () => void;
}
/**
 * Hook to copy text to clipboard
 *
 * @param options - Configuration options
 * @returns Copy function and status
 */
export declare function useCopyToClipboard(options?: UseCopyToClipboardOptions): UseCopyToClipboardReturn;
/**
 * Simplified hook that just returns the copy function
 * For simple use cases where you don't need status tracking
 */
export declare function useCopy(): (text: string) => Promise<boolean>;
//# sourceMappingURL=useCopyToClipboard.d.ts.map