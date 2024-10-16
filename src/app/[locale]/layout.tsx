import clsx from 'clsx';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { Prompt } from 'next/font/google';
import { ReactNode } from 'react';

import PageLayout from '@/components/page-layout/page-layout';

const prompt = Prompt({
  subsets: ['latin'],
  weight: '400'
});

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default function LocaleLayout({ children, params: { locale } }: Props) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body className={clsx(prompt.className)}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <PageLayout>{children}</PageLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
