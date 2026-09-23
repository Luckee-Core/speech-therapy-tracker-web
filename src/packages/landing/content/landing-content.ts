const githubOrg = process.env.NEXT_PUBLIC_GITHUB_ORG ?? 'Luckee-Core';

export const GITHUB_WEB_URL =
  process.env.NEXT_PUBLIC_GITHUB_WEB_URL ??
  `https://github.com/${githubOrg}/speech-therapy-tracker-web`;

export const GITHUB_API_URL =
  process.env.NEXT_PUBLIC_GITHUB_API_URL ??
  `https://github.com/${githubOrg}/speech-therapy-tracker-express-server`;

export const DOCS_URL = process.env.NEXT_PUBLIC_DOCS_URL ?? '/docs';

export const THT_URL =
  process.env.NEXT_PUBLIC_THT_URL ?? 'https://www.trouthousetech.com';

export const LANDING_BRAND_NAME = 'Speech Therapy Tracker';

export const LANDING_HERO_KICKER = 'OPEN SOURCE · LOCAL ONLY · LOOPBACK';

export const LANDING_HERO_HEADLINE = 'Stop guessing leftover feed and homework.';

export const LANDING_HERO_HEADLINE_ACCENT =
  'Peg-tube, speech exercises, and ice cubes from one dashboard.';

export const LANDING_HERO_SUB =
  'I built this to log Compleat leftovers, daily speech homework, and ice-cube counts without a vendor portal. Next.js talks to a local Express API on 127.0.0.1:3011. Postgres stays on this machine. No auth — loopback only.';

export const LANDING_HERO_STATS = [
  { h: 'Tube feed', s: 'Pump snapshots, leftover mL, calories' },
  { h: 'Speech therapy', s: 'Homework catalog and today’s reps' },
  { h: 'Ice cubes', s: 'Daily counts on the same local DB' },
] as const;

export const LANDING_NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Tube feed', href: '#tube-feed' },
  { label: 'Therapy', href: '#therapy' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Open source', href: '#open-source' },
  { label: 'Docs', href: '/docs' },
] as const;

export const LANDING_OVERVIEW_HEADING = 'See leftover feed and homework';
export const LANDING_OVERVIEW_HEADING_ACCENT = 'before the day gets away.';

export const LANDING_OVERVIEW_LEAD =
  'The dashboard shows Compleat leftover, calories since the last pump snapshot, and today’s speech exercises. Sidebar takes you to Tube feed, Speech therapy, or Ice cubes — all on local Postgres.';

export const LANDING_OVERVIEW_BULLETS = [
  'Pump leftover, rate, and calories from the last snapshot',
  'Today’s speech homework with remaining reps',
  'Ice-cube counts on the same local database',
  'Shortcuts to Tube feed, Speech therapy, and Ice cubes',
] as const;

export const LANDING_DASHBOARD_FEED = {
  formula: 'Compleat 1.5',
  leftover: '420 mL',
  leftoverMeta: '~7 hours at 60 mL/hr',
  calories: '1,260 kcal',
  caloriesMeta: 'since last snapshot',
  volume: '840 mL',
} as const;

export const LANDING_DASHBOARD_EXERCISES = [
  { name: 'Tongue elevation', progress: '8 / 10', status: 'open' as const },
  { name: 'Sustained /ah/', progress: '10 / 10', status: 'done' as const },
  { name: 'Lip seal holds', progress: '3 / 8', status: 'open' as const },
  { name: 'Ice cubes', progress: '12 today', status: 'open' as const },
] as const;

export const LANDING_TUBE_FEED_HEADING = 'Pump snapshots,';
export const LANDING_TUBE_FEED_HEADING_ACCENT = 'leftover mL and calories — logged, not guessed.';

export const LANDING_TUBE_FEED_LEAD =
  'Each morning snapshot records leftover Compleat, rate, and total fed. Calories come from the formula, not a spreadsheet. Confirm the numbers, then save on this machine.';

export const LANDING_TUBE_FEED_ROWS = [
  { date: 'Sep 23', leftover: '420 mL', calories: '1,260 kcal' },
  { date: 'Sep 22', leftover: '180 mL', calories: '1,410 kcal' },
  { date: 'Sep 21', leftover: '510 mL', calories: '980 kcal' },
  { date: 'Sep 20', leftover: '240 mL', calories: '1,350 kcal' },
] as const;

export const LANDING_THERAPY_HEADING = 'Speech homework and ice cubes,';
export const LANDING_THERAPY_HEADING_ACCENT = 'same local Postgres as the pump.';

export const LANDING_THERAPY_CARDS = [
  {
    key: 'exercises',
    title: 'Exercises',
    body: 'Homework catalog with target counts, schedule, and optional photo import. Rows stay in Postgres on Express.',
    tag: 'Catalog',
  },
  {
    key: 'homework',
    title: 'Today',
    body: 'Increment, skip, or mark due without leaving the list. The dashboard shows what is still open.',
    tag: 'Daily',
  },
  {
    key: 'ice-cubes',
    title: 'Ice cubes',
    body: 'Daily ice-cube counts on the same local database as tube feed. No vendor portal, no account.',
    tag: 'Count',
  },
] as const;

export const LANDING_ARCHITECTURE_HEADING = 'Two repos, one local wire —';
export const LANDING_ARCHITECTURE_HEADING_ACCENT = 'the split I use on OSS dashboards.';

export const LANDING_ARCHITECTURE_LEAD =
  'Browser app in Next.js. Tube feed, speech homework, and ice cubes in a thin Express service bound to 127.0.0.1. Postgres on this machine. No cloud, no auth, no vendor dashboard.';

export const LANDING_ARCHITECTURE_CARD_TITLE = 'Clone both repos, run on localhost';

export const LANDING_OPEN_SOURCE_HEADING = 'Next.js front end,';
export const LANDING_OPEN_SOURCE_HEADING_ACCENT = 'Express on localhost.';

export const LANDING_OPEN_SOURCE_LEAD =
  'Clone both, point NEXT_PUBLIC_API_URL at 127.0.0.1:3011, run locally. No auth — loopback only. Postgres via DATABASE_URL on Express.';

export const LANDING_REPOS = [
  {
    tag: 'web',
    name: 'speech-therapy-tracker-web',
    body: 'Dashboard + landing. Redux, src/packages/, thin app routes — same layout discipline I use elsewhere.',
    href: GITHUB_WEB_URL,
  },
  {
    tag: 'api',
    name: 'speech-therapy-tracker-express-server',
    body: 'Local Express + Postgres for tube feed, speech homework, and ice cubes. Bound to 127.0.0.1. No auth.',
    href: GITHUB_API_URL,
  },
] as const;

export const LANDING_CLI_COMMANDS = [
  `git clone ${GITHUB_WEB_URL}.git`,
  `git clone ${GITHUB_API_URL}.git`,
] as const;

export const LANDING_FINAL_CTA_KICKER = 'GET STARTED';

export const LANDING_FINAL_CTA_HEADING = 'Run it on your Mac.';
export const LANDING_FINAL_CTA_HEADING_ACCENT = 'Keep the health data there too.';

export const LANDING_FOOTER_TAGLINE =
  'Open-source peg-tube, speech homework, and ice-cube tracker I built to stay on this machine.';
