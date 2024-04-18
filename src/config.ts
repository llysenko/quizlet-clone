import { Pathnames } from 'next-intl/navigation';

export const locales = ['en', 'ua'] as const;
export const pathnames = {
  '/': '/',
  '/pathnames': {
    en: '/pathnames',
    ua: '/pfadnamen'
  }
} satisfies Pathnames<typeof locales>;

export type AppPathnames = keyof typeof pathnames;
