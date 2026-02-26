import type { Meta, StoryObj } from "@storybook/react";
import { LandingPageTemplate } from "./LandingPageTemplate";
import { Button } from "@orion-ds/react/components/Button";
import { Badge } from "@orion-ds/react/components/Badge";
import { Navbar } from "@orion-ds/react/components/Navbar";
import { Hero } from "../../../sections/Hero";
import {
  Zap,
  Shield,
  Rocket,
  BarChart3,
  Users,
  Globe,
  Twitter,
  Github,
  Linkedin,
} from "lucide-react";

const meta: Meta<typeof LandingPageTemplate> = {
  title: "Templates/Marketing/Landing Page",
  component: LandingPageTemplate,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A complete landing page template with hero, features, pricing, testimonials, and more.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LandingPageTemplate>;

// Sample data
const FEATURES = [
  {
    icon: <Zap size={24} />,
    title: "Lightning Fast",
    description:
      "Optimized for performance at every level. Sub-second load times guaranteed.",
  },
  {
    icon: <Shield size={24} />,
    title: "Secure by Default",
    description:
      "Enterprise-grade security with SOC2 compliance and end-to-end encryption.",
  },
  {
    icon: <Rocket size={24} />,
    title: "Scale Infinitely",
    description:
      "From startup to enterprise, our infrastructure grows with your needs.",
  },
  {
    icon: <BarChart3 size={24} />,
    title: "Analytics Built-in",
    description: "Real-time insights and reporting without the complexity.",
  },
  {
    icon: <Users size={24} />,
    title: "Team Collaboration",
    description:
      "Work together seamlessly with real-time collaboration features.",
  },
  {
    icon: <Globe size={24} />,
    title: "Global CDN",
    description:
      "Content delivered from edge locations worldwide for best performance.",
  },
];

const STATS = [
  { value: "10K+", label: "Active Users" },
  { value: "99.9%", label: "Uptime" },
  { value: "50M+", label: "API Calls/Day" },
  { value: "150+", label: "Countries" },
];

const PRICING_PLANS = [
  {
    name: "Starter",
    price: "$0",
    period: "/month",
    description: "Perfect for individuals",
    features: [
      { text: "5 projects", included: true },
      { text: "10GB storage", included: true },
      { text: "Basic analytics", included: true },
      { text: "API access", included: false },
    ],
    action: (
      <Button variant="secondary" fullWidth>
        Get Started
      </Button>
    ),
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "For growing teams",
    features: [
      { text: "Unlimited projects", included: true },
      { text: "100GB storage", included: true },
      { text: "Advanced analytics", included: true },
      { text: "API access", included: true },
    ],
    action: (
      <Button variant="primary" fullWidth>
        Start Free Trial
      </Button>
    ),
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      { text: "Everything in Pro", included: true },
      { text: "Unlimited storage", included: true },
      { text: "Custom integrations", included: true },
      { text: "Dedicated support", included: true },
    ],
    action: (
      <Button variant="secondary" fullWidth>
        Contact Sales
      </Button>
    ),
  },
];

const TESTIMONIALS = [
  {
    quote:
      "This platform transformed how we build products. We shipped our MVP in half the time.",
    author: {
      name: "Sarah Chen",
      role: "CTO",
      company: "TechCorp",
      avatar: <img src="https://i.pravatar.cc/150?u=sarah" alt="" />,
    },
  },
  {
    quote:
      "The developer experience is unmatched. Our team productivity increased by 40%.",
    author: {
      name: "Mike Johnson",
      role: "Lead Engineer",
      company: "StartupXYZ",
      avatar: <img src="https://i.pravatar.cc/150?u=mike" alt="" />,
    },
  },
  {
    quote:
      "Finally, a design system that actually works. No more UI inconsistencies.",
    author: {
      name: "Emily Rodriguez",
      role: "Design Director",
      company: "CreativeHub",
      avatar: <img src="https://i.pravatar.cc/150?u=emily" alt="" />,
    },
  },
];

const FAQ_ITEMS = [
  {
    question: "How do I get started?",
    answer:
      "Sign up for a free account and follow our quick start guide. You'll be up and running in less than 5 minutes.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel your subscription at any time with no penalties.",
  },
  {
    question: "Is there a free tier?",
    answer:
      "Yes! Our Starter plan is completely free and includes 5 projects and 10GB storage.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "Starter plans get community support. Pro plans include priority email support. Enterprise gets dedicated support.",
  },
];

const FOOTER_LINKS = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Changelog", href: "/changelog" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "API Reference", href: "/api" },
      { label: "Community", href: "/community" },
    ],
  },
];

