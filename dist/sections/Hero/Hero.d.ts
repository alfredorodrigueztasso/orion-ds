/**
 * Hero Component
 *
 * A flexible hero section for landing pages with support for titles, CTAs,
 * media, and trust indicators. Composes atomic components from @orion/react.
 *
 * @example
 * ```tsx
 * <Hero
 *   badge={<Badge>New Release</Badge>}
 *   title="Build faster with Orion"
 *   description="The AI-first design system for modern apps"
 *   primaryAction={<Button>Get Started</Button>}
 *   secondaryAction={<Button variant="ghost">Learn More</Button>}
 *   align="center"
 *   size="lg"
 * />
 * ```
 *
 * @example Fullscreen with background
 * ```tsx
 * <Hero
 *   layout="fullscreen"
 *   variant="background"
 *   backgroundImage="/hero.jpg"
 *   title={<>Build <Hero.Highlight>faster</Hero.Highlight></>}
 *   primaryAction={<Button size="lg">Get Started</Button>}
 * />
 * ```
 */
import type { HeroProps } from './Hero.types';
import { HeroHighlight } from './HeroHighlight';
declare const HeroBase: import("react").ForwardRefExoticComponent<HeroProps & import("react").RefAttributes<HTMLElement>>;
type HeroComponent = typeof HeroBase & {
    Highlight: typeof HeroHighlight;
};
export declare const Hero: HeroComponent;
export {};
//# sourceMappingURL=Hero.d.ts.map