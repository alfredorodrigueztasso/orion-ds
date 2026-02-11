/**
 * LoginTemplate
 *
 * A complete login page template inspired by Supabase's clean design.
 * Split-layout with form on left and editorial content on right.
 * Uses only Orion components and tokens - no custom CSS values.
 *
 * @example
 * ```tsx
 * <LoginTemplate
 *   logo={<Logo />}
 *   title="Welcome back"
 *   onSubmit={handleLogin}
 *   socialProviders={[{ name: 'Google', icon: <GoogleIcon /> }]}
 *   editorial={{ quote: "Amazing product!", author: "John Doe" }}
 * />
 * ```
 */

import { forwardRef, useState, type FormEvent } from 'react';
import type { LoginTemplateProps } from './LoginTemplate.types';

// Orion Components
import { Button } from '../../../components/Button';
import { Field } from '../../../components/Field';
import { Checkbox } from '../../../components/Checkbox';
import { Link } from '../../../components/Link';
import { Divider } from '../../../components/Divider';

import styles from './LoginTemplate.module.css';

export const LoginTemplate = forwardRef<HTMLDivElement, LoginTemplateProps>(
  (
    {
      logo,
      title = 'Welcome back',
      subtitle = 'Sign in to your account',
      formConfig = {},
      socialProviders = [],
      socialLabel = 'Or continue with',
      showSignUp = true,
      signUpPrompt = "Don't have an account?",
      signUpLabel = 'Sign up',
      signUpHref = '/signup',
      editorial,
      onSubmit,
      isLoading = false,
      error,
      footer,
      className,
      ...rest
    },
    ref
  ) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const {
      emailLabel = 'Email',
      emailPlaceholder = 'you@example.com',
      passwordLabel = 'Password',
      passwordPlaceholder = 'Enter your password',
      submitLabel = 'Sign in',
      showRememberMe = true,
      rememberMeLabel = 'Remember me',
      showForgotPassword = true,
      forgotPasswordLabel = 'Forgot password?',
      forgotPasswordHref = '/forgot-password',
    } = formConfig;

    const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      onSubmit?.({ email, password, rememberMe });
    };

    const hasSocialProviders = socialProviders.length > 0;
    const hasEditorial = !!editorial;

    return (
      <div
        ref={ref}
        className={`${styles.login} ${className || ''}`}
        data-single-column={!hasEditorial}
        {...rest}
      >
        {/* Left Panel - Form */}
        <div className={styles.formPanel}>
          <div className={styles.formContainer}>
            {/* Header */}
            <header className={styles.header}>
              {logo && <div className={styles.logo}>{logo}</div>}
              <div className={styles.titleGroup}>
                <h1 className={styles.title}>{title}</h1>
                {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
              </div>
            </header>

            {/* Social Login */}
            {hasSocialProviders && (
              <div className={styles.socialSection}>
                <div className={styles.socialButtons}>
                  {socialProviders.map((provider, index) => {
                    const ButtonElement = provider.href ? 'a' : 'button';
                    return (
                      <ButtonElement
                        key={index}
                        className={styles.socialButton}
                        onClick={provider.onClick}
                        href={provider.href}
                        type={provider.href ? undefined : 'button'}
                      >
                        <span className={styles.socialIcon}>{provider.icon}</span>
                        <span>Continue with {provider.name}</span>
                      </ButtonElement>
                    );
                  })}
                </div>
                <Divider label={socialLabel} />
              </div>
            )}

            {/* Error Message */}
            {error && <div className={styles.error}>{error}</div>}

            {/* Login Form */}
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.fields}>
                <Field
                  label={emailLabel}
                  type="email"
                  placeholder={emailPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  fullWidth
                  disabled={isLoading}
                  autoComplete="email"
                />
                <Field
                  label={passwordLabel}
                  type="password"
                  placeholder={passwordPlaceholder}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  fullWidth
                  disabled={isLoading}
                  autoComplete="current-password"
                />
              </div>

              {/* Form Options */}
              {(showRememberMe || showForgotPassword) && (
                <div className={styles.formOptions}>
                  {showRememberMe && (
                    <Checkbox
                      label={rememberMeLabel}
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      disabled={isLoading}
                    />
                  )}
                  {showForgotPassword && (
                    <Link href={forgotPasswordHref} variant="brand" size="sm">
                      {forgotPasswordLabel}
                    </Link>
                  )}
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                fullWidth
                isLoading={isLoading}
              >
                {submitLabel}
              </Button>
            </form>

            {/* Sign Up Link */}
            {showSignUp && (
              <div className={styles.signUpPrompt}>
                <span>{signUpPrompt}</span>
                <Link href={signUpHref} variant="brand">
                  {signUpLabel}
                </Link>
              </div>
            )}

            {/* Footer */}
            {footer && <div className={styles.footer}>{footer}</div>}
          </div>
        </div>

        {/* Right Panel - Editorial */}
        {hasEditorial && (
          <div
            className={styles.editorialPanel}
            data-has-image={!!editorial.backgroundImage}
            style={
              editorial.backgroundImage
                ? { backgroundImage: `url(${editorial.backgroundImage})` }
                : undefined
            }
          >
            {editorial.children ? (
              editorial.children
            ) : (
              <div className={styles.editorialContent}>
                {editorial.headline && (
                  <h2 className={styles.editorialHeadline}>{editorial.headline}</h2>
                )}
                {editorial.description && (
                  <p className={styles.editorialDescription}>{editorial.description}</p>
                )}
                {editorial.quote && (
                  <div className={styles.testimonial}>
                    <p className={styles.quote}>"{editorial.quote}"</p>
                    {(editorial.author || editorial.authorRole) && (
                      <div className={styles.author}>
                        {editorial.authorAvatar && (
                          <div className={styles.authorAvatar}>
                            {editorial.authorAvatar}
                          </div>
                        )}
                        <div className={styles.authorInfo}>
                          {editorial.author && (
                            <p className={styles.authorName}>{editorial.author}</p>
                          )}
                          {editorial.authorRole && (
                            <p className={styles.authorRole}>{editorial.authorRole}</p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
);

LoginTemplate.displayName = 'LoginTemplate';

export default LoginTemplate;
