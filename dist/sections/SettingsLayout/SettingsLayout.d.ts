/**
 * SettingsLayout Component
 *
 * A layout for settings pages with navigation sidebar.
 * Optimized for Product Mode with clear navigation and content separation.
 *
 * @example
 * ```tsx
 * <SettingsLayout
 *   navigation={[
 *     { items: [{ id: 'profile', label: 'Profile', icon: <User /> }] }
 *   ]}
 *   activeSection="profile"
 *   onNavigate={setActiveSection}
 * >
 *   <ProfileSettings />
 * </SettingsLayout>
 * ```
 */
import type { SettingsLayoutProps } from './SettingsLayout.types';
export declare const SettingsLayout: import("react").ForwardRefExoticComponent<SettingsLayoutProps & import("react").RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=SettingsLayout.d.ts.map