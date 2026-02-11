/**
 * Team Component
 *
 * A team/about section for displaying team members with avatars,
 * roles, bios, and social links.
 *
 * @example
 * ```tsx
 * <Team
 *   eyebrow={<Badge>Our Team</Badge>}
 *   title="Meet the people behind Orion"
 *   description="A passionate team building the future of design systems"
 *   members={[
 *     {
 *       name: "Jane Doe",
 *       role: "CEO & Founder",
 *       bio: "10+ years in design systems",
 *       avatar: <img src="/jane.jpg" alt="Jane" />,
 *       socialLinks: [
 *         { platform: "twitter", href: "#", icon: <Twitter size={18} /> },
 *         { platform: "linkedin", href: "#", icon: <Linkedin size={18} /> }
 *       ]
 *     }
 *   ]}
 *   columns={4}
 * />
 * ```
 */
import type { TeamProps } from './Team.types';
export declare const Team: import("react").ForwardRefExoticComponent<TeamProps & import("react").RefAttributes<HTMLElement>>;
//# sourceMappingURL=Team.d.ts.map