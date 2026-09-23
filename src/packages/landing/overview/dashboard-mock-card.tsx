import {
  LANDING_BRAND_NAME,
  LANDING_DASHBOARD_EXERCISES,
  LANDING_DASHBOARD_FEED,
} from '../content/landing-content';

const statusClass = (status: 'open' | 'done'): string => {
  if (status === 'done') return styles.rowDone;
  return '';
};

/**
 * Presentational mock of the speech dashboard for the landing overview section.
 */
export const LandingDashboardMockCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <p className={styles.sidebarBrand}>{LANDING_BRAND_NAME}</p>
          <p className={styles.sidebarSection}>Overview</p>
          <p className={styles.sidebarActive}>Dashboard</p>
          <p className={styles.sidebarSection}>Care</p>
          <ul className={styles.sidebarList}>
            <li className={styles.sidebarItem}>Tube feed</li>
            <li className={styles.sidebarItem}>Speech therapy</li>
            <li className={styles.sidebarItem}>Ice cubes</li>
          </ul>
        </aside>
        <div className={styles.main}>
          <div className={styles.header}>
            <div>
              <p className={styles.headerTitle}>Dashboard</p>
              <p className={styles.headerSub}>Peg-tube leftover, homework, ice cubes</p>
            </div>
            <span className={styles.refresh}>Refresh</span>
          </div>
          <div className={styles.body}>
            <div className={styles.volume}>
              <p className={styles.volumeLabel}>Tube feed</p>
              <p className={styles.mount}>{LANDING_DASHBOARD_FEED.formula}</p>
              <div className={styles.volumeStats}>
                <div>
                  <p className={styles.statLabel}>Leftover</p>
                  <p className={styles.statValue}>{LANDING_DASHBOARD_FEED.leftover}</p>
                  <p className={styles.statMeta}>{LANDING_DASHBOARD_FEED.leftoverMeta}</p>
                </div>
                <div>
                  <p className={styles.statLabel}>Calories</p>
                  <p className={styles.statValue}>{LANDING_DASHBOARD_FEED.calories}</p>
                  <p className={styles.statMeta}>{LANDING_DASHBOARD_FEED.caloriesMeta}</p>
                </div>
                <div>
                  <p className={styles.statLabel}>Volume</p>
                  <p className={styles.statValue}>{LANDING_DASHBOARD_FEED.volume}</p>
                </div>
              </div>
              <div className={styles.barTrack} aria-hidden>
                <div className={styles.barFill} />
              </div>
            </div>
            <div>
              <p className={styles.blockLabel}>Today’s exercises</p>
              <ul className={styles.folderList}>
                {LANDING_DASHBOARD_EXERCISES.map((exercise) => (
                  <li
                    key={exercise.name}
                    className={`${styles.folderRow} ${statusClass(exercise.status)}`}
                  >
                    <span className={styles.folderLabel}>{exercise.name}</span>
                    <span className={styles.folderSize}>{exercise.progress}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: `rounded-xl border border-border bg-card shadow-sm overflow-hidden`,
  layout: `flex`,
  sidebar: `
    hidden w-40 shrink-0 border-r border-zinc-800 bg-zinc-900 p-4 text-xs text-zinc-300
    sm:block
  `,
  sidebarBrand: `text-[13px] font-semibold text-zinc-100`,
  sidebarSection: `section-label mt-5 mb-2 text-zinc-500`,
  sidebarActive: `rounded-md bg-zinc-800 px-2 py-1 text-white font-medium`,
  sidebarList: `space-y-1 text-zinc-400`,
  sidebarItem: `px-2 py-1`,
  main: `flex-1 min-w-0`,
  header: `flex items-center justify-between border-b border-border px-4 py-3`,
  headerTitle: `text-sm font-semibold`,
  headerSub: `text-xs text-muted-foreground`,
  refresh: `
    rounded-md border border-border px-2.5 py-1 text-xs font-medium text-muted-foreground
  `,
  body: `space-y-4 p-4`,
  volume: `rounded-lg border border-border p-3`,
  volumeLabel: `text-[11px] font-semibold uppercase tracking-wide text-muted-foreground`,
  mount: `mt-1 font-mono text-[11px] text-muted-foreground`,
  volumeStats: `mt-3 grid grid-cols-3 gap-3`,
  statLabel: `text-[11px] text-muted-foreground`,
  statValue: `mt-0.5 text-sm font-semibold`,
  statMeta: `text-[11px] text-muted-foreground`,
  barTrack: `mt-3 h-1.5 overflow-hidden rounded-full bg-secondary`,
  barFill: `h-full w-[70%] rounded-full bg-foreground`,
  blockLabel: `mb-2 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground`,
  folderList: `rounded-lg border border-border`,
  folderRow: `
    flex items-center justify-between border-b border-border px-3 py-2 last:border-0
  `,
  rowDone: `bg-emerald-50`,
  folderLabel: `text-xs font-medium`,
  folderSize: `font-mono text-xs text-muted-foreground`,
} as const;
