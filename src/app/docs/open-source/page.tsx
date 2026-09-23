import type { Metadata } from 'next';
import Link from 'next/link';
import { DOCS_GETTING_STARTED_PATH } from '@/config/routes';
import { LANDING_REPOS } from '@/packages/landing/content';
import { docsArticleStyles as styles } from '@/packages/docs';

export const metadata: Metadata = {
  title: 'Open source — Speech Therapy Tracker',
  description: 'Speech Therapy Tracker MIT pair: Next.js dashboard and local Express Postgres API.',
};

export default function OpenSourcePage() {
  return (
    <article className={styles.article}>
      <h1 className={styles.h1}>Open source</h1>
      <p className={styles.lead}>
        Speech Therapy Tracker is MIT-licensed (TroutHouseTech, 2026). It ships as a{' '}
        <strong>web + Express pair</strong> with local Postgres.{' '}
        <Link href={DOCS_GETTING_STARTED_PATH} className={styles.link}>
          Getting started
        </Link>{' '}
        covers the first run.
      </p>

      <section className={styles.section}>
        <h2 className={styles.h2}>Repositories</h2>
        <ul className={styles.ul}>
          {LANDING_REPOS.map((repo) => (
            <li key={repo.name} className={styles.li}>
              <strong>{repo.name}</strong> ({repo.tag}) — {repo.body}{' '}
              <a href={repo.href} className={styles.link} target="_blank" rel="noopener noreferrer">
                GitHub →
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Web layout</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>Path</th>
              <th className={styles.th}>What lives here</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.td}>
                <code className={styles.code}>src/app</code>
              </td>
              <td className={styles.td}>Thin App Router pages</td>
            </tr>
            <tr>
              <td className={styles.td}>
                <code className={styles.code}>src/packages</code>
              </td>
              <td className={styles.td}>Feature UI (dashboard, tube feed, therapy, docs)</td>
            </tr>
            <tr>
              <td className={styles.td}>
                <code className={styles.code}>src/model</code>
              </td>
              <td className={styles.td}>Persisted entity types</td>
            </tr>
            <tr>
              <td className={styles.td}>
                <code className={styles.code}>src/store</code>
              </td>
              <td className={styles.td}>Redux dumps, builders, manual thunks</td>
            </tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
