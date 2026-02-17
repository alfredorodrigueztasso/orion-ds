/**
 * @orion/react - Orion Design System React Component Library
 *
 * Type-safe React components built on the Orion Design System tokens.
 *
 * @example
 * ```tsx
 * // IMPORTANT: Both CSS imports are REQUIRED
 * import '@orion-ds/core/theme.css';       // Design tokens
 * import '@orion-ds/react/dist/react.css'; // Component styles
 *
 * import { Button, Field, Card, useTheme, ThemeProvider } from '@orion-ds/react';
 *
 * function App() {
 *   return (
 *     <ThemeProvider>
 *       <MyApp />
 *     </ThemeProvider>
 *   );
 * }
 *
 * function MyApp() {
 *   const { theme, toggleTheme } = useTheme();
 *
 *   return (
 *     <Card>
 *       <Card.Header>Welcome</Card.Header>
 *       <Card.Body>
 *         <Field label="Email" type="email" />
 *         <Button onClick={toggleTheme}>
 *           Switch to {theme === 'light' ? 'dark' : 'light'} mode
 *         </Button>
 *       </Card.Body>
 *     </Card>
 *   );
 * }
 * ```
 *
 * @packageDocumentation
 */

// CSS marker for style detection (used by ThemeProvider to warn about missing CSS)
import './styles/marker.css';

// ============================================================================
// COMPONENTS
// ============================================================================

// Icons
export { Icon } from './components/Icon';
export type { IconProps, IconSize, IconColor } from './components/Icon';

// Actions
export { Button } from './components/Button';
export type { ButtonProps, ButtonVariant, ButtonSize } from './components/Button';

// Forms
export { Field } from './components/Field';
export type { FieldProps } from './components/Field';

export { Select } from './components/Select';
export type { SelectProps, SelectOption } from './components/Select';

export { Switch } from './components/Switch';
export type { SwitchProps, SwitchSize } from './components/Switch';

export { Toggle } from './components/Toggle';
export type { ToggleProps, ToggleVariant, ToggleSize } from './components/Toggle';

export { ToggleGroup } from './components/ToggleGroup';
export type {
  ToggleGroupProps,
  ToggleGroupItemProps,
  ToggleGroupType,
  ToggleGroupVariant,
  ToggleGroupSize,
} from './components/ToggleGroup';

export { InputOTP } from './components/InputOTP';
export type {
  InputOTPProps,
  InputOTPGroupProps,
  InputOTPSlotProps,
  InputOTPSeparatorProps,
  InputOTPType,
  InputOTPSize,
} from './components/InputOTP';

export { Checkbox } from './components/Checkbox';
export type { CheckboxProps, CheckboxSize } from './components/Checkbox';

export { Radio } from './components/Radio';
export type { RadioProps, RadioSize } from './components/Radio';

export { Textarea } from './components/Textarea';
export type { TextareaProps, TextareaSize, TextareaResize } from './components/Textarea';

// Layout
export { Card } from './components/Card';
export type {
  CardProps,
  CardHeaderProps,
  CardBodyProps,
  CardFooterProps,
  CardVariant,
} from './components/Card';

// Error Handling
export { ErrorBoundary } from './components/ErrorBoundary';
export type { ErrorBoundaryProps } from './components/ErrorBoundary';

// Feedback
export { Badge } from './components/Badge';
export type { BadgeProps, BadgeVariant, BadgeSize } from './components/Badge';

export { Alert } from './components/Alert';
export type { AlertProps, AlertVariant } from './components/Alert';

export { Spinner } from './components/Spinner';
export type { SpinnerProps, SpinnerSize, SpinnerVariant } from './components/Spinner';

export { ProgressBar } from './components/ProgressBar';
export type {
  ProgressBarProps,
  ProgressBarSize,
  ProgressBarVariant,
} from './components/ProgressBar';

export { Tooltip } from './components/Tooltip';
export type { TooltipProps, TooltipPlacement } from './components/Tooltip';

// Data Display
export { Avatar } from './components/Avatar';
export type { AvatarProps, AvatarSize } from './components/Avatar';

export { Table } from './components/Table';
export type { TableProps, TableColumn, TableSize, SortDirection } from './components/Table';

// Navigation
export { Tabs } from './components/Tabs';
export type { TabsProps, TabItem } from './components/Tabs';

