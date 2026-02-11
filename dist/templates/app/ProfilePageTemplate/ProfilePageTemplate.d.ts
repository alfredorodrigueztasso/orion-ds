/**
 * ProfilePageTemplate
 *
 * A complete profile page template composing Orion sections.
 * Designed for user profile pages, account pages, and team member views.
 */
import type { ProfilePageTemplateProps } from './ProfilePageTemplate.types';
/**
 * ProfilePageTemplate - Full profile page composition
 *
 * Combines Sidebar, PageHeader, Profile card, content sections, and ActivityFeed.
 *
 * @example
 * ```tsx
 * <ProfilePageTemplate
 *   sidebar={{ sections: navSections }}
 *   profile={{
 *     name: 'John Doe',
 *     role: 'Software Engineer',
 *     avatar: <img src="..." alt="" />
 *   }}
 *   activityFeed={{ activities: userActivity }}
 * >
 *   <ProfileSections />
 * </ProfilePageTemplate>
 * ```
 */
export declare const ProfilePageTemplate: import("react").ForwardRefExoticComponent<ProfilePageTemplateProps & import("react").RefAttributes<HTMLDivElement>>;
export default ProfilePageTemplate;
//# sourceMappingURL=ProfilePageTemplate.d.ts.map