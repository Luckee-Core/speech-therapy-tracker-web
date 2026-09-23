import {
  DASHBOARD_PATH,
  SPEECH_THERAPY_CONSUMPTION_PATH,
  SPEECH_THERAPY_PATH,
  TUBE_FEED_PATH,
} from '@/config/routes';

export type SidebarLink = {
  name: string;
  href: string;
};

export type SidebarSection = {
  title: string;
  links: SidebarLink[];
};

export const getSidebarSections = (): SidebarSection[] => [
  {
    title: 'Overview',
    links: [{ name: 'Dashboard', href: DASHBOARD_PATH }],
  },
  {
    title: 'Nutrition',
    links: [{ name: 'Tube feed', href: TUBE_FEED_PATH }],
  },
  {
    title: 'Therapy',
    links: [
      { name: 'Speech therapy', href: SPEECH_THERAPY_PATH },
      { name: 'Ice cubes', href: SPEECH_THERAPY_CONSUMPTION_PATH },
    ],
  },
];
