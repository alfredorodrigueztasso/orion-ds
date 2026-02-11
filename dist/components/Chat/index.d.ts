/**
 * Chat Component - AI-first chat interface with multimodal support.
 *
 * @example
 * ```tsx
 * import { Chat } from '@orion-ds/react';
 *
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
export { Chat } from './Chat';
export type { ChatRole, MessageStatus, AttachmentType, MessageReaction, ChatAttachment, ChatMessage, ChatConversation, VoiceRecorderState, ChatProps, ChatHeaderProps, ChatMessagesProps, ChatMessageProps, ChatInputProps, ChatTypingIndicatorProps, ChatCodeBlockProps, ChatMarkdownProps, ChatImagePreviewProps, ChatAudioPlayerProps, ChatVoiceRecorderProps, ChatFileUploadProps, ChatAttachmentPreviewProps, ChatSidebarProps, ChatSectionProps, ChatPageTemplateProps, ChatLightboxProps, } from './Chat.types';
export { useAutoScroll, useVoiceRecorder, useChatInput, useStreamingText, } from './hooks';
export type { UseAutoScrollOptions, UseAutoScrollReturn, UseVoiceRecorderOptions, UseVoiceRecorderReturn, UseChatInputOptions, UseChatInputReturn, UseStreamingTextOptions, UseStreamingTextReturn, } from './hooks';
//# sourceMappingURL=index.d.ts.map