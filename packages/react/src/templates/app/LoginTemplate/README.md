# LoginTemplate

> Complete login page with form, social providers, and optional editorial panel. Inspired by Supabase's clean design.

## Quick Start

```tsx
import { LoginTemplate } from '@orion/react';
import { Chrome } from 'lucide-react';

<LoginTemplate
  logo={<img src="/logo.svg" alt="Acme" height={32} />}
  title="Welcome back"
  subtitle="Sign in to your account"
  onSubmit={({ email, password, rememberMe }) => {
    console.log('Login:', email, password, rememberMe);
  }}
  socialProviders={[
    {
      name: 'Google',
      icon: <Chrome size={20} />,
      onClick: () => handleGoogleAuth(),
    },
  ]}
  editorial={{
    headline: 'Build faster with Acme',
    quote: 'This platform transformed our workflow completely.',
    author: 'Sarah Chen',
    authorRole: 'CTO at TechCorp',
  }}
/>;
```

---

## Features

- **Split Layout** — Form on left, editorial content on right
- **Social Login** — Support for OAuth providers (Google, GitHub, etc.)
- **Form Validation** — Built-in email/password validation
- **Remember Me** — Optional "remember me" checkbox
- **Forgot Password** — Link to password recovery
- **Sign Up Link** — Link to registration page
- **Loading State** — Disable form during submission
- **Error Display** — Show authentication errors
- **Editorial Panel** — Testimonial/marketing content (optional)
- **Responsive** — Single column on mobile, split on desktop

---

## Props Reference

```typescript
interface LoginTemplateProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title' | 'onSubmit'> {
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
   * If not provided, right panel is hidden
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

interface SocialProvider {
  name: string;
  icon: ReactNode;
  onClick?: () => void;
  href?: string;
}

interface LoginEditorial {
  headline?: string;
  description?: string;
  quote?: string;
  author?: string;
  authorRole?: string;
  authorAvatar?: ReactNode;
  backgroundImage?: string;
  children?: ReactNode; // Custom content (overrides all above)
}

interface LoginFormConfig {
  emailLabel?: string; // @default 'Email'
  emailPlaceholder?: string; // @default 'you@example.com'
  passwordLabel?: string; // @default 'Password'
  passwordPlaceholder?: string; // @default 'Enter your password'
  submitLabel?: string; // @default 'Sign in'
  showRememberMe?: boolean; // @default true
  rememberMeLabel?: string; // @default 'Remember me'
  showForgotPassword?: boolean; // @default true
  forgotPasswordLabel?: string; // @default 'Forgot password?'
  forgotPasswordHref?: string; // @default '/forgot-password'
}
```

---

## Complete Examples

### Full-Featured Login

```tsx
import { LoginTemplate, Avatar, Link } from '@orion/react';
import { Chrome, Github } from 'lucide-react';

function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async ({ email, password, rememberMe }) => {
    setIsLoading(true);
    setError(null);

    try {
      await authService.login(email, password, rememberMe);
      router.push('/dashboard');
    } catch (err) {
      setError('Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LoginTemplate
      logo={<img src="/logo.svg" alt="Acme" height={32} />}
      title="Welcome back"
      subtitle="Sign in to continue to Acme"
      onSubmit={handleSubmit}
      isLoading={isLoading}
      error={error}
      socialProviders={[
        {
          name: 'Google',
          icon: <Chrome size={20} />,
          onClick: () => authService.loginWithGoogle(),
        },
        {
          name: 'GitHub',
          icon: <Github size={20} />,
          onClick: () => authService.loginWithGithub(),
        },
      ]}
      editorial={{
        headline: 'Build products faster',
        description: 'Join thousands of teams shipping features, not infrastructure.',
        quote: 'Acme transformed how we build. We shipped our MVP in half the time.',
        author: 'Sarah Chen',
        authorRole: 'CTO at TechCorp',
        authorAvatar: <Avatar src="/sarah.jpg" fallback="SC" />,
      }}
      footer={
        <div style={{ display: 'flex', gap: 'var(--spacing-4)', justifyContent: 'center' }}>
          <Link href="/terms" size="sm">
            Terms of Service
          </Link>
          <Link href="/privacy" size="sm">
            Privacy Policy
          </Link>
        </div>
      }
    />
  );
}
```

### Minimal Login (No Editorial)

```tsx
<LoginTemplate
  logo={<img src="/logo.svg" alt="Acme" height={32} />}
  title="Sign in"
  onSubmit={handleSubmit}
/>
```

