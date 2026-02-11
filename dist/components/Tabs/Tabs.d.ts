/**
 * Tabs Component
 *
 * Navigation tabs for switching between content sections.
 *
 * @example
 * ```tsx
 * <Tabs
 *   tabs={[
 *     {
 *       id: 'profile',
 *       label: 'Profile',
 *       content: <ProfileContent />,
 *       icon: <UserIcon />
 *     },
 *     {
 *       id: 'settings',
 *       label: 'Settings',
 *       content: <SettingsContent />,
 *       badge: 3
 *     },
 *     {
 *       id: 'billing',
 *       label: 'Billing',
 *       content: <BillingContent />,
 *       disabled: true
 *     }
 *   ]}
 *   defaultTab="profile"
 * />
 * ```
 */
import React from 'react';
import type { TabsProps } from './Tabs.types';
export declare const Tabs: React.FC<TabsProps>;
//# sourceMappingURL=Tabs.d.ts.map