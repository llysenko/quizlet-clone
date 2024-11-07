import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import { useAuthDialogStore } from '@/store';

import { COUNTRIES, LINKS, SOCIAL_LINKS } from '@/components/footer/constants';
import LocaleSwitcher from '@/components/locale-switcher';

import styles from './styles.module.scss';

export default function Footer() {
  const { open, setOpen } = useAuthDialogStore();

  function toggleMenu() {
    setOpen(!open);

    document.body.classList.remove(open ? 'overflow-hidden' : 'overflow-auto');
    document.body.classList.add(open ? 'overflow-auto' : 'overflow-hidden');
  }

  return (
    <footer>
      <nav aria-labelledby="footer-navigation" className="m-auto max-w-[76.25rem] px-8 py-16">
        <div className="flex flex-wrap">
          {LINKS.map(item => (
            <div key={item.title} className="shrink grow">
              <h5 className="mb-6 font-bold">{item.title}</h5>
              <ul className={clsx(styles.navigation, 'flex', 'flex-col')}>
                {item.items.map(link =>
                  link.name === 'Sign up' ? (
                    <button
                      type="button"
                      key={link.name}
                      onClick={toggleMenu}
                      className={clsx(
                        styles.navigation,
                        styles.navigation__link,
                        'mb-4',
                        'flex',
                        'text-sm',
                        'text-text-color-h',
                        'hover:text-blue-2'
                      )}>
                      Sign up
                    </button>
                  ) : (
                    <Link
                      href="#"
                      key={link.name}
                      className={clsx(
                        styles.navigation,
                        styles.navigation__link,
                        'mb-4',
                        'flex',
                        'text-sm',
                        'text-text-color-h',
                        'hover:text-blue-2'
                      )}>
                      <span>{link.name}</span>
                      {link.name === 'Privacy' && (
                        <Image
                          src="/static/images/icon__shield.svg"
                          alt="Privacy"
                          width={16}
                          height={16}
                          className={clsx(styles.icon, 'ml-2')}
                        />
                      )}
                    </Link>
                  )
                )}
              </ul>
            </div>
          ))}
          <div className="flex flex-col">
            <h5 className="mb-[1.3rem] font-bold">Language</h5>
            <LocaleSwitcher />
          </div>
        </div>
      </nav>

      <div className="m-auto max-w-[76.25rem]">
        <div className="py-2">
          <div className="h-[.0625rem] bg-grey-2"></div>
        </div>
      </div>

      <div className="m-auto max-w-[76.25rem] px-8">
        <div className="mb-2.5 mt-[2rem] flex flex-col gap-6">
          <h5 className="font-bold">Country</h5>
          <ul className="flex flex-wrap gap-[1.5rem]">
            {COUNTRIES.map(country => (
              <li key={country.name}>
                <Link href="#" className="mb-4 text-sm text-text-color-h hover:text-blue-2">
                  {country.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pb-6 pt-8 m-auto px-8 max-w-[76.25rem]">
        <div className="flex flex-wrap items-center justify-between">
          <div>
            <ul className="flex gap-4">
              {SOCIAL_LINKS.map(link => (
                <li key={link.name} className="flex items-center justify-center">
                  <Link href="#" className="rounded-full p-2 hover:bg-grey-3">
                    <Image src={link.imageSrc} alt={link.name} width={16} height={16} />
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-2">© 2024 Quizlet, Inc.</p>
          </div>
          <div>
            <Link href="#">
              <Image
                src="/static/images/coppa-seal.0efe00c1.avif"
                alt="COPPA Safe Harbor Certification seal"
                width={140}
                height={70}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
