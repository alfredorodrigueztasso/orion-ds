/**
 * @orion/react Sections
 *
 * Pre-built UI sections that compose atomic components into complete page blocks.
 * Use these for rapidly building landing pages, marketing sites, and product interfaces.
 *
 * @example
 * ```tsx
 * import {
 *   Hero,
 *   Features,
 *   CTA,
 *   Footer,
 *   Container,
 *   Section
 * } from '@orion/react/sections';
 *
 * function LandingPage() {
 *   return (
 *     <>
 *       <Hero
 *         headline="Build faster with Orion"
 *         description="The AI-first design system"
 *         primaryAction={<Button>Get Started</Button>}
 *       />
 *       <Features items={features} columns={3} />
 *       <CTA headline="Ready to start?" />
 *       <Footer brand={brand} linkGroups={links} />
 *     </>
 *   );
 * }
 * ```
 *
 * @packageDocumentation
 */

// ============================================================================
// LAYOUT
// ============================================================================

export { Container } from "./Container";
export type { ContainerProps, ContainerSize } from "./Container";

export { Section } from "./Section";
export type {
  SectionProps,
  SectionSpacing,
  SectionBackground,
} from "./Section";

// ============================================================================
// MARKETING
// ============================================================================

export { Hero } from "./Hero";
export type { HeroProps, HeroAlign, HeroSize } from "./Hero";

export { Features, FeatureCard } from "./Features";
export type {
  FeaturesProps,
  FeatureItem,
  FeatureCardProps,
  FeaturesColumns,
} from "./Features";

export { CTA } from "./CTA";
export type { CTAProps, CTAVariant, CTASize } from "./CTA";

export { Footer } from "./Footer";
export type {
  FooterProps,
  FooterBrand,
  FooterLink,
  FooterLinkGroup,
  FooterSocialLink,
  FooterVariant,
} from "./Footer";

export { Pricing, PricingCard } from "./Pricing";
export type {
  PricingProps,
  PricingPlan,
  PricingFeature,
  PricingCardProps,
  PricingColumns,
} from "./Pricing";

export { Testimonials, TestimonialCard } from "./Testimonials";
export type {
  TestimonialsProps,
  Testimonial,
  TestimonialAuthor,
  TestimonialCardProps,
  TestimonialsColumns,
  TestimonialsVariant,
} from "./Testimonials";

export { Stats, StatItemCard } from "./Stats";
export type {
  StatsProps,
  StatItem,
  StatTrend,
  StatItemCardProps,
  StatsColumns,
  StatsVariant,
} from "./Stats";

export { FAQ, FAQItemCard } from "./FAQ";
export type {
  FAQProps,
  FAQItem,
  FAQItemCardProps,
  FAQColumns,
  FAQVariant,
} from "./FAQ";

export { CarouselSection, CarouselCard } from "./CarouselSection";
export type {
  CarouselSectionProps,
  CarouselItem,
  CarouselCardProps,
  CarouselVariant,
  CarouselAspectRatio,
  CarouselGap,
  CarouselOverlay,
} from "./CarouselSection";

// Backward compatibility alias (deprecated - use CarouselSection)
export { CarouselSection as Carousel } from "./CarouselSection";
/** @deprecated Use CarouselSectionProps instead */
export type { CarouselSectionProps as CarouselProps } from "./CarouselSection";

export { Team, TeamMemberCard } from "./Team";
export type {
  TeamProps,
  TeamMember,
  TeamSocialLink,
  TeamMemberCardProps,
  TeamColumns,
  TeamVariant,
} from "./Team";

export { Contact } from "./Contact";
export type {
  ContactProps,
  ContactInfo,
  ContactFormField,
  ContactLayout,
} from "./Contact";

export { Newsletter } from "./Newsletter";
export type {
  NewsletterProps,
  NewsletterLayout,
  NewsletterSize,
} from "./Newsletter";

export { LogoCloud } from "./LogoCloud";
export type {
  LogoCloudProps,
  LogoItem,
  LogoCloudLayout,
  LogoCloudSize,
} from "./LogoCloud";

export { Blog } from "./Blog";
export type { BlogProps, BlogArticle, BlogLayout } from "./Blog";

