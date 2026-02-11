/**
 * Icon Component
 *
 * A normalized wrapper for Lucide icons that provides:
 * - Consistent sizing via design tokens
 * - Semantic color variants
 * - Proper accessibility handling
 * - Tree-shaking friendly (icons imported directly from lucide-react)
 *
 * @example Basic usage
 * ```tsx
 * import { Icon } from '@orion/react';
 * import { Search, AlertCircle, Check } from 'lucide-react';
 *
 * // Decorative icon (hidden from screen readers)
 * <Icon icon={Search} size="md" decorative />
 *
 * // Semantic icon (announced to screen readers)
 * <Icon icon={AlertCircle} size="lg" label="Warning" color="warning" />
 *
 * // Custom pixel size
 * <Icon icon={Check} size={18} color="success" />
 * ```
 *
 * @example In Button component
 * ```tsx
 * import { Button, Icon } from '@orion/react';
 * import { Download } from 'lucide-react';
 *
 * <Button icon={<Icon icon={Download} decorative />}>
 *   Download File
 * </Button>
 * ```
 */
import type { IconProps } from './Icon.types';
export declare const Icon: import("react").ForwardRefExoticComponent<IconProps & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Icon.d.ts.map