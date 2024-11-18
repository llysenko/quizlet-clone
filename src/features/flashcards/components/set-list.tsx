import { ReactNode } from 'react';

import Container from '@/components/container';

export default function SetList({ className, children }: { className?: string; children: ReactNode }) {
  return <Container className={className}>{children}</Container>;
}
