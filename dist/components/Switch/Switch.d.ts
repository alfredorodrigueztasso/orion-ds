/**
 * Switch Component
 *
 * A toggle switch for boolean settings.
 * Implements WCAG 2.1 AA accessibility guidelines.
 *
 * @example
 * ```tsx
 * const [enabled, setEnabled] = useState(false);
 *
 * <Switch
 *   checked={enabled}
 *   onChange={(e) => setEnabled(e.target.checked)}
 *   label="Enable notifications"
 * />
 *
 * <Switch
 *   label="Dark mode"
 *   helperText="Use dark theme across the app"
 *   size="sm"
 * />
 * ```
 */
import type { SwitchProps } from './Switch.types';
export declare const Switch: import("react").ForwardRefExoticComponent<SwitchProps & import("react").RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=Switch.d.ts.map