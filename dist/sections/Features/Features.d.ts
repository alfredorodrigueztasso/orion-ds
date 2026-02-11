/**
 * Features Component
 *
 * A grid-based features section with support for icons, badges, and hover effects.
 * Composes atomic components from @orion/react (Card, Badge).
 *
 * @example
 * ```tsx
 * <Features
 *   eyebrow={<Badge>Features</Badge>}
 *   title="Everything you need"
 *   description="Powerful features designed for modern apps"
 *   items={[
 *     { icon: <Zap />, title: "Fast", description: "Lightning speed" },
 *     { icon: <Shield />, title: "Secure", description: "Bank-grade security" },
 *     { icon: <Code />, title: "Developer First", description: "Built for devs" },
 *   ]}
 *   columns={3}
 * />
 * ```
 */
import type { FeaturesProps } from './Features.types';
export declare const Features: import("react").ForwardRefExoticComponent<FeaturesProps & import("react").RefAttributes<HTMLElement>>;
//# sourceMappingURL=Features.d.ts.map