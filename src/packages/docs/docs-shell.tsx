import type { ReactNode } from 'react';
import { DocsSidebar } from './sidebar';

type DocsShellProps = {
  children: ReactNode;
};

/**
 * Docs layout shell: sticky sidebar + scrollable main content.
 */
export const DocsShell = (props: DocsShellProps) => {
  const { children } = props;

  return (
    <div className={styles.root}>
      <DocsSidebar />
      <div className={styles.main}>{children}</div>
    </div>
  );
};

const styles = {
  root: `
    min-h-screen bg-background text-foreground flex flex-col
    lg:flex-row
  `,
  main: `
    min-w-0 flex-1 px-6 py-10
    lg:px-12
    lg:py-12
  `,
};
