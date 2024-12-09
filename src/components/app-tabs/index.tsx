'use client';

import { Tab, Tabs } from '@nextui-org/react';
import { useParams } from 'next/navigation';

import { usePathname } from '@/navigation';

type Tab = {
  href: string;
  title: string;
};

export default function AppTabs({ tabs, className }: { tabs: Tab[]; className?: string }) {
  const pathname = usePathname();
  const params = useParams();

  return (
    <Tabs
      aria-label="Tabs"
      variant="underlined"
      selectedKey={pathname}
      className={className}
      classNames={{
        tabList: 'gap-6 w-full relative rounded-none p-0 border-b border-divider',
        cursor: 'w-full bg-ultramarine-blue',
        tab: 'max-w-fit px-0 h-10',
        tabContent: 'group-data-[selected=true]:text-gunmetal'
      }}>
      {tabs.map(tab => (
        <Tab
          key={`/user/${params.username}${tab.href}`}
          title={
            <div className="flex items-center space-x-2">
              <span className="text-sm font-semibold text-dark-electric-blue">{tab.title}</span>
            </div>
          }
          href={`/user/${params.username}${tab.href}`}
        />
      ))}
    </Tabs>
  );
}
