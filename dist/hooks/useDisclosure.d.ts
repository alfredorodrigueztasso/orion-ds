/**
 * useDisclosure Hook
 *
 * Manages open/close state for modals, drawers, dropdowns, etc.
 *
 * @example
 * ```tsx
 * const { isOpen, open, close, toggle } = useDisclosure();
 *
 * return (
 *   <>
 *     <Button onClick={toggle}>Toggle Modal</Button>
 *     <Modal open={isOpen} onClose={close}>
 *       Content
 *     </Modal>
 *   </>
 * );
 * ```
 */
/**
 * Options for useDisclosure hook
 */
export interface UseDisclosureOptions {
    /**
     * Initial open state
     * @default false
     */
    defaultOpen?: boolean;
    /**
     * Callback when state changes to open
     */
    onOpen?: () => void;
    /**
     * Callback when state changes to closed
     */
    onClose?: () => void;
    /**
     * Callback when state changes (open or close)
     */
    onChange?: (isOpen: boolean) => void;
}
/**
 * Return type for useDisclosure hook
 */
export interface UseDisclosureReturn {
    /**
     * Whether the disclosure is open
     */
    isOpen: boolean;
    /**
     * Open the disclosure
     */
    open: () => void;
    /**
     * Close the disclosure
     */
    close: () => void;
    /**
     * Toggle the disclosure
     */
    toggle: () => void;
    /**
     * Set the disclosure state directly
     */
    setIsOpen: (value: boolean) => void;
}
/**
 * Hook for managing open/close state
 *
 * @param options - Configuration options
 * @returns Disclosure state and control functions
 */
export declare function useDisclosure(options?: UseDisclosureOptions): UseDisclosureReturn;
//# sourceMappingURL=useDisclosure.d.ts.map