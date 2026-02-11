/**
 * useKeyboard Hook
 *
 * Handles keyboard shortcuts and key events.
 *
 * @example
 * ```tsx
 * // Single key
 * useKeyboard('Escape', () => closeModal());
 *
 * // With modifiers
 * useKeyboard('k', () => openSearch(), { meta: true });
 * useKeyboard('s', () => save(), { ctrl: true });
 *
 * // Multiple keys
 * useKeyboardShortcuts({
 *   'Escape': () => closeModal(),
 *   'Meta+k': () => openSearch(),
 *   'Ctrl+s': () => save(),
 * });
 * ```
 */
/**
 * Key modifier options
 */
export interface KeyModifiers {
    /**
     * Require Ctrl key
     * @default false
     */
    ctrl?: boolean;
    /**
     * Require Alt/Option key
     * @default false
     */
    alt?: boolean;
    /**
     * Require Shift key
     * @default false
     */
    shift?: boolean;
    /**
     * Require Meta/Cmd key (Mac) or Windows key
     * @default false
     */
    meta?: boolean;
}
/**
 * Options for useKeyboard hook
 */
export interface UseKeyboardOptions extends KeyModifiers {
    /**
     * Whether the handler is enabled
     * @default true
     */
    enabled?: boolean;
    /**
     * Event type to listen for
     * @default 'keydown'
     */
    event?: 'keydown' | 'keyup' | 'keypress';
    /**
     * Whether to prevent default browser behavior
     * @default true
     */
    preventDefault?: boolean;
    /**
     * Whether to stop event propagation
     * @default false
     */
    stopPropagation?: boolean;
    /**
     * Target element (default: document)
     */
    target?: HTMLElement | null;
    /**
     * Only trigger if target element is focused
     * @default false
     */
    targetOnly?: boolean;
}
/**
 * Hook to handle a single keyboard shortcut
 *
 * @param key - Key to listen for (e.g., 'Escape', 'Enter', 'k')
 * @param handler - Callback when key is pressed
 * @param options - Additional options
 */
export declare function useKeyboard(key: string, handler: (event: KeyboardEvent) => void, options?: UseKeyboardOptions): void;
/**
 * Shortcut definition with handler
 */
export type KeyboardShortcuts = Record<string, () => void>;
/**
 * Hook to handle multiple keyboard shortcuts
 *
 * @param shortcuts - Object mapping shortcut strings to handlers
 * @param options - Common options for all shortcuts
 */
export declare function useKeyboardShortcuts(shortcuts: KeyboardShortcuts, options?: Omit<UseKeyboardOptions, keyof KeyModifiers>): void;
//# sourceMappingURL=useKeyboard.d.ts.map