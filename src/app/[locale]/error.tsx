'use client';

import { Button } from '@nextui-org/react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import Container from '@/components/container';
import Heading2 from '@/components/headings/heading-2';

type Props = {
  error: Error & { digest?: string };
  reset(): void;
};

export default function Error({ error, reset }: Props) {
  const t = useTranslations('Error');
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  function redirect() {
    router.push('/');
  }

  return (
    <Container className="text-center m-10">
      <p className="text-palatinate-blue">{t('title')}</p>
      <Heading2 className="my-8">{error.message}</Heading2>
      <p className="mb-10">{t('description')}</p>
      <div className="flex gap-2 justify-center">
        <Button
          variant="ghost"
          size="lg"
          color="primary"
          radius="sm"
          className="border-palatinate-blue text-palatinate-blue"
          onClick={reset}>
          {t('reset')}
        </Button>
        <Button variant="ghost" size="lg" radius="sm" className="" onClick={redirect}>
          {t('home')}
        </Button>
      </div>
    </Container>
  );
}
