# AppDownload Section

> Mobile app download section with store badges, QR code, and app preview.

## Quick Start

```tsx
import { AppDownload } from "@orion/react";

<AppDownload
  title="Download Our App"
  description="Available on iOS and Android"
  badges={[
    { store: "apple", href: "https://apps.apple.com/app/..." },
    { store: "google", href: "https://play.google.com/store/apps/..." },
  ]}
  appImage="/app-preview.png"
/>;
```

---

## Features

- **Store Badges** — Apple, Google, Huawei, or custom badges
- **App Preview** — Device mockup or screenshot
- **QR Code** — Quick scan-to-download option
- **App Features** — Highlight key features
- **App Rating** — Display store rating
- **3 Layouts** — Centered, split-left, split-right
- **Brand-Aware** — Adapts to all Orion brands

---

## Props Reference

```typescript
interface AppDownloadProps {
  // Header
  eyebrow?: ReactNode; // Badge/label above title
  title: ReactNode; // REQUIRED - Section title
  description?: ReactNode; // Section description

  // Store Badges
  badges: AppStoreBadge[]; // REQUIRED - App store badges

  // Media
  appImage?: string; // App preview image
  qrCode?: string; // QR code image
  showQrCode?: boolean; // Show QR code - default: false

  // Features
  features?: AppFeature[]; // App features list
  rating?: {
    // App store rating
    value: number; // Rating value (e.g., 4.8)
    count: string; // Review count (e.g., "10K+")
  };

  // Layout
  layout?: "centered" | "split-left" | "split-right"; // default: 'centered'

  // Styling
  background?: "base" | "subtle" | "gradient" | "dark"; // default: 'gradient'
  compact?: boolean; // Compact spacing - default: false
}

interface AppStoreBadge {
  store: "apple" | "google" | "huawei" | "custom";
  href: string; // Download URL
  badgeImage?: string; // Custom badge image
  badgeAlt?: string; // Custom badge alt text
}

interface AppFeature {
  icon?: ReactNode; // Feature icon
  title: string; // Feature title
  description?: string; // Feature description
}
```

---

## Store Badges

### Apple App Store

```tsx
badges={[
  { store: 'apple', href: 'https://apps.apple.com/app/myapp/id123456789' }
]}
```

### Google Play Store

```tsx
badges={[
  { store: 'google', href: 'https://play.google.com/store/apps/details?id=com.myapp' }
]}
```

### Huawei AppGallery

```tsx
badges={[
  { store: 'huawei', href: 'https://appgallery.huawei.com/app/...' }
]}
```

### Custom Badge

```tsx
badges={[
  {
    store: 'custom',
    href: 'https://myapp.com/download',
    badgeImage: '/badges/custom-store.svg',
    badgeAlt: 'Download from Our Store'
  }
]}
```

### Multiple Stores

```tsx
badges={[
  { store: 'apple', href: 'https://apps.apple.com/...' },
  { store: 'google', href: 'https://play.google.com/...' },
  { store: 'huawei', href: 'https://appgallery.huawei.com/...' }
]}
```

---

## Layout Variants

### `layout="centered"` (Default)

Content centered with optional app preview.

```tsx
<AppDownload
  layout="centered"
  title="Get the App"
  badges={badges}
  appImage="/app-mockup.png"
/>
```

### `layout="split-left"`

App image on the left, content on the right.

```tsx
<AppDownload
  layout="split-left"
  title="Experience Mobile"
  badges={badges}
  appImage="/phone-left.png"
/>
```

### `layout="split-right"`

Content on the left, app image on the right.

```tsx
<AppDownload
  layout="split-right"
  title="Download Today"
  badges={badges}
  appImage="/phone-right.png"
/>
```

---

## QR Code

Show a QR code for quick scanning.

```tsx
<AppDownload
  title="Scan to Download"
  badges={badges}
  qrCode="/qr/app-download.png"
  showQrCode
/>
```

---

## App Features

Highlight key app features.

```tsx
import { Zap, Shield, Bell } from "lucide-react";

<AppDownload
  title="Why Use Our App?"
  badges={badges}
  features={[
    {
      icon: <Zap size={24} />,
      title: "Lightning Fast",
      description: "Instant sync across all devices",
    },
    {
      icon: <Shield size={24} />,
      title: "Secure",
      description: "Bank-level encryption",
    },
    {
      icon: <Bell size={24} />,
      title: "Smart Notifications",
      description: "Never miss important updates",
    },
  ]}
/>;
```

---

## App Rating

Display store rating and review count.

```tsx
<AppDownload
  title="Top Rated App"
  badges={badges}
  rating={{
    value: 4.8,
    count: "50K+ reviews",
  }}
/>
```

---

## Background Variants

### Gradient (Default)

```tsx
<AppDownload background="gradient" ... />
```

### Dark

```tsx
<AppDownload background="dark" ... />
```

### Subtle

```tsx
<AppDownload background="subtle" ... />
```

### Base

```tsx
<AppDownload background="base" ... />
```

---

## Complete Examples

### Full Featured App Download

