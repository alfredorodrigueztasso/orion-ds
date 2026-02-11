/**
 * ProfilePageTemplate
 *
 * A complete profile page template composing Orion sections.
 * Designed for user profile pages, account pages, and team member views.
 */

import { forwardRef } from 'react';
import type { ProfilePageTemplateProps } from './ProfilePageTemplate.types';

// Sections
import { Sidebar } from '../../../sections/Sidebar';
import { PageHeader } from '../../../sections/PageHeader';
import { ActivityFeed } from '../../../sections/ActivityFeed';
import { DetailPanel } from '../../../sections/DetailPanel';

import styles from './ProfilePageTemplate.module.css';

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
export const ProfilePageTemplate = forwardRef<HTMLDivElement, ProfilePageTemplateProps>(
  (
    {
      sidebar,
      pageHeader,
      profile,
      children,
      activityFeed,
      detailPanel,
      showActivity = true,
      className,
      ...rest
    },
    ref
  ) => {
    const profileClasses = [styles.profilePage, className].filter(Boolean).join(' ');
    const contentClasses = [
      styles.content,
      !(showActivity && activityFeed) && styles.contentNoAside,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={ref} className={profileClasses} {...rest}>
        {/* Sidebar Navigation */}
        {sidebar && <Sidebar variant="floating" {...sidebar} />}

        {/* Main Content Area */}
        <main className={styles.main}>
          {/* Page Header */}
          {pageHeader && <PageHeader variant="transparent" {...pageHeader} />}

          {/* Content */}
          <div className={contentClasses}>
            <div className={styles.mainContent}>
              {/* Profile Header Card */}
              <div className={styles.profileHeader}>
                {profile.avatar && (
                  <div className={styles.profileAvatar}>{profile.avatar}</div>
                )}
                <div className={styles.profileInfo}>
                  <h1 className={styles.profileName}>{profile.name}</h1>
                  {profile.role && <p className={styles.profileRole}>{profile.role}</p>}
                  {profile.metadata && profile.metadata.length > 0 && (
                    <div className={styles.profileMeta}>
                      {profile.metadata.map((item, index) => (
                        <div key={index} className={styles.profileMetaItem}>
                          {item.icon}
                          <span>{item.value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {profile.actions && (
                  <div className={styles.profileActions}>{profile.actions}</div>
                )}
              </div>

              {/* Profile Content Sections */}
              {children}
            </div>

            {/* Activity Feed Sidebar */}
            {showActivity && activityFeed && (
              <aside className={styles.aside}>
                <ActivityFeed {...activityFeed} />
              </aside>
            )}
          </div>
        </main>

        {/* Detail Panel (for editing) */}
        {detailPanel && <DetailPanel {...detailPanel} />}
      </div>
    );
  }
);

ProfilePageTemplate.displayName = 'ProfilePageTemplate';

export default ProfilePageTemplate;
