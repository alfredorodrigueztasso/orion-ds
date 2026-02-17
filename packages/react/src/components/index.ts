/**
 * Components Index
 *
 * Internal export file for component imports within the package.
 */

// Icons
export { Icon } from './Icon';
export type { IconProps, IconSize, IconColor } from './Icon';

// Actions
export { Button } from './Button';
export type { ButtonProps, ButtonVariant, ButtonSize } from './Button';

// Forms
export { Field } from './Field';
export type { FieldProps } from './Field';

export { Select } from './Select';
export type { SelectProps, SelectOption } from './Select';

export { Switch } from './Switch';
export type { SwitchProps, SwitchSize } from './Switch';

export { Checkbox } from './Checkbox';
export type { CheckboxProps, CheckboxSize } from './Checkbox';

export { Radio } from './Radio';
export type { RadioProps, RadioSize } from './Radio';

export { Textarea } from './Textarea';
export type { TextareaProps, TextareaSize, TextareaResize } from './Textarea';

// Layout
export { Card } from './Card';
export type {
  CardProps,
  CardHeaderProps,
  CardBodyProps,
  CardFooterProps,
  CardVariant,
} from './Card';

// Feedback
export { Badge } from './Badge';
export type { BadgeProps, BadgeVariant, BadgeSize } from './Badge';

export { Alert } from './Alert';
export type { AlertProps, AlertVariant } from './Alert';

export { Spinner } from './Spinner';
export type { SpinnerProps, SpinnerSize, SpinnerVariant } from './Spinner';

export { ProgressBar } from './ProgressBar';
export type { ProgressBarProps, ProgressBarSize, ProgressBarVariant } from './ProgressBar';

export { Tooltip } from './Tooltip';
export type { TooltipProps, TooltipPlacement } from './Tooltip';

// Data Display
export { Avatar } from './Avatar';
export type { AvatarProps, AvatarSize } from './Avatar';

export { AgentCard } from './AgentCard';
export type { AgentCardProps, AgentStatus } from './AgentCard';

export { Table } from './Table';
export type { TableProps, TableColumn, TableSize, SortDirection } from './Table';

// Navigation
export { Tabs } from './Tabs';
export type { TabsProps, TabItem } from './Tabs';

export { Breadcrumb } from './Breadcrumb';
export type {
  BreadcrumbProps,
  BreadcrumbItem,
  BreadcrumbSize,
  BreadcrumbSeparator,
} from './Breadcrumb';

export { Navbar } from './Navbar';
export type {
  NavbarProps,
  NavbarBrandProps,
  NavbarNavProps,
  NavbarLinkProps,
  NavbarActionsProps,
  NavbarHeight,
  NavbarVariant,
} from './Navbar';

// Overlays
export { Modal } from './Modal';
export type {
  ModalProps,
  ModalHeaderProps,
  ModalBodyProps,
  ModalFooterProps,
  ModalSize,
} from './Modal';

// Utilities
export { ThemeController } from './ThemeController';
export type { ThemeControllerProps } from './ThemeController';

// Media
export { Carousel, CarouselCard } from './Carousel';
export type {
  CarouselProps,
  CarouselItem,
  CarouselCardProps,
  CarouselVariant,
  CarouselAspectRatio,
  CarouselGap,
  CarouselOverlay,
  CarouselAlign,
  CarouselNavigationProps,
} from './Carousel';

// Chat (AI Chat Interface)
export { Chat } from './Chat';
export type {
  ChatRole,
  MessageStatus,
  AttachmentType,
  ChatAttachment,
  ChatMessage,
  ChatConversation,
  VoiceRecorderState,
  ChatProps,
  ChatHeaderProps,
  ChatMessagesProps,
  ChatMessageProps,
  ChatInputProps,
  ChatTypingIndicatorProps,
  ChatCodeBlockProps,
  ChatMarkdownProps,
  ChatImagePreviewProps,
  ChatAudioPlayerProps,
  ChatVoiceRecorderProps,
  ChatFileUploadProps,
  ChatAttachmentPreviewProps,
  ChatSidebarProps,
  ChatSectionProps,
  ChatPageTemplateProps,
  ChatLightboxProps,
} from './Chat';
export { useAutoScroll, useVoiceRecorder, useChatInput } from './Chat';
