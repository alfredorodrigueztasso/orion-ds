/**
 * SettingsTemplate
 *
 * A complete settings page template composing Orion sections.
 * Designed for application settings, preferences, and configuration pages.
 */

import { forwardRef, useState, useMemo } from 'react';
import type { SettingsTemplateProps } from './SettingsTemplate.types';

// Sections
import { SettingsLayout } from '../../../sections/SettingsLayout';

import styles from './SettingsTemplate.module.css';

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
export const SettingsTemplate = forwardRef<HTMLDivElement, SettingsTemplateProps>(
  (
    {
      title = 'Settings',
      description,
      navigation,
      sections,
      defaultSection,
      activeSection: controlledSection,
      onSectionChange,
      headerActions,
      className,
      ...rest
    },
    ref,
  ) => {
    // Internal state for uncontrolled mode
    const [internalSection, setInternalSection] = useState(defaultSection || sections[0]?.id || '');

    // Use controlled or uncontrolled section
    const activeSection = controlledSection ?? internalSection;

    // Handle section change
    const handleNavigate = (sectionId: string) => {
      if (!controlledSection) {
        setInternalSection(sectionId);
      }
      onSectionChange?.(sectionId);
    };

    // Find current section content
    const currentContent = useMemo(() => {
      const section = sections.find((s) => s.id === activeSection);
      return section?.content ?? null;
    }, [sections, activeSection]);

    const settingsClasses = [styles.settings, className].filter(Boolean).join(' ');

    return (
      <div ref={ref} className={settingsClasses} {...rest}>
        <SettingsLayout
          title={title}
          description={description}
          navigation={navigation}
          activeSection={activeSection}
          onNavigate={handleNavigate}
          headerActions={headerActions}
        >
          {currentContent}
        </SettingsLayout>
      </div>
    );
  },
);

SettingsTemplate.displayName = 'SettingsTemplate';

export default SettingsTemplate;
