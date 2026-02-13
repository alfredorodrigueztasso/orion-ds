/**
 * LoginTemplate Types
 *
 * Type definitions for the login page template.
 * Inspired by Supabase's clean, split-layout login experience.
 */

import type { HTMLAttributes, ReactNode } from 'react';

/**
 * Social login provider configuration
 */
export interface SocialProvider {
  /**
   * Provider name (displayed on button)
   */
  name: string;

  /**
   * Provider icon
   */
  icon: ReactNode;

  /**
   * Click handler
   */
  onClick?: () => void;

  /**
   * Optional href for link-based auth
   */
  href?: string;
}

/**
 * Editorial content for the right panel
 */
export interface LoginEditorial {
  /**
   * Main headline
   */
  headline?: string;

  /**
   * Supporting description
   */
  description?: string;

  /**
   * Testimonial quote
   */
  quote?: string;

  /**
   * Quote author name
   */
  author?: string;

  /**
   * Author role/company
   */
  authorRole?: string;

  /**
   * Author avatar
   */
  authorAvatar?: ReactNode;

  /**
   * Background image URL (optional)
   */
  backgroundImage?: string;

  /**
   * Custom content (overrides all above)
   */
  children?: ReactNode;
}

/**
 * Form field configuration
 */
export interface LoginFormConfig {
  /**
   * Email field label
   * @default 'Email'
   */
  emailLabel?: string;

  /**
   * Email placeholder
   * @default 'you@example.com'
   */
  emailPlaceholder?: string;

  /**
   * Password field label
   * @default 'Password'
   */
  passwordLabel?: string;

  /**
   * Password placeholder
   * @default 'Enter your password'
   */
  passwordPlaceholder?: string;

  /**
   * Submit button text
   * @default 'Sign in'
   */
  submitLabel?: string;

  /**
   * Show "Remember me" checkbox
   * @default true
   */
  showRememberMe?: boolean;

  /**
   * "Remember me" label
   * @default 'Remember me'
   */
  rememberMeLabel?: string;

  /**
   * Show "Forgot password" link
   * @default true
   */
  showForgotPassword?: boolean;

  /**
   * Forgot password link text
   * @default 'Forgot password?'
   */
  forgotPasswordLabel?: string;

  /**
   * Forgot password URL
   * @default '/forgot-password'
   */
  forgotPasswordHref?: string;
}

/**
 * LoginTemplate props
 *
 * @example
 * ```tsx
 * <LoginTemplate
 *   logo={<Logo />}
 *   title="Welcome back"
 *   subtitle="Sign in to your account"
 *   onSubmit={handleLogin}
 *   socialProviders={[
 *     { name: 'Google', icon: <GoogleIcon />, onClick: handleGoogleAuth }
 *   ]}
 * />
 * ```
 */
export interface LoginTemplateProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  'title' | 'onSubmit'
> {
  /**
   * Logo element (displayed at top of form)
   */
  logo?: ReactNode;

  /**
   * Main heading
   * @default 'Welcome back'
   */
  title?: string;

  /**
   * Subtitle/description
   * @default 'Sign in to your account'
   */
  subtitle?: string;

  /**
   * Form configuration
   */
  formConfig?: LoginFormConfig;

  /**
   * Social login providers
   */
  socialProviders?: SocialProvider[];

  /**
   * Social login section label
   * @default 'Or continue with'
   */
  socialLabel?: string;

  /**
   * Show sign up link
   * @default true
   */
  showSignUp?: boolean;

  /**
   * Sign up prompt text
   * @default "Don't have an account?"
   */
  signUpPrompt?: string;

  /**
   * Sign up link text
   * @default 'Sign up'
   */
  signUpLabel?: string;

  /**
   * Sign up URL
   * @default '/signup'
   */
  signUpHref?: string;

  /**
   * Editorial content for right panel
   * If not provided, right panel is hidden on all screen sizes
   */
  editorial?: LoginEditorial;

  /**
   * Form submit handler
   */
  onSubmit?: (data: { email: string; password: string; rememberMe: boolean }) => void;

  /**
   * Loading state (disables form)
   * @default false
   */
  isLoading?: boolean;

  /**
   * Error message to display
   */
  error?: string;

  /**
   * Footer content (e.g., terms, privacy links)
   */
  footer?: ReactNode;
}