Without the `editorial` prop, the template renders as a centered single-column form.

### Social Login Only

```tsx
<LoginTemplate
  logo={<img src="/logo.svg" alt="Acme" height={32} />}
  title="Get started"
  subtitle="Choose how to sign in"
  formConfig={{
    showRememberMe: false,
    showForgotPassword: false,
  }}
  socialProviders={[
    { name: 'Google', icon: <Chrome size={20} />, onClick: handleGoogle },
    { name: 'GitHub', icon: <Github size={20} />, onClick: handleGithub },
    { name: 'Microsoft', icon: <Building size={20} />, onClick: handleMicrosoft },
  ]}
  signUpPrompt="New to Acme?"
  signUpLabel="Create an account"
  signUpHref="/signup"
/>
```

### Custom Editorial Content

```tsx
<LoginTemplate
  logo={<img src="/logo.svg" alt="Acme" height={32} />}
  onSubmit={handleSubmit}
  editorial={{
    backgroundImage: '/login-bg.jpg',
    children: (
      <div className="custom-editorial">
        <h2>Welcome to Acme</h2>
        <ul>
          <li>Feature one</li>
          <li>Feature two</li>
          <li>Feature three</li>
        </ul>
      </div>
    ),
  }}
/>
```

### With Custom Form Labels

```tsx
<LoginTemplate
  title="Accedi"
  subtitle="Inserisci le tue credenziali"
  formConfig={{
    emailLabel: 'Email',
    emailPlaceholder: 'tu@esempio.com',
    passwordLabel: 'Password',
    passwordPlaceholder: 'Inserisci la password',
    submitLabel: 'Accedi',
    rememberMeLabel: 'Ricordami',
    forgotPasswordLabel: 'Password dimenticata?',
    forgotPasswordHref: '/recupera-password',
  }}
  signUpPrompt="Non hai un account?"
  signUpLabel="Registrati"
  signUpHref="/registrati"
  onSubmit={handleSubmit}
/>
```

---

## Customization

### Disable Remember Me

```tsx
<LoginTemplate formConfig={{ showRememberMe: false }} onSubmit={handleSubmit} />
```

### Disable Forgot Password

```tsx
<LoginTemplate formConfig={{ showForgotPassword: false }} onSubmit={handleSubmit} />
```

### Hide Sign Up Link

```tsx
<LoginTemplate showSignUp={false} onSubmit={handleSubmit} />
```

---

## Accessibility

- Form uses proper `<label>` associations
- Submit button has loading state with `aria-busy`
- Error messages use `aria-live` for screen readers
- Social buttons have accessible names
- Focus management after error
- `autoComplete` attributes for password managers

---

## Anti-Patterns

### Missing onSubmit Handler

```tsx
// WRONG - Form won't work without handler
<LoginTemplate
  title="Sign in"
  // onSubmit is missing
/>

// CORRECT
<LoginTemplate
  title="Sign in"
  onSubmit={handleSubmit}
/>
```

### Hardcoded Form State

```tsx
// WRONG - Don't manage form state externally
<LoginTemplate
  email={email}  // Not a valid prop
  password={password}  // Not a valid prop
/>

// CORRECT - Template manages its own state
<LoginTemplate
  onSubmit={({ email, password }) => {
    // Handle login with provided values
  }}
/>
```

### Using as a Registration Form

```tsx
// WRONG - LoginTemplate is for login only
<LoginTemplate
  title="Create Account"
  formConfig={{
    showConfirmPassword: true, // Not a valid option
  }}
/>

// CORRECT - Create a separate signup template or page
// LoginTemplate is specifically for authentication
```

---

## When to Use

| Scenario             | Recommendation           |
| -------------------- | ------------------------ |
| User login page      | Yes                      |
| Admin login          | Yes                      |
| OAuth authentication | Yes                      |
| Magic link login     | Partial (customize form) |

## When NOT to Use

| Scenario          | Use Instead                                 |
| ----------------- | ------------------------------------------- |
| User registration | Custom signup page                          |
| Password reset    | Custom reset page                           |
| Two-factor auth   | Custom 2FA page                             |
| Profile settings  | `ProfilePageTemplate` or `SettingsTemplate` |

---

## Related

- **[Button](../../../components/Button/README.md)** — Action buttons
- **[Field](../../../components/Field/README.md)** — Form input fields
- **[Checkbox](../../../components/Checkbox/README.md)** — Remember me checkbox
- **[Link](../../../components/Link/README.md)** — Navigation links
