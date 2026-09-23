'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { DASHBOARD_PATH, LANDING_PATH } from '@/config/routes';
import { DOCS_BRAND_NAME } from '@/packages/docs/content';
import {
  DOCS_API_NAV,
  DOCS_SIDEBAR_GUIDES,
  type DocsSidebarLeaf,
} from '@/packages/docs/navigation';

const getHrefHash = (href: string): string => {
  const hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.slice(hashIndex);
};

/**
 * Persistent docs navigation sidebar with active route highlighting.
 */
export const DocsSidebar = () => {
  const pathname = usePathname();
  const [hash, setHash] = useState('');

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash);
    syncHash();
    window.addEventListener('hashchange', syncHash);
    return () => window.removeEventListener('hashchange', syncHash);
  }, [pathname]);

  const guideItems = useMemo(
    () =>
      DOCS_SIDEBAR_GUIDES.map((entry) => {
        const active = pathname === entry.href;
        return (
          <li key={entry.href}>
            <Link
              href={entry.href}
              prefetch={false}
              className={active ? styles.linkActive : styles.link}
            >
              {entry.name}
            </Link>
          </li>
        );
      }),
    [pathname],
  );

  const apiItems = useMemo(
    () =>
      DOCS_API_NAV.map((entity: DocsSidebarLeaf) => {
        const entityHash = getHrefHash(entity.href);
        const entityPath = entity.href.split('#')[0];
        const active = pathname === entityPath && hash === entityHash;
        return (
          <li key={entity.href}>
            <a href={entity.href} className={active ? styles.linkActive : styles.link}>
              {entity.name}
            </a>
          </li>
        );
      }),
    [pathname, hash],
  );

  return (
    <aside className={styles.sidebar}>
      <div className={styles.inner}>
        <Link href={LANDING_PATH} prefetch={false} className={styles.brand}>
          <span className={styles.logoMark}>S</span>
          <span className={styles.brandTextBlock}>
            <span className={styles.brandTitle}>{DOCS_BRAND_NAME}</span>
            <span className={styles.brandSub}>Documentation</span>
          </span>
        </Link>
        <nav className={styles.nav} aria-label="Guides">
          <p className={styles.sectionLabel}>Guides</p>
          <ul className={styles.list}>{guideItems}</ul>
        </nav>
        <nav className={styles.nav} aria-label="API">
          <p className={styles.sectionLabel}>API</p>
          <ul className={styles.list}>{apiItems}</ul>
        </nav>
        <Link href={DASHBOARD_PATH} prefetch={false} className={styles.back}>
          ← Back to dashboard
        </Link>
      </div>
    </aside>
  );
};

const styles = {
  sidebar: `
    w-full shrink-0 border-b border-border bg-muted/40
    lg:w-56
    lg:border-b-0
    lg:border-r
  `,
  inner: `
    flex flex-col gap-6 p-4
    lg:sticky
    lg:top-0
    lg:h-screen
    lg:max-h-screen
    lg:overflow-y-auto
  `,
  brand: `flex items-center gap-2`,
  logoMark: `
    flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary text-sm font-bold text-primary-foreground
  `,
  brandTextBlock: `flex min-w-0 flex-col leading-tight`,
  brandTitle: `text-sm font-semibold text-foreground tracking-tight truncate`,
  brandSub: `text-xs text-muted-foreground truncate`,
  nav: `flex flex-col gap-2`,
  sectionLabel: `text-[11px] font-mono uppercase tracking-[0.12em] text-muted-foreground`,
  list: `flex flex-col gap-0.5`,
  link: `
    rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors
    hover:bg-muted hover:text-foreground
  `,
  linkActive: `
    rounded-md bg-muted px-2 py-1.5 text-sm font-medium text-foreground
  `,
  back: `text-xs text-muted-foreground hover:text-foreground transition-colors mt-auto`,
};
