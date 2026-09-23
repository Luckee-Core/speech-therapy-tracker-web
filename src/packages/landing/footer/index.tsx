import { LandingBrandMark } from '../brand-mark';
import { DOCS_URL, GITHUB_WEB_URL, LANDING_FOOTER_TAGLINE, THT_URL } from '../content/landing-content';

/**
 * Landing page footer with brand, links, and attribution.
 */
export const LandingFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <div className={styles.brandRow}>
            <LandingBrandMark />
            <span className={styles.license}>MIT</span>
          </div>
          <p className={styles.tagline}>{LANDING_FOOTER_TAGLINE}</p>
        </div>
        <div className={styles.linksCol}>
          <div className={styles.links}>
            <a href="#features" className={styles.link}>
              Features
            </a>
            <a href="#open-source" className={styles.link}>
              Open source
            </a>
            <a href={DOCS_URL} className={styles.link}>
              Docs
            </a>
            <a
              href={GITHUB_WEB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              GitHub
            </a>
          </div>
          <p className={styles.copyright}>
            MIT · Built by{' '}
            <a href={THT_URL} target="_blank" rel="noopener noreferrer" className={styles.link}>
              TroutHouseTech
            </a>{' '}
            · © 2026
          </p>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: `border-t border-border`,
  inner: `
    mx-auto max-w-7xl px-5 py-12 grid gap-8
    sm:px-8
    md:grid-cols-2
  `,
  tagline: `mt-3 max-w-sm text-sm text-muted-foreground`,
  brandRow: `
    flex items-center gap-3
  `,
  license: `
    rounded-full border border-border px-2 py-0.5 text-[11px] font-semibold uppercase
    tracking-[0.14em] text-muted-foreground
  `,
  linksCol: `
    md:text-right
  `,
  links: `
    flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground
    md:justify-end
  `,
  link: `hover:text-foreground`,
  copyright: `mt-6 text-xs text-muted-foreground`,
} as const;
