import { useTranslations } from 'next-intl';

import Container from '@/components/container';
import Heading2 from '@/components/headings/heading-2';

export default function Loading() {
  const t = useTranslations('Loading');

  return (
    <Container className="text-center">
      <Heading2 className="m-10">{t('title')}</Heading2>
    </Container>
  );
}