export { Breadcrumb } from './components/Breadcrumb';
export type {
  BreadcrumbProps,
  BreadcrumbItem,
  BreadcrumbSize,
  BreadcrumbSeparator,
} from './components/Breadcrumb';

export { Navbar } from './components/Navbar';
export type {
  NavbarProps,
  NavbarBrandProps,
  NavbarNavProps,
  NavbarLinkProps,
  NavbarActionsProps,
  NavbarHeight,
  NavbarVariant,
} from './components/Navbar';

// Overlays
export { Modal } from './components/Modal';
export type {
  ModalProps,
  ModalHeaderProps,
  ModalBodyProps,
  ModalFooterProps,
  ModalSize,
} from './components/Modal';

export { Drawer } from './components/Drawer';
export type {
  DrawerProps,
  DrawerPlacement,
  DrawerSize,
  DrawerHeaderProps,
  DrawerBodyProps,
  DrawerFooterProps,
} from './components/Drawer';

export { Popover } from './components/Popover';
export type { PopoverProps, PopoverPlacement, PopoverTrigger } from './components/Popover';

export { Dropdown } from './components/Dropdown';
export type {
  DropdownProps,
  DropdownItem,
  DropdownGroup,
  DropdownPlacement,
} from './components/Dropdown';

export { ToastProvider, useToast } from './components/Toast';
export type {
  Toast,
  ToastOptions,
  ToastVariant,
  ToastPosition,
  ToastProviderProps,
  ToastContextValue,
} from './components/Toast';

// AlertDialog
export { AlertDialog } from './components/AlertDialog';
export type {
  AlertDialogProps,
  AlertDialogVariant,
  AlertDialogIconProps,
  AlertDialogTitleProps,
  AlertDialogDescriptionProps,
  AlertDialogActionsProps,
} from './components/AlertDialog';

// Calendar
export { Calendar } from './components/Calendar';
export type {
  CalendarProps,
  CalendarMode,
  CalendarSingleProps,
  CalendarRangeProps,
  CalendarMultipleProps,
  DateRange,
} from './components/Calendar';

// DatePicker
export { DatePicker } from './components/DatePicker';
export type {
  DatePickerProps,
  DatePickerSingleProps,
  DatePickerRangeProps,
  DatePickerPreset,
} from './components/DatePicker';

// Chart
export {
  ChartContainer,
  ChartTooltipContent,
  ChartLegendContent,
  ChartGradient,
  ChartTooltip,
  ChartLegend,
} from './components/Chart';
export type {
  ChartConfig,
  ChartConfigItem,
  ChartContainerProps,
  ChartTooltipContentProps,
  ChartLegendContentProps,
  ChartGradientProps,
} from './components/Chart';

// Command
export { Command } from './components/Command';
export type {
  CommandProps,
  CommandDialogProps,
  CommandInputProps,
  CommandListProps,
  CommandEmptyProps,
  CommandGroupProps,
  CommandItemProps,
  CommandSeparatorProps,
  CommandShortcutProps,
} from './components/Command';

// Layout & Structure
export { Divider } from './components/Divider';
export type { DividerProps, DividerOrientation, DividerVariant } from './components/Divider';

export { Accordion } from './components/Accordion';
export type {
  AccordionProps,
  AccordionItem,
  AccordionVariant,
  AccordionItemProps,
} from './components/Accordion';

export { Collapsible } from './components/Collapsible';
export type {
  CollapsibleProps,
  CollapsibleTriggerProps,
  CollapsibleContentProps,
} from './components/Collapsible';

// Text & Links
export { Link } from './components/Link';
export type { LinkProps, LinkVariant, LinkSize } from './components/Link';

// Loading States
export { Skeleton } from './components/Skeleton';
export type { SkeletonProps, SkeletonVariant, SkeletonAnimation } from './components/Skeleton';

// Tags & Labels
export { Chip } from './components/Chip';
export type { ChipProps, ChipVariant, ChipSize } from './components/Chip';

// Empty States
export { EmptyState } from './components/EmptyState';
export type { EmptyStateProps, EmptyStateSize } from './components/EmptyState';

// Agent Cards
export { AgentCard } from './components/AgentCard';
export type { AgentCardProps, AgentStatus } from './components/AgentCard';

