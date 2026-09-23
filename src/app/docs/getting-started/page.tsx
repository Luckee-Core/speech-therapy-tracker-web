import type { Metadata } from 'next';
import Link from 'next/link';
import { DOCS_API_PATH, DOCS_OPEN_SOURCE_PATH } from '@/config/routes';
import { GITHUB_API_URL, GITHUB_WEB_URL } from '@/packages/docs/content';
import { docsArticleStyles as styles } from '@/packages/docs';

export const metadata: Metadata = {
  title: 'Getting started — Speech Therapy Tracker',
  description:
    'Run Speech Therapy Tracker locally: clone both repos, start Express on 3011, web on 3010, apply Postgres schema.',
};

export default function GettingStartedPage() {
  return (
    <article className={styles.article}>
      <h1 className={styles.h1}>Getting started</h1>
      <p className={styles.lead}>
        Speech Therapy Tracker is a <strong>self-hosted dashboard</strong> for tube feed, speech
        exercises, and ice-cube counts. Clone both repositories, apply Postgres schema, run Express
        first, then the Next.js app.
      </p>

      <section className={styles.section}>
        <h2 className={styles.h2}>Wire contract</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>Field</th>
              <th className={styles.th}>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.td}>Default web port</td>
              <td className={styles.td}>
                <code className={styles.code}>3010</code>
              </td>
            </tr>
            <tr>
              <td className={styles.td}>Default API port</td>
              <td className={styles.td}>
                <code className={styles.code}>3011</code> on <code className={styles.code}>127.0.0.1</code>
              </td>
            </tr>
            <tr>
              <td className={styles.td}>API base env (web)</td>
              <td className={styles.td}>
                <code className={styles.code}>NEXT_PUBLIC_API_URL</code>
              </td>
            </tr>
            <tr>
              <td className={styles.td}>Health endpoint</td>
              <td className={styles.td}>
                <code className={styles.code}>GET /api/health</code>
              </td>
            </tr>
            <tr>
              <td className={styles.td}>Success JSON</td>
              <td className={styles.td}>
                <code className={styles.code}>{'{ success: true, data? }'}</code>
              </td>
            </tr>
            <tr>
              <td className={styles.td}>Database</td>
              <td className={styles.td}>Postgres via Express <code className={styles.code}>DATABASE_URL</code></td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Clone</h2>
        <pre className={styles.codeBlock}>{`git clone ${GITHUB_WEB_URL}.git
git clone ${GITHUB_API_URL}.git`}</pre>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Postgres</h2>
        <ol className={styles.ol}>
          <li className={styles.li}>
            Use the same local Postgres database as My Health (
            <code className={styles.code}>my_health</code>).
          </li>
          <li className={styles.li}>
            Set <code className={styles.code}>DATABASE_URL</code> in Express{' '}
            <code className={styles.code}>.env</code>.
          </li>
          <li className={styles.li}>
            <code className={styles.code}>{`psql "$DATABASE_URL" -f migrations/setup.sql`}</code>
          </li>
        </ol>
        <p className={styles.p}>
          The script is <code className={styles.code}>IF NOT EXISTS</code>, so it is safe to re-run
          on the existing My Health <code className={styles.code}>my_health</code> database.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Express</h2>
        <ol className={styles.ol}>
          <li className={styles.li}>
            <code className={styles.code}>cd speech-therapy-tracker-express-server</code>
          </li>
          <li className={styles.li}>
            <code className={styles.code}>cp .env.example .env</code>
          </li>
          <li className={styles.li}>
            <code className={styles.code}>npm install && npm run dev</code>
          </li>
          <li className={styles.li}>
            <code className={styles.code}>curl http://127.0.0.1:3011/api/health</code>
          </li>
        </ol>
        <p className={styles.p}>
          Photo import needs <code className={styles.code}>ANTHROPIC_API_KEY</code>. Everything else
          works without it.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Web</h2>
        <ol className={styles.ol}>
          <li className={styles.li}>
            <code className={styles.code}>cd speech-therapy-tracker-web</code>
          </li>
          <li className={styles.li}>
            Copy <code className={styles.code}>.env.example</code> to{' '}
            <code className={styles.code}>.env.local</code> with{' '}
            <code className={styles.code}>NEXT_PUBLIC_API_URL=http://127.0.0.1:3011</code>
          </li>
          <li className={styles.li}>
            <code className={styles.code}>npm install && npm run dev</code>
          </li>
          <li className={styles.li}>
            Open <code className={styles.code}>http://127.0.0.1:3010</code> (landing), then{' '}
            <code className={styles.code}>/dashboard</code>
          </li>
        </ol>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Screens</h2>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <code className={styles.code}>/</code> — landing
          </li>
          <li className={styles.li}>
            <code className={styles.code}>/dashboard</code> — dashboard
          </li>
          <li className={styles.li}>
            <code className={styles.code}>/tube-feed</code> — formulas and pump snapshots
          </li>
          <li className={styles.li}>
            <code className={styles.code}>/speech-therapy</code> — homework catalog
          </li>
          <li className={styles.li}>
            <code className={styles.code}>/speech-therapy-consumption</code> — ice-cube counts
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Next</h2>
        <p className={styles.p}>
          <Link href={DOCS_API_PATH} className={styles.link}>
            API reference
          </Link>
          {' · '}
          <Link href={DOCS_OPEN_SOURCE_PATH} className={styles.link}>
            Open source
          </Link>
        </p>
      </section>
    </article>
  );
}
