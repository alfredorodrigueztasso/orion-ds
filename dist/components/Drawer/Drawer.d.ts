/**
 * Drawer Component
 *
 * A panel that slides in from the edge of the screen.
 *
 * @example
 * ```tsx
 * <Drawer open={isOpen} onClose={() => setIsOpen(false)} placement="right">
 *   <Drawer.Header>Settings</Drawer.Header>
 *   <Drawer.Body>Content here</Drawer.Body>
 *   <Drawer.Footer>
 *     <Button onClick={() => setIsOpen(false)}>Close</Button>
 *   </Drawer.Footer>
 * </Drawer>
 * ```
 */
import type { DrawerProps, DrawerHeaderProps, DrawerBodyProps, DrawerFooterProps } from './Drawer.types';
export declare const Drawer: import("react").ForwardRefExoticComponent<DrawerProps & import("react").RefAttributes<HTMLDivElement>> & {
    Header: import("react").ForwardRefExoticComponent<DrawerHeaderProps & import("react").RefAttributes<HTMLDivElement>>;
    Body: import("react").ForwardRefExoticComponent<DrawerBodyProps & import("react").RefAttributes<HTMLDivElement>>;
    Footer: import("react").ForwardRefExoticComponent<DrawerFooterProps & import("react").RefAttributes<HTMLDivElement>>;
};
//# sourceMappingURL=Drawer.d.ts.map