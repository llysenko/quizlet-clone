import Image from 'next/image';
import Link from 'next/link';

import LocaleSwitcher from '@/components/locale-switcher';
import styles from './styles.module.scss';
import clsx from 'clsx';

export default function Footer() {
  const links = [
    {
      title: 'About us',
      items: [
        {
          name: 'About Quizlet',
          link: ''
        },
        {
          name: 'How Quizlet works',
          link: ''
        },
        {
          name: 'Careers',
          link: ''
        },
        {
          name: 'Advertise with us',
          link: ''
        },
        {
          name: 'Get the app',
          link: ''
        }
      ]
    },
    {
      title: 'For students',
      items: [
        {
          name: 'Flashcards',
          link: ''
        },
        {
          name: 'Test',
          link: ''
        },
        {
          name: 'Learn',
          link: ''
        },
        {
          name: 'Solutions',
          link: ''
        },
        {
          name: 'Q-Chat: your AI tutor',
          link: ''
        },
        {
          name: 'Modern Learning Lab',
          link: ''
        },
        {
          name: 'Quizlet Plus',
          link: ''
        },
        {
          name: 'Study Guides',
          link: ''
        }
      ]
    },
    {
      title: 'For teachers',
      items: [
        {
          name: 'Live',
          link: ''
        },
        {
          name: 'Checkpoint',
          link: ''
        },
        {
          name: 'Blog',
          link: ''
        },
        {
          name: 'Be the Change',
          link: ''
        },
        {
          name: 'Quizlet Plus for teachers',
          link: ''
        }
      ]
    },
    {
      title: 'Resources',
      items: [
        {
          name: 'Help center',
          link: ''
        },
        {
          name: 'Sign up',
          link: ''
        },
        {
          name: 'Honor code',
          link: ''
        },
        {
          name: 'Community guidelines',
          link: ''
        },
        {
          name: 'Privacy',
          link: ''
        },
        {
          name: 'Terms',
          link: ''
        },
        {
          name: 'Ads and Cookie Settings',
          link: ''
        },
        {
          name: 'Quizlet for Schools',
          link: ''
        },
        {
          name: 'Parents',
          link: ''
        }
      ]
    }
  ];
  const countries = [
    {
      name: 'United States',
      link: ''
    },
    {
      name: 'Canada',
      link: ''
    },
    {
      name: 'United Kingdom',
      link: ''
    },
    {
      name: 'Australia',
      link: ''
    },
    {
      name: 'New Zealand',
      link: ''
    },
    {
      name: 'Germany',
      link: ''
    },
    {
      name: 'France',
      link: ''
    },
    {
      name: 'Spain',
      link: ''
    },
    {
      name: 'Italy',
      link: ''
    },
    {
      name: 'Japan',
      link: ''
    },
    {
      name: 'South Korea',
      link: ''
    },
    {
      name: 'India',
      link: ''
    },
    {
      name: 'China',
      link: ''
    },
    {
      name: 'Mexico',
      link: ''
    },
    {
      name: 'Sweden',
      link: ''
    },
    {
      name: 'Netherlands',
      link: ''
    },
    {
      name: 'Switzerland',
      link: ''
    },
    {
      name: 'Brazil',
      link: ''
    },
    {
      name: 'Poland',
      link: ''
    },
    {
      name: 'Turkey',
      link: ''
    },
    {
      name: 'Ukraine',
      link: ''
    },
    {
      name: 'Taiwan',
      link: ''
    },
    {
      name: 'Vietnam',
      link: ''
    },
    {
      name: 'Indonesia',
      link: ''
    },
    {
      name: 'Philippines',
      link: ''
    }
  ];

  const socialLinks = [
    {
      name: 'TikTok',
      imageSrc: '/static/images/icon__tiktok.svg',
      url: ''
    },
    {
      name: 'Twitter',
      imageSrc: '/static/images/icon__twitter.svg',
      url: ''
    },
    {
      name: 'Facebook',
      imageSrc: '/static/images/icon__facebook.svg',
      url: ''
    },
    {
      name: 'Instagram',
      imageSrc: '/static/images/icon__instagram.svg',
      url: ''
    },
    {
      name: 'YouTube',
      imageSrc: '/static/images/icon__youtube.svg',
      url: ''
    }
  ];

  return (
    <footer>
      <nav aria-labelledby="footer-navigation" className="m-auto max-w-[76.25rem] px-8 py-16">
        <div className="flex flex-wrap">
          {links.map(item => (
            <div key={item.title} className="shrink grow">
              <h5 className="mb-6 font-bold">{item.title}</h5>
              <ul className={clsx(styles.navigation, 'flex', 'flex-col')}>
                {item.items.map(link => (
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
                ))}
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

      <div className="m-auto max-w-[76.25rem]">
        <div className="mb-2.5 mt-[2rem] flex flex-col gap-6">
          <h5 className="font-bold">Country</h5>
          <ul className="flex flex-wrap gap-[1.5rem]">
            {countries.map(country => (
              <li key={country.name}>
                <Link href="#" className="mb-4 text-sm text-text-color-h hover:text-blue-2">
                  {country.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pb-6 pt-8">
        <div className="m-auto max-w-[76.25rem]">
          <div className="flex flex-wrap items-center justify-between">
            <div>
              <ul className="flex gap-4">
                {socialLinks.map(link => (
                  <li key={link.url} className="flex items-center justify-center">
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
      </div>
    </footer>
  );
}
