import Footer from '@/components/footer';
import Header from '@/components/header';
import clsx from 'clsx';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { Prompt } from 'next/font/google';
import { ReactNode } from 'react';

const prompt = Prompt({
  subsets: ['latin'],
  weight: '400'
});

type Props = {
  children: ReactNode;
  params: { locale: string };
};

// export function generateStaticParams() {
//   return locales.map(locale => ({ locale }));
// }
//
// export async function generateMetadata({ params: { locale } }: Omit<Props, 'children'>) {
//   const t = await getTranslations({ locale, namespace: 'LocaleLayout' });
//
//   return {
//     title: t('title')
//   };
// }

export default function LocaleLayout({ children, params: { locale } }: Props) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body className={clsx(prompt.className)}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="wrapper">
            <div className="page-header">
              <Header />
            </div>
            <main className="page-body">{children}</main>
            <div className="page-footer">
              <Footer />
            </div>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
