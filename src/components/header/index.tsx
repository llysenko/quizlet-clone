import clsx from 'clsx';
import Link from 'next/link';

import Button from '@/components/buttons';
import Navigation from '@/components/navigation';

import styles from './styles.module.scss';

export default function Header({ toggleMenu }: { toggleMenu: any }) {
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
            <Button label="Log in" size="medium" onClick={toggleMenu} />
          </li>
        </ul>
      </div>
    </header>
  );
}
