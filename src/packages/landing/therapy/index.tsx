import { BookOpen, Snowflake, Speech } from 'lucide-react';
import { LandingSectionLabel } from '../section-label';
import {
  LANDING_THERAPY_CARDS,
  LANDING_THERAPY_HEADING,
  LANDING_THERAPY_HEADING_ACCENT,
} from '../content/landing-content';

const CARD_ICONS = {
  exercises: Speech,
  homework: BookOpen,
  'ice-cubes': Snowflake,
} as const;

/**
 * Landing therapy section with exercise, homework, and ice-cube cards.
 */
export const LandingTherapy = () => {
  return (
    <section id="therapy" className={styles.section}>
      <div className={styles.inner}>
        <LandingSectionLabel number="03" label="Therapy" />
        <h2 className={styles.heading}>
          {LANDING_THERAPY_HEADING}{' '}
          <span className={styles.accent}>{LANDING_THERAPY_HEADING_ACCENT}</span>
        </h2>
        <div className={styles.grid}>
          {LANDING_THERAPY_CARDS.map((card) => {
            const Icon = CARD_ICONS[card.key];
            return (
              <div key={card.key} className={styles.card}>
                <div className={styles.cardHead}>
                  <span className={styles.iconWrap}>
                    <Icon className={styles.icon} />
                  </span>
                  <span className={styles.risk}>{card.tag}</span>
                </div>
                <p className={styles.cardTitle}>{card.title}</p>
                <p className={styles.cardBody}>{card.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: `border-b border-border`,
  inner: `
    mx-auto max-w-7xl px-5 py-20
    sm:px-8
    md:py-28
  `,
  heading: `
    mt-6 max-w-3xl text-3xl font-semibold tracking-tight leading-tight
    md:text-4xl
  `,
  accent: `text-primary`,
  grid: `
    mt-10 grid gap-5
    md:grid-cols-3
  `,
  card: `
    rounded-xl border border-border bg-card p-6 transition-all
    hover:shadow-md hover:-translate-y-0.5
  `,
  cardHead: `flex items-center justify-between`,
  iconWrap: `grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-primary`,
  icon: `h-5 w-5`,
  risk: `
    rounded-full border border-border px-2 py-0.5 text-[11px] uppercase
    tracking-[0.18em] text-muted-foreground
  `,
  cardTitle: `mt-4 text-base font-semibold`,
  cardBody: `mt-2 text-sm text-muted-foreground leading-relaxed`,
} as const;
