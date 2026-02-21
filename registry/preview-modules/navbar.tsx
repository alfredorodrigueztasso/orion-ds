/**
 * Preview module for Navbar component
 * Navigation bar
 */

import React, { useState } from 'react';
import { Navbar, Button } from '@orion-ds/react';
import { Menu, Search, Bell, User } from 'lucide-react';

export const previews = [
  {
    title: 'Basic Navbar',
    render: () => (
      <div>
        <Navbar>
          <Navbar.Brand>
            <span style={{ fontWeight: 600, fontSize: '1.125rem' }}>Orion DS</span>
          </Navbar.Brand>
          <Navbar.Nav>
            <Navbar.Link href="#home" active>Home</Navbar.Link>
            <Navbar.Link href="#about">About</Navbar.Link>
            <Navbar.Link href="#services">Services</Navbar.Link>
            <Navbar.Link href="#contact">Contact</Navbar.Link>
          </Navbar.Nav>
          <Navbar.Actions>
            <Button variant="secondary">Sign In</Button>
            <Button variant="primary">Sign Up</Button>
          </Navbar.Actions>
        </Navbar>
      </div>
    ),
  },
  {
    title: 'With Icons',
    render: () => (
      <div>
        <Navbar>
          <Navbar.Brand>
            <span style={{ fontWeight: 600, fontSize: '1.125rem' }}>Dashboard</span>
          </Navbar.Brand>
          <Navbar.Nav>
            <Navbar.Link href="#overview" active>Overview</Navbar.Link>
            <Navbar.Link href="#projects">Projects</Navbar.Link>
            <Navbar.Link href="#team">Team</Navbar.Link>
          </Navbar.Nav>
          <Navbar.Actions>
            <Button variant="ghost" iconOnly icon={<Search size={20} />} aria-label="Search" />
            <Button variant="ghost" iconOnly icon={<Bell size={20} />} aria-label="Notifications" />
            <Button variant="ghost" iconOnly icon={<User size={20} />} aria-label="Profile" />
          </Navbar.Actions>
        </Navbar>
      </div>
    ),
  },
  {
    title: 'Mobile Menu',
    render: () => {
      const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

      return (
        <div>
          <Navbar>
            <Navbar.Brand>
              <span style={{ fontWeight: 600, fontSize: '1.125rem' }}>App</span>
            </Navbar.Brand>
            <Navbar.Toggle isOpen={mobileMenuOpen} onToggle={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu size={24} />
            </Navbar.Toggle>
            <Navbar.Collapse isOpen={mobileMenuOpen}>
              <Navbar.Link href="#home" active>Home</Navbar.Link>
              <Navbar.Link href="#features">Features</Navbar.Link>
              <Navbar.Link href="#pricing">Pricing</Navbar.Link>
              <Navbar.Link href="#docs">Docs</Navbar.Link>
            </Navbar.Collapse>
          </Navbar>
          {mobileMenuOpen && (
            <p style={{ marginTop: 'var(--spacing-2)', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              Mobile menu is open (typically shown on small screens)
            </p>
          )}
        </div>
      );
    },
  },
];

export default previews;