// Pagination
export { Pagination } from './components/Pagination';
export type { PaginationProps, PaginationSize } from './components/Pagination';

// Search
export { SearchInput } from './components/SearchInput';
export type { SearchInputProps, SearchInputSize } from './components/SearchInput';

// Lists
export { List } from './components/List';
export type { ListProps, ListItem, ListSize, ListVariant } from './components/List';

// Stepper/Wizard
export { Stepper } from './components/Stepper';
export type {
  StepperProps,
  StepItem,
  StepStatus,
  StepperOrientation,
  StepperSize,
} from './components/Stepper';

// Slider/Range
export { Slider } from './components/Slider';
export type { SliderProps, SliderSize } from './components/Slider';

// Combobox/Autocomplete
export { Combobox } from './components/Combobox';
export type {
  ComboboxProps,
  ComboboxOption,
  ComboboxGroup,
  ComboboxSize,
} from './components/Combobox';

// Utilities
export { ThemeController } from './components/ThemeController';
export type { ThemeControllerProps } from './components/ThemeController';

// Font Loader
export { FontLoader } from './components/FontLoader';
export type { FontLoaderProps } from './components/FontLoader';

// Icon Gallery (Documentation Utility)
export { IconGallery } from './components/IconGallery';
export type { IconGalleryProps } from './components/IconGallery';

// ============================================================================
// HOOKS
// ============================================================================

// Theme
export { useTheme } from './hooks';
export type { UseThemeOptions, UseThemeReturn } from './hooks';

// Media queries & responsive
export {
  useMediaQuery,
  useIsMobile,
  useIsTablet,
  useIsDesktop,
  usePrefersDarkMode,
  usePrefersReducedMotion,
} from './hooks';

// Event handlers
export { useClickOutside, useClickOutsideMultiple } from './hooks';

// State management
export { useDisclosure } from './hooks';
export type { UseDisclosureOptions, UseDisclosureReturn } from './hooks';

// Debouncing
export { useDebounce, useDebouncedCallback } from './hooks';
export type { UseDebouncedCallbackOptions } from './hooks';

// Storage
export { useLocalStorage, useSessionStorage } from './hooks';
export type { UseLocalStorageOptions } from './hooks';

// Clipboard
export { useCopyToClipboard, useCopy } from './hooks';
export type { UseCopyToClipboardOptions, UseCopyToClipboardReturn } from './hooks';

// Keyboard
export { useKeyboard, useKeyboardShortcuts } from './hooks';
export type { KeyModifiers, UseKeyboardOptions, KeyboardShortcuts } from './hooks';

// ============================================================================
// CONTEXTS
// ============================================================================

export { ThemeProvider, useThemeContext } from './contexts';
export type { ThemeProviderProps } from './contexts';

// ============================================================================
// UTILITIES
// ============================================================================

// Lucide Icons - All icons available from lucide-react
export * from './utils';

// ============================================================================
// RE-EXPORTS FROM TOKENS
// ============================================================================

// Re-export token types and utilities for convenience
export type { Theme, Brand } from './tokens/types';
export { spacing, primitives, getToken, getSemanticToken, getBrand } from './tokens';

// ============================================================================
// SECTIONS (Pre-built UI Blocks)
// ============================================================================

// Layout utilities
export { Container, Section } from './sections';
export type {
  ContainerProps,
  ContainerSize,
  SectionProps,
  SectionSpacing,
  SectionBackground,
} from './sections';

// Page sections - Phase 1
export { Hero, Features, FeatureCard, CTA, Footer } from './sections';
export type {
  // Hero
  HeroProps,
  HeroAlign,
  HeroSize,
  // Features
  FeaturesProps,
  FeatureItem,
  FeatureCardProps,
  FeaturesColumns,
  // CTA
  CTAProps,
  CTAVariant,
  CTASize,
  // Footer
  FooterProps,
  FooterBrand,
  FooterLink,
  FooterLinkGroup,
  FooterSocialLink,
  FooterVariant,
} from './sections';

