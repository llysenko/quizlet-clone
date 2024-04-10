import { Route } from 'next';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';

const items = [
  {
    label: 'home',
    path: '/'
  },
  {
    label: 'about',
    path: '/about'
  },
  {
    label: 'pathnames',
    path: '/pathnames'
  }
];

export default function Navigation() {
  const t = useTranslations('Navigation');
  const menuList = items.map(item => (
    <li key={item.label}>
      <Link href={`${item.path}` as Route}>{t(item.label)}</Link>
    </li>
  ));

  return (
    <nav aria-labelledby="primary-navigation">
      <ul className="grid grid-flow-col gap-2">
        <li>
          <Link href="/" className="h-full w-full border font-bold text-purple-400">
            MEMO
          </Link>
        </li>
        {menuList}
      </ul>
    </nav>
  );
}
