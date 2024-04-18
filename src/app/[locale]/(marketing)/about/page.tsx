'use client';

import { useTranslations } from 'next-intl';

type Props = {
  params: { locale: string };
};
export default function About({ params: { locale } }: Props) {
  // Enable static rendering
  // unstable_setRequestLocale(locale);

  const t = useTranslations('AboutPage');

  return <h1 className="p-4 text-center text-3xl font-bold">{t('title')}</h1>;
}
