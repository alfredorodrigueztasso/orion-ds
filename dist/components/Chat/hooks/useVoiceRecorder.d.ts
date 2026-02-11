/**
 * useVoiceRecorder Hook
 *
 * Provides voice recording functionality using the MediaRecorder API.
 * Includes duration tracking and error handling.
 */
import type { VoiceRecorderState } from '../Chat.types';
export interface UseVoiceRecorderOptions {
    /** Maximum recording duration in seconds */
    maxDuration?: number;
    /** Audio MIME type */
    mimeType?: string;
    /** Callback when recording is complete */
    onRecordingComplete?: (blob: Blob) => void;
    /** Callback on error */
    onError?: (error: string) => void;
}
export interface UseVoiceRecorderReturn extends VoiceRecorderState {
    /** Start recording */
    startRecording: () => Promise<void>;
    /** Stop recording */
    stopRecording: () => void;
    /** Cancel recording */
    cancelRecording: () => void;
    /** Reset state */
    reset: () => void;
    /** Whether recording is supported */
    isSupported: boolean;
}
export declare function useVoiceRecorder(options?: UseVoiceRecorderOptions): UseVoiceRecorderReturn;
//# sourceMappingURL=useVoiceRecorder.d.ts.map