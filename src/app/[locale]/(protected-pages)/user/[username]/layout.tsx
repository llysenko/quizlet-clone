import { ReactNode } from 'react';

import AppTabs from '@/components/app-tabs';
import Container from '@/components/container';
import Heading2 from '@/components/headings/heading-2';

type Tab = {
  href: string;
  title: string;
};
const tabs: Tab[] = [
  {
    href: '/sets',
    title: 'Flashcard sets'
  },
  {
    href: '/folders',
    title: 'Folders'
  }
];

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-ghost-white">
      <Container>
        <Heading2 className="mt-10 pb-14">Your Library</Heading2>
        <AppTabs tabs={tabs} className="mb-6" />
        {children}
      </Container>
    </div>
  );
}
