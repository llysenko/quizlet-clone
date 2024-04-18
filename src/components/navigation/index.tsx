'use client';

import React from 'react';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { Link } from '@/navigation';

import './styles.scss';

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
  const currentPath = usePathname();
  const menuList = items.map(item => (
    <li key={item.label} className="nav-list--item">
      <Link
        href={item.path}
        className={clsx('nav-list--item', 'nav-list--item--link', currentPath === item.path ? 'active-tab' : '')}>
        <span>{t(item.label)}</span>
      </Link>
    </li>
  ));

  return (
    <nav aria-labelledby="primary-navigation" className="h-full">
      <ul className="nav-list">{menuList}</ul>
    </nav>
  );
}
