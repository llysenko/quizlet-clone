import { ReactNode } from 'react';

import Container from '@/components/container';

export default function SetInfo({ children }: { children: ReactNode }) {
  return <Container className="flex flex-col gap-4">{children}</Container>;
}
