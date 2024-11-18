'use client';

import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('AboutPage');

  return <h1 className="p-4 text-center text-3xl font-bold">{t('title')}</h1>;
}
