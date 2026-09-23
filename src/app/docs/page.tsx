import type { Metadata } from 'next';
import Link from 'next/link';
import {
  DOCS_API_PATH,
  DOCS_GETTING_STARTED_PATH,
  DOCS_OPEN_SOURCE_PATH,
  DOCS_SECURITY_PATH,
} from '@/config/routes';
import { docsArticleStyles as styles } from '@/packages/docs';

export const metadata: Metadata = {
  title: 'Docs — Speech Therapy Tracker',
  description:
    'Speech Therapy Tracker documentation: local Postgres, Express on 127.0.0.1:3011, and the web dashboard.',
};

export default function DocsOverviewPage() {
  return (
    <article className={styles.article}>
      <h1 className={styles.h1}>Speech Therapy Tracker docs</h1>
      <p className={styles.lead}>
        A local-only pair: Next.js UI on <code className={styles.code}>127.0.0.1:3010</code> and an
        Express Postgres API on <code className={styles.code}>127.0.0.1:3011</code>. Track tube feed,
        speech exercises, and ice-cube counts on this machine.
      </p>

      <section className={styles.section}>
        <h2 className={styles.h2}>Guides</h2>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link href={DOCS_GETTING_STARTED_PATH} className={styles.link}>
              Getting started
            </Link>{' '}
            — clone both repos, Postgres, env, smoke test
          </li>
          <li className={styles.li}>
            <Link href={DOCS_OPEN_SOURCE_PATH} className={styles.link}>
              Open source
            </Link>{' '}
            — MIT pair table and repo layout
          </li>
          <li className={styles.li}>
            <Link href={DOCS_SECURITY_PATH} className={styles.link}>
              Security
            </Link>{' '}
            — localhost bind, health data, Anthropic key
          </li>
          <li className={styles.li}>
            <Link href={DOCS_API_PATH} className={styles.link}>
              API reference
            </Link>{' '}
            — static list of Express routes (no live catalog)
          </li>
        </ul>
      </section>
    </article>
  );
}
