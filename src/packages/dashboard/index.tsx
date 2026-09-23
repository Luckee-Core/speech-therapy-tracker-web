'use client';

import { SpeechTherapyOverview } from './speech-therapy-overview';
import { TubeFeedOverview } from './tube-feed-overview';

export const DashboardPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Dashboard</h1>
          <p className={styles.subtitle}>
            Peg-tube consumption, speech exercises, and ice-cube counts.
          </p>
        </div>
      </div>
      <div className={styles.priorityStack}>
        <TubeFeedOverview />
        <SpeechTherapyOverview />
      </div>
    </div>
  );
};

const styles = {
  page: `space-y-6`,
  header: `flex items-center justify-between gap-4`,
  title: `text-2xl font-semibold text-gray-900`,
  subtitle: `text-sm text-gray-600 max-w-2xl`,
  priorityStack: `grid gap-4`,
} as const;
