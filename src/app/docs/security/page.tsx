import type { Metadata } from 'next';
import Link from 'next/link';
import { DOCS_GETTING_STARTED_PATH } from '@/config/routes';
import { GITHUB_API_URL } from '@/packages/docs/content';
import { docsArticleStyles as styles } from '@/packages/docs';

export const metadata: Metadata = {
  title: 'Security — Speech Therapy Tracker',
  description:
    'Threat model for local-only speech and tube-feed tracking: loopback bind, Postgres health data, server-only Anthropic key.',
};

export default function SecurityPage() {
  return (
    <article className={styles.article}>
      <h1 className={styles.h1}>Security</h1>
      <p className={styles.lead}>
        OSS default is a <strong>trusted operator on their own machine</strong>. Express listens on
        loopback only. Tube-feed, exercise, and ice-cube rows stay in local Postgres. See{' '}
        <Link href={DOCS_GETTING_STARTED_PATH} className={styles.link}>
          Getting started
        </Link>{' '}
        before changing bind addresses.
      </p>

      <section className={styles.section}>
        <h2 className={styles.h2}>Threat model</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>Boundary</th>
              <th className={styles.th}>Assumption</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.td}>Operator</td>
              <td className={styles.td}>Trusted user on this machine</td>
            </tr>
            <tr>
              <td className={styles.td}>Network</td>
              <td className={styles.td}>
                API bound to <code className={styles.code}>127.0.0.1:3011</code>
              </td>
            </tr>
            <tr>
              <td className={styles.td}>Postgres</td>
              <td className={styles.td}>Local DATABASE_URL; treat rows as private health data</td>
            </tr>
            <tr>
              <td className={styles.td}>Auth</td>
              <td className={styles.td}>None on localhost for OSS v1</td>
            </tr>
            <tr>
              <td className={styles.td}>Secrets</td>
              <td className={styles.td}>
                Only NEXT_PUBLIC_* in the browser. ANTHROPIC_API_KEY stays on Express
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Anthropic</h2>
        <p className={styles.p}>
          Homework photo import on{' '}
          <a href={GITHUB_API_URL} className={styles.link} target="_blank" rel="noopener noreferrer">
            speech-therapy-tracker-express-server
          </a>{' '}
          sends images to Anthropic when <code className={styles.code}>ANTHROPIC_API_KEY</code> is
          set. Leave it empty if you only need manual exercise CRUD.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Do not</h2>
        <ul className={styles.ul}>
          <li className={styles.li}>Port-forward 3011 or bind Express to 0.0.0.0 without adding auth</li>
          <li className={styles.li}>Put DATABASE_URL or ANTHROPIC_API_KEY in NEXT_PUBLIC_* variables</li>
          <li className={styles.li}>Treat this as a hosted EHR without adding authentication</li>
        </ul>
      </section>
    </article>
  );
}
