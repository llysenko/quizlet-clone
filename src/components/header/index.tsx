import Link from 'next/link';
import React from 'react';
import clsx from 'clsx';

import styles from './styles.module.scss';
import Button from '@/components/button';
import Navigation from '@/components/navigation';
import Search from '@/components/search';

export default function Header() {
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
            <Button label="Log in" size="medium" />
          </li>
        </ul>
      </div>
    </header>
  );
}
