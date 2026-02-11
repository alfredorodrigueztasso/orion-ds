/**
 * Navbar Component
 *
 * Application navigation header with brand, links, and actions.
 * Includes responsive mobile menu with Toggle and Collapse.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <Navbar sticky bordered>
 *   <Navbar.Brand href="/">MyApp</Navbar.Brand>
 *   <Navbar.Nav>
 *     <Navbar.Link href="/" active>Home</Navbar.Link>
 *     <Navbar.Link href="/about">About</Navbar.Link>
 *   </Navbar.Nav>
 *   <Navbar.Actions>
 *     <Button>Get Started</Button>
 *   </Navbar.Actions>
 * </Navbar>
 *
 * // With responsive mobile menu
 * function ResponsiveNavbar() {
 *   const [isOpen, setIsOpen] = useState(false);
 *   return (
 *     <Navbar>
 *       <Navbar.Brand href="/">MyApp</Navbar.Brand>
 *       <Navbar.Nav>...</Navbar.Nav>
 *       <Navbar.Actions>...</Navbar.Actions>
 *       <Navbar.Toggle isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
 *       <Navbar.Collapse isOpen={isOpen}>
 *         <Navbar.Link href="/">Home</Navbar.Link>
 *         <Navbar.Link href="/about">About</Navbar.Link>
 *       </Navbar.Collapse>
 *     </Navbar>
 *   );
 * }
 * ```
 */
import React from 'react';
import type { NavbarProps, NavbarBrandProps, NavbarNavProps, NavbarLinkProps, NavbarActionsProps, NavbarToggleProps, NavbarCollapseProps } from './Navbar.types';
declare const NavbarBrand: React.FC<NavbarBrandProps>;
declare const NavbarNav: React.FC<NavbarNavProps>;
declare const NavbarLink: React.FC<NavbarLinkProps>;
declare const NavbarActions: React.FC<NavbarActionsProps>;
declare const NavbarToggle: React.FC<NavbarToggleProps>;
declare const NavbarCollapse: React.FC<NavbarCollapseProps>;
declare const NavbarCollapseActions: React.FC<NavbarActionsProps>;
export declare const Navbar: React.FC<NavbarProps> & {
    Brand: typeof NavbarBrand;
    Nav: typeof NavbarNav;
    Link: typeof NavbarLink;
    Actions: typeof NavbarActions;
    Toggle: typeof NavbarToggle;
    Collapse: typeof NavbarCollapse;
    CollapseActions: typeof NavbarCollapseActions;
};
export {};
//# sourceMappingURL=Navbar.d.ts.map