// Page sections - Phase 2 (Engagement)
export {
  Pricing,
  PricingCard,
  Testimonials,
  TestimonialCard,
  Stats,
  StatItemCard,
  FAQ,
  FAQItemCard,
  Carousel,
  CarouselCard,
} from './sections';
export type {
  // Pricing
  PricingProps,
  PricingPlan,
  PricingFeature,
  PricingCardProps,
  PricingColumns,
  // Testimonials
  TestimonialsProps,
  Testimonial,
  TestimonialAuthor,
  TestimonialCardProps,
  TestimonialsColumns,
  TestimonialsVariant,
  // Stats
  StatsProps,
  StatItem,
  StatTrend,
  StatItemCardProps,
  StatsColumns,
  StatsVariant,
  // FAQ
  FAQProps,
  FAQItem,
  FAQItemCardProps,
  FAQColumns,
  FAQVariant,
  // Carousel
  CarouselProps,
  CarouselItem,
  CarouselCardProps,
  CarouselVariant,
  CarouselAspectRatio,
  CarouselGap,
  CarouselOverlay,
} from './sections';

// Page sections - Phase 3 (Content)
export { Team, TeamMemberCard, Contact, Newsletter, LogoCloud } from './sections';
export type {
  // Team
  TeamProps,
  TeamMember,
  TeamSocialLink,
  TeamMemberCardProps,
  TeamColumns,
  TeamVariant,
  // Contact
  ContactProps,
  ContactInfo,
  ContactFormField,
  ContactLayout,
  // Newsletter
  NewsletterProps,
  NewsletterLayout,
  NewsletterSize,
  // LogoCloud
  LogoCloudProps,
  LogoItem,
  LogoCloudLayout,
  LogoCloudSize,
} from './sections';

// Page sections - Phase 4 (Advanced Content)
export { Blog, Gallery, Timeline, Comparison, Banner, SocialProof, AppDownload } from './sections';
export type {
  // Blog
  BlogProps,
  BlogArticle,
  BlogLayout,
  // Gallery
  GalleryProps,
  GalleryImage,
  GalleryLayout,
  // Timeline
  TimelineProps,
  TimelineEvent,
  // Comparison
  ComparisonProps,
  ComparisonFeature,
  ComparisonColumn,
  // Banner
  BannerProps,
  BannerVariant,
  // SocialProof
  SocialProofProps,
  SocialProofLogo,
  SocialProofTestimonial,
  SocialProofStat,
  // AppDownload
  AppDownloadProps,
  AppStoreBadge,
  AppFeature,
} from './sections';

// ============================================================================
// APP/SAAS SECTIONS (Product Mode Optimized)
// ============================================================================

// App/SaaS Sections - Phase 1 (Core)
export { Sidebar, DataTable, MetricCards, MetricCard, PageHeader, FormSection } from './sections';
export type {
  // Sidebar
  SidebarProps,
  SidebarVariant,
  SidebarItem,
  SidebarSection,
  SidebarItemProps,
  SidebarSectionProps,
  SidebarDividerProps,
  // DataTable
  DataTableProps,
  DataTableColumn,
  DataTableSort,
  DataTablePagination,
  DataTableFilter,
  DataTableBulkAction,
  DataTableRowAction,
  DataTableEmptyState,
  DataTableToolbarProps,
  DataTablePaginationProps,
  DataTableEmptyStateProps,
  // MetricCards
  MetricCardsProps,
  MetricCardProps,
  MetricItem,
  MetricTrend,
  SparklineData,
  MetricCardsColumns,
  MetricCardsVariant,
  // PageHeader
  PageHeaderProps,
  PageHeaderVariant,
  PageHeaderSize,
  BreadcrumbItem as PageHeaderBreadcrumbItem,
  PageHeaderTab,
  // FormSection
  FormSectionProps,
  FormSectionVariant,
  FormSectionGroupProps,
  FormSectionActionsProps,
} from './sections';

// App/SaaS Sections - Phase 2 (Advanced)
export {
  CommandBar,
  ActivityFeed,
  DetailPanel,
  FilterBar,
  SettingsLayout,
  QuickActions,
} from './sections';
export type {
  // CommandBar
  CommandBarProps,
  CommandItem,
  CommandGroup,
  // ActivityFeed
  ActivityFeedProps,
  ActivityItem,
  ActivityActor,
  ActivityFilter,
  // DetailPanel
  DetailPanelProps,
  DetailPanelSize,
  DetailPanelPosition,
  // FilterBar
  FilterBarProps,
  FilterDefinition,
  FilterOption,
  ActiveFilter,
  // SettingsLayout
  SettingsLayoutProps,
  SettingsNavItem,
  SettingsNavGroup,
  // QuickActions
  QuickActionsProps,
  QuickAction,
  QuickActionsVariant,
  QuickActionsPosition,
} from './sections';

