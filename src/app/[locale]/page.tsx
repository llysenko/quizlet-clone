'use client';

import { useTranslations } from 'next-intl';
// import { unstable_setRequestLocale } from 'next-intl/server';

import PageLayout from '@/components/page-layout';

type Props = {
  params: { locale: string };
};

export default function IndexPage({ params: { locale } }: Props) {
  // Enable static rendering
  // unstable_setRequestLocale(locale);

  const t = useTranslations('IndexPage');

  return (
    <PageLayout>
      <p>
        {t.rich('description', {
          code: chunks => <code className="font-mono text-white">{chunks}</code>
        })}
      </p>
    </PageLayout>
  );
}
