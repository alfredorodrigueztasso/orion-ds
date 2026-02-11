/**
 * useChatInput Hook
 *
 * Manages chat input state including text, attachments, and submission.
 */
export interface UseChatInputOptions {
    /** Maximum character count */
    maxLength?: number;
    /** Callback when message is sent */
    onSend?: (message: string, attachments?: File[]) => void;
    /** Whether input is disabled */
    disabled?: boolean;
}
export interface UseChatInputReturn {
    /** Current input value */
    value: string;
    /** Set input value */
    setValue: (value: string) => void;
    /** Pending file attachments */
    attachments: File[];
    /** Add files to attachments */
    addAttachments: (files: File[]) => void;
    /** Remove attachment by index */
    removeAttachment: (index: number) => void;
    /** Clear all attachments */
    clearAttachments: () => void;
    /** Handle form submission */
    handleSubmit: () => void;
    /** Handle key down (for Enter to send) */
    handleKeyDown: (e: React.KeyboardEvent) => void;
    /** Ref for textarea element */
    textareaRef: React.RefObject<HTMLTextAreaElement | null>;
    /** Whether input is empty */
    isEmpty: boolean;
    /** Current character count */
    charCount: number;
    /** Whether character limit is exceeded */
    isOverLimit: boolean;
    /** Focus the input */
    focus: () => void;
}
export declare function useChatInput(options?: UseChatInputOptions): UseChatInputReturn;
//# sourceMappingURL=useChatInput.d.ts.map