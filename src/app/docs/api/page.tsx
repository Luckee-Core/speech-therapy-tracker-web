import type { Metadata } from 'next';
import { docsArticleStyles as styles } from '@/packages/docs';

export const metadata: Metadata = {
  title: 'API reference — Speech Therapy Tracker',
  description: 'Static HTTP reference for Speech Therapy Tracker Express routes. No live catalog.',
};

export default function ApiDocsPage() {
  return (
    <article className={styles.articleWide}>
      <h1 className={styles.h1}>API reference</h1>
      <p className={styles.lead}>
        Static contract for health and <code className={styles.code}>/api/data</code> routes. There
        is no <code className={styles.code}>GET /api-docs.json</code>. Base URL:{' '}
        <code className={styles.code}>http://127.0.0.1:3011</code>. Envelopes:{' '}
        <code className={styles.code}>{'{ success: true, data }'}</code> /{' '}
        <code className={styles.code}>{'{ success: false, error }'}</code>.
      </p>

      <section className={styles.section} id="health">
        <h2 className={styles.h2}>GET /api/health</h2>
        <p className={styles.p}>Liveness. No database I/O.</p>
        <pre className={styles.codeBlock}>{`{
  "success": true,
  "data": {
    "status": "ok",
    "message": "Speech Therapy Tracker Express Server is running",
    "timestamp": "...",
    "environment": "development"
  }
}`}</pre>
      </section>

      <section className={styles.section} id="exercises">
        <h2 className={styles.h2}>GET/POST /api/data/therapy-exercises</h2>
        <p className={styles.p}>
          Homework catalog. <code className={styles.code}>PATCH</code> and{' '}
          <code className={styles.code}>DELETE</code> use <code className={styles.code}>/:id</code>.
        </p>
      </section>

      <section className={styles.section} id="logs">
        <h2 className={styles.h2}>GET /api/data/therapy-exercise-logs</h2>
        <p className={styles.p}>Daily logs. Mutations:</p>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <code className={styles.code}>POST /api/data/therapy-exercise-logs/increment</code>
          </li>
          <li className={styles.li}>
            <code className={styles.code}>POST /api/data/therapy-exercise-logs/skip</code>
          </li>
          <li className={styles.li}>
            <code className={styles.code}>POST /api/data/therapy-exercise-logs/due</code>
          </li>
        </ul>
      </section>

      <section className={styles.section} id="ice-cubes">
        <h2 className={styles.h2}>GET /api/data/speech-therapy-consumption</h2>
        <p className={styles.p}>
          Ice-cube rows. <code className={styles.code}>POST .../increment</code> applies a quantity
          delta (floored at 0).
        </p>
      </section>

      <section className={styles.section} id="imports">
        <h2 className={styles.h2}>POST /api/data/therapy-exercise-imports/preview</h2>
        <p className={styles.p}>
          Multipart homework photo. Requires <code className={styles.code}>ANTHROPIC_API_KEY</code>.
          Commit with <code className={styles.code}>POST .../commit</code>. List exchanges at{' '}
          <code className={styles.code}>GET /api/data/therapy-exercise-import-ai-exchanges</code>.
        </p>
      </section>

      <section className={styles.section} id="formulas">
        <h2 className={styles.h2}>GET/POST /api/data/feed-formulas</h2>
        <p className={styles.p}>
          Formula catalog. <code className={styles.code}>PATCH</code> and{' '}
          <code className={styles.code}>DELETE</code> use <code className={styles.code}>/:id</code>.
        </p>
      </section>

      <section className={styles.section} id="feed-logs">
        <h2 className={styles.h2}>GET /api/data/feed-logs</h2>
        <p className={styles.p}>
          Pump snapshots. <code className={styles.code}>PUT /api/data/feed-logs</code> upserts the
          row for <code className={styles.code}>log_date</code>.{' '}
          <code className={styles.code}>DELETE /api/data/feed-logs/:id</code> removes a snapshot.
        </p>
      </section>
    </article>
  );
}
