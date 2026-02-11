/**
 * ChatTypingIndicator Component
 *
 * Circular processing indicator shown before content generation begins.
 * Intentionally abstract — communicates activity without representing
 * specific progress, reducing temporal expectations.
 *
 * Renders in assistant-message layout so the transition to streaming
 * content feels seamless. Avatar hidden by default, matching ChatMessage.
 */
import React from 'react';
import type { ChatTypingIndicatorProps } from '../Chat.types';
export declare const ChatTypingIndicator: React.FC<ChatTypingIndicatorProps>;
//# sourceMappingURL=ChatTypingIndicator.d.ts.map