// App/SaaS Sections - Phase 3 (Extended)
export {
  KanbanBoard,
  NotificationCenter,
  UserMenu,
  Breadcrumbs,
  Stepper as StepperSection,
  FileUploader,
} from './sections';
export type {
  // KanbanBoard
  KanbanBoardProps,
  KanbanColumn,
  KanbanCard,
  KanbanLabel,
  KanbanAssignee,
  KanbanDragResult,
  // NotificationCenter
  NotificationCenterProps,
  NotificationItem,
  // UserMenu
  UserMenuProps,
  UserMenuItem,
  UserMenuSection,
  UserInfo,
  // Breadcrumbs
  BreadcrumbsProps,
  StandaloneBreadcrumbItem,
  // Stepper (section version)
  StepperProps as StepperSectionProps,
  StepItem as StepperSectionStepItem,
  // FileUploader
  FileUploaderProps,
  UploadedFile,
} from './sections';

// App/SaaS Sections - EmptyState (Section version)
export { EmptyState as EmptyStateSection } from './sections';
export type {
  EmptyStateProps as EmptyStateSectionProps,
  EmptyStateVariant as EmptyStateSectionVariant,
  EmptyStateSize as EmptyStateSectionSize,
} from './sections';

// ============================================================================
// CHAT (AI Chat Interface)
// ============================================================================

export { Chat } from './components/Chat';
export type {
  // Core types
  ChatRole,
  MessageStatus,
  AttachmentType,
  MessageReaction,
  ChatAttachment,
  ChatMessage,
  ChatConversation,
  VoiceRecorderState,
  // Component props
  ChatProps,
  ChatHeaderProps,
  ChatMessagesProps,
  ChatMessageProps,
  ChatInputProps,
  ChatTypingIndicatorProps,
  ChatCodeBlockProps,
  ChatMarkdownProps,
  // Attachment props
  ChatImagePreviewProps,
  ChatAudioPlayerProps,
  ChatVoiceRecorderProps,
  ChatFileUploadProps,
  ChatAttachmentPreviewProps,
  // Sidebar props
  ChatSidebarProps,
  // Section props
  ChatSectionProps,
  // Lightbox
  ChatLightboxProps,
} from './components/Chat';

export { useChatInput, useAutoScroll, useVoiceRecorder, useStreamingText } from './components/Chat';

export type {
  UseAutoScrollOptions,
  UseAutoScrollReturn,
  UseVoiceRecorderOptions,
  UseVoiceRecorderReturn,
  UseChatInputOptions,
  UseChatInputReturn,
  UseStreamingTextOptions,
  UseStreamingTextReturn,
} from './components/Chat';

// ============================================================================
// SHOWCASE
// ============================================================================

export { ComponentShowcase } from './ComponentShowcase';

// ============================================================================
// EXAMPLES (Copy-paste ready templates)
// ============================================================================

export { LandingPageExample } from './examples';

// ============================================================================
// TEMPLATES (Full Page Compositions)
// ============================================================================

// Marketing Templates
export {
  LandingPageTemplate,
  PricingPageTemplate,
  AboutPageTemplate,
  ContactPageTemplate,
} from './templates/marketing';
export type {
  LandingPageTemplateProps,
  PricingPageTemplateProps,
  AboutPageTemplateProps,
  ContactPageTemplateProps,
} from './templates/marketing';

// App Templates
export {
  DashboardTemplate,
  SettingsTemplate,
  ProfilePageTemplate,
  KanbanPageTemplate,
  LoginTemplate,
  ChatPageTemplate,
} from './templates/app';
export type {
  DashboardTemplateProps,
  DashboardLayout,
  SettingsTemplateProps,
  SettingsSection,
  ProfilePageTemplateProps,
  ProfileHeader,
  KanbanPageTemplateProps,
  LoginTemplateProps,
  LoginFormConfig,
  LoginEditorial,
  SocialProvider,
  ChatPageTemplateProps,
} from './templates/app';
