import { useTranslations } from 'next-intl';

import Container from '@/components/container';
import Heading2 from '@/components/headings/heading-2';

export default function NotFound() {
  const t = useTranslations('NotFound');

  return (
    <html lang="en">
      <body>
        <Container className="text-center flex flex-col justify-center h-full">
          <p className="text-blue-2">{t('subtitle')}</p>
          <Heading2 className="my-8">{t('title')}</Heading2>
          <p className="mb-10">{t('description')}</p>
          <div className="flex gap-2 justify-center"></div>
        </Container>
      </body>
    </html>
  );
}
