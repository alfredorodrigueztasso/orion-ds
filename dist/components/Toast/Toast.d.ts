/**
 * Toast Component
 *
 * A notification system for showing temporary messages.
 *
 * @example
 * ```tsx
 * // Wrap your app with ToastProvider
 * <ToastProvider>
 *   <App />
 * </ToastProvider>
 *
 * // Use the useToast hook in any component
 * const { toast, success, error } = useToast();
 *
 * toast({ message: 'Hello!' });
 * success('Operation completed');
 * error('Something went wrong');
 * ```
 */
import type { ToastProviderProps, ToastContextValue } from './Toast.types';
/**
 * Hook to access toast functions
 */
export declare const useToast: () => ToastContextValue;
/**
 * Toast Provider Component
 */
export declare const ToastProvider: {
    ({ children, position, maxToasts, defaultDuration, }: ToastProviderProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=Toast.d.ts.map