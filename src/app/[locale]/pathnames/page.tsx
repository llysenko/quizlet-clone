import { unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

import PageLayout from '@/components/page-layout';

type Props = {
  params: { locale: string };
};

export default function PathnamesPage({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations('PathnamesPage');

  return (
    <PageLayout>
      <div className="max-w-[490px]">
        {t.rich('description', {
          p: chunks => <p className="mt-4">{chunks}</p>,
          code: chunks => <code className="font-mono text-white">{chunks}</code>
        })}
      </div>
    </PageLayout>
  );
}
