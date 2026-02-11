/**
 * useLocalStorage Hook
 *
 * Syncs state with localStorage for persistence across sessions.
 *
 * @example
 * ```tsx
 * const [theme, setTheme] = useLocalStorage('theme', 'light');
 * const [user, setUser] = useLocalStorage<User | null>('user', null);
 *
 * // Value persists across page refreshes
 * setTheme('dark');
 * ```
 */
/**
 * Options for useLocalStorage hook
 */
export interface UseLocalStorageOptions<T> {
    /**
     * Custom serializer function
     * @default JSON.stringify
     */
    serializer?: (value: T) => string;
    /**
     * Custom deserializer function
     * @default JSON.parse
     */
    deserializer?: (value: string) => T;
    /**
     * Whether to sync across tabs
     * @default true
     */
    syncAcrossTabs?: boolean;
}
/**
 * Hook to sync state with localStorage
 *
 * @param key - localStorage key
 * @param initialValue - Initial value if key doesn't exist
 * @param options - Additional options
 * @returns [value, setValue, removeValue]
 */
export declare function useLocalStorage<T>(key: string, initialValue: T, options?: UseLocalStorageOptions<T>): [T, (value: T | ((prev: T) => T)) => void, () => void];
/**
 * Hook to sync state with sessionStorage (similar to useLocalStorage)
 */
export declare function useSessionStorage<T>(key: string, initialValue: T, options?: Omit<UseLocalStorageOptions<T>, 'syncAcrossTabs'>): [T, (value: T | ((prev: T) => T)) => void, () => void];
//# sourceMappingURL=useLocalStorage.d.ts.map