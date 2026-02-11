/**
 * DetailPanel Component
 *
 * A slide-over panel for viewing and editing entity details.
 * Optimized for Product Mode with focused interactions.
 *
 * @example
 * ```tsx
 * <DetailPanel
 *   open={isOpen}
 *   onClose={() => setIsOpen(false)}
 *   title="User Details"
 *   description="Edit user profile information"
 *   footer={<Button>Save Changes</Button>}
 * >
 *   <UserForm />
 * </DetailPanel>
 * ```
 */
import type { DetailPanelProps } from './DetailPanel.types';
export declare const DetailPanel: import("react").ForwardRefExoticComponent<DetailPanelProps & import("react").RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=DetailPanel.d.ts.map