const LOGO_ITEMS = [
  {
    name: "Company 1",
    logo: (
      <img src="https://placehold.co/120x40/1f2937/9ca3af?text=Logo+1" alt="" />
    ),
  },
  {
    name: "Company 2",
    logo: (
      <img src="https://placehold.co/120x40/1f2937/9ca3af?text=Logo+2" alt="" />
    ),
  },
  {
    name: "Company 3",
    logo: (
      <img src="https://placehold.co/120x40/1f2937/9ca3af?text=Logo+3" alt="" />
    ),
  },
  {
    name: "Company 4",
    logo: (
      <img src="https://placehold.co/120x40/1f2937/9ca3af?text=Logo+4" alt="" />
    ),
  },
  {
    name: "Company 5",
    logo: (
      <img src="https://placehold.co/120x40/1f2937/9ca3af?text=Logo+5" alt="" />
    ),
  },
];

const FEATURED_CAROUSEL_ITEMS = [
  {
    image: <img src="https://picsum.photos/1200/675?random=1" alt="" />,
    eyebrow: "Design",
    title: "The Future of AI-First Design",
    description: "How machine learning is reshaping interface design",
    overlay: "gradient" as const,
  },
  {
    image: <img src="https://picsum.photos/1200/675?random=2" alt="" />,
    eyebrow: "Engineering",
    title: "Building at Scale",
    description: "Lessons from shipping to millions of users",
    overlay: "gradient" as const,
  },
  {
    image: <img src="https://picsum.photos/1200/675?random=3" alt="" />,
    eyebrow: "Product",
    title: "Zero to Product-Market Fit",
    description: "A step-by-step guide to finding your audience",
    overlay: "gradient" as const,
  },
];

const PRODUCT_CAROUSEL_ITEMS = [
  {
    image: <img src="https://picsum.photos/800/600?random=4" alt="" />,
    title: "Analytics Dashboard",
    description: "Real-time insights at your fingertips",
  },
  {
    image: <img src="https://picsum.photos/800/600?random=5" alt="" />,
    title: "Team Collaboration",
    description: "Work together seamlessly",
  },
  {
    image: <img src="https://picsum.photos/800/600?random=6" alt="" />,
    title: "API Integration",
    description: "Connect with your favorite tools",
  },
];

// Features as carousel items (for Default story)
// Uses editorial variant: background image with text overlay
const FEATURES_CAROUSEL_ITEMS = [
  {
    image: (
      <img
        src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop"
        alt=""
      />
    ),
    eyebrow: "Performance",
    title: "Lightning Fast",
    description:
      "Optimized for performance at every level. Sub-second load times guaranteed.",
    overlay: "gradient" as const,
  },
  {
    image: (
      <img
        src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop"
        alt=""
      />
    ),
    eyebrow: "Security",
    title: "Secure by Default",
    description:
      "Enterprise-grade security with SOC2 compliance and end-to-end encryption.",
    overlay: "gradient" as const,
  },
  {
    image: (
      <img
        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
        alt=""
      />
    ),
    eyebrow: "Infrastructure",
    title: "Scale Infinitely",
    description:
      "From startup to enterprise, our infrastructure grows with your needs.",
    overlay: "gradient" as const,
  },
  {
    image: (
      <img
        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
        alt=""
      />
    ),
    eyebrow: "Insights",
    title: "Analytics Built-in",
    description: "Real-time insights and reporting without the complexity.",
    overlay: "gradient" as const,
  },
  {
    image: (
      <img
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
        alt=""
      />
    ),
    eyebrow: "Teamwork",
    title: "Team Collaboration",
    description:
      "Work together seamlessly with real-time collaboration features.",
    overlay: "gradient" as const,
  },
  {
    image: (
      <img
        src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop"
        alt=""
      />
    ),
    eyebrow: "Global",
    title: "Global CDN",
    description:
      "Content delivered from edge locations worldwide for best performance.",
    overlay: "gradient" as const,
  },
];

/**
 * Default landing page with all sections
 * Uses Hero with highlight text and CarouselSection for features
 */
