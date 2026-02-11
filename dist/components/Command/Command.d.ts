/**
 * Command Component
 *
 * A searchable command palette with keyboard navigation.
 * Built without cmdk — uses internal context for search state and filtering.
 *
 * @example
 * ```tsx
 * <Command>
 *   <Command.Input placeholder="Type a command..." />
 *   <Command.List>
 *     <Command.Empty>No results found.</Command.Empty>
 *     <Command.Group heading="Suggestions">
 *       <Command.Item onSelect={() => navigate('/calendar')}>
 *         <CalendarIcon size={16} /> Calendar
 *         <Command.Shortcut>⌘C</Command.Shortcut>
 *       </Command.Item>
 *     </Command.Group>
 *   </Command.List>
 * </Command>
 * ```
 */
import React from 'react';
import type { CommandProps, CommandDialogProps, CommandInputProps, CommandListProps, CommandEmptyProps, CommandGroupProps, CommandItemProps, CommandSeparatorProps, CommandShortcutProps } from './Command.types';
export declare const Command: React.FC<CommandProps> & {
    Input: React.FC<CommandInputProps>;
    List: React.FC<CommandListProps>;
    Empty: React.FC<CommandEmptyProps>;
    Group: React.FC<CommandGroupProps>;
    Item: React.FC<CommandItemProps>;
    Separator: React.FC<CommandSeparatorProps>;
    Shortcut: React.FC<CommandShortcutProps>;
    Dialog: React.FC<CommandDialogProps>;
};
//# sourceMappingURL=Command.d.ts.map