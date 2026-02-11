/**
 * useDebounce Hook
 *
 * Debounces a value, updating only after a specified delay.
 *
 * @example
 * ```tsx
 * const [search, setSearch] = useState('');
 * const debouncedSearch = useDebounce(search, 300);
 *
 * useEffect(() => {
 *   // Only runs 300ms after user stops typing
 *   fetchResults(debouncedSearch);
 * }, [debouncedSearch]);
 * ```
 */
/**
 * Hook to debounce a value
 *
 * @param value - Value to debounce
 * @param delay - Debounce delay in milliseconds
 * @returns Debounced value
 */
export declare function useDebounce<T>(value: T, delay: number): T;
/**
 * Options for useDebouncedCallback
 */
export interface UseDebouncedCallbackOptions {
    /**
     * Whether to call immediately on the leading edge
     * @default false
     */
    leading?: boolean;
    /**
     * Whether to call on the trailing edge
     * @default true
     */
    trailing?: boolean;
    /**
     * Maximum time to wait before forcing invocation
     */
    maxWait?: number;
}
/**
 * Hook to create a debounced callback function
 *
 * @param callback - Function to debounce
 * @param delay - Debounce delay in milliseconds
 * @param options - Additional options
 * @returns Debounced callback and control functions
 */
export declare function useDebouncedCallback<T extends (...args: unknown[]) => unknown>(callback: T, delay: number, options?: UseDebouncedCallbackOptions): {
    callback: (...args: Parameters<T>) => void;
    cancel: () => void;
    flush: () => void;
    isPending: () => boolean;
};
//# sourceMappingURL=useDebounce.d.ts.map