export const Default: Story = {
  args: {
    navbar: {
      variant: "solid",
      sticky: true,
      children: (
        <>
          <Navbar.Brand href="/">
            <span
              style={{
                fontWeight: "var(--font-weight-bold)",
                fontSize: "var(--text-xl)",
              }}
            >
              Acme
            </span>
          </Navbar.Brand>
          <Navbar.Nav>
            <Navbar.Link href="#features">Features</Navbar.Link>
            <Navbar.Link href="#pricing">Pricing</Navbar.Link>
            <Navbar.Link href="#testimonials">Testimonials</Navbar.Link>
          </Navbar.Nav>
          <Navbar.Actions>
            <Button variant="ghost">Sign In</Button>
            <Button variant="primary">Get Started</Button>
          </Navbar.Actions>
        </>
      ),
    },
    hero: {
      badge: <Badge variant="brand">Now in Public Beta</Badge>,
      headline: (
        <>
          Build Products <Hero.Highlight>10x Faster</Hero.Highlight>
        </>
      ),
      description:
        "The all-in-one platform for modern development teams. Ship features, not infrastructure.",
      primaryAction: <Button size="lg">Start Free Trial</Button>,
      secondaryAction: (
        <Button variant="ghost" size="lg">
          Watch Demo
        </Button>
      ),
      align: "center",
      size: "lg",
    },
    logoCloud: {
      logos: LOGO_ITEMS,
      title: "Trusted by industry leaders",
    },
    productCarousel: {
      id: "features",
      eyebrow: <Badge>Features</Badge>,
      title: "Everything you need to ship faster",
      description:
        "Built for modern teams who value speed, quality, and developer experience.",
      items: FEATURES_CAROUSEL_ITEMS,
    },
    stats: {
      eyebrow: "By the Numbers",
      title: "Trusted by thousands",
      stats: STATS,
    },
    pricing: {
      id: "pricing",
      eyebrow: "Pricing",
      title: "Simple, transparent pricing",
      description: "No hidden fees. No surprises. Cancel anytime.",
      plans: PRICING_PLANS,
    },
    testimonials: {
      id: "testimonials",
      eyebrow: "Testimonials",
      title: "Loved by teams worldwide",
      testimonials: TESTIMONIALS,
    },
    faq: {
      eyebrow: "FAQ",
      title: "Frequently asked questions",
      items: FAQ_ITEMS,
    },
    cta: {
      headline: "Ready to get started?",
      description: "Join thousands of teams already building with Acme.",
      actions: (
        <>
          <Button size="lg">Start Free Trial</Button>
          <Button variant="ghost" size="lg">
            Talk to Sales
          </Button>
        </>
      ),
    },
    footer: {
      brand: {
        name: "Acme Inc",
        description: "Building the future of development.",
      },
      linkGroups: FOOTER_LINKS,
      socialLinks: [
        {
          label: "Twitter",
          href: "https://twitter.com",
          icon: <Twitter size={20} />,
        },
        {
          label: "GitHub",
          href: "https://github.com",
          icon: <Github size={20} />,
        },
        {
          label: "LinkedIn",
          href: "https://linkedin.com",
          icon: <Linkedin size={20} />,
        },
      ],
      copyright: `${new Date().getFullYear()} Acme Inc. All rights reserved.`,
    },
  },
};

/**
 * Landing page with carousels for featured content
 */
export const WithCarousels: Story = {
  args: {
    ...Default.args,
    featuredCarousel: {
      eyebrow: <Badge>Featured</Badge>,
      title: "Latest Stories",
      items: FEATURED_CAROUSEL_ITEMS,
    },
    productCarousel: {
      title: "Product Features",
      description: "Everything you need to ship faster",
      items: PRODUCT_CAROUSEL_ITEMS,
    },
  },
};

/**
 * Minimal landing page with only essential sections
 */
export const Minimal: Story = {
  args: {
    hero: {
      headline: "Build Products 10x Faster",
      description: "The all-in-one platform for modern development teams.",
      primaryAction: <Button size="lg">Get Started</Button>,
      align: "center",
      size: "lg",
    },
    features: {
      items: FEATURES.slice(0, 3),
      columns: 3,
    },
    cta: {
      headline: "Ready to start?",
      actions: <Button size="lg">Sign Up Free</Button>,
    },
    footer: {
      brand: { name: "Acme" },
      copyright: `${new Date().getFullYear()} Acme Inc.`,
    },
  },
};

/**
 * Hero-focused landing page for product launches
 */
export const ProductLaunch: Story = {
  args: {
    navbar: Default.args?.navbar,
    hero: {
      badge: <Badge variant="success">Just Launched</Badge>,
      headline: "Introducing Acme 2.0",
      description:
        "The next generation of our platform is here. Faster, smarter, and more powerful than ever.",
      primaryAction: <Button size="lg">Explore Now</Button>,
      secondaryAction: (
        <Button variant="ghost" size="lg">
          See What\'s New
        </Button>
      ),
      align: "center",
      size: "lg",
      fullHeight: true,
    },
    featuredCarousel: {
      title: "What's New",
      items: FEATURED_CAROUSEL_ITEMS,
    },
    features: {
      title: "New in 2.0",
      items: FEATURES.slice(0, 4),
      columns: 4,
    },
    cta: {
      headline: "Upgrade to Acme 2.0",
      description: "Free for existing customers. New users start free.",
      actions: (
        <>
          <Button size="lg">Upgrade Now</Button>
          <Button variant="ghost" size="lg">
            View Changelog
          </Button>
        </>
      ),
    },
    footer: Default.args?.footer,
  },
};
