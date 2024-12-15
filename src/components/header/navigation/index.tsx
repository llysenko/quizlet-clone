'use client';

import React, { useContext, useState } from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';

import IconButton from '@/components/icon-button';
import { UserContext } from '@/components/page-layout';

import { User } from '@/features/auth/lib/types';

import styles from './styles.module.scss';

const studyTools = {
  label: 'study-tools',
  menuItemsForStudents: [
    {
      label: 'Flashcards',
      key: 'flashcards',
      href: '/features/flashcards',
      iconSrc: 'cards.png'
    },
    {
      label: 'Learn',
      key: 'learn',
      href: '/features/learn',
      iconSrc: 'learn.png'
    },
    {
      label: 'Study Guides',
      key: 'study-guides',
      href: '/study-guides/upload',
      iconSrc: 'study-guides.png'
    },
    {
      label: 'Test',
      key: 'test',
      href: '/features/test',
      iconSrc: 'test.png'
    },
    {
      label: 'Expert Solutions',
      key: 'expert-solutions',
      href: '/explanations',
      iconSrc: 'expert-solutions.png'
    }
  ],
  menuItemsForTeachers: [
    {
      label: 'Live',
      key: 'live',
      href: '/features/live',
      iconSrc: 'live.png'
    },
    {
      label: 'Blast',
      key: 'blast',
      href: '/features/blast',
      iconSrc: 'blast.png'
    },
    {
      label: 'Categories',
      key: 'categories',
      href: '/features/categories',
      iconSrc: 'categories.png'
    },
    {
      label: 'Checkpoint',
      key: 'checkpoint',
      href: '/features/checkpoint',
      iconSrc: 'checkpoint.png'
    }
  ]
};

const subjects = {
  label: 'subjects',
  menuItems: [
    {
      label: 'Exams',
      key: 'exams',
      href: '/'
    },
    {
      label: 'Literature',
      key: 'literature',
      href: '/'
    }
  ]
};

export default function Navigation() {
  const user: User | null = useContext(UserContext);
  const t = useTranslations('Navigation');
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const menuList = (
    <>
      <li className={styles.nav__item}>
        <Dropdown placement="bottom">
          <DropdownTrigger
            className={clsx(
              styles.nav__item,
              styles.nav__link,
              styles.nav__link_active_vertical,
              'cursor-pointer outline-0'
            )}>
            {t(studyTools.label)}
          </DropdownTrigger>
          <DropdownMenu aria-label="Study tools" variant="flat">
            <DropdownSection title="Students" showDivider>
              {studyTools.menuItemsForStudents.map(item => (
                <DropdownItem
                  key={item.key}
                  textValue={item.label}
                  className="text-dark-electric-blue"
                  onPress={() => handleMenuItemClick(item.href)}>
                  <div className="flex items-center gap-3">
                    <Image
                      src={`/images/${item.iconSrc}`}
                      alt={item.label}
                      width={24}
                      height={24}
                      className="h-auto w-5"
                    />
                    <p>{item.label}</p>
                  </div>
                </DropdownItem>
              ))}
            </DropdownSection>
            <DropdownSection title="Teachers">
              {studyTools.menuItemsForTeachers.map(item => (
                <DropdownItem
                  key={item.key}
                  textValue={item.label}
                  className="text-dark-electric-blue"
                  onPress={() => handleMenuItemClick(item.href)}>
                  <div className="flex items-center gap-3">
                    <Image
                      src={`/images/${item.iconSrc}`}
                      alt={item.label}
                      width={24}
                      height={24}
                      className="h-auto w-5"
                    />
                    <p>{item.label}</p>
                  </div>
                </DropdownItem>
              ))}
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
      </li>
      <li className={styles.nav__item}>
        <Dropdown placement="bottom">
          <DropdownTrigger>
            <button className={clsx(styles.nav__item, styles.nav__link, styles.nav__link_active_vertical, 'outline-0')}>
              {t(subjects.label)}
            </button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Subjects" variant="flat">
            {subjects.menuItems.map(item => (
              <DropdownItem
                key={item.key}
                textValue={item.label}
                className="text-dark-electric-blue"
                onPress={() => handleMenuItemClick(item.href)}>
                <div className="flex items-center gap-3">
                  <p>{item.label}</p>
                </div>
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </li>
    </>
  );

  function handleMenuItemClick(href: string) {
    router.push(href);
  }

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
              borderless={true}
              className="lg:invisible"
              iconSrc="/images/menu.svg"
              size="medium"
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
              iconSrc="/images/plus.svg"
              size="medium"
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
