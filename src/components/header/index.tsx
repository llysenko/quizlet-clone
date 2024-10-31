import clsx from 'clsx';
import Link from 'next/link';
import { useContext } from 'react';

import Button from '@/components/buttons';
import Navigation from '@/components/navigation';
import { UserContext } from '@/components/page-layout/page-layout';

import { UserData } from '@/features/auth/lib/definitions';

import styles from './styles.module.scss';

export default function Header({ toggleMenu, signOut }: { toggleMenu: any; signOut: any }) {
  const user: UserData | null = useContext(UserContext);

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={clsx(styles.nav, styles.nav_left)}>
          <Link href="/" className={styles.logo} title="Quizlet"></Link>
          <Navigation />
        </div>

        {/*<div className="nav nav_center">*/}
        {/*  <Search />*/}
        {/*</div>*/}

        <ul className={clsx(styles.nav, styles.nav_right)}>
          <li>
            <Button iconSrc="/static/images/plus.svg" label="Create" size="medium" borderless={true} />
          </li>
          <li>
            {user ? (
              <Button label="Log out" size="medium" onClick={signOut} />
            ) : (
              <Button label="Log in" size="medium" onClick={toggleMenu} />
            )}
          </li>
        </ul>
      </div>
    </header>
  );
}
