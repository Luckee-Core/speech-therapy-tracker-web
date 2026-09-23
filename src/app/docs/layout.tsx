import type { ReactNode } from 'react';
import { DocsShell } from '@/packages/docs';

export default function DocsLayout({ children }: { children: ReactNode }) {
  return <DocsShell>{children}</DocsShell>;
}