```tsx
import { AppDownload, Badge } from "@orion/react";
import { Smartphone, Cloud, Lock, Zap } from "lucide-react";

<AppDownload
  eyebrow={<Badge variant="brand">Mobile App</Badge>}
  title="Take Your Workflow Anywhere"
  description="Download our award-winning app and stay productive on the go. Available for iOS and Android."
  layout="split-right"
  appImage="/app/phone-mockup.png"
  badges={[
    { store: "apple", href: "https://apps.apple.com/app/myapp" },
    {
      store: "google",
      href: "https://play.google.com/store/apps/details?id=com.myapp",
    },
  ]}
  features={[
    {
      icon: <Smartphone size={24} />,
      title: "Native Experience",
      description: "Optimized for iOS and Android",
    },
    {
      icon: <Cloud size={24} />,
      title: "Real-time Sync",
      description: "Always up to date across devices",
    },
    {
      icon: <Lock size={24} />,
      title: "Biometric Login",
      description: "Face ID and fingerprint support",
    },
    {
      icon: <Zap size={24} />,
      title: "Offline Mode",
      description: "Work without internet connection",
    },
  ]}
  rating={{
    value: 4.9,
    count: "25K+ ratings",
  }}
  showQrCode
  qrCode="/qr/app-download.png"
  background="gradient"
/>;
```

### Simple Download Section

```tsx
<AppDownload
  title="Get Started in Seconds"
  description="Download the app and sign up with your email."
  badges={[
    { store: "apple", href: "https://apps.apple.com/..." },
    { store: "google", href: "https://play.google.com/..." },
  ]}
  background="subtle"
/>
```

### QR Code Focus

```tsx
<AppDownload
  layout="centered"
  title="Scan to Download"
  description="Point your phone's camera at the QR code to get the app instantly."
  badges={[
    { store: "apple", href: "https://apps.apple.com/..." },
    { store: "google", href: "https://play.google.com/..." },
  ]}
  showQrCode
  qrCode="/qr/universal-download.png"
  background="dark"
/>
```

### Banking App Download

```tsx
<AppDownload
  eyebrow="Mobile Banking"
  title="Bank on Your Terms"
  description="Manage your finances securely from anywhere. Transfer money, pay bills, and track spending."
  layout="split-left"
  appImage="/banking/app-screens.png"
  badges={[
    { store: "apple", href: "https://apps.apple.com/..." },
    { store: "google", href: "https://play.google.com/..." },
  ]}
  rating={{
    value: 4.7,
    count: "100K+ reviews",
  }}
  features={[
    { icon: <Shield size={24} />, title: "256-bit Encryption" },
    { icon: <Fingerprint size={24} />, title: "Biometric Security" },
    { icon: <Bell size={24} />, title: "Instant Alerts" },
  ]}
  background="gradient"
/>
```

### Compact Footer Download

```tsx
<AppDownload
  compact
  layout="centered"
  title="Get the App"
  badges={[
    { store: "apple", href: "..." },
    { store: "google", href: "..." },
  ]}
  background="none"
/>
```

---

## Accessibility

- Store badges have appropriate alt text
- QR code has descriptive alt text
- Rating announced with proper context
- Feature icons are decorative (hidden from screen readers)
- Links are keyboard accessible

```tsx
// Good: All badges have valid URLs
badges={[
  { store: 'apple', href: 'https://apps.apple.com/app/...' }
]}

// Avoid: Placeholder URLs
badges={[
  { store: 'apple', href: '#' }
]}
```

---

## Anti-Patterns

### Missing Store Links

```tsx
// WRONG - Badge with no destination
badges={[
  { store: 'apple', href: '' }
]}

// CORRECT - Valid store URL
badges={[
  { store: 'apple', href: 'https://apps.apple.com/app/myapp/id123456' }
]}
```

### Low Quality App Image

```tsx
// WRONG - Pixelated or wrong dimensions
appImage = "/tiny-screenshot.jpg";

// CORRECT - High-res device mockup
appImage = "/mockups/iphone-2x.png";
```

### Fake Rating

```tsx
// WRONG - Fabricated numbers
rating={{
  value: 5.0,  // Suspiciously perfect
  count: "1M+ reviews"  // Unverifiable
}}

// CORRECT - Actual store rating
rating={{
  value: 4.7,
  count: "12,453 reviews"
}}
```

### Too Many Features

```tsx
// WRONG - Feature overload
features={[...tenFeatures]}

// CORRECT - Highlight 3-4 key features
features={[
  { title: "Fast", icon: <Zap /> },
  { title: "Secure", icon: <Shield /> },
  { title: "Offline", icon: <WifiOff /> }
]}
```

---

## When to Use AppDownload

| Scenario           | Recommendation             |
| ------------------ | -------------------------- |
| Landing page       | Split layout with features |
| Product page       | Centered with QR code      |
| Footer CTA         | Compact, no background     |
| Marketing campaign | Full featured with rating  |

## When NOT to Use AppDownload

| Scenario          | Use Instead           |
| ----------------- | --------------------- |
| Web app only      | CTA section           |
| Multiple products | Product grid          |
| Beta/coming soon  | CTA with email signup |
| Desktop software  | Download page         |

---

## Related Components

- **[CTA](../CTA/README.md)** — Call-to-action sections
- **[Hero](../Hero/README.md)** — Hero with app preview
- **[Features](../Features/README.md)** — Feature showcase
- **[Footer](../Footer/README.md)** — Footer with app links
