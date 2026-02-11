/**
 * SettingsTemplate
 *
 * A complete settings page template composing Orion sections.
 * Designed for application settings, preferences, and configuration pages.
 */
import type { SettingsTemplateProps } from './SettingsTemplate.types';
/**
 * SettingsTemplate - Full settings page composition
 *
 * Uses SettingsLayout with navigation sidebar and content sections.
 *
 * @example
 * ```tsx
 * <SettingsTemplate
 *   title="Settings"
 *   navigation={navGroups}
 *   sections={[
 *     { id: 'profile', content: <ProfileSettings /> },
 *     { id: 'security', content: <SecuritySettings /> },
 *   ]}
 * />
 * ```
 */
export declare const SettingsTemplate: import("react").ForwardRefExoticComponent<SettingsTemplateProps & import("react").RefAttributes<HTMLDivElement>>;
export default SettingsTemplate;
//# sourceMappingURL=SettingsTemplate.d.ts.map