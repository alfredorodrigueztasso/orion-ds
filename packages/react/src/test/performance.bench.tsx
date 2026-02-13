/**
 * Component Render Performance Benchmarks
 *
 * Measures render performance of critical components to ensure they meet
 * performance budgets (< 16ms for initial render, < 8ms for re-render).
 *
 * Usage:
 *   npm run bench
 */

import { bench, describe } from 'vitest';
import { render } from '@testing-library/react';
import { Button } from '../components/Button';
import { Field } from '../components/Field';
import { Card } from '../components/Card';
import { Modal } from '../components/Modal';
import { Dropdown } from '../components/Dropdown';
import { Tabs } from '../components/Tabs';

describe('Component Render Performance', () => {
  describe('Button', () => {
    bench('renders primary button', () => {
      render(<Button variant="primary">Click me</Button>);
    });

    bench('renders with icon', () => {
      render(
        <Button variant="primary" icon={<span>🔍</span>}>
          Search
        </Button>,
      );
    });

    bench('renders all variants', () => {
      render(
        <>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
        </>,
      );
    });
  });

  describe('Field', () => {
    bench('renders text input', () => {
      render(<Field label="Email" type="email" placeholder="Enter email" />);
    });

    bench('renders with error', () => {
      render(<Field label="Email" type="email" error="Invalid email" />);
    });

    bench('renders with icon', () => {
      render(<Field label="Search" leftIcon={<span>🔍</span>} />);
    });
  });

  describe('Card', () => {
    bench('renders simple card', () => {
      render(
        <Card>
          <Card.Header>Title</Card.Header>
          <Card.Body>Content</Card.Body>
        </Card>,
      );
    });

    bench('renders full card with footer', () => {
      render(
        <Card>
          <Card.Header>Title</Card.Header>
          <Card.Body>
            <p>This is card content with multiple elements.</p>
            <Button>Action</Button>
          </Card.Body>
          <Card.Footer>Footer text</Card.Footer>
        </Card>,
      );
    });
  });

  describe('Modal', () => {
    bench('renders closed modal', () => {
      render(
        <Modal isOpen={false} onClose={() => {}}>
          <Modal.Header>Title</Modal.Header>
          <Modal.Body>Content</Modal.Body>
        </Modal>,
      );
    });

    bench('renders open modal', () => {
      render(
        <Modal isOpen={true} onClose={() => {}}>
          <Modal.Header>Title</Modal.Header>
          <Modal.Body>Content</Modal.Body>
          <Modal.Footer>
            <Button variant="primary">Confirm</Button>
            <Button variant="secondary">Cancel</Button>
          </Modal.Footer>
        </Modal>,
      );
    });
  });

  describe('Dropdown', () => {
    bench('renders closed dropdown', () => {
      render(
        <Dropdown>
          <Dropdown.Trigger>
            <Button variant="secondary">Menu</Button>
          </Dropdown.Trigger>
          <Dropdown.Content>
            <Dropdown.Item>Item 1</Dropdown.Item>
            <Dropdown.Item>Item 2</Dropdown.Item>
          </Dropdown.Content>
        </Dropdown>,
      );
    });
  });

  describe('Tabs', () => {
    bench('renders tabs with 3 items', () => {
      render(
        <Tabs defaultValue="tab1">
          <Tabs.List>
            <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
            <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
            <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="tab1">Content 1</Tabs.Content>
          <Tabs.Content value="tab2">Content 2</Tabs.Content>
          <Tabs.Content value="tab3">Content 3</Tabs.Content>
        </Tabs>,
      );
    });

    bench('renders tabs with 10 items', () => {
      render(
        <Tabs defaultValue="tab1">
          <Tabs.List>
            {Array.from({ length: 10 }, (_, i) => (
              <Tabs.Trigger key={i} value={`tab${i + 1}`}>
                Tab {i + 1}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          {Array.from({ length: 10 }, (_, i) => (
            <Tabs.Content key={i} value={`tab${i + 1}`}>
              Content {i + 1}
            </Tabs.Content>
          ))}
        </Tabs>,
      );
    });
  });

  describe('Multiple Components', () => {
    bench('renders complex form', () => {
      render(
        <Card>
          <Card.Header>Login Form</Card.Header>
          <Card.Body>
            <Field label="Email" type="email" />
            <Field label="Password" type="password" />
            <Button variant="primary">Submit</Button>
          </Card.Body>
        </Card>,
      );
    });

    bench('renders list of 20 cards', () => {
      render(
        <>
          {Array.from({ length: 20 }, (_, i) => (
            <Card key={i}>
              <Card.Header>Card {i + 1}</Card.Header>
              <Card.Body>Content for card {i + 1}</Card.Body>
            </Card>
          ))}
        </>,
      );
    });
  });
});
