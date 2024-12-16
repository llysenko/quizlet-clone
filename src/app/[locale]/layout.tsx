import { ReactNode } from 'react';
import { Prompt } from 'next/font/google';
import clsx from 'clsx';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

import PageLayout from '@/components/page-layout';

import { getUser } from '@/features/auth/db/queries';

const prompt = Prompt({ subsets: ['latin'], weight: '400' });

export default async function LocaleLayout({ children }: { children: ReactNode }) {
  const locale = await getLocale();
  const messages = await getMessages();
  const user = await getUser();

  return (
    <html lang={locale}>
      <body className={clsx(prompt.className)}>
        <NextIntlClientProvider messages={messages}>
          <PageLayout user={user}>{children}</PageLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
