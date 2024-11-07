'use client';

import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import React, { useContext, useState } from 'react';

import { Link } from '@/navigation';

import IconButton from '@/components/icon-button';
import { UserContext } from '@/components/page-layout';

import { User } from '@/features/auth/lib/types';

import styles from './styles.module.scss';

const items = [
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
  const user: User | null = useContext(UserContext);
  const t = useTranslations('Navigation');
  const currentPath = usePathname();
  const [open, setOpen] = useState(false);
  const menuList = items.map(item => (
    <li
      key={item.label}
      className={clsx(styles.nav__item, item.label === 'home' && !open && styles.nav__item_xl_hidden)}>
      <Link
        href={item.path}
        className={clsx(
          styles.nav__item,
          styles.nav__link,
          currentPath === item.path && open && styles.nav__link_active && styles.nav__link_active_horizontal,
          currentPath === item.path && !open && styles.nav__link_active,
          styles.nav__link_active_vertical
        )}>
        <span>{t(item.label)}</span>
      </Link>
    </li>
  ));

  function toggleMenu() {
    setOpen(!open);
  }

  return (
    <div className={styles.nav}>
      <div aria-labelledby="primary-navigation" className="flex h-full items-center">
        {!user && (
          <>
            <ul className={clsx(styles.nav__list, !open && 'hidden')}>{menuList}</ul>
            <IconButton
              className="lg:invisible"
              size="medium"
              borderless={true}
              iconSrc="/static/images/menu.svg"
              title="Menu"
              onClick={toggleMenu}
            />
          </>
        )}
      </div>
      {open && (
        <div className={styles.nav_mobile}>
          <div className="m-4 flex justify-end">
            <IconButton
              className={clsx(styles.nav__menu__button, 'rotate-45')}
              size="medium"
              iconSrc="/static/images/plus.svg"
              title="Close menu"
              onClick={toggleMenu}
            />
          </div>
          <ul className={styles.nav__list}>{menuList}</ul>
        </div>
      )}
    </div>
  );
}
