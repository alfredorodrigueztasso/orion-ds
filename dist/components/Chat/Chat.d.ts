/**
 * Chat Component
 *
 * A flexible compound component for building AI chat interfaces.
 * Supports multimodal content including text, images, audio, files, and code.
 *
 * @example
 * ```tsx
 * <Chat>
 *   <Chat.Header title="AI Assistant" />
 *   <Chat.Messages>
 *     {messages.map(msg => (
 *       <Chat.Message
 *         key={msg.id}
 *         role={msg.role}
 *         content={msg.content}
 *       />
 *     ))}
 *     {isTyping && <Chat.TypingIndicator />}
 *   </Chat.Messages>
 *   <Chat.Input onSend={handleSend} />
 * </Chat>
 * ```
 */
import React from 'react';
import type { ChatProps } from './Chat.types';
import { ChatMessage, ChatMessages, ChatInput, ChatHeader, ChatTypingIndicator, ChatCodeBlock, ChatMarkdown, ChatImagePreview, ChatAudioPlayer, ChatVoiceRecorder, ChatFileUpload, ChatAttachment, ChatSidebar } from './components';
type ChatComponent = React.FC<ChatProps> & {
    Header: typeof ChatHeader;
    Messages: typeof ChatMessages;
    Message: typeof ChatMessage;
    Input: typeof ChatInput;
    TypingIndicator: typeof ChatTypingIndicator;
    CodeBlock: typeof ChatCodeBlock;
    Markdown: typeof ChatMarkdown;
    ImagePreview: typeof ChatImagePreview;
    AudioPlayer: typeof ChatAudioPlayer;
    VoiceRecorder: typeof ChatVoiceRecorder;
    FileUpload: typeof ChatFileUpload;
    Attachment: typeof ChatAttachment;
    Sidebar: typeof ChatSidebar;
};
export declare const Chat: ChatComponent;
export {};
//# sourceMappingURL=Chat.d.ts.map