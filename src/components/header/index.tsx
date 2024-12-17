'use client';

import { useContext } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

import Button from '@/components/buttons';
import CreateDropdown from '@/components/header/create-dropdown';
import Navigation from '@/components/header/navigation';
import UserDropdown from '@/components/header/user-dropdown';
import { UserContext } from '@/components/page-layout';

import { User } from '@/features/auth/lib/types';

import styles from './styles.module.scss';

type HeaderProps = {
  toggleMenu?: () => void;
  signOut?: () => void;
};

export default function Header({ toggleMenu, signOut }: HeaderProps) {
  const user: User | null = useContext(UserContext);

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={clsx(styles.nav, styles.nav_left)}>
          <Link href={user ? '/latest' : '/'} className={styles.logo} title="Quizlet"></Link>
          <Navigation />
        </div>

        {/*<div className="nav nav_center">*/}
        {/*  <Search />*/}
        {/*</div>*/}

        <ul className={clsx(styles.nav, styles.nav_right)}>
          <li className="flex">
            <CreateDropdown user={user} />
          </li>
          {user && <Button label="Upgrade: free 7-day trial" mode="accent" />}
          <li>
            {user ? (
              <UserDropdown user={user} signOut={signOut} />
            ) : (
              <Button label="Log in" size="md" onClick={toggleMenu} />
            )}
          </li>
        </ul>
      </div>
    </header>
  );
}
