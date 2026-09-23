import { Droplets } from 'lucide-react';
import { LandingSectionLabel } from '../section-label';
import {
  LANDING_TUBE_FEED_HEADING,
  LANDING_TUBE_FEED_HEADING_ACCENT,
  LANDING_TUBE_FEED_LEAD,
  LANDING_TUBE_FEED_ROWS,
} from '../content/landing-content';

/**
 * Landing tube-feed section with a mock pump snapshot table.
 */
export const LandingTubeFeed = () => {
  return (
    <section id="tube-feed" className={styles.section}>
      <div className={styles.inner}>
        <LandingSectionLabel number="02" label="Tube feed" />
        <div className={styles.grid}>
          <div className={styles.mock}>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.iconWrap}>
                  <Droplets className={styles.icon} />
                </span>
                <div>
                  <p className={styles.cardTitle}>Pump snapshots</p>
                  <p className={styles.cardSub}>Compleat 1.5 — leftover and calories</p>
                </div>
                <span className={styles.clearBtn}>Log snapshot</span>
              </div>
              <table className={styles.table}>
                <thead>
                  <tr className={styles.theadRow}>
                    <th className={styles.th}>Date</th>
                    <th className={styles.thRight}>Leftover</th>
                    <th className={styles.thRight}>Calories</th>
                  </tr>
                </thead>
                <tbody>
                  {LANDING_TUBE_FEED_ROWS.map((row) => (
                    <tr key={row.date} className={styles.tr}>
                      <td className={styles.tdStrong}>{row.date}</td>
                      <td className={styles.tdSize}>{row.leftover}</td>
                      <td className={styles.tdSize}>{row.calories}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className={styles.copy}>
            <h2 className={styles.heading}>
              {LANDING_TUBE_FEED_HEADING}{' '}
              <span className={styles.accent}>{LANDING_TUBE_FEED_HEADING_ACCENT}</span>
            </h2>
            <p className={styles.lead}>{LANDING_TUBE_FEED_LEAD}</p>
          </div>
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
  grid: `
    mt-8 grid gap-12 items-start
    md:grid-cols-12
    md:gap-10
  `,
  mock: `
    order-2
    md:col-span-7
    md:order-1
  `,
  copy: `
    order-1
    md:col-span-5
    md:order-2
  `,
  card: `rounded-xl border border-border bg-card shadow-sm overflow-hidden`,
  cardHeader: `flex items-center gap-3 border-b border-border px-4 py-3`,
  iconWrap: `grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary`,
  icon: `h-5 w-5`,
  cardTitle: `text-sm font-semibold`,
  cardSub: `text-xs text-muted-foreground`,
  clearBtn: `
    ml-auto rounded-md bg-foreground px-2.5 py-1.5 text-xs font-medium text-background
  `,
  table: `w-full text-sm`,
  theadRow: `text-left text-xs text-muted-foreground`,
  th: `px-4 py-2 font-medium`,
  thRight: `px-4 py-2 font-medium text-right`,
  tr: `border-t border-border`,
  tdStrong: `px-4 py-3 font-medium`,
  tdSize: `px-4 py-3 text-right font-mono text-muted-foreground`,
  heading: `
    text-3xl font-semibold tracking-tight leading-tight
    md:text-4xl
  `,
  accent: `text-primary`,
  lead: `mt-5 text-muted-foreground leading-relaxed`,
} as const;
