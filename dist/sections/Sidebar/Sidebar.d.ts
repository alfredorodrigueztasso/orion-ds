/**
 * Sidebar Component
 *
 * A collapsible navigation sidebar for SaaS applications.
 * Optimized for Product Mode with efficient space usage and clear hierarchy.
 *
 * @example
 * ```tsx
 * <Sidebar
 *   sections={[
 *     {
 *       items: [
 *         { id: 'dashboard', label: 'Dashboard', icon: <Home />, href: '/' },
 *         { id: 'projects', label: 'Projects', icon: <Folder />, href: '/projects' }
 *       ]
 *     }
 *   ]}
 *   activeItem="dashboard"
 *   header={<Logo />}
 * />
 * ```
 */
import type { SidebarProps, SidebarItemProps, SidebarSectionProps, SidebarDividerProps } from './Sidebar.types';
export declare const Sidebar: import("react").ForwardRefExoticComponent<SidebarProps & import("react").RefAttributes<HTMLElement>> & {
    Item: import("react").ForwardRefExoticComponent<SidebarItemProps & import("react").RefAttributes<HTMLElement>>;
    Section: import("react").ForwardRefExoticComponent<SidebarSectionProps & import("react").RefAttributes<HTMLDivElement>>;
    Divider: import("react").ForwardRefExoticComponent<SidebarDividerProps & import("react").RefAttributes<HTMLHRElement>>;
};
//# sourceMappingURL=Sidebar.d.ts.map