import type { Meta, StoryObj } from '@storybook/react';
import { ProfilePageTemplate } from './ProfilePageTemplate';
import { Button } from '../../../components/Button';
import { Badge } from '../../../components/Badge';
import { Card } from '../../../components/Card';
import { FormSection } from '../../../sections/FormSection';
import { Field } from '../../../components/Field';
import { Textarea } from '../../../components/Textarea';
import {
  Home,
  Users,
  Settings,
  Mail,
  MapPin,
  Calendar,
  Phone,
  Globe,
  Edit,
  MessageSquare,
} from 'lucide-react';

const meta: Meta<typeof ProfilePageTemplate> = {
  title: 'Templates/App/Profile',
  component: ProfilePageTemplate,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A complete profile page template with user info, activity feed, and editable sections.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProfilePageTemplate>;

// Sample data
const SIDEBAR_SECTIONS = [
  {
    items: [
      { id: 'dashboard', label: 'Dashboard', icon: <Home size={20} />, href: '/dashboard' },
      { id: 'team', label: 'Team', icon: <Users size={20} />, href: '/team' },
      { id: 'settings', label: 'Settings', icon: <Settings size={20} />, href: '/settings' },
    ],
  },
];

const USER_PROFILE = {
  name: 'Sarah Chen',
  role: 'Senior Software Engineer',
  avatar: <img src="https://i.pravatar.cc/200?u=sarah" alt="" />,
  metadata: [
    { icon: <Mail size={16} />, label: 'Email', value: 'sarah@acme.com' },
    { icon: <MapPin size={16} />, label: 'Location', value: 'San Francisco, CA' },
    { icon: <Calendar size={16} />, label: 'Joined', value: 'March 2022' },
  ],
  actions: (
    <>
      <Button variant="ghost" icon={<MessageSquare size={18} />}>
        Message
      </Button>
      <Button variant="primary" icon={<Edit size={18} />}>
        Edit Profile
      </Button>
    </>
  ),
};

const ACTIVITY_ITEMS = [
  {
    id: '1',
    title: 'Updated profile picture',
    timestamp: '2 hours ago',
    actor: { name: 'Sarah Chen' },
  },
  {
    id: '2',
    title: 'Completed task: API Integration',
    timestamp: '5 hours ago',
    actor: { name: 'Sarah Chen' },
  },
  {
    id: '3',
    title: 'Joined project: Mobile App',
    timestamp: '1 day ago',
    actor: { name: 'Sarah Chen' },
  },
  {
    id: '4',
    title: 'Commented on Design Review',
    timestamp: '2 days ago',
    actor: { name: 'Sarah Chen' },
  },
  {
    id: '5',
    title: 'Received badge: Top Contributor',
    timestamp: '1 week ago',
    actor: { name: 'Sarah Chen' },
  },
];

// Profile content sections
const ProfileSections = () => (
  <>
    <Card>
      <Card.Header>
        <h3 style={{ margin: 0 }}>About</h3>
      </Card.Header>
      <Card.Body>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
          Senior Software Engineer with 8+ years of experience building scalable web applications.
          Passionate about clean code, system design, and mentoring junior developers. Currently
          focused on building the next generation of developer tools at Acme.
        </p>
        <div
          style={{
            marginTop: 'var(--spacing-4)',
            display: 'flex',
            gap: 'var(--spacing-2)',
            flexWrap: 'wrap',
          }}
        >
          <Badge variant="secondary">TypeScript</Badge>
          <Badge variant="secondary">React</Badge>
          <Badge variant="secondary">Node.js</Badge>
          <Badge variant="secondary">GraphQL</Badge>
          <Badge variant="secondary">PostgreSQL</Badge>
        </div>
      </Card.Body>
    </Card>

    <Card>
      <Card.Header>
        <h3 style={{ margin: 0 }}>Contact Information</h3>
      </Card.Header>
      <Card.Body>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 'var(--spacing-4)',
          }}
        >
          <div>
            <p
              style={{
                color: 'var(--text-tertiary)',
                fontSize: 'var(--text-sm)',
                marginBottom: 'var(--spacing-1)',
              }}
            >
              Email
            </p>
            <p style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
              <Mail size={16} /> sarah@acme.com
            </p>
          </div>
          <div>
            <p
              style={{
                color: 'var(--text-tertiary)',
                fontSize: 'var(--text-sm)',
                marginBottom: 'var(--spacing-1)',
              }}
            >
              Phone
            </p>
            <p style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
              <Phone size={16} /> +1 (555) 123-4567
            </p>
          </div>
          <div>
            <p
              style={{
                color: 'var(--text-tertiary)',
                fontSize: 'var(--text-sm)',
                marginBottom: 'var(--spacing-1)',
              }}
            >
              Location
            </p>
            <p style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
              <MapPin size={16} /> San Francisco, CA
            </p>
          </div>
          <div>
            <p
              style={{
                color: 'var(--text-tertiary)',
                fontSize: 'var(--text-sm)',
                marginBottom: 'var(--spacing-1)',
              }}
            >
              Website
            </p>
            <p style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
              <Globe size={16} /> sarahchen.dev
            </p>
          </div>
        </div>
      </Card.Body>
    </Card>

    <Card>
      <Card.Header>
        <h3 style={{ margin: 0 }}>Recent Projects</h3>
      </Card.Header>
      <Card.Body>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
          <div
            style={{
              padding: 'var(--spacing-3)',
              backgroundColor: 'var(--surface-subtle)',
              borderRadius: 'var(--radius-sm)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h4 style={{ margin: 0 }}>Mobile App v2</h4>
              <Badge variant="success">Active</Badge>
            </div>
            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: 'var(--text-sm)',
                margin: 'var(--spacing-2) 0 0 0',
              }}
            >
              Lead developer for the mobile app redesign project.
            </p>
          </div>
          <div
            style={{
              padding: 'var(--spacing-3)',
              backgroundColor: 'var(--surface-subtle)',
              borderRadius: 'var(--radius-sm)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h4 style={{ margin: 0 }}>API Gateway</h4>
              <Badge>Completed</Badge>
            </div>
            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: 'var(--text-sm)',
                margin: 'var(--spacing-2) 0 0 0',
              }}
            >
              Architected and implemented the new API gateway.
            </p>
          </div>
        </div>
      </Card.Body>
    </Card>
  </>
);

