'use client';

import { Hero, Badge, Button } from '@/components/ClientComponents';
import { Github, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface HomepageHeroProps {
  componentCount: number;
  sectionCount: number;
  templateCount: number;
}

export default function HomepageHero({
  componentCount,
  sectionCount,
  templateCount,
}: HomepageHeroProps) {
  return (
    <Hero
      layout="contained"
      size="lg"
      align="center"
      badge={
        <Badge variant="secondary" size="sm">
          ✨ Chain of Truth
        </Badge>
      }
      title={
        <>
          The{' '}
          <Hero.Highlight>
            AI-first
          </Hero.Highlight>
          <br />
          Design System
        </>
      }
      description="Build beautiful, consistent interfaces with zero visual drift. Token-governed components that eliminate UI hallucination."
      primaryAction={
        <Link href="/docs/getting-started">
          <Button
            size="lg"
            variant="primary"
            iconRight={<ArrowRight size={20} />}
          >
            Get Started
          </Button>
        </Link>
      }
      secondaryAction={
        <Link
          href="https://github.com/orion-ds/orion"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="lg" variant="ghost" icon={<Github size={20} />}>
            GitHub
          </Button>
        </Link>
      }
      trustIndicators={
        <div
          style={{
            display: 'flex',
            gap: 'var(--spacing-6)',
            color: 'var(--text-tertiary)',
            fontSize: '0.875rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <span>{componentCount} components</span>
          <span>·</span>
          <span>{sectionCount} sections</span>
          <span>·</span>
          <span>{templateCount} templates</span>
        </div>
      }
    />
  );
}
