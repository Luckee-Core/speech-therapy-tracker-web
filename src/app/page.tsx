import type { Metadata } from 'next';
import { MarketingLanding } from '@/packages/landing';

export const metadata: Metadata = {
  title: 'Speech Therapy Tracker — Local peg-tube, homework, and ice cubes',
  description:
    'Track leftover Compleat, speech homework, and ice-cube counts from one dashboard. Next.js + local Express + Postgres. Your machine only.',
  openGraph: {
    title: 'Speech Therapy Tracker — Local peg-tube, homework, and ice cubes',
    description:
      'Self-hostable peg-tube and speech homework dashboard — pump snapshots, exercises, and ice cubes. Nothing leaves this machine.',
    type: 'website',
  },
};

export default function Page() {
  return <MarketingLanding />;
}
