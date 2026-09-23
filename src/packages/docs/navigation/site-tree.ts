import {
  DOCS_API_PATH,
  DOCS_GETTING_STARTED_PATH,
  DOCS_OPEN_SOURCE_PATH,
  DOCS_PATH,
  DOCS_SECURITY_PATH,
} from '@/config/routes';

export type DocsSidebarLeaf = {
  name: string;
  href: string;
};

export type DocsSidebarLink = {
  kind: 'link';
  name: string;
  href: string;
};

export type DocsSidebarEntry = DocsSidebarLink;

/**
 * Static prose docs links (Guides column).
 */
export const DOCS_SIDEBAR_GUIDES: DocsSidebarEntry[] = [
  { kind: 'link', name: 'Overview', href: DOCS_PATH },
  { kind: 'link', name: 'Getting started', href: DOCS_GETTING_STARTED_PATH },
  { kind: 'link', name: 'Open source', href: DOCS_OPEN_SOURCE_PATH },
  { kind: 'link', name: 'Security', href: DOCS_SECURITY_PATH },
  { kind: 'link', name: 'API reference', href: DOCS_API_PATH },
];

/**
 * Static API anchors (no live /api-docs.json).
 */
export const DOCS_API_NAV: DocsSidebarLeaf[] = [
  { name: 'Health', href: `${DOCS_API_PATH}#health` },
  { name: 'Exercises', href: `${DOCS_API_PATH}#exercises` },
  { name: 'Logs', href: `${DOCS_API_PATH}#logs` },
  { name: 'Ice cubes', href: `${DOCS_API_PATH}#ice-cubes` },
  { name: 'Imports', href: `${DOCS_API_PATH}#imports` },
  { name: 'Formulas', href: `${DOCS_API_PATH}#formulas` },
  { name: 'Feed logs', href: `${DOCS_API_PATH}#feed-logs` },
];
