/**
 * CommandBar Component
 *
 * A command palette (Cmd+K) for quick navigation and actions.
 * Optimized for Product Mode with keyboard-first interaction.
 *
 * @example
 * ```tsx
 * <CommandBar
 *   open={isOpen}
 *   onOpenChange={setIsOpen}
 *   commands={[
 *     { id: 'home', label: 'Go to Home', icon: <Home />, onSelect: () => navigate('/') }
 *   ]}
 * />
 * ```
 */
import type { CommandBarProps } from './CommandBar.types';
export declare const CommandBar: import("react").ForwardRefExoticComponent<CommandBarProps & import("react").RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=CommandBar.d.ts.map