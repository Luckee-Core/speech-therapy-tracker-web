import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { DASHBOARD_PATH } from '@/config/routes';
import {
  LANDING_HERO_HEADLINE,
  LANDING_HERO_HEADLINE_ACCENT,
  LANDING_HERO_KICKER,
  LANDING_HERO_STATS,
  LANDING_HERO_SUB,
} from '../content/landing-content';

/**
 * Landing hero with headline, CTAs, and feature stats strip.
 */
export const LandingHero = () => {
  return (
    <section id="top" className={styles.section}>
      <div className={styles.gridOverlay} aria-hidden />
      <div className={styles.topLine} aria-hidden />
      <div className={styles.inner}>
        <p className={styles.kicker}>{LANDING_HERO_KICKER}</p>
        <h1 className={styles.heading}>
          {LANDING_HERO_HEADLINE}{' '}
          <span className={styles.accent}>{LANDING_HERO_HEADLINE_ACCENT}</span>
        </h1>
        <p className={styles.sub}>{LANDING_HERO_SUB}</p>
        <div className={styles.ctaRow}>
          <a href="#open-source" className={styles.ctaPrimary}>
            Clone &amp; self-host <ArrowRight className={styles.ctaIcon} />
          </a>
          <Link href={DASHBOARD_PATH} className={styles.ctaSecondary}>
            See the dashboard
          </Link>
        </div>
        <div className={styles.stats}>
          {LANDING_HERO_STATS.map((stat, index) => (
            <div
              key={stat.h}
              className={index > 0 ? styles.statCellBordered : styles.statCell}
            >
              <p className={styles.statHeading}>{stat.h}</p>
              <p className={styles.statSub}>{stat.s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: `relative overflow-hidden border-b border-border`,
  gridOverlay: `absolute inset-0 grid-overlay pointer-events-none`,
  topLine: `
    absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent
  `,
  inner: `
    relative mx-auto max-w-7xl px-5 pt-20 pb-16
    sm:px-8
    md:pt-28
    md:pb-24
  `,
  kicker: `kicker`,
  heading: `
    mt-5 max-w-4xl text-4xl font-semibold tracking-tight leading-[1.05]
    sm:text-5xl
    md:text-6xl
  `,
  accent: `text-primary`,
  sub: `
    mt-6 max-w-2xl text-base text-muted-foreground leading-relaxed
    sm:text-lg
  `,
  ctaRow: `mt-8 flex flex-wrap gap-3`,
  ctaPrimary: `
    inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium
    text-primary-foreground hover:bg-primary-hover transition-colors
  `,
  ctaIcon: `h-4 w-4`,
  ctaSecondary: `
    inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-medium
    hover:bg-muted transition-colors
  `,
  stats: `
    mt-16 grid grid-cols-1 border border-border rounded-xl bg-card overflow-hidden
    md:grid-cols-3
  `,
  statCell: `p-6`,
  statCellBordered: `
    p-6 border-t border-border
    md:border-l
    md:border-t-0
  `,
  statHeading: `text-sm font-semibold`,
  statSub: `mt-1 text-sm text-muted-foreground`,
} as const;