/**
 * Default profile page
 */
export const Default: Story = {
  args: {
    sidebar: {
      sections: SIDEBAR_SECTIONS,
      activeItem: 'team',
      header: (
        <div style={{ padding: 'var(--spacing-4)', fontWeight: 700, fontSize: 'var(--text-xl)' }}>
          Acme
        </div>
      ),
    },
    pageHeader: {
      title: 'Profile',
      breadcrumbs: [{ label: 'Team', href: '/team' }, { label: 'Sarah Chen' }],
    },
    profile: USER_PROFILE,
    activityFeed: {
      title: 'Recent Activity',
      activities: ACTIVITY_ITEMS,
    },
    children: <ProfileSections />,
  },
};

/**
 * Profile without sidebar (standalone view)
 */
export const WithoutSidebar: Story = {
  args: {
    pageHeader: {
      title: 'My Profile',
      actions: (
        <Button variant="primary" icon={<Edit size={18} />}>
          Edit Profile
        </Button>
      ),
    },
    profile: USER_PROFILE,
    activityFeed: {
      title: 'Your Activity',
      activities: ACTIVITY_ITEMS,
    },
    children: <ProfileSections />,
  },
};

/**
 * Profile without activity feed
 */
export const WithoutActivity: Story = {
  args: {
    sidebar: Default.args?.sidebar,
    pageHeader: Default.args?.pageHeader,
    profile: USER_PROFILE,
    showActivity: false,
    children: <ProfileSections />,
  },
};

/**
 * Team member profile (view-only)
 */
export const TeamMemberView: Story = {
  args: {
    sidebar: Default.args?.sidebar,
    pageHeader: {
      title: 'Team Member',
      breadcrumbs: [{ label: 'Team', href: '/team' }, { label: 'Sarah Chen' }],
      actions: (
        <Button variant="ghost" icon={<MessageSquare size={18} />}>
          Send Message
        </Button>
      ),
    },
    profile: {
      ...USER_PROFILE,
      actions: (
        <Button variant="ghost" icon={<MessageSquare size={18} />}>
          Message
        </Button>
      ),
    },
    activityFeed: {
      title: 'Recent Activity',
      activities: ACTIVITY_ITEMS,
    },
    children: <ProfileSections />,
  },
};

/**
 * Editable profile with form sections
 */
export const EditableProfile: Story = {
  args: {
    sidebar: Default.args?.sidebar,
    pageHeader: {
      title: 'Edit Profile',
      breadcrumbs: [{ label: 'Settings', href: '/settings' }, { label: 'Profile' }],
    },
    profile: {
      ...USER_PROFILE,
      actions: (
        <>
          <Button variant="ghost">Cancel</Button>
          <Button variant="primary">Save Changes</Button>
        </>
      ),
    },
    showActivity: false,
    children: (
      <>
        <FormSection title="Personal Information" description="Update your personal details.">
          <FormSection.Group>
            <Field label="Full name" defaultValue="Sarah Chen" />
            <Field label="Email" type="email" defaultValue="sarah@acme.com" />
          </FormSection.Group>
          <FormSection.Group>
            <Field label="Phone" type="tel" defaultValue="+1 (555) 123-4567" />
            <Field label="Location" defaultValue="San Francisco, CA" />
          </FormSection.Group>
        </FormSection>
        <FormSection title="Bio" description="Tell others about yourself.">
          <Textarea
            label="About"
            rows={4}
            defaultValue="Senior Software Engineer with 8+ years of experience..."
          />
        </FormSection>
      </>
    ),
  },
};

/**
 * Minimal profile card only
 */
export const MinimalProfile: Story = {
  args: {
    profile: {
      name: 'Sarah Chen',
      role: 'Senior Software Engineer',
      avatar: <img src="https://i.pravatar.cc/200?u=sarah" alt="" />,
      metadata: [{ icon: <Mail size={16} />, label: 'Email', value: 'sarah@acme.com' }],
    },
    showActivity: false,
  },
};