export { Gallery } from "./Gallery";
export type { GalleryProps, GalleryImage, GalleryLayout } from "./Gallery";

export { Timeline } from "./Timeline";
export type { TimelineProps, TimelineEvent } from "./Timeline";

export { Comparison } from "./Comparison";
export type {
  ComparisonProps,
  ComparisonFeature,
  ComparisonColumn,
} from "./Comparison";

export { SocialProof } from "./SocialProof";
export type {
  SocialProofProps,
  SocialProofLogo,
  SocialProofTestimonial,
  SocialProofStat,
} from "./SocialProof";

export { AppDownload } from "./AppDownload";
export type {
  AppDownloadProps,
  AppStoreBadge,
  AppFeature,
} from "./AppDownload";

// ============================================================================
// APP / SAAS - WIDGETS (Reclassified as Components in v3.4.0+)
// ============================================================================
// Re-exporting widgets from components/ for backward compatibility
// These have been reclassified from sections to components

export {
  ActivityFeed,
  Banner,
  CollapsibleFolder,
  CommandBar,
  DataTable,
  DetailPanel,
  FileUploader,
  FilterBar,
  FormSection,
  KanbanBoard,
  MetricCards,
  MetricCard,
  NavTree,
  NotificationCenter,
  PageHeader,
  QuickActions,
  Sidebar,
  UserMenu,
  WorkspaceSwitcher,
} from "../components";
export type {
  ActivityFeedProps,
  ActivityItem,
  ActivityActor,
  ActivityFilter,
  BannerProps,
  BannerVariant,
  CollapsibleFolderProps,
  CommandBarProps,
  CommandItem,
  CommandGroup,
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
  DetailPanelProps,
  DetailPanelSize,
  DetailPanelPosition,
  FileUploaderProps,
  UploadedFile,
  FilterBarProps,
  FilterDefinition,
  FilterOption,
  ActiveFilter,
  FormSectionProps,
  FormSectionVariant,
  FormSectionGroupProps,
  FormSectionActionsProps,
  KanbanBoardProps,
  KanbanColumn,
  KanbanCard,
  KanbanLabel,
  KanbanAssignee,
  KanbanDragResult,
  MetricCardsProps,
  MetricCardProps,
  MetricItem,
  MetricTrend,
  SparklineData,
  MetricCardsColumns,
  MetricCardsVariant,
  NavTreeProps,
  NavTreeNode,
  NavTreeNodeType,
  NavTreeSection,
  NavTreeSectionVariant,
  NavTreeActionConfig,
  NavTreeContextValue,
  NotificationCenterProps,
  NotificationItem,
  PageHeaderProps,
  PageHeaderVariant,
  PageHeaderSize,
  BreadcrumbItem,
  PageHeaderTab,
  QuickActionsProps,
  QuickAction,
  QuickActionsVariant,
  QuickActionsPosition,
  SidebarProps,
  SidebarVariant,
  SidebarItem,
  SidebarSection,
  SidebarItemProps,
  SidebarSectionProps,
  SidebarDividerProps,
  UserMenuProps,
  UserMenuItem,
  UserMenuSection,
  UserInfo,
  WorkspaceSwitcherProps,
  WorkspaceOrg,
  CurrentWorkspaceOrg,
} from "../components";

// ============================================================================
// APP / SAAS - SECTIONS (Remaining Sections)
// ============================================================================

export { AgentFolder } from "./AgentFolder";
export type { AgentFolderProps, SortOption } from "./AgentFolder";

export { SettingsLayout } from "./SettingsLayout";
export type {
  SettingsLayoutProps,
  SettingsNavItem,
  SettingsNavGroup,
} from "./SettingsLayout";

export { Breadcrumbs } from "./Breadcrumbs";
export type {
  BreadcrumbsProps,
  BreadcrumbItem as StandaloneBreadcrumbItem,
} from "./Breadcrumbs";

export { Stepper } from "./Stepper";
export type { StepperProps, StepItem } from "./Stepper";

// ============================================================================
// AI CHAT
// ============================================================================

export { ChatSection } from "./Chat";
export type { ChatSectionProps } from "./Chat";
