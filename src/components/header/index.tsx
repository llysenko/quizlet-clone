import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Button from '@/components/button';
import IconButton from '@/components/icon-button';
import Navigation from '@/components/navigation';
import Search from '@/components/search';
import './styles.scss';

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="nav nav--left">
          <Link href="/" className="logo">
            <Image src="/static/images/logo.svg" width={95} height={22} alt="Quizlet" title="Quizlet" />
          </Link>
          <Navigation />
        </div>

        <div className="nav nav--center">
          <Search />
        </div>

        <ul className="nav nav--right">
          <li>
            <Button label="Generate" size="medium" iconSrc="/static/images/sparkles.png" />
          </li>
          <li>
            <IconButton size="medium" iconSrc="/static/images/plus.svg" title="Create" />
          </li>
          <li>
            <Button label="Log in" size="medium" borderless={true} />
          </li>
          <li>
            <Button label="Sign up" size="medium" mode="accent" />
          </li>
        </ul>
      </div>
    </header>
  );
}
