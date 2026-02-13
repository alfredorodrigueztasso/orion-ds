import type { Meta, StoryObj } from '@storybook/react';
import { LoginTemplate } from './LoginTemplate';
import { Github, Chrome, Apple } from 'lucide-react';

const meta: Meta<typeof LoginTemplate> = {
  title: 'Templates/App/Login',
  component: LoginTemplate,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A complete login page template inspired by Supabase. Features a split layout with form and editorial content.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LoginTemplate>;

// Simple Logo component for stories
const Logo = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
    <div
      style={{
        width: 32,
        height: 32,
        borderRadius: 'var(--radius-control)',
        background: 'var(--interactive-primary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--interactive-primary-text)',
        fontWeight: 'bold',
        fontSize: 'var(--font-size-14)',
      }}
    >
      O
    </div>
    <span
      style={{
        fontFamily: 'var(--font-secondary)',
        fontWeight: 700,
        fontSize: 'var(--font-size-18)',
        color: 'var(--text-primary)',
      }}
    >
      Orion
    </span>
  </div>
);

/**
 * Default login with editorial panel
 */
export const Default: Story = {
  args: {
    logo: <Logo />,
    title: 'Welcome back',
    subtitle: 'Sign in to your account to continue',
    socialProviders: [
      { name: 'GitHub', icon: <Github size={20} /> },
      { name: 'Google', icon: <Chrome size={20} /> },
    ],
    editorial: {
      headline: 'Build faster with Orion',
      description: 'The AI-first design system that eliminates UI hallucination.',
      quote:
        'Orion has completely transformed how our team builds interfaces. The token system ensures consistency across our entire product.',
      author: 'Sarah Chen',
      authorRole: 'VP of Engineering at TechCorp',
      authorAvatar: <img src="https://i.pravatar.cc/80?u=sarah" alt="" />,
    },
    onSubmit: (data) => console.log('Login:', data),
  },
};

/**
 * Login without social providers
 */
export const WithoutSocial: Story = {
  args: {
    logo: <Logo />,
    title: 'Sign in',
    subtitle: 'Enter your credentials to access your account',
    editorial: {
      headline: 'Welcome to Orion',
      description: 'Your AI-first design system for building consistent, accessible interfaces.',
    },
    onSubmit: (data) => console.log('Login:', data),
  },
};

/**
 * Login with error state
 */
export const WithError: Story = {
  args: {
    logo: <Logo />,
    title: 'Welcome back',
    subtitle: 'Sign in to your account',
    error: 'Invalid email or password. Please try again.',
    socialProviders: [{ name: 'GitHub', icon: <Github size={20} /> }],
    editorial: {
      headline: 'Secure & Reliable',
      description: 'Your data is protected with enterprise-grade security.',
    },
    onSubmit: (data) => console.log('Login:', data),
  },
};

/**
 * Login in loading state
 */
export const Loading: Story = {
  args: {
    logo: <Logo />,
    title: 'Welcome back',
    subtitle: 'Sign in to your account',
    isLoading: true,
    editorial: {
      headline: 'Processing...',
      description: 'Please wait while we verify your credentials.',
    },
    onSubmit: (data) => console.log('Login:', data),
  },
};

/**
 * Login without editorial panel (single column)
 */
export const SingleColumn: Story = {
  args: {
    logo: <Logo />,
    title: 'Welcome back',
    subtitle: 'Sign in to your account',
    socialProviders: [
      { name: 'GitHub', icon: <Github size={20} /> },
      { name: 'Google', icon: <Chrome size={20} /> },
    ],
    onSubmit: (data) => console.log('Login:', data),
  },
};

/**
 * Login with custom form labels
 */
export const CustomLabels: Story = {
  args: {
    logo: <Logo />,
    title: 'Iniciar sesión',
    subtitle: 'Ingresa tus credenciales para continuar',
    formConfig: {
      emailLabel: 'Correo electrónico',
      emailPlaceholder: 'tu@ejemplo.com',
      passwordLabel: 'Contraseña',
      passwordPlaceholder: 'Ingresa tu contraseña',
      submitLabel: 'Iniciar sesión',
      rememberMeLabel: 'Recordarme',
      forgotPasswordLabel: '¿Olvidaste tu contraseña?',
    },
    signUpPrompt: '¿No tienes cuenta?',
    signUpLabel: 'Regístrate',
    socialLabel: 'O continúa con',
    socialProviders: [{ name: 'Google', icon: <Chrome size={20} /> }],
    editorial: {
      headline: 'Bienvenido a Orion',
      description: 'El sistema de diseño AI-first para interfaces consistentes.',
    },
    onSubmit: (data) => console.log('Login:', data),
  },
};

/**
 * Login with multiple social providers
 */
export const MultipleSocialProviders: Story = {
  args: {
    logo: <Logo />,
    title: 'Welcome back',
    subtitle: 'Choose your preferred sign in method',
    socialProviders: [
      { name: 'GitHub', icon: <Github size={20} /> },
      { name: 'Google', icon: <Chrome size={20} /> },
      { name: 'Apple', icon: <Apple size={20} /> },
    ],
    editorial: {
      headline: 'Multiple ways to sign in',
      description: 'Connect with your favorite provider for quick access.',
      quote: 'Single sign-on makes our team workflow so much faster!',
      author: 'Mike Johnson',
      authorRole: 'Product Manager',
      authorAvatar: <img src="https://i.pravatar.cc/80?u=mike" alt="" />,
    },
    onSubmit: (data) => console.log('Login:', data),
  },
};

/**
 * Login with background image on editorial
 */
export const WithBackgroundImage: Story = {
  args: {
    logo: <Logo />,
    title: 'Welcome back',
    subtitle: 'Sign in to continue to your dashboard',
    socialProviders: [
      { name: 'GitHub', icon: <Github size={20} /> },
      { name: 'Google', icon: <Chrome size={20} /> },
    ],
    editorial: {
      backgroundImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800',
      headline: 'Design at Scale',
      description: 'Build beautiful, consistent interfaces with confidence.',
      quote: 'The best design system I have ever used.',
      author: 'Emily Davis',
      authorRole: 'Lead Designer at StartupXYZ',
      authorAvatar: <img src="https://i.pravatar.cc/80?u=emily" alt="" />,
    },
    onSubmit: (data) => console.log('Login:', data),
  },
};

/**
 * Login with footer content
 */
export const WithFooter: Story = {
  args: {
    logo: <Logo />,
    title: 'Welcome back',
    subtitle: 'Sign in to your account',
    socialProviders: [{ name: 'GitHub', icon: <Github size={20} /> }],
    editorial: {
      headline: 'Enterprise Ready',
      description: 'Trusted by teams worldwide for mission-critical applications.',
    },
    footer: (
      <span>
        By signing in, you agree to our{' '}
        <a href="/terms" style={{ color: 'var(--text-brand)' }}>
          Terms of Service
        </a>{' '}
        and{' '}
        <a href="/privacy" style={{ color: 'var(--text-brand)' }}>
          Privacy Policy
        </a>
      </span>
    ),
    onSubmit: (data) => console.log('Login:', data),
  },
};

/**
 * Minimal login - form only, no extras
 */
export const Minimal: Story = {
  args: {
    title: 'Sign in',
    formConfig: {
      showRememberMe: false,
      showForgotPassword: false,
    },
    showSignUp: false,
    onSubmit: (data) => console.log('Login:', data),
  },
};
